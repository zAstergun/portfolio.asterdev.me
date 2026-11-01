import type { Language } from "../data/aster";
import type { BlogPostItem, PostDefinition } from "./types";
import { compilePostItem, parsePostDate } from "./formatter";

// Import all individual post modules
import { interfacesPost } from "./interfaces-microinteractions";
import { studioosPost } from "./studioos-architecture";
import { idealCalcPost } from "./ideal-calculator";

/**
 * Master Registry of all blog posts ordered by publication date (newest first).
 * To add a new post, simply import its module and add it here.
 */
export const ALL_POST_DEFINITIONS: PostDefinition[] = [
  interfacesPost, // 01 Nov 2026
  studioosPost,   // 15 Out 2026
  idealCalcPost,  // 29 Mar 2026
];

/**
 * Returns all compiled and formatted blog posts for a given language,
 * sorted with the newest articles at the top.
 */
export function getBlogPosts(lang: Language = "br"): BlogPostItem[] {
  const compiled = ALL_POST_DEFINITIONS.map((def) => compilePostItem(def, lang));
  return compiled.sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));
}

/**
 * Finds a specific blog post by ID or alias.
 */
export function getBlogPostById(id: string, lang: Language = "br"): BlogPostItem | undefined {
  const posts = getBlogPosts(lang);

  // Alias for backward compatibility if needed
  if (id === "blog-placeholder") {
    return posts[0];
  }

  return posts.find((p) => p.id === id);
}

// Re-export types and formatters for clean single-entry imports
export * from "./types";
export * from "./formatter";
