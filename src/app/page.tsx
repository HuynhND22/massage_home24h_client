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

  const [services, setServices] = useState<any>();
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState([{translations: [{language: 'vi', name: 'test', description: 'test'}]}]);
  const [webSettings, setWebSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Kiểm tra xem đã từng truy cập chưa
    const hasVisited = localStorage.getItem('home_visited');
    setIsFirstVisit(!hasVisited);

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    const fetchData = async () => {
      try {
        const [servicesRes, slidesRes, categoriesRes, settingsRes]:any = await Promise.allSettled([
          api.get('/services') as any,
          api.get('/slides') as any,
          api.get('/categories', { params: { type: 'service' } }) as any,
          api.get('/web-settings') as any,
        ]);

        setServices(servicesRes.value.data);
        setSlides(slidesRes.value.data);
        setCategories(categoriesRes.value.data);
        setWebSettings(settingsRes.value.data);

        // Nếu là lần đầu truy cập, lưu vào localStorage
        if (!hasVisited) {
          localStorage.setItem('home_visited', 'true');
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        // Nếu là lần đầu truy cập, hiển thị loading lâu hơn
        if (!hasVisited) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else {
          // Nếu không phải lần đầu, tắt loading ngay khi có data
          setLoading(false);
        }
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

  const tab = [
    {
      id: 'nail',
      name: t('home.tabs.nail'),
      content: <Carousel slider={nailSlide} />
    },
    {
      id: 'massage',
      name: t('home.tabs.massage'),
      content: <Carousel slider={massageSlide} />
    },
    {
      id: 'mi',
      name: t('home.tabs.eyelash'),
      content: <Carousel slider={miSlide} />
    },
  ];

  const tabs = categories.map((category:any) => {
    const categoryServices = services.filter((service:any) => service.categoryId === category.id);
    const slides = categoryServices.map((service:any) => ({
      translations: service.translations || category.translations,
      url: service.coverImage || category.coverImage || '/default-image.jpg'
    }));
    return {
      id: category.id,
      translations: category.translations,
      content: <Carousel slider={slides} />
    }
  }) || tab;

  return (
    <main>
      {slides && <HeroCarousel slides={slides} />}
      <IntroSection />
      {/* Kiểm tra categories tồn tại trước khi truyền vào */}
      {categories.length > 0 && <FeaturedPricingSection tabs={tabs} />}
      {categories && <ServicesSection services={categories} />}
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
