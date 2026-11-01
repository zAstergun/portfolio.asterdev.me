import type { PostContent } from "../../types";
import antigoImg1 from "../soulfighter-antigo-1.png";
import antigoImg2 from "../soulfighter-antigo-2.png";
import lobbyImg from "../soulfighter-lobby.webp";
import rankingImg from "../soulfighter-ranking.webp";

// ─── Japanese (jp) ──────────────────────────────────────────────
export const jpContent: PostContent = {
  category: "フロントエンド & UIエンジニアリング",
  title: "最初のコミットから3年：Soul Fighterをゼロから再構築して学んだこと",
  summary:
    "2023年11月2日、私は純粋なJavaScriptで神経衰弱ゲームの最初のコミットを行いました。3年後、プロジェクトを根本から再構築することを決意。脆弱なDOM操作からネイティブWeb Audio API、React 19、GPU 3Dパイプラインへの移行と、技術的成熟の軌跡を振り返ります。",
  coverCaption:
    "新しくなったSoul Fighter Memory Gameのアリーナ：GPUによる60FPS 3Dアニメーション、ネイティブな触覚サウンド、直感的なバトルUI。",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "フロントエンド設計", "ゲーム開発"],
  links: [
    { title: "Soul Fighter をプレイ", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "GitHub でコードを見る", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "2023年11月2日、すべての始まりとなる最初のコミット",
      paragraphs: [
        "現在GitHubにあるSoul Fighterのリポジトリを開き、コミット履歴を一番最初のページまで遡ると、まさにその瞬間が見つかります。2023年11月2日、添えられたメッセージはシンプルに「start」でした。",
        "当時のプロジェクトは、Web開発の第一歩を踏み出したばかりの開発者特有の典型的な構成でした。バラバラのHTMLファイル、初歩的なCSS、そして手作業のquerySelectorに依存したJavaScript。ゲームロジックのすべてがwindowスコープのグローバル変数に直書きされ、lockBoardやhasFlippedCardといったその場しのぎのフラグで辛うじて動いていました。",
        "2枚のカードがめくられ、音声ファイルが鳴るだけでも当時は大きな達成感がありました。3年経った今、そのコードを振り返っても恥ずかしさはありません。着実にコードを書き続けることで、技術的基準がいかに洗練されていくかを明確に教えてくれるからです。",
      ],
      image: {
        src: antigoImg1,
        caption: "2023年11月2日時点のSoul Fighter：素のHTML、初歩的なスタイリング、DOM操作に依存した構造。",
        alt: "2023年11月のSoul Fighter初期バージョン",
      },
      callout: {
        type: "insight",
        title: "初期のコードを公開し続ける価値",
        text: "多くの開発者は批判を恐れて過去のリポジトリを削除してしまいます。しかし私は公開を続けます。それこそが自身の技術的水準の進化を測る最も誠実な記録だからです。",
      },
    },
    {
      heading: "継ぎ接ぎの修正ではなく「ゼロからの再構築」という決断",
      paragraphs: [
        "3年後の2026年10月、私は当時のコードを再び開きました。CSSの配色を少し整えたり、タイマーの不具合を2〜3箇所直すだけで済ませることもできました。しかし、エンジニアとして最も誠実な道を選びました。古いコードを潔く捨て去り、その間に蓄積した設計思想を注ぎ込んでゲーム全体をゼロから組み直すことです。",
        "当時のリザルト画面は、初期の制約を象徴していました。視覚的階層のない無機質な枠線、リロードで消えるスコア、アニメーションとゲームルールの同期を入れ子になったsetTimeoutに頼る不安定さです。",
        "最大の変化は見た目ではなく思考の基準でした。2023年は「どうやってこれを今すぐ画面に出すか」でしたが、2026年には「この操作のレイテンシ予算はどれくらいか、どうやって60FPSを常時維持するか、どう状態を設計すれば競合状態を数学的に排除できるか」へと進化しました。",
      ],
      image: {
        src: antigoImg2,
        caption: "2023年の結果画面：固定化されたレイアウト、平坦なビジュアル、スコアの保存機能なし。",
        alt: "2023年版Soul Fighterの勝利画面",
      },
    },
    {
      heading: "その場しのぎのDOM操作から本物のパフォーマンスエンジニアリングへ",
      paragraphs: [
        "両方のコードを並べて比較したとき、最も大きな差は使われているライブラリではなく、ブラウザのハードウェアリソースをどう活かしているかにあります。",
      ],
      subsections: [
        {
          heading: "音声：遅延の激しいaudioタグからネイティブWeb Audio APIへ",
          paragraphs: [
            "2023年当時は、効果音をnew Audio('sound.mp3').play()で再生していました。その結果は壊滅的で、クリックしてから音が出るまでに200ミリ秒近く遅れ、素早くカードをクリックすると音が途切れ、ブラウザの同時再生制限に引っかかっていました。",
            "2026年のリファクタリングでは、共有シングルトンAudioContextを用いたWeb Audio APIを導入しました。全音声バッファは初期ロード時にメモリ上へ展開。カードの反転やコンボが発生した瞬間、指数関数的な減衰カーブを伴って2ミリ秒未満の超低遅延で発音されます。",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// 外部依存なし・超低遅延（< 2ms）の触覚フィードバック
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // メカニカルクリックを模した周波数カーブ
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
            title: "音声の低遅延は「触覚」を生む",
            text: "音のフィードバックが2ミリ秒未満で返ってくると、人間の脳はスマートフォンのガラス面へのタッチを「本物の機械式スイッチ」として認識します。",
          },
        },
        {
          heading: "3Dレンダリング：CPU負荷のレイアウト再計算からGPU専用レイヤーへ",
          paragraphs: [
            "初代のカード回転は単純なCSS遷移で実装されており、操作のたびにレイアウト再計算（reflow）と再描画（repaint）が走り、複数枚が同時にめくられると目に見えてカクついていました。",
            "2026年版ではハードウェアアクセラレーションを全面活用。transform-style: preserve-3d、backface-visibility: hidden、そして独立した合成レイヤーにより、ブラウザは行列計算をGPUに直接委譲します。24枚のカードが同時に回転しても、エントリーモデルの端末ですら滑らかな60FPSを維持します。",
          ],
          image: {
            src: lobbyImg,
            caption: "2026年のSoul Fighter：モダンなアーケードロビー、直感的なキャラクター選択、高応答サウンド、GPUアクセラレーション。",
            alt: "Soul Fighter 2026の洗練されたロビーUI",
          },
        },
      ],
    },
    {
      heading: "決定論的ステートマシン、リアルタイム永続化と本番クオリティ",
      paragraphs: [
        "状態管理の面でも格段の進化を遂げました。2023年版ではカードを3回素早くクリックすると、setTimeoutと競合してカードが開いたまま固まる致命的なバグが存在していました。",
        "React 19と厳格なTypeScriptを採用した現代の構成では、決定論的ステートマシンを構築。各フェーズ遷移（idle, flipping, comparing, combo, victory）が完全に保護され、連打や不正な遷移は数学的に遮断されます。",
        "さらにASTERネットワーク内のSupabaseと連携し、リアルタイムデータ同期を実現。ゲスト認証対応のグローバルランキング、難易度倍率計算、クライアント側の改ざんを防御するサーバーサイドバリデーションを完備しています。",
      ],
      image: {
        src: rankingImg,
        caption: "Supabaseによるグローバルリーダーボード：リアルタイム同期、倍率スコア算出、完全性検証。",
        alt: "Soul Fighterのグローバルランキング画面",
      },
    },
    {
      heading: "この3年間が教えてくれたソフトウェア設計の本質",
      paragraphs: [
        "数年間の学習と実践を経て初期のコードを再訪することは、エンジニアにとって最も有意義な内省です。2023年11月2日のあのコミットと現在の成果との距離は、単にReactやTailwindを導入したことだけに留まりません。",
        "真の進化は、1行ごとのコードに込められた意図の明快さにあります。この歩みを通じて得た4つの確信をここに記します：",
      ],
      bulletPoints: [
        "**予測可能性は小手先の工夫に勝る**：優れたコードとは、難解な1行で賢さを誇示するものではありません。明確な境界を引き、堅牢な型を持ち、誰でも迷わず監査できるコードこそが真に優れています。",
        "**パフォーマンスは基盤であり、後付けの化粧ではない**：プロジェクトの終盤になってからフレームレートや遅延を意識しても手遅れです。音声遅延2ms以下、初回描画800ms以下、GPU活用といった明確な予算を最初から設ける必要があります。",
        "**アクセシビリティは必須要件**：現代のゲームはprefers-reduced-motionに対応し、完全なキーボード操作と音量設定の保存を当然備えているべきです。",
        "**ユーザーの集中力に対する敬意**：引っかかりのない俊敏で心地よいインターフェースを作ることは、装飾ではなく、画面の前にいる相手の時間への最大の敬意です。",
      ],
      callout: {
        type: "insight",
        title: "開発ログの総括",
        text: "Soul Fighterの再構築は自身の技術的成長の何よりの証明となりました。かつて私を立ち往生させた壁が、今では堅牢で洗練されたアーキテクチャによって優雅に解決されています。",
      },
    },
  ],
};

