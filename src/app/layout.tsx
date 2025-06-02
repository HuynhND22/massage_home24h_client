import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

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
  title: 'Renew Spa - Chăm sóc sức khỏe và sắc đẹp',
  description: 'Nơi cung cấp các dịch vụ spa chất lượng cao, chăm sóc sức khỏe và sắc đẹp với đội ngũ chuyên nghiệp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  );
}
