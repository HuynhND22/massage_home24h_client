"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import { useTranslation } from '@/i18n/I18nProvider';

const IntroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section bg-background px-responsive">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="section-title text-center md:text-left mb-6 font-garamond font-bold">{t('home.intro.title')} <span className="text-primary">Home24h</span></h2>
            <p className="mb-4 md:mb-6 text-base sm:text-lg">
              {t('home.intro.paragraph1')}
            </p>
            <p className="mb-6 md:mb-8 text-base">
              {t('home.intro.paragraph2')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 md:mb-0 max-w-sm">
              <Link href="/about" className="btn btn-secondary flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('common.buttons.learnMore')}</span>
              </Link>
              <Link href="tel:+842122279488" className="btn btn-outline flex items-center justify-center gap-2 group">
                <FaPhone className="transition-transform duration-300 group-hover:rotate-12" /> 
                <span>{t('common.buttons.callNow')}</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
            <Image 
              src="/images/about-spa-new.jpg" 
              alt="Renew Day Spa Interior" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
