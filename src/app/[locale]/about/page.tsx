import Image from 'next/image';
import Link from 'next/link';

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

  const title = get(messages, 'about.meta.title', get(messages, 'about.hero.title', 'About us'));
  const description = get(messages, 'about.meta.description', get(messages, 'about.hero.subtitle', ''));
  const languages = {
    vi: `${baseUrl}/vi/about`,
    en: `${baseUrl}/en/about`,
    ko: `${baseUrl}/ko/about`,
    zh: `${baseUrl}/zh/about`,
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
      images: [`${baseUrl}/images/about-hero.jpg`],
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/about-hero.jpg`],
    },
  };
}

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'vi';

  // Load locale messages on the server for SSR
  let messages: any = {};
  try {
    const mod = await import(`@/i18n/locales/${locale}.json`);
    messages = mod.default || mod;
  } catch {}

  const get = (obj: any, path: string, fallback = '') =>
    path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;

  const withLocale = (path: string) => `/${locale}${path === '/' ? '' : path}`;
  const yearsOfExperience = new Date().getFullYear() - 2019;

  // Extract strings
  const heroTitle = get(messages, 'about.hero.title', 'About us');
  const heroSubtitle = get(messages, 'about.hero.subtitle');

  const storyTitle = get(messages, 'about.story.title', 'Our Story');
  const storyP0 = (get(messages, 'about.story.paragraphs.0', '') as string).replace('{years}', yearsOfExperience.toString());
  const storyP1 = (get(messages, 'about.story.paragraphs.1', '') as string).replace('{years}', yearsOfExperience.toString());
  const storyP2 = get(messages, 'about.story.paragraphs.2', '');

  const missionTitle = get(messages, 'about.mission.title', 'Our Mission');
  const missionP0 = get(messages, 'about.mission.paragraphs.0', '');
  const missionP1 = get(messages, 'about.mission.paragraphs.1', '');
  const missionP2 = get(messages, 'about.mission.paragraphs.2', '');

  const testiTitle = get(messages, 'about.testimonials.title', 'What clients say');
  const testiDesc = get(messages, 'about.testimonials.description', '');
  const testi = [0,1,2].map((i) => ({
    image: get(messages, `about.testimonials.items.${i}.image`, ''),
    name: get(messages, `about.testimonials.items.${i}.name`, ''),
    comment: get(messages, `about.testimonials.items.${i}.comment`, ''),
  }));

  const ctaTitle = get(messages, 'about.cta.title', 'Ready to relax?');
  const ctaDesc = get(messages, 'about.cta.description', '');
  const ctaBtn = get(messages, 'about.cta.button', 'Book now');

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Massage Home24h"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/40"></div>
        </div>
        <div className="container relative z-10 text-center text-light px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">{heroSubtitle}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">{storyTitle}</h2>
              <p className="mb-4">{storyP0}</p>
              <p className="mb-6">{storyP1}</p>
              <p>{storyP2}</p>
            </div>
            <div className="md:w-1/2 w-full relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/about-story.jpg" 
                alt="Our Story" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">{missionTitle}</h2>
              <p className="mb-4">{missionP0}</p>
              <p className="mb-4">{missionP1}</p>
              <p>{missionP2}</p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about-mission.jpg" 
                alt="Our Mission" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{testiTitle}</h2>
            <p className="text-lg">{testiDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testi.map((item, idx) => (
              <div key={idx} className="bg-light p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={`/${item.image}`}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-600">"{item.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{ctaDesc}</p>
          <Link href={withLocale('/contact')} className="btn bg-light text-primary hover:bg-dark hover:text-light">
            {ctaBtn}
          </Link>
        </div>
      </section>
    </main>
  );
}
