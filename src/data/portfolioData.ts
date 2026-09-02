import { Project, Skill } from '../types';

export const PROFILE_INFO = {
  name: 'Jonatan Villalón',
  tagline: 'Desarrollador Experto en WordPress, PHP & E-Commerce | WPO Speed Specialist',
  heroTitle: 'Desarrollo WordPress de Alto Rendimiento, Temas a Medida & Plugins Personalizados',
  heroSubtitle: 'Especialista en desarrollo WordPress full-custom, optimización de velocidad (WPO), arquitectura PHP y tiendas WooCommerce orientadas a ventas para agencias, empresas y marcas globales.',
  location: 'Río Tercero, Córdoba, Argentina',
  email: 'villalonjonatan@gmail.com',
  phone: '+54 3571 354416',
  linkedin: 'https://www.linkedin.com/in/jonatan-villalon-a6ba90142/',
  github: 'https://github.com/jonatanVillalon/',
  avatarUrl: '/assets/jonatan_photo.png',
  bio: 'Desarrollador Web especializado en el ecosistema WordPress con más de 8 años de experiencia real en producción. Mi especialidad radica en la creación de temas y plugins personalizados en PHP 8, tiendas WooCommerce optimizadas para conversión, maquetación ágil con Elementor Pro, Divi y Gutenberg, y auditorías WPO avanzadas para llevar la velocidad de carga de tus sitios al score 90+ en PageSpeed Insights.',
  stats: [
    { label: 'Años Especializado en WordPress', value: '8+' },
    { label: 'Sitios WordPress & E-Commerce', value: '35+' },
    { label: 'Ahorro Carga WPO Promedio', value: '-80%' },
    { label: 'Agencias & Empresas Clientes', value: '25+' },
  ],
  agencies: ['JJLBRO Digital Marketing', 'La Generatriz Agencia', 'Estudio Nobel', 'Next-U Web'],
  wordpressStack: [
    'Desarrollo de Temas a Medida (Custom Theme Dev)',
    'Desarrollo de Plugins PHP Personalizados',
    'WooCommerce & Pasarelas de Pago (MercadoPago, Stripe)',
    'Optimización WPO (PageSpeed 90+ / Core Web Vitals)',
    'Constructores: Elementor Pro, Divi, Gutenberg & Bricks',
    'Advanced Custom Fields (ACF Pro) & Custom Post Types',
    'Migraciones de Servidores, cPanel, DHM & Seguridad WP',
    'Integración con React / Headless WordPress API'
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'comercio-y-justicia',
    title: 'Comercio y Justicia',
    subtitle: 'Portal WordPress de Alto Tráfico y Sistema de Capacitaciones',
    category: 'wordpress',
    categoryLabel: 'WordPress Portal & PHP',
    description: 'Desarrollo, arquitectura PHP y mantenimiento continuo para uno de los medios periodísticos y jurídicos más importantes de Córdoba.',
    fullDescription: 'Reestructuración integral del portal institucional de noticias en WordPress y el subdominio educativo /capacitaciones/, asegurando máxima estabilidad ante picos simultáneos de tráfico y venta de cursos online.',
    problem: 'Saturación del sitio con miles de artículos publicados, velocidad lenta en búsquedas y falta de un módulo intuitivo para la venta de capacitaciones legales.',
    solution: 'Desarrollo de arquitectura WordPress optimizada, Custom Post Types en PHP, pasarela de cobro local e integración con boletines automatizados.',
    processSteps: [
      { title: 'Auditoría & Estructura WP', description: 'Reorganización de taxonomías y base de datos MySQL para agilizar la carga de noticias.' },
      { title: 'Custom Post Types & PHP 8', description: 'Programación de módulos de capacitaciones, docentes y suscripciones personalizadas.' },
      { title: 'Integración MercadoPago', description: 'Inscripción y cobro automatizado para diplomaturas y cursos.' }
    ],
    technologies: ['WordPress Custom', 'PHP 8', 'ACF Pro', 'MySQL', 'JavaScript', 'MercadoPago API', 'CSS3/SASS'],
    liveUrl: 'https://comercioyjusticia.info',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Visitas Mensuales', value: '+250K' },
      { label: 'Capacitaciones Vendidas', value: '1,200+' }
    ],
    client: 'Comercio y Justicia Editores',
    role: 'WordPress Lead Developer',
    year: '2022 - Presente',
    featured: true
  },
  {
    id: 'inversiones-andinas',
    title: 'Inversiones Andinas',
    subtitle: 'WPO WordPress: Reducción del 80% en Tiempos de Carga',
    category: 'performance',
    categoryLabel: 'WordPress WPO & SEO',
    description: 'Optimización de velocidad y rendimiento extremo en WordPress para plataforma financiera internacional.',
    fullDescription: 'Diagnóstico profundo WPO en WordPress, depuración de plugins y consultas a base de datos wp_options, eliminación de render-blocking assets y reconfiguración de caché a nivel servidor.',
    problem: 'Tiempos de carga superiores a 6.2s en móviles, puntuación de 34/100 en PageSpeed y alta tasa de rebote.',
    solution: 'Limpieza de código PHP, compresión de imágenes a WebP, eliminación de scripts innecesarios y optimización de base de datos MySQL.',
    processSteps: [
      { title: 'Diagnóstico PageSpeed', description: 'Auditoría detallada de Core Web Vitals, LCP y TBT.' },
      { title: 'Depuración de Plugins & PHP', description: 'Eliminación de código innecesario y refactorización de WP_Query.' },
      { title: 'Caché & CDN', description: 'Configuración avanzada de compresión Gzip/Brotli y CDN Cloudflare.' }
    ],
    technologies: ['WordPress', 'PHP 8', 'WPO Specialist', 'MySQL', 'PageSpeed Insights', 'Cloudflare'],
    liveUrl: 'https://inversionesandinas.com',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Reducción de Carga', value: '80%' },
      { label: 'Score PageSpeed', value: '96 / 100' },
      { label: 'Carga Móvil', value: '1.2s' }
    ],
    client: 'Inversiones Andinas S.A.',
    role: 'WordPress Performance Expert',
    year: '2023 - 2024',
    featured: true
  },
  {
    id: 'cortinas-artico',
    title: 'Cortinas Ártico',
    subtitle: 'WooCommerce & Cotizador a Medida en Tiempo Real',
    category: 'ecommerce',
    categoryLabel: 'WooCommerce Custom',
    description: 'Tienda e-commerce en WordPress con cotizador automático interactivo según medidas de alto y ancho.',
    fullDescription: 'Plataforma de comercio electrónico diseñada en WooCommerce con lógica de cálculo instantáneo en tiempo real para cotizar cortinas rollers según medidas, tipos de tela y sistemas de comando.',
    problem: 'Saturación en líneas de WhatsApp solicitando presupuestos manuales de cortinas a medida.',
    solution: 'Desarrollo de un plugin/script de cotización en JS integrado con el carrito de WooCommerce que calcula el precio al instante.',
    processSteps: [
      { title: 'Algoritmo de Cálculo', description: 'Lógica matemática de superficie m² y accesorios dinámicos.' },
      { title: 'Catálogo WooCommerce', description: 'Configuración de atributos, productos variables y pasarelas de pago.' },
      { title: 'Diseño Responsivo', description: 'Interfaz táctil optimizada para compra rápida desde celulares.' }
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'ACF Pro', 'Bootstrap'],
    liveUrl: 'https://cortinasartico.com.ar',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Ventas Automatizadas', value: '60%' },
      { label: 'Ahorro Soporte', value: '15h / sem' }
    ],
    client: 'Ártico Soluciones del Hogar',
    role: 'WooCommerce Architect',
    year: '2022',
    featured: true
  },
  {
    id: 'ducati-cordoba',
    title: 'Ducati Córdoba & Mundo Maipú',
    subtitle: 'Catálogo de Lujo WordPress & Generador de Leag/Test Drives',
    category: 'wordpress',
    categoryLabel: 'WordPress Custom',
    description: 'Sitio corporativo y catálogo de motos de alta gama para concesionario oficial Ducati en Córdoba.',
    fullDescription: 'Desarrollo web exclusivo en WordPress para reflejar la elegancia y deportividad de la marca Ducati, incorporando fichas técnicas interactivas y agendamiento de test drives.',
    problem: 'Necesidad de un diseño institucional de alto estándar internacional alineado a las guías de marca Ducati.',
    solution: 'Maquetación a medida en WordPress con fichas técnicas estructuradas con ACF Pro y formularios vinculados al CRM comercial.',
    processSteps: [
      { title: 'Maquetación UI Premium', description: 'Paleta y tipografías oficiales de la marca Ducati.' },
      { title: 'Fichas Técnicas ACF', description: 'Campañas personalizadas para especificaciones de cilindrada, potencia y frenos.' }
    ],
    technologies: ['WordPress', 'PHP', 'ACF Pro', 'CSS3 Custom', 'Google Analytics'],
    liveUrl: 'https://ducaticordoba.com.ar',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800',
    client: 'Mundo Maipú - Ducati Córdoba',
    role: 'WordPress Web Developer',
    year: '2021 - 2023',
    featured: true
  },
  {
    id: 'the-dubbing-method',
    title: 'The Dubbing Method',
    subtitle: 'Landing Page Interactiva para Academia Internacional',
    category: 'react',
    categoryLabel: 'React & Headless Web',
    description: 'Experiencia web interactiva para la venta de cursos de doblaje vocal a nivel internacional.',
    fullDescription: 'Sitio moderno con reproductor de audios de muestra, diseño inmersivo y formularios de conversión rápida para estudiantes globales.',
    problem: 'Sitio previo anticuado que no transmitía el dinamismo de la academia.',
    solution: 'Desarrollo de landing de alta conversión con reproductor multimedia y transiciones suaves.',
    processSteps: [
      { title: 'Prototipado', description: 'Diseño oscuro con acentos de color atractivos.' },
      { title: 'Desarrollo React', description: 'Componentes interactivos de audio y animaciones.' }
    ],
    technologies: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'WordPress Headless API'],
    liveUrl: 'https://thedubbingmethod.com',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    client: 'The Dubbing Method International',
    role: 'Front-End UI Developer',
    year: '2023'
  }
];

