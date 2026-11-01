import type { PostContent } from "../../types";
import antigoImg1 from "../soulfighter-antigo-1.png";
import antigoImg2 from "../soulfighter-antigo-2.png";
import lobbyImg from "../soulfighter-lobby.webp";
import rankingImg from "../soulfighter-ranking.webp";

// ─── German (de) ────────────────────────────────────────────────
export const deContent: PostContent = {
  category: "Frontend- & UI-Engineering",
  title: "Drei Jahre nach dem ersten Commit: Was ich beim Neuaufbau von Soul Fighter gelernt habe",
  summary:
    "Am 2. November 2023 habe ich den ersten Commit eines Memory-Spiels in reinem JavaScript gepusht. Drei Jahre später entschied ich mich für einen kompletten Neubau: Wie ich von DOM-Hacks zur nativen Web Audio API, React 19 und GPU-beschleunigtem 3D gelangte.",
  coverCaption:
    "Die neue Soul Fighter Memory Game Arena: 60 FPS GPU-beschleunigte 3D-Animationen, natives taktiles Sounddesign und reaktive Kampf-UI.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Frontend-Architektur", "Game Dev"],
  links: [
    { title: "Soul Fighter spielen", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Code auf GitHub ansehen", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "Der allererste Commit am 2. November 2023",
      paragraphs: [
        "Wenn man heute das Soul Fighter-Repository auf GitHub öffnet und bis zur ersten Commit-Seite zurückscrollt, findet man den genauen Zeitstempel: 2. November 2023, versehen mit einer schlichten Nachricht: 'start'.",
        "Damals war das Projekt das klassische Beispiel für die ersten Schritte in der Webentwicklung: Ein Ordner mit losen HTML-Dateien, rudimentärem CSS und einem JavaScript-Script voller direkter querySelector-Aufrufe im DOM. Die gesamte Spiellogik lag in globalen Variablen auf dem window-Scope, notdürftig gesteuert durch Flags wie lockBoard und hasFlippedCard.",
        "Dass sich zwei Karten drehten und eine MP3-Datei abspielten, fühlte sich damals wie ein monumentaler Triumph an. Dieser Code von vor drei Jahren ist mir keineswegs peinlich; er bietet vielmehr eine glasklare Perspektive darauf, wie technisches Urteilsvermögen wächst, wenn man kontinuierlich baut.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter am 2. November 2023: Reines HTML, rustikales CSS und Logik, die fest an direkte DOM-Manipulationen gekoppelt war.",
        alt: "Originalversion von Soul Fighter im November 2023",
      },
      callout: {
        type: "insight",
        title: "Der Wert alter Code-Repositories",
        text: "Viele Entwickler löschen ihre ersten Projekte aus Sorge vor Kritik. Ich halte sie bewusst öffentlich: Sie sind der ehrlichste Beweis dafür, wie stark die eigenen Qualitätsansprüche gestiegen sind.",
      },
    },
    {
      heading: "Die Entscheidung für den kompletten Neubau statt Flickwerk",
      paragraphs: [
        "Drei Jahre später, im Oktober 2026, öffnete ich die alte Codebasis. Es wäre ein Leichtes gewesen, ein paar CSS-Farben anzupassen oder zwei Timer-Bugs zu flicken. Doch ich wählte die ehrlichste Übung: Den alten Code vollständig zu verwerfen und das Spiel von Grund auf neu zu errichten – mit dem gesamten Engineering-Wissen, das ich seither aufgebaut habe.",
        "Der alte Ergebnisbildschirm verdeutlichte die damaligen Grenzen: Starre Boxen ohne visuelle Hierarchie, keinerlei Zustandspersistenz und chronische Abhängigkeit von verschachtelten Timeouts zur Synchronisation von Animationen mit den Spielregeln.",
        "Die fundamentale Veränderung war nicht optischer Natur, sondern eine Frage des Denkens. 2023 lautete meine Frage: 'Wie bringe ich das sofort auf den Bildschirm?'. 2026 wandelte sich die Frage: 'Wie hoch ist das Latenzbudget dieser Interaktion, wie garantiere ich stabile 60 FPS und wie modelliere ich den Zustand, sodass Race Conditions mathematisch unmöglich sind?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Ergebnisbildschirm von 2023: Starres Layout, flache Optik und keine verlässliche Punktestand-Speicherung.",
        alt: "Ergebnisbildschirm der Version von 2023",
      },
    },
    {
      heading: "Von fragilen DOM-Tricks zu echtem Performance-Engineering",
      paragraphs: [
        "Vergleicht man beide Codebasen direkt miteinander, liegen die größten Unterschiede nicht in den importierten Bibliotheken, sondern darin, wie die zugrunde liegende Browser-Hardware genutzt wird.",
      ],
      subsections: [
        {
          heading: "Audio: Von trägen Audio-Tags zur nativen Web Audio API",
          paragraphs: [
            "2023 wurden Soundeffekte über new Audio('sound.mp3').play() abgespielt. Das Ergebnis war ernüchternd: Spürbare Verzögerungen von fast 200 ms zwischen Klick und Ton, Ruckler bei schnellen Klickfolgen und willkürliche Audio-Abbrüche durch Instanzlimits des Browsers.",
            "Beim Neubau 2026 setzte ich auf die native Web Audio API mit einem gemeinsamen AudioContext-Singleton. Alle Audio-Puffer werden beim initialen Laden im Arbeitsspeicher vorkomprimiert decodiert. Dreht sich eine Karte oder entsteht eine Combo, reagiert der Audio-Node in weniger als 2 ms – mit exponentiellen Dämpfungskurven und präziser Gain-Steuerung.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Taktiler Klick mit minimaler Latenz (< 2ms) ohne Abhängigkeiten
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Frequenzrampe zur Simulation eines mechanischen Schalters
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
            title: "Audio-Latenz erzeugt taktile Haptik",
            text: "Reagiert die akustische Rückmeldung in unter 2 Millisekunden, interpretiert das menschliche Gehirn die Berührung auf dem Display wie einen echten mechanischen Schalter.",
          },
        },
        {
          heading: "3D-Rendering: Verlagerung von CPU-Reflows auf dedizierte GPU-Ebenen",
          paragraphs: [
            "In der ersten Version hing das Umdrehen der Karten an simplen CSS-Transitionen, die bei jeder Interaktion Reflows und Repaints auslösten. Bewegten sich mehrere Karten gleichzeitig, kam es zu sichtbaren Rucklern.",
            "Die 2026er-Fassung nutzt konsequente Hardwarebeschleunigung: Mittels transform-style: preserve-3d, backface-visibility: hidden und isolierten Compositing-Layers übergibt der Browser die Transformationsmatrizen direkt an die GPU. 24 Karten drehen sich gleichzeitig bei konstanten 60 FPS – selbst auf Einsteiger-Smartphones.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter 2026: Moderne Arcade-Lobby, haptische Charakterauswahl, räumliches Audio und GPU-Power.",
            alt: "Moderne Lobby und Benutzeroberfläche von Soul Fighter 2026",
          },
        },
      ],
    },
    {
      heading: "Deterministischer State, Persistenz und echte Produktion",
      paragraphs: [
        "Auch im Datenmanagement offenbart sich ein gewaltiger Sprung. Wenn ein Spieler 2023 schnell auf drei Karten klickte, fror das Spiel mit dauerhaft aufgedeckten Karten ein, weil lockBoard asynchrone Klicks in Timeouts nicht abfangen konnte.",
        "In der modernen Architektur mit React 19 und striktem TypeScript modellierte ich eine deterministische State Machine: Jeder Zustandswechsel (idle, flipping, comparing, combo, victory) ist absolut immun gegen gleichzeitige Klicks und ungültige Zwischenzustände.",
        "Zusätzlich band ich Echtzeitpersistenz über Supabase im ASTER-Netzwerk an. Ein globales Leaderboard mit Gast-Authentifizierung berechnet Multiplikatoren anhand von Schwierigkeitsstufen und validiert alle Daten serverseitig gegen Client-Manipulationen.",
      ],
      image: {
        src: rankingImg,
        caption: "Globales Leaderboard mit Supabase: Echtzeitsynchronisation, Multiplikator-Berechnung und manipulationssichere Highscores.",
        alt: "Globales Ranking von Soul Fighter",
      },
    },
    {
      heading: "Was mir diese 3 Jahre über Software-Engineering beigebracht haben",
      paragraphs: [
        "Ein altes Projekt mit dem Wissen aus Jahren intensiven Studiums und praktischer Erfahrung neu zu betrachten, ist eine der lohnendsten Übungen überhaupt. Der Unterschied zwischen jenem einsamen Commit am 2. November 2023 und der heutigen Fassung beschränkt sich keineswegs auf den Wechsel von Vanilla JS zu React oder Tailwind.",
        "Der eigentliche Wandel liegt in der Klarheit und Entschlossenheit jeder einzelnen Codezeile. Ich fasse diesen Fortschritt in vier Kernüberzeugungen zusammen:",
      ],
      bulletPoints: [
        "**Vorhersehbarkeit schlägt vermeintliche Genialität**: Guter Code zeichnet sich nicht durch kryptische Einzeiler aus. Guter Code zieht klare Grenzen, ist robust typisiert und lässt sich ohne mentale Hürden auditieren.",
        "**Performance ist das Fundament, kein Nachtrag**: Bildwiederholraten und Latenzen erst am Projektende zu bedenken, führt unweigerlich zu teurem Refactoring. Eine UI-Architektur muss von Beginn an mit festen Latenzbudgets kalkulieren: Audio unter 2ms, First Paint unter 800ms und GPU-Animationen.",
        "**Barrierefreiheit ist Pflicht**: Ein modernes Web-Spiel muss prefers-reduced-motion respektieren, vollständige Tastatursteuerung unterstützen und Audio-Einstellungen dauerhaft speichern.",
        "**Respekt vor der Aufmerksamkeit der Nutzer**: Eine Software zu entwickeln, die ohne Verzögerung und Ruckeln reagiert, ist keine optische Spielerei – es ist gelebter Respekt vor der Zeit des Menschen vor dem Bildschirm.",
      ],
      callout: {
        type: "insight",
        title: "Engineering-Logbuch",
        text: "Soul Fighter neu zu erbauen war der greifbarste Beweis für mein technisches Wachstum: Zu sehen, wie Probleme, an denen ich einst verzweifelte, heute mit solider Architektur, Eleganz und Verlässlichkeit gelöst werden.",
      },
    },
  ],
};

