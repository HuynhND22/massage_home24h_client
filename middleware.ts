import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['vi', 'en', 'ko', 'zh'];
const defaultLocale = 'vi';

function hasLocale(pathname: string) {
  return locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip next internal paths and assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // assets like /images/file.png
  ) {
    return NextResponse.next();
  }

  if (!hasLocale(pathname)) {
    // Let the client-side '/' page read localStorage and redirect itself
    if (pathname === '/') {
      return NextResponse.next();
    }
    // 1) Try to infer from Referer path if it contains a known locale
    let detected: string | undefined;
    const referer = request.headers.get('referer') || '';
    try {
      const refUrl = new URL(referer);
      const refPath = refUrl.pathname || '';
      const fromRef = locales.find(l => refPath === `/${l}` || refPath.startsWith(`/${l}/`));
      if (fromRef) detected = fromRef;
    } catch {}

    // 2) Fallback to Accept-Language header
    if (!detected) {
      const header = request.headers.get('accept-language') || '';
      const langs = header.split(',').map(s => s.split(';')[0].trim().toLowerCase());
      detected = langs.find(l => locales.includes(l as any));
      if (!detected) {
        const base = langs.map(l => l.split('-')[0]);
        detected = base.find(b => locales.includes(b as any));
      }
    }
    if (!detected) detected = defaultLocale;

    const url = request.nextUrl.clone();
    url.pathname = `/${detected}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\..*|api).*)'],
};
