import type { Language } from "../aster";

export interface CertificationTranslation {
  name: string;
  summary: string;
  tags: string[];
}

export type CertTranslationMap = Record<string, CertificationTranslation>;

