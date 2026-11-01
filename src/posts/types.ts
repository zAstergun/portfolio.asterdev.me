import type { ProjectItem, AsterLink, Language } from "../data/aster";

export type CalloutType = "insight" | "tech" | "tip" | "challenge";

export interface BlogPostCallout {
  type: CalloutType;
  title: string;
  text: string;
}

export interface BlogPostImage {
  src: string;
  caption: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "full";
}

export interface BlogPostCodeBlock {
  language: string;
  code: string;
  filename?: string;
}

export interface BlogPostSection {
  heading?: string;
  level?: 1 | 2;
  paragraphs?: string[];
  bulletPoints?: string[];
  callout?: BlogPostCallout;
  image?: BlogPostImage;
  codeBlock?: BlogPostCodeBlock;
  subsections?: BlogPostSection[];
}

/** Localized content for an individual post */
export interface PostContent {
  title: string;
  summary: string;
  category: string;
  coverCaption?: string;
  sections: BlogPostSection[];
  tags?: string[];
  links?: AsterLink[];
}

export type PostThemeColor = "cyan" | "emerald" | "amber" | "violet" | "rose" | "orange";

/** Post configuration and source definition */
export interface PostDefinition {
  id: string;
  slug: string;
  date: string;
  icon: string;
  gradient: [string, string];
  coverImage?: string;
  themeColor?: PostThemeColor;
  tags: string[];
  links: AsterLink[];
  translations?: Partial<Record<Language, PostContent>>;
  pt: PostContent;
  en: PostContent;
}

/** Formatted Post ready for display in OS and DetailPanel */
export interface BlogPostItem extends ProjectItem {
  date: string;
  readTime: string;
  category: string;
  coverImage?: string;
  coverCaption?: string;
  themeColor?: PostThemeColor;
  sections: BlogPostSection[];
}

/** UI Localization strings for Blog Reader and Blog Feed */
export interface BlogUIStrings {
  backToBlog: string;
  share: string;
  copied: string;
  copyLink: string;
  onThisPage: string;
  highlights: string;
  postLinks: string;
  continueReading: string;
  nextArticle: string;
  prevArticle: string;
  pubInfo: string;
  category: string;
  date: string;
  readTime: string;
  otherArticles: string;
  articlesAndDevlogs: string;
  articleCount: (count: number) => string;
  readArticle: string;
  introAndHighlights: string;
  resourcesAndLinks: string;
}
