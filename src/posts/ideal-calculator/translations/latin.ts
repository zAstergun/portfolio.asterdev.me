import type { PostContent } from "../../types";
import filtersImg from "../idealcalc-filters.png";
import resultsImg from "../idealcalc-results.png";
import cardImg from "../idealcalc-card.png";
import sourcesImg from "../idealcalc-sources.png";

// ─── Spanish (es) ───────────────────────────────────────────────
export const esContent: PostContent = {
  category: "Ciencia de Datos y Producto",
  title: "El mito de la pareja ideal: cruzando datos censales para medir la realidad de las relaciones",
  summary:
    "En marzo de 2026, en pleno auge de debates en redes sobre expectativas irreales de pareja, sustituí la discusión vacía por matemáticas: cómo crucé microdatos demográficos del IBGE para construir Ideal-Calculator y qué reveló la estadística real.",
  coverCaption:
    "Panel de parámetros de Ideal-Calculator: 12 criterios demográficos cruzados con microdatos oficiales.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Estadística"],
  links: [
    { title: "Acceder a la Calculadora", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Código en GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "El ruido en redes y la chispa de la idea",
      paragraphs: [
        "Quien navegara por las redes sociales a principios de 2026 recordará un clima saturado de polarización sobre relaciones sentimentales: debates legislativos, podcasts de citas y clips en TikTok disputándose narrativas desconectadas de la vida real.",
        "Lo que más me llamaba la atención era la avalancha de listas de exigencias mutuas que se hacían virales cada día. Hombres demandando estándares estéticos inalcanzables; mujeres exigiendo parejas que ganaran más de veinte mil reales al mes, midieran más de un metro ochenta y cinco, fueran solteros, sin hijos y menores de treinta años.",
        "Todos tenían opiniones vehementes, pero nadie se molestaba en consultar la demografía real del país. Ahí surgió mi instinto como programador: en lugar de alimentar debates interminables, ¿por qué no poner las matemáticas sobre la mesa? ¿Cuál es, con rigor estadístico, la probabilidad de que exista alguien que cumpla con todos esos filtros combinados?",
      ],
      callout: {
        type: "insight",
        title: "Las opiniones son infinitas, pero la demografía es finita",
        text: "Internet crea la ilusión de opciones ilimitadas. Al contrastar con datos oficiales, la realidad matemática desmonta cualquier checklist desmedido en cinco segundos.",
      },
    },
    {
      heading: "Del Censo Nacional al motor de cálculo",
      paragraphs: [
        "Para que la herramienta tuviera credibilidad y no fuera un cuestionario más de internet, los datos debían ser intachables y auditables. Pasé dos semanas estudiando los microdatos públicos del Instituto Brasileño de Geografía y Estadística (IBGE).",
        "El núcleo estadístico cruzó tres fuentes primarias: el Censo Demográfico 2022 (para distribución por edad, género, etnia y estado civil), la PNAD Continua 2023 (para estratificación milimétrica de ingresos de la población activa) y la POF (Encuesta de Presupuestos Familiares, con parámetros biométricos de altura por cohorte).",
        "Con estos datos estructurados, el desafío fue comprimir gigabytes de tablas complejas en un modelo ligero capaz de responder en la web en cuestión de milisegundos.",
      ],
      image: {
        src: sourcesImg,
        caption: "Auditoría y transparencia metodológica: trazabilidad basada en microdatos públicos del Censo 2022, PNAD Continua y POF.",
        alt: "Fuentes de datos y metodología estadística",
      },
    },
    {
      heading: "Desafíos de ingeniería: cuando los filtros no son independientes",
      paragraphs: [
        "La parte más compleja de construir Ideal-Calculator no fue la interfaz visual, sino eludir la falacia estadística que arruina la mayoría de calculadoras amateurs en línea.",
      ],
      subsections: [
        {
          heading: "La trampa de la probabilidad ingenua y las matrices condicionales",
          paragraphs: [
            "El error habitual consiste en asumir independencia estadística pura: multiplicar directamente P(género) por P(ingresos > 15k) por P(altura > 1.85m) por P(edad 25 a 30). En el mundo real, estas variables guardan una correlación estrecha.",
            "Los ingresos están íntimamente ligados a la edad y experiencia: ganar quince mil reales es excepcional a los veintitrés años, pero mucho más frecuente a los cuarenta y cinco en polos metropolitanos. Para evitar distorsiones que inflaran o desinflaran los resultados, modelé matrices condicionales que calibran los pesos en función de la edad y la ubicación geográfica.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Cálculo de probabilidad condicional con matrices estratificadas del IBGE
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Ingresos ponderados dinámicamente por la cohorte de edad
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
          heading: "Doce filtros simultáneos evaluados en tiempo real en el cliente",
          paragraphs: [
            "No quería que el usuario dependiera de un botón de 'Calcular' esperando respuestas de un servidor. El cálculo debía fluir en tiempo real mientras el usuario deslizaba los selectores de ingresos, estatura y edad.",
            "Desarrollé el motor en TypeScript puro corriendo al 100% en el cliente con React 19 y Tailwind CSS. Comprimí las tablas censales en arrays binarios de búsqueda optimizada, logrando que el cálculo de probabilidad conjunta y los gráficos se actualicen en menos de 8 milisegundos.",
          ],
          image: {
            src: filtersImg,
            caption: "Configurador interactivo: selectores fluidos con retroalimentación inmediata sin latencia de red.",
            alt: "Panel de filtros demográficos de Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Procesar en el cliente protege la infraestructura",
            text: "Al ejecutar el modelo estadístico en el navegador del usuario, el servidor solo entrega activos estáticos, reduciendo a cero el coste de cómputo por consulta.",
          },
        },
      ],
    },
    {
      heading: "El velocímetro de la realidad: 0,08% de compatibilidad",
      paragraphs: [
        "El impacto más poderoso de la aplicación radicó en su resultado visual: un velocímetro dinámico que contrasta el porcentaje de coincidencia con la probabilidad de ser alcanzado por un rayo o ganar una lotería.",
        "Cuando un usuario introduce la típica lista viral (hombre soltero, más de 1.85m, ingresos superiores a 15k y menos de 30 años), la calculadora arroja una dura realidad: apenas el 0,08% de la población cumple esos parámetros (1 entre 1.250 personas en todo el país).",
        "Ese choque numérico desmantela de inmediato las expectativas ilusorias promovidas por algoritmos de redes sociales.",
      ],
      image: {
        src: resultsImg,
        caption: "Pantalla de resultados: velocímetro de rareza estadística y comparativas probabilísticas contextuales.",
        alt: "Resultados de compatibilidad en Ideal-Calculator",
      },
    },
    {
      heading: "Viralización orgánica mediante tarjetas en HTML Canvas",
      paragraphs: [
        "Para facilitar la difusión, integré un generador de fichas compartibles en el navegador utilizando Canvas nativo. Con un solo clic, el usuario descarga una tarjeta estilizada con sus filtros y porcentaje exacto.",
        "Esto transformó una herramienta matemática rigurosa en un catalizador de debate social que generó miles de impresiones orgánicas sin gastar un centavo en publicidad.",
      ],
      image: {
        src: cardImg,
        caption: "Ficha generada en tiempo de ejecución: tarjeta visual optimizada para historias y redes sociales.",
        alt: "Tarjeta para compartir de Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "La tarjeta visual es el canal de distribución",
        text: "Diseñar un recurso descargable atractivo directamente en Canvas convierte cada cálculo individual en un mecanismo natural de adquisición.",
      },
    },
    {
      heading: "Lo que aprendí construyendo un espejo estadístico",
      paragraphs: [
        "Ideal-Calculator demostró que el software no solo sirve para automatizar tareas, sino también para aportar lucidez a inquietudes colectivas.",
        "Las tres conclusiones clave que extraigo de este proyecto son:",
      ],
      bulletPoints: [
        "**La tecnología aporta serenidad al debate público**: En un entorno dominado por la crispación y las cámaras de eco, facilitar datos auditables con un solo clic disuelve discusiones infundadas.",
        "**Los datos oficiales solo tienen valor si son accesibles**: Las instituciones generan estadísticas excelentes pero inaccesibles para el ciudadano medio. El rol del desarrollador es crear puentes de usabilidad que hagan comprensible esa riqueza informativa.",
        "**El cómputo en cliente es el atajo maestro a la escalabilidad**: Integrar las matrices de probabilidad directamente en el paquete frontend permitió absorber picos masivos de tráfico sin costes de infraestructura dedicada.",
      ],
      callout: {
        type: "insight",
        title: "Diario de ingeniería",
        text: "Ideal-Calculator evidenció que los desarrollos más trascendentes no son los que inventan arquitecturas estrambóticas, sino los que aplican rigor para responder con claridad a una necesidad real.",
      },
    },
  ],
};

