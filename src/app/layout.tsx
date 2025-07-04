import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingActionButton, { MenuItem } from '@/components/FloatingActionButton';
import { I18nProvider} from '@/i18n/I18nProvider';
import Image from 'next/image';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap' 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Massage Home24h - Professional Massage & Beauty Services',
  description: 'Quality massage and beauty services provided by professionals in the comfort of your home',
  keywords: 'massage, home massage, beauty, nail services, eyelash extensions, spa, wellness',
  authors: [{ name: 'Massage Home24h', url: 'https://massagehome24h.com' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

// Define the menu items for the FloatingActionButton

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nProvider defaultLocale="vi">
      <html className={`${inter.variable} ${playfair.variable}`}>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
          <FloatingActionButton 
            // menuItems={socialMenuItems}
          />
        </body>
      </html>
    </I18nProvider>
  );
}
