import type { MetadataRoute } from 'next';

const locales = ['vi', 'en', 'ko', 'zh'] as const;
const routes = ['/', '/about', '/services', '/contact', '/blog'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://massagehome24h.com';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
  const now = new Date();

  const items: MetadataRoute.Sitemap = [];

  // Static pages per locale
  for (const locale of locales) {
    for (const route of routes) {
      items.push({
        url: `${siteUrl}/${locale}${route === '/' ? '' : route}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: route === '/' ? 1 : 0.7,
      });
    }
  }

  // Services detail pages per locale
  try {
    const res = await fetch(`${apiUrl}/services`, { next: { revalidate: 86400 } });
    if (res.ok) {
      const data = await res.json();
      const services = Array.isArray(data) ? data : (Array.isArray(data?.data) ? data.data : []);
      for (const svc of services) {
        const slug = svc?.slug;
        if (!slug) continue;
        for (const locale of locales) {
          items.push({
            url: `${siteUrl}/${locale}/services/${slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.6,
          });
        }
      }
    }
  } catch {}

  return items;
}
