import type { PostContent } from "../../types";
import filtersImg from "../idealcalc-filters.png";
import resultsImg from "../idealcalc-results.png";
import cardImg from "../idealcalc-card.png";
import sourcesImg from "../idealcalc-sources.png";

// ─── German (de) ────────────────────────────────────────────────
export const deContent: PostContent = {
  category: "Data Science & Produktentwicklung",
  title: "Der Mythos vom idealen Partner: Zensus-Daten im Realitätscheck für Beziehungsansprüche",
  summary:
    "Im März 2026, inmitten hitziger Social-Media-Debatten über weltfremde Dating-Checklisten, ersetzte ich endlose Diskussionen durch Mathematik: Wie ich offizielle Zensus-Mikrodaten kreuzte, um Ideal-Calculator zu entwickeln.",
  coverCaption:
    "Parameter-Dashboard von Ideal-Calculator: 12 demografische Kriterien im Abgleich mit offiziellen Zensus-Mikrodaten.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Statistik"],
  links: [
    { title: "Zum Rechner", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Code auf GitHub ansehen", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "Social-Media-Hype und der Funke für die Idee",
      paragraphs: [
        "Wer Anfang 2026 durch soziale Medien scrollte, stieß unweigerlich auf ein toxisches Klima rund um Beziehungsdebatten: Gesetzesvorhaben, Dating-Podcasts und TikTok-Clips überboten sich mit immer polarisierteren, realitätsfernen Narrativen.",
        "Besonders auffällig waren die absurden Checklisten gegenseitiger Forderungen, die täglich viral gingen: Männer, die unerreichbare Schönheitsideale verlangten; Frauen, die Partner mit Spitzengehältern über zwanzigtausend Reais, einer Körpergröße ab 1,85 m, kinderlos, ledig und unter dreißig Jahren forderten.",
        "Jeder hatte eine laute Meinung, doch niemand warf einen Blick in die reale Bevölkerungsstatistik. Als Software-Entwickler kam mir der entscheidende Gedanke: Warum nicht die Mathematik sprechen lassen, statt ideologische Scheingefechte zu führen? Wie hoch ist die statistische Wahrscheinlichkeit, dass in der Realität jemand all diese Kriterien gleichzeitig erfüllt?",
      ],
      callout: {
        type: "insight",
        title: "Meinungen sind grenzenlos, Demografie ist endlich",
        text: "Das Internet erzeugt die Illusion unendlicher Partnerauswahl. Gleicht man diese Ansprüche mit amtlichen Zensusdaten ab, zerlegt die mathematische Realität jede weltfremde Checkliste in Sekundenschnelle.",
      },
    },
    {
      heading: "Vom Zensus zur Berechnungs-Engine",
      paragraphs: [
        "Damit das Werkzeug echte Glaubwürdigkeit besitzt und nicht wie ein banales Spaß-Quiz wirkt, mussten die Daten lückenlos belegbar und auditierbar sein. Ich verbrachte zwei Wochen mit der Analyse der öffentlichen Mikrodaten des nationalen Statistikamtes (IBGE).",
        "Das analytische Rückgrat stützt sich auf drei Primärquellen: den Zensus 2022 (Verteilung nach Altersgruppen, Geschlecht, Ethnie und Familienstand), die kontinuierliche Arbeitsmarktstudie PNAD 2023 (präzise Perzentil-Einkommensverteilungen der Erwerbsbevölkerung) und die Haushaltsbudget-Erhebung POF (biometrische Körpergrößenverteilungen).",
        "Die ingenieurtechnische Herausforderung bestand darin, Gigabytes dichter Tabellen in ein kompaktes Modell zu komprimieren, das im Browser in Millisekunden berechnet werden kann.",
      ],
      image: {
        src: sourcesImg,
        caption: "Methodische Transparenz: Lückenlose Rückverfolgbarkeit basierend auf offiziellen Mikrodaten aus Zensus, PNAD und POF.",
        alt: "Datenquellen und statistische Methodik",
      },
    },
    {
      heading: "Engineering-Herausforderungen: Wenn Filter korrelieren",
      paragraphs: [
        "Die schwierigste Aufgabe beim Bau von Ideal-Calculator war nicht das Design, sondern das Vermeiden des statistischen Denkfehlers, der die meisten Amateur-Rechner im Netz wertlos macht.",
      ],
      subsections: [
        {
          heading: "Die Falle naiver Wahrscheinlichkeiten und bedingte Matrizen",
          paragraphs: [
            "Der häufigste Anfängerfehler ist die Annahme stochastischer Unabhängigkeit – also das schlichte Multiplizieren einzelner Wahrscheinlichkeiten: P(Geschlecht) × P(Einkommen > 15k) × P(Größe > 1,85m) × P(Alter 25–30). In der Realität korrelieren diese Merkmale stark.",
            "Einkommen hängt eng mit Alter und Berufserfahrung zusammen: Ein Spitzengehalt ist mit 23 extrem selten, bei 45-Jährigen in Metropolen jedoch deutlich häufiger. Um Verzerrungen zu vermeiden, modellierte ich bedingte Wahrscheinlichkeitsmatrizen, die marginale Gewichte dynamisch an die gewählten Alters- und Regionalkohorten anpassen.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Bedingte Wahrscheinlichkeitsberechnung mit geschichteten Zensusmatrizen
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Bedingtes Einkommen gewichtet nach gewählter Alterskohorte
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
          heading: "Zwölf simultane Filter in Echtzeit im Browser berechnet",
          paragraphs: [
            "Ich wollte Nutzern keinen trägen 'Berechnen'-Button zumuten, der auf einen Server wartet. Die Berechnung musste in Echtzeit beim Verschieben der Schieberegler für Einkommen, Größe und Alter stattfinden.",
            "Ich entwickelte die Engine in TypeScript, die zu 100 % clientseitig mit React 19 und Tailwind CSS läuft. Zensustabellen wurden in optimierte binäre Lookup-Arrays gepackt, sodass Wahrscheinlichkeitsberechnungen und Diagrammaktualisierungen in unter 8 Millisekunden ablaufen.",
          ],
          image: {
            src: filtersImg,
            caption: "Interaktive Filter: Flüssige Schieberegler mit sofortigem Feedback ohne Netzwerklatenz.",
            alt: "Demografisches Filter-Panel von Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Client-Computing schützt die Infrastruktur",
            text: "Indem das statistische Modell im Browser des Nutzers rechnet, liefert der Server lediglich statische Dateien aus – die Server-Rechenkosten pro Abfrage liegen bei null.",
          },
        },
      ],
    },
    {
      heading: "Der Realitäts-Tachometer: 0,08 % Trefferwahrscheinlichkeit",
      paragraphs: [
        "Der eindrücklichste Aspekt der Anwendung ist der visuelle Tachometer, der die berechnete Übereinstimmung mit Wahrscheinlichkeiten wie einem Blitzschlag oder Lottogewinn vergleicht.",
        "Gibt man die typischen Kriterien viraler Social-Media-Videos ein (lediger Mann, über 1,85 m, Top-5-Prozent-Gehalt und unter dreißig Jahre alt), liefert die Mathematik ein unmissverständliches Urteil: Lediglich 0,08 % der Bevölkerung erfüllen dieses Profil (1 von 1.250 Personen landesweit).",
        "Diese Zahl nimmt den von Algorithmen geschürten Erwartungen sofort den Wind aus den Segeln.",
      ],
      image: {
        src: resultsImg,
        caption: "Ergebnisbildschirm: Seltenheits-Tachometer und greifbare Wahrscheinlichkeitsvergleiche.",
        alt: "Statistische Ergebnisse von Ideal-Calculator",
      },
    },
    {
      heading: "Organische Viralität durch clientseitig generierte Canvas-Karten",
      paragraphs: [
        "Um das Teilen zu fördern, integrierte ich einen bildbasierten Kartengenerator mittels HTML5 Canvas direkt im Browser. Mit einem Klick lädt der Nutzer eine stilisierte Infokarte mit seinen Parametern und dem exakten Prozentsatz herunter.",
        "Dadurch verwandelte sich ein nüchternes mathematisches Modell in einen viralen Gesprächsanlass, der tausende organische Aufrufe ohne jegliches Werbebudget erzielte.",
      ],
      image: {
        src: cardImg,
        caption: "Dynamisch generierte Karte: Für Stories und Social-Media optimierte Infografik.",
        alt: "Social-Media-Share-Card von Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "Die visuelle Karte ist der Vertriebskanal",
        text: "Die Möglichkeit, ein ansprechendes visuelles Fazit direkt herunterzuladen, macht jede individuelle Berechnung zum natürlichen Multiplikator.",
      },
    },
    {
      heading: "Was ich beim Bau eines statistischen Spiegels gelernt habe",
      paragraphs: [
        "Ideal-Calculator hat bewiesen, dass Software nicht nur Arbeitsabläufe automatisiert, sondern durch empirische Methoden auch Klarheit in gesellschaftliche Debatten bringen kann.",
        "Drei Kernlehren nehme ich aus dem Projekt mit:",
      ],
      bulletPoints: [
        "**Technologie bringt Sachlichkeit in soziale Debatten**: Wo Algorithmen Polarisierung fördern, wirkt die Bereitstellung auditierbarer Daten per Klick als wirksames Instrument zur Entspannung hitziger Scheindiskussionen.",
        "**Offizielle Daten nützen nur, wenn sie zugänglich sind**: Statistikämter liefern hervorragende Daten, verpacken sie jedoch in unzugänglichen Tabellen. Die Aufgabe von Software-Entwicklern ist es, Brücken der Usability zu bauen.",
        "**Clientseitige Datenverarbeitung skaliert mühelos**: Durch die Einbettung der Matrizen in das Frontend-Bundle stemmte die Web-App Traffic-Spitzen tausender Nutzer ohne teure dedizierte Server.",
      ],
      callout: {
        type: "insight",
        title: "Engineering-Tagebuch",
        text: "Ideal-Calculator zeigte mir, dass die wirkungsvollsten Software-Projekte nicht jene sind, die übertrieben komplexe Architekturen erfinden, sondern jene, die durch Präzision eine greifbare gesellschaftliche Frage beantworten.",
      },
    },
  ],
};

