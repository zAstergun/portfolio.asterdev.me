import {
  ArrowSquareOut,
  LinkedinLogo,
  FilePdf,
  FileDoc,
  FileText,
  FileCode,
} from "@phosphor-icons/react";
import type { Language, ProjectItem } from "../data/aster";

interface CurriculumDetailProps {
  isDark?: boolean;
  isDesktop?: boolean;
  language?: Language;
  links?: ProjectItem["links"];
}

interface CVTranslations {
  secSummary: string;
  summaryText: string;
  secEducation: string;
  degreeTitle: string;
  degreePeriod: string;
  schoolName: string;
  degreeDesc: string;
  leadershipTitle: string;
  leadershipDesc: string;
  secStack: string;
  catAI: string;
  catFrontend: string;
  catBackend: string;
  catMobile: string;
  catWorkflow: string;
  secCertifications: string;
  certificationsDesc: string;
  secLanguagesAndDiscipline: string;
  lblLanguages: string;
  valLanguages: string;
  lblDiscipline: string;
  valDiscipline: string;
  secDownloads: string;
}

const CV_I18N: Record<Language, CVTranslations> = {
  br: {
    secSummary: "Resumo",
    summaryText: "Engenheiro de software focado em interfaces fluidas, arquitetura escalável e tipagem estrita com TypeScript. Experiência na construção de design systems, otimização de performance web, uso intensivo de IA na engenharia (Claude, Codex) e liderança de comunidades técnicas colaborativas.",
    secEducation: "Formação & Liderança Acadêmica",
    degreeTitle: "Bacharelado em Ciência da Computação",
    degreePeriod: "6º Semestre (Previsão de Conclusão: 2027)",
    schoolName: "Centro Universitário UniAmérica / Descomplica Faculdade Digital",
    degreeDesc: "Ênfase em Algoritmos, Estruturas de Dados Avançadas, Inteligência Artificial, IoT e Arquitetura de Software.",
    leadershipTitle: "Fundador & Líder Técnico de Comunidade Acadêmica",
    leadershipDesc: "Fundador de comunidade técnica estudantil com mentoria contínua, governança de repositórios no GitHub, code review e fomento a projetos open-source.",
    secStack: "Stack Técnica & Ferramentas",
    catAI: "IA & Engenharia Assistida",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Nuvem / Infra",
    catMobile: "Mobile & Baixo Nível",
    catWorkflow: "Gestão do Conhecimento & PKM",
    secCertifications: "Certificações Oficiais (37)",
    certificationsDesc: "37 certificações oficiais registradas e validadas (IoT Developer, IA Developer, TypeScript, React Completo, Oracle Next Education, Notion Advanced, entre outras), com autenticação individual disponível diretamente na pasta de Certificações deste portfólio.",
    secLanguagesAndDiscipline: "Idiomas & Disciplina",
    lblLanguages: "Idiomas",
    valLanguages: "Português (Nativo), Inglês (Avançado), Mandarim e Japonês (Em aprendizado contínuo).",
    lblDiscipline: "Disciplina & Mentalidade",
    valDiscipline: "Treinamento diário focado no Ironman Triathlon; mentalidade analítica formada na prática pela engenharia reversa e dissecação de sistemas em baixo nível.",
    secDownloads: "Documentos & Downloads Oficiais",
  },
  pt: {
    secSummary: "Resumo",
    summaryText: "Engenheiro de software focado em interfaces fluidas, arquitetura escalável e tipagem estrita com TypeScript. Experiência na conceção de design systems, performance web, fluxos assistidos por IA (Claude, Codex) e liderança de comunidades técnicas colaborativas.",
    secEducation: "Formação & Liderança Académica",
    degreeTitle: "Licenciatura / Bacharelado em Ciência da Computação",
    degreePeriod: "6º Semestre (Previsão de Conclusão: 2027)",
    schoolName: "UniAmérica / Descomplica Faculdade Digital",
    degreeDesc: "Foco em Algoritmos, Estruturas de Dados Avançadas, Inteligência Artificial, IoT e Engenharia de Software.",
    leadershipTitle: "Fundador & Líder Técnico de Comunidade Académica",
    leadershipDesc: "Criação de comunidade técnica estudantil com mentoria contínua, governança de repositórios no GitHub e incentivo a projetos colaborativos.",
    secStack: "Stack Técnica & Ferramentas",
    catAI: "IA & Engenharia Assistida",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Nuvem / Infra",
    catMobile: "Mobile & Baixo Nível",
    catWorkflow: "Gestão do Conhecimento & PKM",
    secCertifications: "Certificações Oficiais (37)",
    certificationsDesc: "37 certificações oficiais registadas e validadas (IoT Developer, IA Developer, TypeScript, React Completo, Oracle Next Education, Notion Advanced, entre outras), com links de verificação acessíveis na secção de Certificações.",
    secLanguagesAndDiscipline: "Línguas & Disciplina",
    lblLanguages: "Línguas",
    valLanguages: "Português (Nativo), Inglês (Avançado), Mandarim e Japonês (Em aprendizagem contínua).",
    lblDiscipline: "Disciplina & Engenharia",
    valDiscipline: "Treino diário focado no Ironman Triathlon; mentalidade analítica moldada na engenharia reversa e exploração de sistemas em baixo nível.",
    secDownloads: "Documentos & Descarregamentos Oficiais",
  },
  en: {
    secSummary: "Summary",
    summaryText: "Software Engineer specializing in high-performance web interfaces, scalable architecture, and strict TypeScript craftsmanship. Experienced in design systems, AI-augmented software engineering (Claude, Codex), and leading collaborative developer communities.",
    secEducation: "Education & Academic Leadership",
    degreeTitle: "Bachelor of Science in Computer Science",
    degreePeriod: "6th Semester (Expected Graduation: 2027)",
    schoolName: "UniAmérica / Descomplica Digital University",
    degreeDesc: "Academic core in Algorithms, Advanced Data Structures, Artificial Intelligence, IoT, and Software Architecture.",
    leadershipTitle: "Founder & Technical Lead of Academic Community",
    leadershipDesc: "Founded and mentored a peer technical community focused on code quality, collaborative GitHub repository governance, and open-source contributions.",
    secStack: "Technical Stack & Tooling",
    catAI: "AI & Augmented Engineering",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Cloud / Infra",
    catMobile: "Mobile & Low-Level",
    catWorkflow: "Knowledge Architecture & PKM",
    secCertifications: "Official Certifications (37)",
    certificationsDesc: "37 official verified credentials including IoT Developer, AI Developer, TypeScript, React Complete, Oracle Next Education (ONE), and Notion Advanced — fully authentic and viewable in this portfolio's Certifications folder.",
    secLanguagesAndDiscipline: "Languages & Discipline",
    lblLanguages: "Languages",
    valLanguages: "Portuguese (Native), English (Advanced), Mandarin and Japanese (Continuous active learning).",
    lblDiscipline: "Discipline & Engineering Mindset",
    valDiscipline: "Rigorous daily training towards an Ironman triathlon; practical problem-solving roots in low-level systems exploration and reverse engineering.",
    secDownloads: "Official Documents & Downloads",
  },
  es: {
    secSummary: "Resumen",
    summaryText: "Ingeniero de software enfocado en interfaces de alto rendimiento, arquitectura escalable y TypeScript estricto. Experiencia en diseño de sistemas, flujos asistidos por IA (Claude, Codex) y liderazgo técnico comunitario.",
    secEducation: "Formación y Liderazgo Académico",
    degreeTitle: "Licenciatura en Ciencias de la Computación",
    degreePeriod: "6º Semestre (Graduación prevista: 2027)",
    schoolName: "UniAmérica / Descomplica Facultad Digital",
    degreeDesc: "Énfasis en Algoritmos, Estructuras de Datos Avanzadas, Inteligencia Artificial, IoT e Ingeniería de Software.",
    leadershipTitle: "Fundador y Líder Técnico de Comunidad Académica",
    leadershipDesc: "Creación de comunidad técnica estudiantil con tutorías continuas, gobernanza de proyectos en GitHub y fomento del código abierto.",
    secStack: "Stack Técnico y Herramientas",
    catAI: "IA e Ingeniería Asistida",
    catFrontend: "Frontend Core y UI",
    catBackend: "Backend y Cloud / Infra",
    catMobile: "Mobile y Bajo Nivel",
    catWorkflow: "Gestión del Conocimiento y PKM",
    secCertifications: "Certificaciones Oficiales (37)",
    certificationsDesc: "37 certificaciones oficiales validadas (IoT Developer, IA Developer, TypeScript, React Completo, Oracle Next Education, Notion Advanced, entre otras) accesibles en la sección de Certificaciones.",
    secLanguagesAndDiscipline: "Idiomas y Disciplina",
    lblLanguages: "Idiomas",
    valLanguages: "Portugués (Nativo), Inglés (Avanzado), Mandarín y Japonés (En aprendizaje continuo).",
    lblDiscipline: "Disciplina y Mentalidad Técnica",
    valDiscipline: "Entrenamiento para completar un triatlón Ironman; mentalidad analítica forjada en la ingeniería inversa y sistemas a bajo nivel.",
    secDownloads: "Documentos y Descargas Oficiales",
  },
  fr: {
    secSummary: "Résumé",
    summaryText: "Ingénieur logiciel spécialisé dans les interfaces web haute performance, l'architecture évolutive et TypeScript strict. Expérience en design systems, ingénierie assistée par IA (Claude, Codex) et leadership communautaire.",
    secEducation: "Formation & Leadership Académique",
    degreeTitle: "Licence en Informatique (Computer Science)",
    degreePeriod: "6e Semestre (Diplôme prévu en 2027)",
    schoolName: "UniAmérica / Descomplica Faculté Numérique",
    degreeDesc: "Axé sur les algorithmes, structures de données avancées, intelligence artificielle, IoT et génie logiciel.",
    leadershipTitle: "Fondateur & Responsable Technique de Communauté",
    leadershipDesc: "Création d'une communauté technique pour le mentorat d'étudiants, la gouvernance de dépôts GitHub et l'open source.",
    secStack: "Stack Technique & Outils",
    catAI: "IA & Ingénierie Augmentée",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Cloud / Infra",
    catMobile: "Mobile & Bas Niveau",
    catWorkflow: "Gestion des Connaissances & PKM",
    secCertifications: "Certifications Officielles (37)",
    certificationsDesc: "37 certifications officielles vérifiées (IoT Developer, IA Developer, TypeScript, React, Oracle Next Education, Notion Advanced, etc.) directement consultables dans ce portfolio.",
    secLanguagesAndDiscipline: "Langues & Rigueur",
    lblLanguages: "Langues",
    valLanguages: "Portugais (Natif), Anglais (Avancé), Mandarin et Japonais (En apprentissage continu).",
    lblDiscipline: "Discipline & Esprit d'Ingénieur",
    valDiscipline: "Entraînement physique rigoureux pour le triathlon Ironman; curiosité technique née de la rétro-ingénierie et des systèmes bas niveau.",
    secDownloads: "Documents & Téléchargements Officiels",
  },
  de: {
    secSummary: "Zusammenfassung",
    summaryText: "Software Engineer mit Schwerpunkt auf performanten Interfaces, sauberer Architektur und striktem TypeScript. Praxis in Design-Systemen, KI-gestützter Entwicklung (Claude, Codex) und Leitung studentischer Tech-Communities.",
    secEducation: "Ausbildung & Akademische Leitung",
    degreeTitle: "Bachelor of Science in Informatik",
    degreePeriod: "6. Semester (Voraussichtlicher Abschluss: 2027)",
    schoolName: "UniAmérica / Descomplica Digital University",
    degreeDesc: "Schwerpunkte: Algorithmen, fortgeschrittene Datenstrukturen, künstliche Intelligenz, IoT und Softwarearchitektur.",
    leadershipTitle: "Gründer & Technischer Leiter einer Studenten-Community",
    leadershipDesc: "Aufbau einer studentischen Entwickler-Community mit Mentoring, GitHub-Projekt-Governance und Open-Source-Zusammenarbeit.",
    secStack: "Technologie-Stack & Tools",
    catAI: "KI & Assistierte Softwareentwicklung",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Cloud / Infra",
    catMobile: "Mobile & Low-Level",
    catWorkflow: "Wissensarchitektur & PKM",
    secCertifications: "Offizielle Zertifizierungen (37)",
    certificationsDesc: "37 offiziell bestätigte Zertifikate (u.a. IoT Developer, KI Developer, TypeScript, React, Oracle Next Education, Notion Advanced), direkt im Portfolio einsehbar.",
    secLanguagesAndDiscipline: "Sprachen & Disziplin",
    lblLanguages: "Sprachen",
    valLanguages: "Portugiesisch (Muttersprache), Englisch (Fließend), Mandarin und Japanisch (Im kontinuierlichen Lernen).",
    lblDiscipline: "Disziplin & Ingenieursgeist",
    valDiscipline: "Intensives Ausdauertraining für den Ironman-Triathlon; analytischer Sachverstand geprägt durch Reverse Engineering und Low-Level-Systeme.",
    secDownloads: "Offizielle Dokumente & Downloads",
  },
  it: {
    secSummary: "Riepilogo",
    summaryText: "Ingegnere del software focalizzato su interfacce reattive, architettura modulare e TypeScript rigoroso. Esperienza in design systems, sviluppo assistito da IA (Claude, Codex) e conduzione di community tecniche.",
    secEducation: "Formazione & Leadership Accademica",
    degreeTitle: "Laurea in Informatica (Computer Science)",
    degreePeriod: "6º Semestre (Conclusione prevista: 2027)",
    schoolName: "UniAmérica / Descomplica Digital University",
    degreeDesc: "Approfondimento su Algoritmi, Strutture Dati Avanzate, Intelligenza Artificiale, IoT e Ingegneria del Software.",
    leadershipTitle: "Fondatore & Leader Tecnico di Community Accademica",
    leadershipDesc: "Fondazione di una community studentesca con focus su mentoring continuo, gestione di repository GitHub e codice aperto.",
    secStack: "Stack Tecnologico & Strumenti",
    catAI: "IA & Ingegneria Assistita",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Cloud / Infra",
    catMobile: "Mobile & Basso Livello",
    catWorkflow: "Gestione della Conoscenza & PKM",
    secCertifications: "Certificazioni Ufficiali (37)",
    certificationsDesc: "37 certificazioni ufficiali conseguite (IoT Developer, IA Developer, TypeScript, React, Oracle Next Education, Notion Advanced, ecc.) verificabili nel portfolio.",
    secLanguagesAndDiscipline: "Lingue & Disciplina",
    lblLanguages: "Lingue",
    valLanguages: "Portoghese (Madrelingua), Inglese (Avanzato), Mandarino e Giapponese (In apprendimento costante).",
    lblDiscipline: "Disciplina & Approccio Ingegneristico",
    valDiscipline: "Allenamento costante per il triathlon Ironman; capacità analitica formata su reverse engineering ed esplorazione di sistemi a basso livello.",
    secDownloads: "Documenti & Download Ufficiali",
  },
  nl: {
    secSummary: "Samenvatting",
    summaryText: "Software Engineer gespecialiseerd in snelle interfaces, schaalbare architectuur en strikte TypeScript. Ervaring in design systems, AI-ondersteund ontwikkelen (Claude, Codex) en het leiden van studentencommunities.",
    secEducation: "Opleiding & Academisch Leiderschap",
    degreeTitle: "Bachelor of Science in Informatica",
    degreePeriod: "6e Semester (Verwachte afstuderen: 2027)",
    schoolName: "UniAmérica / Descomplica Digital University",
    degreeDesc: "Kernvakken: Algoritmen, Geavanceerde Datastructuren, Kunstmatige Intelligentie, IoT en Software Architectuur.",
    leadershipTitle: "Oprichter & Technisch Leider Studentencommunity",
    leadershipDesc: "Oprichter van een studentencommunity voor peer-mentoring, GitHub-repositorybeheer en open-source bijdragen.",
    secStack: "Technische Stack & Tools",
    catAI: "AI & Geassisteerde Engineering",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Cloud / Infra",
    catMobile: "Mobile & Low-Level",
    catWorkflow: "Kennisarchitectuur & PKM",
    secCertifications: "Officiële Certificeringen (37)",
    certificationsDesc: "37 officiële certificeringen waaronder IoT Developer, AI Developer, TypeScript, React, Oracle Next Education en Notion Advanced, inzichtelijk in dit portfolio.",
    secLanguagesAndDiscipline: "Talen & Discipline",
    lblLanguages: "Talen",
    valLanguages: "Portugees (Moedertaal), Engels (Vloeiend), Mandarijn en Japans (Actief lerend).",
    lblDiscipline: "Discipline & Engineering Mindset",
    valDiscipline: "Toegewijde training voor de Ironman-triatlon; praktische analytische wortels in reverse engineering en low-level systemen.",
    secDownloads: "Officiële Documenten & Downloads",
  },
  ru: {
    secSummary: "Резюме",
    summaryText: "Инженер-программист, специализирующийся на высокопроизводительных интерфейсах, масштабируемой архитектуре и строгом TypeScript. Опыт в design systems, AI-инженерии (Claude, Codex) и руководстве IT-сообществом.",
    secEducation: "Образование и академическое лидерство",
    degreeTitle: "Компьютерные науки (Бакалавриат)",
    degreePeriod: "6-й семестр (Окончание: 2027)",
    schoolName: "UniAmérica / Descomplica Digital University",
    degreeDesc: "Упор на алгоритмы, сложные структуры данных, искусственный интеллект, IoT и проектирование ПО.",
    leadershipTitle: "Основатель и технический лидер сообщества",
    leadershipDesc: "Создание студенческого технического сообщества с регулярным менторством, стандартами GitHub и развитием open source.",
    secStack: "Технологический стек и инструменты",
    catAI: "ИИ и ассистированная инженерия",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Cloud / Infra",
    catMobile: "Mobile и низкоуровневые системы",
    catWorkflow: "Управление знаниями & PKM",
    secCertifications: "Официальные сертификаты (37)",
    certificationsDesc: "37 официальных верифицированных сертификатов (IoT Developer, AI Developer, TypeScript, React, Oracle Next Education, Notion Advanced и др.), доступных в портфолио.",
    secLanguagesAndDiscipline: "Языки и дисциплина",
    lblLanguages: "Языки",
    valLanguages: "Португальский (Родной), Английский (Свободный), Китайский и Японский (В процессе изучения).",
    lblDiscipline: "Дисциплина и инженерное мышление",
    valDiscipline: "Ежедневная подготовка к триатлону Ironman; инженерный кругозор, заложенный в практике реверс-инжиниринга и низкоуровневых систем.",
    secDownloads: "Официальные документы и загрузки",
  },
  ar: {
    secSummary: "الملخص",
    summaryText: "مهندس برمجيات متخصص في واجهات الويب عالية الأداء، والبنى القابلة للتوسع، وكتابة الكود الصارم بـ TypeScript. خبير في أنظمة التصميم، وهندسة البرمجيات المعززة بالذكاء الاصطناعي (Claude, Codex)، وقيادة المجتمعات التقنية.",
    secEducation: "التعليم والقيادة الأكاديمية",
    degreeTitle: "بكالوريوس علوم الحاسوب",
    degreePeriod: "الفصل السادس (التخرج المتوقع: 2027)",
    schoolName: "UniAmérica / كلية ديسكومبليكا الرقمية",
    degreeDesc: "التركيز على الخوارزميات، هياكل البيانات المتقدمة، الذكاء الاصطناعي، إنترنت الأشياء (IoT)، وهندسة البرمجيات.",
    leadershipTitle: "مؤسس وقائد تقني للمجتمع الأكاديمي",
    leadershipDesc: "تأسيس مجتمع طلابي تقني مكرس للتوجيه المستمر، وحوكمة مستودعات GitHub، والمساهمة في المشاريع مفتوحة المصدر.",
    secStack: "المكدس التقني والأدوات",
    catAI: "الذكاء الاصطناعي وهندسة البرمجيات المعززة",
    catFrontend: "الواجهة الأمامية وتجربة المستخدم",
    catBackend: "الواجهة الخلفية والسحابية",
    catMobile: "تطبيقات الهاتف والأنظمة",
    catWorkflow: "إدارة المعرفة والإنتاجية (PKM)",
    secCertifications: "الشهادات الرسمية (37)",
    certificationsDesc: "37 شهادة رسمية معتمدة وموثقة (IoT Developer, AI Developer, TypeScript, React, Oracle ONE, Notion Advanced) يمكن التحقق منها داخل قسم الشهادات.",
    secLanguagesAndDiscipline: "اللغات والانضباط العالي",
    lblLanguages: "اللغات",
    valLanguages: "البرتغالية (اللغة الأم)، الإنجليزية (متقدم)، الصينية واليابانية (تعلم مستمر).",
    lblDiscipline: "الانضباط والعقلية الهندسية",
    valDiscipline: "تدريب رياضي يومي لسباق الترايثلون Ironman؛ عقلية حل المشكلات المتجذرة في استكشاف الأنظمة منخفضة المستوى والهندسة العكسية.",
    secDownloads: "المستندات الرسمية والتحميل",
  },
  jp: {
    secSummary: "概要",
    summaryText: "高パフォーマンスなWebインターフェース、拡張性の高いシステム設計、厳格なTypeScript工学を追求するソフトウェアエンジニア。デザインシステム構築、AI支援開発（Claude、Codex）の活用、学生技術コミュニティの主導に実績を持ちます。",
    secEducation: "学歴 & アカデミックリーダーシップ",
    degreeTitle: "コンピュータサイエンス学部（学士課程）",
    degreePeriod: "第6セメスター（2027年卒業見込）",
    schoolName: "UniAmérica大学 / Descomplicaデジタル大学",
    degreeDesc: "アルゴリズム、高度なデータ構造、人工知能（AI）、IoT、ソフトウェアアーキテクチャを重点専攻。",
    leadershipTitle: "学生技術コミュニティ創設者 & テクニカルリード",
    leadershipDesc: "学生向け開発コミュニティを創設。継続的メンターシップ、GitHubリポジトリのガバナンス、オープンソース開発を牽引。",
    secStack: "技術スタック & ツール",
    catAI: "AI & 拡張エンジニアリング",
    catFrontend: "フロントエンド Core & UI",
    catBackend: "バックエンド & クラウド",
    catMobile: "モバイル & 低層システム",
    catWorkflow: "ナレッジ管理 & PKM",
    secCertifications: "公式認定資格 (37件)",
    certificationsDesc: "IoT Developer、IA Developer、TypeScript、React Complete、Oracle ONE、Notion Advancedなど37件の公式資格を取得・掲載中。",
    secLanguagesAndDiscipline: "語学 & 自己規律",
    lblLanguages: "語学力",
    valLanguages: "ポルトガル語（母語）、英語（上級実務）、中国語および日本語（継続学習中）。",
    lblDiscipline: "規律とエンジニアリング精神",
    valDiscipline: "アイアンマン・トライアスロン完走を目指すストイックな自己規律。リバースエンジニアリングや低層システム探求に根ざした問題解決能力。",
    secDownloads: "公式ドキュメント & ダウンロード",
  },
  cn: {
    secSummary: "个人总结",
    summaryText: "专注于高流畅度交互、高扩展架构与严格 TypeScript 工程化的软件工程师。深耕设计系统研发、AI 赋能工程流（Claude, Codex）与开源技术社群建设。",
    secEducation: "教育经历与学术领导力",
    degreeTitle: "计算机科学学士学位",
    degreePeriod: "第 6 学期（预计 2027 年毕业）",
    schoolName: "UniAmérica 大学 / Descomplica 数字大学",
    degreeDesc: "主修算法、高级数据结构、人工智能（AI）、物联网（IoT）与现代软件架构。",
    leadershipTitle: "学术技术社区创始人 & 技术主管",
    leadershipDesc: "创办学生开发者社区，推行一对一技能辅导、GitHub 项目工程规范治理与开源协作。",
    secStack: "核心技术栈与工程工具",
    catAI: "AI 与辅助工程流",
    catFrontend: "核心前端与交互界面",
    catBackend: "后端服务与云基础设施",
    catMobile: "移动端与系统底层",
    catWorkflow: "个人知识体系与 PKM",
    secCertifications: "官方权威认证 (37 项)",
    certificationsDesc: "已取得 IoT Developer、AI Developer、TypeScript、React、Oracle ONE、Notion Advanced 等 37 项权威认证，均可在本作品集认证模块中核验。",
    secLanguagesAndDiscipline: "语言技能与严苛自律",
    lblLanguages: "语言能力",
    valLanguages: "葡萄牙语（母语）、英语（高级精通）、中文与日语（持续积极学习中）。",
    lblDiscipline: "自律精神与底层工程思维",
    valDiscipline: "备战 Ironman 铁人三项的严苛生活规律；技术根植于逆向工程与底层系统运行机制的研究与攻坚。",
    secDownloads: "官方资料与简历下载",
  },
  kr: {
    secSummary: "요약",
    summaryText: "고성능 웹 인터페이스, 확장 가능한 아키텍처 및 엄격한 TypeScript 엔지니어링에 집중하는 소프트웨어 엔지니어입니다. 디자인 시스템, AI 지원 개발(Claude, Codex) 및 학술 기술 커뮤니티 리더십 경험을 보유하고 있습니다.",
    secEducation: "학력 및 학술 활동 리더십",
    degreeTitle: "컴퓨터공학과 (학사 과정)",
    degreePeriod: "6학기 재학 중 (2027년 졸업 예정)",
    schoolName: "UniAmérica 대학교 / Descomplica 디지털 대학",
    degreeDesc: "알고리즘, 고급 자료구조, 인공지능, IoT 및 소프트웨어 아키텍처 집중 이수.",
    leadershipTitle: "학술 개발자 커뮤니티 설립자 및 테크 리드",
    leadershipDesc: "학생 개발자 커뮤니티를 창립하여 지속적인 멘토링, GitHub 저장소 거버넌스 및 오픈소스 프로젝트를 이끌고 있습니다.",
    secStack: "기술 스택 및 전문 도구",
    catAI: "AI 및 어시스턴트 엔지니어링",
    catFrontend: "프론트엔드 코어 & UI",
    catBackend: "백엔드 & 클라우드 인프라",
    catMobile: "모바일 & 저수준 시스템",
    catWorkflow: "지식 관리 및 PKM",
    secCertifications: "공식 인증 자격 (37개)",
    certificationsDesc: "IoT Developer, AI Developer, TypeScript, React Complete, Oracle ONE, Notion Advanced 등 37개 공식 수료증을 포트폴리오에서 검증할 수 있습니다.",
    secLanguagesAndDiscipline: "어학 능력 및 훈련 규율",
    lblLanguages: "외국어",
    valLanguages: "포르투갈어 (모국어), 영어 (고급 실무), 중국어 및 일본어 (지속 학습 중).",
    lblDiscipline: "엔지니어링 마인드와 철인 훈련",
    valDiscipline: "아이언맨 철인 3종 경기 완주를 목표로 하는 자기 규율; 리버스 엔지니어링과 시스템 내부 구조 탐구에서 비롯된 문제 해결력.",
    secDownloads: "공식 문서 및 이력서 다운로드",
  },
  vn: {
    secSummary: "Tóm tắt",
    summaryText: "Kỹ sư phần mềm tập trung vào giao diện web hiệu năng cao, kiến trúc mở rộng và TypeScript nghiêm ngặt. Kinh nghiệm xây dựng design systems, kỹ nghệ phần mềm với AI (Claude, Codex) và dẫn dắt cộng đồng kỹ thuật sinh viên.",
    secEducation: "Học vấn & Lãnh đạo Học thuật",
    degreeTitle: "Cử nhân Khoa học Máy tính",
    degreePeriod: "Học kỳ 6 (Dự kiến tốt nghiệp 2027)",
    schoolName: "Đại học UniAmérica / Đại học Số Descomplica",
    degreeDesc: "Trọng tâm: Thuật toán, Cấu trúc dữ liệu nâng cao, Trí tuệ nhân tạo, IoT và Kiến trúc phần mềm.",
    leadershipTitle: "Người sáng lập & Trưởng nhóm Kỹ thuật",
    leadershipDesc: "Sáng lập cộng đồng công nghệ sinh viên với hoạt động hướng dẫn liên tục, chuẩn hóa kho GitHub và phát triển dự án mã nguồn mở.",
    secStack: "Ngăn xếp Công nghệ & Công cụ",
    catAI: "AI & Kỹ nghệ Trợ lý",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Đám mây / Hạ tầng",
    catMobile: "Mobile & Hệ thống Thấp",
    catWorkflow: "Quản trị Tri thức & PKM",
    secCertifications: "Chứng chỉ Chính thức (37)",
    certificationsDesc: "Đạt 37 chứng chỉ chính thức (IoT Developer, AI Developer, TypeScript, React, Oracle ONE, Notion Advanced) được xác thực trong danh mục chứng chỉ.",
    secLanguagesAndDiscipline: "Ngoại ngữ & Kỷ luật Thép",
    lblLanguages: "Ngoại ngữ",
    valLanguages: "Tiếng Bồ Đào Nha (Bản ngữ), Tiếng Anh (Nâng cao), Tiếng Trung và Tiếng Nhật (Đang liên tục học tập).",
    lblDiscipline: "Kỷ luật & Tư duy Kỹ thuật",
    valDiscipline: "Luyện tập thể lực hướng tới hoàn thành ba môn phối hợp Ironman; tư duy giải quyết vấn đề từ kỹ thuật dịch ngược hệ thống.",
    secDownloads: "Tài liệu Chính thức & Tải về",
  },
  id: {
    secSummary: "Ringkasan",
    summaryText: "Software Engineer berfokus pada antarmuka web performa tinggi, arsitektur terukur, dan TypeScript ketat. Berpengalaman dalam design systems, rekayasa dibantu AI (Claude, Codex), dan memimpin komunitas teknologi kampus.",
    secEducation: "Pendidikan & Kepemimpinan Kampus",
    degreeTitle: "Sarjana Ilmu Komputer (Computer Science)",
    degreePeriod: "Semester 6 (Kelulusan diharapkan 2027)",
    schoolName: "UniAmérica / Descomplica Digital University",
    degreeDesc: "Fokus pada Algoritma, Struktur Data Lanjutan, Kecerdasan Buatan (AI), IoT, dan Rekayasa Perangkat Lunak.",
    leadershipTitle: "Pendiri & Pemimpin Teknis Komunitas",
    leadershipDesc: "Mendirikan komunitas teknologi mahasiswa untuk mentoring berkesinambungan, tata kelola repositori GitHub, dan kontribusi open source.",
    secStack: "Tumpukan Teknologi & Alat",
    catAI: "AI & Rekayasa Terbantu",
    catFrontend: "Frontend Core & UI",
    catBackend: "Backend & Cloud / Infra",
    catMobile: "Mobile & Sistem Rendah",
    catWorkflow: "Manajemen Pengetahuan & PKM",
    secCertifications: "Sertifikasi Resmi (37)",
    certificationsDesc: "37 sertifikasi resmi terverifikasi (IoT Developer, AI Developer, TypeScript, React, Oracle ONE, Notion Advanced) dapat ditinjau di tab Sertifikasi.",
    secLanguagesAndDiscipline: "Bahasa & Disiplin",
    lblLanguages: "Bahasa",
    valLanguages: "Portugis (Penutur Asli), Inggris (Tingkat Mahir), Mandarin dan Jepang (Sedang dipelajari aktif).",
    lblDiscipline: "Disiplin & Pola Pikir Rekayasa",
    valDiscipline: "Latihan fisik intensif untuk menyelesaikan triathlon Ironman; pola pikir pemecahan masalah berakar pada reverse engineering sistem.",
    secDownloads: "Dokumen & Unduhan Resmi",
  },
};

