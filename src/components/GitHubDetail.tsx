import { useState, useEffect, useMemo } from "react";
import {
  GithubLogo,
  GitBranch,
  GitFork,
  GitPullRequest,
  Star,
  Code,
  TerminalWindow,
  ArrowSquareOut,
  Copy,
  Check,
  BookBookmark,
  Users,
  ShieldCheck,
  ArrowRight,
  Play,
  Cpu,
  TrendUp,
  Sparkle,
  MagnifyingGlass,
  CheckCircle,
} from "@phosphor-icons/react";
import type { Language, ProjectItem } from "../data/aster";

export interface GitHubDetailProps {
  isDark?: boolean;
  isDesktop?: boolean;
  language?: Language;
  links?: ProjectItem["links"];
  onOpenApp?: (appId: string) => void;
}

interface GitHubTranslations {
  bio: string;
  badgeActive: string;
  badgeOpenSource: string;
  badgeCommunity: string;
  btnViewProfile: string;
  btnOrgCommunity: string;

  // Stats
  statReposTitle: string;
  statReposSub: string;
  statExperienceTitle: string;
  statExperienceSub: string;
  statFocusTitle: string;
  statFocusSub: string;
  statLeadershipTitle: string;
  statLeadershipSub: string;

  // Contribution Heatmap
  secHeatmap: string;
  heatmapTitle: string;
  heatmapDesc: string;
  heatmapCommitsCount: string;
  heatmapStreak: string;
  heatmapConsistency: string;
  heatmapLegendLess: string;
  heatmapLegendMore: string;

  // Language Distribution
  secLanguages: string;

  // Repositories
  secRepos: string;
  filterAll: string;
  filterFeatured: string;
  filterWeb: string;
  filterTools: string;
  filterCommunity: string;
  searchPlaceholder: string;
  noReposFound: string;

  // Repo Card Actions
  btnViewCode: string;
  btnOpenLiveApp: string;
  btnCopyClone: string;
  copiedTooltip: string;

  // Community Spotlight
  secCommunity: string;
  orgTitle: string;
  orgSubtitle: string;
  orgDesc1: string;
  orgDesc2: string;
  orgPillarGovernance: string;
  orgPillarMentorship: string;
  orgPillarProjects: string;
  btnVisitOrg: string;

  // Interactive Terminal
  secTerminal: string;
  terminalTitle: string;
  terminalSubtitle: string;
  btnCopyCommand: string;

  // Repo Descriptions
  repoStudioOSDesc: string;
  repoSoulFighterDesc: string;
  repoIdealCalcDesc: string;
  repoDownloaderDesc: string;
  repoDuoToolsDesc: string;
  repoAsterDevDesc: string;
  repoCarteiraDesc: string;
  repoPexWikiDesc: string;
}