// ─── French (fr) ────────────────────────────────────────────────
export const frContent: PostContent = {
  category: "Science des Données & Produit",
  title: "Le mythe du partenaire idéal : croiser les données démographiques pour mesurer la réalité des couples",
  summary:
    "En mars 2026, au cœur de débats houleux sur les exigences relationnelles démesurées sur les réseaux sociaux, j'ai remplacé la polémique par les mathématiques : comment j'ai croisé les microdonnées de recensement pour concevoir Ideal-Calculator.",
  coverCaption:
    "Panneau de critères d'Ideal-Calculator : 12 filtres démographiques confrontés aux données officielles de recensement.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Statistiques"],
  links: [
    { title: "Accéder au simulateur", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Code source sur GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "Le bruit des réseaux et l'étincelle du projet",
      paragraphs: [
        "Quiconque parcourait les réseaux sociaux au début de 2026 a été témoin d'une saturation de débats passionnés autour des relations amoureuses, entre vidéos TikTok virales et checklists mutuelles complètement déconnectées du quotidien.",
        "Ce qui retenait le plus mon attention était l'extravagance des exigences affichées : certains exigeaient une conformité esthétique absolue, tandis que d'autres réclamaient des prétendants gagnant des sommes astronomiques, mesurant plus d'un mètre quatre-vingt-cinq, célibataires et âgés de moins de trente ans.",
        "Chacun clamait ses certitudes, mais personne ne prenait la peine d'ouvrir les registres démographiques réels. En tant qu'ingénieur, l'idée s'est imposée : pourquoi ne pas laisser les chiffres s'exprimer ? Quelle est, mathématiquement, la probabilité réelle de trouver quelqu'un réunissant tous ces critères cumulés ?",
      ],
      callout: {
        type: "insight",
        title: "Les opinions sont infinies, la démographie est finie",
        text: "Internet entretient l'illusion d'une abondance absolue. Lorsqu'on confronte ces exigences aux données statistiques officielles, la réalité mathématique dissipe les fantasmes en quelques secondes.",
      },
    },
    {
      heading: "Du recensement national au moteur d'inférence",
      paragraphs: [
        "Pour que l'outil possède une légitimité indiscutable et ne ressemble pas à un énième test anecdotique, les données devaient être transparentes et vérifiables. J'ai analysé en détail les microdonnées publiques publiées par l'Institut officiel des statistiques (IBGE).",
        "L'ossature analytique repose sur trois enquêtes majeures : le recensement démographique général (répartition par âge, genre, statut marital), les relevés d'emploi continus (distribution fine des revenus par percentile de la population active) et les enquêtes sur les budgets des ménages (données biométriques de taille par segment).",
        "Le défi technique a consisté à condenser ces gigaoctets de tableaux denses dans un modèle compact capable de délivrer des estimations interactives en temps réel dans le navigateur.",
      ],
      image: {
        src: sourcesImg,
        caption: "Transparence méthodologique : traçabilité fondée sur les microdonnées officielles de recensement et d'enquêtes de revenus.",
        alt: "Sources de données et méthodologie statistique",
      },
    },
    {
      heading: "Défis de modélisation : quand les variables ne sont pas indépendantes",
      paragraphs: [
        "La difficulté fondamentale d'Ideal-Calculator ne résidait pas dans la confection de l'interface, mais dans le refus du piège probabiliste qui invalide la plupart des calculatrices amateurs en ligne.",
      ],
      subsections: [
        {
          heading: "Le piège de la probabilité naïve et les matrices conditionnelles",
          paragraphs: [
            "L'erreur classique consiste à postuler une indépendance statistique absolue, en multipliant bêtement les probabilités individuelles : P(genre) × P(revenu > seuil) × P(taille > 1,85m) × P(âge entre 25 et 30). Dans la réalité, ces grandeurs sont fortement interdépendantes.",
            "Le niveau de salaire est intimement corrélé à l'âge et à la séniorité professionnelle : un revenu élevé est rarissime à vingt-trois ans mais bien plus courant à quarante-cinq ans dans les grands centres économiques. Pour éviter de sous-estimer ou de gonfler artificiellement les résultats, j'ai conçu des matrices conditionnelles pondérant dynamiquement les coefficients selon les tranches d'âge et les zones géographiques.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Calcul de probabilité conditionnelle avec matrices stratifiées
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Rémunération conditionnelle pondérée par la cohorte d'âge
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
          heading: "Douze critères simultanés évalués instantanément côté client",
          paragraphs: [
            "Je refusais d'imposer un bouton 'Calculer' qui forcerait l'utilisateur à attendre la réponse d'un serveur distant. Le calcul devait s'exécuter à la volée pendant la manipulation des curseurs de revenus, de taille et d'âge.",
            "J'ai programmé le moteur probabiliste en TypeScript pur s'exécutant intégralement côté client avec React 19 et Tailwind CSS. Les tables ont été converties en structures de recherche binaire optimisées, garantissant des mises à jour graphiques en moins de huit millisecondes.",
          ],
          image: {
            src: filtersImg,
            caption: "Panneau interactif : ajustement fluide des paramètres démographiques avec retour visuel immédiat.",
            alt: "Filtres interactifs d'Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Le calcul côté client préserve l'infrastructure",
            text: "En déportant l'exécution du modèle mathématique sur le navigateur, le serveur ne sert que des fichiers statiques, réduisant les coûts de calcul serveur à zéro.",
          },
        },
      ],
    },
    {
      heading: "Le choc de la réalité : 0,08 % de profils correspondants",
      paragraphs: [
        "L'élément le plus percutant de l'expérience est son compteur visuel de rareté, qui compare le pourcentage obtenu à la probabilité d'être frappé par la foudre ou de décrocher une cagnotte.",
        "Lorsqu'un visiteur renseigne les critères les plus répandus sur TikTok (homme célibataire, mesurant plus d'1,85 m, rémunéré au-delà du 95e percentile et âgé de moins de 30 ans), la réponse mathématique est sans appel : à peine 0,08 % de la population correspondante, soit un individu sur 1 250 dans tout le pays.",
        "Cette mise en perspective rationnelle déconstruit instantanément les distorsions algorithmiques entretenues par les réseaux sociaux.",
      ],
      image: {
        src: resultsImg,
        caption: "Restitution des résultats : indicateur de rareté et comparaisons probabilistes parlantes.",
        alt: "Résultats statistiques d'Ideal-Calculator",
      },
    },
    {
      heading: "Diffusion virale via la génération de cartes Canvas",
      paragraphs: [
        "Pour stimuler le partage spontané, j'ai intégré un générateur d'images utilisant l'API Canvas HTML5 directement dans le navigateur. D'un simple clic, l'internaute génère une carte graphique soignée résumant ses critères et son résultat chiffré.",
        "Cette fonctionnalité a transformé un modèle statistique rigoureux en un sujet de conversation viral, cumulant des milliers de partages sans aucun budget de promotion.",
      ],
      image: {
        src: cardImg,
        caption: "Carte générée dynamiquement : visuel percutant prêt pour la publication sur les réseaux sociaux.",
        alt: "Visuel de partage généré par Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "La carte graphique devient le levier de découverte",
        text: "Permettre l'exportation instantanée d'un bilan visuel soigné transforme chaque utilisateur en ambassadeur naturel de votre application.",
      },
    },
    {
      heading: "Les enseignements d'un miroir statistique",
      paragraphs: [
        "Ideal-Calculator a démontré que le développement d'applications ne sert pas seulement à automatiser des flux de travail, mais peut aussi éclairer des débats sociétaux par la rigueur scientifique.",
        "J'en retiens trois enseignements fondamentaux :",
      ],
      bulletPoints: [
        "**La technologie apporte de la sérénité au débat collectif** : Dans un climat saturé de controverses stériles, offrir des données indiscutables en un clic désamorce les tensions par la preuve chiffrée.",
        "**Les données publiques n'ont d'intérêt que si elles sont lisibles** : Les instituts produisent des statistiques remarquables, mais enfermées dans des formats hermétiques. Le travail de l'ingénieur consiste à concevoir des passerelles d'accès ergonomiques.",
        "**Le calcul client est le secret de la scalabilité** : En encapsulant les matrices statistiques dans le bundle web, l'outil a absorbé des vagues massives d'utilisateurs sans nécessiter le moindre serveur dédié onéreux.",
      ],
      callout: {
        type: "insight",
        title: "Notes d'ingénierie",
        text: "Ideal-Calculator m'a prouvé que les réalisations les plus marquantes ne sont pas celles qui empilent des architectures absconses, mais celles qui mobilisent une rigueur technique sans faille pour répondre simplement à une préoccupation collective.",
      },
    },
  ],
};

