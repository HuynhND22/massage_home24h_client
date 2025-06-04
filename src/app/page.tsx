"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fontsource/eb-garamond';
import HeroCarousel from '@/components/HeroCarousel';
import Carousel from '@/components/Carousel';
import FullScreenSpinner from '@/components/FullScreenSpinner';
import { 
  IntroSection, 
  FeaturedPricingSection, 
  ServicesSection, 
  TestimonialsSection, 
  CTASection 
} from '@/components/sections/home';
import { useTranslation } from '@/i18n/I18nProvider';
import api from '@/services/api';

export default function Home() {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const [slides, setSlides] = useState([
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
  ]);
  const [webSettings, setWebSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    //promissAlls
    Promise.allSettled([
      api.get('/services'),
      api.get('/slides'),
      api.get('/web-settings'),
    ]).then((results:any) => {
      console.log(results[1].value.items);
      setServices(results[0].value);
      setSlides(results[1].value.items);
      setWebSettings(results[2].value);
    });

    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <FullScreenSpinner />;

  // Hero carousel slides data
//   const slides = [
//   {
//     image: '/images/home-background.jpeg',
//     title: t('home.hero.slide1.title'),
//     description: t('home.hero.slide1.description'),
//   },
//   {
//     image: '/images/testimage.jpg',
//     title: t('home.hero.slide2.title'),
//     description: t('home.hero.slide2.description'),
//   },
//   {
//     image: '/images/home-background.jpeg',
//     title: t('home.hero.slide1.title'),
//     description: t('home.hero.slide1.description'),
//   },
//   {
//     image: '/images/testimage.jpg',
//     title: t('home.hero.slide2.title'),
//     description: t('home.hero.slide2.description'),
//   },
// ];


const miSlide = [
  {
      title: t('home.services.eyelash.service1.title'),
      description: t('home.services.eyelash.service1.description'),
      url: "/images/miVolume.jpg"
    },
    {
      title: t('home.services.eyelash.service2.title'),
      description: t('home.services.eyelash.service2.description'),
      url: "/images/miClassic.jpg"
    },
    {
      title: t('home.services.eyelash.service2.title'),
      description: t('home.services.eyelash.service2.description'),
      url: "/images/miLongTho.jpg"
    }
]
const nailSlide = [
  {
      title: t('home.services.nail.service1.title'),
      description: t('home.services.nail.service1.description'),
      url: "/images/veNail.jpg"
    },
    {
      title: t('home.services.nail.service2.title'),
      description: t('home.services.nail.service2.description'),
      url: "/images/dapGel.webp"
    },
    {
      title: t('home.services.nail.service3.title'),
      description: t('home.services.nail.service3.description'),
      url: "/images/dapBot.jpg"
    },
    {
      title: t('home.services.nail.service4.title'),
      description: t('home.services.nail.service4.description'),
      url: "/images/designNail.png"
    },
    {
      title: t('home.services.nail.service4.title'),
      description: t('home.services.nail.service5.description'),
      url: "/images/sonMong.png"
    },
]

const massageSlide = [
  {
    title: t('home.services.massage.service1.title'),
    description: t('home.services.massage.service1.description'),
    url: "/images/home-background.jpeg"
  },
  {
    title: t('home.services.massage.service2.title'),
    description: t('home.services.massage.service2.description'),
    url: "/images/testimage.jpg"
  },
  {
    title: t('home.services.massage.service3.title'),
    description: t('home.services.massage.service3.description'),
    url: "/images/about-spa-new.jpg"
  },
  {
    title: t('home.services.massage.service4.title'),
    description: t('home.services.massage.service4.description'),
    url: "/images/about-hero.jpg"
  },
  {
    title: t('home.services.massage.service5.title'),
    description: t('home.services.massage.service5.description'),
    url: "/images/about-mission.jpg"
  },
  {
    title: t('home.services.massage.service6.title'),
    description: t('home.services.massage.service6.description'),
    url: "/images/about-spa-new.jpg"
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
