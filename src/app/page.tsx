"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fontsource/eb-garamond';
import HeroCarousel from '@/components/HeroCarousel';
import Carousel from '@/components/Carousel';
import { 
  IntroSection, 
  FeaturedPricingSection, 
  ServicesSection, 
  TestimonialsSection, 
  CTASection 
} from '@/components/sections/home';
import { useTranslation } from '@/i18n/I18nProvider';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Hero carousel slides data
  const slides = [
  {
    image: '/images/home-background.jpeg',
    title: t('home.hero.slide1.title'),
    description: t('home.hero.slide1.description'),
  },
  {
    image: '/images/testimage.jpg',
    title: t('home.hero.slide2.title'),
    description: t('home.hero.slide2.description'),
  },
  {
    image: '/images/home-background.jpeg',
    title: t('home.hero.slide1.title'),
    description: t('home.hero.slide1.description'),
  },
  {
    image: '/images/testimage.jpg',
    title: t('home.hero.slide2.title'),
    description: t('home.hero.slide2.description'),
  },
];


const miSlide = [
  {
      title: t('home.services.eyelash.service1.title'),
      description: t('home.services.eyelash.service1.description'),
      url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fhome-background.jpeg&w=2048&q=75"
    },
    {
      title: t('home.services.eyelash.service2.title'),
      description: t('home.services.eyelash.service2.description'),
      url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Ftestimage.jpg&w=2048&q=75"
    }
]
const nailSlide = [
  {
      title: t('home.services.nail.service1.title'),
      description: t('home.services.nail.service1.description'),
      url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fhome-background.jpeg&w=2048&q=75"
    },
    {
      title: t('home.services.nail.service2.title'),
      description: t('home.services.nail.service2.description'),
      url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Ftestimage.jpg&w=2048&q=75"
    }
]

const massageSlide = [
  {
    title: t('home.services.massage.service1.title'),
    description: t('home.services.massage.service1.description'),
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fhome-background.jpeg&w=2048&q=75"
  },
  {
    title: t('home.services.massage.service2.title'),
    description: t('home.services.massage.service2.description'),
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Ftestimage.jpg&w=2048&q=75"
  },
  {
    title: t('home.services.massage.service3.title'),
    description: t('home.services.massage.service3.description'),
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-spa-new.jpg&w=2048&q=75"
  },
  {
    title: t('home.services.massage.service4.title'),
    description: t('home.services.massage.service4.description'),
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-hero.jpg&w=2048&q=75"
  },
  {
    title: t('home.services.massage.service5.title'),
    description: t('home.services.massage.service5.description'),
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-mission.jpg&w=2048&q=75"
  },
  {
    title: t('home.services.massage.service6.title'),
    description: t('home.services.massage.service6.description'),
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-spa-new.jpg&w=2048&q=75"
  }
]

const tabs = [
  {
    id: 'nail',
    label: t('home.tabs.nail'),
    content: (
      <Carousel slider={nailSlide}/>
    )
  },
  {
    id: 'massage',
    label: t('home.tabs.massage'),
    content: (
      <Carousel slider={massageSlide}/>
    )
  },
  {
    id: 'mi',
    label: t('home.tabs.eyelash'),
    content: (
      <Carousel slider={miSlide}/>
    )
  },
];  


  return (
    <>
      <main>
      {/* Hero Section */}      
      <HeroCarousel slides={slides} />
      <IntroSection />
      <FeaturedPricingSection tabs={tabs} />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    </>
  );
}
