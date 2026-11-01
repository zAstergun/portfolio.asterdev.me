import {
  TerminalWindow,
  Cpu,
  ShieldCheck,
  Robot,
  FileText,
  Certificate,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  ArrowRight,
  ArrowSquareOut,
  Sparkle,
  Bicycle,
  Translate,
  GameController,
  Quotes,
  Users,
  Lightning,
  Code,
} from "@phosphor-icons/react";
import type { Language, ProjectItem } from "../data/aster";

export interface AboutMeDetailProps {
  isDark?: boolean;
  isDesktop?: boolean;
  language?: Language;
  links?: ProjectItem["links"];
  onOpenApp?: (appId: string) => void;
}

interface AboutTranslations {
  tagline: string;
  quote: string;

  // Origin Section
  secOrigin: string;
  originTitle: string;
  originP1: string;
  originP2: string;
  originP3: string;
  originPills: string[];

  // Pillars Section
  secPillars: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar4Title: string;
  pillar4Desc: string;

  // Beyond Code Section
  secBeyond: string;
  disciplineTitle: string;
  disciplineDesc: string;
  languagesTitle: string;
  languagesDesc: string;
  esportsTitle: string;
  esportsDesc: string;

  // Metrics Section (Education, Core Focus, Certifications, Community)
  metricEducationTitle: string;
  metricEducationValue: string;
  metricEducationSubtitle: string;

  metricFocusTitle: string;
  metricFocusValue: string;
  metricFocusSubtitle: string;

  metricCertsTitle: string;
  metricCertsValue: string;
  metricCertsSubtitle: string;

  metricCommunityTitle: string;
  metricCommunityValue: string;
  metricCommunitySubtitle: string;

  // Quick Actions
  secExplore: string;
  botCardTitle: string;
  botCardDesc: string;
  botCardAction: string;
  cvCardTitle: string;
  cvCardDesc: string;
  cvCardAction: string;
  certsCardTitle: string;
  certsCardDesc: string;
  certsCardAction: string;

  // Contact
  secContact: string;
}

