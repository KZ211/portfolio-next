'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectDetails from './projectDetails';
import { useLanguage } from '../../context/LanguageContext';

// Desktop: project names are the index; pointing at one (or pressing it)
// swaps the sticky preview beside it. Focus alone does not swap it, so a
// keyboard user who picks a project can tab on to that project's links.
// Phone: each project stacks as picture, name, details.
// A link to `#work-<id>` (the planes of the stack above) picks that project
// and scrolls to it. `desktop={false}` leaves out the desktop index when the
// stack's row already shows every project.
export default function ProjectShowcase({ projects, desktop = true }) {
  const { pick } = useLanguage();
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.replace(/^#work-/, '');
      if (!projects.some((p) => p.id === id)) return;
      setActiveId(id);
      const wide = window.matchMedia('(min-width: 1024px)').matches;
      const target = wide ? document.getElementById('project-index') : document.querySelector(`[data-project="${id}"]`);
      target?.scrollIntoView();
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [projects]);

  return (
    <>
      {desktop && (
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
          <ul className="sticky top-[12vh] col-span-7 self-start" role="list">
            {projects.map((project, i) => {
              const isActive = project.id === active.id;
              return (
                <li key={project.id} data-reveal style={{ '--d': i + 1 }}>
                  <h3>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(project.id)}
                      onClick={() => setActiveId(project.id)}
                      aria-pressed={isActive}
                      aria-controls="project-preview"
                      className="group flex w-full items-baseline justify-between gap-6 py-3 text-left"
                    >
                      <span
                        className={`text-display font-bold leading-none tracking-[-0.04em] transition-[color,transform] duration-200 group-hover:translate-x-3 ${
                          isActive ? 'text-ink' : 'text-muted'
                        }`}
                      >
                        {project.name}
                      </span>
                      <span className={`shrink-0 text-small ${isActive ? 'text-ink' : 'text-muted'}`}>
                        {pick(project.kind)}
                        {project.year && ` · ${project.year}`}
                      </span>
                    </button>
                  </h3>
                </li>
              );
            })}
          </ul>

          <div id="project-preview" className="sticky top-[12vh] col-span-5 self-start" data-reveal style={{ '--d': 2 }}>
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
              {projects.map((project) => (
                <Image
                  key={project.id}
                  src={project.image}
                  alt={project.id === active.id ? pick(project.imageAlt) : ''}
                  fill
                  sizes="40vw"
                  className={`object-cover object-top transition-opacity duration-200 ${
                    project.id === active.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <ProjectDetails key={active.id} project={active} className="mt-6" />
          </div>
        </div>
      )}

      <ul className="flex flex-col gap-16 lg:hidden" role="list">
        {projects.map((project) => (
          <li key={project.id} data-reveal>
            <article data-project={project.id} className="scroll-mt-20">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <Image src={project.image} alt={pick(project.imageAlt)} fill sizes="100vw" className="object-cover object-top" />
              </div>
              <h3 className="mt-5 text-display-narrow font-bold leading-none tracking-[-0.04em]">{project.name}</h3>
              <p className="mt-2 text-small text-muted">{pick(project.kind)}</p>
              <ProjectDetails project={project} className="mt-4" />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
