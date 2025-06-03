"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: <Image src="/images/kakaotalk.svg" alt="KakaoTalk" width={32} height={32} />,
      label: 'KakaoTalk',
      href: 'kakaotalk://'
    },
    {
      icon: <Image src="/images/line.svg" alt="line" width={32} height={32} />,
      label: 'Line',
      href: 'https://line.me/R/ti/p/@massagehome24h'
    },
    {
      icon: <Image src="/images/telegram.svg" alt="telegram" width={32} height={32} />,
      label: 'Telegram',
      href: 'https://t.me/massagehome24h'
    },
    {
      icon: <Image src="/images/wechat.svg" alt="wechat" width={32} height={32} />,
      label: 'Wechat',
      href: 'https://wechat.com/massagehome24h'
    },
    {
      icon: <Image src="/images/zalo.svg" alt="zalo" width={32} height={32} />,
      label: 'Zalo',
      href: 'https://zalo.me/massagehome24h'
    },
    {
      icon: <Image src="/images/messenger.svg" alt="messenger" width={32} height={32} />,
      label: 'Messenger',
      href: 'https://m.me/massagehome24h'
    },
    {
      icon: <Image src="/images/phone.svg" alt="phone" width={32} height={32} />,
      label: 'Phone',
      href: 'tel:+842122279488'
    }
  ];

  return (
    <div className="fixed bottom-10 right-4 z-50">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 flex items-center justify-center
          ${!isOpen ? 'animate-bounce' : ''}
        `}
      >
        <Image src="/images/message.svg" alt="Message" width={32} height={32} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 mb-4"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-1"
              >
                <Link
                  href={item.href}
                  className="bg-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-primary hover:text-white group relative"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="absolute right-full mr-2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;