const ABOUT_I18N: Record<Language, AboutTranslations> = {
  br: {
    tagline: "Construo aplicações web de alto impacto aliando interfaces fluidas, mentalidade de baixo nível e rigor técnico inegociável.",
    quote: "Meu interesse por programação não começou na teoria, mas dissecando sistemas na prática e entendendo como a máquina opera em baixo nível.",

    secOrigin: "Origem & Curiosidade Prática",
    originTitle: "De Servidores e Cheats à Engenharia Robusta",
    originP1: "A porta de entrada nunca foram tutoriais genéricos. Na adolescência, o fascínio nasceu administrando servidores dedicados de jogos online e explorando engenharia reversa para dissecação de binários e criação de cheats.",
    originP2: "Essa exploração forçou o entendimento precoce e prático de como a memória da máquina opera: ponteiros, offsets, injeção de processos e interceptação de pacotes em rede TCP/UDP.",
    originP3: "Hoje, essa mesma curiosidade analítica é canalizada para a engenharia de software web: projetar sistemas à prova de falhas, código seguro, layouts de alta fidelidade e arquiteturas sem desperdício de recursos.",
    originPills: ["Engenharia Reversa", "Gestão de Memória", "Inspeção de Pacotes", "Segurança Web"],

    secPillars: "Filosofia de Engenharia",
    pillar1Title: "Tipagem Estrita & TypeScript",
    pillar1Desc: "Contratos de tipos expressivos e seguros. Código autoverificável em tempo de compilação, prevenindo regressões e escalando sem medo.",
    pillar2Title: "Performance Obsessiva",
    pillar2Desc: "Taxa de quadros constante, métricas Core Web Vitals impecáveis, zero layout shift e microinterações táteis desenhadas com alma.",
    pillar3Title: "Engenharia Assistida por IA",
    pillar3Desc: "Uso avançado de Claude, Codex e automações de contexto para multiplicar o output técnico mantendo os mais altos padrões de qualidade.",
    pillar4Title: "Liderança Técnica & Mentoria",
    pillar4Desc: "Fundador de comunidade acadêmica; coordenação de repositórios no GitHub, revisões de código e fomento ativo ao open source.",

    secBeyond: "Além do Código: Hábitos & Interesses",
    disciplineTitle: "Disciplina & Endurance",
    disciplineDesc: "Treino diário de corrida, ciclismo e natação (rumo ao triathlon) como rotina de consistência que fortalece a resiliência mental para resolver problemas complexos.",
    languagesTitle: "Mandarim & Japonês",
    languagesDesc: "Português nativo, inglês avançado e estudo contínuo de línguas asiáticas como exercício cognitivo de expansão mental e raciocínio estruturado.",
    esportsTitle: "E-sports & Estratégia",
    esportsDesc: "Decomposição analítica de cenários competitivos globais, leitura tática em tempo real e tomada de decisão estratégica sob pressão.",

    metricEducationTitle: "Formação",
    metricEducationValue: "6º Semestre",
    metricEducationSubtitle: "Ciência da Computação (UniAmérica)",

    metricFocusTitle: "Especialidade",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Arquitetura",

    metricCertsTitle: "Certificações",
    metricCertsValue: "37 Oficiais",
    metricCertsSubtitle: "Validadas (IoT, IA, Web)",

    metricCommunityTitle: "Comunidade",
    metricCommunityValue: "Líder Técnico",
    metricCommunitySubtitle: "Mentoria & Open Source",

    secExplore: "Ecossistema & Atalhos Interativos",
    botCardTitle: "Converse com o AsterBot",
    botCardDesc: "Tire dúvidas sobre minha trajetória, projetos e mentalidade através do meu assistente de IA.",
    botCardAction: "Abrir AsterBot",
    cvCardTitle: "Currículo Completo",
    cvCardDesc: "Consulte a formação detalhada, stack técnica completa e downloads em PDF/DOCX.",
    cvCardAction: "Ver Currículo",
    certsCardTitle: "37 Certificações Oficiais",
    certsCardDesc: "Explore todas as certificações autenticadas de IoT, IA, TypeScript e Engenharia de Software.",
    certsCardAction: "Ver Certificações",

    secContact: "Conexões & Redes",
  },

  pt: {
    tagline: "Construo aplicações web de alto impacto aliando interfaces fluidas, mentalidade de baixo nível e rigor técnico inegociável.",
    quote: "O meu interesse por programação não começou na teoria, mas dissecando sistemas na prática e entendendo como a máquina opera em baixo nível.",

    secOrigin: "Origem & Curiosidade Prática",
    originTitle: "De Servidores e Cheats à Engenharia Robusta",
    originP1: "A porta de entrada nunca foram tutoriais genéricos. Na adolescência, o fascínio nasceu administrando servidores dedicados de jogos online e explorando engenharia reversa para dissecação de binários e criação de cheats.",
    originP2: "Essa exploração forçou o entendimento precoce e prático de como a memória da máquina opera: ponteiros, offsets, injeção de processos e interceção de pacotes em rede TCP/UDP.",
    originP3: "Hoje, essa mesma curiosidade analítica é canalizada para a engenharia de software web: conceber sistemas à prova de falhas, código seguro, layouts de alta fidelidade e arquiteturas sem desperdício de recursos.",
    originPills: ["Engenharia Reversa", "Gestão de Memória", "Interceção de Pacotes", "Segurança Web"],

    secPillars: "Filosofia de Engenharia",
    pillar1Title: "Tipagem Estrita & TypeScript",
    pillar1Desc: "Contratos de tipos expressivos e seguros. Código autoverificável em tempo de compilação, prevenindo regressões e escalando sem medo.",
    pillar2Title: "Performance Obsessiva",
    pillar2Desc: "Taxa de quadros constante, métricas Core Web Vitals impecáveis, zero layout shift e microinterações táteis desenhadas com alma.",
    pillar3Title: "Engenharia Assistida por IA",
    pillar3Desc: "Uso avançado de Claude, Codex e automações de contexto para multiplicar o output técnico mantendo os mais altos padrões de qualidade.",
    pillar4Title: "Liderança Técnica & Mentoria",
    pillar4Desc: "Fundador de comunidade académica; coordenação de repositórios no GitHub, revisões de código e fomento ativo ao open source.",

    secBeyond: "Além do Código: Hábitos & Interesses",
    disciplineTitle: "Disciplina & Endurance",
    disciplineDesc: "Treino diário de corrida, ciclismo e natação (rumo ao triathlon) como rotina de consistência que fortalece a resiliência mental para resolver problemas complexos.",
    languagesTitle: "Mandarim & Japonês",
    languagesDesc: "Português nativo, inglês avançado e estudo contínuo de línguas asiáticas como exercício cognitivo de expansão mental e raciocínio estruturado.",
    esportsTitle: "E-sports & Estratégia",
    esportsDesc: "Decomposição analítica de cenários competitivos globais, leitura tática em tempo real e tomada de decisão estratégica sob pressão.",

    metricEducationTitle: "Formação",
    metricEducationValue: "6º Semestre",
    metricEducationSubtitle: "Ciência da Computação (UniAmérica)",

    metricFocusTitle: "Especialidade",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Arquitetura",

    metricCertsTitle: "Certificações",
    metricCertsValue: "37 Oficiais",
    metricCertsSubtitle: "Validadas (IoT, IA, Web)",

    metricCommunityTitle: "Comunidade",
    metricCommunityValue: "Líder Técnico",
    metricCommunitySubtitle: "Mentoria & Open Source",

    secExplore: "Ecossistema & Atalhos Interativos",
    botCardTitle: "Converse com o AsterBot",
    botCardDesc: "Tire dúvidas sobre a minha trajetória, projetos e mentalidade através do meu assistente de IA.",
    botCardAction: "Abrir AsterBot",
    cvCardTitle: "Currículo Completo",
    cvCardDesc: "Consulte a formação detalhada, stack técnica completa e downloads em PDF/DOCX.",
    cvCardAction: "Ver Currículo",
    certsCardTitle: "37 Certificações Oficiais",
    certsCardDesc: "Explore todas as certificações autenticadas de IoT, IA, TypeScript e Engenharia de Software.",
    certsCardAction: "Ver Certificações",

    secContact: "Conexões & Redes",
  },

  en: {
    tagline: "I engineer high-impact web applications by uniting fluid interfaces with a low-level systems mindset and uncompromising technical rigor.",
    quote: "My interest in programming never began with theory, but by dissecting systems in practice to master how machines operate at a low level.",

    secOrigin: "Origins & Practical Curiosity",
    originTitle: "From Game Servers & Cheats to Robust Engineering",
    originP1: "My gateway was never generic tutorials. As a teenager, analytical curiosity ignited through running dedicated game servers and reverse engineering binaries for cheat development.",
    originP2: "This hands-on exploration demanded an early mastery of memory management: pointers, offsets, process injection, and raw TCP/UDP packet sniffing.",
    originP3: "Today, that same analytical drive powers modern web engineering: designing resilient systems, secure architectures, high-fidelity UI, and zero-waste performance.",
    originPills: ["Reverse Engineering", "Memory Management", "Packet Inspection", "Web Security"],

    secPillars: "Engineering Philosophy",
    pillar1Title: "Strict Typing & TypeScript",
    pillar1Desc: "Expressive and watertight type contracts. Self-verifying code at compile time that prevents regressions and scales fearlessly.",
    pillar2Title: "Obsessive Performance",
    pillar2Desc: "Rock-solid 60fps animations, pristine Core Web Vitals, zero layout shifts, and tactile micro-interactions crafted with intent.",
    pillar3Title: "AI-Augmented Engineering",
    pillar3Desc: "Advanced mastery of Claude, Codex, and automated context pipelines to multiply engineering throughput with uncompromised quality.",
    pillar4Title: "Technical Leadership & Mentorship",
    pillar4Desc: "Academic developer community founder; orchestrating GitHub repositories, conducting rigorous code reviews, and championing open source.",

    secBeyond: "Beyond Code: Habits & Interests",
    disciplineTitle: "Discipline & Endurance",
    disciplineDesc: "Daily endurance training in running, cycling, and swimming (triathlon training) as a consistency routine that strengthens mental resilience for tackling complex systems.",
    languagesTitle: "Mandarin & Japanese",
    languagesDesc: "Native Portuguese, fluent English, and ongoing daily study of East Asian languages to sharpen cognitive agility and structured thinking.",
    esportsTitle: "Competitive Esports & Strategy",
    esportsDesc: "Analytical breakdown of global esports scenes, real-time tactical appraisal, and strategic execution under pressure.",

    metricEducationTitle: "Education",
    metricEducationValue: "6th Semester",
    metricEducationSubtitle: "Computer Science (UniAmérica)",

    metricFocusTitle: "Core Focus",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Architecture",

    metricCertsTitle: "Certifications",
    metricCertsValue: "37 Official",
    metricCertsSubtitle: "Verified (IoT, AI, Web)",

    metricCommunityTitle: "Community",
    metricCommunityValue: "Tech Lead",
    metricCommunitySubtitle: "Peer Mentoring & Open Source",

    secExplore: "Ecosystem & Interactive Shortcuts",
    botCardTitle: "Chat with AsterBot",
    botCardDesc: "Inquire about my engineering journey, projects, and architecture mindset via my AI assistant.",
    botCardAction: "Open AsterBot",
    cvCardTitle: "Full Curriculum Vitae",
    cvCardDesc: "Inspect detailed academic background, comprehensive tech stack, and official downloads (PDF, DOCX).",
    cvCardAction: "View Resume",
    certsCardTitle: "37 Official Credentials",
    certsCardDesc: "Browse all verified credentials across IoT, AI, TypeScript, React, and Software Engineering.",
    certsCardAction: "View Certifications",

    secContact: "Connect & Inquire",
  },

  es: {
    tagline: "Construyo aplicaciones web de alto impacto combinando interfaces fluidas, mentalidad de bajo nivel y un rigor técnico innegociable.",
    quote: "Mi interés por la programación no empezó en la teoría, sino diseccionando sistemas en la práctica y comprendiendo cómo opera la máquina a bajo nivel.",

    secOrigin: "Origen y Curiosidad Práctica",
    originTitle: "De Servidores y Cheats a la Ingeniería Robusta",
    originP1: "La puerta de entrada nunca fueron tutoriales genéricos. En la adolescencia, el interés nació administrando servidores dedicados de juegos y explorando ingeniería inversa para crear cheats.",
    originP2: "Esta exploración me forzó a entender desde temprano cómo opera la memoria: punteros, offsets, inyección de procesos e intercepción de paquetes TCP/UDP.",
    originP3: "Hoy, esa curiosidad analítica se canaliza hacia la ingeniería web: crear software resiliente, código seguro, layouts de alta fidelidad y arquitecturas eficientes.",
    originPills: ["Ingeniería Inversa", "Gestión de Memoria", "Inspección de Red", "Seguridad Web"],

    secPillars: "Filosofía de Ingeniería",
    pillar1Title: "Tipado Estricto y TypeScript",
    pillar1Desc: "Contratos de tipos seguros y expresivos. Código autoverificable que previene regresiones y escala con total confianza.",
    pillar2Title: "Rendimiento Obsesivo",
    pillar2Desc: "60fps constantes, métricas Core Web Vitals impecables, cero layout shift y microinteracciones táctiles diseñadas con alma.",
    pillar3Title: "Ingeniería Asistida por IA",
    pillar3Desc: "Uso avanzado de Claude, Codex y pipelines de contexto para multiplicar la productividad técnica con la máxima calidad.",
    pillar4Title: "Liderazgo y Mentoría",
    pillar4Desc: "Fundador de comunidad académica técnica; gobernanza de repositorios en GitHub, revisiones de código y fomento del código abierto.",

    secBeyond: "Más Allá del Código: Hábitos e Intereses",
    disciplineTitle: "Disciplina y Resistencia",
    disciplineDesc: "Entrenamiento diario en carrera, ciclismo y natación como rutina de constancia que fortalece la resiliencia mental para resolver problemas complejos.",
    languagesTitle: "Mandarín y Japonés",
    languagesDesc: "Portugués nativo, inglés avanzado y estudio activo de idiomas asiáticos como ejercicio de agilidad mental y razonamiento estructurado.",
    esportsTitle: "E-sports y Estrategia",
    esportsDesc: "Desglose táctico de competiciones globales y toma de decisiones estratégicas bajo alta presión.",

    metricEducationTitle: "Formación",
    metricEducationValue: "6º Semestre",
    metricEducationSubtitle: "Ciencias de la Computación",

    metricFocusTitle: "Especialidad",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React y Arquitectura",

    metricCertsTitle: "Certificaciones",
    metricCertsValue: "37 Oficiales",
    metricCertsSubtitle: "Validadas (IoT, IA, Web)",

    metricCommunityTitle: "Comunidad",
    metricCommunityValue: "Líder Técnico",
    metricCommunitySubtitle: "Tutoría y Open Source",

    secExplore: "Ecosistema y Accesos Directos",
    botCardTitle: "Conversa con AsterBot",
    botCardDesc: "Haz preguntas sobre mi trayectoria, proyectos y mentalidad técnica con mi asistente de IA.",
    botCardAction: "Abrir AsterBot",
    cvCardTitle: "Currículum Completo",
    cvCardDesc: "Consulta mi formación académica, stack tecnológico y descarga en PDF/DOCX.",
    cvCardAction: "Ver Currículum",
    certsCardTitle: "37 Certificaciones Oficiales",
    certsCardDesc: "Explora todas las certificaciones validadas en IoT, IA, TypeScript y desarrollo web.",
    certsCardAction: "Ver Certificaciones",

    secContact: "Conectar y Contactar",
  },

  fr: {
    tagline: "Je conçois des applications web à fort impact alliant interfaces fluides, approche système bas niveau et rigueur technique sans compromis.",
    quote: "Mon intérêt pour la programmation n'a pas commencé par la théorie, mais par la dissection pratique des systèmes au plus près de la machine.",

    secOrigin: "Origines & Curiosité Pratique",
    originTitle: "Des serveurs de jeux à l'ingénierie robuste",
    originP1: "L'apprentissage s'est fait loin des tutoriels classiques. Dès l'adolescence, la passion s'est forgée en gérant des serveurs de jeux en ligne et en explorant la rétro-ingénierie de cheats.",
    originP2: "Cette pratique m'a appris concrètement la gestion de la mémoire : pointeurs, décalages (offsets), injection de processus et analyse de paquets TCP/UDP.",
    originP3: "Aujourd'hui, cette rigueur d'analyse soutient mes projets web : systèmes résilients, sécurité sans faille et interfaces ergonomiques sans surcharge.",
    originPills: ["Rétro-ingénierie", "Gestion Mémoire", "Analyse Réseau", "Sécurité Web"],

    secPillars: "Philosophie d'Ingénierie",
    pillar1Title: "Typage Strict & TypeScript",
    pillar1Desc: "Contrats de typage stricts et fiables pour un code auto-documenté qui évolue sereinement.",
    pillar2Title: "Performance Obsédante",
    pillar2Desc: "Fluidité à 60fps constante, Core Web Vitals impeccables et micro-interactions soignées.",
    pillar3Title: "Ingénierie Assistée par IA",
    pillar3Desc: "Maîtrise de Claude, Codex et flux contextuels pour démultiplier l'efficacité sans compromis technique.",
    pillar4Title: "Leadership & Transmission",
    pillar4Desc: "Fondateur d'une communauté technique étudiante, mentorat régulier et promotion de l'open source.",

    secBeyond: "Au-delà du Code : Habitudes & Centres d'Intérêt",
    disciplineTitle: "Discipline & Endurance",
    disciplineDesc: "Pratique régulière de course, cyclisme et natation comme source de constance et de clarté mentale face aux défis techniques.",
    languagesTitle: "Mandarin & Japonais",
    languagesDesc: "Portugais natal, anglais courant et apprentissage actif de langues orientales pour stimuler la plasticité cognitive.",
    esportsTitle: "E-sport & Analyse Stratégique",
    esportsDesc: "Décryptage tactique des compétitions d'élite et prise de décision rapide sous pression.",

    metricEducationTitle: "Formation",
    metricEducationValue: "6e Semestre",
    metricEducationSubtitle: "Licence Informatique (UniAmérica)",

    metricFocusTitle: "Spécialité",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Architecture",

    metricCertsTitle: "Certifications",
    metricCertsValue: "37 Officielles",
    metricCertsSubtitle: "Vérifiées (IoT, IA, Web)",

    metricCommunityTitle: "Communauté",
    metricCommunityValue: "Lead Tech",
    metricCommunitySubtitle: "Mentorat & Open Source",

    secExplore: "Écosystème & Raccourcis",
    botCardTitle: "Échanger avec AsterBot",
    botCardDesc: "Posez vos questions sur mon parcours et mes projets via mon assistant IA.",
    botCardAction: "Ouvrir AsterBot",
    cvCardTitle: "Curriculum Vitae",
    cvCardDesc: "Consultez mon parcours détaillé, ma stack et téléchargez le CV (PDF, DOCX).",
    cvCardAction: "Consulter le CV",
    certsCardTitle: "37 Certifications",
    certsCardDesc: "Consultez l'ensemble des accréditations officielles vérifiables.",
    certsCardAction: "Voir Certifications",

    secContact: "Réseaux & Contact",
  },

  de: {
    tagline: "Ich baue wirkungsvolle Webanwendungen durch flüssige Interfaces, Low-Level-Verständnis und kompromisslose technische Präzision.",
    quote: "Mein Interesse am Programmieren begann mit der praktischen Systemzerlegung und Reverse Engineering, nicht mit grauer Theorie.",

    secOrigin: "Ursprung & Praktische Neugier",
    originTitle: "Von Gameservern zur robusten Softwarearchitektur",
    originP1: "Der Einstieg geschah über Gameserver-Administration und das Zerlegen von Binärdateien für Cheats in der Jugendzeit.",
    originP2: "Daraus entstand tiefes praktisches Verständnis für Speicheradressen, Pointer, Offsets und Netzwerkpakete.",
    originP3: "Heute nutze ich diese analytische Tiefe, um moderne, sichere und hochperformante Webanwendungen zu entwickeln.",
    originPills: ["Reverse Engineering", "Speicherverwaltung", "Paketanalyse", "Websicherheit"],

    secPillars: "Engineering-Philosophie",
    pillar1Title: "Striktes TypeScript",
    pillar1Desc: "Präzise Typverträge für wartbaren, selbstdokumentierenden und ausfallsicheren Code.",
    pillar2Title: "Kompromisslose Performance",
    pillar2Desc: "Konstante 60fps, perfekte Web Vitals und taktile Mikro-Interaktionen mit Seele.",
    pillar3Title: "KI-gestützte Entwicklung",
    pillar3Desc: "Zielgerichteter Einsatz moderner KI-Systeme (Claude, Codex) zur Maximierung der Entwicklungsleistung.",
    pillar4Title: "Technisches Mentoring",
    pillar4Desc: "Gründer einer studentischen Community, aktives GitHub-Management und Förderung von Open-Source.",

    secBeyond: "Jenseits des Codes: Gewohnheiten & Interessen",
    disciplineTitle: "Disziplin & Ausdauer",
    disciplineDesc: "Regelmäßiges Ausdauertraining (Laufen, Radfahren, Schwimmen) als Fundament für mentale Belastbarkeit und Fokus bei komplexer Softwarearchitektur.",
    languagesTitle: "Mandarin & Japanisch",
    languagesDesc: "Portugiesisch (Muttersprache), Englisch (fließend) und kontinuierliches Erlernen asiatischer Sprachen zur Schulung kognitiver Agilität.",
    esportsTitle: "E-Sport & Taktische Analyse",
    esportsDesc: "Analytische Beobachtung internationaler E-Sport-Wettkämpfe und strategische Entscheidungsfindung unter Druck.",

    metricEducationTitle: "Ausbildung",
    metricEducationValue: "6. Semester",
    metricEducationSubtitle: "B.Sc. Informatik (UniAmérica)",

    metricFocusTitle: "Schwerpunkt",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Architektur",

    metricCertsTitle: "Zertifikate",
    metricCertsValue: "37 Offizielle",
    metricCertsSubtitle: "Bestätigt (IoT, KI, Web)",

    metricCommunityTitle: "Community",
    metricCommunityValue: "Tech Lead",
    metricCommunitySubtitle: "Mentoring & Open Source",

    secExplore: "Interaktive Navigation",
    botCardTitle: "Fragen an AsterBot",
    botCardDesc: "Stellen Sie meinem KI-Assistenten Fragen zu meinem Werdegang und meinen Projekten.",
    botCardAction: "AsterBot starten",
    cvCardTitle: "Vollständiger Lebenslauf",
    cvCardDesc: "Detaillierte Übersicht über Werdegang, Stack und Dokumenten-Downloads.",
    cvCardAction: "Lebenslauf ansehen",
    certsCardTitle: "37 Offizielle Zertifikate",
    certsCardDesc: "Alle verifizierten Abschlüsse in IoT, KI und TypeScript einsehen.",
    certsCardAction: "Zertifikate öffnen",

    secContact: "Kontakt & Netzwerke",
  },

  it: {
    tagline: "Costruisco applicazioni web ad alto impatto unendo interfacce reattive, comprensione di basso livello e massimo rigore tecnico.",
    quote: "La mia passione per la programmazione è nata sezionando sistemi nella pratica e capendo come opera la memoria della macchina.",

    secOrigin: "Origini & Curiosità Pratica",
    originTitle: "Dai Server di Gioco all'Ingegneria Robusta",
    originP1: "Tutto è iniziato nell'adolescenza gestendo server dedicati di giochi ed esplorando il reverse engineering.",
    originP2: "Questa esperienza ha insegnato la gestione della memoria, i puntatori e l'analisi dei pacchetti di rete.",
    originP3: "Oggi applico questa mentalità analitica nello sviluppo web sicuro, affidabile e senza sprechi di risorse.",
    originPills: ["Reverse Engineering", "Gestione Memoria", "Analisi di Rete", "Sicurezza Web"],

    secPillars: "Filosofia di Sviluppo",
    pillar1Title: "TypeScript Rigoroso",
    pillar1Desc: "Contratti di tipo rigorosi per un codice sicuro in fase di compilazione.",
    pillar2Title: "Performance Impeccabile",
    pillar2Desc: "Fluidità a 60fps, Web Vitals ottimali e micro-interazioni curate.",
    pillar3Title: "Ingegneria Assistita da IA",
    pillar3Desc: "Uso esperto di Claude e Codex per amplificare la produttività con la massima qualità.",
    pillar4Title: "Leadership & Community",
    pillar4Desc: "Fondatore di community accademica tecnica e coordinatore di progetti open source.",

    secBeyond: "Oltre il Codice: Abitudini & Interessi",
    disciplineTitle: "Disciplina & Resistenza",
    disciplineDesc: "Allenamento costante di corsa, bici e nuoto come routine che rafforza la lucidità mentale per affrontare problemi tecnici complessi.",
    languagesTitle: "Mandarino & Giapponese",
    languagesDesc: "Portoghese nativo, inglese fluente e studio costante di lingue orientali per stimolare l'elasticità cognitiva.",
    esportsTitle: "E-sports & Tattica",
    esportsDesc: "Analisi strategica delle competizioni competitive globali sotto pressione.",

    metricEducationTitle: "Formazione",
    metricEducationValue: "6º Semestre",
    metricEducationSubtitle: "Informatica (UniAmérica)",

    metricFocusTitle: "Specializzazione",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Architettura",

    metricCertsTitle: "Certificazioni",
    metricCertsValue: "37 Ufficiali",
    metricCertsSubtitle: "Verificate (IoT, IA, Web)",

    metricCommunityTitle: "Community",
    metricCommunityValue: "Tech Lead",
    metricCommunitySubtitle: "Mentoring & Open Source",

    secExplore: "Ecosistema & Scorciatoie",
    botCardTitle: "Parla con AsterBot",
    botCardDesc: "Fai domande sul mio percorso e sui miei progetti al mio assistente IA.",
    botCardAction: "Apri AsterBot",
    cvCardTitle: "Curriculum Vitae",
    cvCardDesc: "Consulta il CV completo e scarica i file in formato PDF e DOCX.",
    cvCardAction: "Vedi Curriculum",
    certsCardTitle: "37 Certificazioni",
    certsCardDesc: "Scopri tutte le certificazioni con link di verifica autentici.",
    certsCardAction: "Vedi Certificazioni",

    secContact: "Connessioni & Contatti",
  },

  nl: {
    tagline: "Ik bouw hoogwaardige webapplicaties door vloeiende interfaces te combineren met een low-level mindset en ongeëvenaarde technische precisie.",
    quote: "Mijn interesse in programmeren begon niet met theorie, maar met het ontleden van systemen en geheugen in de praktijk.",

    secOrigin: "Oorsprong & Praktische Nieuwsgierigheid",
    originTitle: "Van Gameservers tot Solide Software",
    originP1: "Het begon in mijn jeugd met het beheren van gameservers en reverse engineering van binaire code voor cheats.",
    originP2: "Dit leidde tot vroegtijdig inzicht in pointers, geheugenoffsets en netwerkpakketinspectie.",
    originP3: "Diezelfde nieuwsgierigheid gebruik ik nu voor robuuste, veilige en efficiënte webapplicaties.",
    originPills: ["Reverse Engineering", "Geheugenbeheer", "Pakketinspectie", "Webveiligheid"],

    secPillars: "Engineering Filosofie",
    pillar1Title: "Strikte TypeScript",
    pillar1Desc: "Waterdichte typecontracten voor betrouwbare en schaalbare software.",
    pillar2Title: "Obsessieve Performance",
    pillar2Desc: "Stabiele 60fps, vlekkeloze Web Vitals en voelbare micro-interacties.",
    pillar3Title: "AI-Ondersteund Ontwikkelen",
    pillar3Desc: "Doordachte inzet van Claude en Codex voor snellere oplevering met hoogste kwaliteit.",
    pillar4Title: "Mentorschap & Community",
    pillar4Desc: "Oprichter van een studentencommunity en actieve bevordering van open-source.",

    secBeyond: "Buiten de Code: Gewoonten & Interesses",
    disciplineTitle: "Discipline & Uithouding",
    disciplineDesc: "Regelmatige duurtraining (hardlopen, fietsen, zwemmen) om mentale veerkracht en focus bij complexe systemen te versterken.",
    languagesTitle: "Mandarijn & Japans",
    languagesDesc: "Moedertaal Portugees, vloeiend Engels en dagelijkse studie van Aziatische talen voor cognitieve scherpte.",
    esportsTitle: "E-sports & Strategie",
    esportsDesc: "Tactische analyse van e-sports op het hoogste competitieve niveau.",

    metricEducationTitle: "Opleiding",
    metricEducationValue: "6e Semester",
    metricEducationSubtitle: "Informatica (UniAmérica)",

    metricFocusTitle: "Specialisatie",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Architectuur",

    metricCertsTitle: "Certificeringen",
    metricCertsValue: "37 Officiële",
    metricCertsSubtitle: "Gevalideerd (IoT, AI, Web)",

    metricCommunityTitle: "Community",
    metricCommunityValue: "Tech Lead",
    metricCommunitySubtitle: "Mentoring & Open Source",

    secExplore: "Ecosysteem & Snelkoppelingen",
    botCardTitle: "Vraag het AsterBot",
    botCardDesc: "Stel vragen over mijn projecten en achtergrond aan mijn AI-assistent.",
    botCardAction: "Open AsterBot",
    cvCardTitle: "Volledig Curriculum Vitae",
    cvCardDesc: "Bekijk mijn academische achtergrond en download het CV in PDF/DOCX.",
    cvCardAction: "Bekijk CV",
    certsCardTitle: "37 Certificeringen",
    certsCardDesc: "Bekijk alle behaalde officiële certificaten in het portfolio.",
    certsCardAction: "Bekijk Certificeringen",

    secContact: "Verbinden & Contact",
  },

  ru: {
    tagline: "Создаю высоконагруженные веб-приложения, объединяя безупречный интерфейс, низкоуровневое мышление и бескомпромиссную инженерную дисциплину.",
    quote: "Мой интерес к разработке начался не с теории, а с препарирования систем на практике и понимания работы памяти.",

    secOrigin: "Истоки & Практический интерес",
    originTitle: "От игровых серверов до надежной инженерии",
    originP1: "Мой путь начался в подростковом возрасте с настройки игровых серверов и реверс-инжиниринга читов.",
    originP2: "Это дало раннее понимание работы памяти машины: указатели, смещения и перехват сетевых пакетов.",
    originP3: "Сегодня этот аналитический опыт направлен на создание надежных, быстрых и безопасных веб-систем.",
    originPills: ["Реверс-инжиниринг", "Работа с памятью", "Анализ трафика", "Веб-безопасность"],

    secPillars: "Инженерная философия",
    pillar1Title: "Строгий TypeScript",
    pillar1Desc: "Надежные контракты типов для самопроверяемого кода без регрессий.",
    pillar2Title: "Фокус на производительности",
    pillar2Desc: "Плавные 60 кадров/сек, эталонные Core Web Vitals и продуманные микро-взаимодействия.",
    pillar3Title: "AI-ассистированная разработка",
    pillar3Desc: "Продвинутое применение Claude, Codex и контекстных пайплайнов для максимальной продуктивности.",
    pillar4Title: "Лидерство & Наставничество",
    pillar4Desc: "Основатель студенческого IT-сообщества, ревью кода и развитие культуры open source.",

    secBeyond: "Вне кода: Привычки & Интересы",
    disciplineTitle: "Дисциплина и тренировки",
    disciplineDesc: "Регулярные тренировки на выносливость (бег, велоспорт, плавание) как основа ментальной стойкости при решении архитектурных задач.",
    languagesTitle: "Китайский & Японский",
    languagesDesc: "Родной португальский, свободный английский и активное изучение восточных языков для расширения когнитивной гибкости.",
    esportsTitle: "Киберспорт и тактика",
    esportsDesc: "Аналитический разбор соревновательных турниров и принятие тактических решений.",

    metricEducationTitle: "Образование",
    metricEducationValue: "6-й семестр",
    metricEducationSubtitle: "Компьютерные науки (UniAmérica)",

    metricFocusTitle: "Специализация",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React и архитектура",

    metricCertsTitle: "Сертификаты",
    metricCertsValue: "37 Официальных",
    metricCertsSubtitle: "Проверенные дипломы (IoT, AI)",

    metricCommunityTitle: "Сообщество",
    metricCommunityValue: "Tech Lead",
    metricCommunitySubtitle: "Менторство и Open Source",

    secExplore: "Экосистема и быстрые действия",
    botCardTitle: "Общение с AsterBot",
    botCardDesc: "Задайте вопросы о моем опыте и проектах моему AI-ассистенту.",
    botCardAction: "Открыть AsterBot",
    cvCardTitle: "Полное резюме",
    cvCardDesc: "Ознакомьтесь с подробным резюме и скачайте его в форматах PDF/DOCX.",
    cvCardAction: "Смотреть резюме",
    certsCardTitle: "37 Сертификатов",
    certsCardDesc: "Изучите все подтвержденные дипломы и сертификаты.",
    certsCardAction: "Смотреть сертификаты",

    secContact: "Контакты и связи",
  },

  ar: {
    tagline: "أبني تطبيقات ويب عالية التأثير من خلال الجمع بين الواجهات السلسة، وفهم الأنظمة منخفضة المستوى، والدقة الهندسية الصارمة.",
    quote: "لم يبدأ اهتمامي بالبرمجة من النظريات، بل من خلال تفكيك الأنظمة عملياً وفهم كيفية عمل الذاكرة في المستويات المنخفضة.",

    secOrigin: "البدايات والفضول العملي",
    originTitle: "من خوادم الألعاب والهندسة العكسية إلى البرمجيات القوية",
    originP1: "كانت البداية في مرحلة المراهقة من خلال إدارة خوادم الألعاب واستكشاف الهندسة العكسية للملفات الثنائية.",
    originP2: "أكسبني ذلك فهماً مبكراً لإدارة ذاكرة الحاسوب: المؤشرات، والإزاحات، واعتراض حزم البيانات الشبكية.",
    originP3: "اليوم، أوجه هذا الفضول التحليلي لبناء تطبيقات ويب آمنة وعالية الأداء وخالية من الهدر.",
    originPills: ["الهندسة العكسية", "إدارة الذاكرة", "فحص الشبكات", "أمان الويب"],

    secPillars: "فلسفة الهندسة",
    pillar1Title: "الكتابة الصارمة بـ TypeScript",
    pillar1Desc: "عقود بيانات صارمة تضمن استقرار الشيفرة البرمجية عند التوسع.",
    pillar2Title: "هوس الأداء والسرعة",
    pillar2Desc: "معدل 60 إطاراً في الثانية، ومؤشرات Core Web Vitals ممتازة، وتفاعلات دقيقة.",
    pillar3Title: "الهندسة المعززة بالذكاء الاصطناعي",
    pillar3Desc: "الاستفادة المتقدمة من Claude وCodex لمضاعفة الإنتاجية التقنية بأعلى جودة.",
    pillar4Title: "القيادة التقنية والتوجيه",
    pillar4Desc: "مؤسس مجتمع طلابي تقني مكرس للتوجيه المستمر والمساهمة في المصادر المفتوحة.",

    secBeyond: "ما وراء الكود: العادات والاهتمامات",
    disciplineTitle: "الانضباط وقوة التحمل",
    disciplineDesc: "تمارين رياضية منتظمة لتعزيز التركيز الذهني والصلابة في مواجهة التحديات البرمجية المعقدة.",
    languagesTitle: "الصينية واليابانية",
    languagesDesc: "البرتغالية الأم، والإنجليزية بطلاقة، والتعلم المستمر للغات الشرقية لتطوير التفكير المنطقي.",
    esportsTitle: "الرياضات الإلكترونية والتكتيك",
    esportsDesc: "التحليل الاستراتيجي للمنافسات التكتيكية العالمية واتخاذ القرار تحت الضغط.",

    metricEducationTitle: "التعليم",
    metricEducationValue: "الفصل السادس",
    metricEducationSubtitle: "علوم الحاسوب (UniAmérica)",

    metricFocusTitle: "التخصص الرئيسي",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript وReact وهندسة النظم",

    metricCertsTitle: "الشهادات",
    metricCertsValue: "37 شهادة رسمية",
    metricCertsSubtitle: "معتمدة وموثقة (IoT, AI)",

    metricCommunityTitle: "المجتمع التقني",
    metricCommunityValue: "قائد تقني",
    metricCommunitySubtitle: "توجيه طلابي ومصادر مفتوحة",

    secExplore: "روابط وتفاعلات سريعة",
    botCardTitle: "تحدث مع AsterBot",
    botCardDesc: "اسأل مساعدي الذكي عن مسيرتي ومشاريعي التقنية.",
    botCardAction: "فتح AsterBot",
    cvCardTitle: "السيرة الذاتية الكاملة",
    cvCardDesc: "اطلع على السيرة الذاتية المفصلة مع خيارات التحميل بـ PDF وDOCX.",
    cvCardAction: "عرض السيرة الذاتية",
    certsCardTitle: "37 شهادة رسمية",
    certsCardDesc: "استكشف جميع الشهادات المعتمدة في الذكاء الاصطناعي وTypeScript.",
    certsCardAction: "عرض الشهادات",

    secContact: "التواصل والشبكات",
  },

  jp: {
    tagline: "流麗なUI、低レイヤーのシステム探求心、そして妥協なき技術的探求を融合し、高インパクトなWeb体験を構築します。",
    quote: "プログラミングへの情熱は机上の理論ではなく、ゲームサーバーの解体や低レイヤーでの実践的リバースエンジニアリングから始まりました。",

    secOrigin: "原点 & 実践的探求心",
    originTitle: "ゲームサーバーとチート解析から堅牢な工学へ",
    originP1: "一般的なチュートリアルが私の入口ではありませんでした。10代の頃、ゲーム専用サーバーの運用やバイナリの逆アセンブルに夢中になりました。",
    originP2: "この経験を通じて、メモリ空間、ポインタ、オフセット、TCP/UDPパケットの監視といった低レイヤーの仕組みを実践で学びました。",
    originP3: "現在はこの分析的探求心をモダンWeb開発に注ぎ、堅牢で安全、リソースの無駄のない洗練されたシステムを設計しています。",
    originPills: ["リバースエンジニアリング", "メモリ管理", "パケット解析", "Webセキュリティ"],

    secPillars: "エンジニアリング哲学",
    pillar1Title: "厳格なTypeScript工学",
    pillar1Desc: "厳密な型契約による自己検証コード。リグレッションを防ぎ、自信を持ってスケールさせます。",
    pillar2Title: "圧倒的なパフォーマンスへの執念",
    pillar2Desc: "常時60fpsの滑らかさ、完璧なCore Web Vitals、魂を込めた細部のマイクロインタラクション。",
    pillar3Title: "AI支援開発の徹底活用",
    pillar3Desc: "ClaudeやCodexを戦略的に駆使し、最高品質を維持しながらエンジニアリング速度を最大化します。",
    pillar4Title: "技術コミュニティの主導 & メンター",
    pillar4Desc: "学生技術コミュニティの創設者として、GitHubリポジトリ運用やコードレビュー、オープンソース活動を推進。",

    secBeyond: "コードの先にあるもの: 習慣 & 関心事",
    disciplineTitle: "自己規律 & エンデュランス",
    disciplineDesc: "ランニング・サイクリング・水泳の継続的なトレーニングを通じて、複雑なソフトウェア課題に対峙する集中力と粘り強さを維持。",
    languagesTitle: "中国語（簡体字） & 日本語の継続学習",
    languagesDesc: "母国語のポルトガル語、流暢な英語に加え、アジア言語を日々学習。文字体系の探求が認知力と構造的思考を研ぎ澄まします。",
    esportsTitle: "eスポーツ & 戦術的分析",
    esportsDesc: "世界最高峰の競技シーンにおけるリアルタイムの戦術判断と分析的思考。",

    metricEducationTitle: "学歴",
    metricEducationValue: "第6学期",
    metricEducationSubtitle: "コンピュータサイエンス学士",

    metricFocusTitle: "専門分野",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript・React・設計",

    metricCertsTitle: "認定資格",
    metricCertsValue: "37件の公式資格",
    metricCertsSubtitle: "認証・検証済み (IoT, AI)",

    metricCommunityTitle: "コミュニティ",
    metricCommunityValue: "技術リーダー",
    metricCommunitySubtitle: "学生メンター & オープンソース",

    secExplore: "ポートフォリオ内ショートカット",
    botCardTitle: "AsterBotとチャット",
    botCardDesc: "経歴やプロジェクト、技術スタックについてAIアシスタントに質問できます。",
    botCardAction: "AsterBotを開く",
    cvCardTitle: "詳細な履歴書 (CV)",
    cvCardDesc: "詳細な学歴、技術スタック、PDF/DOCXのダウンロードが可能です。",
    cvCardAction: "履歴書を見る",
    certsCardTitle: "37件の公式資格",
    certsCardDesc: "IoT、AI、TypeScript、React等の公式資格一覧を確認できます。",
    certsCardAction: "資格一覧を見る",

    secContact: "リンク & コンタクト",
  },

  kr: {
    tagline: "유려한 인터페이스, 로우레벨 시스템적 사고, 그리고 타협 없는 기술적 엄격함을 바탕으로 고성능 웹을 구축합니다.",
    quote: "프로그래밍에 대한 관심은 이론이 아니라 시스템을 직접 분해하고 메모리가 작동하는 방식을 탐구하면서 시작되었습니다.",

    secOrigin: "시작 & 실전적 호기심",
    originTitle: "게임 서버와 치트 분석에서 탄탄한 소프트웨어 엔지니어링으로",
    originP1: "평범한 튜토리얼로 시작하지 않았습니다. 청소년 시절 온라인 게임 전용 서버를 직접 운영하고 바이너리 리버스 엔지니어링을 탐구했습니다.",
    originP2: "이 과정에서 포인터, 오프셋, 프로세스 인젝션, TCP/UDP 패킷 분석 등 시스템의 로우레벨 구조를 체득했습니다.",
    originP3: "오늘날 이러한 분석적 사고를 웹 엔지니어링에 융합하여 보안성 높고 자원 낭비 없는 고성능 제품을 설계합니다.",
    originPills: ["리버스 엔지니어링", "메모리 관리", "패킷 분석", "웹 보안"],

    secPillars: "엔지니어링 철학",
    pillar1Title: "엄격한 TypeScript 타이핑",
    pillar1Desc: "컴파일 타임에 자체 검증되는 안전한 타입 시스템으로 견고한 소프트웨어를 만듭니다.",
    pillar2Title: "집요한 성능 최적화",
    pillar2Desc: "안정적인 60fps, 무결한 Core Web Vitals, 사용자 경험을 극대화하는 세밀한 마이크로 인터랙션.",
    pillar3Title: "AI 증강 엔지니어링",
    pillar3Desc: "Claude, Codex를 능숙하게 활용하여 고품질을 유지하며 개발 생산성을 극대화합니다.",
    pillar4Title: "기술 리더십 & 멘토링",
    pillar4Desc: "대학 기술 커뮤니티 설립자로서 GitHub 거버넌스와 오픈소스 협업 문화를 주도합니다.",

    secBeyond: "코드 너머의 삶: 습관 & 관심사",
    disciplineTitle: "자기 규율 & 지구력",
    disciplineDesc: "러닝, 사이클, 수영의 지속적인 훈련을 통해 복잡한 소프트웨어 시스템을 끝까지 해결하는 집중력과 회복탄력성을 유지합니다.",
    languagesTitle: "중국어 & 일본어 지속 학습",
    languagesDesc: "모국어인 포르투갈어와 유창한 영어 외에도 아시아 언어를 매일 학습하여 인지 유연성을 넓힙니다.",
    esportsTitle: "e스포츠 & 전략적 분석",
    esportsDesc: "글로벌 e스포츠 경기 분석과 압박 속에서의 실시간 전략적 의사결정.",

    metricEducationTitle: "학력",
    metricEducationValue: "6학기",
    metricEducationSubtitle: "컴퓨터공학과 (UniAmérica)",

    metricFocusTitle: "전문 분야",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & 아키텍처",

    metricCertsTitle: "공식 자격증",
    metricCertsValue: "37개 공식 인증",
    metricCertsSubtitle: "검증 완료 (IoT, AI, Web)",

    metricCommunityTitle: "커뮤니티",
    metricCommunityValue: "테크 리드",
    metricCommunitySubtitle: "학생 멘토링 & 오픈소스",

    secExplore: "포트폴리오 바로가기",
    botCardTitle: "AsterBot과 대화하기",
    botCardDesc: "나의 여정, 프로젝트, 기술적 철학에 대해 AI 어시스턴트에게 물어보세요.",
    botCardAction: "AsterBot 열기",
    cvCardTitle: "전체 이력서 (CV)",
    cvCardDesc: "상세 학력, 전체 기술 스택 및 PDF/DOCX 다운로드 지원.",
    cvCardAction: "이력서 보기",
    certsCardTitle: "37개 공식 인증서",
    certsCardDesc: "IoT, AI, TypeScript 등 공식 검증된 자격증을 확인하세요.",
    certsCardAction: "자격증 보기",

    secContact: "연결 & 문의",
  },

  cn: {
    tagline: "将极致流畅的用户界面、底层系统的逆向思维与严谨的工程标准相结合，打造高质量Web应用。",
    quote: "我对编程的兴趣从未始于枯燥的理论，而是始于动手解剖系统运作与底层内存实践。",

    secOrigin: "起点 & 实战探索",
    originTitle: "从游戏服务器与逆向工程到稳健软件架构",
    originP1: "我的入门不是千篇一律的教程。少年时期，我通过架设专属游戏服务器和逆向工程研究二进制文件与游戏机制。",
    originP2: "这一经历让我早期便深刻掌握了计算机内存机制：指针、偏移量、进程注入以及网络数据包截取。",
    originP3: "今天，我将这种严苛的分析思维注入现代Web工程中：构建高容错、强安全、高帧率且零浪费的可靠系统。",
    originPills: ["逆向工程", "内存管理", "数据包分析", "Web安全"],

    secPillars: "工程哲学",
    pillar1Title: "严格的 TypeScript 类型工程",
    pillar1Desc: "严密的类型契约，在编译阶段保证代码自验证与平滑扩展。",
    pillar2Title: "对性能的执着追求",
    pillar2Desc: "恒定60fps流畅度，卓越的 Core Web Vitals 与有温度的微交互。",
    pillar3Title: "AI 赋能的高效研发",
    pillar3Desc: "熟练运用 Claude、Codex 及上下文流水线，成倍提升研发效能且保持顶尖标准。",
    pillar4Title: "技术领导力与社区导师",
    pillar4Desc: "创立高校技术社区，主持 GitHub 代码审查，积极推广开源精神与同伴协作。",

    secBeyond: "代码之外：习惯与心智",
    disciplineTitle: "自律与耐力",
    disciplineDesc: "坚持长跑、骑行与游泳的日常锻炼，锻炼面对复杂工程难题时不懈推进的心理韧性与耐力。",
    languagesTitle: "中文（普通话）与日语学习",
    languagesDesc: "母语葡萄牙语、精通英语，并持续日常学习东方语言，不断拓展认知敏锐度与结构化思维。",
    esportsTitle: "电子竞技与战术剖析",
    esportsDesc: "对高水平电子竞技比赛进行实时战术复盘与抗压决策分析。",

    metricEducationTitle: "学历背景",
    metricEducationValue: "第6学期",
    metricEducationSubtitle: "计算机科学学士 (UniAmérica)",

    metricFocusTitle: "核心方向",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript、React 与系统架构",

    metricCertsTitle: "官方资质",
    metricCertsValue: "37 项官方证书",
    metricCertsSubtitle: "真实有效可查验 (IoT, AI)",

    metricCommunityTitle: "技术社区",
    metricCommunityValue: "技术负责人",
    metricCommunitySubtitle: "高校导师与开源协作",

    secExplore: "生态互动与快捷入口",
    botCardTitle: "与 AsterBot 对话",
    botCardDesc: "向我的AI助手提问关于我的技术经历、项目与工程理念。",
    botCardAction: "开启 AsterBot",
    cvCardTitle: "完整简历 (CV)",
    cvCardDesc: "查阅详细学术背景、完整技术栈并支持下载 PDF/DOCX。",
    cvCardAction: "查看简历",
    certsCardTitle: "37 项官方资质",
    certsCardDesc: "浏览涵盖物联网、人工智能、TypeScript 与全栈工程的全部证书。",
    certsCardAction: "查看证书",

    secContact: "联系与社交主页",
  },

  vn: {
    tagline: "Tôi xây dựng các ứng dụng web hiệu năng cao bằng cách kết hợp giao diện mượt mà, tư duy hệ thống cấp thấp và kỷ luật kỹ thuật chuẩn mực.",
    quote: "Niềm đam mê lập trình của tôi bắt đầu từ việc mổ xẻ các hệ thống trong thực tế và hiểu sâu cách máy tính vận hành ở tầng thấp.",

    secOrigin: "Khởi nguồn & Đam mê Thực chiến",
    originTitle: "Từ Máy chủ Trò chơi & Dịch ngược đến Kỹ thuật Phần mềm Bền vững",
    originP1: "Khởi đầu không phải là những bài hướng dẫn khuôn mẫu. Thời niên thiếu, niềm đam mê nhen nhóm khi tôi quản trị máy chủ game và dịch ngược nhị phân để tạo cheat.",
    originP2: "Hành trình này buộc tôi phải hiểu sớm về quản lý bộ nhớ: con trỏ, độ lệch offset, can thiệp tiến trình và bắt gói tin mạng TCP/UDP.",
    originP3: "Ngày nay, tư duy phân tích đó được chuyển hóa vào kỹ thuật web hiện đại: thiết kế hệ thống an toàn, kiến trúc sạch và giao diện tối ưu không dư thừa.",
    originPills: ["Dịch ngược mã", "Quản lý bộ nhớ", "Phân tích gói tin", "Bảo mật Web"],

    secPillars: "Triết lý Kỹ thuật",
    pillar1Title: "TypeScript Chặt chẽ",
    pillar1Desc: "Các ràng buộc kiểu dữ liệu chuẩn xác giúp mã tự kiểm chứng và mở rộng an tâm.",
    pillar2Title: "Hiệu năng Tuyệt đối",
    pillar2Desc: "Khung hình 60fps mượt mà, chỉ số Web Vitals hoàn hảo và tương tác vi mô tinh tế.",
    pillar3Title: "Kỹ thuật Hỗ trợ bởi AI",
    pillar3Desc: "Ứng dụng sâu Claude và Codex để nhân đôi năng suất kỹ thuật với chất lượng cao nhất.",
    pillar4Title: "Lãnh đạo Kỹ thuật & Cộng đồng",
    pillar4Desc: "Sáng lập cộng đồng học thuật sinh viên, quản trị kho mã GitHub và thúc đẩy mã nguồn mở.",

    secBeyond: "Vượt ra ngoài Mã nguồn: Thói quen & Mối quan tâm",
    disciplineTitle: "Kỷ luật & Bền bỉ",
    disciplineDesc: "Tập luyện thể thao thường xuyên (chạy bộ, đạp xe, bơi lội) như một thói quen giúp duy trì sự tập trung và kiên cường trước các vấn đề kỹ thuật hóc búa.",
    languagesTitle: "Học Tiếng Quan Thoại & Tiếng Nhật",
    languagesDesc: "Tiếng Bồ Đào Nha bản ngữ, tiếng Anh thành thạo và liên tục học các ngôn ngữ châu Á để rèn luyện tư duy cấu trúc.",
    esportsTitle: "Thể thao điện tử & Chiến thuật",
    esportsDesc: "Phân tích chiến thuật thi đấu đỉnh cao và ra quyết định trong môi trường áp lực.",

    metricEducationTitle: "Học vấn",
    metricEducationValue: "Học kỳ 6",
    metricEducationSubtitle: "Khoa học Máy tính (UniAmérica)",

    metricFocusTitle: "Chuyên môn",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Kiến trúc",

    metricCertsTitle: "Chứng chỉ",
    metricCertsValue: "37 Chứng chỉ",
    metricCertsSubtitle: "Được xác thực (IoT, AI, Web)",

    metricCommunityTitle: "Cộng đồng",
    metricCommunityValue: "Trưởng nhóm",
    metricCommunitySubtitle: "Cố vấn & Mã nguồn mở",

    secExplore: "Hệ sinh thái & Lối tắt",
    botCardTitle: "Trò chuyện với AsterBot",
    botCardDesc: "Đặt câu hỏi về hành trình, dự án và triết lý kỹ thuật của tôi qua trợ lý AI.",
    botCardAction: "Mở AsterBot",
    cvCardTitle: "Hồ sơ Cá nhân (CV)",
    cvCardDesc: "Xem thông tin học vấn, kỹ năng đầy đủ và tải tài liệu PDF/DOCX.",
    cvCardAction: "Xem CV",
    certsCardTitle: "37 Chứng chỉ Chính thức",
    certsCardDesc: "Khám phá các chứng chỉ IoT, AI, TypeScript và Kỹ thuật Phần mềm.",
    certsCardAction: "Xem Chứng chỉ",

    secContact: "Kết nối & Liên hệ",
  },

  id: {
    tagline: "Membangun aplikasi web berdampak tinggi dengan memadukan antarmuka yang lancar, pola pikir sistem tingkat rendah, dan ketelitian teknis tanpa kompromi.",
    quote: "Minat saya dalam pemrograman tidak dimulai dari teori, melainkan dari membedah sistem secara langsung dan memahami bagaimana mesin beroperasi pada tingkat rendah.",

    secOrigin: "Asal Usul & Rasa Ingin Tahu Praktis",
    originTitle: "Dari Server Game & Cheat ke Rekayasa Perangkat Lunak yang Kuat",
    originP1: "Pintu masuk saya bukan dari tutorial umum. Di masa remaja, rasa ingin tahu analitis muncul dari mengelola server game khusus dan rekayasa balik (reverse engineering) biner untuk membuat cheat.",
    originP2: "Eksplorasi langsung ini menuntut pemahaman dini tentang manajemen memori: pointer, offset, injeksi proses, dan penyadapan paket TCP/UDP mentah.",
    originP3: "Kini, dorongan analitis yang sama disalurkan ke rekayasa web modern: merancang sistem tangguh, arsitektur aman, antarmuka berkualitas tinggi, dan performa tanpa pemborosan.",
    originPills: ["Rekayasa Balik", "Manajemen Memori", "Inspeksi Paket", "Keamanan Web"],

    secPillars: "Filosofi Rekayasa",
    pillar1Title: "Pengetikan Ketat & TypeScript",
    pillar1Desc: "Kontrak tipe ekspresif dan aman. Kode yang memverifikasi dirinya sendiri saat kompilasi, mencegah regresi dan siap berkembang tanpa cemas.",
    pillar2Title: "Performa Obsesif",
    pillar2Desc: "Animasi stabil 60fps, skor Core Web Vitals sempurna, tanpa pergeseran tata letak (layout shift), dan interaksi mikro taktil yang dirancang presisi.",
    pillar3Title: "Rekayasa Berbantuan AI",
    pillar3Desc: "Penguasaan mendalam atas Claude, Codex, dan alur konteks terotomatisasi untuk melipatgandakan produktivitas rekayasa dengan kualitas tertinggi.",
    pillar4Title: "Kepemimpinan Teknis & Komunitas",
    pillar4Desc: "Pendiri komunitas akademik pengembang, mengelola repositori GitHub, tinjauan kode yang ketat, dan memajukan open-source.",

    secBeyond: "Di Luar Kode: Kebiasaan & Minat",
    disciplineTitle: "Disiplin & Ketahanan",
    disciplineDesc: "Latihan ketahanan harian dalam lari, bersepeda, dan renang (latihan triathlon) sebagai rutinitas konsistensi yang memperkuat resiliensi mental untuk menyelesaikan masalah kompleks.",
    languagesTitle: "Bahasa Mandarin & Jepang",
    languagesDesc: "Bahasa Portugis asli, bahasa Inggris fasih, dan pembelajaran aktif bahasa-bahasa Asia Timur untuk mempertajam ketangkasan kognitif dan pemikiran terstruktur.",
    esportsTitle: "Esports Kompetitif & Strategi",
    esportsDesc: "Analisis taktis skena esports global secara real-time dan eksekusi strategi terarah di bawah tekanan.",

    metricEducationTitle: "Pendidikan",
    metricEducationValue: "Semester ke-6",
    metricEducationSubtitle: "Ilmu Komputer (UniAmérica)",

    metricFocusTitle: "Fokus Utama",
    metricFocusValue: "Frontend & UI",
    metricFocusSubtitle: "TypeScript, React & Arsitektur",

    metricCertsTitle: "Sertifikasi",
    metricCertsValue: "37 Resmi",
    metricCertsSubtitle: "Terverifikasi (IoT, AI, Web)",

    metricCommunityTitle: "Komunitas",
    metricCommunityValue: "Tech Lead",
    metricCommunitySubtitle: "Mentoring & Open Source",

    secExplore: "Ekosistem & Pintasan Interaktif",
    botCardTitle: "Ngobrol dengan AsterBot",
    botCardDesc: "Tanyakan tentang perjalanan rekayasa, proyek, dan pola pikir arsitektur saya melalui asisten AI.",
    botCardAction: "Buka AsterBot",
    cvCardTitle: "Curriculum Vitae Lengkap",
    cvCardDesc: "Lihat latar belakang akademis terperinci, keahlian teknis lengkap, dan unduh dokumen resmi (PDF, DOCX).",
    cvCardAction: "Lihat CV",
    certsCardTitle: "37 Sertifikasi Resmi",
    certsCardDesc: "Jelajahi semua sertifikasi terverifikasi di bidang IoT, AI, TypeScript, React, dan Rekayasa Perangkat Lunak.",
    certsCardAction: "Lihat Sertifikasi",

    secContact: "Koneksi & Jaringan",
  },
};

