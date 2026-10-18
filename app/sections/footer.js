'use client';

import Image from 'next/image';
import Logo from '../components/ui/logo';
import Stripe from '../components/ui/stripe';
import { SECTIONS } from '../components/navbar/navbar';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <Stripe className="h-2" />
      <div className="bg-surface md:grid md:min-h-[90svh] md:grid-cols-2">
        <div className="relative h-[50svh] md:h-auto">
          {/* Wide photo in a tall frame: fetched wider than the frame (see home.js). */}
          <Image src="/images/whiteboard-hd.jpg" alt={t.home.photoAlt} fill sizes="(min-width: 768px) 130vw, 250vw" className="object-cover object-[62%_40%]" />
        </div>

        <div className="flex flex-col px-6 pb-8 pt-14 md:px-16 md:pt-20">
          <Logo className="w-14" />
          <nav aria-label={t.footer.nav} className="mt-10">
            <ul className="group/menu space-y-2" role="list">
              {['home', ...SECTIONS].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-block py-1 text-menu font-bold leading-none tracking-[-0.03em] transition-[color,transform] duration-200 hover:translate-x-3 group-hover/menu:text-muted hover:!text-ink"
                  >
                    {id === 'home' ? t.footer.top : t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-16 grid gap-6 text-small sm:grid-cols-2">
            <p>
              <a href={`mailto:${profile.email}`} className="font-semibold hover:text-brand-blue">
                {profile.email}
              </a>
              <br />
              {profile.location}
            </p>
            <ul role="list">
              {profile.links.map((link) => (
                <li key={link.type}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-brand-blue">
                    {t.links[link.type]}
                    <span className="sr-only"> {t.links.newTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-auto pt-16 text-small text-muted">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
