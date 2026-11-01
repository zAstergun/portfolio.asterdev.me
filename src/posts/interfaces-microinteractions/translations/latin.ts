import type { PostContent } from "../../types";
import antigoImg1 from "../soulfighter-antigo-1.png";
import antigoImg2 from "../soulfighter-antigo-2.png";
import lobbyImg from "../soulfighter-lobby.webp";
import rankingImg from "../soulfighter-ranking.webp";

// ─── Spanish (es) ───────────────────────────────────────────────
export const esContent: PostContent = {
  category: "Ingeniería Frontend y UI",
  title: "Tres años después del primer commit: lo que aprendí reconstruyendo Soul Fighter desde cero",
  summary:
    "El 2 de noviembre de 2023 hice el commit inicial de un juego de memoria en JavaScript puro. Tres años después, decidí reconstruir el proyecto desde cero: cómo pasé de parches en el DOM a Web Audio API nativa, React 19, GPU 3D y lo que este viaje enseña sobre madurez técnica.",
  coverCaption:
    "La nueva arena de Soul Fighter Memory Game: animaciones 3D a 60 FPS en la GPU, diseño sonoro táctil nativo e interfaz de combate reactiva.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Arquitectura Frontend", "Game Dev"],
  links: [
    { title: "Jugar a Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Ver Código en GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "El primer commit el 2 de noviembre de 2023",
      paragraphs: [
        "Si entras hoy al repositorio de Soul Fighter en GitHub y navegas por el historial hasta la primera página de commits, encontrarás el registro exacto: 2 de noviembre de 2023, con un mensaje breve que decía simplemente 'start'.",
        "En aquel momento, el proyecto era el típico ejemplo de quien da sus primeros pasos en el desarrollo web: una carpeta con archivos sueltos de HTML, CSS elemental y un script en JavaScript lleno de selectores directos al DOM. Toda la lógica del juego vivía en variables globales en el scope de la ventana, controladas por flags como lockBoard y hasFlippedCard.",
        "Lograr que dos cartas rotaran y reprodujeran un archivo de audio parecía un triunfo épico. Mirar ese código tres años después no me produce ninguna vergüenza; al contrario, ofrece una perspectiva nítida de cómo evoluciona el criterio técnico cuando construyes proyectos con constancia.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter el 2 de noviembre de 2023: HTML puro, estilos rústicos y lógica atada a manipulaciones directas del DOM.",
        alt: "Versión original de Soul Fighter en noviembre de 2023",
      },
      callout: {
        type: "insight",
        title: "El valor de conservar tu código inicial",
        text: "Muchos desarrolladores borran sus primeros repositorios por temor a ser juzgados. Yo prefiero mantenerlos públicos: son la telemetría más honesta de cómo se ha elevado tu estándar de calidad.",
      },
    },
    {
      heading: "La decisión de reconstruir desde cero en lugar de emparchar",
      paragraphs: [
        "Tres años después, en octubre de 2026, abrí el código antiguo. Podría haberme limitado a cambiar un par de colores en CSS o corregir un par de errores en el temporizador. Pero opté por el ejercicio más honesto para un programador: descartar todo el código anterior y rehacer el juego completo desde los cimientos, aplicando la madurez técnica acumulada.",
        "La antigua pantalla de resultados evidenciaba las limitaciones de esa época: paneles estáticos sin jerarquía visual, nula persistencia de puntuaciones y una dependencia frágil de temporizadores anidados para intentar sincronizar animaciones con las reglas del juego.",
        "El cambio principal no fue estético; fue de mentalidad. En 2023, mi pregunta era: '¿cómo hago que esto aparezca en pantalla ahora mismo?'. En 2026, la pregunta pasó a ser: '¿cuál es el presupuesto de latencia de esta interacción, cómo garantizo 60 FPS estables y cómo modelo el estado para que las condiciones de carrera sean matemáticamente imposibles?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Pantalla de resultados de 2023: diseño rígido, visuales planos y sin persistencia de puntajes.",
        alt: "Pantalla de victoria de la versión 2023 de Soul Fighter",
      },
    },
    {
      heading: "De trucos frágiles en el DOM a ingeniería de rendimiento real",
      paragraphs: [
        "Al comparar ambas bases de código, las mayores diferencias no radican en las librerías importadas, sino en cómo se aprovecha el hardware del navegador.",
      ],
      subsections: [
        {
          heading: "El audio: de etiquetas lentas a Web Audio API nativa",
          paragraphs: [
            "En 2023, los efectos de sonido se ejecutaban con new Audio('sonido.mp3').play(). El resultado era desastroso: un retraso perceptible de casi doscientos milisegundos entre el clic y el sonido, tartamudeos al hacer clics rápidos y cortes de audio por limitaciones de concurrencia del navegador.",
            "En la reconstrucción de 2026, implementé la Web Audio API nativa mediante un AudioContext singleton compartido. Todos los búferes de audio se precargan y decodifican en memoria al inicio. Al girar una carta o lograr un combo, el nodo se dispara en menos de dos milisegundos, con control milimétrico de ganancia y curvas de atenuación exponencial.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Disparo táctil de baja latencia (< 2ms) sin dependencias externas
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Rampa de frecuencia simulando clic mecánico
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
            title: "La latencia de audio es una sensación táctil",
            text: "Cuando la respuesta sonora ocurre en menos de 2 milisegundos, el cerebro humano interpreta el toque en la pantalla como un interruptor físico mecánico.",
          },
        },
        {
          heading: "Renderizado 3D: delegando el reflow de la CPU a capas dedicadas en la GPU",
          paragraphs: [
            "En la versión original de 2023, rotar las cartas dependía de transiciones CSS básicas que forzaban recálculos de diseño (reflow) y repintado (repaint) en cada interacción, provocando caídas de frames visibles cuando varias cartas giraban a la vez.",
            "La versión moderna recurre a aceleración por hardware: con transform-style: preserve-3d, backface-visibility: hidden y capas de composición aisladas, el navegador delega las transformaciones espaciales a la GPU. Veinticuatro cartas rotan en simultáneo manteniendo 60 FPS clavados, incluso en dispositivos móviles modestos.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter en 2026: lobby arcade moderno, selección táctil de luchadores, sonido reactivo y aceleración por GPU.",
            alt: "Interfaz y lobby moderno de Soul Fighter 2026",
          },
        },
      ],
    },
    {
      heading: "Estado determinista, persistencia y producción real",
      paragraphs: [
        "La gestión de estado marca otro salto cuantitativo. En 2023, hacer clic en tres cartas rápidamente bloqueaba el juego con cartas invertidas para siempre porque lockBoard fallaba ante eventos asíncronos y timeouts anidados.",
        "En la versión actual, estructuré la lógica en React 19 y TypeScript estricto con una máquina de estados determinista: cada transición (idle, flipping, comparing, combo, victory) está blindada contra clics concurrentes y estados intermedios no válidos.",
        "Además, integré persistencia en tiempo real con Supabase en la Red ASTER. Implementé un leaderboard global con sesiones de invitados autenticadas, cálculo de multiplicadores por nivel de dificultad y validación estricta en backend para impedir manipulaciones en el cliente.",
      ],
      image: {
        src: rankingImg,
        caption: "Leaderboard global con Supabase: persistencia en tiempo real, cálculo de multiplicadores e integridad criptográfica de puntuaciones.",
        alt: "Ranking global de Soul Fighter",
      },
    },
    {
      heading: "Lo que estos 3 años me enseñaron sobre ingeniería de software",
      paragraphs: [
        "Revisitar un proyecto antiguo con años de práctica y estudio acumulados es una de las experiencias más gratificantes para un ingeniero de software. La brecha entre aquel solitario commit del 2 de noviembre de 2023 y la versión moderna va mucho más allá de reemplazar vanilla JS por React o Tailwind.",
        "La transformación reside en la claridad con la que abordo cada línea de código. Resumo esta evolución en cuatro convicciones fundamentales que rigen mi trabajo profesional:",
      ],
      bulletPoints: [
        "**La predictibilidad supera la astucia**: El código de calidad no es el que busca ser ingenioso en una línea críptica. Buen código es el que define fronteras claras, tiene tipado riguroso y permite que cualquier desarrollador audite la lógica sin sobrecarga mental.",
        "**El rendimiento no es un accesorio posterior, es el cimiento**: Posponer las métricas de frames y latencia para el final del ciclo genera reescrituras costosas. La arquitectura debe nacer con presupuestos claros: audio bajo 2ms, primer frame en menos de 800ms y animaciones en la GPU.",
        "**La accesibilidad es innegociable**: Un juego arcade moderno debe respetar preferencias del sistema como prefers-reduced-motion, soporte completo para teclado y persistencia de configuración sonora.",
        "**Respeto por la atención del usuario**: Crear interfaces táctiles, instantáneas y fluidas no es vanidad estética; es demostrar respeto por el tiempo y la experiencia de quien está frente a la pantalla.",
      ],
      callout: {
        type: "insight",
        title: "Bitácora de ingeniería",
        text: "Reconstruir Soul Fighter fue la prueba más palpable de mi madurez técnica: comprobar cómo los desafíos que antes me bloqueaban hoy se resuelven con arquitectura sólida, elegancia y robustez.",
      },
    },
  ],
};