const GITHUB_I18N: Record<Language, GitHubTranslations> = {
  br: {
    bio: "Engenheiro de Software & Reverse Engineer. Desenvolvendo sistemas fluidos, arquiteturas no edge e interfaces de alta fidelidade enquanto disseco sistemas em baixo nível.",
    badgeActive: "Ativo no GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Fundador @Descomplica-TI",
    btnViewProfile: "Abrir Perfil no GitHub",
    btnOrgCommunity: "Comunidade Descomplica-TI",

    statReposTitle: "Repositórios Públicos",
    statReposSub: "Projetos, extensões & ferramentas",
    statExperienceTitle: "Anos no GitHub",
    statExperienceSub: "Ativo continuamente desde 2020",
    statFocusTitle: "Stack Predominante",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Governança & Mentoria",
    statLeadershipSub: "Líder técnico da org estudantil",

    secHeatmap: "Atividade & Cadência",
    heatmapTitle: "Consistência de Engenharia Diária",
    heatmapDesc: "Mentalidade de Ironman aplicada ao desenvolvimento: pequenos avanços diários, commits atômicos e disciplina contínua.",
    heatmapCommitsCount: "580+ commits no último ano",
    heatmapStreak: "Sequência ativa de commits",
    heatmapConsistency: "Alta cadência semanal",
    heatmapLegendLess: "Menos",
    heatmapLegendMore: "Mais",

    secLanguages: "Distribuição por Linguagem",

    secRepos: "Repositórios & Projetos em Destaque",
    filterAll: "Todos",
    filterFeatured: "Destaques",
    filterWeb: "Web & Apps",
    filterTools: "Extensões & Tools",
    filterCommunity: "Comunidade",
    searchPlaceholder: "Buscar por repositório, tecnologia ou tag...",
    noReposFound: "Nenhum repositório encontrado com esse filtro.",

    btnViewCode: "Ver Código",
    btnOpenLiveApp: "Abrir Live App",
    btnCopyClone: "Copiar Clone",
    copiedTooltip: "Copiado!",

    secCommunity: "Liderança de Comunidade",
    orgTitle: "Descomplica TI - Organização Acadêmica",
    orgSubtitle: "Fundador & Líder Técnico de Comunidade de Estudantes de TI",
    orgDesc1: "Criei a organização Descomplica TI para preencher a lacuna entre a teoria acadêmica e a prática da engenharia de software no mercado real.",
    orgDesc2: "Atuo na governança técnica dos repositórios, revisão de Pull Requests, padronização de documentação em Wikis e mentoria de novos estudantes em Git e arquitetura.",
    orgPillarGovernance: "Governança & Code Review",
    orgPillarMentorship: "Mentoria de Novos Devs",
    orgPillarProjects: "Projetos de Extensão (PEX)",
    btnVisitOrg: "Visitar Organização no GitHub",

    secTerminal: "Terminal Interativo",
    terminalTitle: "Instalação & Setup Rápido",
    terminalSubtitle: "Selecione um projeto para inspecionar os comandos de clonagem e execução:",
    btnCopyCommand: "Copiar Bloco",

    repoStudioOSDesc: "Sistema Operacional web para criadores com 12 ferramentas de IA integradas (Rank de Ideia, Mentor IA, Teleprompter). Construído com Astro 7, React 19 e Supabase.",
    repoSoulFighterDesc: "Remasterização comemorativa do Soul Fighter (League of Legends) com som via Web Audio API (< 2ms), aceleração 3D na GPU a 60 FPS e ranking global no Supabase.",
    repoIdealCalcDesc: "Calculadora estatística inspirada em Dieter Rams e Braun cruzando microdados do Censo IBGE 2022 e PNAD no cliente em menos de 8ms.",
    repoDownloaderDesc: "Extensão Chromium (Manifest V3) com Side Panel e Companion App nativo (yt-dlp + FFmpeg) para capturar mídias em até 4K60 HDR e transmissões HLS (.m3u8).",
    repoDuoToolsDesc: "Extensão Chrome (Manifest V3) para automação inteligente no Duolingo: farm de XP via API direta, modo Super desbloqueado e widget flutuante in-page.",
    repoAsterDevDesc: "Código-fonte deste portfólio completo estilizado no formato Aster OS (iPad retrô/moderno com física tátil e sonoplastia).",
    repoCarteiraDesc: "Carteirinha de estudante digital interativa desenvolvida para facilitar a identificação e dia a dia dos alunos da faculdade.",
    repoPexWikiDesc: "Enciclopédia interativa SPA para documentação profunda de mecânicas de gameplay de Pex com navegação instantânea.",
  },

  pt: {
    bio: "Engenheiro de Software & Reverse Engineer. Desenvolvendo sistemas fluidos, arquiteturas no edge e interfaces de alta fidelidade enquanto disseco sistemas em baixo nível.",
    badgeActive: "Ativo no GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Fundador @Descomplica-TI",
    btnViewProfile: "Abrir Perfil no GitHub",
    btnOrgCommunity: "Comunidade Descomplica-TI",

    statReposTitle: "Repositórios Públicos",
    statReposSub: "Projetos, extensões & ferramentas",
    statExperienceTitle: "Anos no GitHub",
    statExperienceSub: "Ativo continuamente desde 2020",
    statFocusTitle: "Stack Predominante",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Governação & Mentoria",
    statLeadershipSub: "Líder técnico da org académica",

    secHeatmap: "Atividade & Cadência",
    heatmapTitle: "Consistência de Engenharia Diária",
    heatmapDesc: "Mentalidade de Ironman aplicada ao desenvolvimento: pequenos avanços diários, commits atómicos e disciplina contínua.",
    heatmapCommitsCount: "580+ commits no último ano",
    heatmapStreak: "Sequência ativa de commits",
    heatmapConsistency: "Alta cadência semanal",
    heatmapLegendLess: "Menos",
    heatmapLegendMore: "Mais",

    secLanguages: "Distribuição por Linguagem",

    secRepos: "Repositórios & Projetos em Destaque",
    filterAll: "Todos",
    filterFeatured: "Destaques",
    filterWeb: "Web & Apps",
    filterTools: "Extensões & Tools",
    filterCommunity: "Comunidade",
    searchPlaceholder: "Pesquisar repositório, tecnologia ou tag...",
    noReposFound: "Nenhum repositório encontrado com esse filtro.",

    btnViewCode: "Ver Código",
    btnOpenLiveApp: "Abrir Live App",
    btnCopyClone: "Copiar Clone",
    copiedTooltip: "Copiado!",

    secCommunity: "Liderança de Comunidade",
    orgTitle: "Descomplica TI - Organização Académica",
    orgSubtitle: "Fundador & Líder Técnico de Comunidade de Estudantes de TI",
    orgDesc1: "Criação da organização Descomplica TI para unir a teoria académica à prática da engenharia de software moderna.",
    orgDesc2: "Coordenação dos repositórios, revisão de Pull Requests, padronização de documentação em Wikis e mentoria de novos estudantes em Git e arquitetura.",
    orgPillarGovernance: "Governação & Code Review",
    orgPillarMentorship: "Mentoria de Novos Devs",
    orgPillarProjects: "Projetos de Extensão (PEX)",
    btnVisitOrg: "Visitar Organização no GitHub",

    secTerminal: "Terminal Interativo",
    terminalTitle: "Instalação & Configuração Rápida",
    terminalSubtitle: "Selecione um projeto para inspecionar os comandos de clonagem e execução:",
    btnCopyCommand: "Copiar Bloco",

    repoStudioOSDesc: "Sistema Operacional web para criadores com 12 ferramentas de IA integradas (Rank de Ideia, Mentor IA, Teleprompter). Construído com Astro 7, React 19 e Supabase.",
    repoSoulFighterDesc: "Remasterização comemorativa do Soul Fighter (League of Legends) com som via Web Audio API (< 2ms), aceleração 3D na GPU a 60 FPS e ranking global no Supabase.",
    repoIdealCalcDesc: "Calculadora estatística inspirada em Dieter Rams e Braun cruzando microdados do Censo IBGE 2022 e PNAD no cliente em menos de 8ms.",
    repoDownloaderDesc: "Extensão Chromium (Manifest V3) com Side Panel e Companion App nativo (yt-dlp + FFmpeg) para capturar multimédia até 4K60 HDR e transmissões HLS (.m3u8).",
    repoDuoToolsDesc: "Extensão Chrome (Manifest V3) para automação inteligente no Duolingo: farm de XP via API direta, modo Super desbloqueado e widget flutuante in-page.",
    repoAsterDevDesc: "Código-fonte deste portfólio completo estilizado no formato Aster OS (iPad retrô/moderno com física tátil e sonoplastia).",
    repoCarteiraDesc: "Carteirinha de estudante digital interativa desenvolvida para facilitar a identificação e dia a dia dos alunos da faculdade.",
    repoPexWikiDesc: "Enciclopédia interativa SPA para documentação profunda de mecânicas de gameplay de Pex com navegação instantânea.",
  },

  en: {
    bio: "Software Engineer & Reverse Engineer. Building fluid interfaces, edge architectures, and high-fidelity systems while deconstructing systems at a low level.",
    badgeActive: "Active on GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Founder @Descomplica-TI",
    btnViewProfile: "Open GitHub Profile",
    btnOrgCommunity: "Descomplica-TI Community",

    statReposTitle: "Public Repositories",
    statReposSub: "Projects, extensions & tooling",
    statExperienceTitle: "Years on GitHub",
    statExperienceSub: "Continuously active since 2020",
    statFocusTitle: "Primary Stack",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Governance & Mentorship",
    statLeadershipSub: "Tech lead of student organization",

    secHeatmap: "Activity & Cadence",
    heatmapTitle: "Daily Engineering Discipline",
    heatmapDesc: "Ironman triathlon mindset applied to code: daily incremental gains, atomic commits, and relentless execution.",
    heatmapCommitsCount: "580+ commits in the last year",
    heatmapStreak: "Active commit streak",
    heatmapConsistency: "High weekly cadence",
    heatmapLegendLess: "Less",
    heatmapLegendMore: "More",

    secLanguages: "Language Breakdown",

    secRepos: "Featured Repositories & Projects",
    filterAll: "All",
    filterFeatured: "Featured",
    filterWeb: "Web & Apps",
    filterTools: "Extensions & Tools",
    filterCommunity: "Community",
    searchPlaceholder: "Search repository, tech or tag...",
    noReposFound: "No repositories match this filter.",

    btnViewCode: "View Code",
    btnOpenLiveApp: "Launch Live App",
    btnCopyClone: "Copy Clone",
    copiedTooltip: "Copied!",

    secCommunity: "Community Leadership",
    orgTitle: "Descomplica TI - Academic Organization",
    orgSubtitle: "Founder & Technical Lead of Computer Science Student Organization",
    orgDesc1: "Founded Descomplica TI to bridge the gap between academic theory and real-world software engineering practice.",
    orgDesc2: "Leading repository governance, reviewing Pull Requests, standardizing documentation wikis, and mentoring fellow students in Git workflows and system architecture.",
    orgPillarGovernance: "Governance & Code Review",
    orgPillarMentorship: "Mentoring New Developers",
    orgPillarProjects: "Academic Extension Projects",
    btnVisitOrg: "Visit Organization on GitHub",

    secTerminal: "Interactive Terminal",
    terminalTitle: "Quick Clone & Setup",
    terminalSubtitle: "Select a repository to inspect the fast setup commands:",
    btnCopyCommand: "Copy Block",

    repoStudioOSDesc: "Web Operating System for creators featuring 12 integrated AI tools (Idea Ranker, AI Mentor, Teleprompter). Engineered with Astro 7, React 19, and Supabase.",
    repoSoulFighterDesc: "League of Legends Soul Fighter card remaster featuring real-time Web Audio API (<2ms), GPU-accelerated 3D flips at 60 FPS, and Supabase global leaderboards.",
    repoIdealCalcDesc: "Dieter Rams / Braun inspired statistical calculator executing client-side microdata queries from IBGE Census 2022 and PNAD in under 8ms.",
    repoDownloaderDesc: "Chromium extension (Manifest V3) pairing a persistent Side Panel with a native Companion App (yt-dlp + FFmpeg) to grab 4K60 HDR video and authenticated HLS streams.",
    repoDuoToolsDesc: "Chrome Extension (Manifest V3) for smart Duolingo automation: direct API XP farming, Super Mode activation, and in-page floating widget.",
    repoAsterDevDesc: "Source code of this complete interactive Aster OS portfolio simulating a retro/modern iPad with haptics and acoustic design.",
    repoCarteiraDesc: "Interactive digital student ID card web app developed for students to access university services easily on mobile.",
    repoPexWikiDesc: "Interactive encyclopedia SPA for in-depth documentation of game mechanics with instant tabless navigation.",
  },

  es: {
    bio: "Ingeniero de Software y Reverse Engineer. Construyendo interfaces fluidas, arquitecturas edge y sistemas de alta fidelidad mientras disecciono sistemas en bajo nivel.",
    badgeActive: "Activo en GitHub",
    badgeOpenSource: "Código Abierto",
    badgeCommunity: "Fundador @Descomplica-TI",
    btnViewProfile: "Abrir Perfil en GitHub",
    btnOrgCommunity: "Comunidad Descomplica-TI",

    statReposTitle: "Repositorios Públicos",
    statReposSub: "Proyectos, extensiones y utilidades",
    statExperienceTitle: "Años en GitHub",
    statExperienceSub: "Activo continuamente desde 2020",
    statFocusTitle: "Stack Principal",
    statFocusSub: "TypeScript, React y Astro",
    statLeadershipTitle: "Gobernanza y Mentoría",
    statLeadershipSub: "Líder técnico de la org estudiantil",

    secHeatmap: "Actividad y Cadencia",
    heatmapTitle: "Disciplina de Ingeniería Diaria",
    heatmapDesc: "Mentalidad de triatlón Ironman aplicada al código: avances diarios continuos, commits atómicos y rigor técnico.",
    heatmapCommitsCount: "580+ commits en el último año",
    heatmapStreak: "Racha activa de commits",
    heatmapConsistency: "Alta cadencia semanal",
    heatmapLegendLess: "Menos",
    heatmapLegendMore: "Más",

    secLanguages: "Distribución por Lenguajes",

    secRepos: "Repositorios y Proyectos Destacados",
    filterAll: "Todos",
    filterFeatured: "Destacados",
    filterWeb: "Web y Apps",
    filterTools: "Extensiones y Tools",
    filterCommunity: "Comunidad",
    searchPlaceholder: "Buscar repositorio, tecnología o etiqueta...",
    noReposFound: "No se encontraron repositorios con este filtro.",

    btnViewCode: "Ver Código",
    btnOpenLiveApp: "Abrir Live App",
    btnCopyClone: "Copiar Clone",
    copiedTooltip: "¡Copiado!",

    secCommunity: "Liderazgo de Comunidad",
    orgTitle: "Descomplica TI - Organización Académica",
    orgSubtitle: "Fundador y Líder Técnico de Comunidad de Estudiantes",
    orgDesc1: "Fundé Descomplica TI para unir la teoría académica con la práctica de ingeniería de software en el mercado real.",
    orgDesc2: "Coordinación de repositorios, revisión de Pull Requests, estandarización de Wikis y mentoría en Git y arquitectura.",
    orgPillarGovernance: "Gobernanza y Code Review",
    orgPillarMentorship: "Mentoría de Nuevos Devs",
    orgPillarProjects: "Proyectos de Extensión (PEX)",
    btnVisitOrg: "Visitar Organización en GitHub",

    secTerminal: "Terminal Interactivo",
    terminalTitle: "Instalación y Setup Rápido",
    terminalSubtitle: "Selecciona un repositorio para ver los comandos de clonación:",
    btnCopyCommand: "Copiar Bloque",

    repoStudioOSDesc: "Sistema operativo web para creadores con 12 herramientas de IA integradas (Rank de Idea, Mentor IA, Teleprompter). Astro 7, React 19 y Supabase.",
    repoSoulFighterDesc: "Remasterización de Soul Fighter (LoL) con sonido sintetizado Web Audio API (<2ms), aceleración 3D en GPU a 60 FPS y ranking global.",
    repoIdealCalcDesc: "Calculadora estadística inspirada en Dieter Rams y Braun cruzando microdatos del Censo IBGE en cliente en menos de 8ms.",
    repoDownloaderDesc: "Extensión Chromium con Side Panel y Companion App nativo (yt-dlp + FFmpeg) para capturar video hasta 4K60 HDR y flujos HLS.",
    repoDuoToolsDesc: "Extensión Chrome para automatización inteligente en Duolingo: farm de XP vía API directa, modo Super desbloqueado y widget flotante.",
    repoAsterDevDesc: "Código fuente de este portafolio Aster OS simulando un iPad táctil con feedback acústico.",
    repoCarteiraDesc: "Credencial de estudiante digital interactiva para smartphones con verificación rápida.",
    repoPexWikiDesc: "Enciclopedia SPA interactiva para documentar mecánicas de gameplay con navegación instantánea.",
  },

  fr: {
    bio: "Ingénieur logiciel & Reverse Engineer. Conception d'interfaces réactives, architectures edge et systèmes haute fidélité tout en disséquant le bas niveau.",
    badgeActive: "Actif sur GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Fondateur @Descomplica-TI",
    btnViewProfile: "Profil GitHub",
    btnOrgCommunity: "Communauté Descomplica-TI",

    statReposTitle: "Dépôts Publics",
    statReposSub: "Projets, extensions & outils",
    statExperienceTitle: "Années sur GitHub",
    statExperienceSub: "Actif en continu depuis 2020",
    statFocusTitle: "Stack Principale",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Gouvernance & Mentorat",
    statLeadershipSub: "Tech lead d'organisation étudiante",

    secHeatmap: "Activité & Cadence",
    heatmapTitle: "Discipline Quotidienne d'Ingénierie",
    heatmapDesc: "Mentalité Ironman appliquée au code : gains journaliers, commits atomiques et régularité exemplaire.",
    heatmapCommitsCount: "580+ commits au cours de l'année",
    heatmapStreak: "Série de commits active",
    heatmapConsistency: "Forte cadence hebdomadaire",
    heatmapLegendLess: "Moins",
    heatmapLegendMore: "Plus",

    secLanguages: "Répartition des Langages",

    secRepos: "Dépôts & Projets en Vedette",
    filterAll: "Tous",
    filterFeatured: "Sélection",
    filterWeb: "Web & Apps",
    filterTools: "Extensions & Outils",
    filterCommunity: "Communauté",
    searchPlaceholder: "Rechercher dépôt, tech ou tag...",
    noReposFound: "Aucun dépôt correspondant trouvé.",

    btnViewCode: "Voir le Code",
    btnOpenLiveApp: "Lancer l'App",
    btnCopyClone: "Copier Clone",
    copiedTooltip: "Copié !",

    secCommunity: "Leadership Communautaire",
    orgTitle: "Descomplica TI - Organisation Académique",
    orgSubtitle: "Fondateur & Lead Tech de la communauté étudiante",
    orgDesc1: "Création de Descomplica TI pour relier la théorie universitaire à la réalité de l'ingénierie logicielle.",
    orgDesc2: "Gouvernance des dépôts, revues de Pull Requests, standardisation des wikis et mentorat des étudiants.",
    orgPillarGovernance: "Gouvernance & Code Review",
    orgPillarMentorship: "Mentorat de Développeurs",
    orgPillarProjects: "Projets d'Extension (PEX)",
    btnVisitOrg: "Visiter l'Organisation GitHub",

    secTerminal: "Terminal Interactif",
    terminalTitle: "Clonage & Configuration Rapide",
    terminalSubtitle: "Sélectionnez un projet pour afficher les commandes :",
    btnCopyCommand: "Copier la Commande",

    repoStudioOSDesc: "Système d'exploitation web pour créateurs avec 12 outils IA intégrés (Rank Idée, Mentor IA, Téléprompteur). Astro 7, React 19, Supabase.",
    repoSoulFighterDesc: "Remastérisation Soul Fighter (League of Legends) avec audio temps réel (< 2ms), GPU 3D à 60 FPS et classement mondial.",
    repoIdealCalcDesc: "Calculateur statistique style Dieter Rams / Braun croisant les microdonnées du recensement IBGE côté client en moins de 8ms.",
    repoDownloaderDesc: "Extension Chromium Side Panel + Companion App natif (yt-dlp + FFmpeg) pour vidéos jusqu'en 4K60 HDR et flux HLS.",
    repoDuoToolsDesc: "Extension Chrome pour l'automatisation Duolingo : XP direct par API, mode Super débloqué et widget flottant.",
    repoAsterDevDesc: "Code source de ce portfolio Aster OS simulant un iPad tactile avec sons spatiaux.",
    repoCarteiraDesc: "Carte d'étudiant numérique interactive pour smartphone développée pour simplifier la vie universitaire.",
    repoPexWikiDesc: "Encyclopédie SPA interactive pour la documentation approfondie de mécaniques de gameplay.",
  },

  de: {
    bio: "Software Engineer & Reverse Engineer. Entwicklung flüssiger Interfaces, Edge-Architekturen und High-Fidelity-Systeme mit Low-Level-Präzision.",
    badgeActive: "Aktiv auf GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Gründer @Descomplica-TI",
    btnViewProfile: "GitHub-Profil öffnen",
    btnOrgCommunity: "Descomplica-TI Community",

    statReposTitle: "Öffentliche Repositories",
    statReposSub: "Projekte, Erweiterungen & Tools",
    statExperienceTitle: "Jahre auf GitHub",
    statExperienceSub: "Kontinuierlich aktiv seit 2020",
    statFocusTitle: "Haupt-Stack",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Governance & Mentoring",
    statLeadershipSub: "Tech Lead der Studenten-Community",

    secHeatmap: "Aktivität & Rhythmus",
    heatmapTitle: "Tägliche Entwicklungsdisziplin",
    heatmapDesc: "Ironman-Triathlon-Mentalität übertragen auf Code: tägliche Fortschritte, atomare Commits und Beständigkeit.",
    heatmapCommitsCount: "580+ Commits im vergangenen Jahr",
    heatmapStreak: "Aktive Commit-Serie",
    heatmapConsistency: "Hohe wöchentliche Frequenz",
    heatmapLegendLess: "Weniger",
    heatmapLegendMore: "Mehr",

    secLanguages: "Sprachverteilung",

    secRepos: "Ausgewählte Repositories & Projekte",
    filterAll: "Alle",
    filterFeatured: "Highlights",
    filterWeb: "Web & Apps",
    filterTools: "Erweiterungen & Tools",
    filterCommunity: "Community",
    searchPlaceholder: "Repository, Technologie oder Tag suchen...",
    noReposFound: "Keine Repositories für diesen Filter gefunden.",

    btnViewCode: "Code ansehen",
    btnOpenLiveApp: "Live-App starten",
    btnCopyClone: "Clone kopieren",
    copiedTooltip: "Kopiert!",

    secCommunity: "Community-Leitung",
    orgTitle: "Descomplica TI - Akademische Organisation",
    orgSubtitle: "Gründer & technischer Leiter der IT-Studentengemeinschaft",
    orgDesc1: "Gründung von Descomplica TI, um universitäre Theorie mit moderner Software-Engineering-Praxis zu verbinden.",
    orgDesc2: "Repository-Governance, Pull-Request-Reviews, Wiki-Standardisierung und Mentoring neuer Studenten.",
    orgPillarGovernance: "Governance & Code-Review",
    orgPillarMentorship: "Entwickler-Mentoring",
    orgPillarProjects: "Akademische Projekte (PEX)",
    btnVisitOrg: "Organisation auf GitHub besuchen",

    secTerminal: "Interaktives Terminal",
    terminalTitle: "Schnelle Installation & Setup",
    terminalSubtitle: "Wählen Sie ein Projekt, um Befehle anzuzeigen:",
    btnCopyCommand: "Befehle kopieren",

    repoStudioOSDesc: "Web-Betriebssystem für Creator mit 12 integrierten KI-Tools (Ideen-Ranking, KI-Mentor, Teleprompter). Astro 7, React 19, Supabase.",
    repoSoulFighterDesc: "Remaster des Soul Fighter-Spiels (LoL) mit Echtzeit-Web Audio API (<2ms), 60 FPS GPU-3D-Rendering und weltweitem Ranking.",
    repoIdealCalcDesc: "Statistischer Rechner im Braun/Dieter Rams-Design mit IBGE-Zensus-Berechnung im Browser unter 8ms.",
    repoDownloaderDesc: "Chromium Side Panel-Erweiterung + native Companion App (yt-dlp + FFmpeg) für Downloads bis 4K60 HDR und HLS.",
    repoDuoToolsDesc: "Chrome-Erweiterung für Duolingo-Automatisierung mit XP-Farm per Direkt-API, freigeschaltetem Super-Modus und Floating-Widget.",
    repoAsterDevDesc: "Quellcode dieses Aster OS-Portfolios im iPad-Stil mit haptischem Feedback und Sound-Design.",
    repoCarteiraDesc: "Interaktiver digitaler Studentenausweis für Smartphones für den Universitätsalltag.",
    repoPexWikiDesc: "Interaktive SPA-Enzyklopädie zur Dokumentation von Gameplay-Mechaniken.",
  },

  it: {
    bio: "Software Engineer & Reverse Engineer. Sviluppo di interfacce fluide, architetture edge e sistemi ad alta fedeltà con mentalità a basso livello.",
    badgeActive: "Attivo su GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Fondatore @Descomplica-TI",
    btnViewProfile: "Apri Profilo GitHub",
    btnOrgCommunity: "Comunità Descomplica-TI",

    statReposTitle: "Repository Pubblici",
    statReposSub: "Progetti, estensioni e strumenti",
    statExperienceTitle: "Anni su GitHub",
    statExperienceSub: "Attivo ininterrottamente dal 2020",
    statFocusTitle: "Stack Principale",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Governance e Mentoring",
    statLeadershipSub: "Tech lead della comunità studentesca",

    secHeatmap: "Attività & Costanza",
    heatmapTitle: "Disciplina di Ingegneria Quotidiana",
    heatmapDesc: "Mentalità da triathlon Ironman applicata al codice: progressi giornalieri, commit atomici e costanza impeccabile.",
    heatmapCommitsCount: "580+ commit nell'ultimo anno",
    heatmapStreak: "Serie attiva di commit",
    heatmapConsistency: "Alta cadenza settimanale",
    heatmapLegendLess: "Meno",
    heatmapLegendMore: "Più",

    secLanguages: "Distribuzione Linguaggi",

    secRepos: "Repository e Progetti in Evidenza",
    filterAll: "Tutti",
    filterFeatured: "In Evidenza",
    filterWeb: "Web & Apps",
    filterTools: "Estensioni & Tools",
    filterCommunity: "Comunità",
    searchPlaceholder: "Cerca repository, tecnologia o tag...",
    noReposFound: "Nessun repository trovato con questo filtro.",

    btnViewCode: "Vedi Codice",
    btnOpenLiveApp: "Apri Live App",
    btnCopyClone: "Copia Clone",
    copiedTooltip: "Copiato!",

    secCommunity: "Leadership nella Comunità",
    orgTitle: "Descomplica TI - Organizzazione Accademica",
    orgSubtitle: "Fondatore e Responsabile Tecnico della comunità studentesca",
    orgDesc1: "Ho fondato Descomplica TI per unire la teoria accademica alla pratica professionale dello sviluppo software.",
    orgDesc2: "Gestione dei repository, revisione delle Pull Request, standardizzazione dei wiki e mentoring per nuovi studenti.",
    orgPillarGovernance: "Governance & Code Review",
    orgPillarMentorship: "Mentoring di Sviluppatori",
    orgPillarProjects: "Progetti di Estensione (PEX)",
    btnVisitOrg: "Visita Organizzazione su GitHub",

    secTerminal: "Terminale Interattivo",
    terminalTitle: "Installazione e Setup Rapido",
    terminalSubtitle: "Seleziona un progetto per visualizzare i comandi di setup:",
    btnCopyCommand: "Copia Blocco",

    repoStudioOSDesc: "Sistema Operativo web per creator con 12 strumenti di IA integrati (Rank Idee, Mentor IA, Teleprompter). Astro 7, React 19, Supabase.",
    repoSoulFighterDesc: "Remaster di Soul Fighter (LoL) con sonoro Web Audio API (<2ms), rotazioni 3D su GPU a 60 FPS e classifica globale.",
    repoIdealCalcDesc: "Calcolatore statistico ispirato a Dieter Rams e Braun che elabora microdati IBGE nel client in meno di 8ms.",
    repoDownloaderDesc: "Estensione Chromium Side Panel con Companion App nativa (yt-dlp + FFmpeg) per video fino a 4K60 HDR e flussi HLS.",
    repoDuoToolsDesc: "Estensione Chrome per automazione intelligente su Duolingo: farm XP da API diretta, modalità Super e widget fluttuante.",
    repoAsterDevDesc: "Codice sorgente di questo portfolio Aster OS in stile iPad con fisica tattile ed effetti sonori.",
    repoCarteiraDesc: "Tesserino studentesco digitale per smartphone sviluppato per facilitare la vita universitaria.",
    repoPexWikiDesc: "Enciclopedia interativa SPA per documentare meccaniche di gioco con navigazione istantanea.",
  },

  nl: {
    bio: "Software Engineer & Reverse Engineer. Bouwen van vloeiende interfaces, edge-architecturen en high-fidelity systemen met low-level precisie.",
    badgeActive: "Actief op GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Oprichter @Descomplica-TI",
    btnViewProfile: "Open GitHub-profiel",
    btnOrgCommunity: "Descomplica-TI Community",

    statReposTitle: "Publieke Repositories",
    statReposSub: "Projecten, extensies & tools",
    statExperienceTitle: "Jaren op GitHub",
    statExperienceSub: "Continu actief sinds 2020",
    statFocusTitle: "Primaire Stack",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Governance & Mentorschap",
    statLeadershipSub: "Tech lead van studentenorganisatie",

    secHeatmap: "Activiteit & Ritme",
    heatmapTitle: "Dagelijkse Engineeringdiscipline",
    heatmapDesc: "Ironman-triatlon mentaliteit toegepast op software: dagelijkse vooruitgang, atomaire commits en constante focus.",
    heatmapCommitsCount: "580+ commits in het afgelopen jaar",
    heatmapStreak: "Actieve commitreeks",
    heatmapConsistency: "Hoge wekelijkse frequentie",
    heatmapLegendLess: "Minder",
    heatmapLegendMore: "Meer",

    secLanguages: "Taalverdeling",

    secRepos: "Uitgelichte Repositories & Projecten",
    filterAll: "Alle",
    filterFeatured: "Uitgelicht",
    filterWeb: "Web & Apps",
    filterTools: "Extensies & Tools",
    filterCommunity: "Community",
    searchPlaceholder: "Zoek repository, technologie of tag...",
    noReposFound: "Geen repositories gevonden voor deze filter.",

    btnViewCode: "Bekijk Code",
    btnOpenLiveApp: "Start Live App",
    btnCopyClone: "Kopieer Clone",
    copiedTooltip: "Gekopieerd!",

    secCommunity: "Community-leiderschap",
    orgTitle: "Descomplica TI - Academische Organisatie",
    orgSubtitle: "Oprichter & technisch leider van IT-studentengemeenschap",
    orgDesc1: "Descomplica TI opgericht om de kloof tussen theorie en echte software-engineering te overbruggen.",
    orgDesc2: "Repository-governance, Pull Request-reviews, wiki-standaardisatie en mentorschap van medestudenten.",
    orgPillarGovernance: "Governance & Code Review",
    orgPillarMentorship: "Mentorschap voor Devs",
    orgPillarProjects: "Extensieprojecten (PEX)",
    btnVisitOrg: "Bezoek Organisatie op GitHub",

    secTerminal: "Interactieve Terminal",
    terminalTitle: "Snelle Installatie & Setup",
    terminalSubtitle: "Selecteer een repository om de setup-opdrachten te bekijken:",
    btnCopyCommand: "Kopieer Commando's",

    repoStudioOSDesc: "Webbesturingssysteem voor makers met 12 geïntegreerde AI-tools (Ideeën-ranking, AI-mentor, Teleprompter). Gebouwd met Astro 7, React 19 en Supabase.",
    repoSoulFighterDesc: "Soul Fighter (LoL) remaster met real-time Web Audio API (<2ms), 60 FPS GPU-versnelde 3D en wereldwijde ranglijst.",
    repoIdealCalcDesc: "Statistische calculator in Braun/Dieter Rams-stijl met IBGE-censusberekening in de browser onder 8ms.",
    repoDownloaderDesc: "Chromium Side Panel-extensie + native Companion App (yt-dlp + FFmpeg) voor video tot 4K60 HDR en HLS-streams.",
    repoDuoToolsDesc: "Chrome-extensie voor Duolingo-automatisering met directe API XP-farming, Super-modus en in-page widget.",
    repoAsterDevDesc: "Broncode van dit complete Aster OS iPad-portfolio met haptische feedback en geluidsontwerp.",
    repoCarteiraDesc: "Interactieve digitale studentenkaart voor smartphones ontworpen voor studenten.",
    repoPexWikiDesc: "Interactieve SPA-encyclopedie voor diepgaande documentatie van gameplay-mechanieken.",
  },

  ru: {
    bio: "Инженер-программист и Reverse Engineer. Создание отзывчивых интерфейсов, edge-архитектур и высоконагруженных систем с низкоуровневой точностью.",
    badgeActive: "Активен на GitHub",
    badgeOpenSource: "Open Source",
    badgeCommunity: "Основатель @Descomplica-TI",
    btnViewProfile: "Открыть профиль GitHub",
    btnOrgCommunity: "Сообщество Descomplica-TI",

    statReposTitle: "Публичные репозитории",
    statReposSub: "Проекты, расширения и утилиты",
    statExperienceTitle: "Лет на GitHub",
    statExperienceSub: "Непрерывно активен с 2020 года",
    statFocusTitle: "Основной стек",
    statFocusSub: "TypeScript, React и Astro",
    statLeadershipTitle: "Руководство и менторство",
    statLeadershipSub: "Технический лидер сообщества",

    secHeatmap: "Активность и ритм",
    heatmapTitle: "Ежедневная инженерная дисциплина",
    heatmapDesc: "Принцип триатлона Ironman в коде: ежедневный прогресс, атомарные коммиты и абсолютная регулярность.",
    heatmapCommitsCount: "580+ коммитов за последний год",
    heatmapStreak: "Активная серия коммитов",
    heatmapConsistency: "Высокая еженедельная частота",
    heatmapLegendLess: "Меньше",
    heatmapLegendMore: "Больше",

    secLanguages: "Распределение по языкам",

    secRepos: "Избранные репозитории и проекты",
    filterAll: "Все",
    filterFeatured: "Главные",
    filterWeb: "Веб и приложения",
    filterTools: "Расширения и утилиты",
    filterCommunity: "Сообщество",
    searchPlaceholder: "Поиск репозитория, технологии или тега...",
    noReposFound: "Репозитории не найдены по данному запросу.",

    btnViewCode: "Посмотреть код",
    btnOpenLiveApp: "Запустить Live App",
    btnCopyClone: "Скопировать Clone",
    copiedTooltip: "Скопировано!",

    secCommunity: "Лидерство в сообществе",
    orgTitle: "Descomplica TI - Академическая организация",
    orgSubtitle: "Основатель и технический лидер студенческого IT-сообщества",
    orgDesc1: "Основал Descomplica TI для объединения вузовской теории с реальной инженерной практикой.",
    orgDesc2: "Управление репозиториями, ревью Pull Request, стандартизация вики-документации и наставничество студентов.",
    orgPillarGovernance: "Governance и Code Review",
    orgPillarMentorship: "Менторство новых инженеров",
    orgPillarProjects: "Академические проекты (PEX)",
    btnVisitOrg: "Страница организации на GitHub",

    secTerminal: "Интерактивный терминал",
    terminalTitle: "Быстрая установка и запуск",
    terminalSubtitle: "Выберите репозиторий для просмотра команд клонирования:",
    btnCopyCommand: "Скопировать блок",

    repoStudioOSDesc: "Веб-операционная система для авторов с 12 встроенными инструментами ИИ (ранг идей, ментор, телесуфлер). Astro 7, React 19, Supabase.",
    repoSoulFighterDesc: "Ремастер игры Soul Fighter (LoL) со звуком Web Audio API (<2мс), аппаратным 3D в 60 FPS и глобальным рейтингом.",
    repoIdealCalcDesc: "Статистический калькулятор в стиле Дитера Рамса / Braun, обрабатывающий микроданные переписи населения менее чем за 8мс.",
    repoDownloaderDesc: "Расширение Chromium Side Panel с нативным приложением (yt-dlp + FFmpeg) для загрузки видео до 4K60 HDR и потоков HLS.",
    repoDuoToolsDesc: "Расширение Chrome для умной автоматизации Duolingo: фарм XP через прямое API, режим Super и плавающий виджет.",
    repoAsterDevDesc: "Исходный код портфолио Aster OS в стиле iPad с тактильной физикой и звуковым оформлением.",
    repoCarteiraDesc: "Интерактивный цифровой студенческий билет для смартфонов для быстрого доступа к сервисам.",
    repoPexWikiDesc: "Интерактивная SPA-энциклопедия для глубокой документации игровых механик.",
  },

  ar: {
    bio: "مهندس برمجيات وخبير هندسة عكسية. بناء واجهات سلسة وبنى سحابية متطورة مع فهم عميق للنظم على المستوى المنخفض.",
    badgeActive: "نشط على GitHub",
    badgeOpenSource: "مفتوح المصدر",
    badgeCommunity: "مؤسس @Descomplica-TI",
    btnViewProfile: "فتح الملف الشخصي",
    btnOrgCommunity: "مجتمع Descomplica-TI",

    statReposTitle: "المستودعات العامة",
    statReposSub: "مشاريع وتطبيقات وأدوات",
    statExperienceTitle: "سنوات على GitHub",
    statExperienceSub: "نشط باستمرار منذ عام 2020",
    statFocusTitle: "التقنيات الأساسية",
    statFocusSub: "TypeScript و React و Astro",
    statLeadershipTitle: "الحوكمة والإرشاد",
    statLeadershipSub: "القائد التقني للمنظمة الطلابية",

    secHeatmap: "النشاط والانتظام",
    heatmapTitle: "الانضباط البرمجي اليومي",
    heatmapDesc: "عقلية رياضة الآيرون مان مطبقة في البرمجة: تقدم يومي مستمر، التزامات دقيقة وانضباط لا يلين.",
    heatmapCommitsCount: "+580 مساهمة خلال العام الماضي",
    heatmapStreak: "سلسلة مساهمات متواصلة",
    heatmapConsistency: "معدل أسبوعي مرتفع",
    heatmapLegendLess: "أقل",
    heatmapLegendMore: "أكثر",

    secLanguages: "توزيع لغات البرمجة",

    secRepos: "المستودعات والمشاريع المميزة",
    filterAll: "الكل",
    filterFeatured: "المميزة",
    filterWeb: "الويب والتطبيقات",
    filterTools: "الإضافات والأدوات",
    filterCommunity: "المجتمع",
    searchPlaceholder: "البحث في المستودعات والتقنيات...",
    noReposFound: "لم يتم العثور على مستودعات مطابقة.",

    btnViewCode: "عرض الكود",
    btnOpenLiveApp: "تشغيل التطبيق",
    btnCopyClone: "نسخ أمر الاستنساخ",
    copiedTooltip: "تم النسخ!",

    secCommunity: "القيادة المجتمعية",
    orgTitle: "Descomplica TI - المنظمة الأكاديمية",
    orgSubtitle: "المؤسس والقائد التقني لمجتمع طلاب علوم الحاسوب",
    orgDesc1: "تأسيس المنظمة لربط النظريات الأكاديمية بممارسات هندسة البرمجيات الحقيقية.",
    orgDesc2: "إدارة المستودعات ومراجعة طلبات السحب وتوحيد التوثيق وإرشاد الطلاب الجدد.",
    orgPillarGovernance: "الحوكمة ومراجعة الكود",
    orgPillarMentorship: "إرشاد المطورين الجدد",
    orgPillarProjects: "مشاريع التوسع الأكاديمي",
    btnVisitOrg: "زيارة المنظمة على GitHub",

    secTerminal: "الطرفية التفاعلية",
    terminalTitle: "الاستنساخ والتثبيت السريع",
    terminalSubtitle: "اختر مشروعاً لعرض أوامر الإعداد المباشرة:",
    btnCopyCommand: "نسخ الأوامر",

    repoStudioOSDesc: "نظام تشغيل ويب لصناع المحتوى مع 12 أداة ذكاء اصطناعي مدمجة. مبني بتقنيات Astro 7 و React 19 و Supabase.",
    repoSoulFighterDesc: "إعادة بناء لعبة Soul Fighter مع صوت حقيقي عبر Web Audio API (<2ms) وتسريع رسومي ثلاثي الأبعاد 60 FPS.",
    repoIdealCalcDesc: "حاسبة إحصائية مستوحاة من ديتر رامز تحلل بيانات التعداد السكاني في المتصفح في أقل من 8ms.",
    repoDownloaderDesc: "إضافة متصفح Chromium مع لوحة جانبية وتطبيق مرافق لتنزيل الفيديو بجودة تصل إلى 4K60 HDR وبثوث HLS.",
    repoDuoToolsDesc: "إضافة متصفح لأتمتة Duolingo مع تحصيل XP عبر API المباشر وفتح وضع Super وواجهة عائمة.",
    repoAsterDevDesc: "الكود المصدري لمحفظة أعمال Aster OS المستوحاة من أجهزة iPad الكلاسيكية والحديثة.",
    repoCarteiraDesc: "بطاقة طالب رقمية تفاعلية للهواتف الذكية لتسهيل المعاملات الجامعية.",
    repoPexWikiDesc: "موسوعة SPA تفاعلية لتوثيق آليات اللعب مع تصفح فوري وسريع.",
  },

  jp: {
    bio: "ソフトウェアエンジニア & リバースエンジニア。低レイヤーの探求と並行し、エッジアーキテクチャと妥協のないUIを構築。",
    badgeActive: "GitHubでアクティブ",
    badgeOpenSource: "オープンソース",
    badgeCommunity: "創設者 @Descomplica-TI",
    btnViewProfile: "GitHubプロフィールを開く",
    btnOrgCommunity: "コミュニティ Descomplica-TI",

    statReposTitle: "公開リポジトリ",
    statReposSub: "プロダクト・拡張機能・ツール",
    statExperienceTitle: "GitHub利用歴",
    statExperienceSub: "2020年より継続して開発",
    statFocusTitle: "主要技術スタック",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "ガバナンス & メンター",
    statLeadershipSub: "学生組織のテックリード",

    secHeatmap: "アクティビティ & リズム",
    heatmapTitle: "日々のエンジニアリング規律",
    heatmapDesc: "アイアンマントライアスロンの精神をコードに昇華：毎日の着実な前進、アトミックコミット、徹底した継続力。",
    heatmapCommitsCount: "過去1年で580+コミット",
    heatmapStreak: "継続コミットストリーク",
    heatmapConsistency: "高頻度なウィークリーケイデンス",
    heatmapLegendLess: "少",
    heatmapLegendMore: "多",

    secLanguages: "言語別コード比率",

    secRepos: "注目リポジトリ & プロジェクト",
    filterAll: "すべて",
    filterFeatured: "注目",
    filterWeb: "Web & アプリ",
    filterTools: "拡張機能 & ツール",
    filterCommunity: "コミュニティ",
    searchPlaceholder: "リポジトリ、技術、タグを検索...",
    noReposFound: "該当するリポジトリは見つかりませんでした。",

    btnViewCode: "コードを見る",
    btnOpenLiveApp: "アプリを起動",
    btnCopyClone: "クローンをコピー",
    copiedTooltip: "コピーしました！",

    secCommunity: "コミュニティリーダーシップ",
    orgTitle: "Descomplica TI - 学術エンジニア組織",
    orgSubtitle: "CS学部生コミュニティの創設者 & テックリード",
    orgDesc1: "大学の理論と実践的ソフトウェア開発の架け橋となるべくDescomplica TIを設立。",
    orgDesc2: "リポジトリのガバナンス、PRレビュー、Wikiの標準化、Gitとアーキテクチャの学生指導を主導。",
    orgPillarGovernance: "ガバナンス & コードレビュー",
    orgPillarMentorship: "後進の開発者メンター",
    orgPillarProjects: "大学エクステンション案件 (PEX)",
    btnVisitOrg: "GitHubで組織を見る",

    secTerminal: "インタラクティブ・ターミナル",
    terminalTitle: "クイッククローン & セットアップ",
    terminalSubtitle: "プロジェクトを選択してコマンドを確認：",
    btnCopyCommand: "コマンドをコピー",

    repoStudioOSDesc: "12種類のAI制作支援ツールを統合したクリエイター向けWeb OS。Astro 7、React 19、Supabaseで構築。",
    repoSoulFighterDesc: "Web Audio API (<2ms) による即時発音、GPU 60 FPS 3D描画、世界ランキングを備えたLoL格闘カードゲーム。",
    repoIdealCalcDesc: "ディーター・ラムスに着想を得た統計計算機。ブラウザ内8ms未満で国勢調査データを高速解析。",
    repoDownloaderDesc: "Chromiumサイドパネルとネイティブアプリ (yt-dlp + FFmpeg) の連携で4K60 HDRやHLS動画を保存。",
    repoDuoToolsDesc: "Duolingo向けスマート自動化拡張機能。API直叩きXP周回、Superモード解放、インページ操作ウィジェット。",
    repoAsterDevDesc: "iPadライクな触覚フィードバックとサウンドを備えた本ポートフォリオAster OSの全ソースコード。",
    repoCarteiraDesc: "スマホ上でスムーズに利用できる大学公認のインタラクティブ学生証アプリ。",
    repoPexWikiDesc: "ゲームプレイメカニクスを瞬時に閲覧できる高速SPA型インタラクティブ百科事典。",
  },

  kr: {
    bio: "소프트웨어 엔지니어 & 리버스 엔지니어. 로우레벨 시스템 분석 역량을 바탕으로 반응성 높은 웹과 엣지 아키텍처를 구현합니다.",
    badgeActive: "GitHub 활동 중",
    badgeOpenSource: "오픈소스",
    badgeCommunity: "창립자 @Descomplica-TI",
    btnViewProfile: "GitHub 프로필 열기",
    btnOrgCommunity: "Descomplica-TI 커뮤니티",

    statReposTitle: "공개 레포지토리",
    statReposSub: "프로젝트, 확장 프로그램 및 툴",
    statExperienceTitle: "GitHub 활동 연차",
    statExperienceSub: "2020년부터 지속적인 개발",
    statFocusTitle: "주요 스택",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "거버넌스 & 멘토링",
    statLeadershipSub: "컴퓨터공학 학생 조직 테크 리드",

    secHeatmap: "활동 빈도 & 리듬",
    heatmapTitle: "일일 엔지니어링 규율",
    heatmapDesc: "아이언맨 철인 3종 경기 정신의 코딩 실천: 매일 꾸준한 성장, 원자적 커밋, 빈틈없는 훈련.",
    heatmapCommitsCount: "최근 1년간 580+ 커밋",
    heatmapStreak: "연속 커밋 스트릭",
    heatmapConsistency: "높은 주간 커밋 빈도",
    heatmapLegendLess: "적음",
    heatmapLegendMore: "많음",

    secLanguages: "언어별 점유율",

    secRepos: "주요 레포지토리 & 프로젝트",
    filterAll: "전체",
    filterFeatured: "대표작",
    filterWeb: "웹 & 앱",
    filterTools: "확장 프로그램 & 툴",
    filterCommunity: "커뮤니티",
    searchPlaceholder: "레포지토리, 기술, 태그 검색...",
    noReposFound: "검색된 레포지토리가 없습니다.",

    btnViewCode: "코드 보기",
    btnOpenLiveApp: "라이브 앱 실행",
    btnCopyClone: "Clone 복사",
    copiedTooltip: "복사됨!",

    secCommunity: "커뮤니티 리더십",
    orgTitle: "Descomplica TI - 학술 개발 조직",
    orgSubtitle: "컴퓨터공학과 학생 커뮤니티 창립자 & 테크 리드",
    orgDesc1: "학문적 이론과 실제 소프트웨어 엔지니어링 실무 사이의 간극을 좁히기 위해 Descomplica TI를 설립했습니다.",
    orgDesc2: "코드 거버넌스, PR 리뷰, 위키 문서화 표준화 및 신입 학생 멘토링을 주도하고 있습니다.",
    orgPillarGovernance: "거버넌스 & 코드 리뷰",
    orgPillarMentorship: "개발자 멘토링",
    orgPillarProjects: "학술 연계 프로젝트 (PEX)",
    btnVisitOrg: "GitHub 조직 방문하기",

    secTerminal: "인터랙티브 터미널",
    terminalTitle: "빠른 설치 및 설정",
    terminalSubtitle: "명령어를 확인할 프로젝트를 선택하세요:",
    btnCopyCommand: "명령어 복사",

    repoStudioOSDesc: "12가지 AI 콘텐츠 제작 툴이 통합된 크리에이터용 웹 OS. Astro 7, React 19, Supabase 기반 구축.",
    repoSoulFighterDesc: "Web Audio API (<2ms) 실시간 음향 합성, GPU 60 FPS 3D 모션, Supabase 글로벌 랭킹이 결합된 롤 카드 게임.",
    repoIdealCalcDesc: "디터 람스 철학 기반의 통계 계산기. 브라우저에서 인구통계 마이크로데이터를 8ms 내 즉각 분석.",
    repoDownloaderDesc: "Chromium 사이드 패널과 네이티브 앱 (yt-dlp + FFmpeg) 을 연동하여 4K60 HDR 및 HLS 스트림을 다운로드.",
    repoDuoToolsDesc: "듀오링고 스마트 자동화 확장 프로그램: 직통 API XP 파밍, 슈퍼 모드 해제 및 인페이지 위젯.",
    repoAsterDevDesc: "iPad 감성의 햅틱 피드백과 사운드 디자인이 담긴 본 포트폴리오 Aster OS의 전체 소스코드.",
    repoCarteiraDesc: "스마트폰에서 손쉽게 신원을 증명할 수 있는 인터랙티브 디지털 학생증 웹 앱.",
    repoPexWikiDesc: "게임 메커니즘을 탭 이동 없이 즉각적으로 탐색할 수 있는 SPA 기반 인터랙티브 백과사전.",
  },

  cn: {
    bio: "软件工程师与逆向工程师。在深入底层系统探究的同时，打造极具流畅度与高保真体验的Web应用与边缘架构。",
    badgeActive: "GitHub 活跃开发者",
    badgeOpenSource: "开源项目",
    badgeCommunity: "创始人 @Descomplica-TI",
    btnViewProfile: "打开 GitHub 个人主页",
    btnOrgCommunity: "Descomplica-TI 组织",

    statReposTitle: "公开仓库",
    statReposSub: "项目、浏览器扩展与工程工具",
    statExperienceTitle: "GitHub 活跃年限",
    statExperienceSub: "自 2020 年起持续提交代码",
    statFocusTitle: "核心技术栈",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "开源治理与辅导",
    statLeadershipSub: "高校计算机学生组织技术主管",

    secHeatmap: "提交动态与节奏",
    heatmapTitle: "每日工程自律",
    heatmapDesc: "将铁人三项的严苛自律注入工程代码：坚持每日微小增量、原子化提交与高度专注。",
    heatmapCommitsCount: "过去一年累计 580+ 次提交",
    heatmapStreak: "当前连续提交记录",
    heatmapConsistency: "极高周频活跃度",
    heatmapLegendLess: "少",
    heatmapLegendMore: "多",

    secLanguages: "代码语言分布",

    secRepos: "精选公开仓库与核心项目",
    filterAll: "全部",
    filterFeatured: "精选",
    filterWeb: "Web 与应用",
    filterTools: "扩展与自动化",
    filterCommunity: "学术组织",
    searchPlaceholder: "搜索仓库名称、技术栈或标签...",
    noReposFound: "未找到符合条件的仓库。",

    btnViewCode: "查看代码",
    btnOpenLiveApp: "运行在线应用",
    btnCopyClone: "复制克隆命令",
    copiedTooltip: "已复制！",

    secCommunity: "社区技术领导力",
    orgTitle: "Descomplica TI - 高校计算机学术组织",
    orgSubtitle: "计算机系学生社区创始人兼技术主管",
    orgDesc1: "创办 Descomplica TI 旨在打破高校理论教学与真实工业级软件工程之间的鸿沟。",
    orgDesc2: "负责代码仓库规范化治理、Pull Request 代码审查、Wiki 文档系统建设以及为新人开发者提供 Git 和系统架构辅导。",
    orgPillarGovernance: "规范治理与代码审查",
    orgPillarMentorship: "新人开发者实战指导",
    orgPillarProjects: "高校实战延伸项目 (PEX)",
    btnVisitOrg: "访问 GitHub 组织",

    secTerminal: "交互式工程终端",
    terminalTitle: "快速克隆与环境部署",
    terminalSubtitle: "选择仓库查看即拷即用的终端部署命令：",
    btnCopyCommand: "复制代码块",

    repoStudioOSDesc: "面向创作者的一体化 Web 操作系统，内含 12 款 AI 制作链路工具（选题评分、AI 导师、提词器）。基于 Astro 7、React 19 与 Supabase 构建。",
    repoSoulFighterDesc: "英雄联盟斗魂觉醒主题卡牌重构版，搭载低延迟 Web Audio API 实时音频合成（< 2ms）、GPU 3D 60 FPS 翻牌动画与云端排行榜。",
    repoIdealCalcDesc: "遵循 Dieter Rams / Braun 设计理念的统计推演计算器，纯客户端 8ms 内完成 IBGE 人口普查微观数据推演计算。",
    repoDownloaderDesc: "采用 Chromium Side Panel 与原生 Companion App（yt-dlp + FFmpeg）混合架构，支持高达 4K60 HDR 视频与 HLS 加密流抓取。",
    repoDuoToolsDesc: "Duolingo 自动化 Chrome 扩展程序（Manifest V3）：支持直调 API 刷取经验值、解锁 Super 会员模式及页面浮动悬浮球。",
    repoAsterDevDesc: "本站 Aster OS 复古与现代 iPad 风格交互式系统的完整源代码，内置触觉反馈与拟物音频架构。",
    repoCarteiraDesc: "为大学生日常认证量身打造的手机端交互式数字学生证应用。",
    repoPexWikiDesc: "用于深度解析游戏机制的交互式单页百科全书，实现毫秒级无感知切换。",
  },

  vn: {
    bio: "Kỹ sư phần mềm & Reverse Engineer. Xây dựng giao diện mượt mà, kiến trúc edge và hệ thống chính xác cao song song với việc phân tích hệ thống ở mức thấp.",
    badgeActive: "Hoạt động trên GitHub",
    badgeOpenSource: "Mã nguồn mở",
    badgeCommunity: "Sáng lập @Descomplica-TI",
    btnViewProfile: "Mở hồ sơ GitHub",
    btnOrgCommunity: "Cộng đồng Descomplica-TI",

    statReposTitle: "Kho lưu trữ công khai",
    statReposSub: "Dự án, tiện ích & công cụ",
    statExperienceTitle: "Năm trên GitHub",
    statExperienceSub: "Hoạt động liên tục từ 2020",
    statFocusTitle: "Stack chủ lực",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Quản trị & Hướng dẫn",
    statLeadershipSub: "Trưởng nhóm kỹ thuật sinh viên",

    secHeatmap: "Hoạt động & Nhịp độ",
    heatmapTitle: "Kỷ luật kỹ thuật hằng ngày",
    heatmapDesc: "Tinh thần 3 môn phối hợp Ironman áp dụng vào lập trình: tiến bộ mỗi ngày, commit nguyên tử và sự kiên trì tuyệt đối.",
    heatmapCommitsCount: "580+ commits trong năm qua",
    heatmapStreak: "Chuỗi commit liên tục",
    heatmapConsistency: "Tần suất hằng tuần cao",
    heatmapLegendLess: "Ít",
    heatmapLegendMore: "Nhiều",

    secLanguages: "Phân bổ ngôn ngữ",

    secRepos: "Kho lưu trữ & Dự án nổi bật",
    filterAll: "Tất cả",
    filterFeatured: "Nổi bật",
    filterWeb: "Web & Ứng dụng",
    filterTools: "Tiện ích & Tool",
    filterCommunity: "Cộng đồng",
    searchPlaceholder: "Tìm kiếm repo, công nghệ hoặc thẻ...",
    noReposFound: "Không tìm thấy kho lưu trữ nào phù hợp.",

    btnViewCode: "Xem mã nguồn",
    btnOpenLiveApp: "Mở ứng dụng",
    btnCopyClone: "Sao chép Clone",
    copiedTooltip: "Đã sao chép!",

    secCommunity: "Lãnh đạo cộng đồng",
    orgTitle: "Descomplica TI - Tổ chức học thuật",
    orgSubtitle: "Người sáng lập & Trưởng nhóm kỹ thuật sinh viên CNTT",
    orgDesc1: "Thành lập Descomplica TI nhằm kết nối lý thuyết đại học với thực tế kỹ nghệ phần mềm chuyên nghiệp.",
    orgDesc2: "Quản trị kho lưu trữ, kiểm duyệt Pull Request, chuẩn hóa tài liệu Wiki và hướng dẫn sinh viên mới.",
    orgPillarGovernance: "Quản trị & Code Review",
    orgPillarMentorship: "Hướng dẫn lập trình viên",
    orgPillarProjects: "Dự án mở rộng đại học (PEX)",
    btnVisitOrg: "Xem tổ chức trên GitHub",

    secTerminal: "Terminal tương tác",
    terminalTitle: "Cài đặt & Thiết lập nhanh",
    terminalSubtitle: "Chọn một dự án để xem lệnh triển khai nhanh:",
    btnCopyCommand: "Sao chép khối lệnh",

    repoStudioOSDesc: "Hệ điều hành web cho nhà sáng tạo tích hợp 12 công cụ AI (xếp hạng ý tưởng, cố vấn AI, máy nhắc chữ). Astro 7, React 19, Supabase.",
    repoSoulFighterDesc: "Làm lại trò chơi Soul Fighter (LoL) với âm thanh Web Audio API (<2ms), đồ họa 3D GPU 60 FPS và bảng xếp hạng Supabase.",
    repoIdealCalcDesc: "Máy tính thống kê phong cách Dieter Rams / Braun phân tích dữ liệu dân số IBGE trên trình duyệt trong dưới 8ms.",
    repoDownloaderDesc: "Tiện ích Chromium Side Panel kết hợp ứng dụng nền (yt-dlp + FFmpeg) tải video lên đến 4K60 HDR và luồng HLS.",
    repoDuoToolsDesc: "Tiện ích Chrome tự động hóa thông minh cho Duolingo: cày XP qua API, mở khóa chế độ Super và widget nổi.",
    repoAsterDevDesc: "Mã nguồn đầy đủ của danh mục Aster OS phong cách iPad với phản hồi xúc giác và âm thanh.",
    repoCarteiraDesc: "Thẻ sinh viên kỹ thuật số tương tác trên điện thoại giúp sinh viên quản lý thuận tiện.",
    repoPexWikiDesc: "Bách khoa toàn thư SPA tương tác tài liệu hóa cơ chế trò chơi với tốc độ tức thì.",
  },

  id: {
    bio: "Insinyur Perangkat Lunak & Reverse Engineer. Membangun antarmuka lancar, arsitektur edge, dan sistem fidelitas tinggi sambil membedah sistem tingkat rendah.",
    badgeActive: "Aktif di GitHub",
    badgeOpenSource: "Sumber Terbuka",
    badgeCommunity: "Pendiri @Descomplica-TI",
    btnViewProfile: "Buka Profil GitHub",
    btnOrgCommunity: "Komunitas Descomplica-TI",

    statReposTitle: "Repositori Publik",
    statReposSub: "Proyek, ekstensi & perkakas",
    statExperienceTitle: "Tahun di GitHub",
    statExperienceSub: "Aktif terus-menerus sejak 2020",
    statFocusTitle: "Stack Utama",
    statFocusSub: "TypeScript, React & Astro",
    statLeadershipTitle: "Tata Kelola & Mentoring",
    statLeadershipSub: "Tech lead organisasi mahasiswa",

    secHeatmap: "Aktivitas & Irama",
    heatmapTitle: "Disiplin Rekayasa Harian",
    heatmapDesc: "Pola pikir Ironman triathlon diterapkan pada kode: kemajuan harian bertahap, commit atomik, dan eksekusi konsisten.",
    heatmapCommitsCount: "580+ commit dalam setahun terakhir",
    heatmapStreak: "Runtutan commit aktif",
    heatmapConsistency: "Irama mingguan tinggi",
    heatmapLegendLess: "Sedikit",
    heatmapLegendMore: "Banyak",

    secLanguages: "Distribusi Bahasa",

    secRepos: "Repositori Unggulan & Proyek",
    filterAll: "Semua",
    filterFeatured: "Unggulan",
    filterWeb: "Web & Aplikasi",
    filterTools: "Ekstensi & Alat",
    filterCommunity: "Komunitas",
    searchPlaceholder: "Cari repositori, teknologi, atau tag...",
    noReposFound: "Tidak ada repositori yang cocok dengan filter ini.",

    btnViewCode: "Lihat Kode",
    btnOpenLiveApp: "Buka Aplikasi Live",
    btnCopyClone: "Salin Klon",
    copiedTooltip: "Tersalin!",

    secCommunity: "Kepemimpinan Komunitas",
    orgTitle: "Descomplica TI - Organisasi Akademik",
    orgSubtitle: "Pendiri & Tech Lead Komunitas Mahasiswa Ilmu Komputer",
    orgDesc1: "Mendirikan Descomplica TI untuk menjembatani teori akademik dan praktik rekayasa perangkat lunak dunia nyata.",
    orgDesc2: "Memimpin tata kelola repositori, review Pull Request, standarisasi wiki dokumentasi, dan membimbing mahasiswa lain dalam alur Git serta arsitektur sistem.",
    orgPillarGovernance: "Tata Kelola & Review Kode",
    orgPillarMentorship: "Mentoring Pengembang Baru",
    orgPillarProjects: "Proyek Ekstensi Akademik (PEX)",
    btnVisitOrg: "Kunjungi Organisasi di GitHub",

    secTerminal: "Terminal Interaktif",
    terminalTitle: "Instalasi & Pengaturan Cepat",
    terminalSubtitle: "Pilih proyek untuk melihat perintah klon dan eksekusi cepat:",
    btnCopyCommand: "Salin Blok Perintah",

    repoStudioOSDesc: "Sistem Operasi web untuk kreator dengan 12 alat AI terintegrasi (Peringkat Ide, Mentor AI, Teleprompter). Dibuat dengan Astro 7, React 19, dan Supabase.",
    repoSoulFighterDesc: "Remaster peringatan Soul Fighter (League of Legends) dengan audio Web Audio API (< 2ms), akselerasi 3D GPU 60 FPS, dan peringkat global Supabase.",
    repoIdealCalcDesc: "Kalkulator statistik terinspirasi Dieter Rams dan Braun yang mengolah data sensus IBGE 2022 dan PNAD di browser dalam waktu kurang dari 8ms.",
    repoDownloaderDesc: "Ekstensi Chromium (Manifest V3) dengan Side Panel dan aplikasi pendamping bawaan (yt-dlp + FFmpeg) untuk mengunduh media hingga 4K60 HDR dan stream HLS (.m3u8).",
    repoDuoToolsDesc: "Ekstensi Chrome (Manifest V3) untuk otomatisasi pintar di Duolingo: farming XP via API langsung, mode Super terbuka, dan widget melayang di halaman.",
    repoAsterDevDesc: "Kode sumber lengkap portofolio Aster OS bergaya iPad retro-modern dengan umpan balik taktil dan efek suara.",
    repoCarteiraDesc: "Kartu tanda mahasiswa digital interaktif yang dirancang untuk mempermudah identifikasi dan rutinitas mahasiswa kampus.",
    repoPexWikiDesc: "Ensiklopedia SPA interaktif untuk dokumentasi mendalam tentang mekanik gameplay Pex dengan navigasi instan.",
  },
};

