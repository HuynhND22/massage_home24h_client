"use client";

import React, { useEffect, useMemo, useState } from 'react';
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

type HomeClientProps = {
  services: any[];
  categories: any[];
  slides: any[];
  webSettings: any;
  introTitle?: string;
  introP1?: string;
  introP2?: string;
  introLearnMore?: string;
  introCallNow?: string;
  introTagline?: string;
  featuredTitle?: string;
  featuredSubtitle?: string;
  servicesTitle?: string;
  servicesSubtitle?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLearnMore?: string;
  ctaCallNow?: string;
};

export default function HomeClient({ services, categories, slides, webSettings, introTitle, introP1, introP2, introLearnMore, introCallNow, introTagline, featuredTitle, featuredSubtitle, servicesTitle, servicesSubtitle, ctaTitle, ctaDescription, ctaLearnMore, ctaCallNow }: HomeClientProps) {
  const { t, locale } = useTranslation();
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = typeof window !== 'undefined' ? localStorage.getItem('home_visited') : 'true';
    setIsFirstVisit(!hasVisited);

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    if (!hasVisited) {
      localStorage.setItem('home_visited', 'true');
      setTimeout(() => setLoading(false), 1000);
    } else {
      setLoading(false);
    }
  }, []);

  const presetSlides = useMemo(() => {
    const mi = [
      {
        title: t('home.services.eyelash.service1.title'),
        description: t('home.services.eyelash.service1.description'),
        url: '/images/miVolume.jpg',
      },
      {
        title: t('home.services.eyelash.service2.title'),
        description: t('home.services.eyelash.service2.description'),
        url: '/images/miClassic.jpg',
      },
      {
        title: t('home.services.eyelash.service2.title'),
        description: t('home.services.eyelash.service2.description'),
        url: '/images/miLongTho.jpg',
      },
    ];

    const nail = [
      {
        title: t('home.services.nail.service1.title'),
        description: t('home.services.nail.service1.description'),
        url: '/images/veNail.jpg',
      },
      {
        title: t('home.services.nail.service2.title'),
        description: t('home.services.nail.service2.description'),
        url: '/images/dapGel.webp',
      },
      {
        title: t('home.services.nail.service3.title'),
        description: t('home.services.nail.service3.description'),
        url: '/images/dapBot.jpg',
      },
      {
        title: t('home.services.nail.service4.title'),
        description: t('home.services.nail.service4.description'),
        url: '/images/designNail.png',
      },
      {
        title: t('home.services.nail.service4.title'),
        description: t('home.services.nail.service5.description'),
        url: '/images/sonMong.png',
      },
    ];

    const massage = [
      {
        title: t('home.services.massage.service1.title'),
        description: t('home.services.massage.service1.description'),
        url: '/images/home-background.jpeg',
      },
      {
        title: t('home.services.massage.service2.title'),
        description: t('home.services.massage.service2.description'),
        url: '/images/testimage.jpg',
      },
      {
        title: t('home.services.massage.service3.title'),
        description: t('home.services.massage.service3.description'),
        url: '/images/about-spa-new.jpg',
      },
      {
        title: t('home.services.massage.service4.title'),
        description: t('home.services.massage.service4.description'),
        url: '/images/about-hero.jpg',
      },
      {
        title: t('home.services.massage.service5.title'),
        description: t('home.services.massage.service5.description'),
        url: '/images/about-mission.jpg',
      },
      {
        title: t('home.services.massage.service6.title'),
        description: t('home.services.massage.service6.description'),
        url: '/images/about-spa-new.jpg',
      },
    ];

    return { mi, nail, massage };
  }, [t]);

  type TabsItem = {
    id: string;
    translations: { id: string; language: string; name: string }[];
    content: React.ReactNode;
  }[];

  const tabs: TabsItem = useMemo<TabsItem>(() => {
    if (!categories?.length) {
      return [
        {
          id: 'nail',
          translations: [
            { id: 'nail', language: locale, name: t('home.tabs.nail') },
          ],
          content: <Carousel slider={presetSlides.nail} />,
        },
        {
          id: 'massage',
          translations: [
            { id: 'massage', language: locale, name: t('home.tabs.massage') },
          ],
          content: <Carousel slider={presetSlides.massage} />,
        },
        {
          id: 'mi',
          translations: [
            { id: 'mi', language: locale, name: t('home.tabs.eyelash') },
          ],
          content: <Carousel slider={presetSlides.mi} />,
        },
      ];
    }

    return categories.map((category: any) => {
      const categoryServices = (services || []).filter((service: any) => service.categoryId === category.id);
      const slidesData = categoryServices.map((service: any) => ({
        translations: service.translations || category.translations,
        slug: service.slug,
        url: service.coverImage || category.coverImage || '/default-image.jpg',
      }));
      return {
        id: String(category.id ?? category.slug ?? ''),
        translations: category.translations,
        content: <Carousel slider={slidesData} />,
      };
    });
  }, [categories, services, presetSlides, t]);

  if (loading) return <FullScreenSpinner />;

  return (
    <main>
      {slides && <HeroCarousel slides={slides} />}
      <IntroSection 
        title={introTitle}
        tagline={introTagline}
        paragraph1={introP1}
        paragraph2={introP2}
        learnMoreText={introLearnMore}
        callNowText={introCallNow}
      />
      {Array.isArray(tabs) && tabs.length > 0 && (
        <FeaturedPricingSection
          tabs={tabs.map((tab) => ({
            id: String(tab.id),
            translations: tab.translations,
            content: tab.content,
          }))}
          titleText={featuredTitle}
          subtitleText={featuredSubtitle}
        />
      )}
      {!!categories && (
        <ServicesSection
          services={categories}
          titleText={servicesTitle}
          subtitleText={servicesSubtitle}
        />
      )}
      <TestimonialsSection />
      <CTASection 
        titleText={ctaTitle}
        descriptionText={ctaDescription}
        learnMoreText={ctaLearnMore}
        callNowText={ctaCallNow}
        contactHref={`/${locale}/contact`}
      />
    </main>
  );
}
