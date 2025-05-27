import api from './api';

// Định nghĩa kiểu dữ liệu
export interface BlogPost {
  id: number;
  slug: string;
  featuredImage: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  category?: {
    id: number;
    name: string;
  };
  translations: {
    language: string;
    title: string;
    content: string;
    excerpt: string;
  }[];
}

export interface BlogCategory {
  id: number;
  name: string;
}

// API services cho blog
const blogService = {
  // Lấy danh sách bài viết
  getPosts: async (params?: { page?: number; limit?: number; category?: number; language?: string }) => {
    return api.get('/blog', { params }) as Promise<{
      data: BlogPost[];
      totalItems: number;
      totalPages: number;
      currentPage: number;
    }>;
  },

  // Lấy chi tiết bài viết theo slug
  getPostBySlug: async (slug: string, language?: string) => {
    return api.get(`/blog/slug/${slug}`, { params: { language } }) as Promise<BlogPost>;
  },

  // Lấy các bài viết liên quan
  getRelatedPosts: async (postId: number, limit = 3) => {
    return api.get(`/blog/related/${postId}`, { params: { limit } }) as Promise<BlogPost[]>;
  },

  // Lấy danh sách danh mục
  getCategories: async () => {
    return api.get('/blog/categories') as Promise<BlogCategory[]>;
  },

  // Tìm kiếm bài viết
  searchPosts: async (query: string, language?: string) => {
    return api.get('/blog/search', { params: { query, language } }) as Promise<BlogPost[]>;
  }
};

export default blogService;
