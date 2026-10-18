'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LANGS = ['en', 'es'];
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (LANGS.includes(saved)) setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    setLang(newLang);
    try {
      localStorage.setItem('lang', newLang);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// `t` is the copy for the current language; `pick` resolves a { en, es } field.
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  return { ...ctx, pick: (field) => (field && typeof field === 'object' ? field[ctx.lang] : field) };
};