// ─── Dutch (nl) ─────────────────────────────────────────────────
export const nlContent: PostContent = {
  category: "Frontend- & UI-Engineering",
  title: "Drie jaar na de eerste commit: wat ik leerde door Soul Fighter vanaf nul te herbouwen",
  summary:
    "Op 2 november 2023 deed ik de allereerste commit van een geheugenspel in puur JavaScript. Drie jaar later herbouwde ik het hele project: van fragiele DOM-hacks tot native Web Audio API, React 19, GPU 3D en wat dit onthult over technische volwassenheid.",
  coverCaption:
    "De nieuwe arena van Soul Fighter Memory Game: 60 FPS GPU-versnelde 3D-animaties, native tactiel geluid en responsieve gevechts-UI.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Frontend-architectuur", "Game Dev"],
  links: [
    { title: "Soul Fighter spelen", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Code bekijken op GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "De allereerste commit op 2 november 2023",
      paragraphs: [
        "Als je vandaag naar de Soul Fighter-repository op GitHub gaat en terugbladert naar de eerste pagina met commits, vind je het exacte tijdstip: 2 november 2023, gemarkeerd met het bescheiden bericht 'start'.",
        "Destijds was het project het schoolvoorbeeld van een beginner in webontwikkeling: een map met losse HTML-bestanden, rudimentaire CSS en een JavaScript-bestand vol directe querySelector-aanroepen in de DOM. De complete spellogica leefde in globale variabelen binnen de window-scope, bijeengehouden door vlaggen als lockBoard en hasFlippedCard.",
        "Twee kaarten laten omdraaien en een geluidsbestand afspelen voelde destijds als een overwinning. Naar die code terugkijken wekt geen schaamte op; het geeft juist een scherp inzicht in hoe technische normen groeien wanneer je met toewijding blijft bouwen.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter op 2 november 2023: pure HTML, eenvoudige opmaak en logica verweven met directe DOM-manipulaties.",
        alt: "Oorspronkelijke versie van Soul Fighter in november 2023",
      },
      callout: {
        type: "insight",
        title: "De waarde van het bewaren van vroege code",
        text: "Veel ontwikkelaars wissen hun oude projecten uit vrees voor andermans oordeel. Ik houd ze juist openbaar: ze vormen de eerlijkste telemetrie van hoe hoog je lat inmiddels ligt.",
      },
    },
    {
      heading: "De keuze om vanaf nul te beginnen in plaats van op te lappen",
      paragraphs: [
        "Drie jaar later, in oktober 2026, heropende ik het project. Ik had een paar CSS-kleuren kunnen bijwerken of twee timers kunnen corrigeren. In plaats daarvan koos ik voor de meest oprechte oefening voor een ontwikkelaar: de oude code integraal weggooien en het spel van de grond af opnieuw opbouwen.",
        "Het oude uitslagenscherm legde de beperkingen van toen bloot: starre vakken zonder visuele hiërarchie, nergens persistentie van scores en een wankele afhankelijkheid van geneste timeouts.",
        "De kernverschuiving was niet visueel maar mentaal. In 2023 vroeg ik me af: 'hoe krijg ik dit nu meteen op het scherm?'. In 2026 werd de vraag: 'wat is het latentiebudget van deze interactie, hoe garandeer ik stabiele 60 FPS en hoe modelleer ik de status zodat race conditions onmogelijk zijn?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Uitslagenscherm uit 2023: starre indeling, plat uiterlijk en geen betrouwbare scoreopslag.",
        alt: "Overwinningsscherm van Soul Fighter 2023",
      },
    },
    {
      heading: "Van fragiele DOM-hacks naar doelgerichte prestatie-engineering",
      paragraphs: [
        "Vergelijk je beide codebases, dan schuilt het grootste verschil niet in de geïmporteerde bibliotheken, maar in de manier waarop de hardware van de browser wordt aangesproken.",
      ],
      subsections: [
        {
          heading: "Audio: van trage audio-tags naar native Web Audio API",
          paragraphs: [
            "In 2023 speelden geluidseffecten af via new Audio('geluid.mp3').play(). Dat leidde tot merkbare vertragingen van bijna 200 ms tussen klik en klank, haperingen bij snelle acties en plotseling wegvallend geluid door browserbeperkingen.",
            "Bij de herbouw in 2026 koos ik voor de Web Audio API met een gedeelde AudioContext singleton. Alle geluidsbuffers worden bij het opstarten vooraf in het geheugen gedecodeerd. Bij een kaartomdraaiing of combo reageert het knooppunt in minder dan 2 ms met precieze exponentiële dempingscurven.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Snelle voelbare feedback (< 2ms) zonder externe bibliotheken
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Frequentiecurve simuleert een mechanische schakelaar
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
            title: "Audiolatentie creëert tastbaar gevoel",
            text: "Wanneer geluidsfeedback binnen 2 milliseconden klinkt, ervaren de menselijke hersenen de aanraking van het scherm als een tastbare mechanische schakelaar.",
          },
        },
        {
          heading: "3D-rendering: ontlasten van CPU-reflows naar dedicated GPU-lagen",
          paragraphs: [
            "In de oorspronkelijke versie draaiden kaarten via eenvoudige CSS-transities die bij elke interactie reflows en repaints afdwongen, met zichtbare haperingen tot gevolg.",
            "De 2026-uitvoering benut hardwareversnelling: met transform-style: preserve-3d, backface-visibility: hidden en afzonderlijke compositing layers draagt de browser transformaties rechtstreeks over aan de GPU. Vierentwintig kaarten draaien tegelijkertijd soepel op 60 FPS, zelfs op budgettoestellen.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter in 2026: moderne arcadelobby, soepele personagekeuze, interactieve audio en GPU-versnelling.",
            alt: "Lobby en interface van Soul Fighter 2026",
          },
        },
      ],
    },
    {
      heading: "Deterministische status, persistentie en productiekwaliteit",
      paragraphs: [
        "Ook in databeheer is het verschil aanzienlijk. In 2023 kon snel klikken op drie kaarten het spel volledig blokkeren doordat lockBoard faalde in asynchrone situaties.",
        "Met React 19 en strikte TypeScript ontwierp ik een deterministische statusmachine: elke toestandsovergang (idle, flipping, comparing, combo, victory) is beschermd tegen gelijktijdige invoer en ongeldige tussenstatussen.",
        "Bovendien koppelde ik realtime-persistentie via Supabase aan op het ASTER-netwerk. Een wereldwijd leaderboard met gastsessies berekent moeilijkheidsvermenigvuldigers en valideert gegevens aan de serverkant om manipulatie uit te sluiten.",
      ],
      image: {
        src: rankingImg,
        caption: "Wereldwijd leaderboard op Supabase: live synchronisatie, dynamische multipliers en beveiligde highscores.",
        alt: "Wereldwijde ranglijst van Soul Fighter",
      },
    },
    {
      heading: "Wat deze 3 jaar mij hebben geleerd over software-engineering",
      paragraphs: [
        "Het herzien van een vroeg project met jaren aan theoretische en praktische bagage is een van de meest verrijkende ervaringen voor een ontwikkelaar. De kloof tussen die commit van 2 november 2023 en vandaag omvat veel meer dan enkel de overstap naar React of Tailwind.",
        "De werkelijke winst ligt in het overzicht en de doordachtheid achter elke regel code. Ik vat deze reis samen in vier kernovertuigingen:",
      ],
      bulletPoints: [
        "**Voorspelbaarheid wint van nodeloze complexiteit**: Kwaliteitscode probeert niet indruk te maken met ondoorgrondelijke one-liners. Goede code stelt duidelijke grenzen, kent robuuste typen en laat zich zonder mentale wrijving doorgronden.",
        "**Prestaties zijn een fundament, geen nabewerking**: Pas aan het eind nadenken over framerates leidt gegarandeerd tot tijdrovende herschrijvingen. Architectuur vereist vanaf dag één heldere doelen: audio onder 2ms, eerste weergave onder 800ms en GPU-animaties.",
        "**Toegankelijkheid is vanzelfsprekend**: Een modern webspel dient rekening te houden met prefers-reduced-motion, volledige toetsenbordnavigatie en bewaarde audio-instellingen.",
        "**Eerbied voor de gebruiker**: Een programma bouwen dat onmiddellijk en zonder schokken reageert is geen visuele ijdelheid; het toont respect voor de tijd en aandacht van de persoon aan de andere kant.",
      ],
      callout: {
        type: "insight",
        title: "Technisch logboek",
        text: "Soul Fighter herbouwen was het meest tastbare bewijs van mijn technische groei: zien hoe vraagstukken die mij ooit tegenhielden nu worden opgelost met solide en elegante architectuur.",
      },
    },
  ],
};

