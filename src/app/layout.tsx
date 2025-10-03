import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
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
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Define the menu items for the FloatingActionButton

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
