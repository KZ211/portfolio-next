'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ProjectDetails from './projectDetails';
import { useLanguage } from '../../context/LanguageContext';

// The entrance to the projects section: the real screenshots float as a
// tilted stack in depth, with the section title set large behind them. On
// desktop the stage pins for one extra screen while the stack rotates flat
// and the planes land, each at its own pace, as a row of four over the
// index below. On a phone the deck flattens and fans out as it scrolls in.
// Every plane links to `#work-<id>`, which the showcase picks up. On desktop,
// pointing at a plane once the row has landed, or focusing or clicking it at
// any time, shrinks the title and opens that project's preview above the
// row: description, role, stack and its repo and live links.
//
// One progress value (--p, 0 to 1) is written on the scene; the transforms
// are worked out in CSS (`.pstack-*` in globals.css). Under reduced motion
// nothing is written and the CSS shows the landed row.
const clamp = (n) => Math.min(1, Math.max(0, n));

function useStackMotion(sceneRef, boxRef) {
  useEffect(() => {
    const scene = sceneRef.current;
    const box = boxRef.current;
    if (!scene || !box) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 1024px)');
    // The row is always landed when nothing moves.
    if (reduce.matches) {
      scene.setAttribute('data-landed', '');
      return;
    }
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    let raf = 0;
    let visible = false;
    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };

    // Desktop: how far through the pinned run. Phone: how far the stage has
    // come in, done when its top reaches the upper fifth of the screen.
    const progress = () => {
      const vh = window.innerHeight;
      if (desktop.matches) {
        const rect = scene.getBoundingClientRect();
        const run = rect.height - vh;
        return run > 0 ? clamp(-rect.top / run) : 1;
      }
      const rect = box.getBoundingClientRect();
      return clamp((vh - rect.top) / (vh * 0.8));
    };

    const frame = () => {
      raf = 0;
      const p = progress();
      scene.style.setProperty('--p', p.toFixed(4));
      scene.toggleAttribute('data-landed', desktop.matches && p > 0.97);
      if (!(desktop.matches && finePointer.matches)) tilt.tx = tilt.ty = 0;
      tilt.x += (tilt.tx - tilt.x) * 0.08;
      tilt.y += (tilt.ty - tilt.y) * 0.08;
      scene.style.setProperty('--mx', tilt.x.toFixed(4));
      scene.style.setProperty('--my', tilt.y.toFixed(4));
      const settling = Math.abs(tilt.tx - tilt.x) + Math.abs(tilt.ty - tilt.y) > 0.002;
      if (visible && settling) raf = requestAnimationFrame(frame);
    };
    const request = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };
    const onPointer = (event) => {
      if (!finePointer.matches) return;
      tilt.tx = (event.clientX / window.innerWidth) * 2 - 1;
      tilt.ty = (event.clientY / window.innerHeight) * 2 - 1;
      request();
    };

    // Work only while the stage is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) request();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    observer.observe(scene);

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    scene.addEventListener('pointermove', onPointer, { passive: true });
    desktop.addEventListener('change', request);
    scene.style.setProperty('--p', progress().toFixed(4));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      scene.removeEventListener('pointermove', onPointer);
      desktop.removeEventListener('change', request);
    };
  }, [sceneRef, boxRef]);
}

