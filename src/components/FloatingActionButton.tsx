"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: '📞',
      label: 'Đặt lịch',
      href: '/booking'
    },
    {
      icon: '📍',
      label: 'Địa điểm',
      href: '/location'
    },
    {
      icon: '💬',
      label: 'Liên hệ',
      href: '/contact'
    }
  ];

  return (
    <div className="fixed bottom-10 right-4 z-50">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 flex items-center justify-center"
      >
        {/* <span className="text-2xl"> */}
          <Image src="/images/message.svg" alt="Message" width={32} height={32} />
        {/* </span> */}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
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
                <span className="absolute right-full mr-2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FloatingActionButton;
