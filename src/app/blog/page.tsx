"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/i18n/I18nProvider';
import { BlogPost } from '../../services/blog.service';

// Hàm này sẽ được thay thế bằng API call thực tế trong môi trường production
function getBlogPosts() {
  // Dữ liệu mẫu
  return [
    {
      id: 1,
      slug: 'benefits-of-regular-massage',
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
          content: 'Nội dung chi tiết về lợi ích của massage...'
        }
      ]
    },
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
    },
    {
      id: 4,
      slug: 'benefits-of-hot-stone-massage',
      featuredImage: '/images/blog-4.jpg',
      createdAt: '2025-04-28T09:15:00Z',
      updatedAt: '2025-04-28T09:15:00Z',
      categoryId: 1,
      category: {
        id: 1,
        name: 'Wellness'
      },
      translations: [
        {
          language: 'vi',
          title: 'Những lợi ích của massage đá nóng',
          excerpt: 'Tìm hiểu tại sao massage đá nóng đang trở thành xu hướng và những lợi ích sức khỏe tuyệt vời từ liệu pháp này.',
          content: 'Nội dung chi tiết về massage đá nóng...'
        }
      ]
    }
  ] as BlogPost[];
}

// Hàm này sẽ được thay thế bằng API call thực tế để lấy danh mục blog
function getBlogCategories() {
  return [
    { id: 1, name: 'Wellness' },
    { id: 2, name: 'Skincare' },
    { id: 3, name: 'Aromatherapy' },
    { id: 4, name: 'Nutrition' },
    { id: 5, name: 'Lifestyle' }
  ];
}

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getBlogCategories();
  const { locale } = useTranslation();
  const withLocale = (path: string) => `/${locale}${path === '/' ? '' : path}`;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Our Blog"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 text-center text-light">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Khám phá những bài viết về sức khỏe, làm đẹp và phong cách sống
          </p>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.translations[0].title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-2 flex items-center text-sm text-gray-500">
                        <span className="bg-secondary py-1 px-3 rounded-full">
                          {post.category?.name}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.createdAt).toLocaleDateString('vi-VN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        <Link href={withLocale(`/blog/${post.slug}`)} className="hover:text-primary transition-colors">
                          {post.translations[0].title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {post.translations[0].excerpt}
                      </p>
                      <Link href={withLocale(`/blog/${post.slug}`)} className="text-primary font-medium hover:text-accent transition-colors inline-flex items-center">
                        Đọc thêm
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="h-10 w-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="h-10 w-10 rounded-full flex items-center justify-center bg-primary text-white">1</button>
                  <button className="h-10 w-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors">2</button>
                  <button className="h-10 w-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors">3</button>
                  <button className="h-10 w-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="bg-light p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Tìm kiếm</h3>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    className="w-full py-2 px-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-light p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Danh mục</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link href={withLocale(`/blog?category=${category.id}`)} className="flex items-center justify-between hover:text-primary transition-colors">
                        <span>{category.name}</span>
                        <span className="bg-secondary text-sm py-1 px-2 rounded-full">4</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-light p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Bài viết gần đây</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-20 h-20 relative flex-shrink-0">
                        <Image
                          src={post.featuredImage}
                          alt={post.translations[0].title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium hover:text-primary transition-colors">
                          <Link href={withLocale(`/blog/${post.slug}`)}>
                            {post.translations[0].title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString('vi-VN', { 
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
              
              {/* Tags */}
              <div className="bg-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href={withLocale('/blog?tag=wellness')} className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Wellness
                  </Link>
                  <Link href={withLocale('/blog?tag=skincare')} className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Skincare
                  </Link>
                  <Link href={withLocale('/blog?tag=massage')} className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Massage
                  </Link>
                  <Link href={withLocale('/blog?tag=aromatherapy')} className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Aromatherapy
                  </Link>
                  <Link href={withLocale('/blog?tag=health')} className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Health
                  </Link>
                  <Link href={withLocale('/blog?tag=beauty')} className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Beauty
                  </Link>
                  <Link href={withLocale('/blog?tag=lifestyle')} className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Lifestyle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