// ─── French (fr) ────────────────────────────────────────────────
export const frContent: PostContent = {
  category: "Ingénierie Frontend & UI",
  title: "Trois ans après le premier commit : ce que j'ai appris en reconstruisant Soul Fighter de zéro",
  summary:
    "Le 2 novembre 2023, j'effectuais le premier commit d'un jeu de mémoire en JavaScript pur. Trois ans plus tard, j'ai reconstruit le projet de fond en comble : comment je suis passé de bidouilles DOM à la Web Audio API native, React 19, GPU 3D et ce que cela révèle sur la maturité technique.",
  coverCaption:
    "La nouvelle arène de Soul Fighter Memory Game : animations 3D à 60 FPS sur GPU, sound design tactile natif et interface de combat réactive.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Architecture Frontend", "Game Dev"],
  links: [
    { title: "Jouer à Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Voir le code sur GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "Le premier commit le 2 novembre 2023",
      paragraphs: [
        "Si vous ouvrez aujourd'hui le dépôt de Soul Fighter sur GitHub et remontez jusqu'à la première page d'historique, vous tomberez sur la date exacte : 2 novembre 2023, avec un message modeste disant simplement 'start'.",
        "À l'époque, le projet était l'archétype des débuts en développement web : un dossier avec des fichiers HTML disparates, du CSS basique et un script JavaScript criblé de requêtes manuelles dans le DOM. La logique entière reposait sur des variables globales dans la portée window, maintenues par des drapeaux comme lockBoard et hasFlippedCard.",
        "Faire pivoter deux cartes et déclencher un son MP3 ressemblait à un exploit majeur. Regarder ce code trois ans plus tard ne m'inspire aucune honte ; au contraire, cela offre un repère limpide sur l'élévation des exigences quand on construit avec rigueur.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter le 2 novembre 2023 : HTML pur, styles rustiques et logique tributaire de manipulations directes du DOM.",
        alt: "Version originale de Soul Fighter en novembre 2023",
      },
      callout: {
        type: "insight",
        title: "La valeur de conserver son code d'apprentissage",
        text: "Beaucoup de développeurs suppriment leurs anciens projets par crainte du regard d'autrui. Je préfère les laisser publics : c'est la télémétrie la plus authentique de la progression de vos standards d'ingénierie.",
      },
    },
    {
      heading: "Reconstruire de zéro plutôt que colmater les brèches",
      paragraphs: [
        "Trois ans plus tard, en octobre 2026, j'ai rouvert le projet. J'aurais pu simplement rafraîchir la palette de couleurs en CSS ou réparer deux bugs de chronomètre. J'ai préféré l'exercice le plus sincère : jeter l'ancien code et réécrire le jeu intégralement, fort de l'expérience d'ingénierie accumulée.",
        "L'ancien écran de victoire témoignait des limites de l'époque : boîtes rigides sans hiérarchie visuelle, persistance inexistante et dépendance chronique à des timeouts imbriqués pour tenter d'harmoniser les animations avec les règles du jeu.",
        "Le vrai basculement n'était pas graphique mais méthodologique. En 2023, mon obsession était : 'comment faire apparaître cela tout de suite ?'. En 2026, la question est devenue : 'quel est le budget de latence de cette interaction, comment garantir 60 FPS constants et comment concevoir l'état pour rendre toute race condition impossible ?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Écran de résultats de 2023 : rendu plat, structure rigide et absence de sauvegarde pérenne.",
        alt: "Écran de victoire de Soul Fighter en 2023",
      },
    },
    {
      heading: "Des bricolages DOM à l'ingénierie de haute performance",
      paragraphs: [
        "En comparant les deux bases de code, le contraste marquant ne vient pas des bibliothèques externes, mais de la manière d'exploiter le matériel de l'hôte.",
      ],
      subsections: [
        {
          heading: "L'audio : des balises sonores lentes à la Web Audio API native",
          paragraphs: [
            "En 2023, le son était joué via new Audio('audio.mp3').play(). Les conséquences étaient fâcheuses : un délai perceptible de près de 200 ms entre le clic et l'onde sonore, des saccades lors de clics rapides et des coupures de son imposées par le navigateur.",
            "Lors de la refonte en 2026, j'ai adopté la Web Audio API avec un AudioContext singleton partagé. Tous les tampons audio sont pré-décodés en mémoire vive au chargement. Lors d'un retournement de carte ou d'un combo, le nœud audio réagit en moins de 2 ms avec des courbes d'atténuation exponentielle précises.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Déclenchement tactile à très faible latence (< 2ms) sans dépendance
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Rampe fréquentielle simulant un clic mécanique
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
            title: "La latence sonore forge le ressenti physique",
            text: "Lorsque la rétroaction acoustique survient en moins de 2 ms, le cerveau humain interprète le tapotement sur verre comme le déclenchement d'un interrupteur mécanique réel.",
          },
        },
        {
          heading: "Le rendu 3D : transfert des reflows CPU vers le pipeline GPU dédié",
          paragraphs: [
            "Sur le jeu initial, le retournement s'appuyait sur de simples transitions CSS qui provoquaient recalculs de mise en page (reflow) et redessin (repaint) constants, provoquant des micro-saccades quand plusieurs cartes s'animaient de concert.",
            "La version 2026 exploite pleinement l'accélération matérielle : grâce à transform-style: preserve-3d, backface-visibility: hidden et des couches de composition isolées, le navigateur confie les matrices de transformation directement au GPU. Vingt-quatre cartes pivotent sans fléchir à 60 images par seconde fixes, y compris sur smartphones d'entrée de gamme.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter en 2026 : lobby arcade épuré, sélection tactile, son spatialisé et fluidité GPU.",
            alt: "Interface et lobby moderne de Soul Fighter en 2026",
          },
        },
      ],
    },
    {
      heading: "Machine à états déterministe, persistance et mise en production",
      paragraphs: [
        "La gestion de l'état constitue un autre fossé technique. En 2023, cliquer sur trois cartes rapidement bloquait la partie car lockBoard perdait le contrôle face à des minuteurs concurrents.",
        "Dans l'architecture moderne avec React 19 et TypeScript rigide, j'ai modélisé une machine à états déterministe : chaque bascule de statut (idle, flipping, comparing, combo, victory) est hermétique aux clics concurrents et aux états transitoires incohérents.",
        "De plus, j'ai branché une persistance en temps réel via Supabase sur le réseau ASTER. Un tableau d'honneur mondial avec sessions d'invités authentifiées calcule des multiplicateurs de score par niveau et assainit rigoureusement les données côté serveur pour éliminer la triche côté client.",
      ],
      image: {
        src: rankingImg,
        caption: "Classement mondial sur Supabase : synchronisation en direct, multiplicateurs dynamiques et intégrité des scores.",
        alt: "Classement mondial de Soul Fighter",
      },
    },
    {
      heading: "Ce que ces 3 années m'ont appris sur le métier d'ingénieur",
      paragraphs: [
        "Revisiter un travail d'hier avec les compétences forgées au fil de milliers d'heures de pratique est une leçon d'humilité et de fierté. L'écart entre ce commit isolé du 2 novembre 2023 et le logiciel actuel dépasse largement la transition de JavaScript pur vers React ou Tailwind.",
        "L'évolution majeure réside dans la clarté et l'intentionnalité derrière chaque ligne écrite. Voici les quatre piliers qui guident ma pratique de l'ingénierie logicielle :",
      ],
      bulletPoints: [
        "**La prévisibilité surpasse l'astuce isolée** : Le bon code n'est pas celui qui cherche à impressionner par une écriture condensée illisible. Le bon code pose des frontières explicites, un typage robuste et se laisse auditer sans friction mentale.",
        "**La performance est un fondement, jamais un correctif** : Attendre la fin d'un projet pour songer au taux de rafraîchissement est voué à l'échec. L'architecture doit dès le premier jour définir ses contraintes : audio sous 2ms, premier affichage sous 800ms et calculs visuels au GPU.",
        "**L'accessibilité fait partie intégrante du produit** : Un jeu moderne se doit de respecter prefers-reduced-motion, d'offrir une navigation clavier sans faille et de conserver les réglages de volume.",
        "**Respecter le temps de l'utilisateur** : Façonner une interface instantanée, sans friction ni latence n'est pas une coquetterie de designer ; c'est un engagement de respect envers les personnes qui interagissent avec votre travail.",
      ],
      callout: {
        type: "insight",
        title: "Carnet de bord d'ingénierie",
        text: "Refaire Soul Fighter a constitué la démonstration concrète de ma maturité technique : constater comment les énigmes qui me paralysaient jadis se résolvent aujourd'hui par une architecture solide et limpide.",
      },
    },
  ],
};

