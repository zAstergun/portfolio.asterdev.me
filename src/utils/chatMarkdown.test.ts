import { describe, it, expect } from "vitest";
import { renderInlineMarkdown } from "./chatMarkdown";

describe("chatMarkdown", () => {
  it("parses bold text correctly", () => {
    const nodes = renderInlineMarkdown("Este é um **teste em negrito** de texto");
    expect(nodes.length).toBeGreaterThan(1);
  });

  it("parses inline links correctly", () => {
    const nodes = renderInlineMarkdown("Acesse o [GitHub](https://github.com/zAstergun) para ver");
    expect(nodes.length).toBeGreaterThan(1);
  });

  it("parses inline code correctly", () => {
    const nodes = renderInlineMarkdown("Utiliza `React 19` e TypeScript");
    expect(nodes.length).toBeGreaterThan(1);
  });
});

