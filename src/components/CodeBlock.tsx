import { useState } from "react";
import { Check, Copy, FileCode } from "@phosphor-icons/react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  isPt?: boolean;
}

/**
 * Tokenizes a single line of JS/TS code and returns syntax-highlighted React nodes.
 */
function renderSyntaxHighlightedLine(line: string): React.ReactNode {
  // If line is empty or purely whitespace
  if (!line) return "\n";

  // Check if line is purely a comment
  const trimmed = line.trimStart();
  if (trimmed.startsWith("//")) {
    const indent = line.slice(0, line.length - trimmed.length);
    return (
      <>
        <span>{indent}</span>
        <span className="text-stone-500 italic">{trimmed}</span>
      </>
    );
  }

  // Tokenization regex matching:
  // 1: Comments (//...)
  // 2: Strings ("...", '...', `...`)
  // 3: Keywords
  // 4: Types
  // 5: Function calls (foo(...)
  // 6: Numbers
  // 7: Operators
  const regex = /(\/\/.*$)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b(?:function|const|let|var|return|type|interface|export|import|from|if|else|async|await|new|class|extends|as|default)\b)|(\b(?:AudioContext|OscillatorNode|GainNode|Feature|number|string|boolean|void|any|Promise|Array|Set|Map|Record)\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\())|(\b\d+(?:\.\d+)?\b)|([{}()[\],;=+\-*/><&|!.:?]+)/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    // Plain text before token
    if (match.index > lastIndex) {
      elements.push(
        <span key={`txt-${lastIndex}`} className="text-stone-300">
          {line.slice(lastIndex, match.index)}
        </span>
      );
    }

    const [full, comment, str, kw, typeName, fnCall, num, op] = match;

    if (comment) {
      elements.push(
        <span key={`comm-${match.index}`} className="text-stone-500 italic">
          {comment}
        </span>
      );
    } else if (str) {
      elements.push(
        <span key={`str-${match.index}`} className="text-emerald-400">
          {str}
        </span>
      );
    } else if (kw) {
      elements.push(
        <span key={`kw-${match.index}`} className="text-purple-400 font-medium">
          {kw}
        </span>
      );
    } else if (typeName) {
      elements.push(
        <span key={`type-${match.index}`} className="text-amber-300 font-medium">
          {typeName}
        </span>
      );
    } else if (fnCall) {
      elements.push(
        <span key={`fn-${match.index}`} className="text-cyan-300">
          {fnCall}
        </span>
      );
    } else if (num) {
      elements.push(
        <span key={`num-${match.index}`} className="text-orange-300">
          {num}
        </span>
      );
    } else if (op) {
      elements.push(
        <span key={`op-${match.index}`} className="text-stone-400">
          {op}
        </span>
      );
    } else {
      elements.push(
        <span key={`other-${match.index}`} className="text-stone-300">
          {full}
        </span>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Trailing plain text
  if (lastIndex < line.length) {
    elements.push(
      <span key={`txt-${lastIndex}`} className="text-stone-300">
        {line.slice(lastIndex)}
      </span>
    );
  }

  return elements.length > 0 ? elements : line;
}

export function CodeBlock({ code, language = "typescript", filename, isPt = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const cleanCode = code.trim();
  const lines = cleanCode.split("\n");

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(cleanCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
    } catch {
      // Fallback below
    }

    // Fallback for restricted clipboard contexts
    try {
      const textArea = document.createElement("textarea");
      textArea.value = cleanCode;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore
    }
  };

  const displayFilename = filename || (language ? `example.${language === "typescript" ? "ts" : language}` : "code");
  const langBadge = language === "typescript" ? "TS" : language.toUpperCase();

  return (
    <div className="rounded-xl overflow-hidden border border-stone-800/90 bg-[#0d1117] my-4 shadow-xl -mx-1 sm:mx-0">
      {/* ─── Window Header with Mac traffic dots & filename ─── */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#161b22]/90 border-b border-stone-800/80 text-[11px] font-mono text-stone-400 select-none">
        <div className="flex items-center gap-2.5">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 block shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 block shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 block shadow-sm" />
          </div>

          <div className="w-[1px] h-3 bg-stone-700/60 mx-0.5 hidden sm:block" />

          {/* Filename with code icon */}
          <div className="flex items-center gap-1.5 font-medium text-stone-300 truncate max-w-[180px] sm:max-w-none">
            <FileCode weight="bold" className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">{displayFilename}</span>
          </div>
        </div>

        {/* Right side: language badge & copy button */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-stone-800/80 text-stone-400 border border-stone-700/50 hidden xs:inline-block">
            {langBadge}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all duration-200 cursor-pointer ${
              copied
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-stone-800/60 hover:bg-stone-700/80 text-stone-300 hover:text-stone-100 border border-stone-700/40"
            }`}
            title={isPt ? "Copiar código" : "Copy code"}
            aria-label={isPt ? "Copiar código" : "Copy code"}
          >
            {copied ? (
              <>
                <Check weight="bold" className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">{isPt ? "Copiado!" : "Copied!"}</span>
              </>
            ) : (
              <>
                <Copy weight="bold" className="w-3.5 h-3.5 text-stone-400" />
                <span>{isPt ? "Copiar" : "Copy"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ─── Code Content with Line Numbers (Mobile optimized) ─── */}
      <div className="overflow-x-auto overflow-y-hidden overscroll-x-contain touch-pan-x py-3 text-[11px] sm:text-xs font-mono leading-5 sm:leading-6 select-text custom-scrollbar">
        <div className="min-w-fit px-3 sm:px-4">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-start hover:bg-white/[0.03] transition-colors rounded-sm -mx-1 px-1">
              {/* Unselectable Line Number Gutter */}
              <span
                className="select-none text-right pr-2.5 sm:pr-3 mr-2.5 sm:mr-3 text-stone-600 font-mono text-[10px] sm:text-xs shrink-0 w-6 sm:w-8 border-r border-stone-800/90 tabular-nums"
                aria-hidden="true"
              >
                {idx + 1}
              </span>

              {/* Highlighted Code Line */}
              <span className="whitespace-pre flex-1">
                {renderSyntaxHighlightedLine(line)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
