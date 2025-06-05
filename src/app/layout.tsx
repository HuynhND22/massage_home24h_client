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
const socialMenuItems: MenuItem[] = [
  {
    icon: <Image src="/images/kakaotalk.svg" alt="KakaoTalk" width={32} height={32} />,
    label: 'KakaoTalk',
    deepLink: 'kakaoplus://plusfriend/home/_abcde',
    webLink: 'https://pf.kakao.com/_abcde/chat'
  },
  {
    icon: <Image src="/images/line.svg" alt="Line" width={32} height={32} />,
    label: 'Line',
    deepLink: 'line://ti/p/@massagehome24h',
    webLink: 'https://line.me/R/ti/p/@massagehome24h'
  },
  {
    icon: <Image src="/images/telegram.svg" alt="Telegram" width={32} height={32} />,
    label: 'Telegram',
    deepLink: 'tg://resolve?domain=star21368',
    webLink: 'https://t.me/star21368'
  },
  {
    icon: <Image src="/images/wechat.svg" alt="WeChat" width={32} height={32} />,
    label: 'WeChat',
    deepLink: 'weixin://dl/chat?username=massagehome24h',
    webLink: 'https://wechat.com/massagehome24h'
  },
  {
    icon: <Image src="/images/zalo.svg" alt="Zalo" width={32} height={32} />,
    label: 'Zalo',
    deepLink: 'zalo://chat?tel=0905922869',
    webLink: 'https://zalo.me/0905922869'
  },
  {
    icon: <Image src="/images/messenger.svg" alt="Messenger" width={32} height={32} />,
    label: 'Messenger',
    deepLink: 'fb-messenger://user-thread/104982128438784',
    webLink: 'https://www.facebook.com/messages/t/104982128438784'
  },
  {
    icon: <Image src="/images/phone.svg" alt="Phone" width={32} height={32} />,
    label: 'Phone',
    deepLink: 'tel:+0905922869',
    webLink: 'tel:+0905922869'
  }
];


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
            menuItems={socialMenuItems}
            buttonIcon="/images/message.svg"
            buttonAlt="Message"
          />
        </body>
      </html>
    </I18nProvider>
  );
}
