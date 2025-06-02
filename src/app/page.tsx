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

export default function Home() {
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
    title: 'Massage Home24h',
    description: 'Trải nghiệm dịch vụ massage cao cấp và thư giãn',
  },
  {
    image: '/images/testimage.jpg',
    title: 'Không gian thư giãn',
    description: 'Môi trường sang trọng và yên tĩnh để bạn tái tạo năng lượng',
  }
];


const slider1 = [
  {
      title: "Donut 1",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fhome-background.jpeg&w=2048&q=75"
    },
    {
      title: "Donut 2",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Ftestimage.jpg&w=2048&q=75"
    }
]

const slider2 = [
  {
    title: "Donut 3",
    description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-spa-new.jpg&w=2048&q=75"
  },

  {
    title: "Donut 4",
    description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-hero.jpg&w=2048&q=75"
  },
  {
    title: "Donut 5",
    description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-mission.jpg&w=2048&q=75"
  },
  {
    title: "Donut 3",
    description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-spa-new.jpg&w=2048&q=75"
  },

  {
    title: "Donut 4",
    description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-hero.jpg&w=2048&q=75"
  },
  {
    title: "Donut 5",
    description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://relaxmassagehome24h.vercel.app/_next/image?url=%2Fimages%2Fabout-mission.jpg&w=2048&q=75"
  },
]

const tabs = [
  {
    id: 'massage',
    label: 'Massage',
    content: (
      <Carousel slider={slider1}/>
    )
  },
  {
    id: 'nail',
    label: 'Nail',
    content: (
      <Carousel slider={slider2}/>
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
