"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  lang: 'fr' | 'ar';
  setLang: (lang: 'fr' | 'ar') => void;
  t: (frStr: string, arStr: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: (frStr) => frStr,
});

export const useLang = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<'fr' | 'ar'>('fr');

  const setLang = (newLang: 'fr' | 'ar') => {
    setLangState(newLang);
    if (newLang === 'ar') {
      document.body.classList.add('lang-ar');
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.body.classList.remove('lang-ar');
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'fr';
    }
  };

  useEffect(() => {
    // init
    document.documentElement.lang = 'fr';
  }, []);

  const t = (frStr: string, arStr: string) => {
    return lang === 'fr' ? frStr : arStr;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
