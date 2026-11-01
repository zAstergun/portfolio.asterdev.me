import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { resolveBotLanguage, BOT_UI_TRANSLATIONS } from "../utils/botI18n";
import {
  sendChatMessage,
  type AIChatMessage,
} from "../services/geminiChatService";
import { ChatMessageRenderer } from "../utils/chatMarkdown";
import {
  Robot,
  ArrowCounterClockwise,
  PaperPlaneTilt,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";
import type { ActionButton } from "../utils/heuristicClassifier";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  source?: "gemini" | "heuristic";
  modelUsed?: string;
  actions?: ActionButton[];
  suggestions?: string[];
}

interface ChatBotProps {
  onClose: () => void;
  isDesktop: boolean;
  isPhoneMockup?: boolean;
  isClosing?: boolean;
  onAnimationEnd?: () => void;
  origin?: { x: string; y: string };
  isDark?: boolean;
  language?: string;
  ui: any;
  onOpenPost?: (postId: string) => void;
  onOpenFolder?: (folderId: string) => void;
}

export function ChatBot({
  onClose,
  isDesktop,
  isPhoneMockup = false,
  isClosing,
  onAnimationEnd,
  origin,
  isDark = false,
  language = "br",
  ui,
  onOpenPost,
  onOpenFolder,
}: ChatBotProps) {
  const currentLang = useMemo(() => resolveBotLanguage(language), [language]);
  const botUi = useMemo(
    () => BOT_UI_TRANSLATIONS[currentLang] || BOT_UI_TRANSLATIONS.en,
    [currentLang]
  );

  const getInitialMessage = useCallback((): ChatMessage => {
    return {
      id: "welcome-msg",
      sender: "bot",
      text: botUi.welcomeMessage,
      timestamp: new Date().toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      }),
      suggestions: botUi.initialSuggestions,
    };
  }, [botUi]);

  const [messages, setMessages] = useState<ChatMessage[]>(() => [getInitialMessage()]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // When language changes and only welcome message exists, update welcome message
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1 && prev[0]?.id === "welcome-msg") {
        return [getInitialMessage()];
      }
      return prev;
    });
  }, [getInitialMessage]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback((smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "end",
    });
  }, []);

  useEffect(() => {
    scrollToBottom(false);
  }, [scrollToBottom]);

  useEffect(() => {
    scrollToBottom(true);
  }, [messages, isTyping, scrollToBottom]);

  // Focus input automatically on open
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = useCallback(
    async (textToSend: string) => {
      const trimmed = textToSend.trim();
      if (!trimmed || isTyping) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        sender: "user",
        text: trimmed,
        timestamp: new Date().toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Collect conversation history for multi-turn AI context
      const history: AIChatMessage[] = messages
        .filter((m) => m.id !== "welcome-msg")
        .map((m) => ({
          role: m.sender === "user" ? ("user" as const) : ("model" as const),
          text: m.text,
        }));

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      try {
        const result = await sendChatMessage(trimmed, history, currentLang);

        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          sender: "bot",
          text: result.text,
          source: result.source,
          modelUsed: result.modelUsed,
          timestamp: new Date().toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
          }),
          actions: result.actions,
          suggestions: result.suggestions,
        };

        setMessages((prev) => [...prev, botMsg]);
      } catch (err) {
        console.error("[AsterBot] Message generation error:", err);
      } finally {
        setIsTyping(false);
      }
    },
    [isTyping, messages, currentLang]
  );

  const handleClearHistory = useCallback(() => {
    setMessages([getInitialMessage()]);
    inputRef.current?.focus();
  }, [getInitialMessage]);

  const animClass = isClosing ? "animate-ipadAppClose" : "animate-ipadAppOpen";
  const panelBg = isDark ? "bg-stone-900" : "bg-aster-beige";
  const containerClass = isDesktop
    ? `detail-panel-desktop absolute inset-0 z-20 flex flex-col ${panelBg} overflow-hidden ${animClass} transition-colors duration-500`
    : `detail-panel absolute inset-0 z-30 ${panelBg} flex flex-col ${animClass} transition-colors duration-500`;

  return (
    <div
      className={containerClass}
      dir={botUi.isRtl ? "rtl" : "ltr"}
      style={{
        willChange: "transform, opacity",
        transformOrigin: origin ? `${origin.x} ${origin.y}` : "50% 50%",
      }}
      key="chatbot-panel"
      onAnimationEnd={(e) => {
        if (e.target !== e.currentTarget) return;
        onAnimationEnd?.();
      }}
    >
      {/* ── Header ── */}
      <div
        className={`shrink-0 flex items-center justify-between px-4 @tablet:px-8 ${isDesktop ? 'py-3.5 border-b' : 'pt-[52px] pb-3'} transition-colors duration-500 ${
          isDark
            ? `bg-stone-900/90 ${isDesktop ? 'border-stone-800' : ''} text-stone-100 backdrop-blur-md`
            : `bg-aster-beige/90 ${isDesktop ? 'border-aster-dark/[0.08]' : ''} text-aster-dark backdrop-blur-md`
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Back button (Mobile view) */}
          {!isDesktop && (
            <button
              type="button"
              onClick={onClose}
              className={`w-7 h-7 @tablet:w-9 @tablet:h-9 rounded-full flex items-center justify-center transition-colors duration-500 cursor-pointer text-sm @tablet:text-base ${
                isDark
                  ? "bg-stone-700 text-stone-400 hover:bg-stone-600"
                  : "bg-aster-dark/[0.06] text-aster-dark/50 hover:bg-aster-dark/10"
              }`}
              aria-label={ui?.back || "Voltar"}
            >
              {botUi.isRtl ? (
                <ArrowRight weight="bold" className="w-3.5 h-3.5 @tablet:w-4 @tablet:h-4" />
              ) : (
                <ArrowLeft weight="bold" className="w-3.5 h-3.5 @tablet:w-4 @tablet:h-4" />
              )}
            </button>
          )}

          {/* Bot Avatar with Glow */}
          <div className="relative">
            <div className="w-10 h-10 @tablet:w-11 @tablet:h-11 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 select-none">
              <Robot weight="fill" className="w-6 h-6 text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-stone-900" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-sm @tablet:text-base tracking-tight leading-none">
                AsterBot
              </h2>
            </div>
            <p
              className={`text-[11px] font-medium transition-colors duration-500 mt-0.5 ${
                isDark ? "text-stone-400" : "text-aster-dark/60"
              }`}
            >
              {botUi.assistantTitle}
            </p>
          </div>
        </div>

        {/* Clear chat action */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleClearHistory}
            title={botUi.clearButton}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              isDark
                ? "bg-stone-800/80 hover:bg-stone-700 text-stone-400 hover:text-stone-200"
                : "bg-aster-dark/[0.05] hover:bg-aster-dark/[0.1] text-aster-dark/60 hover:text-aster-dark"
            }`}
          >
            <ArrowCounterClockwise weight="bold" className="w-3.5 h-3.5" />
            <span className="hidden @tablet:inline font-semibold">{botUi.clearButton}</span>
          </button>
        </div>
      </div>

      {/* ── Messages Scroll Area ── */}
      <div
        className={`flex-1 overflow-y-auto px-4 @tablet:px-8 py-4 space-y-4 ${
          isDesktop ? "max-w-4xl mx-auto w-full" : "w-full"
        }`}
      >
        {messages.map((msg) => {
          const isUser = msg.sender === "user";

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? "items-end" : "items-start"} animate-fade-in`}
            >
              <div
                className={`max-w-[85%] @tablet:max-w-[75%] rounded-2xl px-4 py-3 transition-all ${
                  isUser
                    ? isDark
                      ? "bg-white text-stone-900 font-medium rounded-tr-sm shadow-sm"
                      : "bg-aster-dark text-white rounded-tr-sm shadow-sm"
                    : isDark
                    ? "bg-stone-800/95 border border-stone-700/60 text-stone-100 rounded-tl-sm shadow-sm"
                    : "bg-white/90 border border-aster-dark/[0.08] text-aster-dark rounded-tl-sm shadow-sm"
                }`}
              >
                {/* Formatted Message text with complete markdown support (headings, bold, lists, links) */}
                <ChatMessageRenderer text={msg.text} isDark={isDark} />

                {/* Action buttons (if any) */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-2.5 border-t border-current/10">
                    {msg.actions.map((act) => {
                      if (act.type === "article") {
                        return (
                          <button
                            key={act.label}
                            type="button"
                            onClick={() => {
                              if (onOpenPost && act.url) {
                                onOpenPost(act.url);
                              } else if (act.url) {
                                window.location.search = `?app=${act.url}`;
                              }
                            }}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] @tablet:text-xs font-semibold transition-all duration-200 shadow-sm cursor-pointer ${
                              isDark
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
                                : "bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100"
                            }`}
                          >
                            {act.label}
                          </button>
                        );
                      }

                      if (act.type === "folder") {
                        return (
                          <button
                            key={act.label}
                            type="button"
                            onClick={() => {
                              if (onOpenFolder && act.url) {
                                onOpenFolder(act.url);
                              }
                            }}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] @tablet:text-xs font-semibold transition-all duration-200 shadow-sm cursor-pointer ${
                              isDark
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30"
                                : "bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100"
                            }`}
                          >
                            {act.label}
                          </button>
                        );
                      }

                      return (
                        <a
                          key={act.label}
                          href={act.url}
                          target={act.type === "download" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          download={act.type === "download" ? true : undefined}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] @tablet:text-xs font-semibold transition-all duration-200 shadow-sm ${
                            isDark
                              ? "bg-stone-700/80 text-stone-200 border border-stone-600 hover:bg-stone-700"
                              : "bg-aster-dark/[0.06] text-aster-dark border border-aster-dark/10 hover:bg-aster-dark/[0.12]"
                          }`}
                        >
                          {act.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Timestamp */}
              <span
                className={`text-[9px] @tablet:text-[10px] mt-1 px-1 transition-colors duration-500 ${
                  isDark ? "text-stone-500" : "text-aster-dark/40"
                }`}
              >
                {msg.timestamp}
              </span>

              {/* Suggestions chips right under bot response */}
              {!isUser && msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%] @tablet:max-w-[85%]">
                  {msg.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      disabled={isTyping}
                      onClick={() => handleSendMessage(suggestion)}
                      className={`text-[11px] @tablet:text-xs px-2.5 py-1 rounded-full border transition-all duration-200 cursor-pointer text-left ${
                        isDark
                          ? "bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-700 hover:border-stone-500 hover:text-stone-100"
                          : "bg-white/80 border-aster-dark/15 text-aster-dark/80 hover:bg-white hover:border-aster-dark/30 hover:text-aster-dark"
                      }`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div
            className={`flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-tl-sm w-fit shadow-sm animate-fade-in transition-colors duration-500 ${
              isDark
                ? "bg-stone-800/95 border border-stone-700/60"
                : "bg-white/90 border border-aster-dark/[0.08]"
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce"
              style={{ animationDuration: "1s", animationDelay: "0ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce"
              style={{ animationDuration: "1s", animationDelay: "180ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce"
              style={{ animationDuration: "1s", animationDelay: "360ms" }}
            />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* ── Input Bar ── */}
      <div
        className={`shrink-0 px-4 @tablet:px-8 py-3 transition-colors duration-500 ${panelBg}`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputValue);
          }}
          className={`flex items-center gap-2 p-1.5 rounded-2xl border transition-all duration-200 ${
            isDesktop ? "max-w-4xl mx-auto w-full" : "w-full"
          } ${
            isDark
              ? "bg-stone-800/90 border-stone-700/80 focus-within:border-indigo-500/80 focus-within:bg-stone-800"
              : "bg-white/90 border-aster-dark/15 focus-within:border-indigo-500/80 focus-within:bg-white"
          }`}
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
            placeholder={botUi.inputPlaceholder}
            className={`flex-1 px-3 py-1.5 text-xs @tablet:text-sm bg-transparent outline-none focus:outline-none focus:ring-0 transition-colors duration-500 ${
              isDark
                ? "text-stone-100 placeholder:text-stone-500"
                : "text-aster-dark placeholder:text-aster-dark/40"
            }`}
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
              inputValue.trim() && !isTyping
                ? isDark
                  ? "bg-white text-stone-900 shadow-sm hover:bg-stone-200 hover:scale-105 active:scale-95"
                  : "bg-aster-dark text-white shadow-sm hover:bg-aster-dark/90 hover:scale-105 active:scale-95"
                : isDark
                ? "bg-stone-800/80 text-stone-600"
                : "bg-aster-dark/[0.06] text-aster-dark/30"
            }`}
            aria-label="Enviar"
          >
            <PaperPlaneTilt
              weight="fill"
              className={`w-4 h-4 ${
                inputValue.trim() && !isTyping
                  ? isDark
                    ? "text-stone-900"
                    : "text-white"
                  : "text-current"
              }`}
            />
          </button>
        </form>
      </div>

      {/* Divisória minimalista */}
      <div className={`w-full ${isDesktop ? 'px-12 pt-1' : 'px-6 pt-1 pb-2'} shrink-0 transition-colors duration-500 ${panelBg}`}>
        <div className={`w-full h-[1px] transition-colors duration-500 ${isDark ? 'bg-stone-700' : 'bg-aster-dark/[0.08]'}`} />
      </div>

      {/* Safe bottom area on mobile for floating home bar */}
      {!isDesktop && (
        <div className={`relative h-20 @tablet:h-24 w-full shrink-0 transition-colors duration-500 ${panelBg}`}>
          <div
            className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
              isDark
                ? "bg-gradient-to-t from-black/80 to-transparent"
                : "bg-gradient-to-t from-black/10 to-transparent"
            }`}
          />
        </div>
      )}

      {/* Bottom Navigation: Phone pill in desktop phone companion; Physical circular button on tablet and standalone mobile */}
      {isPhoneMockup ? (
        <div className={`shrink-0 flex justify-center pb-2.5 pt-1 transition-colors duration-500 ${panelBg}`}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Voltar ao início"
            className="group py-1 px-4 cursor-pointer"
          >
            <div className={`w-28 h-1 rounded-full transition-colors duration-500 group-hover:bg-aster-accent/60 ${isDark ? 'bg-white/20' : 'bg-aster-dark/20'}`} />
          </button>
        </div>
      ) : (
        <div className={`relative flex justify-center ${isDesktop ? 'py-4' : 'py-3 pb-[max(0.75rem,env(safe-area-inset-bottom,12px))]'} shrink-0 transition-colors duration-500 ${panelBg}`}>
          <div
            className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
              isDark
                ? "bg-gradient-to-t from-black/80 to-transparent"
                : "bg-gradient-to-t from-black/10 to-transparent"
            }`}
          />
          <button
            type="button"
            onClick={onClose}
            className={`home-btn relative z-10 w-12 h-12 @tablet:w-14 @tablet:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
              isDark
                ? "bg-stone-900/80 border border-stone-700 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)] hover:bg-stone-800"
                : "bg-aster-beige-dark/80 border border-aster-dark/10 shadow-[inset_0_3px_6px_rgba(0,0,0,0.08)] hover:bg-aster-beige-dark"
            }`}
            aria-label={ui?.homeButton || "Botão Home"}
          />
        </div>
      )}
    </div>
  );
}
