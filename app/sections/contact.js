'use client';

import { useRef, useState } from 'react';
import { LuArrowRight } from 'react-icons/lu';
import Reveal from '../components/ui/reveal';
import SocialSlabs from '../components/contact/socialSlabs';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

// One field. Submitting opens the visitor's email app with the message
// filled in; the form's plain mailto action is the no-JavaScript fallback.
// Beside it (below it on a phone) the AJ bars open into the social links.
export default function ContactPage() {
  const { t } = useLanguage();
  const emailRef = useRef(null);
  const [copyState, setCopyState] = useState('idle'); // idle | copied | failed

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = String(new FormData(event.currentTarget).get('body') || '').trim();
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(t.contact.subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch {
      // No clipboard (insecure context, denied permission): select the
      // address so the visitor can copy it by hand.
      const range = document.createRange();
      range.selectNodeContents(emailRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      setCopyState('failed');
    }
    setTimeout(() => setCopyState('idle'), 3000);
  };

  return (
    <section id="contact" className="mx-auto grid max-w-[1440px] gap-16 px-4 pb-32 pt-40 md:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-40 lg:pt-48">
      <Reveal className="max-w-[560px] lg:col-span-5">
        <h2 data-reveal className="text-heading font-semibold leading-tight tracking-[-0.02em]">
          <span className="block text-muted">{t.contact.prompt1}</span>{' '}
          <span className="block">{t.contact.prompt2}</span>
        </h2>

        <form
          data-reveal
          style={{ '--d': 1 }}
          action={`mailto:${profile.email}`}
          method="get"
          onSubmit={handleSubmit}
          className="mt-7"
        >
          <input type="hidden" name="subject" value={t.contact.subject} />
          <label htmlFor="contact-body" className="sr-only">
            {t.contact.fieldLabel}
          </label>
          <div className="flex h-16 bg-surface focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-blue">
            <input
              id="contact-body"
              name="body"
              required
              pattern=".*\S.*"
              maxLength={1500}
              onInvalid={(event) => event.currentTarget.setCustomValidity(t.contact.empty)}
              onInput={(event) => event.currentTarget.setCustomValidity('')}
              autoComplete="off"
              placeholder={t.contact.placeholder}
              className="min-w-0 flex-1 bg-transparent px-5 text-body text-ink placeholder:text-muted focus:outline-none"
            />
            <button type="submit" aria-label={t.contact.send} className="press m-2 grid w-12 place-items-center bg-brand-red text-white">
              <LuArrowRight size={22} aria-hidden="true" />
            </button>
          </div>
          <p className="mt-4 text-small text-muted">{t.contact.after}</p>
        </form>

        <dl data-reveal style={{ '--d': 2 }} className="mt-16 grid gap-6 text-small sm:grid-cols-[auto_1fr] sm:items-center sm:gap-x-8">
          <dt className="text-muted">{t.contact.email}</dt>
          <dd className="-mt-5 flex flex-wrap items-center gap-3 sm:mt-0">
            <a ref={emailRef} href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center break-all font-semibold hover:text-brand-blue">
              {profile.email}
            </a>
            <button type="button" onClick={copyEmail} className="press min-h-11 bg-surface-2 px-3 font-semibold">
              {copyState === 'copied' ? t.contact.copied : t.contact.copy}
            </button>
            <span role="status" className={copyState === 'failed' ? 'basis-full text-muted' : 'sr-only'}>
              {copyState === 'copied' ? t.contact.copied : copyState === 'failed' ? t.contact.copyFailed : ''}
            </span>
          </dd>
          <dt className="text-muted">{t.contact.location}</dt>
          <dd className="-mt-5 font-semibold sm:mt-0">{profile.location}</dd>
        </dl>
      </Reveal>
      <SocialSlabs className="lg:col-span-7" />
    </section>
  );
}
