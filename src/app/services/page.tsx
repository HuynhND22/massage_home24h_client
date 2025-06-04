"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../../services/services.service';
import { useTranslation } from '@/i18n/I18nProvider';

async function getServices() {
  // Trong môi trường production, bạn sẽ gọi API thực sự
  // Ở đây để đơn giản, tôi đang dùng dữ liệu giả đa ngôn ngữ
  return [
    {
      id: 1,
      slug: 'massage-therapy',
      featuredImage: '/images/service-1.jpg',
      price: 850000,
      duration: 60,
      translations: [
        {
          language: 'vi',
          title: 'Massage Trị Liệu',
          excerpt: 'Giảm căng thẳng và đau nhức với liệu pháp massage của chúng tôi.',
          content: 'Dịch vụ Massage Trị Liệu của chúng tôi sử dụng các kỹ thuật chuyên sâu để giảm đau, thư giãn cơ bắp và cải thiện tuần hoàn. Các chuyên gia của chúng tôi kết hợp các phương pháp truyền thống và hiện đại để mang đến trải nghiệm thư giãn hoàn hảo.'
        },
        {
          language: 'en',
          title: 'Therapeutic Massage',
          excerpt: 'Reduce stress and pain with our therapeutic massage therapy.',
          content: 'Our Therapeutic Massage service uses deep techniques to reduce pain, relax muscles, and improve circulation. Our experts combine traditional and modern methods to deliver the perfect relaxation experience.'
        },
        {
          language: 'ko',
          title: '치료 마사지',
          excerpt: '당사의 마사지 요법으로 스트레스와 통증을 줄이세요.',
          content: '당사의 치료 마사지 서비스는 통증 감소, 근육 이완 및 혈액 순환 개선을 위한 심층 기술을 사용합니다. 당사의 전문가들은 완벽한 휴식 경험을 제공하기 위해 전통적인 방법과 현대적인 방법을 결합합니다.'
        },
        {
          language: 'zh',
          title: '治疗按摩',
          excerpt: '通过我们的按摩疗法减轻压力和疼痛。',
          content: '我们的治疗按摩服务使用深层技术来减轻疼痛，放松肌肉和改善循环。我们的专家结合传统和现代方法，提供完美的放松体验。'
        }
      ],
      category: {
        id: 1,
        name: 'Massage'
      }
    },
    {
      id: 2,
      slug: 'facial-treatment',
      featuredImage: '/images/service-2.jpg',
      price: 950000,
      duration: 90,
      translations: [
        {
          language: 'vi',
          title: 'Chăm Sóc Da Mặt',
          excerpt: 'Trẻ hóa làn da với các phương pháp chăm sóc da mặt cao cấp.',
          content: 'Dịch vụ Chăm Sóc Da Mặt của chúng tôi đem đến giải pháp toàn diện cho mọi loại da. Chúng tôi sử dụng các sản phẩm tự nhiên và công nghệ tiên tiến để làm sạch sâu, dưỡng ẩm và trẻ hóa làn da của bạn. Kết quả là làn da tươi sáng, mịn màng và khỏe mạnh.'
        },
        {
          language: 'en',
          title: 'Facial Treatment',
          excerpt: 'Rejuvenate your skin with premium facial care methods.',
          content: 'Our Facial Treatment service offers comprehensive solutions for all skin types. We use natural products and advanced technology to deeply cleanse, moisturize and rejuvenate your skin. The result is bright, smooth and healthy skin.'
        },
        {
          language: 'ko',
          title: '페이셜 트리트먼트',
          excerpt: '프리미엄 페이셜 케어 방법으로 피부에 활력을 불어넣으세요.',
          content: '당사의 페이셜 트리트먼트 서비스는 모든 피부 타입에 대한 포괄적인 솔루션을 제공합니다. 당사는 자연 제품과 첨단 기술을 사용하여 피부를 깊이 세정하고, 수분을 공급하며, 피부를 재생합니다. 그 결과 밝고, 매끄럽고, 건강한 피부가 됩니다.'
        },
        {
          language: 'zh',
          title: '面部护理',
          excerpt: '通过高级面部护理方法焕发您的肌肤活力。',
          content: '我们的面部护理服务为所有皮肤类型提供全面解决方案。我们使用天然产品和先进技术来深层清洁，保湿和焕发您的皮肤活力。结果是明亮，光滑和健康的皮肤。'
        }
      ],
      category: {
        id: 2,
        name: 'Facial'
      }
    },
    {
      id: 3,
      slug: 'body-treatment',
      featuredImage: '/images/service-3.jpg',
      price: 1250000,
      duration: 120,
      translations: [
        {
          language: 'vi',
          title: 'Trị Liệu Cơ Thể',
          excerpt: 'Liệu pháp toàn diện giúp thư giãn và trẻ hóa toàn bộ cơ thể.',
          content: 'Dịch vụ Trị Liệu Cơ Thể của chúng tôi kết hợp các phương pháp massage, đắp mặt nạ và tẩy da chết để mang đến trải nghiệm thư giãn toàn diện. Liệu trình này giúp cải thiện kết cấu da, thúc đẩy tuần hoàn và giải độc, đồng thời mang lại cảm giác tươi mới và trẻ trung cho cơ thể.'
        },
        {
          language: 'en',
          title: 'Body Treatment',
          excerpt: 'Comprehensive therapy for relaxation and rejuvenation of the entire body.',
          content: 'Our Body Treatment service combines massage techniques, masks and exfoliation to provide a comprehensive relaxation experience. This regimen helps improve skin texture, promote circulation and detoxification, while giving the body a fresh and youthful feeling.'
        },
        {
          language: 'ko',
          title: '바디 트리트먼트',
          excerpt: '전신의 휴식과 재생을 위한 포괄적인 테라피.',
          content: '당사의 바디 트리트먼트 서비스는 마사지 기술, 마스크 및 각질 제거를 결합하여 포괄적인 휴식 경험을 제공합니다. 이 요법은 피부 질감을 개선하고, 혈액 순환과 해독을 촉진하며, 몸에 신선하고 젊은 느낌을 줍니다.'
        },
        {
          language: 'zh',
          title: '身体护理',
          excerpt: '全面的疗法，放松和恢复整个身体。',
          content: '我们的身体护理服务结合了按摩技术，面膜和去角质，提供全面的放松体验。这种疗程有助于改善皮肤纹理，促进血液循环和排毒，同时给身体带来清新和年轻的感觉。'
        }
      ],
      category: {
        id: 3,
        name: 'Body Treatments'
      }
    }
  ] as Service[];
}

