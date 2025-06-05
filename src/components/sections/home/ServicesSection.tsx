"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/I18nProvider';

const ServiceCard = ({ name, description, index }: { name: string; description: string; index: number }) => {
  const { t } = useTranslation();
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{name}</h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <Link 
          href={`/services/service-${index + 1}`} 
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-all duration-300 group border-b border-transparent hover:border-primary pb-1"
        >
          <span>{t('common.buttons.viewDetails')}</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = ({ services }: { services: any[] }) => {
  const { t } = useTranslation();
  // const services = [
  //   { name: t('home.services.service') + ' 1', description: t('home.services.description', { number: 1 }) },
  //   { name: t('home.services.service') + ' 2', description: t('home.services.description', { number: 2 }) },
  //   { name: t('home.services.service') + ' 3', description: t('home.services.description', { number: 3 }) }
  // ];
  
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div data-aos="fade-up">
          <h2 className="section-title">{t('home.services.title')}</h2>
          <p className="section-subtitle">
            {t('home.services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-12 p-2">
          {services.map((service, index) => (
            <ServiceCard key={index} name={service.name} description={service.description} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
          <Link 
            href="/services" 
            className="btn btn-primary hover:scale-105 transition-transform duration-300"
          >
            {t('home.services.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
