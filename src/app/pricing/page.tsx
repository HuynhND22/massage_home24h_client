import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Loại dịch vụ và giá
interface PriceCategory {
  title: string;
  description: string;
  services: {
    name: string;
    price: number;
    duration: number;
    description: string;
  }[];
}

// Dữ liệu giả cho bảng giá
const priceCategories: PriceCategory[] = [
  {
    title: 'Massage Trị Liệu',
    description: 'Các liệu pháp massage cao cấp giúp giảm căng thẳng và thư giãn toàn thân.',
    services: [
      {
        name: 'Massage Thụy Điển',
        price: 750000,
        duration: 60,
        description: 'Liệu pháp massage nhẹ nhàng, thư giãn với các động tác vuốt dài và nhịp nhàng.'
      },
      {
        name: 'Massage Thái',
        price: 850000,
        duration: 90,
        description: 'Kỹ thuật kéo giãn cơ thể kết hợp với động tác ấn huyệt để giải phóng năng lượng và cải thiện độ linh hoạt.'
      },
      {
        name: 'Massage Đá Nóng',
        price: 950000,
        duration: 90,
        description: 'Sử dụng đá bazan nóng để thư giãn cơ bắp và tăng tuần hoàn máu.'
      },
      {
        name: 'Massage Sâu Mô',
        price: 950000,
        duration: 60,
        description: 'Áp lực mạnh để tiếp cận các lớp mô sâu hơn, lý tưởng cho những người có đau mãn tính.'
      }
    ]
  },
  {
    title: 'Chăm Sóc Da Mặt',
    description: 'Các liệu pháp chăm sóc da mặt chuyên sâu giúp làn da khỏe mạnh và trẻ trung.',
    services: [
      {
        name: 'Chăm Sóc Da Cơ Bản',
        price: 650000,
        duration: 60,
        description: 'Làm sạch, tẩy tế bào chết, đắp mặt nạ và dưỡng ẩm cho da.'
      },
      {
        name: 'Trẻ Hóa Da',
        price: 1250000,
        duration: 90,
        description: 'Liệu pháp chống lão hóa cao cấp giúp làm mờ nếp nhăn và cải thiện kết cấu da.'
      },
      {
        name: 'Chăm Sóc Da Chuyên Sâu',
        price: 1450000,
        duration: 120,
        description: 'Điều trị toàn diện với tinh chất và mặt nạ cao cấp, massage mặt và cổ.'
      },
      {
        name: 'Chăm Sóc Da Nhạy Cảm',
        price: 850000,
        duration: 75,
        description: 'Sử dụng các sản phẩm dịu nhẹ và không gây kích ứng cho làn da nhạy cảm.'
      }
    ]
  },
  {
    title: 'Trị Liệu Cơ Thể',
    description: 'Các liệu pháp làm đẹp và trẻ hóa toàn thân.',
    services: [
      {
        name: 'Tẩy Tế Bào Chết Toàn Thân',
        price: 850000,
        duration: 60,
        description: 'Làm sạch sâu và loại bỏ tế bào chết trên toàn cơ thể, giúp da mềm mại và tươi sáng.'
      },
      {
        name: 'Ủ Dưỡng Toàn Thân',
        price: 1050000,
        duration: 90,
        description: 'Sử dụng mặt nạ dưỡng thể cao cấp giàu dưỡng chất, giúp làn da mịn màng và săn chắc.'
      },
      {
        name: 'Liệu Pháp Detox',
        price: 1250000,
        duration: 120,
        description: 'Giúp cơ thể thải độc và tăng cường sức khỏe thông qua các kỹ thuật massage và ủ dưỡng đặc biệt.'
      },
      {
        name: 'Trị Liệu Thư Giãn Toàn Diện',
        price: 1550000,
        duration: 150,
        description: 'Kết hợp nhiều liệu pháp để mang lại trải nghiệm thư giãn và làm đẹp hoàn hảo.'
      }
    ]
  }
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pricing-hero.jpg"
            alt="Our Prices"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-5xl font-bold mb-4">Bảng Giá Dịch Vụ</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Khám phá các dịch vụ spa cao cấp của chúng tôi và lựa chọn liệu pháp phù hợp nhất với nhu cầu của bạn
          </p>
        </div>
      </section>
      
      {/* Pricing Introduction */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Dịch Vụ Và Bảng Giá</h2>
            <p className="text-lg">
              Tại Renew Day Spa, chúng tôi cung cấp nhiều dịch vụ spa cao cấp với mức giá hợp lý. Mỗi liệu pháp đều được thực hiện bởi các chuyên gia có trình độ cao, sử dụng các sản phẩm tự nhiên và công nghệ tiên tiến để mang lại kết quả tốt nhất.
            </p>
          </div>
          
          {/* Pricing Categories */}
          <div className="space-y-16">
            {priceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-1 bg-primary mr-4"></div>
                  <div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="bg-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                        <div className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                          {service.price.toLocaleString('vi-VN')} đ
                        </div>
                      </div>
                      <p className="text-gray-500 mb-3">{service.duration} phút</p>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Gói Thành Viên</h2>
            <p className="text-lg">
              Trở thành thành viên của Renew Day Spa để tận hưởng nhiều ưu đãi đặc biệt và liệu pháp spa cao cấp với giá ưu đãi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Membership */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="bg-secondary p-6">
                <h3 className="text-2xl font-semibold text-center">Gói Cơ Bản</h3>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">2.500.000 đ</span>
                  <span className="text-gray-600 block mt-1">/ 3 tháng</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 buổi massage 60 phút</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 buổi chăm sóc da mặt cơ bản</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Giảm 10% cho dịch vụ khác</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Đặt lịch ưu tiên</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="block text-center bg-transparent border border-primary text-primary py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
                    Đăng Ký Ngay
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Premium Membership */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-primary transform scale-105 z-10">
              <div className="bg-primary p-6 text-white">
                <div className="text-center text-sm font-semibold uppercase tracking-wider mb-2">Phổ biến nhất</div>
                <h3 className="text-2xl font-semibold text-center">Gói Cao Cấp</h3>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">4.500.000 đ</span>
                  <span className="text-light/80 block mt-1">/ 6 tháng</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4 buổi massage 90 phút</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 buổi chăm sóc da mặt chuyên sâu</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 buổi tẩy tế bào chết toàn thân</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Giảm 15% cho dịch vụ khác</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Đặt lịch ưu tiên + miễn phí đậu xe</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="block text-center bg-primary text-white py-2 rounded-md hover:bg-accent transition-colors duration-300">
                    Đăng Ký Ngay
                  </Link>
                </div>
              </div>
            </div>
            
            {/* VIP Membership */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="bg-secondary p-6">
                <h3 className="text-2xl font-semibold text-center">Gói VIP</h3>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">8.000.000 đ</span>
                  <span className="text-gray-600 block mt-1">/ năm</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>8 buổi massage tùy chọn</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4 buổi chăm sóc da mặt cao cấp</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 buổi trị liệu cơ thể</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Giảm 20% cho tất cả dịch vụ</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Đặc quyền VIP + đưa đón tận nơi</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="block text-center bg-transparent border border-primary text-primary py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
                    Đăng Ký Ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gift Cards Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">Thẻ Quà Tặng</h2>
              <p className="mb-4">
                Thẻ quà tặng Renew Day Spa là món quà hoàn hảo cho người thân, bạn bè hoặc đồng nghiệp. Tặng họ trải nghiệm thư giãn và làm đẹp tuyệt vời tại spa của chúng tôi.
              </p>
              <p className="mb-6">
                Thẻ quà tặng có giá trị từ 500.000đ đến 5.000.000đ và có thể sử dụng cho bất kỳ dịch vụ nào tại Renew Day Spa trong vòng 12 tháng kể từ ngày mua.
              </p>
              <div className="flex space-x-4">
                <Link href="/contact" className="btn btn-primary">
                  Mua Thẻ Quà Tặng
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Tìm Hiểu Thêm
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/pricing-banner.jpg" 
                alt="Gift Cards" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Câu Hỏi Thường Gặp</h2>
            <p className="text-lg">
              Tìm hiểu thêm về các dịch vụ và bảng giá của chúng tôi qua những câu hỏi thường gặp dưới đây.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Có cần đặt lịch trước không?</h3>
                <p className="text-gray-600">
                  Có, chúng tôi khuyến khích khách hàng đặt lịch trước để đảm bảo có thời gian và chuyên gia phù hợp. Bạn có thể đặt lịch qua điện thoại, email hoặc trực tiếp tại spa.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Chính sách hủy lịch như thế nào?</h3>
                <p className="text-gray-600">
                  Để hủy hoặc thay đổi lịch hẹn, vui lòng thông báo cho chúng tôi ít nhất 24 giờ trước giờ hẹn. Hủy lịch muộn hơn có thể phải chịu phí 50% giá trị dịch vụ.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Giá có bao gồm thuế và phí dịch vụ không?</h3>
                <p className="text-gray-600">
                  Tất cả giá đã bao gồm thuế. Phí dịch vụ (tip) không bắt buộc nhưng luôn được đánh giá cao nếu bạn hài lòng với dịch vụ.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Có ưu đãi nào cho khách hàng thường xuyên không?</h3>
                <p className="text-gray-600">
                  Có, chúng tôi có các gói thành viên với nhiều ưu đãi hấp dẫn. Ngoài ra, khách hàng thường xuyên sẽ nhận được thông báo về các chương trình khuyến mãi đặc biệt.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Tôi nên đến trước giờ hẹn bao lâu?</h3>
                <p className="text-gray-600">
                  Chúng tôi khuyến khích bạn đến trước giờ hẹn khoảng 15-20 phút để hoàn tất thủ tục đăng ký và thư giãn trước khi bắt đầu dịch vụ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Đặt Lịch Hẹn Ngay Hôm Nay</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Trải nghiệm dịch vụ spa cao cấp và chăm sóc bản thân với các liệu pháp của chúng tôi
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            Đặt lịch ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
