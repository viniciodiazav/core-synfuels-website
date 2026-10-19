import { Dictionary } from "./types";

export const esDictionary: Dictionary = {
  locale: "es",
  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    divisions: "Industrias",
    howWeWork: "Metodología",
    library: "Galería",
    values: "Valores",
    contact: "Contacto",
    ctaButton: "Habla de tu proyecto",
    langSelect: "Idioma",
  },
  hero: {
    tag: "CORE SYNFUELS • CONSULTORÍA Y SOLUCIONES INDUSTRIALES",
    title: "Proyectos que conectan",
    titleHighlight: "oportunidades.",
    subtitle:
      "Estructuramos proyectos, conectamos capacidades y desarrollamos soluciones para transformar desafíos técnicos y comerciales en oportunidades ejecutables. Transformamos oportunidades industriales en proyectos viables y ejecutables.",
    ctaPrimary: "Explorar Servicios",
    ctaSecondary: "Habla de tu proyecto",
    badges: {
      businessStrength: "Solidez empresarial",
      engineering: "Ingeniería",
      evolution: "Evolución",
      globalReach: "Alcance global",
    },
    previewCard: {
      tag: "SOLUCIONES INDUSTRIALES GLOBALES Y GESTIÓN DE PROYECTOS",
      title: "PROYECTOS QUE CONECTAN OPORTUNIDADES",
      description:
        "Convertimos ideas de alto impacto en proyectos estructurados que impulsan el desarrollo económico y un futuro sostenible.",
      points: [
        "Evaluación de mercados globales",
        "Alianzas estratégicas de ingeniería",
        "Integración de proyectos multidisciplinarios",
        "Modelación financiera y viabilidad",
        "Impacto sostenible y cumplimiento ambiental",
      ],
      bannerTitle: "UN MAÑANA MÁS LIMPIO Y PRÓSPERO",
      bannerSubtitle: "MERCADOS GLOBALES • ALIANZAS ESTRATÉGICAS • IMPACTO SOSTENIBLE",
      ctaText: "Presentación corporativa • ver resumen",
    },
  },
  about: {
    tag: "01 / NUESTRA PLATAFORMA",
    title: "Soluciones industriales con visión internacional.",
    subtitle:
      "Una plataforma de consultoría que reúne estrategia, capacidad técnica y tecnología para desarrollar proyectos responsables, competitivos y escalables.",
    purpose: {
      number: "01",
      title: "Propósito",
      description:
        "Conectar recursos, conocimiento y tecnología para habilitar nuevas oportunidades de desarrollo industrial y aprovechamiento responsable de materiales y energía.",
    },
    mission: {
      number: "02",
      title: "Misión",
      description:
        "Diseñar, estructurar y ejecutar soluciones de consultoría y desarrollo de proyectos en energía, hidrocarburos, minerales, reciclaje, tecnología y manufactura, articulando socios estratégicos, capacidades técnicas y modelos de negocio que generen valor económico y operativo con responsabilidad ambiental y social.",
    },
    vision: {
      number: "03",
      title: "Visión",
      description:
        "Consolidarnos como una plataforma internacional de soluciones industriales reconocida por convertir oportunidades complejas en proyectos competitivos, seguros, tecnológicamente sólidos y replicables, impulsando el desarrollo de los sectores productivos donde participamos.",
    },
    geography: {
      tag: "PRESENCIA GEOGRÁFICA",
      title: "Presencia Binacional: Texas y México",
      description:
        "Core Synfuels es una empresa establecida en Texas, Estados Unidos, con presencia comercial declarada también en México para la estructuración y coordinación de proyectos industriales clave.",
      texasLabel: "Texas, Estados Unidos",
      texasDetail:
        "Sede corporativa, estructuración de capital internacional y articulación de tecnología global.",
      mexicoLabel: "Presencia Comercial en México",
      mexicoDetail:
        "Coordinación regional de proyectos, alineación regulatoria y vinculación con especialistas y proveedores industriales.",
      corridorLabel: "Corredor de Coordinación Comercial y de Ingeniería",
      disclaimer:
        "Nota: Comunicamos nuestros servicios estrictamente como consultoría, estructuración y desarrollo de proyectos, coordinando especialistas y proveedores calificados.",
    },
  },
  services: {
    tag: "CAPACIDADES ESTRATÉGICAS",
    title: "Cuatro Pilares de Consultoría Industrial",
    subtitle:
      "Diferenciamos con total claridad nuestros servicios profesionales de las industrias en las que participamos. Cada servicio responde a una etapa crítica de estructuración y gestión.",
    disclaimer:
      "Brindamos consultoría estratégica, análisis de viabilidad y gestión integral de proyectos, articulando expertos sin afirmar operación directa de plantas no confirmadas.",
    items: [
      {
        id: "feasibility",
        number: "01",
        title: "Project Feasibility & Advisory",
        shortDesc: "Evaluación de oportunidades, estudios preliminares y viabilidad integral.",
        description:
          "Evaluación rigurosa de viabilidad técnica, comercial y regulatoria para iniciativas industriales. Diseñamos estudios preliminares de mercado, análisis de sitio y modelos de riesgo antes de comprometer capital.",
        deliverables: [
          "Estudios de demanda y prefactibilidad económica",
          "Análisis de brechas normativas y regulatorias",
          "Perfiles de riesgo y bancabilidad de proyectos",
          "Rutas críticas de impacto ambiental y permisos",
        ],
        icon: "FileBarChart",
        cta: "Solicitar Asesoría de Viabilidad",
      },
      {
        id: "development",
        number: "02",
        title: "Project Development",
        shortDesc: "Planeación, estructuración financiera y arquitectura de proyectos industriales.",
        description:
          "Estructuración integral de proyectos industriales listos para financiamiento y ejecución. Definimos el alcance de ingeniería, modelos financieros detallados (CAPEX/OPEX) y la arquitectura contractual para inversionistas.",
        deliverables: [
          "Estructuración comercial y contractual robusta",
          "Definición de alcances técnicos y especificaciones",
          "Marcos de gobernanza y toma de decisiones",
          "Planes de integración de socios e inversionistas",
        ],
        icon: "DraftingCompass",
        cta: "Estructurar mi Proyecto",
      },
      {
        id: "management",
        number: "03",
        title: "Project Management",
        shortDesc: "Coordinación y seguimiento de proyectos, especialistas, presupuestos y cronogramas.",
        description:
          "Acompañamiento directivo y supervisión multidisciplinaria. Actuamos como asesores del cliente coordinando especialistas técnicos, supervisando contratistas y auditando presupuestos y cronogramas maestros.",
        deliverables: [
          "Supervisión y control por etapas clave (Stage-Gate)",
          "Control estricto de presupuestos y contingencias",
          "Coordinación de especialistas y firmas proveedoras",
          "Supervisión de cumplimiento normativo y seguridad",
        ],
        icon: "Workflow",
        cta: "Coordinar Gestión de Proyecto",
      },
      {
        id: "partnerships",
        number: "04",
        title: "Technology & Strategic Partnerships",
        shortDesc: "Evaluación de tecnologías, integración de proveedores y desarrollo de alianzas.",
        description:
          "Articulación de tecnologías industriales probadas y socios estratégicos. Evaluamos soluciones técnicas emergentes, auditamos proveedores calificados y estructuramos acuerdos de transferencia tecnológica.",
        deliverables: [
          "Benchmarking tecnológico y planes piloto",
          "Calificación y filtro de proveedores especializados",
          "Alianzas estratégicas y acuerdos de colaboración",
          "Estructuración de licencias y transferencia de tecnología",
        ],
        icon: "Network",
        cta: "Explorar Alianzas Tecnológicas",
      },
    ],
  },
  divisions: {
    tag: "02 / ARQUITECTURA CORPORATIVA",
    title: "Seis líneas de negocio. Una visión compartida.",
    subtitle:
      "Cada oportunidad requiere una solución a la medida. Core Synfuels apoya en la evaluación, estructuración y gestión de proyectos, conectando tecnología, especialistas, socios y visión de negocios para decisiones informadas y ejecución disciplinada.",
    modalClose: "Cerrar detalles",
    transversalBadge: "SERVICIO TRANSVERSAL",
    items: [
      {
        id: "energy",
        number: "01 / ENERGY",
        name: "Energy",
        tagline: "Infraestructura Energética, Generación y Transición",
        description:
          "¿Planeas una iniciativa energética? Te ayudamos a definir la estrategia, evaluar la viabilidad técnica y económica, estructurar el modelo de desarrollo e integrar especialistas y tecnología. Acompañamos la planeación, coordinación por etapas y supervisión de riesgos para que tu iniciativa avance con metas claras y resultados medibles.",
        icon: "Zap",
        bullets: [
          "Evaluación de proyectos de energía renovable y transición",
          "Estructuración de interconexión eléctrica y transmisión",
          "Asesoría en contratos de suministro (PPA) y regulación",
          "Integración de especialistas y tecnología de punta",
        ],
        actionText: "Ver presentación →",
        detailKeyAreas: [
          "Estudios de viabilidad para generación solar, eólica e híbrida",
          "Estrategias de descarbonización para grandes industrias",
          "Sistemas de almacenamiento energético y respaldo",
          "Gestión de permisos de transmisión binacional (EE. UU. - México)",
        ],
      },
      {
        id: "oil-gas",
        number: "02 / OIL & GAS",
        name: "Oil & Gas",
        tagline: "Hidrocarburos, Almacenamiento y Cumplimiento Normativo",
        description:
          "Apoyamos tu iniciativa en hidrocarburos desde el concepto hasta la preparación para su ejecución: evaluación de oportunidades, definición del alcance, estructuración comercial y contractual, planeación de infraestructura y coordinación multidisciplinaria con estricta seguridad industrial y gestión de riesgos.",
        icon: "Droplets",
        bullets: [
          "Estructuración de terminales de almacenamiento y ductos",
          "Modernización y definición técnica para plantas de proceso",
          "Cumplimiento en seguridad industrial (HSE) y normativas",
          "Análisis de riesgo contractual y supervisión de proveedores",
        ],
        actionText: "Ver presentación →",
        detailKeyAreas: [
          "Logística de almacenamiento y distribución de combustibles",
          "Sistemas de compresión y transporte de gas natural",
          "Mitigación de impacto ambiental y planes de contingencia",
          "Selección rigurosa y auditoría de contratistas",
        ],
      },
      {
        id: "minerals",
        number: "03 / MINERALS",
        name: "Minerals",
        tagline: "Desarrollo de Recursos, Procesamiento y Logística",
        description:
          "Un proyecto minero requiere una visión integral de recursos, operaciones y mercados. Asistimos con evaluación preliminar, estructuración técnica y comercial, planes de extracción y procesamiento, logística y distribución, considerando seguridad, permisos aplicables, costos y responsabilidad ambiental.",
        icon: "Gem",
        bullets: [
          "Evaluación geológica preliminar y valorización de reservas",
          "Estudios de viabilidad de plantas de beneficio de mineral",
          "Modelos de logística y cadena de suministro de minerales",
          "Coordinación de permisos ambientales y licencia social",
        ],
        actionText: "Ver presentación →",
        detailKeyAreas: [
          "Desarrollo de minerales críticos y materias primas para baterías",
          "Diseño de ingeniería conceptual para procesamiento mineral",
          "Logística de transporte y aduanas transfronterizas",
          "Gestión de jales y remediación ambiental responsable",
        ],
      },
      {
        id: "recycling",
        number: "04 / RECYCLING",
        name: "Recycling",
        tagline: "Economía Circular, Valorización y Aprovechamiento de Residuos",
        description:
          "¿Buscas convertir materiales aprovechables o flujos de residuos en una oportunidad de negocio? Ayudamos a analizar el suministro, evaluar opciones tecnológicas, diseñar modelos de valorización y estructurar el proyecto integrando trazabilidad, logística y cumplimiento ambiental en una estrategia escalable.",
        icon: "Recycle",
        bullets: [
          "Estudios de volumen y caracterización de residuos industriales",
          "Evaluación de reciclaje químico, pirolítico y mecánico",
          "Trazabilidad y certificación de economía circular",
          "Estructuración de contratos de venta de materiales recuperados",
        ],
        actionText: "Habla del alcance →",
        detailKeyAreas: [
          "Modelos de negocio para circularidad de plásticos y polímeros",
          "Plantas de recuperación de chatarra industrial y RAEE",
          "Conversión de biomasa y combustibles derivados de residuos",
          "Protocolos de trazabilidad para créditos de carbono y sostenibilidad",
        ],
      },
      {
        id: "technology",
        number: "05 / TECHNOLOGY",
        name: "Technology",
        tagline: "Automatización Industrial, Sistemas Digitales y Escalabilidad",
        description:
          "Convertimos una propuesta tecnológica en una ruta de desarrollo evaluable: estudios de aplicación industrial, identificación de socios, planes piloto y de pruebas, revisiones de riesgo técnico y comercial, y acuerdos de transferencia o implementación para respaldar decisiones informadas antes de escalar inversiones.",
        icon: "Cpu",
        bullets: [
          "Ruta de automatización industrial e integración SCADA",
          "Gemelos digitales de proceso y analítica predictiva",
          "Diseño de pilotos industriales y benchmarking de soluciones",
          "Acuerdos de licenciamiento y transferencia tecnológica",
        ],
        actionText: "Habla del alcance →",
        detailKeyAreas: [
          "Robótica industrial aplicada a entornos de alto riesgo",
          "Telemetría y sensores para eficiencia energética en planta",
          "Arquitectura de control neutral respecto a proveedores",
          "Escalamiento comercial de patentes industriales",
        ],
      },
      {
        id: "manufacturing",
        number: "06 / MANUFACTURING",
        name: "Manufacturing",
        tagline: "Modernización de Plantas, Capacidad y Productividad",
        description:
          "Apoyamos la planeación o modernización de operaciones de manufactura mediante diagnósticos de necesidades, definición de instalaciones y equipos, análisis de capacidad, integración de proveedores y estrategias de productividad, alineando requisitos técnicos, financieros y de cadena de suministro.",
        icon: "Factory",
        bullets: [
          "Diagnóstico de modernización y ampliación de líneas",
          "Selección de maquinaria y auditoría de proveedores",
          "Modelación de capacidad instalada y cuellos de botella",
          "Estructuración para relocalización de plantas (Nearshoring)",
        ],
        actionText: "Habla del alcance →",
        detailKeyAreas: [
          "Instalación de plantas por nearshoring en el corredor EE. UU. - México",
          "Optimización de líneas de autopartes y aeroespacial",
          "Integración de infraestructura de manufactura esbelta (Lean)",
          "Sistemas de aseguramiento de calidad con proveedores",
        ],
      },
    ],
    transversal: {
      number: "07 / PROJECT SOLUTIONS",
      name: "Project Solutions",
      tagline: "Enfoque Transversal y Gobernanza Integral de Proyectos",
      description:
        "Cuando una oportunidad abarca múltiples disciplinas, brindamos estructuración integral: estudios de viabilidad, modelación financiera, estimaciones y control presupuestal, cronogramas maestros, identificación de riesgos, alianzas, contratos y gobernanza de proyectos para que inversionistas y directivos tomen decisiones con máxima claridad.",
      bullets: [
        "Coordinación integral de proyectos intersectoriales",
        "Supervisión de cronograma maestro y gestión de múltiples contratos",
        "Marcos ejecutivos para toma de decisiones e informes de KPI",
        "Gobernanza contractual y mitigación proactiva de riesgos",
      ],
      actionText: "Ver presentación →",
    },
  },
  howWeWork: {
    tag: "NUESTRA METODOLOGÍA",
    title: "Marco de Ejecución Disciplinado en 5 Etapas",
    subtitle:
      "Una metodología estructurada para eliminar la incertidumbre, proteger el presupuesto y garantizar entregables industriales verificables.",
    steps: [
      {
        step: "01",
        title: "Project Assessment",
        icon: "Search",
        description:
          "Diagnóstico técnico y comercial inicial. Evaluamos el entorno de la oportunidad, restricciones del sitio y viabilidad preliminar para definir fronteras de proyecto claras.",
        outputs: "Matriz de Oportunidad y Documento Base de Alcance",
      },
      {
        step: "02",
        title: "Feasibility & Planning",
        icon: "TrendingUp",
        description:
          "Análisis exhaustivo técnico, financiero y normativo. Elaboramos modelación de CAPEX/OPEX, revisión de permisos y pruebas de estrés financiero por escenarios.",
        outputs: "Estudio de Viabilidad Bancable y Modelo Financiero",
      },
      {
        step: "03",
        title: "Project Structuring",
        icon: "Layers",
        description:
          "Diseño de la arquitectura comercial, contractual y técnica. Alineamos contratos con socios clave, definimos protocolos de gobernanza y cronogramas maestros.",
        outputs: "Arquitectura de Ejecución y Plan Maestro de Proyecto",
      },
      {
        step: "04",
        title: "Execution Coordination",
        icon: "Cog",
        description:
          "Acompañamiento y supervisión durante el despliegue técnico. Coordinamos a contratistas especializados, auditamos hitos de calidad y vigilamos el presupuesto.",
        outputs: "Control de Etapas (Stage-Gate) y Auditoría de Proveedores",
      },
      {
        step: "05",
        title: "Project Monitoring",
        icon: "LayoutDashboard",
        description:
          "Monitoreo continuo y reportes ejecutivos de desempeño. Proporcionamos tableros de control con KPI en tiempo real, conciliación de plazos y mitigación de desviaciones.",
        outputs: "Tableros de KPI Ejecutivos y Reportes Periódicos",
      },
    ],
  },
  library: {
    tag: "03 / BIBLIOTECA VISUAL",
    title: "Soluciones que puedes ver. Proyectos que puedes comprender.",
    subtitle:
      "Explora aplicaciones prácticas de nuestra capacidad para estructurar, coordinar y dirigir proyectos. Cada imagen destaca los retos que abordamos y cómo aportamos claridad técnica, control y una ruta de desarrollo.",
    disclaimer:
      "Las siguientes imágenes corresponden a marcos de capacidad e infraestructura industrial analizados conceptualmente por Core Synfuels como referencia para evaluación comercial.",
    items: [
      {
        id: "energy-grid",
        division: "ENERGY",
        title: "Generación de Energía e Infraestructura Eléctrica Moderna",
        description:
          "Estructuración integral de plantas de generación, subestaciones y microrredes industriales con máxima confiabilidad operativa.",
        focus: ["Ruta de Descarbonización", "Interconexión Eléctrica", "Integración Renovable"],
        badge: "Infraestructura Industrial",
      },
      {
        id: "petrochemical",
        division: "OIL & GAS",
        title: "Procesamiento de Hidrocarburos y Logística de Almacenamiento",
        description:
          "Coordinación de terminales de almacenamiento, ductos y marcos de seguridad industrial bajo rigurosas normativas ambientales.",
        focus: ["Seguridad Operativa (HSE)", "Logística de Terminales", "Supervisión de Ductos"],
        badge: "Ingeniería de Procesos",
      },
      {
        id: "mining-logistics",
        division: "MINERALS",
        title: "Plantas de Procesamiento de Minerales y Corredores Logísticos",
        description:
          "Estructuración de logística de acarreo, plantas de beneficio de mineral y redes transfronterizas con estricto apego a criterios ESG.",
        focus: ["Beneficio de Minerales", "Corredores Logísticos", "Estrategia de Permisos"],
        badge: "Logística de Recursos",
      },
      {
        id: "circular-plant",
        division: "RECYCLING",
        title: "Plantas de Valorización y Economía Circular",
        description:
          "Desarrollo de modelos viables para recuperación de polímeros, valorización de biomasa y comercialización de insumos secundarios.",
        focus: ["Estrategia Circular", "Residuo a Valor", "Trazabilidad de Materiales"],
        badge: "Economía Circular",
      },
      {
        id: "industrial-automation",
        division: "TECHNOLOGY",
        title: "Automatización Industrial y Sistemas de Control Avanzados",
        description:
          "Integración de sensores para fábricas inteligentes, telemetría y control de procesos para maximizar rendimientos industriales.",
        focus: ["Control de Procesos", "IoT Industrial", "Integración de Proveedores"],
        badge: "Tecnología Aplicada",
      },
      {
        id: "modern-manufacturing",
        division: "MANUFACTURING",
        title: "Unidades Manufactureras de Alto Rendimiento y Ensamble",
        description:
          "Diseño de plantas modernas, optimización de flujos y cadenas de suministro resilientes para operaciones de relocalización (Nearshoring).",
        focus: ["Corredor Nearshoring", "Optimización de Capacidad", "Cadena de Suministro"],
        badge: "Manufactura Avanzada",
      },
    ],
  },
  values: {
    tag: "PRINCIPIOS FUNDAMENTALES",
    title: "Principios que guían cada decisión.",
    subtitle:
      "Core Synfuels se posiciona como un socio altamente competitivo para proyectos industriales que demandan confiabilidad, visión técnica y disciplina comercial. Nuestra propuesta va más allá de la asesoría: buscamos integrar capacidades, anticipar riesgos y respaldar decisiones que generen valor verificable.",
    items: [
      {
        number: "01",
        title: "Integridad",
        description:
          "Cuidamos la confianza detrás de tu inversión mediante condiciones claras, decisiones transparentes, manejo responsable de la información y atención a potenciales conflictos de interés.",
      },
      {
        number: "02",
        title: "Seguridad",
        description:
          "Integramos la seguridad desde la etapa de planeación para proteger a las personas, las instalaciones y la continuidad operativa por encima de metas inmediatas.",
      },
      {
        number: "03",
        title: "Rigor técnico",
        description:
          "Respaldamos decisiones con supuestos documentados, análisis técnico y financiero, revisión de costos y evaluación explícita de riesgos e incertidumbres.",
      },
      {
        number: "04",
        title: "Sostenibilidad responsable",
        description:
          "Incorporamos consideraciones ambientales y sociales al desarrollo de proyectos, enfatizando trazabilidad, cumplimiento y mejoras que puedan medirse y comprobarse.",
      },
      {
        number: "05",
        title: "Innovación aplicada",
        description:
          "Incorporamos tecnologías probadas que resuelvan retos operativos específicos, evitando la especulación y orientándonos a la productividad tangible.",
      },
      {
        number: "06",
        title: "Colaboración",
        description:
          "Construimos alianzas estratégicas con especialistas de primer nivel en ingeniería, proveeduría y finanzas, sumando capacidades sin conflictos de interés.",
      },
      {
        number: "07",
        title: "Rentabilidad disciplinada",
        description:
          "Cada recomendación técnica está respaldada por proyecciones financieras realistas, retorno de inversión sustentable y prudente asignación de capital.",
      },
      {
        number: "08",
        title: "Ejecución",
        description:
          "Nos enfocamos en el cumplimiento riguroso de hitos y metas, convirtiendo oportunidades técnicas complejas en realidades operativas estructuradas.",
      },
    ],
  },
  contact: {
    tag: "INICIA UNA CONVERSACIÓN",
    title: "Platiquemos de tu Proyecto Industrial",
    subtitle:
      "Contacta a nuestro equipo de consultoría para evaluar la viabilidad de tu iniciativa, estructurar la ruta comercial o coordinar capacidades de ingeniería especializada.",
    form: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "Ej. Juan Pérez",
      companyLabel: "Empresa u Organización",
      companyPlaceholder: "Ej. Industrias del Norte S.A. de C.V.",
      emailLabel: "Correo Electrónico Corporativo",
      emailPlaceholder: "jperez@empresa.com",
      phoneLabel: "Teléfono de Contacto",
      phonePlaceholder: "+52 (55) 1234-5678 / +1 (555) 000-0000",
      countryLabel: "País",
      countryOptions: [
        { value: "MX", label: "México" },
        { value: "US", label: "Estados Unidos" },
        { value: "CA", label: "Canadá" },
        { value: "OTHER", label: "Otro País" },
      ],
      industryLabel: "Industria de Interés",
      industryOptions: [
        { value: "energy", label: "Energía e Infraestructura" },
        { value: "oil-gas", label: "Petróleo y Gas (Oil & Gas)" },
        { value: "minerals", label: "Minería y Minerales" },
        { value: "recycling", label: "Reciclaje y Economía Circular" },
        { value: "technology", label: "Tecnología y Automatización" },
        { value: "manufacturing", label: "Manufactura y Plantas" },
        { value: "project-solutions", label: "Project Solutions (Transversal)" },
      ],
      serviceLabel: "Tipo de Servicio Requerido",
      serviceOptions: [
        { value: "feasibility", label: "Project Feasibility & Advisory (Viabilidad)" },
        { value: "development", label: "Project Development (Estructuración)" },
        { value: "management", label: "Project Management (Gestión y Supervisión)" },
        { value: "partnerships", label: "Technology & Strategic Partnerships (Alianzas)" },
        { value: "comprehensive", label: "Paquete de Consultoría Integral" },
      ],
      messageLabel: "Breve Descripción del Proyecto",
      messagePlaceholder:
        "Cuéntanos sobre la oportunidad, ubicación estimada, etapa actual y requerimientos principales...",
      submitBtn: "Enviar Solicitud de Información",
      submittingBtn: "Transmitiendo solicitud...",
      successTitle: "Solicitud Recibida Exitosamente",
      successDesc:
        "Gracias por contactar a Core Synfuels. Un consultor industrial senior evaluará la información y se pondrá en contacto contigo en un plazo menor a 24 horas hábiles.",
      resetBtn: "Enviar otra solicitud",
    },
    info: {
      locationTitle: "Presencia Binacional",
      texasTitle: "Sede Corporativa y Estratégica",
      texasDesc: "Texas, Estados Unidos",
      mexicoTitle: "Representación Comercial",
      mexicoDesc: "Corredor Industrial México",
      emailTitle: "Correo Directo",
      emailValue: "contact@coresynfuels.com",
      hoursTitle: "Horario de Atención",
      hoursValue: "Lunes a Viernes: 8:00 AM – 6:00 PM (CST)",
      commitmentTitle: "Compromiso de Confidencialidad",
      commitmentDesc:
        "Toda información compartida sobre proyectos se gestiona bajo estrictos acuerdos de confidencialidad y ética corporativa.",
    },
  },
  footer: {
    tagline:
      "Core Synfuels es una firma de desarrollo y consultoría estructurada para proyectos industriales con sede en Texas y presencia comercial en México.",
    scopeNotice:
      "Aviso Legal: Core Synfuels actúa como firma consultora de estructuración y coordinación de proyectos industriales. No opera ni construye directamente instalaciones que no cuenten con contratos y acreditaciones explícitas.",
    copyright: "© 2026 Core Synfuels LLC. Todos los derechos reservados.",
    navTitle: "Navegación",
    servicesTitle: "Servicios",
    industriesTitle: "Industrias",
    contactTitle: "Oficinas y Contacto",
  },
};
