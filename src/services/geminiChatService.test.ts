import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  enrichActionsAndSuggestions,
  getGeminiApiKey,
  setCustomApiKey,
  clearCustomApiKey,
  sendChatMessage,
  ASTER_KNOWLEDGE_BASE,
} from "./geminiChatService";

describe("geminiChatService", () => {
  beforeEach(() => {
    clearCustomApiKey();
    vi.restoreAllMocks();
  });

  it("contains critical Aster knowledge base details", () => {
    expect(ASTER_KNOWLEDGE_BASE).toContain("AsterBot");
    expect(ASTER_KNOWLEDGE_BASE).toContain("StudioOS");
    expect(ASTER_KNOWLEDGE_BASE).toContain("Soul Fighter Memory Game");
    expect(ASTER_KNOWLEDGE_BASE).toContain("Ironman Triathlon");
    expect(ASTER_KNOWLEDGE_BASE).toContain("Ideal Calculator");
    expect(ASTER_KNOWLEDGE_BASE).toContain("Web Audio API");
    expect(ASTER_KNOWLEDGE_BASE).toContain("Regra de Calibração Central");
    expect(ASTER_KNOWLEDGE_BASE).toContain("Censo Demográfico 2022");
  });

  describe("enrichActionsAndSuggestions", () => {
    it("enriches 'Quem é o Aster?' with GitHub and CV links instead of projects", () => {
      const enriched = enrichActionsAndSuggestions(
        "Quem é o Aster?",
        "O Aster criou o StudioOS e o Soul Fighter",
        "br"
      );
      expect(enriched.actions).toBeDefined();
      expect(enriched.actions?.some((a) => a.url?.includes("github.com/zAstergun"))).toBe(true);
      expect(enriched.actions?.some((a) => a.url?.includes(".pdf"))).toBe(true);
      expect(enriched.actions?.some((a) => a.url?.includes("soulfighter"))).toBe(false);
    });

    it("enriches blog queries with intelligent suggestions", () => {
      const enriched = enrichActionsAndSuggestions("Quais artigos tem no blog?", "Temos três artigos principais", "br");
      expect(enriched.suggestions).toBeDefined();
      expect(enriched.suggestions?.length).toBeGreaterThan(0);
      expect(enriched.suggestions?.some((s) => s.includes("Soul Fighter") || s.includes("StudioOS"))).toBe(true);
    });

    it("enriches Soul Fighter queries with game links", () => {
      const enriched = enrichActionsAndSuggestions("Soul Fighter", "Um jogo de cartas muito legal", "br");
      expect(enriched.actions).toBeDefined();
      expect(enriched.actions?.some((a) => a.url?.includes("soulfighter.asterdev.me"))).toBe(true);
      expect(enriched.suggestions).toBeDefined();
      expect(enriched.suggestions?.length).toBeGreaterThan(0);
    });

    it("enriches StudioOS queries with correct app links", () => {
      const enriched = enrichActionsAndSuggestions("Como funciona o StudioOS?", "O StudioOS centraliza 12 ferramentas", "br");
      expect(enriched.actions).toBeDefined();
      expect(enriched.actions?.some((a) => a.url?.includes("studio.asterdev.me"))).toBe(true);
    });

    it("enriches Resume / CV queries with download action", () => {
      const enriched = enrichActionsAndSuggestions("Quero baixar o currículo", "Aqui está o currículo de Aster", "br");
      expect(enriched.actions).toBeDefined();
      expect(enriched.actions?.some((a) => a.url?.includes(".pdf"))).toBe(true);
    });
  });

  describe("API Key management", () => {
    it("allows setting, reading, and clearing custom user API key", () => {
      setCustomApiKey("AIzaTestCustomKey123");
      expect(getGeminiApiKey()).toBe("AIzaTestCustomKey123");
      clearCustomApiKey();
      // After clearing, either empty or env key
      expect(getGeminiApiKey()).not.toBe("AIzaTestCustomKey123");
    });
  });

  describe("sendChatMessage with fallback", () => {
    it("falls back gracefully to heuristic classifier when API key is empty or API fails", async () => {
      // Mock getGeminiApiKey to return empty string
      const response = await sendChatMessage("olá", [], "br");
      expect(response).toBeDefined();
      expect(response.text.length).toBeGreaterThan(0);
      expect(["gemini", "heuristic"]).toContain(response.source);
    }, 15000);
  });
});

