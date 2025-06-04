"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../../i18n/I18nProvider';

export default function AboutPage() {
  const { t } = useTranslation();
  const yearsOfExperience = new Date().getFullYear() - 2019;
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Massage Home24h"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/40"></div>
        </div>
        <div className="container relative z-10 text-center text-light px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('about.hero.title')}</h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">{t('about.story.title')}</h2>
              <p className="mb-4">
                {t('about.story.paragraphs.0').replace('{years}', yearsOfExperience.toString())}
              </p>
              <p className="mb-6">
                {t('about.story.paragraphs.1').replace('{years}', yearsOfExperience.toString())}
              </p>
              <p>
                {t('about.story.paragraphs.2')}
              </p>
            </div>
            <div className="md:w-1/2 w-full relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/about-story.jpg" 
                alt="Our Story" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">{t('about.mission.title')}</h2>
              <p className="mb-4">
                {t('about.mission.paragraphs.0')}
              </p>
              <p className="mb-4">
                {t('about.mission.paragraphs.1')}
              </p>
              <p>
                {t('about.mission.paragraphs.2')}
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about-mission.jpg" 
                alt="Our Mission" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{t('about.team.title')}</h2>
            <p className="text-lg">
              {t('about.team.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/team-1.jpg" 
                  alt={t('about.team.members.0.name')} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{t('about.team.members.0.name')}</h3>
                <p className="text-primary mb-4">{t('about.team.members.0.position')}</p>
                <p className="text-gray-600 mb-4">
                  {t('about.team.members.0.bio')}
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>L</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/team-2.jpg" 
                  alt={t('about.team.members.1.name')} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{t('about.team.members.1.name')}</h3>
                <p className="text-primary mb-4">{t('about.team.members.1.position')}</p>
                <p className="text-gray-600 mb-4">
                  {t('about.team.members.1.bio')}
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>L</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/team-3.jpg" 
                  alt={t('about.team.members.2.name')} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{t('about.team.members.2.name')}</h3>
                <p className="text-primary mb-4">{t('about.team.members.2.position')}</p>
                <p className="text-gray-600 mb-4">
                  {t('about.team.members.2.bio')}
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>L</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{t('about.testimonials.title')}</h2>
            <p className="text-lg">
              {t('about.testimonials.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-1.jpg"
                    alt={t('about.testimonials.items.0.name')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{t('about.testimonials.items.0.name')}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "{t('about.testimonials.items.0.comment')}"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-2.jpg"
                    alt={t('about.testimonials.items.1.name')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{t('about.testimonials.items.1.name')}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "{t('about.testimonials.items.1.comment')}"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-3.jpg"
                    alt={t('about.testimonials.items.2.name')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{t('about.testimonials.items.2.name')}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "{t('about.testimonials.items.2.comment')}"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('about.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
