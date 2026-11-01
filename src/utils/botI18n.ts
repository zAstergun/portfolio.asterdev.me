// ─── Multilingual Knowledge Base & UI Strings for AsterBot ────────────────
// Full support for all 15 Aster.Dev languages:
// br (PT-BR), pt (PT-PT), en (English), es (Español), fr (Français),
// de (Deutsch), it (Italiano), nl (Nederlands), ru (Русский), ar (العربية),
// jp (日本語), cn (中文), kr (한국어), vn (Tiếng Việt), id (Bahasa Indonesia)

import type { IntentId, ActionButton } from "./heuristicClassifier";

export const BOT_LANGUAGES = [
  "br",
  "pt",
  "en",
  "es",
  "fr",
  "de",
  "it",
  "nl",
  "ru",
  "ar",
  "jp",
  "cn",
  "kr",
  "vn",
  "id",
] as const;

export type BotLanguage = typeof BOT_LANGUAGES[number];

export function resolveBotLanguage(lang?: string): BotLanguage {
  if (!lang) return "br";
  const normalized = lang.toLowerCase();
  if (normalized === "pt-br") return "br";
  if (normalized === "pt-pt") return "pt";
  if ((BOT_LANGUAGES as readonly string[]).includes(normalized)) {
    return normalized as BotLanguage;
  }
  return "en";
}

export interface BotUiText {
  welcomeMessage: string;
  initialSuggestions: string[];
  inputPlaceholder: string;
  assistantTitle: string;
  statusOnline: string;
  clearButton: string;
  isRtl?: boolean;
}

export interface LocalizedIntentData {
  text: string;
  actions?: ActionButton[];
  suggestions: string[];
}

// ─── UI Translations for ChatBot Window ───────────────────────────────────

export const BOT_UI_TRANSLATIONS: Record<BotLanguage, BotUiText> = {
  br: {
    welcomeMessage:
      "Olá! 👋 Sou o AsterBot, o assistente virtual do Aster.\n\nPosso tirar dúvidas sobre a trajetória dele, a origem na engenharia reversa, o treino para o Ironman, liderança acadêmica na UniAmérica e projetos como Ideal Calc, Soul Fighter e PEX Wiki. Sobre o que você gostaria de saber?",
    initialSuggestions: [
      "Quem é o Aster?",
      "Quais são os projetos?",
      "Qual a sua stack?",
      "Baixar Currículo",
      "Como entrar em contato?",
    ],
    inputPlaceholder: "Pergunte algo sobre o Aster ou projetos...",
    assistantTitle: "Assistente Oficial do Portfólio",
    statusOnline: "Online",
    clearButton: "Limpar",
  },
  pt: {
    welcomeMessage:
      "Olá! 👋 Sou o AsterBot, o assistente virtual do Aster.\n\nPosso responder a dúvidas sobre o seu percurso, a origem na engenharia reversa, o treino para o Ironman, liderança académica na UniAmérica e projetos como o Ideal Calc, Soul Fighter e PEX Wiki. O que gostaria de saber?",
    initialSuggestions: [
      "Quem é o Aster?",
      "Quais são os projetos?",
      "Qual a sua stack?",
      "Descarregar Currículo",
      "Como entrar em contacto?",
    ],
    inputPlaceholder: "Pergunte algo sobre o Aster ou projetos...",
    assistantTitle: "Assistente Oficial do Portfólio",
    statusOnline: "Online",
    clearButton: "Limpar",
  },
  en: {
    welcomeMessage:
      "Hello! 👋 I am AsterBot, Aster's virtual assistant.\n\nI can answer questions about his engineering journey, low-level reverse engineering origins, Ironman triathlon training, academic leadership, and projects like Ideal Calc, Soul Fighter, and PEX Wiki. How can I help you?",
    initialSuggestions: [
      "Who is Aster?",
      "What are his projects?",
      "What is his tech stack?",
      "Download Resume",
      "How to contact him?",
    ],
    inputPlaceholder: "Ask anything about Aster or his projects...",
    assistantTitle: "Official Portfolio Assistant",
    statusOnline: "Online",
    clearButton: "Clear",
  },
  es: {
    welcomeMessage:
      "¡Hola! 👋 Soy AsterBot, el asistente virtual de Aster.\n\nPuedo responder dudas sobre su trayectoria, su origen en ingeniería inversa, su entrenamiento para el Ironman, liderazgo académico en UniAmérica y proyectos como Ideal Calc, Soul Fighter y PEX Wiki. ¿Qué te gustaría saber?",
    initialSuggestions: [
      "¿Quién es Aster?",
      "¿Cuáles son sus proyectos?",
      "¿Cuál es su stack técnico?",
      "Descargar Currículum",
      "¿Cómo contactarlo?",
    ],
    inputPlaceholder: "Pregunta algo sobre Aster o sus proyectos...",
    assistantTitle: "Asistente Oficial del Portafolio",
    statusOnline: "En línea",
    clearButton: "Limpiar",
  },
  fr: {
    welcomeMessage:
      "Bonjour ! 👋 Je suis AsterBot, l'assistant virtuel d'Aster.\n\nJe peux répondre à vos questions sur son parcours d'ingénieur, ses origines en rétro-ingénierie, son entraînement pour l'Ironman, son leadership académique et ses projets comme Ideal Calc, Soul Fighter et PEX Wiki. Que souhaitez-vous savoir ?",
    initialSuggestions: [
      "Qui est Aster ?",
      "Quels sont ses projets ?",
      "Quel est son stack technique ?",
      "Télécharger le CV",
      "Comment le contacter ?",
    ],
    inputPlaceholder: "Posez une question sur Aster ou ses projets...",
    assistantTitle: "Assistant Officiel du Portfolio",
    statusOnline: "En ligne",
    clearButton: "Effacer",
  },
  de: {
    welcomeMessage:
      "Hallo! 👋 Ich bin AsterBot, Asters virtueller Assistent.\n\nIch beantworte Fragen zu seinem Werdegang, seinen Anfängen im Reverse Engineering, seinem Ironman-Training, seiner akademischen Führung und Projekten wie Ideal Calc, Soul Fighter und PEX Wiki. Was möchtest du wissen?",
    initialSuggestions: [
      "Wer ist Aster?",
      "Welche Projekte gibt es?",
      "Welcher Tech-Stack?",
      "Lebenslauf herunterladen",
      "Kontakt aufnehmen",
    ],
    inputPlaceholder: "Stelle eine Frage zu Aster oder Projekten...",
    assistantTitle: "Offizieller Portfolio-Assistent",
    statusOnline: "Online",
    clearButton: "Löschen",
  },
  it: {
    welcomeMessage:
      "Ciao! 👋 Sono AsterBot, l'assistente virtuale di Aster.\n\nPosso rispondere a domande sul suo percorso, sulle origini nel reverse engineering, sull'allenamento per l'Ironman, sulla leadership accademica e su progetti come Ideal Calc, Soul Fighter e PEX Wiki. Cosa vorresti sapere?",
    initialSuggestions: [
      "Chi è Aster?",
      "Quali sono i suoi progetti?",
      "Qual è il suo stack?",
      "Scarica il Curriculum",
      "Come contattarlo?",
    ],
    inputPlaceholder: "Fai una domanda su Aster o sui suoi progetti...",
    assistantTitle: "Assistente Ufficiale del Portfolio",
    statusOnline: "Online",
    clearButton: "Cancella",
  },
  nl: {
    welcomeMessage:
      "Hallo! 👋 Ik ben AsterBot, de virtuele assistent van Aster.\n\nIk beantwoord vragen over zijn achtergrond in reverse engineering, zijn Ironman-training, academisch leiderschap en projecten zoals Ideal Calc, Soul Fighter en PEX Wiki. Wat wil je graag weten?",
    initialSuggestions: [
      "Wie is Aster?",
      "Welke projecten zijn er?",
      "Wat is zijn tech-stack?",
      "Download CV",
      "Hoe contact opnemen?",
    ],
    inputPlaceholder: "Stel een vraag over Aster of projecten...",
    assistantTitle: "Officiële Portfolio Assistent",
    statusOnline: "Online",
    clearButton: "Wissen",
  },
  ru: {
    welcomeMessage:
      "Привет! 👋 Я AsterBot, виртуальный ассистент Aster.\n\nЯ могу рассказать о его пути в разработке, опыте в реверс-инжиниринге, подготовке к Ironman, лидерстве в университете и проектах Ideal Calc, Soul Fighter и PEX Wiki. Что вы хотите узнать?",
    initialSuggestions: [
      "Кто такой Aster?",
      "Какие есть проекты?",
      "Какой стек технологий?",
      "Скачать резюме",
      "Как связаться?",
    ],
    inputPlaceholder: "Спросите об Aster или его проектах...",
    assistantTitle: "Официальный ассистент портфолио",
    statusOnline: "В сети",
    clearButton: "Очистить",
  },
  ar: {
    welcomeMessage:
      "مرحباً! 👋 أنا AsterBot، المساعد الافتراضي لـ Aster.\n\nيمكنني الإجابة على استفساراتك حول مسيرته الهندسية، أصوله في الهندسة العكسية، تدريبه للترايثلون (Ironman)، وقيادته الأكاديمية ومشاريع مثل Ideal Calc وSoul Fighter وPEX Wiki. ماذا تود أن تعرف؟",
    initialSuggestions: [
      "من هو Aster؟",
      "ما هي مشاريعه؟",
      "ما هي تقنياته؟",
      "تحميل السيرة الذاتية",
      "كيفية التواصل معه؟",
    ],
    inputPlaceholder: "اسأل أي شيء عن Aster أو مشاريعه...",
    assistantTitle: "المساعد الرسمي للمحفظة",
    statusOnline: "متصل",
    clearButton: "مسح",
    isRtl: true,
  },
  jp: {
    welcomeMessage:
      "こんにちは！ 👋 Asterのバーチャルアシスタント「AsterBot」です。\n\n彼のエンジニアとしての歩み、リバースエンジニアリングでの始まり、アイアンマン・トライアスロンへの挑戦、大学でのリーダーシップ、そして「Ideal Calc」「Soul Fighter」「PEX Wiki」などのプロジェクトについてお答えできます。何について知りたいですか？",
    initialSuggestions: [
      "Asterとは誰ですか？",
      "どんなプロジェクトがありますか？",
      "技術スタックは？",
      "履歴書をダウンロード",
      "連絡方法は？",
    ],
    inputPlaceholder: "Asterやプロジェクトについて質問してください...",
    assistantTitle: "公式ポートフォリオ・アシスタント",
    statusOnline: "オンライン",
    clearButton: "クリア",
  },
  cn: {
    welcomeMessage:
      "你好！ 👋 我是 Aster 的虚拟助手 AsterBot。\n\n我可以回答关于他的工程历程、逆向工程经历、铁人三项训练、大学技术社区领导力以及 Ideal Calc、Soul Fighter 和 PEX Wiki 等项目的疑问。你想了解什么呢？",
    initialSuggestions: [
      "Aster 是谁？",
      "有哪些代表项目？",
      "他的技术栈是什么？",
      "下载简历",
      "如何联系他？",
    ],
    inputPlaceholder: "提问关于 Aster 或其项目的问题...",
    assistantTitle: "官方作品集对话助手",
    statusOnline: "在线",
    clearButton: "清除",
  },
  kr: {
    welcomeMessage:
      "안녕하세요! 👋 Aster의 가상 어시스턴트 AsterBot입니다.\n\n그의 개발 여정, 리버스 엔지니어링 경험, 아이언맨 철인 3종 경기 훈련, 대학 리더십 및 Ideal Calc, Soul Fighter, PEX Wiki와 같은 프로젝트에 대해 무엇이든 답변해 드립니다. 어떤 점이 궁금하신가요?",
    initialSuggestions: [
      "Aster는 누구인가요?",
      "어떤 프로젝트가 있나요?",
      "기술 스택은 무엇인가요?",
      "이력서 다운로드",
      "연락 방법은?",
    ],
    inputPlaceholder: "Aster나 프로젝트에 대해 질문해보세요...",
    assistantTitle: "공식 포트폴리오 어시스턴트",
    statusOnline: "온라인",
    clearButton: "지우기",
  },
  vn: {
    welcomeMessage:
      "Xin chào! 👋 Tôi là AsterBot, trợ lý ảo của Aster.\n\nTôi có thể giải đáp về hành trình kỹ thuật, xuất phát điểm từ kỹ thuật dịch ngược, quá trình luyện tập Ironman, vai trò lãnh đạo học thuật và các dự án như Ideal Calc, Soul Fighter và PEX Wiki. Bạn muốn tìm hiểu điều gì?",
    initialSuggestions: [
      "Aster là ai?",
      "Các dự án nổi bật?",
      "Stack công nghệ là gì?",
      "Tải sơ yếu lý lịch",
      "Cách thức liên hệ?",
    ],
    inputPlaceholder: "Hỏi bất cứ điều gì về Aster hoặc dự án...",
    assistantTitle: "Trợ lý chính thức của Portfolio",
    statusOnline: "Trực tuyến",
    clearButton: "Xóa",
  },
  id: {
    welcomeMessage:
      "Halo! 👋 Saya AsterBot, asisten virtual Aster.\n\nSaya bisa menjawab seputar perjalanan tekniknya, awal mula rekayasa balik (reverse engineering), latihan triathlon Ironman, kepemimpinan akademik, dan proyek seperti Ideal Calc, Soul Fighter, serta PEX Wiki. Apa yang ingin Anda ketahui?",
    initialSuggestions: [
      "Siapa Aster?",
      "Apa saja proyeknya?",
      "Apa tech stack-nya?",
      "Unduh Resume",
      "Bagaimana cara menghubunginya?",
    ],
    inputPlaceholder: "Tanyakan apa saja tentang Aster atau proyeknya...",
    assistantTitle: "Asisten Resmi Portofolio",
    statusOnline: "Online",
    clearButton: "Hapus",
  },
};

// ─── Localized Intent Responses ───────────────────────────────────────────

