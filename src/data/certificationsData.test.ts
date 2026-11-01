import { describe, it, expect } from "vitest";
import { getCertifications, getCertificationById, ALL_CERTIFICATIONS } from "./certificationsData";
import { VERIFY_LINK_TITLES } from "./certificationsTranslations";
import { LANGUAGES } from "./aster";

describe("Certifications Data Suite", () => {
  it("should have exactly 37 authentic certifications registered", () => {
    expect(ALL_CERTIFICATIONS.length).toBe(37);
  });

  it("should have valid credential URLs and required metadata for every certification", () => {
    for (const cert of ALL_CERTIFICATIONS) {
      expect(cert.id).toMatch(/^cert-/);
      expect(cert.name.pt).toBeTruthy();
      expect(cert.name.en).toBeTruthy();
      expect(cert.institution).toBeTruthy();
      expect(cert.year).toBeTruthy();
      expect(cert.credentialUrl).toBeDefined();
      expect(cert.credentialUrl).toMatch(/^https?:\/\//);
      expect(cert.gradient).toHaveLength(2);
      expect(cert.tags.pt.length).toBeGreaterThan(0);
      expect(cert.tags.en.length).toBeGreaterThan(0);
      expect(cert.summary.pt.length).toBeGreaterThan(50);
      expect(cert.summary.en.length).toBeGreaterThan(50);
    }
  });

  it("should have all 37 certifications fully translated and accessible across all 15 languages", () => {
    for (const lang of LANGUAGES) {
      const certs = getCertifications(lang);
      expect(certs.length).toBe(37);

      for (const cert of certs) {
        expect(cert.id).toMatch(/^cert-/);
        expect(cert.name).toBeTruthy();
        expect(cert.name.trim().length).toBeGreaterThan(0);
        expect(cert.summary).toBeTruthy();
        expect(cert.summary.trim().length).toBeGreaterThan(50);
        expect(cert.gradient).toHaveLength(2);
        expect(cert.tags.length).toBeGreaterThan(0);
        expect(cert.lang).toBe(lang);

        // Certifications must not contain generic LinkedIn links
        const hasLinkedIn = cert.links.some((l) =>
          l.url.includes("linkedin.com")
        );
        expect(hasLinkedIn).toBe(false);

        // Every certification must have an official verification link in that language
        expect(cert.links.length).toBe(1);
        const verifyLink = cert.links[0];
        expect(verifyLink.url).toMatch(/^https?:\/\//);
        expect(verifyLink.title).toBe(VERIFY_LINK_TITLES[lang]);
        expect(verifyLink.icon).toBe("certificate");
      }
    }
  });

  it("retrieves localized certifications by ID correctly across language families", () => {
    // Portuguese (br)
    const origamidMasterPt = getCertificationById("cert-origamid-master", "br");
    expect(origamidMasterPt).toBeDefined();
    expect(origamidMasterPt?.name).toBe("Front/Back End & UX/UI Design - Master Formação");
    expect(origamidMasterPt?.links[0].url).toContain("origamid.com/certificate/a0087404");
    expect(origamidMasterPt?.links[0].title).toBe("Verificar Certificado Oficial");
    expect(origamidMasterPt?.summary).toContain("Carga Horária:");

    // English (en)
    const tsCertEn = getCertificationById("cert-origamid-typescript", "en");
    expect(tsCertEn).toBeDefined();
    expect(tsCertEn?.name).toBe("TypeScript for Beginners");
    expect(tsCertEn?.links[0].title).toBe("Verify Official Certificate");
    expect(tsCertEn?.summary).toContain("Workload:");

    // Spanish (es)
    const tsCertEs = getCertificationById("cert-origamid-typescript", "es");
    expect(tsCertEs).toBeDefined();
    expect(tsCertEs?.name).toBe("TypeScript para Principiantes");
    expect(tsCertEs?.links[0].title).toBe("Verificar Certificado Oficial");
    expect(tsCertEs?.summary).toContain("Carga Horaria:");

    // German (de)
    const tsCertDe = getCertificationById("cert-origamid-typescript", "de");
    expect(tsCertDe).toBeDefined();
    expect(tsCertDe?.name).toBe("TypeScript für Anfänger");
    expect(tsCertDe?.links[0].title).toBe("Offizielles Zertifikat Überprüfen");
    expect(tsCertDe?.summary).toContain("Stundenumfang:");

    // French (fr)
    const tsCertFr = getCertificationById("cert-origamid-typescript", "fr");
    expect(tsCertFr).toBeDefined();
    expect(tsCertFr?.name).toBe("TypeScript pour Débutants");
    expect(tsCertFr?.links[0].title).toBe("Vérifier le Certificat Officiel");
    expect(tsCertFr?.summary).toContain("Volume horaire:");

    // Japanese (jp)
    const tsCertJp = getCertificationById("cert-origamid-typescript", "jp");
    expect(tsCertJp).toBeDefined();
    expect(tsCertJp?.name).toBe("入門 TypeScript");
    expect(tsCertJp?.links[0].title).toBe("公式証明書を確認");
    expect(tsCertJp?.summary).toContain("学習時間:");

    // Chinese (cn)
    const tsCertCn = getCertificationById("cert-origamid-typescript", "cn");
    expect(tsCertCn).toBeDefined();
    expect(tsCertCn?.name).toBe("TypeScript 入门与实战");
    expect(tsCertCn?.links[0].title).toBe("验证官方证书");
    expect(tsCertCn?.summary).toContain("学时:");

    // Korean (kr)
    const tsCertKr = getCertificationById("cert-origamid-typescript", "kr");
    expect(tsCertKr).toBeDefined();
    expect(tsCertKr?.name).toBe("초급자를 위한 TypeScript");
    expect(tsCertKr?.links[0].title).toBe("공식 수료증 확인");
    expect(tsCertKr?.summary).toContain("이수 시간:");

    // Arabic (ar)
    const tsCertAr = getCertificationById("cert-origamid-typescript", "ar");
    expect(tsCertAr).toBeDefined();
    expect(tsCertAr?.name).toBe("تايب سكريبت للمبتدئين");
    expect(tsCertAr?.links[0].title).toBe("التحقق من الشهادة الرسمية");
    expect(tsCertAr?.summary).toContain("عدد الساعات:");
  });

  it("should have all certifications sorted chronologically with the most recent first", () => {
    const certs = getCertifications("br");
    expect(certs.length).toBe(37);

    // First certification should be the most recent (IoT Developer, Oct 2026)
    expect(certs[0].id).toBe("cert-descomplica-iot");
    // Second certification should be AI Developer (Aug 2026)
    expect(certs[1].id).toBe("cert-descomplica-ia");
    // Last certification should be the oldest (Conectar - Rocketseat, Jan 2023)
    expect(certs[certs.length - 1].id).toBe("cert-rocketseat-conectar");

    // Every item in ALL_CERTIFICATIONS must have an issueDate, and they should be monotonically non-increasing
    for (let i = 0; i < ALL_CERTIFICATIONS.length - 1; i++) {
      const current = ALL_CERTIFICATIONS[i].issueDate || ALL_CERTIFICATIONS[i].year;
      const next = ALL_CERTIFICATIONS[i + 1].issueDate || ALL_CERTIFICATIONS[i + 1].year;
      expect(current >= next).toBe(true);
    }
  });

  it("should have genuine complete translations for all bullet points without English leakage in non-English locales", () => {
    const enCerts = getCertifications("en");
    const enBulletsByCertId = new Map<string, string[]>();
    for (const cert of enCerts) {
      const bullets = cert.summary
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.startsWith("- "));
      enBulletsByCertId.set(cert.id, bullets);
    }

    for (const lang of LANGUAGES) {
      if (lang === "en" || lang === "pt" || lang === "br") continue;
      const certs = getCertifications(lang);
      for (const cert of certs) {
        const enBullets = enBulletsByCertId.get(cert.id) || [];
        const localBullets = cert.summary
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.startsWith("- "));

        expect(localBullets.length).toBeGreaterThan(0);
        for (const b of localBullets) {
          expect(enBullets.includes(b)).toBe(false);
        }
      }
    }
  });
});
