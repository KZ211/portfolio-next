'use client';

import { useEffect, useState } from 'react';
import { LuPause, LuPlay } from 'react-icons/lu';
import Image from 'next/image';
import Logo from '../components/ui/logo';
import Stripe from '../components/ui/stripe';
import { LinkButtons } from '../components/ui/linkButton';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

// `sizes` accounts for object-cover: the frame is taller than it is wide, so
// the wide whiteboard photo must be fetched far wider than the frame to fill
// its height (about 1.3× the viewport on desktop, 1.7× on a phone).
const PHOTOS = [
  { src: '/images/whiteboard-hd.jpg', altKey: 'photoAlt', position: '52% 50%', sizes: '(min-width: 1024px) 130vw, 170vw' },
  { src: '/images/portrait-hd.jpg', altKey: 'portraitAlt', position: '50% 30%', sizes: '(min-width: 1024px) 60vw, 100vw' },
];

// Crossfades the hero photographs every six seconds; stops while the tab is
// hidden or the visitor pauses it, and stays on the first photo under
// reduced motion (no pause control is shown then, nothing moves).
function useSlideshow(length, interval = 6000) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(true);
  useEffect(() => {
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  useEffect(() => {
    if (still || paused) return;
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % length);
    }, interval);
    return () => clearInterval(id);
  }, [length, interval, still, paused]);
  return { index, paused, still, toggle: () => setPaused((p) => !p) };
}

export default function HomePage() {
  const { t } = useLanguage();
  const { index: active, paused, still, toggle } = useSlideshow(PHOTOS.length);
  const links = [...profile.links, { type: 'email', url: `mailto:${profile.email}`, active: true }];

  // The text comes first in the markup so it is read (and tabbed) before the
  // photo and its pause button; `order` puts the photo on top on a phone and
  // on the right on desktop.
  return (
    <section id="home" className="flex flex-col px-3 pb-3 pt-[76px] lg:grid lg:h-[100svh] lg:min-h-[680px] lg:grid-cols-2 lg:gap-3">
      <div className="relative z-[1] order-2 mx-3 -mt-6 flex flex-col bg-surface lg:order-1 lg:mx-0 lg:mt-0">
        <Stripe className="h-3 lg:h-4" />
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-8 text-center md:px-10 lg:py-12">
          <Logo className="hidden w-32 lg:block" />
          <h1 className="text-hero lg:mt-8 font-bold leading-[0.95] tracking-[-0.04em]">
            {t.home.line1}
          </h1>
          <p className="mt-3 text-heading font-medium leading-tight tracking-[-0.02em]">
            {t.home.line2}
          </p>
          <p className="mt-4 max-w-[42ch] lg:mt-6">{t.home.intro}</p>
          <a
            href="#work"
            className="press mt-6 inline-flex min-h-12 items-center bg-ink px-6 text-body font-semibold text-paper lg:mt-8"
          >
            {t.home.cta}
          </a>
          <LinkButtons links={links} className="mt-6 justify-center lg:mt-8" />
        </div>
      </div>

      <div className="relative order-1 h-[30svh] overflow-hidden bg-surface-2 md:h-[44svh] lg:order-2 lg:h-full">
        {PHOTOS.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={t.home[photo.altKey]}
            fill
            priority={i === 0}
            sizes={photo.sizes}
            className={`crossfade drift object-cover ${paused ? '[animation-play-state:paused]' : ''} ${i === active ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectPosition: photo.position }}
            aria-hidden={i !== active}
          />
        ))}
        {!still && (
          <button
            type="button"
            onClick={toggle}
            aria-label={paused ? t.home.play : t.home.pause}
            className="press absolute bottom-3 right-3 grid min-h-11 min-w-11 place-items-center bg-paper text-ink max-lg:bottom-9"
          >
            {paused ? <LuPlay size={18} aria-hidden="true" /> : <LuPause size={18} aria-hidden="true" />}
          </button>
        )}
      </div>
    </section>
  );
}
