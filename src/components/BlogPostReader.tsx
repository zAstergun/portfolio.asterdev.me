import { useState, useRef, useEffect, useMemo } from "react";
import {
  ArrowLeft,
  CalendarBlank,
  Clock,
  ShareNetwork,
  Check,
  Lightbulb,
  Cpu,
  Target,
  ArrowSquareOut,
  Sparkle,
  GithubLogo,
  Globe,
  GameController,
  BookBookmark,
  Tag,
} from "@phosphor-icons/react";
import type { BlogPostItem, PostThemeColor } from "../data/blogData";
import { getBlogPosts, renderFormattedText, getBlogUIStrings } from "../data/blogData";
import type { Language } from "../data/aster";
import { CodeBlock } from "./CodeBlock";
import { ArticleImage } from "./ArticleImage";

export function getPostTheme(themeName?: PostThemeColor | string, postId?: string) {
  let resolved = themeName;
  if (!resolved && postId) {
    if (postId.includes("idealcalc") || postId.includes("ideal-calculator")) resolved = "rose";
    else if (postId.includes("studioos")) resolved = "amber";
    else if (postId.includes("microinteractions") || postId.includes("soulfighter")) resolved = "emerald";
    else resolved = "amber";
  }

  switch (resolved) {
    case "cyan":
      return {
        accentHex: "#0ea5e9",
        activeText: "text-sky-600 dark:text-sky-400",
        subHighlightText: "text-sky-800 dark:text-sky-300",
        activeBar: "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]",
        subtleBar: "bg-sky-500/40 dark:bg-sky-400/35",
        badge: (isDark: boolean) =>
          isDark
            ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
            : "bg-sky-100 text-sky-800 border border-sky-200",
        highlightLabel: "text-sky-600 dark:text-sky-400",
        bullet: "bg-sky-400",
        icon: "text-sky-500 dark:text-sky-400",
      };
    case "emerald":
      return {
        accentHex: "#10b981",
        activeText: "text-emerald-600 dark:text-emerald-400",
        subHighlightText: "text-emerald-800 dark:text-emerald-300",
        activeBar: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
        subtleBar: "bg-emerald-500/40 dark:bg-emerald-400/35",
        badge: (isDark: boolean) =>
          isDark
            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
            : "bg-emerald-100 text-emerald-800 border border-emerald-200",
        highlightLabel: "text-emerald-600 dark:text-emerald-400",
        bullet: "bg-emerald-400",
        icon: "text-emerald-500 dark:text-emerald-400",
      };
    case "violet":
      return {
        accentHex: "#8b5cf6",
        activeText: "text-violet-600 dark:text-violet-400",
        subHighlightText: "text-violet-800 dark:text-violet-300",
        activeBar: "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]",
        subtleBar: "bg-violet-500/40 dark:bg-violet-400/35",
        badge: (isDark: boolean) =>
          isDark
            ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
            : "bg-violet-100 text-violet-800 border border-violet-200",
        highlightLabel: "text-violet-600 dark:text-violet-400",
        bullet: "bg-violet-400",
        icon: "text-violet-500 dark:text-violet-400",
      };
    case "rose":
      return {
        accentHex: "#f43f5e",
        activeText: "text-rose-600 dark:text-rose-400",
        subHighlightText: "text-rose-800 dark:text-rose-300",
        activeBar: "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]",
        subtleBar: "bg-rose-500/40 dark:bg-rose-400/35",
        badge: (isDark: boolean) =>
          isDark
            ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
            : "bg-rose-100 text-rose-800 border border-rose-200",
        highlightLabel: "text-rose-600 dark:text-rose-400",
        bullet: "bg-rose-400",
        icon: "text-rose-500 dark:text-rose-400",
      };
    default: // amber
      return {
        accentHex: "#f59e0b",
        activeText: "text-amber-600 dark:text-amber-400",
        subHighlightText: "text-amber-800 dark:text-amber-300",
        activeBar: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
        subtleBar: "bg-amber-500/40 dark:bg-amber-400/35",
        badge: (isDark: boolean) =>
          isDark
            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
            : "bg-amber-100 text-amber-800 border border-amber-200",
        highlightLabel: "text-amber-600 dark:text-amber-400",
        bullet: "bg-amber-400",
        icon: "text-amber-500 dark:text-amber-400",
      };
  }
}

