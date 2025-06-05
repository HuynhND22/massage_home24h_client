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
  CTASection,
} from '@/components/sections/home';
import { useTranslation } from '@/i18n/I18nProvider';
import api from '@/services/api';

export default function Home() {
  const { t } = useTranslation();

  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState([]);
  const [webSettings, setWebSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    const fetchData = async () => {
      try {
        const [servicesRes, slidesRes, categoriesRes, settingsRes] = await Promise.all([
          api.get('/services') as any,
          api.get('/slides') as any,
          api.get('/categories', { params: { type: 'service' } }) as any,
          api.get('/web-settings') as any,
        ]);

        console.log('settingsRes', settingsRes);
        setServices(servicesRes.items);
        setSlides(slidesRes.items);
        setCategories(categoriesRes.items);
        setWebSettings(settingsRes.data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, []);

  if (loading) return <FullScreenSpinner />;

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
  ];

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
  ];

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
  ];

  // const tabs = [
  //   {
  //     id: 'nail',
  //     name: t('home.tabs.nail'),
  //     content: <Carousel slider={nailSlide} />
  //   },
  //   {
  //     id: 'massage',
  //     name: t('home.tabs.massage'),
  //     content: <Carousel slider={massageSlide} />
  //   },
  //   {
  //     id: 'mi',
  //     name: t('home.tabs.eyelash'),
  //     content: <Carousel slider={miSlide} />
  //   },
  // ];

  const tabs = categories.map((category:any) => {
    const categoryServices = services.filter((service:any) => service.categoryId === category.id);
  
    const slides = categoryServices.map((service:any) => ({
      title: service.name,
      description: service.description || '',
      url: service.coverImage || category.coverImage || '/default-image.jpg'
    }));
  
    return {
      id: category.id,
      name: category.name,
      content: <Carousel slider={slides} />
    };
  });

  return (
    <main>
      <HeroCarousel slides={slides} />
      <IntroSection />
      {/* Kiểm tra categories tồn tại trước khi truyền vào */}
      {categories.length > 0 && <FeaturedPricingSection tabs={tabs} />}
      <ServicesSection services={categories} />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
