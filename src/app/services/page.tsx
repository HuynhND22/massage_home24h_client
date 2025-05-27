import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../../services/services.service';

async function getServices() {
  // Trong môi trường production, bạn sẽ gọi API thực sự
  // Ở đây để đơn giản, tôi đang dùng dữ liệu giả
  return [
    {
      id: 1,
      slug: 'massage-therapy',
      featuredImage: '/images/service-1.jpg',
      price: 850000,
      duration: 60,
      translations: [
        {
          language: 'vi',
          title: 'Massage Trị Liệu',
          excerpt: 'Giảm căng thẳng và đau nhức với liệu pháp massage của chúng tôi.',
          content: 'Nội dung chi tiết về dịch vụ massage trị liệu...'
        }
      ],
      category: {
        id: 1,
        name: 'Massage'
      }
    },
    {
      id: 2,
      slug: 'facial-treatment',
      featuredImage: '/images/service-2.jpg',
      price: 950000,
      duration: 90,
      translations: [
        {
          language: 'vi',
          title: 'Chăm Sóc Da Mặt',
          excerpt: 'Trẻ hóa làn da với các phương pháp chăm sóc da mặt cao cấp.',
          content: 'Nội dung chi tiết về dịch vụ chăm sóc da mặt...'
        }
      ],
      category: {
        id: 2,
        name: 'Facial'
      }
    },
    {
      id: 3,
      slug: 'body-treatment',
      featuredImage: '/images/service-3.jpg',
      price: 1250000,
      duration: 120,
      translations: [
        {
          language: 'vi',
          title: 'Trị Liệu Cơ Thể',
          excerpt: 'Liệu pháp toàn diện giúp thư giãn và trẻ hóa toàn bộ cơ thể.',
          content: 'Nội dung chi tiết về dịch vụ trị liệu cơ thể...'
        }
      ],
      category: {
        id: 3,
        name: 'Body Treatments'
      }
    }
  ] as Service[];
}

export default async function ServicesPage() {
  const services = await getServices();
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Our Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-5xl font-bold mb-4">Dịch Vụ Của Chúng Tôi</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Khám phá các liệu pháp spa đẳng cấp thế giới được thiết kế đặc biệt cho bạn
          </p>
        </div>
      </section>
      
      {/* Services Introduction */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Trải Nghiệm Spa Thực Sự</h2>
            <p className="text-lg">
              Tại Renew Day Spa, chúng tôi cung cấp nhiều dịch vụ spa cao cấp được thiết kế để thư giãn, trẻ hóa và làm đẹp. Mỗi liệu pháp đều được thực hiện bởi các chuyên gia có trình độ cao, sử dụng các sản phẩm tự nhiên và công nghệ tiên tiến.
            </p>
          </div>
          
          {/* Service Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-5 py-2 bg-primary text-white rounded-full">Tất cả</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">Massage</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">Facial</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">Body Treatments</button>
            <button className="px-5 py-2 bg-light text-text hover:bg-primary hover:text-white transition-colors duration-300 rounded-full">Aromatherapy</button>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.featuredImage}
                    alt={service.translations[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{service.translations[0].title}</h3>
                    <div className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                      {service.price.toLocaleString('vi-VN')} đ
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{service.duration} phút</p>
                  <p className="mb-4">{service.translations[0].excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-secondary py-1 px-3 rounded-full">
                      {service.category?.name}
                    </span>
                    <Link href={`/services/${service.slug}`} className="text-primary font-medium hover:text-accent transition-colors">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Đặt Lịch Ngay Hôm Nay</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Trải nghiệm các dịch vụ spa cao cấp của chúng tôi và tận hưởng khoảnh khắc thư giãn
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            Đặt lịch ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
