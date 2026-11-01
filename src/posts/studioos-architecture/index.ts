import type { PostDefinition } from "../types";
import { studioosTranslations } from "./translations";
import coverImg from "./cover.png";
import dashboardImg from "./studioos-dashboard-completo.png";
import calibracaoImg from "./studioos-calibracao.png";
import rankIdeiaImg from "./studioos-rank-de-ideia.jpg";
import mentorImg from "./studioos-mentor-ai.png";
import roteiroImg from "./studioos-roteiro-teleprompter.png";
import rankingImg from "./studioos-ranking-criadores.png";

export const studioosPost: PostDefinition = {
  id: "blog-studioos-architecture",
  slug: "studioos-architecture",
  date: "15 Out 2026",
  icon: "cpu",
  gradient: ["#f7b733", "#fc4a1a"],
  coverImage: coverImg,
  themeColor: "amber",
  tags: ["Astro", "React 19", "Tailwind v4", "Supabase", "Cloudflare Workers", "IA", "Engenharia de Produto"],
  translations: studioosTranslations,
  links: [
    {
      title: "Acessar StudioOS Live",
      url: "https://studio.asterdev.me/",
      icon: "globe",
    },
    {
      title: "Código no GitHub",
      url: "https://github.com/zAstergun/StudioOS",
      icon: "github",
    },
  ],
  pt: {
    category: "Arquitetura & Produto",
    title: "A arquitetura do StudioOS: da ideia crua a uma esteira de IA usada por criadores",
    summary:
      "Uma reflexão honesta sobre como criei um sistema operacional para canais de YouTube, por que me recusei a fazer mais um wrapper preguiçoso de GPT, o choque de ver usuários reais na plataforma e o que aprendi sobre colocar inteligência artificial em ferramentas do dia a dia.",
    coverCaption:
      "A interface do StudioOS: esteira integrada de ideação, estepe de telemetria e calibração de canal sem formulários repetidos.",
    sections: [
      {
        heading: "Doze abas abertas e a mesma conversa fiada",
        paragraphs: [
          "Se você produz qualquer tipo de conteúdo para a internet hoje, provavelmente conhece a sensação de ter o navegador transformado em um cemitério de abas. Em um dia típico de gravação, eu passava metade do meu tempo pulando entre uma planilha cheia de fórmulas para adivinhar se um assunto tinha tração, uma janela do ChatGPT tentando implorar para ele não soar como um panfleto corporativo, um editor de texto solto para o roteiro e um checklist em bloco de notas para não esquecer de calibrar a câmera.",
          "O que mais me irritava não era o tempo gasto, mas a amnésia crônica dessas ferramentas. Toda vez que eu abria uma IA conversacional, precisava colar parágrafos gigantescos relembrando quem era minha audiência, o tom de fala que eu uso, o nível técnico do canal e que tipo de piada funciona no meu formato. Fechou a aba sem querer? Pronto, o cérebro da máquina resetava e eu tinha que começar do zero.",
          "O mercado parecia ter decidido que a resposta para isso era encher a internet de wrappers de IA: caixas de texto genéricas com um prompt hardcoded por trás que prometiam mágicas, mas entregavam textos mornos e cheios de alucinações. Ninguém precisa de mais uma caixa de prompt com botão de copiar. O que criador precisa é de um fluxo com critério, número, velocidade e contexto persistente.",
        ],
        image: {
          src: dashboardImg,
          caption: "O painel unificado do StudioOS: substituindo doze abas soltas por uma esteira contínua com todas as etapas do canal conectadas.",
          alt: "Painel Geral do StudioOS",
        },
        callout: {
          type: "insight",
          title: "O problema com prompts abertos",
          text: "Pedir para o usuário final agir como engenheiro de prompt toda vez que quer trabalhar é uma falha de design. A interface precisa carregar a carga de contexto, não a pessoa.",
        },
      },
      {
        heading: "Uma régua central em vez de vinte formulários",
        paragraphs: [
          "A primeira decisão que tomei ao desenhar a arquitetura do StudioOS foi que o usuário nunca deveria ter que explicar quem ele é mais de uma vez. Eu queria um cérebro único para o canal todo.",
        ],
        subsections: [
          {
            heading: "Calibração única como memória viva",
            paragraphs: [
              "Em vez de formulários espalhados em cada tela, criei a Régua de Calibração Central. O criador define uma única vez o nicho, as dores da audiência, referências de canais do mesmo segmento e o tom de voz predominante (se é direto ao ponto, didático ou bem-humorado).",
              "Esses parâmetros ficam persistidos no armazenamento local e são sincronizados diretamente com o Supabase, garantindo que o cérebro do canal esteja sempre vivo.",
            ],
            image: {
              src: calibracaoImg,
              caption: "A Régua de Calibração: ponto único de verdade onde o perfil do canal é definido e reaproveitado.",
              alt: "Régua de Calibração Central do StudioOS",
            },
          },
          {
            heading: "Orquestrando doze ferramentas com o mesmo contexto",
            paragraphs: [
              "Quando a calibração atinge 100%, todas as doze ferramentas da esteira (do gerador de ganchos à auditoria de post e briefing de thumbnails) passam a operar automaticamente com essa memória em tempo real.",
              "Você não precisa lembrar a ferramenta de nada; ela já sabe para quem você está falando e qual é a régua de qualidade esperada.",
            ],
          },
        ],
      },
      {
        heading: "Da centelha crua ao teleprompter",
        paragraphs: [
          "Ter ideias não é o gargalo de quase nenhum criador. O problema real é saber quais ideias merecem o trabalho pesado de quinze horas entre gravação e edição, e quais deveriam ser descartadas antes de você ligar a câmera.",
        ],
        subsections: [
          {
            heading: "Rank de Ideia com critério matemático",
            paragraphs: [
              "A primeira ferramenta que construí foi o Rank de Ideia. Ela passa a sugestão do criador por uma matriz com critérios objetivos: tensão temática, novidade no nicho e estimativa de esforço.",
              "O resultado não é um parágrafo vago dizendo que a ideia é ótima, mas uma pontuação de 0 a 10 acompanhada de pontos cegos que podem arruinar a retenção do vídeo.",
            ],
            image: {
              src: rankIdeiaImg,
              caption: "O Rank de Ideia em execução: cálculo algorítmico de potencial de retenção e esforço de gravação.",
              alt: "Rank de Ideia StudioOS",
            },
          },
          {
            heading: "Títulos e seis variações de ganchos",
            paragraphs: [
              "Um bom vídeo morre se ninguém clicar nos primeiros três segundos. O gerador de títulos e ganchos cospe variações calculadas sobre fórmulas clássicas de retenção: contraste, choque, curiosidade, narrativa e identificação imediata com a dor do espectador.",
              "Em vez de apenas sugerir títulos aleatórios, o módulo roda um mentor tático que aponta por que determinado gancho funciona para o perfil calibrado e onde está o gatilho de curiosidade.",
            ],
            image: {
              src: mentorImg,
              caption: "O Mentor de IA em ação: gerando variações de ganchos de alta retenção e fornecendo feedback tático baseado na calibração do canal.",
              alt: "Mentor de IA e Gerador de Ganchos StudioOS",
            },
          },
          {
            heading: "Roteirização em blocos e teleprompter integrado",
            paragraphs: [
              "Roteiro de vídeo não pode ser um bloco maciço de texto que dá preguiça de olhar. No StudioOS, o roteiro é quebrado em blocos narrativos (gancho, corpo, tensão e chamada para ação), com contagem de palavras e estimativa de tempo de fala em minutos.",
              "Com um clique, ele abre no modo Teleprompter com velocidade ajustável para gravação direta sem perder o contato visual com a lente.",
            ],
            image: {
              src: roteiroImg,
              caption: "Roteiro estruturado e teleprompter em tela: tempo de fala estimado e controle de rolagem.",
              alt: "Roteiro e Teleprompter StudioOS",
            },
          },
        ],
      },
      {
        heading: "Astro no edge e ilhas que não engasgam",
        paragraphs: [
          "Na parte técnica, eu tinha uma obsessão pessoal: o app não podia parecer pesado. Se um criador está com a câmera ligada e quer conferir um gancho rápido, esperar cinco segundos de tela branca com bundle de 4 MB de JavaScript mata qualquer fluxo criativo.",
        ],
        subsections: [
          {
            heading: "Carregamento estático com React 19 sob demanda",
            paragraphs: [
              "A escolha de arquitetura foi Astro 7 no edge com ilhas de hidratação em React 19. Toda a navegação, casca de layout e páginas de documentação são HTML estático puro pré-renderizado.",
              "Somente os módulos que realmente têm estado vivo, como os editores e os cálculos de IA, hidratam como ilhas paralelas quando entram no campo de visão (`client:visible` e `client:load`).",
            ],
            callout: {
              type: "tech",
              title: "Zero JavaScript inútil no primeiro frame",
              text: "O LCP fica cravado abaixo de 800ms mesmo em conexões modestas. O usuário clica e a interface responde imediatamente.",
            },
          },
          {
            heading: "Streaming via Cloudflare Workers com TTFT abaixo de 350ms",
            paragraphs: [
              "Esperar dez segundos olhando para uma rodinha girando estraga a percepção de utilidade. Para resolver isso, roteei as chamadas de inferência através de Cloudflare Workers com Server-Sent Events (SSE).",
              "O Time to First Token caiu para menos de 350ms: o criador vê a análise sendo digitada na tela quase instantaneamente.",
            ],
            codeBlock: {
              language: "typescript",
              filename: "stream-pipeline.ts",
              code: `// Pipeline de streaming com SSE e injeção do contexto de calibração
export async function streamCreatorModule(calibration: ChannelCalibration, prompt: string) {
  const contextHeader = buildSystemPrompt(calibration);
  const response = await fetch("https://edge.asterdev.me/api/v1/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ context: contextHeader, prompt, stream: true }),
  });

  return new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      // Emite tokens contínuos com latência abaixo de 350ms TTFT
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        controller.enqueue(value);
      }
      controller.close();
    }
  });
}`,
            },
          },
        ],
      },
      {
        heading: "O que aconteceu quando pessoas de verdade usaram",
        paragraphs: [
          "Colocar software que você fez com carinho na mão de outras pessoas é sempre um choque de realidade. No localhost tudo faz sentido; na mão de criadores com rotinas caóticas, suas suposições de design caem por terra em quinze minutos.",
          "Antes de abrir o beta, eu imaginava que as pessoas passariam minutos ajustando sliders minuciosos e conversando com a IA. Que engano. Criadores queriam agilidade cirúrgica: colar uma ideia crua em cinco segundos, conferir a nota de viabilidade de 0 a 10, bater o olho nos ganchos e pular direto para o teleprompter. Menos prosa, mais utilidade prática.",
          "Quando adicionei o Ranking Global de Criadores na esteira, meu objetivo inicial era apenas ter uma métrica visual para acompanhar os testes internos. Mas a dinâmica mudou rápido. Ver criadores como Diruen, Sweet e outros da comunidade entrando todos os dias, subindo dezenas de ideias, acumulando pontos de reputação e debatendo comigo no Discord sobre a viabilidade dos roteiros foi o momento da virada. Meu próprio perfil ali no topo da tabela deixou de ser só um teste de banco de dados; a esteira tinha virado um ambiente vivo de produção compartilhada com pessoas de carne e osso.",
        ],
        image: {
          src: rankingImg,
          caption: "O ranking da comunidade: scores de reputação, projetos concluídos e criadores ativos.",
          alt: "Ranking de Criadores no StudioOS",
        },
        callout: {
          type: "tip",
          title: "O valor do ciclo de feedback",
          text: "Ver os tropeços que os usuários encontravam ao vivo ensina mais sobre ergonomia de software do que três semanas desenhando telas no Figma.",
        },
      },
      {
        heading: "O que eu realmente aprendi colocando IA na mão de gente real",
        paragraphs: [
          "Se eu precisasse resumir todo o processo de conceber, arquitetar e sustentar o StudioOS no ar em uma documentação do meu desenvolvimento técnico, a lição central é direta: engenharia de software com IA quase não tem a ver com consumir endpoints de modelos generativos. Fazer uma requisição HTTP para a OpenAI ou Anthropic qualquer tutorial de meia hora ensina.",
          "O desafio real de engenharia de produto está no ecossistema ao redor: isolamento de estado, resiliência contra falhas de rede, orquestração de microsserviços no edge e a obsessão por manter o fluxo do usuário livre de atritos cognitivos desnecessários. Olhando para trás, documentar essa jornada me consolidou quatro pilares fundamentais como desenvolvedor:",
        ],
        bulletPoints: [
          "**A interface carrega o contexto, não o usuário**: Se um sistema exige que a pessoa formule o prompt ideal para obter uma resposta consistente, a arquitetura falhou na abstração. Um bom software encapsula parâmetros, calibrações de persona e regras de negócio de forma transparente antes de qualquer chamada ao modelo.",
          "**Critérios determinísticos superam alucinações textuais**: Modelos generativos tendem a produzir parágrafos prolixos. Em produção real, métricas palpáveis de 0 a 10, índices de retenção e contadores de tempo de fala agregam infinitamente mais valor técnico do que blocos de texto soltos.",
          "**Orçamento de latência é requisito não funcional crítico**: Respostas que demoram quebram a linha de raciocínio. Ao adotar Astro 7 no edge e Cloudflare Workers com Server-Sent Events para atingir TTFT abaixo de 350ms, aprendi que performance percebida não é detalhe estético, mas o alicerce que faz o software parecer uma extensão natural do raciocínio.",
          "**Arquitetura defensiva e controle humano inegociável**: A máquina deve atuar como copiloto de rascunho pesado, nunca como dona da verdade. Implementar sanitização de respostas, validação rígida de esquemas com Zod e permitir edição atômica em cada componente foi o que garantiu estabilidade quando a base de usuários começou a crescer.",
        ],
        callout: {
          type: "insight",
          title: "Diário de engenharia",
          text: "Construir o StudioOS do zero foi o divisor de águas na minha maturidade como engenheiro: aprendi a desenhar arquiteturas tolerantes a falhas, priorizar performance no edge e entender que o melhor código não é o mais complexo, mas o que resolve atritos reais com clareza e elegância.",
        },
      },
    ],
  },
  en: {
    category: "Architecture & Product",
    title: "The StudioOS Architecture: from raw ideas to an AI pipeline creators actually use",
    summary:
      "An honest look behind the scenes of StudioOS: how I designed an operating system for YouTube creators, why I refused to build another lazy GPT wrapper, the reality check of seeing real users on the platform, and the hard lessons learned about embedding AI into everyday tools.",
    coverCaption:
      "StudioOS operational interface: integrated creation pipeline, output monitoring telemetry, and unified channel calibration without repetitive forms.",
    sections: [
      {
        heading: "Twelve open tabs and the same repetitive conversation",
        paragraphs: [
          "If you produce any kind of content for the internet today, you probably know the feeling of watching your browser turn into a tab graveyard. In a typical production day, I used to spend half my time bouncing between a spreadsheet full of formulas trying to guess whether a topic had legs, a ChatGPT window begging the model not to sound like an insurance flyer, a detached notes editor for scripting, and a notepad checklist to remember camera settings.",
          "The most frustrating part was not the time lost, but the chronic context amnesia of these tools. Every single session, I had to paste massive prompt preambles reminding the model who my audience was, what cadence I use, the technical depth of the channel, and what kind of jokes work in my format. Accidentally close the tab? The machine brain resets, and you start from square one.",
          "The tech industry seemed to have concluded that the answer was flooding the web with AI wrappers: generic text boxes with hardcoded prompts that promised miracles but output lukewarm text full of hallucinations. Nobody needs another prompt box with a copy button. Creators need an actual workflow with criteria, numbers, speed, and persistent context.",
        ],
        image: {
          src: dashboardImg,
          caption: "The unified StudioOS dashboard: replacing twelve loose tabs with an integrated workspace connecting every channel stage.",
          alt: "StudioOS Unified Workspace",
        },
        callout: {
          type: "insight",
          title: "The problem with open prompts",
          text: "Expecting the end user to act like a prompt engineer every time they want to work is a design failure. The interface must shoulder the context burden, not the human.",
        },
      },
      {
        heading: "One central calibration ruler instead of twenty forms",
        paragraphs: [
          "The first architectural choice I made for StudioOS was simple: the creator should never have to re-explain who they are. I wanted a single unified memory bank for the entire channel.",
        ],
        subsections: [
          {
            heading: "Single calibration as living memory",
            paragraphs: [
              "Instead of scattering forms across every screen, I built the Central Calibration Ruler. The creator fills out their niche, audience pain points, benchmark channels, and dominant voice tone (straightforward, educational, or witty) once.",
              "These parameters persist locally and sync directly with Supabase, ensuring channel identity is always available without prompting.",
            ],
            image: {
              src: calibracaoImg,
              caption: "The Calibration Ruler: single source of truth where channel identity is codified and reused.",
              alt: "StudioOS Central Calibration Ruler",
            },
          },
          {
            heading: "Orchestrating twelve tools with the exact same context",
            paragraphs: [
              "Once calibration hits 100%, all twelve tools in the pipeline (from hook variations to post auditing and thumbnail briefings) operate on that shared memory in real time.",
              "You do not need to remind the tool of anything; it already knows who you are speaking to and what standard of quality to enforce.",
            ],
          },
        ],
      },
      {
        heading: "From the raw spark to the teleprompter",
        paragraphs: [
          "Having ideas is rarely the bottleneck for digital creators. The hard part is knowing which ideas deserve the heavy lifting of fifteen hours between filming and editing, and which ones should be killed before turning the camera on.",
        ],
        subsections: [
          {
            heading: "Idea Rank with mathematical criteria",
            paragraphs: [
              "The first tool I built was the Idea Rank. It runs candidate topics through an objective scoring matrix: narrative tension, niche freshness, and estimated production effort.",
              "The result is not a polite paragraph saying the idea is great, but a clean 0 to 10 score paired with blind spots that could wreck retention.",
            ],
            image: {
              src: rankIdeiaImg,
              caption: "Idea Rank in action: algorithmic scoring of retention potential and recording effort.",
              alt: "Idea Rank StudioOS",
            },
          },
          {
            heading: "Titles and six distinct hook variations",
            paragraphs: [
              "A solid video falls flat if nobody clicks within the first three seconds. The title and hook generator crafts variations built on proven retention patterns: contrast, shock, curiosity, narrative suspense, and immediate problem recognition.",
              "Rather than spitting out disconnected suggestions, the module runs an AI Mentor giving tactical reasoning on why a specific hook fits the calibrated channel profile and where the retention trigger lives.",
            ],
            image: {
              src: mentorImg,
              caption: "The AI Mentor in action: generating high-retention hook variations and providing tactical feedback tailored to the channel's voice.",
              alt: "StudioOS AI Mentor and Hook Generator",
            },
          },
          {
            heading: "Block scriptwriting and built-in teleprompter",
            paragraphs: [
              "A video script should never be an intimidating wall of prose. In StudioOS, scripts break into modular narrative blocks (hook, body, tension, and call to action), accompanied by word counts and estimated speaking time in minutes.",
              "One click toggles Teleprompter mode with variable scroll speed, letting creators record without breaking eye contact with the camera lens.",
            ],
            image: {
              src: roteiroImg,
              caption: "Structured script and teleprompter mode: estimated reading pace and live scrolling control.",
              alt: "Script and Teleprompter StudioOS",
            },
          },
        ],
      },
      {
        heading: "Astro on the edge and islands that never freeze",
        paragraphs: [
          "On the technical side, I had a stubborn rule: the app could not feel bloated. When a creator is ready to shoot and just needs to verify a hook, waiting through five seconds of blank screen for a 4 MB JavaScript bundle kills momentum.",
        ],
        subsections: [
          {
            heading: "Static shells with React 19 on demand",
            paragraphs: [
              "I chose Astro 7 on the edge paired with React 19 hydration islands. Navigation, layout shells, and documentation pages render as clean, static HTML and Tailwind v4 CSS.",
              "Only components with live state, like interactive editors and AI scoring meters, hydrate as independent islands when scrolled into view (`client:visible` and `client:load`).",
            ],
            callout: {
              type: "tech",
              title: "Zero useless JavaScript on first frame",
              text: "LCP stays reliably below 800ms even on sluggish Wi-Fi. You click, and the interface responds instantly.",
            },
          },
          {
            heading: "Streaming via Cloudflare Workers under 350ms TTFT",
            paragraphs: [
              "Waiting ten seconds staring at a circular loading spinner is dreadful UX. To fix that, inference calls stream through Cloudflare Workers with Server-Sent Events (SSE).",
              "Time to First Token fell below 350ms: the creator sees thoughts hitting the screen almost immediately.",
            ],
            codeBlock: {
              language: "typescript",
              filename: "stream-pipeline.ts",
              code: `// Low-latency SSE streaming pipeline injecting central calibration
export async function streamCreatorModule(calibration: ChannelCalibration, prompt: string) {
  const contextHeader = buildSystemPrompt(calibration);
  const response = await fetch("https://edge.asterdev.me/api/v1/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ context: contextHeader, prompt, stream: true }),
  });

  return new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      // Emits tokens continuously with sub-350ms TTFT
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        controller.enqueue(value);
      }
      controller.close();
    }
  });
}`,
            },
          },
        ],
      },
      {
        heading: "What happened when real people showed up",
        paragraphs: [
          "Shipping software you care about to actual users is always a humbling reality check. In localhost, every interaction feels obvious; in the hands of creators dealing with hectic schedules, your design assumptions dissolve in fifteen minutes.",
          "Before opening the beta, I assumed users would spend time tweaking minute sliders and chatting back and forth with the model. Completely wrong. Creators wanted surgical speed: paste a raw idea in five seconds, review the 0 to 10 score, glance at the hooks, and jump straight to the teleprompter. Less chit-chat, more practical leverage.",
          "When I added the Global Creator Leaderboard to the pipeline, my initial goal was simply to have a visual metric to track internal testing. But the dynamic shifted quickly. Watching creators like Diruen, Sweet, and others from the community showing up daily, testing dozens of ideas, racking up reputation points, and discussing script viability with me on Discord was the turning point. My own profile up there on the leaderboard was no longer just an isolated database test; the workspace had become a living production routine shared with real human beings.",
        ],
        image: {
          src: rankingImg,
          caption: "The community leaderboard: reputation scores, completed projects, and active creators.",
          alt: "StudioOS Creator Leaderboard",
        },
        callout: {
          type: "tip",
          title: "The power of live feedback",
          text: "Watching real users hit friction teaches you more about software ergonomics in an afternoon than three weeks of polishing Figma wireframes in isolation.",
        },
      },
      {
        heading: "What I actually learned putting AI into human hands",
        paragraphs: [
          "If I had to distill the entire process of conceiving, architecting, and operating StudioOS into a record of my engineering growth, the central lesson is straightforward: genuine software engineering with AI has very little to do with calling LLM endpoints. Writing an HTTP request to OpenAI or Anthropic is something any beginner tutorial covers in half an hour.",
          "The real product engineering craft lives in the surrounding ecosystem: state isolation, edge network resilience, graceful error recovery, and an obsession with shielding the user from unnecessary cognitive overhead. Looking back, documenting this project crystallized four core principles in my development as an engineer:",
        ],
        bulletPoints: [
          "**The interface must carry context, not the user**: If a system forces users to engineer prompts to get reliable output, the software failed at abstraction. Sound architecture transparently injects parameters, channel personas, and business logic before any model invocation.",
          "**Deterministic metrics beat generative fluff**: LLMs tend to return verbose, unfocused paragraphs. In actual production, strict 0-to-10 rubrics, retention percentages, and speaking-pace timers deliver vastly more engineering value than free-form prose.",
          "**Latency budget is a critical non-functional requirement**: Sluggish responses break concentration. By pairing Astro on the edge with Cloudflare Workers and Server-Sent Events to achieve under 350ms TTFT, I proved that perceived performance is not cosmetic: it is the baseline requirement for responsive tools.",
          "**Defensive architecture and non-negotiable human control**: The model should be a fast drafting assistant, never the final authority. Implementing strict schema validation with Zod, sanitized fallbacks, and atomic inline editing across every component was what kept the system stable as real creators scaled up usage.",
        ],
        callout: {
          type: "insight",
          title: "Engineering log",
          text: "Building StudioOS from scratch was a pivotal milestone in my professional growth: it taught me how to architect fault-tolerant distributed pipelines, prioritize sub-second edge performance, and prove that the true measure of an engineer is turning complex, ambiguous friction into robust, reliable software.",
        },
      },
    ],
  },
};