// ─── Simplified Chinese (cn) ────────────────────────────────────
export const cnContent: PostContent = {
  category: "前端与 UI 工程",
  title: "初次提交三年后：从零重构 Soul Fighter 给我带来的工程思考",
  summary:
    "2023年11月2日，我用原生 JavaScript 提交了一款卡牌记忆游戏的初始代码。三年后，我决定推倒重来：从原始的 DOM 操作到原生 Web Audio API、React 19、GPU 3D 渲染，探讨这段旅程背后的技术成熟蜕变。",
  coverCaption:
    "全新 Soul Fighter Memory Game 竞技场：基于 GPU 的 60 FPS 3D 动画、原生触感音效与响应灵敏的对战界面。",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "前端架构", "游戏开发"],
  links: [
    { title: "体验 Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "在 GitHub 查看源码", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "2023年11月2日：那个带有 'start' 的最初提交",
      paragraphs: [
        "如果你今天打开 GitHub 上的 Soul Fighter 仓库并将提交记录翻到第一页，会看到一个清晰的时间戳：2023年11月2日，附带一条极其质朴的说明：'start'。",
        "在那个阶段，该项目可以说是每个前端新手初学时期的典型缩影：一个散落着 HTML 文件的文件夹、简陋的基础 CSS，以及写满了原生 querySelector 操作的 JavaScript 脚本。整个游戏的状态全凭挂载在全局 window 上的松散变量维护，靠 lockBoard 和 hasFlippedCard 等标志位勉强运转。",
        "让两张卡片翻转并播放一段 MP3 音频，在当时看来就已经是一次巨大的飞跃。三年后重看那段代码，我丝毫没有难为情；相反，它为我提供了一个清晰的参照物，证明持续不懈地构建项目能够让一个开发者的工程审美提升到何种高度。",
      ],
      image: {
        src: antigoImg1,
        caption: "2023年11月2日的 Soul Fighter：纯 HTML、原始样式与重度依赖 DOM 的控制逻辑。",
        alt: "2023年11月 Soul Fighter 初始版本",
      },
      callout: {
        type: "insight",
        title: "保留初期代码的真正价值",
        text: "许多开发者因为担心被评头论足而删除自己早期的练习仓库。我更倾向于公开它们：这是丈量你工程标准跨越式提升的最诚实证据。",
      },
    },
    {
      heading: "放弃缝缝补补，选择彻头彻尾的推倒重构",
      paragraphs: [
        "三年后的2026年10月，我重新打开了这套旧代码。我本可以只是换换 CSS 配色，修补计时器里的一两个小 Bug。但我最终选择了对工程师而言最坦荡的挑战：丢弃旧代码，用这几年沉淀下来的架构理念将整款游戏从地基重新搭建。",
        "旧版的结算画面彻底暴露了当时的局限：毫无视觉层级的生硬方块、毫无持久化机制的单机数据，以及靠层层嵌套的 setTimeout 来硬性对齐动画与规则的脆弱逻辑。",
        "最核心的转变不在于外观，而在于思维模型。2023年我想的是：'怎么让这个东西马上出现在屏幕上？'；到了2026年，思考变成了：'这次交互的延迟预算是多少毫秒？如何锁定 60 FPS？如何设计状态模型才能在数学层面上根除竞态条件？'。",
      ],
      image: {
        src: antigoImg2,
        caption: "2023年结算界面：僵硬的布局、扁平的质感，无法持久保存成绩。",
        alt: "2023版 Soul Fighter 胜利结算画面",
      },
    },
    {
      heading: "告别 DOM 粗糙操作，迈向真正的性能工程",
      paragraphs: [
        "将两版代码逐行对比，最本质的差距不在于安装了哪些依赖库，而在于对浏览器底层硬件资源的调配方式。",
      ],
      subsections: [
        {
          heading: "音频：从迟钝的 audio 标签到原生 Web Audio API",
          paragraphs: [
            "在2023年，音效是通过 new Audio('sound.mp3').play() 触发的。这带来了灾难性的后果：点击与发声之间存在近200毫秒的显著延迟，快速连续点击时严重卡顿，甚至因为浏览器实例上限导致声音被强行掐断。",
            "2026年的重构中，我引入了共享单例 AudioContext 的原生 Web Audio API。所有音频缓冲区在页面启动时便提前解码常驻内存。当翻牌或打出连击时，音频节点能在2毫秒以内即刻响应，并配合指数衰减曲线实现逼真质感。",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// 零外部依赖、极低延迟（< 2ms）的触觉音效引擎
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // 模拟机械微动开关的快速频率跳跃
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
            title: "音频延迟即触觉反馈",
            text: "当声音在手指触碰屏幕后 2 毫秒内爆发时，人类大脑会直接将其感知为一个真实的物理微动按键。",
          },
        },
        {
          heading: "3D 渲染：将 CPU 重排重绘下沉至 GPU 专属图层",
          paragraphs: [
            "旧版的卡牌翻转依赖简单的 CSS 变换，每次触发都会迫使浏览器重新计算几何布局（reflow）与重绘（repaint），多张卡牌齐动时卡顿明显。",
            "2026年版本全面拥抱硬件加速：通过 transform-style: preserve-3d、backface-visibility: hidden 与独立的合成图层，浏览器将三维矩阵计算直接交由 GPU 处理。即便在百元机上，24张卡片全量翻转也能始终稳在 60 帧。",
          ],
          image: {
            src: lobbyImg,
            caption: "2026年的 Soul Fighter：街机风格大厅、细腻的角色选择、触感音频与全量 GPU 加速。",
            alt: "Soul Fighter 2026 现代游戏大厅界面",
          },
        },
      ],
    },
    {
      heading: "确定性状态机、实时持久化与生产级韧性",
      paragraphs: [
        "数据流的管理展现了另一个量级的跨越。2023年如果玩家手速极快地连点三张卡，游戏就会彻底挂死并留下翻不开的牌面，因为 lockBoard 无法在异步定时器中处理并发操作。",
        "在基于 React 19 和严格 TypeScript 的新架构中，我设计了确定性状态机：每一个状态流转（idle, flipping, comparing, combo, victory）都被严密封装，杜绝任何无效的中间态与并发竞态。",
        "同时，我将其接入 ASTER 网络生态中的 Supabase。具备访客认证的全球排行榜能根据关卡难度计算倍率，并在后端进行严密校验，彻底杜绝客户端作弊行为。",
      ],
      image: {
        src: rankingImg,
        caption: "基于 Supabase 的全球排行榜：实时同步、动态倍率以及后端防篡改校验。",
        alt: "Soul Fighter 全球排行榜界面",
      },
    },
    {
      heading: "这三年对软件工程认知的深刻重塑",
      paragraphs: [
        "站在积累了数年实战经验的高度去回望自己写下的起点，是软件工程师最富成效的心灵洗礼。2023年11月2日那个青涩的提交与如今的架构之间的距离，绝不仅仅是用 React 或 Tailwind 替换纯 JS 那么简单。",
        "真正的改变在于写下每一行代码时的笃定与透彻。这段经历沉淀为四条指导我职业开发的工程信条：",
      ],
      bulletPoints: [
        "**可预测性远胜过巧言令色**：优秀的工程代码从不需要靠晦涩难懂的一行流来证明聪明。清晰划分边界、具备严谨类型、让人无心智负担即可审计的代码才是上乘之作。",
        "**性能是根基，绝非收尾时的涂脂抹粉**：将掉帧和延迟问题拖到项目收尾才解决注定是灾难。架构自立项起就必须制定明确指标：音频延迟低于 2ms、首屏渲染低于 800ms、动效必须走 GPU。",
        "**无障碍不是可有可无的装饰**：现代 Web 体验必须主动适配 prefers-reduced-motion，支持全键盘操控，并自动持久化音量喜好。",
        "**对用户注意力的绝对敬畏**：打造响应迅敏、触感细腻、毫无阻滞的软件并不是炫技，而是对屏幕对面使用者时间的最深敬意。",
      ],
      callout: {
        type: "insight",
        title: "工程手记总结",
        text: "重写 Soul Fighter 是我技术成熟的最有力注脚：昔日让我焦头烂额的技术瓶颈，如今已能在坚如磐石的架构设计中被从容化解。",
      },
    },
  ],
};

