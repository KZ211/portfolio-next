'use client';

import Image from 'next/image';
import Reveal from '../components/ui/reveal';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

// A short first-person letter, signed, beside a portrait that stays in
// view while the letter scrolls on desktop.
export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:py-40">
      <h2 id="about-title" className="sr-only">
        {t.about.title}
      </h2>
      <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div data-reveal className="sm:max-w-[420px] lg:sticky lg:top-24 lg:col-span-5 lg:max-w-none lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
            <Image
              src="/images/portrait-hd.jpg"
              alt={t.home.portraitAlt}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 420px, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>

        <article className="lg:col-span-6 lg:col-start-7 lg:pt-8">
          <div className="max-w-[560px] space-y-5 leading-[1.6]">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} data-reveal style={{ '--d': i + 1 }}>
                {p}
              </p>
            ))}
            <blockquote data-reveal style={{ '--d': 5 }}>
              <p className="inline bg-brand-green px-1 font-medium text-white [box-decoration-break:clone]">{t.about.quote}</p>
            </blockquote>
          </div>
          <footer data-reveal style={{ '--d': 6 }} className="mt-10">
            <p className="text-heading font-semibold tracking-[-0.02em]">{profile.name}</p>
            <p className="text-small text-muted">{t.about.role}</p>
          </footer>
        </article>
      </Reveal>
    </section>
  );
}
