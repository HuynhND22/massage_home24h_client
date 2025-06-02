"use client";

import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div data-aos="fade-up">
          <h2 className="section-title">Dịch vụ của chúng tôi</h2>
          <p className="section-subtitle">
            Khám phá các liệu pháp spa cao cấp
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-12 p-2">
          {/* Service Cards */}
          {[1, 2, 3].map((item, index) => (
            <div 
              key={item} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Dịch vụ {item}</h3>
                <p className="text-gray-600 mb-6">
                  Mô tả dịch vụ {item} - Dịch vụ chăm sóc sức khỏe và làm đẹp cao cấp.
                </p>
                <Link 
                  href={`/services/service-${item}`} 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-all duration-300 group border-b border-transparent hover:border-primary pb-1"
                >
                  <span>Xem chi tiết</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
          <Link 
            href="/services" 
            className="btn btn-primary hover:scale-105 transition-transform duration-300"
          >
            Xem tất cả dịch vụ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