// ─── Italian (it) ───────────────────────────────────────────────
export const itContent: PostContent = {
  category: "Data Science e Prodotto",
  title: "Il mito del partner ideale: incrociare i dati di censimento per misurare la realtà dei legami",
  summary:
    "A marzo 2026, nel culmine di accesi dibattiti sui social su aspettative irrealistiche nelle relazioni, ho sostituito le polemiche con la matematica: come ho incrociato i microdati demografici dell'IBGE per creare Ideal-Calculator.",
  coverCaption:
    "Pannello dei criteri di Ideal-Calculator: 12 filtri demografici confrontati con i microdati statistici ufficiali.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Statistica"],
  links: [
    { title: "Accedi al Calcolatore", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Codice su GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "Il clamore sui social e l'origine dell'idea",
      paragraphs: [
        "Chi frequentava i social media nei primi mesi del 2026 ricorderà un clima denso di polemiche attorno alle relazioni personali: discussioni legislative, podcast dedicati agli appuntamenti e clip virali su TikTok che promuovevano visioni completamente distaccate dalla realtà quotidiana.",
        "Ciò che attirava maggiormente la mia attenzione era l'assurdità degli elenchi di pretese reciproche condivisi online. Uomini che esigevano standard estetici irraggiungibili; donne che pretendevano compagni con stipendi altissimi, alti più di un metro e ottantacinque, single, senza figli e con meno di trent'anni.",
        "Ciascuno difendeva la propria posizione con fervore, ma nessuno consultava la reale distribuzione demografica della popolazione. È nata lì la mia intuizione da ingegnere: anziché alimentare discussioni infinite, perché non far parlare i numeri? Qual è, statisticamente, la probabilità reale che esista una persona che soddisfi tutti questi filtri simultaneamente?",
      ],
      callout: {
        type: "insight",
        title: "Le opinioni sono infinite, ma la demografia è finita",
        text: "Il web alimenta l'illusione di un'abbondanza illimitata. Confrontando tali requisiti con le statistiche ufficiali, il rigore matematico smonta ogni pretesa irrealistica in pochi istanti.",
      },
    },
    {
      heading: "Dal censimento demografico al motore di computazione",
      paragraphs: [
        "Affinché lo strumento godesse di reale autorevolezza e non sembrasse l'ennesimo quiz futile, i dati dovevano essere trasparenti e verificabili. Ho analizzato per due settimane i microdati pubblici dell'Istituto Nazionale di Statistica (IBGE).",
        "L'architettura analitica è stata costruita incrociando tre fonti ufficiali: il censimento demografico 2022 (per distribuzione di età, genere, etnia e stato civile), i dati sull'occupazione continua PNAD 2023 (per una ripartizione meticolosa dei redditi) e la rilevazione dei bilanci familiari POF (per le distribuzioni biometriche dell'altezza).",
        "La sfida ingegneristica è consistita nel comprimere gigabyte di tabelle complesse in un modello snello e reattivo, consultabile via browser in pochi millisecondi.",
      ],
      image: {
        src: sourcesImg,
        caption: "Verificabilità metodologica: tracciabilità fondata sui microdati ufficiali dei censimenti e dei redditi.",
        alt: "Fonti informative e metodologia statistica",
      },
    },
    {
      heading: "Sfide di ingegneria: quando i fattori non sono indipendenti",
      paragraphs: [
        "La vera difficoltà nella realizzazione di Ideal-Calculator non è stata la cura grafica, ma l'evitare la trappola probabilistica che rende inattendibili quasi tutti i calcolatori improvvisati online.",
      ],
      subsections: [
        {
          heading: "La trappola della probabilità ingenua e le matrici condizionali",
          paragraphs: [
            "L'errore più comune consiste nell'ipotizzare una pura indipendenza statistica, moltiplicando brutalmente le singole probabilità: P(genere) × P(reddito > soglia) × P(altezza > 1.85m) × P(età 25-30). Nella realtà, queste variabili mostrano correlazioni marcate.",
            "Il livello retributivo è strettamente vincolato all'età e al percorso professionale: uno stipendio di vertice è eccezionale a ventitré anni, ma sensibilmente più frequente a quarantacinque nelle aree metropolitane. Per evitare stime fuorvianti, ho strutturato matrici condizionali che ricalibrano i pesi marginali in funzione dell'età e della localizzazione geografica.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Calcolo probabilistico condizionato su matrici censuarie
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Reddito ponderato sulla specifica coorte d'età
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
          heading: "Dodici parametri simultanei calcolati in tempo reale nel client",
          paragraphs: [
            "Non volevo costringere l'utente a cliccare un tasto 'Calcola' attendendo risposte da un server remoto. L'elaborazione doveva avvenire istantaneamente mentre si modificano gli slider di reddito, altezza ed età.",
            "Ho sviluppato l'intero motore di calcolo in TypeScript con esecuzione al 100% nel client tramite React 19 e Tailwind CSS. Le matrici sono state compresse in array binari ottimizzati, garantendo l'aggiornamento simultaneo di probabilità e grafici in meno di 8 millisecondi.",
          ],
          image: {
            src: filtersImg,
            caption: "Configurazione interattiva: regolazione continua dei filtri con riscontro istantaneo a zero latenza.",
            alt: "Pannello dei filtri di Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "L'elaborazione client-side protegge l'infrastruttura",
            text: "Eseguendo il modello statistico direttamente nel browser, il server invia solo asset statici, azzerando i costi computazionali per query.",
          },
        },
      ],
    },
    {
      heading: "Il riscontro della realtà: 0,08% di profili idonei",
      paragraphs: [
        "L'aspetto più incisivo dell'applicazione risiede nel suo tachimetro visivo, che mette a confronto la percentuale calcolata con la probabilità di essere colpiti da un fulmine o vincere una lotteria.",
        "Quando un utente inserisce i criteri più popolari nei video virali (uomo single, alto più di 1,85m, stipendio nel top 5% e meno di trent'anni), il responso numerico è inequivocabile: appena lo 0,08% della popolazione complessiva corrisponde a questo profilo (1 persona ogni 1.250 a livello nazionale).",
        "Questo dato smaschera istantaneamente le narrazioni irreali alimentate dagli algoritmi delle piattaforme online.",
      ],
      image: {
        src: resultsImg,
        caption: "Visualizzazione dei risultati: tachimetro di rarità statistica e contestualizzazione probabilistica.",
        alt: "Risultati di corrispondenza in Ideal-Calculator",
      },
    },
    {
      heading: "Diffusione spontanea con schede generate in HTML Canvas",
      paragraphs: [
        "Per favorire la condivisione, ho integrato un generatore di schede grafiche basato su HTML5 Canvas direttamente nel client. Con un solo tocco, l'utente scarica un'immagine curata con i propri parametri e la percentuale risultante.",
        "Ciò ha trasformato una rigorosa analisi di dati in un argomento di discussione virale, generando migliaia di visualizzazioni spontanee senza investimenti pubblicitari.",
      ],
      image: {
        src: cardImg,
        caption: "Scheda generata dinamicamente: grafica accattivante predisposta per la condivisione sui social.",
        alt: "Card di condivisione di Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "La scheda condivisa è il canale di diffusione",
        text: "Offrire un riepilogo grafico scaricabile istantaneamente trasforma ogni consultazione in un veicolo naturale di scoperta dell'applicazione.",
      },
    },
    {
      heading: "Cosa ho appreso costruendo uno specchio statistico",
      paragraphs: [
        "Ideal-Calculator ha provato che lo sviluppo software non si limita ad automatizzare operazioni, ma può fare chiarezza su temi di dibattito collettivo attraverso il metodo scientifico.",
        "Le tre lezioni principali che porto con me sono:",
      ],
      bulletPoints: [
        "**La tecnologia introduce lucidità nel confronto sociale**: In un contesto dominato da contrapposizioni sterili, offrire evidenze numeriche consultabili con un clic aiuta a superare argomentazioni prive di fondamento.",
        "**I dati pubblici hanno valore solo se resi fruibili**: Gli enti statistici producono informazioni eccellenti, ma confinate in archivi inaccessibili ai più. Il ruolo dell'ingegnere è creare ponti di usabilità capaci di valorizzare quel patrimonio.",
        "**Il calcolo lato client è la via maestra per la scalabilità**: Incorporando i dati statistici direttamente nel bundle web, l'applicazione ha gestito accessi massicci senza richiedere infrastrutture server dedicate e costose.",
      ],
      callout: {
        type: "insight",
        title: "Diario ingegneristico",
        text: "Ideal-Calculator ha confermato che i progetti più significativi non sono quelli che inventano architetture cervellotiche, ma quelli che applicano il rigore per dare risposte trasparenti a interrogativi reali.",
      },
    },
  ],
};

