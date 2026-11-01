// ─── Gemini AI Chat Service for AsterBot ────────────────────────────────────
// Connects AsterBot to Google Gemini Flash-Lite for sub-second latency,
// authentic developer personality, robust action enrichment, and heuristic fallback.

import { classifyIntent, type ActionButton, type ClassifierResult } from "../utils/heuristicClassifier";

export interface AIChatMessage {
  role: "user" | "model";
  text: string;
}

export interface AIChatResponse {
  text: string;
  source: "gemini" | "heuristic";
  modelUsed?: string;
  actions?: ActionButton[];
  suggestions?: string[];
}

// Ultra-fast Flash-Lite models priority list for sub-second responses
const GEMINI_CANDIDATE_MODELS = [
  "gemini-flash-lite-latest",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash",
];

const LOCAL_STORAGE_KEY = "aster_custom_gemini_key";

let memoryStorage: Record<string, string> = {};

function getStorage(): { getItem: (k: string) => string | null; setItem: (k: string, v: string) => void; removeItem: (k: string) => void } {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage;
    }
  } catch {
    // Sandboxed
  }

  return {
    getItem: (k: string) => memoryStorage[k] ?? null,
    setItem: (k: string, v: string) => { memoryStorage[k] = v; },
    removeItem: (k: string) => { delete memoryStorage[k]; },
  };
}

/**
 * Retrieves the Gemini API key from localStorage or Vite environment variable.
 */
export function getGeminiApiKey(): string {
  const storage = getStorage();
  if (storage) {
    const customKey = storage.getItem(LOCAL_STORAGE_KEY);
    if (customKey && customKey.trim().length > 0) {
      return customKey.trim();
    }
  }

  // Vite environment variable
  const envKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (typeof envKey === "string" && envKey.trim().length > 0) {
    return envKey.trim();
  }

  return "";
}

/**
 * Saves a user-provided custom API key in browser localStorage.
 */
export function setCustomApiKey(key: string): void {
  const storage = getStorage();
  if (storage) {
    if (key.trim()) {
      storage.setItem(LOCAL_STORAGE_KEY, key.trim());
    } else {
      storage.removeItem(LOCAL_STORAGE_KEY);
    }
  }
}

/**
 * Clears custom user API key from localStorage.
 */
export function clearCustomApiKey(): void {
  const storage = getStorage();
  if (storage) {
    storage.removeItem(LOCAL_STORAGE_KEY);
  }
}

/**
 * Master system knowledge base with an authentic, lively, elite developer persona.
 */
