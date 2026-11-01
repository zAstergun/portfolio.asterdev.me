import type { Language } from "../aster";
import type { CertTranslationMap } from "./types";

import { ptContent, brContent, esContent, frContent, itContent } from "./latin";
import { enContent, deContent, nlContent, ruContent } from "./germanic_slavic";
import { jpContent, cnContent, krContent, vnContent, idContent } from "./asian";
import { arContent } from "./arabic";

export * from "./types";

export const VERIFY_LINK_TITLES: Record<Language, string> = {
  "pt": "Verificar Certificado Oficial",
  "br": "Verificar Certificado Oficial",
  "en": "Verify Official Certificate",
  "es": "Verificar Certificado Oficial",
  "fr": "Vérifier le Certificat Officiel",
  "de": "Offizielles Zertifikat Überprüfen",
  "it": "Verifica Certificato Ufficiale",
  "nl": "Officieel Certificaat Verifiëren",
  "ru": "Проверить официальный сертификат",
  "jp": "公式証明書を確認",
  "cn": "验证官方证书",
  "kr": "공식 수료증 확인",
  "vn": "Xác minh chứng chỉ chính thức",
  "id": "Verifikasi Sertifikat Resmi",
  "ar": "التحقق من الشهادة الرسمية"
};

export const certificationsTranslations: Record<Language, CertTranslationMap> = {
  br: brContent,
  pt: ptContent,
  en: enContent,
  es: esContent,
  fr: frContent,
  it: itContent,
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