export const BOT_RESPONSES: Record<IntentId, Record<BotLanguage, LocalizedIntentData>> = {
  GREETING: {
    br: {
      text: "Olá! 👋 Sou o AsterBot, o assistente virtual do Aster. Estou aqui para responder dúvidas sobre a trajetória dele, projetos (Ideal Calc, PEX Wiki, Soul Fighter...), stack técnica e contatos. Sobre o que você gostaria de conversar?",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual é a sua stack?", "Como entrar em contato?"],
    },
    pt: {
      text: "Olá! 👋 Sou o AsterBot, o assistente virtual do Aster. Estou aqui para esclarecer dúvidas sobre o seu percurso, projetos (Ideal Calc, PEX Wiki, Soul Fighter...), stack técnica e contactos. Sobre o que gostaria de conversar?",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual é a sua stack?", "Como entrar em contacto?"],
    },
    en: {
      text: "Hello! 👋 I am AsterBot, Aster's virtual assistant. I am here to answer questions about his career, projects (Ideal Calc, PEX Wiki, Soul Fighter...), tech stack, and contacts. What would you like to know?",
      suggestions: ["Who is Aster?", "What are his projects?", "What is his tech stack?", "How can I contact him?"],
    },
    es: {
      text: "¡Hola! 👋 Soy AsterBot, el asistente virtual de Aster. Estoy aquí para resolver dudas sobre su trayectoria, proyectos (Ideal Calc, PEX Wiki, Soul Fighter...), stack técnico y contactos. ¿Sobre qué te gustaría conversar?",
      suggestions: ["¿Quién es Aster?", "¿Cuáles son sus proyectos?", "¿Cuál es su stack?", "¿Cómo contactarlo?"],
    },
    fr: {
      text: "Bonjour ! 👋 Je suis AsterBot, l'assistant virtuel d'Aster. Je suis là pour répondre à vos questions sur son parcours, ses projets (Ideal Calc, PEX Wiki, Soul Fighter...), son stack technique et ses contacts. De quoi aimeriez-vous parler ?",
      suggestions: ["Qui est Aster ?", "Quels sont ses projets ?", "Quel est son stack ?", "Comment le contacter ?"],
    },
    de: {
      text: "Hallo! 👋 Ich bin AsterBot, Asters virtueller Assistent. Ich beantworte Fragen zu seinem Werdegang, Projekten (Ideal Calc, PEX Wiki, Soul Fighter...), Tech-Stack und Kontakten. Worüber möchtest du sprechen?",
      suggestions: ["Wer ist Aster?", "Welche Projekte gibt es?", "Welcher Tech-Stack?", "Kontakt aufnehmen"],
    },
    it: {
      text: "Ciao! 👋 Sono AsterBot, l'assistente virtuale di Aster. Sono qui per rispondere a domande sul suo percorso, progetti (Ideal Calc, PEX Wiki, Soul Fighter...), stack tecnico e contatti. Di cosa vorresti parlare?",
      suggestions: ["Chi è Aster?", "Quali sono i suoi progetti?", "Qual è il suo stack?", "Come contattarlo?"],
    },
    nl: {
      text: "Hallo! 👋 Ik ben AsterBot, de virtuele assistent van Aster. Ik ben hier om vragen te beantwoorden over zijn achtergrond, projecten (Ideal Calc, PEX Wiki, Soul Fighter...), tech-stack en contacten. Waar wil je over praten?",
      suggestions: ["Wie is Aster?", "Welke projecten zijn er?", "Wat is zijn stack?", "Hoe contact opnemen?"],
    },
    ru: {
      text: "Привет! 👋 Я AsterBot, виртуальный ассистент Aster. Я готов ответить на вопросы о его карьере, проектах (Ideal Calc, PEX Wiki, Soul Fighter...), технологическом стеке и контактах. О чем вы хотите узнать?",
      suggestions: ["Кто такой Aster?", "Какие есть проекты?", "Какой стек технологий?", "Как связаться?"],
    },
    ar: {
      text: "مرحباً! 👋 أنا AsterBot، المساعد الافتراضي لـ Aster. أنا هنا للإجابة على استفساراتك حول مسيرته، مشاريعه (Ideal Calc, PEX Wiki, Soul Fighter...)، تقنياته وكيفية التواصل معه. عما تود أن نتحدث؟",
      suggestions: ["من هو Aster؟", "ما هي مشاريعه؟", "ما هو مكدسه التقني؟", "كيفية التواصل؟"],
    },
    jp: {
      text: "こんにちは！ 👋 Asterのバーチャルアシスタント「AsterBot」です。彼の経歴、プロジェクト（Ideal Calc、PEX Wiki、Soul Fighter...）、技術スタック、連絡先についてお答えします。何について話しましょうか？",
      suggestions: ["Asterとは誰ですか？", "どんなプロジェクトがありますか？", "技術スタックは？", "連絡方法は？"],
    },
    cn: {
      text: "你好！ 👋 我是 Aster 的虚拟助手 AsterBot。我可以解答关于他的经历、项目（Ideal Calc、PEX Wiki、Soul Fighter...）、技术栈和联系方式的疑问。你想了解什么呢？",
      suggestions: ["Aster 是谁？", "有哪些项目？", "技术栈是什么？", "如何联系？"],
    },
    kr: {
      text: "안녕하세요! 👋 Aster의 가상 어시스턴트 AsterBot입니다. 그의 경력, 프로젝트(Ideal Calc, PEX Wiki, Soul Fighter...), 기술 스택 및 연락 방법에 대해 안내해 드릴 수 있습니다. 어떤 이야기를 나누고 싶으신가요?",
      suggestions: ["Aster는 누구인가요?", "어떤 프로젝트가 있나요?", "기술 스택은 무엇인가요?", "연락 방법은?"],
    },
    vn: {
      text: "Xin chào! 👋 Tôi là AsterBot, trợ lý ảo của Aster. Tôi ở đây để trả lời các câu hỏi về sự nghiệp, dự án (Ideal Calc, PEX Wiki, Soul Fighter...), công nghệ và thông tin liên hệ. Bạn muốn trao đổi về chủ đề gì?",
      suggestions: ["Aster là ai?", "Các dự án nổi bật?", "Stack công nghệ là gì?", "Cách thức liên hệ?"],
    },
    id: {
      text: "Halo! 👋 Saya AsterBot, asisten virtual Aster. Saya siap menjawab pertanyaan seputar karir, proyek (Ideal Calc, PEX Wiki, Soul Fighter...), tech stack, dan kontak. Apa yang ingin Anda bicarakan?",
      suggestions: ["Siapa Aster?", "Apa saja proyeknya?", "Apa tech stack-nya?", "Cara menghubungi?"],
    },
  },

  ABOUT_ASTER: {
    br: {
      text: "O Aster é Desenvolvedor Frontend focado em interfaces fluidas, de alta performance e arquiteturas limpas. Está atualmente no 6º semestre de Ciência da Computação na UniAmérica, onde lidera uma comunidade acadêmica voltada a projetos colaborativos e mentoria.\n\nSua mentalidade de engenharia une curiosidade de baixo nível (veio da engenharia reversa e servidores de jogos), disciplina física (treina para completar um triathlon Ironman) e estudo contínuo de idiomas (Mandarim e Japonês).",
      suggestions: ["Como começou na programação?", "Treino para o Ironman?", "Quais são os projetos?", "Qual a formação acadêmica?"],
    },
    pt: {
      text: "O Aster é Desenvolvedor Frontend focado em interfaces fluidas, de alto desempenho e arquiteturas limpas. Encontra-se no 6º semestre de Ciência da Computação na UniAmérica, liderando uma comunidade académica focada em projetos colaborativos e mentoria.\n\nA sua abordagem de engenharia alia curiosidade de baixo nível (engenharia reversa e servidores de jogos), disciplina física (treina para o triathlon Ironman) e estudo contínuo de línguas (Mandarim e Japonês).",
      suggestions: ["Como começou na programação?", "Treino para o Ironman?", "Quais são os projetos?", "Formação académica"],
    },
    en: {
      text: "Aster is a Frontend Developer focused on fluid interfaces, high performance, and clean architectures. He is currently in his 6th semester of Computer Science at UniAmérica, where he leads an academic community for collaborative projects and mentorship.\n\nHis engineering mindset combines low-level curiosity (rooted in reverse engineering and online game servers), physical discipline (training for an Ironman triathlon), and continuous language learning (Mandarin and Japanese).",
      suggestions: ["How did he start coding?", "Ironman training?", "What are his projects?", "Education & Community?"],
    },
    es: {
      text: "Aster es Desarrollador Frontend enfocado en interfaces fluidas, alto rendimiento y arquitecturas limpias. Cursa el 6º semestre de Ciencias de la Computación en UniAmérica, liderando una comunidad académica para proyectos colaborativos y mentoría.\n\nSu mentalidad une curiosidad de bajo nivel (orígenes en ingeniería inversa y servidores de juegos), disciplina física (entrenamiento Ironman) y estudio de idiomas (mandarín y japonés).",
      suggestions: ["¿Cómo empezó a programar?", "¿Entrenamiento Ironman?", "¿Cuáles son sus proyectos?", "¿Formación académica?"],
    },
    fr: {
      text: "Aster est développeur Frontend axé sur les interfaces fluides, la haute performance et les architectures propres. En 6e semestre d'informatique à UniAmérica, il dirige une communauté académique de projets collaboratifs.\n\nSon esprit d'ingénieur associe curiosité bas niveau (rétro-ingénierie et serveurs de jeux), discipline athlétique (entraînement Ironman) et apprentissage des langues (mandarin et japonais).",
      suggestions: ["Comment a-t-il commencé ?", "Entraînement Ironman ?", "Quels sont ses projets ?", "Formation académique"],
    },
    de: {
      text: "Aster ist ein Frontend-Entwickler, der sich auf flüssige, hochperformante Schnittstellen und saubere Architekturen spezialisiert hat. Er studiert im 6. Semester Informatik an der UniAmérica und leitet eine akademische Entwickler-Community.\n\nSeine Denkweise verbindet Low-Level-Neugier (Reverse Engineering), eiserne Ausdauerdisziplin (Ironman-Training) und Sprachenlernen (Mandarin und Japanisch).",
      suggestions: ["Wie hat er angefangen?", "Ironman-Training?", "Welche Projekte gibt es?", "Ausbildung & Uni"],
    },
    it: {
      text: "Aster è uno sviluppatore Frontend incentrato su interfacce fluide, alte prestazioni e architetture pulite. Frequenta il 6º semestre di Informatica presso UniAmérica, dove coordina una community accademica di progetti open source.\n\nIl suo approccio fonde curiosità a basso livello (reverse engineering), disciplina atletica (Ironman triathlon) e studio continuo di lingue (mandarino e giapponese).",
      suggestions: ["Come ha iniziato a programmare?", "Allenamento Ironman?", "Quali sono i suoi progetti?", "Formazione accademica"],
    },
    nl: {
      text: "Aster is een Frontend Developer gericht op snelle interfaces en schone architecturen. Hij zit in het 6e semester van Informatica aan UniAmérica en leidt een academische studentengemeenschap.\n\nZijn mentaliteit combineert low-level nieuwsgierigheid (reverse engineering), sportieve discipline (Ironman triathlon) en het leren van talen (Mandarijn en Japans).",
      suggestions: ["Hoe begon hij met coderen?", "Ironman training?", "Welke projecten heeft hij?", "Opleiding & Uni"],
    },
    ru: {
      text: "Aster — фронтенд-разработчик, создающий быстрые интерфейсы и надежные архитектуры. Он учится на 6-м семестре компьютерных наук в UniAmérica, где руководит студенческим IT-сообществом.\n\nЕго инженерный подход объединяет низкоуровневый интерес (реверс-инжиниринг и игровые серверы), железную дисциплину (подготовка к триатлону Ironman) и изучение языков (китайский и японский).",
      suggestions: ["С чего он начинал?", "Тренировки к Ironman?", "Какие проекты есть?", "Образование и вуз"],
    },
    ar: {
      text: "Aster هو مطور واجهات أمامية يركز على الواجهات عالية الأداء والبنى النظيفة. يدرس في الفصل السادس من علوم الحاسوب في UniAmérica ويقود مجتمعاً طلابياً للمشاريع التعاونية.\n\nتجمع عقليته بين الفضول التقني منخفض المستوى (الهندسة العكسية وخوادم الألعاب)، والانضباط البدني العالي (التدريب للترايثلون Ironman)، ودراسة اللغات (الصينية واليابانية).",
      suggestions: ["كيف بدأ البرمجة؟", "تدريب الـ Ironman؟", "ما هي مشاريعه؟", "التعليم والجامعة"],
    },
    jp: {
      text: "Asterは、高パフォーマンスで洗練されたインターフェース構築に情熱を注ぐフロントエンド開発者です。UniAmérica大学でコンピュータサイエンスの第6セメスターに在籍し、技術コミュニティを主導しています。\n\n彼の原点はオンラインゲームサーバーの構築とリバースエンジニアリングにあり、アイアンマン・トライアスロンへの挑戦や語学学習（中国語・日本語）を通じて培った高い規律を持ち合わせています。",
      suggestions: ["どうやって開発を始めた？", "アイアンマンのトレーニング？", "代表プロジェクトは？", "大学やコミュニティについて"],
    },
    cn: {
      text: "Aster 是一位专注于构建高流畅度、高性能界面与清晰架构的前端工程师。目前就读于 UniAmérica 计算机科学专业第六学期，同时担任学术技术社区的负责人。\n\n他的技术底蕴源自逆向工程与游戏私服架构研究，并在生活中保持高强度自律（正在全力备战 Ironman 铁人三项），同时持续精进中文与日语。",
      suggestions: ["他是如何开启编程之路的？", "铁人三项训练？", "有哪些代表项目？", "学术背景与大学"],
    },
    kr: {
      text: "Aster는 높은 성능과 깔끔한 아키텍처에 집중하는 프론트엔드 엔지니어입니다. 현재 UniAmérica 컴퓨터공학과 6학기 재학 중이며 학술 기술 커뮤니티를 이끌고 있습니다.\n\n그의 엔지니어링 마인드는 로우레벨 리버스 엔지니어링 경험에서 시작되었으며, 아이언맨 철인 3종 경기 훈련과 어학 학습(중국어 및 일본어)을 통한 강력한 훈련 규율을 지니고 있습니다.",
      suggestions: ["프로그래밍을 어떻게 시작했나요?", "아이언맨 훈련은?", "프로젝트 목록 보기", "학력 및 대학 활동"],
    },
    vn: {
      text: "Aster là Kỹ sư Frontend chuyên xây dựng giao diện tối ưu hiệu năng và kiến trúc sạch. Anh hiện học học kỳ 6 ngành Khoa học Máy tính tại UniAmérica và dẫn dắt cộng đồng sinh viên nghiên cứu mã nguồn mở.\n\nTư duy kỹ thuật của anh khởi đầu từ kỹ thuật dịch ngược (reverse engineering), kết hợp kỷ luật thép (luyện tập giải đấu Ironman) và học ngoại ngữ (tiếng Trung và tiếng Nhật).",
      suggestions: ["Bắt đầu lập trình ra sao?", "Luyện tập Ironman?", "Các dự án nổi bật?", "Học vấn & Đại học"],
    },
    id: {
      text: "Aster adalah Pengembang Frontend yang berfokus pada antarmuka performa tinggi dan arsitektur bersih. Saat ini semester 6 Ilmu Komputer di UniAmérica, memimpin komunitas akademik proyek kolaboratif.\n\nMindset rekayasanya menggabungkan pemahaman low-level (berasal dari reverse engineering server game), disiplin fisik intensif (latihan Ironman triathlon), serta pembelajaran bahasa (Mandarin dan Jepang).",
      suggestions: ["Bagaimana awal mula coding?", "Latihan Ironman?", "Apa saja proyeknya?", "Pendidikan & Kampus"],
    },
  },

  TECH_STACK: {
    br: {
      text: "A stack técnica do Aster é construída com foco em modernidade, velocidade e tipagem sólida:\n\n• IA & Engenharia: Claude, Codex, Engenharia de Contexto, Agentes\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, JavaScript (ES6+), Tailwind CSS\n• Mobile & Sistemas: Flutter, Dart, React Native, C++\n• Backend & Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Produtividade & PKM: Notion e Obsidian (fluxos de documentação)\n• Idiomas: Português (nativo), Inglês (avançado), Mandarim e Japonês (em aprendizado)",
      suggestions: ["Quais projetos usam essa stack?", "Baixar Currículo", "Ver Ideal Calc"],
    },
    pt: {
      text: "A stack técnica do Aster é construída com foco em modernidade, velocidade e tipagem sólida:\n\n• IA & Engenharia: Claude, Codex, Engenharia de Contexto, Agentes\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, JavaScript (ES6+), Tailwind CSS\n• Mobile & Sistemas: Flutter, Dart, React Native, C++\n• Backend & Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Produtividade & PKM: Notion e Obsidian\n• Línguas: Português (nativo), Inglês (avançado), Mandarim e Japonês (em aprendizagem)",
      suggestions: ["Que projetos usam esta stack?", "Descarregar Currículo", "Ver Ideal Calc"],
    },
    en: {
      text: "Aster's tech stack is centered on modernity, speed, and strict type safety:\n\n• AI & Augmented Engineering: Claude, Codex, Context Engineering, Agents\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, JavaScript (ES6+), Tailwind CSS\n• Mobile & Systems: Flutter, Dart, React Native, C++\n• Backend & Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Productivity & PKM: Notion and Obsidian\n• Human Languages: Portuguese (Native), English (Advanced), Mandarin & Japanese (Learning)",
      suggestions: ["Which projects use this stack?", "Download Resume", "Check Ideal Calc"],
    },
    es: {
      text: "El stack técnico de Aster está enfocado en modernidad, velocidad y tipado robusto:\n\n• IA e Ingeniería: Claude, Codex, Ingeniería de Contexto, Agentes\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, JavaScript, Tailwind CSS\n• Mobile y Sistemas: Flutter, Dart, React Native, C++\n• Backend e Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Productividad: Notion y Obsidian (PKM)\n• Idiomas: Portugués (nativo), Inglés (avanzado), Mandarín y Japonés (en aprendizaje)",
      suggestions: ["¿Qué proyectos usan este stack?", "Descargar Currículum", "Ver Ideal Calc"],
    },
    fr: {
      text: "La pile technique d'Aster est axée sur la modernité, la vitesse et le typage strict :\n\n• Frontend : React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• Mobile & Systèmes : Flutter, Dart, React Native, C++\n• Backend & Infra : Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Productivité : Notion et Obsidian\n• Langues : Portugais (natif), Anglais (avancé), Mandarin & Japonais (en cours)",
      suggestions: ["Quels projets utilisent ce stack ?", "Télécharger le CV", "Voir Ideal Calc"],
    },
    de: {
      text: "Asters Tech-Stack konzentriert sich auf Performance, Typsicherheit und moderne Architektur:\n\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• Mobile & Systeme: Flutter, Dart, React Native, C++\n• Backend & Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Produktivität: Notion und Obsidian\n• Sprachen: Portugiesisch (Muttersprache), Englisch (Fließend), Mandarin & Japanisch",
      suggestions: ["Welche Projekte nutzen diesen Stack?", "Lebenslauf herunterladen", "Ideal Calc ansehen"],
    },
    it: {
      text: "Lo stack tecnologico di Aster è orientato a velocità, manutenibilità e tipizzazione rigorosa:\n\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• Mobile & Sistemi: Flutter, Dart, React Native, C++\n• Backend & Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Produttività: Notion e Obsidian\n• Lingue: Portoghese (madrelingua), Inglese (avanzato), Mandarino e Giapponese",
      suggestions: ["Quali progetti usano questo stack?", "Scarica il Curriculum", "Guarda Ideal Calc"],
    },
    nl: {
      text: "Asters tech-stack is gebouwd rond snelheid, schaalbaarheid en strikte type-veiligheid:\n\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• Mobile & Systemen: Flutter, Dart, React Native, C++\n• Backend & Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Productiviteit: Notion en Obsidian\n• Talen: Portugees (moedertaal), Engels (vloeiend), Mandarijn & Japans",
      suggestions: ["Welke projecten gebruiken deze stack?", "Download CV", "Bekijk Ideal Calc"],
    },
    ru: {
      text: "Стек технологий Aster ориентирован на современность, скорость и строгую типизацию:\n\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• Mobile и системное ПО: Flutter, Dart, React Native, C++\n• Backend и инфраструктура: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Документация и PKM: Notion, Obsidian\n• Языки: португальский (родной), английский (свободный), китайский и японский",
      suggestions: ["В каких проектах это используется?", "Скачать резюме", "Узнать про Ideal Calc"],
    },
    ar: {
      text: "يعتمد المكدس التقني لـ Aster على السرعة، الحداثة وكتابة كود قوي وموثوق:\n\n• الواجهة الأمامية: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• تطبيقات الهاتف والأنظمة: Flutter, Dart, React Native, C++\n• الخلفية والبنية التحتية: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• الإنتاجية والتوثيق: Notion و Obsidian\n• اللغات: البرتغالية (اللغة الأم)، الإنجليزية (متقدم)، الصينية واليابانية",
      suggestions: ["ما هي المشاريع التي تستخدم هذا المكدس؟", "تحميل السيرة الذاتية", "تفاصيل Ideal Calc"],
    },
    jp: {
      text: "Asterの技術スタックは、モダンで高速、堅牢な型安全性を重視しています:\n\n• フロントエンド: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• モバイル・システム: Flutter, Dart, React Native, C++\n• バックエンド・インフラ: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• 生産性・PKM: Notion, Obsidian\n• 言語: ポルトガル語（母国語）、英語（上級）、中国語・日本語（学習中）",
      suggestions: ["このスタックを使ったプロジェクトは？", "履歴書をダウンロード", "Ideal Calc を見る"],
    },
    cn: {
      text: "Aster 的技术栈专注于现代化、极速性能与严格的类型安全：\n\n• 前端：React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• 移动与底层：Flutter, Dart, React Native, C++\n• 后端与基础设施：Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• 效率与知识库：Notion, Obsidian (PKM)\n• 人类语言：葡萄牙语（母语）、英语（流利）、中文与日语（学习中）",
      suggestions: ["哪些项目使用了这套技术栈？", "下载简历", "查看 Ideal Calc"],
    },
    kr: {
      text: "Aster의 기술 스택은 최신 웹 표준, 속도, 엄격한 타입 안전성에 맞춰져 있습니다:\n\n• 프론트엔드: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• 모바일 & 시스템: Flutter, Dart, React Native, C++\n• 백엔드 & 인프라: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• 생산성 & 지식 관리: Notion, Obsidian\n• 외국어: 포르투갈어(원어민), 영어(유창), 중국어 및 일본어(학습 중)",
      suggestions: ["이 스택으로 만든 프로젝트는?", "이력서 다운로드", "Ideal Calc 확인"],
    },
    vn: {
      text: "Stack công nghệ của Aster hướng đến tính hiện đại, tốc độ và an toàn kiểu dữ liệu:\n\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• Mobile & Hệ thống: Flutter, Dart, React Native, C++\n• Backend & Hạ tầng: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Quản lý tri thức: Notion, Obsidian\n• Ngôn ngữ: Tiếng Bồ Đào Nha (bản ngữ), Tiếng Anh (nâng cao), Tiếng Trung & Tiếng Nhật",
      suggestions: ["Dự án nào sử dụng stack này?", "Tải sơ yếu lý lịch", "Xem Ideal Calc"],
    },
    id: {
      text: "Tech stack Aster dibangun dengan fokus pada performa, skalabilitas, dan type-safety:\n\n• Frontend: React, Next.js, Vue.js, Astro, TypeScript, Tailwind CSS\n• Mobile & Sistem: Flutter, Dart, React Native, C++\n• Backend & Infra: Node.js, SQL, Vercel, Cloudflare, Git/GitHub\n• Produktivitas: Notion dan Obsidian\n• Bahasa: Portugis (asli), Inggris (mahir), Mandarin & Jepang (belajar)",
      suggestions: ["Proyek apa yang memakai stack ini?", "Unduh Resume", "Lihat Ideal Calc"],
    },
  },

  PROJECTS_OVERVIEW: {
    br: {
      text: "Aqui estão os principais projetos em destaque no portfólio:\n\n1. 🚀 StudioOS: Sistema Operacional para criadores de conteúdo com 12 ferramentas inteligentes em Astro 7 e React 19.\n2. 📊 Ideal Calc: Calculadora estatística interativa cruzando 12 filtros demográficos com microdados oficiais do IBGE.\n3. 🎮 Soul Fighter: Memory Game: Jogo de combate e memória temático de LoL em React 19.\n4. 📚 PEX Wiki: Hub de projetos acadêmicos e ODS da ONU para alunos da UniAmérica.",
      actions: [
        { label: "Acessar StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Abrir Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Jogar Soul Fighter ↗", url: "https://soulfighter.asterdev.me/" },
      ],
      suggestions: ["Me fale sobre o StudioOS", "Me fale sobre o Ideal Calc", "Qual é a sua stack?"],
    },
    pt: {
      text: "Aqui estão os principais projetos em destaque no portfólio:\n\n1. 🚀 StudioOS: Sistema Operativo para criadores de conteúdo com 12 ferramentas inteligentes em Astro 7 e React 19.\n2. 📊 Ideal Calc: Calculadora estatística interativa que cruza 12 filtros demográficos com microdados oficiais do IBGE.\n3. 🎮 Soul Fighter: Memory Game: Jogo de combate e memória temático de LoL em React 19.\n4. 📚 PEX Wiki: Hub de projetos académicos e ODS da ONU para estudantes da UniAmérica.",
      actions: [
        { label: "Aceder ao StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Abrir Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Jogar Soul Fighter ↗", url: "https://soulfighter.asterdev.me/" },
      ],
      suggestions: ["Fala-me sobre o StudioOS", "Fala-me sobre o Ideal Calc", "Qual é a sua stack?"],
    },
    en: {
      text: "Here are the featured projects highlighted in Aster's portfolio:\n\n1. 🚀 StudioOS: Comprehensive creator operating system unifying 12 intelligent production tools (Astro 7 + React 19).\n2. 📊 Ideal Calc: Interactive demographic calculator crossing 12 filters with official Brazilian IBGE microdata.\n3. 🎮 Soul Fighter: Memory Game: LoL-themed memory combat game rebuilt in React 19.\n4. 📚 PEX Wiki: Academic knowledge base for Computer Science students with UN SDG mapping.",
      actions: [
        { label: "Launch StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Open Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Play Soul Fighter ↗", url: "https://soulfighter.asterdev.me/" },
      ],
      suggestions: ["Tell me about StudioOS", "Tell me about Ideal Calc", "What is his tech stack?"],
    },
    es: {
      text: "Aquí están los proyectos destacados en el portafolio:\n\n1. 📊 Ideal Calc: Calculadora demográfica interactiva con microdatos del IBGE.\n2. 🎮 Soul Fighter: Memory Game: Juego de memoria temático de LoL en JavaScript vanilla.\n3. 📚 PEX Wiki: Hub de proyectos académicos alineados con los ODS de la ONU.\n4. 📱 Mobile Demo: Aplicación móvil en React Native.",
      actions: [
        { label: "Abrir Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Jugar Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Visitar PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Cuéntame de Ideal Calc", "Cuéntame de PEX Wiki", "¿Cuál es su stack?"],
    },
    fr: {
      text: "Voici les projets phares du portfolio d'Aster :\n\n1. 📊 Ideal Calc : Calculateur démographique croisant les microdonnées officielles de l'IBGE.\n2. 🎮 Soul Fighter: Memory Game : Jeu de mémoire basé sur LoL en JavaScript pur.\n3. 📚 PEX Wiki : Base de connaissances académique et objectifs ODD de l'ONU.\n4. 📱 Mobile Demo : Application mobile avec React Native.",
      actions: [
        { label: "Ouvrir Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Jouer à Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Visiter PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Parle-moi d'Ideal Calc", "Parle-moi de PEX Wiki", "Quel est son stack ?"],
    },
    de: {
      text: "Hier sind die wichtigsten Projekte in Asters Portfolio:\n\n1. 📊 Ideal Calc: Statistischer Rechner auf Basis offizieller IBGE-Mikrodaten.\n2. 🎮 Soul Fighter: Memory Game: LoL-Memory-Spiel mit purem Vanilla JavaScript.\n3. 📚 PEX Wiki: Akademische Plattform mit Zuordnung zu den 17 UN-Nachhaltigkeitszielen.\n4. 📱 Mobile Demo: Demo-App für Mobilgeräte mit React Native.",
      actions: [
        { label: "Ideal Calc öffnen ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Soul Fighter spielen ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "PEX Wiki besuchen ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Erzähle mir von Ideal Calc", "Erzähle mir von PEX Wiki", "Welcher Tech-Stack?"],
    },
    it: {
      text: "Ecco i progetti in evidenza nel portfolio di Aster:\n\n1. 📊 Ideal Calc: Calcolatrice demografica con microdati ufficiali IBGE.\n2. 🎮 Soul Fighter: Memory Game: Gioco di carte a tema LoL in Vanilla JS.\n3. 📚 PEX Wiki: Portale accademico collegato agli obiettivi SDG dell'ONU.\n4. 📱 Mobile Demo: Applicazione per dispositivi mobili in React Native.",
      actions: [
        { label: "Apri Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Gioca a Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Visita PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Parlami di Ideal Calc", "Parlami di PEX Wiki", "Qual è il suo stack?"],
    },
    nl: {
      text: "Dit zijn de uitgelichte projecten in Asters portfolio:\n\n1. 📊 Ideal Calc: Demografische calculator met officiële Braziliaanse IBGE-data.\n2. 🎮 Soul Fighter: Memory Game: LoL-geïnspireerd spel in pure Vanilla JS.\n3. 📚 PEX Wiki: Kennisbank voor universiteitsstudenten gekoppeld aan VN SDG's.\n4. 📱 Mobile Demo: Mobiele demo-applicatie gemaakt met React Native.",
      actions: [
        { label: "Open Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Speel Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Bezoek PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Vertel over Ideal Calc", "Vertel over PEX Wiki", "Wat is zijn stack?"],
    },
    ru: {
      text: "Главные проекты в портфолио Aster:\n\n1. 📊 Ideal Calc: Демографический калькулятор с микроданными переписи IBGE.\n2. 🎮 Soul Fighter: Memory Game: Карточная игра по мотивам LoL на чистом JavaScript.\n3. 📚 PEX Wiki: Академическая база знаний студентов с целями ЦУР ООН.\n4. 📱 Mobile Demo: Мобильное приложение на React Native.",
      actions: [
        { label: "Открыть Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Играть в Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Посетить PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Расскажи про Ideal Calc", "Расскажи про PEX Wiki", "Какой стек технологий?"],
    },
    ar: {
      text: "إليك أبرز المشاريع في محفظة Aster:\n\n1. 📊 Ideal Calc: حاسبة إحصائية تفاعلية تحلل بيانات IBGE الرسمية في البرازيل.\n2. 🎮 Soul Fighter: Memory Game: لعبة ذاكرة مستوحاة من LoL بجافاسكريبت نقية.\n3. 📚 PEX Wiki: منصة معرفية جامعية مرتبطة بأهداف التنمية المستدامة للأمم المتحدة.\n4. 📱 Mobile Demo: تطبيق استعراضي للهاتف بـ React Native.",
      actions: [
        { label: "فتح Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "تشغيل Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "زيارة PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["حدثني عن Ideal Calc", "حدثني عن PEX Wiki", "ما هو مكدسه التقني؟"],
    },
    jp: {
      text: "Asterのポートフォリオに掲載されている注目のプロジェクトです:\n\n1. 📊 Ideal Calc: ブラジルIBGE公式統計データをリアルタイム処理する統計シミュレーター。\n2. 🎮 Soul Fighter: Memory Game: LoLの世界観を取り入れたVanilla JS製神経衰弱ゲーム。\n3. 📚 PEX Wiki: 国連SDGsに対応したUniAmérica大学の学生向け拡張プロジェクトナレッジハブ。\n4. 📱 Mobile Demo: React Nativeで開発したモバイルショーケースアプリ。",
      actions: [
        { label: "Ideal Calc を開く ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Soul Fighter をプレイ ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "PEX Wiki を訪問 ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Ideal Calc について教えて", "PEX Wiki について教えて", "技術スタックは？"],
    },
    cn: {
      text: "Aster 作品集中展示的核心项目包括：\n\n1. 📊 Ideal Calc：基于巴西官方 IBGE 人口普查微数据构建的交互式统计计算器。\n2. 🎮 Soul Fighter: Memory Game：基于英雄联盟斗魂觉醒 IP 开发的原生 JS 记忆翻牌游戏。\n3. 📚 PEX Wiki：对齐联合国可持续发展目标的 UniAmérica 计算机系项目知识库。\n4. 📱 Mobile Demo：使用 React Native 开发的移动端功能演示应用。",
      actions: [
        { label: "打开 Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "游玩 Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "访问 PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["详细介绍 Ideal Calc", "介绍一下 PEX Wiki", "技术栈是什么？"],
    },
    kr: {
      text: "Aster의 포트폴리오 대표 프로젝트 목록입니다:\n\n1. 📊 Ideal Calc: 브라질 공식 IBGE 마이크로데이터를 교차 분석하는 통계 계산기.\n2. 🎮 Soul Fighter: Memory Game: LoL 세계관 기반의 순수 Vanilla JS 카드 뒤집기 게임.\n3. 📚 PEX Wiki: UN 지속가능발전목표(SDG)와 연계된 대학 프로젝트 아카이브.\n4. 📱 Mobile Demo: React Native로 구현된 모바일 쇼케이스 애플리케이션.",
      actions: [
        { label: "Ideal Calc 열기 ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Soul Fighter 플레이 ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "PEX Wiki 방문 ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Ideal Calc에 대해 알려줘", "PEX Wiki에 대해 알려줘", "기술 스택은?"],
    },
    vn: {
      text: "Dưới đây là các dự án tiêu biểu của Aster:\n\n1. 📊 Ideal Calc: Công cụ tính toán thống kê nhân khẩu học dựa trên vi dữ liệu IBGE Brazil.\n2. 🎮 Soul Fighter: Memory Game: Game lật thẻ bài LoL viết bằng Vanilla JavaScript thuần.\n3. 📚 PEX Wiki: Hub học thuật liên kết với 17 Mục tiêu Phát triển Bền vững của LHQ.\n4. 📱 Mobile Demo: Ứng dụng di động xây dựng bằng React Native.",
      actions: [
        { label: "Mở Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Chơi Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Truy cập PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Kể về Ideal Calc", "Kể về PEX Wiki", "Stack công nghệ là gì?"],
    },
    id: {
      text: "Berikut proyek unggulan di portofolio Aster:\n\n1. 📊 Ideal Calc: Kalkulator demografis interaktif memproses data resmi sensus IBGE.\n2. 🎮 Soul Fighter: Memory Game: Game kartu bertema League of Legends berbasis Vanilla JS.\n3. 📚 PEX Wiki: Hub pengetahuan mahasiswa UniAmérica selaras dengan SDG PBB.\n4. 📱 Mobile Demo: Aplikasi demonstrasi mobile dengan React Native.",
      actions: [
        { label: "Buka Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Mainkan Soul Fighter ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Kunjungi PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
      ],
      suggestions: ["Ceritakan tentang Ideal Calc", "Ceritakan tentang PEX Wiki", "Apa tech stack-nya?"],
    },
  },

  PROJECT_IDEAL_CALC: {
    br: {
      text: "O Ideal Calc é uma aplicação estatística que processa microdados públicos do IBGE (Censo 2022 e PNAD Contínua 2023). Permite cruzar 12 variáveis simultâneas para calcular a probabilidade real de encontrar um parceiro no Brasil.\n\nPossui cálculo em tempo real no cliente, geração de card viral para compartilhamento e metodologia auditável.",
      actions: [
        { label: "Acessar Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Ver outros projetos", "Qual a stack do Aster?", "Como entrar em contato?"],
    },
    pt: {
      text: "O Ideal Calc é uma aplicação estatística que processa microdados públicos do IBGE (Censo 2022 e PNAD Contínua 2023). Permite cruzar 12 variáveis simultâneas para calcular a probabilidade real de encontrar um parceiro no Brasil.\n\nPossui cálculo em tempo real no cliente e geração de card viral para partilha.",
      actions: [
        { label: "Aceder ao Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Ver outros projetos", "Qual a stack do Aster?", "Como entrar em contacto?"],
    },
    en: {
      text: "Ideal Calc is a statistical web application that processes official IBGE microdata (2022 Census & 2023 PNAD). It crosses 12 demographic variables simultaneously to calculate the probability of finding a partner in Brazil.\n\nFeatures client-side instant calculation, viral card generation, and audit-ready data sources.",
      actions: [
        { label: "Launch Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "GitHub Repository ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Show other projects", "What is Aster's stack?", "Contact info"],
    },
    es: {
      text: "Ideal Calc es una aplicación estadística que procesa microdatos oficiales del IBGE en Brasil. Cruza 12 variables demográficas en tiempo real con cálculo instantáneo en el navegador y generación de tarjeta compartible.",
      actions: [
        { label: "Abrir Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Código en GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Ver otros proyectos", "¿Cuál es su stack?", "¿Cómo contactarlo?"],
    },
    fr: {
      text: "Ideal Calc est une application statistique traitant les microdonnées officielles de l'IBGE brésilien. Elle croise 12 variables démographiques simultanément avec calcul en temps réel et partage viral.",
      actions: [
        { label: "Ouvrir Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Code sur GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Voir d'autres projets", "Quel est son stack ?", "Comment le contacter ?"],
    },
    de: {
      text: "Ideal Calc ist eine statistische Webanwendung, die offizielle IBGE-Mikrodaten (Zensus 2022) verarbeitet. Sie kombiniert 12 demografische Filter mit clientseitiger Echtzeitberechnung.",
      actions: [
        { label: "Ideal Calc öffnen ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "GitHub-Repository ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Andere Projekte ansehen", "Welcher Tech-Stack?", "Kontakt aufnehmen"],
    },
    it: {
      text: "Ideal Calc è un'applicazione web che elabora i microdati ufficiali dell'IBGE in Brasile. Incrocia 12 filtri demografici in tempo reale per determinare probabilità statistiche.",
      actions: [
        { label: "Apri Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Codice su GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Vedi altri progetti", "Qual è il suo stack?", "Come contattarlo?"],
    },
    nl: {
      text: "Ideal Calc is een statistische app die officiële microdata van het Braziliaanse IBGE verwerkt. Het combineert 12 filters met directe client-side berekeningen.",
      actions: [
        { label: "Open Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "GitHub Repo ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Andere projecten bekijken", "Wat is zijn stack?", "Contact opnemen"],
    },
    ru: {
      text: "Ideal Calc — статистическое приложение, анализирующее официальные микроданные переписи IBGE (Бразилия). Позволяет сопоставлять 12 фильтров в реальном времени прямо в браузере.",
      actions: [
        { label: "Открыть Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Репозиторий GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Показать другие проекты", "Какой стек технологий?", "Как связаться?"],
    },
    ar: {
      text: "Ideal Calc هو تطبيق إحصائي يعالج البيانات الرسمية الصادرة عن معهد IBGE في البرازيل. يدمج 12 متغيراً ديموغرافياً في الوقت الفعلي مع حساب فوري داخل المتصفح.",
      actions: [
        { label: "فتح Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "الكود على GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["عرض مشاريع أخرى", "ما هي تقنياته؟", "معلومات التواصل"],
    },
    jp: {
      text: "Ideal Calcは、ブラジル公式統計局（IBGE）の人口普查データをブラウザ上でリアルタイム処理する統計分析アプリです。12種類の変数を掛け合わせ、即座に確率を算出します。",
      actions: [
        { label: "Ideal Calc を開く ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "GitHub リポジトリ ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["他のプロジェクトを見る", "技術スタックは？", "連絡先を見る"],
    },
    cn: {
      text: "Ideal Calc 是一款前端即时处理巴西国家地理统计局 (IBGE) 真实普查微数据的统计应用。它交叉分析 12 个维度的人口变量，支持客户端毫秒级计算与可视化卡片生成。",
      actions: [
        { label: "打开 Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "GitHub 源码 ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["查看其他项目", "Aster 的技术栈", "联系方式"],
    },
    kr: {
      text: "Ideal Calc는 브라질 지리통계원(IBGE)의 공식 인구통계 마이크로데이터를 분석하는 통계 웹 앱입니다. 12개의 필터를 클라이언트에서 실시간 연산하여 결과를 도출합니다.",
      actions: [
        { label: "Ideal Calc 열기 ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "GitHub 저장소 ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["다른 프로젝트 보기", "기술 스택 확인", "연락처 보기"],
    },
    vn: {
      text: "Ideal Calc là ứng dụng thống kê xử lý vi dữ liệu chính thức của IBGE Brazil. Nó đối chiếu 12 biến số nhân khẩu học trực tiếp trên trình duyệt với tốc độ tức thì.",
      actions: [
        { label: "Mở Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Mã nguồn GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Xem các dự án khác", "Stack công nghệ là gì?", "Thông tin liên hệ"],
    },
    id: {
      text: "Ideal Calc adalah aplikasi kalkulator statistik yang mengolah microdata resmi sensus IBGE Brasil, menggabungkan 12 filter demografis dengan komputasi real-time di sisi klien.",
      actions: [
        { label: "Buka Ideal Calc ↗", url: "https://idealcalc.asterdev.me/" },
        { label: "Kode GitHub ↗", url: "https://github.com/zAstergun/ideal-calculator" },
      ],
      suggestions: ["Lihat proyek lain", "Apa tech stack-nya?", "Info kontak"],
    },
  },

  PROJECT_SOUL_FIGHTER: {
    br: {
      text: "O Soul Fighter: Memory Game é um jogo da memória web ambientado no torneio Soul Fighter de League of Legends. Foi construído com JavaScript Vanilla, emplegando lógica de flip cards 3D com CSS e design responsivo.",
      actions: [
        { label: "Jogar Online ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Ver outros projetos", "Fale sobre o Ideal Calc", "Qual a stack do Aster?"],
    },
    pt: {
      text: "O Soul Fighter: Memory Game é um jogo da memória web ambientado no universo Soul Fighter de League of Legends. Construído com JavaScript Vanilla, com efeitos 3D em CSS e design responsivo.",
      actions: [
        { label: "Jogar Online ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Ver outros projetos", "Fala-me sobre o Ideal Calc", "Qual a stack do Aster?"],
    },
    en: {
      text: "Soul Fighter: Memory Game is a browser card-flip game set in Riot Games' Soul Fighter universe. Built with pure Vanilla JavaScript, it implements shuffle algorithms, 3D card flips with CSS, and responsive styling.",
      actions: [
        { label: "Play Game ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "GitHub Code ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Show other projects", "Tell me about Ideal Calc", "What is Aster's stack?"],
    },
    es: {
      text: "Soul Fighter: Memory Game es un juego de memoria inspirado en League of Legends, programado en Vanilla JavaScript con efectos 3D de cartas y diseño completamente responsivo.",
      actions: [
        { label: "Jugar Online ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Código en GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Ver otros proyectos", "Cuéntame de Ideal Calc", "¿Cuál es su stack?"],
    },
    fr: {
      text: "Soul Fighter: Memory Game est un jeu de cartes inspiré de League of Legends, conçu en JavaScript pur avec retournement de cartes en 3D CSS et graphismes soignés.",
      actions: [
        { label: "Jouer en ligne ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Code sur GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Voir d'autres projets", "Parle-moi d'Ideal Calc", "Quel est son stack ?"],
    },
    de: {
      text: "Soul Fighter: Memory Game ist ein browserbasiertes Kartenspiel im LoL-Universum. Entwickelt mit reinem Vanilla JS und 3D-Kartenanimationen in CSS.",
      actions: [
        { label: "Online spielen ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Code auf GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Andere Projekte ansehen", "Erzähle mir von Ideal Calc", "Tech-Stack ansehen"],
    },
    it: {
      text: "Soul Fighter: Memory Game è un gioco da browser ambientato nell'universo di League of Legends. Realizzato con puro JavaScript vanilla ed effetti 3D CSS.",
      actions: [
        { label: "Gioca Online ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Codice su GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Vedi altri progetti", "Parlami di Ideal Calc", "Qual è il suo stack?"],
    },
    nl: {
      text: "Soul Fighter: Memory Game is een memory-kaartspel gebaseerd op League of Legends, gebouwd in Vanilla JavaScript met 3D-kaartanimaties.",
      actions: [
        { label: "Speel Online ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "GitHub Code ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Andere projecten", "Vertel over Ideal Calc", "Wat is zijn stack?"],
    },
    ru: {
      text: "Soul Fighter: Memory Game — браузерная игра на память во вселенной League of Legends. Разработана на чистом JavaScript с 3D-анимацией переворота карт.",
      actions: [
        { label: "Играть онлайн ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Код на GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Показать другие проекты", "Расскажи про Ideal Calc", "Какой стек технологий?"],
    },
    ar: {
      text: "Soul Fighter: Memory Game هي لعبة ذاكرة للمتصفح في عالم League of Legends. بُنيت بلغة Vanilla JavaScript النقية مع تأثيرات ثلاثية الأبعاد.",
      actions: [
        { label: "العب أونلاين ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "الكود على GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["مشاريع أخرى", "حدثني عن Ideal Calc", "المكدس التقني"],
    },
    jp: {
      text: "Soul Fighter: Memory Gameは、『リーグ・オブ・レジェンド』の魂の闘士イベントをモチーフにしたブラウザ神経衰弱ゲームです。Pure Vanilla JSとCSS 3Dフリップで制作されています。",
      actions: [
        { label: "オンラインでプレイ ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "GitHub コード ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["他のプロジェクトを見る", "Ideal Calc について", "技術スタックは？"],
    },
    cn: {
      text: "Soul Fighter: Memory Game 是一款英雄联盟斗魂觉醒主题的翻牌记忆网页游戏。采用纯 Vanilla JavaScript 编写，结合 CSS 3D 卡牌翻转算法与自适应界面设计。",
      actions: [
        { label: "在线试玩 ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "GitHub 源码 ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["查看其他项目", "了解 Ideal Calc", "Aster 的技术栈"],
    },
    kr: {
      text: "Soul Fighter: Memory Game은 리그 오브 레전드 소울 파이터 테마의 반응형 웹 카드 뒤집기 게임입니다. 순수 Vanilla JS와 CSS 3D 효과로 구현되었습니다.",
      actions: [
        { label: "온라인 플레이 ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "GitHub 소스코드 ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["다른 프로젝트 보기", "Ideal Calc 알아보기", "기술 스택 확인"],
    },
    vn: {
      text: "Soul Fighter: Memory Game là trò chơi lật thẻ bài theo chủ đề LoL, lập trình bằng Vanilla JavaScript thuần với hiệu ứng 3D CSS và thiết kế mượt mà.",
      actions: [
        { label: "Chơi Online ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Mã nguồn GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Xem các dự án khác", "Tìm hiểu Ideal Calc", "Stack công nghệ là gì?"],
    },
    id: {
      text: "Soul Fighter: Memory Game adalah game kartu memori berbasis web bertema League of Legends, dibuat dengan Vanilla JavaScript murni dan animasi 3D CSS.",
      actions: [
        { label: "Mainkan Online ↗", url: "https://zastergun.github.io/Soul-Fighter-Memory-Game/" },
        { label: "Kode di GitHub ↗", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game" },
      ],
      suggestions: ["Lihat proyek lain", "Tentang Ideal Calc", "Apa tech stack-nya?"],
    },
  },

  PROJECT_PEX_WIKI: {
    br: {
      text: "A PEX Wiki é um hub acadêmico criado para os alunos de Ciência da Computação da UniAmérica. Centraliza a documentação dos Projetos de Extensão (PEX), alinhados aos 17 Objetivos de Desenvolvimento Sustentável (ODS) da ONU.\n\nDesenvolvido como SPA em Vanilla JS com tema 'Blurple Gamer' em Dark Mode.",
      actions: [
        { label: "Visitar PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["O que o Aster faz na faculdade?", "Ver outros projetos", "Como entrar em contato?"],
    },
    pt: {
      text: "A PEX Wiki é um hub académico para alunos de Ciência da Computação da UniAmérica. Centraliza a documentação dos Projetos de Extensão (PEX), alinhados com as 17 ODS da ONU, em formato SPA.",
      actions: [
        { label: "Visitar PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["O que o Aster faz na faculdade?", "Ver outros projetos", "Como entrar em contacto?"],
    },
    en: {
      text: "PEX Wiki is an academic platform built for Computer Science students at UniAmérica. It centralizes documentation for Extension Projects (PEX), aligned with the 17 UN Sustainable Development Goals (SDGs).\n\nBuilt as a fast SPA in Vanilla JS, featuring a 'Blurple Gamer' dark mode.",
      actions: [
        { label: "Visit PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "GitHub Code ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["What does Aster do in college?", "Show other projects", "Contact info"],
    },
    es: {
      text: "PEX Wiki es un hub académico para estudiantes de Ciencias de la Computación de UniAmérica, alineando proyectos de extensión con los 17 ODS de la ONU en una SPA rápida.",
      actions: [
        { label: "Visitar PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Código en GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["¿Qué hace en la universidad?", "Ver otros proyectos", "Contacto"],
    },
    fr: {
      text: "PEX Wiki est une plateforme académique pour les étudiants en informatique d'UniAmérica, structurant les projets d'extension autour des 17 ODD de l'ONU.",
      actions: [
        { label: "Visiter PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Code sur GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Rôle universitaire ?", "Voir d'autres projets", "Contact"],
    },
    de: {
      text: "PEX Wiki ist eine akademische Plattform für Informatikstudenten der UniAmérica zur Dokumentation von Projekten im Rahmen der 17 UN-Nachhaltigkeitsziele (SDGs).",
      actions: [
        { label: "PEX Wiki besuchen ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "GitHub-Repository ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Universitätsarbeit von Aster", "Andere Projekte ansehen", "Kontakt"],
    },
    it: {
      text: "PEX Wiki è un portale accademico per studenti di Informatica dell'UniAmérica, con documentazione e allineamento con i 17 obiettivi SDG delle Nazioni Unite.",
      actions: [
        { label: "Visita PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Codice su GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Cosa fa all'università?", "Vedi altri progetti", "Contatti"],
    },
    nl: {
      text: "PEX Wiki is een academisch platform voor informaticastudenten aan UniAmérica, gekoppeld aan de 17 Duurzame Ontwikkelingsdoelen van de VN (SDG's).",
      actions: [
        { label: "Bezoek PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "GitHub Code ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Rol aan de universiteit?", "Andere projecten bekijken", "Contact"],
    },
    ru: {
      text: "PEX Wiki — академический портал для студентов UniAmérica, систематизирующий проекты по 17 Целям устойчивого развития (ЦУР) ООН на базе SPA на чистом JS.",
      actions: [
        { label: "Посетить PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Код на GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Роль Aster в университете", "Показать другие проекты", "Контакты"],
    },
    ar: {
      text: "PEX Wiki هي منصة أكاديمية لطلاب علوم الحاسوب في UniAmérica، لتوثيق مشاريع التمديد الجامعية المتوافقة مع أهداف التنمية المستدامة الـ 17 للأمم المتحدة.",
      actions: [
        { label: "زيارة PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "الكود على GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["نشاطه الجامعي", "مشاريع أخرى", "معلومات التواصل"],
    },
    jp: {
      text: "PEX Wikiは、UniAmérica大学のCS学生向けに国連の持続可能な開発目標（SDGs）17項目に連動した社会連携プロジェクトのWikiを体系化したSPAプラットフォームです。",
      actions: [
        { label: "PEX Wiki を訪問 ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "GitHub コード ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["大学での役割は？", "他のプロジェクトを見る", "連絡先"],
    },
    cn: {
      text: "PEX Wiki 是为 UniAmérica 计算机系学生打造的学术知识库，全面对齐联合国 17 项可持续发展目标 (SDGs)，采用纯 Vanilla JS SPA 构建，具备暗色电竞主题视觉。",
      actions: [
        { label: "访问 PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "GitHub 源码 ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Aster 在大学的经历？", "查看其他项目", "联系方式"],
    },
    kr: {
      text: "PEX Wiki는 UniAmérica 컴퓨터공학과 학생들을 위한 학술 플랫폼으로, UN 17개 지속가능발전목표(SDG)에 맞춘 프로젝트 문서를 SPA 아키텍처로 집약했습니다.",
      actions: [
        { label: "PEX Wiki 방문 ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "GitHub 소스코드 ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["대학 리더십 활동은?", "다른 프로젝트 보기", "연락처 보기"],
    },
    vn: {
      text: "PEX Wiki là cổng thông tin học thuật dành cho sinh viên CNTT UniAmérica, liên kết tài liệu dự án với 17 Mục tiêu Phát triển Bền vững của LHQ trên nền tảng SPA.",
      actions: [
        { label: "Truy cập PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Mã nguồn GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Vai trò tại trường đại học?", "Xem các dự án khác", "Liên hệ"],
    },
    id: {
      text: "PEX Wiki adalah platform akademik untuk mahasiswa Ilmu Komputer UniAmérica, mengintegrasikan proyek ekstensi dengan 17 Tujuan Pembangunan Berkelanjutan (SDG) PBB.",
      actions: [
        { label: "Kunjungi PEX Wiki ↗", url: "https://pex-wiki.vercel.app/" },
        { label: "Kode di GitHub ↗", url: "https://github.com/zAstergun/pex-wiki" },
      ],
      suggestions: ["Peran di universitas?", "Lihat proyek lain", "Kontak"],
    },
  },

  PROJECT_MOBILE_DEMO: {
    br: {
      text: "O App Mobile Demo é uma prova de conceito para mobile construída com React Native, explorando navegação por gestos e renderização otimizada de componentes.",
      actions: [{ label: "Código no GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Ver outros projetos", "Qual a stack técnica?", "Baixar Currículo"],
    },
    pt: {
      text: "O App Mobile Demo é uma prova de conceito para mobile em React Native, explorando navegação fluida por gestos.",
      actions: [{ label: "Código no GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Ver outros projetos", "Qual a stack técnica?", "Descarregar Currículo"],
    },
    en: {
      text: "The App Mobile Demo is a mobile proof-of-concept crafted with React Native, exploring gesture-driven navigation and list rendering optimizations.",
      actions: [{ label: "GitHub Code ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Show other projects", "What is his tech stack?", "Download Resume"],
    },
    es: {
      text: "App Mobile Demo es una prueba de concepto móvil en React Native que explora navegación fluida por gestos y renderizado ágil.",
      actions: [{ label: "Código en GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Ver otros proyectos", "¿Cuál es su stack?", "Descargar Currículum"],
    },
    fr: {
      text: "App Mobile Demo est une démonstration mobile sous React Native, explorant la navigation gestuelle et les performances d'affichage.",
      actions: [{ label: "Code sur GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Voir d'autres projets", "Quel est son stack ?", "Télécharger le CV"],
    },
    de: {
      text: "App Mobile Demo ist ein React Native Proof-of-Concept für moderne Gestensteuerung und flüssige mobile Navigation.",
      actions: [{ label: "Code auf GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Andere Projekte ansehen", "Tech-Stack ansehen", "Lebenslauf herunterladen"],
    },
    it: {
      text: "App Mobile Demo è una prova di concetto sviluppata con React Native, focalizzata sulla navigazione a gesti fluida.",
      actions: [{ label: "Codice su GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Vedi altri progetti", "Qual è il suo stack?", "Scarica il Curriculum"],
    },
    nl: {
      text: "App Mobile Demo is een mobiele demonstratie gemaakt met React Native, gericht op soepele gebarennavigatie.",
      actions: [{ label: "GitHub Code ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Andere projecten", "Wat is zijn stack?", "Download CV"],
    },
    ru: {
      text: "App Mobile Demo — мобильный прототип на React Native с плавной жестовой навигацией и оптимизацией списков.",
      actions: [{ label: "Код на GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Показать другие проекты", "Какой стек технологий?", "Скачать резюме"],
    },
    ar: {
      text: "App Mobile Demo هو نموذج إثبات مفهوم لتطبيق هاتف مبني بـ React Native، يركز على سلاسة التصفح بالإيماءات.",
      actions: [{ label: "الكود على GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["مشاريع أخرى", "المكدس التقني", "تحميل السيرة الذاتية"],
    },
    jp: {
      text: "App Mobile Demoは、React Nativeで構築されたジェスチャーナビゲーションと最適化されたレンダリングを実証するモバイルPoCです。",
      actions: [{ label: "GitHub コード ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["他のプロジェクトを見る", "技術スタックは？", "履歴書をダウンロード"],
    },
    cn: {
      text: "App Mobile Demo 是基于 React Native 开发的移动端概念验证应用，重点验证手势交互驱动与移动端渲染性能。",
      actions: [{ label: "GitHub 源码 ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["查看其他项目", "技术栈是什么？", "下载简历"],
    },
    kr: {
      text: "App Mobile Demo는 React Native로 제작된 모바일 개념 증명 앱으로, 제스처 기반 탐색과 최적화된 렌더링을 시연합니다.",
      actions: [{ label: "GitHub 소스코드 ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["다른 프로젝트 보기", "기술 스택 확인", "이력서 다운로드"],
    },
    vn: {
      text: "App Mobile Demo là ứng dụng thử nghiệm bằng React Native nhằm kiểm tra điều hướng bằng cử chỉ và tối ưu hóa hiệu năng di động.",
      actions: [{ label: "Mã nguồn GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Xem các dự án khác", "Stack công nghệ là gì?", "Tải sơ yếu lý lịch"],
    },
    id: {
      text: "App Mobile Demo adalah bukti konsep aplikasi mobile dengan React Native yang berfokus pada navigasi gestur yang halus.",
      actions: [{ label: "Kode di GitHub ↗", url: "https://github.com/zAstergun/app-mobile-demo" }],
      suggestions: ["Lihat proyek lain", "Apa tech stack-nya?", "Unduh Resume"],
    },
  },

  PROJECT_STUDIO_OS: {
    br: {
      text: "O StudioOS é o Sistema Operacional completo para criadores de conteúdo. Centraliza 12 ferramentas inteligentes conectadas ao tom de voz do canal: validação com Rank de Ideia, gerador de títulos e hooks de retenção, roteirização com teleprompter em tela cheia, briefing de thumbnails e score pré-upload.\n\nConstruído com Astro 7.3, React 19, Tailwind CSS v4, Supabase Auth/Postgres e Cloudflare Workers.",
      actions: [
        { label: "Acessar StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Ver outros projetos", "Qual a stack técnica?", "Como entrar em contato?"],
    },
    pt: {
      text: "O StudioOS é o Sistema Operativo completo para criadores de conteúdo. Centraliza 12 ferramentas inteligentes ligadas ao tom de voz do canal: validação com Rank de Ideia, gerador de títulos e hooks, teleprompter em ecrã inteiro e pontuação de publicações.\n\nConstruído com Astro 7.3, React 19, Tailwind CSS v4, Supabase e Cloudflare Workers.",
      actions: [
        { label: "Aceder ao StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Código no GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Ver outros projetos", "Qual a stack técnica?", "Como entrar em contacto?"],
    },
    en: {
      text: "StudioOS is the comprehensive Operating System for serious content creators. It unifies 12 smart tools calibrated to your channel's unique voice: Idea Ranking, High-CTR Title & Hook Generators, Scripting & Fullscreen Teleprompter, Thumbnail Briefing, Viral Recipe, and Post Scoring.\n\nEngineered with Astro 7.3, React 19, Tailwind CSS v4, Supabase Auth/Postgres, and Cloudflare Workers.",
      actions: [
        { label: "Launch StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "GitHub Repository ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Show other projects", "What is his tech stack?", "Contact info"],
    },
    es: {
      text: "StudioOS es el Sistema Operativo para creadores de contenido. Centraliza 12 herramientas inteligentes conectadas al tono de voz del canal: validación con Rank de Idea, generadores de títulos y hooks, guion con teleprompter en pantalla completa, briefing de miniaturas y puntuación de publicaciones.\n\nConstruido con Astro 7.3, React 19, Tailwind CSS v4, Supabase y Cloudflare Workers.",
      actions: [
        { label: "Abrir StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Código en GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Ver otros proyectos", "¿Cuál es su stack?", "Contacto"],
    },
    fr: {
      text: "StudioOS est le Système d'Exploitation pour les créateurs de contenu. Il réunit 12 outils intelligents calibrés sur l'identité de votre chaîne : Rank d'Idée, Générateurs de Titres et d'Accroches, Téléprompteur plein écran, Briefing de Miniature et Score de Publication.\n\nConçu avec Astro 7.3, React 19, Tailwind CSS v4, Supabase et Cloudflare Workers.",
      actions: [
        { label: "Ouvrir StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Code sur GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Voir d'autres projets", "Quel est son stack ?", "Contact"],
    },
    de: {
      text: "StudioOS ist das Betriebssystem für Content Creator. Es bündelt 12 intelligente Werkzeuge: Ideen-Ranking, Klickstarke Titel- & Hook-Generatoren, Vollbild-Teleprompter, Thumbnail-Briefing und Beitragsbewertung.\n\nEntwickelt mit Astro 7.3, React 19, Tailwind CSS v4, Supabase und Cloudflare Workers.",
      actions: [
        { label: "StudioOS öffnen ↗", url: "https://studio.asterdev.me/" },
        { label: "Code auf GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Andere Projekte ansehen", "Tech-Stack ansehen", "Kontakt"],
    },
    it: {
      text: "StudioOS è il Sistema Operativo per creator di contenuti. Unifica 12 strumenti intelligenti calibrati sul canale: Rank di Idee, Generatori di Titoli e Hook, Script con Teleprompter a schermo intero e Punteggio Post.\n\nRealizzato con Astro 7.3, React 19, Tailwind CSS v4, Supabase e Cloudflare Workers.",
      actions: [
        { label: "Apri StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Codice su GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Vedi altri progetti", "Qual è il suo stack?", "Contatto"],
    },
    nl: {
      text: "StudioOS is het complete Besturingssysteem voor contentmakers. Het centraliseert 12 slimme tools afgestemd op je kanaal: Idee Ranking, Titels & Hooks met hoge retentie, Volledig scherm teleprompter en Post Scoring.\n\nGebouwd met Astro 7.3, React 19, Tailwind CSS v4, Supabase en Cloudflare Workers.",
      actions: [
        { label: "Open StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Code op GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Andere projecten bekijken", "Tech-stack bekijken", "Contact"],
    },
    ru: {
      text: "StudioOS — операционная система для создателей контента. Объединяет 12 смарт-инструментов: рейтинг идей, генераторы заголовков и хуков, полноэкранный телесуфлер, бриф миниатюр и аудит постов.\n\nРазработано на Astro 7.3, React 19, Tailwind CSS v4, Supabase и Cloudflare Workers.",
      actions: [
        { label: "Открыть StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Репозиторий GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Другие проекты", "Какой стек технологий?", "Контакты"],
    },
    ar: {
      text: "StudioOS هو نظام التشغيل الشامل لصناع المحتوى. يدمج 12 أداة ذكية: تقييم الأفكار، توليد العناوين والخطافات، ملقن نصوص بملء الشاشة، وتصميم الصور المصغرة.\n\nمبني باستخدام Astro 7.3 وReact 19 وTailwind CSS v4 وSupabase وCloudflare Workers.",
      actions: [
        { label: "فتح StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "الكود على GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["مشاريع أخرى", "المكدس التقني", "التواصل مع Aster"],
    },
    jp: {
      text: "StudioOSは本気でコンテンツを創るクリエイターのための専用OSです。チャンネルのトーン＆マナーに最適化された12のスマートツールを集約：アイデアRank評価、高CTRタイトル＆フック生成、全画面テレプロンプター付き台本作成、サムネイル設計。\n\nAstro 7.3、React 19、Tailwind CSS v4、Supabase、Cloudflare Workersで構築。",
      actions: [
        { label: "StudioOSを開く ↗", url: "https://studio.asterdev.me/" },
        { label: "GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["他のプロジェクトを見る", "技術スタックは？", "連絡先"],
    },
    cn: {
      text: "StudioOS 是面向专业内容创作者的操作系统。集成12款与频道调性深度联动的智能工具：灵感评级、高CTR标题与留存黄金开头生成、全屏提词器剧本创作、缩略图设计简报与发布前评分。\n\n基于 Astro 7.3、React 19、Tailwind CSS v4、Supabase 和 Cloudflare Workers 构建。",
      actions: [
        { label: "打开 StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "GitHub 源码 ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["查看其他项目", "技术栈是什么？", "联系方式"],
    },
    kr: {
      text: "StudioOS는 콘텐츠 크리에이터를 위한 올인원 운영체제입니다. 채널 맞춤형 12가지 스마트 도구 통합: 아이디어 랭크 평가, 고유입 제목 및 훅 생성기, 전체 화면 프롬프터 대본 작성, 썸네일 브리핑, 게시물 점수 평가.\n\nAstro 7.3, React 19, Tailwind CSS v4, Supabase, Cloudflare Workers 기반 구축.",
      actions: [
        { label: "StudioOS 열기 ↗", url: "https://studio.asterdev.me/" },
        { label: "GitHub 저장소 ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["다른 프로젝트 보기", "기술 스택 확인", "연락처"],
    },
    vn: {
      text: "StudioOS là Hệ Điều Hành toàn diện dành cho nhà sáng tạo nội dung. Đồng bộ 12 công cụ thông minh chuẩn hóa theo phong cách kênh: Đánh giá Rank Ý Tưởng, Tạo Tiêu Đề & Hook Giữ Chân, Kịch Bản & Máy Nhắc Chữ Toàn Màn Hình, Brief Thumbnail và Chấm Điểm Bài Đăng.\n\nPhát triển với Astro 7.3, React 19, Tailwind CSS v4, Supabase và Cloudflare Workers.",
      actions: [
        { label: "Mở StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Mã nguồn GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Xem các dự án khác", "Stack công nghệ là gì?", "Liên hệ"],
    },
    id: {
      text: "StudioOS adalah Sistem Operasi komprehensif untuk kreator konten profesional. Menyatukan 12 alat pintar: Peringkat Ide, Pembuat Judul & Hook Retensi Tinggi, Naskah & Teleprompter Layar Penuh, Brief Thumbnail, dan Skor Postingan.\n\nDibangun dengan Astro 7.3, React 19, Tailwind CSS v4, Supabase, dan Cloudflare Workers.",
      actions: [
        { label: "Buka StudioOS ↗", url: "https://studio.asterdev.me/" },
        { label: "Kode di GitHub ↗", url: "https://github.com/zAstergun/StudioOS" },
      ],
      suggestions: ["Lihat proyek lain", "Apa tech stack-nya?", "Kontak"],
    },
  },

  BLOG_HACKATHONS: {
    br: {
      text: "O blog do Aster conta com três artigos técnicos aprofundados sobre arquitetura de software, interfaces e ciência de dados:\n\n1. **Três anos depois do primeiro commit (Soul Fighter)**: Como reconstruiu o jogo da memória do zero com Web Audio API nativa (< 2ms de latência), renderização 3D na GPU a 60 FPS e state machines em React 19.\n2. **A arquitetura do StudioOS**: Como desenhou um SO web para criadores com a Regra de Calibração Central (cérebro único persistente) e Astro Islands no edge.\n3. **O mito do parceiro ideal (Ideal Calculator)**: Como cruzou microdados reais do IBGE (Censo 2022 + PNAD) em TypeScript puro no cliente (< 8ms) para medir a raridade estatística de checklists de relacionamento.\n\nVocê pode abrir os artigos diretamente no leitor deste dispositivo tocando nos botões abaixo:",
      actions: [
        { label: "📖 Artigo Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 Artigo StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Artigo Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["O que aprendeu no Soul Fighter?", "Como funciona a calibração do StudioOS?", "Como o Ideal Calc usa o IBGE?"],
    },
    pt: {
      text: "O blog do Aster conta com três artigos técnicos aprofundados sobre arquitetura de software, interfaces e ciência de dados:\n\n1. **Três anos depois do primeiro commit (Soul Fighter)**: Reconstrução de raiz com Web Audio API (< 2ms), GPU 3D a 60 FPS e state machines determinísticas.\n2. **A arquitetura do StudioOS**: SO web para criadores com Regra de Calibração Central e Astro Islands no edge.\n3. **O mito do parceiro ideal (Ideal Calculator)**: Cruzamento de microdados do IBGE (Censo 2022 + PNAD) em TypeScript puro no cliente (< 8ms).\n\nPode ler os artigos diretamente neste dispositivo:",
      actions: [
        { label: "📖 Artigo Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 Artigo StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Artigo Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["O que aprendeu no Soul Fighter?", "Como funciona a calibração do StudioOS?", "Como o Ideal Calc usa o IBGE?"],
    },
    en: {
      text: "Aster's blog features three in-depth technical articles on architecture, frontend performance, and data engineering:\n\n1. **Three years after the first commit (Soul Fighter)**: Rebuilding the game from scratch with native Web Audio API (< 2ms latency), GPU 3D rendering at 60 FPS, and deterministic state machines in React 19.\n2. **The StudioOS Architecture**: Designing a web OS for creators with the Central Calibration Rule (persistent brain) and Astro Islands at the edge.\n3. **The Myth of the Ideal Partner (Ideal Calculator)**: Cross-referencing official IBGE census datasets in pure client-side TypeScript (< 8ms) to benchmark relationship checklists against statistical reality.\n\nYou can read the articles directly on this device using the buttons below:",
      actions: [
        { label: "📖 Soul Fighter Post", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 StudioOS Post", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Ideal Calc Post", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["What did he learn in Soul Fighter?", "How does StudioOS calibration work?", "How does Ideal Calc use IBGE data?"],
    },
    es: {
      text: "El blog de Aster cuenta con tres artículos técnicos profundos sobre arquitectura, UI y ciencia de datos:\n\n1. **Soul Fighter**: Reconstrucción desde cero con Web Audio API (< 2ms) y GPU 3D a 60 FPS.\n2. **StudioOS**: Sistema operativo web para creadores con Regla de Calibración Central y Astro Islands.\n3. **Ideal Calculator**: Cruce de microdatos oficiales del IBGE en TypeScript cliente (< 8ms).\n\nPuedes leerlos directamente en este dispositivo:",
      actions: [
        { label: "📖 Artículo Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 Artículo StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Artículo Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["¿Qué aprendió en Soul Fighter?", "¿Cómo funciona StudioOS?", "¿Cómo se calcularon los datos del IBGE?"],
    },
    fr: {
      text: "Le blog d'Aster propose trois articles techniques approfondis sur l'architecture et les performances web:\n\n1. **Soul Fighter**: Refonte complète avec Web Audio API (< 2ms) et GPU 3D à 60 FPS.\n2. **StudioOS**: OS web pour créateurs avec Règle de Calibration Centrale et Astro Islands.\n3. **Ideal Calculator**: Analyse des microdonnées du recensement IBGE en pur TypeScript côté client (< 8ms).",
      actions: [
        { label: "📖 Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Quels enseignements sur Soul Fighter ?", "Comment fonctionne StudioOS ?", "Quelles données IBGE ?"],
    },
    de: {
      text: "Asters Blog umfasst drei ausführliche technische Artikel zu Architektur und Performance:\n\n1. **Soul Fighter**: Kompletter Neubau mit nativer Web Audio API (< 2ms) und GPU-3D-Rendering bei 60 FPS.\n2. **StudioOS**: Web-Betriebssystem für Content-Creator mit zentraler Kalibrierungsregel und Astro Islands.\n3. **Ideal Calculator**: Statistische Analyse von IBGE-Zensusdaten in reinem Client-TypeScript (< 8ms).",
      actions: [
        { label: "📖 Soul Fighter Artikel", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 StudioOS Artikel", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Ideal Calc Artikel", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Was hat er bei Soul Fighter gelernt?", "Wie funktioniert StudioOS?", "Wie nutzt Ideal Calc IBGE?"],
    },
    it: {
      text: "Il blog di Aster include tre articoli tecnici su architettura e prestazioni web:\n\n1. **Soul Fighter**: Ricostruzione da zero con Web Audio API (< 2ms) e GPU 3D a 60 FPS.\n2. **StudioOS**: OS web per creator con Regola di Calibrazione Centrale e Astro Islands.\n3. **Ideal Calculator**: Incrocio di microdati censuari IBGE in TypeScript lato client (< 8ms).",
      actions: [
        { label: "📖 Articolo Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 Articolo StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Articolo Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Cosa ha imparato con Soul Fighter?", "Come funziona StudioOS?", "Come usa i dati IBGE?"],
    },
    nl: {
      text: "Asters blog bevat drie technische artikelen over architectuur en webprestaties:\n\n1. **Soul Fighter**: Vanaf nul herbouwd met Web Audio API (< 2ms) en GPU 3D op 60 FPS.\n2. **StudioOS**: Web-OS voor creators met Centrale Kalibratieregel en Astro Islands.\n3. **Ideal Calculator**: Kruisen van IBGE-data in pure client-side TypeScript (< 8ms).",
      actions: [
        { label: "📖 Soul Fighter Artikel", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 StudioOS Artikel", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Ideal Calc Artikel", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Wat leerde hij bij Soul Fighter?", "Hoe werkt StudioOS?", "Hoe gebruikt hij IBGE?"],
    },
    ru: {
      text: "В блоге Aster опубликованы три подробных технических статьи об архитектуре и производительности:\n\n1. **Soul Fighter**: Полная переработка с нуля с Web Audio API (< 2 мс) и 3D на GPU при 60 FPS.\n2. **StudioOS**: Веб-ОС для авторов контента с центральным правилом калибровки и Astro Islands.\n3. **Ideal Calculator**: Анализ микроданных переписи IBGE на чистом TypeScript в браузере (< 8 мс).",
      actions: [
        { label: "📖 Статья Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 Статья StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Статья Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Что он узнал в Soul Fighter?", "Как работает StudioOS?", "Как используются данные IBGE?"],
    },
    ar: {
      text: "تتضمن مدونة Aster ثلاثة مقالات تقنية معمقة حول الهندسة والأداء:\n\n1. **Soul Fighter**: إعادة بناء كاملة من الصفر مع Web Audio API وسرعة استجابة < 2ms ورسوم ثلاثية الأبعاد بـ 60 إطاراً.\n2. **StudioOS**: نظام تشغيل ويب للمنشئين مع قاعدة المعايرة المركزية وAstro Islands.\n3. **Ideal Calculator**: تقاطع بيانات التعداد السكاني IBGE عبر TypeScript في المتصفح (< 8ms).",
      actions: [
        { label: "📖 مقال Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 مقال StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 مقال Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["ماذا تعلّم من Soul Fighter؟", "كيف تعمل معايرة StudioOS؟", "كيف تُستخدم بيانات IBGE؟"],
    },
    jp: {
      text: "Asterの技術ブログには、アーキテクチャとWebパフォーマンスに関する3つの詳細な記事があります：\n\n1. **Soul Fighter**: Web Audio API（< 2ms）とGPU 3Dによる60 FPSでのゼロからの再構築。\n2. **StudioOS**: 中央キャリブレーションルールとAstro Islandsを採用したクリエイター向けWeb OS。\n3. **Ideal Calculator**: IBGE国勢調査データをブラウザ上のTypeScriptで高速処理（< 8ms）。",
      actions: [
        { label: "📖 Soul Fighter 記事", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 StudioOS 記事", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Ideal Calc 記事", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Soul Fighterでの学びは？", "StudioOSの仕組みは？", "IBGEデータはどう使われた？"],
    },
    cn: {
      text: "Aster 的技术博客包含三篇关于软件架构与前端高性能的深度长文：\n\n1. **Soul Fighter**: 从零重构，采用原生 Web Audio API（延迟 < 2ms）和 GPU 3D 渲染锁定 60 FPS。\n2. **StudioOS**: 创作者专属 Web 操作系统，具备统一校准规则与边缘 Astro Islands 架构。\n3. **Ideal Calculator**: 在纯前端 TypeScript 中秒级交叉比对 IBGE 官方人口普查微观数据（< 8ms）。",
      actions: [
        { label: "📖 阅读 Soul Fighter 文章", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 阅读 StudioOS 文章", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 阅读 Ideal Calc 文章", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["重构 Soul Fighter 学到了什么？", "StudioOS 架构如何设计？", "Ideal Calc 如何使用 IBGE 数据？"],
    },
    kr: {
      text: "Aster의 블로그에는 아키텍처와 프론트엔드 성능에 관한 3편의 심도 있는 기술 글이 있습니다:\n\n1. **Soul Fighter**: Web Audio API(< 2ms) 및 GPU 3D(60 FPS)로 처음부터 재구축한 과정.\n2. **StudioOS**: 중앙 보정 규칙과 Astro Islands를 적용한 크리에이터용 웹 OS.\n3. **Ideal Calculator**: 브라우저 순수 TypeScript(< 8ms)로 IBGE 인구 센서스 데이터를 교차 검증한 통계 엔진.",
      actions: [
        { label: "📖 Soul Fighter 글 읽기", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 StudioOS 글 읽기", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Ideal Calc 글 읽기", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Soul Fighter 재구축에서 배운 점은?", "StudioOS 보정 기능은 어떻게 작동하나요?", "IBGE 데이터는 어떻게 활용했나요?"],
    },
    vn: {
      text: "Blog của Aster có 3 bài viết kỹ thuật chuyên sâu về kiến trúc và hiệu năng:\n\n1. **Soul Fighter**: Tái cấu trúc từ đầu với Web Audio API (< 2ms) và GPU 3D ở 60 FPS.\n2. **StudioOS**: Hệ điều hành web cho nhà sáng tạo với Quy tắc Hiệu chuẩn Trung tâm và Astro Islands.\n3. **Ideal Calculator**: Đối soát vi dữ liệu điều tra dân số IBGE bằng TypeScript thuần trong trình duyệt (< 8ms).",
      actions: [
        { label: "📖 Đọc bài Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 Đọc bài StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Đọc bài Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Bài học từ Soul Fighter là gì?", "StudioOS hoạt động như thế nào?", "Ideal Calc dùng dữ liệu IBGE ra sao?"],
    },
    id: {
      text: "Blog Aster memiliki 3 artikel teknis mendalam tentang arsitektur dan performa web:\n\n1. **Soul Fighter**: Membangun ulang dari nol dengan Web Audio API (< 2ms) dan GPU 3D pada 60 FPS.\n2. **StudioOS**: OS web untuk kreator dengan Aturan Kalibrasi Sentral dan Astro Islands.\n3. **Ideal Calculator**: Memproses data sensus IBGE di TypeScript murni sisi klien (< 8ms).",
      actions: [
        { label: "📖 Baca Artikel Soul Fighter", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "📖 Baca Artikel StudioOS", url: "blog-studioos-architecture", type: "article" },
        { label: "📖 Baca Artikel Ideal Calc", url: "blog-ideal-calculator", type: "article" },
      ],
      suggestions: ["Apa yang dipelajari di Soul Fighter?", "Bagaimana cara kerja StudioOS?", "Bagaimana Ideal Calc menggunakan IBGE?"],
    },
  },

  BLOG_POST_SOUL_FIGHTER: {
    br: {
      text: "No artigo **'Três anos depois do primeiro commit: o que aprendi refazendo o Soul Fighter do zero'**, o Aster analisa a transição do seu primeiro commit amador em novembro de 2023 para uma arquitetura moderna e rigorosa em 2026:\n\n- **Web Audio API nativa (< 2ms)**: Substituiu a tag `new Audio()` por um `AudioContext` singleton com buffers decodificados em memória, entregando feedback tátil instantâneo sem cortes.\n- **Renderização 3D na GPU**: 24 cartas virando simultaneamente a 60 FPS estáveis via `transform-style: preserve-3d` e camadas de composição isoladas.\n- **Máquina de Estados Determinística**: Estados finitos (`idle`, `flipping`, `comparing`, `combo`, `victory`) em React 19 e TypeScript estrito, eliminando bugs de concorrência.\n- **Ranking Global no Supabase**: Sincronização em tempo real de pontuações com validações no servidor.",
      actions: [
        { label: "📖 Ler Artigo no Dispositivo", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Jogar Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Como foi feita a Web Audio API?", "Ver post do StudioOS", "Ver post do Ideal Calc"],
    },
    pt: {
      text: "No artigo **'Três anos depois do primeiro commit: o que aprendi refazendo o Soul Fighter do zero'**, o Aster relata a evolução técnica entre 2023 e 2026:\n\n- **Web Audio API nativa (< 2ms)**: Latência tátil imediata com AudioContext singleton.\n- **GPU 3D**: 60 FPS cravados sem reflow na CPU.\n- **State Machine Determinística**: React 19 e TypeScript eliminando race conditions.\n- **Supabase**: Leaderboard mundial persistido em tempo real.",
      actions: [
        { label: "📖 Ler Artigo no Dispositivo", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Jogar Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Como funciona o áudio tátil?", "Ver artigo do StudioOS", "Ver artigo do Ideal Calc"],
    },
    en: {
      text: "In the article **'Three years after the first commit: what I learned rebuilding Soul Fighter from scratch'**, Aster details the architectural leap from a beginner 2023 script to high-performance modern engineering in 2026:\n\n- **Native Web Audio API (< 2ms)**: Swapped laggy `new Audio()` tags for an `AudioContext` singleton with RAM pre-decoded buffers and instant tactile clicks.\n- **Hardware 3D Acceleration**: 24 cards flipping simultaneously at locked 60 FPS via GPU compositing layers.\n- **Deterministic State Machine**: React 19 and strict TypeScript modeling game phases (`idle`, `flipping`, `comparing`, `combo`, `victory`) to eliminate race conditions.\n- **Real-time Leaderboard**: Supabase integration with difficulty multipliers and server-side validation.",
      actions: [
        { label: "📖 Read Article on Device", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Play Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub Repo", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["How does the Web Audio API work?", "Tell me about the StudioOS post", "Tell me about the Ideal Calc post"],
    },
    es: {
      text: "En el artículo sobre Soul Fighter, Aster documenta su salto técnico entre 2023 y 2026: Web Audio API con latencia < 2ms, aceleración 3D en GPU a 60 FPS, máquina de estados determinista en React 19 y clasificación global con Supabase.",
      actions: [
        { label: "📖 Leer en el Dispositivo", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Jugar Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["¿Cómo funciona el audio táctil?", "Ver artículo de StudioOS", "Ver artículo de Ideal Calc"],
    },
    fr: {
      text: "Dans l'article sur Soul Fighter, Aster documente sa montée en compétences: Web Audio API (< 2ms), accélération GPU 3D à 60 FPS, machine à états en React 19 et classement Supabase.",
      actions: [
        { label: "📖 Lire l'article", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Jouer à Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Comment fonctionne l'audio natif ?", "Voir article StudioOS", "Voir article Ideal Calc"],
    },
    de: {
      text: "Im Soul Fighter Artikel dokumentiert Aster seinen technischen Reifegrad von 2023 bis 2026: Web Audio API (< 2ms), GPU-3D-Rendering bei 60 FPS, deterministische Zustandsmaschine und Supabase-Bestenliste.",
      actions: [
        { label: "📖 Artikel auf Gerät lesen", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Soul Fighter spielen", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Wie funktioniert das Audio?", "StudioOS Artikel ansehen", "Ideal Calc Artikel ansehen"],
    },
    it: {
      text: "Nell'articolo di Soul Fighter, Aster analizza l'evoluzione da un codice amatoriale a un'architettura rigorosa: Web Audio API (< 2ms), rendering GPU 3D a 60 FPS, state machine deterministica e classifica Supabase.",
      actions: [
        { label: "📖 Leggi sul dispositivo", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Gioca a Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Come funziona l'audio tascabile?", "Vedi articolo StudioOS", "Vedi articolo Ideal Calc"],
    },
    nl: {
      text: "In het artikel over Soul Fighter beschrijft Aster de transformatie naar moderne architectuur: Web Audio API (< 2ms), 3D GPU-rendering op 60 FPS, deterministische state machine en Supabase-ranglijst.",
      actions: [
        { label: "📖 Lees artikel op apparaat", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Speel Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Hoe werkt de Web Audio API?", "Bekijk StudioOS artikel", "Bekijk Ideal Calc artikel"],
    },
    ru: {
      text: "В статье о Soul Fighter описана эволюция проекта: Web Audio API (< 2 мс), 3D-ускорение на GPU при 60 FPS, конечный автомат на React 19 и таблица лидеров на Supabase.",
      actions: [
        { label: "📖 Читать статью", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Играть в Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Как работает Web Audio API?", "Статья о StudioOS", "Статья об Ideal Calc"],
    },
    ar: {
      text: "في مقال Soul Fighter، يوثق Aster قفزته الهندسية: Web Audio API (< 2ms)، تسريع 3D على GPU بـ 60 FPS، آلة حالات حتمية وتكامل كامل مع Supabase.",
      actions: [
        { label: "📖 قراءة المقال على الجهاز", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 العب Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["كيف تعمل Web Audio API؟", "مقال StudioOS", "مقال Ideal Calc"],
    },
    jp: {
      text: "Soul Fighterの記事では、2023年の初期コードから2026年の高品質エンジニアリングへの進化を解説：Web Audio API（< 2ms）、GPU 3D（60 FPS）、決定論的ステートマシン、Supabaseランキング。",
      actions: [
        { label: "📖 端末上で記事を読む", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Soul Fighter をプレイ", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub リポジトリ", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Web Audio APIの仕組みは？", "StudioOSの記事を見る", "Ideal Calcの記事を見る"],
    },
    cn: {
      text: "在 Soul Fighter 文章中，Aster 详述了从 2023 年新手代码到 2026 年高性能工程的蜕变：原生 Web Audio API（< 2ms 延迟）、GPU 3D 锁定 60 FPS、确定性状态机与 Supabase 全球排行榜。",
      actions: [
        { label: "📖 在设备上阅读全文", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 试玩 Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub 仓库", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Web Audio API 是如何实现的？", "查看 StudioOS 文章", "查看 Ideal Calc 文章"],
    },
    kr: {
      text: "Soul Fighter 글에서 Aster는 2023년 초보 코드에서 2026년 고성능 아키텍처로의 도약을 다룹니다: Web Audio API(< 2ms), GPU 3D 60 FPS, 결정론적 상태 머신 및 Supabase 리더보드.",
      actions: [
        { label: "📖 디바이스에서 글 읽기", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Soul Fighter 플레이", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Web Audio API 구현 원리는?", "StudioOS 글 보기", "Ideal Calc 글 보기"],
    },
    vn: {
      text: "Trong bài viết về Soul Fighter, Aster chia sẻ bước tiến kỹ thuật từ 2023 đến 2026: Web Audio API (< 2ms), GPU 3D ở 60 FPS mượt mà, máy trạng thái hữu hạn và bảng xếp hạng Supabase.",
      actions: [
        { label: "📖 Đọc bài trên thiết bị", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Chơi Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Web Audio API hoạt động thế nào?", "Xem bài StudioOS", "Xem bài Ideal Calc"],
    },
    id: {
      text: "Dalam artikel Soul Fighter, Aster mendokumentasikan lompatan teknis dari 2023 ke 2026: Web Audio API (< 2ms), akselerasi GPU 3D pada 60 FPS, state machine deterministik, dan leaderboard Supabase.",
      actions: [
        { label: "📖 Baca di Perangkat", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: "🎮 Mainkan Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" },
      ],
      suggestions: ["Bagaimana cara kerja Web Audio API?", "Lihat artikel StudioOS", "Lihat artikel Ideal Calc"],
    },
  },

  BLOG_POST_STUDIO_OS: {
    br: {
      text: "No artigo **'A arquitetura do StudioOS: da ideia crua a uma esteira de IA usada por criadores'**, o Aster analisa a engenharia por trás do sistema operacional para criadores:\n\n- **Crítica a Wrappers de IA**: Rejeita caixas de prompt rasas e cria fluxos com contexto persistente, números e velocidade.\n- **Regra de Calibração Central**: Ponto único de verdade onde o canal define persona, dores e tom de voz uma única vez, alimentando todas as 12 ferramentas do ecossistema.\n- **Pipeline Integrado**: Rank de Ideia (0 a 10), Mentor IA & 6 variações táticas de ganchos, Roteirização em blocos e teleprompter em tela.\n- **Astro Islands no Edge**: Astro 7 e React 19 Islands hidratando sob demanda com LCP < 800ms e streaming via Cloudflare Workers com TTFT < 350ms.",
      actions: [
        { label: "📖 Ler Artigo no Dispositivo", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Acessar StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["O que é a Regra de Calibração Central?", "Ver post do Soul Fighter", "Ver post do Ideal Calc"],
    },
    pt: {
      text: "No artigo **'A arquitetura do StudioOS: da ideia crua a uma esteira de IA usada por criadores'**, o Aster disseca a arquitetura da sua esteira para criadores:\n\n- **Regra de Calibração Central**: Cérebro único que alimenta 12 ferramentas sem repetir contexto.\n- **Pipeline Objetivo**: Rank de Ideia (0 a 10), gerador de ganchos e teleprompter in-page.\n- **Astro Islands no Edge**: HTML estático com hidratação sob demanda e TTFT < 350ms.",
      actions: [
        { label: "📖 Ler Artigo no Dispositivo", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Acessar StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["O que é a Regra de Calibração Central?", "Ver post do Soul Fighter", "Ver post do Ideal Calc"],
    },
    en: {
      text: "In the article **'The StudioOS Architecture: from raw ideas to an AI pipeline creators actually use'**, Aster breaks down his creator operating system:\n\n- **Beyond Lazy Wrappers**: Replaced generic prompt boxes with structured, persistent workflows.\n- **Central Calibration Rule**: A single source of truth for channel tone, audience pain points, and references, powering all 12 pipeline tools seamlessly.\n- **Creator Pipeline**: Algorithmic Idea Ranking (0-10 score), tactical Hook Generator with 6 retention variants, Block Scripting, and in-page Teleprompter.\n- **Astro Islands on the Edge**: Astro 7 with on-demand React 19 hydration (LCP < 800ms) and Cloudflare Workers SSE streaming (TTFT < 350ms).",
      actions: [
        { label: "📖 Read Article on Device", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Open StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub Repo", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["What is the Central Calibration Rule?", "Tell me about the Soul Fighter post", "Tell me about the Ideal Calc post"],
    },
    es: {
      text: "En el artículo sobre StudioOS, Aster explica la arquitectura del sistema operativo para creadores: Regla de Calibración Central (un solo cerebro para 12 herramientas), Rank de Idea, teleprompter integrado y Astro Islands con TTFT < 350ms.",
      actions: [
        { label: "📖 Leer en el Dispositivo", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Abrir StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["¿Qué es la Calibración Central?", "Ver artículo de Soul Fighter", "Ver artículo de Ideal Calc"],
    },
    fr: {
      text: "Dans l'article sur StudioOS, Aster détaille l'architecture de son OS pour créateurs: Règle de Calibration Centrale, classement d'idées (0 à 10), téléprompteur et Astro Islands avec TTFT < 350ms.",
      actions: [
        { label: "📖 Lire l'article", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Ouvrir StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["Qu'est-ce que la Calibration Centrale ?", "Voir article Soul Fighter", "Voir article Ideal Calc"],
    },
    de: {
      text: "Im StudioOS-Artikel erklärt Aster die Architektur: Zentrale Kalibrierungsregel für 12 Tools, mathematisches Ideen-Ranking (0-10), integrierter Teleprompter und Astro Islands mit TTFT < 350ms.",
      actions: [
        { label: "📖 Artikel auf Gerät lesen", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 StudioOS öffnen", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["Was ist die zentrale Kalibrierungsregel?", "Soul Fighter Artikel ansehen", "Ideal Calc Artikel ansehen"],
    },
    it: {
      text: "Nell'articolo su StudioOS, Aster descrive la sua architettura per creator: Regola di Calibrazione Centrale, ranking idee (0-10), teleprompter e Astro Islands su Cloudflare con TTFT < 350ms.",
      actions: [
        { label: "📖 Leggi sul dispositivo", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Apri StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["Cos'è la Calibrazione Centrale?", "Vedi articolo Soul Fighter", "Vedi articolo Ideal Calc"],
    },
    nl: {
      text: "In het artikel over StudioOS legt Aster de architectuur uit: Centrale Kalibratieregel voor 12 tools, ideeën-ranking (0-10), in-page teleprompter en Astro Islands met TTFT < 350ms.",
      actions: [
        { label: "📖 Lees artikel op apparaat", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Open StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["Wat is de Centrale Kalibratieregel?", "Bekijk Soul Fighter artikel", "Bekijk Ideal Calc artikel"],
    },
    ru: {
      text: "В статье об архитектуре StudioOS Aster объясняет создание веб-ОС для блогеров: центральное правило калибровки (единый контекст для 12 инструментов), ранжирование идей и Astro Islands с TTFT < 350 мс.",
      actions: [
        { label: "📖 Читать статью", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Открыть StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["Что такое центральная калибровка?", "Статья о Soul Fighter", "Статья об Ideal Calc"],
    },
    ar: {
      text: "في مقال StudioOS، يوضح Aster هيكلية نظام التشغيل للمنشئين: قاعدة المعايرة المركزية (ذاكرة موحدة لـ 12 أداة)، وتقييم الأفكار، والتلقين البصري مع Astro Islands واستجابة < 350ms.",
      actions: [
        { label: "📖 قراءة المقال على الجهاز", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 فتح StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["ما هي قاعدة المعايرة المركزية؟", "مقال Soul Fighter", "مقال Ideal Calc"],
    },
    jp: {
      text: "StudioOSの記事では、クリエイター向けOSの設計を解説：12のツールを統括する中央キャリブレーションルール、アイデア評価（0〜10点）、画面内プロンプター、TTFT < 350msのAstro Islands構成。",
      actions: [
        { label: "📖 端末上で記事を読む", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 StudioOS を開く", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub リポジトリ", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["中央キャリブレーションルールとは？", "Soul Fighterの記事を見る", "Ideal Calcの記事を見る"],
    },
    cn: {
      text: "在 StudioOS 文章中，Aster 深入剖析了创作者操作系统的设计：抛弃无脑 GPT 包装壳，引入“统一校准规则”（单个大脑服务 12 款工具）、算法级选题评分、分块脚本提词器与 TTFT < 350ms 的 Astro Islands 边缘架构。",
      actions: [
        { label: "📖 在设备上阅读全文", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 打开 StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub 仓库", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["什么是统一校准规则？", "查看 Soul Fighter 文章", "查看 Ideal Calc 文章"],
    },
    kr: {
      text: "StudioOS 글에서 Aster는 크리에이터 OS 아키텍처를 설명합니다: 12가지 도구를 위한 중앙 보정 규칙(단일 컨텍스트), 아이디어 평가 점수(0~10), 인페이지 프롬프터 및 TTFT < 350ms의 Astro Islands.",
      actions: [
        { label: "📖 디바이스에서 글 읽기", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 StudioOS 열기", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["중앙 보정 규칙이란 무엇인가요?", "Soul Fighter 글 보기", "Ideal Calc 글 보기"],
    },
    vn: {
      text: "Trong bài viết về StudioOS, Aster phân tích kiến trúc hệ điều hành cho nhà sáng tạo: Quy tắc Hiệu chuẩn Trung tâm cho 12 công cụ, chấm điểm ý tưởng (0-10), máy nhắc chữ và Astro Islands với TTFT < 350ms.",
      actions: [
        { label: "📖 Đọc bài trên thiết bị", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Mở StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["Quy tắc Hiệu chuẩn Trung tâm là gì?", "Xem bài Soul Fighter", "Xem bài Ideal Calc"],
    },
    id: {
      text: "Dalam artikel StudioOS, Aster membedah arsitektur OS untuk kreator: Aturan Kalibrasi Sentral untuk 12 fitur, scoring ide (0-10), teleprompter di layar, dan Astro Islands dengan TTFT < 350ms.",
      actions: [
        { label: "📖 Baca di Perangkat", url: "blog-studioos-architecture", type: "article" },
        { label: "🚀 Buka StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" },
      ],
      suggestions: ["Apa itu Aturan Kalibrasi Sentral?", "Lihat artikel Soul Fighter", "Lihat artikel Ideal Calc"],
    },
  },

  BLOG_POST_IDEAL_CALC: {
    br: {
      text: "No artigo **'O mito do parceiro ideal: cruzando dados do IBGE para medir a realidade dos relacionamentos'**, o Aster explica como substituiu debates rasos de redes sociais por estatística oficial:\n\n- **Microdados Oficiais**: Cruzamento de 3 fontes primárias do IBGE: Censo Demográfico 2022 (idade/estado civil), PNAD Contínua 2023 (estratificação de renda) e POF (altura/biometria).\n- **Matrizes Condicionais**: Evitou a falácia de multiplicar probabilidades como se fossem eventos independentes, correlacionando renda e biometria com faixas etárias reais.\n- **Processamento no Cliente (< 8ms)**: Tabelas compactadas em arrays binários otimizados, recalculando 12 filtros simultâneos no navegador a 60 FPS com zero custo de servidor.\n- **Revelação Matemática**: Demonstra como checklists considerados 'básicos' na internet representam menos de 0,08% da população brasileira.",
      actions: [
        { label: "📖 Ler Artigo no Dispositivo", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Abrir Calculadora", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Quais bases do IBGE foram usadas?", "Ver post do Soul Fighter", "Ver post do StudioOS"],
    },
    pt: {
      text: "No artigo **'O mito do parceiro ideal: cruzando dados do IBGE para medir a realidade dos relacionamentos'**, o Aster documenta a ciência de dados por trás da calculadora:\n\n- **Microdados Primários**: Censo 2022, PNAD Contínua e POF do IBGE.\n- **Probabilidade Condicional**: Matrizes estratificadas evitando a falácia da independência estocástica.\n- **100% no Cliente**: Cálculo em TypeScript puro em menos de 8ms no navegador.\n- **Diagnóstico Real**: Mostra que exigências virais atingem menos de 0,08% dos homens no país.",
      actions: [
        { label: "📖 Ler Artigo no Dispositivo", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Abrir Calculadora", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Como foram cruzados os dados?", "Ver post do Soul Fighter", "Ver post do StudioOS"],
    },
    en: {
      text: "In the article **'The Myth of the Ideal Partner: Using Census Data to Benchmark Relationship Expectations'**, Aster explains how he traded social media noise for statistical reality:\n\n- **Official Public Datasets**: Cross-referenced three primary IBGE sources: 2022 Census (age/marital status), PNAD Contínua (income percentiles), and POF (biometrics/height).\n- **Conditional Probability Matrices**: Avoided the naive multiplication fallacy by weighting correlated demographic factors like age, region, and income.\n- **Client-Side Engine (< 8ms)**: Compact binary search arrays updating joint probabilities across 12 filters instantly in the browser at zero server cost.\n- **Empirical Reality Check**: Demonstrates how viral online checklists often represent less than 0.08% of the Brazilian population.",
      actions: [
        { label: "📖 Read Article on Device", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Open Calculator", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub Repo", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Which IBGE datasets were used?", "Tell me about the Soul Fighter post", "Tell me about the StudioOS post"],
    },
    es: {
      text: "En el artículo sobre Ideal Calculator, Aster expone la ciencia de datos demográficos cruzando microdatos del Censo IBGE 2022, PNAD y POF con matrices condicionales en TypeScript cliente (< 8ms).",
      actions: [
        { label: "📖 Leer en el Dispositivo", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Abrir Calculadora", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["¿Qué datos del IBGE se usaron?", "Ver artículo de Soul Fighter", "Ver artículo de StudioOS"],
    },
    fr: {
      text: "Dans l'article sur Ideal Calculator, Aster croise les données du recensement IBGE 2022 et de la PNAD via des matrices conditionnelles en pur TypeScript client (< 8ms).",
      actions: [
        { label: "📖 Lire l'article", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Ouvrir la Calculatrice", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Quelles données du recensement ?", "Voir article Soul Fighter", "Voir article StudioOS"],
    },
    de: {
      text: "Im Ideal Calculator Artikel analysiert Aster IBGE-Zensusdaten 2022 und PNAD über bedingte Wahrscheinlichkeitsmatrizen in reinem Client-TypeScript (< 8ms).",
      actions: [
        { label: "📖 Artikel auf Gerät lesen", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Rechner öffnen", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Welche Zensusdaten wurden genutzt?", "Soul Fighter Artikel ansehen", "StudioOS Artikel ansehen"],
    },
    it: {
      text: "Nell'articolo su Ideal Calculator, Aster analizza i microdati del censimento IBGE 2022 e PNAD tramite matrici di probabilità condizionale in TypeScript client (< 8ms).",
      actions: [
        { label: "📖 Leggi sul dispositivo", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Apri Calcolatrice", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Quali dati IBGE sono stati usati?", "Vedi articolo Soul Fighter", "Vedi articolo StudioOS"],
    },
    nl: {
      text: "In het artikel over Ideal Calculator analyseert Aster IBGE-censusdata 2022 en PNAD via voorwaardelijke waarschijnlijkheidsmatrices in client-side TypeScript (< 8ms).",
      actions: [
        { label: "📖 Lees artikel op apparaat", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Open Calculator", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Welke data werd gebruikt?", "Bekijk Soul Fighter artikel", "Bekijk StudioOS artikel"],
    },
    ru: {
      text: "В статье об Ideal Calculator Aster анализирует микроданные переписи IBGE 2022 и PNAD с использованием условных матриц вероятности в браузере на чистом TypeScript (< 8 мс).",
      actions: [
        { label: "📖 Читать статью", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Открыть калькулятор", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Какие данные использовались?", "Статья о Soul Fighter", "Статья о StudioOS"],
    },
    ar: {
      text: "في مقال Ideal Calculator، يشرح Aster دمج بيانات التعداد السكاني IBGE 2022 وPNAD باستخدام مصفوفات الاحتمال الشرطي في المتصفح عبر TypeScript (< 8ms).",
      actions: [
        { label: "📖 قراءة المقال على الجهاز", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 فتح الحاسبة", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["ما هي بيانات التعداد المستخدمة؟", "مقال Soul Fighter", "مقال StudioOS"],
    },
    jp: {
      text: "Ideal Calculatorの記事では、IBGE国勢調査2022およびPNADのマイクロデータをブラウザ上のTypeScriptで条件付き確率行列として高速計算（< 8ms）する仕組みを解説。",
      actions: [
        { label: "📖 端末上で記事を読む", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 計算機を開く", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub リポジトリ", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["どの統計データが使われた？", "Soul Fighterの記事を見る", "StudioOSの記事を見る"],
    },
    cn: {
      text: "在 Ideal Calculator 文章中，Aster 详述了如何用数学击碎网络择偶幻想：交叉比对 2022 年 IBGE 人口普查、PNAD 收入分位数与 POF 身高数据，并在纯前端 TypeScript 中以条件概率矩阵在 8ms 内实时计算。",
      actions: [
        { label: "📖 在设备上阅读全文", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 打开计算器", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub 仓库", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["使用了哪些人口普查数据？", "查看 Soul Fighter 文章", "查看 StudioOS 文章"],
    },
    kr: {
      text: "Ideal Calculator 글에서 Aster는 2022년 IBGE 인구 센서스 및 PNAD 데이터를 브라우저 순수 TypeScript 조건부 확률 매트릭스로 8ms 미만에 교차 검증한 과정을 설명합니다.",
      actions: [
        { label: "📖 디바이스에서 글 읽기", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 계산기 열기", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["어떤 센서스 데이터가 쓰였나요?", "Soul Fighter 글 보기", "StudioOS 글 보기"],
    },
    vn: {
      text: "Trong bài viết Ideal Calculator, Aster giải thích cách đối soát dữ liệu điều tra dân số IBGE 2022 và PNAD qua ma trận xác suất có điều kiện trên TypeScript client (< 8ms).",
      actions: [
        { label: "📖 Đọc bài trên thiết bị", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Mở Máy tính", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Dữ liệu IBGE nào được sử dụng?", "Xem bài Soul Fighter", "Xem bài StudioOS"],
    },
    id: {
      text: "Dalam artikel Ideal Calculator, Aster menjelaskan pengolahan data sensus IBGE 2022 dan PNAD dengan matriks probabilitas bersyarat di TypeScript sisi klien (< 8ms).",
      actions: [
        { label: "📖 Baca di Perangkat", url: "blog-ideal-calculator", type: "article" },
        { label: "🧮 Buka Kalkulator", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: "📂 GitHub", url: "https://github.com/zAstergun/ideal-calculator", type: "link" },
      ],
      suggestions: ["Data IBGE apa yang digunakan?", "Lihat artikel Soul Fighter", "Lihat artikel StudioOS"],
    },
  },

  EDUCATION: {
    br: {
      text: "O Aster está no 6º semestre de Ciência da Computação na UniAmérica. Ele atua na liderança técnica da comunidade acadêmica: coordena repositórios de projetos de extensão, padroniza documentações e mentora outros estudantes.",
      suggestions: ["Quais são os projetos dele?", "Baixar Currículo", "Como entrar em contato?"],
    },
    pt: {
      text: "O Aster está no 6º semestre de Ciência da Computação na UniAmérica. Lidera a comunidade académica, coordenando projetos de extensão e mentoria.",
      suggestions: ["Quais são os projetos dele?", "Descarregar Currículo", "Como entrar em contacto?"],
    },
    en: {
      text: "Aster is in his 6th semester of Computer Science at UniAmérica. He leads the student developer community: coordinating extension project repos, standardizing documentation, and mentoring fellow peers.",
      suggestions: ["What are his projects?", "Download Resume", "Contact info"],
    },
    es: {
      text: "Aster cursa el 5º semestre de Ciencias de la Computación en UniAmérica, donde lidera la comunidad técnica coordinando proyectos de extensión y mentorías.",
      suggestions: ["¿Cuáles son sus proyectos?", "Descargar Currículum", "Contacto"],
    },
    fr: {
      text: "Aster est en 6e semestre d'informatique à UniAmérica. Il encadre la communauté étudiante, harmonise les documentations et accompagne ses pairs.",
      suggestions: ["Quels sont ses projets ?", "Télécharger le CV", "Contact"],
    },
    de: {
      text: "Aster studiert im 6. Semester Informatik an der UniAmérica und leitet die Studenten-Community zur Betreuung von Projekten und Dokumentationen.",
      suggestions: ["Welche Projekte hat er?", "Lebenslauf herunterladen", "Kontakt"],
    },
    it: {
      text: "Aster frequenta il 6º semestre di Informatica all'UniAmérica e guida la community studentesca nella gestione di progetti e documentazione.",
      suggestions: ["Quali sono i suoi progetti?", "Scarica il Curriculum", "Contatti"],
    },
    nl: {
      text: "Aster zit in het 6e semester van Informatica aan UniAmérica. Hij leidt de studentenontwikkelaars en coördineert universitaire projecten.",
      suggestions: ["Welke projecten heeft hij?", "Download CV", "Contact"],
    },
    ru: {
      text: "Aster учится на 6-м семестре Computer Science в UniAmérica и возглавляет академическое сообщество, координируя проекты и наставляя студентов.",
      suggestions: ["Какие проекты есть?", "Скачать резюме", "Контакты"],
    },
    ar: {
      text: "يدرس Aster في الفصل الخامس من علوم الحاسوب في UniAmérica، ويقود المجتمع التقني الأكاديمي لتنظيم المشاريع وإرشاد الطلاب.",
      suggestions: ["ما هي مشاريعه؟", "تحميل السيرة الذاتية", "معلومات التواصل"],
    },
    jp: {
      text: "AsterはUniAmérica大学でコンピュータサイエンスを専攻中（第6セメスター）。学生エンジニアコミュニティを率い、リポジトリ管理や後輩のメンターを担当しています。",
      suggestions: ["代表プロジェクトは？", "履歴書をダウンロード", "連絡方法を見る"],
    },
    cn: {
      text: "Aster 目前就读于 UniAmérica 计算机科学专业第 6 学期，积极主导技术社区建设，负责统筹实训项目仓库、制定代码规范并指导同行学生。",
      suggestions: ["他的代表项目？", "下载简历", "联系方式"],
    },
    kr: {
      text: "Aster는 UniAmérica 컴퓨터공학과 6학기에 재학 중이며, 학부 개발자 커뮤니티를 이끌며 프로젝트 표준화와 멘토링을 주도하고 있습니다.",
      suggestions: ["그의 프로젝트 보기", "이력서 다운로드", "연락처 보기"],
    },
    vn: {
      text: "Aster đang học kỳ 6 Khoa học Máy tính tại UniAmérica, đồng thời là trưởng nhóm cộng đồng sinh viên công nghệ hỗ trợ hướng dẫn và chuẩn hóa tài liệu.",
      suggestions: ["Các dự án của anh ấy?", "Tải sơ yếu lý lịch", "Thông tin liên hệ"],
    },
    id: {
      text: "Aster saat ini semester 6 Ilmu Komputer di UniAmérica, memimpin komunitas mahasiswa dalam standarisasi dokumentasi dan mentoring proyek.",
      suggestions: ["Apa saja proyeknya?", "Unduh Resume", "Kontak"],
    },
  },

  RESUME_CV: {
    br: {
      text: "Você pode conferir ou baixar o currículo completo do Aster nos formatos mais convenientes:\n\n• PDF (formatado para recrutadores)\n• DOCX (editável)\n• Markdown e JSON (estruturados)",
      actions: [
        { label: "Baixar PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Baixar DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Ver Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Qual é a stack técnica?", "Quais são os projetos?", "Como entrar em contato?"],
    },
    pt: {
      text: "Pode descarregar o currículo completo do Aster nos formatos mais convenientes:\n\n• PDF (otimizado para recrutadores)\n• DOCX (editável)\n• Markdown e JSON (estruturados)",
      actions: [
        { label: "Descarregar PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Descarregar DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Ver Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Qual é a stack técnica?", "Quais são os projetos?", "Como entrar em contacto?"],
    },
    en: {
      text: "You can download Aster's full resume in multiple formats:\n\n• PDF (tailored for recruiters)\n• DOCX (editable)\n• Markdown & JSON (structured data)",
      actions: [
        { label: "Download PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Download DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "View Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["What is his tech stack?", "What are his projects?", "Contact info"],
    },
    es: {
      text: "Puedes descargar el currículum completo de Aster en varios formatos:\n\n• PDF (formato profesional para reclutadores)\n• DOCX (editable)\n• Markdown y JSON",
      actions: [
        { label: "Descargar PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Descargar DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Ver Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["¿Cuál es su stack?", "¿Cuáles son sus proyectos?", "¿Cómo contactarlo?"],
    },
    fr: {
      text: "Vous pouvez télécharger le CV complet d'Aster dans le format de votre choix :\n\n• PDF (idéal pour les recruteurs)\n• DOCX (modifiable)\n• Markdown & JSON",
      actions: [
        { label: "Télécharger PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Télécharger DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Voir Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Quel est son stack ?", "Quels sont ses projets ?", "Comment le contacter ?"],
    },
    de: {
      text: "Du kannst Asters vollständigen Lebenslauf in verschiedenen Formaten herunterladen:\n\n• PDF (für Recruiter formatiert)\n• DOCX (bearbeitbar)\n• Markdown & JSON",
      actions: [
        { label: "PDF herunterladen 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "DOCX herunterladen 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Markdown anzeigen 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Welcher Tech-Stack?", "Welche Projekte gibt es?", "Kontakt aufnehmen"],
    },
    it: {
      text: "Puoi scaricare il curriculum completo di Aster in vari formati:\n\n• PDF (ottimizzato per i recruiter)\n• DOCX (modificabile)\n• Markdown e JSON",
      actions: [
        { label: "Scarica PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Scarica DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Vedi Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Qual è il suo stack?", "Quali sono i suoi progetti?", "Come contattarlo?"],
    },
    nl: {
      text: "Je kunt het volledige CV van Aster in verschillende formaten downloaden:\n\n• PDF (geoptimaliseerd voor recruiters)\n• DOCX (bewerkbaar)\n• Markdown & JSON",
      actions: [
        { label: "Download PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Download DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Bekijk Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Wat is zijn stack?", "Welke projecten zijn er?", "Contact opnemen"],
    },
    ru: {
      text: "Вы можете скачать полное резюме Aster в удобном формате:\n\n• PDF (для рекрутеров)\n• DOCX (редактируемый)\n• Markdown и JSON (структурированный)",
      actions: [
        { label: "Скачать PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Скачать DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Открыть Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Какой стек технологий?", "Какие есть проекты?", "Как связаться?"],
    },
    ar: {
      text: "يمكنك تحميل السيرة الذاتية الكاملة لـ Aster بعدة صيغ:\n\n• PDF (مخصصة لمسؤولي التوظيف)\n• DOCX (قابلة للتعديل)\n• Markdown و JSON (بيانات مهيكلة)",
      actions: [
        { label: "تحميل PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "تحميل DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "عرض Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["ما هو مكدسه التقني؟", "ما هي مشاريعه؟", "معلومات التواصل"],
    },
    jp: {
      text: "Asterの最新の履歴書（職務経歴書）を各種フォーマットでダウンロードできます:\n\n• PDF（採用担当者向けフォーマット）\n• DOCX（編集可能）\n• Markdown / JSON（構造化データ）",
      actions: [
        { label: "PDFをダウンロード 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "DOCXをダウンロード 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Markdownを見る 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["技術スタックは？", "プロジェクト一覧を見る", "連絡方法を見る"],
    },
    cn: {
      text: "您可以直接下载或在线查看 Aster 的完整个人简历：\n\n• PDF 格式（专为 HR 及技术主管排版）\n• DOCX 格式（可编辑）\n• Markdown 与 JSON 结构化数据",
      actions: [
        { label: "下载 PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "下载 DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "查看 Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["了解他的技术栈", "查看代表项目", "获取联系方式"],
    },
    kr: {
      text: "Aster의 공식 이력서를 다양한 포맷으로 다운로드할 수 있습니다:\n\n• PDF (채용 담당자 최적화)\n• DOCX (수정 가능)\n• Markdown & JSON (구조화 데이터)",
      actions: [
        { label: "PDF 다운로드 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "DOCX 다운로드 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Markdown 보기 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["기술 스택 확인", "프로젝트 목록 보기", "연락처 확인"],
    },
    vn: {
      text: "Bạn có thể tải xuống sơ yếu lý lịch đầy đủ của Aster ở các định dạng:\n\n• PDF (chuẩn cho nhà tuyển dụng)\n• DOCX (có thể chỉnh sửa)\n• Markdown & JSON",
      actions: [
        { label: "Tải xuống PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Tải xuống DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Xem Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Stack công nghệ là gì?", "Các dự án nổi bật?", "Cách thức liên hệ?"],
    },
    id: {
      text: "Anda dapat mengunduh resume lengkap Aster dalam berbagai format:\n\n• PDF (format profesional recruiter)\n• DOCX (dapat diedit)\n• Markdown & JSON",
      actions: [
        { label: "Unduh PDF 📄", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
        { label: "Unduh DOCX 📘", url: "/Currículo_Aster_Frontend.docx", type: "download" },
        { label: "Lihat Markdown 📄", url: "/Currículo_Aster_Frontend.md", type: "download" },
      ],
      suggestions: ["Apa tech stack-nya?", "Apa saja proyeknya?", "Info kontak"],
    },
  },

  CONTACT_SOCIAL: {
    br: {
      text: "Você pode se conectar com o Aster pelos seguintes canais oficiais:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Enviar Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Baixar Currículo", "Quais são os projetos?", "Quem é o Aster?"],
    },
    pt: {
      text: "Pode contactar o Aster através dos canais oficiais:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Enviar Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Descarregar Currículo", "Quais são os projetos?", "Quem é o Aster?"],
    },
    en: {
      text: "You can reach Aster through these official channels:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Send Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Download Resume", "What are his projects?", "Who is Aster?"],
    },
    es: {
      text: "Puedes comunicarte con Aster a través de sus canales oficiales:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Enviar Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Descargar Currículum", "¿Cuáles son sus proyectos?", "¿Quién es Aster?"],
    },
    fr: {
      text: "Vous pouvez contacter Aster via les canaux officiels suivants :\n\n• GitHub : github.com/zAstergun\n• Email : hello@asterdev.me",
      actions: [
        { label: "GitHub : zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Envoyer un e-mail ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Télécharger le CV", "Quels sont ses projets ?", "Qui est Aster ?"],
    },
    de: {
      text: "Du kannst Aster über folgende offizielle Kanäle erreichen:\n\n• GitHub: github.com/zAstergun\n• E-Mail: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "E-Mail senden ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Lebenslauf herunterladen", "Welche Projekte gibt es?", "Wer ist Aster?"],
    },
    it: {
      text: "Puoi contattare Aster attraverso i seguenti canali:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Invia Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Scarica il Curriculum", "Quali sono i suoi progetti?", "Chi è Aster?"],
    },
    nl: {
      text: "Je kunt contact opnemen met Aster via:\n\n• GitHub: github.com/zAstergun\n• E-mail: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Stuur E-mail ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Download CV", "Welke projecten zijn er?", "Wie is Aster?"],
    },
    ru: {
      text: "Вы можете связаться с Aster по следующим каналам:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Написать на Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Скачать резюме", "Какие есть проекты?", "Кто такой Aster?"],
    },
    ar: {
      text: "يمكنك التواصل مع Aster عبر القنوات الرسمية التالية:\n\n• GitHub: github.com/zAstergun\n• البريد الإلكتروني: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "إرسال بريد إلكتروني ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["تحميل السيرة الذاتية", "ما هي مشاريعه؟", "من هو Aster؟"],
    },
    jp: {
      text: "Asterへの公式連絡先一覧です:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "メールを送信 ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["履歴書をダウンロード", "プロジェクトを見る", "Asterとは誰ですか？"],
    },
    cn: {
      text: "您可以通过以下官方渠道与 Aster 取得联系：\n\n• GitHub: github.com/zAstergun\n• 电子邮箱: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "发送邮件 ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["下载简历", "查看代表项目", "Aster 是谁？"],
    },
    kr: {
      text: "Aster와 소통할 수 있는 공식 채널입니다:\n\n• GitHub: github.com/zAstergun\n• 이메일: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "이메일 보내기 ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["이력서 다운로드", "프로젝트 목록 보기", "Aster는 누구인가요?"],
    },
    vn: {
      text: "Bạn có thể liên hệ với Aster qua các kênh chính thức sau:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Gửi Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Tải sơ yếu lý lịch", "Các dự án nổi bật?", "Aster là ai?"],
    },
    id: {
      text: "Anda dapat menghubungi Aster melalui saluran resmi berikut:\n\n• GitHub: github.com/zAstergun\n• Email: hello@asterdev.me",
      actions: [
        { label: "GitHub: zAstergun ↗", url: "https://github.com/zAstergun" },
        { label: "Kirim Email ✉️", url: "mailto:hello@asterdev.me" },
      ],
      suggestions: ["Unduh Resume", "Apa saja proyeknya?", "Siapa Aster?"],
    },
  },

  REVERSE_ENGINEERING: {
    br: {
      text: "A porta de entrada do Aster para a programação não foi convencional: começou configurando servidores de jogos online e dissecando executáveis via engenharia reversa para criar cheats.\n\nEssa exploração prática o forçou a entender desde muito cedo como a memória da máquina opera, como pacotes e fluxos de dados são interceptados e como as estruturas funcionam em baixo nível. Hoje, ele canaliza essa mentalidade analítica para construir aplicações web extremamente performáticas e seguras.",
      suggestions: ["Qual a stack atual?", "Quais os projetos dele?", "Quem é o Aster?"],
    },
    pt: {
      text: "O Aster iniciou-se na programação de forma prática: configurando servidores de jogos e dissecando binários com engenharia reversa para criar cheats.\n\nIsto ensinou-lhe cedo como a memória opera e como interceptar fluxos de rede a baixo nível. Hoje canaliza essa curiosidade analítica para a engenharia de software web.",
      suggestions: ["Qual a stack atual?", "Quais os projetos dele?", "Quem é o Aster?"],
    },
    en: {
      text: "Aster's entry into programming was hands-on: he started by configuring online game servers and dissecting binaries through reverse engineering to develop cheats.\n\nThis early exploration taught him machine memory structures, packet inspection, and low-level system logic. Today, he channels that sharp analytical edge into creating performant, rock-solid web applications.",
      suggestions: ["What is his tech stack?", "Show projects", "Who is Aster?"],
    },
    es: {
      text: "Aster comenzó en la programación desarmando ejecutables con ingeniería inversa y configurando servidores de juegos para crear cheats.\n\nEsto le permitió comprender la gestión de memoria y paquetes de red en bajo nivel, aplicando hoy ese rigor a aplicaciones web seguras y rápidas.",
      suggestions: ["¿Cuál es su stack actual?", "Ver proyectos", "¿Quién es Aster?"],
    },
    fr: {
      text: "Aster a débuté la programmation en configurant des serveurs de jeux et en pratiquant la rétro-ingénierie pour concevoir des cheats.\n\nCela lui a appris dès le départ la gestion mémoire et l'inspection de paquets bas niveau, qu'il applique aujourd'hui au web haute performance.",
      suggestions: ["Quel est son stack ?", "Voir ses projets", "Qui est Aster ?"],
    },
    de: {
      text: "Aster kam durch Reverse Engineering und das Konfigurieren von Online-Game-Servern zum Programmieren.\n\nDadurch lernte er früh Speichermanagement und Low-Level-Logik, die er heute für performante Webarchitekturen nutzt.",
      suggestions: ["Aktueller Tech-Stack?", "Projekte ansehen", "Wer ist Aster?"],
    },
    it: {
      text: "Aster ha iniziato a programmare configurando server di gioco ed eseguendo reverse engineering per creare cheat.\n\nCiò gli ha insegnato la gestione della memoria e l'intercettazione dei dati a basso livello, competenze che oggi applica allo sviluppo web.",
      suggestions: ["Qual è lo stack attuale?", "Mostra i progetti", "Chi è Aster?"],
    },
    nl: {
      text: "Aster begon met programmeren via reverse engineering en het opzetten van game servers om cheats te maken.\n\nHierdoor begreep hij al vroeg geheugenbeheer en dataflows op laag niveau, wat nu ten goede komt aan zijn webontwikkeling.",
      suggestions: ["Wat is zijn stack?", "Projecten tonen", "Wie is Aster?"],
    },
    ru: {
      text: "Путь Aster в IT начался с реверс-инжиниринга и настройки игровых серверов для создания читов.\n\nЭто научило его низкоуровневой работе с памятью и сетевыми пакетами, что сегодня помогает создавать безопасный и быстрый веб.",
      suggestions: ["Какой стек сейчас?", "Показать проекты", "Кто такой Aster?"],
    },
    ar: {
      text: "كانت بداية Aster مع البرمجة عبر الهندسة العكسية وتكوين خوادم الألعاب لإنشاء cheats.\n\nمنحه ذلك فهماً عميقاً لكيفية عمل الذاكرة والشبكات منخفضة المستوى، ويوظف ذلك اليوم في هندسة تطبيقات الويب فائقة السرعة.",
      suggestions: ["ما هي التقنيات الحالية؟", "عرض المشاريع", "من هو Aster؟"],
    },
    jp: {
      text: "Asterのプログラミングの原点は、オンラインゲームサーバーの構築とチート開発のためのリバースエンジニアリングでした。\n\nこれにより機械語レベルのメモリ構造やパケット解析の基礎を早期に習得し、現在のセキュアで高速なWebアーキテクチャ開発に活かしています。",
      suggestions: ["現在の技術スタックは？", "プロジェクトを見る", "Asterとは誰ですか？"],
    },
    cn: {
      text: "Aster 的编程起源并非学院派理论，而是通过搭建游戏私服和逆向工程制作游戏作弊模块起步。\n\n这迫使他很早就透彻理解了底层内存分配、数据流拦截与低阶系统逻辑，如今他将这股分析力完全倾注于构建高性能 Web 应用中。",
      suggestions: ["现在的技术栈？", "查看他的项目", "Aster 是谁？"],
    },
    kr: {
      text: "Aster의 코딩 시작점은 게임 서버 구축과 치트 제작을 위한 리버스 엔지니어링이었습니다.\n\n이를 통해 머신 메모리 구조와 패킷 흐름을 로우레벨에서 체득했으며, 현재 고성능 웹 엔지니어링의 든든한 밑거름이 되었습니다.",
      suggestions: ["현재 기술 스택은?", "프로젝트 보기", "Aster는 누구인가요?"],
    },
    vn: {
      text: "Khởi đầu của Aster là nghiên cứu dịch ngược và cấu hình server game để viết cheat.\n\nKinh nghiệm này giúp anh hiểu sâu về bộ nhớ và luồng dữ liệu cấp thấp, phục vụ đắc lực cho việc xây dựng ứng dụng web bảo mật và tối ưu.",
      suggestions: ["Stack công nghệ hiện tại?", "Xem các dự án", "Aster là ai?"],
    },
    id: {
      text: "Awal mula Aster dalam coding berakar dari reverse engineering dan konfigurasi server game online untuk membuat cheat.\n\nIni memberinya pemahaman mendalam tentang alokasi memori mesin dan analisis paket data tingkat rendah.",
      suggestions: ["Apa stack saat ini?", "Tampilkan proyek", "Siapa Aster?"],
    },
  },

  IRONMAN_TRIATHLON: {
    br: {
      text: "Para além do código, o Aster aplica uma disciplina inegociável na vida real: treina com a meta de completar um triathlon Ironman (3.8 km de natação, 180 km de ciclismo e 42.2 km de corrida).\n\nEssa rotina de alta exigência reflete diretamente em sua atuação como engenheiro: consistência diária, foco em metas de longo prazo e resiliência.",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual a stack técnica?"],
    },
    pt: {
      text: "Fora do código, o Aster treina intensamente com a meta de completar um triathlon Ironman (3.8 km de natação, 180 km de ciclismo e 42.2 km de corrida).\n\nEssa disciplina traduz-se em resiliência e foco nos desafios técnicos de engenharia.",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual a stack técnica?"],
    },
    en: {
      text: "Beyond code, Aster maintains rigorous discipline: he is actively training to complete an Ironman triathlon (3.8 km swim, 180 km bike, 42.2 km marathon run).\n\nThis endurance mindset directly informs his work as an engineer: daily consistency, long-term focus, and grit when solving complex technical hurdles.",
      suggestions: ["Who is Aster?", "What are his projects?", "What is his tech stack?"],
    },
    es: {
      text: "Fuera de la pantalla, Aster entrena para completar un triatlón Ironman (3.8 km natación, 180 km ciclismo, 42.2 km carrera).\n\nEsta exigencia física alimenta su consistencia y resiliencia en la ingeniería de software.",
      suggestions: ["¿Quién es Aster?", "¿Cuáles son sus proyectos?", "¿Cuál es su stack?"],
    },
    fr: {
      text: "En dehors du code, Aster s'entraîne intensivement pour terminer un triathlon Ironman (3,8 km de natation, 180 km de vélo, 42,2 km de course à pied).\n\nCette discipline d'endurance forge sa rigueur technique et sa persévérance.",
      suggestions: ["Qui est Aster ?", "Quels sont ses projets ?", "Quel est son stack ?"],
    },
    de: {
      text: "Neben dem Coden trainiert Aster intensiv für die Vollendung eines Ironman-Triathlons (3,8 km Schwimmen, 180 km Radfahren, 42,2 km Marathon).\n\nDiese mentale Ausdauer spiegelt sich in seiner Beharrlichkeit bei komplexen Systemproblemen wider.",
      suggestions: ["Wer ist Aster?", "Welche Projekte gibt es?", "Welcher Tech-Stack?"],
    },
    it: {
      text: "Oltre al codice, Aster si allena duramente per completare un triathlon Ironman (3.8 km nuoto, 180 km bici, 42.2 km corsa).\n\nQuesto rigore fisico si traduce in costanza e resilienza nei progetti di ingegneria.",
      suggestions: ["Chi è Aster?", "Quali sono i suoi progetti?", "Qual è il suo stack?"],
    },
    nl: {
      text: "Buiten het programmeren traint Aster voor een volledige Ironman triathlon (3,8 km zwemmen, 180 km fietsen, 42,2 km hardlopen).\n\nDit uithoudingsvermogen weerspiegelt zijn toewijding aan complexe software-uitdagingen.",
      suggestions: ["Wie is Aster?", "Welke projecten zijn er?", "Wat is zijn stack?"],
    },
    ru: {
      text: "Помимо кода, Aster тренируется с целью преодолеть триатлон Ironman (3.8 км плавание, 180 км велосипед, 42.2 км марафонский бег).\n\nЭта спортивная выносливость напрямую переносится на решение сложных инженерных задач.",
      suggestions: ["Кто такой Aster?", "Какие есть проекты?", "Какой стек технологий?"],
    },
    ar: {
      text: "خارج شاشات الكود، يتدرب Aster بجد لإكمال سباق Ironman للترايثلون (3.8 كم سباحة، 180 كم دراجة، 42.2 كم جري).\n\nينعكس هذا الانضباط مباشرة على صبره ودقته في مواجهة التحديات الهندسية.",
      suggestions: ["من هو Aster؟", "ما هي مشاريعه؟", "المكدس التقني"],
    },
    jp: {
      text: "プログラミングにとどまらず、Asterはアイアンマン・トライアスロン（水泳3.8km、自転車180km、マラソン42.2km）の完走を目指して日々猛練習を重ねています。\n\nこの過酷な耐久トレーニングで培った精神的タフネスと継続性が、難解な技術課題への向き合い方に直結しています。",
      suggestions: ["Asterとは誰ですか？", "代表プロジェクトは？", "技術スタックは？"],
    },
    cn: {
      text: "在代码之外，Aster 在现实生活中坚持近乎严苛的自律：正全力备战 Ironman 铁人三项赛（3.8公里游泳、180公里骑行、42.2公里全马）。\n\n这种顶尖耐力运动铸就的毅力，直接转化为他在软件架构设计中面对复杂难题时的执着与沉稳。",
      suggestions: ["Aster 是谁？", "有哪些代表项目？", "技术栈是什么？"],
    },
    kr: {
      text: "모니터 밖에서 Aster는 아이언맨 철인 3종 경기(수영 3.8km, 사이클 180km, 마라톤 42.2km) 완주를 목표로 훈련하고 있습니다.\n\n이러한 지구력과 훈련 규율은 어려운 기술적 난제를 해결할 때 강력한 끈기로 이어집니다.",
      suggestions: ["Aster는 누구인가요?", "어떤 프로젝트가 있나요?", "기술 스택 확인"],
    },
    vn: {
      text: "Ngoài lập trình, Aster duy trì kỷ luật tập luyện nghiêm ngặt cho giải Ironman Triathlon (bơi 3.8km, đạp xe 180km, chạy bộ 42.2km).\n\nSự bền bỉ này rèn luyện tính kiên định và khả năng giải quyết các vấn đề kỹ thuật hóc búa.",
      suggestions: ["Aster là ai?", "Các dự án nổi bật?", "Stack công nghệ là gì?"],
    },
    id: {
      text: "Di luar dunia coding, Aster berlatih intensif untuk menyelesaikan triathlon Ironman (renang 3.8 km, sepeda 180 km, lari 42.2 km).\n\nKetahanan mental dan fisik ini tercermin langsung dalam kegigihannya menyelesaikan masalah rekayasa perangkat lunak.",
      suggestions: ["Siapa Aster?", "Apa saja proyeknya?", "Apa tech stack-nya?"],
    },
  },

  BOT_CAPABILITIES: {
    br: {
      text: "Eu sou um assistente conversacional movido por um Classificador de Intenções Heurístico direto no seu navegador. Você pode me perguntar sobre:\n\n1. Trajetória e perfil do Aster (origem na engenharia reversa, Ironman, estudos)\n2. Projetos (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Stack tecnológica e ferramentas\n4. Faculdade UniAmérica e liderança de comunidade\n5. Currículo e formas de contato",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual é a sua stack?", "Como funciona o classificador?"],
    },
    pt: {
      text: "Eu sou um assistente conversacional movido por um Classificador de Intenções Heurístico no navegador. Pode perguntar-me sobre:\n\n1. Trajetória e perfil do Aster (engenharia reversa, Ironman, estudos)\n2. Projetos (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Stack tecnológica e ferramentas\n4. Universidade UniAmérica e comunidade académica\n5. Currículo e contactos",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual é a sua stack?", "Como funciona o classificador?"],
    },
    en: {
      text: "I am a client-side conversational assistant powered by a Heuristic Intent Classifier. You can ask me about:\n\n1. Aster's background (reverse engineering origins, Ironman, studies)\n2. Projects (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Tech stack and tooling\n4. College & community leadership\n5. Resume and contact channels",
      suggestions: ["Who is Aster?", "What are his projects?", "What is his tech stack?", "How does the classifier work?"],
    },
    es: {
      text: "Soy un asistente conversacional con un Clasificador de Intenciones Heurístico en el navegador. Puedes preguntarme sobre:\n\n1. Trayectoria de Aster (ingeniería inversa, Ironman, estudios)\n2. Proyectos (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Stack tecnológico\n4. Universidad UniAmérica y liderazgo\n5. Currículum y contacto",
      suggestions: ["¿Quién es Aster?", "¿Cuáles son sus proyectos?", "¿Cuál es su stack?", "¿Cómo funciona el bot?"],
    },
    fr: {
      text: "Je suis un assistant conversationnel propulsé par un classificateur d'intentions heuristique directement dans le navigateur. Vous pouvez me questionner sur :\n\n1. Le parcours d'Aster (rétro-ingénierie, Ironman, études)\n2. Ses projets (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Sa pile technique\n4. Son rôle à UniAmérica\n5. Son CV et ses contacts",
      suggestions: ["Qui est Aster ?", "Quels sont ses projets ?", "Quel est son stack ?", "Comment marche le bot ?"],
    },
    de: {
      text: "Ich bin ein browserbasierter Konversationsassistent mit einem heuristischen Absichtsklassifikator. Du kannst mich fragen zu:\n\n1. Asters Werdegang (Reverse Engineering, Ironman, Studium)\n2. Projekten (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Tech-Stack und Tools\n4. UniAmérica und Community\n5. Lebenslauf und Kontaktdaten",
      suggestions: ["Wer ist Aster?", "Welche Projekte gibt es?", "Welcher Tech-Stack?", "Wie funktioniert der Klassifikator?"],
    },
    it: {
      text: "Sono un assistente conversazionale animato da un classificatore euristico nel browser. Puoi chiedermi di:\n\n1. Percorso di Aster (reverse engineering, Ironman, studi)\n2. Progetti (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Stack tecnologico\n4. Università e leadership studentesca\n5. Curriculum e contatti",
      suggestions: ["Chi è Aster?", "Quali sono i suoi progetti?", "Qual è il suo stack?", "Come funziona il bot?"],
    },
    nl: {
      text: "Ik ben een browser-assistent aangedreven door een heuristische intentieclassificator. Je kunt me vragen stellen over:\n\n1. Asters achtergrond (reverse engineering, Ironman, studie)\n2. Projecten (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Tech-stack en tools\n4. UniAmérica en leiderschap\n5. CV en contactgegevens",
      suggestions: ["Wie is Aster?", "Welke projecten zijn er?", "Wat is zijn stack?", "Hoe werkt de bot?"],
    },
    ru: {
      text: "Я диалоговый ассистент, работающий на эвристическом классификаторе намерений прямо в вашем браузере. Вы можете спросить меня о:\n\n1. Биографии Aster (реверс-инжиниринг, Ironman, учеба)\n2. Проектах (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Технологическом стеке\n4. Университете и сообществе\n5. Резюме и контактах",
      suggestions: ["Кто такой Aster?", "Какие есть проекты?", "Какой стек технологий?", "Как устроен классификатор?"],
    },
    ar: {
      text: "أنا مساعد محادثة يعمل بمصنف نوايا ارتقائي داخل المتصفح مباشرة. يمكنك سؤالي عن:\n\n1. مسيرة Aster (الهندسة العكسية، ترايثلون Ironman، دراسته)\n2. مشاريعه (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. مكدسه التقني وأدواته\n4. جامعته وقيادته الطلابية\n5. سيرته الذاتية وطرق التواصل",
      suggestions: ["من هو Aster؟", "ما هي مشاريعه؟", "ما هو مكدسه التقني؟", "كيف يعمل المصنف؟"],
    },
    jp: {
      text: "私はブラウザ上で100%動作するヒューリスティック意図分類器を搭載したアシスタントです。以下の内容について質問いただけます:\n\n1. Asterの経歴（リバースエンジニアリング、アイアンマン、学業）\n2. 代表プロジェクト（Ideal Calc、Soul Fighter、PEX Wiki、Mobile Demo）\n3. 技術スタックと開発ツール\n4. UniAmérica大学でのコミュニティリーダーシップ\n5. 履歴書のダウンロードと連絡先",
      suggestions: ["Asterとは誰ですか？", "どんなプロジェクトがありますか？", "技術スタックは？", "分類器の仕組みは？"],
    },
    cn: {
      text: "我是一款完全在浏览器客户端运行的启发式意图分类对话助手。您可以随时询问我以下方面：\n\n1. Aster 的个人履历（逆向工程起步、铁三训练、大学学业）\n2. 代表项目（Ideal Calc、Soul Fighter、PEX Wiki、Mobile Demo）\n3. 核心技术栈与开发工具\n4. UniAmérica 计算机系社群建设\n5. 简历下载与联系方式",
      suggestions: ["Aster 是谁？", "有哪些代表项目？", "他的技术栈是什么？", "分类器如何运作？"],
    },
    kr: {
      text: "저는 브라우저에서 구동되는 휴리스틱 의도 분류 기반 어시스턴트입니다. 다음 주제에 대해 질문해 보세요:\n\n1. Aster의 배경 (리버스 엔지니어링, 아이언맨, 학업)\n2. 프로젝트 (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. 기술 스택 및 개발 도구\n4. 대학 커뮤니티 리더십\n5. 이력서 및 연락 방법",
      suggestions: ["Aster는 누구인가요?", "어떤 프로젝트가 있나요?", "기술 스택은 무엇인가요?", "분류기 작동 원리는?"],
    },
    vn: {
      text: "Tôi là trợ lý đối thoại sử dụng Bộ phân loại ý định Heuristic chạy trực tiếp trên trình duyệt. Bạn có thể hỏi tôi về:\n\n1. Quá trình phát triển của Aster (kỹ thuật dịch ngược, Ironman, học tập)\n2. Các dự án (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Stack công nghệ và công cụ\n4. Hoạt động tại trường đại học UniAmérica\n5. CV và cách liên hệ",
      suggestions: ["Aster là ai?", "Các dự án nổi bật?", "Stack công nghệ là gì?", "Cơ chế phân loại ra sao?"],
    },
    id: {
      text: "Saya adalah asisten percakapan dengan Pengklasifikasi Niat Heuristik langsung di peramban Anda. Anda dapat bertanya tentang:\n\n1. Perjalanan Aster (reverse engineering, Ironman, studi)\n2. Proyek (Ideal Calc, Soul Fighter, PEX Wiki, Mobile Demo)\n3. Tech stack dan alat kerja\n4. Kampus UniAmérica dan kepemimpinan komunitas\n5. Resume dan info kontak",
      suggestions: ["Siapa Aster?", "Apa saja proyeknya?", "Apa tech stack-nya?", "Cara kerja bot?"],
    },
  },

  HOW_CLASSIFIER_WORKS: {
    br: {
      text: "Eu não dependo de chamadas para APIs externas ou servidores pesados! Fui construído com um Classificador de Intenções Heurístico em TypeScript puro executado 100% no cliente:\n\n1. 🔤 Normalização: Remoção de diacríticos/acentos, case folding e limpeza de pontuação.\n2. 🧩 Extração de N-Grams: Geração de uni-grams, bi-grams e tri-grams da frase.\n3. ⚖️ Matriz de Pesos: Combinação de padrões regex ponderados com palavras-chave de alta relevância e termos negativos de desambiguação.\n4. 🎯 Score e Confiança: Seleção determinística da melhor intenção com resposta instantânea (<1ms).",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual a stack técnica?"],
    },
    pt: {
      text: "Eu não dependo de APIs externas! Fui concebido com um Classificador de Intenções Heurístico em TypeScript executado 100% no navegador:\n\n1. 🔤 Normalização: Remoção de acentos e pontuação.\n2. 🧩 N-Grams: Unigramas, bigramas e trigramas.\n3. ⚖️ Matriz de Pesos: Padrões regex ponderados e termos de exclusão.\n4. 🎯 Score: Seleção determinística da resposta em <1ms.",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual a stack técnica?"],
    },
    en: {
      text: "I do not rely on remote external APIs or heavy servers! I was built with a pure TypeScript Heuristic Intent Classifier running 100% in your browser:\n\n1. 🔤 Normalization: Diacritics stripping, lowercasing, and punctuation cleanup.\n2. 🧩 N-Gram Extraction: Tokenization into unigrams, bigrams, and trigrams.\n3. ⚖️ Weight Matrix: Combining weighted regex patterns, domain keywords, and negative exclusion terms.\n4. 🎯 Deterministic Scoring: Selecting the best intent in <1ms latency.",
      suggestions: ["Who is Aster?", "What are his projects?", "What is his tech stack?"],
    },
    es: {
      text: "¡No dependo de APIs externas de pago! Estoy programado con un Clasificador de Intenciones Heurístico en TypeScript ejecutado 100% en tu navegador:\n\n1. 🔤 Normalización: Eliminación de tildes y limpieza de texto.\n2. 🧩 N-Gramas: Extracción de unigramas, bigramas y trigramas.\n3. ⚖️ Matriz Ponderada: Regex, palabras clave y exclusión negativa.\n4. 🎯 Puntuación: Clasificación determinista en <1ms.",
      suggestions: ["¿Quién es Aster?", "¿Cuáles son sus proyectos?", "¿Cuál es su stack?"],
    },
    fr: {
      text: "Je ne dépends d'aucune API externe distante ! Je fonctionne grâce à un classificateur d'intentions heuristique en TypeScript exécuté à 100% dans le navigateur :\n\n1. 🔤 Normalisation : Nettoyage des accents et ponctuations.\n2. 🧩 N-Grammes : Unigrammes, bigrammes et trigrammes.\n3. ⚖️ Matrice de poids : Regex, mots-clés pondérés et termes négatifs.\n4. 🎯 Score déterministe en moins de 1ms.",
      suggestions: ["Qui est Aster ?", "Quels sont ses projets ?", "Quel est son stack ?"],
    },
    de: {
      text: "Ich benötige keine externen LLM-APIs! Ich laufe über einen heuristischen Intent-Klassifikator in reinem TypeScript direkt im Browser:\n\n1. 🔤 Normalisierung: Entfernung von Umlauten und Sonderzeichen.\n2. 🧩 N-Gramme: Uni-, Bi- und Trigramme.\n3. ⚖️ Gewichtungsmatrix: Regex-Muster und Ausschlussbegriffe.\n4. 🎯 Deterministische Entscheidung in unter 1ms.",
      suggestions: ["Wer ist Aster?", "Welche Projekte gibt es?", "Welcher Tech-Stack?"],
    },
    it: {
      text: "Non dipendo da API esterne a pagamento! Funziono tramite un classificatore euristico di intenti in puro TypeScript nel browser:\n\n1. 🔤 Normalizzazione: Rimozione di accenti e punteggiatura.\n2. 🧩 N-Grammi: Tokenizzazione avanzata.\n3. ⚖️ Matrice di pesi: Regex ponderate e parole chiave.\n4. 🎯 Risposta deterministica istantanea (<1ms).",
      suggestions: ["Chi è Aster?", "Quali sono i suoi progetti?", "Qual è il suo stack?"],
    },
    nl: {
      text: "Ik ben niet afhankelijk van externe API's! Ik draai via een heuristische intentieclassificator in puur TypeScript rechtstreeks in je browser:\n\n1. 🔤 Normalisatie: Verwijderen van accenten en leestekens.\n2. 🧩 N-Gram extractie: Woordcombinaties.\n3. ⚖️ Wegingsmatrix: Regex en trefwoorden.\n4. 🎯 Deterministische score in <1ms.",
      suggestions: ["Wie is Aster?", "Welke projecten zijn er?", "Wat is zijn stack?"],
    },
    ru: {
      text: "Я не требую вызовов сторонних нейросетевых API! Мой движок — это эвристический классификатор намерений на чистом TypeScript в браузере:\n\n1. 🔤 Нормализация: Очистка диакритики и пунктуации.\n2. 🧩 Извлечение N-грамм: Однословные и многословные токены.\n3. ⚖️ Матрица весов: Регулярные выражения и взвешенные ключи.\n4. 🎯 Скоринг: Мгновенный ответ (<1 мс).",
      suggestions: ["Кто такой Aster?", "Какие есть проекты?", "Какой стек технологий?"],
    },
    ar: {
      text: "لا أعتمد على أي واجهات برمجية خارجية أو خوادم بعيدة! أعمل بمصنف نوايا ارتقائي مكتوب بـ TypeScript داخل متصفحك مباشرة:\n\n1. 🔤 توحيد النص: إزالة التشكيل وعلامات الترقيم.\n2. 🧩 استخراج الـ N-Grams: كلمات أحادية وثنائية وثلاثية.\n3. ⚖️ مصفوفة الأوزان: مطابقة الأنماط والكلمات المفتاحية.\n4. 🎯 الاستجابة الفورية في أقل من 1 مللي ثانية.",
      suggestions: ["من هو Aster؟", "ما هي مشاريعه؟", "المكدس التقني"],
    },
    jp: {
      text: "外部の有料AI APIに依存せず、純粋なTypeScriptによるヒューリスティック意図分類器としてブラウザ上で100%完結して動作します:\n\n1. 🔤 テキスト正規化（記号除去・小文字化）\n2. 🧩 N-gram抽出（単語および文字の複合トークン化）\n3. ⚖️ 重み付けマトリクス（正規表現と除外ワードの評価）\n4. 🎯 1ミリ秒未満での決定論的スコアリングと即時応答",
      suggestions: ["Asterとは誰ですか？", "代表プロジェクトは？", "技術スタックは？"],
    },
    cn: {
      text: "我无需依赖任何付费外部大模型 API！我完全基于浏览器端运行的原生 TypeScript 启发式意图分类引擎构建：\n\n1. 🔤 文本归一化：去除特殊符号、大小写折叠\n2. 🧩 N-Gram 提取：同时分析单字、词组及短语\n3. ⚖️ 权重矩阵匹配：结合正则模式与负向排除词\n4. 🎯 确定性评分计算：在 1 毫秒内极速给出响应",
      suggestions: ["Aster 是谁？", "有哪些代表项目？", "技术栈是什么？"],
    },
    kr: {
      text: "저는 외부 유료 LLM API에 의존하지 않고, 브라우저에서 100% 실행되는 TypeScript 휴리스틱 의도 분류 엔진으로 작동합니다:\n\n1. 🔤 텍스트 정규화: 특수문자 및 기호 정리\n2. 🧩 N-Gram 추출: 단어 및 구문 단위 토큰화\n3. ⚖️ 가중치 매트릭스: 정규식 패턴 및 제외 키워드 판별\n4. 🎯 1ms 미만의 지연 시간으로 즉각 응답 도출",
      suggestions: ["Aster는 누구인가요?", "어떤 프로젝트가 있나요?", "기술 스택 확인"],
    },
    vn: {
      text: "Tôi không phụ thuộc vào bất kỳ API bên ngoài nào! Hệ thống hoạt động dựa trên Bộ phân loại ý định Heuristic bằng TypeScript thuần trong trình duyệt:\n\n1. 🔤 Chuẩn hóa văn bản: Loại bỏ ký tự đặc biệt.\n2. 🧩 Trích xuất N-Gram: Xử lý từ đơn và cụm từ.\n3. ⚖️ Ma trận trọng số: Kết hợp Regex và từ khóa.\n4. 🎯 Tính điểm xác định trong <1ms.",
      suggestions: ["Aster là ai?", "Các dự án nổi bật?", "Stack công nghệ là gì?"],
    },
    id: {
      text: "Saya tidak bergantung pada API eksternal! Saya bekerja menggunakan Pengklasifikasi Niat Heuristik dalam TypeScript murni di peramban Anda:\n\n1. 🔤 Normalisasi teks dan tanda baca.\n2. 🧩 Ekstraksi N-Gram unigram dan bigram.\n3. ⚖️ Matriks pembobotan regex dan kata kunci.\n4. 🎯 Penentuan skor instan (<1ms).",
      suggestions: ["Siapa Aster?", "Apa saja proyeknya?", "Apa tech stack-nya?"],
    },
  },

  FAREWELL: {
    br: {
      text: "Valeu por passar por aqui! Se precisar tirar mais dúvidas sobre o Aster ou os projetos, é só mandar mensagem. Até mais! 🚀",
      suggestions: ["Ver projetos", "Baixar Currículo", "Como entrar em contato?"],
    },
    pt: {
      text: "Obrigado pela visita! Se precisar de esclarecer mais dúvidas sobre o Aster ou os projetos, basta enviar mensagem. Até breve! 🚀",
      suggestions: ["Ver projetos", "Descarregar Currículo", "Como entrar em contacto?"],
    },
    en: {
      text: "Thanks for stopping by! If you need any more info about Aster or his work, just message here. See you around! 🚀",
      suggestions: ["Show projects", "Download Resume", "Contact info"],
    },
    es: {
      text: "¡Gracias por pasar por aquí! Si tienes más dudas sobre Aster o sus proyectos, solo escribe. ¡Hasta luego! 🚀",
      suggestions: ["Ver proyectos", "Descargar Currículum", "Contacto"],
    },
    fr: {
      text: "Merci pour votre visite ! Si vous avez d'autres questions sur Aster ou ses projets, n'hésitez pas. À bientôt ! 🚀",
      suggestions: ["Voir les projets", "Télécharger le CV", "Contact"],
    },
    de: {
      text: "Danke für deinen Besuch! Wenn du noch Fragen zu Aster oder seinen Projekten hast, melde dich einfach. Bis bald! 🚀",
      suggestions: ["Projekte ansehen", "Lebenslauf herunterladen", "Kontakt"],
    },
    it: {
      text: "Grazie per la visita! Se hai altre domande su Aster o sui suoi progetti, scrivimi pure. A presto! 🚀",
      suggestions: ["Mostra progetti", "Scarica il Curriculum", "Contatti"],
    },
    nl: {
      text: "Bedankt voor je bezoek! Als je meer wilt weten over Aster of zijn projecten, stuur gerust een berichtje. Tot ziens! 🚀",
      suggestions: ["Projecten bekijken", "Download CV", "Contact"],
    },
    ru: {
      text: "Спасибо за визит! Если появятся новые вопросы об Aster или его проектах — пишите в любое время. До скорого! 🚀",
      suggestions: ["Показать проекты", "Скачать резюме", "Контакты"],
    },
    ar: {
      text: "شكراً لزيارتك! إذا كانت لديك أي أسئلة أخرى عن Aster أو مشاريعه، يمكنك مراسلتي في أي وقت. إلى اللقاء! 🚀",
      suggestions: ["عرض المشاريع", "تحميل السيرة الذاتية", "معلومات التواصل"],
    },
    jp: {
      text: "ご覧いただきありがとうございました！Asterやプロジェクトについて気になることがあれば、いつでも気軽に話しかけてくださいね。また会いましょう！ 🚀",
      suggestions: ["プロジェクト一覧", "履歴書をダウンロード", "連絡先を見る"],
    },
    cn: {
      text: "感谢你的来访！如果你对 Aster 或他的作品还有其他好奇的地方，随时发消息给我。下次见！ 🚀",
      suggestions: ["查看项目", "下载简历", "联系方式"],
    },
    kr: {
      text: "방문해 주셔서 감사합니다! Aster나 그의 작업에 대해 궁금한 점이 있다면 언제든 편하게 물어보세요. 또 만나요! 🚀",
      suggestions: ["프로젝트 보기", "이력서 다운로드", "연락처 확인"],
    },
    vn: {
      text: "Cảm ơn bạn đã ghé thăm! Nếu bạn cần thêm thông tin về Aster hoặc các dự án, cứ nhắn tin bất kỳ lúc nào nhé. Hẹn gặp lại! 🚀",
      suggestions: ["Xem các dự án", "Tải sơ yếu lý lịch", "Thông tin liên hệ"],
    },
    id: {
      text: "Terima kasih sudah berkunjung! Jika ada pertanyaan lain seputar Aster atau proyeknya, jangan ragu untuk bertanya lagi. Sampai jumpa! 🚀",
      suggestions: ["Lihat proyek", "Unduh Resume", "Info kontak"],
    },
  },

  FALLBACK: {
    br: {
      text: "Não consegui identificar com certeza o que você quis dizer, mas posso responder tudo sobre o Aster e os projetos dele! Tente escolher uma das opções abaixo ou formule a pergunta com outras palavras:",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual é a sua stack?", "Como entrar em contato?", "Baixar Currículo"],
    },
    pt: {
      text: "Não consegui identificar com certeza a sua mensagem, mas posso esclarecer tudo sobre o Aster e os seus projetos! Escolha uma das opções abaixo ou formule de outra forma:",
      suggestions: ["Quem é o Aster?", "Quais são os projetos?", "Qual é a sua stack?", "Como entrar em contacto?", "Descarregar Currículo"],
    },
    en: {
      text: "I couldn't quite match that with confidence, but I can answer everything about Aster and his work! Pick one of the topics below or ask with different words:",
      suggestions: ["Who is Aster?", "What are his projects?", "What is his tech stack?", "How to contact him?", "Download Resume"],
    },
    es: {
      text: "No entendí con certeza lo que quisiste decir, pero puedo responder sobre Aster y sus proyectos. Prueba una opción abajo o escribe con otras palabras:",
      suggestions: ["¿Quién es Aster?", "¿Cuáles son sus proyectos?", "¿Cuál es su stack?", "¿Cómo contactarlo?", "Descargar Currículum"],
    },
    fr: {
      text: "Je n'ai pas pu identifier votre demande avec certitude, mais je peux tout vous dire sur Aster et ses projets ! Choisissez une option ci-dessous :",
      suggestions: ["Qui est Aster ?", "Quels sont ses projets ?", "Quel est son stack ?", "Comment le contacter ?", "Télécharger le CV"],
    },
    de: {
      text: "Ich konnte das leider nicht eindeutig zuordnen. Aber ich kann dir alles über Aster und seine Projekte erzählen! Wähle eine Option:",
      suggestions: ["Wer ist Aster?", "Welche Projekte gibt es?", "Welcher Tech-Stack?", "Kontakt aufnehmen", "Lebenslauf herunterladen"],
    },
    it: {
      text: "Non sono riuscito a capire con certezza, ma posso spiegarti tutto su Aster e sui suoi progetti! Seleziona un'opzione qui sotto:",
      suggestions: ["Chi è Aster?", "Quali sono i suoi progetti?", "Qual è il suo stack?", "Come contattarlo?", "Scarica il Curriculum"],
    },
    nl: {
      text: "Ik begreep dat niet helemaal, maar ik kan je alles vertellen over Aster en zijn projecten! Kies een van de suggesties hieronder:",
      suggestions: ["Wie is Aster?", "Welke projecten zijn er?", "Wat is zijn stack?", "Hoe contact opnemen?", "Download CV"],
    },
    ru: {
      text: "Я не совсем уверен, что правильно вас понял, но могу рассказать всё об Aster и его проектах! Выберите вариант ниже или переформулируйте вопрос:",
      suggestions: ["Кто такой Aster?", "Какие есть проекты?", "Какой стек технологий?", "Как связаться?", "Скачать резюме"],
    },
    ar: {
      text: "لم أتمكن من مطابقة سؤالك بدقة، لكن يمكنني الإجابة عن كل ما يتعلق بـ Aster ومشاريعه! اختر أحد الموضوعات أدناه أو اسأل بصيغة أخرى:",
      suggestions: ["من هو Aster؟", "ما هي مشاريعه؟", "ما هو مكدسه التقني؟", "كيفية التواصل معه؟", "تحميل السيرة الذاتية"],
    },
    jp: {
      text: "意図を正確に判別できませんでしたが、Asterや彼のプロジェクトについて何でもお答えできます！以下の項目から選ぶか、別の言葉でお試しください:",
      suggestions: ["Asterとは誰ですか？", "どんなプロジェクトがありますか？", "技術スタックは？", "連絡方法は？", "履歴書をダウンロード"],
    },
    cn: {
      text: "未能完全理解您的问题，但我对 Aster 的个人经历与项目了如指掌！您可以点击下方推荐问题，或换个问法试一试：",
      suggestions: ["Aster 是谁？", "有哪些代表项目？", "他的技术栈是什么？", "如何联系他？", "下载简历"],
    },
    kr: {
      text: "질문의 의도를 정확히 파악하지 못했지만, Aster와 그의 프로젝트에 대해 모두 답변할 수 있습니다! 아래 추천 질문을 선택해보세요:",
      suggestions: ["Aster는 누구인가요?", "어떤 프로젝트가 있나요?", "기술 스택은 무엇인가요?", "연락 방법은?", "이력서 다운로드"],
    },
    vn: {
      text: "Tôi chưa xác định chắc chắn câu hỏi của bạn, nhưng tôi có thể giải đáp mọi điều về Aster và các dự án của anh ấy! Hãy chọn một gợi ý dưới đây:",
      suggestions: ["Aster là ai?", "Các dự án nổi bật?", "Stack công nghệ là gì?", "Cách thức liên hệ?", "Tải sơ yếu lý lịch"],
    },
    id: {
      text: "Saya belum bisa memastikan maksud pertanyaan Anda, tetapi saya bisa menjawab seputar Aster dan proyeknya! Pilih opsi berikut:",
      suggestions: ["Siapa Aster?", "Apa saja proyeknya?", "Apa tech stack-nya?", "Cara menghubunginya?", "Unduh Resume"],
    },
  },
};