// ─── Dutch (nl) ─────────────────────────────────────────────────
export const nlContent: PostContent = {
  category: "Data Science & Product",
  title: "De mythe van de ideale partner: officiële censusdata als nuchtere relatietest",
  summary:
    "In maart 2026, te midden van verhitte socialemediadiscussies over onrealistische datingeisen, koos ik voor wiskunde in plaats van loze meningen: hoe ik censusmicrodata koppelde om Ideal-Calculator te bouwen.",
  coverCaption:
    "Parametervenster van Ideal-Calculator: 12 demografische criteria gekruist met openbare volkstellingsgegevens.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Statistiek"],
  links: [
    { title: "Naar de Calculator", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Code op GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "Socialemediaruis en de vonk van het idee",
      paragraphs: [
        "Wie begin 2026 door sociale media bladerde, werd bedolven onder gepolariseerde debatten over dating: wetgevingen, relatiepodcasts en virale TikTok-video's hielden verwachtingen in stand die mijlenver van de werkelijkheid af stonden.",
        "Wat vooral opviel, was de stroom aan wederzijdse wensenlijstjes die viraal gingen: mannen die onhaalbare uiterlijke standaarden eisten; vrouwen die partners verwachtten met topsalarissen boven twintigduizend reais, langer dan 1,85 meter, vrijgezel, zonder kinderen en jonger dan dertig.",
        "Iedereen had een uitgesproken mening, maar niemand keek naar de reële bevolkingscijfers. Daar ontstond mijn idee als ontwikkelaar: waarom laten we de cijfers niet spreken? Wat is statistisch gezien de werkelijke kans dat er iemand bestaat die aan al deze eisen tegelijk voldoet?",
      ],
      callout: {
        type: "insight",
        title: "Meningen zijn oneindig, demografie is eindig",
        text: "Het internet schept de illusie van eindeloze partnerkeuzes. Als je die toetst aan officiële statistieken, ontmantelt de wiskunde elke buitensporige wensenlijst binnen enkele seconden.",
      },
    },
    {
      heading: "Van volkstelling tot rekenmotor",
      paragraphs: [
        "Om de tool geloofwaardig te maken en niet als een triviale internetquiz te laten overkomen, moesten de gegevens onweerlegbaar en controleerbaar zijn. Twee weken lang verdiepte ik me in de openbare microdata van het nationaal bureau voor de statistiek (IBGE).",
        "Het statistische raamwerk combineerde drie primaire bronnen: de Volkstelling 2022 (voor verdeling naar leeftijd, geslacht, etniciteit en burgerlijke staat), de continue inkomensmeting PNAD 2023 (voor percentielverdelingen van inkomens) en het budgetonderzoek POF (voor biometrische lengtedata).",
        "De technische uitdaging was om gigabytes aan tabellen te comprimeren tot een compact model dat in de browser in milliseconden kan worden geraadpleegd.",
      ],
      image: {
        src: sourcesImg,
        caption: "Methodologische transparantie: traceerbare data gebaseerd op officiële volkstellings- en inkomensstatistieken.",
        alt: "Databronnen en statistische methodologie",
      },
    },
    {
      heading: "Engineering-uitdagingen: wanneer filters onderling correleren",
      paragraphs: [
        "Het moeilijkste aan Ideal-Calculator was niet de interface, maar het vermijden van de statistische denkfout die vrijwel alle online rekentools waardeloos maakt.",
      ],
      subsections: [
        {
          heading: "De valkuil van naïeve kansberekening en voorwaardelijke matrices",
          paragraphs: [
            "De meest voorkomende fout is het aannemen van zuivere onafhankelijkheid: simpelweg P(geslacht) × P(inkomen > norm) × P(lengte > 1,85m) × P(leeftijd 25-30) vermenigvuldigen. In werkelijkheid hangen deze variabelen nauw met elkaar samen.",
            "Inkomsten zijn sterk afhankelijk van leeftijd en loopbaan: een topinkomen is zeldzaam bij een drieëntwintigjarige, maar komt veel vaker voor bij vijfenveertigjarigen in grote steden. Om vertekende uitkomsten te voorkomen, ontwierp ik voorwaardelijke kansmatrices die gewichten aanpassen aan de gekozen leeftijd en regio.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Voorwaardelijke kansberekening met gestratificeerde matrices
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Inkomensratio gewogen naar leeftijdscohort
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
          heading: "Twaalf gelijktijdige filters direct in de browser berekend",
          paragraphs: [
            "Ik wilde gebruikers niet opzadelen met een knop 'Berekenen' die moet wachten op een trage server. De verwerking moest direct plaatsvinden terwijl iemand schuifregelaars voor salaris, lengte en leeftijd aanpast.",
            "Ik bouwde de rekenmotor in TypeScript die 100% lokaal in de browser draait met React 19 en Tailwind CSS. De tabellen werden gecomprimeerd tot binaire zoekstructuren, waardoor kansberekeningen en grafieken in minder dan 8 milliseconden bijwerken.",
          ],
          image: {
            src: filtersImg,
            caption: "Interactieve interface: schuifregelaars met directe visuele respons zonder netwerklatentie.",
            alt: "Filterpaneel van Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Client-side computing beschermt de infrastructuur",
            text: "Door het wiskundige model in de browser te laten draaien, hoeft de server alleen statische bestanden te leveren, waardoor de serverkosten per zoekopdracht nul zijn.",
          },
        },
      ],
    },
    {
      heading: "De realiteitscheck: 0,08% kans op een match",
      paragraphs: [
        "De grootste impact van de applicatie zit in de visuele snelheidsmeter, die het percentage vergelijkt met de kans om door de bliksem getroffen te worden of een loterij te winnen.",
        "Vult men de gangbare virale wensenlijst in (vrijgezelle man, langer dan 1,85 meter, topinkomen en jonger dan 30), dan is de wiskundige slotsom onverbiddelijk: slechts 0,08% van de bevolking voldoet hieraan (1 op de 1.250 mensen in het hele land).",
        "Die nuchtere cijfers prikken de door algoritmes gevoede verwachtingen meteen door.",
      ],
      image: {
        src: resultsImg,
        caption: "Resultatenweergave: zeldzaamheidsmeter en aansprekende probabilistische vergelijkingen.",
        alt: "Resultatenoverzicht van Ideal-Calculator",
      },
    },
    {
      heading: "Organische viraliteit met gegenereerde Canvas-kaarten",
      paragraphs: [
        "Om delen te stimuleren, integreerde ik een deelfunctie op basis van HTML5 Canvas. Met één klik downloadt de gebruiker een gestileerde kaart met zijn filters en het exacte percentage.",
        "Zo groeide een serieuze data-analyse uit tot een viraal gespreksonderwerp met duizenden organische views, zonder een cent aan marketing uit te geven.",
      ],
      image: {
        src: cardImg,
        caption: "Dynamisch gegenereerde kaart: grafisch overzicht geoptimaliseerd voor sociale media.",
        alt: "Deelbare kaart van Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "De grafische kaart is het distributiekanaal",
        text: "Door gebruikers meteen een aantrekkelijke infographic te laten downloaden, wordt elke berekening een natuurlijk kanaal voor nieuwe bezoekers.",
      },
    },
    {
      heading: "Wat het bouwen van een statistische spiegel mij leerde",
      paragraphs: [
        "Ideal-Calculator toonde aan dat software niet alleen dient om taken te automatiseren, maar ook kan helpen maatschappelijke discussies te ontzenuwen met objectieve feiten.",
        "De drie belangrijkste inzichten uit dit project:",
      ],
      bulletPoints: [
        "**Technologie brengt rust in het publieke debat**: Waar sociale media polarisatie voeden, helpt het beschikbaar stellen van controleerbare cijfers met één klik om verhitte discussies te temperen.",
        "**Openbare data heeft pas waarde als ze begrijpelijk is**: Overheidsinstanties produceren waardevolle data, maar stoppen die weg in ontoegankelijke tabellen. De taak van de ontwikkelaar is bruggen te slaan naar gebruiksvriendelijke tools.",
        "**Verwerking in de client is ideaal voor schaalbaarheid**: Door de matrices direct in het frontend-bundle op te nemen, kon de applicatie enorme bezoekersaantallen verwerken zonder dure dedicated servers.",
      ],
      callout: {
        type: "insight",
        title: "Technisch dagboek",
        text: "Ideal-Calculator liet zien dat de meest waardevolle software niet bestaat uit nodeloos ingewikkelde architecturen, maar uit degelijk vakmanschap dat heldere antwoorden geeft op een actuele vraag.",
      },
    },
  ],
};

