import RootLocaleRedirect from '@/components/RootLocaleRedirect';

// Render Vietnamese homepage at root for SEO, wrapped with the localized layout to include Header/Footer.
export default async function Root() {
  const Layout = (await import('@/app/[locale]/layout')).default as any;
  const Page = (await import('@/app/[locale]/page')).default as any;
  const params = { locale: 'vi' } as const;

  return (
    <Layout params={params}>
      {/* Optional client redirect to non-vi if user stored preference exists */}
      <RootLocaleRedirect />
      <Page params={params} />
    </Layout>
  );
}

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://massagehome24h.com';
  const locale = 'vi';
  let messages: any = {};
  try {
    const mod = await import('@/i18n/locales/vi.json');
    messages = mod.default || mod;
  } catch {}
  const get = (obj: any, path: string, fallback = '') =>
    path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;

  const title = get(messages, 'home.meta.title', `${get(messages, 'home.intro.title', 'Chào mừng đến với')} Home24h`);
  const description = get(messages, 'home.meta.description', get(messages, 'home.intro.paragraph1', ''));
  const languages = {
    vi: `${baseUrl}/vi`,
    en: `${baseUrl}/en`,
    ko: `${baseUrl}/ko`,
    zh: `${baseUrl}/zh`,
  } as const;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/`,
      type: 'website',
      siteName: 'Massage Home24h',
      images: [`${baseUrl}/images/og-home.jpg`],
      locale: 'vi_VN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-home.jpg`],
    },
  };
}