function renderContactIcon(icon?: string) {
  switch (icon) {
    case "linkedin":
      return <LinkedinLogo weight="fill" className="w-4 h-4 text-[#0077b5]" />;
    case "github":
      return <GithubLogo weight="fill" className="w-4 h-4" />;
    case "mail":
      return <EnvelopeSimple weight="bold" className="w-4 h-4 text-emerald-500" />;
    default:
      return <ArrowSquareOut weight="bold" className="w-4 h-4" />;
  }
}

export function AboutMeDetail({
  isDark = false,
  isDesktop = false,
  language = "br",
  links = [],
  onOpenApp,
}: AboutMeDetailProps) {
  const t = ABOUT_I18N[language] || ABOUT_I18N.br;

  const textPrimary = isDark ? "text-stone-100" : "text-stone-900";
  const textSecondary = isDark ? "text-stone-300" : "text-stone-700";
  const textMuted = isDark ? "text-stone-400" : "text-stone-500";
  const textFaint = isDark ? "text-stone-500" : "text-stone-400";
  const dividerColor = isDark ? "border-stone-800" : "border-aster-dark/[0.08]";

  // Interactive Card Styling with gentle hover elevation
  const cardBase = isDark
    ? "bg-stone-800/40 border-stone-800/80 hover:border-stone-700/80 hover:bg-stone-800/60"
    : "bg-white/60 border-stone-200/80 hover:border-stone-300 hover:bg-white";

  return (
    <div className={`space-y-8 ${isDesktop ? "max-w-3xl" : "w-full"}`}>
      {/* ── Hero Pitch ── */}
      <div className="space-y-3.5">
        <p className={`text-base @tablet:text-lg font-medium leading-relaxed ${textPrimary}`}>
          {t.tagline}
        </p>

        {/* Highlight Quote */}
        <div
          className={`relative p-4 rounded-xl border transition-colors flex gap-3 ${
            isDark
              ? "bg-stone-800/30 border-stone-800/80 text-stone-300"
              : "bg-amber-500/[0.04] border-amber-500/15 text-stone-700"
          }`}
        >
          <Quotes
            weight="fill"
            className="w-5 h-5 shrink-0 text-aster-accent opacity-80 mt-0.5"
          />
          <p className="text-xs @tablet:text-sm italic leading-relaxed">
            {t.quote}
          </p>
        </div>
      </div>

      {/* ── Quick Metrics Bento Grid: 100% About Aster & His Engineering ── */}
      <div className="grid grid-cols-2 @tablet:grid-cols-4 gap-2.5">
        {/* Metric 1: Formação */}
        <div className={`p-3.5 rounded-xl border transition-all ${cardBase}`}>
          <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint} mb-1`}>
            {t.metricEducationTitle}
          </span>
          <span className={`text-sm @tablet:text-base font-bold block ${textPrimary}`}>
            {t.metricEducationValue}
          </span>
          <span className={`text-[11px] leading-tight block ${textMuted} mt-0.5`}>
            {t.metricEducationSubtitle}
          </span>
        </div>

        {/* Metric 2: Especialidade / Core Focus */}
        <div className={`p-3.5 rounded-xl border transition-all ${cardBase}`}>
          <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint} mb-1`}>
            {t.metricFocusTitle}
          </span>
          <span className={`text-sm @tablet:text-base font-bold block text-aster-accent`}>
            {t.metricFocusValue}
          </span>
          <span className={`text-[11px] leading-tight block ${textMuted} mt-0.5`}>
            {t.metricFocusSubtitle}
          </span>
        </div>

        {/* Metric 3: Certificações Oficiais */}
        <div
          onClick={() => onOpenApp?.("certificacoes")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onOpenApp?.("certificacoes")}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer group ${cardBase}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint}`}>
              {t.metricCertsTitle}
            </span>
            <ArrowRight weight="bold" className="w-3 h-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className={`text-sm @tablet:text-base font-bold block ${textPrimary} group-hover:text-amber-500 transition-colors`}>
            {t.metricCertsValue}
          </span>
          <span className={`text-[11px] leading-tight block ${textMuted} mt-0.5`}>
            {t.metricCertsSubtitle}
          </span>
        </div>

        {/* Metric 4: Comunidade / Liderança Técnica */}
        <div className={`p-3.5 rounded-xl border transition-all ${cardBase}`}>
          <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint} mb-1`}>
            {t.metricCommunityTitle}
          </span>
          <span className={`text-sm @tablet:text-base font-bold block ${textPrimary}`}>
            {t.metricCommunityValue}
          </span>
          <span className={`text-[11px] leading-tight block ${textMuted} mt-0.5`}>
            {t.metricCommunitySubtitle}
          </span>
        </div>
      </div>

      {/* ── Section: A Origem (Story Card) ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <div className="flex items-center gap-2">
          <TerminalWindow weight="bold" className="w-4 h-4 text-aster-accent" />
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secOrigin}
          </h4>
        </div>

        <div className={`p-5 rounded-2xl border transition-all ${cardBase} space-y-3`}>
          <h3 className={`text-base @tablet:text-lg font-bold ${textPrimary}`}>
            {t.originTitle}
          </h3>
          <p className={`text-xs @tablet:text-sm leading-relaxed ${textSecondary}`}>
            {t.originP1}
          </p>
          <p className={`text-xs @tablet:text-sm leading-relaxed ${textSecondary}`}>
            {t.originP2}
          </p>
          <p className={`text-xs @tablet:text-sm leading-relaxed ${textSecondary}`}>
            {t.originP3}
          </p>
        </div>
      </div>

      {/* ── Section: Os 4 Pilares de Engenharia ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <div className="flex items-center gap-2">
          <Cpu weight="bold" className="w-4 h-4 text-indigo-500" />
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secPillars}
          </h4>
        </div>

        <div className="grid grid-cols-1 @tablet:grid-cols-2 gap-3">
          {/* Pilar 1 */}
          <div className={`p-4 rounded-xl border transition-all ${cardBase} space-y-1.5`}>
            <div className="flex items-center gap-2">
              <ShieldCheck weight="fill" className="w-4 h-4 text-indigo-500 shrink-0" />
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary}`}>
                {t.pillar1Title}
              </h5>
            </div>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.pillar1Desc}
            </p>
          </div>

          {/* Pilar 2 */}
          <div className={`p-4 rounded-xl border transition-all ${cardBase} space-y-1.5`}>
            <div className="flex items-center gap-2">
              <Lightning weight="fill" className="w-4 h-4 text-amber-500 shrink-0" />
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary}`}>
                {t.pillar2Title}
              </h5>
            </div>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.pillar2Desc}
            </p>
          </div>

          {/* Pilar 3 */}
          <div className={`p-4 rounded-xl border transition-all ${cardBase} space-y-1.5`}>
            <div className="flex items-center gap-2">
              <Sparkle weight="fill" className="w-4 h-4 text-purple-500 shrink-0" />
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary}`}>
                {t.pillar3Title}
              </h5>
            </div>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.pillar3Desc}
            </p>
          </div>

          {/* Pilar 4 */}
          <div className={`p-4 rounded-xl border transition-all ${cardBase} space-y-1.5`}>
            <div className="flex items-center gap-2">
              <Users weight="bold" className="w-4 h-4 text-emerald-500 shrink-0" />
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary}`}>
                {t.pillar4Title}
              </h5>
            </div>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.pillar4Desc}
            </p>
          </div>
        </div>
      </div>

      {/* ── Section: Além do Código (Hábitos & Interesses em Equilíbrio) ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <div className="flex items-center gap-2">
          <Code weight="bold" className="w-4 h-4 text-rose-500" />
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secBeyond}
          </h4>
        </div>

        <div className="grid grid-cols-1 @tablet:grid-cols-3 gap-3">
          {/* Hábitos de Disciplina */}
          <div className={`p-4 rounded-xl border transition-all ${cardBase} space-y-1.5`}>
            <div className="flex items-center gap-2">
              <Bicycle weight="fill" className="w-4 h-4 text-rose-500 shrink-0" />
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary}`}>
                {t.disciplineTitle}
              </h5>
            </div>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.disciplineDesc}
            </p>
          </div>

          {/* Idiomas */}
          <div className={`p-4 rounded-xl border transition-all ${cardBase} space-y-1.5`}>
            <div className="flex items-center gap-2">
              <Translate weight="bold" className="w-4 h-4 text-cyan-500 shrink-0" />
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary}`}>
                {t.languagesTitle}
              </h5>
            </div>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.languagesDesc}
            </p>
          </div>

          {/* Esports */}
          <div className={`p-4 rounded-xl border transition-all ${cardBase} space-y-1.5`}>
            <div className="flex items-center gap-2">
              <GameController weight="fill" className="w-4 h-4 text-violet-500 shrink-0" />
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary}`}>
                {t.esportsTitle}
              </h5>
            </div>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.esportsDesc}
            </p>
          </div>
        </div>
      </div>

      {/* ── Section: Ecossistema & Ações Interativas ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <div className="flex items-center gap-2">
          <Robot weight="fill" className="w-4 h-4 text-aster-accent" />
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secExplore}
          </h4>
        </div>

        <div className="grid grid-cols-1 @tablet:grid-cols-3 gap-3">
          {/* Card AsterBot */}
          <div
            onClick={() => onOpenApp?.("chatbot")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onOpenApp?.("chatbot")}
            className={`p-4 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${cardBase}`}
          >
            <div className="space-y-1.5 mb-3">
              <div className="flex items-center justify-between">
                <Robot weight="fill" className="w-5 h-5 text-indigo-500" />
                <ArrowRight weight="bold" className="w-4 h-4 text-aster-accent opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary} group-hover:text-aster-accent transition-colors`}>
                {t.botCardTitle}
              </h5>
              <p className={`text-[11px] leading-relaxed ${textSecondary}`}>
                {t.botCardDesc}
              </p>
            </div>
            <span className={`text-[11px] font-mono font-medium text-aster-accent`}>
              {t.botCardAction} &rarr;
            </span>
          </div>

          {/* Card Currículo */}
          <div
            onClick={() => onOpenApp?.("curriculo")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onOpenApp?.("curriculo")}
            className={`p-4 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${cardBase}`}
          >
            <div className="space-y-1.5 mb-3">
              <div className="flex items-center justify-between">
                <FileText weight="fill" className="w-5 h-5 text-rose-500" />
                <ArrowRight weight="bold" className="w-4 h-4 text-aster-accent opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary} group-hover:text-aster-accent transition-colors`}>
                {t.cvCardTitle}
              </h5>
              <p className={`text-[11px] leading-relaxed ${textSecondary}`}>
                {t.cvCardDesc}
              </p>
            </div>
            <span className={`text-[11px] font-mono font-medium text-rose-500`}>
              {t.cvCardAction} &rarr;
            </span>
          </div>

          {/* Card Certificações */}
          <div
            onClick={() => onOpenApp?.("certificacoes")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onOpenApp?.("certificacoes")}
            className={`p-4 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${cardBase}`}
          >
            <div className="space-y-1.5 mb-3">
              <div className="flex items-center justify-between">
                <Certificate weight="fill" className="w-5 h-5 text-amber-500" />
                <ArrowRight weight="bold" className="w-4 h-4 text-aster-accent opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <h5 className={`text-xs @tablet:text-sm font-bold ${textPrimary} group-hover:text-aster-accent transition-colors`}>
                {t.certsCardTitle}
              </h5>
              <p className={`text-[11px] leading-relaxed ${textSecondary}`}>
                {t.certsCardDesc}
              </p>
            </div>
            <span className={`text-[11px] font-mono font-medium text-amber-500`}>
              {t.certsCardAction} &rarr;
            </span>
          </div>
        </div>
      </div>

      {/* ── Section: Conexões Oficiais & Redes ── */}
      {links && links.length > 0 && (
        <div className={`pt-6 border-t ${dividerColor} space-y-3`}>
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secContact}
          </h4>

          <div className={`grid gap-2 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
            {links.map((link) => {
              const isDisabled = link.url === "#" || !link.url;
              return (
                <a
                  key={link.title}
                  href={isDisabled ? undefined : link.url}
                  target={isDisabled ? undefined : "_blank"}
                  rel={isDisabled ? undefined : "noopener noreferrer"}
                  onClick={isDisabled ? (e) => e.preventDefault() : undefined}
                  aria-disabled={isDisabled}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-all duration-200 group ${
                    isDisabled
                      ? isDark
                        ? "bg-stone-800/30 border-stone-800/60 cursor-not-allowed opacity-50"
                        : "bg-white/30 border-stone-200/50 cursor-not-allowed opacity-50"
                      : cardBase
                  }`}
                >
                  <span className="text-base flex items-center justify-center shrink-0">
                    {renderContactIcon(link.icon)}
                  </span>
                  <span className={`text-xs font-medium truncate flex-1 ${textPrimary}`}>
                    {link.title}
                  </span>
                  {!isDisabled && (
                    <ArrowSquareOut
                      weight="bold"
                      className={`w-3.5 h-3.5 opacity-30 group-hover:opacity-100 transition-opacity shrink-0 ${textMuted}`}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