// ─── Italian (it) ───────────────────────────────────────────────
export const itContent: PostContent = {
  category: "Ingegneria Frontend e UI",
  title: "Tre anni dopo il primo commit: cosa ho imparato ricostruendo Soul Fighter da zero",
  summary:
    "Il 2 novembre 2023 ho eseguito il commit iniziale di un memory game in puro JavaScript. Tre anni dopo, ho deciso di ricostruire l'intero progetto da zero: dall'hackeraggio del DOM alle Web Audio API native, React 19, GPU 3D e ciò che questo percorso insegna sulla maturità ingegneristica.",
  coverCaption:
    "La nuova arena di Soul Fighter Memory Game: animazioni 3D a 60 FPS sulla GPU, sound design tattile nativo e interfaccia di combattimento reattiva.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Architettura Frontend", "Game Dev"],
  links: [
    { title: "Gioca a Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Vedi Codice su GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "Il primo commit del 2 novembre 2023",
      paragraphs: [
        "Se oggi visitate il repository di Soul Fighter su GitHub e scorrete la cronologia fino alla primissima pagina dei commit, troverete la data esatta: 2 novembre 2023, accompagnata dal messaggio conciso 'start'.",
        "A quel tempo il progetto era il classico banco di prova di chi muove i primi passi nello sviluppo web: una cartella con file HTML slegati, CSS rudimentale e uno script JavaScript colmo di selettori diretti nel DOM. L'intera logica di gioco risiedeva in variabili globali nello scope window, regolate da flag improvvisate come lockBoard e hasFlippedCard.",
        "Riuscire a far ruotare due carte riproducendo un file audio sembrava un successo indimenticabile. Riguardare quel codice tre anni dopo non suscita imbarazzo, bensì offre una misura cristallina di come si affina la sensibilità ingegneristica costruendo con costanza.",
      ],
      image: {
        src: antigoImg1,
        caption: "Soul Fighter il 2 novembre 2023: HTML puro, stile rustico e logica legata a manipolazioni manuali del DOM.",
        alt: "Versione originaria di Soul Fighter a novembre 2023",
      },
      callout: {
        type: "insight",
        title: "Il valore di custodire i propri primi progetti",
        text: "Molti programmatori cancellano i vecchi repository temendo il giudizio altrui. Io preferisco tenerli pubblici: sono la telemetria più sincera di quanto si sia innalzata la propria asticella professionale.",
      },
    },
    {
      heading: "La scelta di ripartire da capo invece di rattoppare",
      paragraphs: [
        "Tre anni dopo, a ottobre 2026, ho riaperto il vecchio codice. Avrei potuto semplicemente cambiare qualche colore nei fogli di stile o sistemare un paio di bug nel timer. Ho preferito invece l'esercizio più onesto: scartare il codice precedente e ricostruire il gioco dalle fondamenta, applicando il bagaglio tecnico maturato nel tempo.",
        "La schermata dei punteggi del 2023 mostrava tutti i limiti di quel periodo: blocchi rigidi privi di gerarchia visiva, nessuna persistenza dei progressi e un uso incontrollato di timeout nidificati per coordinare grafica e logica.",
        "Il mutamento decisivo è stato di natura mentale. Nel 2023 l'obiettivo era: 'come mostro questo elemento a schermo subito?'. Nel 2026 la domanda è diventata: 'qual è il budget di latenza per questa interazione, come garantisco 60 FPS stabili e come modello lo stato affinché le race condition siano matematicamente impossibili?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Schermata dei risultati del 2023: struttura rigida, grafica piatta e nessun salvataggio affidabile dei punteggi.",
        alt: "Schermata di vittoria nella versione 2023 di Soul Fighter",
      },
    },
    {
      heading: "Dall'abuso del DOM alla concreta ingegneria delle prestazioni",
      paragraphs: [
        "Confrontando le due versioni, la differenza sostanziale non sta nelle librerie importate, bensì nel rispetto con cui viene adoperato l'hardware sottostante.",
      ],
      subsections: [
        {
          heading: "L'audio: dal tag sonoro lento alle Web Audio API native",
          paragraphs: [
            "Nel 2023 gli effetti erano avviati con new Audio('suono.mp3').play(). Il risvolto pratico era penalizzante: ritardi percettibili di circa duecento millisecondi fra tocco ed emissione, scatti nei clic rapidi e interruzioni causate dai limiti di istanze del browser.",
            "Nel rifacimento del 2026 ho impiegato le Web Audio API native con un AudioContext singleton centralizzato. I buffer sonori vengono decodificati nella memoria di sistema durante il bootstrap iniziale. Quando una carta gira o si genera una combo, il nodo audio scatta in meno di due millisecondi con curve di decadimento esponenziali.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Risposta tattile a bassissima latenza (< 2ms) senza dipendenze
export function playCardFlipFeedback(ctx: AudioContext, gainNode: GainNode) {
  const osc = ctx.createOscillator();
  const envelope = ctx.createGain();
  
  // Rampa di frequenza per simulare uno switch meccanico
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
            title: "La latenza sonora è una sensazione fisica",
            text: "Quando la risposta audio interviene entro due millisecondi, il cervello percepisce il tocco sullo schermo al pari della pressione di un interruttore meccanico vero e proprio.",
          },
        },
        {
          heading: "Rendering 3D: delegare i ricalcoli della CPU al motore della GPU",
          paragraphs: [
            "La rotazione originaria si basava su transizioni CSS ordinarie che forzavano continui calcoli di reflow e repaint a ogni interazione, provocando scatti evidenti con più carte in movimento.",
            "L'edizione 2026 sfrutta l'accelerazione hardware: con transform-style: preserve-3d, backface-visibility: hidden e layer di compositing isolati, il motore grafico delega il calcolo spaziale direttamente alla GPU. Ventiquattro carte ruotano simultaneamente a 60 FPS senza alcuna esitazione, perfino su smartphone di fascia economica.",
          ],
          image: {
            src: lobbyImg,
            caption: "Soul Fighter nel 2026: lobby in stile arcade moderno, selezione reattiva dei personaggi, audio a bassa latenza e GPU computing.",
            alt: "Lobby e interfaccia moderna di Soul Fighter nel 2026",
          },
        },
      ],
    },
    {
      heading: "Stato deterministico, persistenza e produzione reale",
      paragraphs: [
        "La gestione dei dati rappresenta un ulteriore salto qualitativo. Nel 2023 premere rapidamente tre carte mandava in tilt la schermata per colpa di un lockBoard incapace di gestire la concorrenza con i timeout.",
        "Con React 19 e TypeScript rigoroso ho concepito una macchina a stati finiti deterministica: ogni transizione (idle, flipping, comparing, combo, victory) è inattaccabile da eventi concorrenti o da stati intermedi non ammessi.",
        "Ho inoltre collegato la persistenza live con Supabase sulla Rete ASTER. Una classifica globale con sessioni per ospiti calcola moltiplicatori in base al livello e sanifica i dati a livello server per sventare tentativi di manipolazione client-side.",
      ],
      image: {
        src: rankingImg,
        caption: "Leaderboard globale su Supabase: sincronizzazione istantanea, moltiplicatori di punteggio e convalida di sicurezza.",
        alt: "Classifica mondiale di Soul Fighter",
      },
    },
    {
      heading: "Cosa mi hanno insegnato questi 3 anni sul codice professionale",
      paragraphs: [
        "Rivisitare il codice del passato con la consapevolezza di anni di studio e pratica è uno degli esercizi più formativi per un ingegnere del software. La distanza fra quel solitario commit del 2 novembre 2023 e il risultato odierno va ben oltre l'adozione di React o Tailwind.",
        "Il salto profondo sta nella lucidità con cui viene concepita ogni riga. Raccolgo questo percorso in quattro convinzioni cardinali che indirizzano la mia attività professionale:",
      ],
      bulletPoints: [
        "**La prevedibilità vince sull'astuzia isolata**: Il buon codice non è quello che tenta di essere brillante in un'unica riga incomprensibile. Il codice di valore traccia confini trasparenti, possiede tipi robusti e permette a chiunque di esaminarne il flusso senza fatica superflua.",
        "**La performance è un pilastro strutturale, non un ritocco finale**: Pensare a fluidità e latenza all'ultimo momento conduce inevitabilmente a rifacimenti costosi. L'architettura deve nascere con obiettivi misurabili: audio entro 2ms, visualizzazione in meno di 800ms e animazioni calcolate su GPU.",
        "**L'accessibilità è parte integrante della qualità**: Un titolo moderno deve supportare preferenze di sistema come prefers-reduced-motion, navigazione completa da tastiera e volume persistito.",
        "**Rispetto per l'attenzione dell'utente**: Offrire interazioni tattili e prive di attrito non è un vezzo estetico; è la più chiara forma di considerazione per il tempo e l'esperienza di chi usa il software.",
      ],
      callout: {
        type: "insight",
        title: "Diario di bordo ingegneristico",
        text: "Riscrivere Soul Fighter è stata la verifica tangibile della mia crescita tecnica: vedere come gli ostacoli che un tempo mi bloccavano vengano oggi superati con architetture solide, pulite e robuste.",
      },
    },
  ],
};

