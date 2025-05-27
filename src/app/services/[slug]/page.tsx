import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../../../services/services.service';

// Hàm này sẽ được thay thế bằng API call thực tế trong môi trường production
async function getServiceBySlug(slug: string): Promise<Service> {
  // Dữ liệu mẫu
  return {
    id: 1,
    slug: slug,
    featuredImage: '/images/service-1.jpg',
    price: 850000,
    duration: 60,
    createdAt: '2025-04-15T08:00:00Z',
    updatedAt: '2025-05-01T10:30:00Z',
    categoryId: 1,
    category: {
      id: 1,
      name: 'Massage'
    },
    translations: [
      {
        language: 'vi',
        title: 'Massage Trị Liệu',
        excerpt: 'Giảm căng thẳng và đau nhức với liệu pháp massage của chúng tôi.',
        content: `
          <h2>Giới thiệu về Massage Trị Liệu</h2>
          <p>Massage Trị Liệu tại Renew Day Spa là sự kết hợp hoàn hảo giữa các kỹ thuật massage truyền thống và hiện đại, được thiết kế đặc biệt để giải quyết các vấn đề về cơ, xương khớp và thần kinh.</p>
          
          <p>Liệu pháp này sử dụng các động tác nhẹ nhàng đến mạnh mẽ, tùy theo nhu cầu của mỗi khách hàng, kết hợp với các loại tinh dầu thiên nhiên để tạo ra trải nghiệm thư giãn và trị liệu tối ưu.</p>
          
          <h3>Lợi ích của Massage Trị Liệu</h3>
          <ul>
            <li>Giảm đau và căng cơ</li>
            <li>Cải thiện tuần hoàn máu</li>
            <li>Giảm stress và lo âu</li>
            <li>Nâng cao chất lượng giấc ngủ</li>
            <li>Tăng cường hệ miễn dịch</li>
            <li>Cải thiện tư thế và linh hoạt</li>
          </ul>
          
          <h3>Quy trình trị liệu</h3>
          <p>Buổi massage trị liệu của chúng tôi bắt đầu bằng việc tham vấn ngắn để hiểu rõ nhu cầu và tình trạng sức khỏe của bạn. Sau đó, bạn sẽ được hướng dẫn đến phòng trị liệu riêng tư, nơi chuyên gia của chúng tôi sẽ thực hiện liệu pháp massage được cá nhân hóa.</p>
          
          <p>Chúng tôi sử dụng các sản phẩm cao cấp, hoàn toàn tự nhiên và được lựa chọn cẩn thận để đảm bảo an toàn và hiệu quả cho mọi loại da.</p>
        `
      }
    ]
  };
}

// Hàm này sẽ được thay thế bằng API call thực tế để lấy các dịch vụ liên quan
async function getRelatedServices(): Promise<Service[]> {
  return [
    {
      id: 2,
      slug: 'facial-treatment',
      featuredImage: '/images/service-2.jpg',
      price: 950000,
      duration: 90,
      createdAt: '2025-04-16T09:00:00Z',
      updatedAt: '2025-05-02T11:30:00Z',
      categoryId: 2,
      category: {
        id: 2,
        name: 'Facial'
      },
      translations: [
        {
          language: 'vi',
          title: 'Chăm Sóc Da Mặt',
          excerpt: 'Trẻ hóa làn da với các phương pháp chăm sóc da mặt cao cấp.',
          content: 'Nội dung chi tiết về dịch vụ chăm sóc da mặt...'
        }
      ]
    },
    {
      id: 3,
      slug: 'body-treatment',
      featuredImage: '/images/service-3.jpg',
      price: 1250000,
      duration: 120,
      createdAt: '2025-04-17T10:00:00Z',
      updatedAt: '2025-05-03T12:30:00Z',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Body Treatments'
      },
      translations: [
        {
          language: 'vi',
          title: 'Trị Liệu Cơ Thể',
          excerpt: 'Liệu pháp toàn diện giúp thư giãn và trẻ hóa toàn bộ cơ thể.',
          content: 'Nội dung chi tiết về dịch vụ trị liệu cơ thể...'
        }
      ]
    }
  ];
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);
  const relatedServices = await getRelatedServices();
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.featuredImage}
            alt={service.translations[0].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.translations[0].title}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {service.translations[0].excerpt}
          </p>
        </div>
      </section>
      
      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="bg-light p-8 rounded-lg shadow-md">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.translations[0].content }}></div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-light p-8 rounded-lg shadow-md sticky top-24">
                <h3 className="text-2xl font-semibold mb-6 pb-4 border-b border-border">Thông tin dịch vụ</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text">Giá:</span>
                    <span className="text-xl font-semibold text-primary">{service.price.toLocaleString('vi-VN')} đ</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-text">Thời gian:</span>
                    <span>{service.duration} phút</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-text">Danh mục:</span>
                    <span>{service.category?.name}</span>
                  </div>
                  
                  <div className="pt-6">
                    <Link href="/contact" className="block w-full bg-primary text-white py-3 px-4 rounded-md text-center font-medium hover:bg-accent transition-colors duration-300">
                      Đặt lịch ngay
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center">Dịch vụ liên quan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <div key={relatedService.id} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={relatedService.featuredImage}
                    alt={relatedService.translations[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{relatedService.translations[0].title}</h3>
                    <div className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                      {relatedService.price.toLocaleString('vi-VN')} đ
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{relatedService.duration} phút</p>
                  <p className="mb-4">{relatedService.translations[0].excerpt}</p>
                  <Link href={`/services/${relatedService.slug}`} className="block text-center bg-transparent border border-primary text-primary py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Sẵn sàng trải nghiệm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Đặt lịch ngay hôm nay để trải nghiệm dịch vụ spa cao cấp của chúng tôi
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            Đặt lịch ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