const STACK_DATA = {
  ai: ["Claude", "Codex", "Prompt & Context Engineering", "Agentic Workflows"],
  frontend: [
    "React 19",
    "Next.js (App Router)",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Vue.js",
    "Astro",
  ],
  backend: [
    "Node.js",
    "REST APIs",
    "SQL / PostgreSQL",
    "Cloudflare (Workers, Pages, D1)",
    "Supabase",
    "Vercel",
    "Git & GitHub Actions",
  ],
  mobile: ["Flutter", "Dart", "C++ (Fundamentos & Baixo Nível)"],
  workflow: [
    "Notion Certified (Advanced, Workflows, Essentials)",
    "Obsidian (PKM)",
    "Arquitetura de Informação",
  ],
};

function renderDownloadIcon(icon?: string) {
  switch (icon) {
    case "linkedin":
      return <LinkedinLogo weight="fill" className="w-4 h-4 text-[#0077b5]" />;
    case "file-pdf":
      return <FilePdf weight="fill" className="w-4 h-4 text-rose-500" />;
    case "file-word":
      return <FileDoc weight="fill" className="w-4 h-4 text-blue-500" />;
    case "file-text":
      return <FileText weight="fill" className="w-4 h-4 text-emerald-600" />;
    case "file-json":
      return <FileCode weight="fill" className="w-4 h-4 text-amber-500" />;
    default:
      return <FileText weight="fill" className="w-4 h-4 text-aster-accent" />;
  }
}

