'use client';

import { LinkButtons } from '../ui/linkButton';
import { useLanguage } from '../../context/LanguageContext';

// What a recruiter needs about one project: what it is, what I did,
// what it's built with, and where to see it.
export default function ProjectDetails({ project, className = '' }) {
  const { t, pick } = useLanguage();

  return (
    <div className={className}>
      <p>{pick(project.summary)}</p>
      <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-small">
        <dt className="text-muted">{t.work.role}</dt>
        <dd>{pick(project.role)}</dd>
        <dt className="text-muted">{t.work.stack}</dt>
        <dd>{project.stack.join(', ')}</dd>
      </dl>
      <LinkButtons links={project.links} className="mt-6" />
    </div>
  );
}
