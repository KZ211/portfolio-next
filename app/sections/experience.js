'use client';

import Reveal from '../components/ui/reveal';
import Job from '../components/experience/job';
import { useLanguage } from '../context/LanguageContext';
import { experience } from '../data/experience';

export default function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative bg-surface py-24 lg:py-40">
      {/* The hero's matrix lines carry on across the seam for a moment: the
          same columns the heading and intro below sit on. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 hidden h-28 lg:block">
        <div className="mx-auto grid h-full max-w-[1440px] grid-cols-12 gap-x-8 px-8">
          <span className="col-start-1 -ml-4 border-l border-rule" />
          <span className="col-start-6 -ml-4 border-l border-rule" />
          <span className="col-start-10 -ml-4 border-l border-rule" />
          <span className="col-start-12 -mr-4 border-r border-rule" />
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <Reveal className="mb-14 grid gap-4 lg:mb-20 lg:grid-cols-12 lg:gap-8">
          <h2 data-reveal className="text-display font-bold leading-none tracking-[-0.04em] lg:col-span-5">
            {t.experience.title}
          </h2>
          <p data-reveal style={{ '--d': 1 }} className="max-w-[46ch] self-end text-heading font-medium leading-snug lg:col-span-7">
            {t.experience.intro}
          </p>
        </Reveal>
        <div className="space-y-20 lg:space-y-28">
          {experience.map((job) => (
            <Reveal key={job.id}>
              <Job job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
