'use client';

import Reveal from '../components/ui/reveal';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { stackGroups } from '../data/stack';

// Saw-tooth top and bottom edges for the sheet, like a torn-off printout.
const TEETH = 40;
const DEPTH = '10px';
const top = Array.from({ length: TEETH + 1 }, (_, i) => `${(i * 100) / TEETH}% ${i % 2 ? '0' : DEPTH}`);
const bottom = Array.from({ length: TEETH + 1 }, (_, i) => {
  const x = 100 - (i * 100) / TEETH;
  return `${x}% ${i % 2 ? '100%' : `calc(100% - ${DEPTH})`}`;
});
const SHEET_EDGE = `polygon(${[...top, ...bottom].join(',')})`;

// Jobs first, then projects; a project that is also a job is listed once.
function usesOf(item, thisSite) {
  const jobs = experience.filter((job) => item.everywhere || job.stack.includes(item.name)).map((job) => job.shortName ?? job.company);
  const work = projects
    .filter((p) => (item.everywhere ? p.links.some((l) => l.type === 'github' && l.active) : p.stack.includes(item.name)))
    .map((p) => p.name);
  const names = [...new Set([...jobs, ...work])];
  if (item.alsoHere || item.everywhere) names.push(thisSite);
  return names;
}

export default function StackPage() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="bg-brand-blue-strong py-24 text-white lg:py-36">
      <Reveal className="mx-auto grid max-w-[1440px] gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 data-reveal className="text-display font-bold leading-none tracking-[-0.04em]">
            {t.stack.title}
          </h2>
          <p data-reveal style={{ '--d': 1 }} className="mt-6 max-w-[32ch] text-heading font-medium leading-snug">
            {t.stack.note}
          </p>
        </div>

        <div
          data-reveal
          style={{ '--d': 2, clipPath: SHEET_EDGE }}
          className="grid gap-x-12 gap-y-20 bg-paper px-6 py-14 text-ink md:grid-cols-2 md:px-12 lg:col-span-8 lg:col-start-5"
        >
          {stackGroups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-5 text-heading font-semibold tracking-[-0.01em]">{t.stack.groups[group.id]}</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-1 md:gap-y-3" role="list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="block font-semibold">{item.name}</span>
                    <span className="block text-small text-muted">{usesOf(item, t.stack.thisSite).join(', ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
