'use client';

import Reveal from '../components/ui/reveal';
import { useLanguage } from '../context/LanguageContext';

// Short updates on a green field, the logo's third bar.
export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <section id="notes" className="bg-brand-green py-24 text-white lg:py-36">
      <Reveal className="mx-auto grid max-w-[1440px] gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-8">
        <h2 data-reveal className="text-display font-bold leading-none tracking-[-0.04em] lg:col-span-4">
          {t.notes.title}
        </h2>
        <ul className="grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:col-span-8" role="list">
          {t.notes.items.map((note, i) => (
            <li key={i} data-reveal style={{ '--d': i + 1 }}>
              <h3 className="text-heading font-semibold leading-tight tracking-[-0.02em]">{note.subtitle}</h3>
              <p className="mt-1 text-small font-medium">{note.title}</p>
              <p className="mt-4 max-w-[46ch]">{note.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