// ─── Portuguese - Portugal (pt) ─────────────────────────────────
export const ptContent: PostContent = {
  category: "Engenharia de Frontend & UI",
  title: "Três anos após o primeiro commit: o que aprendi ao reconstruir o Soul Fighter de raiz",
  summary:
    "A 02 de novembro de 2023, realizei o commit inicial de um jogo da memória em JavaScript puro. Três anos depois, decidi reconstruir o projeto de raiz: como passei de soluções frágeis no DOM para a Web Audio API nativa, React 19, GPU 3D e o que esta trajetória revela sobre maturidade técnica.",
  coverCaption:
    "A nova arena do Soul Fighter Memory Game: animações 3D a 60 FPS na GPU, desenho sonoro tátil nativo e interface de combate reativa.",
  tags: ["React 19", "TypeScript", "Web Audio API", "CSS 3D", "Supabase", "Arquitetura Frontend", "Game Dev"],
  links: [
    { title: "Jogar Soul Fighter", url: "https://soulfighter.asterdev.me/", icon: "gamepad" },
    { title: "Ver Código no GitHub", url: "https://github.com/zAstergun/Soul-Fighter-Memory-Game", icon: "github" },
  ],
  sections: [
    {
      heading: "O primeiro commit a 02 de novembro de 2023",
      paragraphs: [
        "Se consultar hoje o repositório do Soul Fighter no GitHub e recuar no histórico até à primeira página de commits, encontrará a data precisa: 02 de novembro de 2023, acompanhada por uma mensagem simples que dizia apenas 'start'.",
        "Na altura, o projeto representava o típico exemplo de quem dava os primeiros passos no desenvolvimento web: uma pasta com ficheiros avulsos de HTML, folhas de estilo elementares e um script JavaScript repleto de seletores diretos no DOM. Toda a lógica residia em variáveis globais no âmbito window, geridas por marcadores como lockBoard e hasFlippedCard.",
        "Conseguir que duas cartas virassem e reproduzissem um ficheiro áudio parecia uma conquista memorável. Olhar para esse código três anos mais tarde não me causa qualquer constrangimento; pelo contrário, concede uma perspetiva claríssima sobre a forma como o critério técnico se aprimora com a prática continuada.",
      ],
      image: {
        src: antigoImg1,
        caption: "O Soul Fighter a 02 de novembro de 2023: HTML puro, estilização rudimentar e lógica dependente de manipulações no DOM.",
        alt: "Versão antiga do Soul Fighter em novembro de 2023",
      },
      callout: {
        type: "insight",
        title: "O mérito de preservar os primeiros projetos",
        text: "Muitos programadores eliminam os seus repositórios iniciais com receio de avaliações alheias. Prefiro mantê-los públicos: constituem a métrica mais genuína de como a bitola de exigência foi elevada.",
      },
    },
    {
      heading: "A determinação de reconstruir de raiz em vez de remendar",
      paragraphs: [
        "Três anos volvidos, em outubro de 2026, voltei a abrir o projeto. Teria sido fácil alterar apenas algumas cores ou corrigir pequenos lapsos no cronómetro. Optei, porém, pelo desafio mais autêntico que um engenheiro de software pode abraçar: descartar o código precedente e edificar o jogo por completo, tirando partido da bagagem técnica entretanto adquirida.",
        "O ecrã antigo de resultados evidenciava de imediato as limitações de então: caixas rígidas desprovidas de hierarquia visual, inexistência de gravação de pontuações e uma dependência arriscada de temporizadores encadeados para sincronizar animações com as regras da partida.",
        "A transformação basilar não foi de ordem estética, mas de postura mental. Em 2023, o meu foco resumia-se a: 'como apresento isto no ecrã de imediato?'. Em 2026, a interrogação passou a ser: 'qual é o orçamento de latência para esta interação, como asseguro 60 fotogramas por segundo ininterruptos e como modelo o estado para impossibilitar condições de corrida?'.",
      ],
      image: {
        src: antigoImg2,
        caption: "Ecrã de pontuações de 2023: disposição rígida, grafismo plano e ausência de persistência fiável de dados.",
        alt: "Ecrã de vitória da versão de 2023 do Soul Fighter",
      },
    },
    {
      heading: "De soluções empíricas no DOM à engenharia de desempenho rigorosa",
      paragraphs: [
        "Ao confrontar ambas as bases de código, as distinções mais expressivas não se encontram nos módulos importados, mas no modo como o hardware do navegador é respeitado.",
      ],
      subsections: [
        {
          heading: "O áudio: da tag padrão lenta à Web Audio API nativa",
          paragraphs: [
            "Em 2023, os efeitos eram despoletados com new Audio('som.mp3').play(). O desfecho era manifestamente penalizador: um desfasamento de quase duzentos milissegundos entre o toque e a resposta sonora, soluços perante cliques sucessivos e cortes arbitrários provocados pelos limites de instâncias do browser.",
            "Na reconstrução em 2026, recorri à Web Audio API nativa através de um AudioContext singleton partilhado. Os buffers de áudio são previamente descodificados na memória durante o carregamento inicial. Ao virar uma carta ou ao obter um combo, o nó sonoro reage em menos de dois milissegundos, beneficiando de curvas exponenciais de atenuação.",
          ],
          codeBlock: {
            language: "typescript",
            filename: "audioEngine.ts",
            code: `// Disparo tátil de latência mínima (< 2ms) sem dependências externas
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
            title: "A latência sonora transmite solidez tátil",
            text: "Quando a resposta acústica ocorre em menos de 2ms, o cérebro do utilizador associa o toque no vidro ao acionamento de um interruptor mecânico tangível.",
          },
        },
        {
          heading: "A renderização 3D: da sobrecarga no CPU para a GPU dedicada",
          paragraphs: [
            "No projeto de 2023, a rotação das cartas dependia de transições CSS triviais que forçavam cálculos constantes de layout (reflow) e repintura (repaint), originando quebras de fluidez quando vários elementos se movimentavam em simultâneo.",
            "A versão contemporânea adota aceleração por hardware nativa: com transform-style: preserve-3d, backface-visibility: hidden e camadas de composição isoladas, o navegador entrega as transformações espaciais diretamente à GPU. Vinte e quatro cartas rodam em uníssono mantendo 60 FPS estáveis, inclusive em telemóveis de gama de entrada.",
          ],
          image: {
            src: lobbyImg,
            caption: "O Soul Fighter em 2026: lobby arcade moderno, seleção tátil de lutadores, áudio espacial e aceleração gráfica por GPU.",
            alt: "Interface e lobby contemporâneo do Soul Fighter",
          },
        },
      ],
    },
    {
      heading: "Máquina de estados determinista, persistência e ambiente de produção",
      paragraphs: [
        "A fiabilidade da informação marca outra evolução marcante. Em 2023, carregar em três cartas sucessivas bloqueava o jogo com cartas viradas indefinidamente, por incapacidade do lockBoard em gerir a assincronia dos timeouts.",
        "Com React 19 e TypeScript rigoroso, estruturei uma máquina de estados determinista: cada transição de ciclo (idle, flipping, comparing, combo, victory) encontra-se blindada contra interações concorrentes e estados intermediários inválidos.",
        "Acrescentei ainda sincronização em tempo real através da Supabase na Rede ASTER. A tabela de pontuações global suporta sessões de convidados, calcula multiplicadores por escalão de dificuldade e valida os dados no servidor para anular qualquer manipulação indevida no cliente.",
      ],
      image: {
        src: rankingImg,
        caption: "Classificação mundial na Supabase: sincronização em tempo real, cálculo de multiplicadores e integridade de pontuações.",
        alt: "Classificação global do Soul Fighter",
      },
    },
    {
      heading: "As lições de engenharia que estes 3 anos consolidaram",
      paragraphs: [
        "Reexaminar o trabalho de ontem à luz da maturidade profissional adquirida é um exercício inspirador. A distância entre aquele commit solitário de 02 de novembro de 2023 e o projeto atual vai muito além de migrar de JavaScript puro para React ou Tailwind.",
        "A evolução reside na convicção e na solidez com que cada instrução é desenhada. Consolido essa aprendizagem em quatro princípios que balizam a minha atuação profissional:",
      ],
      bulletPoints: [
        "**A previsibilidade sobrepõe-se à complexidade desnecessária**: O código meritório não é aquele que procura ser engenhoso numa linha ilegível. Código de qualidade estabelece fronteiras nítidas, possui tipagem exemplar e permite uma auditoria sem atrito mental.",
        "**O desempenho é fundação, não acabamento**: Deixar a fluidez e a latência para o fecho de um ciclo de entrega é garantia de refatorações onerosas. O projeto deve arrancar com balizas firmes: áudio abaixo de 2ms, visualização inicial em menos de 800ms e processamento visual na GPU.",
        "**Acessibilidade não é facultativa**: Um jogo contemporâneo deve acatar preferências do sistema como prefers-reduced-motion, contemplar navegação integral por teclado e guardar as preferências de volume.",
        "**Consideração pelo utilizador**: Edificar soluções rápidas, táteis e sem quebras de fluidez não é vaidade visual; é demonstrar respeito pelo tempo e pela vivência de quem interage com o ecrã.",
      ],
      callout: {
        type: "insight",
        title: "Registo de engenharia",
        text: "Reconstruir o Soul Fighter foi o testemunho prático da minha evolução técnica: comprovar como as matérias que outrora me bloqueavam são hoje resolvidas com arquitetura irrepreensível, solidez e elegância.",
      },
    },
  ],
};

