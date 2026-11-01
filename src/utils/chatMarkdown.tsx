import React from "react";

/**
 * Parses inline markdown: **bold**, *italic*, `code`, and [link](url).
 */
export function renderInlineMarkdown(text: string, isDark: boolean = false): React.ReactNode[] {
  // Regex splitting on inline markdown tokens
  const tokens = text.split(/(\*\*.*?\*\*|\*[^*\n]+?\*|`[^`\n]+?`|\[[^\n]+?\]\(https?:\/\/[^\s)]+\))/g);

  return tokens.map((token, i) => {
    if (!token) return null;

    // Bold: **text**
    if (token.startsWith("**") && token.endsWith("**") && token.length >= 4) {
      return (
        <strong key={i} className={`font-semibold ${isDark ? "text-stone-100" : "text-stone-900"}`}>
          {token.slice(2, -2)}
        </strong>
      );
    }

    // Italic: *text*
    if (token.startsWith("*") && token.endsWith("*") && token.length >= 2) {
      return (
        <em key={i} className="italic opacity-90">
          {token.slice(1, -1)}
        </em>
      );
    }

    // Inline Code: `code`
    if (token.startsWith("`") && token.endsWith("`") && token.length >= 2) {
      return (
        <code
          key={i}
          className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
            isDark ? "bg-stone-800 text-indigo-300 border border-stone-700/60" : "bg-stone-100 text-indigo-700 border border-stone-200"
          }`}
        >
          {token.slice(1, -1)}
        </code>
      );
    }

    // Link: [text](url)
    const linkMatch = token.match(/^\[(.*?)\]\((https?:\/\/[^\s)]+)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors font-medium"
        >
          {label}
        </a>
      );
    }

    return <span key={i}>{token}</span>;
  });
}

/**
 * Parses full multi-line chat message text supporting:
 * - Headings (#, ##, ###)
 * - Lists (- item, * item, • item, 1. item)
 * - Paragraphs with natural line breaks
 */
export function ChatMessageRenderer({
  text,
  isDark = false,
}: {
  text: string;
  isDark?: boolean;
}): React.JSX.Element {
  const lines = text.split("\n");

  return (
    <div className="space-y-1.5 text-xs @tablet:text-sm leading-relaxed selection:bg-stone-500 selection:text-white">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // Empty line
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Heading 1, 2, or 3 (e.g. ### 🚀 Principais Projetos:)
        const headingMatch = trimmed.match(/^#{1,4}\s+(.*)$/);
        if (headingMatch) {
          const headingContent = headingMatch[1];
          return (
            <div
              key={idx}
              className={`font-bold text-xs @tablet:text-sm tracking-tight pt-2 pb-0.5 flex items-center gap-1.5 ${
                isDark ? "text-indigo-300" : "text-indigo-600"
              }`}
            >
              {renderInlineMarkdown(headingContent, isDark)}
            </div>
          );
        }

        // Ordered list: 1. Item
        const orderedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (orderedMatch) {
          const [, num, itemContent] = orderedMatch;
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className={`font-mono text-[11px] font-bold shrink-0 mt-0.5 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                {num}.
              </span>
              <div className="flex-1">
                {renderInlineMarkdown(itemContent, isDark)}
              </div>
            </div>
          );
        }

        // Unordered list: - Item or * Item or • Item
        const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);
        if (bulletMatch) {
          const itemContent = bulletMatch[1];
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className={`shrink-0 text-sm leading-none mt-1 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                •
              </span>
              <div className="flex-1">
                {renderInlineMarkdown(itemContent, isDark)}
              </div>
            </div>
          );
        }

        // Standard line / paragraph
        return (
          <div key={idx} className="break-words">
            {renderInlineMarkdown(line, isDark)}
          </div>
        );
      })}
    </div>
  );
}

