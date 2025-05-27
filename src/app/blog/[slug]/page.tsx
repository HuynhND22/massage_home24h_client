import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../../services/blog.service';

// Hàm này sẽ được thay thế bằng API call thực tế trong môi trường production
async function getPostBySlug(slug: string): Promise<BlogPost> {
  return {
    id: 1,
    slug: slug,
    featuredImage: '/images/blog-1.jpg',
    createdAt: '2025-05-15T08:00:00Z',
    updatedAt: '2025-05-15T08:00:00Z',
    categoryId: 1,
    category: {
      id: 1,
      name: 'Wellness'
    },
    translations: [
      {
        language: 'vi',
        title: 'Lợi ích của việc massage thường xuyên',
        excerpt: 'Khám phá những lợi ích sức khỏe tuyệt vời từ việc massage thường xuyên và cách nó có thể cải thiện cuộc sống của bạn.',
        content: `
          <h2>Lợi ích của việc massage thường xuyên</h2>
          <p>Massage không chỉ là một cách để thư giãn và nuông chiều bản thân, mà còn mang lại nhiều lợi ích sức khỏe quan trọng. Nghiên cứu đã chỉ ra rằng việc massage thường xuyên có thể giúp giảm căng thẳng, cải thiện giấc ngủ và nâng cao chất lượng cuộc sống tổng thể.</p>
          
          <h3>Giảm căng thẳng và lo âu</h3>
          <p>Một trong những lợi ích rõ ràng nhất của việc massage là khả năng giảm căng thẳng. Massage kích thích cơ thể sản xuất endorphin - hóa chất tự nhiên trong não giúp giảm đau và tạo cảm giác dễ chịu. Điều này làm giảm mức độ hormone căng thẳng cortisol và adrenaline, giúp cơ thể trở lại trạng thái cân bằng.</p>
          
          <h3>Cải thiện tuần hoàn máu</h3>
          <p>Massage giúp cải thiện tuần hoàn máu bằng cách tạo áp lực lên các mô cơ thể. Điều này giúp đưa máu giàu oxy đến các tế bào, tăng cường sức khỏe tổng thể và thúc đẩy quá trình chữa lành.</p>
          
          <h3>Giảm đau và cải thiện tính linh hoạt</h3>
          <p>Massage thường xuyên có thể giúp giảm đau cơ và khớp bằng cách giảm viêm và thư giãn các cơ căng thẳng. Điều này đặc biệt hữu ích cho những người bị đau mãn tính hoặc các vận động viên muốn cải thiện hiệu suất.</p>
          
          <h3>Nâng cao chất lượng giấc ngủ</h3>
          <p>Nhiều người gặp khó khăn với giấc ngủ đã báo cáo cải thiện đáng kể sau khi bắt đầu massage thường xuyên. Massage giúp thư giãn hệ thần kinh, giảm căng thẳng và chuẩn bị cơ thể cho một giấc ngủ sâu và hồi phục.</p>
          
          <h3>Tăng cường hệ miễn dịch</h3>
          <p>Nghiên cứu đã chỉ ra rằng massage có thể tăng cường chức năng miễn dịch bằng cách kích thích hoạt động của tế bào tự nhiên, giúp cơ thể chống lại bệnh tật hiệu quả hơn.</p>
          
          <h3>Cải thiện sức khỏe tinh thần</h3>
          <p>Ngoài lợi ích thể chất, massage còn có tác động tích cực đến sức khỏe tinh thần. Nó có thể giúp giảm triệu chứng của trầm cảm và lo âu, đồng thời tăng cường cảm giác hạnh phúc và cân bằng tổng thể.</p>
          
          <h3>Kết luận</h3>
          <p>Việc đưa massage thường xuyên vào lịch trình chăm sóc sức khỏe của bạn có thể mang lại nhiều lợi ích lâu dài. Tại Renew Day Spa, chúng tôi cung cấp nhiều loại liệu pháp massage được thiết kế để đáp ứng nhu cầu cụ thể của từng khách hàng. Hãy đặt lịch hẹn ngay hôm nay và bắt đầu hành trình hướng tới sức khỏe và thư giãn tốt hơn.</p>
        `
      }
    ]
  };
}