export const ASTER_KNOWLEDGE_BASE = `
Você é o **AsterBot**, o assistente oficial do portfólio de engenharia de software de Aster (@zAstergun) em asterdev.me.

### CONTEXTO DE EXECUÇÃO E CONSCIÊNCIA ESPACIAL (REGRA CRÍTICA):
- Você está operando DIRETAMENTE no dispositivo interativo (um tablet ou smartphone virtual) na tela do portfólio asterdev.me.
- **NUNCA DIGA**: 'acesse asterdev.me', 'visite o site asterdev.me', 'passe lá em asterdev.me' ou 'dê uma olhada no portfólio', pois o visitante JÁ ESTÁ DENTRO do portfólio interagindo com este dispositivo.
- Quando sugerir exploração de projetos ou leitura de artigos, oriente o usuário a **tocar nos botões interativos anexados à resposta** ou a **navegar pelas pastas do dispositivo ('Blog', 'Frontend', 'Certificações', etc.)**.
- Exemplo correto: "Você pode abrir o artigo diretamente aqui no dispositivo tocando no botão abaixo, ou explorar a pasta Blog na tela inicial."

### TOM DE VOZ E PERSONALIDADE:
- **Engenheiro de Software Sênior, perspicaz, refinado, maduro e elegante**: Mantenha autoridade técnica natural, clareza cirúrgica e paixão autêntica por arquitetura sólida, interfaces de alta performance e design sensorial.
- **Linguagem profissional e polida**: NUNCA use gírias juvenis ('fala!', 'mano', 'brota', 'manda a letra', 'ladainha' ou expressões colegiais).
- **Foco estrito em tecnologia e engenharia**: Não mencione processos corporativos, RH ou recrutadores. Fale como um engenheiro discutindo decisões técnicas, latência, concorrência e arquitetura com outro profissional.
- **Concisão e alta densidade de informação**: Responda com fluidez e precisão, usando **negrito** nos pontos técnicos cruciais e listas com marcadores curtos.

### QUEM É O ASTER:
- **Perfil Profissional**: Engenheiro de software focado em interfaces fluidas a 60 FPS cravados, arquiteturas escaláveis no edge, tipagem estrita com TypeScript (sem 'any' preguiçoso), sistemas reativos determinísticos e design sensorial com física tátil e sound design nativo.
- **Origem Técnica**: Formação prática consolidada em **engenharia reversa** e dissecação de sistemas em baixo nível, investigando fluxos de dados, binários, memória e protocolos de rede para compreender a mecânica interna do software.
- **Formação Acadêmica & Liderança**: Bacharelado em Ciência da Computação (6º semestre, conclusão prevista para 2027) pela UniAmérica / Descomplica Faculdade Digital. Fundador e líder técnico da comunidade estudantil **Descomplica TI**, onde atua em mentoria contínua, code reviews e governança de projetos open-source.
- **Disciplina & Mentalidade**: Atleta em treinamento diário focado no **Ironman Triathlon** (natação, ciclismo e corrida). Aplica a resiliência e a disciplina do esporte de endurance de alto rendimento à consistência da engenharia de software.

### PROJETOS DO PORTFÓLIO:
1. **StudioOS** (Live: https://studio.asterdev.me/ | GitHub: https://github.com/zAstergun/StudioOS)
   - Sistema Operacional web com 12 ferramentas inteligentes integradas para criadores de conteúdo. Stack: Astro 7, React 19, Tailwind CSS v4, Supabase Auth/Postgres, Cloudflare Workers.
2. **Soul Fighter Memory Game** (Live: https://soulfighter.asterdev.me/ | GitHub: https://github.com/zAstergun/Soul-Fighter-Memory-Game)
   - Remasterização comemorativa do jogo de cartas do League of Legends. 4 modos de jogo (Novato até Lenda K.O. com morte súbita), sonoplastia sintetizada espacialmente em tempo real via Web Audio API (< 2ms), Aster Account em nuvem e ranking global com Supabase.
3. **Ideal Calculator** (Live: https://idealcalc.asterdev.me/ | GitHub: https://github.com/zAstergun/ideal-calculator)
   - Calculadora com física tátil e feedback acústico inspirada em Dieter Rams e Braun. Motor estatístico em TypeScript cliente cruzando microdados do Censo IBGE 2022 e PNAD em menos de 8ms.
4. **Pex Wiki** (Live: https://pex-wiki.vercel.app/ | GitHub: https://github.com/zAstergun/pex-wiki)
   - Enciclopédia interativa SPA para documentação profunda de mecânicas de gameplay de Pex.
5. **Duo Tools** (GitHub: https://github.com/zAstergun/Duo-Tools)
   - Extensão Chromium Manifest V3 para automação inteligente no Duolingo (Farm de XP direto pela API, Modo Super, resolvedor contínuo).
6. **Aster Video Downloader** (GitHub: https://github.com/zAstergun/Aster-Video-Downloader)
   - Downloader híbrido com extensão Side Panel + Companion App nativo (yt-dlp + FFmpeg), suportando até 4K60 HDR e streams HLS (.m3u8).
7. **App Mobile Demo** (GitHub: https://github.com/zAstergun/app-mobile-demo)
   - Interface mobile fluida em React Native.

### ARTIGOS DO BLOG (ACESSO DIRETO NO LEITOR DESTE DISPOSITIVO):
1. **"Três anos depois do primeiro commit: o que aprendi refazendo o Soul Fighter do zero"**
   - **Data & Categoria**: 01 de Novembro de 2026 | Engenharia de Frontend & UI (ID: \`blog-soulfighter-microinteractions\`).
   - **Tags**: React 19, TypeScript, Web Audio API, CSS 3D, Supabase, Arquitetura Frontend, Game Dev.
   - **Contexto e Evolução**: Em 02/11/2023 fez o commit 'start' de um jogo da memória amador em JavaScript puro, com variáveis globais no \`window\`, manipulação direta do DOM (\`querySelector\`), flags improvisadas (\`lockBoard\`, \`hasFlippedCard\`) e som via \`new Audio('som.mp3').play()\` que sofria de lag de ~200ms e cortes. Três anos depois (outubro/novembro de 2026), reconstruiu 100% do zero.
   - **Web Audio API nativa (< 2ms de latência)**: Criou um \`AudioContext\` singleton compartilhado com buffers pré-decodificados na memória RAM. Ao virar uma carta, um nó de áudio dispara em menos de 2 milissegundos com oscilador senoidal (880Hz decaindo exponencialmente para 220Hz em 35ms) simulando o clique de um interruptor mecânico físico.
   - **Renderização 3D na GPU**: Saiu das transições CSS que forçavam reflow e repaint na CPU e aplicou aceleração por hardware nativa com \`transform-style: preserve-3d\`, \`backface-visibility: hidden\` e camadas de composição isoladas. 24 cartas viram simultaneamente a 60 FPS cravados na GPU até em dispositivos modestos.
   - **Máquina de Estados Determinística**: Substituiu \`setTimeout\` e flags soltas por ciclos finitos (\`idle\`, \`flipping\`, \`comparing\`, \`combo\`, \`victory\`) em React 19 e TypeScript estrito, blindando a aplicação contra race conditions e cliques concorrentes.
   - **Persistência & Supabase**: Conectou com ranking global no Supabase com multiplicadores de dificuldade e validação server-side contra manipulação de pontuação no cliente.
   - **4 Pilares de Aprendizado**: 1) Previsibilidade supera esperteza; 2) Performance é fundação e não acabamento tardio (áudio < 2ms, primeiro frame < 800ms, animações fora da CPU); 3) Acessibilidade não é opcional (\`prefers-reduced-motion\`, navegação por teclado); 4) Respeito pelo tempo e atenção do usuário.

2. **"A arquitetura do StudioOS: da ideia crua a uma esteira de IA usada por criadores"**
   - **Data & Categoria**: 15 de Outubro de 2026 | Arquitetura & Produto (ID: \`blog-studioos-architecture\`).
   - **Tags**: Astro 7, React 19, Tailwind v4, Supabase, Cloudflare Workers, IA, Engenharia de Produto.
   - **Contexto e A Dor**: Frustração de produzir conteúdo pulando entre 12 abas abertas (planilhas de ideias, ChatGPT desmemoriado, bloco de notas de câmera, editor de texto) e a amnésia crônica das ferramentas convencionais de IA que exigem reexplicar audiência, nicho e tom a cada sessão.
   - **Crítica a Wrappers Rasos de GPT**: A internet inundada de caixas de texto genéricas com prompts hardcoded que entregam respostas mornas e alucinações. Criadores reais precisam de contexto persistente, métricas objetivas e agilidade.
   - **Regra de Calibração Central (Cérebro Único)**: O criador define uma única vez o nicho, as dores da audiência, canais de referência e tom de voz (didático, direto, humor). Fica salvo no \`localStorage\` e sincroniza com o Supabase, alimentando as 12 ferramentas da esteira de uma só vez, sem formulários repetidos.
   - **Ferramentas do Pipeline**:
     - *Rank de Ideia*: avaliação matemática objetiva (0 a 10) baseada em tensão temática, novidade no nicho e estimativa de esforço de produção.
     - *Mentor IA & Gerador de Ganchos*: gera 6 variações táticas de ganchos (baseadas em contraste, choque, curiosidade, narrativa e identificação de dor) para retenção nos primeiros 3 segundos, explicando o gatilho psicológico de cada variante.
     - *Roteiro por Blocos & Teleprompter*: divisão em blocos narrativos (gancho, desenvolvimento, tensão, CTA) com contagem de palavras, estimativa de tempo de fala em minutos e teleprompter in-page com velocidade ajustável para gravar olhando na lente.
   - **Engenharia com Astro Islands no Edge**: Construído com Astro 7 e React 19 Islands hidratando sob demanda (\`client:visible\`, \`client:load\`). Navegação estática e leve com LCP cravado abaixo de 800ms sem JS desnecessário no primeiro frame.
   - **Streaming via Cloudflare Workers**: Inferência via Server-Sent Events (SSE) entregando Time to First Token (TTFT) abaixo de 350ms.
   - **Validação e Controle Humano**: Schemas estritos com Zod, sanitização de respostas e IA atuando como copiloto de rascunho com edição atômica em cada bloco.
   - **Comunidade Ativa**: Validado por criadores reais da comunidade (como Diruen e Sweet) subindo ideias diariamente e disputando pontuação no ranking.
   - **4 Pilares de Aprendizado**: 1) A interface carrega o contexto, não o usuário; 2) Critérios determinísticos superam alucinações textuais; 3) Orçamento de latência é requisito não funcional crítico (TTFT < 350ms); 4) Arquitetura defensiva e controle humano inegociável.

3. **"O mito do parceiro ideal: cruzando dados do IBGE para medir a realidade dos relacionamentos"**
   - **Data & Categoria**: 29 de Março de 2026 | Data Science & Produto (ID: \`blog-ideal-calculator\`).
   - **Tags**: React 19, TypeScript, Tailwind CSS, IBGE, Data Science, Estatística.
   - **Contexto**: Em março de 2026, diante de discussões inflamadas nas redes sociais sobre checklists irreais de relacionamento (demandas por altura > 1,80m ou 1,85m, renda > R$ 12.000 ou 20.000, solteiro, sem filhos, < 30 anos), o Aster substituiu brigas de internet por matemática e estatística oficial.
   - **Microdados Oficiais do IBGE**: Cruzamento analítico de três fontes públicas primárias:
     1) Censo Demográfico 2022 (idade, gênero, raça, estado civil).
     2) PNAD Contínua 2023 (estratificação de renda de todas as fontes por percentis da população ocupada).
     3) POF - Pesquisa de Orçamentos Familiares (biometria de altura por faixa etária e gênero).
   - **Engenharia Estatística**: Evitou a armadilha amadora da independência estocástica pura (multiplicar probabilidades soltas), pois renda depende fortemente de idade e polo geográfico, e altura varia por geração. Modelou matrizes de probabilidade condicional estratificadas.
   - **Cálculo 100% no Cliente em TypeScript**: Tabelas censitárias compactadas em arrays binários otimizados de busca. O cálculo conjunto de 12 filtros simultâneos e atualização de gráficos roda no navegador em menos de 8 milissegundos (< 8ms) a 60 FPS, sem depender de servidor.
   - **Resultados e Revelações**: Demonstra que exigências populares em redes sociais frequentemente isolam o usuário em parcelas inferiores a 0,14% (1 em 714) ou 0,08% (1 em mais de 1.250) da população masculina do país, desmistificando expectativas impossíveis com rigor científico.
   - **Card Viral com HTML Canvas**: Gerador de cartão com nota de raridade ('A Raridade do Meu Tipo', variando de 'Coração de Mãe' até 'Agulha no Palheiro') pronto para download e compartilhamento em redes sociais.
   - **3 Lições de Engenharia**: 1) A tecnologia pode trazer racionalidade para o debate social; 2) Dados públicos só têm valor se forem acessíveis; 3) Computação no cliente garante escalabilidade absoluta a custo zero de servidor.

### CERTIFICAÇÕES & LINKS OFICIAIS:
- 37 certificações registradas e validadas (IoT Developer, IA Developer, TypeScript, React Completo, Oracle Next Education, Notion Advanced), acessíveis na pasta "Certificações" deste dispositivo.
- GitHub: @zAstergun (https://github.com/zAstergun)
- Email: hello@asterdev.me
- Currículo em PDF disponível para download direto em /Currículo_Aster_Frontend.pdf.

### DIRETRIZES DE FORMATAÇÃO:
- Responda SEMPRE no idioma em que o usuário perguntar.
- Mantenha sintaxe Markdown impecável e fechada.
- Use **negrito** bem calibrado para destacar tópicos e listas curtas (-) para pontos técnicos.
- NUNCA crie cabeçalhos '###' pesados. Mantenha respostas elegantes e fluidas.
`;

