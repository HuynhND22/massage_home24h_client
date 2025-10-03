"use client";

import React from 'react';
import { useTranslation, languages, LanguageCode } from '@/i18n/I18nProvider';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const { locale } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (code: LanguageCode) => {
    if (!pathname) return;
    // Strip current locale prefix if present and replace with the new one
    const parts = pathname.split('/').filter(Boolean);
    const currentMaybeLocale = parts[0];
    const supported = Object.keys(languages);
    const pathWithoutLocale = supported.includes(currentMaybeLocale) ? `/${parts.slice(1).join('/')}` : pathname;
    const nextPath = `/${code}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    router.push(nextPath);
  };

  return (
    <div className="flex items-center gap-1">
      {Object.entries(languages).map(([code, { flag }]) => (
        <button
          key={code}
          onClick={() => switchTo(code as LanguageCode)}
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
