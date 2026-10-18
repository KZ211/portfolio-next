'use client';

import { LuGithub, LuArrowUpRight, LuPlay } from 'react-icons/lu';
import { RxVercelLogo } from 'react-icons/rx';
import { FaLinkedinIn } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { useLanguage } from '../../context/LanguageContext';

// One entry per kind of link. The colour follows the AJ logo:
// green opens code, blue opens something live, red reaches a person.
export const LINK_TYPES = {
  github: { icon: LuGithub, tone: 'bg-brand-green' },
  live: { icon: LuArrowUpRight, tone: 'bg-brand-blue-strong' },
  demo: { icon: LuPlay, tone: 'bg-brand-blue-strong' },
  vercel: { icon: RxVercelLogo, tone: 'bg-ink text-paper' },
  linkedin: { icon: FaLinkedinIn, tone: 'bg-brand-blue-strong' },
  email: { icon: MdAlternateEmail, tone: 'bg-brand-red' },
};

const BASE =
  'inline-flex min-h-11 items-center gap-2 px-4 py-2 text-small font-semibold transition-transform duration-150 ease-out';

/**
 * A link rendered as a button.
 *   <LinkButton type="github" url="https://…" active />
 * `active={false}` keeps it on the page but disabled, showing `note`.
 * `label` overrides the default text for the type.
 */
export default function LinkButton({ type, url, active = true, note, label, size = 'md' }) {
  const { t, pick } = useLanguage();
  const config = LINK_TYPES[type] ?? LINK_TYPES.live;
  const Icon = config.icon;
  const text = label ?? t.links[type] ?? type;
  const iconSize = size === 'sm' ? 16 : 18;

  if (!active || !url) {
    const reason = pick(note) || t.links.unavailable;
    return (
      <span aria-disabled="true" className={`${BASE} cursor-not-allowed bg-surface-2 text-muted`}>
        <Icon size={iconSize} aria-hidden="true" />
        <span>{text}</span>
        <span className="font-normal">· {reason}</span>
      </span>
    );
  }

  const external = /^https?:/.test(url);
  return (
    <a
      href={url}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${BASE} press text-white ${config.tone}`}
    >
      <Icon size={iconSize} aria-hidden="true" />
      <span>{text}</span>
      {external && <span className="sr-only"> {t.links.newTab}</span>}
    </a>
  );
}

// Renders a list of { type, url, active, note } entries.
export function LinkButtons({ links, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link) => (
        <LinkButton key={link.type + link.url} {...link} />
      ))}
    </div>
  );
}
