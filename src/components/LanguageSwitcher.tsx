"use client";

import React from 'react';
import { useTranslation, languages, LanguageCode } from '@/i18n/I18nProvider';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      {Object.entries(languages).map(([code, { flag }]) => (
        <button
          key={code}
          onClick={() => setLocale(code as LanguageCode)}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
            locale === code 
              ? 'bg-primary text-white scale-110' 
              : 'bg-primary/10 hover:bg-primary/20'
          }`}
          title={languages[code as LanguageCode].name}
        >
          <span className="text-lg">{flag}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