export function getPostCardTheme(
  themeName?: PostThemeColor | string,
  postId?: string,
  isDark: boolean = false
) {
  let resolved = themeName;
  if (!resolved && postId) {
    if (postId.includes("idealcalc") || postId.includes("ideal-calculator")) resolved = "rose";
    else if (postId.includes("studioos")) resolved = "amber";
    else if (postId.includes("microinteractions") || postId.includes("soulfighter")) resolved = "emerald";
    else resolved = "amber";
  }

  switch (resolved) {
    case "cyan":
      return {
        label: "text-sky-600 dark:text-sky-400",
        badge: isDark
          ? "bg-sky-500/15 text-sky-400 border-sky-500/30"
          : "bg-sky-50 text-sky-700 border-sky-200",
        hoverBorder: isDark ? "hover:border-sky-400/70" : "hover:border-sky-500/70",
        hoverShadow: isDark
          ? "hover:shadow-[0_4px_16px_rgba(14,165,233,0.18)]"
          : "hover:shadow-[0_4px_16px_rgba(14,165,233,0.12)]",
        hoverTitle: "group-hover/op:text-sky-600 dark:group-hover/op:text-sky-400",
      };
    case "emerald":
      return {
        label: "text-emerald-600 dark:text-emerald-400",
        badge: isDark
          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
          : "bg-emerald-50 text-emerald-700 border-emerald-200",
        hoverBorder: isDark ? "hover:border-emerald-400/70" : "hover:border-emerald-500/70",
        hoverShadow: isDark
          ? "hover:shadow-[0_4px_16px_rgba(16,185,129,0.18)]"
          : "hover:shadow-[0_4px_16px_rgba(16,185,129,0.12)]",
        hoverTitle: "group-hover/op:text-emerald-600 dark:group-hover/op:text-emerald-400",
      };
    case "violet":
      return {
        label: "text-purple-600 dark:text-purple-400",
        badge: isDark
          ? "bg-purple-500/15 text-purple-400 border-purple-500/30"
          : "bg-purple-50 text-purple-700 border-purple-200",
        hoverBorder: isDark ? "hover:border-purple-400/70" : "hover:border-purple-500/70",
        hoverShadow: isDark
          ? "hover:shadow-[0_4px_16px_rgba(168,85,247,0.18)]"
          : "hover:shadow-[0_4px_16px_rgba(168,85,247,0.12)]",
        hoverTitle: "group-hover/op:text-purple-600 dark:group-hover/op:text-purple-400",
      };
    case "rose":
      return {
        label: "text-rose-600 dark:text-rose-400",
        badge: isDark
          ? "bg-rose-500/15 text-rose-400 border-rose-500/30"
          : "bg-rose-50 text-rose-700 border-rose-200",
        hoverBorder: isDark ? "hover:border-rose-400/70" : "hover:border-rose-500/70",
        hoverShadow: isDark
          ? "hover:shadow-[0_4px_16px_rgba(244,63,94,0.18)]"
          : "hover:shadow-[0_4px_16px_rgba(244,63,94,0.12)]",
        hoverTitle: "group-hover/op:text-rose-600 dark:group-hover/op:text-rose-400",
      };
    case "orange":
      return {
        label: "text-orange-600 dark:text-orange-400",
        badge: isDark
          ? "bg-orange-500/15 text-orange-400 border-orange-500/30"
          : "bg-orange-50 text-orange-700 border-orange-200",
        hoverBorder: isDark ? "hover:border-orange-400/70" : "hover:border-orange-500/70",
        hoverShadow: isDark
          ? "hover:shadow-[0_4px_16px_rgba(249,115,22,0.18)]"
          : "hover:shadow-[0_4px_16px_rgba(249,115,22,0.12)]",
        hoverTitle: "group-hover/op:text-orange-600 dark:group-hover/op:text-orange-400",
      };
    default: // amber
      return {
        label: "text-amber-600 dark:text-amber-400",
        badge: isDark
          ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
          : "bg-amber-50 text-amber-700 border-amber-200",
        hoverBorder: isDark ? "hover:border-amber-400/70" : "hover:border-amber-500/70",
        hoverShadow: isDark
          ? "hover:shadow-[0_4px_16px_rgba(245,158,11,0.18)]"
          : "hover:shadow-[0_4px_16px_rgba(245,158,11,0.12)]",
        hoverTitle: "group-hover/op:text-amber-600 dark:group-hover/op:text-amber-400",
      };
  }
}

interface BlogPostReaderProps {
  post: BlogPostItem;
  isDesktop?: boolean;
  onClose: () => void;
  onSelectPost?: (post: BlogPostItem) => void;
  isDark?: boolean;
  language?: Language;
  ui?: any;
}

