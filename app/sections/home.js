'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Stripe from '../components/ui/stripe';
import { LinkButtons } from '../components/ui/linkButton';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

// The whiteboard photo is 2400×1082. The plate (the original photo) and the
// cutout (people only) share that frame, so both are drawn into the same
// covering box (.hero-canvas in globals.css) and stay aligned at rest.
// `sizes`: the box is as wide as the viewport or 2.22× the scene height,
// whichever is larger (the scene is the full stage on desktop, 56% of it on
// a phone).
const SIZES = '(min-width: 1024px) and (min-aspect-ratio: 2218/1000) 100vw, (min-width: 1024px) 222vh, 125vh';

// The matrix drawn on the board, in photo pixels: its four column lines and
// four row lines. The plate scales around its centre (matches the plate's
// transform-origin in globals.css: 900/2400, 279/1082).
const MATRIX_X = [780, 855, 945, 1020];
const MATRIX_Y = [172, 240, 300, 386];
const ORIGIN = [0.375, 0.258];
const PLATE_GROWTH = 0.7; // plate scale at the end of the beat: 1 + this
const LIFT = 0.22; // how far the copy row rises on desktop, in stage heights
const GUTTER = 16; // half the row's column gap: lines sit in the gaps

const clamp = (v) => Math.min(1, Math.max(0, v));
const smooth = (v) => v * v * (3 - 2 * v);
const phase = (p, from, to) => smooth(clamp((p - from) / (to - from)));
const lerp = (a, b, t) => a + (b - a) * t;

// One scroll progress for the pinned hero (0 when it starts, 1 when the
// stage is about to release), turned into eased phases written as CSS
// custom properties on the section. The planes read them in globals.css.
// On desktop the same progress drives the hairlines that trace the board's
// matrix, then open towards the copy row and dissolve as it settles.
function usePizarra({ sectionRef, stageRef, plateRef, rowRef, linesRef }) {
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const lines = linesRef.current ? [...linesRef.current.children] : [];
    let raf = 0;
    let onScreen = true;
    let geo = null;
    let settle = 0;

    const measure = () => {
      const plate = plateRef.current;
      const scene = plate.offsetParent;
      const row = rowRef.current;
      const stageBox = stage.getBoundingClientRect();
      const rowBox = row.getBoundingClientRect();
      const cells = [...row.children].map((cell) => cell.getBoundingClientRect());
      const lift = LIFT * stage.clientHeight;
      // Undo the row's current lift to find where it ends up.
      const rowTop = rowBox.top - stageBox.top + settle * lift - lift;
      const xs = cells.map((cell) => cell.left - stageBox.left - GUTTER);
      xs.push(cells[2].right - stageBox.left + GUTTER);
      const bottom = stage.clientHeight;
      geo = {
        left: scene.offsetLeft + plate.offsetLeft,
        top: scene.offsetTop + plate.offsetTop,
        k: plate.offsetWidth / 2400,
        ox: plate.offsetWidth * ORIGIN[0],
        oy: plate.offsetHeight * ORIGIN[1],
        xs,
        ys: [rowTop - 28, rowTop + rowBox.height + 28, bottom - 1, bottom - 1],
        bottom,
      };
    };

    const drawLines = (p, walk) => {
      const trace = clamp((p - 0.16) / 0.14);
      const open = phase(p, 0.42, 0.82);
      // They trace the matrix, open towards the copy row and dissolve there,
      // so no grid is left standing once the row has settled.
      linesRef.current.style.opacity = (trace * (1 - open)).toFixed(3);
      if (!trace || !geo) return;
      const s = 1 + PLATE_GROWTH * walk;
      const X = MATRIX_X.map((u) => geo.left + geo.ox + (u * geo.k - geo.ox) * s);
      const Y = MATRIX_Y.map((v) => geo.top + geo.oy + (v * geo.k - geo.oy) * s);
      const x0 = lerp(X[0], geo.xs[0], open);
      const x1 = lerp(X[3], geo.xs[3], open);
      const y0 = lerp(Y[0], geo.ys[0], open);
      const y1 = lerp(Y[3], geo.bottom, open);
      for (let i = 0; i < 4; i += 1) {
        const x = lerp(X[i], geo.xs[i], open);
        lines[i].style.transform = `translate(${x}px, ${y0}px) scale(1, ${(y1 - y0) / 2})`;
        const y = lerp(Y[i], geo.ys[i], open);
        lines[i + 4].style.transform = `translate(${x0}px, ${y}px) scale(${(x1 - x0) / 2}, 1)`;
      }
    };

    const frame = () => {
      raf = 0;
      const travel = section.offsetHeight - stage.offsetHeight;
      const p = travel > 0 ? clamp(-section.getBoundingClientRect().top / travel) : 0;
      const walk = phase(p, 0, 0.9);
      settle = phase(p, 0.42, 0.85);
      const values = {
        walk,
        fly: phase(p, 0, 0.55),
        recede: phase(p, 0.08, 0.6),
        dim: phase(p, 0.22, 0.65),
        settle,
        reveal: clamp((p - 0.58) / 0.25),
      };
      for (const [key, value] of Object.entries(values)) {
        section.style.setProperty(`--${key}`, value.toFixed(4));
      }
      if (desktop.matches && lines.length) drawLines(p, walk);
    };

    const schedule = () => {
      if (!raf && onScreen && motion.matches) raf = requestAnimationFrame(frame);
    };
    const refresh = () => {
      if (!motion.matches) {
        for (const key of ['walk', 'fly', 'recede', 'dim', 'settle', 'reveal']) section.style.removeProperty(`--${key}`);
        return;
      }
      measure();
      frame();
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      section.toggleAttribute('data-live', onScreen && motion.matches);
      if (onScreen) schedule();
    });
    observer.observe(section);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', refresh);
    motion.addEventListener('change', refresh);
    desktop.addEventListener('change', refresh);
    refresh();
    document.fonts?.ready.then(refresh);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', refresh);
      motion.removeEventListener('change', refresh);
      desktop.removeEventListener('change', refresh);
    };
  }, [sectionRef, stageRef, plateRef, rowRef, linesRef]);
}