// ─── Russian (ru) ───────────────────────────────────────────────
export const ruContent: PostContent = {
  category: "Наука о данных и продуктовая разработка",
  title: "Миф об идеальном партнере: перекрестный анализ данных переписи для оценки ожиданий в отношениях",
  summary:
    "В марте 2026 года, на волне сетевых споров о завышенных требованиях к партнерам, я заменил пустые эмоции математикой: как я сопоставил микроданные государственной переписи для создания Ideal-Calculator.",
  coverCaption:
    "Панель параметров Ideal-Calculator: 12 демографических фильтров, рассчитанных по официальным микроданным переписи.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Статистика"],
  links: [
    { title: "Открыть калькулятор", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Исходный код на GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "Шум в социальных сетях и зарождение идеи",
      paragraphs: [
        "Каждый, кто заходил в социальные сети в начале 2026 года, помнит накал дискуссий об отношениях: законодательные дебаты, подкасты о свиданиях и вирусные ролики в TikTok транслировали требования, оторванные от реальности.",
        "Больше всего меня поражали публиковавшиеся чек-листы взаимных претензий: мужчины требовали недостижимых модельных стандартов; женщины ожидали партнеров с доходом свыше двадцати тысяч реалов, ростом от 185 см, холостых, без детей и моложе тридцати.",
        "У всех были категоричные суждения, но никто не открывал реальную демографическую статистику. И тут сработала инженерная мысль: зачем вступать в бесконечные споры, если можно обратиться к математике? Какова реальная статистическая вероятность существования человека, отвечающего всем этим критериям одновременно?",
      ],
      callout: {
        type: "insight",
        title: "Мнений бесконечно много, а демография конечна",
        text: "Интернет создает иллюзию неограниченного выбора. При сопоставлении с официальной статистикой математическая реальность разрушает иллюзорные списки за считанные секунды.",
      },
    },
    {
      heading: "От национальной переписи к расчетному ядру",
      paragraphs: [
        "Чтобы инструмент вызывал доверие и не выглядел поверхностным развлечением, расчеты должны были базироваться на безупречных источниках. Я посвятил две недели исследованию открытых микроданных Института географии и статистики (IBGE).",
        "Аналитический фундамент объединил три ключевых исследования: перепись населения 2022 года (распределение по возрасту, полу, этнической принадлежности и семейному положению), регулярное обследование занятости PNAD 2023 (детальная перцентильная сетка доходов) и исследование семейных бюджетов POF (биометрические параметры роста).",
        "Техническая задача заключалась в том, чтобы упаковать гигабайты громоздких таблиц в легковесную модель, выполняющую расчеты в браузере за доли секунды.",
      ],
      image: {
        src: sourcesImg,
        caption: "Методологическая прозрачность: расчеты основаны на открытых микроданных переписи, PNAD и POF.",
        alt: "Источники данных и методология расчетов",
      },
    },
    {
      heading: "Инженерные вызовы: когда параметры взаимосвязаны",
      paragraphs: [
        "Сложнейшей частью разработки Ideal-Calculator был не дизайн, а преодоление статистической ошибки, которая обесценивает большинство любительских калькуляторов в сети.",
      ],
      subsections: [
        {
          heading: "Ловушка наивной вероятности и условные матрицы",
          paragraphs: [
            "Самая частая ошибка — предположение о независимости событий и прямое перемножение вероятностей: P(пол) × P(доход > 15k) × P(рост > 1,85м) × P(возраст 25-30). В реальной жизни эти переменные тесно коррелируют.",
            "Уровень дохода напрямую зависит от возраста и стажа: заработок свыше 15 тысяч реалов крайне редок в 23 года, но гораздо чаще встречается у 45-летних специалистов в мегаполисах. Чтобы избежать искажений, я построил условные матрицы вероятностей, динамически корректирующие веса в зависимости от выбранного возраста и географии.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Расчет условной вероятности на основе матриц переписи
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Взвешенная вероятность дохода с учетом выбранного возраста
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
          heading: "Двенадцать параметров, рассчитываемых мгновенно на клиенте",
          paragraphs: [
            "Я не хотел заставлять пользователя нажимать кнопку 'Рассчитать' и ждать ответа от удаленного сервера. Вычисления должны были происходить на лету при перемещении ползунков дохода, роста и возраста.",
            "Я разработал движок на TypeScript, работающий на 100% в браузере с React 19 и Tailwind CSS. Таблицы были упакованы в оптимизированные бинарные массивы, благодаря чему расчет совместной вероятности и обновление графиков занимают менее 8 миллисекунд.",
          ],
          image: {
            src: filtersImg,
            caption: "Интерактивная панель: плавные ползунки с мгновенной реакцией без задержек сети.",
            alt: "Панель фильтров Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Вычисления на клиенте защищают инфраструктуру",
            text: "Перенос математической модели в браузер пользователя позволяет серверу отдавать только статические файлы, сводя затраты на серверные вычисления к нулю.",
          },
        },
      ],
    },
    {
      heading: "Спидометр реальности: 0,08% подходящих кандидатов",
      paragraphs: [
        "Наиболее наглядным элементом приложения стал динамический спидометр, сопоставляющий итоговый процент с вероятностью попадания молнии или выигрыша в лотерею.",
        "Когда пользователь вводит типичные популярные требования (холостой мужчина, рост от 185 см, доход в верхних 5% и возраст до 30 лет), расчет выдает отрезвляющий вердикт: всего 0,08% населения (1 человек из 1250 по всей стране).",
        "Эта наглядная цифра мгновенно развеивает иллюзорные ожидания, сформированные алгоритмами соцсетей.",
      ],
      image: {
        src: resultsImg,
        caption: "Экран результатов: спидометр редкости и наглядные вероятностные аналогии.",
        alt: "Результаты вычислений в Ideal-Calculator",
      },
    },
    {
      heading: "Вирусное распространение с помощью генерации карточек в Canvas",
      paragraphs: [
        "Для простоты распространения я встроил механизм генерации графических карточек на базе HTML5 Canvas прямо в браузере. В один клик пользователь скачивает стильное изображение со своими параметрами и точным процентом.",
        "Это превратило строгое математическое исследование в вирусный инфоповод, принесший тысячи органических просмотров без затрат на рекламу.",
      ],
      image: {
        src: cardImg,
        caption: "Динамически сгенерированная карточка: готовый визуал для публикаций в социальных сетях.",
        alt: "Карточка для шеринга в Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "Графическая карточка как канал дистрибуции",
        text: "Возможность мгновенно сохранить эстетичный итог расчетов превращает каждого пользователя в естественного амбассадора приложения.",
      },
    },
    {
      heading: "Чему меня научило создание статистического зеркала",
      paragraphs: [
        "Ideal-Calculator доказал, что разработка ПО способна не только автоматизировать рутину, но и вносить ясность в общественные дискуссии с помощью точных данных.",
        "Главные выводы, которые я вынес из этого проекта:",
      ],
      bulletPoints: [
        "**Технологии возвращают рациональность в общественный диалог**: В условиях поляризации открытый доступ к проверяемым данным помогает снять напряжение и заменить домыслы фактами.",
        "**Данные ценны лишь тогда, когда они доступны**: Государственные ведомства собирают колоссальные массивы информации, но хранят их в сложных форматах. Задача инженера — создавать удобные интерфейсы для их понимания.",
        "**Клиентские вычисления — идеальный путь к масштабируемости**: Инкапсуляция аналитических матриц во фронтенд позволила выдержать наплыв тысяч одновременных пользователей без расходов на выделенные серверы.",
      ],
      callout: {
        type: "insight",
        title: "Инженерный дневник",
        text: "Ideal-Calculator подтвердил, что самые значимые проекты — это не те, где нагромождены избыточные архитектуры, а те, где строгий инженерный подход дает ясный ответ на живой вопрос общества.",
      },
    },
  ],
};

