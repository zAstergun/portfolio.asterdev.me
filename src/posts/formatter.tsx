import React from "react";
import type { Language } from "../data/aster";
import type { BlogPostItem, BlogPostSection, PostDefinition, BlogUIStrings } from "./types";

/**
 * Month name parser mapping both PT and EN abbreviations to month indexes (0-11).
 */
const MONTH_MAP: Record<string, number> = {
  jan: 0,
  fev: 1,
  feb: 1,
  mar: 2,
  abr: 3,
  apr: 3,
  mai: 4,
  may: 4,
  jun: 5,
  jul: 6,
  ago: 7,
  aug: 7,
  set: 8,
  sep: 8,
  out: 9,
  oct: 9,
  nov: 10,
  dez: 11,
  dec: 11,
};

/**
 * Parses date strings in the format "DD Mon YYYY" (e.g. "01 Nov 2026", "15 Out 2026") into unix timestamps.
 */
export function parsePostDate(dateStr?: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length >= 3) {
    const day = parseInt(parts[0], 10) || 1;
    const monthKey = parts[1].toLowerCase().slice(0, 3);
    const month = MONTH_MAP[monthKey] ?? 0;
    const year = parseInt(parts[2], 10) || 2026;
    return new Date(year, month, day).getTime();
  }
  return 0;
}

const LOCALE_MAP: Record<Language, string> = {
  br: "pt-BR",
  pt: "pt-PT",
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT",
  nl: "nl-NL",
  ru: "ru-RU",
  jp: "ja-JP",
  cn: "zh-CN",
  kr: "ko-KR",
  vn: "vi-VN",
  id: "id-ID",
  ar: "ar-SA",
};

/**
 * Formats a raw post date string into the user's localized locale display.
 */
export function formatLocalizedDate(rawDate: string, lang: Language): string {
  const timestamp = parsePostDate(rawDate);
  if (!timestamp) return rawDate;
  try {
    const locale = LOCALE_MAP[lang] || "en-US";
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(timestamp));
  } catch {
    return rawDate;
  }
}

/**
 * Calculates estimated reading time based on total word count (~200 words/min).
 */
export function calculateReadingTime(sections: BlogPostSection[], lang: Language = "br"): string {
  let wordCount = 0;

  function countSection(s: BlogPostSection) {
    if (s.heading) {
      wordCount += s.heading.trim().split(/\s+/).length;
    }
    if (s.paragraphs) {
      for (const p of s.paragraphs) {
        wordCount += p.trim().split(/\s+/).length;
      }
    }
    if (s.bulletPoints) {
      for (const bp of s.bulletPoints) {
        wordCount += bp.trim().split(/\s+/).length;
      }
    }
    if (s.callout) {
      wordCount += (s.callout.title + " " + s.callout.text).trim().split(/\s+/).length;
    }
    if (s.subsections) {
      for (const sub of s.subsections) {
        countSection(sub);
      }
    }
  }

  for (const s of sections) {
    countSection(s);
  }

  const isCjk = lang === "jp" || lang === "cn" || lang === "kr";
  const speed = isCjk ? 350 : 200;
  const minutes = Math.max(1, Math.ceil(wordCount / speed));

  switch (lang) {
    case "br":
    case "pt":
      return `${minutes} min de leitura`;
    case "es":
      return `${minutes} min de lectura`;
    case "fr":
      return `${minutes} min de lecture`;
    case "de":
      return `${minutes} Min. Lesezeit`;
    case "it":
      return `${minutes} min di lettura`;
    case "nl":
      return `${minutes} min leestijd`;
    case "ru":
      return `${minutes} мин чтения`;
    case "jp":
      return `約${minutes}分で読了`;
    case "cn":
      return `约 ${minutes} 分钟阅读`;
    case "kr":
      return `약 ${minutes}분 소요`;
    case "vn":
      return `${minutes} phút đọc`;
    case "id":
      return `${minutes} mnt membaca`;
    case "ar":
      return `${minutes} دقيقة قراءة`;
    case "en":
    default:
      return `${minutes} min read`;
  }
}

