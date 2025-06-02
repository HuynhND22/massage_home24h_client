"use client";

import React from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  return (
    <section className="section bg-background">
      <div className="container">
        <div data-aos="fade-up">
          <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
          <p className="section-subtitle">
            Những đánh giá chân thực từ khách hàng
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((item, index) => (
            <div 
              key={item} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="bg-light p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={`/images/testimonial-${item}.jpg`}
                    alt={`Customer ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Khách hàng {item}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="animate-pulse" style={{animationDelay: `${i * 0.2}s`}}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Dịch vụ tuyệt vời, nhân viên thân thiện và chuyên nghiệp. Tôi cảm thấy thư giãn và tràn đầy năng lượng sau mỗi lần đến Massage Home24h."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
