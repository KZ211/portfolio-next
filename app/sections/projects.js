'use client';

import Reveal from '../components/ui/reveal';
import ProjectShowcase from '../components/projects/projectShowcase';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <section id="work" className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:py-40">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 lg:mb-12">
          <h2 data-reveal className="text-heading font-semibold tracking-[-0.02em]">
            {t.work.title}
          </h2>
          <p data-reveal style={{ '--d': 1 }} className="text-small text-muted">
            {t.work.legend}
          </p>
        </div>
        <ProjectShowcase projects={projects} />
      </Reveal>
    </section>
  );
}
