import { describe, it, expect } from "vitest";
import { getBlogPosts, getBlogPostById } from "./registry";
import { LANGUAGES } from "../data/aster";

describe("Blog Posts i18n Verification", () => {
  it("should have all 15 languages registered", () => {
    expect(LANGUAGES.length).toBe(15);
  });

  for (const lang of LANGUAGES) {
    describe(`Language [${lang}]`, () => {
      it(`returns 3 complete, localized posts for ${lang}`, () => {
        const posts = getBlogPosts(lang);
        expect(posts.length).toBe(3);

        for (const post of posts) {
          expect(post.id).toBeDefined();
          expect(post.name).toBeTruthy();
          expect(post.summary).toBeTruthy();
          expect(post.category).toBeTruthy();
          expect(post.readTime).toBeTruthy();
          expect(post.date).toBeTruthy();
          expect(post.sections.length).toBeGreaterThanOrEqual(5);

          for (const section of post.sections) {
            if (section.heading) {
              expect(section.heading.trim().length).toBeGreaterThan(0);
            }
          }
        }
      });

      it(`retrieves specific post by ID in ${lang}`, () => {
        const soulfighter = getBlogPostById("blog-soulfighter-microinteractions", lang);
        expect(soulfighter).toBeDefined();
        expect(soulfighter?.name).toBeTruthy();

        const idealCalc = getBlogPostById("blog-ideal-calculator", lang);
        expect(idealCalc).toBeDefined();
        expect(idealCalc?.name).toBeTruthy();

        const studioos = getBlogPostById("blog-studioos-architecture", lang);
        expect(studioos).toBeDefined();
        expect(studioos?.name).toBeTruthy();
      });
    });
  }
});

