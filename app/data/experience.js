// Work history, newest first. Each entry renders as one row of the
// experience section; `projects` lists work done inside that job.
// `shortName` is used where space is tight (the stack sheet).
// `links` use the same { type, url, active, note } shape as projects.

export const experience = [
  {
    id: 'hel-ali',
    company: 'HEL-ALI',
    kind: { en: 'Freelance', es: 'Freelance' },
    role: { en: 'Full-stack developer + AI', es: 'Desarrollador full-stack + IA' },
    period: { en: 'May 2025 – present', es: 'Mayo 2025 – actualidad' },
    highlights: {
      en: [
        'Built a donations platform with Stripe and DLocal for international and local payments.',
        'Used Supabase for database, auth and edge functions, cutting backend and infrastructure costs.',
        'Designed the database schema and implemented PostgreSQL with Drizzle ORM.',
        'Deployed the React and Next.js frontend on Vercel with secure environment variables.',
        'Implemented webhooks to track payment states and automate workflows.',
      ],
      es: [
        'Desarrollé una plataforma de donaciones con Stripe y DLocal para pagos internacionales y locales.',
        'Usé Supabase para base de datos, auth y edge functions, reduciendo costos de backend e infraestructura.',
        'Diseñé el esquema de base de datos e implementé PostgreSQL con Drizzle ORM.',
        'Desplegué el frontend en React y Next.js en Vercel, con variables de entorno seguras.',
        'Implementé webhooks para manejar estados de pago y automatizar flujos de trabajo.',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'DLocal', 'Edge Functions', 'Deno', 'Vercel'],
    links: [{ type: 'live', url: 'https://hel-ali.com/', active: true }],
  },
  {
    id: 'anfibia',
    company: 'Anfibia',
    kind: { en: 'Software company', es: 'Empresa de software' },
    role: { en: 'Full-stack developer (semi senior)', es: 'Desarrollador full-stack (semi senior)' },
    period: { en: 'Dec 2025 – May 2026', es: 'Dic 2025 – Mayo 2026' },
    highlights: {
      en: [
        'Shipped features in Scrum across four projects at once on legacy code, refactoring as I went.',
        'Backend with Express, PostgreSQL and TypeORM; auth with Firebase and sessions with Clerk.',
        'Designed new schemas and entities with one-to-one, many-to-one and many-to-many relations.',
        'Resolved merge conflicts and coached the team on Git workflows that avoid lost work and risky resets.',
      ],
      es: [
        'Desarrollé features con Scrum en cuatro proyectos simultáneos sobre código heredado, refactorizando en el proceso.',
        'Backend con Express, PostgreSQL y TypeORM; auth con Firebase y sesiones con Clerk.',
        'Diseñé nuevos esquemas y entidades con relaciones one-to-one, many-to-one y many-to-many.',
        'Resolví conflictos de merge y capacité al equipo en flujos de Git que evitan pérdidas y resets riesgosos.',
      ],
    },
    projects: [
      {
        name: 'Bullstock · Oxitesa mobile',
        text: {
          en: 'React Native app built from scratch for stock, bookings and deliveries: offline mode with SQLite and a request queue, QR and barcode scanning, Android and iOS, phone and tablet.',
          es: 'App en React Native desde cero para stock, reservas y envíos: modo sin conexión con SQLite y cola de peticiones, escaneo de QR y códigos de barra, Android e iOS, celular y tablet.',
        },
      },
      {
        name: 'Hospital Posadas',
        text: {
          en: 'Built from scratch the Angular admin for staff, services and schedules, the base for an appointment system with limits and overlap checks.',
          es: 'Creé desde cero el ABM en Angular de staff, servicios y agendas, base de un sistema de turnos con límites y control de solapamiento.',
        },
      },
      {
        name: 'Sedit & Proyectar',
        text: {
          en: 'Angular features for hospital billing; a reusable table checking each patient’s minimum and maximum care by type and month.',
          es: 'Features en Angular para facturación de internaciones; una tabla reutilizable que verifica mínimos y máximos de atención por paciente, tipo y mes.',
        },
      },
      {
        name: 'Oxitesa web',
        text: {
          en: 'Angular features for billing oxygen-therapy deliveries authorised by health insurers.',
          es: 'Features en Angular para facturar envíos de oxigenoterapia autorizados por obras sociales.',
        },
      },
    ],
    stack: ['Angular', 'React Native', 'Expo', 'TypeScript', 'Express', 'PostgreSQL', 'TypeORM', 'MySQL', 'SQLite', 'Firebase', 'Clerk', 'Tailwind CSS', 'PrimeNG'],
    links: [],
  },
  {
    id: 'utn-elearning',
    company: 'UTN centro de e-learning',
    shortName: 'UTN e-learning',
    kind: { en: 'Tuten Globals · UTN', es: 'Tuten Globals · UTN' },
    role: { en: 'Frontend developer + AI', es: 'Frontend developer + IA' },
    period: { en: 'Apr 2024 – Apr 2025', es: 'Abr 2024 – Abr 2025' },
    highlights: {
      en: [
        'Built an embedded AI chatbot from scratch, optimised for performance and responsive design.',
        'Built and maintained back-office features on the internal design system.',
        'Sped up development by 50% through reusable components and clean architecture.',
        'Made the interface more compatible and modular with SASS and shadow DOM components.', // taste-skill-ignore: shadow DOM is a web API, not a style
      ],
      es: [
        'Desarrollé desde cero un chatbot embebido con IA, optimizado para rendimiento y diseño responsive.',
        'Construí y mantuve features de backoffice sobre el design system interno.',
        'Mejoré la velocidad de desarrollo un 50% con componentes reutilizables y arquitectura limpia.',
        'Aumenté la compatibilidad y modularidad de la interfaz con SASS y componentes con shadow DOM.', // taste-skill-ignore: shadow DOM is a web API, not a style
      ],
    },
    stack: ['React', 'Next.js', 'Astro', 'TypeScript', 'SASS', 'Supabase', 'Stripe', 'Node.js', 'Express'],
    links: [{ type: 'live', url: 'https://utnba.centrodeelearning.com/', active: true }],
  },
];
