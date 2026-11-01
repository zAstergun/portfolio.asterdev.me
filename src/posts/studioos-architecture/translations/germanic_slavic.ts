import type { PostContent } from "../../types";
import dashboardImg from "../studioos-dashboard-completo.png";
import calibracaoImg from "../studioos-calibracao.png";
import rankIdeiaImg from "../studioos-rank-de-ideia.jpg";
import mentorImg from "../studioos-mentor-ai.png";
import roteiroImg from "../studioos-roteiro-teleprompter.png";
import rankingImg from "../studioos-ranking-criadores.png";

// ─── German (de) ────────────────────────────────────────────────
export const deContent: PostContent = {
  category: "Architektur & Produktentwicklung",
  title: "Die Architektur von StudioOS: Von der Rohidee zur echten KI-Pipeline für Creator",
  summary:
    "Eine schonungslose Reflexion darüber, wie ich ein Betriebssystem für YouTube-Kanäle entwickelte, warum ich mich gegen einen weiteren faulen GPT-Wrapper wehrte, der Realitätscheck mit echten Nutzern und was angewandte KI wirklich bedeutet.",
  coverCaption:
    "Die Benutzeroberfläche von StudioOS: Integrierte Pipeline aus Ideenfindung, Telemetrie und Kanalkalibrierung ohne redundante Formulare.",
  tags: ["Astro", "React 19", "Tailwind v4", "Supabase", "Cloudflare Workers", "KI", "Produkt-Engineering"],
  links: [
    { title: "StudioOS Live öffnen", url: "https://studio.asterdev.me/", icon: "globe" },
    { title: "Code auf GitHub ansehen", url: "https://github.com/zAstergun/StudioOS", icon: "github" },
  ],
  sections: [
    {
      heading: "Zwölf offene Tabs und immer dasselbe Geschwätz",
      paragraphs: [
        "Jeder, der heute digitalen Content produziert, kennt das Gefühl, wenn sich der Browser in einen Tab-Friedhof verwandelt. An einem typischen Drehtag verbrachte ich die Hälfte der Zeit damit, zwischen einer Excel-Tabelle zur Themenrecherche, einem ChatGPT-Fenster mit Flehen nach unkorporativem Tonfall, einem Texteditor fürs Skript und Notizen für die Kameraeinstellungen hin- und herzuwechseln.",
        "Am meisten frustrierte mich die chronische Amnesie dieser Werkzeuge. Jedes Mal, wenn man eine KI öffnete, musste man seitenweise Text einfügen: Wer ist die Zielgruppe? Welcher Tonfall gilt? Welcher Humor funktioniert? Schließt man den Tab versehentlich, ist das maschinelle Gedächtnis gelöscht.",
        "Der Markt schien beschlossen zu haben, das Web mit sogenannten 'KI-Wrappern' zu fluten: Generische Textfelder mit hartcodiertem Prompt, die Wunder versprachen, aber nur lauwarme, halluzinierte Texte lieferten. Niemand braucht noch ein Prompt-Feld mit Kopier-Button. Creator brauchen einen Workflow mit Kriterien, Zahlen, Tempo und persistentem Kontext.",
      ],
      image: {
        src: dashboardImg,
        caption: "Das vereinheitlichte Dashboard von StudioOS: Zwölf lose Tabs abgelöst durch eine durchgehende Pipeline, in der alle Kanalschritte vernetzt sind.",
        alt: "Haupt-Dashboard von StudioOS",
      },
      callout: {
        type: "insight",
        title: "Das Grundproblem offener Prompts",
        text: "Vom Endnutzer zu verlangen, jedes Mal als Prompt Engineer aufzutreten, ist ein Designfehler. Die Benutzeroberfläche muss den Kontext tragen, nicht der Mensch.",
      },
    },
    {
      heading: "Ein zentrales Kalibrierungslineal statt zwanzig Formulare",
      paragraphs: [
        "Die allererste Architekturentscheidung für StudioOS stand fest: Ein Nutzer darf sich niemals mehr als ein einziges Mal erklären müssen. Ich wollte ein zentrales Gehirn für den gesamten Kanal.",
      ],
      subsections: [
        {
          heading: "Zentrale Kalibrierung als lebendiges Gedächtnis",
          paragraphs: [
            "Statt unzähliger Formulare entwickelte ich das zentrale Kalibrierungslineal. Der Creator hinterlegt genau einmal Nische, Pain Points der Zielgruppe, Benchmark-Kanäle und den Tonfall (direkt, lehrreich oder humorvoll).",
            "Diese Parameter werden lokal gespeichert und nahtlos mit Supabase synchronisiert – so bleibt das Gedächtnis des Kanals immer aktiv.",
          ],
          image: {
            src: calibracaoImg,
            caption: "Das Kalibrierungslineal: Die Single Source of Truth, in der das Kanalprofil definiert und wiederverwendet wird.",
            alt: "Zentrales Kalibrierungslineal von StudioOS",
          },
        },
        {
          heading: "Zwölf Werkzeuge orchestriert mit demselben Kontext",
          paragraphs: [
            "Sobald die Kalibrierung 100 % erreicht, arbeiten alle zwölf Module der Pipeline (von Hook-Generatoren über Post-Audits bis zum Thumbnail-Briefing) automatisch mit diesem Kontext in Echtzeit.",
            "Man muss dem Werkzeug nichts mehr erklären: Es weiß bereits genau, zu wem gesprochen wird und welche Qualitätsmesslatte gilt.",
          ],
        },
      ],
    },
    {
      heading: "Vom Rohfunken zum Teleprompter",
      paragraphs: [
        "Ideen zu haben ist selten der Engpass. Das eigentliche Problem besteht darin, zu erkennen, welche Ideen 15 Stunden Arbeit für Dreh und Schnitt rechtfertigen – und welche vor dem Einschalten der Kamera verworfen gehören.",
      ],
      subsections: [
        {
          heading: "Ideen-Ranking mit mathematischem Kriterium",
          paragraphs: [
            "Das erste Modul war das Ideen-Ranking. Es jagt den Vorschlag durch eine Matrix objektiver Kriterien: Thematische Spannung, Neuigkeitswert in der Nische und Aufwandsschätzung.",
            "Das Ergebnis ist kein vages Lob, sondern ein Score von 0 bis 10 samt Hinweisen auf blinde Flecken, die die Zuschauerbindung ruinieren könnten.",
          ],
          image: {
            src: rankIdeiaImg,
            caption: "Das Ideen-Ranking in Aktion: Algorithmische Ermittlung von Retentionspotenzial und Produktionsaufwand.",
            alt: "Ideen-Ranking in StudioOS",
          },
        },
        {
          heading: "Titel und sechs taktische Hook-Variationen",
          paragraphs: [
            "Ein Video scheitert, wenn in den ersten drei Sekunden niemand klickt. Der Generator spuckt berechnete Variationen klassischer Retentionsmuster aus: Kontrast, Schock, Neugier und unmittelbare Identifikation mit dem Zuschauerproblem.",
            "Ein taktischer KI-Mentor erläutert, warum ein bestimmter Hook für das kalibrierte Profil funktioniert und wo der Neugiertrigger sitzt.",
          ],
          image: {
            src: mentorImg,
            caption: "Der KI-Mentor im Einsatz: Generierung reichweitenstarker Hooks und taktisches Feedback.",
            alt: "KI-Mentor und Hook-Generator in StudioOS",
          },
        },
        {
          heading: "Skripten in narrativen Blöcken und integrierter Teleprompter",
          paragraphs: [
            "Ein Videoskript darf kein unübersichtlicher Textblock sein. In StudioOS wird das Skript in Erzählblöcke unterteilt (Hook, Hauptteil, Spannung, Call-to-Action) – inklusive Wortzählung und Sprechzeitschätzung.",
            "Mit einem Klick öffnet sich der Teleprompter-Modus mit anpassbarer Geschwindigkeit für flüssige Aufnahmen mit direktem Blickkontakt zur Linse.",
          ],
          image: {
            src: roteiroImg,
            caption: "Strukturiertes Skript und Teleprompter: Geschätzte Sprechzeit und scrollbare Wiedergabe.",
            alt: "Skript und Teleprompter in StudioOS",
          },
        },
      ],
    },
    {
      heading: "Astro am Edge und Islands ohne Verzögerung",
      paragraphs: [
        "In technischer Hinsicht hatte ich ein klares Dogma: Die App darf sich niemals träge anfühlen. Wer die Kamera laufen hat und einen Hook prüfen will, kann keine fünf Sekunden vor einem weißen Bildschirm mit einem 4-MB-JS-Bundle warten.",
      ],
      subsections: [
        {
          heading: "Statisches Grundgerüst mit React 19 auf Abruf",
          paragraphs: [
            "Die Wahl fiel auf Astro 7 am Edge mit React 19 Hydration Islands. Navigation, Layout-Hülle und Dokumentation bestehen aus reinem, vorgerendertem statischem HTML.",
            "Nur interaktive Module mit lebendigem Zustand wie Editoren oder KI-Berechnungen hydrieren als parallele Inseln, sobald sie sichtbar werden (`client:visible` und `client:load`).",
          ],
          callout: {
            type: "tech",
            title: "Kein überflüssiges JavaScript im ersten Frame",
            text: "Der LCP bleibt selbst auf einfachen Mobilfunkverbindungen stabil unter 800ms. Das UI reagiert augenblicklich auf Interaktionen.",
          },
        },
        {
          heading: "Streaming über Cloudflare Workers mit TTFT unter 350ms",
          paragraphs: [
            "Zehn Sekunden auf ein Laderädchen zu starren, zerstört das Nutzungserlebnis. Daher leitete ich Modell-Inferenz-Aufrufe über Cloudflare Workers mit Server-Sent Events (SSE).",
            "Die Time to First Token sank auf unter 350ms: Der Creator sieht die Analyse praktisch in Echtzeit auf dem Bildschirm entstehen.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "stream-pipeline.ts",
            code: `// Streaming-Pipeline mit SSE und injiziertem Kalibrierungskontext
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
      // Kontinuierliche Token-Ausgabe mit unter 350ms TTFT
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
      heading: "Was geschah, als echte Menschen die Plattform nutzten",
      paragraphs: [
        "Software in die Hände echter Nutzer zu geben, ist stets ein Realitätsschock. Auf Localhost wirkt alles schlüssig; in den chaotischen Routinen echter Creator fallen theoretische Designannahmen binnen 15 Minuten in sich zusammen.",
        "Vor der Beta dachte ich, Nutzer würden Regler akribisch justieren und lange Dialoge mit der KI führen. Weit gefehlt: Sie wollten chirurgische Schnelligkeit. Eine Rohidee in 5 Sekunden einfügen, den Score von 0 bis 10 prüfen, Hooks überfliegen und direkt in den Teleprompter wechseln. Weniger Prosa, mehr praktischer Nutzen.",
        "Als ich das weltweite Creator-Ranking einbaute, wollte ich ursprünglich nur interne Tests beobachten. Doch die Dynamik kippte rasant: Als Creator wie Diruen, Sweet und andere täglich einstiegen, Dutzende Ideen einreichten und auf Discord Skripte debattierten, war der Wendepunkt erreicht. Mein Profil an der Spitze war kein Datenbanktest mehr – die Plattform war zu einer lebendigen Produktionsumgebung mit echten Menschen geworden.",
      ],
      image: {
        src: rankingImg,
        caption: "Das Community-Ranking: Reputations-Scores, abgeschlossene Projekte und aktive Creator.",
        alt: "Creator-Ranking in StudioOS",
      },
      callout: {
        type: "tip",
        title: "Der unschätzbare Wert echten Feedbacks",
        text: "Nutzern live bei ihren echten Problemen zuzusehen, lehrt mehr über Software-Ergonomie als drei Wochen Figma-Mockups.",
      },
    },
    {
      heading: "Was ich wirklich gelernt habe, als KI auf Menschen traf",
      paragraphs: [
        "Müsste ich die Entwicklung von StudioOS zusammenfassen, lautet die zentrale Lehre: Software-Engineering mit KI hat fast nichts mit dem bloßen Konsum von Modell-APIs zu tun. Einen HTTP-Request an OpenAI oder Anthropic zu senden, lernt man in dreißig Minuten.",
        "Die eigentliche Ingenieursleistung steckt im umgebenden Ökosystem: Zustandstrennung, Resilienz gegen Netzwerkausfälle, Orchestrierung am Edge und das Beseitigen kognitiver Reibung. Vier Pfeiler prägen heute meine Arbeit:",
      ],
      bulletPoints: [
        "**Die UI trägt den Kontext, nicht der Nutzer**: Wenn ein System verlangt, dass der Mensch den perfekten Prompt verfasst, hat die Abstraktion versagt. Gute Software kapselt Parameter, Tonalität und Regeln unsichtbar vor jedem Modellaufruf ein.",
        "**Deterministische Kriterien schlagen Text-Halluzinationen**: Generative Modelle neigen zu Geschwätzigkeit. In der Produktionspraxis haben handfeste Scores von 0 bis 10, Retentionsindizes und Zeitschätzungen unendlich mehr Wert als lange Textblöcke.",
        "**Latenzbudgets sind kritische nicht-funktionale Anforderungen**: Träge Antworten zerstören den Denkfluss. Durch Astro am Edge und Cloudflare Workers mit SSE (<350ms TTFT) wirkt das System wie eine natürliche Verlängerung des eigenen Denkens.",
        "**Defensive Architektur und unverhandelbare menschliche Kontrolle**: Die Maschine dient als Entwurfs-Assistent, niemals als letzte Instanz. Strikte Schemavalidierung mit Zod und atomare Bearbeitbarkeit jeder Komponente sicherten die Stabilität bei wachsenden Nutzerzahlen.",
      ],
      callout: {
        type: "insight",
        title: "Engineering-Tagebuch",
        text: "StudioOS von Grund auf zu entwickeln, war der Meilenstein meiner technischen Reife: Ausfallsichere Architekturen zu entwerfen, Edge-Performance zu meistern und zu verstehen, dass der beste Code nicht der komplizierteste ist, sondern derjenige, der reale Hürden mit Klarheit und Eleganz auflöst.",
      },
    },
  ],
};

// ─── Dutch (nl) ─────────────────────────────────────────────────
export const nlContent: PostContent = {
  category: "Architectuur & Productontwikkeling",
  title: "De architectuur van StudioOS: van ruw concept naar een beproefde AI-pijplijn voor creators",
  summary:
    "Een nuchtere terugblik op het bouwen van een besturingssysteem voor YouTube-kanalen, waarom ik weigerde een luie GPT-wrapper te maken, de vuurdoop met echte gebruikers en wat toegepaste AI werkelijk vraagt.",
  coverCaption:
    "De StudioOS-interface: geïntegreerde pijplijn voor ideevorming, telemetrie en kanaalkalibratie zonder herhalende formulieren.",
  tags: ["Astro", "React 19", "Tailwind v4", "Supabase", "Cloudflare Workers", "AI", "Product-engineering"],
  links: [
    { title: "StudioOS Live openen", url: "https://studio.asterdev.me/", icon: "globe" },
    { title: "Code bekijken op GitHub", url: "https://github.com/zAstergun/StudioOS", icon: "github" },
  ],
  sections: [
    {
      heading: "Twaalf open tabbladen en steeds hetzelfde praatje",
      paragraphs: [
        "Iedereen die online content maakt, kent het gevoel van een browser die verandert in een kerkhof van tabbladen. Op een gemiddelde opnamedag vloog mijn tijd voorbij tussen een spreadsheet om onderwerpen in te schatten, ChatGPT smekend om niet als een folder te klinken, een losse teksteditor voor het script en aantekeningen voor de camera.",
        "Het grootste struikelblok was de chronische vergeetachtigheid van die tools. Telkens wanneer je een AI-venster opende, moest je lappen tekst plakken om het publiek, de toon en het gewenste niveau uit te leggen. Sloot je per ongeluk een tabblad, dan begon je weer helemaal van voren af aan.",
        "De markt leek te geloven dat de oplossing lag in het uitrollen van 'AI-wrappers': eenvoudige invoervelden met een hardcoded prompt die wonderen beloofden, maar lauwe teksten vol hallucinaties leverden. Niemand zit te wachten op nog een kopieerknop. Wat een maker nodig heeft, is een soepele workflow met context, data, snelheid en persistentie.",
      ],
      image: {
        src: dashboardImg,
        caption: "Het centrale dashboard van StudioOS: twaalf losse vensters vervangen door één samenhangende pijplijn.",
        alt: "StudioOS Dashboard overzicht",
      },
      callout: {
        type: "insight",
        title: "Het fundamentele gebrek van open prompts",
        text: "Verlangen dat de eindgebruiker telkens als prompt engineer optreedt, is een ontwerpfout. De interface moet de context dragen, niet de mens.",
      },
    },
    {
      heading: "Eén centrale kalibratielat in plaats van twintig formulieren",
      paragraphs: [
        "De allereerste architectuurbeslissing stond vast: de gebruiker hoeft nooit meer dan één keer uit te leggen wie hij is. Ik wilde één gedeeld brein voor het complete kanaal.",
      ],
      subsections: [
        {
          heading: "Enkelvoudige kalibratie als levend geheugen",
          paragraphs: [
            "In plaats van verspreide invoervelden ontwierp ik de Centrale Kalibratielat. De maker definieert éénmalig de niche, de wensen van de doelgroep, referentiekanalen en de stijl (direct, didactisch of met humor).",
            "Deze instellingen worden lokaal opgeslagen en gesynchroniseerd met Supabase, waardoor het profiel altijd direct beschikbaar blijft.",
          ],
          image: {
            src: calibracaoImg,
            caption: "De Kalibratielat: de centrale bron waarin het kanaalprofiel wordt vastgelegd en hergebruikt.",
            alt: "Centrale Kalibratielat van StudioOS",
          },
        },
        {
          heading: "Twaalf tools aangestuurd vanuit dezelfde context",
          paragraphs: [
            "Zodra de kalibratie 100% bereikt, werken alle twaalf gereedschappen in de pijplijn (van hook-generators tot thumbnail-briefings) automatisch met hetzelfde geheugen.",
            "Je hoeft het systeem niets meer voor te kauwen: het weet precies voor wie je schrijft en welke kwaliteitslat geldt.",
          ],
        },
      ],
    },
    {
      heading: "Van eerste inval tot de autocue",
      paragraphs: [
        "Ideeën bedenken is zelden het knelpunt. Het echte vraagstuk is bepalen welke ideeën vijftien uur opname- en montagewerk waard zijn – en welke je moet schrappen vóór de camera aanstaat.",
      ],
      subsections: [
        {
          heading: "Idee-ranking met wiskundige criteria",
          paragraphs: [
            "Het eerste onderdeel dat ik bouwde was de Idee-ranking. Deze toetst het voorstel aan meetbare criteria: dramatische spanning, nieuwheid in de niche en geschatte werklast.",
            "De uitkomst is geen nietszeggende alinea, maar een rapportcijfer van 0 tot 10 aangevuld met blinde vlekken die de kijktijd kunnen schaden.",
          ],
          image: {
            src: rankIdeiaImg,
            caption: "De Idee-ranking in actie: algoritmische beoordeling van retentiepotentieel en productiekosten.",
            alt: "Idee-ranking in StudioOS",
          },
        },
        {
          heading: "Titels en zes tactische hook-varianten",
          paragraphs: [
            "Een video is ten dode opgeschreven als niemand in de eerste drie seconden klikt. De generator levert berekende variaties op beproefde retentieformules: contrast, verrassing, nieuwsgierigheid en herkenning.",
            "Een tactische mentor legt bovendien uit waarom een bepaalde opening werkt voor dit kanaal en waar de aandachttrekker zit.",
          ],
          image: {
            src: mentorImg,
            caption: "De AI-mentor in actie: genereren van sterke openingen en gerichte tactische feedback.",
            alt: "AI-mentor en Hook-generator in StudioOS",
          },
        },
        {
          heading: "Scriptelementen in blokken en geïntegreerde autocue",
          paragraphs: [
            "Een script moet geen ontmoedigende lap tekst zijn. In StudioOS wordt het script opgedeeld in narratieve blokken (opening, kern, spanning en oproep tot actie), inclusief woordaantallen en spreektijdschattingen.",
            "Met één klik opent de autocuemodus met aanpasbare scrollsnelheid om vloeiend in de lens te kunnen blijven kijken.",
          ],
          image: {
            src: roteiroImg,
            caption: "Gestructureerd script en autocue: spreektijdschatting en aanpasbare scrollsnelheid.",
            alt: "Script en Autocue in StudioOS",
          },
        },
      ],
    },
    {
      heading: "Astro op de Edge en eilanden die niet haperen",
      paragraphs: [
        "Op technisch vlak had ik één harde eis: de applicatie mocht nooit zwaar aanvoelen. Wanneer een maker klaarstaat om op te nemen en een zin wil checken, breekt vijf seconden wachten op een wit scherm met een bundel van 4 MB elke concentratie af.",
      ],
      subsections: [
        {
          heading: "Statische basis met React 19 op aanvraag",
          paragraphs: [
            "De keuze viel op Astro 7 op de Edge gecombineerd met React 19 hydratatie-eilanden. Navigatie, layout en documentatie bestaan uit vederlichte, vooraf gegenereerde statische HTML.",
            "Alleen interactieve modules met dynamische state worden geactiveerd als parallelle eilanden zodra ze in beeld komen (`client:visible` en `client:load`).",
          ],
          callout: {
            type: "tech",
            title: "Geen overbodige JavaScript bij eerste weergave",
            text: "De Largest Contentful Paint blijft ruim onder de 800ms, zelfs op trage mobiele verbindingen. De interface reageert direct.",
          },
        },
        {
          heading: "Streaming via Cloudflare Workers met TTFT onder 350ms",
          paragraphs: [
            "Tien seconden naar een draaiend laadicoontje staren verpest het gebruiksgemak. Daarom heb ik AI-aanroepen via Cloudflare Workers met Server-Sent Events (SSE) gerouteerd.",
            "De Time to First Token daalde naar minder dan 350ms: de analyse typt zichzelf nagenoeg ogenblikkelijk op het scherm.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "stream-pipeline.ts",
            code: `// Streaming-pijplijn met SSE en kalibratiecontext
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
      // Continue tokenstroom met minder dan 350ms TTFT
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
      heading: "Wat er gebeurde toen echte gebruikers aanschoven",
      paragraphs: [
        "Software overdragen aan echte gebruikers is altijd een ontnuchterende ervaring. Lokaal lijkt alles logisch; in de handen van drukke creators sneuvelen je aannames binnen een kwartier.",
        "Voor de bèta dacht ik dat men langdurig aan schuifjes zou prutsen en uitgebreid met de AI zou chatten. Helemaal mis: men wilde gerichte snelheid. Een ruw idee in vijf seconden invoeren, het rapportcijfer zien, de hooks scannen en meteen door naar de autocue. Minder gepraat, maximale functionaliteit.",
        "Toen ik de wereldwijde Creator-ranglijst toevoegde, wilde ik eigenlijk alleen interne tests monitoren. Maar de dynamiek veranderde razendsnel: creators zoals Diruen, Sweet en anderen logden dagelijks in, voerden tientallen ideeën in en discussieerden op Discord over scripts. Mijn plek bovenaan was geen databasetest meer; de app was getransformeerd in een levendige werkomgeving met echte mensen.",
      ],
      image: {
        src: rankingImg,
        caption: "De community-ranglijst: reputatiescores, afgeronde projecten en actieve makers.",
        alt: "Creator-ranglijst in StudioOS",
      },
      callout: {
        type: "tip",
        title: "De waarde van de feedbackloop",
        text: "Zien waar gebruikers in de praktijk tegenaan lopen, leert je meer over ergonomie dan drie weken tekenen in Figma.",
      },
    },
    {
      heading: "Wat ik leerde van AI in handen van echte mensen",
      paragraphs: [
        "Als ik de ontwikkeling van StudioOS samenvat, is de hoofdconclusie helder: software ontwikkelen met AI draait nauwelijks om het aanspreken van model-endpoints. Een HTTP-verzoek naar OpenAI of Anthropic sturen leer je in een half uur.",
        "De échte uitdaging zit in het ecosysteem eromheen: scheiding van state, netwerkresilience, orkestratie op de Edge en het wegnemen van onnodige mentale belasting. Vier pijlers vormen nu mijn basis:",
      ],
      bulletPoints: [
        "**De interface draagt de context, niet de gebruiker**: Als een systeem eist dat de mens de ideale prompt formuleert, schiet de abstractie tekort. Goede software bundelt parameters, toon en regels geruisloos vóór de aanroep.",
        "**Deterministische criteria winnen van vage teksten**: Generatieve modellen zijn vaak wollig. In de praktijk hebben cijfers van 0 tot 10, retentie-indicatoren en spreektijdmetingen oneindig veel meer nut dan lange lappen tekst.",
        "**Latentiebudget is een cruciale randvoorwaarde**: Trage antwoorden breken de denklijn. Dankzij Astro op de Edge en Cloudflare Workers met SSE (<350ms TTFT) voelt het platform aan als een verlengstuk van het eigen brein.",
        "**Defensieve architectuur en menselijke controle**: De machine fungeert als assistent voor het zware conceptwerk, nooit als alwetende scheidsrechter. Strikte validatie met Zod en de mogelijkheid elk onderdeel handmatig aan te passen hielden de app robuust bij groei.",
      ],
      callout: {
        type: "insight",
        title: "Technisch dagboek",
        text: "StudioOS vanaf de grond opbouwen markeerde mijn professionele volwassenwording: ik leerde fouttolerante systemen ontwerpen, prestaties op de Edge beheersen en inzien dat de beste code niet de meest ingewikkelde is, maar diegene die echte knelpunten oplost.",
      },
    },
  ],
};

// ─── Russian (ru) ───────────────────────────────────────────────
export const ruContent: PostContent = {
  category: "Архитектура и продуктовая разработка",
  title: "Архитектура StudioOS: от сырой идеи до ИИ-конвейера, используемого авторами",
  summary:
    "Честный разбор создания операционной системы для YouTube-каналов: почему я отказался делать очередную примитивную обертку над GPT, шок от реальных пользователей и главные уроки интеграции искусственного интеллекта в рабочий процесс.",
  coverCaption:
    "Интерфейс StudioOS: единый конвейер генерации идей, телеметрии и калибровки канала без бесконечных анкет.",
  tags: ["Astro", "React 19", "Tailwind v4", "Supabase", "Cloudflare Workers", "ИИ", "Продуктовая инженерия"],
  links: [
    { title: "Открыть StudioOS Live", url: "https://studio.asterdev.me/", icon: "globe" },
    { title: "Исходный код на GitHub", url: "https://github.com/zAstergun/StudioOS", icon: "github" },
  ],
  sections: [
    {
      heading: "Двенадцать открытых вкладок и один и тот же пустой диалог",
      paragraphs: [
        "Каждый, кто регулярно создает цифровой контент, знает чувство, когда браузер превращается в кладбище вкладок. В обычный съемочный день половина времени уходила на метания между таблицей для оценки потенциала темы, окном ChatGPT с мольбами не писать штампами, текстовым редактором для сценария и заметками для настройки камеры.",
        "Сильнее всего раздражала хроническая амнезия этих инструментов. При каждом открытии диалога с ИИ приходилось заново вставлять простыни текста с описанием аудитории, тональности канала, технического уровня и уместного юмора. Случайно закрыл вкладку — и контекст испарился.",
        "Индустрия словно сговорилась наводнить сеть так называемыми 'ИИ-обертками': стандартными текстовыми полями с жестко зашитым промптом, которые сулили чудеса, а выдавали водянистые галлюцинации. Автору не нужна еще одна кнопка копирования. Ему нужен рабочий процесс с конкретными цифрами, скоростью и постоянным контекстом.",
      ],
      image: {
        src: dashboardImg,
        caption: "Единая панель StudioOS: двенадцать разрозненных окон заменены сквозным конвейером со всеми этапами канала.",
        alt: "Главная панель StudioOS",
      },
      callout: {
        type: "insight",
        title: "Проблема открытых текстовых промптов",
        text: "Требовать от конечного пользователя быть промпт-инженером при каждом действии — фундаментальная ошибка проектирования. Контекст должен нести интерфейс, а не человек.",
      },
    },
    {
      heading: "Единая шкала калибровки вместо двадцати форм",
      paragraphs: [
        "Первое архитектурное решение StudioOS было бескомпромиссным: пользователь ни при каких обстоятельствах не должен объяснять, кто он такой, более одного раза. Проекту требовался единый мозг для всего канала.",
      ],
      subsections: [
        {
          heading: "Единая калибровка как долговременная память",
          paragraphs: [
            "Вместо бесконечных разрозненных анкет я спроектировал Центральную шкалу калибровки. Автор единожды задает тематическую нишу, боли аудитории, каналы-ориентиры и тональность (прямолинейная, обучающая или с юмором).",
            "Параметры сохраняются локально и синхронизируются с Supabase, благодаря чему цифровой профиль канала всегда готов к работе.",
          ],
          image: {
            src: calibracaoImg,
            caption: "Шкала калибровки: единый источник истины, где формируется и многократно используется ДНК канала.",
            alt: "Центральная шкала калибровки StudioOS",
          },
        },
        {
          heading: "Оркестрация двенадцати инструментов с единым контекстом",
          paragraphs: [
            "Как только калибровка достигает 100%, все двенадцать модулей конвейера (от генерации хуков до аудита публикаций и ТЗ для обложек) мгновенно подхватывают этот контекст.",
            "Инструментам больше не нужно ничего напоминать: система заранее знает аудиторию и ожидаемый уровень качества.",
          ],
        },
      ],
    },
    {
      heading: "От сырой задумки до телесуфлера",
      paragraphs: [
        "Придумать тему редко бывает проблемой для автора. Настоящая сложность — понять, какие задумки заслуживают пятнадцати часов съемок и монтажа, а какие стоит отсеять до включения камеры.",
      ],
      subsections: [
        {
          heading: "Рейтинг идей на основе математических критериев",
          paragraphs: [
            "Первым разработанным модулем стал Рейтинг идей. Он пропускает гипотезу через матрицу объективных показателей: конфликтность темы, новизна для ниши и трудоемкость реализации.",
            "На выходе получается не банальная похвала, а оценка от 0 до 10 с перечнем слепых зон, способных обрушить удержание зрителей.",
          ],
          image: {
            src: rankIdeiaImg,
            caption: "Рейтинг идей в действии: алгоритмический расчет потенциала удержания и трудозатрат на производство.",
            alt: "Рейтинг идей в StudioOS",
          },
        },
        {
          heading: "Заголовки и шесть тактических вариаций хуков",
          paragraphs: [
            "Отличный ролик обречен, если за первые три секунды никто не кликнул. Генератор предлагает выверенные вариации на основе формул вовлечения: контраст, интрига, провокация и попадание в боль зрителя.",
            "Тактический ИИ-ментор анализирует выбранный хук и объясняет, почему он сработает для целевой аудитории и где находится триггер любопытства.",
          ],
          image: {
            src: mentorImg,
            caption: "ИИ-ментор в действии: создание пробивных хуков и персонализированная тактическая обратная связь.",
            alt: "ИИ-ментор и генератор хуков в StudioOS",
          },
        },
        {
          heading: "Блочный сценарий и встроенный телесуфлер",
          paragraphs: [
            "Сценарий ролика не должен выглядеть пугающей стеной текста. В StudioOS он дробится на смысловые блоки (зачин, развитие, кульминация и призыв к действию) с подсчетом слов и хронометража.",
            "В один клик текст переходит в режим телесуфлера с регулируемой скоростью прокрутки, позволяя записывать дубли, глядя прямо в объектив.",
          ],
          image: {
            src: roteiroImg,
            caption: "Структурированный сценарий и телесуфлер: расчет хронометража речи и плавная прокрутка текста.",
            alt: "Сценарий и телесуфлер в StudioOS",
          },
        },
      ],
    },
    {
      heading: "Astro на Edge и острова, которые не зависают",
      paragraphs: [
        "В техническом плане у меня было бескомпромиссное требование: интерфейс обязан быть отзывчивым. Если видеоблогер готов к записи и хочет быстро сверить реплику, пять секунд белого экрана с JS-бандлом на 4 МБ убивают весь запал.",
      ],
      subsections: [
        {
          heading: "Статический каркас с гидратацией React 19 по требованию",
          paragraphs: [
            "Выбор пал на Astro 7 на Edge в связке с изолированными островами React 19. Навигация, сетка интерфейса и справочные разделы представляют собой чистый пререндеренный HTML.",
            "Интерактивные компоненты с живым состоянием (редакторы текста и расчетные блоки) гидратируются параллельно только в момент попадания во viewport (`client:visible` и `client:load`).",
          ],
          callout: {
            type: "tech",
            title: "Ноль лишнего JavaScript при первой отрисовке",
            text: "Показатель LCP стабильно держится ниже 800 мс даже на скромном мобильном интернете. Интерфейс откликается мгновенно.",
          },
        },
        {
          heading: "Потоковая передача через Cloudflare Workers с TTFT до 350 мс",
          paragraphs: [
            "Десять секунд наблюдения за крутящимся спиннером полностью разрушают восприятие полезности. Поэтому я направил запросы инференса через Cloudflare Workers с использованием Server-Sent Events (SSE).",
            "Время до первого токена (TTFT) снизилось до значений менее 350 мс: автор видит, как ответ печатается на экране практически мгновенно.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "stream-pipeline.ts",
            code: `// Потоковый конвейер с SSE и внедрением контекста калибровки
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
      // Непрерывная передача токенов с задержкой TTFT менее 350мс
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
      heading: "Что произошло, когда пришли настоящие авторы",
      paragraphs: [
        "Передача созданного продукта реальным людям — это всегда отрезвляющий опыт. На локальном сервере всё выглядит идеально; в руках авторов с плотным графиком теоретические предположения рушатся за четверть часа.",
        "До бета-теста я полагал, что пользователи будут скрупулезно двигать ползунки и вести долгие беседы с ИИ. Какое заблуждение! Авторам требовалась предельная лаконичность: вставить черновую мысль за 5 секунд, увидеть оценку от 0 до 10, выбрать хук и сразу перейти в телесуфлер. Меньше рассуждений, максимум дела.",
        "Когда я добавил глобальный рейтинг авторов, цель была простой — отслеживать внутренние тесты. Но динамика перевернулась: когда авторы вроде Diruen, Sweet и другие участники сообщества стали заходить каждый день, загружать десятки идей и спорить со мной в Discord о сценариях, наступил переломный момент. Мой профиль на вершине перестал быть тестом базы данных: платформа превратилась в живую среду совместной работы с реальными людьми.",
      ],
      image: {
        src: rankingImg,
        caption: "Рейтинг сообщества: очки репутации, завершенные проекты и активные авторы контента.",
        alt: "Рейтинг авторов в StudioOS",
      },
      callout: {
        type: "tip",
        title: "Бесценность быстрой обратной связи",
        text: "Наблюдение за реальными трудностями пользователей учит эргономике программного обеспечения лучше, чем три недели полировки макетов в Figma.",
      },
    },
    {
      heading: "Главные уроки интеграции ИИ в практическую разработку",
      paragraphs: [
        "Если сформулировать главный вывод из опыта создания StudioOS, он предельно прост: программная инженерия с ИИ практически не сводится к банальным запросам к языковым моделям. Отправить HTTP-запрос к OpenAI или Anthropic можно научиться за тридцать минут.",
        "Подлинный вызов заключается в экосистеме вокруг: изоляция состояния, устойчивость к сбоям сети, распределенная архитектура на Edge и постоянная борьба за снижение когнитивной нагрузки на пользователя. Мой профессиональный подход сформировали четыре принципа:",
      ],
      bulletPoints: [
        "**Контекст обязан нести интерфейс, а не пользователь**: Если система требует от человека идеального промпта, архитектурная абстракция провалилась. Зрелый продукт прозрачно упаковывает параметры и бизнес-правила до обращения к нейросети.",
        "**Детерминированные метрики ценнее словесных описаний**: Языковые модели склонны к многословию. На практике измеримые баллы от 0 до 10, индексы удержания и точные тайминги дают неизмеримо больше пользы, чем текстовые рассуждения.",
        "**Бюджет задержки — критическое требование**: Медленные ответы разрушают концентрацию. Использование Astro на Edge и Cloudflare Workers с SSE (<350мс TTFT) делает инструмент естественным продолжением мысли автора.",
        "**Защитная архитектура и приоритет контроля за человеком**: Машина должна помогать с черновиками, а не претендовать на роль оракула. Жесткая валидация схем с Zod и возможность точечной правки каждого элемента обеспечили масштабируемость системы.",
      ],
      callout: {
        type: "insight",
        title: "Инженерный дневник",
        text: "Создание StudioOS с нуля стало ключевым этапом моего профессионального взросления: я научился строить отказоустойчивые системы на Edge и осознал, что лучший код — не самый запутанный, а тот, что элегантно устраняет реальные препятствия в работе людей.",
      },
    },
  ],
};