// ─── Korean (kr) ────────────────────────────────────────────────
export const krContent: PostContent = {
  category: "프론트엔드 & UI 엔지니어링",
  title: "첫 커밋 3년 후: Soul Fighter를 밑바닥부터 다시 만들며 배운 것들",
  summary:
    "2023년 11월 2일, 바닐라 자바스크립트로 만든 카드 메모리 게임의 첫 커밋을 올렸습니다. 3년 뒤 전체 프로젝트를 처음부터 다시 재구축하기로 결정했습니다. 취약한 DOM 조작에서 네이티브 Web Audio API, React 19, GPU 3D로 나아간 기술적 성장의 여정을 공유합니다.",
  coverCaption:
    "새로워진 Soul Fighter Memory Game 경기장: GPU 기반 60 FPS 3D 애니메이션, 네이티브 햅틱 사운드, 반응형 전투 UI.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "프론트엔드 아키텍처", "게임 개발"],
  links: [
    { title: "Soul Fighter 플레이하기", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "GitHub에서 코드 보기", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "2023년 11월 2일, 'start'라는 단출한 첫 커밋",
      paragraphs: [
        "오늘날 GitHub의 Soul Fighter 저장소에서 커밋 히스토리를 첫 페이지까지 거슬러 올라가면 정확한 기록을 만날 수 있습니다. 2023년 11월 2일, 'start'라는 담백한 메시지로 시작된 기록입니다.",
        "당시 프로젝트는 웹 개발을 막 시작한 사람들의 전형적인 모습이었습니다. 흩어진 HTML 파일, 기초적인 CSS, 수많은 수동 querySelector로 점철된 자바스크립트 스크립트. 게임 전체 로직은 window 스코프에 노출된 전역 변수에서 실행되었고 lockBoard나 hasFlippedCard 같은 임시 플래그로 간신히 통제되었습니다.",
        "카드 두 장이 뒤집히고 효과음 파일이 재생되는 것만으로도 대단한 승리처럼 느껴졌던 시절이었습니다. 3년이 지난 지금 그 코드를 다시 보아도 부끄럽지 않습니다. 꾸준히 무언가를 만들 때 엔지니어링의 기준이 어떻게 높아지는지 가장 명료하게 보여주기 때문입니다.",
      ],
      image: {
        src: antigoImg1,
        caption: "2023년 11월 2일의 Soul Fighter: 순수 HTML, 투박한 스타일링, DOM 조작에 종속된 로직.",
        alt: "2023년 11월 Soul Fighter 초기 버전",
      },
      callout: {
        type: "insight",
        title: "초기 코드를 보존하는 진정한 가치",
        text: "많은 개발자들이 다른 사람의 시선이 두려워 초창기 저장소를 지워버립니다. 하지만 저는 공개해 두는 것을 선호합니다. 자신의 품질 기준이 얼마나 높아졌는지를 증명하는 가장 진솔한 원격 지표이기 때문입니다.",
      },
    },
    {
      heading: "땜질식 수정을 거부하고 '완전한 재구축'을 선택하다",
      paragraphs: [
        "3년 뒤인 2026년 10월, 오래된 코드를 다시 열었습니다. 단순히 CSS 색상을 바꾸거나 타이머 버그 몇 개를 고치는 것으로 끝낼 수도 있었습니다. 하지만 엔지니어로서 마주할 수 있는 가장 정직한 선택을 내렸습니다. 과거의 코드를 완전히 버리고, 그동안 쌓아온 공학적 역량을 쏟아부어 게임 전체를 새로 짓는 것이었습니다.",
        "예전의 결과 화면은 당시의 한계를 여실히 드러냈습니다. 시각적 위계 없는 딱딱한 박스, 점수 보존의 부재, 애니메이션과 게임 규칙을 맞추기 위해 중첩된 setTimeout에 전적으로 의존하는 불안정함이었습니다.",
        "핵심 변화는 시각적인 것이 아닌 사고방식의 전환이었습니다. 2023년에는 '어떻게 해야 지금 당장 화면에 띄울 수 있을까?'를 고민했다면, 2026년에는 '이 인터랙션의 레이턴시 예산은 얼마인가, 어떻게 지속적인 60 FPS를 보장할 것인가, 상태를 어떻게 모델링해야 레이스 컨디션을 수학적으로 원천 차단할 수 있을까?'를 묻게 되었습니다.",
      ],
      image: {
        src: antigoImg2,
        caption: "2023년 결과 화면: 경직된 레이아웃, 평면적인 비주얼, 점수 저장 불가.",
        alt: "2023년 Soul Fighter 승리 화면",
      },
    },
    {
      heading: "불안정한 DOM 조작에서 진정한 성능 엔지니어링으로",
      paragraphs: [
        "두 코드베이스를 나란히 비교해 보면 가장 큰 격차는 어떤 외부 라이브러리를 썼는지가 아니라, 브라우저 하드웨어를 어떻게 다루고 있는가에서 나타납니다.",
      ],
      subsections: [
        {
          heading: "오디오: 지연이 심한 audio 태그에서 네이티브 Web Audio API로",
          paragraphs: [
            "2023년에는 new Audio('sound.mp3').play()로 효과음을 재생했습니다. 그 결과 클릭과 사운드 사이에 200ms에 가까운 심각한 딜레이가 발생했고, 빠르게 연타하면 소리가 씹히거나 브라우저 인스턴스 한계로 사운드가 뚝뚝 끊겼습니다.",
            "2026년 재구축에서는 공유 싱글톤 AudioContext를 기반으로 네이티브 Web Audio API를 적용했습니다. 모든 오디오 버퍼는 초기 로드 시 메모리에 사전 디코딩됩니다. 카드가 뒤집히거나 콤보가 터지는 순간 2ms 미만의 극초저지연으로 반응하며, 지수 감쇠 곡선을 통해 정밀한 볼륨을 제어합니다.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// 외부 라이브러리 없는 극초저지연(< 2ms) 햅틱 사운드
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // 기계식 스위치를 시뮬레이션하는 주파수 램프
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
            title: "오디오 레이턴시는 곧 물리적 촉감이다",
            text: "소리 피드백이 2밀리초 미만으로 즉각 반응할 때, 인간의 뇌는 유리 화면 터치를 물리적인 기계식 스위치 클릭으로 인식합니다.",
          },
        },
        {
          heading: "3D 렌더링: CPU 리플로우를 전용 GPU 레이어로 전환",
          paragraphs: [
            "과거 버전의 카드 회전은 단순한 CSS 트랜지션에 의존해 매 동작마다 리플로우와 리페인트를 유발했고, 여러 장이 움직일 때 심한 버벅임이 발생했습니다.",
            "2026년 버전은 하드웨어 가속을 적극 활용합니다. transform-style: preserve-3d, backface-visibility: hidden과 독립 합성 레이어를 적용해 3D 변환 연산을 GPU가 직접 처리합니다. 24장의 카드가 동시에 회전해도 보급형 모바일 기기에서조차 60 FPS를 안정적으로 유지합니다.",
          ],
          image: {
            src: lobbyImg,
            caption: "2026년의 Soul Fighter: 세련된 아케이드 로비, 햅틱 영웅 선택, 반응형 오디오, GPU 가속.",
            alt: "Soul Fighter 2026 로비 인터페이스",
          },
        },
      ],
    },
    {
      heading: "결정론적 상태 머신, 실시간 영속성과 실전 프로덕션 품질",
      paragraphs: [
        "상태 관리에서도 엄청난 질적 도약이 있었습니다. 2023년에는 카드를 빠르게 3번 누르면 setTimeout과 엉켜 카드가 뒤집힌 채 게임이 완전히 멈춰버렸습니다.",
        "React 19와 엄격한 TypeScript를 기반으로 한 신규 아키텍처에서는 결정론적 상태 머신을 설계했습니다. 모든 상태 전이(idle, flipping, comparing, combo, victory)가 엄격히 보호되어 동시 클릭이나 비정상 상태 진입이 원천 차단됩니다.",
        "또한 ASTER 네트워크 생태계의 Supabase와 연동하여 실시간 영속성을 구축했습니다. 게스트 인증을 지원하는 글로벌 리더보드, 난이도별 점수 배율 계산, 클라이언트 변조를 방지하는 강력한 서버 검증을 제공합니다.",
      ],
      image: {
        src: rankingImg,
        caption: "Supabase 기반 글로벌 리더보드: 실시간 동기화, 난이도별 가중치 연산, 보안 검증.",
        alt: "Soul Fighter 글로벌 랭킹 화면",
      },
    },
    {
      heading: "소프트웨어 엔지니어링에 대해 이 3년이 가르쳐준 것들",
      paragraphs: [
        "수년간 쌓은 배움과 경험을 바탕으로 과거의 코드를 돌아보는 일은 개발자에게 최고의 배움입니다. 2023년 11월 2일의 외로운 커밋과 현재의 완성도 사이의 거리는 단순히 React나 Tailwind로 도구를 바꾼 것 이상의 의미를 갖습니다.",
        "가장 본질적인 변화는 한 줄 한 줄의 코드를 작성할 때 갖는 명확한 확신입니다. 전문 엔지니어로서 지키는 4가지 신념으로 정리할 수 있습니다:",
      ],
      bulletPoints: [
        "**예측 가능성이 잔재주를 이긴다**: 훌륭한 코드란 난해한 한 줄로 영리함을 뽐내는 코드가 아닙니다. 명확한 경계를 설정하고, 강력한 타입을 가지며, 누구나 불필요한 인지 부하 없이 검토할 수 있는 코드가 좋은 코드입니다.",
        "**성능은 기초 공사이지 후가공이 아니다**: 프레임 레이트와 지연 시간을 개발 막바지에 고민하는 것은 재작업을 자초하는 일입니다. 오디오 2ms 미만, 첫 화면 800ms 미만, GPU 연산 등 명확한 예산 안에서 출발해야 합니다.",
        "**접근성은 선택이 아닌 기본**: 현대 웹 게임은 prefers-reduced-motion을 존중하고, 완전한 키보드 탐색을 지원하며, 음량 설정을 기억해야 합니다.",
        "**사용자의 주의력에 대한 존중**: 지연이나 끊김 없이 즉각적으로 반응하는 소프트웨어를 만드는 것은 화려함의 문제가 아니라, 화면 너머에 있는 사용자의 시간과 집중력에 대한 가장 진실된 존중입니다.",
      ],
      callout: {
        type: "insight",
        title: "엔지니어링 다이어리",
        text: "Soul Fighter의 재구축은 제 기술적 성장의 가장 확고한 증거였습니다. 여정의 출발선에서 나를 멈춰 세웠던 문제들이 이제는 견고하고 우아한 아키텍처를 통해 자연스럽게 해결되고 있습니다.",
      },
    },
  ],
};