export function BlogPostReader({
  post,
  isDesktop = false,
  onClose,
  onSelectPost,
  isDark = false,
  language = "br",
  ui,
}: BlogPostReaderProps) {
  const isPt = language === "br" || language === "pt";
  const blogUI = getBlogUIStrings(language);
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>("section-intro");
  const [visibleSectionIds, setVisibleSectionIds] = useState<Set<string>>(() => new Set(["section-intro"]));
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showStickyTitle, setShowStickyTitle] = useState<boolean>(false);

  const theme = getPostTheme(post.themeColor, post.id);

  const allPosts = getBlogPosts(language);

  // Compute previous and next post relative to the current post in list
  interface NavSuggestion {
    post: BlogPostItem;
    label: string;
    isNext: boolean;
  }

  const suggestedPosts: NavSuggestion[] = useMemo(() => {
    if (allPosts.length <= 1) return [];

    const idx = allPosts.findIndex((p) => p.id === post.id);
    if (idx === -1) return [];

    const total = allPosts.length;
    const prevIdx = (idx - 1 + total) % total;
    const nextIdx = (idx + 1) % total;

    const list: NavSuggestion[] = [];

    if (total === 2) {
      list.push({
        post: allPosts[nextIdx],
        label: idx === 0 ? blogUI.nextArticle : blogUI.prevArticle,
        isNext: idx === 0,
      });
      return list;
    }

    // When at index 0 (first post), show next first, then previous
    if (idx === 0) {
      list.push({
        post: allPosts[nextIdx],
        label: blogUI.nextArticle,
        isNext: true,
      });
      list.push({
        post: allPosts[prevIdx],
        label: blogUI.prevArticle,
        isNext: false,
      });
      return list;
    }

    // Otherwise show previous first, then next
    list.push({
      post: allPosts[prevIdx],
      label: blogUI.prevArticle,
      isNext: false,
    });
    list.push({
      post: allPosts[nextIdx],
      label: blogUI.nextArticle,
      isNext: true,
    });

    return list;
  }, [allPosts, post.id, blogUI]);

  interface TocSubtopic {
    id: string;
    title: string;
  }

  interface TocTopicGroup {
    id: string;
    title: string;
    subtopics?: TocSubtopic[];
  }

  // Build grouped Table of Contents items with support for topics and collapsible subtopics
  const tocGroups: TocTopicGroup[] = useMemo(() => {
    const list: TocTopicGroup[] = [
      {
        id: "section-intro",
        title: blogUI.introAndHighlights,
      },
    ];

    post.sections.forEach((section, idx) => {
      const mainSectionId = `section-${idx}`;
      const subs: TocSubtopic[] = [];

      if (section.subsections && section.subsections.length > 0) {
        section.subsections.forEach((sub, subIdx) => {
          if (sub.heading) {
            subs.push({
              id: `section-${idx}-${subIdx}`,
              title: sub.heading.replace(/^(\d+(\.\d+)?|Subtópico\s+\d+(\.\d+)?|Subtopic\s+\d+(\.\d+)?)[\.\:\-]?\s*/i, ""),
            });
          }
        });
      }

      if (section.heading) {
        list.push({
          id: mainSectionId,
          title: section.heading.replace(/^\d+[\.\)]\s*/, ""),
          subtopics: subs.length > 0 ? subs : undefined,
        });
      }
    });

    if (post.links && post.links.length > 0) {
      list.push({
        id: "section-links",
        title: blogUI.resourcesAndLinks,
      });
    }

    return list;
  }, [post.sections, post.links, blogUI]);

  // All section & subsection IDs for the scroll spy
  const allSectionIds = useMemo(() => {
    const ids: string[] = [];
    for (const group of tocGroups) {
      ids.push(group.id);
      if (group.subtopics) {
        for (const sub of group.subtopics) {
          ids.push(sub.id);
        }
      }
    }
    return ids;
  }, [tocGroups]);

  // Computes the parent topic ID currently in highlight/focus
  const activeParentId = useMemo(() => {
    const match = activeSectionId.match(/^(section-\d+)(?:-\d+)?$/);
    if (match) return match[1];
    return activeSectionId;
  }, [activeSectionId]);

  // Scroll to section smoothly within the reader container
  const scrollToSection = (id: string) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const target = container.querySelector<HTMLElement>(`[data-section-id="${id}"]`);
    if (!target) return;

    const targetRect = target.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const relativeTop = targetRect.top - containerRect.top + container.scrollTop;
    const targetScrollTop = Math.max(0, relativeTop - 24);

    container.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
    setActiveSectionId(id);
    setVisibleSectionIds(new Set([id]));
  };

  // Scroll spy effect: detect all visible sections and highlight the most prominent one
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sectionIds = allSectionIds;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setShowStickyTitle(scrollTop > 60);

      const maxScroll = container.scrollHeight - container.clientHeight;
      const progress =
        maxScroll > 0
          ? Math.min(100, Math.max(0, Math.round((scrollTop / maxScroll) * 100)))
          : 0;
      setScrollProgress(progress);

      if (!isDesktop) return;

      const containerRect = container.getBoundingClientRect();
      const cH = containerRect.height;
      if (cH <= 0) return;

      // Reading focal line: the line in the viewport where the user's eyes naturally rest
      const readingLine = containerRect.top + Math.min(140, cH * 0.22);
      const focusTop = containerRect.top + cH * 0.1;
      const focusBottom = containerRect.top + cH * 0.7;

      const visibleIds = new Set<string>();
      let bestId = sectionIds[0];
      let maxScore = -1;

      for (const id of sectionIds) {
        const el = container.querySelector<HTMLElement>(`[data-section-id="${id}"]`);
        if (el) {
          const rect = el.getBoundingClientRect();

          // Total pixels visible in the container viewport
          const vTop = Math.max(containerRect.top, rect.top);
          const vBottom = Math.min(containerRect.bottom, rect.bottom);
          const visiblePx = Math.max(0, vBottom - vTop);

          // Pixels overlapping the reading focal zone
          const fTop = Math.max(focusTop, rect.top);
          const fBottom = Math.min(focusBottom, rect.bottom);
          const focusPx = Math.max(0, fBottom - fTop);

          if (visiblePx > 30) {
            visibleIds.add(id);
          }

          // Prioritize the element whose heading/body contains the reading line
          const containsReadingLine = rect.top <= readingLine && rect.bottom >= readingLine;
          const proximityToReadingLine = Math.max(0, 300 - Math.abs(rect.top - readingLine));

          const score = (containsReadingLine ? 5000 : 0) + focusPx * 3 + visiblePx + proximityToReadingLine;
          if (score > maxScore) {
            maxScore = score;
            bestId = id;
          }
        }
      }

      visibleIds.add(bestId);
      setVisibleSectionIds(visibleIds);
      setActiveSectionId(bestId);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop, post.id, allSectionIds]);

  // Reset scroll position and active section when post changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0 });
    }
    setActiveSectionId("section-intro");
    setVisibleSectionIds(new Set(["section-intro"]));
    setScrollProgress(0);
    setShowStickyTitle(false);
  }, [post.id]);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Fallback
    }
  };

  const getCalloutStyles = (type?: "insight" | "tech" | "tip" | "challenge") => {
    switch (type) {
      case "insight":
        return {
          icon: <Lightbulb weight="fill" className="w-4 h-4 text-amber-400 shrink-0" />,
          border: isDark ? "border-amber-500/30 bg-amber-500/10" : "border-amber-400/40 bg-amber-50/80",
          titleColor: isDark ? "text-amber-300" : "text-amber-900",
          textColor: isDark ? "text-stone-300" : "text-stone-700",
        };
      case "tech":
        return {
          icon: <Cpu weight="fill" className="w-4 h-4 text-cyan-400 shrink-0" />,
          border: isDark ? "border-cyan-500/30 bg-cyan-500/10" : "border-cyan-400/40 bg-cyan-50/80",
          titleColor: isDark ? "text-cyan-300" : "text-cyan-900",
          textColor: isDark ? "text-stone-300" : "text-stone-700",
        };
      case "challenge":
        return {
          icon: <Target weight="fill" className="w-4 h-4 text-rose-400 shrink-0" />,
          border: isDark ? "border-rose-500/30 bg-rose-500/10" : "border-rose-400/40 bg-rose-50/80",
          titleColor: isDark ? "text-rose-300" : "text-rose-900",
          textColor: isDark ? "text-stone-300" : "text-stone-700",
        };
      default:
        return {
          icon: <Sparkle weight="fill" className="w-4 h-4 text-emerald-400 shrink-0" />,
          border: isDark ? "border-emerald-500/30 bg-emerald-500/10" : "border-emerald-400/40 bg-emerald-50/80",
          titleColor: isDark ? "text-emerald-300" : "text-emerald-900",
          textColor: isDark ? "text-stone-300" : "text-stone-700",
        };
    }
  };

  const getLinkIcon = (iconName?: string) => {
    switch (iconName) {
      case "github":
        return <GithubLogo weight="bold" className="w-4 h-4" />;
      case "gamepad":
        return <GameController weight="bold" className="w-4 h-4" />;
      case "globe":
        return <Globe weight="bold" className="w-4 h-4" />;
      default:
        return <ArrowSquareOut weight="bold" className="w-4 h-4" />;
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className={`w-full h-full overflow-y-auto detail-scroll-area select-text font-sans transition-colors duration-500 flex flex-col ${
        isDark ? "dark bg-stone-900 text-stone-100" : "bg-aster-beige text-stone-900"
      }`}
    >
      {/* ─── Top Bar with Safe Notch Padding ─── */}
      <header
        className={`sticky top-0 z-30 shrink-0 flex items-center justify-between backdrop-blur-md border-b transition-colors duration-500 ${
          isDesktop ? "px-8 py-3.5" : "px-4 @tablet:px-6 pt-12 pb-2.5"
        } ${
          isDark
            ? "bg-stone-900/90 border-stone-800 text-stone-200"
            : "bg-aster-beige/90 border-stone-200/80 text-stone-800"
        }`}
      >
        {/* Back Button (Mobile only) */}
        {!isDesktop && (
          <button
            type="button"
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0 ${
              isDark
                ? "bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700/80"
                : "bg-aster-dark/[0.06] text-aster-dark/60 hover:bg-aster-dark/10"
            }`}
            aria-label={ui?.back || blogUI.backToBlog}
            title={blogUI.backToBlog}
          >
            <ArrowLeft weight="bold" className="w-4 h-4" />
          </button>
        )}

        {/* Center / Sticky Post Title (empty at top, animates in on scroll with ellipsis truncation) */}
        <div className="flex-1 min-w-0 flex items-center overflow-hidden px-2 sm:px-3">
          <div
            className={`min-w-0 w-full transition-all duration-300 ease-out transform ${
              showStickyTitle
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-2 pointer-events-none scale-[0.98]"
            }`}
          >
            <button
              type="button"
              onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
              className={`block w-full max-w-full text-left font-bold truncate tracking-tight cursor-pointer hover:opacity-75 transition-opacity ${
                isDesktop ? "text-sm sm:text-base font-extrabold" : "text-xs font-bold"
              } ${isDark ? "text-stone-100" : "text-stone-900"}`}
              title={post.name}
            >
              {post.name}
            </button>
          </div>
        </div>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className={`flex items-center justify-center transition-all cursor-pointer shrink-0 font-bold ${
            isDesktop
              ? `gap-1.5 px-3.5 py-1.5 rounded-full text-xs ${
                  copied
                    ? isDark
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-emerald-500 text-white shadow-md"
                    : isDark
                    ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30"
                    : "bg-amber-500 text-white hover:bg-amber-600 shadow-md"
                }`
              : `w-8 h-8 rounded-full ${
                  copied
                    ? isDark
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-emerald-500 text-white shadow-md"
                    : isDark
                    ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30"
                    : "bg-amber-500 text-white hover:bg-amber-600 shadow-md"
                }`
          }`}
          title={blogUI.copyLink}
          aria-label={blogUI.copyLink}
        >
          {copied ? (
            <>
              <Check weight="bold" className="w-3.5 h-3.5" />
              {isDesktop && (
                <span>{blogUI.copied}</span>
              )}
            </>
          ) : (
            <>
              <ShareNetwork weight="bold" className="w-3.5 h-3.5" />
              {isDesktop && (
                <span>{blogUI.share}</span>
              )}
            </>
          )}
        </button>
      </header>

      {/* ─── Layout Container ─── */}
      <div
        className={`flex-1 mx-auto w-full ${
          isDesktop ? "max-w-[1360px] px-6 lg:px-8 py-8" : "max-w-2xl px-4 py-5 @tablet:px-6"
        }`}
      >
        <div className={isDesktop ? "grid grid-cols-12 gap-6 lg:gap-8 items-start" : "space-y-5"}>
          {/* Desktop Left Sidebar: Sumário Minimalista (enscribe-style) */}
          {isDesktop && (
            <aside className="col-span-3 sticky top-[64px] max-h-[calc(100vh-140px)] flex flex-col select-none pr-3 pt-1">
              {/* Minimal header with reading progress circle */}
              <div className="flex items-center gap-2 mb-3.5 px-0.5 text-stone-600 dark:text-stone-400">
                <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 -rotate-90" viewBox="0 0 16 16">
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      fill="none"
                      strokeWidth="1.5"
                      className={isDark ? "stroke-stone-800" : "stroke-stone-300/80"}
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      fill="none"
                      strokeWidth="1.5"
                      strokeDasharray={37.7}
                      strokeDashoffset={37.7 - (37.7 * scrollProgress) / 100}
                      strokeLinecap="round"
                      style={{ stroke: theme.accentHex }}
                      className="transition-all duration-150"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] font-semibold">
                  {blogUI.onThisPage}
                </span>
                <span className="text-[10px] font-mono text-stone-600 dark:text-stone-400 ml-auto tabular-nums font-medium">
                  {scrollProgress}%
                </span>
              </div>

              {/* Minimalist Rail Navigation with Accordion Subtopics */}
              <nav className="relative pl-3.5 border-l border-stone-300 dark:border-stone-800 space-y-1 text-xs overflow-y-auto max-h-[calc(100vh-210px)] custom-scrollbar py-0.5">
                {tocGroups.map((group) => {
                  const isParentHighlighted = activeParentId === group.id;
                  const isDirectPrimary = activeSectionId === group.id;
                  const isVisible = visibleSectionIds.has(group.id);
                  const hasSubtopics = Boolean(group.subtopics && group.subtopics.length > 0);

                  return (
                    <div key={group.id} className="space-y-0.5">
                      {/* Main topic button */}
                      <button
                        type="button"
                        onClick={() => scrollToSection(group.id)}
                        className={`group relative w-full text-left transition-all duration-200 flex items-start cursor-pointer -ml-[15px] pl-3.5 py-1 ${
                          isDirectPrimary || (isParentHighlighted && !activeSectionId.includes("-"))
                            ? `${theme.activeText} font-bold`
                            : isParentHighlighted
                              ? `${theme.subHighlightText} font-semibold`
                              : isVisible
                                ? "text-stone-800 dark:text-stone-200 font-medium"
                                : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 font-normal"
                        }`}
                        title={group.title}
                      >
                        {/* Active / visible indicator bar on the rail */}
                        <span
                          className={`absolute left-0 rounded-full transition-all duration-200 ${
                            isDirectPrimary || (isParentHighlighted && !activeSectionId.includes("-"))
                              ? `top-1 bottom-1 w-[2.5px] ${theme.activeBar} opacity-100 scale-y-100`
                              : isParentHighlighted
                                ? `top-1.5 bottom-1.5 w-[2px] ${theme.subtleBar} opacity-100 scale-y-90`
                                : isVisible
                                  ? `top-1.5 bottom-1.5 w-[2px] ${theme.subtleBar} opacity-100 scale-y-90`
                                  : "top-1.5 bottom-1.5 w-[2px] bg-transparent opacity-0 scale-y-0 group-hover:bg-stone-400/50 dark:group-hover:bg-stone-700 group-hover:opacity-100 group-hover:scale-y-75"
                          }`}
                        />
                        <span className="line-clamp-2 leading-relaxed text-[12px] flex-1">
                          {group.title}
                        </span>
                        {hasSubtopics && (
                          <span
                            className={`text-[10px] font-mono leading-none transition-transform duration-200 ml-1.5 mt-0.5 shrink-0 ${
                              isParentHighlighted
                                ? `rotate-90 ${theme.activeText} font-bold`
                                : "text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200"
                            }`}
                          >
                            ›
                          </span>
                        )}
                      </button>

                      {/* Subtopics: Ocultos até o tópico principal ficar em destaque */}
                      {hasSubtopics && isParentHighlighted && (
                        <div className="space-y-0.5 pl-2 py-0.5 transition-all duration-300">
                          {group.subtopics!.map((sub) => {
                            const isSubPrimary = activeSectionId === sub.id;

                            return (
                              <button
                                key={sub.id}
                                type="button"
                                onClick={() => scrollToSection(sub.id)}
                                className={`group/sub relative w-full text-left transition-all duration-150 flex items-start cursor-pointer pl-2.5 py-0.5 text-[11px] ${
                                  isSubPrimary
                                    ? `${theme.subHighlightText} font-bold`
                                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 font-normal"
                                }`}
                                title={sub.title}
                              >
                                <span className={`mr-1.5 select-none shrink-0 font-mono text-[10px] leading-tight mt-0.5 ${
                                  isSubPrimary
                                    ? `${theme.subHighlightText} font-bold`
                                    : "text-stone-500 dark:text-stone-400 group-hover/sub:text-stone-800 dark:group-hover/sub:text-stone-200"
                                }`}>
                                  ↳
                                </span>
                                <span className="line-clamp-2 leading-relaxed flex-1">
                                  {sub.title}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </aside>
          )}

          {/* Center Column: Main Article Body */}
          <main className={isDesktop ? "col-span-6 space-y-6 w-full max-w-[640px] mx-auto" : "space-y-4"}>
            {/* Intro and Headings wrapper (Target for section-intro) */}
            <div id="section-intro" data-section-id="section-intro" className="space-y-6 scroll-mt-20">
              {/* Meta badges: Category, Date, Read Time */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
              <span
                className={`font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md ${
                  theme.badge(isDark)
                }`}
              >
                {post.category}
              </span>

              <span
                className={`flex items-center gap-1 font-medium ${
                  isDark ? "text-stone-400" : "text-stone-500"
                }`}
              >
                <CalendarBlank weight="bold" className="w-3.5 h-3.5 text-stone-400" />
                {post.date}
              </span>

              <span className={isDark ? "text-stone-600" : "text-stone-300"}>•</span>

              <span
                className={`flex items-center gap-1 font-medium ${
                  isDark ? "text-stone-400" : "text-stone-500"
                }`}
              >
                <Clock weight="bold" className={`w-3.5 h-3.5 ${theme.icon}`} />
                {post.readTime}
              </span>
            </div>

            {/* Article Headline */}
            <h1
              className={`font-extrabold tracking-tight leading-snug transition-colors ${
                isDesktop ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
              } ${isDark ? "text-stone-100" : "text-stone-900"}`}
            >
              {post.name}
            </h1>

            {/* Tags row */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full transition-colors ${
                    isDark
                      ? "bg-stone-800 text-stone-300 border border-stone-700/60"
                      : "bg-stone-200/70 text-stone-700"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Cover Image with caption and expandable touch-responsive zoom lightbox */}
            {post.coverImage && (
              <ArticleImage
                src={post.coverImage}
                alt={post.name}
                caption={post.coverCaption}
                isDark={isDark}
                isPt={isPt}
                isCover={true}
                className="pt-1"
              />
            )}

            {/* Article TL;DR / Excerpt Summary Box */}
            <div
              className={`p-4 rounded-xl border leading-relaxed text-xs sm:text-sm transition-colors ${
                isDark
                  ? "bg-stone-800/60 border-stone-700/80 text-stone-300"
                  : "bg-white/80 border-stone-200/90 text-stone-700 shadow-sm"
              }`}
            >
              <span className={`font-bold ${theme.highlightLabel} uppercase tracking-wider text-[10px] sm:text-[11px] block mb-1`}>
                {blogUI.highlights}
              </span>
              <p className="font-medium italic">{renderFormattedText(post.summary, isDark)}</p>
            </div>
            </div>

            {/* Article Content Sections */}
            <div className="space-y-6 pt-2">
              {post.sections.map((section, sIdx) => (
                <section key={sIdx} className="space-y-3.5">
                  <div
                    id={`section-${sIdx}`}
                    data-section-id={`section-${sIdx}`}
                    className="space-y-3.5 scroll-mt-20"
                  >
                    {section.heading && (
                      <h2
                        className={`text-base sm:text-lg font-bold tracking-tight pt-3 border-t transition-colors ${
                          isDark ? "text-stone-100 border-stone-800/80" : "text-stone-900 border-stone-200"
                        }`}
                      >
                        {section.heading}
                      </h2>
                    )}

                    {section.paragraphs?.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className={`leading-relaxed text-xs sm:text-sm ${
                          isDark ? "text-stone-300" : "text-stone-700"
                        }`}
                      >
                        {renderFormattedText(para, isDark)}
                      </p>
                    ))}

                    {/* Bullet points */}
                    {section.bulletPoints && (
                      <ul className="space-y-2 my-2.5 pl-1">
                        {section.bulletPoints.map((bp, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <span className={`w-1.5 h-1.5 rounded-full ${theme.bullet} mt-1.5 shrink-0`} />
                            <span className={isDark ? "text-stone-300" : "text-stone-700"}>
                              {renderFormattedText(bp, isDark)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Callout Card */}
                    {section.callout && (() => {
                      const styles = getCalloutStyles(section.callout.type);
                      return (
                        <div
                          className={`p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 my-3 transition-colors ${styles.border}`}
                        >
                          {styles.icon}
                          <div className="space-y-1">
                            <h4 className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${styles.titleColor}`}>
                              {section.callout.title}
                            </h4>
                            <p className={`text-xs sm:text-sm leading-relaxed ${styles.textColor}`}>
                              {renderFormattedText(section.callout.text, isDark)}
                            </p>
                          </div>
                        </div>
                      );
                    })()}

                    {/* In-article figure image with zoomable lightbox */}
                    {section.image && (
                      <ArticleImage
                        src={section.image.src}
                        alt={section.image.alt}
                        caption={section.image.caption}
                        size={section.image.size}
                        isDark={isDark}
                        isPt={isPt}
                        className="my-4"
                      />
                    )}

                    {/* Code block */}
                    {section.codeBlock && (
                      <CodeBlock
                        code={section.codeBlock.code}
                        language={section.codeBlock.language}
                        filename={section.codeBlock.filename}
                        isPt={isPt}
                      />
                    )}
                  </div>

                  {/* Subsections if present */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-5 pt-3">
                      {section.subsections.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          id={`section-${sIdx}-${subIdx}`}
                          data-section-id={`section-${sIdx}-${subIdx}`}
                          className="space-y-3 pt-3 pl-3.5 sm:pl-4 border-l-2 border-amber-500/30 dark:border-amber-400/25 my-3 scroll-mt-20"
                        >
                          {sub.heading && (
                            <h3
                              className={`text-sm sm:text-base font-bold tracking-tight transition-colors flex items-center gap-2 ${
                                isDark ? "text-stone-200" : "text-stone-800"
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${theme.bullet} shrink-0`} />
                              {sub.heading}
                            </h3>
                          )}

                          {sub.paragraphs?.map((sPara, spIdx) => (
                            <p
                              key={spIdx}
                              className={`leading-relaxed text-xs sm:text-sm ${
                                isDark ? "text-stone-300" : "text-stone-700"
                              }`}
                            >
                              {renderFormattedText(sPara, isDark)}
                            </p>
                          ))}

                          {sub.bulletPoints && (
                            <ul className="space-y-2 my-2.5 pl-1">
                              {sub.bulletPoints.map((bp, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                                  <span className={`w-1.5 h-1.5 rounded-full ${theme.bullet} mt-1.5 shrink-0`} />
                                  <span className={isDark ? "text-stone-300" : "text-stone-700"}>
                                    {renderFormattedText(bp, isDark)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {sub.callout && (() => {
                            const subStyles = getCalloutStyles(sub.callout.type);
                            return (
                              <div
                                className={`p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 my-3 transition-colors ${subStyles.border}`}
                              >
                                {subStyles.icon}
                                <div className="space-y-1">
                                  <h4 className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${subStyles.titleColor}`}>
                                    {sub.callout.title}
                                  </h4>
                                  <p className={`text-xs sm:text-sm leading-relaxed ${subStyles.textColor}`}>
                                    {renderFormattedText(sub.callout.text, isDark)}
                                  </p>
                                </div>
                              </div>
                            );
                          })()}

                          {/* Subsection figure image with zoomable lightbox */}
                          {sub.image && (
                            <ArticleImage
                              src={sub.image.src}
                              alt={sub.image.alt}
                              caption={sub.image.caption}
                              size={sub.image.size}
                              isDark={isDark}
                              isPt={isPt}
                              className="my-4"
                            />
                          )}

                          {sub.codeBlock && (
                            <CodeBlock
                              code={sub.codeBlock.code}
                              language={sub.codeBlock.language}
                              filename={sub.codeBlock.filename}
                              isPt={isPt}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* External Links from Post */}
            {post.links.length > 0 && (
              <div
                id="section-links"
                data-section-id="section-links"
                className={`p-3.5 sm:p-4 rounded-xl border space-y-2.5 mt-6 scroll-mt-20 transition-colors ${
                  isDark ? "bg-stone-800/40 border-stone-700/60" : "bg-white/60 border-stone-200"
                }`}
              >
                <h3 className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                  {blogUI.postLinks}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                        isDark
                          ? "bg-stone-800 border-stone-700 hover:bg-stone-700 text-stone-200 hover:border-amber-400/50"
                          : "bg-white border-stone-200 hover:bg-stone-50 text-stone-800 hover:border-amber-500/50 shadow-sm"
                      }`}
                    >
                      {getLinkIcon(link.icon)}
                      <span>{link.title}</span>
                      <ArrowSquareOut weight="bold" className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Previous & Next Article Navigation */}
            {!isDesktop && suggestedPosts.length > 0 && (
              <div className="pt-5 border-t border-stone-700/20 space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-stone-400 block px-0.5">
                  {blogUI.continueReading}
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {suggestedPosts.map(({ post: op, label, isNext }) => {
                    const opTheme = getPostCardTheme(op.themeColor, op.id, isDark);
                    return (
                      <div
                        key={op.id}
                        onClick={() => onSelectPost?.(op)}
                        className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isDark
                            ? `bg-stone-800/80 border-stone-700/70 hover:bg-stone-800 ${opTheme.hoverBorder}`
                            : `bg-stone-50 border-stone-200 hover:bg-white ${opTheme.hoverBorder}`
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1.5 mb-1">
                          <span
                            className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border inline-flex items-center gap-1 ${opTheme.badge}`}
                          >
                            {!isNext && <span>←</span>}
                            <span>{label}</span>
                            {isNext && <span>→</span>}
                          </span>
                          <span className={`text-[10px] font-mono font-bold uppercase ${opTheme.label}`}>
                            {op.readTime}
                          </span>
                        </div>
                        <h4 className={`text-xs font-bold line-clamp-1 leading-snug ${isDark ? "text-stone-200" : "text-stone-800"}`}>
                          {op.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Actions (Mobile only) */}
            {!isDesktop && (
              <div className="pt-4 border-t border-stone-700/30 flex items-center justify-center">
                <button
                  type="button"
                  onClick={handleShare}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isDark
                      ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30"
                      : "bg-amber-500 text-white hover:bg-amber-600 shadow-md"
                  }`}
                >
                  <ShareNetwork weight="bold" className="w-3.5 h-3.5" />
                  <span>{copied ? blogUI.copied : blogUI.share}</span>
                </button>
              </div>
            )}
          </main>

          {/* Desktop Right Sidebar */}
          {isDesktop && (
            <aside className="col-span-3 space-y-5 sticky top-[64px]">
              {/* Publication Details Card (Minimal: Category, Date, Read time) */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border space-y-3 transition-colors ${
                  isDark ? "bg-stone-800/60 border-stone-700/80" : "bg-white border-stone-200 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Tag weight="bold" className={`w-4 h-4 ${theme.icon}`} />
                  <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-stone-300" : "text-stone-700"}`}>
                    {blogUI.pubInfo}
                  </h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-stone-200/60 dark:border-stone-700/40">
                    <span className={isDark ? "text-stone-400" : "text-stone-500"}>
                      {blogUI.category}
                    </span>
                    <span className={`font-bold ${theme.activeText}`}>
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-stone-200/60 dark:border-stone-700/40">
                    <span className={isDark ? "text-stone-400" : "text-stone-500"}>
                      {blogUI.date}
                    </span>
                    <span className={`font-medium ${isDark ? "text-stone-200" : "text-stone-800"}`}>
                      {post.date}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className={isDark ? "text-stone-400" : "text-stone-500"}>
                      {blogUI.readTime}
                    </span>
                    <span className={`font-medium ${isDark ? "text-stone-200" : "text-stone-800"}`}>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Other Posts in Blog (Suggested Previous & Next) */}
              {suggestedPosts.length > 0 && (
                <div
                  className={`p-5 rounded-2xl border space-y-3.5 transition-colors ${
                    isDark ? "bg-stone-800/40 border-stone-700/70" : "bg-white border-stone-200 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookBookmark weight="fill" className={`w-4 h-4 ${theme.icon}`} />
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-stone-300" : "text-stone-700"}`}>
                      {blogUI.otherArticles}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {suggestedPosts.map(({ post: op, label, isNext }) => {
                      const opTheme = getPostCardTheme(op.themeColor, op.id, isDark);
                      return (
                        <div
                          key={op.id}
                          onClick={() => onSelectPost?.(op)}
                          className={`group/op p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                            isDark
                              ? `bg-stone-800/70 border-stone-700/60 hover:bg-stone-800 ${opTheme.hoverBorder} ${opTheme.hoverShadow}`
                              : `bg-stone-50 border-stone-200/80 hover:bg-white ${opTheme.hoverBorder} ${opTheme.hoverShadow}`
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1.5 mb-1.5">
                            <span
                              className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border inline-flex items-center gap-1 ${opTheme.badge}`}
                            >
                              {!isNext && <span>←</span>}
                              <span>{label}</span>
                              {isNext && <span>→</span>}
                            </span>
                            <span className={`text-[10px] font-mono font-bold uppercase truncate opacity-80 ${opTheme.label}`}>
                              {op.readTime}
                            </span>
                          </div>

                          <span className={`text-[10px] font-mono font-bold uppercase block mb-1 ${opTheme.label}`}>
                            {op.category}
                          </span>

                          <h4
                            className={`text-xs font-bold line-clamp-2 leading-snug transition-colors duration-200 ${
                              isDark
                                ? `text-stone-200 ${opTheme.hoverTitle}`
                                : `text-stone-800 ${opTheme.hoverTitle}`
                            }`}
                          >
                            {op.name}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