// ─── Russian (ru) ───────────────────────────────────────────────
export const ruContent: PostContent = {
  category: "Инженерия фронтенда и UI",
  title: "Три года спустя: чему меня научила переработка Soul Fighter с чистого листа",
  summary:
    "2 ноября 2023 года я сделал первый коммит карточной игры на чистом JavaScript. Три года спустя я полностью переписал проект: путь от наивных манипуляций с DOM к нативному Web Audio API, React 19, аппаратному 3D на GPU и технической зрелости.",
  coverCaption:
    "Новая арена Soul Fighter Memory Game: 3D-анимации 60 FPS на GPU, нативный тактильный саунд-дизайн и отзывчивый боевой интерфейс.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Архитектура фронтенда", "Game Dev"],
  links: [
    { title: "Играть в Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Код на GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "Первый коммит от 2 ноября 2023 года",
      paragraphs: [
        "Если зайти сегодня в репозиторий Soul Fighter на GitHub и промотать историю до самой первой страницы, откроется точная дата: 2 ноября 2023 года со скромным сообщением 'start'.",
        "В то время проект был хрестоматийным примером первых шагов в веб-разработке: папка с разрозненными файлами HTML, примитивным CSS и JavaScript-скриптом с ручными вызовами querySelector. Вся игровая логика размещалась в глобальных переменных объекта window, удерживаемых импровизированными флагами вроде lockBoard и hasFlippedCard.",
        "Переворот двух карт с воспроизведением MP3-файла казался тогда настоящим прорывом. Взгляд на тот код три года спустя не вызывает смущения; напротив, он дает четкую перспективу того, как растет инженерное мышление при постоянной созидательной практике.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter 2 ноября 2023 года: чистый HTML, примитивные стили и логика, привязанная к прямому управлению DOM.",
        alt: "Оригинальная версия Soul Fighter в ноябре 2023 года",
      },
      callout: {
        type: "insight",
        title: "Ценность сохранения ранних репозиториев",
        text: "Многие разработчики удаляют старый код из страха критики. Я предпочитаю держать его открытым: это самое честное доказательство того, насколько выросла планка вашего инженерного мастерства.",
      },
    },
    {
      heading: "Решение переписать всё с нуля вместо латания дыр",
      paragraphs: [
        "Три года спустя, в октябре 2026 года, я вернулся к старому репозиторию. Можно было просто обновить цветовую палитру в CSS или исправить пару ошибок в таймере. Но я предпочел самое честное испытание для программиста: выбросить старый код и построить всю игру заново на фундаменте накопленных знаний.",
        "Прежний экран результатов наглядно демонстрировал ограничения тех лет: монолитные блоки без визуальной иерархии, отсутствие сохранения рекордов и чрезмерная зависимость от вложенных таймаутов для синхронизации анимаций.",
        "Главный сдвиг произошел в образе мышления. В 2023 году меня волновал вопрос: 'как быстро отобразить это на экране?'. В 2026 году формулировка изменилась: 'каков бюджет задержки взаимодействия, как гарантировать стабильные 60 кадров в секунду и как смоделировать состояние, чтобы состояние гонки было математически исключено?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Экран результатов 2023 года: жесткая верстка, плоская графика и отсутствие надежного сохранения счета.",
        alt: "Экран победы в версии Soul Fighter 2023 года",
      },
    },
    {
      heading: "От хаков в DOM к настоящей инженерии производительности",
      paragraphs: [
        "При сравнении обеих кодовых баз ключевые различия заключаются не в подключенных библиотеках, а в эффективном взаимодействии с аппаратными ресурсами браузера.",
      ],
      subsections: [
        {
          heading: "Звук: от тормозящих тегов audio к нативному Web Audio API",
          paragraphs: [
            "В 2023 году звуки запускались через new Audio('sound.mp3').play(). На практике это приводило к ощутимой задержке почти в 200 мс между кликом и сигналом, зависаниям при быстром нажатии и обрывам дорожек из-за системных ограничений браузера.",
            "В архитектуре 2026 года я задействовал нативный Web Audio API с общим синглтоном AudioContext. Все аудио-буферы декодируются в оперативной памяти во время старта. При перевороте карты или серии комбо узел откликается быстрее 2 миллисекунд с математически выверенными кривыми затухания.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Тактильный отклик с ультранизкой задержкой (< 2мс)
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Частотная модуляция механического переключателя
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
            title: "Задержка звука формирует тактильное ощущение",
            text: "Когда звуковой ответ наступает быстрее чем за 2 миллисекунды, человеческий мозг воспринимает нажатие на стекло экрана как клик физического механического переключателя.",
          },
        },
        {
          heading: "3D-рендеринг: передача нагрузки с CPU на графический чип GPU",
          paragraphs: [
            "В первой версии переворот карт опирался на обычные CSS-переходы, вызывавшие пересчет разметки (reflow) и перерисовку (repaint) при каждом действии, из-за чего игра теряла плавность.",
            "Версия 2026 года построена на аппаратном ускорении: с помощью transform-style: preserve-3d, backface-visibility: hidden и изолированных слоев композитинга браузер делегирует матричные трансформации напрямую видеочипу. 24 карты вращаются синхронно на фиксированных 60 FPS даже на бюджетных смартфонах.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter в 2026 году: современное лобби, тактильный выбор героев, отзывчивый звук и ускорение на GPU.",
            alt: "Интерфейс лобби Soul Fighter 2026 года",
          },
        },
      ],
    },
    {
      heading: "Детерминированное состояние, персистентность и боевая надежность",
      paragraphs: [
        "Управление состоянием иллюстрирует фундаментальный технологический скачок. В 2023 году быстрый клик по трем картам намертво зависал игру, так как lockBoard не мог справиться с асинхронными событиями внутри setTimeout.",
        "На React 19 и строгом TypeScript я спроектировал детерминированный конечный автомат: каждая смена фазы (idle, flipping, comparing, combo, victory) защищена от параллельных кликов и некорректных промежуточных состояний.",
        "Кроме того, я настроил синхронизацию в реальном времени с Supabase в экосистеме ASTER. Глобальная таблица лидеров с гостевыми сессиями вычисляет множители сложности и валидирует данные на сервере, исключая читерство на клиенте.",
      ],
      image: {
        src: rankingImg,
        caption: "Мировая таблица лидеров на Supabase: живая синхронизация, расчет бонусов и валидация результатов.",
        alt: "Глобальный рейтинг Soul Fighter",
      },
    },
    {
      heading: "Чему эти 3 года научили меня в проектировании программ",
      paragraphs: [
        "Переосмысление раннего кода с багажом накопленных знаний — одно из самых ценных упражнений для разработчика. Дистанция между коммитом от 2 ноября 2023 года и сегодняшней архитектурой измеряется не сменой инструментов.",
        "Главное изменение состоит в ясности и осознанности каждого технического решения. Я сформулировал эти выводы в четырех принципах профессиональной работы:",
      ],
      bulletPoints: [
        "**Предсказуемость важнее вычурности**: Отличный код не пытается казаться гениальным за счет нечитаемых однострочников. Качественный код устанавливает понятные границы, строго типизирован и проверяется без лишней когнитивной нагрузки.",
        "**Производительность — это фундамент, а не косметический ремонт**: Откладывать заботу о кадровой частоте на потом — верный путь к дорогостоящему переписыванию. Архитектура должна закладывать строгие лимиты с первого дня: аудио до 2мс, отрисовка до 800мс и графика на GPU.",
        "**Доступность интерфейса обязательна**: Современное приложение обязано учитывать prefers-reduced-motion, обеспечивать полную навигацию с клавиатуры и сохранять настройки громкости.",
        "**Уважение к вниманию пользователя**: Создавать продукты с мгновенным тактильным откликом — не прихоть; это проявление уважения ко времени и вниманию человека по ту сторону экрана.",
      ],
      callout: {
        type: "insight",
        title: "Инженерный дневник",
        text: "Переработка Soul Fighter стала наглядным подтверждением профессионального взросления: задачи, заводившие меня в тупик в начале пути, сегодня находят надежные, элегантные и масштабируемые решения.",
      },
    },
  ],
};

