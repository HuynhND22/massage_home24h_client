"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Thông tin liên hệ
  const contactInfo = {
    phone: "+84 212-227-9488",
    hours: "MON – SUN : 10:00 AM – 12:00 AM"
  };

  // Xử lý scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Dịch vụ', href: '/services' },
    { name: 'Bảng giá', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-white text-light py-2 w-full shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2 text-xs sm:text-sm order-1 w-full sm:w-auto justify-center sm:justify-start mb-1 sm:mb-0">
            <FaPhone className="text-primary" />
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{contactInfo.phone}</a>
            <span className="hidden xs:inline mx-2 opacity-50">|</span>
            <span className="hidden xs:inline">{contactInfo.hours}</span>
          </div>
          <div className="flex items-center space-x-4 order-2 w-full sm:w-auto justify-center sm:justify-end">
            <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors duration-300">
              <span className="flex items-center"><FaInstagram /> <span className="ml-1 text-xs sm:text-sm hidden sm:inline">INSTAGRAM</span></span>
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-primary transition-colors duration-300">
              <span className="flex items-center"><FaFacebookF /> <span className="ml-1 text-xs sm:text-sm hidden sm:inline">FACEBOOK</span></span>
            </Link>
          </div>
        </div>
      </div> */}
      
      {/* Main Header */}
      <header 
        className={`w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-light shadow-md py-2 fixed top-0' 
            : 'bg-transparent py-4 absolute'
        }`}
      >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center text-xl font-bold font-garamond text-primary transition-colors duration-300 hover:text-primary">
          <div className="relative h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-40 transition-all duration-300">
            <Image 
              src={isScrolled ? "/images/logo-dark.png" : "/images/logo-light.png"}
              alt="Massage home24h Logo"
              fill
              priority
              className="object-contain w-[70%]"
              />
          </div>
          Home24h
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-${isScrolled ? 'text' : 'light'} hover:text-primary font-medium ${
                    pathname === link.href ? 'text-primary' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className={`btn ${
              isScrolled 
                ? 'btn-primary' 
                : 'bg-transparent border border-light text-light hover:bg-light/20'
            }`}
          >
            Đặt lịch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2 transition-colors duration-200"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {/* Simple hamburger icon */}
          {!isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isScrolled ? '#212121' : '#ffffff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Simple Mobile Menu Overlay */}
        <AnimatePresence>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 1, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute w-[100%]"
            >
              <div className="fixed top-0 w-[100%] bg-gradient-to-br from-primary via-primary to-primary/90 z-40 overflow-auto">
                {/* Logo watermark - professional and relaxing */}
                <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none overflow-hidden" style={{ transform: 'translate(-20%, -20%) rotate(180deg)' }}>
                  <img 
                    src="/images/logo-light.png" 
                    alt=""
                    className="w-full h-full object-contain filter grayscale"
                  />
                </div>
                <div className="absolute top-0 left-0 w-48 h-48 opacity-5 pointer-events-none">
                  <img 
                    src="/images/logo-light.png" 
                    alt=""
                    className="w-full h-full object-contain filter blur-[1px]"
                  />
                </div>
                
                {/* Menu Content */}
                <div className="flex flex-col h-full p-6 pt-16">
                  {/* Menu items with simple styling */}
                  <ul className="space-y-6 mb-8">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-2 text-white text-xl ${
                            pathname === link.href ? 'font-bold' : ''
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button at bottom - Responsive */}
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-white text-primary py-3 px-4 sm:px-6 rounded text-center font-semibold mt-8 w-full max-w-xs mx-auto block shadow-lg hover:bg-white/90 transition-all duration-300"
                  >
                    Đặt lịch ngay
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
    </>
  );
};

export default Header;
