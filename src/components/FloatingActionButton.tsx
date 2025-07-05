"use client";

import React, { useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import api from '@/services/api';

export interface MenuItem {
  icon: ReactNode;
  label: string;
  deepLink?: string;
  webLink: string;
}



const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [webInformation, setWebInformation] = useState<any>();


  useEffect(() => {
    const fetchMenus = async () => {
      const response = await api.get('/web-settings')
      setWebInformation(response);
    }
    fetchMenus()
  }, []);

  const socialMenuItems: MenuItem[] = [];
  if (webInformation?.kakaotalk) {
    socialMenuItems.push({
      icon: <Image src="/images/kakaotalk.svg" alt="KakaoTalk" width={32} height={32} />,
      label: 'KakaoTalk',
      deepLink: 'https://qr.kakao.com/talk/' + webInformation.kakaotalk,
      webLink: 'https://qr.kakao.com/talk/' + webInformation.kakaotalk
    });
  }
  if (webInformation?.line) {
    socialMenuItems.push({
      icon: <Image src="/images/line.svg" alt="Line" width={32} height={32} />,
      label: 'Line',
      deepLink: 'line://ti/p/' + webInformation.line,
      webLink: 'https://line.me/R/ti/p/' + webInformation.line
    });
  }
  if (webInformation?.telegram) {
    socialMenuItems.push({
      icon: <Image src="/images/telegram.svg" alt="Telegram" width={32} height={32} />,
      label: 'Telegram',
      deepLink: 'tg://resolve?domain=' + webInformation.telegram,
      webLink: 'https://t.me/' + webInformation.telegram
    });
  }
  if (webInformation?.wechat) {
    socialMenuItems.push({
      icon: <Image src="/images/wechat.svg" alt="WeChat" width={32} height={32} />,
      label: 'WeChat',
      deepLink: 'https://u.wechat.com/' + webInformation.wechat,
      webLink: 'https://u.wechat.com/' + webInformation.wechat
    });
  }
  if (webInformation?.zalo) {
    socialMenuItems.push({
      icon: <Image src="/images/zalo.svg" alt="Zalo" width={32} height={32} />,
      label: 'Zalo',
      deepLink: 'zalo://chat?tel=' + webInformation.zalo,
      webLink: 'https://zalo.me/' + webInformation.zalo
    });
  }
  if (webInformation?.messenger) {
    socialMenuItems.push({
      icon: <Image src="/images/messenger.svg" alt="Messenger" width={32} height={32} />,
      label: 'Messenger',
      deepLink: 'fb-messenger://user-thread/' + webInformation.messenger,
      webLink: 'https://www.facebook.com/messages/t/' + webInformation.messenger
    });
  }
  if (webInformation?.phone) {
    socialMenuItems.push({
      icon: <Image src="/images/phone.svg" alt="Phone" width={32} height={32} />,
      label: 'Phone',
      deepLink: 'tel:+84' + webInformation.phone,
      webLink: 'tel:+84' + webInformation.phone
    });
  }
  if (webInformation?.whatsapp) {
    socialMenuItems.push({
      icon: <Image src="/images/whatsapp.svg" alt="WhatsApp" width={32} height={32} />,
      label: 'WhatsApp',
      deepLink: 'whatsapp://send?phone=' + webInformation.whatsapp,
      webLink: 'https://web.whatsapp.com/send?phone=' + webInformation.whatsapp
    });
  }
  if (webInformation?.instagram) {
    socialMenuItems.push({
      icon: <Image src="/images/instagram.svg" alt="Instagram" width={32} height={32} />,
      label: 'Instagram',
      deepLink: 'instagram://user?username=' + webInformation.instagram,
      webLink: 'https://instagram.com/' + webInformation.instagram
    });
  }
  

  const isMobile = (): boolean =>
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleClick = (item: MenuItem) => {
    if (isMobile() && item.deepLink) {
      // Tạo hàm mở webLink để dùng làm fallback
      const openWebLink = () => {
        window.location.href = item.webLink;
      };
      
      // Hàm thử nhiều định dạng deeplink
      const tryDeepLinks = (deepLinks: string[]) => {
        let index = 0;
        
        const tryNextDeepLink = () => {
          if (index >= deepLinks.length) {
            // Đã thử tất cả các deeplink, mở web link
            openWebLink();
            return;
          }
          
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = deepLinks[index];
          document.body.appendChild(iframe);
          
          setTimeout(() => {
            document.body.removeChild(iframe);
            // Thử deeplink tiếp theo sau 500ms
            index++;
            tryNextDeepLink();
          }, 500);
        };
        
        // Bắt đầu thử các deeplink
        tryNextDeepLink();
        
        // Mở web link sau 2.5 giây nếu không có deeplink nào hoạt động
        setTimeout(openWebLink, 2500);
      };
      
      // Xử lý đặc biệt cho từng ứng dụng
      switch (item.label) {
        case 'Zalo': {

          // Thử nhiều định dạng khác nhau cho Zalo deeplink
          const zaloDeepLinks = [
            `zalo://chat?tel=${webInformation?.phone}`,
            `zalo://chat?phone=${webInformation?.phone}`,
            `zalo://conversation?receiver=${webInformation?.phone}`,
            `zalo://profile/${webInformation?.phone}`
          ];
          
          tryDeepLinks(zaloDeepLinks);
          break;
        }
        
        case 'KakaoTalk': {
          // Lấy ID từ deepLink
          
          // Thử nhiều định dạng khác nhau cho KakaoTalk deeplink
          const kakaoDeepLinks = [
            item.deepLink,
            `kakaoplus://plusfriend/talk/${webInformation?.kakaotalk}`,
            `kakaoplus://plusfriend/home/${webInformation?.kakaotalk}`,
            `kakao://talk?chat_id=${webInformation?.kakaotalk}`
          ];
          
          tryDeepLinks(kakaoDeepLinks);
          break;
        }
        
        case 'Line': {
          // Lấy ID từ deepLink
          
          // Thử nhiều định dạng khác nhau cho Line deeplink
          const lineDeepLinks = [
            item.deepLink,
            `line://ti/p/@${webInformation?.line}`,
            `line://nv/profilePopup/mid/${webInformation?.line}`
          ];
          
          tryDeepLinks(lineDeepLinks);
          break;
        }
        
        case 'Telegram': {
          // Lấy username từ deepLink
          
          // Thử nhiều định dạng khác nhau cho Telegram deeplink
          const telegramDeepLinks = [
            item.deepLink,
            `tg://resolve?domain=${webInformation?.telegram}`,
            `telegram://resolve?domain=${webInformation?.telegram}`
          ];
          
          tryDeepLinks(telegramDeepLinks);
          break;
        }
        
        case 'WeChat': {
          // Lấy username từ deepLink
          
          // Thử nhiều định dạng khác nhau cho WeChat deeplink
          const wechatDeepLinks = [
            item.deepLink,
            `weixin://dl/chat?${webInformation?.wechat}`,
            `wechat://dl/chat?${webInformation?.wechat}`
          ];
          
          tryDeepLinks(wechatDeepLinks);
          break;
        }
        
        case 'Messenger': {
          // Lấy threadId từ deepLink
          
          // Thử nhiều định dạng khác nhau cho Messenger deeplink
          const messengerDeepLinks = [
            item.deepLink,
            `fb-messenger://user-thread/${webInformation?.messenger}`,
            `fb-messenger://user/${webInformation?.messenger}`
          ];
          
          tryDeepLinks(messengerDeepLinks);
          break;
        }
        
        case 'Phone': {
          // Xử lý đơn giản vì tel: hoạt động tốt trên hầu hết các thiết bị
          window.location.href = item.deepLink;
          break;
        }
        
        default: {
          // Xử lý mặc định cho các ứng dụng khác
          window.location.href = item.deepLink;
          
          setTimeout(() => {
            window.location.href = item.webLink;
          }, 2000);
        }
      }
    } else {
      // Xử lý cho máy tính hoặc không có deepLink
      window.open(item.webLink, "_blank");
    }
  };

  return (
    <div className="fixed bottom-10 right-4 z-50 max-w-[90%]">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 flex items-center justify-center
          ${!isOpen ? 'animate-bounce' : ''}
        `}
      >
        <Image src='/images/message.svg' alt='Message' width={32} height={32} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 mb-4 max-w-full"
          >
            {webInformation && socialMenuItems.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-1"
              >
                <button
                  onClick={() => handleClick(item)}
                  className="bg-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-primary hover:text-white group relative"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="absolute right-full mr-2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity max-w-[150px] overflow-hidden text-ellipsis lg:max-w-none z-10">
                    {item.label}
                  </span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;