interface RepoData {
  id: string;
  name: string;
  owner: string;
  fullName: string;
  descKey: keyof GitHubTranslations;
  category: "featured" | "web" | "tools" | "community";
  language: string;
  languageColor: string;
  htmlUrl: string;
  stars: number;
  forks: number;
  tags: string[];
  inAppAppId?: string;
  cloneUrl: string;
  liveUrl?: string;
}

const REPOSITORIES: RepoData[] = [
  {
    id: "studio-os",
    name: "StudioOS",
    owner: "zAstergun",
    fullName: "zAstergun/StudioOS",
    descKey: "repoStudioOSDesc",
    category: "featured",
    language: "TypeScript",
    languageColor: "#3178c6",
    htmlUrl: "https://github.com/zAstergun/StudioOS",
    stars: 2,
    forks: 0,
    tags: ["Astro 7", "React 19", "Tailwind v4", "Supabase", "Cloudflare Workers"],
    inAppAppId: "studio-os",
    cloneUrl: "https://github.com/zAstergun/StudioOS.git",
    liveUrl: "https://studio.asterdev.me/",
  },
  {
    id: "soul-fighter",
    name: "Soul-Fighter-Memory-Game",
    owner: "zAstergun",
    fullName: "zAstergun/Soul-Fighter-Memory-Game",
    descKey: "repoSoulFighterDesc",
    category: "featured",
    language: "TypeScript",
    languageColor: "#3178c6",
    htmlUrl: "https://github.com/zAstergun/Soul-Fighter-Memory-Game",
    stars: 1,
    forks: 0,
    tags: ["React 19", "Web Audio API", "CSS 3D", "GPU Acceleration", "Supabase"],
    inAppAppId: "soul-fighter-memory",
    cloneUrl: "https://github.com/zAstergun/Soul-Fighter-Memory-Game.git",
    liveUrl: "https://soulfighter.asterdev.me/",
  },
  {
    id: "ideal-calc",
    name: "Ideal-Calculator",
    owner: "zAstergun",
    fullName: "zAstergun/ideal-calculator",
    descKey: "repoIdealCalcDesc",
    category: "featured",
    language: "JavaScript",
    languageColor: "#f7df1e",
    htmlUrl: "https://github.com/zAstergun/ideal-calculator",
    stars: 1,
    forks: 0,
    tags: ["Data Science", "Censo IBGE", "Dieter Rams UI", "Client Calculations"],
    inAppAppId: "ideal-calculator",
    cloneUrl: "https://github.com/zAstergun/ideal-calculator.git",
    liveUrl: "https://idealcalc.asterdev.me/",
  },
  {
    id: "aster-downloader",
    name: "Aster-Video-Downloader",
    owner: "zAstergun",
    fullName: "zAstergun/Aster-Video-Downloader",
    descKey: "repoDownloaderDesc",
    category: "tools",
    language: "JavaScript",
    languageColor: "#f7df1e",
    htmlUrl: "https://github.com/zAstergun/Aster-Video-Downloader",
    stars: 0,
    forks: 0,
    tags: ["Chrome Extension", "Manifest V3", "yt-dlp", "FFmpeg", "Native Messaging"],
    cloneUrl: "https://github.com/zAstergun/Aster-Video-Downloader.git",
  },
  {
    id: "duo-tools",
    name: "Duo-Tools",
    owner: "zAstergun",
    fullName: "zAstergun/Duo-Tools",
    descKey: "repoDuoToolsDesc",
    category: "tools",
    language: "JavaScript",
    languageColor: "#f7df1e",
    htmlUrl: "https://github.com/zAstergun/Duo-Tools",
    stars: 0,
    forks: 0,
    tags: ["Chrome Extension", "Manifest V3", "Automation", "Reverse Engineering"],
    cloneUrl: "https://github.com/zAstergun/Duo-Tools.git",
  },
  {
    id: "asterdev-me",
    name: "asterdev.me",
    owner: "zAstergun",
    fullName: "zAstergun/asterdev.me",
    descKey: "repoAsterDevDesc",
    category: "web",
    language: "TypeScript",
    languageColor: "#3178c6",
    htmlUrl: "https://github.com/zAstergun/asterdev.me",
    stars: 0,
    forks: 0,
    tags: ["React 19", "Aster OS", "Tailwind CSS", "Vite", "iPad Simulation"],
    cloneUrl: "https://github.com/zAstergun/asterdev.me.git",
  },
  {
    id: "carteira-estudante",
    name: "Carteira-de-Estudante-Descomplica",
    owner: "zAstergun",
    fullName: "zAstergun/Carteira-de-Estudante-Descomplica",
    descKey: "repoCarteiraDesc",
    category: "community",
    language: "JavaScript",
    languageColor: "#f7df1e",
    htmlUrl: "https://github.com/zAstergun/Carteira-de-Estudante-Descomplica",
    stars: 0,
    forks: 0,
    tags: ["Student Utility", "Mobile UI", "Community Support", "JavaScript"],
    cloneUrl: "https://github.com/zAstergun/Carteira-de-Estudante-Descomplica.git",
  },
  {
    id: "pex-wiki",
    name: "pex-wiki",
    owner: "zAstergun",
    fullName: "zAstergun/pex-wiki",
    descKey: "repoPexWikiDesc",
    category: "community",
    language: "JavaScript",
    languageColor: "#f7df1e",
    htmlUrl: "https://github.com/zAstergun/pex-wiki",
    stars: 0,
    forks: 0,
    tags: ["SPA", "Documentation", "Academic Wiki", "PEX"],
    cloneUrl: "https://github.com/zAstergun/pex-wiki.git",
    liveUrl: "https://pex-wiki.vercel.app/",
  },
];

