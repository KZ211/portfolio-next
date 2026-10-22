'use client';

import { useEffect, useRef } from 'react';
import { LuGithub, LuArrowUpRight } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';

// The three bars of the AJ logo as solid slabs, stacked as they are in the
// mark. As the contact section comes in they open one after another and
// turn their top faces to the visitor, where each carries the link its
// colour means on this site: blue reaches LinkedIn, green opens the code,
// red writes to Alexis. The slabs are the links themselves.
const SLABS = [
  { tone: 'blue', type: 'linkedin', icon: FaLinkedinIn, handle: 'in/alexis-jares' },
  { tone: 'green', type: 'github', icon: LuGithub, handle: 'github.com/KZ211' },
  { tone: 'red', type: 'email', icon: MdAlternateEmail, handle: profile.email },
];

const clamp = (v) => Math.min(1, Math.max(0, v));
const ease = (v) => v * v * (3 - 2 * v);

function urlFor(type) {
  if (type === 'email') return `mailto:${profile.email}`;
  return profile.links.find((link) => link.type === type)?.url;
}

// One progress value, how far the stage has come into the screen, opens the
// slabs in turn (--k on each); a fine pointer tilts the group (--px, --py).
// Nothing runs under reduced motion: the CSS shows the slabs open.
function useSlabs(stageRef) {
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const slabs = [...stage.querySelectorAll('[data-slab]')];
    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
    let frame = 0;
    let visible = false;

    const render = () => {
      frame = 0;
      const vh = window.innerHeight;
      const p = clamp((vh * 0.95 - stage.getBoundingClientRect().top) / (vh * 0.7));
      slabs.forEach((el, i) => el.style.setProperty('--k', ease(clamp((p - i * 0.12) / 0.6)).toFixed(4)));
      tilt.x += (tilt.tx - tilt.x) * 0.12;
      tilt.y += (tilt.ty - tilt.y) * 0.12;
      stage.style.setProperty('--px', tilt.x.toFixed(4));
      stage.style.setProperty('--py', tilt.y.toFixed(4));
      const settling = Math.abs(tilt.tx - tilt.x) + Math.abs(tilt.ty - tilt.y) > 0.002;
      if (settling && visible) request();
    };
    const request = () => {
      if (!frame && visible) frame = requestAnimationFrame(render);
    };
    const onPointer = (event) => {
      if (!finePointer.matches) return;
      const rect = stage.getBoundingClientRect();
      tilt.tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      tilt.ty = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      request();
    };
    const onLeave = () => {
      tilt.tx = 0;
      tilt.ty = 0;
      request();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      request();
    });
    observer.observe(stage);
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    stage.addEventListener('pointermove', onPointer);
    stage.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      stage.removeEventListener('pointermove', onPointer);
      stage.removeEventListener('pointerleave', onLeave);
    };
  }, [stageRef]);
}

export default function SocialSlabs({ className = '' }) {
  const { t } = useLanguage();
  const stageRef = useRef(null);
  useSlabs(stageRef);

  return (
    <div ref={stageRef} className={`slabs ${className}`}>
      <ul className="slabs-group" role="list" aria-label={t.contact.links}>
        {SLABS.map(({ tone, type, icon: Icon, handle }) => {
          const external = type !== 'email';
          return (
            <li key={type} className="slab-item">
              <a
                href={urlFor(type)}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                data-slab
                data-tone={tone}
                className="slab"
              >
                <span aria-hidden="true" className="slab-face slab-back" />
                <span aria-hidden="true" className="slab-face slab-bottom" />
                <span aria-hidden="true" className="slab-face slab-left" />
                <span aria-hidden="true" className="slab-face slab-right" />
                <span aria-hidden="true" className="slab-face slab-front" />
                <span className="slab-face slab-top flex items-center gap-3 px-4 lg:gap-5 lg:px-7">
                  <Icon className="shrink-0 text-[1.25rem] lg:text-[1.75rem]" aria-hidden="true" />
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="text-body font-bold uppercase tracking-[0.08em] lg:text-heading">{t.links[type]}</span>
                    <span className="truncate text-small font-medium">{handle}</span>
                  </span>
                  <LuArrowUpRight className="slab-arrow ml-auto shrink-0 text-[1.25rem] lg:text-[1.75rem]" aria-hidden="true" />
                  {external && <span className="sr-only"> {t.links.newTab}</span>}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
