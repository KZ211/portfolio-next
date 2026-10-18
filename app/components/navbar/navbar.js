'use client';

import { useEffect, useRef, useState } from 'react';
import { LuSun, LuMoon, LuMenu, LuX } from 'react-icons/lu';
import Logo from '../ui/logo';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export const SECTIONS = ['experience', 'work', 'stack', 'about', 'notes', 'contact'];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const close = () => setOpen(false);

  // While the phone menu is open: focus its first link, keep the page behind
  // it still, close on Escape (focus back on the toggle) and close if the
  // window grows to the desktop layout.
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector('a')?.focus();
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onWide = (event) => event.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onWide);
    return () => {
      root.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onWide);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-paper">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">
        {t.meta.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-4 md:px-8">
        <a href="#home" onClick={close} className="press grid min-h-11 shrink-0 place-items-center" aria-label={t.nav.home}>
          <Logo className="h-8 w-auto" />
        </a>

        <nav className="ml-auto hidden lg:block" aria-label={t.nav.main}>
          <ul className="flex gap-7 text-small font-medium">
            {SECTIONS.slice(0, 4).map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="py-2 transition-colors hover:text-brand-blue">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.language}
            lang={lang === 'en' ? 'es' : 'en'}
            className="press min-h-11 min-w-11 text-small font-semibold"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={toggleTheme} aria-label={t.nav.theme} className="press grid min-h-11 min-w-11 place-items-center">
            {theme === 'light' ? <LuMoon size={18} aria-hidden="true" /> : <LuSun size={18} aria-hidden="true" />}
          </button>
          <a href="#contact" className="press ml-2 hidden bg-brand-red px-4 py-2.5 text-small font-semibold text-white sm:inline-block">
            {t.nav.contact}
          </a>
          <button
            ref={toggleRef}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="press grid min-h-11 min-w-11 place-items-center lg:hidden"
          >
            {open ? <LuX size={22} aria-hidden="true" /> : <LuMenu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-label={t.nav.main}
          className="max-h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain bg-paper px-4 pb-8 shadow-lg lg:hidden" /* taste-skill-ignore: open menu floats over the page */
        >
          <ul className="flex flex-col">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={close} className="block py-3 text-display-narrow font-bold leading-tight tracking-[-0.03em]">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
