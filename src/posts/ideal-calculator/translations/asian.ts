import type { PostContent } from "../../types";
import filtersImg from "../idealcalc-filters.png";
import resultsImg from "../idealcalc-results.png";
import cardImg from "../idealcalc-card.png";
import sourcesImg from "../idealcalc-sources.png";

// ─── Japanese (jp) ──────────────────────────────────────────────
export const jpContent: PostContent = {
  category: "データサイエンス & プロダクト",
  title: "理想のパートナー神話：国勢調査データを掛け合わせて測る現実の恋愛市場",
  summary:
    "2026年3月、SNSで過熱する非現実的な理想条件の議論を目にし、私は感情論を数学に置き換えることを決意。公的国勢調査のミクロデータを組み合わせてIdeal-Calculatorを構築したエンジニアリングの舞台裏。",
  coverCaption:
    "Ideal-Calculatorの条件設定パネル：公的統計ミクロデータと照合される12項目の人口統計フィルター。",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "データサイエンス", "統計学"],
  links: [
    { title: "計算ツールを開く", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "GitHubでコードを見る", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "SNSの喧騒とアイデアの着火点",
      paragraphs: [
        "2026年初頭にSNSを眺めていた人なら、恋愛や結婚条件に関する極端な議論を目にしたはずです。法改正をめぐる議論やポッドキャスト、TikTok動画などを通じて、日常生活から乖離した主張が日々拡散されていました。",
        "特に私の目を引いたのは、際限なくエスカレートする互いの「要求リスト」でした。非現実的な外見を求める声がある一方で、「月収2万レアル以上、身長185cm以上、未婚、子なし、30歳未満」といった条件が当然のように語られていました。",
        "誰もが強い主張を展開していましたが、実際の人口統計を確認する人はいませんでした。そこで開発者としての直感が働きました。不毛な感情論に加わる代わりに、数学を提示したらどうだろう？ これらすべての条件を同時に満たす人が存在する確率は、統計学的に見て一体どれほどなのか？",
      ],
      callout: {
        type: "insight",
        title: "意見は無限だが、人口統計は有限である",
        text: "インターネットは選択肢が無数にあるかのような錯覚を生み出します。しかし公的統計と照らし合わせた瞬間、数学的現実が非現実的なチェックリストを一瞬で解体します。",
      },
    },
    {
      heading: "国勢調査から計算エンジンへ",
      paragraphs: [
        "このツールが単なるお遊びクイズではなく本物の説得力を持つためには、データの信頼性と検証可能性が不可欠でした。私はブラジル地理統計院（IBGE）の公開ミクロデータを2週間にわたり徹底的に精査しました。",
        "統計基盤は主に3つの政府公的データに基づいています。2022年国勢調査（年齢層、性別、人種、配偶関係の分布）、2023年継続的全国世帯調査PNAD（就業者全体の詳細な所得パーセンタイル）、家計調査POF（年齢・性別の生体計測身長データ）です。",
        "課題は、数ギガバイトに及ぶ膨大な統計表を、Webブラウザ上でミリ秒単位で照会できる軽量な計算モデルへと圧縮することでした。",
      ],
      image: {
        src: sourcesImg,
        caption: "統計的透明性と監査可能性：2022年国勢調査、PNAD、POFの公的ミクロデータに基づく確固たる根拠。",
        alt: "データソースと統計手法",
      },
    },
    {
      heading: "設計上の難所：フィルター間の相関関係と条件付き確率",
      paragraphs: [
        "Ideal-Calculatorの構築で最も技術を要したのは、UIデザインではなく、ネット上の素人向け計算機を破綻させている統計的誤謬を排除することでした。",
      ],
      subsections: [
        {
          heading: "単純確率の罠と条件付きマトリクスモデル",
          paragraphs: [
            "最もありがちな誤りは、各変数の確率を独立したものと仮定して単純に乗算することです：P(性別) × P(高収入) × P(高身長) × P(25〜30歳)。現実の世界では、これらの変数は強く相関しています。",
            "収入は年齢やキャリアと密接に結びついています。23歳で上位数パーセントの収入を得ている人は極めて稀ですが、都市部の45歳層ではその割合が大幅に高くなります。過大評価や過小評価を防ぐため、選択された年齢層や地域に応じて重みを動的に調整する条件付きマトリクスを設計しました。",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// 国勢調査マトリクスに基づく条件付き確率計算
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // 選択された年齢層に応じて重み付けされた条件付き収入率
  const incomeRate = genderPool.getConditionalIncomeRate(filters.minIncome, filters.minAge, filters.maxAge);
  const heightRate = genderPool.getHeightDistribution(filters.minHeight);
  const maritalRate = genderPool.getMaritalStatusFactor(filters.maritalStatus, filters.minAge);
  
  const jointProbability = Math.max(0, ageBracketWeight * incomeRate * heightRate * maritalRate);
  const estimatedCount = Math.round(jointProbability * dataset.totalBrazilianPopulation);
  const odds = jointProbability > 0 ? Math.round(1 / jointProbability) : 0;

  return { jointProbability, estimatedCount, odds };
}`,
          },
        },
        {
          heading: "12項目のフィルターをクライアント側で完全リアルタイム処理",
          paragraphs: [
            "ユーザーに「計算」ボタンを押させて、サーバーからの遅いレスポンスを待たせるような体験は避けたかったのです。収入や身長のスライダーを動かした瞬間に、計算結果が即座に反映されなければなりません。",
            "React 19とTailwind CSSを用い、100%クライアント側で完結するTypeScript統計エンジンを構築。調査データを最適化されたバイナリ検索配列に落とし込むことで、結合確率の算出とチャートの更新を8ミリ秒未満で完了させました。",
          ],
          image: {
            src: filtersImg,
            caption: "インタラクティブ操作：ネットワーク通信なしで瞬時にフィードバックを返すスライダー群。",
            alt: "Ideal-Calculatorのフィルターパネル",
          },
          callout: {
            type: "tech",
            title: "クライアント側での演算がインフラを守る",
            text: "統計モデルをブラウザ側で直接実行させることで、サーバーは静的ファイルを配信するだけで済み、問い合わせあたりの計算コストをゼロに抑えられます。",
          },
        },
      ],
    },
    {
      heading: "現実を突きつけるスピードメーター：該当確率わずか 0.08%",
      paragraphs: [
        "このツールが与える最大のインパクトは、算出された割合を「落雷に遭う確率」や「宝くじ当選」などの現実的な指標と比較する動的メーターにあります。",
        "SNSで話題の典型的な条件（独身男性、185cm以上、上位5%の年収、30歳未満）を入力すると、結果は残酷なまでに明白です。全国の人口のうち、該当者はわずか0.08%（1,250人に1人）しか存在しません。",
        "この冷徹な数字は、アルゴリズムによって膨らまされた幻想を一瞬で拭い去ります。",
      ],
      image: {
        src: resultsImg,
        caption: "結果画面：希少性メーターと直感的な確率の対比表示。",
        alt: "Ideal-Calculatorの算出結果画面",
      },
    },
    {
      heading: "HTML Canvasによる共有カードの自然拡散",
      paragraphs: [
        "拡散を促進するため、ブラウザネイティブのHTML5 Canvasを用いた共有カード生成機能を組み込みました。ワンクリックで、選択したフィルターと該当確率をまとめたスタイリッシュな画像が生成されます。",
        "これにより、厳密な数学ツールがSNS上の自然な対話のきっかけとなり、広告費を一切かけることなく数万回のオーガニック表示を獲得しました。",
      ],
      image: {
        src: cardImg,
        caption: "動的に生成される共有カード：SNS投稿やストーリーに最適化されたデザイン。",
        alt: "Ideal-Calculatorの共有用画像",
      },
      callout: {
        type: "tip",
        title: "共有カード自体が集客の導線になる",
        text: "思わず保存・共有したくなる高品質なビジュアルサマリーを提供することで、個々の計算結果が自然な口コミ装置に変わります。",
      },
    },
    {
      heading: "統計の鏡を作り上げて学んだこと",
      paragraphs: [
        "Ideal-Calculatorは、ソフトウェアが単に作業を自動化するだけでなく、客観的な事実を通じて社会的な対話に冷静さをもたらす力があることを証明しました。",
        "このプロジェクトから得た3つの重要な教訓です：",
      ],
      bulletPoints: [
        "**テクノロジーは社会の議論に理性を取り戻す**：極端な言説が飛び交う環境において、客観的で検証可能なデータを提示することは、不毛な衝突を解きほぐす実用的な処方箋になります。",
        "**公的データはアクセスしやすくて初めて価値を持つ**：統計機関は素晴らしいデータを保有していますが、難解なファイルに埋もれています。それを直感的なWeb体験へと昇華させることこそエンジニアの役割です。",
        "**クライアント側コンピューティングこそスケーラビリティの鍵**：確率マトリクスをフロントエンドのバンドルに統合することで、高価な専用サーバーに頼ることなく数千人の同時アクセスを軽快に捌くことができました。",
      ],
      callout: {
        type: "insight",
        title: "開発手記",
        text: "Ideal-Calculatorは、真にインパクトのあるプロジェクトとは無闇に複雑なアーキテクチャを誇ることではなく、厳密な工学をもって社会の関心に明快な答えを提示することだと教えてくれました。",
      },
    },
  ],
};

// ─── Simplified Chinese (cn) ────────────────────────────────────
export const cnContent: PostContent = {
  category: "数据科学与产品",
  title: "完美伴侣神话：用真实人口普查微观数据检验社交媒体择偶期望",
  summary:
    "2026年3月，面对社交平台上关于极端择偶标准的口诛笔伐，我决定用数学取代情绪化的争吵：通过交叉比对国家官方人口普查微观数据，我打造了 Ideal-Calculator，揭示出真实世界的统计学真相。",
  coverCaption:
    "Ideal-Calculator 参数配置面板：与官方普查微观数据无缝对照的 12 项人口学筛选指标。",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "数据科学", "统计学"],
  links: [
    { title: "打开计算器", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "在 GitHub 查看源码", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "网络喧嚣与项目构想的诞生",
      paragraphs: [
        "在2026年初浏览社交媒体的人，一定见识过关于男女择偶话题那近乎狂热的对立氛围：立法审议引发的热议、播客节目的观点碰撞，以及短视频平台上层出不穷的奇葩言论，将对伴侣的期望推向了严重脱离现实的荒谬境地。",
        "最让我触动的是每天疯狂传播的苛刻清单：部分男性提出不切实际的身材与家庭服从要求；而女性清单中则动辄要求男方月入超过2万雷亚尔、身高185厘米以上、未婚未育且年龄低于30岁。",
        "每个人都发表着斩钉截铁的高论，却鲜有人愿意查阅国家真实的人口数据。作为软件工程师，我的直觉被激活了：与其陷入无休止的意识形态口水战，何不让数学来给出答案？在统计学意义上，这片土地上究竟有多大几率存在一个同时满足所有这些严苛条件的人？",
      ],
      callout: {
        type: "insight",
        title: "观点是无限的，但人口数据是有限的",
        text: "互联网制造了一种人选无穷无尽的虚幻丰盈感。但只要将其置于官方统计数据之下，冰冷的数学现实能在五秒内粉碎任何脱离实际的幻想清单。",
      },
    },
    {
      heading: "从国家人口普查到计算内核",
      paragraphs: [
        "为了让这款工具具备毋庸置疑的公信力，而不是沦为又一个娱乐快餐小测试，数据源必须无可指摘且完全可审计。我花了整整两周时间深入研读国家地理与统计局（IBGE）公开的微观数据库。",
        "整套分析骨架交叉印证了三大国家级权威来源：2022年全国人口普查（提供年龄、性别、种族和婚姻状况的联合分布）、2023年持续性就业调查 PNAD（提供精准的在职劳动力薪资分位数），以及家庭预算调查 POF（提供可靠的人口身高生物学分布）。",
        "工程上的最大挑战，在于如何将这些数以吉字节计的庞大普查静态表格，无损压缩成一套能在网页端数毫秒内完成交互查询的极速计算模型。",
      ],
      image: {
        src: sourcesImg,
        caption: "方法论透明性：基于2022年普查、PNAD就业调查及POF家庭调查公开微观数据的完整审计链。",
        alt: "数据来源与统计方法论",
      },
    },
    {
      heading: "工程挑战：当筛选条件并非相互独立时",
      paragraphs: [
        "开发 Ideal-Calculator 最具挑战性的部分并不是绘制界面滑动条，而是规避导致网上绝大多数业余计算器沦为废纸的统计学陷阱。",
      ],
      subsections: [
        {
          heading: "天真概率陷阱与条件概率矩阵建模",
          paragraphs: [
            "最常见的初级错误是假设所有条件彼此独立，粗暴地把各个维度的概率简单相乘：P(性别) × P(月薪>15k) × P(身高>1.85m) × P(年龄25~30)。在真实世界中，这些变量具有极强的相关性。",
            "收入水平与年龄和工作阅历密不可分：23岁的年轻人拿到高薪极为罕见，但在大都会45岁群体中却具有显著更高的比例。为了避免结果被严重高估或低估，我构建了条件概率矩阵，依据所选年龄和地理区域动态加权边界概率。",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// 基于分层普查矩阵的条件概率计算引擎
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // 依据特定年龄段动态加权的条件收入概率
  const incomeRate = genderPool.getConditionalIncomeRate(filters.minIncome, filters.minAge, filters.maxAge);
  const heightRate = genderPool.getHeightDistribution(filters.minHeight);
  const maritalRate = genderPool.getMaritalStatusFactor(filters.maritalStatus, filters.minAge);
  
  const jointProbability = Math.max(0, ageBracketWeight * incomeRate * heightRate * maritalRate);
  const estimatedCount = Math.round(jointProbability * dataset.totalBrazilianPopulation);
  const odds = jointProbability > 0 ? Math.round(1 / jointProbability) : 0;

  return { jointProbability, estimatedCount, odds };
}`,
          },
        },
        {
          heading: "12个维度指标在客户端毫秒级实时演算",
          paragraphs: [
            "我绝不接受在界面上放置一个让用户傻等服务器返回的'计算'按钮。当用户拖动收入、身高和年龄滑块时，结果必须如呼吸般丝滑地即时响应。",
            "我使用纯 TypeScript 开发了这套算法，基于 React 19 和 Tailwind CSS 在浏览器端 100% 独立运行。普查数据被压缩为高效的二进制索引查找数组，确保联合概率计算与图表重绘在 8 毫秒内一气呵成。",
          ],
          image: {
            src: filtersImg,
            caption: "交互式控制面板：零网络延迟、滑动即计算的极致实时体验。",
            alt: "Ideal-Calculator 交互过滤面板",
          },
          callout: {
            type: "tech",
            title: "纯客户端计算铸就坚不可摧的架构韧性",
            text: "将数学模型完全下放至浏览器运行，服务器仅需分发静态资源，让单次查询的云端计算成本彻底归零。",
          },
        },
      ],
    },
    {
      heading: "现实的清醒指针：仅有 0.08% 的人符合条件",
      paragraphs: [
        "该应用最直击心灵的交互莫过于仪表盘：它将计算出的极小概率，与'遭遇雷击'或'彩票中奖'等日常小概率事件进行直观对照。",
        "当用户输入短视频中最普遍的网红清单（单身男性、身高185cm以上、薪资位列全社会前5%、年龄30岁以下）时，数学给出了无情的答案：全国符合条件的群体仅占 0.08%（相当于全国每 1,250 人中仅有 1 人）。",
        "这个清晰的量化结论如同当头棒喝，瞬间破除了算法推荐机制投喂出来的择偶幻觉。",
      ],
      image: {
        src: resultsImg,
        caption: "结果展示：概率稀缺度仪表盘与具有强烈冲击力的通俗类比。",
        alt: "Ideal-Calculator 计算结果展示",
      },
    },
    {
      heading: "利用 HTML Canvas 生成分享卡片实现病毒式裂变",
      paragraphs: [
        "为了便于社交传播，我在前端内置了基于 HTML5 Canvas 的高颜值卡片渲染模块。只需轻轻一点，用户即可将自己的筛选条件与对应概率导出为设计考究的图片。",
        "这一设计让一个严肃枯燥的统计学工具，演化成了社交网络上的热门谈资，在没有投入任何商业推广预算的情况下斩获了数以万计的自然曝光。",
      ],
      image: {
        src: cardImg,
        caption: "实时绘制的分享卡片：专为社交平台故事与动态分享量身定制。",
        alt: "Ideal-Calculator 分享卡片",
      },
      callout: {
        type: "tip",
        title: "视觉卡片本身就是最高效的获客漏斗",
        text: "提供高审美、一键保存的图形总结，能让每一次个人的测算自然演变成产品的二次传播载体。",
      },
    },
    {
      heading: "建造一面统计之镜给我带来的思考",
      paragraphs: [
        "Ideal-Calculator 让我深刻认识到：编写软件不仅仅是自动化业务流程，更能借助严谨的科学方法为纷繁复杂的社会议题注入理性与清醒。",
        "我从这段经历中归纳出三项核心工程启示：",
      ],
      bulletPoints: [
        "**技术能够为公共讨论注入理性基石**：在被信息茧房与偏激言论主导的环境里，提供唾手可得且可验证的数据，是化解情绪对抗的绝佳工具。",
        "**公开数据只有在被普罗大众理解时才真正具备价值**：官方部门储备了极高水准的数据金矿，却往往尘封在繁复的文件中。工程师的天职就是架设好易用的桥梁。",
        "**客户端本地计算是达成极致扩展性的捷径**：通过将概率模型封装进前端包体，产品以零后端服务器压力的优雅姿态从容应对了海量并发流量。",
      ],
      callout: {
        type: "insight",
        title: "工程实践手记",
        text: "Ideal-Calculator 证明了：最动人的项目往往不是盲目堆砌高深晦涩的架构，而是运用扎实严谨的工程底蕴，清晰回应一个全社会共同关切的现实疑惑。",
      },
    },
  ],
};

