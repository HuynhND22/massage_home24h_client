"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="block mb-4">
              <div className="relative h-16 w-40">
                <Image 
                  src="/images/logo-light.png"
                  alt="Renew Day Spa"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mb-4">
              Renew Day Spa cung cấp các dịch vụ spa cao cấp và trải nghiệm thư giãn tuyệt vời, giúp bạn cảm thấy tươi mới và trẻ trung mỗi ngày.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaFacebookF />
              </Link>
              <Link href="https://instagram.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaInstagram />
              </Link>
              <Link href="https://twitter.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaTwitter />
              </Link>
              <Link href="https://youtube.com" className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaYoutube />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-primary/30">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">Giới thiệu</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Dịch vụ</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">Bảng giá</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Liên hệ</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-primary/30">Dịch vụ</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/massage" className="hover:text-primary transition-colors">Massage trị liệu</Link>
              </li>
              <li>
                <Link href="/services/facial" className="hover:text-primary transition-colors">Chăm sóc da mặt</Link>
              </li>
              <li>
                <Link href="/services/body-treatments" className="hover:text-primary transition-colors">Trị liệu cơ thể</Link>
              </li>
              <li>
                <Link href="/services/aromatherapy" className="hover:text-primary transition-colors">Liệu pháp hương thơm</Link>
              </li>
              <li>
                <Link href="/services/hot-stone" className="hover:text-primary transition-colors">Massage đá nóng</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-primary/30">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(+84) 28 1234 5678</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:info@renewdayspa.com" className="hover:text-primary transition-colors">info@renewdayspa.com</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕒</span>
                <span>Thứ 2-CN: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-light/20 mt-12 pt-6 text-center text-light/70">
          <p>© {currentYear} Renew Day Spa. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
