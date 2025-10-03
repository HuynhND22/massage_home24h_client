'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../../../services/services.service';
import serviceService from '@/services/services.service';
import { notFound } from 'next/navigation';
import { useTranslation } from '@/i18n/I18nProvider';
import FullScreenSpinner from '@/components/FullScreenSpinner';

// Component loading
const LoadingState = () => <FullScreenSpinner />;

// Component error
const ErrorState = ({ error, href }: { error: string; href: string }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Đã có lỗi xảy ra</h2>
      <p className="text-gray-600">{error}</p>
      <Link href={href} className="mt-4 inline-block text-primary hover:underline">
        Quay lại trang dịch vụ
      </Link>
    </div>
  </div>
);

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { t, locale } = useTranslation();
  const withLocale = (path: string) => `/${locale}${path === '/' ? '' : path}`;
  const [serviceData, setServiceData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Chỉ gọi API một lần khi component mount hoặc slug thay đổi
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await serviceService.getServiceBySlug(params.slug);
        if (!response) {
          notFound();
          return;
        }

        setServiceData(response);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError(t('error.load_service_failed'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug]); // Bỏ t ra khỏi dependencies

  // Xử lý translation ở client side với useMemo
  const translatedContent = useMemo(() => {
    if (!serviceData) return null;

    const translation = serviceData.translations?.find((t: any) => t.language === locale) 
      || serviceData.translations?.find((t: any) => t.language === 'vi') 
      || serviceData.translations?.[0];

    const detail = serviceData.details?.find((d: any) => d.language === locale)
      || serviceData.details?.find((d: any) => d.language === 'vi')
      || serviceData.details?.[0];

    return {
      name: translation?.name || '',
      title: detail?.title || '',
      description: detail?.description || '',
      content: detail?.content || ''
    };
  }, [serviceData, locale]); // Chỉ tính toán lại khi serviceData hoặc locale thay đổi


  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} href={withLocale('/services')} />;
  if (!serviceData || !translatedContent) return notFound();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={serviceData.coverImage}
            alt={translatedContent.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{translatedContent.name}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {translatedContent.title}
          </p>
        </div>
      </section>
      
      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3 flex-1">
              <div className="bg-light p-8 rounded-lg shadow-md">
                <div className="prose prose-lg max-w-none">
                  {translatedContent.description && (
                    <div dangerouslySetInnerHTML={{ __html: translatedContent.description }} />
                  )}
                  {translatedContent.content && (
                    <div dangerouslySetInnerHTML={{ __html: translatedContent.content }} />
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            {serviceData.price && serviceData.price !=0 && (
            <div className="md:w-1/3">
              <div className="bg-light p-8 rounded-lg shadow-md sticky top-24">
                <h3 className="text-2xl font-semibold mb-6 pb-4 border-b border-border">{t('services.page.detail.title')}</h3>
                
                <div className="space-y-4">
                  {serviceData.price !=0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-text">{t('services.page.detail.price')}:</span>
                    <span className="text-xl font-semibold text-primary">
                      {Number(serviceData.price).toLocaleString(locale === 'vi' ? 'vi-VN' : 'en-US')} VND
                    </span>
                  </div>
                  )}
                  {serviceData.duration !=0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-text">{t('services.page.detail.duration')}:</span>
                    <span>{serviceData.duration} {t('services.page.minutes')}</span>
                  </div>
                  )}
                  
                  <div className="pt-6">
                    <Link 
                      href={withLocale('/contact')} 
                      className="block w-full bg-primary text-white py-3 px-4 rounded-md text-center font-medium hover:bg-accent transition-colors duration-300"
                    >
                      {t('common.buttons.bookNow')}
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('services.page.detail.ready_to_experience')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('services.page.detail.book_today_description')}
          </p>
          <Link href={withLocale('/contact')} className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {t('common.buttons.bookNow')}
          </Link>
        </div>
      </section>
    </main>
  );
}
