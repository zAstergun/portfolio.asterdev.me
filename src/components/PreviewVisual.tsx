import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowsOut,
  X,
  Plus,
  Minus,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import type { Language } from "../data/aster";

export interface PreviewVisualProps {
  src: string;
  alt: string;
  isDesktop?: boolean;
  isClosing?: boolean;
  isDark?: boolean;
  language?: Language;
  className?: string;
}

export function PreviewVisual({
  src,
  alt,
  isDark,
  language = "br",
  className = "",
}: PreviewVisualProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Zoom & Pan state
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Gesture tracking refs
  const lastTouchRef = useRef<{ x: number; y: number } | null>(null);
  const lastDistRef = useRef<number | null>(null);
  const lastTapTimeRef = useRef<number>(0);
  const dragDistRef = useRef<number>(0);

  const isPt = language === "br" || language === "pt";

  useEffect(() => {
    // Lazy mount after entry transition finishes
    const timer = setTimeout(() => setShouldRender(true), 250);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll and listen for Escape key when lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  // Clamp pan position to prevent image from escaping viewport bounds
  const clampPosition = useCallback((newX: number, newY: number, newScale: number) => {
    if (newScale <= 1 || !containerRef.current || !imageRef.current) {
      return { x: 0, y: 0 };
    }
    const cRect = containerRef.current.getBoundingClientRect();
    const img = imageRef.current;

    const baseW = img.offsetWidth || cRect.width * 0.9;
    const baseH = img.offsetHeight || cRect.height * 0.75;

    const scaledW = baseW * newScale;
    const scaledH = baseH * newScale;

    const maxX = Math.max(0, (scaledW - cRect.width) / 2);
    const maxY = Math.max(0, (scaledH - cRect.height) / 2);

    return {
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY)),
    };
  }, []);

  // Reset zoom & pan
  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Step zoom in
  const zoomIn = useCallback(() => {
    setScale((prev) => {
      const next = Math.min(3.5, Math.round((prev + 0.5) * 10) / 10);
      setPosition((pos) => clampPosition(pos.x, pos.y, next));
      return next;
    });
  }, [clampPosition]);

  // Step zoom out
  const zoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(1, Math.round((prev - 0.5) * 10) / 10);
      if (next <= 1) {
        setPosition({ x: 0, y: 0 });
        return 1;
      }
      setPosition((pos) => clampPosition(pos.x, pos.y, next));
      return next;
    });
  }, [clampPosition]);

  // Double tap handler: smooth toggle between 1x and 2.2x at tap origin
  const handleDoubleTap = useCallback(
    (clientX: number, clientY: number) => {
      if (scale > 1.2) {
        resetZoom();
      } else {
        const targetScale = 2.2;
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const offsetX = (centerX - clientX) * (targetScale - 1);
          const offsetY = (centerY - clientY) * (targetScale - 1);
          setScale(targetScale);
          setPosition(clampPosition(offsetX, offsetY, targetScale));
        } else {
          setScale(targetScale);
        }
      }
    },
    [scale, resetZoom, clampPosition]
  );

  // Touch gesture handlers (Pinch-to-zoom, Pan, Double-tap)
  const handleTouchStart = (e: React.TouchEvent) => {
    dragDistRef.current = 0;

    if (e.touches.length === 2) {
      // Pinch started
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      lastDistRef.current = dist;
      setIsDragging(true);
    } else if (e.touches.length === 1) {
      // Check for double tap
      const now = Date.now();
      const timeDiff = now - lastTapTimeRef.current;
      if (timeDiff < 300) {
        handleDoubleTap(e.touches[0].clientX, e.touches[0].clientY);
        lastTapTimeRef.current = 0;
        return;
      }
      lastTapTimeRef.current = now;

      lastTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };

      if (scale > 1) {
        setIsDragging(true);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastDistRef.current !== null) {
      // Pinch zooming
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / lastDistRef.current;
      lastDistRef.current = dist;

      setScale((prevScale) => {
        const nextScale = Math.min(3.5, Math.max(1, prevScale * factor));
        setPosition((prevPos) => clampPosition(prevPos.x, prevPos.y, nextScale));
        return nextScale;
      });
    } else if (e.touches.length === 1 && lastTouchRef.current && scale > 1) {
      // Single finger panning when zoomed in
      const deltaX = e.touches[0].clientX - lastTouchRef.current.x;
      const deltaY = e.touches[0].clientY - lastTouchRef.current.y;
      dragDistRef.current += Math.hypot(deltaX, deltaY);

      lastTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };

      setPosition((prevPos) =>
        clampPosition(prevPos.x + deltaX, prevPos.y + deltaY, scale)
      );
    }
  };

  const handleTouchEnd = () => {
    lastDistRef.current = null;
    lastTouchRef.current = null;
    setIsDragging(false);

    // If pinched below 1.05, bounce back to exact 1x
    if (scale <= 1.05) {
      resetZoom();
    }
  };

  // Mouse drag handlers for desktop mouse users
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragDistRef.current = 0;
    if (scale > 1) {
      setIsDragging(true);
      lastTouchRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !lastTouchRef.current || scale <= 1) return;
    const deltaX = e.clientX - lastTouchRef.current.x;
    const deltaY = e.clientY - lastTouchRef.current.y;
    dragDistRef.current += Math.hypot(deltaX, deltaY);

    lastTouchRef.current = { x: e.clientX, y: e.clientY };
    setPosition((prev) => clampPosition(prev.x + deltaX, prev.y + deltaY, scale));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    lastTouchRef.current = null;
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.002;
    setScale((prev) => {
      const nextScale = Math.min(3.5, Math.max(1, prev + delta));
      if (nextScale <= 1) {
        setPosition({ x: 0, y: 0 });
        return 1;
      }
      setPosition((prevPos) => clampPosition(prevPos.x, prevPos.y, nextScale));
      return nextScale;
    });
  };

  return (
    <>
      {/* ─── Preview Card Thumbnail ─── */}
      <div
        onClick={() => loaded && setIsLightboxOpen(true)}
        className={`relative group overflow-hidden w-full rounded-2xl border transition-colors duration-500 select-none ${
          loaded ? "cursor-pointer" : ""
        } ${
          isDark
            ? "bg-stone-800/40 border-stone-700/50 hover:border-stone-500/60"
            : "bg-aster-dark/[0.04] border-aster-dark/10 hover:border-aster-dark/25"
        } ${!loaded ? "aspect-[16/9]" : ""} ${className}`}
        style={{ transform: "translateZ(0)" }}
        role="button"
        tabIndex={0}
        aria-label={isPt ? "Expandir imagem de preview" : "Expand preview image"}
        onKeyDown={(e) => {
          if (loaded && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setIsLightboxOpen(true);
          }
        }}
      >
        {shouldRender && (
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            className={`w-full h-auto block transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Floating Expand Pill Indicator */}
        {loaded && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white text-[11px] font-medium shadow-lg transition-all duration-200 group-hover:scale-105 active:scale-95">
            <ArrowsOut weight="bold" className="w-3.5 h-3.5" />
            <span>{isPt ? "Expandir" : "Expand"}</span>
          </div>
        )}
      </div>

      {/* ─── High-Responsiveness Mobile Lightbox Modal ─── */}
      {isLightboxOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-2 sm:p-5 animate-fade-in select-none"
            onClick={() => {
              if (dragDistRef.current < 5) {
                setIsLightboxOpen(false);
              }
            }}
          >
            {/* Lightbox Top Header */}
            <div
              className="flex items-center justify-between gap-3 w-full max-w-5xl mx-auto px-2 py-2 shrink-0 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-white/90 min-w-0">
                <span className="text-xs sm:text-sm font-semibold truncate tracking-tight">
                  {alt}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all cursor-pointer shadow-lg"
                aria-label={isPt ? "Fechar" : "Close"}
              >
                <X weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Gesture-Driven Zoom & Pan Viewport */}
            <div
              ref={containerRef}
              className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden touch-none my-auto"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onWheel={handleWheel}
              onClick={(e) => {
                if (e.target === containerRef.current && dragDistRef.current < 5) {
                  setIsLightboxOpen(false);
                }
              }}
            >
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                draggable={false}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  handleDoubleTap(e.clientX, e.clientY);
                }}
                style={{
                  transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "transform",
                }}
                className={`max-w-[92vw] max-h-[72vh] object-contain select-none pointer-events-auto rounded-xl shadow-2xl ${
                  scale > 1
                    ? isDragging
                      ? "cursor-grabbing"
                      : "cursor-grab"
                    : "cursor-zoom-in"
                }`}
              />
            </div>

            {/* Floating Mobile-Responsive Zoom Control Dock */}
            <div
              className="w-full flex flex-col items-center justify-center gap-1.5 py-2 shrink-0 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-900/90 border border-white/15 backdrop-blur-xl shadow-2xl">
                {/* Zoom Out Button */}
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={scale <= 1}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    scale <= 1
                      ? "opacity-35 cursor-not-allowed text-white/50"
                      : "hover:bg-white/15 active:scale-95 text-white cursor-pointer"
                  }`}
                  aria-label={isPt ? "Diminuir zoom" : "Zoom out"}
                >
                  <Minus weight="bold" className="w-3.5 h-3.5" />
                </button>

                {/* Percentage Indicator / Tap to Reset */}
                <button
                  type="button"
                  onClick={resetZoom}
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer select-none"
                  title={isPt ? "Toque para redefinir" : "Tap to reset"}
                >
                  {Math.round(scale * 100)}%
                </button>

                {/* Zoom In Button */}
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={scale >= 3.5}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    scale >= 3.5
                      ? "opacity-35 cursor-not-allowed text-white/50"
                      : "hover:bg-white/15 active:scale-95 text-white cursor-pointer"
                  }`}
                  aria-label={isPt ? "Aumentar zoom" : "Zoom in"}
                >
                  <Plus weight="bold" className="w-3.5 h-3.5" />
                </button>

                <div className="w-[1px] h-4 bg-white/20 mx-1" />

                {/* Reset 1x Button */}
                <button
                  type="button"
                  onClick={resetZoom}
                  disabled={scale === 1}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    scale === 1
                      ? "opacity-35 cursor-not-allowed text-white/50"
                      : "hover:bg-white/15 active:scale-95 text-white cursor-pointer"
                  }`}
                  title={isPt ? "Redefinir tamanho normal" : "Reset normal size"}
                  aria-label={isPt ? "Redefinir tamanho" : "Reset size"}
                >
                  <ArrowCounterClockwise weight="bold" className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Interaction Hint */}
              <span className="text-[10px] sm:text-xs text-white/45 tracking-wide select-none">
                {scale > 1
                  ? isPt
                    ? "Arraste para mover · Toque duplo para redefinir"
                    : "Drag to pan · Double-tap to reset"
                  : isPt
                  ? "Toque duplo ou use dois dedos para zoom"
                  : "Double-tap or pinch to zoom"}
              </span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
