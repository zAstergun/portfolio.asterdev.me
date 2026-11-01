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
  hours?: number;
  credentialCode?: string;
  credentialUrl?: string;
  icon: "certificate" | "graduation";
  gradient: [string, string];
  tags: Record<"pt" | "en", string[]>;
  summary: Record<"pt" | "en", string>;
}

export const ALL_CERTIFICATIONS: CertificationDefinition[] = [
  // 1. Origamid Master Formação
  {
    id: "cert-origamid-master",
    name: {
      pt: "Front/Back End & UX/UI Design - Master Formação",
      en: "Full Stack & UX/UI Design - Master Specialization",
    },
    institution: "Origamid",
    year: "2026",
    hours: 194,
    credentialCode: "a0087404",
    credentialUrl: "https://www.origamid.com/certificate/a0087404",
    icon: "graduation",
    gradient: ["#00d8ff", "#6366f1"],
    tags: {
      pt: ["Full Stack", "UX/UI Design", "Origamid", "194h"],
      en: ["Full Stack", "UX/UI Design", "Origamid", "194h"],
    },
    summary: {
      pt: `Formação Master e abrangente ministrada pela Origamid, integrando engenharia Front-End moderna, Back-End e design de interfaces centrado no usuário.

• Carga Horária: 194 horas
• Conclusão: Junho de 2026
• Instituição: Origamid (CNPJ 23.811.568/0001-98)
• Validação Oficial: origamid.com/certificate/a0087404

Competências e Tópicos Dominados:
- Ecossistema Front-End: React, TypeScript, JavaScript ES6+, HTML5 semântico e CSS avançado
- Fundamentos de Back-End: APIs RESTful, integração assíncrona e arquitetura de dados
- UX/UI Design: Design Systems escaláveis, prototipação de alta fidelidade e ergonomia visual
- Performance de carregamento, responsividade fluida e acessibilidade web (WCAG).`,
      en: `Comprehensive Master curriculum provided by Origamid, integrating modern Front-End engineering, Back-End fundamentals, and user-centered UI/UX design.

• Workload: 194 hours
• Completion: June 2026
• Institution: Origamid (CNPJ 23.811.568/0001-98)
• Official Verification: origamid.com/certificate/a0087404

Skills & Topics Mastered:
- Modern Front-End ecosystem: React, TypeScript, JavaScript ES6+, semantic HTML5, and advanced CSS
- Back-End foundations: RESTful API architecture and asynchronous integration
- UI/UX Design: Scalable Design Systems, high-fidelity wireframing, and visual hierarchy
- Web performance optimization, fluid responsive layouts, and accessibility standards (WCAG).`,
    },
  },

  // 2. IoT Developer (Descomplica)
  {
    id: "cert-descomplica-iot",
    name: {
      pt: "IoT Developer",
      en: "IoT Developer",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    hours: 160,
    credentialCode: "160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f",
    icon: "graduation",
    gradient: ["#0284c7", "#0369a1"],
    tags: {
      pt: ["Internet das Coisas", "Hardware & Cloud", "Descomplica", "160h"],
      en: ["Internet of Things", "Hardware & Cloud", "Descomplica", "160h"],
    },
    summary: {
      pt: `Certificado curricular de Especialista em IoT Developer pelo curso de Bacharelado em Ciência da Computação da Descomplica Faculdade Digital.

• Carga Horária: 160 horas
• Data de Emissão: 07/10/2026 às 09:12
• Instituição: Descomplica Faculdade Digital / UniAmérica
• Nº de Registro Oficial: 160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f

Competências e Tópicos Dominados:
- Arquitetura de sistemas embarcados, microcontroladores e sensores IoT
- Protocolos de comunicação em rede de baixa latência (MQTT, CoAP, HTTP/WebSockets)
- Telemetria de dados em tempo real e integração com serviços de nuvem
- Padrões de segurança, criptografia e mitigação de vulnerabilidades em dispositivos IoT
- Construção de pipelines de dados entre sensores físicos e dashboards analíticos.`,
      en: `Academic Certificate of Specialization as IoT Developer from the Computer Science Bachelor program at Descomplica Faculdade Digital.

• Workload: 160 hours
• Date of Issue: 07/10/2026 at 09:12
• Institution: Descomplica Faculdade Digital / UniAmérica
• Official Registry ID: 160a4976b6a5ea9e304c9082d4d4722b4683fedd457609ef10edf230e4feb90f

Skills & Topics Mastered:
- Embedded systems architecture, microcontrollers, and IoT sensor networks
- Low-latency communication protocols (MQTT, CoAP, HTTP/WebSockets)
- Real-time telemetry data processing and cloud IoT service integration
- Security standards, device-level encryption, and hardware vulnerability management
- Building end-to-end data pipelines from physical hardware to analytical dashboards.`,
    },
  },

  // 3. IA Developer (Descomplica)
  {
    id: "cert-descomplica-ia",
    name: {
      pt: "IA Developer",
      en: "AI Developer",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    hours: 200,
    credentialCode: "44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5",
    icon: "graduation",
    gradient: ["#10b981", "#047857"],
    tags: {
      pt: ["Inteligência Artificial", "Deep Learning", "Descomplica", "200h"],
      en: ["Artificial Intelligence", "Deep Learning", "Descomplica", "200h"],
    },
    summary: {
      pt: `Certificado curricular de Especialista em IA Developer pelo curso de Bacharelado em Ciência da Computação da Descomplica Faculdade Digital.

• Carga Horária: 200 horas
• Data de Emissão: 11/08/2026 às 13:28
• Instituição: Descomplica Faculdade Digital / UniAmérica
• Nº de Registro Oficial: 44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5

Competências e Tópicos Dominados:
- Fundamentos matemáticos e estatísticos aplicados a Inteligência Artificial
- Algoritmos de Machine Learning supervisionado e não-supervisionado
- Redes Neurais Artificiais, Deep Learning e algoritmos de Backpropagation
- Processamento de Linguagem Natural (NLP) e arquiteturas de modelos modernos
- Visão Computacional, extração de features e classificação de imagens
- Avaliação de métricas (Precision, Recall, F1-Score, ROC-AUC) e otimização de hiperparâmetros.`,
      en: `Academic Certificate of Specialization as AI Developer from the Computer Science Bachelor program at Descomplica Faculdade Digital.

• Workload: 200 hours
• Date of Issue: 11/08/2026 at 13:28
• Institution: Descomplica Faculdade Digital / UniAmérica
• Official Registry ID: 44b3f3e0b08f00c33fb6ed5b1b599ae9fd791ccb2906adb10cfe370804f424d5

Skills & Topics Mastered:
- Mathematical and statistical foundations for Artificial Intelligence
- Supervised and unsupervised Machine Learning models
- Artificial Neural Networks, Deep Learning, and Backpropagation
- Natural Language Processing (NLP) and modern language model principles
- Computer Vision, feature extraction, and image classification
- Model evaluation metrics (Precision, Recall, F1, ROC-AUC) and hyperparameter tuning.`,
    },
  },

  // 4. TypeScript para Iniciantes (Origamid)
  {
    id: "cert-origamid-typescript",
    name: {
      pt: "TypeScript para Iniciantes",
      en: "TypeScript for Beginners",
    },
    institution: "Origamid",
    year: "2026",
    hours: 22,
    credentialCode: "de898dfe",
    credentialUrl: "https://www.origamid.com/certificate/de898dfe",
    icon: "certificate",
    gradient: ["#3178c6", "#1e40af"],
    tags: {
      pt: ["TypeScript", "Tipagem Estática", "Origamid", "22h"],
      en: ["TypeScript", "Static Typing", "Origamid", "22h"],
    },
    summary: {
      pt: `Especialização em tipagem estática e engenharia de software em TypeScript ministrada pela Origamid.

• Carga Horária: 22 horas
• Período de Realização: 21/06/2026 a 26/06/2026
• Instituição: Origamid (CNPJ 23.811.568/0001-98)
• Validação Oficial: origamid.com/certificate/de898dfe

Competências e Tópicos Dominados:
- Interfaces, Type Aliases e inferência estrita de tipos em tempo de compilação
- Generics para funções, interfaces e classes reutilizáveis e escaláveis
- Type Narrowing, Type Guards, Union Types e Intersection Types
- Manipulação tipada do DOM e eventos do navegador sem uso de 'any'
- Configuração de tsconfig.json e boas práticas de tipagem estrutural
- Integração de tipos com bibliotecas e frameworks modernos do ecossistema JS.`,
      en: `Specialization in static typing and scalable software engineering with TypeScript by Origamid.

• Workload: 22 hours
• Period: 21/06/2026 to 26/06/2026
• Institution: Origamid (CNPJ 23.811.568/0001-98)
• Official Verification: origamid.com/certificate/de898dfe

Skills & Topics Mastered:
- Interfaces, Type Aliases, and strict compile-time type inference
- Generics for creating reusable, type-safe functions, classes, and components
- Type Narrowing, Type Guards, Union Types, and Intersection Types
- Type-safe DOM manipulation and browser event handling without 'any'
- tsconfig.json compiler flags and best architectural practices
- Typing integration with third-party libraries across the Node/JS ecosystem.`,
    },
  },

  // 5. React Completo (Origamid)
  {
    id: "cert-origamid-react",
    name: {
      pt: "React Completo",
      en: "React Complete",
    },
    institution: "Origamid",
    year: "2026",
    hours: 36,
    credentialCode: "f3fa3866",
    credentialUrl: "https://www.origamid.com/certificate/f3fa3866",
    icon: "certificate",
    gradient: ["#00d8ff", "#0077b6"],
    tags: {
      pt: ["React", "Frontend", "Origamid", "36h"],
      en: ["React", "Frontend", "Origamid", "36h"],
    },
    summary: {
      pt: `Formação avançada e aprofundada no ecossistema moderno do React.js ministrada pela Origamid.

• Carga Horária: 36 horas
• Período de Realização: 11/06/2026 a 21/06/2026
• Instituição: Origamid (CNPJ 23.811.568/0001-98)
• Validação Oficial: origamid.com/certificate/f3fa3866

Competências e Tópicos Dominados:
- React Hooks aprofundados: useState, useEffect, useContext, useReducer, useMemo, useCallback e useRef
- Custom Hooks para abstração e reutilização de regras de negócio e estado
- Roteamento completo com React Router (rotas dinâmicas, parâmetros e proteção de fluxo)
- Formulários controlados, validação de campos e manipulação de estado complexo
- Consumo resiliente e assíncrono de APIs RESTful
- Otimização de renderização, Code Splitting e Lazy Loading de componentes.`,
      en: `In-depth advanced training in the modern React.js ecosystem provided by Origamid.

• Workload: 36 hours
• Period: 11/06/2026 to 21/06/2026
• Institution: Origamid (CNPJ 23.811.568/0001-98)
• Official Verification: origamid.com/certificate/f3fa3866

Skills & Topics Mastered:
- Core & advanced React Hooks: useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef
- Custom Hooks for business logic abstraction and state reuse
- Routing architecture with React Router (nested routes, dynamic params, program navigation)
- Controlled forms, input validation, and complex state management
- Resilient asynchronous RESTful API consumption
- Rendering optimization, Lazy Loading, and component Code Splitting.`,
    },
  },

  // 6. BI & Big Data (Descomplica)
  {
    id: "cert-descomplica-bigdata",
    name: {
      pt: "BI & Big Data",
      en: "BI & Big Data",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    credentialCode: "2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b",
    icon: "graduation",
    gradient: ["#3b82f6", "#1d4ed8"],
    tags: {
      pt: ["Business Intelligence", "Big Data", "Descomplica"],
      en: ["Business Intelligence", "Big Data", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Business Intelligence & Big Data da Faculdade Descomplica.

• Período de Emissão: Março de 2026
• Instituição: Descomplica Faculdade Digital
• Código de Validação: 2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b

Competências e Tópicos Dominados:
- Arquitetura de Data Warehouses, Data Lakes e modelagem multidimensional (Star e Snowflake Schema)
- Processos de ETL/ELT para ingestão e enriquecimento de grandes volumes de dados
- Dashboards analíticos, KPIs de performance e visualização de dados estratégicos
- Processamento massivo de dados distribuídos e tomada de decisão orientada por dados.`,
      en: `Academic Certificate in Business Intelligence & Big Data from Faculdade Descomplica.

• Issue Date: March 2026
• Institution: Descomplica Faculdade Digital
• Validation Code: 2b3eab305098c761549f1343300554f054aa902b9437538c8796c25c9604f50b

Skills & Topics Mastered:
- Data Warehousing, Data Lake architecture, and multidimensional modeling (Star & Snowflake)
- ETL/ELT pipelines for ingestion and curation of high-volume data
- Analytical dashboards, strategic KPIs, and executive data storytelling
- Distributed data architectures and metric-driven business intelligence.`,
    },
  },

  // 7. JavaScript Completo ES6+ (Origamid)
  {
    id: "cert-origamid-javascript",
    name: {
      pt: "JavaScript Completo ES6+",
      en: "Complete JavaScript ES6+",
    },
    institution: "Origamid",
    year: "2026",
    hours: 74,
    credentialCode: "b9b225cb",
    credentialUrl: "https://origamid.com/certificate/b9b225cb",
    icon: "certificate",
    gradient: ["#f59e0b", "#d97706"],
    tags: {
      pt: ["JavaScript", "ES6+", "Origamid", "74h"],
      en: ["JavaScript", "ES6+", "Origamid", "74h"],
    },
    summary: {
      pt: `Formação completa e profunda na linguagem JavaScript moderna e padrões ECMAScript ministrada pela Origamid.

• Carga Horária: 74 horas
• Conclusão: Fevereiro de 2026
• Instituição: Origamid (CNPJ 23.811.568/0001-98)
• Validação Oficial: origamid.com/certificate/b9b225cb

Competências e Tópicos Dominados:
- DOM profundo: manipulação eficiente de nós, traversal, eventos customizados e delegação
- Assincronismo: Promises, Async/Await, Fetch API, tratamento robusto de erros e requisições HTTP
- Objetos e Funções: Classes, Constructor Functions, Prototype Chain, Closures e Escopo léxico
- Recursos modernos ES6+: Destructuring, Rest & Spread, Arrow Functions, Maps, Sets e Symbols
- Módulos nativos JavaScript (ESM), transpiladores e padrões de código limpo.`,
      en: `Comprehensive mastery of modern JavaScript (ES6+) and ECMAScript specifications by Origamid.

• Workload: 74 hours
• Completion: February 2026
• Institution: Origamid (CNPJ 23.811.568/0001-98)
• Official Verification: origamid.com/certificate/b9b225cb

Skills & Topics Mastered:
- Deep DOM: high-performance node manipulation, traversal, custom events, and event delegation
- Asynchronous JS: Promises, Async/Await, Fetch API, and comprehensive error handling
- Objects & Prototypes: Classes, Constructor Functions, Prototype Chain, Closures, and lexical scope
- Modern ES6+ syntax: Destructuring, Rest/Spread, Arrow Functions, Maps, Sets, and Symbols
- Native ES Modules (ESM), modular bundling concepts, and clean code practices.`,
    },
  },

  // 8. DB Developer (Descomplica)
  {
    id: "cert-descomplica-db",
    name: {
      pt: "DB Developer",
      en: "DB Developer",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2026",
    credentialCode: "f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233",
    icon: "graduation",
    gradient: ["#059669", "#065f46"],
    tags: {
      pt: ["Banco de Dados", "SQL & NoSQL", "Descomplica"],
      en: ["Databases", "SQL & NoSQL", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular de DB Developer pelo curso de Ciência da Computação da Faculdade Descomplica.

• Período de Emissão: Janeiro de 2026
• Instituição: Descomplica Faculdade Digital
• Código de Validação: f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233

Competências e Tópicos Dominados:
- Projeto e modelagem relacional de bancos de dados (Normalização 1FN, 2FN, 3FN)
- Consultas SQL avançadas: Joins complexos, subqueries correlacionadas, views e índices de alta performance
- Procedimentos armazenados (Stored Procedures), Triggers e transações com propriedades ACID
- Introdução a bancos de dados NoSQL orientados a documentos e chave-valor.`,
      en: `Academic Certificate as DB Developer in the Computer Science curriculum at Faculdade Descomplica.

• Issue Date: January 2026
• Institution: Descomplica Faculdade Digital
• Validation Code: f0ff2c73925f6e3d196c6bf33e2f20f118a2428917a7bb2c7abccb1c5bdf3233

Skills & Topics Mastered:
- Relational schema design and data normalization rules (1NF, 2NF, 3NF)
- Complex SQL queries: Multi-table Joins, correlated subqueries, analytical views, and index tuning
- Stored Procedures, Triggers, execution plan analysis, and ACID transactions
- Core principles of document-based and key-value NoSQL database engines.`,
    },
  },

  // 9. Software Engineering (Descomplica)
  {
    id: "cert-descomplica-software-eng",
    name: {
      pt: "Software Engineering",
      en: "Software Engineering",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    credentialCode: "683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554",
    icon: "graduation",
    gradient: ["#6366f1", "#4338ca"],
    tags: {
      pt: ["Engenharia de Software", "Arquitetura", "Descomplica"],
      en: ["Software Engineering", "Architecture", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Software Engineering pelo curso de Bacharelado em Ciência da Computação da Faculdade Descomplica.

• Período de Emissão: Setembro de 2025
• Instituição: Descomplica Faculdade Digital
• Código de Validação: 683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554

Competências e Tópicos Dominados:
- Ciclo de vida de desenvolvimento de software (SDLC) e processos ágeis modernos
- Princípios de arquitetura de software limpa, desacoplamento e coesão de componentes
- Padrões de projeto (GoF: Factory, Observer, Singleton, Strategy, Decorator)
- Garantia de qualidade, testes automatizados e integração contínua (CI/CD).`,
      en: `Academic Certificate in Software Engineering from the Computer Science program at Faculdade Descomplica.

• Issue Date: September 2025
• Institution: Descomplica Faculdade Digital
• Validation Code: 683843d9190d419f6c42e167c459e046dc7afb3642438d0700425852a0b0f554

Skills & Topics Mastered:
- Software Development Life Cycle (SDLC) and modern agile team workflows
- Clean software architectural principles, high cohesion, and loose coupling
- GoF Design Patterns (Factory, Observer, Singleton, Strategy, Decorator)
- Quality assurance engineering, automated testing, and CI/CD automation.`,
    },
  },

  // 10. Notion Advanced Certified
  {
    id: "cert-notion-advanced",
    name: {
      pt: "Notion Advanced Certified",
      en: "Notion Advanced Certified",
    },
    institution: "Notion",
    year: "2025",
    credentialCode: "rf9cnb8pyafv",
    credentialUrl: "https://verify.skilljar.com/c/rf9cnb8pyafv",
    icon: "certificate",
    gradient: ["#18181b", "#27272a"],
    tags: {
      pt: ["Notion Advanced", "Arquitetura PKM", "Automações"],
      en: ["Notion Advanced", "PKM Architecture", "Automations"],
    },
    summary: {
      pt: `Certificação oficial avançada emitida pela Notion Labs validando domínio profundo em arquiteturas complexas e modelagem de dados no Notion.

• Data de Emissão: Setembro de 2025 (Validade: Setembro de 2027)
• Instituição: Notion Labs, Inc.
• Validação Oficial: verify.skilljar.com/c/rf9cnb8pyafv

Competências e Tópicos Dominados:
- Fórmulas 2.0 avançadas com arrays, expressões regulares e lógica funcional recursiva
- Modelagem de dados multi-relacional em larga escala com múltiplos níveis de rollups
- Governança de dados corporativos e controle refinado de permissões
- Engenharia de sistemas operacionais completos para empresas e equipes de alto desempenho.`,
      en: `Official Advanced Credential issued by Notion Labs certifying enterprise mastery in information architecture and complex database modeling.

• Issue Date: September 2025 (Expires: September 2027)
• Institution: Notion Labs, Inc.
• Official Verification: verify.skilljar.com/c/rf9cnb8pyafv

Skills & Topics Mastered:
- Advanced Formulas 2.0 utilizing arrays, regular expressions, and functional lambda expressions
- Large-scale multi-relational database schemas and nested rollups
- Enterprise data governance, audit controls, and granular permission architectures
- Designing comprehensive operating systems for high-performance cross-functional teams.`,
    },
  },

  // 11. Notion Workflows Certified
  {
    id: "cert-notion-workflows",
    name: {
      pt: "Notion Workflows Certified",
      en: "Notion Workflows Certified",
    },
    institution: "Notion",
    year: "2025",
    credentialCode: "mr79shtf6cwu",
    credentialUrl: "https://verify.skilljar.com/c/mr79shtf6cwu",
    icon: "certificate",
    gradient: ["#27272a", "#3f3f46"],
    tags: {
      pt: ["Notion Workflows", "Automação", "Processos"],
      en: ["Notion Workflows", "Automation", "Processes"],
    },
    summary: {
      pt: `Certificação oficial emitida pela Notion Labs atestando a habilidade de transformar conceitos e processos em ferramentas dinâmicas e automatizadas.

• Data de Emissão: Setembro de 2025 (Validade: Setembro de 2027)
• Instituição: Notion Labs, Inc.
• Validação Oficial: verify.skilljar.com/c/mr79shtf6cwu

Competências e Tópicos Dominados:
- Automações nativas baseadas em gatilhos de propriedade, status e webhooks
- Construção de fluxos dinâmicos de aprovação, acompanhamento de tarefas e sprints
- Conexão e sincronização de informações entre múltiplos departamentos e workspaces
- Eliminação de gargalos operacionais e padronização de esteiras de trabalho.`,
      en: `Official Credential from Notion Labs validating proficiency in translating conceptual workflows into dynamic, automated operational systems.

• Issue Date: September 2025 (Expires: September 2027)
• Institution: Notion Labs, Inc.
• Official Verification: verify.skilljar.com/c/mr79shtf6cwu

Skills & Topics Mastered:
- Native automated workflows with multi-action triggers and conditional branching
- Building end-to-end task pipelines, sprint tracking, and review mechanisms
- Interconnecting data pipelines across departmental workspaces
- Operational bottleneck elimination and standardized production pipelines.`,
    },
  },

  // 12. Notion Essentials Certified
  {
    id: "cert-notion-essentials",
    name: {
      pt: "Notion Essentials Certified",
      en: "Notion Essentials Certified",
    },
    institution: "Notion",
    year: "2025",
    credentialCode: "gj6rciabrjxu",
    credentialUrl: "https://verify.skilljar.com/c/gj6rciabrjxu",
    icon: "certificate",
    gradient: ["#3f3f46", "#52525b"],
    tags: {
      pt: ["Notion Essentials", "Produtividade", "Organização"],
      en: ["Notion Essentials", "Productivity", "Organization"],
    },
    summary: {
      pt: `Certificação oficial emitida pela Notion Labs validando as competências fundamentais na estruturação e navegação do ecossistema Notion.

• Data de Emissão: Setembro de 2025 (Validade: Setembro de 2027)
• Instituição: Notion Labs, Inc.
• Validação Oficial: verify.skilljar.com/c/gj6rciabrjxu

Competências e Tópicos Dominados:
- Estruturação de páginas dinâmicas, blocos avançados e templates modulares
- Criação e configuração de bancos de dados com visualizações de Tabela, Quadro, Linha do Tempo e Calendário
- Filtros compostos, agrupamentos e ordenações dinâmicas
- Princípios ergonômicos de organização de informações pessoais e colaborativas.`,
      en: `Official Foundation Credential from Notion Labs demonstrating core competencies in workspace architecture and content delivery.

• Issue Date: September 2025 (Expires: September 2027)
• Institution: Notion Labs, Inc.
• Official Verification: verify.skilljar.com/c/gj6rciabrjxu

Skills & Topics Mastered:
- Dynamic page architecture, structural blocks, and modular page templates
- Database design utilizing Table, Board, Timeline, List, and Calendar views
- Compound filtering, multi-level sorting, and custom groupings
- Ergonomic principles of collaborative information organization.`,
    },
  },

  // 13. Cloud Plataform (Descomplica)
  {
    id: "cert-descomplica-cloud",
    name: {
      pt: "Cloud Plataform",
      en: "Cloud Platform",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    credentialCode: "64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff",
    icon: "graduation",
    gradient: ["#0ea5e9", "#0284c7"],
    tags: {
      pt: ["Cloud Computing", "Redes", "Descomplica"],
      en: ["Cloud Computing", "Networking", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Cloud Plataform pelo curso de Ciência da Computação da Faculdade Descomplica.

• Período de Emissão: Agosto de 2025
• Instituição: Descomplica Faculdade Digital
• Código de Validação: 64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff

Competências e Tópicos Dominados:
- Fundamentos de Computação em Nuvem e modelos de serviço (IaaS, PaaS, SaaS)
- Arquitetura de redes em nuvem, VPCs, sub-redes, roteamento e firewalls de borda
- Escalabilidade horizontal, Load Balancers e armazenamento distribuído (Object Storage e Block Storage)
- Boas práticas de segurança em nuvem e governança de custos computacionais.`,
      en: `Academic Certificate in Cloud Platform engineering from Faculdade Descomplica.

• Issue Date: August 2025
• Institution: Descomplica Faculdade Digital
• Validation Code: 64902f4fca3763d22dc6268c1ee962f183c23f0eff9b7834022ed5a7f6f7b3ff

Skills & Topics Mastered:
- Cloud computing paradigms and service delivery models (IaaS, PaaS, SaaS)
- Cloud networking infrastructure, VPC routing, subnets, and security groups
- High availability architecture, load balancing, and distributed storage
- Identity management, cloud governance, and cost optimization strategies.`,
    },
  },

  // 14. CSS Grid Layout (Origamid)
  {
    id: "cert-origamid-cssgrid",
    name: {
      pt: "CSS Grid Layout",
      en: "CSS Grid Layout",
    },
    institution: "Origamid",
    year: "2025",
    hours: 10,
    credentialCode: "7851eeda",
    credentialUrl: "https://www.origamid.com/certificate/7851eeda",
    icon: "certificate",
    gradient: ["#8b5cf6", "#6d28d9"],
    tags: {
      pt: ["CSS Grid", "UI Layout", "Origamid", "10h"],
      en: ["CSS Grid", "UI Layout", "Origamid", "10h"],
    },
    summary: {
      pt: `Especialização técnica em diagramação bidimensional avançada com CSS Grid Layout ministrada pela Origamid.

• Carga Horária: 10 horas
• Período de Conclusão: Maio de 2025
• Instituição: Origamid (CNPJ 23.811.568/0001-98)
• Validação Oficial: origamid.com/certificate/7851eeda

Competências e Tópicos Dominados:
- Grid container e itens: grid-template-columns, grid-template-rows e fr units
- Posicionamento avançado com grid-template-areas e alinhamento bidimensional
- Funções nativas minmax(), repeat(), auto-fit e auto-fill para interfaces fluidas
- Redução de complexidade de código CSS dispensando dependência de frameworks.`,
      en: `Technical specialization in advanced two-dimensional layout design with CSS Grid Layout by Origamid.

• Workload: 10 hours
• Completion: May 2025
• Institution: Origamid (CNPJ 23.811.568/0001-98)
• Official Verification: origamid.com/certificate/7851eeda

Skills & Topics Mastered:
- Grid container architecture: grid-template-columns, rows, and fractional units
- Visual template mapping via grid-template-areas and coordinate positioning
- Fluid responsiveness using minmax(), repeat(), auto-fit, and auto-fill
- Clean CSS implementation without unnecessary framework bloat.`,
    },
  },

  // 15. Mobile Developer (Descomplica)
  {
    id: "cert-descomplica-mobile",
    name: {
      pt: "Mobile Developer",
      en: "Mobile Developer",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    credentialCode: "c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0",
    icon: "graduation",
    gradient: ["#8b5cf6", "#7c3aed"],
    tags: {
      pt: ["Mobile", "App Architecture", "Descomplica"],
      en: ["Mobile", "App Architecture", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Mobile Development pelo curso de Ciência da Computação da Faculdade Descomplica.

• Período de Emissão: Maio de 2025
• Instituição: Descomplica Faculdade Digital
• Código de Validação: c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0

Competências e Tópicos Dominados:
- Arquitetura de aplicações móveis e ciclo de vida de telas e componentes
- Design responsivo adaptável a múltiplos formatos de displays móveis e densidades de pixels
- Consumo assíncrono de APIs externas e persistência local de dados em dispositivos
- Otimização de consumo de bateria, renderização fluida e boas práticas de UX móvel.`,
      en: `Academic Certificate in Mobile Development from Faculdade Descomplica.

• Issue Date: May 2025
• Institution: Descomplica Faculdade Digital
• Validation Code: c0576a8f5a23c4fc10a6d9370c28c0fb67493beab3bb8fa58d3893a3b7dbadb0

Skills & Topics Mastered:
- Mobile application architecture and view-controller lifecycles
- Responsive viewport adaptation across disparate screen ratios and densities
- Local offline data caching and asynchronous REST API integration
- Battery-efficiency optimization, smooth framerates, and mobile ergonomics.`,
    },
  },

  // 16. CSS Flexbox (Origamid)
  {
    id: "cert-origamid-cssflexbox",
    name: {
      pt: "CSS Flexbox",
      en: "CSS Flexbox",
    },
    institution: "Origamid",
    year: "2025",
    hours: 6,
    credentialCode: "f3d3262a",
    credentialUrl: "https://www.origamid.com/certificate/f3d3262a",
    icon: "certificate",
    gradient: ["#a855f7", "#7e22ce"],
    tags: {
      pt: ["CSS Flexbox", "UI Design", "Origamid", "6h"],
      en: ["CSS Flexbox", "UI Design", "Origamid", "6h"],
    },
    summary: {
      pt: `Especialização em alinhamento unidimensional moderno com CSS Flexbox ministrada pela Origamid.

• Carga Horária: 6 horas
• Conclusão: Abril de 2025
• Instituição: Origamid (CNPJ 23.811.568/0001-98)
• Validação Oficial: origamid.com/certificate/f3d3262a

Competências e Tópicos Dominados:
- Domínio do eixo principal (main axis) e transversal (cross axis)
- Distribuição espacial com justify-content, align-items e align-content
- Propriedades de dimensionamento elástico: flex-grow, flex-shrink e flex-basis
- Criação de headers, barras de navegação e componentes flexíveis sem quebras de layout.`,
      en: `Specialized training in one-dimensional CSS Flexbox layout mechanics by Origamid.

• Workload: 6 hours
• Completion: April 2025
• Institution: Origamid (CNPJ 23.811.568/0001-98)
• Official Verification: origamid.com/certificate/f3d3262a

Skills & Topics Mastered:
- Main axis and cross axis directional mechanics
- Spatial alignment via justify-content, align-items, and align-content
- Elastic sizing parameters: flex-grow, flex-shrink, and flex-basis
- Building robust navigation menus, sticky headers, and scalable components.`,
    },
  },

  // 17. HTML e CSS para Iniciantes (Origamid)
  {
    id: "cert-origamid-htmlcss",
    name: {
      pt: "HTML e CSS para Iniciantes",
      en: "HTML & CSS for Beginners",
    },
    institution: "Origamid",
    year: "2025",
    hours: 46,
    credentialCode: "b2a468aa",
    credentialUrl: "https://www.origamid.com/certificate/b2a468aa",
    icon: "certificate",
    gradient: ["#f97316", "#c2410c"],
    tags: {
      pt: ["HTML5", "CSS3", "Semântica", "Origamid", "46h"],
      en: ["HTML5", "CSS3", "Semantics", "Origamid", "46h"],
    },
    summary: {
      pt: `Formação completa em estruturação semântica, estilização e fundamentos da web moderna pela Origamid.

• Carga Horária: 46 horas
• Conclusão: Abril de 2025
• Instituição: Origamid (CNPJ 23.811.568/0001-98)
• Validação Oficial: origamid.com/certificate/b2a468aa

Competências e Tópicos Dominados:
- Marcação semântica estrita (header, nav, main, section, article, aside, footer)
- Box Model completo (content, padding, border, margin), cascata, especificidade e herança
- Tipografia web responsiva, variáveis nativas em CSS e organização modular de estilos
- Acessibilidade web fundamental (contrastes de cor e atributos ARIA essenciais).`,
      en: `Comprehensive foundation in semantic structuring, styling, and modern web architecture by Origamid.

• Workload: 46 hours
• Completion: April 2025
• Institution: Origamid (CNPJ 23.811.568/0001-98)
• Official Verification: origamid.com/certificate/b2a468aa

Skills & Topics Mastered:
- Strict semantic document outlining (header, nav, main, section, article, aside, footer)
- CSS Box Model mechanics, selector specificity calculation, cascade, and inheritance
- Responsive web typography, CSS Custom Properties, and modular stylesheets
- Fundamental web accessibility (color contrast ratios and essential ARIA tags).`,
    },
  },

  // 18. Smart Data Structures (Descomplica)
  {
    id: "cert-descomplica-smart-data",
    name: {
      pt: "Smart Data Structures",
      en: "Smart Data Structures",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2025",
    credentialCode: "cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6",
    icon: "graduation",
    gradient: ["#14b8a6", "#0d9488"],
    tags: {
      pt: ["Estruturas de Dados", "Algoritmos", "Descomplica"],
      en: ["Data Structures", "Algorithms", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Smart Data Structures pelo curso de Ciência da Computação da Faculdade Descomplica.

• Período de Emissão: Janeiro de 2025
• Instituição: Descomplica Faculdade Digital
• Código de Validação: cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6

Competências e Tópicos Dominados:
- Estruturas de dados lineares e dinâmicas: Listas encadeadas, pilhas (stacks) e filas (queues)
- Árvores de busca binária (BST), balanceamento de árvores e tabelas hash
- Análise assintótica de complexidade de tempo e espaço (Notação Big-O)
- Algoritmos clássicos de ordenação (MergeSort, QuickSort) e busca eficiente.`,
      en: `Academic Certificate in Smart Data Structures from the Computer Science program at Faculdade Descomplica.

• Issue Date: January 2025
• Institution: Descomplica Faculdade Digital
• Validation Code: cca6c4e40e338bc30a448e6ed8dd02ad836ded14d845843e4116d74486cdf8e6

Skills & Topics Mastered:
- Dynamic data structures: Singly and doubly linked lists, stacks, and queues
- Binary Search Trees (BST), tree balancing concepts, and hash table lookup optimization
- Asymptotic computational complexity analysis (Big-O notation)
- Sorting algorithms (MergeSort, QuickSort) and efficient search algorithms.`,
    },
  },

  // 19. Oracle One T7 (Oracle / Alura)
  {
    id: "cert-oracle-one-t7",
    name: {
      pt: "Oracle Next Education (ONE) - Turma 7",
      en: "Oracle Next Education (ONE) - Cohort 7",
    },
    institution: "Oracle / Alura",
    year: "2024",
    credentialCode: "fa3a14f2-3bed-4a00-8d2e-cef44db4e919",
    credentialUrl: "https://cursos.alura.com.br/program/certificate/fa3a14f2-3bed-4a00-8d2e-cef44db4e919",
    icon: "graduation",
    gradient: ["#ef4444", "#dc2626"],
    tags: {
      pt: ["Oracle ONE", "Java", "Backend", "Alura"],
      en: ["Oracle ONE", "Java", "Backend", "Alura"],
    },
    summary: {
      pt: `Programa integral de capacitação tecnológica de alta intensidade promovido pela Oracle em parceria com a Alura.

• Conclusão: Dezembro de 2024
• Programa: Oracle Next Education - Turma 7 (G7)
• Validação Oficial: cursos.alura.com.br/program/certificate/fa3a14f2-3bed-4a00-8d2e-cef44db4e919

Competências e Tópicos Dominados:
- Programação orientada a objetos rigorosa, herança, polimorfismo e encapsulamento em Java
- Bancos de dados relacionais, modelagem de dados e operações SQL
- Trabalho colaborativo em equipe com Git, branches e GitHub Pull Requests
- Resolução de desafios de negócio e entregas em sprints ágeis.`,
      en: `Intensive tech development program delivered by Oracle in strategic partnership with Alura.

• Completion: December 2024
• Program: Oracle Next Education - Cohort 7 (G7)
• Official Verification: cursos.alura.com.br/program/certificate/fa3a14f2-3bed-4a00-8d2e-cef44db4e919

Skills & Topics Mastered:
- Rigorous Object-Oriented Programming (OOP), encapsulation, inheritance, and polymorphism in Java
- Relational database schema design, indexing, and SQL queries
- Collaborative Git workflows, feature branches, and Pull Requests on GitHub
- Sprint deliveries and agile problem-solving methodology.`,
    },
  },

  // 20. React G7 - ONE (Oracle / Alura)
  {
    id: "cert-oracle-react-g7",
    name: {
      pt: "React G7 - ONE",
      en: "React G7 - ONE",
    },
    institution: "Oracle / Alura",
    year: "2024",
    credentialCode: "76dc9ce4-c788-4809-9ae2-9255fe306b36",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/76dc9ce4-c788-4809-9ae2-9255fe306b36",
    icon: "certificate",
    gradient: ["#06b6d4", "#0891b2"],
    tags: {
      pt: ["React", "Oracle ONE", "Alura", "Frontend"],
      en: ["React", "Oracle ONE", "Alura", "Frontend"],
    },
    summary: {
      pt: `Formação especializada em React.js no programa Oracle Next Education ministrada pela Alura.

• Conclusão: Dezembro de 2024
• Instituições: Oracle & Alura
• Validação Oficial: cursos.alura.com.br/degree/certificate/76dc9ce4-c788-4809-9ae2-9255fe306b36

Competências e Tópicos Dominados:
- Criação de SPAs modernas com componentes funcionais e React Hooks
- Gerenciamento de estado de aplicação e comunicação entre componentes pais e filhos
- Consumo assíncrono de APIs RESTful utilizando Fetch e Axios
- Modularização de componentes e estilização escalável.`,
      en: `Specialized training in modern React.js development within the Oracle Next Education program.

• Completion: December 2024
• Institutions: Oracle & Alura
• Official Verification: cursos.alura.com.br/degree/certificate/76dc9ce4-c788-4809-9ae2-9255fe306b36

Skills & Topics Mastered:
- Building modern Single Page Applications (SPAs) with functional components and React Hooks
- Component hierarchy state propagation and application state management
- Asynchronous API interaction using Fetch and Axios
- Modular component structuring and maintainable UI architecture.`,
    },
  },

  // 21. Formação Front End G7 - ONE (Oracle / Alura)
  {
    id: "cert-oracle-frontend-g7",
    name: {
      pt: "Formação Front End G7 - ONE",
      en: "Front End Program G7 - ONE",
    },
    institution: "Oracle / Alura",
    year: "2024",
    credentialCode: "c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc?lang",
    icon: "graduation",
    gradient: ["#f97316", "#ea580c"],
    tags: {
      pt: ["Front End", "Oracle ONE", "JavaScript", "Alura"],
      en: ["Front End", "Oracle ONE", "JavaScript", "Alura"],
    },
    summary: {
      pt: `Formação completa em tecnologias essenciais do Front-End pelo programa Oracle Next Education.

• Conclusão: Outubro de 2024
• Instituições: Oracle & Alura
• Validação Oficial: cursos.alura.com.br/degree/certificate/c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc

Competências e Tópicos Dominados:
- JavaScript puro moderno: manipulação dinâmica de elementos no DOM e assincronismo
- Construção de páginas web com design responsivo (Mobile First) e Media Queries
- Boas práticas de semântica e acessibilidade estrutural
- Integração de projetos Front-End com controle de versão Git.`,
      en: `Complete Front-End engineering career track in the Oracle Next Education curriculum.

• Completion: October 2024
• Institutions: Oracle & Alura
• Official Verification: cursos.alura.com.br/degree/certificate/c0ed87ea-8e6a-47a8-a1bb-66644f7e17bc

Skills & Topics Mastered:
- Modern vanilla JavaScript: DOM manipulation, asynchronous programming, and event listeners
- Mobile-First responsive web design techniques with CSS media queries
- Semantic HTML and accessibility best practices
- Version control integration with Git and collaborative repositories.`,
    },
  },

  // 22. Object Oriented Programming (Descomplica)
  {
    id: "cert-descomplica-oop",
    name: {
      pt: "Object Oriented Programming",
      en: "Object Oriented Programming",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    credentialCode: "5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900",
    icon: "graduation",
    gradient: ["#84cc16", "#65a30d"],
    tags: {
      pt: ["POO", "Java", "Descomplica"],
      en: ["OOP", "Java", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Programação Orientada a Objetos pela Faculdade Descomplica.

• Período de Emissão: Outubro de 2024
• Instituição: Descomplica Faculdade Digital
• Código de Validação: 5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900

Competências e Tópicos Dominados:
- Os quatro pilares da POO: Abstração, Encapsulamento, Herança e Polimorfismo
- Criação de classes, objetos, construtores e gerenciamento de visibilidade de membros
- Interfaces, classes abstratas e tratamento robusto de exceções em tempo de execução
- Modelagem de domínio orientada a objetos para sistemas corporativos robustos.`,
      en: `Academic Certificate in Object-Oriented Programming from Faculdade Descomplica.

• Issue Date: October 2024
• Institution: Descomplica Faculdade Digital
• Validation Code: 5eebdc664a0b703de59dea88de45d832da2e8ab0719cfc5a24a67c9f80bdf900

Skills & Topics Mastered:
- Four core OOP pillars: Abstraction, Encapsulation, Inheritance, and Polymorphism
- Class structures, constructors, object lifecycle, and member access scoping
- Interfaces, abstract classes, and resilient runtime exception handling
- Domain-driven object modeling for scalable corporate systems.`,
    },
  },

  // 23. Empreendedorismo, Agilidade e Protagonismo (Oracle / Alura)
  {
    id: "cert-oracle-empreendedorismo-g7",
    name: {
      pt: "Empreendedorismo, Agilidade e Protagonismo G7 - ONE",
      en: "Entrepreneurship, Agility & Career Ownership G7 - ONE",
    },
    institution: "Oracle / Alura",
    year: "2024",
    credentialCode: "e167b435-1256-423c-985e-281fe11ca58c",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/e167b435-1256-423c-985e-281fe11ca58c?lang",
    icon: "certificate",
    gradient: ["#eab308", "#ca8a04"],
    tags: {
      pt: ["Agilidade", "Soft Skills", "Oracle ONE", "Alura"],
      en: ["Agility", "Soft Skills", "Oracle ONE", "Alura"],
    },
    summary: {
      pt: `Formação executiva em desenvolvimento profissional e metodologias ágeis do programa Oracle Next Education.

• Conclusão: Setembro de 2024
• Instituições: Oracle & Alura
• Validação Oficial: cursos.alura.com.br/degree/certificate/e167b435-1256-423c-985e-281fe11ca58c

Competências e Tópicos Dominados:
- Fundamentos de Metodologias Ágeis: Scrum, cerimônias, papéis e gestão de fluxo com Kanban
- Protagonismo na carreira e postura proativa em equipes de tecnologia multidisciplinares
- Comunicação assertiva, inteligência interpessoal e resolução colaborativa de conflitos
- Planejamento estratégico individual e definição orientada de metas profissionais.`,
      en: `Executive and agile methodologies professional training in the Oracle Next Education program.

• Completion: September 2024
• Institutions: Oracle & Alura
• Official Verification: cursos.alura.com.br/degree/certificate/e167b435-1256-423c-985e-281fe11ca58c

Skills & Topics Mastered:
- Agile delivery frameworks: Scrum ceremonies, team roles, and Kanban board management
- Career ownership and leadership mindset in cross-functional engineering teams
- Assertive professional communication and collaborative conflict resolution
- Strategic self-development planning and objective-driven delivery.`,
    },
  },

  // 24. Programming Languages (Descomplica)
  {
    id: "cert-descomplica-prog-languages",
    name: {
      pt: "Programming Languages",
      en: "Programming Languages",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    credentialCode: "7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48",
    icon: "graduation",
    gradient: ["#3b82f6", "#2563eb"],
    tags: {
      pt: ["Linguagens", "Paradigmas", "Descomplica"],
      en: ["Languages", "Paradigms", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Teoria e Paradigmas de Linguagens de Programação pela Faculdade Descomplica.

• Período de Emissão: Agosto de 2024
• Instituição: Descomplica Faculdade Digital
• Código de Validação: 7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48

Competências e Tópicos Dominados:
- Análise comparativa de paradigmas de programação (imperativo, orientado a objetos e funcional)
- Compilação vs. Interpretação, sistemas de tipos estáticos e dinâmicos
- Gerenciamento de memória, stack, heap e estratégias de Garbage Collection
- Circuitos lógicos e representação de instruções computacionais de baixo nível.`,
      en: `Academic Certificate in Programming Language Theory & Paradigms from Faculdade Descomplica.

• Issue Date: August 2024
• Institution: Descomplica Faculdade Digital
• Validation Code: 7fd7165785a2cc6cb9949a02f21a84f3feaac7637caf3550eae74a83d8563f48

Skills & Topics Mastered:
- Comparative paradigm analysis (imperative, functional, and object-oriented)
- Compilation versus interpretation, static vs. dynamic type systems
- Memory allocation mechanics, stack/heap spaces, and Garbage Collection
- Digital logic circuits and low-level machine instruction architectures.`,
    },
  },

  // 25. Iniciante em Programação - Oracle ONE T7 (Oracle / Alura)
  {
    id: "cert-oracle-iniciante-t7",
    name: {
      pt: "Iniciante em Programação - Oracle ONE T7",
      en: "Programming Beginner - Oracle ONE Cohort 7",
    },
    institution: "Oracle / Alura",
    year: "2024",
    credentialCode: "29b2ac09-6fdc-4d67-a630-be979766d5a2",
    credentialUrl: "https://cursos.alura.com.br/degree/certificate/29b2ac09-6fdc-4d67-a630-be979766d5a2",
    icon: "graduation",
    gradient: ["#ec4899", "#db2777"],
    tags: {
      pt: ["Lógica", "JavaScript", "Oracle ONE", "Alura"],
      en: ["Logic", "JavaScript", "Oracle ONE", "Alura"],
    },
    summary: {
      pt: `Formação introdutória e estrutural em lógica computacional e programação no programa Oracle Next Education.

• Conclusão: Julho de 2024
• Instituições: Oracle & Alura
• Validação Oficial: cursos.alura.com.br/degree/certificate/29b2ac09-6fdc-4d67-a630-be979766d5a2

Competências e Tópicos Dominados:
- Lógica de programação computacional e resolução metódica de problemas
- Sintaxe fundamental de JavaScript, variáveis, estruturas condicionais e laços de repetição
- Manipulação inicial do DOM no navegador com HTML e CSS integrados
- Primeiras aplicações interativas desenvolvidas com raciocínio algorítmico rigoroso.`,
      en: `Introductory logic and algorithmic foundation track in the Oracle Next Education program.

• Completion: July 2024
• Institutions: Oracle & Alura
• Official Verification: cursos.alura.com.br/degree/certificate/29b2ac09-6fdc-4d67-a630-be979766d5a2

Skills & Topics Mastered:
- Algorithmic problem-solving and structured program flow
- JavaScript syntax fundamentals, control structures, and loops
- Browser DOM manipulation using integrated HTML and CSS
- Building interactive scripts with clean logical architecture.`,
    },
  },

  // 26. Lógica de Programação: Mergulhe em JS (Alura)
  {
    id: "cert-alura-logica-js",
    name: {
      pt: "Lógica de Programação: Mergulhe em JavaScript",
      en: "Logic of Programming: Dive into JavaScript",
    },
    institution: "Alura",
    year: "2024",
    credentialCode: "52a1daf5-1817-48df-89b6-89ba157a256c",
    credentialUrl: "https://cursos.alura.com.br/certificate/52a1daf5-1817-48df-89b6-89ba157a256c?lang",
    icon: "certificate",
    gradient: ["#f59e0b", "#d97706"],
    tags: {
      pt: ["Lógica", "JavaScript", "Alura"],
      en: ["Logic", "JavaScript", "Alura"],
    },
    summary: {
      pt: `Curso imersivo de fundamentos em lógica algorítmica utilizando JavaScript ministrado pela Alura.

• Conclusão: Junho de 2024
• Instituição: Alura
• Validação Oficial: cursos.alura.com.br/certificate/52a1daf5-1817-48df-89b6-89ba157a256c

Competências e Tópicos Dominados:
- Estruturação lógica de algoritmos, variáveis, operadores relacionais e lógicos
- Fluxos de repetição (while, for), condicionais (if, else) e tratamento de entradas de usuário
- Depuração de código, console.log estratégico e prevenção de loops infinitos
- Construção de jogos simples e aplicações de console interativas.`,
      en: `Immersive foundational course in programmatic logic using JavaScript delivered by Alura.

• Completion: June 2024
• Institution: Alura
• Official Verification: cursos.alura.com.br/certificate/52a1daf5-1817-48df-89b6-89ba157a256c

Skills & Topics Mastered:
- Algorithmic structure, variable scoping, and logical/relational operators
- Control flow loops (while, for), branching conditionals, and user prompt handling
- Strategic debugging techniques and infinite loop mitigation
- Developing console-driven interactive utilities and games.`,
    },
  },

  // 27. Data Science (Ada Tech)
  {
    id: "cert-ada-datascience",
    name: {
      pt: "Data Science - Trilha Digital Coders 24",
      en: "Data Science - Digital Path Coders 24",
    },
    institution: "Ada Tech",
    year: "2024",
    credentialCode: "40dd85d2-ed6c-a240-2a61-b67267119b8e",
    credentialUrl: "https://ada.tech/certificado?code=40dd85d2-ed6c-a240-2a61-b67267119b8e",
    icon: "certificate",
    gradient: ["#14b8a6", "#0f766e"],
    tags: {
      pt: ["Data Science", "Estatística", "Ada Tech"],
      en: ["Data Science", "Statistics", "Ada Tech"],
    },
    summary: {
      pt: `Formação técnica em análise exploratória de dados e fundamentos de Data Science pela Ada Tech.

• Ano de Conclusão: Junho de 2024
• Programa: Trilha Digital Coders 24
• Instituição: Ada Tech
• Validação Oficial: ada.tech/certificado?code=40dd85d2-ed6c-a240-2a61-b67267119b8e

Competências e Tópicos Dominados:
- Análise Exploratória de Dados (EDA) e limpeza de dados (data wrangling)
- Estatística descritiva (medidas de tendência central, dispersão e correlação)
- Manipulação e transformação de datasets estruturados
- Visualização de dados para geração de insights e tomada de decisão fundamentada.`,
      en: `Technical foundation in exploratory data analysis and data science principles delivered by Ada Tech.

• Completion: June 2024
• Program: Trilha Digital Coders 24
• Institution: Ada Tech
• Official Verification: ada.tech/certificado?code=40dd85d2-ed6c-a240-2a61-b67267119b8e

Skills & Topics Mastered:
- Exploratory Data Analysis (EDA) and robust dataset wrangling
- Descriptive statistics (central tendency, dispersion measures, and correlation)
- Structured dataset transformation and analytical filtering
- Data visualization techniques for communicating metric-driven insights.`,
    },
  },

  // 28. Software Requirements (Descomplica)
  {
    id: "cert-descomplica-software-req",
    name: {
      pt: "Software Requirements",
      en: "Software Requirements",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    credentialCode: "52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7",
    icon: "graduation",
    gradient: ["#6366f1", "#4f46e5"],
    tags: {
      pt: ["Engenharia de Requisitos", "UML", "Descomplica"],
      en: ["Requirements Engineering", "UML", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Engenharia de Requisitos de Software pela Faculdade Descomplica.

• Período de Emissão: Maio de 2024
• Instituição: Descomplica Faculdade Digital
• Código de Validação: 52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7

Competências e Tópicos Dominados:
- Elicitação, análise, especificação e validação de requisitos funcionais e não-funcionais
- Modelagem visual com diagramas UML (Diagrama de Casos de Uso, Diagrama de Classes e Atividades)
- Criação de Histórias de Usuário (User Stories) com critérios de aceitação claros
- Matrizes de rastreabilidade de requisitos para controle de escopo e qualidade.`,
      en: `Academic Certificate in Software Requirements Engineering from Faculdade Descomplica.

• Issue Date: May 2024
• Institution: Descomplica Faculdade Digital
• Validation Code: 52214c146676ff6966e0ec27e85e0f7f30061c0034d9507b97c757e375a244f7

Skills & Topics Mastered:
- Functional and non-functional requirements elicitation, specification, and validation
- UML visual modeling (Use Case diagrams, Class diagrams, Activity flows)
- Writing structured User Stories with unambiguous acceptance criteria
- Requirements traceability matrix management for scope control.`,
    },
  },

  // 29. Soft Skills com Porta dos Fundos (Descomplica)
  {
    id: "cert-descomplica-softskills",
    name: {
      pt: "Soft Skills com Porta dos Fundos",
      en: "Soft Skills with Porta dos Fundos",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    credentialCode: "82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991",
    icon: "graduation",
    gradient: ["#f43f5e", "#e11d48"],
    tags: {
      pt: ["Soft Skills", "Comunicação", "Descomplica"],
      en: ["Soft Skills", "Communication", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em competências socioemocionais e comportamentais pela Faculdade Descomplica em parceria com o Porta dos Fundos.

• Período de Emissão: Março de 2024
• Instituição: Descomplica Faculdade Digital
• Código de Validação: 82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991

Competências e Tópicos Dominados:
- Comunicação interpessoal autêntica, empatia e escuta ativa no ambiente corporativo
- Inteligência emocional, gestão de pressão e adaptabilidade a cenários dinâmicos
- Pensamento crítico, criatividade na solução de problemas complexos
- Trabalho colaborativo em equipes multidisciplinares com segurança psicológica.`,
      en: `Academic Certificate in behavioral and interpersonal competencies by Faculdade Descomplica in partnership with Porta dos Fundos.

• Issue Date: March 2024
• Institution: Descomplica Faculdade Digital
• Validation Code: 82c886584237ef0b9e318e51517621b2d1f5300645b030c9a726b742517e9991

Skills & Topics Mastered:
- Authentic interpersonal communication, empathy, and active listening
- Emotional intelligence, composure under pressure, and dynamic adaptability
- Critical thinking and creative problem-solving methods
- Collaborative teamwork in multidisciplinary tech environments.`,
    },
  },

  // 30. Productivity and Organization (Descomplica)
  {
    id: "cert-descomplica-produtividade",
    name: {
      pt: "Productivity and Organization",
      en: "Productivity and Organization",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    credentialCode: "f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66",
    icon: "graduation",
    gradient: ["#10b981", "#059669"],
    tags: {
      pt: ["Produtividade", "Organização", "Descomplica"],
      en: ["Productivity", "Organization", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Gestão de Produtividade e Organização pela Faculdade Descomplica.

• Período de Emissão: Março de 2024
• Instituição: Descomplica Faculdade Digital
• Código de Validação: f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66

Competências e Tópicos Dominados:
- Metodologias de gestão de tempo e priorização (Matriz de Eisenhower, GTD e Pomodoro)
- Planejamento estratégico de rotinas operacionais e eliminação de desperdícios
- Ferramentas digitais para organização de fluxo de trabalho e documentação
- Gestão de energia pessoal e prevenção de sobrecarga cognitiva.`,
      en: `Academic Certificate in Personal Productivity & Work Organization from Faculdade Descomplica.

• Issue Date: March 2024
• Institution: Descomplica Faculdade Digital
• Validation Code: f2aa4f7fa83fed00ab1a2a2bac15249f7d2e43da57207f4230bc96dc40b90f66

Skills & Topics Mastered:
- Time management and prioritization frameworks (Eisenhower Matrix, GTD, Pomodoro)
- Strategic operational routine planning and workflow optimization
- Digital organization and documentation systems
- Focus management and cognitive load balancing.`,
    },
  },

  // 31. Introdução ao Desenvolvimento Web (Descomplica)
  {
    id: "cert-descomplica-intro-web",
    name: {
      pt: "Introdução ao Desenvolvimento Web",
      en: "Introduction to Web Development",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    credentialCode: "ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca",
    icon: "graduation",
    gradient: ["#0284c7", "#0369a1"],
    tags: {
      pt: ["Web", "HTML & CSS", "Descomplica"],
      en: ["Web", "HTML & CSS", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Fundamentos do Desenvolvimento Web pelo curso de Ciência da Computação da Faculdade Descomplica.

• Período de Emissão: Março de 2024
• Instituição: Descomplica Faculdade Digital
• Código de Validação: ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca

Competências e Tópicos Dominados:
- Arquitetura da Web: Modelo cliente-servidor, protocolo HTTP/HTTPS, DNS e requisições web
- Estruturação semântica de páginas com HTML5
- Estilização visual, seletores e regras de cascata com CSS3
- Princípios de responsividade e renderização nos navegadores modernos.`,
      en: `Academic Certificate in Web Development Foundations from Faculdade Descomplica.

• Issue Date: March 2024
• Institution: Descomplica Faculdade Digital
• Validation Code: ce35a3b34c0574229f3b8cf9b7f74711efe54c242b19ba96f94cfc9627817fca

Skills & Topics Mastered:
- Web architecture: Client-Server architecture, HTTP/HTTPS protocols, and DNS
- Semantic page structuring with HTML5
- Styling fundamentals, CSS selector hierarchies, and cascade rules
- Responsiveness basics and browser layout rendering.`,
    },
  },

  // 32. FrontEnd Development (Descomplica)
  {
    id: "cert-descomplica-frontend",
    name: {
      pt: "FrontEnd Development",
      en: "FrontEnd Development",
    },
    institution: "Descomplica Faculdade Digital",
    year: "2024",
    credentialCode: "ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d",
    credentialUrl: "https://certificados.descomplica.com.br/graduacao/ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d",
    icon: "graduation",
    gradient: ["#06b6d4", "#0e7490"],
    tags: {
      pt: ["Frontend", "JavaScript", "Descomplica"],
      en: ["Frontend", "JavaScript", "Descomplica"],
    },
    summary: {
      pt: `Certificado curricular em Desenvolvimento Front-End pela Faculdade Descomplica.

• Período de Emissão: Fevereiro de 2024
• Instituição: Descomplica Faculdade Digital
• Código de Validação: ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d

Competências e Tópicos Dominados:
- Desenvolvimento de interfaces ricas com JavaScript dinâmico
- Interação com eventos de usuário, validação em tempo real de formulários
- Integração e consumo de dados de serviços web externos via Fetch
- Organização e modularização de código Front-End escalável.`,
      en: `Academic Certificate in Front-End Development from Faculdade Descomplica.

• Issue Date: February 2024
• Institution: Descomplica Faculdade Digital
• Validation Code: ead3dc917363e05c64f419d592252984bb67bb1ea2af12249aef3693fe54b26d

Skills & Topics Mastered:
- Dynamic interface implementation using JavaScript
- User interaction event handling and real-time form validation
- External web service integration and data fetching
- Scalable and modular front-end code organization.`,
    },
  },

  // 33. Algoritmos e Lógica de Programação - O Curso COMPLETO (Udemy / Nelio Alves)
  {
    id: "cert-udemy-algoritmos-completo",
    name: {
      pt: "Algoritmos e Lógica de Programação - O Curso COMPLETO",
      en: "Algorithms & Programming Logic - Full Course",
    },
    institution: "Udemy / DevSuperior (Nelio Alves)",
    year: "2024",
    credentialCode: "UC-916926ad-ae85-4574-8ae2-725becffbd6c",
    credentialUrl: "https://www.udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/",
    icon: "certificate",
    gradient: ["#a855f7", "#9333ea"],
    tags: {
      pt: ["Algoritmos", "Lógica", "Udemy", "DevSuperior"],
      en: ["Algorithms", "Logic", "Udemy", "DevSuperior"],
    },
    summary: {
      pt: `Formação completa e exaustiva em raciocínio algorítmico, lógica de programação e estruturas de dados lecionada pelo Prof. Dr. Nelio Alves.

• Conclusão: Janeiro de 2024
• Plataforma / Instrutor: Udemy / Prof. Dr. Nelio Alves (DevSuperior)
• Código de Validação: UC-916926ad-ae85-4574-8ae2-725becffbd6c
• Validação Oficial: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/

Competências e Tópicos Dominados:
- Estruturação rigorosa de raciocínio computacional e testes de mesa completos
- Domínio de estruturas sequenciais, condicionais e laços de repetição
- Manipulação aprofundada de vetores e matrizes bidimensionais
- Implementação de algoritmos práticos em C, C++, Java e C#.`,
      en: `Exhaustive and rigorous mastery course in algorithmic logic and fundamental data structures taught by Prof. Dr. Nelio Alves.

• Completion: January 2024
• Platform / Instructor: Udemy / Prof. Dr. Nelio Alves (DevSuperior)
• Validation Code: UC-916926ad-ae85-4574-8ae2-725becffbd6c
• Official Verification: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/

Skills & Topics Mastered:
- Rigorous computational logic structuring and dry-run execution traces
- Deep control flow mastery (sequential, conditional branches, loops)
- In-depth manipulation of single and multi-dimensional arrays
- Multi-language implementation across C, C++, Java, and C#.`,
    },
  },

  // 34. Algoritmos e Lógica de Programação (DevSuperior)
  {
    id: "cert-devsuperior-logica",
    name: {
      pt: "Lógica de Programação e Estruturas de Dados",
      en: "Logic of Programming & Data Structures",
    },
    institution: "DevSuperior",
    year: "2024",
    credentialUrl: "https://www.udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/",
    icon: "graduation",
    gradient: ["#6366f1", "#4338ca"],
    tags: {
      pt: ["Algoritmos", "Lógica", "DevSuperior"],
      en: ["Algorithms", "Logic", "DevSuperior"],
    },
    summary: {
      pt: `Formação rigorosa em lógica computacional, estruturação de dados e resolução analítica de problemas ministrada pela escola DevSuperior.

• Ano de Conclusão: Janeiro de 2024
• Instituição: DevSuperior (Nelio Alves)
• Validação Oficial: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/

Competências e Tópicos Dominados:
- Estruturas de controle de fluxo: sequenciais, condicionais e laços de repetição
- Estruturas de dados básicas: vetores e matrizes multidimensionais
- Modularização de código, escopo de variáveis e passagem de parâmetros
- Testes de mesa, rastreamento mental de algoritmos e técnicas de depuração.`,
      en: `Rigorous training in computational logic, fundamental data structures, and algorithmic problem-solving taught by DevSuperior.

• Year of Completion: January 2024
• Institution: DevSuperior (Nelio Alves)
• Official Verification: udemy.com/certificate/UC-916926ad-ae85-4574-8ae2-725becffbd6c/

Skills & Topics Mastered:
- Flow control logic: sequential, branching conditionals, and repetition loops
- Essential data structures: vectors, arrays, and multidimensional matrices
- Code modularization, variable scope, parameter passing, and functional decomposition
- Dry runs, variable execution tracing, and systematic debugging methods.`,
    },
  },

  // 35. FrontEnd Development with Angular (DIO)
  {
    id: "cert-dio-angular",
    name: {
      pt: "FrontEnd Development with Angular",
      en: "FrontEnd Development with Angular",
    },
    institution: "Digital Innovation One (DIO)",
    year: "2024",
    credentialCode: "V87KIBKV",
    credentialUrl: "https://www.dio.me/certificate/V87KIBKV",
    icon: "certificate",
    gradient: ["#e11d48", "#9f1239"],
    tags: {
      pt: ["Angular", "TypeScript", "DIO", "Frontend"],
      en: ["Angular", "TypeScript", "DIO", "Frontend"],
    },
    summary: {
      pt: `Bootcamp de formação técnica em desenvolvimento frontend com o ecossistema Angular na Digital Innovation One.

• Ano de Conclusão: Fevereiro de 2024
• Instituição: Digital Innovation One (DIO)
• Código de Validação: V87KIBKV
• Validação Oficial: dio.me/certificate/V87KIBKV

Competências e Tópicos Dominados:
- Arquitetura de Componentes, Diretivas estruturais e Pipes customizados
- Injeção de dependência hierárquica e organização de Services no Angular
- Programação reativa com RxJS (Observables, Subjects, transform operators)
- Comunicação com APIs RESTful via HttpClient com tratamento de erros e interceptors
- Sistema de rotas com Route Guards (CanActivate) e Lazy Loading de módulos.`,
      en: `Technical frontend training bootcamp focusing on the Angular enterprise framework at Digital Innovation One.

• Year of Completion: February 2024
• Institution: Digital Innovation One (DIO)
• Validation Code: V87KIBKV
• Official Verification: dio.me/certificate/V87KIBKV

Skills & Topics Mastered:
- Component architecture, structural directives, and custom pipes
- Hierarchical dependency injection and service layer design
- Reactive programming using RxJS (Observables, Subjects, transform operators)
- RESTful HTTP communication via Angular HttpClient and request interceptors
- Single Page Application routing, route guards (CanActivate), and feature module lazy loading.`,
    },
  },

  // 36. Conectar (Rocketseat)
  {
    id: "cert-rocketseat-conectar",
    name: {
      pt: "Conectar",
      en: "Conectar",
    },
    institution: "Rocketseat",
    year: "2023",
    credentialCode: "2cee84ed-f001-4e3f-a65f-dff35afe655c",
    credentialUrl: "https://app.rocketseat.com.br/certificates/2cee84ed-f001-4e3f-a65f-dff35afe655c",
    icon: "certificate",
    gradient: ["#7c3aed", "#5b21b6"],
    tags: {
      pt: ["Fundamentos Web", "HTML", "CSS", "Rocketseat"],
      en: ["Web Foundations", "HTML", "CSS", "Rocketseat"],
    },
    summary: {
      pt: `Certificação do curso Conectar da trilha Discover ministrado pela Rocketseat.

• Conclusão: Janeiro de 2023
• Instituição: Rocketseat
• Código da Credencial: 2cee84ed-f001-4e3f-a65f-dff35afe655c
• Validação Oficial: app.rocketseat.com.br/certificates/2cee84ed-f001-4e3f-a65f-dff35afe655c

Competências e Tópicos Dominados:
- Fundamentos de redes, funcionamento da internet e arquitetura cliente-servidor
- Primeiros passos sólidos em marcação semântica com HTML5
- Estilização, regras visuais e cascading com CSS3
- Práticas fundamentais de código limpo e organização de arquivos na web.`,
      en: `Certification of the Conectar course within the Discover educational track by Rocketseat.

• Completion: January 2023
• Institution: Rocketseat
• Credential Code: 2cee84ed-f001-4e3f-a65f-dff35afe655c
• Official Verification: app.rocketseat.com.br/certificates/2cee84ed-f001-4e3f-a65f-dff35afe655c

Skills & Topics Mastered:
- Networking fundamentals, how the web works, and client-server architecture
- Foundational semantic structuring using HTML5
- Styling rules and cascading mechanics with CSS3
- Clean code best practices and web asset organization.`,
    },
  },

  // 37. Discover (Rocketseat)
  {
    id: "cert-rocketseat-discover",
    name: {
      pt: "Discover",
      en: "Discover",
    },
    institution: "Rocketseat",
    year: "2023",
    credentialCode: "83744a16-a446-4df6-9a62-5d042308a5f2",
    credentialUrl: "https://app.rocketseat.com.br/certificates/83744a16-a446-4df6-9a62-5d042308a5f2",
    icon: "certificate",
    gradient: ["#8b5cf6", "#6d28d9"],
    tags: {
      pt: ["Discover", "HTML", "Git", "Rocketseat"],
      en: ["Discover", "HTML", "Git", "Rocketseat"],
    },
    summary: {
      pt: `Formação completa da trilha Discover ministrada pela Rocketseat cobrindo toda a base do desenvolvimento de software para a web.

• Conclusão: Outubro de 2023
• Instituição: Rocketseat
• Código da Credencial: 83744a16-a446-4df6-9a62-5d042308a5f2
• Validação Oficial: app.rocketseat.com.br/certificates/83744a16-a446-4df6-9a62-5d042308a5f2

Competências e Tópicos Dominados:
- Fundamentos aprofundados da web, DOM e JavaScript para interatividade
- Controle de versão moderno com Git e repositórios remotos no GitHub
- Arquitetura de layouts flexíveis e responsivos para navegadores
- Resolução sistemática de desafios e construção de interfaces funcionais.`,
      en: `Comprehensive graduation of the Discover track by Rocketseat covering foundational web software development.

• Completion: October 2023
• Institution: Rocketseat
• Credential Code: 83744a16-a446-4df6-9a62-5d042308a5f2
• Official Verification: app.rocketseat.com.br/certificates/83744a16-a446-4df6-9a62-5d042308a5f2

Skills & Topics Mastered:
- In-depth web foundations, DOM manipulation, and interactive JavaScript
- Modern version control with Git and remote repository workflows on GitHub
- Responsive and flexible layout architectures for modern browsers
- Systematic problem solving and functional user interface implementation.`,
    },
  },
];

/**
 * Returns all certifications formatted as ProjectItems for the phone/desktop grid
 */
export function getCertifications(lang: Language = "br"): ProjectItem[] {
  const transMap = certificationsTranslations[lang] || certificationsTranslations["en"];
  const verifyTitle = VERIFY_LINK_TITLES[lang] || VERIFY_LINK_TITLES["en"];

  return ALL_CERTIFICATIONS.map((cert) => {
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
