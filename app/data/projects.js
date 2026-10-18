// Every project shown on the site. To add one, append an object here: the
// projects section, the index and the phone layout all read from this list.
//
// links: one entry per button. `type` picks the label, icon and colour
// (see LINK_TYPES in app/components/ui/linkButton.js). `active: false`
// keeps the button visible but disabled, with `note` explaining why.

export const projects = [
  {
    id: 'hel-ali',
    name: 'HEL-ALI',
    year: '2025',
    image: '/images/projects/hel-ali.jpg',
    imageAlt: {
      en: 'HEL-ALI Foundation home page: a girl hugging a man in a straw hat under the headline "Empoderando comunidades, transformando vidas"',
      es: 'Inicio de Fundación HEL-ALI: una niña abraza a un hombre con sombrero bajo el titular "Empoderando comunidades, transformando vidas"',
    },
    kind: { en: 'Freelance · Donations platform', es: 'Freelance · Plataforma de donaciones' },
    summary: {
      en: 'Donations platform for a foundation supporting communities in Colombia: Stripe and DLocal payments, webhooks for payment states, and a Supabase and PostgreSQL backend.',
      es: 'Plataforma de donaciones para una fundación que apoya comunidades en Colombia: pagos con Stripe y DLocal, webhooks para estados de pago y backend en Supabase y PostgreSQL.',
    },
    role: { en: 'Full-stack development + AI', es: 'Desarrollo full-stack + IA' },
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'DLocal', 'Vercel'],
    links: [
      { type: 'live', url: 'https://hel-ali.com/', active: true },
      { type: 'github', url: '', active: false, note: { en: 'Private repo', es: 'Repo privado' } },
    ],
  },
  {
    id: 'rosana-colman',
    name: 'Rosana Colman',
    year: '',
    image: '/images/projects/rosana-colman.png',
    imageAlt: {
      en: 'Rosana Colman home page: serif headline "Integrar consciente" beside a hummingbird logo on a lilac background',
      es: 'Inicio del sitio de Rosana Colman: titular "Integrar consciente" junto a un logo de colibrí sobre fondo lila',
    },
    kind: { en: 'Freelance · Coaching site', es: 'Freelance · Sitio de coaching' },
    summary: {
      en: 'Landing page for a private coaching client, architected to grow into a booking platform with payments, a metrics dashboard and a Supabase backend.',
      es: 'Landing para una clienta de coaching, pensada para crecer hacia una plataforma de reservas con pagos, panel de métricas y backend en Supabase.',
    },
    role: { en: 'Design and development', es: 'Diseño y desarrollo' },
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    links: [
      { type: 'github', url: 'https://github.com/rosana-colman/rosana-couching-page', active: true },
      { type: 'live', url: '', active: false, note: { en: 'In progress', es: 'En desarrollo' } },
    ],
  },
  {
    id: 'nextlevel-food',
    name: 'NextLevel Food',
    year: '',
    image: '/images/projects/nextlevel-food.png',
    imageAlt: {
      en: 'NextLevel Food home page: dumplings photo beside the headline "NextLevel food for NextLevel foodies"',
      es: 'Inicio de NextLevel Food: foto de dumplings junto al titular "NextLevel food for NextLevel foodies"',
    },
    kind: { en: 'Full-stack · Next.js', es: 'Full-stack · Next.js' },
    summary: {
      en: 'A community where food lovers share recipes, built with the Next.js App Router during Maximilian Schwarzmüller’s React and Next.js course.',
      es: 'Una comunidad donde se comparten recetas, hecha con el App Router de Next.js durante el curso de React y Next.js de Maximilian Schwarzmüller.',
    },
    role: { en: 'Development', es: 'Desarrollo' },
    stack: ['Next.js', 'React', 'JavaScript', 'CSS Modules', 'Vercel'],
    links: [
      { type: 'github', url: 'https://github.com/AlexisJares/nextLevelFood', active: true },
      { type: 'live', url: 'https://next-level-food-eight.vercel.app/', active: true },
    ],
  },
  {
    id: '4-pilares',
    name: '4 Pilares Voley',
    year: '',
    image: '/images/projects/4-pilares.png',
    imageAlt: {
      en: '4 Pilares Voley home page: team photo on the court under the club’s orange 4P logo',
      es: 'Inicio de 4 Pilares Voley: foto del equipo en la cancha bajo el logo naranja 4P del club',
    },
    kind: { en: 'Website · Volleyball club', es: 'Sitio web · Club de vóley' },
    summary: {
      en: 'Site for the volleyball club I played in, in Pilar, Buenos Aires. Built on Google Sites so the club pays no monthly fee: teams, gallery and how to find them.',
      es: 'Sitio para el club de vóley en el que jugaba, en Pilar, Buenos Aires. Hecho en Google Sites para que el club no pague una cuota mensual: equipos, galería y ubicación.',
    },
    role: { en: 'Design and content', es: 'Diseño y contenido' },
    stack: ['Google Sites'],
    links: [
      { type: 'live', url: 'https://sites.google.com/view/4pilaresvoley/home', active: true },
      { type: 'github', url: '', active: false, note: { en: 'No-code', es: 'Sin código' } },
    ],
  },
];
