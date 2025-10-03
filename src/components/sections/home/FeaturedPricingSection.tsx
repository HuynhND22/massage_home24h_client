"use client";

import React from 'react';
import Tabs from '@/components/Tab';
import { useTranslation } from '@/i18n/I18nProvider';

interface FeaturedPricingSectionProps {
  tabs: {
    id: string;
    translations: {
      id: string;
      language: string;
      name: string;
    }[];
    content: React.ReactNode;
  }[];
  titleText?: string;
  subtitleText?: string;
}

const FeaturedPricingSection = ({ tabs, titleText, subtitleText }: FeaturedPricingSectionProps) => {
  const { t } = useTranslation();
  return (
    <section id='services' className="section bg-light py-responsive px-responsive">
      <div className="text-center mb-6 md:mb-10" data-aos="fade-up">
        <h2 className="section-title">{titleText ?? t('home.featuredPricing.title')}</h2>
        <p className="section-subtitle">{subtitleText ?? t('home.featuredPricing.subtitle')}</p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
};

export default FeaturedPricingSection;
