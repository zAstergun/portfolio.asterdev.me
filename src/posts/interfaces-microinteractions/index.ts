import type { PostDefinition } from "../types";
import { interfacesTranslations } from "./translations";
import coverImg from "./cover.webp";
import lobbyImg from "./soulfighter-lobby.webp";
import antigoImg1 from "./soulfighter-antigo-1.png";
import antigoImg2 from "./soulfighter-antigo-2.png";
import rankingImg from "./soulfighter-ranking.webp";

export const interfacesPost: PostDefinition = {
  id: "blog-soulfighter-microinteractions",
  slug: "interfaces-microinteractions",
  date: "01 Nov 2026",
  icon: "sparkle",
  gradient: ["#11998e", "#38ef7d"],
  coverImage: coverImg,
  themeColor: "emerald",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Arquitetura Frontend", "Game Dev"],
  translations: interfacesTranslations,
  links: [
    {
      title: "Jogar Soul Fighter",
      url: "https://soulfighter.asterdev.me/",
      icon: "gamepad",
    },
    {
      title: "Ver Código no GitHub",
      url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game",
      icon: "github",
    },
  ],
  pt: {
    category: "Engenharia de Frontend & UI",
    title: "Três anos depois do primeiro commit: o que aprendi refazendo o Soul Fighter do zero",
    summary:
      "Em 02 de novembro de 2023, fiz o commit inicial de um jogo da memória em JavaScript puro. Três anos depois, decidi reconstruir o projeto do zero: como saí de gambiarras no DOM para Web Audio API nativa, React 19, GPU 3D e o que essa jornada diz sobre maturidade técnica.",
    coverCaption:
      "A nova arena do Soul Fighter Memory Game: animações 3D a 60 FPS na GPU, sound design tátil nativo e combate responsivo.",
    sections: [
      {
        heading: "O primeiro commit em 02 de novembro de 2023",
        paragraphs: [
          "Se você entrar hoje no repositório do Soul Fighter no GitHub e rolar o histórico até a primeira página de commits, vai encontrar o registro exato: 02 de novembro de 2023, com uma mensagem simples de 'start'.",
          "Naquela época, o projeto era um clássico exemplo de quem estava dando os primeiros passos no desenvolvimento web: uma pasta com arquivos soltos de HTML, CSS básico e um script JavaScript com dezenas de seletores manuais no DOM. A lógica inteira vivia em variáveis globais soltas no escopo, controladas por flags como lockBoard e hasFlippedCard.",
          "Fazer duas cartas virarem e tocarem um arquivo MP3 já parecia uma conquista épica. Olhar para aquele código três anos depois não me traz vergonha alguma; pelo contrário, dá uma perspectiva muito nítida de como a gente evolui quando continua construindo projetos com consistência.",
        ],
        image: {
          src: antigoImg1,
          caption: "O Soul Fighter em 02 de novembro de 2023: HTML puro, estilização rústica e lógica amarrada em manipulações diretas do DOM.",
          alt: "Versão antiga do Soul Fighter em novembro de 2023",
        },
        callout: {
          type: "insight",
          title: "O valor de guardar seus primeiros códigos",
          text: "Muitos desenvolvedores apagam seus repositórios antigos por receio de julgamento. Eu prefiro mantê-los públicos: são a telemetria mais honesta do quanto sua régua de qualidade subiu.",
        },
      },
      {
        heading: "A decisão de refazer do zero em vez de remendar",
        paragraphs: [
          "Três anos depois, em outubro de 2026, abri o projeto antigo. Eu poderia simplesmente ter trocado as cores no CSS ou consertado dois ou três bugs pontuais no temporizador. Mas decidi fazer o exercício mais transparente que um programador pode encarar: descartar o código antigo e reconstruir o jogo inteiro do zero, aplicando a bagagem de engenharia que adquiri nesse intervalo.",
          "A tela antiga de resultados expunha claramente as limitações daquela época: mensagens estáticas sem hierarquia visual, zero persistência de progresso e dependência crônica de timeouts engessados para tentar sincronizar animações com a lógica do jogo.",
          "A mudança principal não foi visual; foi de postura mental. Em 2023, minha preocupação era: 'como faço isso aparecer na tela agora?'. Em 2026, a pergunta virou: 'qual é o orçamento de latência dessa interação, como garanto 60 quadros por segundo constantes e como modelo o estado para que bugs de concorrência sejam matematicamente impossíveis?'.",
        ],
        image: {
          src: antigoImg2,
          caption: "Tela de resultados de 2023: caixas rígidas, sem textura visual e sem persistência confiável de pontuação.",
          alt: "Tela de vitória da versão de 2023 do Soul Fighter",
        },
      },
      {
        heading: "Da gambiarra no DOM à engenharia de performance real",
        paragraphs: [
          "Quando você compara as duas bases de código lado a lado, as maiores transformações não estão nas bibliotecas que foram importadas, mas na forma como o hardware do navegador é respeitado.",
        ],
        subsections: [
          {
            heading: "O áudio: da tag padrão com atraso à Web Audio API nativa",
            paragraphs: [
              "Em 2023, o som era disparado via new Audio('som.mp3').play(). O resultado prático era desastroso: atraso perceptível de quase duzentos milissegundos entre o clique e o som, engasgos quando o jogador clicava rápido demais e cortes abruptos de áudio causados por limitações de instâncias no navegador.",
              "Na reconstrução em 2026, adotei a Web Audio API nativa com um AudioContext singleton compartilhado. Todos os buffers de áudio são decodificados previamente na memória durante o carregamento inicial. Quando uma carta é virada ou um combo acontece, o nó de áudio é disparado com latência inferior a dois milissegundos, com controle independente de ganho e atenuação via curvas exponenciais.",
            ],
            codeBlock: {
              language: "typescript",
              filename: "audioEngine.ts",
              code: `// Disparo tátil de baixa latência (< 2ms) sem dependências externas
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Rampa de frequência simulando clique mecânico
  osc.type = "sine";
  osc.frequency.setValueAtTime(880, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.035);
  
  envelope.gain.setValueAtTime(0.18, ctx.currentTime);
  envelope.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
  
  osc.connect(envelope).connect(gainNode);
  osc.start();
  osc.stop(ctx.currentTime + 0.035);
}`,
            },
            callout: {
              type: "tech",
              title: "Latência de áudio é sensação tátil",
              text: "Quando a resposta sonora acontece em menos de 2ms, o cérebro do jogador interpreta o clique na tela como um interruptor mecânico físico.",
            },
          },
          {
            heading: "A renderização 3D: do reflow na CPU à GPU dedicada",
            paragraphs: [
              "No projeto original de 2023, girar as cartas dependia de transições CSS soltas que disparavam recalculo de layout (reflow) e repintura (repaint) a cada interação, gerando engasgos visíveis quando várias cartas se movimentavam ao mesmo tempo.",
              "A versão atual utiliza aceleração de hardware nativa: com transform-style: preserve-3d, backface-visibility: hidden e compositing layers isoladas, o navegador entrega a matemática das transformações 3D diretamente para a GPU. Vinte e quatro cartas viram simultaneamente mantendo sessenta quadros por segundo constantes, mesmo em celulares modestos.",
            ],
            image: {
              src: lobbyImg,
              caption: "O Soul Fighter em 2026: lobby arcade moderno, seleção tátil de heróis, áudio reativo e aceleração por GPU.",
              alt: "Soul Fighter moderno em 2026 - Lobby e Interface",
            },
          },
        ],
      },
      {
        heading: "Estado determinístico, persistência e produção real",
        paragraphs: [
          "Outro abismo técnico entre as duas versões está no gerenciamento de dados. Em 2023, se o jogador clicasse em três cartas muito rápido, o jogo travava com duas cartas viradas para sempre porque o lockBoard não conseguia lidar com eventos concorrentes dentro de um setTimeout.",
          "Na versão moderna, estruturei a aplicação com React 19 e TypeScript rigoroso em uma máquina de estados determinística: cada transição de fase (idle, flipping, comparing, combo, victory) é blindada contra cliques concorrentes e estados intermediários inválidos.",
          "Além disso, conectei a persistência em tempo real com Supabase no ecossistema da Rede ASTER. Criei um sistema de ranking global com autenticação de convidados, cálculo de pontuação baseado em multiplicadores de dificuldade e sanitização estrita de dados no backend para evitar manipulações no cliente.",
        ],
        image: {
          src: rankingImg,
          caption: "O Leaderboard global no Supabase: persistência em tempo real, cálculo de multiplicadores e integridade de pontuações.",
          alt: "Ranking global do Soul Fighter",
        },
      },
      {
        heading: "O que esses 3 anos realmente me ensinaram sobre programar",
        paragraphs: [
          "Revisitar um projeto antigo com o olhar de quem acumulou anos de estudo e experiência prática é um dos exercícios mais recompensadores que um engenheiro de software pode fazer. A distância entre aquele commit solitário de 02 de novembro de 2023 e a versão atual não se resume a trocar JavaScript puro por React ou Tailwind.",
          "A mudança mais profunda está na clareza com que enxergo cada linha de código hoje. Documentando essa retrospectiva para o meu diário de bordo técnico, consigo resumir essa evolução em quatro convicções que guiam meu trabalho profissional:",
        ],
        bulletPoints: [
          "**Previsibilidade supera esperteza**: Código bom não é aquele que tenta ser brilhante em uma linha cheia de truques incompreensíveis. Código bom é o que estabelece limites claros, possui tipagem sólida e permite que qualquer desenvolvedor audite a lógica sem esforço mental desnecessário.",
          "**Performance não é pós-processamento, é fundação**: Deixar para pensar em taxa de quadros e latência no fim do projeto é receita para retrabalho. Arquitetura de interface precisa nascer com orçamentos claros de tempo de resposta: áudio em menos de 2ms, primeiro frame estático em menos de 800ms e animações sem tocar na CPU.",
          "**Acessibilidade não é opcional**: Um jogo arcade moderno precisa respeitar preferências do sistema, como prefers-reduced-motion para quem tem sensibilidade vestibular, suporte a navegação por teclado e controle de volume persistido.",
          "**Respeito pela atenção do usuário**: Criar um software que responde de forma tátil, rápida e sem engasgos não é capricho estético; é demonstrar respeito pelo tempo e pela experiência da pessoa que está do outro lado da tela.",
        ],
        callout: {
          type: "insight",
          title: "Diário de engenharia",
          text: "Reconstruir o Soul Fighter foi a prova mais tangível da minha maturidade técnica: ver como os mesmos problemas que me travavam no começo da jornada hoje são resolvidos com arquitetura sólida, elegância e robustez.",
        },
      },
    ],
  },
  en: {
    category: "Frontend & UI Engineering",
    title: "Three years after the first commit: what I learned rebuilding Soul Fighter from scratch",
    summary:
      "On November 2, 2023, I pushed my initial commit for a memory card game in vanilla JavaScript. Three years later, I rebuilt the entire project from scratch: going from fragile DOM hacks to native Web Audio API, React 19, GPU 3D pipelines, and what this journey reveals about engineering maturity.",
    coverCaption:
      "The new Soul Fighter Memory Game arena: 60 FPS GPU-accelerated 3D animations, native tactile sound design, and responsive combat UI.",
    sections: [
      {
        heading: "The very first commit on November 2, 2023",
        paragraphs: [
          "If you navigate to the Soul Fighter GitHub repository and scroll back to the very first page of commit history, you will find the exact timestamp: November 2, 2023, stamped with a modest commit message that simply read 'start'.",
          "Back then, the project was a quintessential beginner project: a single folder with detached HTML, rudimentary CSS, and a vanilla JavaScript script packed with manual querySelector calls. The entire game logic lived in global variables exposed on the window scope, held together by makeshift flags like lockBoard and hasFlippedCard.",
          "Getting two cards to flip and play an audio file felt like a monumental triumph back then. Looking at that code three years later brings no embarrassment; instead, it offers crystal-clear perspective on how engineering instincts mature when you build consistently over time.",
        ],
        image: {
          src: antigoImg1,
          caption: "Soul Fighter on November 2, 2023: vanilla HTML, rustic CSS styling, and logic tightly bound to direct DOM mutations.",
          alt: "Original 2023 version of Soul Fighter",
        },
        callout: {
          type: "insight",
          title: "The value of preserving early code",
          text: "Many developers wipe their early repositories out of fear of being judged. I prefer keeping them public: they are the most transparent telemetry of how high your engineering bar has climbed.",
        },
      },
      {
        heading: "Deciding to rebuild from scratch instead of patching",
        paragraphs: [
          "Three years later, in October 2026, I pulled up the old codebase. I could have easily swapped a few CSS colors or patched a couple of timer quirks. Instead, I chose the most honest exercise a developer can face: discarding the old code entirely and rebuilding the game from the ground up with the engineering depth I have accumulated since.",
          "The old victory screen laid bare the architectural constraints of that era: rigid message boxes without visual hierarchy, zero state persistence, and chronic reliance on nested timeouts to sync animations with game rules.",
          "The core shift was not aesthetic; it was mental. In 2023, my main question was: 'how do I make this show up on the screen right now?'. In 2026, the question became: 'what is the latency budget of this interaction, how do we guarantee locked 60 FPS, and how do we model state so race conditions are mathematically impossible?'.",
        ],
        image: {
          src: antigoImg2,
          caption: "2023 results screen: rigid layout, flat visuals, and no reliable score persistence.",
          alt: "Old 2023 Soul Fighter victory screen",
        },
      },
      {
        heading: "From fragile DOM hacks to real performance engineering",
        paragraphs: [
          "Comparing both codebases side-by-side reveals that the biggest differences are not the libraries imported, but how the underlying browser hardware is utilized.",
        ],
        subsections: [
          {
            heading: "Audio: from sluggish audio tags to native Web Audio API",
            paragraphs: [
              "In 2023, audio playback relied on new Audio('sound.mp3').play(). The result was clumsy: noticeable latency approaching two hundred milliseconds, audio glitches during rapid clicks, and browser auto-play restrictions choking simultaneous instances.",
              "In the 2026 rebuild, I implemented the native Web Audio API with a shared AudioContext singleton. All sound buffers are pre-decoded into memory during boot. When a card flips or a combo triggers, audio nodes fire within two milliseconds, offering granular gain control and smooth exponential falloffs.",
            ],
            codeBlock: {
              language: "typescript",
              filename: "audioEngine.ts",
              code: `// Low-latency (< 2ms) tactile audio feedback with zero dependencies
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Frequency sweep simulating mechanical click
  osc.type = "sine";
  osc.frequency.setValueAtTime(880, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.035);
  
  envelope.gain.setValueAtTime(0.18, ctx.currentTime);
  envelope.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
  
  osc.connect(envelope).connect(gainNode);
  osc.start();
  osc.stop(ctx.currentTime + 0.035);
}`,
            },
            callout: {
              type: "tech",
              title: "Audio latency equals tactile feel",
              text: "When sound feedback arrives under 2ms, the human brain registers the glass screen as a responsive physical switch.",
            },
          },
          {
            heading: "3D rendering: offloading CPU reflows to dedicated GPU layers",
            paragraphs: [
              "The original 2023 project relied on basic CSS transitions that caused constant layout reflows and repaints with every click, producing noticeable frame drops when multiple cards moved together.",
              "The modern build leans on hardware acceleration: utilizing transform-style: preserve-3d, backface-visibility: hidden, and isolated compositing layers, the browser pushes 3D transformation math straight to the GPU. Twenty-four cards animate simultaneously at a locked sixty frames per second, even on low-end mobile devices.",
            ],
            image: {
              src: lobbyImg,
              caption: "Soul Fighter in 2026: modern arcade lobby, tactile hero selection, reactive audio, and full GPU acceleration.",
              alt: "Modern Soul Fighter 2026 arcade lobby",
            },
          },
        ],
      },
      {
        heading: "Deterministic state, persistence, and real production",
        paragraphs: [
          "Another technical divide between the two versions lies in state management. In 2023, if a player clicked three cards in rapid succession, the game would permanently stall with two cards exposed because lockBoard could not handle concurrent events inside asynchronous timeouts.",
          "In the modern edition, I architected the application with React 19 and strict TypeScript around a deterministic state machine: each phase transition (idle, flipping, comparing, combo, victory) is impervious to race conditions and invalid intermediary states.",
          "Additionally, real-time persistence connects with Supabase within the Rede ASTER ecosystem. A global leaderboard provides guest session handling, difficulty-based multiplier computations, and strict backend data sanitization to prevent client tampering.",
        ],
        image: {
          src: rankingImg,
          caption: "The global Supabase leaderboard: real-time persistence, difficulty multipliers, and score integrity.",
          alt: "Soul Fighter global leaderboard",
        },
      },
      {
        heading: "What these 3 years truly taught me about software engineering",
        paragraphs: [
          "Revisiting an old codebase with years of focused study and hands-on production experience is one of the most rewarding milestones a software engineer can experience. The distance between that solitary commit on November 2, 2023, and the present version is not about swapping vanilla JavaScript for React or Tailwind.",
          "The profound transformation is in the clarity of intent behind every line of code. Documenting this retrospective for my engineering log, I can summarize this growth into four principles that shape my daily work:",
        ],
        bulletPoints: [
          "**Predictability beats cleverness**: Quality code is never about cramming complex tricks into dense one-liners. Clean code establishes explicit boundaries, carries solid types, and allows any senior engineer to audit logic without cognitive strain.",
          "**Performance is an architectural foundation, not an afterthought**: Treating frame pacing and latency as late-stage polish leads directly to technical debt. Systems must start with defined latency budgets: audio under 2ms, initial paint under 800ms, and 60 FPS animations without CPU contention.",
          "**Accessibility is mandatory**: A modern arcade interface must honor system preferences like prefers-reduced-motion for vestibular comfort, complete keyboard navigability, and persistent user audio controls.",
          "**Respect for user attention**: Crafting software that feels snappy, physical, and rock-solid is not superficial polish; it is how we demonstrate genuine respect for the time and focus of the person using our creation.",
        ],
        callout: {
          type: "insight",
          title: "Engineering log",
          text: "Rebuilding Soul Fighter was the most tangible proof of my technical maturity: seeing how the very problems that once stalled my code are now solved with sound architecture, elegance, and resilience.",
        },
      },
    ],
  },
};
