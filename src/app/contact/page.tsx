import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-5xl font-bold mb-4">Liên Hệ</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <div className="md:w-1/2 bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-6">Thông Tin Liên Hệ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Địa Chỉ</h3>
                    <p className="text-gray-600">123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Điện Thoại</h3>
                    <p className="text-gray-600">(+84) 28 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-600">info@renewdayspa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Giờ Làm Việc</h3>
                    <p className="text-gray-600">Thứ 2 - Thứ 6: 9:00 - 21:00</p>
                    <p className="text-gray-600">Thứ 7 - Chủ Nhật: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-4">Kết Nối Với Chúng Tôi</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#E60023] text-white flex items-center justify-center">
                    <span>P</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#0e76a8] text-white flex items-center justify-center">
                    <span>L</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-1/2 bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Họ và tên</label>
                    <input 
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nhập địa chỉ email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Số điện thoại</label>
                  <input 
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Tiêu đề</label>
                  <input 
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập tiêu đề"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Nội dung</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập nội dung tin nhắn"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-md font-medium hover:bg-accent transition-colors duration-300"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      {/* <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8 text-center">Vị Trí Của Chúng Tôi</h2>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-lg text-gray-600">Google Maps sẽ được hiển thị ở đây</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Appointment CTA */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Bạn muốn đặt lịch hẹn?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Trải nghiệm dịch vụ spa cao cấp của chúng tôi bằng cách đặt lịch ngay hôm nay
          </p>
          <Link href="/contact#booking" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            Đặt lịch ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
