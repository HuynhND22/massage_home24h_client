"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/I18nProvider';

// Interface for a single testimonial
export interface Testimonial {
  id: number | string;
  name: string;
  image: string;
  rating: number;
  comment: string;
}

// Interface for component props
interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

// Custom hook to get translated testimonials
const useTranslatedTestimonials = (): Testimonial[] => {
  const { t } = useTranslation();
  
  return [
    {
      id: 1,
      name: t('home.testimonials.items.0.name'),
      image: "/images/testimonial-1.jpg",
      rating: 5,
      comment: t('home.testimonials.items.0.comment')
    },
    {
      id: 2,
      name: t('home.testimonials.items.1.name'),
      image: "/images/testimonial-2.jpg",
      rating: 5,
      comment: t('home.testimonials.items.1.comment')
    },
    {
      id: 3,
      name: t('home.testimonials.items.2.name'),
      image: "/images/testimonial-3.jpg",
      rating: 5,
      comment: t('home.testimonials.items.2.comment')
    }
  ];
};

const TestimonialsSection = ({
  testimonials,
  title,
  subtitle
}: TestimonialsSectionProps) => {
  const { t } = useTranslation();
  const defaultTestimonials = useTranslatedTestimonials();
  
  // Set default values using translations
  const sectionTitle = title || t('home.testimonials.title');
  const sectionSubtitle = subtitle || t('home.testimonials.subtitle');
  const sectionTestimonials = testimonials || defaultTestimonials;
  return (
    <section className="section bg-background">
      <div className="container">
        <div data-aos="fade-up">
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {sectionTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="bg-light p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="animate-pulse" style={{animationDelay: `${i * 0.2}s`}}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