export default function ProjectStack({ projects }) {
  const { t, pick } = useLanguage();
  const sceneRef = useRef(null);
  const boxRef = useRef(null);
  const [preview, setPreview] = useState({ id: projects[0]?.id, open: false });
  useStackMotion(sceneRef, boxRef);
  const panelRef = useRef(null);
  const shown4 = projects.slice(0, 4);
  const shown = projects.find((p) => p.id === preview.id) ?? projects[0];

  const desktop = () => window.matchMedia('(min-width: 1024px)').matches;
  const landed = () => sceneRef.current?.hasAttribute('data-landed');
  // Pointing only previews once the row has landed on desktop; elsewhere the
  // planes are plain links to the index.
  const hover = (id) => desktop() && landed() && setPreview({ id, open: true });
  // Focus or a click on desktop lands the row at once (scrolls to the end of
  // the pinned run) and opens that preview, so a keyboard or an early click
  // never meets a moving stack or a link to a hidden index.
  const choose = (id) => {
    if (!desktop()) return false;
    const scene = sceneRef.current;
    if (!landed()) {
      // Just short of the end of the run, so the stage is still pinned.
      const rect = scene.getBoundingClientRect();
      const run = rect.height - window.innerHeight;
      window.scrollTo({ top: window.scrollY + rect.top + run * 0.985, behavior: 'instant' });
      scene.setAttribute('data-landed', '');
    }
    setPreview({ id, open: true });
    return true;
  };
  const close = () => setPreview((current) => ({ ...current, open: false }));

  // Keyboard path through the preview: Tab from a card goes into its panel
  // (description, repo and live links), Tab off the panel's last link goes to
  // the next card, Shift+Tab off its first link back to the card. Escape
  // closes it and returns to the card.
  const focusables = () => [...(panelRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? [])];
  const cardOf = (id) => boxRef.current?.querySelector(`[data-card="${id}"]`);
  const onCardKey = (event) => {
    if (event.key === 'Escape') close();
    if (event.key !== 'Tab' || event.shiftKey || !preview.open) return;
    const first = focusables()[0];
    if (!first) return;
    event.preventDefault();
    first.focus();
  };
  const onPanelKey = (event) => {
    if (event.key === 'Escape') {
      cardOf(shown.id)?.focus();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = focusables();
    const index = shown4.findIndex((p) => p.id === shown.id);
    if (!event.shiftKey && event.target === items.at(-1) && index < shown4.length - 1) {
      event.preventDefault();
      cardOf(shown4[index + 1].id)?.focus();
    } else if (event.shiftKey && event.target === items[0]) {
      event.preventDefault();
      cardOf(shown.id)?.focus();
    }
  };
  // Focus leaving the whole stage closes the preview.
  const onBoxBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) close();
  };

  return (
    <div ref={sceneRef} className="pstack relative" data-preview={preview.open ? '' : undefined}>
      <div className="pstack-pin overflow-hidden">
        <div className="mx-auto h-full max-w-[1440px] px-4 md:px-8">
          <div ref={boxRef} className="pstack-box relative h-full" onMouseLeave={close} onBlur={onBoxBlur}>
            <div className="pstack-title absolute inset-x-0 top-0 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
              <h2 className="pstack-heading text-name font-bold leading-[0.84] tracking-[-0.05em] lg:text-name-wide">{t.work.title}</h2>
              <p className="pstack-legend pt-2 text-small text-muted lg:pt-4">{t.work.legend}</p>
            </div>

            <ul className="pstack-rig" role="list" aria-label={t.work.title}>
              {shown4.map((project) => (
                <li
                  key={project.id}
                  className="pstack-plane"
                  data-current={preview.open && project.id === shown.id ? '' : undefined}
                >
                  <a
                    href={`#work-${project.id}`}
                    data-card={project.id}
                    onMouseEnter={() => hover(project.id)}
                    onFocus={() => choose(project.id)}
                    onClick={(event) => choose(project.id) && event.preventDefault()}
                    onKeyDown={onCardKey}
                    aria-controls="pstack-preview"
                    aria-expanded={preview.open && project.id === shown.id}
                    className="pstack-card block"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden bg-surface-2">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, 52vw"
                        className="object-cover object-top"
                      />
                    </span>
                    <span className="pstack-caption flex h-10 items-center justify-between gap-3 bg-surface px-3 lg:h-[52px] lg:px-4">
                      <span className="shrink-0 text-small font-semibold lg:text-body">{project.name}</span>
                      <span className="hidden truncate text-small text-muted lg:inline">{pick(project.kind)}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div id="pstack-preview" ref={panelRef} className="pstack-panel hidden lg:grid" onKeyDown={onPanelKey}>
              <div className="col-span-5 min-h-0">
                <h3 className="text-heading font-bold leading-tight tracking-[-0.02em]">{shown.name}</h3>
                <p className="mt-2 text-small text-muted">
                  {pick(shown.kind)}
                  {shown.year && ` · ${shown.year}`}
                </p>
                <ProjectDetails project={shown} className="pstack-details mt-4" />
              </div>
              <div className="relative col-span-7 overflow-hidden bg-surface-2">
                {projects.map((project) => (
                  <Image
                    key={project.id}
                    src={project.image}
                    alt={project.id === shown.id ? pick(project.imageAlt) : ''}
                    fill
                    sizes="50vw"
                    className={`object-cover object-top transition-opacity duration-200 ${
                      project.id === shown.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
