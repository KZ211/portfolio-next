'use client';

import Reveal from '../components/ui/reveal';
import ProjectStack from '../components/projects/projectStack';
import ProjectShowcase from '../components/projects/projectShowcase';
import { projects } from '../data/projects';

// The stack is the section's entrance and carries its heading. On desktop
// its landed row opens each project's preview, so the index below only shows
// on a phone, or on desktop once there are more projects than the row holds.
export default function ProjectsPage() {
  return (
    <section id="work" className="pb-24 lg:pb-40">
      <ProjectStack projects={projects} />
      <Reveal id="project-index" className={`mx-auto mt-16 max-w-[1440px] scroll-mt-20 px-4 md:px-8 lg:mt-24 ${projects.length > 4 ? '' : 'lg:hidden'}`}>
        <ProjectShowcase projects={projects} desktop={projects.length > 4} />
      </Reveal>
    </section>
  );
}