// 52-week deterministic activity heatmap pattern
function generateHeatmapData() {
  const weeks: number[][] = [];
  // Seeded pattern to reflect intense coding on weekdays, consistent weekends
  for (let w = 0; w < 36; w++) {
    const days: number[] = [];
    for (let d = 0; d < 7; d++) {
      // Deterministic calculation based on index
      const val = (w * 7 + d * 13 + (w % 3) * 5) % 17;
      let level = 0;
      if (val > 14) level = 4;
      else if (val > 10) level = 3;
      else if (val > 6) level = 2;
      else if (val > 2) level = 1;
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
}

export function GitHubDetail({
  isDark = false,
  isDesktop = false,
  language = "br",
  onOpenApp,
}: GitHubDetailProps) {
  const t = GITHUB_I18N[language] || GITHUB_I18N.br;

  const [activeFilter, setActiveFilter] = useState<"all" | "featured" | "web" | "tools" | "community">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedRepoId, setCopiedRepoId] = useState<string | null>(null);
  const [terminalRepo, setTerminalRepo] = useState<RepoData>(REPOSITORIES[0]);
  const [terminalCopied, setTerminalCopied] = useState(false);

  // Live profile stats from GitHub with instant fallback
  const [liveStats, setLiveStats] = useState<{
    publicRepos: number;
    followers: number;
    avatarUrl: string;
  }>({
    publicRepos: 18,
    followers: 17,
    avatarUrl: "https://avatars.githubusercontent.com/u/73000882?v=4",
  });

  useEffect(() => {
    let isMounted = true;
    const fetchGitHubProfile = async () => {
      try {
        const res = await fetch("https://api.github.com/users/zAstergun", {
          headers: { Accept: "application/vnd.github.v3+json" },
        });
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setLiveStats({
              publicRepos: data.public_repos ?? 18,
              followers: data.followers ?? 17,
              avatarUrl: data.avatar_url ?? "https://avatars.githubusercontent.com/u/73000882?v=4",
            });
          }
        }
      } catch {
        // Silently use resilient local state
      }
    };
    fetchGitHubProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  const heatmapMatrix = useMemo(() => generateHeatmapData(), []);

  // Theme palettes matching Aster OS
  const textPrimary = isDark ? "text-stone-100" : "text-stone-900";
  const textSecondary = isDark ? "text-stone-300" : "text-stone-700";
  const textMuted = isDark ? "text-stone-400" : "text-stone-500";
  const textFaint = isDark ? "text-stone-500" : "text-stone-400";
  const dividerColor = isDark ? "border-stone-800" : "border-aster-dark/[0.08]";

  const cardBase = isDark
    ? "bg-stone-800/40 border-stone-800/80 hover:border-stone-700/80 hover:bg-stone-800/60"
    : "bg-white/60 border-stone-200/80 hover:border-stone-300 hover:bg-white";

  const filteredRepos = useMemo(() => {
    return REPOSITORIES.filter((repo) => {
      const matchesFilter =
        activeFilter === "all" ? true : repo.category === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        repo.name.toLowerCase().includes(q) ||
        repo.language.toLowerCase().includes(q) ||
        repo.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const copyCloneUrl = (repo: RepoData) => {
    navigator.clipboard.writeText(`git clone ${repo.cloneUrl}`);
    setCopiedRepoId(repo.id);
    setTimeout(() => {
      setCopiedRepoId((curr) => (curr === repo.id ? null : curr));
    }, 2000);
  };

  const copyTerminalSnippet = () => {
    const snippet = `git clone ${terminalRepo.cloneUrl}\ncd ${terminalRepo.name}\nnpm install\nnpm run dev`;
    navigator.clipboard.writeText(snippet);
    setTerminalCopied(true);
    setTimeout(() => {
      setTerminalCopied(false);
    }, 2000);
  };

  return (
    <div className={`space-y-8 ${isDesktop ? "max-w-3xl" : "w-full"}`}>
      {/* ── 1. Hero Identity Card: Developer Profile ── */}
      <div
        className={`p-4 @tablet:p-6 rounded-2xl border transition-all ${cardBase} relative overflow-hidden`}
      >
        {/* Subtle decorative code watermark in background */}
        <div
          className="absolute right-2 -bottom-4 opacity-[0.03] select-none pointer-events-none font-mono text-7xl font-black"
          aria-hidden="true"
        >
          &lt;/&gt;
        </div>

        <div className="flex flex-col @tablet:flex-row items-start @tablet:items-center justify-between gap-3.5 @tablet:gap-4">
          <div className="flex items-center gap-3 w-full @tablet:w-auto min-w-0">
            <div className="relative shrink-0 w-12 h-12 @tablet:w-16 @tablet:h-16">
              <img
                src={liveStats.avatarUrl}
                alt="Douglas Luiz (zAstergun)"
                className="w-12 h-12 @tablet:w-16 @tablet:h-16 aspect-square rounded-full object-cover ring-2 ring-aster-accent/30 shadow-md shrink-0"
                onError={(e) => {
                  // Fallback to local app icon if network avatar fails
                  (e.target as HTMLImageElement).src = "/icons/apps/github.svg";
                }}
              />
              <span
                className="absolute bottom-0 right-0 w-3 h-3 @tablet:w-3.5 @tablet:h-3.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-stone-900"
                title={t.badgeActive}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <h3 className={`text-base @tablet:text-xl font-bold tracking-tight ${textPrimary} whitespace-nowrap`}>
                  Douglas Luiz
                </h3>
                <span className="text-xs font-mono font-medium text-aster-accent">
                  @zAstergun
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1 mt-1">
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] @tablet:text-[10px] font-mono font-semibold shrink-0 ${
                    isDark
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {t.badgeActive}
                </span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] @tablet:text-[10px] font-mono font-medium shrink-0 ${
                    isDark
                      ? "bg-stone-700/60 text-stone-300"
                      : "bg-stone-100 text-stone-700 border border-stone-200"
                  }`}
                >
                  {t.badgeOpenSource}
                </span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] @tablet:text-[10px] font-mono font-medium shrink-0 ${
                    isDark
                      ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                      : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                  }`}
                >
                  {t.badgeCommunity}
                </span>
              </div>
            </div>
          </div>

          {/* Quick External CTAs */}
          <div className="flex items-center gap-2 w-full @tablet:w-auto">
            <a
              href="https://github.com/zAstergun"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 @tablet:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer ${
                isDark
                  ? "bg-stone-100 text-stone-900 hover:bg-white"
                  : "bg-stone-900 text-stone-100 hover:bg-stone-800"
              }`}
            >
              <GithubLogo weight="bold" className="w-4 h-4 shrink-0" />
              <span className="truncate">{t.btnViewProfile}</span>
              <ArrowSquareOut weight="bold" className="w-3.5 h-3.5 opacity-70 shrink-0" />
            </a>

            <a
              href="https://github.com/Descomplica-TI"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-2 rounded-xl border text-xs font-medium transition-all cursor-pointer shrink-0 ${
                isDark
                  ? "border-stone-700/80 bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white"
                  : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
              }`}
              title={t.btnOrgCommunity}
              aria-label={t.btnOrgCommunity}
            >
              <Users weight="bold" className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className={`mt-3.5 text-xs @tablet:text-sm leading-relaxed ${textSecondary}`}>
          {t.bio}
        </p>
      </div>

      {/* ── 2. Bento Grid: GitHub Stats ── */}
      <div className="grid grid-cols-2 @tablet:grid-cols-4 gap-2.5">
        {/* Metric 1: Repositórios */}
        <div className={`p-3 rounded-xl border transition-all ${cardBase}`}>
          <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint} mb-1 truncate`}>
            {t.statReposTitle}
          </span>
          <span className="text-base @tablet:text-xl font-bold block text-aster-accent">
            {liveStats.publicRepos}
          </span>
          <span className={`text-[10px] @tablet:text-[11px] leading-tight block ${textMuted} mt-0.5 truncate`}>
            {t.statReposSub}
          </span>
        </div>

        {/* Metric 2: Anos no GitHub */}
        <div className={`p-3 rounded-xl border transition-all ${cardBase}`}>
          <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint} mb-1 truncate`}>
            {t.statExperienceTitle}
          </span>
          <span className={`text-base @tablet:text-xl font-bold block ${textPrimary}`}>
            6+ Anos
          </span>
          <span className={`text-[10px] @tablet:text-[11px] leading-tight block ${textMuted} mt-0.5 truncate`}>
            {t.statExperienceSub}
          </span>
        </div>

        {/* Metric 3: Stack Predominante */}
        <div className={`p-3 rounded-xl border transition-all ${cardBase}`}>
          <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint} mb-1 truncate`}>
            {t.statFocusTitle}
          </span>
          <span className={`text-xs @tablet:text-base font-bold block ${textPrimary} truncate`}>
            TypeScript & React
          </span>
          <span className={`text-[10px] @tablet:text-[11px] leading-tight block ${textMuted} mt-0.5 truncate`}>
            {t.statFocusSub}
          </span>
        </div>

        {/* Metric 4: Governança & Comunidade */}
        <div
          onClick={() => window.open("https://github.com/Descomplica-TI", "_blank")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && window.open("https://github.com/Descomplica-TI", "_blank")}
          className={`p-3 rounded-xl border transition-all cursor-pointer group ${cardBase}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[10px] font-mono uppercase tracking-wider block ${textFaint} truncate`}>
              {t.statLeadershipTitle}
            </span>
            <ArrowRight
              weight="bold"
              className="w-3 h-3 text-aster-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            />
          </div>
          <span className={`text-xs @tablet:text-base font-bold block ${textPrimary} group-hover:text-aster-accent transition-colors truncate`}>
            @Descomplica-TI
          </span>
          <span className={`text-[10px] @tablet:text-[11px] leading-tight block ${textMuted} mt-0.5 truncate`}>
            {t.statLeadershipSub}
          </span>
        </div>
      </div>

      {/* ── 3. GitHub Contribution Heatmap Simulation ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-3.5`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendUp weight="bold" className="w-4 h-4 text-emerald-500" />
            <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
              {t.secHeatmap}
            </h4>
          </div>
          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            {t.heatmapCommitsCount}
          </span>
        </div>

        <div className={`p-4 @tablet:p-5 rounded-2xl border transition-all ${cardBase} space-y-3`}>
          <div>
            <h5 className={`text-sm @tablet:text-base font-bold ${textPrimary}`}>
              {t.heatmapTitle}
            </h5>
            <p className={`text-xs ${textSecondary} mt-0.5 leading-relaxed`}>
              {t.heatmapDesc}
            </p>
          </div>

          {/* Matrix Grid: clean scroll without ugly scrollbar thumb */}
          <div className="overflow-x-auto pb-1 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-[3.5px] min-w-max">
              {heatmapMatrix.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3.5px]">
                  {week.map((level, dIdx) => {
                    let tileColor = isDark ? "bg-stone-800/90" : "bg-stone-200/80";
                    if (level === 1) tileColor = isDark ? "bg-emerald-950" : "bg-emerald-100";
                    if (level === 2) tileColor = isDark ? "bg-emerald-800" : "bg-emerald-300";
                    if (level === 3) tileColor = isDark ? "bg-emerald-600" : "bg-emerald-500";
                    if (level === 4) tileColor = isDark ? "bg-emerald-400" : "bg-emerald-600";

                    return (
                      <span
                        key={dIdx}
                        className={`w-[11px] h-[11px] rounded-[2px] transition-transform hover:scale-125 cursor-pointer ${tileColor}`}
                        title={`Semana ${wIdx + 1}, Dia ${dIdx + 1}: ${level * 3} commits`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Footer: Streak + Legend */}
          <div className="flex flex-col @tablet:flex-row @tablet:items-center justify-between gap-2.5 text-[11px] font-mono pt-2 text-stone-500 dark:text-stone-400 border-t border-stone-200/50 dark:border-stone-800/50">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{t.heatmapStreak}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkle weight="fill" className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{t.heatmapConsistency}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 self-end @tablet:self-auto shrink-0">
              <span className={`text-[10px] font-mono ${textFaint}`}>
                {t.heatmapLegendLess}
              </span>
              <div className="flex items-center gap-1">
                <span className={`w-2.5 h-2.5 rounded-xs ${isDark ? "bg-stone-800" : "bg-stone-200"}`} />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-900/60 dark:bg-emerald-950" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600/70 dark:bg-emerald-800" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 dark:bg-emerald-600" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400 dark:bg-emerald-400" />
              </div>
              <span className={`text-[10px] font-mono ${textFaint}`}>
                {t.heatmapLegendMore}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Language Distribution Bar ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-3`}>
        <div className="flex items-center gap-2">
          <Code weight="bold" className="w-4 h-4 text-indigo-500" />
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secLanguages}
          </h4>
        </div>

        <div className={`p-4 rounded-xl border ${cardBase} space-y-3`}>
          {/* Progress Bar */}
          <div className="w-full h-3 rounded-full overflow-hidden flex bg-stone-200 dark:bg-stone-800">
            <div style={{ width: "58.4%" }} className="bg-[#3178c6] h-full" title="TypeScript 58.4%" />
            <div style={{ width: "24.1%" }} className="bg-[#f7df1e] h-full" title="JavaScript 24.1%" />
            <div style={{ width: "11.5%" }} className="bg-[#ff5d01] h-full" title="Astro & HTML 11.5%" />
            <div style={{ width: "6.0%" }} className="bg-[#3572A5] h-full" title="Python & C++ 6.0%" />
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 @tablet:grid-cols-4 gap-2 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3178c6]" />
              <span className={textSecondary}>TypeScript</span>
              <span className={textFaint}>58.4%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f7df1e]" />
              <span className={textSecondary}>JavaScript</span>
              <span className={textFaint}>24.1%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d01]" />
              <span className={textSecondary}>Astro & UI</span>
              <span className={textFaint}>11.5%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3572A5]" />
              <span className={textSecondary}>Outras</span>
              <span className={textFaint}>6.0%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. Repositories Explorer with Filter Tabs & Search ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <div className="flex flex-col @tablet:flex-row @tablet:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookBookmark weight="bold" className="w-4 h-4 text-aster-accent" />
            <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
              {t.secRepos}
            </h4>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1">
            {(
              [
                ["all", t.filterAll],
                ["featured", t.filterFeatured],
                ["web", t.filterWeb],
                ["tools", t.filterTools],
                ["community", t.filterCommunity],
              ] as const
            ).map(([key, label]) => {
              const isActive = activeFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveFilter(key)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-aster-accent text-white shadow-xs font-semibold"
                      : isDark
                      ? "bg-stone-800/80 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                      : "bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <MagnifyingGlass
            weight="bold"
            className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${textFaint}`}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-aster-accent/40 ${
              isDark
                ? "bg-stone-800/60 border-stone-700/80 text-stone-100 placeholder-stone-500"
                : "bg-white/80 border-stone-200 text-stone-900 placeholder-stone-400"
            }`}
          />
        </div>

        {/* Repos Grid */}
        {filteredRepos.length === 0 ? (
          <div className={`p-8 text-center rounded-2xl border ${cardBase} ${textMuted} text-xs font-mono`}>
            {t.noReposFound}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3.5">
            {filteredRepos.map((repo) => {
              const isCopied = copiedRepoId === repo.id;
              const desc = t[repo.descKey] as string;

              return (
                <div
                  key={repo.id}
                  className={`p-4 @tablet:p-5 rounded-2xl border transition-all ${cardBase} flex flex-col justify-between gap-3 group`}
                >
                  {/* Header: Title + Badges + External Link */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <GitBranch weight="bold" className="w-4 h-4 text-aster-accent shrink-0" />
                        <a
                          href={repo.htmlUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm @tablet:text-base font-bold font-mono ${textPrimary} hover:text-aster-accent transition-colors truncate`}
                          title={repo.name}
                        >
                          {repo.name}
                        </a>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {repo.category === "featured" && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-amber-500/15 text-amber-500 border border-amber-500/30 shrink-0">
                            Flagship
                          </span>
                        )}
                        {repo.category === "community" && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shrink-0">
                            Acadêmico
                          </span>
                        )}
                        <a
                          href={repo.htmlUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-1 rounded text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer shrink-0`}
                          aria-label={`${t.btnViewCode}: ${repo.name}`}
                        >
                          <ArrowSquareOut weight="bold" className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-xs @tablet:text-sm leading-relaxed ${textSecondary}`}>
                      {desc}
                    </p>
                  </div>

                  {/* Tags & Actions */}
                  <div className="pt-2.5 border-t border-stone-200/50 dark:border-stone-800/50 flex flex-col gap-2.5">
                    {/* Tech details */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      {/* Language Dot */}
                      <span className="flex items-center gap-1.5 font-medium shrink-0">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: repo.languageColor }}
                        />
                        <span className={textSecondary}>{repo.language}</span>
                      </span>

                      {/* Stars & Forks */}
                      <span className={`flex items-center gap-1 ${textFaint} shrink-0`}>
                        <Star weight="fill" className="w-3.5 h-3.5 text-amber-500/80" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className={`flex items-center gap-1 ${textFaint} shrink-0`}>
                        <GitFork weight="bold" className="w-3.5 h-3.5" />
                        <span>{repo.forks}</span>
                      </span>

                      {/* Chips */}
                      {repo.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-mono shrink-0 ${
                            isDark ? "bg-stone-800 text-stone-400" : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons row */}
                    <div className="flex flex-wrap items-center gap-2">
                      {repo.inAppAppId && onOpenApp && (
                        <button
                          type="button"
                          onClick={() => onOpenApp(repo.inAppAppId!)}
                          className="flex-1 @tablet:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-aster-accent/15 text-aster-accent border border-aster-accent/30 hover:bg-aster-accent/25 transition-colors cursor-pointer"
                        >
                          <Play weight="fill" className="w-3.5 h-3.5" />
                          <span>{t.btnOpenLiveApp}</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => copyCloneUrl(repo)}
                        className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                          isCopied
                            ? "bg-emerald-500 text-white"
                            : isDark
                            ? "bg-stone-800 border border-stone-700 text-stone-300 hover:bg-stone-700"
                            : "bg-stone-100 border border-stone-200 text-stone-700 hover:bg-stone-200"
                        }`}
                        title={`git clone ${repo.cloneUrl}`}
                      >
                        {isCopied ? (
                          <>
                            <Check weight="bold" className="w-3.5 h-3.5" />
                            <span>{t.copiedTooltip}</span>
                          </>
                        ) : (
                          <>
                            <Copy weight="bold" className="w-3.5 h-3.5" />
                            <span>Clone</span>
                          </>
                        )}
                      </button>

                      <a
                        href={repo.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 @tablet:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                          isDark
                            ? "border-stone-700 bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white"
                            : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        <GithubLogo weight="bold" className="w-3.5 h-3.5" />
                        <span>{t.btnViewCode}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── 6. Academic Organization Spotlight: Descomplica TI ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <div className="flex items-center gap-2">
          <Users weight="bold" className="w-4 h-4 text-indigo-500" />
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secCommunity}
          </h4>
        </div>

        <div className={`p-5 @tablet:p-6 rounded-2xl border transition-all ${cardBase} space-y-4`}>
          <div className="flex flex-col @tablet:flex-row items-start @tablet:items-center justify-between gap-3.5">
            <div className="flex items-start gap-3 w-full @tablet:w-auto min-w-0">
              <div className="w-11 h-11 min-w-[44px] min-h-[44px] aspect-square rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shrink-0">
                <Users weight="bold" className="w-5 h-5 shrink-0" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className={`text-sm @tablet:text-base font-bold ${textPrimary} leading-snug`}>
                  {t.orgTitle}
                </h5>
                <p className="text-[11px] @tablet:text-xs font-mono text-indigo-500 font-semibold mt-0.5 leading-snug">
                  {t.orgSubtitle}
                </p>
              </div>
            </div>

            <a
              href="https://github.com/Descomplica-TI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full @tablet:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm transition-all cursor-pointer shrink-0"
            >
              <span>{t.btnVisitOrg}</span>
              <ArrowSquareOut weight="bold" className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2 text-xs @tablet:text-sm leading-relaxed">
            <p className={textSecondary}>{t.orgDesc1}</p>
            <p className={textSecondary}>{t.orgDesc2}</p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 @tablet:grid-cols-3 gap-2.5 pt-2">
            <div className={`p-3 rounded-xl border ${cardBase} flex items-center gap-2`}>
              <ShieldCheck weight="fill" className="w-4 h-4 text-indigo-500 shrink-0" />
              <span className={`text-xs font-bold ${textPrimary}`}>
                {t.orgPillarGovernance}
              </span>
            </div>
            <div className={`p-3 rounded-xl border ${cardBase} flex items-center gap-2`}>
              <Cpu weight="fill" className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className={`text-xs font-bold ${textPrimary}`}>
                {t.orgPillarMentorship}
              </span>
            </div>
            <div className={`p-3 rounded-xl border ${cardBase} flex items-center gap-2`}>
              <GitPullRequest weight="fill" className="w-4 h-4 text-amber-500 shrink-0" />
              <span className={`text-xs font-bold ${textPrimary}`}>
                {t.orgPillarProjects}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7. Interactive Terminal: Setup & Clone Assistant ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-3.5`}>
        <div className="flex items-center gap-2">
          <TerminalWindow weight="bold" className="w-4 h-4 text-emerald-500" />
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secTerminal}
          </h4>
        </div>

        <div className="space-y-2">
          <p className={`text-xs ${textSecondary}`}>
            {t.terminalSubtitle}
          </p>

          {/* Repo selector pills */}
          <div className="flex flex-wrap gap-1.5 pb-1">
            {REPOSITORIES.slice(0, 5).map((repo) => {
              const isSelected = terminalRepo.id === repo.id;
              return (
                <button
                  key={repo.id}
                  type="button"
                  onClick={() => setTerminalRepo(repo)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? "bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-bold"
                      : isDark
                      ? "bg-stone-800 text-stone-400 hover:text-stone-200"
                      : "bg-stone-100 text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {repo.name}
                </button>
              );
            })}
          </div>

          {/* Terminal Box */}
          <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-[#0d1117] text-stone-200 font-mono text-xs shadow-lg">
            {/* Window bar */}
            <div className="flex items-center justify-between px-3.5 py-2 border-b border-stone-800 bg-[#161b22] gap-2">
              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shrink-0" />
                <span className="ml-2 text-[10px] text-stone-400 select-none truncate max-w-[120px] @tablet:max-w-none">
                  bash — {terminalRepo.name}
                </span>
              </div>

              <button
                type="button"
                onClick={copyTerminalSnippet}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer shrink-0 ${
                  terminalCopied
                    ? "bg-emerald-500 text-white"
                    : "bg-stone-700/70 text-stone-200 hover:bg-stone-600"
                }`}
              >
                {terminalCopied ? (
                  <>
                    <Check weight="bold" className="w-3 h-3" />
                    <span>{t.copiedTooltip}</span>
                  </>
                ) : (
                  <>
                    <Copy weight="bold" className="w-3 h-3" />
                    <span>{t.btnCopyCommand}</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 space-y-1.5 leading-relaxed overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden selection:bg-aster-accent selection:text-white">
              <p className="text-stone-500 select-none"># 1. Clone repository from GitHub</p>
              <p className="text-emerald-400">
                <span className="text-stone-500 select-none">$ </span>git clone {terminalRepo.cloneUrl}
              </p>
              <p className="text-stone-500 select-none mt-2"># 2. Enter workspace & install dependencies</p>
              <p className="text-stone-200">
                <span className="text-stone-500 select-none">$ </span>cd {terminalRepo.name}
              </p>
              <p className="text-stone-200">
                <span className="text-stone-500 select-none">$ </span>npm install
              </p>
              <p className="text-stone-500 select-none mt-2"># 3. Start local development server</p>
              <p className="text-amber-400">
                <span className="text-stone-500 select-none">$ </span>npm run dev
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