// Hàm này sẽ được thay thế bằng API call thực tế để lấy các bài viết liên quan
async function getRelatedPosts(): Promise<BlogPost[]> {
  return [
    {
      id: 2,
      slug: 'skincare-routine-for-summer',
      featuredImage: '/images/blog-2.jpg',
      createdAt: '2025-05-10T10:30:00Z',
      updatedAt: '2025-05-10T10:30:00Z',
      categoryId: 2,
      category: {
        id: 2,
        name: 'Skincare'
      },
      translations: [
        {
          language: 'vi',
          title: 'Chăm sóc da mùa hè: Những điều cần biết',
          excerpt: 'Những bí quyết chăm sóc da hiệu quả giúp bạn luôn tươi tắn và rạng rỡ trong những ngày hè nóng bức.',
          content: 'Nội dung chi tiết về chăm sóc da mùa hè...'
        }
      ]
    },
    {
      id: 3,
      slug: 'aromatherapy-for-stress-relief',
      featuredImage: '/images/blog-3.jpg',
      createdAt: '2025-05-05T14:45:00Z',
      updatedAt: '2025-05-05T14:45:00Z',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Aromatherapy'
      },
      translations: [
        {
          language: 'vi',
          title: 'Liệu pháp hương thơm giúp giảm stress',
          excerpt: 'Khám phá cách liệu pháp hương thơm có thể giúp bạn giảm căng thẳng và cải thiện sức khỏe tinh thần.',
          content: 'Nội dung chi tiết về liệu pháp hương thơm...'
        }
      ]
    }
  ];
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const relatedPosts = await getRelatedPosts();
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.featuredImage}
            alt={post.translations[0].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/60"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 flex items-center justify-center gap-4 text-sm">
              <span className="bg-primary/80 py-1 px-3 rounded-full">
                {post.category?.name}
              </span>
              <span>{new Date(post.createdAt).toLocaleDateString('vi-VN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.translations[0].title}</h1>
          </div>
        </div>
      </section>
      
      {/* Post Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="bg-light p-8 rounded-lg shadow-md">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.translations[0].content }}></div>
                
                {/* Share Buttons */}
                <div className="mt-10 pt-6 border-t border-border">
                  <div className="flex items-center">
                    <span className="font-medium mr-4">Chia sẻ:</span>
                    <div className="flex space-x-3">
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
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Author */}
              <div className="bg-light p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Tác giả</h3>
                <div className="flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/images/author.jpg"
                      alt="Author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Nguyễn Thị Anh</h4>
                    <p className="text-sm text-gray-600">Chuyên gia về sức khỏe và làm đẹp</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Với hơn 10 năm kinh nghiệm trong lĩnh vực spa và chăm sóc sức khỏe, Nguyễn Thị Anh là một trong những chuyên gia hàng đầu về các liệu pháp spa và làm đẹp tự nhiên.
                </p>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Bài viết liên quan</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex gap-3">
                      <div className="w-20 h-20 relative flex-shrink-0">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.translations[0].title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium hover:text-primary transition-colors">
                          <Link href={`/blog/${relatedPost.slug}`}>
                            {relatedPost.translations[0].title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500">
                          {new Date(relatedPost.createdAt).toLocaleDateString('vi-VN', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-light py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Bạn muốn trải nghiệm những lợi ích của Spa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Đặt lịch hẹn ngay hôm nay và khám phá các dịch vụ spa đẳng cấp của chúng tôi
          </p>
          <Link href="/contact" className="btn bg-light text-primary hover:bg-dark hover:text-light">
            Đặt lịch ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
