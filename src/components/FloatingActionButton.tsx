"use client";

import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface MenuItem {
  icon: ReactNode;
  label: string;
  deepLink?: string;
  webLink: string;
}

interface FloatingActionButtonProps {
  menuItems: MenuItem[];
  buttonIcon?: string;
  buttonAlt?: string;
}

const FloatingActionButton = ({
  menuItems,
  buttonIcon = "/images/message.svg",
  buttonAlt = "Message"
}: FloatingActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
          // Lấy số điện thoại từ deepLink
          const phoneNumber = item.deepLink.split('=').pop() || '';
          
          // Thử nhiều định dạng khác nhau cho Zalo deeplink
          const zaloDeepLinks = [
            `zalo://chat?tel=${phoneNumber}`,
            `zalo://chat?phone=${phoneNumber}`,
            `zalo://conversation?receiver=${phoneNumber}`,
            `zalo://profile/${phoneNumber}`
          ];
          
          tryDeepLinks(zaloDeepLinks);
          break;
        }
        
        case 'KakaoTalk': {
          // Lấy ID từ deepLink
          const kakaoId = item.deepLink.split('/').pop() || '';
          
          // Thử nhiều định dạng khác nhau cho KakaoTalk deeplink
          const kakaoDeepLinks = [
            item.deepLink,
            `kakaoplus://plusfriend/talk/${kakaoId}`,
            `kakaoplus://plusfriend/home/${kakaoId}`
          ];
          
          tryDeepLinks(kakaoDeepLinks);
          break;
        }
        
        case 'Line': {
          // Lấy ID từ deepLink
          const lineId = item.deepLink.split('@').pop() || '';
          
          // Thử nhiều định dạng khác nhau cho Line deeplink
          const lineDeepLinks = [
            item.deepLink,
            `line://ti/p/@${lineId}`,
            `line://nv/profilePopup/mid/${lineId}`
          ];
          
          tryDeepLinks(lineDeepLinks);
          break;
        }
        
        case 'Telegram': {
          // Lấy username từ deepLink
          const username = item.deepLink.split('domain=').pop() || '';
          
          // Thử nhiều định dạng khác nhau cho Telegram deeplink
          const telegramDeepLinks = [
            item.deepLink,
            `tg://resolve?domain=${username}`,
            `telegram://resolve?domain=${username}`
          ];
          
          tryDeepLinks(telegramDeepLinks);
          break;
        }
        
        case 'WeChat': {
          // Lấy username từ deepLink
          const username = item.deepLink.split('username=').pop() || '';
          
          // Thử nhiều định dạng khác nhau cho WeChat deeplink
          const wechatDeepLinks = [
            item.deepLink,
            `weixin://dl/chat?${username}`,
            `wechat://dl/chat?${username}`
          ];
          
          tryDeepLinks(wechatDeepLinks);
          break;
        }
        
        case 'Messenger': {
          // Lấy threadId từ deepLink
          const threadId = item.deepLink.split('thread/').pop() || '';
          
          // Thử nhiều định dạng khác nhau cho Messenger deeplink
          const messengerDeepLinks = [
            item.deepLink,
            `fb-messenger://user-thread/${threadId}`,
            `fb-messenger://user/${threadId}`
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
        <Image src={buttonIcon} alt={buttonAlt} width={32} height={32} />
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
            {menuItems.map((item, index) => (
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