export const SKILLS_DATA: Skill[] = [
  // WordPress & Backend
  { name: 'WordPress (Temas & Plugins Custom)', category: 'backend', categoryLabel: 'Especialidad WordPress & Backend', level: 98, yearsExperience: '8 Años', icon: 'Globe', description: 'Creación de temas desde cero, desarrollo de plugins en PHP 8, hooks, filters y arquitectura custom.', featured: true },
  { name: 'PHP (7.4 / 8.x)', category: 'backend', categoryLabel: 'Especialidad WordPress & Backend', level: 92, yearsExperience: '7 Años', icon: 'Server', description: 'Programación orientada a objetos, API REST en WordPress, consultas WP_Query y funciones custom PHP.', featured: true },
  { name: 'WooCommerce & Pasarelas de Pago', category: 'backend', categoryLabel: 'Especialidad WordPress & Backend', level: 95, yearsExperience: '6 Años', icon: 'ShoppingBag', description: 'Desarrollo e-commerce, integración de MercadoPago, Stripe, Tiendanube y gestión de inventarios.', featured: true },
  { name: 'Page Builders (Elementor Pro, Divi, Bricks)', category: 'backend', categoryLabel: 'Especialidad WordPress & Backend', level: 96, yearsExperience: '7 Años', icon: 'Layout', description: 'Maquetación ultra veloz, maquetadores dinámicos, plantillas Theme Builder y widgets a medida.' },
  { name: 'ACF Pro & Custom Post Types', category: 'backend', categoryLabel: 'Especialidad WordPress & Backend', level: 95, yearsExperience: '7 Años', icon: 'Code2', description: 'Modelado de datos avanzados, campos personalizados, taxonomías y estructuras flexibles.' },
  { name: 'MySQL & Optimización Base de Datos', category: 'backend', categoryLabel: 'Especialidad WordPress & Backend', level: 88, yearsExperience: '6 Años', icon: 'Database', description: 'Limpieza de wp_options, transients, índices SQL y consultas optimizadas para evitar caídas.' },

  // WPO & Tools
  { name: 'WPO (Web Performance Optimization)', category: 'tools', categoryLabel: 'WPO, Servidores & SEO', level: 96, yearsExperience: '6 Años', icon: 'Zap', description: 'Reducción de tiempos de carga hasta un 80%, métricas Core Web Vitals, LCP, CLS, Litespeed y Cloudflare.', featured: true },
  { name: 'SEO Técnico para WordPress', category: 'tools', categoryLabel: 'WPO, Servidores & SEO', level: 92, yearsExperience: '6 Años', icon: 'TrendingUp', description: 'Datos estructurados Schema.org, sitemaps, auditoría de rastreo y posicionamiento en Google.' },
  { name: 'Servidores, cPanel, WHM & DNS', category: 'tools', categoryLabel: 'WPO, Servidores & SEO', level: 90, yearsExperience: '7 Años', icon: 'Cpu', description: 'Migración masiva de sitios web, certificados SSL, PHP-FPM, servidores Ferozo, DHM y VPS.' },
  { name: 'Git & GitHub', category: 'tools', categoryLabel: 'WPO, Servidores & SEO', level: 88, yearsExperience: '5 Años', icon: 'GitBranch', description: 'Control de versiones para temas/plugins de WordPress y despliegues colaborativos.' },

  // Frontend
  { name: 'HTML5, CSS3 & SASS / Tailwind', category: 'frontend', categoryLabel: 'Front-End Development', level: 98, yearsExperience: '8 Años', icon: 'Palette', description: 'Maquetación semántica, Flexbox, Grid, CSS para WordPress y diseño responsivo adaptativo.' },
  { name: 'JavaScript ES6+ / React.js', category: 'frontend', categoryLabel: 'Front-End Development', level: 88, yearsExperience: '4 Años', icon: 'Atom', description: 'Interactividad dinámica, Headless WordPress API, consumo de endpoints y utilidades frontend.' },
  // IA & Mantenimiento
  { 
    name: 'Mantenimiento Técnico & Soporte WP', 
    category: 'tools', 
    categoryLabel: 'WPO, Servidores & SEO', 
    level: 98, 
    yearsExperience: '8 Años', 
    icon: 'ShieldCheck', // Asumiendo que usas Lucide Icons o similar
    description: 'Gestión integral mensual, actualizaciones preventivas de core y plugins, copias de seguridad y monitoreo de estabilidad para sitios de alto tráfico.' 
  },
  { 
    name: 'Automatización & Chatbots IA (n8n, Gemini)', 
    category: 'backend', 
    categoryLabel: 'Automatización & IA', 
    level: 90, 
    yearsExperience: '1 Año', 
    icon: 'Bot', 
    description: 'Creación de flujos de trabajo automatizados con n8n, despliegue de Evolution API en servidores VPS y desarrollo de chatbots personalizados para WhatsApp impulsados por la API de Gemini.', 
    featured: true 
  }
];
