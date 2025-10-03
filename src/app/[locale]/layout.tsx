import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import { I18nProvider } from '@/i18n/I18nProvider';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://massagehome24h.com';
  const locales = ['vi', 'en', 'ko', 'zh'] as const;

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${baseUrl}/${l}`])
  );
  // Add x-default to hint Google the default page
  (languages as any)['x-default'] = baseUrl;

  return {
    alternates: {
      languages,
      canonical: `${baseUrl}/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: 'vi' | 'en' | 'ko' | 'zh' };
}) {
  const { locale } = params;

  // Load locale messages on server to pass texts to client components for SSR
  let messages: any = {};
  try {
    const mod = await import(`@/i18n/locales/${locale}.json`);
    messages = mod.default || mod;
  } catch {}

  // Helper to safely read
  const get = (obj: any, path: string, fallback = '') =>
    path.split('.').reduce((acc: any, key: string) => (acc && acc[key] != null ? acc[key] : undefined), obj) ?? fallback;

  // Header texts
  const navHome = get(messages, 'common.nav.home', 'Home');
  const navAbout = get(messages, 'common.nav.about', 'About');
  const navServices = get(messages, 'common.nav.services', 'Services');
  const navContact = get(messages, 'common.nav.contact', 'Contact');

  // Footer texts
  const footerAboutText = get(messages, 'footer.about');
  const quickLinksTitle = get(messages, 'footer.quickLinks.title');
  const servicesTitle = get(messages, 'footer.services.title');
  const contactTitle = get(messages, 'footer.contact.title');
  const contactAddressTitle = get(messages, 'footer.contact.address.title');
  const contactInfoTitle = get(messages, 'footer.contact.info.title');
  const contactPhoneLabel = get(messages, 'footer.contact.info.phone');
  const contactEmailLabel = get(messages, 'footer.contact.info.email');
  const navHomeText = navHome;
  const navAboutText = navAbout;
  const navServicesText = navServices;
  const navBlogText = get(messages, 'common.nav.blog', 'Blog');
  const navContactText = navContact;

  return (
    <I18nProvider defaultLocale="vi" initialLocale={locale}>
      <Header 
        navHome={navHome}
        navAbout={navAbout}
        navServices={navServices}
        navContact={navContact}
      />
      {children}
      <Footer 
        footerAboutText={footerAboutText}
        quickLinksTitle={quickLinksTitle}
        servicesTitle={servicesTitle}
        contactTitle={contactTitle}
        contactAddressTitle={contactAddressTitle}
        contactInfoTitle={contactInfoTitle}
        contactPhoneLabel={contactPhoneLabel}
        contactEmailLabel={contactEmailLabel}
        navHomeText={navHomeText}
        navAboutText={navAboutText}
        navServicesText={navServicesText}
        navBlogText={navBlogText}
        navContactText={navContactText}
      />
      <FloatingActionButton />
    </I18nProvider>
  );
}
