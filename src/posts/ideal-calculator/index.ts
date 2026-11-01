import type { PostDefinition } from "../types";
import { idealCalcTranslations } from "./translations";
import coverImg from "./cover.png";
import filtersImg from "./idealcalc-filters.png";
import resultsImg from "./idealcalc-results.png";
import cardImg from "./idealcalc-card.png";
import sourcesImg from "./idealcalc-sources.png";

export const idealCalcPost: PostDefinition = {
  id: "blog-ideal-calculator",
  slug: "ideal-calculator",
  date: "29 Mar 2026",
  icon: "calculator",
  gradient: ["#f43f5e", "#fb7185"],
  coverImage: coverImg,
  themeColor: "rose",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Estatística"],
  translations: idealCalcTranslations,
  links: [
    {
      title: "Acessar Calculadora",
      url: "https://idealcalc.asterdev.me/",
      icon: "globe",
    },
    {
      title: "Código no GitHub",
      url: "https://github.com/zAstergun/Ideal-Calculator",
      icon: "github",
    },
  ],
  pt: {
    category: "Data Science & Produto",
    title: "O mito do parceiro ideal: cruzando dados do IBGE para medir a realidade dos relacionamentos",
    summary:
      "Em março de 2026, em meio aos debates sobre leis contra misoginia e expectativas irreais de relacionamento nas redes sociais, decidi trocar a discussão vazia por matemática: como cruzei microdados do IBGE para construir o Ideal-Calculator e o que descobri sobre dados reais.",
    coverCaption:
      "Painel de parâmetros do Ideal-Calculator: 12 critérios demográficos cruzados com microdados públicos do IBGE.",
    sections: [
      {
        heading: "O ruído das redes e a faísca da ideia",
        paragraphs: [
          "Quem navegava pelas redes sociais brasileiras nos primeiros meses de 2026 certamente se deparou com um clima saturado de discussões de gênero. De um lado, o debate legislativo avançava sobre a tipificação e criminalização da misoginia; de outro, podcasts de relacionamento e vídeos curtos no TikTok disputavam narrativas cada vez mais polarizadas e desconectadas da vida real.",
          "O que mais chamava minha atenção não eram as brigas em si, mas a quantidade absurda de listas de exigências mútuas que viralizavam todos os dias. Homens demandando padrões estéticos inalcançáveis e submissão doméstica; mulheres exigindo que qualquer pretendente ganhasse mais de vinte mil reais por mês, tivesse mais de um metro e oitenta de altura, fosse solteiro, não tivesse filhos e tivesse menos de trinta anos.",
          "Todo mundo parecia ter uma opinião contundente, mas ninguém se dava ao trabalho de olhar para a demografia real do país. Foi aí que me veio o estalo de desenvolvedor: em vez de entrar na discussão ideológica ou reclamar do algoritmo, por que não construir uma ferramenta que coloque a matemática na mesa? Qual é, de fato, a probabilidade estatística de existir alguém no Brasil que atenda a todas essas exigências combinadas?",
        ],
        callout: {
          type: "insight",
          title: "Opiniões são infinitas, mas a demografia é finita",
          text: "A internet cria a ilusão de abundância absoluta. Quando você cruza dados estatísticos oficiais, a realidade matemática desmonta qualquer checklist delirante em cinco segundos.",
        },
      },
      {
        heading: "Do Censo Demográfico ao motor de cálculo",
        paragraphs: [
          "Para que a ferramenta tivesse credibilidade real e não fosse apenas mais um quiz de internet, os dados precisavam ser impecáveis e auditáveis. Passei duas semanas debruçado sobre os repositórios públicos de microdados do Instituto Brasileiro de Geografia e Estatística (IBGE).",
          "A espinha dorsal estatística foi construída a partir do cruzamento de três fontes governamentais primárias: o Censo Demográfico 2022 (para distribuição populacional por faixa etária, gênero, raça e estado civil), a PNAD Contínua 2023 (para estratificação milimétrica de rendimento mensal de todas as fontes por percentil da população economicamente ativa) e a POF (Pesquisa de Orçamentos Familiares, que fornece os parâmetros biométricos de altura por gênero e idade).",
          "Com esses dados em mãos, o desafio passou a ser transformar gigabytes de tabelas censitárias estáticas em um modelo ágil que pudesse ser consultado interativamente na web em poucos milissegundos.",
        ],
        image: {
          src: sourcesImg,
          caption: "Auditoria e transparência metodológica: rastreabilidade fundamentada em microdados públicos do Censo 2022, PNAD Contínua e POF do IBGE.",
          alt: "Fontes de dados e metodologia IBGE",
        },
      },
      {
        heading: "Desafios de engenharia: quando os filtros não são independentes",
        paragraphs: [
          "A parte mais complexa de construir o Ideal-Calculator não foi a interface visual, mas evitar o erro estatístico que arruina a maioria das calculadoras amadoras pela internet.",
        ],
        subsections: [
          {
            heading: "A armadilha da probabilidade ingênua e matrizes condicionais",
            paragraphs: [
              "O erro mais comum nesse tipo de cálculo é assumir independência estatística pura, ou seja, simplesmente multiplicar a probabilidade de cada filtro individual: P(homem) multiplicado por P(renda > 15k) multiplicado por P(altura > 1.85m) multiplicado por P(idade 25 a 30). Na vida real, essas variáveis são fortemente correlacionadas.",
              "Renda no Brasil é intimamente ligada à idade e ao nível de escolaridade: uma renda de quinze mil reais é extremamente rara aos vinte e três anos, mas tem frequência significativamente maior entre profissionais de quarenta e cinco anos no Sudeste. Da mesma forma, altura guarda correlação com etnia e nutrição geracional. Para evitar distorções que subestimassem ou inflassem os resultados, estruturei matrizes condicionais que ajustam os pesos marginais conforme as faixas de idade e localização selecionadas.",
            ],
            codeBlock: {
              language: "typescript",
              filename: "probabilityEngine.ts",
              code: `// Cálculo de probabilidade condicional com matrizes estratificadas do IBGE
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Renda condicional ponderada pela faixa etária selecionada
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
            heading: "Doze filtros simultâneos em tempo real no cliente",
            paragraphs: [
              "Eu não queria que o usuário precisasse clicar em um botão de 'Calcular' e ficasse esperando uma requisição voltar de um backend lento. O processamento precisava acontecer em tempo real, enquanto o usuário deslizava os seletores de renda, altura e idade.",
              "Construí o motor estatístico em TypeScript rodando 100% no cliente com React 19 e Tailwind CSS. As tabelas censitárias foram comprimidas em arrays binários otimizados de lookup, garantindo que o cálculo de probabilidade conjunta e a atualização dos gráficos rodem em menos de oito milissegundos.",
            ],
            image: {
              src: filtersImg,
              caption: "O painel de parâmetros: 12 filtros demográficos ajustáveis com recálculo instantâneo a 60 FPS no navegador.",
              alt: "Painel de filtros demográficos do Ideal-Calculator",
            },
          },
        ],
      },
      {
        heading: "O velocímetro da realidade: 0,08% de parceiros elegíveis",
        paragraphs: [
          "Quando a calculadora ficou pronta e comecei os primeiros testes com pessoas conhecidas, o impacto foi imediato. Aquele parceiro hipotético que parecia 'o básico' nas conversas de internet (homem solteiro, entre 25 e 35 anos, com mais de 1,80m e renda acima de doze mil reais) resultava em míseros 0,14% da população masculina do país: uma chance de 1 em cada 714 homens.",
          "O velocímetro na tela não dava espaço para ilusões: para cada filtro adicionado, a agulha despencava em direção à zona de raridade extrema, demonstrando visualmente o impacto composto de cada exigência sobre o mercado demográfico disponível.",
        ],
        image: {
          src: resultsImg,
          caption: "O mostrador de probabilidades em tempo real: percentual da população elegível e odds de raridade calculadas na hora.",
          alt: "Resultado da probabilidade demográfica",
          size: "sm",
        },
      },
      {
        heading: "A viralização orgânica do card em HTML Canvas",
        paragraphs: [
          "Para amplificar o valor da ferramenta, implementei um gerador de cartões de diagnóstico renderizado no cliente com HTML Canvas. Ao concluir a simulação, o usuário ganha um card estilizado com a nota de raridade ('A Raridade do Meu Tipo', variando de 'Coração de Mãe' até 'Agulha no Palheiro') pronto para download e compartilhamento nos stories do Instagram e no X.",
          "Essa única funcionalidade gerou milhares de compartilhamentos espontâneos orgânicos: as pessoas compartilhavam seus resultados tanto para rir de suas próprias exigências absurdas quanto para comprovar que seus critérios eram, na verdade, razoáveis.",
        ],
        image: {
          src: cardImg,
          caption: "O Card Viral gerado no cliente via HTML Canvas: diagnóstico de raridade pronto para download e redes sociais.",
          alt: "Card de diagnóstico gerado pelo Ideal-Calculator",
        },
      },
      {
        heading: "O que aprendi construindo um espelho estatístico",
        paragraphs: [
          "Construir o Ideal-Calculator me ensinou lições valiosas de engenharia e produto que vão muito além de linhas de código em React ou otimização de arrays:",
        ],
        bulletPoints: [
          "**A tecnologia pode trazer racionalidade para o debate social**: Em um ambiente dominado por desinformação, bolhas algorítmicas e discursos inflamados sobre relacionamentos, colocar dados estatísticos oficiais ao alcance de um clique atua como um desarmador de conflitos prático.",
          "**Dados públicos só têm valor se forem acessíveis**: O IBGE produz dados de altíssima qualidade, mas empacotados em arquivos complexos que o cidadão comum nunca vai abrir. O papel do engenheiro de software é criar pontes de usabilidade que transformem dados inertes em instrumentos de reflexão.",
          "**Computação no cliente é o melhor atalho para escalabilidade**: Ao embutir as matrizes de probabilidade otimizadas diretamente no bundle do frontend, o app aguentou picos de milhares de usuários simultâneos sem gastar um centavo com infraestrutura de servidores dedicados.",
        ],
        callout: {
          type: "insight",
          title: "Diário de engenharia",
          text: "O Ideal-Calculator provou que os projetos mais marcantes não são aqueles que tentam inventar arquiteturas mirabolantes, mas os que aplicam engenharia rigorosa para responder com clareza a uma inquietação real da sociedade.",
        },
      },
    ],
  },
  en: {
    category: "Data Science & Product",
    title: "The Myth of the Ideal Partner: Using Census Data to Benchmark Relationship Expectations",
    summary:
      "In March 2026, amid heated online culture wars and unrealistic relationship checklists on social media, I traded emotional arguments for statistics: how I cross-referenced official IBGE demographic microdata to build Ideal-Calculator.",
    coverCaption:
      "Ideal-Calculator parameter panel: 12 demographic criteria benchmarked against official census microdata.",
    sections: [
      {
        heading: "The noise on social media and the spark of the idea",
        paragraphs: [
          "Anyone scrolling through Brazilian social media during early 2026 encountered a relentless barrage of gender debates. On one front, legislative discussions advanced regarding criminalizing misogyny; on the other, relationship podcasts and TikTok clips engaged in increasingly polarized culture wars completely detached from everyday reality.",
          "What caught my attention was not the online friction itself, but the sheer absurdity of mutual demand checklists going viral every single day. Men demanding unreachable physical ideals and domestic submission; women expecting any prospective partner to earn over twenty thousand reais per month, stand taller than 6 feet, have no children, remain unmarried, and be under thirty years old.",
          "Everyone had passionate arguments, but nobody bothered looking at real population demographics. That was my engineering spark: instead of taking sides in an endless ideological argument, why not let math do the talking? What is the actual statistical probability of someone meeting all these criteria existing in Brazil?",
        ],
        callout: {
          type: "insight",
          title: "Opinions are limitless, but demographics are finite",
          text: "Social media creates an illusion of infinite partner options. When you benchmark against official census data, mathematical reality dissolves delusional checklists within seconds.",
        },
      },
      {
        heading: "From Census microdata to the computation engine",
        paragraphs: [
          "For the calculator to command genuine credibility rather than feeling like a frivolous quiz, the statistical foundation had to be unassailable and auditable. I spent two weeks parsing public microdata releases from the Brazilian Institute of Geography and Statistics (IBGE).",
          "The analytical backbone integrates three primary government surveys: the 2022 National Census (for population cohorts across age brackets, gender, race, and marital status), the Continuous PNAD 2023 (for percentile wage distributions among the active workforce), and the POF household budget survey (which provides empirical anthropometric height curves by demographic segment).",
          "With these datasets compiled, the engineering hurdle was compressing gigabytes of dense census tables into a nimble model queryable within milliseconds in any web browser.",
        ],
        image: {
          src: sourcesImg,
          caption: "Data audit and methodology: full transparency backed by official microdata from the 2022 Census, PNAD, and POF surveys.",
          alt: "IBGE data sources and statistical methodology",
        },
      },
      {
        heading: "Engineering challenges: when filters are not independent",
        paragraphs: [
          "The toughest challenge of building Ideal-Calculator was not styling interface sliders, but avoiding the statistical fallacy that invalidates most amateur online calculators.",
        ],
        subsections: [
          {
            heading: "The naive probability trap and conditional matrices",
            paragraphs: [
              "The most common amateur mistake is assuming statistical independence, simply multiplying individual probabilities: P(male) multiplied by P(income > 15k) multiplied by P(height > 1.85m) multiplied by P(age 25 to 30). In the real world, these metrics correlate heavily.",
              "Income correlates with age and education: earning fifteen thousand reais is statistically rare at age twenty-three, but significantly more common among forty-five-year-old professionals in metropolitan centers. Similarly, height correlates with demographic cohorts. To prevent skewed figures, I modeled conditional probability matrices that adjust marginal weights dynamically based on chosen age brackets and geographic regions.",
            ],
            codeBlock: {
              language: "typescript",
              filename: "probabilityEngine.ts",
              code: `// Conditional probability computation with stratified census cohorts
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Conditional income rate weighted by selected age bracket
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
            heading: "Twelve simultaneous filters evaluated in client real time",
            paragraphs: [
              "I refused to force users to click a sluggish 'Submit' button and wait for a server round-trip. The demographic share had to recalculate instantly as users dragged age, height, and income sliders.",
              "I wrote the statistical engine in TypeScript running entirely in the client with React 19 and Tailwind CSS. The census matrices compress into optimized lookup arrays, allowing joint probability calculations and visual gauge updates to finish in under eight milliseconds.",
            ],
            image: {
              src: filtersImg,
              caption: "Interactive parameter suite: 12 demographic sliders with real-time sub-10ms browser recalculations.",
              alt: "Ideal-Calculator demographic parameter sliders",
            },
          },
        ],
      },
      {
        heading: "The reality check: 0.08% available match probability",
        paragraphs: [
          "When the calculator debuted during initial friend tests, the reaction was immediate. A hypothetical profile frequently cited as 'basic standards' online (unmarried man, age 25 to 35, taller than 5'11\", earning over twelve thousand reais) resolved to a meager 0.14% of the Brazilian male population: roughly 1 in every 714 men.",
          "The speedometer on screen left zero room for wishful thinking: with every slider notch moved to the right, the gauge plummeted toward statistical unicorn territory, demonstrating the steep compounding effect of multiple demographic demands.",
        ],
        image: {
          src: resultsImg,
          caption: "Live probability gauge: eligible population share and relative odds calculated on the fly.",
          alt: "Demographic probability readout gauge",
          size: "sm",
        },
      },
      {
        heading: "Organic virality through client-side HTML Canvas cards",
        paragraphs: [
          "To give the utility organic reach, I built an HTML Canvas scorecard generator rendered directly in the browser. Upon finalizing a calculation, users receive an exportable card diagnosing partner rarity (ranging from 'Unicorn Needle' to 'Open Door Policy') ready for Instagram Stories and X.",
          "This single interaction sparked widespread organic sharing: people posted their cards both to poke fun at their own stringent standards and to prove their requirements were grounded in reality.",
        ],
        image: {
          src: cardImg,
          caption: "Client-side Canvas card generator: shareable rarity diagnosis ready for social media export.",
          alt: "Ideal-Calculator scorecard generator",
        },
      },
      {
        heading: "What building a statistical mirror taught me",
        paragraphs: [
          "Developing Ideal-Calculator imparted engineering lessons that stretch far beyond writing React components or optimizing array lookups:",
        ],
        bulletPoints: [
          "**Technology can inject sanity into social discourse**: In an online climate poisoned by rage bait and polarized relationship expectations, putting official statistics a single click away acts as a practical demystifier.",
          "**Public datasets are worthless without ergonomic interfaces**: Government census bureaus produce meticulous data, but bury it in impenetrable spreadsheets. The engineer's job is building bridges of usability that turn dormant data into accessible tools.",
          "**Client-side computation is the cleanest path to scale**: Embedding pre-computed probability matrices into the frontend bundle allowed the app to handle viral traffic spikes without spending a dime on dedicated server infrastructure.",
        ],
        callout: {
          type: "insight",
          title: "Engineering log",
          text: "Ideal-Calculator proved that meaningful projects are rarely about over-engineering complex backends; they are about applying rigorous engineering to bring clarity to questions people are actively wrestling with.",
        },
      },
    ],
  },
};

