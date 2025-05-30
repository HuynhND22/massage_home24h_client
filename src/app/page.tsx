"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhone, FaRegClock, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import '@fontsource/eb-garamond';
import HeroCarousel from '@/components/layout/HeroCarousel';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

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
  },
  {
    image: '/images/testimage.jpg',
    title: 'Không gian thư giãn',
    description: 'Môi trường sang trọng và yên tĩnh để bạn tái tạo năng lượng',
  },
];

  return (
    <main>
      {/* Hero Section */}
      {/* <section className="relative min-h-[80vh] md:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/home-background.jpeg" 
            alt="Massage Home24h"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-75 md:brightness-75 transition-all duration-700 ease-in-out"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/30">
          </motion.div>
        </div>
        
        <div className="container relative h-full flex flex-col justify-center items-center text-center text-light z-10 px-4 py-16 md:py-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-garamond font-bold"
          >
            <span className="text-primary">Massage</span> Home24h
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-xl md:max-w-2xl px-4"
          >
            Trải nghiệm dịch vụ massage cao cấp và thư giãn
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-md mx-auto px-4 sm:px-0 "
          >
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg py-3 px-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-center group relative overflow-hidden"
            >
              <span className="relative z-10 text-base">Đặt lịch ngay</span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link 
              href="/pricing" 
              className="bg-transparent border-2 border-white/80 text-white font-semibold rounded-lg py-3 px-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-center hover:bg-white/10 group relative overflow-hidden"
            >
              <span className="relative z-10 text-base">Xem bảng giá</span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 md:mt-12 lg:mt-16 flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm backdrop-blur-md rounded-lg shadow-lg bg-white/10 backdrop-filter backdrop-blur-md p-4 sm:p-2 lg:p-2 text-light"
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>12D An Mỹ 2, Tp.Đà Nẵng </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-primary" />
              <a href="tel:+842122279488" className="hover:text-primary transition-colors text-white">+84 9999 333 444</a>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-primary" />
              <span>10:00 AM - 12:00 AM</span>
            </div>
          </motion.div>
        </div>
      </section> */}

      <HeroCarousel slides={slides} />
      
      {/* Introduction Section */}
      <section className="section bg-background px-responsive">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <h2 className="section-title text-center md:text-left mb-6 font-garamond font-bold">Chào mừng đến với Massage <span className="text-primary">Home24h</span></h2>
              <p className="mb-4 md:mb-6 text-base sm:text-lg">
                Massage Home24h là nơi bạn có thể tìm thấy sự thư giãn và trẻ hóa hoàn hảo. Với đội ngũ chuyên gia giàu kinh nghiệm và không gian sang trọng, chúng tôi cam kết mang đến cho bạn những trải nghiệm spa tuyệt vời nhất.
              </p>
              <p className="mb-6 md:mb-8 text-base">
                Các dịch vụ của chúng tôi được thiết kế để làm dịu tâm hồn, phục hồi cơ thể và làm tan biến mọi mệt mỏi. Hãy để Massage Home24h trở thành điểm đến cho sự thư giãn và làm đẹp của bạn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 md:mb-0 max-w-sm">
                <Link href="/about" className="btn btn-secondary flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tìm hiểu thêm</span>
                </Link>
                <Link href="tel:+842122279488" className="btn btn-outline flex items-center justify-center gap-2 group">
                  <FaPhone className="transition-transform duration-300 group-hover:rotate-12" /> 
                  <span>Gọi ngay</span>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
              <Image 
                src="/images/about-spa-new.jpg" 
                alt="Renew Day Spa Interior" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Pricing Section */}
      <section className="section bg-light py-responsive px-responsive">
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-10" data-aos="fade-up">
            <h2 className="section-title">Dịch Vụ Nổi Bật</h2>
            <p className="section-subtitle">Chọn gói dịch vụ phù hợp với nhu cầu của bạn</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 max-w-7xl mx-auto">
            {/* Body Combo */}
            <div className="bg-white shadow-sm overflow-hidden rounded-md border border-gray-200" data-aos="fade-up">
              <div className="bg-primary/5 p-4">
                <h3 className="text-xl font-medium text-center">Body Combo</h3>
              </div>
              <div className="p-4 divide-y divide-gray-100">
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Body, Foot & Head</h4>
                    <p className="text-xs text-gray-500">45min Body, 15min Foot, 15min Head</p>
                  </div>
                  <div className="text-base font-medium text-primary">$65</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Body & Foot</h4>
                    <p className="text-xs text-gray-500">30min Body, 30min Foot</p>
                  </div>
                  <div className="text-base font-medium text-primary">$60</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Body & Foot</h4>
                    <p className="text-xs text-gray-500">60min Body, 30min Foot</p>
                  </div>
                  <div className="text-base font-medium text-primary">$80</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Foot & Chair</h4>
                    <p className="text-xs text-gray-500">45min Foot, 15min Chair</p>
                  </div>
                  <div className="text-base font-medium text-primary">$50</div>
                </div>
                
                <div className="pt-4">
                  <Link href="/pricing" className="block text-center text-primary py-2 border border-primary rounded hover:bg-primary hover:text-white transition-colors text-sm">
                    Xem thêm dịch vụ
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Massage Services */}
            <div className="bg-white shadow-sm overflow-hidden rounded-md border border-primary relative" data-aos="fade-up">
              {/* <div className="absolute -top-4 right-0 left-0 flex justify-center">
                <div className="bg-primary text-white text-xs px-4 py-1 rounded-sm">
                  Phổ biến nhất
                </div>
              </div> */}
              <div className="bg-primary p-4 text-white pt-6">
                <h3 className="text-xl font-medium text-center">Massage Trị Liệu</h3>
              </div>
              <div className="p-4 divide-y divide-gray-100">
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Massage Thụy Điển</h4>
                    <p className="text-xs text-gray-500">60 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">750.000đ</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Massage Thái</h4>
                    <p className="text-xs text-gray-500">90 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">850.000đ</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Massage Đá Nóng</h4>
                    <p className="text-xs text-gray-500">90 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">950.000đ</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Massage Sâu Mô</h4>
                    <p className="text-xs text-gray-500">60 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">950.000đ</div>
                </div>
                
                <div className="pt-4">
                  <Link 
                    href="/pricing" 
                    className="block text-center bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors text-sm"
                  >
                    Đặt lịch ngay
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Facial Services */}
            <div className="bg-white shadow-sm overflow-hidden rounded-md" data-aos="fade-up">
              <div className="bg-primary/5 p-4">
                <h3 className="text-xl font-medium text-center">Chăm Sóc Da Mặt</h3>
              </div>
              <div className="p-4 divide-y divide-gray-100">
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Chăm Sóc Cơ Bản</h4>
                    <p className="text-xs text-gray-500">60 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">650K</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Trẻ Hóa Da</h4>
                    <p className="text-xs text-gray-500">90 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">1.25M</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Chăm Sóc Chuyên Sâu</h4>
                    <p className="text-xs text-gray-500">120 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">1.45M</div>
                </div>
                
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-sm">Da Nhay Cảm</h4>
                    <p className="text-xs text-gray-500">75 phút</p>
                  </div>
                  <div className="text-base font-medium text-primary">850K</div>
                </div>
                
                <div className="pt-4">
                  <Link href="/pricing" className="block text-center text-primary py-2 border border-primary rounded hover:bg-primary hover:text-white transition-colors text-sm">
                    Xem thêm dịch vụ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-secondary">
        <div className="container">
          <div data-aos="fade-up">
            <h2 className="section-title">Dịch vụ của chúng tôi</h2>
            <p className="section-subtitle">
              Khám phá các liệu pháp spa cao cấp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-12 p-2">
            {/* Placeholder for service cards that will be fetched from API */}
            {[1, 2, 3].map((item, index) => (
              <div 
                key={item} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/images/service-${item}.jpg`}
                    alt={`Spa Service ${item}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-7">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3 font-medium">Dịch vụ {index + 1}</span>
                  <h3 className="text-xl font-semibold mb-3 text-dark">Dịch vụ Spa {item}</h3>
                  <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">
                    Mô tả ngắn về dịch vụ spa cao cấp này và lợi ích của nó cho khách hàng.
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
      
      {/* Testimonials Section */}
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
                  "Dịch vụ tuyệt vời, nhân viên thân thiện và chuyên nghiệp. Tôi cảm thấy thư giãn và tràn đầy năng lượng sau mỗi lần đến Renew Day Spa."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-light relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng để thư giãn?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Hãy đặt lịch ngay hôm nay để trải nghiệm dịch vụ spa đẳng cấp của chúng tôi.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto px-4 sm:px-0"
          >
            <Link 
              href="/contact" 
              className="btn bg-light text-primary hover:bg-accent hover:text-light hover:scale-105 transition-all duration-300 py-4 px-6 font-medium rounded-lg shadow-lg flex items-center justify-center gap-2 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Tìm hiểu thêm</span>
            </Link>
            <Link 
              href="tel:+842122279488" 
              className="btn bg-transparent border-2 border-light text-light hover:bg-light/20 hover:scale-105 transition-all duration-300 py-4 px-6 font-medium rounded-lg shadow-lg flex items-center justify-center gap-2 group"
            >
              <FaPhone className="text-sm group-hover:rotate-12 transition-transform duration-300" />
              <span>Gọi ngay</span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center space-x-6"
          >
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              className="text-light hover:text-accent transition-colors duration-300 text-xl"
            >
              <FaInstagram />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              className="text-light hover:text-accent transition-colors duration-300 text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link 
              href="https://wa.me/842122279488" 
              target="_blank" 
              className="text-light hover:text-accent transition-colors duration-300 text-xl"
            >
              <FaWhatsapp />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
