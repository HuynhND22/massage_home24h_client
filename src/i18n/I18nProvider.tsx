"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { dynamicTranslationKeys, fetchAllDynamicTranslations } from '../services/apiService';

// Danh sách ngôn ngữ hỗ trợ
export const languages = {
  en: { name: 'English', flag: <Image src="/images/flag-uk.svg" alt="English" width={20} height={20} /> },
  vi: { name: 'Tiếng Việt', flag: <Image src="/images/flag-vietnam.svg" alt="Tiếng Việt" width={20} height={20} /> },
  ko: { name: '한국어', flag: <Image src="/images/flag-korea.svg" alt="한국어" width={20} height={20} /> },
  zh: { name: '中文', flag: <Image src="/images/flag-china.svg" alt="中文" width={20} height={20} /> }
};

export type LanguageCode = keyof typeof languages;

// Kiểu dữ liệu context
interface I18nContextType {
  locale: LanguageCode;
  setLocale: (locale: LanguageCode) => void;
  t: (key: string, params?: Record<string, any>) => string;
  translations: Record<string, any>;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'vi',
  setLocale: () => {},
  t: () => '',
  translations: {}
});

interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: LanguageCode;
}

// Hàm lấy locale khởi tạo từ localStorage nếu có
const getInitialLocale = (defaultLocale: LanguageCode): LanguageCode => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('preferredLanguage') as LanguageCode | null;
    if (saved && Object.keys(languages).includes(saved)) {
      return saved;
    }
  }
  return defaultLocale;
};

export const I18nProvider = ({ 
  children, 
  defaultLocale = 'vi' 
}: I18nProviderProps) => {
  const [locale, setLocale] = useState<LanguageCode>(() => getInitialLocale(defaultLocale));
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [dynamicTranslations, setDynamicTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Tải bản dịch mỗi khi locale thay đổi
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translationModule = await import(`./locales/${locale}.json`);
        const staticTranslations = translationModule.default || translationModule;

        const apiTranslations = await fetchAllDynamicTranslations(locale);
        setDynamicTranslations(apiTranslations);

        setTranslations(staticTranslations);
      } catch (error) {
        console.error(`Lỗi tải ngôn ngữ ${locale}:`, error);

        if (locale !== defaultLocale) {
          try {
            const fallbackModule = await import(`./locales/${defaultLocale}.json`);
            setTranslations(fallbackModule.default || fallbackModule);

            const apiTranslations = await fetchAllDynamicTranslations(defaultLocale);
            setDynamicTranslations(apiTranslations);
          } catch (fallbackError) {
            console.error('Lỗi tải ngôn ngữ dự phòng:', fallbackError);
            setTranslations({});
            setDynamicTranslations({});
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale, defaultLocale]);

  // Lưu locale vào localStorage khi thay đổi
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // Hàm dịch key
  const t = (key: string, params?: Record<string, any>): string => {
    if (isLoading) return key;

    if (dynamicTranslationKeys.includes(key) && dynamicTranslations[key]) {
      const value = dynamicTranslations[key];
      return params
        ? value.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`)
        : value;
    }

    const keys = key.split('.');
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
      if (!value) return key;
    }

    return typeof value === 'string' && params
      ? value.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`)
      : value ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, translations }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    console.log('polices')
    throw new Error('useTranslation phải dùng trong I18nProvider');
  }
  return context;
};