// ─── Portuguese - Portugal (pt) ─────────────────────────────────
export const ptContent: PostContent = {
  category: "Ciência de Dados & Produto",
  title: "O mito do parceiro ideal: cruzando dados dos censos para medir a realidade dos relacionamentos",
  summary:
    "Em março de 2026, perante o debate sobre exigências desmedidas de relacionamentos nas redes sociais, decidi substituir discussões vazias por matemática: como cruzei microdados demográficos para desenvolver a Ideal-Calculator.",
  coverCaption:
    "Painel de parâmetros da Ideal-Calculator: 12 critérios demográficos cruzados com microdados públicos oficiais.",
  tags: ["React 19", "TypeScript", "Tailwind CSS", "IBGE", "Data Science", "Estatística"],
  links: [
    { title: "Aceder à Calculadora", url: "https://idealcalc.asterdev.me/", icon: "globe" },
    { title: "Código no GitHub", url: "https://github.com/zAstergun/Ideal-Calculator", icon: "github" },
  ],
  sections: [
    {
      heading: "O ruído das redes e o surgimento da ideia",
      paragraphs: [
        "Quem navegava pelas redes sociais nos primeiros meses de 2026 deparou-se com um ambiente saturado de polémicas sobre relacionamentos: debates inflamados, podcasts de encontros e vídeos curtos no TikTok a propagar narrativas alheadas da vida real.",
        "O que mais me chamava a atenção era o rol infindável de exigências mútuas que se tornavam virais diariamente. Homens a ditar padrões estéticos inalcançáveis; mulheres a exigir parceiros com rendimentos extraordinários, com mais de um metro e oitenta e cinco de altura, solteiros, sem filhos e com menos de trinta anos.",
        "Todos pareciam ter certezas absolutas, mas ninguém se dava ao trabalho de olhar para a demografia real. Foi aí que surgiu o clique de engenharia: em vez de alimentar confrontos estéreis, por que não colocar a matemática em cima da mesa? Qual é, de facto, a probabilidade estatística de alguém cumprir todos esses requisitos combinados?",
      ],
      callout: {
        type: "insight",
        title: "Opiniões são infinitas, mas a demografia é finita",
        text: "A internet cria a ilusão de opções ilimitadas. Ao confrontar essas exigências com os dados estatísticos oficiais, a realidade matemática desmonta qualquer lista ilusória em poucos instantes.",
      },
    },
    {
      heading: "Do recenseamento oficial ao motor de cálculo",
      paragraphs: [
        "Para que a ferramenta granjeasse credibilidade genuína e não fosse apenas mais um questionário recreativo, a base estatística precisava de ser exemplar e auditável. Dediquei duas semanas a analisar os repositórios públicos de microdados do instituto oficial de estatística (IBGE).",
        "A estrutura analítica agregou três fontes governamentais primárias: o Recenseamento Demográfico (distribuição por escalão etário, género, etnia e estado civil), a análise contínua de rendimentos PNAD (para estratificação rigorosa de salários por percentil) e o inquérito aos orçamentos familiares POF (com dados biométricos de altura por segmento).",
        "Com estes dados consolidados, o desafio consistiu em comprimir gigabytes de tabelas censitárias estáticas num modelo ágil e leve, capaz de ser consultado no navegador em milissegundos.",
      ],
      image: {
        src: sourcesImg,
        caption: "Auditoria e transparência metodológica: rastreabilidade alicerçada em microdados censitários e estatísticas de rendimento.",
        alt: "Fontes de dados e metodologia estatística",
      },
    },
    {
      heading: "Desafios de engenharia: quando as variáveis não são independentes",
      paragraphs: [
        "O aspeto mais complexo da construção da Ideal-Calculator não foi o desenho da interface, mas sim evitar o erro estatístico que anula a validade da quase totalidade das calculadoras amadoras da internet.",
      ],
      subsections: [
        {
          heading: "A armadilha da probabilidade ingénua e matrizes condicionais",
          paragraphs: [
            "O erro mais frequente reside em assumir independência probabilística pura: simplesmente multiplicar P(género) por P(rendimento > 15k) por P(altura > 1.85m) por P(idade 25 a 30). Na vida real, estas variáveis estão fortemente correlacionadas.",
            "O rendimento está intimamente ligado à idade e à experiência de carreira: um salário de topo é extremamente raro aos vinte e três anos, mas tem frequência superior aos quarenta e cinco nas grandes cidades. Para evitar distorções que inflacionassem ou minimizassem os valores, elaborei matrizes condicionais que afinam os pesos marginais conforme as faixas de idade e a localização selecionadas.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "probabilityEngine.ts",
            code: `// Cálculo de probabilidade condicional com matrizes estratificadas
export function calculateEligiblePopulation(filters: DemographicFilters, dataset: IBGEDataset): CalculationResult {
  const genderPool = dataset.getGenderCohort(filters.gender);
  const ageBracketWeight = genderPool.getAgeProbability(filters.minAge, filters.maxAge);
  
  // Rendimento condicional ponderado pelo escalão etário
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
          heading: "Doze filtros em tempo real avaliados no cliente",
          paragraphs: [
            "Não queria forçar o utilizador a carregar num botão 'Calcular' e aguardar por uma resposta morosa de um servidor. O cálculo tinha de fluir de imediato enquanto os seletores de rendimento, estatura e idade eram manipulados.",
            "Desenvolvi o motor estatístico em TypeScript puro a correr 100% no cliente com React 19 e Tailwind CSS. As tabelas censitárias foram convertidas em estruturas binárias de pesquisa veloz, garantindo o cálculo de probabilidade conjunta em menos de oito milissegundos.",
          ],
          image: {
            src: filtersImg,
            caption: "Configurador interativo: seletores com cálculo imediato e sem latência de pedidos de rede.",
            alt: "Painel de filtros demográficos da Ideal-Calculator",
          },
          callout: {
            type: "tech",
            title: "Processamento no cliente protege a infraestrutura",
            text: "Ao executar o modelo de inferência estatística diretamente no browser, o servidor apenas fornece ficheiros estáticos, eliminando os custos computacionais por pedido.",
          },
        },
      ],
    },
    {
      heading: "O choque da realidade: 0,08% de parceiros elegíveis",
      paragraphs: [
        "O impacto mais revelador da ferramenta centrou-se no seu velocímetro visual, que compara a percentagem apurada com a probabilidade de ser atingido por um relâmpago ou vencer um sorteio.",
        "Ao introduzir a típica lista viral (homem solteiro, com mais de 1,85m, rendimento no percentil cimeiro e com menos de trinta anos), os números são taxativos: escassos 0,08% da população correspondem ao perfil (1 em cada 1.250 pessoas em todo o país).",
        "Esta constatação desmantela de forma instantânea as expectativas delirantes disseminadas pelos algoritmos das redes sociais.",
      ],
      image: {
        src: resultsImg,
        caption: "Visualização de resultados: velocímetro de raridade estatística e métricas de probabilidade contextualizadas.",
        alt: "Resultados estatísticos da Ideal-Calculator",
      },
    },
    {
      heading: "Partilha orgânica através de cartões gerados em HTML Canvas",
      paragraphs: [
        "Para dinamizar a divulgação, integrei um gerador de cartões gráficos com recurso a Canvas nativo no navegador. Com um simples clique, o utilizador obtém uma imagem apelativa com os filtros e a percentagem apurada.",
        "Este mecanismo transformou uma análise demográfica rigorosa num catalisador de debate viral que gerou milhares de partilhas sem qualquer investimento publicitário.",
      ],
      image: {
        src: cardImg,
        caption: "Cartão dinâmico gerado em tempo de execução: imagem com proporções ideais para publicação nas redes sociais.",
        alt: "Cartão de partilha da Ideal-Calculator",
      },
      callout: {
        type: "tip",
        title: "O cartão visual é o próprio motor de alcance",
        text: "Disponibilizar uma síntese gráfica descarregável com rapidez converte cada cálculo realizado num veículo orgânico de notoriedade.",
      },
    },
    {
      heading: "O que aprendi ao edificar um espelho estatístico",
      paragraphs: [
        "A Ideal-Calculator comprovou que a engenharia de software não serve unicamente para mecanizar tarefas, mas também para esclarecer inquietações sociais através do método empírico.",
        "Retiro três conclusões capitais deste projeto:",
      ],
      bulletPoints: [
        "**A tecnologia incute serenidade ao debate social**: Num clima dominado por polarizações, disponibilizar dados fidedignos e auditáveis à distância de um clique atua como um desarmador prático de conflitos.",
        "**Os dados públicos só têm valor se forem acessíveis**: Os organismos estatísticos compilam registos de excelência, mas guardados em ficheiros complexos. O dever do programador é conceber pontes de usabilidade que descomliquem esse património.",
        "**O processamento no cliente viabiliza escalabilidade total**: Ao embutir as matrizes diretamente no pacote de frontend, o projeto suportou fluxos intensos de utilizadores sem custos com infraestruturas dedicadas dispendiosas.",
      ],
      callout: {
        type: "insight",
        title: "Caderno de engenharia",
        text: "A Ideal-Calculator confirmou que os projetos mais marcantes não são aqueles que tentam inventar arquiteturas bizarras, mas sim os que aplicam solidez e rigor para responder com clareza a uma questão real.",
      },
    },
  ],
};

