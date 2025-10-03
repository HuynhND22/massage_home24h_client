"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useTranslation } from '@/i18n/I18nProvider';
import api from '@/services/api';

type FooterProps = {
  footerAboutText?: string;
  quickLinksTitle?: string;
  servicesTitle?: string;
  contactTitle?: string;
  contactAddressTitle?: string;
  contactInfoTitle?: string;
  contactPhoneLabel?: string;
  contactEmailLabel?: string;
  navHomeText?: string;
  navAboutText?: string;
  navServicesText?: string;
  navBlogText?: string;
  navContactText?: string;
};

const Footer = ({
  footerAboutText,
  quickLinksTitle,
  servicesTitle,
  contactTitle,
  contactAddressTitle,
  contactInfoTitle,
  contactPhoneLabel,
  contactEmailLabel,
  navHomeText,
  navAboutText,
  navServicesText,
  navBlogText,
  navContactText,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const { t, locale } = useTranslation();
  const withLocale = (path: string) => `/${locale}${path === '/' ? '' : path}`;
  const [webInformation, setWebInformation] = useState<any>();
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    const fetchWebInformation = async () => {
      const response = await api.get('/web-settings')
      setWebInformation(response)
    }
    fetchWebInformation()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get('categories?type=service')
      setCategories(response.data)
    }
    fetchCategories()
  }, [])

  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href={withLocale('/')} className="block mb-4">
              <div className="relative h-16 w-40">
                <Image 
                  src="/images/logo-light.png"
                  alt="Massage Home24h"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mb-4">
              {footerAboutText ?? t('footer.about')}
            </p>
            {/* <div className="flex space-x-4">
              <Link href="https://facebook.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaFacebookF />
              </Link>
              <Link href="https://instagram.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaInstagram />
              </Link>
              <Link href="https://twitter.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaTwitter />
              </Link>
              <Link href="https://youtube.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaYoutube />
              </Link>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-primary/30">{quickLinksTitle ?? t('footer.quickLinks.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={withLocale('/')} className="hover:text-primary transition-colors">{navHomeText ?? t('common.nav.home')}</Link>
              </li>
              <li>
                <Link href={withLocale('/about')} className="hover:text-primary transition-colors">{navAboutText ?? t('common.nav.about')}</Link>
              </li>
              <li>
                <Link href={withLocale('/services')} className="hover:text-primary transition-colors">{navServicesText ?? t('common.nav.services')}</Link>
              </li>
              {/* <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">{t('common.nav.pricing')}</Link>
              </li> */}
              <li>
                <Link href={withLocale('/blog')} className="hover:text-primary transition-colors">{navBlogText ?? t('common.nav.blog')}</Link>
              </li>
              <li>
                <Link href={withLocale('/contact')} className="hover:text-primary transition-colors">{navContactText ?? t('common.nav.contact')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-primary/30">{servicesTitle ?? t('footer.services.title')}</h3>
            
            
            <ul className="space-y-3">

              { categories && categories?.map((category: any) => {
                const translation = category.translations?.find((t: { language: string }) => t.language === locale) || category.translations?.[0];
                return (
                  <li key={category.id}>
                    <Link href={withLocale(`/services?category=${category.id}`)} className="hover:text-primary transition-colors">{translation.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-primary/30">{contactTitle ?? t('footer.contact.title')}</h3>
            <div className='mb-4 pb-2 w-full h-[300px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-md shadow-md'>
              <iframe src={webInformation?.googleMap} className="w-full h-full border-0 rounded-md" loading="lazy" allowFullScreen></iframe>
            </div>
            <div className='flex flex-col md:flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>{contactAddressTitle ?? t('footer.contact.address.title')}</h3>
                <p>{webInformation?.address}</p>
              </div>
              { webInformation?.phone &&
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>{contactInfoTitle ?? t('footer.contact.info.title')}</h3>
                <p>{(contactPhoneLabel ?? t('footer.contact.info.phone'))}: <a href={'tel:' + webInformation?.phone}>+84 {webInformation?.phone}</a></p>
                <p>{(contactEmailLabel ?? t('footer.contact.info.email'))}: <a href={'mailto:' + webInformation?.email}>{webInformation?.email}</a></p>
              </div>
              }
            </div>
          </div>
        </div>
        
        <div className="border-t border-light/20 mt-12 pt-6 text-center text-light/70">
          <p>© {currentYear} Massage Home24h. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