/**
 * UI Localization strings for Blog Reader and Blog Feed for all 15 supported languages.
 */
export const BLOG_UI_DICTIONARY: Record<Language, BlogUIStrings> = {
  br: {
    backToBlog: "Voltar ao Blog",
    share: "Compartilhar",
    copied: "Copiado!",
    copyLink: "Copiar link do post",
    onThisPage: "Neste Artigo",
    highlights: "Destaques do Artigo",
    postLinks: "Links & Recursos do Post",
    continueReading: "Continuar Lendo",
    nextArticle: "Próximo Artigo",
    prevArticle: "Artigo Anterior",
    pubInfo: "Sobre a Publicação",
    category: "Categoria",
    date: "Data",
    readTime: "Leitura",
    otherArticles: "Outros Artigos",
    articlesAndDevlogs: "Artigos & DevLogs",
    articleCount: (count) => (count === 1 ? "1 artigo" : `${count} artigos`),
    readArticle: "Ler artigo",
    introAndHighlights: "Introdução & Destaques",
    resourcesAndLinks: "Recursos & Links",
  },
  pt: {
    backToBlog: "Voltar ao Blog",
    share: "Partilhar",
    copied: "Copiado!",
    copyLink: "Copiar hiperligação",
    onThisPage: "Neste Artigo",
    highlights: "Destaques do Artigo",
    postLinks: "Ligações & Recursos do Artigo",
    continueReading: "Continuar a Ler",
    nextArticle: "Artigo Seguinte",
    prevArticle: "Artigo Anterior",
    pubInfo: "Sobre a Publicação",
    category: "Categoria",
    date: "Data",
    readTime: "Leitura",
    otherArticles: "Outros Artigos",
    articlesAndDevlogs: "Artigos & DevLogs",
    articleCount: (count) => (count === 1 ? "1 artigo" : `${count} artigos`),
    readArticle: "Ler artigo",
    introAndHighlights: "Introdução & Destaques",
    resourcesAndLinks: "Recursos & Ligações",
  },
  en: {
    backToBlog: "Back to Blog",
    share: "Share",
    copied: "Copied!",
    copyLink: "Copy post link",
    onThisPage: "On this page",
    highlights: "Article Highlights",
    postLinks: "Post Links & Resources",
    continueReading: "Continue Reading",
    nextArticle: "Next Article",
    prevArticle: "Previous Article",
    pubInfo: "Publication Info",
    category: "Category",
    date: "Date",
    readTime: "Read time",
    otherArticles: "Other Articles",
    articlesAndDevlogs: "Articles & DevLogs",
    articleCount: (count) => (count === 1 ? "1 post" : `${count} posts`),
    readArticle: "Read article",
    introAndHighlights: "Introduction & Highlights",
    resourcesAndLinks: "Resources & Links",
  },
  es: {
    backToBlog: "Volver al Blog",
    share: "Compartir",
    copied: "¡Copiado!",
    copyLink: "Copiar enlace del post",
    onThisPage: "En este artículo",
    highlights: "Puntos clave del artículo",
    postLinks: "Enlaces y recursos",
    continueReading: "Continuar leyendo",
    nextArticle: "Siguiente artículo",
    prevArticle: "Artículo anterior",
    pubInfo: "Información de publicación",
    category: "Categoría",
    date: "Fecha",
    readTime: "Lectura",
    otherArticles: "Otros artículos",
    articlesAndDevlogs: "Artículos y DevLogs",
    articleCount: (count) => (count === 1 ? "1 artículo" : `${count} artículos`),
    readArticle: "Leer artículo",
    introAndHighlights: "Introducción y destacados",
    resourcesAndLinks: "Recursos y enlaces",
  },
  fr: {
    backToBlog: "Retour au Blog",
    share: "Partager",
    copied: "Copié !",
    copyLink: "Copier le lien",
    onThisPage: "Sur cette page",
    highlights: "Points clés de l'article",
    postLinks: "Liens et ressources",
    continueReading: "Continuer la lecture",
    nextArticle: "Article suivant",
    prevArticle: "Article précédent",
    pubInfo: "Informations de publication",
    category: "Catégorie",
    date: "Date",
    readTime: "Temps de lecture",
    otherArticles: "Autres articles",
    articlesAndDevlogs: "Articles & DevLogs",
    articleCount: (count) => (count === 1 ? "1 article" : `${count} articles`),
    readArticle: "Lire l'article",
    introAndHighlights: "Introduction & Points clés",
    resourcesAndLinks: "Ressources & Liens",
  },
  de: {
    backToBlog: "Zurück zum Blog",
    share: "Teilen",
    copied: "Kopiert!",
    copyLink: "Link kopieren",
    onThisPage: "Auf dieser Seite",
    highlights: "Artikel-Highlights",
    postLinks: "Links & Ressourcen",
    continueReading: "Weiterlesen",
    nextArticle: "Nächster Artikel",
    prevArticle: "Vorheriger Artikel",
    pubInfo: "Veröffentlichungsinformationen",
    category: "Kategorie",
    date: "Datum",
    readTime: "Lesezeit",
    otherArticles: "Weitere Artikel",
    articlesAndDevlogs: "Artikel & DevLogs",
    articleCount: (count) => (count === 1 ? "1 Artikel" : `${count} Artikel`),
    readArticle: "Artikel lesen",
    introAndHighlights: "Einführung & Highlights",
    resourcesAndLinks: "Ressourcen & Links",
  },
  it: {
    backToBlog: "Torna al Blog",
    share: "Condividi",
    copied: "Copiato!",
    copyLink: "Copia link",
    onThisPage: "In questo articolo",
    highlights: "Punti salienti dell'articolo",
    postLinks: "Link e risorse",
    continueReading: "Continua a leggere",
    nextArticle: "Articolo successivo",
    prevArticle: "Articolo precedente",
    pubInfo: "Informazioni di pubblicazione",
    category: "Categoria",
    date: "Data",
    readTime: "Tempo di lettura",
    otherArticles: "Altri articoli",
    articlesAndDevlogs: "Articoli & DevLogs",
    articleCount: (count) => (count === 1 ? "1 articolo" : `${count} articoli`),
    readArticle: "Leggi articolo",
    introAndHighlights: "Introduzione & Punti salienti",
    resourcesAndLinks: "Risorse & Link",
  },
  nl: {
    backToBlog: "Terug naar Blog",
    share: "Delen",
    copied: "Gekopieerd!",
    copyLink: "Link kopiëren",
    onThisPage: "Op deze pagina",
    highlights: "Hoogtepunten van het artikel",
    postLinks: "Links & Bronnen",
    continueReading: "Verder lezen",
    nextArticle: "Volgend artikel",
    prevArticle: "Vorig artikel",
    pubInfo: "Publicatiegegevens",
    category: "Categorie",
    date: "Datum",
    readTime: "Leestijd",
    otherArticles: "Andere artikelen",
    articlesAndDevlogs: "Artikelen & DevLogs",
    articleCount: (count) => (count === 1 ? "1 artikel" : `${count} artikelen`),
    readArticle: "Artikel lezen",
    introAndHighlights: "Inleiding & Hoogtepunten",
    resourcesAndLinks: "Bronnen & Links",
  },
  ru: {
    backToBlog: "Назад в блог",
    share: "Поделиться",
    copied: "Скопировано!",
    copyLink: "Копировать ссылку",
    onThisPage: "В этой статье",
    highlights: "Ключевые моменты",
    postLinks: "Ссылки и ресурсы",
    continueReading: "Читать далее",
    nextArticle: "Следующая статья",
    prevArticle: "Предыдущая статья",
    pubInfo: "Информация о публикации",
    category: "Категория",
    date: "Дата",
    readTime: "Время чтения",
    otherArticles: "Другие статьи",
    articlesAndDevlogs: "Статьи и DevLogs",
    articleCount: (count) => `${count} статьи`,
    readArticle: "Читать статью",
    introAndHighlights: "Введение и главное",
    resourcesAndLinks: "Ресурсы и ссылки",
  },
  jp: {
    backToBlog: "ブログに戻る",
    share: "共有",
    copied: "コピー完了！",
    copyLink: "リンクをコピー",
    onThisPage: "目次",
    highlights: "ハイライト",
    postLinks: "リンク・リソース",
    continueReading: "続きを読む",
    nextArticle: "次の記事",
    prevArticle: "前の記事",
    pubInfo: "投稿情報",
    category: "カテゴリー",
    date: "投稿日",
    readTime: "所要時間",
    otherArticles: "その他の記事",
    articlesAndDevlogs: "記事 & DevLog",
    articleCount: (count) => `${count} 件の記事`,
    readArticle: "記事を読む",
    introAndHighlights: "概要とハイライト",
    resourcesAndLinks: "リソース・リンク",
  },
  cn: {
    backToBlog: "返回博客",
    share: "分享",
    copied: "已复制！",
    copyLink: "复制文章链接",
    onThisPage: "文章目录",
    highlights: "文章核心亮点",
    postLinks: "相关链接与资源",
    continueReading: "继续阅读",
    nextArticle: "下一篇文章",
    prevArticle: "上一篇文章",
    pubInfo: "发布信息",
    category: "分类",
    date: "日期",
    readTime: "阅读时长",
    otherArticles: "其他文章",
    articlesAndDevlogs: "文章与开发日志",
    articleCount: (count) => `${count} 篇文章`,
    readArticle: "阅读文章",
    introAndHighlights: "引言与亮点",
    resourcesAndLinks: "资源与链接",
  },
  kr: {
    backToBlog: "블로그로 돌아가기",
    share: "공유하기",
    copied: "복사 완료!",
    copyLink: "게시글 링크 복사",
    onThisPage: "목차",
    highlights: "핵심 요약",
    postLinks: "링크 및 자료",
    continueReading: "계속 읽기",
    nextArticle: "다음 글",
    prevArticle: "이전 글",
    pubInfo: "발행 정보",
    category: "카테고리",
    date: "작성일",
    readTime: "읽는 시간",
    otherArticles: "다른 글 보기",
    articlesAndDevlogs: "아티클 & 개발일지",
    articleCount: (count) => `${count}개의 글`,
    readArticle: "글 읽기",
    introAndHighlights: "소개 및 하이라이트",
    resourcesAndLinks: "자료 및 링크",
  },
  vn: {
    backToBlog: "Quay lại Blog",
    share: "Chia sẻ",
    copied: "Đã sao chép!",
    copyLink: "Sao chép liên kết",
    onThisPage: "Mục lục bài viết",
    highlights: "Điểm nổi bật",
    postLinks: "Liên kết & Tài nguyên",
    continueReading: "Đọc tiếp",
    nextArticle: "Bài tiếp theo",
    prevArticle: "Bài trước",
    pubInfo: "Thông tin bài viết",
    category: "Danh mục",
    date: "Ngày đăng",
    readTime: "Thời gian đọc",
    otherArticles: "Các bài viết khác",
    articlesAndDevlogs: "Bài viết & DevLogs",
    articleCount: (count) => `${count} bài viết`,
    readArticle: "Đọc bài viết",
    introAndHighlights: "Giới thiệu & Điểm nhấn",
    resourcesAndLinks: "Tài nguyên & Liên kết",
  },
  id: {
    backToBlog: "Kembali ke Blog",
    share: "Bagikan",
    copied: "Tersalin!",
    copyLink: "Salin tautan",
    onThisPage: "Di halaman ini",
    highlights: "Sorotan Artikel",
    postLinks: "Tautan & Sumber Daya",
    continueReading: "Lanjut Membaca",
    nextArticle: "Artikel Selanjutnya",
    prevArticle: "Artikel Sebelumnya",
    pubInfo: "Informasi Publikasi",
    category: "Kategori",
    date: "Tanggal",
    readTime: "Waktu baca",
    otherArticles: "Artikel Lainnya",
    articlesAndDevlogs: "Artikel & DevLogs",
    articleCount: (count) => `${count} artikel`,
    readArticle: "Baca artikel",
    introAndHighlights: "Pengantar & Sorotan",
    resourcesAndLinks: "Sumber Daya & Tautan",
  },
  ar: {
    backToBlog: "العودة إلى المدونة",
    share: "مشاركة",
    copied: "تم النسخ!",
    copyLink: "نسخ الرابط",
    onThisPage: "في هذا المقال",
    highlights: "أبرز نقاط المقال",
    postLinks: "الروابط والمراجع",
    continueReading: "متابعة القراءة",
    nextArticle: "المقال التالي",
    prevArticle: "المقال السابق",
    pubInfo: "معلومات النشر",
    category: "التصنيف",
    date: "التاريخ",
    readTime: "وقت القراءة",
    otherArticles: "مقالات أخرى",
    articlesAndDevlogs: "المقالات وسجلات التطوير",
    articleCount: (count) => `${count} مقالات`,
    readArticle: "قراءة المقال",
    introAndHighlights: "المقدمة والأبرز",
    resourcesAndLinks: "المراجع والروابط",
  },
};

