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
            <div className="md:w-1/3 bg-light p-8 rounded-lg shadow-md">
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
            <div className="md:w-2/3 bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-6">{t('contact.form.title')}</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {webInformation?.messenger && (
                  <div className="flex flex-col bg-[#0084FF] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://m.me/${webInformation.messenger}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/messenger.svg" alt="Messenger" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white ml-4">Messenger</h3>
                    </a>
                    {webInformation?.messengerQr && (
                      <button 
                        onClick={() => window.open(webInformation.messengerQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.messengerQr}
                          alt="Messenger QR"
                          fill
                          className="object-contain w-full h-full"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.zalo && (
                  <div className="flex flex-col bg-[#0068FF] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://zalo.me/${webInformation.zalo.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/zalo.svg" alt="Zalo" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white ml-4">Zalo</h3>
                    </a>
                    {webInformation?.zaloQr && (
                      <button 
                        onClick={() => window.open(webInformation.zaloQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.zaloQr}
                          alt="Zalo QR"
                          fill
                          className="object-contain w-full h-full"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.wechat && (
                  <div className="flex flex-col bg-[#07C160] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://web.wechat.com/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/wechat.svg" alt="WeChat" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white ml-4">WeChat</h3>
                    </a>
                    {webInformation?.wechatQr && (
                      <button 
                        onClick={() => window.open(webInformation.wechatQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.wechatQr}
                          alt="WeChat QR"
                          fill
                          className="object-contain w-full h-full"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.telegram && (
                  <div className="flex flex-col bg-[#0088cc] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://t.me/${webInformation.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/telegram.svg" alt="Telegram" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white ml-4">Telegram</h3>
                    </a>
                    {webInformation?.telegramQr && (
                      <button 
                        onClick={() => window.open(webInformation.telegramQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.telegramQr}
                          alt="Telegram QR"
                          fill
                          className="object-contain w-full h-full"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.line && (
                  <div className="flex flex-col bg-[#00B900] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://line.me/R/ti/p/${webInformation.line}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/line.svg" alt="Line" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white ml-4">Line</h3>
                    </a>
                    {webInformation?.lineQr && (
                      <button 
                        onClick={() => window.open(webInformation.lineQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.lineQr}
                          alt="Line QR"
                          fill
                          className="object-contain w-full h-full"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.whatsapp && (
                  <div className="flex flex-col bg-[#25D366] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://wa.me/${webInformation.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white ml-4">WhatsApp</h3>
                    </a>
                    {webInformation?.whatsappQr && (
                      <button 
                        onClick={() => window.open(webInformation.whatsappQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.whatsappQr}
                          alt="WhatsApp QR"
                          fill
                          className="object-contain w-full h-full"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.instagram && (
                  <div className="flex flex-col bg-[#E4405F] text-white rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://instagram.com/${webInformation.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-white ml-4">Instagram</h3>
                    </a>
                    {webInformation?.instagramQr && (
                      <button 
                        onClick={() => window.open(webInformation.instagramQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.instagramQr}
                          alt="Instagram QR"
                          fill
                          className="object-contain w-full h-full"
                        />
                      </button>
                    )}
                  </div>
                )}

                {webInformation?.kakaotalk && (
                  <div className="flex flex-col bg-[#FAE100] text-[#3C1E1E] rounded-lg overflow-hidden border border-white/20">
                    <a 
                      href={`https://qr.kakao.com/talk/${webInformation.kakaotalk}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 hover:opacity-90 transition-opacity"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full">
                        <Image src="/images/kakaotalk.svg" alt="KakaoTalk" width={24} height={24} />
                      </div>
                      <h3 className="font-semibold text-lg ml-4">KakaoTalk</h3>
                    </a>
                    {webInformation?.kakaotalkQr && (
                      <button 
                        onClick={() => window.open(webInformation.kakaotalkQr, '_blank')}
                        className="w-full h-[200px] relative bg-white hover:opacity-90 transition-opacity border-t border-white/20"
                      >
                        <Image
                          src={webInformation.kakaotalkQr}
                          alt="KakaoTalk QR"
                          fill
                          className="object-contain w-full h-full"
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
