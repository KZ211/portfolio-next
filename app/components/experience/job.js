'use client';

import { LinkButtons } from '../ui/linkButton';
import { useLanguage } from '../../context/LanguageContext';

// One job: who, when and what I did there, then what it was built with.
export default function Job({ job, index = 0 }) {
  const { t, pick } = useLanguage();

  return (
    <article className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <header data-reveal style={{ '--d': index }} className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
        <h3 className="text-heading font-semibold leading-tight tracking-[-0.02em]">{job.company}</h3>
        <p className="mt-2 text-small text-muted">
          {pick(job.kind)} · {pick(job.period)}
        </p>
      </header>

      <div data-reveal style={{ '--d': index + 1 }} className="lg:col-span-8">
        <p className="font-semibold">{pick(job.role)}</p>
        <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 marker:text-brand-blue" role="list">
          {pick(job.highlights).map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        {job.projects?.length > 0 && (
          <div className="mt-8 grid gap-x-8 gap-y-6 bg-paper p-6 sm:grid-cols-2 md:p-8">
            <h4 className="sr-only">{t.experience.projects}</h4>
            {job.projects.map((project) => (
              <div key={project.name}>
                <p className="font-semibold">{project.name}</p>
                <p className="mt-1 text-small">{pick(project.text)}</p>
              </div>
            ))}
          </div>
        )}

        <p className="mt-6 max-w-[68ch] text-small">
          <span className="text-muted">{t.work.stack}: </span>
          {job.stack.join(', ')}
        </p>
        {job.links.length > 0 && <LinkButtons links={job.links} className="mt-5" />}
      </div>
    </article>
  );
}