export function getBlogUIStrings(lang: Language = "br"): BlogUIStrings {
  return BLOG_UI_DICTIONARY[lang] || BLOG_UI_DICTIONARY.en;
}

/**
 * Parses inline markdown-like syntax:
 * - **bold**
 * - *italic*
 * - `code`
 * - [link text](url)
 */
export function renderFormattedText(text: string, isDark: boolean = false): React.ReactNode {
  // Regex splitting on markdown patterns
  const tokens = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g);

  return tokens.map((token, i) => {
    if (!token) return null;

    // Bold: **text**
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={i} className={`font-bold ${isDark ? "text-stone-100" : "text-stone-900"}`}>
          {token.slice(2, -2)}
        </strong>
      );
    }

    // Italic: *text*
    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <em key={i} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }

    // Inline Code: `code`
    if (token.startsWith("`") && token.endsWith("`")) {
      return (
        <code
          key={i}
          className={`font-mono text-[12px] px-1.5 py-0.5 rounded ${
            isDark ? "bg-stone-800 text-amber-300 border border-stone-700/60" : "bg-stone-200/80 text-amber-900"
          }`}
        >
          {token.slice(1, -1)}
        </code>
      );
    }

    // Link: [text](url)
    const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:text-amber-400 underline underline-offset-2 transition-colors font-semibold"
        >
          {label}
        </a>
      );
    }

    // Normal plain text
    return <span key={i}>{token}</span>;
  });
}

/**
 * Compiles a raw PostDefinition into an executable BlogPostItem for the given language.
 */
export function compilePostItem(def: PostDefinition, lang: Language): BlogPostItem {
  // 1. Direct translation check
  let content = def.translations?.[lang];

  // 2. Specific fallback rules
  if (!content) {
    if (lang === "br") {
      content = def.translations?.br || def.pt;
    } else if (lang === "pt") {
      content = def.translations?.pt || def.pt;
    } else if (lang === "en") {
      content = def.translations?.en || def.en;
    } else {
      content = def.translations?.[lang] || def.en || def.pt;
    }
  }

  // Safety fallback
  if (!content) {
    content = def.en || def.pt;
  }

  const readTime = calculateReadingTime(content.sections, lang);
  const localizedDate = formatLocalizedDate(def.date, lang);

  return {
    type: "project",
    id: def.id,
    name: content.title,
    icon: def.icon,
    gradient: def.gradient,
    date: localizedDate,
    readTime,
    category: content.category,
    coverImage: def.coverImage,
    coverCaption: content.coverCaption,
    themeColor: def.themeColor,
    summary: content.summary,
    links: content.links ?? def.links,
    tags: content.tags ?? def.tags,
    lang,
    sections: content.sections,
  };
}
