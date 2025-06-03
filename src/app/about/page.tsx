import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Massage Home24h"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/40"></div>
        </div>
        <div className="container relative z-10 text-center text-light px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Khám phá câu chuyện về Massage Home24h và sứ mệnh của chúng tôi
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <p className="mb-4">
                Massage Home24h được thành lập vào năm 2019 với mong muốn mang đến một không gian thư giãn và làm đẹp toàn diện cho khách hàng. Từ những ngày đầu, chúng tôi đã xác định sứ mệnh của mình là mang đến sự cân bằng và trẻ hóa cho cả thể chất lẫn tinh thần thông qua các liệu pháp massage cao cấp.
              </p>
              <p className="mb-6">
                Với hơn {new Date().getFullYear() - 2019} năm kinh nghiệm, chúng tôi đã không ngừng nâng cao chất lượng dịch vụ, tìm kiếm và áp dụng các kỹ thuật và nguyên liệu mới nhất, kết hợp giữa y học hiện đại và các phương pháp truyền thống để tạo ra trải nghiệm massage độc đáo và hiệu quả.
              </p>
              <p>
                Đội ngũ chuyên gia của chúng tôi được đào tạo chuyên sâu và luôn cập nhật những xu hướng mới nhất trong ngành làm đẹp và chăm sóc sức khỏe. Mỗi liệu pháp tại Massage Home24h đều được thiết kế riêng biệt, phù hợp với nhu cầu cụ thể của từng khách hàng, giúp mang lại kết quả tối ưu.
              </p>
            </div>
            <div className="md:w-1/2 w-full relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/about-story.jpg" 
                alt="Our Story" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">Sứ Mệnh Của Chúng Tôi</h2>
              <p className="mb-4">
                Tại Massage Home24h, chúng tôi tin rằng vẻ đẹp thực sự xuất phát từ sự cân bằng và khỏe mạnh từ bên trong. Sứ mệnh của chúng tôi là tạo ra một không gian nơi khách hàng có thể tạm quên đi những lo toan cuộc sống, tìm lại sự cân bằng và trẻ hóa cả về thể chất lẫn tinh thần.
              </p>
              <p className="mb-4">
                Chúng tôi cam kết sử dụng các sản phẩm tự nhiên, thân thiện với môi trường và không thử nghiệm trên động vật. Mỗi liệu pháp đều được chúng tôi nghiên cứu kỹ lưỡng để đảm bảo an toàn và hiệu quả cho khách hàng.
              </p>
              <p>
                Với tâm niệm "Mỗi khách hàng là duy nhất", chúng tôi luôn lắng nghe và thấu hiểu nhu cầu của từng người, từ đó cung cấp dịch vụ phù hợp nhất, mang lại cảm giác thư giãn tuyệt đối và kết quả vượt mong đợi.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about-mission.jpg" 
                alt="Our Mission" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Đội Ngũ Chuyên Gia</h2>
            <p className="text-lg">
              Gặp gỡ những chuyên gia tận tâm đứng sau mỗi trải nghiệm tuyệt vời tại Massage Home24h. Đội ngũ của chúng tôi được đào tạo chuyên sâu và luôn cập nhật những kiến thức mới nhất trong lĩnh vực massage và làm đẹp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/team-1.jpg" 
                  alt="Nguyễn Thị Anh" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Nguyễn Thị Anh</h3>
                <p className="text-primary mb-4">Founder & Massage Director</p>
                <p className="text-gray-600 mb-4">
                  Với hơn 15 năm kinh nghiệm trong lĩnh vực massage và làm đẹp, Nguyễn Thị Anh đã xây dựng Massage Home24h với tâm huyết mang đến trải nghiệm massage đẳng cấp cho mọi khách hàng.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>L</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/team-2.jpg" 
                  alt="Trần Văn Minh" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Trần Văn Minh</h3>
                <p className="text-primary mb-4">Master Massage Therapist</p>
                <p className="text-gray-600 mb-4">
                  Chuyên gia massage với hơn 10 năm kinh nghiệm, Trần Văn Minh đã nghiên cứu và thành thạo nhiều phương pháp massage từ khắp nơi trên thế giới.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>L</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/team-3.jpg" 
                  alt="Lê Thanh Hà" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Lê Thanh Hà</h3>
                <p className="text-primary mb-4">Skin Care Specialist</p>
                <p className="text-gray-600 mb-4">
                  Lê Thanh Hà là chuyên gia chăm sóc da với kiến thức chuyên sâu về các liệu pháp trẻ hóa da và kinh nghiệm làm việc tại các spa cao cấp ở châu Âu.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>F</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>T</span>
                  </a>
                  <a href="#" className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-light transition-colors">
                    <span>L</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p className="text-lg">
              Niềm tin và sự hài lòng của khách hàng là động lực lớn nhất giúp chúng tôi không ngừng phát triển và hoàn thiện.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-1.jpg"
                    alt="Nguyễn Thị Lan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Nguyễn Thị Lan</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Tôi đã trải nghiệm dịch vụ massage tại Renew Day Spa và cảm thấy vô cùng hài lòng. Không chỉ kỹ thuật massage chuyên nghiệp mà không gian và dịch vụ đều rất tuyệt vời. Chắc chắn tôi sẽ quay lại!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-2.jpg"
                    alt="Trần Minh Tuấn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Trần Minh Tuấn</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Dịch vụ chăm sóc da tại Renew Day Spa thực sự đã thay đổi làn da của tôi. Sau một tháng điều trị, làn da của tôi đã trở nên sáng mịn và khỏe mạnh hơn rất nhiều. Cảm ơn đội ngũ chuyên gia tại đây!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-3.jpg"
                    alt="Phạm Thanh Hương"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Phạm Thanh Hương</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Tôi đã thử nhiều spa khác nhau nhưng Renew Day Spa thực sự khác biệt. Từ không gian, dịch vụ đến đội ngũ nhân viên đều rất chuyên nghiệp và tận tâm. Đây là nơi tôi tin tưởng để chăm sóc sức khỏe và sắc đẹp."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Trải Nghiệm Dịch Vụ Của Chúng Tôi</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Đặt lịch hẹn ngay hôm nay và khám phá sự khác biệt tại Renew Day Spa
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            Đặt lịch ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
