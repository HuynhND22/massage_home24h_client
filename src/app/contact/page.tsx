"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../../i18n/I18nProvider';
import api from '@/services/api';

export default function ContactPage() {
  const { t } = useTranslation();
  const [webInformation, setWebInformation] = useState<any>();

  useEffect(() => {
    const fetchWebInformation = async () => {
      const response = await api.get('/web-settings')
      setWebInformation(response)
    }
    fetchWebInformation()
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt={t('contact.heroTitle')}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-5xl font-bold mb-4">{t('contact.heroTitle')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('contact.heroDescription')}
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <div className="md:w-1/2 bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-6">{t('contact.infoTitle')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t('contact.address')}</h3>
                    <p className="text-gray-600">{webInformation?.address}</p>
                  </div>
                </div>
                
                {webInformation?.phone && (
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{t('contact.phone')}</h3>
                        <p className="text-gray-600">+84 {webInformation?.phone}</p>
                      </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t('contact.email')}</h3>
                    <p className="text-gray-600">{webInformation?.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t('contact.workingHours')}</h3>
                    <p className="text-gray-600">{webInformation?.workingHours}</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-4">{t('contact.connectWithUs')}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#E60023] text-white flex items-center justify-center">
                    <span>P</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#0e76a8] text-white flex items-center justify-center">
                    <span>L</span>
                  </a>
                </div>
              </div> */}
            </div>
            
            {/* Contact Form */}
            <div className="md:w-1/2 bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-6">{t('contact.form.title')}</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {webInformation?.messenger && (
                  <div className="flex bg-[#0084FF] text-white rounded-lg overflow-hidden border border-white/20">
                  <a 
                      href={`https://m.me/${webInformation.messenger}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="h-6 w-6 fill-current">
                        <path d="M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.4 22.8l-2.1 71.2a40 40 0 0 0 56.1 37.7l79.2-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.5 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0z"/>
                        <path fill="#FFF" d="m159.8 501.5 117.5-186.4a60 60 0 0 1 86.8-16.4l93.5 70.1a24 24 0 0 0 28.9-.1l126.2-95.8c16.8-12.8 38.8 7.4 27.6 25.3L522.7 484.9a60 60 0 0 1-86.8 16.4l-93.5-70.1a24 24 0 0 0-28.9.1l-126.2 95.8c-16.8 12.8-38.8-7.3-27.5-25.6z"/>
                      </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white">Messenger</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.messenger}</p> */}
                    </div>
                  </a>
                    {webInformation?.messengerQr && (
                      <button 
                        onClick={() => window.open(webInformation.messengerQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.messengerQr}
                          alt="Messenger QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.zalo && (
                  <div className="flex bg-[#0068FF] text-white rounded-lg overflow-hidden border border-white/20">
                  <a 
                      href={`https://zalo.me/${webInformation.zalo.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="h-6 w-6 fill-current">
                          <path d="M39.1 11.7c-.9-2.6-2.1-4.9-3.7-6.9-1.6-2-3.4-3.7-5.5-5-2.1-1.4-4.4-2.4-6.8-3C20.7-3.8 18.2-4 15.7-4H4.3v52h11.4c2.5 0 5 .2 7.4-.4 2.4-.6 4.7-1.6 6.8-3 2.1-1.4 3.9-3 5.5-5 1.6-2 2.8-4.3 3.7-6.9.9-2.6 1.3-5.3 1.3-8.3 0-3-.4-5.7-1.3-8.3zm-6.6 15.5c-.6 1.8-1.4 3.4-2.5 4.7-1.1 1.3-2.4 2.4-3.9 3.1-1.5.7-3.2 1.1-5.1 1.1h-4.4V15.9h4.4c1.9 0 3.6.4 5.1 1.1 1.5.7 2.8 1.7 3.9 3.1 1.1 1.3 1.9 2.9 2.5 4.7.6 1.8.9 3.7.9 5.8-.1 2-.4 4-.9 5.8z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white">Zalo</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.zalo}</p> */}
                    </div>
                  </a>
                    {webInformation?.zaloQr && (
                      <button 
                        onClick={() => window.open(webInformation.zaloQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.zaloQr}
                          alt="Zalo QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.wechat && (
                  <div className="flex bg-[#07C160] text-white rounded-lg overflow-hidden border border-white/20">
                  <a 
                      href={`https://web.wechat.com/`}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6 w-6 fill-current">
                          <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-4.9 58.6-9.7l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"/>
                      </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white">WeChat</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.wechat}</p> */}
                    </div>
                  </a>
                    {webInformation?.wechatQr && (
                      <button 
                        onClick={() => window.open(webInformation.wechatQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.wechatQr}
                          alt="WeChat QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.telegram && (
                  <div className="flex bg-[#0088cc] text-white rounded-lg overflow-hidden border border-white/20">
                  <a 
                    href={`https://t.me/${webInformation.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-current">
                          <path d="M11.944 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.933.255 1.974.396 3.067.396h.733c-.273-.702-.418-1.46-.418-2.248 0-3.514 3.305-6.364 7.378-6.364h.724C16.69 4.825 13.038 2.188 8.691 2.188zm-2.67 5.04c.444 0 .805-.37.805-.827 0-.456-.36-.827-.805-.827-.444 0-.805.371-.805.827 0 .457.361.827.805.827zm5.34 0c.444 0 .805-.37.805-.827 0-.456-.361-.827-.805-.827-.444 0-.805.371-.805.827 0 .457.361.827.805.827z"/>
                          <path d="M23.997 15.687c0-3.288-3.174-5.96-7.077-5.96-3.904 0-7.077 2.672-7.077 5.96 0 3.289 3.173 5.96 7.077 5.96.718 0 1.411-.106 2.057-.3.214-.064.438-.003.597.156l1.456.912a.33.33 0 0 0 .17.054c.16 0 .29-.13.29-.296 0-.072-.03-.142-.048-.213l-.391-1.478a.59.59 0 0 1 .212-.664c1.832-1.346 3.002-3.337 3.002-5.549zm-9.825.86c-.371 0-.672-.31-.672-.693 0-.382.3-.692.672-.692.371 0 .672.31.672.692 0 .383-.3.693-.672.693zm5.495 0c-.371 0-.672-.31-.672-.693 0-.382.3-.692.672-.692.371 0 .672.31.672.692 0 .383-.3.693-.672.693z"/>
                      </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white">Telegram</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.telegram}</p> */}
                    </div>
                  </a>
                    {webInformation?.telegramQr && (
                      <button 
                        onClick={() => window.open(webInformation.telegramQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.telegramQr}
                          alt="Telegram QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.line && (
                  <div className="flex bg-[#00B900] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://line.me/ti/p/~${webInformation.line}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="h-6 w-6 fill-current">
                          <path d="M66.964 134.874s-32.08-10.062-51.344-16.002c-17.542-6.693-1.57-10.445 0-10.445 23.312-1.829 54.808 17.66 54.808 17.66s-1.622 1.787-3.464 8.787zm12.642-9.27s-9.345-6.8-14.787-10.671c-6.165-4.324-.392-6.114 0-6.114 5.831-1.082 16.237 11.303 16.237 11.303s-.405 1.042-.865 5.057l-.585.425zm-4.083 5.558s-7.325-5.062-11.591-7.942c-4.831-3.215-.307-4.547 0-4.547 4.571-.804 12.728 8.41 12.728 8.41s-.318.774-.678 3.762l-.459.317zM120 120c0-66.274-53.726-120-120-120S-120-53.726-120 0s53.726 120 120 120 120-53.726 120-120zm-120-75c-41.421 0-75 33.579-75 75s33.579 75 75 75 75-33.579 75-75-33.579-75-75-75z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">Line</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.line}</p> */}
                      </div>
                    </a>
                    {webInformation?.lineQr && (
                      <button 
                        onClick={() => window.open(webInformation.lineQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.lineQr}
                          alt="Line QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.whatsapp && (
                  <div className="flex bg-[#25D366] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://wa.me/${webInformation.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">WhatsApp</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.whatsapp}</p> */}
                      </div>
                    </a>
                    {webInformation?.whatsappQr && (
                      <button 
                        onClick={() => window.open(webInformation.whatsappQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.whatsappQr}
                          alt="WhatsApp QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.instagram && (
                  <div className="flex bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://www.instagram.com/${webInformation.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white">Instagram</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.instagram}</p> */}
                    </div>
                  </a>
                    {webInformation?.instagramQr && (
                      <button 
                        onClick={() => window.open(webInformation.instagramQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.instagramQr}
                          alt="Instagram QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.kakaotalk && (
                  <div className="flex bg-[#FFE812] text-white rounded-lg overflow-hidden border border-white/20">
                  <a 
                    href={`https://open.kakao.com/o/${webInformation.kakaotalk}`}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="flex items-center p-6 flex-1 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 191" className="h-6 w-6 fill-current">
                          <path d="M104 0C46.56 0 0 36.71 0 82c0 29.28 19.47 55 48.75 69.48-1.59 5.49-10.24 35.34-10.58 37.69 0 0-.21 1.76.93 2.43a3.14 3.14 0 0 0 2.48.15c3.28-.46 38.12-24.81 44-28.89a127.08 127.08 0 0 0 18.38 1.33c57.44 0 104-36.71 104-82S161.44 0 104 0z"/>
                      </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white">KakaoTalk</h3>
                        {/* <p className="text-sm text-white/80">{webInformation.kakaotalk}</p> */}
                    </div>
                  </a>
                    {webInformation?.kakaotalkQr && (
                      <button 
                        onClick={() => window.open(webInformation.kakaotalkQr, '_blank')}
                        className="relative w-32 bg-white p-3 hover:opacity-90 transition-opacity border-l border-white/20"
                      >
                        <Image
                          src={webInformation.kakaotalkQr}
                          alt="KakaoTalk QR"
                          fill
                          className="object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* If no social media links are available */}
              {!webInformation?.messenger && 
               !webInformation?.zalo && 
               !webInformation?.wechat && 
               !webInformation?.telegram && 
               !webInformation?.line && 
               !webInformation?.whatsapp &&
               !webInformation?.instagram &&
               !webInformation?.kakaotalk && (
                <div className="text-center text-gray-500 py-8">
                  <p>{t('contact.social.noChannels')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Appointment CTA */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('contact.appointmentCTA.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('contact.appointmentCTA.description')}
          </p>
          <Link href="/contact#booking" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {t('contact.appointmentCTA.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