// ─── Vietnamese (vn) ────────────────────────────────────────────
export const vnContent: PostContent = {
  category: "Kỹ thuật Frontend & UI",
  title: "Ba năm sau commit đầu tiên: Bài học khi tôi xây dựng lại Soul Fighter từ con số không",
  summary:
    "Vào ngày 02 tháng 11 năm 2023, tôi thực hiện commit đầu tiên cho trò chơi lật thẻ bài bằng JavaScript thuần. Ba năm sau, tôi quyết định đập đi xây lại toàn bộ dự án: hành trình từ các mẹo DOM chắp vá đến Web Audio API gốc, React 19, GPU 3D và sự trưởng thành kỹ thuật.",
  coverCaption:
    "Đấu trường Soul Fighter Memory Game mới: hoạt ảnh 3D 60 FPS trên GPU, thiết kế âm thanh xúc giác gốc và giao diện chiến đấu mượt mà.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Kiến trúc Frontend", "Lập trình Game"],
  links: [
    { title: "Chơi Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Xem mã nguồn trên GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "Commit đầu tiên vào ngày 02 tháng 11 năm 2023",
      paragraphs: [
        "Nếu bạn truy cập kho lưu trữ Soul Fighter trên GitHub hôm nay và cuộn lại trang lịch sử commit đầu tiên, bạn sẽ thấy mốc thời gian chính xác: ngày 02 tháng 11 năm 2023 với thông điệp vỏn vẹn đúng chữ 'start'.",
        "Khi ấy, dự án mang đầy đủ đặc trưng của một người chập chững bước vào thế giới lập trình web: một thư mục chứa các tệp HTML rời rạc, CSS sơ sài và một tập lệnh JavaScript chắp vá với hàng loạt lệnh querySelector trực tiếp vào DOM. Toàn bộ logic trò chơi nằm trong các biến toàn cục trên phạm vi window, được giữ bằng các cờ như lockBoard và hasFlippedCard.",
        "Làm cho hai thẻ bài lật lại và phát ra một đoạn âm thanh MP3 lúc đó đã giống như một chiến tích phi thường. Nhìn lại đoạn mã đó sau ba năm, tôi không hề cảm thấy xấu hổ; ngược lại, nó mang đến một góc nhìn rõ ràng về việc tiêu chuẩn kỹ thuật nâng tầm như thế nào khi bạn kiên trì xây dựng sản phẩm.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter ngày 02 tháng 11 năm 2023: HTML thuần, kiểu dáng thô sơ và logic phụ thuộc chặt vào thao tác DOM.",
        alt: "Phiên bản Soul Fighter đầu tiên vào tháng 11 năm 2023",
      },
      callout: {
        type: "insight",
        title: "Giá trị của việc lưu giữ những dòng mã đầu đời",
        text: "Nhiều lập trình viên xóa các kho lưu trữ cũ vì e ngại sự phán xét. Tôi thích để chúng công khai: đó là bằng chứng trung thực nhất cho thấy thước đo chất lượng kỹ thuật của bạn đã vươn cao đến mức nào.",
      },
    },
    {
      heading: "Quyết định làm lại từ đầu thay vì chắp vá",
      paragraphs: [
        "Ba năm sau, vào tháng 10 năm 2026, tôi mở lại dự án cũ. Tôi hoàn toàn có thể chỉ thay đổi vài mã màu CSS hoặc sửa hai lỗi bộ đếm thời gian. Nhưng tôi đã chọn thử thách trung thực nhất đối với một kỹ sư: loại bỏ hoàn toàn mã nguồn cũ và xây dựng lại trò chơi từ nền móng với vốn liếng kiến trúc tích lũy được.",
        "Màn hình kết quả cũ phơi bày toàn bộ hạn chế của thời kỳ đó: những ô cứng nhắc thiếu phân cấp thị giác, không lưu trữ điểm số và phụ thuộc liều lĩnh vào các hàm setTimeout lồng nhau.",
        "Bước chuyển mình lớn nhất không nằm ở đồ họa mà ở tư duy. Năm 2023, câu hỏi là: 'làm sao để cái này hiện lên màn hình ngay lập tức?'. Năm 2026, câu hỏi trở thành: 'ngân sách độ trễ của tương tác này là bao nhiêu, làm sao để khóa chặt 60 FPS và mô hình hóa trạng thái thế nào để triệt tiêu race condition?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Màn hình kết quả năm 2023: bố cục thô ráp, đồ họa phẳng và không có tính năng lưu trữ điểm số an toàn.",
        alt: "Màn hình chiến thắng của Soul Fighter năm 2023",
      },
    },
    {
      heading: "Từ mẹo DOM tạm bợ đến kỹ thuật tối ưu hiệu năng thực thụ",
      paragraphs: [
        "Khi đặt hai cơ sở mã cạnh nhau, sự khác biệt lớn nhất không nằm ở các thư viện được thêm vào, mà ở cách phần cứng trình duyệt được khai thác.",
      ],
      subsections: [
        {
          heading: "Âm thanh: từ thẻ audio chậm chạp đến Web Audio API gốc",
          paragraphs: [
            "Năm 2023, hiệu ứng âm thanh được gọi bằng new Audio('sound.mp3').play(). Kết quả rất tệ: độ trễ gần 200 mili giây giữa cú nhấp chuột và âm thanh, giật lag khi nhấp liên tục và âm thanh bị ngắt đột ngột do giới hạn phiên của trình duyệt.",
            "Trong bản tái thiết 2026, tôi áp dụng Web Audio API gốc với AudioContext singleton dùng chung. Tất cả các bộ đệm âm thanh được giải mã sẵn trong bộ nhớ RAM ngay khi tải trang. Khi thẻ bài lật hoặc kích hoạt chuỗi combo, nút âm thanh phản hồi dưới 2 mili giây với đường cong suy giảm hàm mũ chuẩn xác.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Phản hồi âm thanh xúc giác độ trễ siêu thấp (< 2ms) không phụ thuộc bên ngoài
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Đường dốc tần số mô phỏng công tắc cơ học
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
            title: "Độ trễ âm thanh tạo nên cảm giác xúc giác",
            text: "Khi âm thanh vang lên trong vòng chưa đầy 2 mili giây sau cú chạm, não bộ con người sẽ phiên dịch cú chạm trên màn hình kính như một nút bấm cơ học thực tế.",
          },
        },
        {
          heading: "Kết xuất 3D: chuyển gánh nặng từ CPU sang GPU chuyên dụng",
          paragraphs: [
            "Việc xoay thẻ bài ở bản đầu phụ thuộc vào các chuyển động CSS thông thường gây ra tính toán bố cục (reflow) và vẽ lại (repaint) liên tục, tạo ra hiện tượng giật hình khi nhiều thẻ di chuyển cùng lúc.",
            "Bản 2026 sử dụng cơ chế tăng tốc phần cứng: với transform-style: preserve-3d, backface-visibility: hidden và các lớp kết hợp độc lập, trình duyệt giao thẳng việc tính toán ma trận cho GPU. 24 thẻ bài xoay đồng thời vẫn giữ vững 60 FPS mượt mà ngay cả trên điện thoại giá rẻ.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter năm 2026: sảnh arcade hiện đại, chọn tướng mượt mà, âm thanh tức thì và tăng tốc GPU.",
            alt: "Giao diện sảnh hiện đại của Soul Fighter 2026",
          },
        },
      ],
    },
    {
      heading: "Máy trạng thái tất định, tính bền vững và tiêu chuẩn sản phẩm",
      paragraphs: [
        "Quản lý trạng thái cũng thể hiện một bước nhảy vọt. Năm 2023, nếu người chơi nhấn nhanh ba thẻ, trò chơi sẽ bị treo cứng với hai thẻ lật mãi mãi vì lockBoard không xử lý được các sự kiện bất đồng bộ lồng nhau.",
        "Trên React 19 và TypeScript nghiêm ngặt, tôi đã thiết kế một máy trạng thái tất định: mỗi bước chuyển pha (idle, flipping, comparing, combo, victory) đều được bảo vệ toàn diện trước các thao tác nhấp chuột đồng thời và các trạng thái trung gian không hợp lệ.",
        "Ngoài ra, tôi tích hợp đồng bộ dữ liệu theo thời gian thực với Supabase trong mạng lưới ASTER. Bảng xếp hạng toàn cầu hỗ trợ phiên khách vãng lai, tính toán hệ số nhân độ khó và xác thực chặt chẽ ở phía máy chủ để ngăn chặn gian lận.",
      ],
      image: {
        src: rankingImg,
        caption: "Bảng xếp hạng toàn cầu trên Supabase: đồng bộ trực tiếp, tính hệ số thưởng và bảo vệ tính toàn vẹn dữ liệu.",
        alt: "Bảng xếp hạng toàn cầu Soul Fighter",
      },
    },
    {
      heading: "Những gì 3 năm này đã dạy tôi về kỹ thuật phần mềm",
      paragraphs: [
        "Nhìn lại một dự án cũ bằng góc nhìn của người đã tích lũy nhiều năm học tập và thực hành là bài học quý giá nhất. Khoảng cách giữa commit cô đơn ngày 02 tháng 11 năm 2023 và phiên bản hiện tại không chỉ là việc chuyển từ JavaScript thuần sang React hay Tailwind.",
        "Sự chuyển biến sâu sắc nhất nằm ở sự thấu suốt đằng sau từng dòng mã. Tôi đúc kết hành trình này thành bốn nguyên tắc định hình phong cách làm việc chuyên nghiệp của mình:",
      ],
      bulletPoints: [
        "**Tính dự đoán được luôn thắng sự thông minh mẹo vặt**: Mã nguồn tốt không phải là đoạn mã cố tỏ ra thông minh bằng một dòng khó hiểu. Mã nguồn tốt vạch rõ ranh giới, có hệ thống kiểu chặt chẽ và cho phép bất kỳ ai cũng có thể đọc hiểu mà không tốn tải nhận thức.",
        "**Hiệu năng là nền móng, không phải lớp sơn ngoài**: Đợi đến cuối dự án mới nghĩ đến tốc độ khung hình chắc chắn sẽ dẫn đến việc phải đập đi làm lại. Kiến trúc phải được xây dựng với ngân sách rõ ràng: âm thanh dưới 2ms, hiển thị đầu tiên dưới 800ms và hoạt ảnh do GPU xử lý.",
        "**Khả năng tiếp cận là bắt buộc**: Một trò chơi hiện đại phải tôn trọng tùy chọn prefers-reduced-motion, hỗ trợ bàn phím đầy đủ và ghi nhớ mức âm lượng.",
        "**Tôn trọng sự chú ý của người dùng**: Tạo ra phần mềm phản hồi tức thì, mượt mà và không giật lag không phải là sự cầu kỳ hình thức; đó là minh chứng rõ nhất cho sự tôn trọng thời gian của người sử dụng.",
      ],
      callout: {
        type: "insight",
        title: "Nhật ký kỹ thuật",
        text: "Xây dựng lại Soul Fighter là minh chứng thuyết phục nhất cho sự trưởng thành kỹ thuật của tôi: chứng kiến những bài toán từng khiến mình bế tắc nay được giải quyết bằng kiến trúc vững vàng, thanh lịch và mạnh mẽ.",
      },
    },
  ],
};