// ─── Korean (kr) ────────────────────────────────────────────────
export const krContent: PostContent = {
  category: "데이터 사이언스 & 프로덕트",
  title: "이상적인 연인의 신화: 인구총조사 통계로 냉정하게 측정한 관계의 현실",
  summary:
    "2026년 3월, 소셜 미디어 상의 비현실적인 연애 기준과 끝없는 소모적 논쟁을 보며 감정 대신 수학을 마주하기로 결정했습니다. 공공 인구 마이크로데이터를 교차 분석하여 Ideal-Calculator를 개발한 엔지니어링 과정과 발견한 통계적 진실을 공개합니다.",
  coverCaption:
    "Ideal-Calculator 설정 패널: 공식 통계 마이크로데이터와 교차 연산되는 12가지 인구통계학 필터.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "데이터 사이언스", "통계학"],
  links: [
    { title: "계산기 이용하기", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "GitHub에서 코드 보기", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "소셜 미디어의 소음과 아이디어의 출발점",
      paragraphs: [
        "2026년 초 소셜 미디어를 이용했던 사람이라면 연애와 파트너 조건에 대한 과열된 논쟁을 기억할 것입니다. 각종 법안 논의, 데이트 팟캐스트, 틱톡 쇼츠를 타고 번지는 주장들은 실제 삶과 완전히 단절된 채 극단으로 치닫고 있었습니다.",
        "특히 눈길을 끈 것은 매일 바이럴되던 상호 요구 조건 리스트였습니다. 남성들의 비현실적인 외모 기준부터, 월 소득 2만 헤알 이상, 키 185cm 이상, 미혼, 무자녀, 30세 미만을 당연시하는 요구까지 넘쳐났습니다.",
        "모두가 목소리를 높였지만 실제 국가 인구 통계를 들여다보는 사람은 없었습니다. 개발자로서 번뜩이는 생각이 들었습니다. 소모적인 감정 싸움에 휘말리는 대신 수학을 내세워보면 어떨까? 통계적으로 이 모든 조건을 동시에 만족하는 사람이 실제로 존재할 확률은 얼마나 될까?",
      ],
      callout: {
        type: "insight",
        title: "의견은 무한하지만 인구 통계는 유한하다",
        text: "인터넷은 파트너의 선택지가 무한하다는 착각을 심어줍니다. 하지만 공식 통계 자료와 대조하는 순간, 수학적 현실은 5초 만에 허황된 체크리스트를 무너뜨립니다.",
      },
    },
    {
      heading: "국가 인구조사에서 계산 엔진까지",
      paragraphs: [
        "이 도구가 흔한 인터넷 가십 퀴즈에 머물지 않고 확고한 신뢰성을 얻으려면 데이터의 출처가 완벽히 검증 가능해야 했습니다. 저는 국립통계원(IBGE)의 공개 마이크로데이터를 2주간 철저히 분석했습니다.",
        "분석 엔진은 세 가지 국가 핵심 자료를 결합했습니다. 2022년 인구총조사(연령, 성별, 인종, 혼인 상태 분포), 2023년 연속고용조사 PNAD(취업 인구의 정밀 소득 분위 분포), 가계수지조사 POF(인구학적 신장 분포)입니다.",
        "엔지니어링의 도전 과제는 기가바이트 단위의 무거운 정적 데이터 테이블을 웹 브라우저에서 몇 밀리초 만에 반응하는 가벼운 모델로 압축하는 것이었습니다.",
      ],
      image: {
        src: sourcesImg,
        caption: "방법론적 투명성: 2022년 총조사, PNAD 및 POF 공공 마이크로데이터에 기반한 철저한 감사 가능성.",
        alt: "데이터 출처 및 통계 분석 방법론",
      },
    },
    {
      heading: "엔지니어링 도전 과제: 조건들이 독립적이지 않을 때",
      paragraphs: [
        "Ideal-Calculator를 개발하면서 겪은 가장 까다로운 난제는 시각적 UI가 아니라, 시중의 아마추어 계산기들을 무용지물로 만드는 통계적 오류를 피하는 것이었습니다.",
      ],
      subsections: [
        {
          heading: "단순 곱셈 확률의 함정과 조건부 확률 행렬 모델",
          paragraphs: [
            "가장 흔한 실수는 각 조건이 독립이라고 가정하고 단순 곱셈하는 것입니다: P(성별) × P(고소득) × P(185cm 이상) × P(25~30세). 현실 세계에서 이 변수들은 강하게 연동되어 있습니다.",
            "소득은 나이와 경력에 절대적으로 비례합니다. 23세에 상위 소득을 올리는 것은 매우 드물지만, 대도시 45세 전문직에서는 그 비율이 훨씬 높습니다. 결과를 왜곡하지 않기 위해 선택된 연령대와 지역에 따라 가중치를 동적으로 보정하는 조건부 확률 행렬을 설계했습니다.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// 인구 통계 행렬 기반 조건부 확률 연산 엔진
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // 선택 연령대에 맞춰 동적으로 보정된 조건부 소득 비율
  const incomeRate = genderPool.getConditionalIncomeRate(filters.minIncome, filters.minAge, filters.maxAge);
  const heightRate = genderPool.getHeightDistribution(filters.minHeight);
  const maritalRate = genderPool.getMaritalStatusFactor(filters.maritalStatus, filters.minAge);
  
  const jointProbability = Math.max(0, ageBracketWeight * incomeRate * heightRate * maritalRate);
  const estimatedCount = Math.round(jointProbability * dataset.totalBrazilianPopulation);
  const odds = jointProbability > 0 ? Math.round(1 / jointProbability) : 0;

  return { jointProbability, estimatedCount, odds };
}`,
          },
        },
        {
          heading: "12가지 필터를 클라이언트에서 100% 실시간 연산",
          paragraphs: [
            "사용자에게 '계산하기' 버튼을 누르게 하고 느린 서버 응답을 기다리게 하고 싶지 않았습니다. 소득, 키, 나이 슬라이더를 움직이는 순간 즉시 화면이 반응해야 했습니다.",
            "React 19와 Tailwind CSS 환경에서 전적으로 클라이언트에서 실행되는 TypeScript 계산 엔진을 구축했습니다. 통계 테이블을 최적화된 바이너리 검색 배열로 압축하여 결합 확률 계산과 차트 갱신이 8밀리초 이내에 완료됩니다.",
          ],
          image: {
            src: filtersImg,
            caption: "인터랙티브 컨트롤: 네트워크 지연 없이 슬라이더 조작 즉시 갱신되는 화면.",
            alt: "Ideal-Calculator 필터 설정 패널",
          },
          callout: {
            type: "tech",
            title: "클라이언트 연산으로 인프라 비용을 제로화하다",
            text: "통계 모델을 브라우저에서 직접 계산하도록 설계함으로써 서버는 정적 파일만 제공하게 되어 쿼리당 서버 비용이 완전히 0원이 됩니다.",
          },
        },
      ],
    },
    {
      heading: "현실의 계기판: 일치율 단 0.08%",
      paragraphs: [
        "이 애플리케이션의 백미는 계산된 극소 확률을 벼락 맞을 확률이나 로또 당첨과 직관적으로 비교해 주는 시각적 속도계에 있습니다.",
        "소셜 미디어에서 회자되는 대표적 조건(미혼 남성, 185cm 이상, 상위 5% 소득, 30세 미만)을 입력하면 산출되는 결과는 냉혹합니다. 전 인구 중 단 0.08%만이 이에 부합하며, 이는 전국에서 1,250명 중 1명에 불과합니다.",
        "이 명료한 수치는 알고리즘이 부추긴 과도한 기대감을 한순간에 걷어냅니다.",
      ],
      image: {
        src: resultsImg,
        caption: "결과 화면: 희소성 계기판 및 직관적인 확률 비교 수치.",
        alt: "Ideal-Calculator 결과 표시 화면",
      },
    },
    {
      heading: "HTML Canvas 공유 카드를 통한 자발적 바이럴 확산",
      paragraphs: [
        "공유를 극대화하기 위해 브라우저의 HTML5 Canvas API를 활용한 공유 이미지 생성 기능을 내장했습니다. 버튼 하나로 자신이 선택한 필터와 계산된 확률이 담긴 감각적인 인포그래픽 카드가 생성됩니다.",
        "그 결과 진지한 통계 도구가 SNS에서 자연스러운 대화 주제로 부상하며, 마케팅 비용을 전혀 들이지 않고도 수만 건의 오가닉 조회를 기록했습니다.",
      ],
      image: {
        src: cardImg,
        caption: "동적으로 생성되는 공유 카드: 인스타그램 스토리 및 피드에 최적화된 비주얼.",
        alt: "Ideal-Calculator 공유 카드 이미지",
      },
      callout: {
        type: "tip",
        title: "시각적 공유 카드가 곧 획득 퍼널이 된다",
        text: "소장하고 싶은 깔끔한 인포그래픽을 즉시 다운로드할 수 있게 만들면 각 사용자의 계산 결과가 프로덕트의 자연스러운 홍보 창구가 됩니다.",
      },
    },
    {
      heading: "통계의 거울을 만들며 배운 가치",
      paragraphs: [
        "Ideal-Calculator는 소프트웨어가 단순히 반복 작업을 줄이는 데 그치지 않고, 엄밀한 과학적 방법론을 통해 사회적 논의에 이성을 불어넣을 수 있음을 보여주었습니다.",
        "이 프로젝트를 통해 확립한 세 가지 교훈은 다음과 같습니다:",
      ],
      bulletPoints: [
        "**기술은 공론장에 냉철함을 되찾아준다**: 감정적인 소모전이 지배하는 환경에서 신뢰할 수 있는 데이터를 손쉽게 접하게 하는 것은 갈등을 잠재우는 강력한 도구가 됩니다.",
        "**공공 데이터는 쉽게 읽힐 때 비로소 가치를 갖는다**: 정부 통계는 훌륭하지만 접근하기 어려운 문서 속에 갇혀 있습니다. 사용성 높은 인터페이스로 그 가치를 끌어내는 것이 개발자의 사명입니다.",
        "**클라이언트 사이드 컴퓨팅은 확장의 지름길이다**: 프론트엔드 번들에 확률 모델을 통합하여 값비싼 전용 서버 없이도 폭발적인 동시 접속 트래픽을 완벽하게 소화할 수 있었습니다.",
      ],
      callout: {
        type: "insight",
        title: "개발 일지",
        text: "Ideal-Calculator는 의미 있는 프로젝트란 불필요하게 복잡한 아키텍처를 자랑하는 것이 아니라, 견고한 엔지니어링으로 현실의 궁금증에 명쾌하게 답하는 것임을 증명해 주었습니다.",
      },
    },
  ],
};

// ─── Vietnamese (vn) ────────────────────────────────────────────
export const vnContent: PostContent = {
  category: "Khoa học Dữ liệu & Sản phẩm",
  title: "Huyền thoại về người bạn đời lý tưởng: Dùng dữ liệu điều tra dân số để soi chiếu thực tế",
  summary:
    "Vào tháng 03 năm 2026, giữa làn sóng tranh cãi nảy lửa trên mạng xã hội về những tiêu chuẩn hẹn hò phi thực tế, tôi quyết định dùng toán học để thay thế tranh cãi: cách tôi xử lý dữ liệu điều tra dân số để xây dựng Ideal-Calculator.",
  coverCaption:
    "Bảng thiết lập thông số của Ideal-Calculator: 12 tiêu chí nhân khẩu học được đối chiếu với dữ liệu thống kê chính thức.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Thống kê"],
  links: [
    { title: "Mở máy tính", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Xem mã nguồn trên GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "Sự ồn ào trên mạng xã hội và khởi nguồn ý tưởng",
      paragraphs: [
        "Bất kỳ ai lướt mạng xã hội vào đầu năm 2026 đều nhận thấy bầu không khí ngột ngạt của các cuộc tranh luận về mối quan hệ: các cuộc thảo luận chính sách, podcast hẹn hò và video ngắn TikTok liên tục lan truyền những góc nhìn ngày càng xa rời đời thực.",
        "Điều khiến tôi chú ý nhất là những danh sách đòi hỏi qua lại được chia sẻ rầm rộ mỗi ngày: nam giới đòi hỏi ngoại hình hoàn mỹ; trong khi nữ giới yêu cầu đối phương phải có thu nhập hàng chục triệu, cao trên 1m85, độc thân, chưa từng kết hôn và dưới 30 tuổi.",
        "Ai nấy đều khăng khăng bảo vệ quan điểm của mình nhưng không ai màng kiểm tra cơ cấu dân số thực tế. Là một lập trình viên, tôi tự hỏi: thay vì tranh cãi suông, tại sao không để toán học lên tiếng? Xác suất thực tế để một người hội tụ đủ ngần ấy tiêu chuẩn tại Brazil là bao nhiêu?",
      ],
      callout: {
        type: "insight",
        title: "Ý kiến thì vô tận, nhưng nhân khẩu học là hữu hạn",
        text: "Internet tạo ra ảo tưởng về sự dồi dào lựa chọn. Nhưng khi đối chiếu với số liệu thống kê chính thức, thực tế toán học sẽ làm tan biến mọi danh sách ảo tưởng chỉ sau 5 giây.",
      },
    },
    {
      heading: "Từ dữ liệu điều tra dân số đến cỗ máy tính toán",
      paragraphs: [
        "Để công cụ có uy tín thực sự chứ không phải một trò đố vui hời hợt, các dữ liệu cần phải minh bạch và có thể kiểm chứng. Tôi đã dành hai tuần nghiên cứu kho vi dữ liệu công khai của Viện Địa lý và Thống kê Quốc gia (IBGE).",
        "Xương sống phân tích kết hợp ba nguồn chính phủ quan trọng: Tổng điều tra dân số 2022 (phân bố theo độ tuổi, giới tính, chủng tộc, tình trạng hôn nhân), Khảo sát việc làm PNAD 2023 (phân vị thu nhập chi tiết) và Khảo sát ngân sách hộ gia đình POF (thống kê chiều cao sinh trắc học).",
        "Thách thức kỹ thuật là nén hàng gigabyte dữ liệu bảng biểu phức tạp thành một mô hình gọn nhẹ, có khả năng tính toán trên trình duyệt trong vài mili giây.",
      ],
      image: {
        src: sourcesImg,
        caption: "Tính minh bạch phương pháp: truy xuất nguồn gốc dựa trên vi dữ liệu điều tra dân số và khảo sát thu nhập chính thức.",
        alt: "Nguồn dữ liệu và phương pháp thống kê",
      },
    },
    {
      heading: "Thách thức kỹ thuật: Khi các biến số không hề độc lập",
      paragraphs: [
        "Phần khó nhất khi xây dựng Ideal-Calculator không phải là thiết kế giao diện, mà là tránh cái bẫy xác suất ngây thơ làm sai lệch hầu hết các công cụ tính toán nghiệp dư trên mạng.",
      ],
      subsections: [
        {
          heading: "Cái bẫy xác suất đơn giản và mô hình ma trận có điều kiện",
          paragraphs: [
            "Sai lầm phổ biến nhất là giả định các biến độc lập và nhân thẳng các xác suất: P(giới tính) × P(thu nhập cao) × P(cao > 1m85) × P(tuổi 25-30). Trong thực tế, các biến số này tương quan rất chặt chẽ với nhau.",
            "Thu nhập gắn liền với tuổi tác và kinh nghiệm: mức lương chạm đỉnh cực kỳ hiếm ở tuổi 23, nhưng phổ biến hơn nhiều ở độ tuổi 45 tại các đô thị lớn. Để tránh kết quả bị bóp méo, tôi đã xây dựng các ma trận điều kiện nhằm điều chỉnh trọng số động theo từng nhóm tuổi và khu vực địa lý.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Tính toán xác suất có điều kiện dựa trên ma trận điều tra dân số
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Tỷ lệ thu nhập có điều kiện theo nhóm tuổi đã chọn
  const incomeRate = genderPool.getConditionalIncomeRate(filters.minIncome, filters.minAge, filters.maxAge);
  const heightRate = genderPool.getHeightDistribution(filters.minHeight);
  const maritalRate = genderPool.getMaritalStatusFactor(filters.maritalStatus, filters.minAge);
  
  const jointProbability = Math.max(0, ageBracketWeight * incomeRate * heightRate * maritalRate);
  const estimatedCount = Math.round(jointProbability * dataset.totalBrazilianPopulation);
  const odds = jointProbability > 0 ? Math.round(1 / jointProbability) : 0;

  return { jointProbability, estimatedCount, odds };
}`,
          },
        },
        {
          heading: "12 bộ lọc đồng thời tính toán tức thì ngay trên máy người dùng",
          paragraphs: [
            "Tôi không muốn người dùng phải nhấn nút 'Tính toán' rồi ngồi chờ máy chủ trả lời. Mọi thứ phải diễn ra trơn tru ngay khi người dùng kéo thanh trượt thu nhập, chiều cao và độ tuổi.",
            "Tôi đã viết cỗ máy thống kê bằng TypeScript thuần chạy 100% trên client với React 19 và Tailwind CSS. Dữ liệu được nén thành các mảng tra cứu nhị phân tối ưu, đảm bảo phép tính xác suất và biểu đồ được làm mới chỉ trong dưới 8 mili giây.",
          ],
          image: {
            src: filtersImg,
            caption: "Bảng điều khiển tương tác: thanh trượt phản hồi mượt mà không có độ trễ mạng.",
            alt: "Bảng bộ lọc của Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Xử lý phía client bảo vệ hệ thống hạ tầng",
            text: "Bằng cách chạy mô hình toán học ngay trong trình duyệt, máy chủ chỉ cần phân phối các tệp tĩnh, giảm chi phí máy chủ cho mỗi lượt truy vấn về con số không.",
          },
        },
      ],
    },
    {
      heading: "Đồng hồ đo thực tế: Chỉ 0,08% đối tượng phù hợp",
      paragraphs: [
        "Điểm nhấn ấn tượng nhất của ứng dụng là chiếc đồng hồ tốc độ trực quan, so sánh tỷ lệ tìm được với các xác suất đời thường như bị sét đánh hay trúng số.",
        "Khi nhập vào các tiêu chí phổ biến trên mạng (nam độc thân, cao trên 1m85, thu nhập top 5% và dưới 30 tuổi), kết quả toán học đưa ra thực sự đáng suy ngẫm: chỉ 0,08% dân số đáp ứng được (tương đương 1 trên 1.250 người trên toàn quốc).",
        "Con số này lập tức dập tắt những ảo tưởng được nuôi dưỡng bởi thuật toán mạng xã hội.",
      ],
      image: {
        src: resultsImg,
        caption: "Màn hình kết quả: đồng hồ đo độ hiếm và so sánh xác suất trực quan.",
        alt: "Kết quả tính toán trên Ideal-Calculator",
      },
    },
    {
      heading: "Lan tỏa tự nhiên nhờ tính năng xuất thẻ hình ảnh HTML Canvas",
      paragraphs: [
        "Để kích thích chia sẻ, tôi đã tích hợp tính năng tạo thẻ tóm tắt bằng Canvas ngay trên trình duyệt. Chỉ với một cú chạm, người dùng có thể tải về một bức ảnh đẹp mắt chứa các tiêu chí đã chọn và tỷ lệ phần trăm tương ứng.",
        "Điều này biến một công cụ toán học khô khan thành chủ đề thảo luận sôi nổi, mang về hàng nghìn lượt xem tự nhiên mà không tốn một xu quảng cáo.",
      ],
      image: {
        src: cardImg,
        caption: "Thẻ chia sẻ tạo tự động: hình ảnh tối ưu cho tin tức và bài đăng mạng xã hội.",
        alt: "Thẻ chia sẻ kết quả của Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "Tấm thẻ hình ảnh chính là kênh phân phối tự nhiên",
        text: "Tạo điều kiện để người dùng tải về bản tóm tắt trực quan sẽ biến mỗi lượt tính toán thành một cơ hội lan tỏa sản phẩm.",
      },
    },
    {
      heading: "Bài học từ việc dựng nên một tấm gương thống kê",
      paragraphs: [
        "Ideal-Calculator chứng minh rằng phần mềm không chỉ phục vụ tự động hóa, mà còn có thể mang lại sự sáng suốt cho những vấn đề xã hội thông qua tư duy khoa học.",
        "Ba đúc kết lớn nhất từ dự án này:",
      ],
      bulletPoints: [
        "**Công nghệ đem lại sự bình tĩnh cho đối thoại xã hội**: Trong một môi trường đầy rẫy tranh cãi, việc cung cấp dữ liệu minh bạch chỉ bằng một cú nhấp chuột giúp hóa giải những mâu thuẫn vô căn cứ.",
        "**Dữ liệu công chỉ có giá trị khi người dân tiếp cận được**: Cơ quan nhà nước sở hữu những kho dữ liệu khổng lồ nhưng nằm trong các bảng biểu khó đọc. Trách nhiệm của kỹ sư là bắc nhịp cầu trải nghiệm trực quan.",
        "**Tính toán phía client là lối tắt tới khả năng mở rộng**: Việc nhúng các ma trận xác suất vào bundle giao diện giúp ứng dụng dễ dàng đón nhận hàng nghìn người dùng đồng thời mà không cần máy chủ đắt đỏ.",
      ],
      callout: {
        type: "insight",
        title: "Nhật ký phát triển",
        text: "Ideal-Calculator khẳng định rằng những dự án có sức ảnh hưởng nhất không phải là những dự án phức tạp hóa kiến trúc, mà là những sản phẩm dùng kỹ thuật chuẩn xác để giải đáp rõ ràng một nỗi băn khoăn có thật.",
      },
    },
  ],
};