// Đổi thành client component để sử dụng hooks
export default function ServicesPage() {
  // Sử dụng hook useTranslation để lấy hàm t() và dịch nội dung
  const { t } = useTranslation();
  const [services, setServices] = React.useState<Service[]>([]);

  // Sử dụng useEffect để gọi API thay vì async/await 
  React.useEffect(() => {
    const loadServices = async () => {
      const servicesData = await getServices();
      setServices(servicesData);
    };
    
    loadServices();
  }, []);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt={t('services.title')}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-5xl font-bold mb-4">{t('home.services.title')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Services Introduction */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{t('home.services.page.experienceTitle')}</h2>
            <p className="text-lg">
              {t('home.services.page.experienceDescription')}
            </p>
          </div>
          
          {/* Service Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-5 py-2 bg-primary text-white rounded-full">{t('services.page.filters.all')}</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">{t('services.page.filters.massage')}</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">{t('services.page.filters.facial')}</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">{t('services.page.filters.bodyTreatments')}</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">{t('services.page.filters.aromatherapy')}</button>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              // Tìm translation phù hợp với ngôn ngữ hiện tại
              const currentLang = localStorage.getItem('preferredLanguage') || 'vi';
              const translation = service.translations.find(t => t.language === currentLang) || service.translations[0];
              
              return (
                <div key={service.id} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.featuredImage}
                      alt={translation.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{translation.title}</h3>
                      <div className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                        {service.price.toLocaleString(currentLang === 'vi' ? 'vi-VN' : 'en-US')} {currentLang === 'vi' ? 'đ' : '$'}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{service.duration} {t('services.page.minutes')}</p>
                    <p className="mb-4">{translation.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-secondary py-1 px-3 rounded-full">
                        {service.category?.name}
                      </span>
                      <Link href={`/services/${service.slug}`} className="text-primary font-medium hover:text-accent transition-colors">
                        {t('common.buttons.viewDetails')}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('home.services.page.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('home.services.page.cta.description')}
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {t('common.buttons.bookNow')}
          </Link>
        </div>
      </section>
    </main>
  );
}
