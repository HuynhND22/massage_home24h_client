import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 300; // ISR for service detail page

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://massagehome24h.com';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  // Fetch minimal data for meta
  async function fetchJson<T>(url: string, revalidate: number): Promise<T | null> {
    try {
      const res = await fetch(url, { next: { revalidate } });
      if (!res.ok) return null;
      return (await res.json()) as T;
    } catch {
      return null;
    }
  }

  const details = await fetchJson<any>(`${apiUrl}/services/details/${slug}`, 3600);
  if (!details) return {};
  const tr = details?.translations?.find((t: any) => t?.language === locale) || details?.translations?.[0] || {};
  const dt = details?.details?.find((d: any) => d?.language === locale) || details?.details?.[0] || {};

  let messages: any = {};
  try {
    const mod = await import(`@/i18n/locales/${locale}.json`);
    messages = mod.default || mod;
  } catch {}
  const get = (obj: any, path: string, fallback = '') =>
    path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;

  const fallbackTitle = get(messages, 'services.page.detail.title', 'Service details');
  const title = tr?.name || dt?.title || fallbackTitle;
  const description = (dt?.description || tr?.description || '').replace(/<[^>]+>/g, '').slice(0, 200);

  const url = `${baseUrl}/${locale}/services/${slug}`;
  const languages: Record<string, string> = {
    vi: `${baseUrl}/vi/services/${slug}`,
    en: `${baseUrl}/en/services/${slug}`,
    ko: `${baseUrl}/ko/services/${slug}`,
    zh: `${baseUrl}/zh/services/${slug}`,
  };
  const ogLocale = locale === 'vi' ? 'vi_VN' : locale === 'en' ? 'en_US' : locale === 'ko' ? 'ko_KR' : 'zh_CN';

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Massage Home24h',
      images: [details?.coverImage || details?.featuredImage || `${baseUrl}/images/services-hero.jpg`],
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [details?.coverImage || details?.featuredImage || `${baseUrl}/images/services-hero.jpg`],
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

export default async function ServiceDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  const rawSlug = slug;
  const decoded = (() => { try { return decodeURIComponent(rawSlug); } catch { return rawSlug; } })();
  const candidates = Array.from(new Set([rawSlug, decoded, rawSlug.toLowerCase(), decoded.toLowerCase()]));

  // Try fetching by slug variants; fallback to fetching list and finding locally
  let service: any | null = null;
  for (const s of candidates) {
    // eslint-disable-next-line no-await-in-loop
    const resp = await fetchJson<any>(`${API_URL}/services/details/${s}`, revalidate);
    if (resp) { service = resp; break; }
  }
  if (!service) {
    const list = await fetchJson<any[]>(`${API_URL}/services`, revalidate);
    const items = Array.isArray(list) ? list : (Array.isArray((list as any)?.data) ? (list as any).data : []);
    // If we only have summary items, try to fetch details for matched summary
    const matched = items.find((it: any) => (it?.slug?.toLowerCase?.() === rawSlug.toLowerCase()));
    if (matched?.slug) {
      service = await fetchJson<any>(`${API_URL}/services/details/${matched.slug}`, revalidate);
    }
  }

  const messages = await (async () => {
    try {
      const mod = await import(`@/i18n/locales/${locale}.json`);
      return mod.default || mod;
    } catch {
      return {};
    }
  })();

  if (!service) return notFound();

  const get = (obj: any, path: string, fallback = '') =>
    path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;
  const withLocale = (path: string) => `/${locale}${path === '/' ? '' : path}`;

  const st = service?.translations?.find((t: any) => t?.language === locale) || service?.translations?.[0] || {};
  const dt = service?.details?.find((d: any) => d?.language === locale) || service?.details?.[0] || {};
  const catTr = service?.category?.translations?.find((t: any) => t?.language === locale) 
    || service?.category?.translations?.[0] 
    || { name: service?.category?.name };
  const priceNum = Number(service?.price || 0);
  const durationNum = Number(service?.duration || 0);

  const detailTitle = get(messages, 'services.page.detail.title', 'Service details');
  const priceLabel = get(messages, 'services.page.detail.price', 'Price');
  const durationLabel = get(messages, 'services.page.detail.duration', 'Duration');
  const minutesLabel = get(messages, 'services.page.minutes', 'minutes');
  const readyTitle = get(messages, 'services.page.detail.ready_to_experience', 'Ready to experience?');
  const readyDesc = get(messages, 'services.page.detail.book_today_description', '');
  const bookNow = get(messages, 'common.buttons.bookNow', 'Book now');
  // Sidebar follows legacy logic: only render if price > 0; no contact-for-price fallback

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service?.coverImage || service?.featuredImage || '/images/about-hero.jpg'}
            alt={st?.name || 'Service'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{st?.name || dt?.title || ''}</h1>
          <p className="text-xl max-w-2xl mx-auto">{dt?.title || ''}</p>
          {(catTr?.name) && (
            <div className="mt-4">
              <span className="inline-block text-sm bg-primary/80 text-white py-1 px-3 rounded-full">{catTr?.name}</span>
            </div>
          )}
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3 flex-1">
              <div className="bg-light p-8 rounded-lg shadow-md">
                {/* Description fallback to translation description/excerpt/plain */}
                {(dt?.description || st?.description || st?.excerpt) && (
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: dt?.description || st?.description || st?.excerpt }} />
                )}
                {!dt?.description && !st?.description && !st?.excerpt && (st?.title || st?.name) && (
                  <p className="text-gray-700">{st?.title || st?.name}</p>
                )}
                {/* Content fallback to translation content */}
                {(dt?.content || st?.content) && (
                  <div className="prose prose-lg max-w-none mt-6" dangerouslySetInnerHTML={{ __html: dt?.content || st?.content }} />
                )}
                {/* Optional benefits list */}
                {Array.isArray((service as any)?.benefits) && (service as any).benefits.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {((service as any).benefits as any[]).map((b, i) => (
                        <li key={i}>{typeof b === 'string' ? b : (b?.[locale] || b?.text || '')}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Optional gallery */}
                {Array.isArray((service as any)?.images) && (service as any).images.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {((service as any).images as any[]).map((img, i) => (
                      <div key={i} className="relative w-full h-40 rounded-md overflow-hidden">
                        <Image src={typeof img === 'string' ? img : (img?.url || '/images/about-hero.jpg')} alt="Gallery" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar (legacy logic) */}
            {priceNum > 0 && (
              <div className="md:w-1/3">
                <div className="bg-light p-8 rounded-lg shadow-md sticky top-24">
                  <h3 className="text-2xl font-semibold mb-6 pb-4 border-b border-border">{detailTitle}</h3>
                  <div className="space-y-4">
                    {priceNum > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-text">{priceLabel}:</span>
                        <span className="text-xl font-semibold text-primary">
                          {priceNum.toLocaleString(locale === 'vi' ? 'vi-VN' : 'en-US')} VND
                        </span>
                      </div>
                    )}
                    {durationNum > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-text">{durationLabel}:</span>
                        <span>{durationNum} {minutesLabel}</span>
                      </div>
                    )}
                    <div className="pt-6">
                      <Link href={withLocale('/contact')} className="block w-full bg-primary text-white py-3 px-4 rounded-md text-center font-medium hover:bg-accent transition-colors duration-300">
                        {bookNow}
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
          <h2 className="text-3xl font-bold mb-6">{readyTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{readyDesc}</p>
          <Link href={withLocale('/contact')} className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {bookNow}
          </Link>
        </div>
      </section>
    </main>
  );
}