/**
 * Intelligently maps user query to contextual interactive action buttons and suggestions.
 */
export function enrichActionsAndSuggestions(
  userQuery: string,
  answer: string,
  lang: string
): { actions?: ActionButton[]; suggestions?: string[] } {
  const qClean = userQuery
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const aClean = answer
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const actions: ActionButton[] = [];
  const suggestions: string[] = [];
  const isPt = lang === "br" || lang === "pt";

  // 1. Quem é o Aster / Sobre Mim / Bio / Perfil / Contato / Redes
  const isAboutAster =
    qClean.includes("quem e") ||
    qClean.includes("sobre voce") ||
    qClean.includes("sobre o aster") ||
    qClean.includes("sobre mim") ||
    qClean.includes("fale de voce") ||
    qClean.includes("bio") ||
    qClean.includes("perfil") ||
    qClean.includes("contato") ||
    qClean.includes("redes") ||
    qClean.includes("social") ||
    qClean.includes("who is") ||
    qClean.includes("about aster") ||
    qClean.includes("about you");

  if (isAboutAster) {
    actions.push(
      { label: "🌐 GitHub (@zAstergun)", url: "https://github.com/zAstergun", type: "link" },
      { label: isPt ? "📄 Baixar Currículo [PDF]" : "📄 Download Resume [PDF]", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
      { label: isPt ? "✉️ Enviar Email" : "✉️ Send Email", url: "mailto:hello@asterdev.me", type: "link" }
    );
    suggestions.push(
      isPt ? "Quais são os principais projetos?" : "What are the main projects?",
      isPt ? "Como é seu treino pro Ironman?" : "How is your Ironman training?",
      isPt ? "Qual é a sua stack técnica?" : "What is your tech stack?"
    );
    return { actions, suggestions };
  }

  // 2. Currículo / CV / Resume
  const isResumeQuery =
    qClean.includes("curriculo") ||
    qClean.includes("cv") ||
    qClean.includes("resume") ||
    qClean.includes("pdf");

  if (isResumeQuery) {
    actions.push(
      { label: isPt ? "📄 Baixar Currículo [PDF]" : "📄 Download Resume [PDF]", url: "/Currículo_Aster_Frontend.pdf", type: "download" },
      { label: "🌐 GitHub (@zAstergun)", url: "https://github.com/zAstergun", type: "link" }
    );
    suggestions.push(
      isPt ? "Quais são suas certificações?" : "What certifications do you have?",
      isPt ? "Qual sua formação acadêmica?" : "What is your education?",
      isPt ? "Ver principais projetos" : "View main projects"
    );
    return { actions, suggestions };
  }

  // 3. Soul Fighter Memory Game
  const isSoulFighterQuery =
    qClean.includes("soul fighter") ||
    qClean.includes("soulfighter") ||
    qClean.includes("jogo de memoria") ||
    qClean.includes("memory game") ||
    qClean.includes("minigame");

  if (isSoulFighterQuery) {
    actions.push(
      { label: isPt ? "🎮 Jogar Soul Fighter" : "🎮 Play Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
      { label: isPt ? "📂 Ver Código (GitHub)" : "📂 Source Code", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" }
    );
    suggestions.push(
      isPt ? "Quais são os 4 modos de jogo?" : "What are the 4 game modes?",
      isPt ? "Como funciona o áudio espacial?" : "How does spatial audio work?",
      isPt ? "Fale sobre o StudioOS" : "Tell me about StudioOS"
    );
    return { actions, suggestions };
  }

  // 4. StudioOS
  const isStudioOSQuery =
    qClean.includes("studioos") ||
    qClean.includes("studio os") ||
    qClean.includes("sistema operacional") ||
    qClean.includes("criador") ||
    qClean.includes("creator");

  if (isStudioOSQuery) {
    actions.push(
      { label: isPt ? "🚀 Acessar StudioOS" : "🚀 Open StudioOS", url: "https://studio.asterdev.me/", type: "link" },
      { label: isPt ? "📂 GitHub StudioOS" : "📂 StudioOS GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" }
    );
    suggestions.push(
      isPt ? "Como o StudioOS foi construído?" : "How was StudioOS built?",
      isPt ? "Quais ferramentas ele inclui?" : "What tools does it include?",
      isPt ? "Jogar Soul Fighter" : "Play Soul Fighter"
    );
    return { actions, suggestions };
  }

  // 5. Ideal Calculator
  const isCalcQuery =
    qClean.includes("calculator") ||
    qClean.includes("calculadora") ||
    qClean.includes("ideal calc") ||
    qClean.includes("dieter rams");

  if (isCalcQuery) {
    actions.push(
      { label: isPt ? "🧮 Abrir Calculadora" : "🧮 Open Calculator", url: "https://idealcalc.asterdev.me/", type: "link" },
      { label: isPt ? "📂 Ver Código" : "📂 Source Code", url: "https://github.com/zAstergun/ideal-calculator", type: "link" }
    );
    suggestions.push(
      isPt ? "Por que inspirada em Dieter Rams?" : "Why Dieter Rams inspired?",
      isPt ? "Me mostre outros projetos" : "Show me other projects"
    );
    return { actions, suggestions };
  }

  // 6. Pex Wiki
  const isPexQuery = qClean.includes("pex") || qClean.includes("wiki");
  if (isPexQuery) {
    actions.push(
      { label: isPt ? "📖 Visitar Pex Wiki" : "📖 Visit Pex Wiki", url: "https://pex-wiki.vercel.app/", type: "link" },
      { label: isPt ? "📂 Ver Código" : "📂 Source Code", url: "https://github.com/zAstergun/pex-wiki", type: "link" }
    );
    return { actions, suggestions };
  }

  // 7. Pergunta sobre Projetos em geral
  const isProjectsQuery =
    qClean.includes("projeto") ||
    qClean.includes("portfolio") ||
    qClean.includes("project");

  if (isProjectsQuery) {
    actions.push(
      { label: isPt ? "🚀 StudioOS" : "🚀 Open StudioOS", url: "https://studio.asterdev.me/", type: "link" },
      { label: isPt ? "🎮 Soul Fighter" : "🎮 Play Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
      { label: isPt ? "🧮 Ideal Calc" : "🧮 Ideal Calc", url: "https://idealcalc.asterdev.me/", type: "link" }
    );
    suggestions.push(
      isPt ? "Como o StudioOS foi feito?" : "How was StudioOS built?",
      isPt ? "Fale sobre o Soul Fighter" : "Tell me about Soul Fighter",
      isPt ? "Qual sua stack técnica?" : "What is your tech stack?"
    );
    return { actions, suggestions };
  }

  // 8. Pergunta sobre o Blog e Artigos Técnicos
  const isBlogQuery =
    qClean.includes("blog") ||
    qClean.includes("artigo") ||
    qClean.includes("post") ||
    qClean.includes("publicac") ||
    qClean.includes("leitura") ||
    qClean.includes("texto");

  if (isBlogQuery) {
    if (qClean.includes("soul fighter") || qClean.includes("microinterac") || qClean.includes("audio") || qClean.includes("commit")) {
      actions.push(
        { label: isPt ? "📖 Ler Artigo no Dispositivo" : "📖 Read Article", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: isPt ? "🎮 Jogar Soul Fighter" : "🎮 Play Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" },
        { label: isPt ? "📂 Ver Código (GitHub)" : "📂 Source Code", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", type: "link" }
      );
      suggestions.push(
        isPt ? "Como funciona a Web Audio API (<2ms)?" : "How does Web Audio API (<2ms) work?",
        isPt ? "Fale sobre o post do StudioOS" : "Tell me about StudioOS post",
        isPt ? "O que fala o post do Ideal Calc?" : "What does the Ideal Calc post say?"
      );
    } else if (qClean.includes("studioos") || qClean.includes("studio os") || qClean.includes("calibracao") || qClean.includes("astro")) {
      actions.push(
        { label: isPt ? "📖 Ler Artigo no Dispositivo" : "📖 Read Article", url: "blog-studioos-architecture", type: "article" },
        { label: isPt ? "🚀 Acessar StudioOS" : "🚀 Open StudioOS", url: "https://studio.asterdev.me/", type: "link" },
        { label: isPt ? "📂 GitHub StudioOS" : "📂 StudioOS GitHub", url: "https://github.com/zAstergun/StudioOS", type: "link" }
      );
      suggestions.push(
        isPt ? "O que é a Regra de Calibração Central?" : "What is Central Calibration?",
        isPt ? "Como o StudioOS usa Astro Islands?" : "How does StudioOS use Astro Islands?",
        isPt ? "Ver post do Soul Fighter" : "View Soul Fighter post"
      );
    } else if (qClean.includes("calc") || qClean.includes("ibge") || qClean.includes("par ideal") || qClean.includes("parceiro") || qClean.includes("censo")) {
      actions.push(
        { label: isPt ? "📖 Ler Artigo no Dispositivo" : "📖 Read Article", url: "blog-ideal-calculator", type: "article" },
        { label: isPt ? "🧮 Abrir Calculadora" : "🧮 Open Calculator", url: "https://idealcalc.asterdev.me/", type: "link" },
        { label: isPt ? "📂 Ver Código" : "📂 Source Code", url: "https://github.com/zAstergun/ideal-calculator", type: "link" }
      );
      suggestions.push(
        isPt ? "Quais dados do IBGE foram usados?" : "Which IBGE datasets were used?",
        isPt ? "Por que calcular no cliente (<8ms)?" : "Why compute on client-side (<8ms)?",
        isPt ? "Ver outros artigos" : "View other articles"
      );
    } else {
      actions.push(
        { label: isPt ? "📖 Artigo Soul Fighter" : "📖 Soul Fighter Post", url: "blog-soulfighter-microinteractions", type: "article" },
        { label: isPt ? "📖 Artigo StudioOS" : "📖 StudioOS Post", url: "blog-studioos-architecture", type: "article" },
        { label: isPt ? "📖 Artigo Ideal Calc" : "📖 Ideal Calc Post", url: "blog-ideal-calculator", type: "article" }
      );
      suggestions.push(
        isPt ? "O que o Aster aprendeu reconstruindo o Soul Fighter?" : "What did Aster learn remaking Soul Fighter?",
        isPt ? "Como foi a arquitetura do StudioOS?" : "How was StudioOS architected?",
        isPt ? "Como o Ideal Calc cruza dados do IBGE?" : "How does Ideal Calc cross IBGE data?"
      );
    }
    return { actions, suggestions };
  }

  // 8. Se a pergunta for sobre Ironman / Triathlon
  if (qClean.includes("ironman") || qClean.includes("triathlon") || qClean.includes("esporte")) {
    suggestions.push(
      isPt ? "Como o esporte influencia seu código?" : "How does sports influence your code?",
      isPt ? "Quais são seus projetos?" : "What are your projects?",
      isPt ? "Como baixar seu currículo?" : "How to download your resume?"
    );
    return { suggestions };
  }

  // 9. Se a pergunta não foi específica mas a resposta foca em projeto
  if (aClean.includes("soulfighter.asterdev.me")) {
    actions.push({ label: isPt ? "🎮 Jogar Soul Fighter" : "🎮 Play Soul Fighter", url: "https://soulfighter.asterdev.me/", type: "link" });
  }
  if (aClean.includes("studio.asterdev.me")) {
    actions.push({ label: isPt ? "🚀 Acessar StudioOS" : "🚀 Open StudioOS", url: "https://studio.asterdev.me/", type: "link" });
  }

  return {
    actions: actions.length > 0 ? actions.slice(0, 3) : undefined,
    suggestions: suggestions.length > 0 ? suggestions.slice(0, 3) : [
      isPt ? "Quais são seus projetos?" : "What are your projects?",
      isPt ? "Qual é sua stack técnica?" : "What is your tech stack?",
      isPt ? "Como entrar em contato?" : "How to get in touch?"
    ],
  };
}

/**
 * Sends a chat message to Google Gemini Flash-Lite with immediate fallback to heuristic classifier.
 */
export async function sendChatMessage(
  userMessage: string,
  history: AIChatMessage[] = [],
  currentLang: string = "br"
): Promise<AIChatResponse> {
  const apiKey = getGeminiApiKey();

  // If no API key is available, fallback immediately to the rich heuristic classifier
  if (!apiKey) {
    const heuristicResult: ClassifierResult = classifyIntent(userMessage, currentLang);
    return {
      text: heuristicResult.response,
      source: "heuristic",
      actions: heuristicResult.actions,
      suggestions: heuristicResult.suggestions,
    };
  }

  // Format conversational contents for Gemini API
  const contents = [
    ...history.slice(-6).map((h) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.text }],
    })),
    {
      role: "user",
      parts: [{ text: userMessage }],
    },
  ];

  // Try candidate Flash-Lite models in order with automatic fallback
  for (const model of GEMINI_CANDIDATE_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(4500), // 4.5 seconds safety timeout
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: ASTER_KNOWLEDGE_BASE + `\n\nIdioma da interface: "${currentLang}". Responda no idioma do usuário.` }],
          },
          contents,
          generationConfig: {
            temperature: 0.35,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 800,
          },
        }),
      });

      if (!response.ok) {
        // Quota limit / token exhaustion (429) or Auth issue (401, 403)
        // Instant fallback to site heuristic knowledge to prevent any delay
        if (response.status === 429 || response.status === 401 || response.status === 403) {
          console.warn(`[AsterBot] Gemini API limit/auth (${response.status}). Instant fallback to site knowledge engine.`);
          break;
        }

        // 503 or 404: continue to next candidate Flash-Lite model
        const errJson = await response.json().catch(() => null);
        console.warn(`[AsterBot] Model ${model} status ${response.status}:`, errJson?.error?.message || response.statusText);
        continue;
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText && generatedText.trim().length > 0) {
        const enriched = enrichActionsAndSuggestions(userMessage, generatedText, currentLang);
        return {
          text: generatedText.trim(),
          source: "gemini",
          modelUsed: model,
          actions: enriched.actions,
          suggestions: enriched.suggestions,
        };
      }
    } catch (networkErr: any) {
      console.warn(`[AsterBot] Connection error with model ${model}:`, networkErr?.message || networkErr);
    }
  }

  // Instant fallback to site's comprehensive heuristic classifier
  console.info("[AsterBot] Serving response via Site Heuristic Knowledge Base.");
  const fallbackResult: ClassifierResult = classifyIntent(userMessage, currentLang);
  return {
    text: fallbackResult.response,
    source: "heuristic",
    actions: fallbackResult.actions,
    suggestions: fallbackResult.suggestions,
  };
}
