"use client";

import React from 'react';
import Tabs from '@/components/Tab';
import Carousel from '@/components/Carousel';
import { useTranslation } from '@/i18n/I18nProvider';

interface FeaturedPricingSectionProps {
  tabs: {
    id: string;
    name: string;
    content: React.ReactNode;
  }[];
}

const FeaturedPricingSection = ({ tabs }: FeaturedPricingSectionProps) => {
  const { t } = useTranslation();
  return (
    <section id='services' className="section bg-light py-responsive px-responsive">
      <div className="text-center mb-6 md:mb-10" data-aos="fade-up">
        <h2 className="section-title">{t('home.featuredPricing.title')}</h2>
        <p className="section-subtitle">{t('home.featuredPricing.subtitle')}</p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
};

export default FeaturedPricingSection;
