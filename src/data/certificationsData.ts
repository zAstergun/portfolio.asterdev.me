import type { Language, ProjectItem } from "./aster";
import { certificationsTranslations, VERIFY_LINK_TITLES } from "./certificationsTranslations";

/**
 * Interface for certification metadata and internationalized content
 */
export interface CertificationDefinition {
  id: string;
  name: Record<"pt" | "en", string>;
  institution: string;
  year: string;
  issueDate?: string;
  hours?: number;
  credentialCode?: string;
  credentialUrl?: string;
  icon: "certificate" | "graduation";
  gradient: [string, string];
  tags: Record<"pt" | "en", string[]>;
  summary: Record<"pt" | "en", string>;
}

export const ALL_CERTIFICATIONS: CertificationDefinition[] = [
  {
    id: "cert-descomplica-iot",
    name: { "pt": "IoT Developer", "en": "IoT Developer" },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    issueDate: "2026-10-07",
    hours: 160,
    credentialCode: "160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f",
    icon: "graduation",
    gradient: ["#0284c7", "#0369a1"],
    tags: { "pt": [ "Internet das Coisas", "Hardware & Cloud", "Descomplica", "160h" ], "en": [ "Internet of Things", "Hardware & Cloud", "Descomplica", "160h" ] },
    summary: {
      pt: "Certificado curricular de Especialista em IoT Developer pelo curso de Bacharelado em Ciência da Computação da Descomplica Faculdade Digital.\n\n• Carga Horária: 160 horas\n• Data de Emissão: 07/10/2026 às 09:12\n• Instituição: Descomplica Faculdade Digital / UniAmérica\n• Nº de Registro Oficial: 160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f\n\nCompetências e Tópicos Dominados:\n- Arquitetura de sistemas embarcados, microcontroladores e sensores IoT\n- Protocolos de comunicação em rede de baixa latência (MQTT, CoAP, HTTP/WebSockets)\n- Telemetria de dados em tempo real e integração com serviços de nuvem\n- Padrões de segurança, criptografia e mitigação de vulnerabilidades em dispositivos IoT\n- Construção de pipelines de dados entre sensores físicos e dashboards analíticos.",
      en: "Academic Certificate of Specialization as IoT Developer from the Computer Science Bachelor program at Descomplica Faculdade Digital.\n\n• Workload: 160 hours\n• Date of Issue: 07/10/2026 at 09:12\n• Institution: Descomplica Faculdade Digital / UniAmérica\n• Official Registry ID: 160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f\n\nSkills & Topics Mastered:\n- Embedded systems architecture, microcontrollers, and IoT sensor networks\n- Low-latency communication protocols (MQTT, CoAP, HTTP/WebSockets)\n- Real-time telemetry data processing and cloud IoT service integration\n- Security standards, device-level encryption, and hardware vulnerability management\n- Building end-to-end data pipelines from physical hardware to analytical dashboards.",
    },
  },

  {
    id: "cert-descomplica-ia",
    name: { "pt": "IA Developer", "en": "AI Developer" },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    issueDate: "2026-08-11",
    hours: 200,
    credentialCode: "44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5",
    icon: "graduation",
    gradient: ["#10b981", "#047857"],
    tags: { "pt": [ "Inteligência Artificial", "Deep Learning", "Descomplica", "200h" ], "en": [ "Artificial Intelligence", "Deep Learning", "Descomplica", "200h" ] },
    summary: {
      pt: "Certificado curricular de Especialista em IA Developer pelo curso de Bacharelado em Ciência da Computação da Descomplica Faculdade Digital.\n\n• Carga Horária: 200 horas\n• Data de Emissão: 11/08/2026 às 13:28\n• Instituição: Descomplica Faculdade Digital / UniAmérica\n• Nº de Registro Oficial: 44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5\n\nCompetências e Tópicos Dominados:\n- Fundamentos matemáticos e estatísticos aplicados a Inteligência Artificial\n- Algoritmos de Machine Learning supervisionado e não-supervisionado\n- Redes Neurais Artificiais, Deep Learning e algoritmos de Backpropagation\n- Processamento de Linguagem Natural (NLP) e arquiteturas de modelos modernos\n- Visão Computacional, extração de features e classificação de imagens\n- Avaliação de métricas (Precision, Recall, F1-Score, ROC-AUC) e otimização de hiperparâmetros.",
      en: "Academic Certificate of Specialization as AI Developer from the Computer Science Bachelor program at Descomplica Faculdade Digital.\n\n• Workload: 200 hours\n• Date of Issue: 11/08/2026 at 13:28\n• Institution: Descomplica Faculdade Digital / UniAmérica\n• Official Registry ID: 44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5\n\nSkills & Topics Mastered:\n- Mathematical and statistical foundations for Artificial Intelligence\n- Supervised and unsupervised Machine Learning models\n- Artificial Neural Networks, Deep Learning, and Backpropagation\n- Natural Language Processing (NLP) and modern language model principles\n- Computer Vision, feature extraction, and image classification\n- Model evaluation metrics (Precision, Recall, F1, ROC-AUC) and hyperparameter tuning.",
    },
  },

  {
    id: "cert-origamid-typescript",
    name: { "pt": "TypeScript para Iniciantes", "en": "TypeScript for Beginners" },
    institution: "Origamid",
    year: "2026",
    issueDate: "2026-06-26",
    hours: 22,
    credentialCode: "de898dfe",
    credentialUrl: "https://www.origamid.com/certificate/de898dfe",
    icon: "certificate",
    gradient: ["#3178c6", "#1e40af"],
    tags: { "pt": [ "TypeScript", "Tipagem Estática", "Origamid", "22h" ], "en": [ "TypeScript", "Static Typing", "Origamid", "22h" ] },
    summary: {
      pt: "Especialização em tipagem estática e engenharia de software em TypeScript ministrada pela Origamid.\n\n• Carga Horária: 22 horas\n• Período de Realização: 21/06/2026 a 26/06/2026\n• Instituição: Origamid (CNPJ 23.811.568/0001-98)\n• Validação Oficial: origamid.com/certificate/de898dfe\n\nCompetências e Tópicos Dominados:\n- Interfaces, Type Aliases e inferência estrita de tipos em tempo de compilação\n- Generics para funções, interfaces e classes reutilizáveis e escaláveis\n- Type Narrowing, Type Guards, Union Types e Intersection Types\n- Manipulação tipada do DOM e eventos do navegador sem uso de 'any'\n- Configuração de tsconfig.json e boas práticas de tipagem estrutural\n- Integração de tipos com bibliotecas e frameworks modernos do ecossistema JS.",
      en: "Specialization in static typing and scalable software engineering with TypeScript by Origamid.\n\n• Workload: 22 hours\n• Period: 21/06/2026 to 26/06/2026\n• Institution: Origamid (CNPJ 23.811.568/0001-98)\n• Official Verification: origamid.com/certificate/de898dfe\n\nSkills & Topics Mastered:\n- Interfaces, Type Aliases, and strict compile-time type inference\n- Generics for creating reusable, type-safe functions, classes, and components\n- Type Narrowing, Type Guards, Union Types, and Intersection Types\n- Type-safe DOM manipulation and browser event handling without 'any'\n- tsconfig.json compiler flags and best architectural practices\n- Typing integration with third-party libraries across the Node/JS ecosystem.",
    },
  },

  {
    id: "cert-origamid-react",
    name: { "pt": "React Completo", "en": "React Complete" },
    institution: "Origamid",
    year: "2026",
    issueDate: "2026-06-21",
    hours: 36,
    credentialCode: "f3fa3866",
    credentialUrl: "https://www.origamid.com/certificate/f3fa3866",
    icon: "certificate",
    gradient: ["#00d8ff", "#0077b6"],
    tags: { "pt": [ "React", "Frontend", "Origamid", "36h" ], "en": [ "React", "Frontend", "Origamid", "36h" ] },
    summary: {
      pt: "Formação avançada e aprofundada no ecossistema moderno do React.js ministrada pela Origamid.\n\n• Carga Horária: 36 horas\n• Período de Realização: 11/06/2026 a 21/06/2026\n• Instituição: Origamid (CNPJ 23.811.568/0001-98)\n• Validação Oficial: origamid.com/certificate/f3fa3866\n\nCompetências e Tópicos Dominados:\n- React Hooks aprofundados: useState, useEffect, useContext, useReducer, useMemo, useCallback e useRef\n- Custom Hooks para abstração e reutilização de regras de negócio e estado\n- Roteamento completo com React Router (rotas dinâmicas, parâmetros e proteção de fluxo)\n- Formulários controlados, validação de campos e manipulação de estado complexo\n- Consumo resiliente e assíncrono de APIs RESTful\n- Otimização de renderização, Code Splitting e Lazy Loading de componentes.",
      en: "In-depth advanced training in the modern React.js ecosystem provided by Origamid.\n\n• Workload: 36 hours\n• Period: 11/06/2026 to 21/06/2026\n• Institution: Origamid (CNPJ 23.811.568/0001-98)\n• Official Verification: origamid.com/certificate/f3fa3866\n\nSkills & Topics Mastered:\n- Core & advanced React Hooks: useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef\n- Custom Hooks for business logic abstraction and state reuse\n- Routing architecture with React Router (nested routes, dynamic params, program navigation)\n- Controlled forms, input validation, and complex state management\n- Resilient asynchronous RESTful API consumption\n- Rendering optimization, Lazy Loading, and component Code Splitting.",
    },
  },

  {
    id: "cert-origamid-master",
    name: { "pt": "Front/Back End & UX/UI Design - Master Formação", "en": "Full Stack & UX/UI Design - Master Specialization" },
    institution: "Origamid",
    year: "2026",
    issueDate: "2026-06-01",
    hours: 194,
    credentialCode: "a0087404",
    credentialUrl: "https://www.origamid.com/certificate/a0087404",
    icon: "graduation",
    gradient: ["#00d8ff", "#6366f1"],
    tags: { "pt": [ "Full Stack", "UX/UI Design", "Origamid", "194h" ], "en": [ "Full Stack", "UX/UI Design", "Origamid", "194h" ] },
    summary: {
      pt: "Formação Master e abrangente ministrada pela Origamid, integrando engenharia Front-End moderna, Back-End e design de interfaces centrado no usuário.\n\n• Carga Horária: 194 horas\n• Conclusão: Junho de 2026\n• Instituição: Origamid (CNPJ 23.811.568/0001-98)\n• Validação Oficial: origamid.com/certificate/a0087404\n\nCompetências e Tópicos Dominados:\n- Ecossistema Front-End: React, TypeScript, JavaScript ES6+, HTML5 semântico e CSS avançado\n- Fundamentos de Back-End: APIs RESTful, integração assíncrona e arquitetura de dados\n- UX/UI Design: Design Systems escaláveis, prototipação de alta fidelidade e ergonomia visual\n- Performance de carregamento, responsividade fluida e acessibilidade web (WCAG).",
      en: "Comprehensive Master curriculum provided by Origamid, integrating modern Front-End engineering, Back-End fundamentals, and user-centered UI/UX design.\n\n• Workload: 194 hours\n• Completion: June 2026\n• Institution: Origamid (CNPJ 23.811.568/0001-98)\n• Official Verification: origamid.com/certificate/a0087404\n\nSkills & Topics Mastered:\n- Modern Front-End ecosystem: React, TypeScript, JavaScript ES6+, semantic HTML5, and advanced CSS\n- Back-End foundations: RESTful API architecture and asynchronous integration\n- UI/UX Design: Scalable Design Systems, high-fidelity wireframing, and visual hierarchy\n- Web performance optimization, fluid responsive layouts, and accessibility standards (WCAG).",
    },
  },

  {
    id: "cert-descomplica-bigdata",
    name: { "pt": "BI & Big Data", "en": "BI & Big Data" },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    issueDate: "2026-03-01",
    credentialCode: "2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b",
    icon: "graduation",
    gradient: ["#3b82f6", "#1d4ed8"],
    tags: { "pt": [ "Business Intelligence", "Big Data", "Descomplica" ], "en": [ "Business Intelligence", "Big Data", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Business Intelligence & Big Data da Faculdade Descomplica.\n\n• Período de Emissão: Março de 2026\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: 2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b\n\nCompetências e Tópicos Dominados:\n- Arquitetura de Data Warehouses, Data Lakes e modelagem multidimensional (Star e Snowflake Schema)\n- Processos de ETL/ELT para ingestão e enriquecimento de grandes volumes de dados\n- Dashboards analíticos, KPIs de performance e visualização de dados estratégicos\n- Processamento massivo de dados distribuídos e tomada de decisão orientada por dados.",
      en: "Academic Certificate in Business Intelligence & Big Data from Faculdade Descomplica.\n\n• Issue Date: March 2026\n• Institution: Descomplica Faculdade Digital\n• Validation Code: 2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b\n\nSkills & Topics Mastered:\n- Data Warehousing, Data Lake architecture, and multidimensional modeling (Star & Snowflake)\n- ETL/ELT pipelines for ingestion and curation of high-volume data\n- Analytical dashboards, strategic KPIs, and executive data storytelling\n- Distributed data architectures and metric-driven business intelligence.",
    },
  },

  {
    id: "cert-origamid-javascript",
    name: { "pt": "JavaScript Completo ES6+", "en": "Complete JavaScript ES6+" },
    institution: "Origamid",
    year: "2026",
    issueDate: "2026-02-01",
    hours: 74,
    credentialCode: "b9b225cb",
    credentialUrl: "https://origamid.com/certificate/b9b225cb",
    icon: "certificate",
    gradient: ["#f59e0b", "#d97706"],
    tags: { "pt": [ "JavaScript", "ES6+", "Origamid", "74h" ], "en": [ "JavaScript", "ES6+", "Origamid", "74h" ] },
    summary: {
      pt: "Formação completa e profunda na linguagem JavaScript moderna e padrões ECMAScript ministrada pela Origamid.\n\n• Carga Horária: 74 horas\n• Conclusão: Fevereiro de 2026\n• Instituição: Origamid (CNPJ 23.811.568/0001-98)\n• Validação Oficial: origamid.com/certificate/b9b225cb\n\nCompetências e Tópicos Dominados:\n- DOM profundo: manipulação eficiente de nós, traversal, eventos customizados e delegação\n- Assincronismo: Promises, Async/Await, Fetch API, tratamento robusto de erros e requisições HTTP\n- Objetos e Funções: Classes, Constructor Functions, Prototype Chain, Closures e Escopo léxico\n- Recursos modernos ES6+: Destructuring, Rest & Spread, Arrow Functions, Maps, Sets e Symbols\n- Módulos nativos JavaScript (ESM), transpiladores e padrões de código limpo.",
      en: "Comprehensive mastery of modern JavaScript (ES6+) and ECMAScript specifications by Origamid.\n\n• Workload: 74 hours\n• Completion: February 2026\n• Institution: Origamid (CNPJ 23.811.568/0001-98)\n• Official Verification: origamid.com/certificate/b9b225cb\n\nSkills & Topics Mastered:\n- Deep DOM: high-performance node manipulation, traversal, custom events, and event delegation\n- Asynchronous JS: Promises, Async/Await, Fetch API, and comprehensive error handling\n- Objects & Prototypes: Classes, Constructor Functions, Prototype Chain, Closures, and lexical scope\n- Modern ES6+ syntax: Destructuring, Rest/Spread, Arrow Functions, Maps, Sets, and Symbols\n- Native ES Modules (ESM), modular bundling concepts, and clean code practices.",
    },
  },

  {
    id: "cert-descomplica-db",
    name: { "pt": "DB Developer", "en": "DB Developer" },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    issueDate: "2026-01-01",
    credentialCode: "f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233",
    icon: "graduation",
    gradient: ["#059669", "#065f46"],
    tags: { "pt": [ "Banco de Dados", "SQL & NoSQL", "Descomplica" ], "en": [ "Databases", "SQL & NoSQL", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular de DB Developer pelo curso de Ciência da Computação da Faculdade Descomplica.\n\n• Período de Emissão: Janeiro de 2026\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233\n\nCompetências e Tópicos Dominados:\n- Projeto e modelagem relacional de bancos de dados (Normalização 1FN, 2FN, 3FN)\n- Consultas SQL avançadas: Joins complexos, subqueries correlacionadas, views e índices de alta performance\n- Procedimentos armazenados (Stored Procedures), Triggers e transações com propriedades ACID\n- Introdução a bancos de dados NoSQL orientados a documentos e chave-valor.",
      en: "Academic Certificate as DB Developer in the Computer Science curriculum at Faculdade Descomplica.\n\n• Issue Date: January 2026\n• Institution: Descomplica Faculdade Digital\n• Validation Code: f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233\n\nSkills & Topics Mastered:\n- Relational schema design and data normalization rules (1NF, 2NF, 3NF)\n- Complex SQL queries: Multi-table Joins, correlated subqueries, analytical views, and index tuning\n- Stored Procedures, Triggers, execution plan analysis, and ACID transactions\n- Core principles of document-based and key-value NoSQL database engines.",
    },
  },

  {
    id: "cert-descomplica-software-eng",
    name: { "pt": "Software Engineering", "en": "Software Engineering" },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    issueDate: "2025-09-01",
    credentialCode: "683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554",
    icon: "graduation",
    gradient: ["#6366f1", "#4338ca"],
    tags: { "pt": [ "Engenharia de Software", "Arquitetura", "Descomplica" ], "en": [ "Software Engineering", "Architecture", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Software Engineering pelo curso de Bacharelado em Ciência da Computação da Faculdade Descomplica.\n\n• Período de Emissão: Setembro de 2025\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: 683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554\n\nCompetências e Tópicos Dominados:\n- Ciclo de vida de desenvolvimento de software (SDLC) e processos ágeis modernos\n- Princípios de arquitetura de software limpa, desacoplamento e coesão de componentes\n- Padrões de projeto (GoF: Factory, Observer, Singleton, Strategy, Decorator)\n- Garantia de qualidade, testes automatizados e integração contínua (CI/CD).",
      en: "Academic Certificate in Software Engineering from the Computer Science program at Faculdade Descomplica.\n\n• Issue Date: September 2025\n• Institution: Descomplica Faculdade Digital\n• Validation Code: 683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554\n\nSkills & Topics Mastered:\n- Software Development Life Cycle (SDLC) and modern agile team workflows\n- Clean software architectural principles, high cohesion, and loose coupling\n- GoF Design Patterns (Factory, Observer, Singleton, Strategy, Decorator)\n- Quality assurance engineering, automated testing, and CI/CD automation.",
    },
  },

  {
    id: "cert-notion-advanced",
    name: { "pt": "Notion Advanced Certified", "en": "Notion Advanced Certified" },
    institution: "Notion",
    year: "2025",
    issueDate: "2025-09-01",
    credentialCode: "rf9cnb8pyafv",
    credentialUrl: "https://verify.skilljar.com/c/rf9cnb8pyafv",
    icon: "certificate",
    gradient: ["#18181b", "#27272a"],
    tags: { "pt": [ "Notion Advanced", "Arquitetura PKM", "Automações" ], "en": [ "Notion Advanced", "PKM Architecture", "Automations" ] },
    summary: {
      pt: "Certificação oficial avançada emitida pela Notion Labs validando domínio profundo em arquiteturas complexas e modelagem de dados no Notion.\n\n• Data de Emissão: Setembro de 2025 (Validade: Setembro de 2027)\n• Instituição: Notion Labs, Inc.\n• Validação Oficial: verify.skilljar.com/c/rf9cnb8pyafv\n\nCompetências e Tópicos Dominados:\n- Fórmulas 2.0 avançadas com arrays, expressões regulares e lógica funcional recursiva\n- Modelagem de dados multi-relacional em larga escala com múltiplos níveis de rollups\n- Governança de dados corporativos e controle refinado de permissões\n- Engenharia de sistemas operacionais completos para empresas e equipes de alto desempenho.",
      en: "Official Advanced Credential issued by Notion Labs certifying enterprise mastery in information architecture and complex database modeling.\n\n• Issue Date: September 2025 (Expires: September 2027)\n• Institution: Notion Labs, Inc.\n• Official Verification: verify.skilljar.com/c/rf9cnb8pyafv\n\nSkills & Topics Mastered:\n- Advanced Formulas 2.0 utilizing arrays, regular expressions, and functional lambda expressions\n- Large-scale multi-relational database schemas and nested rollups\n- Enterprise data governance, audit controls, and granular permission architectures\n- Designing comprehensive operating systems for high-performance cross-functional teams.",
    },
  },

  {
    id: "cert-notion-workflows",
    name: { "pt": "Notion Workflows Certified", "en": "Notion Workflows Certified" },
    institution: "Notion",
    year: "2025",
    issueDate: "2025-09-01",
    credentialCode: "mr79shtf6cwu",
    credentialUrl: "https://verify.skilljar.com/c/mr79shtf6cwu",
    icon: "certificate",
    gradient: ["#27272a", "#3f3f46"],
    tags: { "pt": [ "Notion Workflows", "Automação", "Processos" ], "en": [ "Notion Workflows", "Automation", "Processes" ] },
    summary: {
      pt: "Certificação oficial emitida pela Notion Labs atestando a habilidade de transformar conceitos e processos em ferramentas dinâmicas e automatizadas.\n\n• Data de Emissão: Setembro de 2025 (Validade: Setembro de 2027)\n• Instituição: Notion Labs, Inc.\n• Validação Oficial: verify.skilljar.com/c/mr79shtf6cwu\n\nCompetências e Tópicos Dominados:\n- Automações nativas baseadas em gatilhos de propriedade, status e webhooks\n- Construção de fluxos dinâmicos de aprovação, acompanhamento de tarefas e sprints\n- Conexão e sincronização de informações entre múltiplos departamentos e workspaces\n- Eliminação de gargalos operacionais e padronização de esteiras de trabalho.",
      en: "Official Credential from Notion Labs validating proficiency in translating conceptual workflows into dynamic, automated operational systems.\n\n• Issue Date: September 2025 (Expires: September 2027)\n• Institution: Notion Labs, Inc.\n• Official Verification: verify.skilljar.com/c/mr79shtf6cwu\n\nSkills & Topics Mastered:\n- Native automated workflows with multi-action triggers and conditional branching\n- Building end-to-end task pipelines, sprint tracking, and review mechanisms\n- Interconnecting data pipelines across departmental workspaces\n- Operational bottleneck elimination and standardized production pipelines.",
    },
  },

  {
    id: "cert-notion-essentials",
    name: { "pt": "Notion Essentials Certified", "en": "Notion Essentials Certified" },
    institution: "Notion",
    year: "2025",
    issueDate: "2025-09-01",
    credentialCode: "gj6rciabrjxu",
    credentialUrl: "https://verify.skilljar.com/c/gj6rciabrjxu",
    icon: "certificate",
    gradient: ["#3f3f46", "#52525b"],
    tags: { "pt": [ "Notion Essentials", "Produtividade", "Organização" ], "en": [ "Notion Essentials", "Productivity", "Organization" ] },
    summary: {
      pt: "Certificação oficial emitida pela Notion Labs validando as competências fundamentais na estruturação e navegação do ecossistema Notion.\n\n• Data de Emissão: Setembro de 2025 (Validade: Setembro de 2027)\n• Instituição: Notion Labs, Inc.\n• Validação Oficial: verify.skilljar.com/c/gj6rciabrjxu\n\nCompetências e Tópicos Dominados:\n- Estruturação de páginas dinâmicas, blocos avançados e templates modulares\n- Criação e configuração de bancos de dados com visualizações de Tabela, Quadro, Linha do Tempo e Calendário\n- Filtros compostos, agrupamentos e ordenações dinâmicas\n- Princípios ergonômicos de organização de informações pessoais e colaborativas.",
      en: "Official Foundation Credential from Notion Labs demonstrating core competencies in workspace architecture and content delivery.\n\n• Issue Date: September 2025 (Expires: September 2027)\n• Institution: Notion Labs, Inc.\n• Official Verification: verify.skilljar.com/c/gj6rciabrjxu\n\nSkills & Topics Mastered:\n- Dynamic page architecture, structural blocks, and modular page templates\n- Database design utilizing Table, Board, Timeline, List, and Calendar views\n- Compound filtering, multi-level sorting, and custom groupings\n- Ergonomic principles of collaborative information organization.",
    },
  },

  {
    id: "cert-descomplica-cloud",
    name: { "pt": "Cloud Plataform", "en": "Cloud Platform" },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    issueDate: "2025-08-01",
    credentialCode: "64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff",
    icon: "graduation",
    gradient: ["#0ea5e9", "#0284c7"],
    tags: { "pt": [ "Cloud Computing", "Redes", "Descomplica" ], "en": [ "Cloud Computing", "Networking", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Cloud Plataform pelo curso de Ciência da Computação da Faculdade Descomplica.\n\n• Período de Emissão: Agosto de 2025\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: 64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff\n\nCompetências e Tópicos Dominados:\n- Fundamentos de Computação em Nuvem e modelos de serviço (IaaS, PaaS, SaaS)\n- Arquitetura de redes em nuvem, VPCs, sub-redes, roteamento e firewalls de borda\n- Escalabilidade horizontal, Load Balancers e armazenamento distribuído (Object Storage e Block Storage)\n- Boas práticas de segurança em nuvem e governança de custos computacionais.",
      en: "Academic Certificate in Cloud Platform engineering from Faculdade Descomplica.\n\n• Issue Date: August 2025\n• Institution: Descomplica Faculdade Digital\n• Validation Code: 64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff\n\nSkills & Topics Mastered:\n- Cloud computing paradigms and service delivery models (IaaS, PaaS, SaaS)\n- Cloud networking infrastructure, VPC routing, subnets, and security groups\n- High availability architecture, load balancing, and distributed storage\n- Identity management, cloud governance, and cost optimization strategies.",
    },
  },

  {
    id: "cert-origamid-cssgrid",
    name: { "pt": "CSS Grid Layout", "en": "CSS Grid Layout" },
    institution: "Origamid",
    year: "2025",
    issueDate: "2025-05-01",
    hours: 10,
    credentialCode: "7851eeda",
    credentialUrl: "https://www.origamid.com/certificate/7851eeda",
    icon: "certificate",
    gradient: ["#8b5cf6", "#6d28d9"],
    tags: { "pt": [ "CSS Grid", "UI Layout", "Origamid", "10h" ], "en": [ "CSS Grid", "UI Layout", "Origamid", "10h" ] },
    summary: {
      pt: "Especialização técnica em diagramação bidimensional avançada com CSS Grid Layout ministrada pela Origamid.\n\n• Carga Horária: 10 horas\n• Período de Conclusão: Maio de 2025\n• Instituição: Origamid (CNPJ 23.811.568/0001-98)\n• Validação Oficial: origamid.com/certificate/7851eeda\n\nCompetências e Tópicos Dominados:\n- Grid container e itens: grid-template-columns, grid-template-rows e fr units\n- Posicionamento avançado com grid-template-areas e alinhamento bidimensional\n- Funções nativas minmax(), repeat(), auto-fit e auto-fill para interfaces fluidas\n- Redução de complexidade de código CSS dispensando dependência de frameworks.",
      en: "Technical specialization in advanced two-dimensional layout design with CSS Grid Layout by Origamid.\n\n• Workload: 10 hours\n• Completion: May 2025\n• Institution: Origamid (CNPJ 23.811.568/0001-98)\n• Official Verification: origamid.com/certificate/7851eeda\n\nSkills & Topics Mastered:\n- Grid container architecture: grid-template-columns, rows, and fractional units\n- Visual template mapping via grid-template-areas and coordinate positioning\n- Fluid responsiveness using minmax(), repeat(), auto-fit, and auto-fill\n- Clean CSS implementation without unnecessary framework bloat.",
    },
  },

  {
    id: "cert-descomplica-mobile",
    name: { "pt": "Mobile Developer", "en": "Mobile Developer" },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    issueDate: "2025-05-01",
    credentialCode: "c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0",
    icon: "graduation",
    gradient: ["#8b5cf6", "#7c3aed"],
    tags: { "pt": [ "Mobile", "App Architecture", "Descomplica" ], "en": [ "Mobile", "App Architecture", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Mobile Development pelo curso de Ciência da Computação da Faculdade Descomplica.\n\n• Período de Emissão: Maio de 2025\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0\n\nCompetências e Tópicos Dominados:\n- Arquitetura de aplicações móveis e ciclo de vida de telas e componentes\n- Design responsivo adaptável a múltiplos formatos de displays móveis e densidades de pixels\n- Consumo assíncrono de APIs externas e persistência local de dados em dispositivos\n- Otimização de consumo de bateria, renderização fluida e boas práticas de UX móvel.",
      en: "Academic Certificate in Mobile Development from Faculdade Descomplica.\n\n• Issue Date: May 2025\n• Institution: Descomplica Faculdade Digital\n• Validation Code: c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0\n\nSkills & Topics Mastered:\n- Mobile application architecture and view-controller lifecycles\n- Responsive viewport adaptation across disparate screen ratios and densities\n- Local offline data caching and asynchronous REST API integration\n- Battery-efficiency optimization, smooth framerates, and mobile ergonomics.",
    },
  },

  {
    id: "cert-origamid-cssflexbox",
    name: { "pt": "CSS Flexbox", "en": "CSS Flexbox" },
    institution: "Origamid",
    year: "2025",
    issueDate: "2025-04-01",
    hours: 6,
    credentialCode: "f3d3262a",
    credentialUrl: "https://www.origamid.com/certificate/f3d3262a",
    icon: "certificate",
    gradient: ["#a855f7", "#7e22ce"],
    tags: { "pt": [ "CSS Flexbox", "UI Design", "Origamid", "6h" ], "en": [ "CSS Flexbox", "UI Design", "Origamid", "6h" ] },
    summary: {
      pt: "Especialização em alinhamento unidimensional moderno com CSS Flexbox ministrada pela Origamid.\n\n• Carga Horária: 6 horas\n• Conclusão: Abril de 2025\n• Instituição: Origamid (CNPJ 23.811.568/0001-98)\n• Validação Oficial: origamid.com/certificate/f3d3262a\n\nCompetências e Tópicos Dominados:\n- Domínio do eixo principal (main axis) e transversal (cross axis)\n- Distribuição espacial com justify-content, align-items e align-content\n- Propriedades de dimensionamento elástico: flex-grow, flex-shrink e flex-basis\n- Criação de headers, barras de navegação e componentes flexíveis sem quebras de layout.",
      en: "Specialized training in one-dimensional CSS Flexbox layout mechanics by Origamid.\n\n• Workload: 6 hours\n• Completion: April 2025\n• Institution: Origamid (CNPJ 23.811.568/0001-98)\n• Official Verification: origamid.com/certificate/f3d3262a\n\nSkills & Topics Mastered:\n- Main axis and cross axis directional mechanics\n- Spatial alignment via justify-content, align-items, and align-content\n- Elastic sizing parameters: flex-grow, flex-shrink, and flex-basis\n- Building robust navigation menus, sticky headers, and scalable components.",
    },
  },

  {
    id: "cert-origamid-htmlcss",
    name: { "pt": "HTML e CSS para Iniciantes", "en": "HTML & CSS for Beginners" },
    institution: "Origamid",
    year: "2025",
    issueDate: "2025-04-01",
    hours: 46,
    credentialCode: "b2a468aa",
    credentialUrl: "https://www.origamid.com/certificate/b2a468aa",
    icon: "certificate",
    gradient: ["#f97316", "#c2410c"],
    tags: { "pt": [ "HTML5", "CSS3", "Semântica", "Origamid", "46h" ], "en": [ "HTML5", "CSS3", "Semantics", "Origamid", "46h" ] },
    summary: {
      pt: "Formação completa em estruturação semântica, estilização e fundamentos da web moderna pela Origamid.\n\n• Carga Horária: 46 horas\n• Conclusão: Abril de 2025\n• Instituição: Origamid (CNPJ 23.811.568/0001-98)\n• Validação Oficial: origamid.com/certificate/b2a468aa\n\nCompetências e Tópicos Dominados:\n- Marcação semântica estrita (header, nav, main, section, article, aside, footer)\n- Box Model completo (content, padding, border, margin), cascata, especificidade e herança\n- Tipografia web responsiva, variáveis nativas em CSS e organização modular de estilos\n- Acessibilidade web fundamental (contrastes de cor e atributos ARIA essenciais).",
      en: "Comprehensive foundation in semantic structuring, styling, and modern web architecture by Origamid.\n\n• Workload: 46 hours\n• Completion: April 2025\n• Institution: Origamid (CNPJ 23.811.568/0001-98)\n• Official Verification: origamid.com/certificate/b2a468aa\n\nSkills & Topics Mastered:\n- Strict semantic document outlining (header, nav, main, section, article, aside, footer)\n- CSS Box Model mechanics, selector specificity calculation, cascade, and inheritance\n- Responsive web typography, CSS Custom Properties, and modular stylesheets\n- Fundamental web accessibility (color contrast ratios and essential ARIA tags).",
    },
  },

  {
    id: "cert-descomplica-smart-data",
    name: { "pt": "Smart Data Structures", "en": "Smart Data Structures" },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    issueDate: "2025-01-01",
    credentialCode: "cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6",
    icon: "graduation",
    gradient: ["#14b8a6", "#0d9488"],
    tags: { "pt": [ "Estruturas de Dados", "Algoritmos", "Descomplica" ], "en": [ "Data Structures", "Algorithms", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Smart Data Structures pelo curso de Ciência da Computação da Faculdade Descomplica.\n\n• Período de Emissão: Janeiro de 2025\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6\n\nCompetências e Tópicos Dominados:\n- Estruturas de dados lineares e dinâmicas: Listas encadeadas, pilhas (stacks) e filas (queues)\n- Árvores de busca binária (BST), balanceamento de árvores e tabelas hash\n- Análise assintótica de complexidade de tempo e espaço (Notação Big-O)\n- Algoritmos clássicos de ordenação (MergeSort, QuickSort) e busca eficiente.",
      en: "Academic Certificate in Smart Data Structures from the Computer Science program at Faculdade Descomplica.\n\n• Issue Date: January 2025\n• Institution: Descomplica Faculdade Digital\n• Validation Code: cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6\n\nSkills & Topics Mastered:\n- Dynamic data structures: Singly and doubly linked lists, stacks, and queues\n- Binary Search Trees (BST), tree balancing concepts, and hash table lookup optimization\n- Asymptotic computational complexity analysis (Big-O notation)\n- Sorting algorithms (MergeSort, QuickSort) and efficient search algorithms.",
    },
  },

  {
    id: "cert-oracle-one-t7",
    name: { "pt": "Oracle Next Education (ONE) - Turma 7", "en": "Oracle Next Education (ONE) - Cohort 7" },
    institution: "Oracle / Alura",
    year: "2024",
    issueDate: "2024-12-01",
    credentialCode: "fa3a14f2-3bed-4a00-8d2e-cef44db4e919",
    credentialUrl: "https://cursos.alura.com.br/program/certificate/fa3a14f2-3bed-4a00-8d2e-cef44db4e919",
    icon: "graduation",
    gradient: ["#ef4444", "#dc2626"],
    tags: { "pt": [ "Oracle ONE", "Java", "Backend", "Alura" ], "en": [ "Oracle ONE", "Java", "Backend", "Alura" ] },
    summary: {
      pt: "Programa integral de capacitação tecnológica de alta intensidade promovido pela Oracle em parceria com a Alura.\n\n• Conclusão: Dezembro de 2024\n• Programa: Oracle Next Education - Turma 7 (G7)\n• Validação Oficial: cursos.alura.com.br/program/certificate/fa3a14f2-3bed-4a00-8d2e-cef44db4e919\n\nCompetências e Tópicos Dominados:\n- Programação orientada a objetos rigorosa, herança, polimorfismo e encapsulamento em Java\n- Bancos de dados relacionais, modelagem de dados e operações SQL\n- Trabalho colaborativo em equipe com Git, branches e GitHub Pull Requests\n- Resolução de desafios de negócio e entregas em sprints ágeis.",
      en: "Intensive tech development program delivered by Oracle in strategic partnership with Alura.\n\n• Completion: December 2024\n• Program: Oracle Next Education - Cohort 7 (G7)\n• Official Verification: cursos.alura.com.br/program/certificate/fa3a14f2-3bed-4a00-8d2e-cef44db4e919\n\nSkills & Topics Mastered:\n- Rigorous Object-Oriented Programming (OOP), encapsulation, inheritance, and polymorphism in Java\n- Relational database schema design, indexing, and SQL queries\n- Collaborative Git workflows, feature branches, and Pull Requests on GitHub\n- Sprint deliveries and agile problem-solving methodology.",
    },
  },

  {
    id: "cert-oracle-react-g7",
    name: { "pt": "React G7 - ONE", "en": "React G7 - ONE" },
    institution: "Oracle / Alura",
    year: "2024",
    issueDate: "2024-12-01",
    credentialCode: "76dc9ce4-c788-4809-9ae2-9255fe306b36",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/76dc9ce4-c788-4809-9ae2-9255fe306b36",
    icon: "certificate",
    gradient: ["#06b6d4", "#0891b2"],
    tags: { "pt": [ "React", "Oracle ONE", "Alura", "Frontend" ], "en": [ "React", "Oracle ONE", "Alura", "Frontend" ] },
    summary: {
      pt: "Formação especializada em React.js no programa Oracle Next Education ministrada pela Alura.\n\n• Conclusão: Dezembro de 2024\n• Instituições: Oracle & Alura\n• Validação Oficial: cursos.alura.com.br/degree/certificate/76dc9ce4-c788-4809-9ae2-9255fe306b36\n\nCompetências e Tópicos Dominados:\n- Criação de SPAs modernas com componentes funcionais e React Hooks\n- Gerenciamento de estado de aplicação e comunicação entre componentes pais e filhos\n- Consumo assíncrono de APIs RESTful utilizando Fetch e Axios\n- Modularização de componentes e estilização escalável.",
      en: "Specialized training in modern React.js development within the Oracle Next Education program.\n\n• Completion: December 2024\n• Institutions: Oracle & Alura\n• Official Verification: cursos.alura.com.br/degree/certificate/76dc9ce4-c788-4809-9ae2-9255fe306b36\n\nSkills & Topics Mastered:\n- Building modern Single Page Applications (SPAs) with functional components and React Hooks\n- Component hierarchy state propagation and application state management\n- Asynchronous API interaction using Fetch and Axios\n- Modular component structuring and maintainable UI architecture.",
    },
  },

  {
    id: "cert-oracle-frontend-g7",
    name: { "pt": "Formação Front End G7 - ONE", "en": "Front End Program G7 - ONE" },
    institution: "Oracle / Alura",
    year: "2024",
    issueDate: "2024-10-01",
    credentialCode: "c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc?lang",
    icon: "graduation",
    gradient: ["#f97316", "#ea580c"],
    tags: { "pt": [ "Front End", "Oracle ONE", "JavaScript", "Alura" ], "en": [ "Front End", "Oracle ONE", "JavaScript", "Alura" ] },
    summary: {
      pt: "Formação completa em tecnologias essenciais do Front-End pelo programa Oracle Next Education.\n\n• Conclusão: Outubro de 2024\n• Instituições: Oracle & Alura\n• Validação Oficial: cursos.alura.com.br/degree/certificate/c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc\n\nCompetências e Tópicos Dominados:\n- JavaScript puro moderno: manipulação dinâmica de elementos no DOM e assincronismo\n- Construção de páginas web com design responsivo (Mobile First) e Media Queries\n- Boas práticas de semântica e acessibilidade estrutural\n- Integração de projetos Front-End com controle de versão Git.",
      en: "Complete Front-End engineering career track in the Oracle Next Education curriculum.\n\n• Completion: October 2024\n• Institutions: Oracle & Alura\n• Official Verification: cursos.alura.com.br/degree/certificate/c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc\n\nSkills & Topics Mastered:\n- Modern vanilla JavaScript: DOM manipulation, asynchronous programming, and event listeners\n- Mobile-First responsive web design techniques with CSS media queries\n- Semantic HTML and accessibility best practices\n- Version control integration with Git and collaborative repositories.",
    },
  },

  {
    id: "cert-descomplica-oop",
    name: { "pt": "Object Oriented Programming", "en": "Object Oriented Programming" },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    issueDate: "2024-10-01",
    credentialCode: "5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900",
    icon: "graduation",
    gradient: ["#84cc16", "#65a30d"],
    tags: { "pt": [ "POO", "Java", "Descomplica" ], "en": [ "OOP", "Java", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Programação Orientada a Objetos pela Faculdade Descomplica.\n\n• Período de Emissão: Outubro de 2024\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: 5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900\n\nCompetências e Tópicos Dominados:\n- Os quatro pilares da POO: Abstração, Encapsulamento, Herança e Polimorfismo\n- Criação de classes, objetos, construtores e gerenciamento de visibilidade de membros\n- Interfaces, classes abstratas e tratamento robusto de exceções em tempo de execução\n- Modelagem de domínio orientada a objetos para sistemas corporativos robustos.",
      en: "Academic Certificate in Object-Oriented Programming from Faculdade Descomplica.\n\n• Issue Date: October 2024\n• Institution: Descomplica Faculdade Digital\n• Validation Code: 5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900\n\nSkills & Topics Mastered:\n- Four core OOP pillars: Abstraction, Encapsulation, Inheritance, and Polymorphism\n- Class structures, constructors, object lifecycle, and member access scoping\n- Interfaces, abstract classes, and resilient runtime exception handling\n- Domain-driven object modeling for scalable corporate systems.",
    },
  },

  {
    id: "cert-oracle-empreendedorismo-g7",
    name: { "pt": "Empreendedorismo, Agilidade e Protagonismo G7 - ONE", "en": "Entrepreneurship, Agility & Career Ownership G7 - ONE" },
    institution: "Oracle / Alura",
    year: "2024",
    issueDate: "2024-09-01",
    credentialCode: "e167b435-1256-423c-985e-281fe11ca58c",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/e167b435-1256-423c-985e-281fe11ca58c?lang",
    icon: "certificate",
    gradient: ["#eab308", "#ca8a04"],
    tags: { "pt": [ "Agilidade", "Soft Skills", "Oracle ONE", "Alura" ], "en": [ "Agility", "Soft Skills", "Oracle ONE", "Alura" ] },
    summary: {
      pt: "Formação executiva em desenvolvimento profissional e metodologias ágeis do programa Oracle Next Education.\n\n• Conclusão: Setembro de 2024\n• Instituições: Oracle & Alura\n• Validação Oficial: cursos.alura.com.br/degree/certificate/e167b435-1256-423c-985e-281fe11ca58c\n\nCompetências e Tópicos Dominados:\n- Fundamentos de Metodologias Ágeis: Scrum, cerimônias, papéis e gestão de fluxo com Kanban\n- Protagonismo na carreira e postura proativa em equipes de tecnologia multidisciplinares\n- Comunicação assertiva, inteligência interpessoal e resolução colaborativa de conflitos\n- Planejamento estratégico individual e definição orientada de metas profissionais.",
      en: "Executive and agile methodologies professional training in the Oracle Next Education program.\n\n• Completion: September 2024\n• Institutions: Oracle & Alura\n• Official Verification: cursos.alura.com.br/degree/certificate/e167b435-1256-423c-985e-281fe11ca58c\n\nSkills & Topics Mastered:\n- Agile delivery frameworks: Scrum ceremonies, team roles, and Kanban board management\n- Career ownership and leadership mindset in cross-functional engineering teams\n- Assertive professional communication and collaborative conflict resolution\n- Strategic self-development planning and objective-driven delivery.",
    },
  },

  {
    id: "cert-descomplica-prog-languages",
    name: { "pt": "Programming Languages", "en": "Programming Languages" },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    issueDate: "2024-08-01",
    credentialCode: "7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48",
    icon: "graduation",
    gradient: ["#3b82f6", "#2563eb"],
    tags: { "pt": [ "Linguagens", "Paradigmas", "Descomplica" ], "en": [ "Languages", "Paradigms", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Teoria e Paradigmas de Linguagens de Programação pela Faculdade Descomplica.\n\n• Período de Emissão: Agosto de 2024\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: 7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48\n\nCompetências e Tópicos Dominados:\n- Análise comparativa de paradigmas de programação (imperativo, orientado a objetos e funcional)\n- Compilação vs. Interpretação, sistemas de tipos estáticos e dinâmicos\n- Gerenciamento de memória, stack, heap e estratégias de Garbage Collection\n- Circuitos lógicos e representação de instruções computacionais de baixo nível.",
      en: "Academic Certificate in Programming Language Theory & Paradigms from Faculdade Descomplica.\n\n• Issue Date: August 2024\n• Institution: Descomplica Faculdade Digital\n• Validation Code: 7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48\n\nSkills & Topics Mastered:\n- Comparative paradigm analysis (imperative, functional, and object-oriented)\n- Compilation versus interpretation, static vs. dynamic type systems\n- Memory allocation mechanics, stack/heap spaces, and Garbage Collection\n- Digital logic circuits and low-level machine instruction architectures.",
    },
  },

  {
    id: "cert-oracle-iniciante-t7",
    name: { "pt": "Iniciante em Programação - Oracle ONE T7", "en": "Programming Beginner - Oracle ONE Cohort 7" },
    institution: "Oracle / Alura",
    year: "2024",
    issueDate: "2024-07-01",
    credentialCode: "29b2ac09-6fdc-4d67-a630-be979766d5a2",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/29b2ac09-6fdc-4d67-a630-be979766d5a2",
    icon: "graduation",
    gradient: ["#ec4899", "#db2777"],
    tags: { "pt": [ "Lógica", "JavaScript", "Oracle ONE", "Alura" ], "en": [ "Logic", "JavaScript", "Oracle ONE", "Alura" ] },
    summary: {
      pt: "Formação introdutória e estrutural em lógica computacional e programação no programa Oracle Next Education.\n\n• Conclusão: Julho de 2024\n• Instituições: Oracle & Alura\n• Validação Oficial: cursos.alura.com.br/degree/certificate/29b2ac09-6fdc-4d67-a630-be979766d5a2\n\nCompetências e Tópicos Dominados:\n- Lógica de programação computacional e resolução metódica de problemas\n- Sintaxe fundamental de JavaScript, variáveis, estruturas condicionais e laços de repetição\n- Manipulação inicial do DOM no navegador com HTML e CSS integrados\n- Primeiras aplicações interativas desenvolvidas com raciocínio algorítmico rigoroso.",
      en: "Introductory logic and algorithmic foundation track in the Oracle Next Education program.\n\n• Completion: July 2024\n• Institutions: Oracle & Alura\n• Official Verification: cursos.alura.com.br/degree/certificate/29b2ac09-6fdc-4d67-a630-be979766d5a2\n\nSkills & Topics Mastered:\n- Algorithmic problem-solving and structured program flow\n- JavaScript syntax fundamentals, control structures, and loops\n- Browser DOM manipulation using integrated HTML and CSS\n- Building interactive scripts with clean logical architecture.",
    },
  },

  {
    id: "cert-alura-logica-js",
    name: { "pt": "Lógica de Programação: Mergulhe em JavaScript", "en": "Logic of Programming: Dive into JavaScript" },
    institution: "Alura",
    year: "2024",
    issueDate: "2024-06-01",
    credentialCode: "52a1daf5-1817-48df-89b6-89ba157a256c",
    credentialUrl: "https://cursos.alura.com.br/certificate/52a1daf5-1817-48df-89b6-89ba157a256c?lang",
    icon: "certificate",
    gradient: ["#f59e0b", "#d97706"],
    tags: { "pt": [ "Lógica", "JavaScript", "Alura" ], "en": [ "Logic", "JavaScript", "Alura" ] },
    summary: {
      pt: "Curso imersivo de fundamentos em lógica algorítmica utilizando JavaScript ministrado pela Alura.\n\n• Conclusão: Junho de 2024\n• Instituição: Alura\n• Validação Oficial: cursos.alura.com.br/certificate/52a1daf5-1817-48df-89b6-89ba157a256c\n\nCompetências e Tópicos Dominados:\n- Estruturação lógica de algoritmos, variáveis, operadores relacionais e lógicos\n- Fluxos de repetição (while, for), condicionais (if, else) e tratamento de entradas de usuário\n- Depuração de código, console.log estratégico e prevenção de loops infinitos\n- Construção de jogos simples e aplicações de console interativas.",
      en: "Immersive foundational course in programmatic logic using JavaScript delivered by Alura.\n\n• Completion: June 2024\n• Institution: Alura\n• Official Verification: cursos.alura.com.br/certificate/52a1daf5-1817-48df-89b6-89ba157a256c\n\nSkills & Topics Mastered:\n- Algorithmic structure, variable scoping, and logical/relational operators\n- Control flow loops (while, for), branching conditionals, and user prompt handling\n- Strategic debugging techniques and infinite loop mitigation\n- Developing console-driven interactive utilities and games.",
    },
  },

  {
    id: "cert-ada-datascience",
    name: { "pt": "Data Science - Trilha Digital Coders 24", "en": "Data Science - Digital Path Coders 24" },
    institution: "Ada Tech",
    year: "2024",
    issueDate: "2024-06-01",
    credentialCode: "40dd85d2-ed6c-a240-2a61-b67267119b8e",
    credentialUrl: "https://ada.tech/certificado?code=40dd85d2-ed6c-a240-2a61-b67267119b8e",
    icon: "certificate",
    gradient: ["#14b8a6", "#0f766e"],
    tags: { "pt": [ "Data Science", "Estatística", "Ada Tech" ], "en": [ "Data Science", "Statistics", "Ada Tech" ] },
    summary: {
      pt: "Formação técnica em análise exploratória de dados e fundamentos de Data Science pela Ada Tech.\n\n• Ano de Conclusão: Junho de 2024\n• Programa: Trilha Digital Coders 24\n• Instituição: Ada Tech\n• Validação Oficial: ada.tech/certificado?code=40dd85d2-ed6c-a240-2a61-b67267119b8e\n\nCompetências e Tópicos Dominados:\n- Análise Exploratória de Dados (EDA) e limpeza de dados (data wrangling)\n- Estatística descritiva (medidas de tendência central, dispersão e correlação)\n- Manipulação e transformação de datasets estruturados\n- Visualização de dados para geração de insights e tomada de decisão fundamentada.",
      en: "Technical foundation in exploratory data analysis and data science principles delivered by Ada Tech.\n\n• Completion: June 2024\n• Program: Trilha Digital Coders 24\n• Institution: Ada Tech\n• Official Verification: ada.tech/certificado?code=40dd85d2-ed6c-a240-2a61-b67267119b8e\n\nSkills & Topics Mastered:\n- Exploratory Data Analysis (EDA) and robust dataset wrangling\n- Descriptive statistics (central tendency, dispersion measures, and correlation)\n- Structured dataset transformation and analytical filtering\n- Data visualization techniques for communicating metric-driven insights.",
    },
  },

  {
    id: "cert-descomplica-software-req",
    name: { "pt": "Software Requirements", "en": "Software Requirements" },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    issueDate: "2024-05-01",
    credentialCode: "52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7",
    icon: "graduation",
    gradient: ["#6366f1", "#4f46e5"],
    tags: { "pt": [ "Engenharia de Requisitos", "UML", "Descomplica" ], "en": [ "Requirements Engineering", "UML", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Engenharia de Requisitos de Software pela Faculdade Descomplica.\n\n• Período de Emissão: Maio de 2024\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: 52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7\n\nCompetências e Tópicos Dominados:\n- Elicitação, análise, especificação e validação de requisitos funcionais e não-funcionais\n- Modelagem visual com diagramas UML (Diagrama de Casos de Uso, Diagrama de Classes e Atividades)\n- Criação de Histórias de Usuário (User Stories) com critérios de aceitação claros\n- Matrizes de rastreabilidade de requisitos para controle de escopo e qualidade.",
      en: "Academic Certificate in Software Requirements Engineering from Faculdade Descomplica.\n\n• Issue Date: May 2024\n• Institution: Descomplica Faculdade Digital\n• Validation Code: 52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7\n\nSkills & Topics Mastered:\n- Functional and non-functional requirements elicitation, specification, and validation\n- UML visual modeling (Use Case diagrams, Class diagrams, Activity flows)\n- Writing structured User Stories with unambiguous acceptance criteria\n- Requirements traceability matrix management for scope control.",
    },
  },

  {
    id: "cert-descomplica-softskills",
    name: { "pt": "Soft Skills com Porta dos Fundos", "en": "Soft Skills with Porta dos Fundos" },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    issueDate: "2024-03-01",
    credentialCode: "82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991",
    icon: "graduation",
    gradient: ["#f43f5e", "#e11d48"],
    tags: { "pt": [ "Soft Skills", "Comunicação", "Descomplica" ], "en": [ "Soft Skills", "Communication", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em competências socioemocionais e comportamentais pela Faculdade Descomplica em parceria com o Porta dos Fundos.\n\n• Período de Emissão: Março de 2024\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: 82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991\n\nCompetências e Tópicos Dominados:\n- Comunicação interpessoal autêntica, empatia e escuta ativa no ambiente corporativo\n- Inteligência emocional, gestão de pressão e adaptabilidade a cenários dinâmicos\n- Pensamento crítico, criatividade na solução de problemas complexos\n- Trabalho colaborativo em equipes multidisciplinares com segurança psicológica.",
      en: "Academic Certificate in behavioral and interpersonal competencies by Faculdade Descomplica in partnership with Porta dos Fundos.\n\n• Issue Date: March 2024\n• Institution: Descomplica Faculdade Digital\n• Validation Code: 82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991\n\nSkills & Topics Mastered:\n- Authentic interpersonal communication, empathy, and active listening\n- Emotional intelligence, composure under pressure, and dynamic adaptability\n- Critical thinking and creative problem-solving methods\n- Collaborative teamwork in multidisciplinary tech environments.",
    },
  },

  {
    id: "cert-descomplica-produtividade",
    name: { "pt": "Productivity and Organization", "en": "Productivity and Organization" },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    issueDate: "2024-03-01",
    credentialCode: "f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66",
    icon: "graduation",
    gradient: ["#10b981", "#059669"],
    tags: { "pt": [ "Produtividade", "Organização", "Descomplica" ], "en": [ "Productivity", "Organization", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Gestão de Produtividade e Organização pela Faculdade Descomplica.\n\n• Período de Emissão: Março de 2024\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66\n\nCompetências e Tópicos Dominados:\n- Metodologias de gestão de tempo e priorização (Matriz de Eisenhower, GTD e Pomodoro)\n- Planejamento estratégico de rotinas operacionais e eliminação de desperdícios\n- Ferramentas digitais para organização de fluxo de trabalho e documentação\n- Gestão de energia pessoal e prevenção de sobrecarga cognitiva.",
      en: "Academic Certificate in Personal Productivity & Work Organization from Faculdade Descomplica.\n\n• Issue Date: March 2024\n• Institution: Descomplica Faculdade Digital\n• Validation Code: f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66\n\nSkills & Topics Mastered:\n- Time management and prioritization frameworks (Eisenhower Matrix, GTD, Pomodoro)\n- Strategic operational routine planning and workflow optimization\n- Digital organization and documentation systems\n- Focus management and cognitive load balancing.",
    },
  },

  {
    id: "cert-descomplica-intro-web",
    name: { "pt": "Introdução ao Desenvolvimento Web", "en": "Introduction to Web Development" },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    issueDate: "2024-03-01",
    credentialCode: "ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca",
    icon: "graduation",
    gradient: ["#0284c7", "#0369a1"],
    tags: { "pt": [ "Web", "HTML & CSS", "Descomplica" ], "en": [ "Web", "HTML & CSS", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Fundamentos do Desenvolvimento Web pelo curso de Ciência da Computação da Faculdade Descomplica.\n\n• Período de Emissão: Março de 2024\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca\n\nCompetências e Tópicos Dominados:\n- Arquitetura da Web: Modelo cliente-servidor, protocolo HTTP/HTTPS, DNS e requisições web\n- Estruturação semântica de páginas com HTML5\n- Estilização visual, seletores e regras de cascata com CSS3\n- Princípios de responsividade e renderização nos navegadores modernos.",
      en: "Academic Certificate in Web Development Foundations from Faculdade Descomplica.\n\n• Issue Date: March 2024\n• Institution: Descomplica Faculdade Digital\n• Validation Code: ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca\n\nSkills & Topics Mastered:\n- Web architecture: Client-Server architecture, HTTP/HTTPS protocols, and DNS\n- Semantic page structuring with HTML5\n- Styling fundamentals, CSS selector hierarchies, and cascade rules\n- Responsiveness basics and browser layout rendering.",
    },
  },

  {
    id: "cert-descomplica-frontend",
    name: { "pt": "FrontEnd Development", "en": "FrontEnd Development" },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    issueDate: "2024-02-01",
    credentialCode: "ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d",
    icon: "graduation",
    gradient: ["#06b6d4", "#0e7490"],
    tags: { "pt": [ "Frontend", "JavaScript", "Descomplica" ], "en": [ "Frontend", "JavaScript", "Descomplica" ] },
    summary: {
      pt: "Certificado curricular em Desenvolvimento Front-End pela Faculdade Descomplica.\n\n• Período de Emissão: Fevereiro de 2024\n• Instituição: Descomplica Faculdade Digital\n• Código de Validação: ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d\n\nCompetências e Tópicos Dominados:\n- Desenvolvimento de interfaces ricas com JavaScript dinâmico\n- Interação com eventos de usuário, validação em tempo real de formulários\n- Integração e consumo de dados de serviços web externos via Fetch\n- Organização e modularização de código Front-End escalável.",
      en: "Academic Certificate in Front-End Development from Faculdade Descomplica.\n\n• Issue Date: February 2024\n• Institution: Descomplica Faculdade Digital\n• Validation Code: ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d\n\nSkills & Topics Mastered:\n- Dynamic interface implementation using JavaScript\n- User interaction event handling and real-time form validation\n- External web service integration and data fetching\n- Scalable and modular front-end code organization.",
    },
  },

  {
    id: "cert-dio-angular",
    name: { "pt": "FrontEnd Development with Angular", "en": "FrontEnd Development with Angular" },
    institution: "Digital Innovation One (DIO)",
    year: "2024",
    issueDate: "2024-02-01",
    credentialCode: "V87KIBKV",
    credentialUrl: "https://www.dio.me/certificate/V87KIBKV",
    icon: "certificate",
    gradient: ["#e11d48", "#9f1239"],
    tags: { "pt": [ "Angular", "TypeScript", "DIO", "Frontend" ], "en": [ "Angular", "TypeScript", "DIO", "Frontend" ] },
    summary: {
      pt: "Bootcamp de formação técnica em desenvolvimento frontend com o ecossistema Angular na Digital Innovation One.\n\n• Ano de Conclusão: Fevereiro de 2024\n• Instituição: Digital Innovation One (DIO)\n• Código de Validação: V87KIBKV\n• Validação Oficial: dio.me/certificate/V87KIBKV\n\nCompetências e Tópicos Dominados:\n- Arquitetura de Componentes, Diretivas estruturais e Pipes customizados\n- Injeção de dependência hierárquica e organização de Services no Angular\n- Programação reativa com RxJS (Observables, Subjects, transform operators)\n- Comunicação com APIs RESTful via HttpClient com tratamento de erros e interceptors\n- Sistema de rotas com Route Guards (CanActivate) e Lazy Loading de módulos.",
      en: "Technical frontend training bootcamp focusing on the Angular enterprise framework at Digital Innovation One.\n\n• Year of Completion: February 2024\n• Institution: Digital Innovation One (DIO)\n• Validation Code: V87KIBKV\n• Official Verification: dio.me/certificate/V87KIBKV\n\nSkills & Topics Mastered:\n- Component architecture, structural directives, and custom pipes\n- Hierarchical dependency injection and service layer design\n- Reactive programming using RxJS (Observables, Subjects, transform operators)\n- RESTful HTTP communication via Angular HttpClient and request interceptors\n- Single Page Application routing, route guards (CanActivate), and feature module lazy loading.",
    },
  },

  {
    id: "cert-udemy-algoritmos-completo",
    name: { "pt": "Algoritmos e Lógica de Programação - O Curso COMPLETO", "en": "Algorithms & Programming Logic - Full Course" },
    institution: "Udemy / DevSuperior (Nelio Alves)",
    year: "2024",
    issueDate: "2024-01-01",
    credentialCode: "UC-916926ad-ae85-4574-8ae2-725becffbd6c",
    credentialUrl: "https://www.udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/",
    icon: "certificate",
    gradient: ["#a855f7", "#9333ea"],
    tags: { "pt": [ "Algoritmos", "Lógica", "Udemy", "DevSuperior" ], "en": [ "Algorithms", "Logic", "Udemy", "DevSuperior" ] },
    summary: {
      pt: "Formação completa e exaustiva em raciocínio algorítmico, lógica de programação e estruturas de dados lecionada pelo Prof. Dr. Nelio Alves.\n\n• Conclusão: Janeiro de 2024\n• Plataforma / Instrutor: Udemy / Prof. Dr. Nelio Alves (DevSuperior)\n• Código de Validação: UC-916926ad-ae85-4574-8ae2-725becffbd6c\n• Validação Oficial: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/\n\nCompetências e Tópicos Dominados:\n- Estruturação rigorosa de raciocínio computacional e testes de mesa completos\n- Domínio de estruturas sequenciais, condicionais e laços de repetição\n- Manipulação aprofundada de vetores e matrizes bidimensionais\n- Implementação de algoritmos práticos em C, C++, Java e C#.",
      en: "Exhaustive and rigorous mastery course in algorithmic logic and fundamental data structures taught by Prof. Dr. Nelio Alves.\n\n• Completion: January 2024\n• Platform / Instructor: Udemy / Prof. Dr. Nelio Alves (DevSuperior)\n• Validation Code: UC-916926ad-ae85-4574-8ae2-725becffbd6c\n• Official Verification: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/\n\nSkills & Topics Mastered:\n- Rigorous computational logic structuring and dry-run execution traces\n- Deep control flow mastery (sequential, conditional branches, loops)\n- In-depth manipulation of single and multi-dimensional arrays\n- Multi-language implementation across C, C++, Java, and C#.",
    },
  },

  {
    id: "cert-devsuperior-logica",
    name: { "pt": "Lógica de Programação e Estruturas de Dados", "en": "Logic of Programming & Data Structures" },
    institution: "DevSuperior",
    year: "2024",
    issueDate: "2024-01-01",
    credentialUrl: "https://www.udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/",
    icon: "graduation",
    gradient: ["#6366f1", "#4338ca"],
    tags: { "pt": [ "Algoritmos", "Lógica", "DevSuperior" ], "en": [ "Algorithms", "Logic", "DevSuperior" ] },
    summary: {
      pt: "Formação rigorosa em lógica computacional, estruturação de dados e resolução analítica de problemas ministrada pela escola DevSuperior.\n\n• Ano de Conclusão: Janeiro de 2024\n• Instituição: DevSuperior (Nelio Alves)\n• Validação Oficial: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/\n\nCompetências e Tópicos Dominados:\n- Estruturas de controle de fluxo: sequenciais, condicionais e laços de repetição\n- Estruturas de dados básicas: vetores e matrizes multidimensionais\n- Modularização de código, escopo de variáveis e passagem de parâmetros\n- Testes de mesa, rastreamento mental de algoritmos e técnicas de depuração.",
      en: "Rigorous training in computational logic, fundamental data structures, and algorithmic problem-solving taught by DevSuperior.\n\n• Year of Completion: January 2024\n• Institution: DevSuperior (Nelio Alves)\n• Official Verification: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/\n\nSkills & Topics Mastered:\n- Flow control logic: sequential, branching conditionals, and repetition loops\n- Essential data structures: vectors, arrays, and multidimensional matrices\n- Code modularization, variable scope, parameter passing, and functional decomposition\n- Dry runs, variable execution tracing, and systematic debugging methods.",
    },
  },

  {
    id: "cert-rocketseat-discover",
    name: { "pt": "Discover", "en": "Discover" },
    institution: "Rocketseat",
    year: "2023",
    issueDate: "2023-10-01",
    credentialCode: "83744a16-a446-4df6-9a62-5d042308a5f2",
    credentialUrl: "https://app.rocketseat.com.br/certificates/83744a16-a446-4df6-9a62-5d042308a5f2",
    icon: "certificate",
    gradient: ["#8b5cf6", "#6d28d9"],
    tags: { "pt": [ "Discover", "HTML", "Git", "Rocketseat" ], "en": [ "Discover", "HTML", "Git", "Rocketseat" ] },
    summary: {
      pt: "Formação completa da trilha Discover ministrada pela Rocketseat cobrindo toda a base do desenvolvimento de software para a web.\n\n• Conclusão: Outubro de 2023\n• Instituição: Rocketseat\n• Código da Credencial: 83744a16-a446-4df6-9a62-5d042308a5f2\n• Validação Oficial: app.rocketseat.com.br/certificates/83744a16-a446-4df6-9a62-5d042308a5f2\n\nCompetências e Tópicos Dominados:\n- Fundamentos aprofundados da web, DOM e JavaScript para interatividade\n- Controle de versão moderno com Git e repositórios remotos no GitHub\n- Arquitetura de layouts flexíveis e responsivos para navegadores\n- Resolução sistemática de desafios e construção de interfaces funcionais.",
      en: "Comprehensive graduation of the Discover track by Rocketseat covering foundational web software development.\n\n• Completion: October 2023\n• Institution: Rocketseat\n• Credential Code: 83744a16-a446-4df6-9a62-5d042308a5f2\n• Official Verification: app.rocketseat.com.br/certificates/83744a16-a446-4df6-9a62-5d042308a5f2\n\nSkills & Topics Mastered:\n- In-depth web foundations, DOM manipulation, and interactive JavaScript\n- Modern version control with Git and remote repository workflows on GitHub\n- Responsive and flexible layout architectures for modern browsers\n- Systematic problem solving and functional user interface implementation.",
    },
  },

  {
    id: "cert-rocketseat-conectar",
    name: { "pt": "Conectar", "en": "Conectar" },
    institution: "Rocketseat",
    year: "2023",
    issueDate: "2023-01-01",
    credentialCode: "2cee84ed-f001-4e3f-a65f-dff35afe655c",
    credentialUrl: "https://app.rocketseat.com.br/certificates/2cee84ed-f001-4e3f-a65f-dff35afe655c",
    icon: "certificate",
    gradient: ["#7c3aed", "#5b21b6"],
    tags: { "pt": [ "Fundamentos Web", "HTML", "CSS", "Rocketseat" ], "en": [ "Web Foundations", "HTML", "CSS", "Rocketseat" ] },
    summary: {
      pt: "Certificação do curso Conectar da trilha Discover ministrado pela Rocketseat.\n\n• Conclusão: Janeiro de 2023\n• Instituição: Rocketseat\n• Código da Credencial: 2cee84ed-f001-4e3f-a65f-dff35afe655c\n• Validação Oficial: app.rocketseat.com.br/certificates/2cee84ed-f001-4e3f-a65f-dff35afe655c\n\nCompetências e Tópicos Dominados:\n- Fundamentos de redes, funcionamento da internet e arquitetura cliente-servidor\n- Primeiros passos sólidos em marcação semântica com HTML5\n- Estilização, regras visuais e cascading com CSS3\n- Práticas fundamentais de código limpo e organização de arquivos na web.",
      en: "Certification of the Conectar course within the Discover educational track by Rocketseat.\n\n• Completion: January 2023\n• Institution: Rocketseat\n• Credential Code: 2cee84ed-f001-4e3f-a65f-dff35afe655c\n• Official Verification: app.rocketseat.com.br/certificates/2cee84ed-f001-4e3f-a65f-dff35afe655c\n\nSkills & Topics Mastered:\n- Networking fundamentals, how the web works, and client-server architecture\n- Foundational semantic structuring using HTML5\n- Styling rules and cascading mechanics with CSS3\n- Clean code best practices and web asset organization.",
    },
  }
];

/**
 * Returns all certifications formatted as ProjectItems for the phone/desktop grid
 * Ordered chronologically with the most recent certifications on top
 */
export function getCertifications(lang: Language = "br"): ProjectItem[] {
  const transMap = certificationsTranslations[lang] || certificationsTranslations["en"];
  const verifyTitle = VERIFY_LINK_TITLES[lang] || VERIFY_LINK_TITLES["en"];

  // Sort certifications by date descending (most recent first)
  const sorted = [...ALL_CERTIFICATIONS].sort((a, b) => {
    const dateA = a.issueDate || a.year;
    const dateB = b.issueDate || b.year;
    return dateB.localeCompare(dateA);
  });

  return sorted.map((cert) => {
    const localized = transMap?.[cert.id];
    const name = localized?.name || cert.name.en || cert.name.pt;
    const summary = localized?.summary || cert.summary.en || cert.summary.pt;
    const tags = localized?.tags || cert.tags.en || cert.tags.pt;

    const links: ProjectItem["links"] = [];

    if (cert.credentialUrl) {
      links.push({
        title: verifyTitle,
        url: cert.credentialUrl,
        icon: "certificate",
      });
    }

    return {
      type: "project",
      id: cert.id,
      name,
      icon: cert.icon,
      gradient: cert.gradient,
      summary,
      links,
      tags,
      lang,
    };
  });
}

/**
 * Finds a specific certification by ID
 */
export function getCertificationById(id: string, lang: Language = "br"): ProjectItem | undefined {
  return getCertifications(lang).find((c) => c.id === id);
}
