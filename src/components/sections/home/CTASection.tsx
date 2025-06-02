"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const CTASection = () => {
  return (
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
      </div>
    </section>
  );
};

export default CTASection;