export default function HomePage() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const plateRef = useRef(null);
  const rowRef = useRef(null);
  const linesRef = useRef(null);
  usePizarra({ sectionRef, stageRef, plateRef, rowRef, linesRef });
  const links = [...profile.links, { type: 'email', url: `mailto:${profile.email}`, active: true }];

  // Back to front: plate, dimming ground, name, people, scrim, matrix lines,
  // copy. The name and copy come first in the markup so they are read first;
  // z-index puts the people between the name and the copy.
  return (
    <section id="home" ref={sectionRef} className="hero theme-dark relative">
      <div ref={stageRef} className="hero-stage">
        <div className="pointer-events-none absolute inset-0 flex flex-col px-4 pb-6 pt-24 lg:px-0 lg:pb-8 lg:pt-[18cqh]">
          {/* On desktop the name starts in marker ink on the white board and
              turns white as the board dims to black: a white copy drawn by
              CSS (::after, from data-text) fades in over the dark one. */}
          <h1
            data-text={t.home.line1}
            className="hero-name relative z-[5] grid font-bold uppercase leading-[0.86] tracking-[-0.045em] lg:z-[2] lg:whitespace-nowrap lg:text-center"
          >
            <span className="hero-name-ink [grid-area:1/1]">{t.home.line1}</span>
          </h1>

          <div
            ref={rowRef}
            className="hero-row pointer-events-auto relative z-[5] mx-auto flex w-full max-w-[1440px] flex-1 flex-col lg:mt-auto lg:grid lg:flex-none lg:grid-cols-12 lg:gap-x-8 lg:px-8"
          >
            <div className="mt-4 lg:col-span-5 lg:mt-0">
              <Stripe className="mb-4 h-1.5 w-24" />
              <p className="max-w-[18ch] text-heading font-semibold leading-tight tracking-[-0.02em]">{t.home.line2}</p>
            </div>
            <p className="hero-later order-2 mt-auto max-w-[42ch] leading-[1.6] lg:order-none lg:col-span-4 lg:mt-0">
              {t.home.intro}
            </p>
            <div className="contents lg:block lg:col-span-3">
              <a
                href="#work"
                className="press order-1 mt-5 inline-flex min-h-12 items-center self-start bg-ink px-6 text-body font-semibold text-paper lg:mt-0"
              >
                {t.home.cta}
              </a>
              <div className="hero-later order-3 mt-4">
                <LinkButtons links={links} />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scene z-0" aria-hidden="true">
          <div ref={plateRef} className="hero-canvas hero-plate">
            <Image src="/images/whiteboard-hd.jpg" alt="" fill priority sizes={SIZES} />
          </div>
        </div>
        <div className="hero-dim absolute inset-0 z-[1]" />
        <div className="hero-scene z-[3]">
          <div className="hero-canvas hero-team">
            <Image src="/images/hero/team-cut.webp" alt={t.home.photoAlt} fill priority sizes={SIZES} />
          </div>
        </div>
        <div className="hero-scrim absolute inset-x-0 bottom-0 top-[58%] z-[4] lg:top-[45%]" />
        <div ref={linesRef} className="hero-lines absolute inset-0 z-[4] hidden opacity-0 lg:block" aria-hidden="true">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