// ─── Indonesian (id) ────────────────────────────────────────────
export const idContent: PostContent = {
  category: "Sains Data & Produk",
  title: "Mitos pasangan ideal: menguji ekspektasi hubungan dengan data sensus resmi",
  summary:
    "Pada Maret 2026, di tengah perdebatan sengit di media sosial mengenai standar pasangan yang tidak realistis, saya mengganti perdebatan kusir dengan matematika: bagaimana saya mengolah data sensus resmi untuk membangun Ideal-Calculator.",
  coverCaption:
    "Panel parameter Ideal-Calculator: 12 kriteria demografis yang disandingkan dengan data sensus publik.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Statistik"],
  links: [
    { title: "Buka Kalkulator", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Kode di GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "Keriuhan media sosial dan percikan ide",
      paragraphs: [
        "Siapa pun yang membuka media sosial pada awal 2026 pasti merasakan panasnya perdebatan seputar relasi: undang-undang, podcast kencan, hingga video TikTok berlomba-lomba membagikan narasi yang kian menjauh dari realitas keseharian.",
        "Hal yang paling memikat perhatian saya adalah daftar kriteria pasangan yang viral setiap hari: pria menuntut standar fisik yang tak masuk akal; sementara wanita menuntut calon pasangan bergaji puluhan juta, tinggi di atas 185 cm, lajang, tanpa anak, dan berusia di bawah 30 tahun.",
        "Semua orang berargumen dengan keras, tetapi tak seorang pun memeriksa data demografi yang nyata. Naluri pengembang saya terpicu: daripada ikut dalam perdebatan tanpa ujung, mengapa tidak membiarkan matematika yang berbicara? Berapa probabilitas statistik seseorang memenuhi semua kriteria tersebut sekaligus?",
      ],
      callout: {
        type: "insight",
        title: "Opini itu tak terbatas, tetapi demografi itu terukur",
        text: "Media sosial menciptakan ilusi pilihan yang melimpah. Ketika disandingkan dengan data sensus resmi, kenyataan matematis meruntuhkan daftar angan-angan tersebut dalam lima detik.",
      },
    },
    {
      heading: "Dari sensus nasional menuju mesin kalkulasi",
      paragraphs: [
        "Agar alat ini memiliki kredibilitas nyata dan bukan sekadar kuis hiburan biasa, datanya harus sahih dan dapat diaudit. Saya menghabiskan dua minggu meneliti data publik dari badan statistik resmi (IBGE).",
        "Kerangka analisisnya mengintegrasikan tiga sumber primer pemerintah: Sensus Penduduk 2022 (sebaran umur, gender, ras, status pernikahan), Survei Ketenagakerjaan PNAD 2023 (persentil pendapatan angkatan kerja), dan Survei Anggaran Rumah Tangga POF (parameter tinggi badan).",
        "Tantangan teknisnya adalah memadatkan data tabel raksasa menjadi model komputasi ringan yang mampu merespons di peramban dalam hitungan milidetik.",
      ],
      image: {
        src: sourcesImg,
        caption: "Transparansi metodologis: keterlacakan data berbasis sensus resmi dan survei ketenagakerjaan pemerintah.",
        alt: "Sumber data dan metodologi statistik",
      },
    },
    {
      heading: "Tantangan rekayasa: Ketika variabel saling berkorelasi",
      paragraphs: [
        "Bagian tersulit dari pembuatan Ideal-Calculator bukanlah merancang tampilan antarmuka, melainkan menghindari kesalahan statistik yang merusak sebagian besar kalkulator amatir di internet.",
      ],
      subsections: [
        {
          heading: "Jebakan probabilitas naif dan model matriks kondisional",
          paragraphs: [
            "Kekeliruan umum adalah mengasumsikan independensi probabilitas, dengan langsung mengalikan variabel: P(gender) × P(penghasilan tinggi) × P(tinggi > 185cm) × P(umur 25-30). Di dunia nyata, variabel-variabel ini saling terkait erat.",
            "Tingkat pendapatan berhubungan erat dengan usia dan pengalaman kerja: gaji tinggi sangat langka pada usia 23 tahun, tetapi jauh lebih umum pada usia 45 tahun di kota metropolitan. Untuk mencegah hasil yang bias, saya menyusun matriks probabilitas kondisional yang menyesuaikan bobot secara dinamis berdasarkan usia dan wilayah yang dipilih.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Kalkulasi probabilitas kondisional berbasis matriks sensus
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Rasio pendapatan kondisional yang dibobotkan menurut kelompok usia
  const incomeRate = genderPool.getConditionalIncomeRate(filters.minIncome, filters.minAge, filters.maxAge);
  const heightRate = genderPool.getHeightDistribution(filters.minHeight);
  const maritalRate = genderPool.getMaritalStatusFactor(filters.maritalStatus, filters.minAge);
  
  const jointProbability = Math.max(0, ageBracketWeight * incomeRate * heightRate * maritalRate);
  const estimatedCount = Math.round(jointProbability * dataset.totalBrazilianPopulation);
  const odds = jointProbability > 0 ? Math.round(1 / jointProbability) : 0;

  return { jointProbability, estimatedCount, odds };
}`,
          },
        },
        {
          heading: "Dua belas filter dihitung serentak secara real-time di sisi klien",
          paragraphs: [
            "Saya tidak ingin pengguna harus menekan tombol 'Hitung' dan menunggu respons server yang lambat. Pemrosesan harus terjadi seketika saat pengguna menggeser slider pendapatan, tinggi badan, dan usia.",
            "Saya membangun mesin statistik dalam TypeScript murni yang berjalan 100% di peramban dengan React 19 dan Tailwind CSS. Data sensus dikompresi menjadi struktur array biner cepat, memastikan perhitungan probabilitas dan grafik diperbarui dalam waktu kurang dari 8 milidetik.",
          ],
          image: {
            src: filtersImg,
            caption: "Panel interaktif: penyesuaian slider yang mulus dengan umpan balik visual instan tanpa latensi jaringan.",
            alt: "Panel filter Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Komputasi di sisi klien mengamankan infrastruktur",
            text: "Dengan menjalankan model matematika langsung di peramban pengguna, server hanya bertugas menyajikan aset statis, memangkas biaya komputasi server per kueri menjadi nol.",
          },
        },
      ],
    },
    {
      heading: "Penunjuk realitas: Peluang kecocokan hanya 0,08%",
      paragraphs: [
        "Daya tarik terkuat aplikasi ini terletak pada speedometer visualnya, yang membandingkan persentase yang diperoleh dengan kemungkinan disambar petir atau memenangkan undian berhadiah.",
        "Saat pengguna memasukkan daftar kriteria populer (pria lajang, tinggi di atas 185 cm, gaji top 5%, dan usia di bawah 30 tahun), angka yang muncul sangat tegas: hanya 0,08% dari populasi yang cocok (1 dari 1.250 orang di seluruh negeri).",
        "Kenyataan terukur ini seketika menyadarkan orang dari ekspektasi berlebihan yang dipupuk oleh algoritma media sosial.",
      ],
      image: {
        src: resultsImg,
        caption: "Tampilan hasil: speedometer kelangkaan statistik dan analogi komparatif yang mudah dipahami.",
        alt: "Hasil kalkulasi di Ideal-Calculator",
      },
    },
    {
      heading: "Viralitas organik berkat kartu gambar HTML Canvas",
      paragraphs: [
        "Untuk mendorong penyebaran, saya menyematkan fitur pembuatan kartu ringkasan visual berbasis HTML5 Canvas langsung di peramban. Hanya dengan satu klik, pengguna dapat mengunduh gambar menarik berisi kriteria dan persentase yang diperoleh.",
        "Langkah ini mengubah alat analisis matematis yang serius menjadi topik perbincangan viral yang menghasilkan ribuan tayangan organik tanpa anggaran promosi.",
      ],
      image: {
        src: cardImg,
        caption: "Kartu yang dihasilkan seketika: visual yang dioptimalkan untuk dibagikan di media sosial.",
        alt: "Kartu berbagi Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "Kartu visual adalah saluran distribusi utama",
        text: "Menyediakan ringkasan visual menarik yang dapat langsung diunduh mengubah setiap sesi kalkulasi menjadi media promosi organik bagi aplikasi.",
      },
    },
    {
      heading: "Pelajaran dari membangun cermin statistik",
      paragraphs: [
        "Ideal-Calculator membuktikan bahwa rekayasa perangkat lunak tidak hanya bermanfaat untuk otomatisasi alur kerja, tetapi juga dapat menghadirkan kejernihan dalam isu sosial melalui pendekatan ilmiah.",
        "Tiga pelajaran terpenting yang saya petik dari proyek ini:",
      ],
      bulletPoints: [
        "**Teknologi menenangkan perdebatan publik**: Dalam iklim yang dipenuhi polarisasi emosional, menyajikan data terbuka yang dapat diuji dengan sekali klik membantu meredakan perselisihan tanpa dasar.",
        "**Data publik baru bernilai jika mudah diakses**: Lembaga pemerintah menghasilkan data yang luar biasa namun sering kali tersembunyi dalam format yang rumit. Tugas pengembang adalah menjembatani aksesibilitasnya.",
        "**Komputasi lokal adalah jalan pintas skalabilitas**: Dengan memuat model statistik langsung ke bundel frontend, aplikasi mampu melayani lonjakan ribuan pengunjung tanpa memerlukan server khusus berbiaya mahal.",
      ],
      callout: {
        type: "insight",
        title: "Catatan rekayasa",
        text: "Ideal-Calculator menegaskan bahwa karya paling berharga bukanlah yang berbangga dengan arsitektur rumit, melainkan yang menerapkan ketelitian teknik untuk menjawab pertanyaan nyata masyarakat secara jernih.",
      },
    },
  ],
};