export function CurriculumDetail({
  isDark = false,
  isDesktop = false,
  language = "br",
  links = [],
}: CurriculumDetailProps) {
  const t = CV_I18N[language] || CV_I18N.br;

  const textPrimary = isDark ? "text-stone-100" : "text-stone-900";
  const textSecondary = isDark ? "text-stone-300" : "text-stone-700";
  const textMuted = isDark ? "text-stone-400" : "text-stone-500";
  const textFaint = isDark ? "text-stone-500" : "text-stone-400";
  const dividerColor = isDark ? "border-stone-800" : "border-aster-dark/[0.08]";

  // Minimalist Pill Styling: warm neutral, 1px subtle border, micro typography
  const pillStyle = isDark
    ? "bg-stone-800/90 text-stone-300 border border-stone-700/80 hover:border-stone-600"
    : "bg-white/90 text-stone-700 border border-stone-200/90 hover:border-stone-300";

  return (
    <div className={`space-y-8 ${isDesktop ? "max-w-2xl" : "w-full"}`}>
      {/* ── Resumo ── */}
      <div className="space-y-2">
        <h3 className={`text-xs @tablet:text-sm font-bold uppercase tracking-widest ${textFaint}`}>
          {t.secSummary}
        </h3>
        <p className={`text-xs @tablet:text-sm leading-relaxed ${textSecondary}`}>
          {t.summaryText}
        </p>
      </div>

      {/* ── Formação & Liderança ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
          {t.secEducation}
        </h4>

        <div className="space-y-4 text-xs @tablet:text-sm">
          {/* Degree & College */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <span className={`font-semibold ${textPrimary}`}>
                {t.degreeTitle}
              </span>
              <span className={`text-[11px] font-mono ${textFaint}`}>
                {t.degreePeriod}
              </span>
            </div>
            <p className={`text-xs font-mono ${textFaint}`}>
              {t.schoolName}
            </p>
            <p className={`text-xs leading-relaxed ${textSecondary} pt-0.5`}>
              {t.degreeDesc}
            </p>
          </div>

          {/* Leadership */}
          <div className="space-y-1 pt-1">
            <span className={`font-semibold block ${textPrimary}`}>
              {t.leadershipTitle}
            </span>
            <p className={`text-xs leading-relaxed ${textSecondary}`}>
              {t.leadershipDesc}
            </p>
          </div>
        </div>
      </div>

      {/* ── Stack Técnica & Ferramentas ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-4`}>
        <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
          {t.secStack}
        </h4>

        <div className="space-y-3.5">
          {/* AI Stack (Claude, Codex, etc.) */}
          <div className="space-y-1.5">
            <span className={`text-[11px] font-mono uppercase tracking-wider block ${textFaint}`}>
              {t.catAI}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STACK_DATA.ai.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${pillStyle}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="space-y-1.5">
            <span className={`text-[11px] font-mono uppercase tracking-wider block ${textFaint}`}>
              {t.catFrontend}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STACK_DATA.frontend.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${pillStyle}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Cloud */}
          <div className="space-y-1.5">
            <span className={`text-[11px] font-mono uppercase tracking-wider block ${textFaint}`}>
              {t.catBackend}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STACK_DATA.backend.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${pillStyle}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile & Low-Level */}
          <div className="space-y-1.5">
            <span className={`text-[11px] font-mono uppercase tracking-wider block ${textFaint}`}>
              {t.catMobile}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STACK_DATA.mobile.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${pillStyle}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Knowledge & PKM */}
          <div className="space-y-1.5">
            <span className={`text-[11px] font-mono uppercase tracking-wider block ${textFaint}`}>
              {t.catWorkflow}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STACK_DATA.workflow.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${pillStyle}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Certificações Oficiais ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-2`}>
        <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
          {t.secCertifications}
        </h4>
        <p className={`text-xs leading-relaxed ${textSecondary}`}>
          {t.certificationsDesc}
        </p>
      </div>

      {/* ── Idiomas & Disciplina ── */}
      <div className={`pt-6 border-t ${dividerColor} space-y-3`}>
        <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
          {t.secLanguagesAndDiscipline}
        </h4>

        <div className="space-y-2.5 text-xs">
          <div>
            <span className={`font-semibold block ${textPrimary} mb-0.5`}>
              {t.lblLanguages}
            </span>
            <p className={`leading-relaxed ${textSecondary}`}>
              {t.valLanguages}
            </p>
          </div>

          <div>
            <span className={`font-semibold block ${textPrimary} mb-0.5`}>
              {t.lblDiscipline}
            </span>
            <p className={`leading-relaxed ${textSecondary}`}>
              {t.valDiscipline}
            </p>
          </div>
        </div>
      </div>

      {/* ── Documentos & Downloads ── */}
      {links && links.length > 0 && (
        <div className={`pt-6 border-t ${dividerColor} space-y-3`}>
          <h4 className={`text-[10px] font-mono uppercase tracking-[0.22em] font-bold ${textMuted}`}>
            {t.secDownloads}
          </h4>

          <div
            className={`grid gap-2 ${
              isDesktop ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
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
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border transition-all duration-200 group ${
                    isDisabled
                      ? isDark
                        ? "bg-stone-800/30 border-stone-800/60 cursor-not-allowed opacity-50"
                        : "bg-white/30 border-stone-200/50 cursor-not-allowed opacity-50"
                      : isDark
                        ? "bg-stone-800/40 border-stone-800 hover:border-stone-700 hover:bg-stone-800/80"
                        : "bg-white/40 border-stone-200/70 hover:border-stone-300 hover:bg-white"
                  }`}
                >
                  <span className="text-base flex items-center justify-center shrink-0">
                    {renderDownloadIcon(link.icon)}
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
