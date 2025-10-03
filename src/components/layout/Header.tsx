"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/i18n/I18nProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type HeaderProps = {
  navHome?: string;
  navAbout?: string;
  navServices?: string;
  navContact?: string;
};

const Header = ({ navHome, navAbout, navServices, navContact }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const { t, locale } = useTranslation();

  // Contact info
  const contactInfo = {
    phone: "+84 796 672 339",
    hours: "MON – SUN : 10:00 AM – 12:00 AM"
  };

  // Handle scroll
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

  const withLocale = (path: string) => `/${locale}${path === '/' ? '' : path}`;
  const navLinks = [
    { name: navHome ?? t('common.nav.home'), href: withLocale('/') },
    { name: navAbout ?? t('common.nav.about'), href: withLocale('/about') },
    { name: navServices ?? t('common.nav.services'), href: withLocale('/services') },
    { name: navContact ?? t('common.nav.contact'), href: withLocale('/contact') },
  ];

  return (
    <>
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
          <Link href={withLocale('/')} className="relative z-10 flex items-center text-xl font-bold font-garamond text-primary transition-colors duration-300 hover:text-primary">
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

          {/* CTA Button and Language Switcher */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 z-50 p-2 transition-colors duration-200"
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
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
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
                    {/* Menu items */}
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

                    {/* CTA button */}
                    <div className="mt-8 text-white/90 text-center">
                      <Link 
                        href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center space-x-2 text-white font-medium"
                      >
                        <FaPhone />
                        <span>{contactInfo.phone}</span>
                      </Link>
                    </div>
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
