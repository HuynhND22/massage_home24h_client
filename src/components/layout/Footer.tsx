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
                  alt="Massage Home24h"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mb-4">
              Massage Home24h cung cấp các dịch vụ massage cao cấp và trải nghiệm thư giãn tuyệt vời, giúp bạn cảm thấy tươi mới và trẻ trung mỗi ngày.
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
            <div className='mb-4 pb-2 w-full h-[300px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-md shadow-md'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.999388276486!2d108.22805337580003!3d16.06552153953579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421986ccc707c9%3A0x2e05015ced66d049!2sMassage%20Home24h!5e0!3m2!1svi!2s!4v1748856769609!5m2!1svi!2s" className="w-full h-full border-0 rounded-md" loading="lazy" allowFullScreen></iframe>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>Địa chỉ</h3>
                <p>123 Đường phố, Quận Huyện, Thành phố, Tỉnh, Quốc gia</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>Liên hệ</h3>
                <p>Điện thoại: 0123456789</p>
                <p>Email: info@massagehome24h.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-light/20 mt-12 pt-6 text-center text-light/70">
          <p>© {currentYear} Massage Home24h. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
