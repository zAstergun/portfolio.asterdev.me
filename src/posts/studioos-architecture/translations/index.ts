import type { Language } from "../../../data/aster";
import type { PostContent } from "../../types";

import { esContent, frContent, itContent, ptContent } from "./latin";
import { deContent, nlContent, ruContent } from "./germanic_slavic";
import { jpContent, cnContent, krContent, vnContent, idContent } from "./asian";
import { arContent } from "./arabic";

export const studioosTranslations: Partial<Record<Language, PostContent>> = {
  es: esContent,
  fr: frContent,
  it: itContent,
  pt: ptContent,
  de: deContent,
  nl: nlContent,
  ru: ruContent,
  jp: jpContent,
  cn: cnContent,
  kr: krContent,
  vn: vnContent,
  id: idContent,
  ar: arContent,
};

