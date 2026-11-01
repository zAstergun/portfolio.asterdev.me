import React, { useRef, useEffect } from "react";
import {
  CalendarBlank,
  Clock,
  ArrowRight,
  BookOpen,
  RocketLaunch,
  Cpu,
  Sparkle,
} from "@phosphor-icons/react";
import type { BlogPostItem } from "../data/blogData";
import { getBlogUIStrings } from "../data/blogData";
import type { Language } from "../data/aster";

interface BlogPostsFeedProps {
  posts: BlogPostItem[];
  focusedIndex: number;
  onSelectPost: (post: BlogPostItem, index: number, e?: React.MouseEvent) => void;
  onHoverPost: (index: number) => void;
  isDark?: boolean;
  language?: Language;
}

const THEME_STYLES: Record<
  string,
  {
    borderFocus: string;
    shadowFocus: string;
    textHover: string;
    activeText: string;
    badgeGlow: string;
  }
> = {
  cyan: {
    borderFocus: "border-cyan-500/70 dark:border-cyan-400/80",
    shadowFocus: "shadow-[0_10px_30px_rgba(6,182,212,0.18)] dark:shadow-[0_10px_30px_rgba(6,182,212,0.25)]",
    textHover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    activeText: "text-cyan-600 dark:text-cyan-400",
    badgeGlow: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25",
  },
  amber: {
    borderFocus: "border-amber-500/70 dark:border-amber-400/80",
    shadowFocus: "shadow-[0_10px_30px_rgba(245,158,11,0.18)] dark:shadow-[0_10px_30px_rgba(245,158,11,0.25)]",
    textHover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    activeText: "text-amber-600 dark:text-amber-400",
    badgeGlow: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25",
  },
  emerald: {
    borderFocus: "border-emerald-500/70 dark:border-emerald-400/80",
    shadowFocus: "shadow-[0_10px_30px_rgba(16,185,129,0.18)] dark:shadow-[0_10px_30px_rgba(16,185,129,0.25)]",
    textHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    activeText: "text-emerald-600 dark:text-emerald-400",
    badgeGlow: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
  },
  violet: {
    borderFocus: "border-purple-500/70 dark:border-purple-400/80",
    shadowFocus: "shadow-[0_10px_30px_rgba(168,85,247,0.18)] dark:shadow-[0_10px_30px_rgba(168,85,247,0.25)]",
    textHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    activeText: "text-purple-600 dark:text-purple-400",
    badgeGlow: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/25",
  },
  rose: {
    borderFocus: "border-rose-500/70 dark:border-rose-400/80",
    shadowFocus: "shadow-[0_10px_30px_rgba(244,63,94,0.18)] dark:shadow-[0_10px_30px_rgba(244,63,94,0.25)]",
    textHover: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    activeText: "text-rose-600 dark:text-rose-400",
    badgeGlow: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/25",
  },
  orange: {
    borderFocus: "border-orange-500/70 dark:border-orange-400/80",
    shadowFocus: "shadow-[0_10px_30px_rgba(249,115,22,0.18)] dark:shadow-[0_10px_30px_rgba(249,115,22,0.25)]",
    textHover: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    activeText: "text-orange-600 dark:text-orange-400",
    badgeGlow: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/25",
  },
};

