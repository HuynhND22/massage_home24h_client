"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../../services/services.service';
import { useTranslation } from '@/i18n/I18nProvider';
import api from '@/services/api';
import FullScreenSpinner from '@/components/FullScreenSpinner';

async function getServices() {

  const services= await api.get('/services');
  console.log('services', services);
  const categories = await api.get('/categories', { params: { type: 'service' } });
  console.log('categories', categories);
  // return reponse.data as Service[]; 

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
  const { t } = useTranslation();
  const [services, setServices] = React.useState<any[]>([]);
  const [categories, setCategories] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [isFirstVisit, setIsFirstVisit] = React.useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('services_visited');
    setIsFirstVisit(!hasVisited);

    const loadData = async () => {
      try {
        const [servicesRes, categoriesRes]:any = await Promise.all([
          api.get('/services'),
          api.get('/categories', { params: { type: 'service' } })
        ]);
        
        setServices(servicesRes.items);
        setCategories(categoriesRes.items);
        
        if (!hasVisited) {
          localStorage.setItem('services_visited', 'true');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        if (!hasVisited) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else {
          setLoading(false);
        }
      }
    };

    loadData();
  }, []);

  if (loading) return <FullScreenSpinner />;

  interface PriceCategory {
    title: string;
    description: string;
    services: {
      name: string;
      price: number;
      duration: number;
      description: string;
    }[];
  }
  const priceCategories: PriceCategory[] = [
    {
      title: 'Massage Trị Liệu',
      description: 'Các liệu pháp massage cao cấp giúp giảm căng thẳng và thư giãn toàn thân.',
      services: [
        {
          name: 'Massage Thụy Điển',
          price: 750000,
          duration: 60,
          description: 'Liệu pháp massage nhẹ nhàng, thư giãn với các động tác vuốt dài và nhịp nhàng.'
        },
        {
          name: 'Massage Thái',
          price: 850000,
          duration: 90,
          description: 'Kỹ thuật kéo giãn cơ thể kết hợp với động tác ấn huyệt để giải phóng năng lượng và cải thiện độ linh hoạt.'
        },
        {
          name: 'Massage Đá Nóng',
          price: 950000,
          duration: 90,
          description: 'Sử dụng đá bazan nóng để thư giãn cơ bắp và tăng tuần hoàn máu.'
        },
        {
          name: 'Massage Sâu Mô',
          price: 950000,
          duration: 60,
          description: 'Áp lực mạnh để tiếp cận các lớp mô sâu hơn, lý tưởng cho những người có đau mãn tính.'
        }
      ]
    },
    {
      title: 'Chăm Sóc Da Mặt',
      description: 'Các liệu pháp chăm sóc da mặt chuyên sâu giúp làn da khỏe mạnh và trẻ trung.',
      services: [
        {
          name: 'Chăm Sóc Da Cơ Bản',
          price: 650000,
          duration: 60,
          description: 'Làm sạch, tẩy tế bào chết, đắp mặt nạ và dưỡng ẩm cho da.'
        },
        {
          name: 'Trẻ Hóa Da',
          price: 1250000,
          duration: 90,
          description: 'Liệu pháp chống lão hóa cao cấp giúp làm mờ nếp nhăn và cải thiện kết cấu da.'
        },
        {
          name: 'Chăm Sóc Da Chuyên Sâu',
          price: 1450000,
          duration: 120,
          description: 'Điều trị toàn diện với tinh chất và mặt nạ cao cấp, massage mặt và cổ.'
        },
        {
          name: 'Chăm Sóc Da Nhạy Cảm',
          price: 850000,
          duration: 75,
          description: 'Sử dụng các sản phẩm dịu nhẹ và không gây kích ứng cho làn da nhạy cảm.'
        }
      ]
    },
    {
      title: 'Trị Liệu Cơ Thể',
      description: 'Các liệu pháp làm đẹp và trẻ hóa toàn thân.',
      services: [
        {
          name: 'Tẩy Tế Bào Chết Toàn Thân',
          price: 850000,
          duration: 60,
          description: 'Làm sạch sâu và loại bỏ tế bào chết trên toàn cơ thể, giúp da mềm mại và tươi sáng.'
        },
        {
          name: 'Ủ Dưỡng Toàn Thân',
          price: 1050000,
          duration: 90,
          description: 'Sử dụng mặt nạ dưỡng thể cao cấp giàu dưỡng chất, giúp làn da mịn màng và săn chắc.'
        },
        {
          name: 'Liệu Pháp Detox',
          price: 1250000,
          duration: 120,
          description: 'Giúp cơ thể thải độc và tăng cường sức khỏe thông qua các kỹ thuật massage và ủ dưỡng đặc biệt.'
        },
        {
          name: 'Trị Liệu Thư Giãn Toàn Diện',
          price: 1550000,
          duration: 150,
          description: 'Kết hợp nhiều liệu pháp để mang lại trải nghiệm thư giãn và làm đẹp hoàn hảo.'
        }
      ]
    }
  ];

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
          <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Services Introduction */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{t('services.page.experienceTitle')}</h2>
            <p className="text-lg">
              {t('services.page.experienceDescription')}
            </p>
          </div>
                   
          {categories.map((category) => {
            const currentLang = localStorage.getItem('preferredLanguage') || 'vi';
            const translation = category.translations?.find((t: { language: string }) => t.language === currentLang) || category.translations?.[0];
            
            if (!translation) return null;

            const categoryServices = services.filter(service => service.categoryId === category.id);

            return (
              <div key={category.id}>
                <div className="flex items-center my-6">
                  <div className="h-12 w-1 bg-primary mr-4"></div>
                  <div>
                    <h3 className="text-2xl font-semibold">{translation.name}</h3>
                    <p className="text-gray-600 mt-1">{translation.description}</p>
                  </div>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service) => {
                    const serviceTranslation = service.translations?.find((t: { language: string }) => t.language === currentLang) || service.translations?.[0];
                    
                    if (!serviceTranslation) return null;

                    return (
                      <div key={service.id} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={service.coverImage || '/default-service.jpg'}
                            alt={serviceTranslation.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold">{serviceTranslation.name}</h3>
                            {parseFloat(service.price) > 0 && (
                              <div className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                                {parseFloat(service.price).toLocaleString(currentLang === 'vi' ? 'vi-VN' : 'en-US')} {currentLang === 'vi' ? 'đ' : '$'}
                              </div>
                            )}
                          </div>
                          {service.duration > 0 && (
                            <p className="text-gray-600 mb-2">{service.duration} {t('services.page.minutes')}</p>
                          )}
                          <p className="mb-4">{serviceTranslation.description || ''}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm bg-secondary py-1 px-3 rounded-full">
                              {translation.name}
                            </span>
                            <Link href={`/services/${service.id}`} className="text-primary font-medium hover:text-accent transition-colors">
                              {t('common.buttons.viewDetails')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Gift Cards Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">{t('services.page.giftCard.title')}</h2>
              <p className="mb-4">
                {t('services.page.giftCard.description')}
              </p>
              <p className="mb-6">
                {t('services.page.giftCard.details')}
              </p>
              <div className="flex space-x-4">
                <Link href="/contact" className="btn btn-primary">
                  {t('services.page.giftCard.buyButton')}
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  {t('services.page.giftCard.learnMoreButton')}
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/pricing-banner.jpg" 
                alt={t('services.page.giftCard.title')} 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{t('services.page.faq.title')}</h2>
            <p className="text-lg">
              {t('services.page.faq.description')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('services.page.faq.questions.booking.question')}</h3>
                <p className="text-gray-600">
                  {t('services.page.faq.questions.booking.answer')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('services.page.faq.questions.cancellation.question')}</h3>
                <p className="text-gray-600">
                  {t('services.page.faq.questions.cancellation.answer')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('services.page.faq.questions.pricing.question')}</h3>
                <p className="text-gray-600">
                  {t('services.page.faq.questions.pricing.answer')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('services.page.faq.questions.loyalty.question')}</h3>
                <p className="text-gray-600">
                  {t('services.page.faq.questions.loyalty.answer')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('services.page.faq.questions.arrival.question')}</h3>
                <p className="text-gray-600">
                  {t('services.page.faq.questions.arrival.answer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('services.page.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('services.page.cta.description')}
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {t('common.buttons.bookNow')}
          </Link>
        </div>
      </section>
    </main>
  );
}
