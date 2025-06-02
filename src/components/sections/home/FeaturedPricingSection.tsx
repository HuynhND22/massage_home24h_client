"use client";

import React from 'react';
import Tabs from '@/components/Tab';
import Carousel from '@/components/Carousel';

interface FeaturedPricingSectionProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
}

const FeaturedPricingSection = ({ tabs }: FeaturedPricingSectionProps) => {
  return (
    <section id='services' className="section bg-light py-responsive px-responsive">
      <div className="text-center mb-6 md:mb-10" data-aos="fade-up">
        <h2 className="section-title">Dịch Vụ Nổi Bật</h2>
        <p className="section-subtitle">Chọn gói dịch vụ phù hợp với nhu cầu của bạn</p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
};

export default FeaturedPricingSection;