// ─── Indonesian (id) ────────────────────────────────────────────
export const idContent: PostContent = {
  category: "Rekayasa Frontend & UI",
  title: "Tiga tahun setelah commit pertama: apa yang saya pelajari membangun ulang Soul Fighter dari nol",
  summary:
    "Pada 02 November 2023, saya membuat commit awal permainan kartu memori dengan vanilla JavaScript. Tiga tahun kemudian, saya membangun ulang seluruh proyek dari nol: beralih dari manipulasi DOM yang rapuh ke Web Audio API native, React 19, GPU 3D, dan refleksi kedewasaan teknis.",
  coverCaption:
    "Arena baru Soul Fighter Memory Game: animasi 3D 60 FPS bertenaga GPU, sound design taktil native, dan UI pertarungan responsif.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Arsitektur Frontend", "Game Dev"],
  links: [
    { title: "Mainkan Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Lihat Kode di GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "Commit pertama pada 02 November 2023",
      paragraphs: [
        "Jika Anda membuka repositori Soul Fighter di GitHub hari ini dan menelusuri riwayatnya ke halaman commit paling awal, Anda akan menemukan catatan pasti: 02 November 2023, dengan pesan singkat bertuliskan 'start'.",
        "Kala itu, proyek tersebut adalah contoh klasik pemula yang baru merintis dunia web: folder berisi file HTML terpisah, CSS dasar, dan skrip JavaScript yang dipenuhi panggilan querySelector langsung ke DOM. Seluruh logika permainan berada dalam variabel global di objek window, dikendalikan oleh flag darurat seperti lockBoard dan hasFlippedCard.",
        "Membuat dua kartu berbalik dan memutar suara MP3 terasa seperti pencapaian monumental saat itu. Melihat kembali kode tersebut setelah tiga tahun tidak menimbulkan rasa malu; sebaliknya, hal itu memberi perspektif jernih tentang bagaimana standar teknik meningkat saat kita terus berkarya dengan konsisten.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter pada 02 November 2023: HTML murni, gaya visual sederhana, dan logika yang terikat langsung pada manipulasi DOM.",
        alt: "Versi awal Soul Fighter pada November 2023",
      },
      callout: {
        type: "insight",
        title: "Nilai dari menyimpan kode-kode awal",
        text: "Banyak pengembang menghapus repositori lama mereka karena khawatir dinilai negatif. Saya lebih suka membiarkannya terbuka: itu adalah bukti paling jujur tentang seberapa tinggi standar kualitas Anda telah berkembang.",
      },
    },
    {
      heading: "Keputusan membangun ulang dari nol alih-alih menambal",
      paragraphs: [
        "Tiga tahun berselang, pada Oktober 2026, saya membuka kembali kode lama tersebut. Saya bisa saja hanya memperbarui warna CSS atau memperbaiki beberapa bug timer. Namun saya memilih langkah yang paling menuntut kejujuran seorang insinyur: membuang kode lama dan membangun ulang seluruh permainan dari dasar dengan kedewasaan teknis yang telah saya kumpulkan.",
        "Layar hasil yang lama memperlihatkan keterbatasan masa itu: kotak-kotak kaku tanpa hierarki visual, ketiadaan penyimpanan skor, dan ketergantungan kronis pada setTimeout bertingkat.",
        "Perubahan mendasar bukan pada visual melainkan pada pola pikir. Pada 2023, fokus saya adalah: 'bagaimana menampilkan ini di layar sekarang juga?'. Pada 2026, pertanyaannya bertransformasi menjadi: 'berapa anggaran latensi interaksi ini, bagaimana mengunci 60 FPS stabil, dan bagaimana memodelkan state agar race condition mustahil secara matematis?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Layar hasil tahun 2023: tata letak kaku, visual datar, dan tanpa penyimpanan skor yang andal.",
        alt: "Layar kemenangan Soul Fighter versi 2023",
      },
    },
    {
      heading: "Dari trik DOM yang rapuh menuju rekayasa performa nyata",
      paragraphs: [
        "Saat membandingkan kedua basis kode secara berdampingan, perbedaan terbesar tidak terletak pada pustaka yang diimpor, melainkan pada cara memanfaatkan perangkat keras peramban.",
      ],
      subsections: [
        {
          heading: "Audio: dari tag audio lambat ke Web Audio API native",
          paragraphs: [
            "Pada 2023, efek suara dipicu melalui new Audio('suara.mp3').play(). Hasilnya sangat mengecewakan: ada jeda hampir dua ratus milidetik antara klik dan suara, tersendat saat klik cepat, dan suara terputus akibat batasan instans peramban.",
            "Dalam pembangunan ulang 2026, saya menerapkan Web Audio API native dengan AudioContext singleton bersama. Semua buffer audio didekodekan di memori saat inisialisasi awal. Saat kartu dibalik atau kombo tercipta, simpul audio terpicu dalam waktu kurang dari 2 milidetik dengan kurva redaman eksponensial yang presisi.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Pemicu taktil berlatensi sangat rendah (< 2ms) tanpa dependensi eksternal
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Ramp frekuensi meniru sakelar mekanis
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
            title: "Latensi audio adalah sensasi fisik",
            text: "Ketika respon suara terjadi dalam waktu kurang dari 2 milidetik, otak manusia mempersepsikan ketukan di layar kaca setara dengan sakelar mekanis fisik yang nyata.",
          },
        },
        {
          heading: "Render 3D: memindahkan beban reflow CPU ke lapisan GPU khusus",
          paragraphs: [
            "Pada versi asli, putaran kartu bergantung pada transisi CSS sederhana yang memicu hitungan layout (reflow) dan cat ulang (repaint) pada setiap aksi, mengakibatkan penurunan frame saat banyak kartu bergerak.",
            "Versi 2026 memanfaatkan akselerasi perangkat keras: lewat transform-style: preserve-3d, backface-visibility: hidden, dan compositing layer terpisah, peramban menyerahkan perhitungan transformasi langsung ke GPU. Dua puluh empat kartu berputar bersamaan mempertahankan 60 FPS mulus, bahkan pada ponsel terjangkau.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter tahun 2026: lobi arcade modern, pemilihan karakter taktil, audio responsif, dan akselerasi GPU.",
            alt: "Lobi modern Soul Fighter 2026",
          },
        },
      ],
    },
    {
      heading: "State machine deterministik, persistensi, dan kesiapan produksi",
      paragraphs: [
        "Pengelolaan data menunjukkan lompatan besar berikutnya. Pada 2023, jika pemain mengklik tiga kartu secara sangat cepat, permainan akan terkunci dengan kartu terbuka selamanya karena lockBoard gagal menangani konkurensi timeout.",
        "Dengan React 19 dan TypeScript yang ketat, saya merancang mesin status deterministik: setiap perpindahan fase (idle, flipping, comparing, combo, victory) terlindungi dari klik beruntun dan status perantara yang tidak sah.",
        "Selain itu, saya menghubungkan persistensi real-time dengan Supabase pada Jaringan ASTER. Papan peringkat global dengan sesi tamu menghitung pengganda skor berdasarkan tingkat kesulitan dan memvalidasi data di server untuk mencegah kecurangan.",
      ],
      image: {
        src: rankingImg,
        caption: "Leaderboard global di Supabase: sinkronisasi langsung, kalkulasi pengali skor, dan verifikasi integritas data.",
        alt: "Peringkat global Soul Fighter",
      },
    },
    {
      heading: "Pelajaran yang diberikan 3 tahun ini tentang rekayasa perangkat lunak",
      paragraphs: [
        "Meninjau kembali proyek lama dengan bekal tahun-tahun belajar dan praktik nyata adalah pengalaman paling memuaskan bagi seorang pengembang. Jarak antara commit sederhana 02 November 2023 dan versi sekarang bukan sekadar mengganti JavaScript dengan React atau Tailwind.",
        "Perubahan terdalam terletak pada kejelasan niat di balik setiap baris kode. Saya merangkum evolusi ini menjadi empat keyakinan utama:",
      ],
      bulletPoints: [
        "**Kemampuan prediksi mengalahkan trik yang rumit**: Kode yang baik bukan kode yang berusaha tampil cerdas lewat satu baris yang membingungkan. Kode berkualitas adalah kode dengan batas yang tegas, pengetikan kuat, dan dapat diaudit tanpa beban mental.",
        "**Performa adalah fondasi, bukan polesan akhir**: Menunda perhatian pada frame rate dan latensi hingga proyek selesai adalah resep untuk penulisan ulang yang mahal. Arsitektur harus memiliki batas yang terukur sejak awal: audio di bawah 2ms, tampilan awal di bawah 800ms, dan grafis di GPU.",
        "**Aksesibilitas adalah keharusan**: Game web modern wajib menghormati preferensi prefers-reduced-motion, mendukung navigasi papan ketik penuh, dan menyimpan preferensi volume.",
        "**Menghargai perhatian pengguna**: Membangun perangkat lunak yang responsif secara instan dan tanpa jeda bukan sekadar estetika; ini adalah bentuk penghargaan paling nyata terhadap waktu pengguna.",
      ],
      callout: {
        type: "insight",
        title: "Catatan rekayasa",
        text: "Membangun ulang Soul Fighter adalah pembuktian nyata kematangan teknis saya: melihat bagaimana masalah yang dulu membingungkan kini dapat diselesaikan dengan arsitektur yang kokoh, elegan, dan andal.",
      },
    },
  ],
};