export function BlogPostsFeed({
  posts,
  focusedIndex,
  onSelectPost,
  onHoverPost,
  isDark = false,
  language = "br",
}: BlogPostsFeedProps) {
  const ui = getBlogUIStrings(language);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Only scroll into view on desktop / pointer devices with hover capability to prevent interrupting touch scroll
    if (window.matchMedia("(hover: hover)").matches) {
      const el = itemRefs.current[focusedIndex];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [focusedIndex]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "rocket":
        return <RocketLaunch weight="fill" className="w-3.5 h-3.5 text-white" />;
      case "cpu":
        return <Cpu weight="fill" className="w-3.5 h-3.5 text-white" />;
      case "sparkle":
        return <Sparkle weight="fill" className="w-3.5 h-3.5 text-white" />;
      default:
        return <BookOpen weight="fill" className="w-3.5 h-3.5 text-white" />;
    }
  };

  return (
    <div
      className="flex-1 min-h-0 w-full px-3.5 @tablet:px-6 py-2 overflow-y-auto space-y-4 detail-scroll-area"
      style={{
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-y",
        overscrollBehaviorY: "contain",
      }}
    >
      {/* Feed Sub-Header Info */}
      <div className="flex items-center justify-between px-1 text-[11px] font-mono tracking-wider uppercase">
        <span className={isDark ? "text-stone-400" : "text-stone-500"}>
          {ui.articlesAndDevlogs}
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
            isDark
              ? "bg-stone-850 text-stone-300 border border-stone-700/60"
              : "bg-stone-100 text-stone-700 border border-stone-200/80"
          }`}
        >
          {ui.articleCount(posts.length)}
        </span>
      </div>

      {/* Posts Section List */}
      <div className="space-y-4 pb-12">
        {posts.map((post, index) => {
          const isFocused = focusedIndex === index;
          const theme = THEME_STYLES[post.themeColor || "amber"] || THEME_STYLES.amber;

          return (
            <article
              key={post.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              onClick={(e) => onSelectPost(post, index, e)}
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  onHoverPost(index);
                }
              }}
              className={`group relative rounded-2xl p-4 transition-all duration-300 cursor-pointer border text-left flex flex-col ${
                isDark
                  ? isFocused
                    ? `bg-stone-900/95 ${theme.borderFocus} ${theme.shadowFocus} scale-[1.01]`
                    : "bg-stone-900/60 border-stone-800/80 hover:bg-stone-900/90 hover:border-stone-700/80 shadow-sm"
                  : isFocused
                  ? `bg-white ${theme.borderFocus} ${theme.shadowFocus} scale-[1.01]`
                  : "bg-white/90 border-stone-200/80 hover:bg-white hover:border-stone-300 hover:shadow-md shadow-sm"
              }`}
            >
              {/* Cover Banner Thumbnail */}
              {post.coverImage && (
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-3.5 border border-black/5 dark:border-white/10 shrink-0 bg-stone-950 shadow-inner group/img">
                  <img
                    src={post.coverImage}
                    alt={post.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* Subtle top/bottom gradient overlay for legibility without darkening center */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Category Pill with Icon floating bottom-left */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-sm max-w-[calc(100%-20px)]">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${post.gradient[0]}, ${post.gradient[1]})`,
                      }}
                    >
                      {renderIcon(post.icon)}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white/95 truncate">
                      {post.category}
                    </span>
                  </div>

                  {/* Reading Time Pill floating top-right */}
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-mono font-medium text-white/95 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/15 shadow-sm">
                    <Clock weight="bold" className="w-3 h-3 text-amber-300" />
                    {post.readTime}
                  </span>
                </div>
              )}

              {/* Meta row fallback if no cover image */}
              {!post.coverImage && (
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${post.gradient[0]}, ${post.gradient[1]})`,
                      }}
                    >
                      {renderIcon(post.icon)}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-600 dark:text-amber-400">
                      {post.category}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono flex items-center gap-1 ${
                      isDark ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    <Clock weight="bold" className="w-3 h-3 text-amber-400" />
                    {post.readTime}
                  </span>
                </div>
              )}

              {/* Post Title */}
              <h3
                className={`text-[15px] @tablet:text-base font-bold leading-snug tracking-tight mb-2 transition-colors duration-200 line-clamp-2 ${
                  isFocused
                    ? theme.activeText
                    : isDark
                    ? `text-stone-100 ${theme.textHover}`
                    : `text-stone-900 ${theme.textHover}`
                }`}
              >
                {post.name}
              </h3>

              {/* Excerpt / Summary */}
              <p
                className={`text-xs leading-relaxed mb-3 line-clamp-2 ${
                  isDark ? "text-stone-300/80" : "text-stone-600"
                }`}
              >
                {post.summary}
              </p>

              {/* Tags List (Micro-chips) */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                  {post.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                        isDark
                          ? "bg-stone-800/80 text-stone-400 border-stone-700/60"
                          : "bg-stone-100 text-stone-600 border-stone-200/70"
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-[9px] font-mono text-stone-400">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* Footer: Date & CTA */}
              <div
                className={`mt-auto pt-3 border-t flex items-center justify-between gap-2 ${
                  isDark ? "border-stone-800/90" : "border-stone-100"
                }`}
              >
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-400 dark:text-stone-500">
                  <CalendarBlank weight="bold" className="w-3.5 h-3.5 shrink-0 opacity-80" />
                  <span>{post.date}</span>
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-300 ${
                    isFocused
                      ? `${theme.activeText} translate-x-0.5`
                      : isDark
                      ? `text-stone-400 ${theme.textHover} group-hover:translate-x-0.5`
                      : `text-stone-500 ${theme.textHover} group-hover:translate-x-0.5`
                  }`}
                >
                  <span>{ui.readArticle}</span>
                  <ArrowRight
                    weight="bold"
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
