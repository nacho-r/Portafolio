export type Locale = "es" | "en";

export const content = {
  es: {
    nav: ["Perfil", "Experiencia", "Casos", "Stack", "Contacto"],
    hero: {
      eyebrow: "Santiago, Chile",
      title: "Isaac Romero",
      role: "QA Automation Engineer & Full Stack Developer",
      description:
        "Diseño, automatizo y valido aplicaciones web y mobile para entregar software más confiable en entornos financieros, retail y software.",
      primaryCta: "Ver experiencia",
      secondaryCta: "Contactar",
      availability: "Disponible para roles QA Automation, SDET y Developer con foco en calidad.",
    },
    stats: [
      { value: "+4", label: "años de experiencia" },
      { value: "QA + Dev", label: "perfil técnico híbrido" },
      { value: "Web / Mobile / API", label: "cobertura de testing" },
    ],
    about: {
      title: "Perfil Profesional",
      body:
        "QA Automation Engineer y Developer con experiencia en automatización de pruebas, testing API, mobile testing, performance testing y desarrollo web. He trabajado en proyectos para sectores financiero, retail y software, participando en el diseño, ejecución y certificación de pruebas, gestión de defectos, documentación QA y automatización de flujos críticos. Me interesa construir soluciones que no solo funcionen, sino que también sean mantenibles, trazables y fáciles de validar en entornos exigentes.",
    },
    experienceTitle: "Experiencia",
    experience: [
      {
        company: "Proyecto Personal",
        period: "Ene 2025 - Jul 2025",
        role: "Full Stack Developer & QA Automation",
        bullets: [
          "Desarrollo de aplicación web con Next.js y Prisma para automatizar operaciones en una plataforma de criptomonedas.",
          "Consumo de APIs privadas para ejecución de acciones productivas en tiempo real.",
          "Automatización con Selenium en Python y validación de datos en entornos productivos.",
        ],
      },
      {
        company: "Inmetrics LATAM",
        period: "Dic 2022 - Oct 2024",
        role: "Analista Ingeniería Automatización de Calidad",
        bullets: [
          "Análisis de requisitos, diseño y ejecución de pruebas manuales y automatizadas para clientes bancarios.",
          "Creación de planes de prueba, matrices de cobertura, datos de prueba y evidencias.",
          "Gestión de defectos, certificaciones, trazabilidad y soporte en resolución de bloqueos.",
        ],
      },
      {
        company: "Sentra Software House Ltda.",
        period: "Jul 2022 - Dic 2022",
        role: "Ingeniero QA",
        bullets: [
          "Pruebas manuales, mobile, API testing y regresión para cliente bancario.",
          "Elaboración de planes de prueba y análisis de historias de usuario en entornos Agile.",
        ],
      },
      {
        company: "Tsoft",
        period: "Dic 2021 - May 2022",
        role: "QA Automation Engineer / Consultor Automatizador",
        bullets: [
          "Automatización de pruebas funcionales con Selenium, Cucumber, Java y Page Object Model.",
          "Pruebas de carga con JMeter y LoadRunner.",
          "Fundamentos de QA alineados a ISTQB Foundation Level.",
        ],
      },
    ],
    casesTitle: "Experiencia Aplicada",
    casesSubtitle: "",
    cases: [
      {
        title: "Automation Platform for Crypto Operations",
        tag: "Full Stack + QA Automation",
        text:
          "Aplicación web con Next.js, Prisma y APIs privadas para automatizar operaciones y validar datos en tiempo real.",
      },
      {
        title: "Banking QA Automation",
        tag: "Banca / Certificación",
        text:
          "Diseño y ejecución de pruebas, trazabilidad, evidencias, gestión de defectos y soporte a certificaciones para clientes financieros.",
      },
      {
        title: "API & Mobile Testing",
        tag: "API / Mobile",
        text:
          "Validación de servicios, flujos mobile y regresión funcional en entornos Agile con foco en casos críticos de negocio.",
      },
      {
        title: "Performance Testing",
        tag: "Carga / Rendimiento",
        text:
          "Pruebas de carga con JMeter y LoadRunner para identificar riesgos de rendimiento antes de release.",
      },
    ],
    stackTitle: "Stack Técnico",
    stackGroups: [
      {
        title: "Automatización",
        items: ["Selenium", "Appium", "Cucumber", "Playwright", "Cypress", "Python", "Java"],
      },
      {
        title: "Testing",
        items: [
          "Postman",
          "SoapUI",
          "API REST",
          "JMeter",
          "LoadRunner",
          "BrowserStack",
          "Regresión",
          "Defect Management",
        ],
      },
      {
        title: "Desarrollo",
        items: ["React", "Next.js", "Flutter", "Django", "HTML5", "CSS3", "Prisma"],
      },
      {
        title: "Datos y flujo",
        items: [
          "PostgreSQL",
          "SQL",
          "Virtualización de datos",
          "Salesforce",
          "Git",
          "Scrum",
          "Kanban",
          "Documentación QA",
        ],
      },
    ],
    education: {
      title: "Educación y Certificaciones",
      degree: "Ingeniería Civil Informática, Universidad Autónoma de Chile",
      period: "2019 - 2024",
      certs: "React, Responsive Web Design, jQuery, Java, HTML",
    },
    contact: {
      title: "Construyamos software más confiable.",
      text:
        "Estoy abierto a oportunidades QA Automation, SDET, QA Engineer técnico y desarrollo con foco en calidad.",
      email: "isaac16romero2000@gmail.com",
      linkedin: "LinkedIn",
    },
  },
  en: {
    nav: ["Profile", "Experience", "Cases", "Stack", "Contact"],
    hero: {
      eyebrow: "Santiago, Chile",
      title: "Isaac Romero",
      role: "QA Automation Engineer & Full Stack Developer",
      description:
        "I design, automate, and validate web and mobile applications to ship more reliable software across financial, retail, and software environments.",
      primaryCta: "View experience",
      secondaryCta: "Contact",
      availability: "Available for QA Automation, SDET, and quality-focused developer roles.",
    },
    stats: [
      { value: "+4", label: "years of experience" },
      { value: "QA + Dev", label: "hybrid technical profile" },
      { value: "Web / Mobile / API", label: "testing coverage" },
    ],
    about: {
      title: "Professional Profile",
      body:
        "QA Automation Engineer and Developer with experience in test automation, API testing, mobile testing, performance testing, and web development. I have worked on financial, retail, and software projects, contributing to test design, execution, certification, defect management, QA documentation, and automation of critical flows. I care about building software that is not only correct, but also maintainable, traceable, and easy to validate in demanding environments.",
    },
    experienceTitle: "Experience",
    experience: [
      {
        company: "Personal Project",
        period: "Jan 2025 - Jul 2025",
        role: "Full Stack Developer & QA Automation",
        bullets: [
          "Built a web application with Next.js and Prisma to automate operations on a cryptocurrency platform.",
          "Integrated private APIs to execute real-time productive actions.",
          "Implemented Selenium automation in Python and data validation in production environments.",
        ],
      },
      {
        company: "Inmetrics LATAM",
        period: "Dec 2022 - Oct 2024",
        role: "Quality Automation Engineering Analyst",
        bullets: [
          "Analyzed requirements, designed, and executed manual and automated tests for banking clients.",
          "Created test plans, coverage matrices, test data, and evidence documentation.",
          "Managed defects, certifications, traceability, and support for blocker resolution.",
        ],
      },
      {
        company: "Sentra Software House Ltda.",
        period: "Jul 2022 - Dec 2022",
        role: "QA Engineer",
        bullets: [
          "Executed manual testing, mobile testing, API testing, and regression testing for a banking client.",
          "Created test plans and analyzed user stories in Agile environments.",
        ],
      },
      {
        company: "Tsoft",
        period: "Dec 2021 - May 2022",
        role: "QA Automation Engineer / Automation Consultant",
        bullets: [
          "Automated functional tests with Selenium, Cucumber, Java, and Page Object Model.",
          "Performed load testing with JMeter and LoadRunner.",
          "Applied QA fundamentals aligned with ISTQB Foundation Level.",
        ],
      },
    ],
    casesTitle: "Applied Experience",
    casesSubtitle: "",
    cases: [
      {
        title: "Automation Platform for Crypto Operations",
        tag: "Full Stack + QA Automation",
        text:
          "Web application using Next.js, Prisma, and private APIs to automate operations and validate real-time data.",
      },
      {
        title: "Banking QA Automation",
        tag: "Banking / Certification",
        text:
          "Test design and execution, traceability, evidence, defect management, and certification support for financial clients.",
      },
      {
        title: "API & Mobile Testing",
        tag: "API / Mobile",
        text:
          "Service validation, mobile flows, and functional regression in Agile environments focused on critical business cases.",
      },
      {
        title: "Performance Testing",
        tag: "Load / Performance",
        text:
          "Load testing with JMeter and LoadRunner to identify performance risks before release.",
      },
    ],
    stackTitle: "Technical Stack",
    stackGroups: [
      {
        title: "Automation",
        items: ["Selenium", "Appium", "Cucumber", "Playwright", "Cypress", "Python", "Java"],
      },
      {
        title: "Testing",
        items: [
          "Postman",
          "SoapUI",
          "REST API",
          "JMeter",
          "LoadRunner",
          "BrowserStack",
          "Regression",
          "Defect Management",
        ],
      },
      {
        title: "Development",
        items: ["React", "Next.js", "Flutter", "Django", "HTML5", "CSS3", "Prisma"],
      },
      {
        title: "Data and workflow",
        items: [
          "PostgreSQL",
          "SQL",
          "Data virtualization",
          "Salesforce",
          "Git",
          "Scrum",
          "Kanban",
          "QA Documentation",
        ],
      },
    ],
    education: {
      title: "Education and Certifications",
      degree: "Computer Science Engineering, Universidad Autónoma de Chile",
      period: "2019 - 2024",
      certs: "React, Responsive Web Design, jQuery, Java, HTML",
    },
    contact: {
      title: "Let's build more reliable software.",
      text:
        "I am open to QA Automation, SDET, technical QA Engineer, and quality-focused development opportunities.",
      email: "isaac16romero2000@gmail.com",
      linkedin: "LinkedIn",
    },
  },
} as const;
