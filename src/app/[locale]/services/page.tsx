import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 300; // ISR for services page

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'vi';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://massagehome24h.com';
  let messages: any = {};
  try {
    const mod = await import(`@/i18n/locales/${locale}.json`);
    messages = mod.default || mod;
  } catch {}
  const get = (obj: any, path: string, fallback = '') =>
    path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;

  const title = get(messages, 'services.meta.title', get(messages, 'services.title', 'Services'));
  const description = get(messages, 'services.meta.description', get(messages, 'services.subtitle', ''));
  const languages = {
    vi: `${baseUrl}/vi/services`,
    en: `${baseUrl}/en/services`,
    ko: `${baseUrl}/ko/services`,
    zh: `${baseUrl}/zh/services`,
  } as const;
  const ogLocale = locale === 'vi' ? 'vi_VN' : locale === 'en' ? 'en_US' : locale === 'ko' ? 'ko_KR' : 'zh_CN';

  return {
    title,
    description,
    alternates: { canonical: languages[locale as keyof typeof languages], languages },
    openGraph: {
      title,
      description,
      url: languages[locale as keyof typeof languages],
      type: 'website',
      siteName: 'Massage Home24h',
      images: [`${baseUrl}/images/services-hero.jpg`],
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/services-hero.jpg`],
    },
  };
}

async function fetchJson<T>(url: string, revalidate: number): Promise<T | null> {
  try {
    const res = await fetch(url, { next: { revalidate } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (e) {
    return null;
  }
}

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'vi';
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  const [services, categories, messages] = await Promise.all([
    fetchJson<any[]>(`${API_URL}/services`, revalidate),
    fetchJson<any[]>(`${API_URL}/categories?type=service`, revalidate),
    (async () => {
      try {
        const mod = await import(`@/i18n/locales/${locale}.json`);
        return mod.default || mod;
      } catch {
        return {};
      }
    })(),
  ]);

  const toArray = (v: any): any[] => Array.isArray(v) ? v : (Array.isArray(v?.data) ? v.data : []);
  const servicesArr = toArray(services);
  const categoriesArr = toArray(categories);
  const get = (obj: any, path: string, fallback = '') =>
    path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;
  const withLocale = (path: string) => `/${locale}${path === '/' ? '' : path}`;

  // Page copy (SSR)
  const pageTitle = get(messages, 'services.title', 'Services');
  const pageSubtitle = get(messages, 'services.subtitle', '');
  const expTitle = get(messages, 'services.page.experienceTitle', '');
  const expDesc = get(messages, 'services.page.experienceDescription', '');
  const minutesLabel = get(messages, 'services.page.minutes', 'minutes');
  const viewDetails = get(messages, 'common.buttons.viewDetails', 'View details');
  const giftTitle = get(messages, 'services.page.giftCard.title', '');
  const giftDesc = get(messages, 'services.page.giftCard.description', '');
  const giftDetails = get(messages, 'services.page.giftCard.details', '');
  const giftBuy = get(messages, 'services.page.giftCard.buyButton', 'Buy now');
  const giftLearn = get(messages, 'services.page.giftCard.learnMoreButton', 'Learn more');
  const faqTitle = get(messages, 'services.page.faq.title', '');
  const faqDesc = get(messages, 'services.page.faq.description', '');
  const faqBookingQ = get(messages, 'services.page.faq.questions.booking.question', '');
  const faqBookingA = get(messages, 'services.page.faq.questions.booking.answer', '');
  const faqCancelQ = get(messages, 'services.page.faq.questions.cancellation.question', '');
  const faqCancelA = get(messages, 'services.page.faq.questions.cancellation.answer', '');
  const faqPricingQ = get(messages, 'services.page.faq.questions.pricing.question', '');
  const faqPricingA = get(messages, 'services.page.faq.questions.pricing.answer', '');
  const faqLoyaltyQ = get(messages, 'services.page.faq.questions.loyalty.question', '');
  const faqLoyaltyA = get(messages, 'services.page.faq.questions.loyalty.answer', '');
  const faqArrivalQ = get(messages, 'services.page.faq.questions.arrival.question', '');
  const faqArrivalA = get(messages, 'services.page.faq.questions.arrival.answer', '');
  const ctaTitle = get(messages, 'services.page.cta.title', '');
  const ctaDesc = get(messages, 'services.page.cta.description', '');
  const bookNow = get(messages, 'common.buttons.bookNow', 'Book now');

  // Group services by category
  const catSections = categoriesArr.map((category: any) => {
    const tr = category?.translations?.find((t: any) => t?.language === locale) || category?.translations?.[0] || {};
    const items = servicesArr.filter((s: any) => s?.categoryId === category?.id);
    return { category, tr, items };
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt={pageTitle}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-5xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-xl max-w-2xl mx-auto">{pageSubtitle}</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{expTitle}</h2>
            <p className="text-lg">{expDesc}</p>
          </div>

          {catSections.map(({ category, tr, items }) => (
            <div key={category?.id}>
              <div className="flex items-center my-6">
                <div className="h-12 w-1 bg-primary mr-4"></div>
                <div>
                  <h3 className="text-2xl font-semibold">{tr?.name || ''}</h3>
                  <p className="text-gray-600 mt-1">{tr?.description || ''}</p>
                </div>
              </div>
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((service: any) => {
                  const st = service?.translations?.find((t: any) => t?.language === locale) || service?.translations?.[0] || {};
                  const priceNum = Number(service?.price || 0);
                  const durationNum = Number(service?.duration || 0);
                  return (
                    <div key={service?.id} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service?.coverImage || '/default-service.jpg'}
                          alt={st?.name || ''}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{st?.name || ''}</h3>
                          {priceNum > 0 && (
                            <div className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                              {priceNum.toLocaleString(locale === 'vi' ? 'vi-VN' : 'en-US')} {locale === 'vi' ? 'đ' : 'VND'}
                            </div>
                          )}
                        </div>
                        {durationNum > 0 && (
                          <p className="text-gray-600 mb-2">{durationNum} {minutesLabel}</p>
                        )}
                        <p className="mb-4">{st?.description || ''}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm bg-secondary py-1 px-3 rounded-full">{tr?.name || ''}</span>
                          <Link href={withLocale(`/services/${service?.slug}`)} className="text-primary font-medium hover:text-accent transition-colors">
                            {viewDetails}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">{giftTitle}</h2>
              <p className="mb-4">{giftDesc}</p>
              <p className="mb-6">{giftDetails}</p>
              <div className="flex space-x-4">
                <Link href={withLocale('/contact')} className="btn btn-primary">{giftBuy}</Link>
                <Link href={withLocale('/contact')} className="btn btn-secondary">{giftLearn}</Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/pricing-banner.jpg" 
                alt={giftTitle} 
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
            <h2 className="text-3xl font-semibold mb-4">{faqTitle}</h2>
            <p className="text-lg">{faqDesc}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faqBookingQ}</h3>
                <p className="text-gray-600">{faqBookingA}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faqCancelQ}</h3>
                <p className="text-gray-600">{faqCancelA}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faqPricingQ}</h3>
                <p className="text-gray-600">{faqPricingA}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faqLoyaltyQ}</h3>
                <p className="text-gray-600">{faqLoyaltyA}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faqArrivalQ}</h3>
                <p className="text-gray-600">{faqArrivalA}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{ctaDesc}</p>
          <Link href={withLocale('/contact')} className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {bookNow}
          </Link>
        </div>
      </section>
    </main>
  );
}
