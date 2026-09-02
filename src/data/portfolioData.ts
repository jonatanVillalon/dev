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
    category: 'react',
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
    category: 'react',
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
    client: 'Mundo Maipú',
    agencyName: 'La Generatriz',
    agencyUrl: 'https://www.lageneratriz.com.ar/',
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
  },
  {
    id: 'lf-dental',
    title: 'LF Dental',
    subtitle: 'Sitio Web para Centro Odontológico',
    category: 'wordpress',
    categoryLabel: 'WordPress & Salud',
    description: 'Diseño web profesional y elegante para clínica odontológica integral.',
    fullDescription: 'Desarrollo en WordPress y Elementor concebido para reflejar confianza, higiene y profesionalismo, facilitando la consulta de tratamientos dentales y vías directas de atención al paciente.',
    problem: 'La clínica requería una identidad visual moderna y pulcra acorde a los estándares del rubro salud para captar nuevos pacientes.',
    solution: 'Maquetación con Elementor destacando las especialidades, el equipo profesional y accesos rápidos a reserva de turnos mediante una estética limpia y clara.',
    processSteps: [
      { title: 'Diseño UI Salud', description: 'Paleta enfocada en generar tranquilidad y confianza médica.' },
      { title: 'Estructuración de Servicios', description: 'Fichas claras para cada tratamiento odontológico.' }
    ],
    technologies: ['WordPress', 'Elementor', 'CSS3'],
    liveUrl: 'https://lfdental.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/LF-Dental.png',
    client: 'LF Dental',
    role: 'WordPress Web Developer',
    year: '2024'
  },
  {
    id: 'convivimos-naranja-x',
    title: 'CONVIVIMOS Naranja X',
    subtitle: 'Rediseño Integral de Revista Digital',
    category: 'wordpress',
    categoryLabel: 'WordPress Portal & Editorial',
    description: 'Rediseño completo de la revista digital de Naranja X Argentina y optimización publicitaria.',
    fullDescription: 'Renovación integral del portal editorial implementado sobre WordPress con el theme JNews y TagDiv, incorporando gestión avanzada de anuncios con Advanced Ads para monetización dinámica.',
    problem: 'La plataforma editorial contaba con una maquetación desactualizada que no alineaba con el moderno ecosistema de marca de Naranja X.',
    solution: 'Rediseño estético y funcional completo, optimizando la jerarquía de lectura de artículos, secciones temáticas y bloques de publicidad nativa.',
    processSteps: [
      { title: 'Rediseño UI Editorial', description: 'Adaptación a la guía de estilos moderna y dinámica de Naranja X.' },
      { title: 'Integración Publicitaria', description: 'Configuración de espacios publicitarios optimizados mediante Advanced Ads.' }
    ],
    technologies: ['WordPress', 'JNews', 'TagDiv', 'Advanced Ads', 'PHP'],
    liveUrl: 'https://convivimos.naranjax.com/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/convivimos.jpeg',
    client: 'Naranja X',
    agencyName: 'La Generatriz',
    agencyUrl: 'https://www.lageneratriz.com.ar/',
    role: 'WordPress Developer & Mantenimiento',
    year: '2024'
  },
  {
    id: 'org-fundicion',
    title: 'ORG Fundición',
    subtitle: 'Catálogo y Web para Industria Metalúrgica',
    category: 'wordpress',
    categoryLabel: 'WordPress & Industria',
    description: 'Sitio corporativo y catálogo de aleaciones bajo normas técnicas SAE, ASTM y EN.',
    fullDescription: 'Plataforma institucional para empresa metalúrgica diseñada para exhibir de manera ordenada y formal sus capacidades técnicas, normas de fabricación y catálogo de aleaciones.',
    problem: 'La empresa contaba con una presencia digital débil que no transmitía el peso industrial ni el rigor técnico de sus procesos de fundición.',
    solution: 'Desarrollo corporativo con Elementor enfocado en estética industrial sólida, tipografías estructuradas y tablas de especificaciones de fácil lectura.',
    processSteps: [
      { title: 'Enfoque Técnico', description: 'Presentación limpia de normas y aleaciones para el comprador B2B.' },
      { title: 'Desarrollo en WordPress', description: 'Estructuración modular de las áreas de producción y formulario de contacto.' }
    ],
    technologies: ['WordPress', 'Elementor', 'PHP'],
    liveUrl: 'https://orgfundicion.com/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/org-fundicion.png',
    client: 'ORG Fundición',
    role: 'WordPress Web Developer',
    year: '2024'
  },
  {
    id: 'modo-viaje',
    title: 'Modo Viaje',
    subtitle: 'Blog Editorial de Viajes y Turismo',
    category: 'wordpress',
    categoryLabel: 'WordPress & Blogging',
    description: 'Portal de contenidos y crónicas de viajes con maquetación ágil e interactiva.',
    fullDescription: 'Desarrollo de blog de turismo creado en WordPress con JNews y TagDiv, optimizado para destacar material fotográfico, guías de destinos y rutas turísticas.',
    problem: 'El cliente necesitaba una plataforma atractiva que resolviera el desorden visual y ofreciera una lectura cómoda e inspiradora de cada viaje.',
    solution: 'Diseño moderno con layouts estilo revista, tipografía enfocada en lectura prolongada y galerías inmersivas.',
    processSteps: [
      { title: 'Arquitectura de Categorías', description: 'Organización de contenidos por destinos, guías y experiencias.' },
      { title: 'Maquetación JNews', description: 'Implementación de bloques dinámicos y feeds de lectura ágiles.' }
    ],
    technologies: ['WordPress', 'JNews', 'TagDiv', 'CSS3'],
    liveUrl: 'https://modoviajeok.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/modo-viaje.png',
    client: 'Modo Viaje',
    role: 'WordPress Developer & Mantenimiento',
    year: '2024'
  },
  {
    id: 'blevel',
    title: 'BLEVEL',
    subtitle: 'Catálogo de Carpintería de Aluminio',
    category: 'wordpress',
    categoryLabel: 'WordPress & Arquitectura',
    description: 'Sitio web para fabricante e instalador de productos de carpintería de aluminio de alta gama.',
    fullDescription: 'Plataforma moderna en WordPress y Elementor orientada a la exhibición de líneas de cerramientos y aberturas, integrando galerías de proyectos y fichas estéticas.',
    problem: 'Necesidad de modernizar su imagen digital para alinearse con arquitectos y desarrolladores de obras de calidad superior.',
    solution: 'Desarrollo minimalista con Elementor, priorizando acabados sobrios, visualización de obras terminadas y vías rápidas de asesoramiento técnico.',
    processSteps: [
      { title: 'Diseño Arquitectónico', description: 'Líneas limpias y paleta neutra que resalta la carpintería metálica.' },
      { title: 'Implementación Web', description: 'Maquetación responsive con foco en resoluciones de alta definición.' }
    ],
    technologies: ['WordPress', 'Elementor', 'PHP'],
    liveUrl: 'https://blevel.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/blevel.png',
    client: 'BLEVEL',
    agencyName: 'La Generatriz',
    agencyUrl: 'https://www.lageneratriz.com.ar/',
    role: 'WordPress Web Developer',
    year: '2024'
  },
  {
    id: 'morbidelli-maipu',
    title: 'Morbidelli Maipú',
    subtitle: 'Showroom Digital para Marca de Motos',
    category: 'wordpress',
    categoryLabel: 'WordPress & Automotriz',
    description: 'Concesionario oficial de motocicletas Morbidelli perteneciente al grupo Mundo Maipú.',
    fullDescription: 'Plataforma de exposición de modelos donde cada motocicleta cuenta con su presentación visual, ficha técnica y punto de contacto directo para cotizaciones.',
    problem: 'Lanzamiento de una marca nueva que precisaba una presentación de impacto visual para posicionarse en el mercado de Córdoba.',
    solution: 'Diseño agresivo y elegante con Elementor, destacando líneas de producto, detalles de ingeniería y soporte continuo.',
    processSteps: [
      { title: 'Branding de Producto', description: 'Alineación con la identidad internacional de Morbidelli.' },
      { title: 'Desarrollo & Mantenimiento', description: 'Estructuración modular de fichas técnicas y soporte mensual.' }
    ],
    technologies: ['WordPress', 'Elementor', 'PHP'],
    liveUrl: 'https://morbidellimaipu.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/morbidelli.png',
    client: 'Mundo Maipú',
    agencyName: 'La Generatriz',
    agencyUrl: 'https://www.lageneratriz.com.ar/',
    role: 'Desarrollo & Mantenimiento Técnico',
    year: '2024'
  },
  {
    id: 'bugliotti-desarrollos',
    title: 'Bugliotti Desarrollos',
    subtitle: 'Portal Inmobiliario de Desarrollos Urbanos',
    category: 'wordpress',
    categoryLabel: 'WordPress & Inmobiliaria',
    description: 'Rediseño integral de sitio web para firma líder de desarrollos inmobiliarios en Córdoba.',
    fullDescription: 'Portal corporativo orientado a inversores y compradores de departamentos de categoría, estructurado con Advanced Custom Fields (ACF) y Elementor para una gestión ágil de cada emprendimiento.',
    problem: 'La interfaz previa resultaba desactualizada y no transmitía el prestigio, categoría y magnitud de los proyectos inmobiliarios.',
    solution: 'Rediseño completo con acabados visuales premium, estructuración de campos ACF para galerías y avance de obras, sumado al mantenimiento evolutivo.',
    processSteps: [
      { title: 'Diseño Inmobiliario Premium', description: 'Línea visual enfocada en categoría, solidez y confianza financiera.' },
      { title: 'Modelado con ACF', description: 'Campos a medida para tipologías, amenities y ubicación de emprendimientos.' }
    ],
    technologies: ['WordPress', 'Elementor', 'ACF', 'PHP'],
    liveUrl: 'https://bugliottidesarrollos.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/bugliotti-desarrollos.png',
    client: 'Bugliotti Desarrollos',
    agencyName: 'La Generatriz',
    agencyUrl: 'https://www.lageneratriz.com.ar/',
    role: 'Desarrollo & Mantenimiento Técnico',
    year: '2024 - 2025'
  },
  {
    id: 'intellecta',
    title: 'Intellecta',
    subtitle: 'Consultoría y Asesoramiento Corporativo',
    category: 'wordpress',
    categoryLabel: 'WordPress & Consultoría',
    description: 'Diseño integral de plataforma institucional para consultora de procesos y valor empresarial.',
    fullDescription: 'Desarrollo web corporativo sobre WordPress con Salient Theme y WPBakery, concebido para transmitir rigor estratégico, innovación y metodología en la profesionalización de empresas.',
    problem: 'La firma requería una presencia digital sobria y sofisticada que respaldara servicios de consultoría estratégica de alto nivel ante directivos y accionistas.',
    solution: 'Maquetación con diseño sobrio y tipografías claras, destacando casos de éxito, metodologías de trabajo y canales ágiles de contacto.',
    processSteps: [
      { title: 'Estructura Corporativa', description: 'Organización de áreas de asesoramiento y metodología de consultoría.' },
      { title: 'Maquetación Visual', description: 'Implementación con Salient Theme y WPBakery optimizada para lectura ejecutiva.' }
    ],
    technologies: ['WordPress', 'Salient Theme', 'WPBakery', 'CSS3'],
    liveUrl: 'https://intellecta.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/Intellecta.png',
    client: 'Intellecta',
    role: 'WordPress Web Developer',
    year: '2025'
  },
  {
    id: 'cortinas-gulino',
    title: 'Cortinas Gulino',
    subtitle: 'Catálogo y Cotizador para Persianas y Cortinas',
    category: 'wordpress',
    categoryLabel: 'WordPress & Elementor',
    description: 'Rediseño web completo con formulario dinámico de cotización en Contact Form 7, CSS y JS.',
    fullDescription: 'Modernización visual y funcional del sitio para empresa dedicada a la provisión, instalación y reparación de cortinas y persianas, optimizando la captación de prospectos.',
    problem: 'La plataforma previa tenía un diseño desactualizado que limitaba la tasa de consultas y no guiaba al usuario según el tipo de persiana requerida.',
    solution: 'Rediseño estético total con Elementor e implementación de formulario de cotización guiado mediante JavaScript y Contact Form 7.',
    processSteps: [
      { title: 'Rediseño UI', description: 'Jerarquización de materiales, tipos de cortinas y servicios de reparación.' },
      { title: 'Cotizador a Medida', description: 'Lógica en JavaScript y CSS para personalizar la solicitud de presupuesto.' }
    ],
    technologies: ['WordPress', 'Elementor', 'Contact Form 7', 'JavaScript', 'CSS3'],
    liveUrl: 'https://cortinasgulino.com/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/cortinas-gulino.png',
    client: 'Cortinas Gulino',
    role: 'WordPress Web Developer',
    year: '2025'
  },
  {
    id: 'kove-maipu',
    title: 'Kove Maipú',
    subtitle: 'Catálogo Digital Oficial KOVE Motores',
    category: 'wordpress',
    categoryLabel: 'WordPress & Automotriz',
    description: 'Sitio web y catálogo institucional para concesionario oficial de la marca KOVE en Córdoba.',
    fullDescription: 'Desarrollo sobre WordPress con Elementor adaptado a las directrices visuales internacionales de la marca KOVE, enfocado en mostrar prestaciones de aventura y competición.',
    problem: 'Necesidad de lanzar la marca localmente con un catálogo dinámico y visualmente potente que facilitara la solicitud de presupuestos.',
    solution: 'Maquetación deportiva y elegante con fichas detalladas por modelo, puntos de contacto directo y mantenimiento técnico evolutivo.',
    processSteps: [
      { title: 'Identidad de Marca', description: 'Implementación del manual de estilo oficial y fotografía de alta resolución.' },
      { title: 'Catálogo de Fichas', description: 'Estructuración clara de prestaciones, motorizaciones y fichas técnicas.' }
    ],
    technologies: ['WordPress', 'Elementor', 'PHP', 'CSS3'],
    liveUrl: 'https://kovemaipu.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/maipu-motos.png',
    client: 'Mundo Maipú',
    agencyName: 'La Generatriz',
    agencyUrl: 'https://www.lageneratriz.com.ar/',
    role: 'Desarrollo & Mantenimiento Técnico',
    year: '2025'
  },
  {
    id: 'max-nutricion-argentina',
    title: 'Máxima Nutrición Argentina',
    subtitle: 'Tienda Online de Suplementos Alimenticios',
    category: 'ecommerce',
    categoryLabel: 'WooCommerce & WordPress',
    description: 'E-commerce especializado en nutrición deportiva, suplementos dietarios y vida saludable.',
    fullDescription: 'Tienda construida sobre WordPress y WooCommerce con maquetación en Elementor, optimizada para compras rápidas en móviles y organización por objetivos deportivos.',
    problem: 'Ausencia de un canal de venta online ordenado, con catálogo categorizado y flujo de checkout directo para productos de consumo masivo.',
    solution: 'Desarrollo e-commerce completo con filtros por tipo de suplemento, pasarela de pago integrada y diseño enfocado en conversión.',
    processSteps: [
      { title: 'Arquitectura de Catálogo', description: 'Categorización por objetivos deportivos, marcas y presentaciones.' },
      { title: 'Desarrollo WooCommerce', description: 'Optimización de pasarelas de pago y diseño responsive en Elementor.' }
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
    liveUrl: 'https://maxnutricionargentina.com/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/max-nutricion-argentina.jpeg',
    client: 'Máxima Nutrición Argentina',
    role: 'WooCommerce Web Developer',
    year: '2026'
  },
  {
    id: 'pimesa-sa',
    title: 'PIME SA',
    subtitle: 'E-Commerce de Materiales Eléctricos e Iluminación',
    category: 'ecommerce',
    categoryLabel: 'WooCommerce & WordPress',
    description: 'Tienda online mayorista y minorista de insumos eléctricos con catálogo industrial.',
    fullDescription: 'Desarrollo integral de plataforma de comercio electrónico con WordPress, WooCommerce y Elementor para catálogo de materiales eléctricos, cables y componentes industriales.',
    problem: 'Catálogo extenso y técnico difícil de explorar y cotizar por instaladores, constructoras y usuarios finales.',
    solution: 'E-commerce estructurado con fichas técnicas descargables, filtros de producto por especificaciones y carrito ágil de cotización.',
    processSteps: [
      { title: 'Estructuración de Inventario', description: 'Jerarquía clara para miles de referencias de materiales eléctricos.' },
      { title: 'Implementación E-commerce', description: 'Configuración de WooCommerce optimizada para velocidad y filtros.' }
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
    liveUrl: 'https://pimesa.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/pime-sa.png',
    client: 'PIME SA',
    role: 'WooCommerce Web Developer',
    year: '2026'
  },
  {
    id: 'en-redaccion',
    title: 'En Redacción',
    subtitle: 'Soporte y Mantenimiento de Portal Periodístico',
    category: 'wordpress',
    categoryLabel: 'WordPress & Periódicos',
    description: 'Mantenimiento técnico continuo, estabilidad de servidor y soporte para medio digital de noticias.',
    fullDescription: 'Gestión técnica y soporte en producción para portal informativo con alto volumen de publicaciones diarias, preservando la continuidad del servicio frente a picos de tráfico.',
    problem: 'Riesgo constante de caídas de servicio, fallos en plugins y degradación de rendimiento ante coberturas de noticias de última hora.',
    solution: 'Protocolo de soporte mensual preventivo, actualizaciones seguras en staging, depuración de base de datos y optimización continua de cache.',
    processSteps: [
      { title: 'Auditoría Inicial', description: 'Revisión de plugins conflictivos y sobrecarga en wp_options.' },
      { title: 'Soporte Preventivo', description: 'Monitoreo de uptime, copias de seguridad automatizadas y parches de seguridad.' }
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'WPO Specialist'],
    liveUrl: 'https://enredaccion.com.ar/',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/EnRedaccion.png',
    client: 'En Redacción',
    role: 'Mantenimiento Técnico WordPress',
    year: '2022 - Actualidad'
  },
  {
    id: 'chatbot-whatsapp-ai',
    title: 'Chatbot Inteligente WhatsApp & n8n',
    subtitle: 'Automatización Conversacional con LLM y APIs',
    category: 'react',
    categoryLabel: 'Automatización & IA',
    description: 'Asistente conversacional automatizado para WhatsApp integrado con n8n, Evolution API y modelos Gemini.',
    fullDescription: 'Arquitectura de automatización basada en agentes IA conectados a WhatsApp mediante Evolution API y orquestados a través de flujos en n8n, capaz de atender consultas, calificar leads y consultar datos en tiempo real.',
    problem: 'Pérdida de consultas comerciales fuera de horario y demoras en la respuesta inicial a través de canales de mensajería.',
    solution: 'Despliegue de un bot conversacional con contexto de negocio que interpreta intenciones en lenguaje natural y deriva contactos calificados.',
    processSteps: [
      { title: 'Despliegue de Infraestructura', description: 'Instalación y configuración de Evolution API en VPS dedicado.' },
      { title: 'Flujos en n8n & Prompting', description: 'Diseño de la lógica de enrutamiento y conexión con Gemini API.' }
    ],
    technologies: ['n8n', 'Evolution API', 'Gemini API', 'Docker / VPS', 'JavaScript', 'REST APIs'],
    liveUrl: '',
    githubUrl: 'https://github.com/jonatanVillalon/',
    imageUrl: 'https://raw.githubusercontent.com/jonatanVillalon/dev/main/assets/chatbot-whatsapp.png',
    client: 'Proyecto Propio / Automatizaciones',
    role: 'AI & Automation Developer',
    year: '2026'
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

  // Soporte & IA
  { 
    name: 'Mantenimiento Técnico & Soporte WP', 
    category: 'tools', 
    categoryLabel: 'WPO, Servidores & SEO', 
    level: 98, 
    yearsExperience: '8 Años', 
    icon: 'Cpu', 
    description: 'Gestión integral mensual, actualizaciones preventivas de core y plugins, copias de seguridad y monitoreo de estabilidad para sitios de alto tráfico.' 
  },
  { 
    name: 'Automatización & Chatbots IA (n8n, Gemini)', 
    category: 'backend', 
    categoryLabel: 'Especialidad WordPress & Backend', 
    level: 90, 
    yearsExperience: '1 Año', 
    icon: 'Server', 
    description: 'Creación de flujos de trabajo automatizados con n8n, despliegue de Evolution API en servidores VPS y desarrollo de chatbots personalizados para WhatsApp impulsados por la API de Gemini.', 
    featured: true 
  }
];