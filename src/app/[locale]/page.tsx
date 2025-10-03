import '@fontsource/eb-garamond';
import HomeClient from './HomeClient';


export const revalidate = 300; // ISR: revalidate every 5 minutes

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

  // Locale-specific primary and secondary keywords
  const primaryKeywordMap: Record<string, string> = {
    vi: 'Massage home 24h Đà Nẵng',
    en: 'massage at home in Da Nang',
    ko: '베트남 출장마사지',
    zh: '岘港 按摩',
  };
  const secondaryKeywordMap: Record<string, string> = {
    vi: 'massage tại nhà',
    en: 'massage at home',
    ko: '홈 마사지',
    zh: '上门按摩',
  };

  const primaryKeyword = primaryKeywordMap[locale] ?? primaryKeywordMap.vi;
  const secondaryKeyword = secondaryKeywordMap[locale] ?? secondaryKeywordMap.en;

  const titleBase = get(messages, 'home.meta.title', `${get(messages, 'home.intro.title', 'Welcome to')} Home24h`);
  const title = `${titleBase} | ${primaryKeyword}`;
  const description = get(
    messages,
    'home.meta.description',
    get(messages, 'home.intro.paragraph1', '')
  );
  const languages = {
    vi: `${baseUrl}/vi`,
    en: `${baseUrl}/en`,
    ko: `${baseUrl}/ko`,
    zh: `${baseUrl}/zh`,
  } as const;
  const ogLocale = locale === 'vi' ? 'vi_VN' : locale === 'en' ? 'en_US' : locale === 'ko' ? 'ko_KR' : 'zh_CN';

  return {
    title,
    description,
    keywords: [
      primaryKeyword,
      secondaryKeyword,
      'Da Nang massage',
      'Danang massage',
      'Vietnam massage',
    ],
    alternates: { canonical: languages[locale as keyof typeof languages], languages },
    openGraph: {
      title,
      description,
      url: languages[locale as keyof typeof languages],
      type: 'website',
      siteName: 'Massage Home24h',
      images: [`${baseUrl}/images/og-home.jpg`],
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-home.jpg`],
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

export default async function Home({ params }: { params: { locale: string } }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
  const [services, slides, categories, webSettings] = await Promise.all([
    fetchJson<any[]>(`${API_URL}/services`, revalidate),
    fetchJson<any[]>(`${API_URL}/slides`, revalidate),
    fetchJson<any[]>(`${API_URL}/categories?type=service`, revalidate),
    fetchJson<any>(`${API_URL}/web-settings`, revalidate),
  ]);
  // Load static translations on the server for better SEO
  const locale = params.locale || 'vi';
  let messages: any = {};
  try {
    const mod = await import(`@/i18n/locales/${locale}.json`);
    messages = mod.default || mod;
  } catch {}
  // Helpers to safely read nested keys
  const get = (obj: any, path: string, fallback = '') => {
    return path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;
  };

  const toArray = (v: any): any[] => Array.isArray(v) ? v : (Array.isArray(v?.data) ? v.data : []);
  const servicesArr = toArray(services);
  const slidesArr = toArray(slides);
  const categoriesArr = toArray(categories);
  const webSettingsObj = (webSettings && typeof webSettings === 'object' && !Array.isArray(webSettings))
    ? (webSettings.data ?? webSettings)
    : {};

  // Pre-translate slides server-side for better SEO (title/description inline)
  const slidesSSR = slidesArr.map((s: any) => {
    const tr = Array.isArray(s?.translations)
      ? (s.translations.find((t: any) => t?.language === locale) || s.translations[0])
      : null;
    return {
      ...s,
      title: tr?.name || s?.title || '',
      description: tr?.description || s?.description || '',
    };
  });

  // Localized keywords for JSON-LD and sr-only content
  const primaryKeywordMap: Record<string, string> = {
    vi: 'Massage home 24h Đà Nẵng',
    en: 'massage at home in Da Nang',
    ko: '베트남 출장마사지',
    zh: '岘港 按摩',
  };
  const secondaryKeywordMap: Record<string, string> = {
    vi: 'massage tại nhà',
    en: 'massage at home',
    ko: '홈 마사지',
    zh: '上门按摩',
  };
  const primaryKeyword = primaryKeywordMap[locale] ?? primaryKeywordMap.vi;
  const secondaryKeyword = secondaryKeywordMap[locale] ?? secondaryKeywordMap.en;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://massagehome24h.com';
  const pageUrl = `${siteUrl}/${locale}`;
  const businessName = 'Massage Home24h';
  const businessDescription = get(messages, 'home.meta.description', get(messages, 'home.intro.paragraph1', '')) || `${businessName} - ${primaryKeyword}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MassageTherapist',
    name: businessName,
    description: businessDescription,
    url: pageUrl,
    areaServed: {
      '@type': 'City',
      name: 'Da Nang',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Da Nang',
        addressCountry: 'VN',
      },
    },
    image: [`${siteUrl}/images/og-home.jpg`],
    keywords: [primaryKeyword, secondaryKeyword],
  };

  return (
    <>
      {/* JSON-LD for better SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Accessible SEO sentence with localized secondary keyword */}
      <p className="sr-only">{`${businessName} ${secondaryKeyword} Da Nang`}</p>

      <HomeClient
        services={servicesArr}
        categories={categoriesArr}
        slides={slidesSSR}
        webSettings={webSettingsObj}
        introTitle={get(messages, 'home.intro.title', 'Welcome to')}
        introTagline={`${secondaryKeyword} • ${businessName} Da Nang`}
        introP1={get(messages, 'home.intro.paragraph1')}
        introP2={get(messages, 'home.intro.paragraph2')}
        introLearnMore={get(messages, 'common.buttons.learnMore', 'Learn more')}
        introCallNow={get(messages, 'common.buttons.callNow', 'Call now')}
        featuredTitle={get(messages, 'home.featuredPricing.title')}
        featuredSubtitle={get(messages, 'home.featuredPricing.subtitle')}
      />
    </>
  );
}

