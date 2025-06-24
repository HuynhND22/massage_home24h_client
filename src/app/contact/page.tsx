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
                  <a 
                    href={webInformation.messenger}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center p-4 bg-[#0084FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="h-6 w-6 fill-current">
                        <path d="M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.4 22.8l-2.1 71.2a40 40 0 0 0 56.1 37.7l79.2-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.5 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0z"/>
                        <path fill="#FFF" d="m159.8 501.5 117.5-186.4a60 60 0 0 1 86.8-16.4l93.5 70.1a24 24 0 0 0 28.9-.1l126.2-95.8c16.8-12.8 38.8 7.4 27.6 25.3L522.7 484.9a60 60 0 0 1-86.8 16.4l-93.5-70.1a24 24 0 0 0-28.9.1l-126.2 95.8c-16.8 12.8-38.8-7.3-27.5-25.6z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Messenger</h3>
                      <p className="text-sm text-white/80">{webInformation.messenger}</p>
                    </div>
                  </a>
                )}

                {webInformation?.zalo && (
                  <a 
                    href={`https://zalo.me/${webInformation.zalo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-[#0068FF] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                      <span className="text-2xl font-bold">Z</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Zalo</h3>
                      <p className="text-sm text-white/80">{webInformation.zalo}</p>
                    </div>
                  </a>
                )}

                {webInformation?.wechat && (
                  <a 
                    href={`weixin://dl/chat?${webInformation.wechat}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-[#07C160] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.933.255 1.974.396 3.067.396h.733c-.273-.702-.418-1.46-.418-2.248 0-3.514 3.305-6.364 7.378-6.364h.724C16.69 4.825 13.038 2.188 8.691 2.188zm-2.67 5.04c.444 0 .805-.37.805-.827 0-.456-.36-.827-.805-.827-.444 0-.805.371-.805.827 0 .457.361.827.805.827zm5.34 0c.444 0 .805-.37.805-.827 0-.456-.361-.827-.805-.827-.444 0-.805.371-.805.827 0 .457.361.827.805.827z"/>
                        <path d="M23.997 15.687c0-3.288-3.174-5.96-7.077-5.96-3.904 0-7.077 2.672-7.077 5.96 0 3.289 3.173 5.96 7.077 5.96.718 0 1.411-.106 2.057-.3.214-.064.438-.003.597.156l1.456.912a.33.33 0 0 0 .17.054c.16 0 .29-.13.29-.296 0-.072-.03-.142-.048-.213l-.391-1.478a.59.59 0 0 1 .212-.664c1.832-1.346 3.002-3.337 3.002-5.549zm-9.825.86c-.371 0-.672-.31-.672-.693 0-.382.3-.692.672-.692.371 0 .672.31.672.692 0 .383-.3.693-.672.693zm5.495 0c-.371 0-.672-.31-.672-.693 0-.382.3-.692.672-.692.371 0 .672.31.672.692 0 .383-.3.693-.672.693z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WeChat</h3>
                      <p className="text-sm text-white/80">{webInformation.wechat}</p>
                    </div>
                  </a>
                )}

                {webInformation?.telegram && (
                  <a 
                    href={`https://t.me/${webInformation.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-[#0088cc] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telegram</h3>
                      <p className="text-sm text-white/80">{webInformation.telegram}</p>
                    </div>
                  </a>
                )}

                {webInformation?.line && (
                  <a 
                    href={`https://line.me/ti/p/${webInformation.line}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-[#00B900] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065-.043-.043-.068-.099-.068-.161V8.168c0-.129.104-.233.233-.233h.838zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065-.043-.043-.067-.099-.067-.161V8.168c0-.129.104-.233.233-.233h3.363zm-10.442.001c.129 0 .234.104.234.233v5.229c0 .128-.105.233-.234.233h-.837c-.129 0-.234-.105-.234-.233V8.168c0-.129.105-.233.234-.233h.837zm2.453 0c.018 0 .037.002.056.006.086.015.154.086.18.166l1.572 4.431 1.573-4.431c.025-.08.093-.151.179-.166.019-.004.038-.006.056-.006h.839c.187 0 .312.187.234.356l-2.243 6.097c-.026.08-.094.151-.18.166-.019.004-.038.006-.056.006h-.839c-.018 0-.037-.002-.056-.006-.086-.015-.154-.086-.18-.166l-2.242-6.097c-.078-.169.046-.356.234-.356h.843z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Line</h3>
                      <p className="text-sm text-white/80">{webInformation.line}</p>
                    </div>
                  </a>
                )}

                {webInformation?.kakaotalk && (
                  <a 
                    href={`https://open.kakao.com/o/${webInformation.kakaotalk}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-[#FFE812] text-black rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <div className="h-12 w-12 flex items-center justify-center bg-black/10 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.974-.243-.83-.89l.92-3.338C3.431 16.632 1.5 14.09 1.5 11.185 1.5 6.664 6.201 3 12 3zm5.907 8.06l1.904-2.853c.187-.28-.192-.594-.427-.347l-2.357 2.109c-.174.156-.408.176-.6.05l-.164-.108c-.933-.62-2.008-.936-3.114-.936-1.107 0-2.182.316-3.115.936l-.164.108c-.192.127-.425.106-.6-.05L6.913 7.86c-.235-.247-.614.066-.427.347l1.904 2.853c.839 1.257.744 2.884-.185 4.05-.929 1.167-2.403 1.714-3.86 1.714h-.088c-.344 0-.523.403-.296.65l1.865 2.033c.198.216.156.555-.087.712l-.92.594c-.243.157-.279.517-.068.724l2.62 2.573c.212.208.549.167.704-.081l1.325-2.118c.155-.249.47-.305.7-.125 1.518 1.19 3.419 1.836 5.404 1.836s3.886-.646 5.404-1.836c.23-.18.545-.124.7.125l1.325 2.118c.155.248.492.289.704.081l2.62-2.573c.211-.207.175-.567-.068-.724l-.92-.594c-.243-.157-.285-.496-.087-.712l1.865-2.033c.227-.247.048-.65-.296-.65h-.088c-1.457 0-2.931-.547-3.86-1.714-.929-1.166-1.024-2.793-.185-4.05z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">KakaoTalk</h3>
                      <p className="text-sm">{webInformation.kakaotalk}</p>
                    </div>
                  </a>
                )}
              </div>

              {/* If no social media links are available */}
              {!webInformation?.messenger && 
               !webInformation?.zalo && 
               !webInformation?.wechat && 
               !webInformation?.telegram && 
               !webInformation?.line && 
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
