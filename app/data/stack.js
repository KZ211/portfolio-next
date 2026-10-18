// Groups for the "What I work with" sheet. Where each tool was used is
// derived from app/data/projects.js and app/data/experience.js, so only
// list the tool here once. `alsoHere: true` adds this portfolio itself.

export const stackGroups = [
  {
    id: 'frontend',
    items: [
      { name: 'React', alsoHere: true },
      { name: 'Next.js', alsoHere: true },
      { name: 'Angular' },
      { name: 'React Native' },
      { name: 'Astro' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS', alsoHere: true },
      { name: 'SASS' },
    ],
  },
  {
    id: 'backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Supabase' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'SQLite' },
      { name: 'Drizzle ORM' },
      { name: 'TypeORM' },
    ],
  },
  {
    id: 'payments',
    items: [{ name: 'Stripe' }, { name: 'DLocal' }, { name: 'Firebase' }, { name: 'Clerk' }],
  },
  {
    id: 'delivery',
    items: [{ name: 'Vercel', alsoHere: true }, { name: 'Edge Functions' }, { name: 'Expo' }, { name: 'Git and GitHub', everywhere: true }],
  },
];
