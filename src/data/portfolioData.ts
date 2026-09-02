import { Project, Skill } from '../types';

export const PROFILE_INFO = {
  name: 'Jonatan Villalón',
  tagline: 'Desarrollador Experto en WordPress, PHP & E-Commerce | WPO Speed Specialist',
  heroTitle: 'Desarrollo WordPress de Alto Rendimiento, Temas a Medida & Plugins Personalizados',
  heroSubtitle: 'Especialista en desarrollo WordPress full-custom, optimización de velocidad (WPO), arquitectura PHP y tiendas WooCommerce orientadas a ventas para agencias, empresas y marcas globales.',
  location: 'Río Tercero, Córdoba, Argentina',
  email: 'villalonjonatan@gmail.com',
  phone: '+54 3571 354416',
  linkedin: 'https://www.linkedin.com/in/jonatan-villalon/',
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
    id: 'avistaje-rock',
    title: 'Avistaje Rock',
    subtitle: 'Sitio Web para Banda de Rock Local',
    category: 'frontend',
    categoryLabel: 'HTML, CSS & Bootstrap',
    description: 'Desarrollo frontend a medida para una banda de rock local, enfocado en presencia digital y presentación de la agrupación.',
    fullDescription: 'Maquetación web estática utilizando tecnologías fundamentales (HTML, CSS y JavaScript) combinadas con Bootstrap para asegurar la adaptabilidad en dispositivos móviles, destacando la energía visual del género musical.',
    problem: 'La banda carecía de una plataforma oficial con una estética rockera y moderna para centralizar su información y conectar con su audiencia.',
    solution: 'Se diseñó y maquetó una interfaz visualmente impactante y responsiva desde cero, proporcionando una identidad digital sólida.',
    processSteps: [
      { title: 'Diseño Visual', description: 'Definición de paleta de colores y estructura acorde a la identidad de la banda.' },
      { title: 'Maquetación', description: 'Desarrollo estructural utilizando HTML5, CSS3 y componentes de Bootstrap.' }
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://jonatanvillalon.github.io/avistaje.github.io/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/Avistaje.png',
    client: 'Avistaje Rock',
    role: 'Front-End Developer',
    year: '2016'
  },
  {
    id: 'fertilizantes-fm',
    title: 'Fertilizantes FM',
    subtitle: 'Web Institucional para Distribuidor Oficial',
    category: 'frontend',
    categoryLabel: 'HTML, CSS & Bootstrap',
    description: 'Sitio corporativo para distribuidor de fertilizantes de Fabricaciones Militares.',
    fullDescription: 'Plataforma web desarrollada en HTML, CSS y JS, orientada a presentar el catálogo institucional y los servicios del distribuidor, con un enfoque en la claridad de la información para el sector agroindustrial.',
    problem: 'El cliente necesitaba presencia en internet para exhibir sus productos con un diseño limpio, profesional y accesible desde el campo vía móviles.',
    solution: 'Creación de un sitio rápido e intuitivo estructurado con Bootstrap, resaltando los datos de contacto y detalles técnicos de los fertilizantes.',
    processSteps: [
      { title: 'Estructuración', description: 'Organización de la información técnica del sector agrícola.' },
      { title: 'Desarrollo Responsive', description: 'Implementación mobile-first para garantizar acceso desde zonas rurales con baja conexión.' }
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://jonatanvillalon.github.io/fertilizantesfm.github.io/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/FertilizantesFM.png',
    client: 'Fertilizantes FM',
    role: 'Front-End Developer',
    year: '2017'
  },
  {
    id: 'mascioli-abogados',
    title: 'Mascioli Abogados',
    subtitle: 'Rediseño Institucional para Estudio Jurídico',
    category: 'wordpress',
    categoryLabel: 'WordPress & Elementor',
    description: 'Modernización estética y desarrollo del sitio web corporativo para un estudio jurídico de Buenos Aires.',
    fullDescription: 'Rediseño integral en WordPress enfocado en transmitir seriedad, confianza y profesionalismo, valores fundamentales para una firma de abogados de primer nivel.',
    problem: 'El estudio presentaba una imagen digital desactualizada que no generaba la confianza necesaria en potenciales clientes.',
    solution: 'Implementación de una interfaz moderna, elegante y sobria mediante Elementor Pro, optimizando la navegación hacia las áreas de práctica legal.',
    processSteps: [
      { title: 'Identidad Visual', description: 'Selección de tipografías y colores que inspiran autoridad y profesionalismo.' },
      { title: 'Desarrollo WordPress', description: 'Construcción ágil con Elementor y optimización de formularios de consulta.' }
    ],
    technologies: ['WordPress', 'Elementor', 'CSS3'],
    liveUrl: 'https://mascioliabogados.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/Mascioli-abogados.png',
    client: 'Estudio Jurídico Mascioli',
    role: 'WordPress Web Developer',
    year: '2021'
  },
  {
    id: 'atp-catering',
    title: 'ATP Catering',
    subtitle: 'Plataforma Visual para Eventos y Gastronomía',
    category: 'wordpress',
    categoryLabel: 'WordPress & Divi',
    description: 'Sitio web dinámico y apetecible para una empresa de catering y eventos de Uruguay.',
    fullDescription: 'Desarrollo orientado a destacar la calidad visual de la gastronomía y los servicios de eventos mediante el maquetador Divi, integrando galerías de alta resolución y formularios de cotización.',
    problem: 'La marca requería un salto de calidad estética para mostrar el nivel de sus eventos y menús de forma atractiva.',
    solution: 'Diseño de un portal inmersivo enfocado en la fotografía de los platos, facilitando al usuario solicitar presupuestos personalizados.',
    processSteps: [
      { title: 'Enfoque Visual', description: 'Priorización de galerías fotográficas de alta calidad para el rubro gastronómico.' },
      { title: 'Construcción con Divi', description: 'Uso estratégico de animaciones sutiles y maquetación personalizada.' }
    ],
    technologies: ['WordPress', 'Divi Theme', 'PHP'],
    liveUrl: 'https://atpcatering.com.uy/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/atp-catering.png',
    client: 'ATP Catering (Uruguay)',
    role: 'WordPress Web Developer',
    year: '2021'
  },
  {
    id: 'el-puntinazo',
    title: 'El Puntinazo',
    subtitle: 'Portal Web para Liga de Fútbol Mixto',
    category: 'wordpress',
    categoryLabel: 'WordPress & Elementor',
    description: 'Creación de plataforma digital para la organización y difusión de torneos de fútbol amateur.',
    fullDescription: 'Un espacio digital moderno diseñado para comunicar el dinamismo y la evolución del fútbol mixto tras más de 9 años de trayectoria de la liga, construido con WordPress y Elementor.',
    problem: 'La liga necesitaba modernizar su comunicación visual y tener un portal vibrante que transmitiera el lema "Jugá como amateur, sentite profesional".',
    solution: 'Diseño de una interfaz deportiva, con una paleta de colores enérgica y una estructura clara para visualizar noticias, torneos y equipos.',
    processSteps: [
      { title: 'Concepto Deportivo', description: 'Diseño de UI enfocado en el dinamismo y la identidad del fútbol.' },
      { title: 'Desarrollo en WordPress', description: 'Integración de contenido gestionable para mantener la liga actualizada.' }
    ],
    technologies: ['WordPress', 'Elementor', 'PHP'],
    liveUrl: '',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/el-puntinazo.png',
    client: 'Liga El Puntinazo',
    role: 'WordPress Web Developer',
    year: '2022'
  },
  {
    id: 'maipu-motos',
    title: 'Maipú Motos',
    subtitle: 'Tienda Online para Concesionario Oficial',
    category: 'ecommerce',
    categoryLabel: 'WooCommerce & WordPress',
    description: 'Desarrollo de e-commerce y catálogo digital para la división de motos de Mundo Maipú.',
    fullDescription: 'Tienda construida sobre WordPress y WooCommerce para exhibir de manera estructurada y estética el inventario de motocicletas, incorporando un entorno seguro e intuitivo para la navegación del usuario.',
    problem: 'Era fundamental renovar la estética anticuada del catálogo y transformarlo en un showroom digital moderno que facilitara la experiencia de búsqueda.',
    solution: 'Se implementó un rediseño UI/UX completo junto a WooCommerce y Elementor, mejorando radicalmente la presentación visual de los vehículos.',
    processSteps: [
      { title: 'Reestructuración UI/UX', description: 'Mejora en la visualización del catálogo y filtros de búsqueda.' },
      { title: 'Integración E-commerce', description: 'Configuración técnica con WooCommerce para exhibición de vehículos.' }
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
    liveUrl: 'https://maipumotos.mundomaipu.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/maipu-motos.png',
    client: 'Mundo Maipú - La Generatriz',
    role: 'Desarrollo & Mantenimiento Técnico',
    year: '2022'
  },
  {
    id: 'emisolve',
    title: 'Emisolve',
    subtitle: 'Sitio Web Corporativo Sustentable',
    category: 'wordpress',
    categoryLabel: 'WordPress & Elementor',
    description: 'Desarrollo institucional para compañía chilena especializada en Compensación de Emisiones.',
    fullDescription: 'Creación de un portal B2B diseñado en WordPress con Elementor Pro, enfocado en comunicar de manera limpia, moderna y ecológica los programas de sustentabilidad (PCE) para empresas.',
    problem: 'Se requería un diseño estético que inspirara compromiso ambiental y estuviera a la altura del mercado corporativo de Chile, dejando atrás una identidad digital genérica.',
    solution: 'Desarrollo de una interfaz minimalista, con una paleta de colores ligada a la sustentabilidad y animaciones sutiles para guiar la lectura de los programas.',
    processSteps: [
      { title: 'Branding Digital', description: 'Traducción de los valores ecológicos de la marca a componentes web.' },
      { title: 'Implementación WordPress', description: 'Maquetación pixel-perfect utilizando Elementor Pro.' }
    ],
    technologies: ['WordPress', 'Elementor Pro', 'CSS3'],
    liveUrl: 'https://emisolve.cl/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/emisolve.png',
    client: 'Emisolve (Chile)',
    role: 'WordPress Web Developer',
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
