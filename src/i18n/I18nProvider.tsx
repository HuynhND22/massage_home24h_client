"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { dynamicTranslationKeys, fetchAllDynamicTranslations } from '../services/apiService';

// Define available languages
export const languages = {
  en: { name: 'English', flag: <Image src="/images/flag-uk.svg" alt="English" width={20} height={20} /> },
  vi: { name: 'Tiếng Việt', flag: <Image src="/images/flag-vietnam.svg" alt="Tiếng Việt" width={20} height={20} /> },
  ko: { name: '한국어', flag: <Image src="/images/flag-korea.svg" alt="한국어" width={20} height={20} /> },
  zh: { name: '中文', flag: <Image src="/images/flag-china.svg" alt="中文" width={20} height={20} /> }
};

export type LanguageCode = keyof typeof languages;

// Context type definition
interface I18nContextType {
  locale: LanguageCode;
  setLocale: (locale: LanguageCode) => void;
  t: (key: string, params?: Record<string, any>) => string;
  translations: Record<string, any>;
}

// Create context with default values
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

export const I18nProvider = ({ 
  children, 
  defaultLocale = 'vi' 
}: I18nProviderProps) => {
  const [locale, setLocale] = useState<LanguageCode>(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [dynamicTranslations, setDynamicTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations for the current locale
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // Dynamic import of the translation file based on locale
        const translationModule = await import(`./locales/${locale}.json`);
        const staticTranslations = translationModule.default || translationModule;
        
        // Fetch dynamic translations from API
        const apiTranslations = await fetchAllDynamicTranslations(locale);
        setDynamicTranslations(apiTranslations);

        // Set the combined translations
        setTranslations(staticTranslations);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        // Fallback to default locale if current locale fails
        if (locale !== defaultLocale) {
          const fallbackModule = await import(`./locales/${defaultLocale}.json`);
          setTranslations(fallbackModule.default || fallbackModule);
          
          // Also try to fetch dynamic translations for the default locale
          try {
            const apiTranslations = await fetchAllDynamicTranslations(defaultLocale);
            setDynamicTranslations(apiTranslations);
          } catch (dynamicError) {
            console.error(`Failed to load dynamic translations for fallback locale:`, dynamicError);
            setDynamicTranslations({});
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale, defaultLocale]);

  // Save locale preference to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', locale);
    }
  }, [locale]);

  // Initialize locale from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('preferredLanguage') as LanguageCode | null;
      if (savedLocale && Object.keys(languages).includes(savedLocale)) {
        setLocale(savedLocale);
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.split('-')[0] as LanguageCode;
        if (Object.keys(languages).includes(browserLang)) {
          setLocale(browserLang);
        }
      }
    }
  }, []);

  // Translation function that retrieves nested keys (e.g., "home.hero.title")
  // And supports parameters for string interpolation
  const t = (key: string, params?: Record<string, any>): string => {
    if (isLoading) return key; // Return key while loading
    
    // First check if this is a dynamic key that should come from the API
    if (dynamicTranslationKeys.includes(key) && dynamicTranslations[key]) {
      const dynamicValue = dynamicTranslations[key];
      
      // Handle parameter interpolation if params are provided
      if (params) {
        return dynamicValue.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
          return params[paramKey] !== undefined ? String(params[paramKey]) : match;
        });
      }
      return dynamicValue;
    }
    
    // If not found in dynamic translations, use static translations
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      value = value[k];
    }
    
    if (typeof value === 'string') {
      // Handle parameter interpolation if params are provided
      if (params) {
        return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
          return params[paramKey] !== undefined ? String(params[paramKey]) : match;
        });
      }
      return value;
    }
    return key; // Return key if translation not found
  };

  const contextValue = {
    locale,
    setLocale,
    t,
    translations
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

// Custom hook to use the i18n context
export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
