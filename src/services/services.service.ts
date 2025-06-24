import api from './api';

// Định nghĩa kiểu dữ liệu
export interface Service {
  id: number;
  slug: string;
  featuredImage: string;
  price: number;
  duration: number;
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

export interface ServiceCategory {
  id: number;
  name: string;
}

// API services cho dịch vụ spa
const serviceService = {
  // Lấy danh sách dịch vụ
  getServices: async (params?: { page?: number; limit?: number; category?: number; language?: string }) => {
    return api.get('/services', { params }) as Promise<{
      data: Service[];
      totalItems: number;
      totalPages: number;
      currentPage: number;
    }>;
  },

  // Lấy chi tiết dịch vụ theo slug
  getServiceBySlug: async (slug: string, language?: string) => {
    return api.get(`/services/details/${slug}`, { params: { language } }) as Promise<Service>;
  },

  // Lấy các dịch vụ nổi bật
  getFeaturedServices: async (limit = 3, language?: string) => {
    return api.get('/services/featured', { params: { limit, language } }) as Promise<Service[]>;
  },

  // Lấy danh sách danh mục dịch vụ
  getCategories: async () => {
    return api.get('/services/categories') as Promise<ServiceCategory[]>;
  },

  // Lấy dịch vụ liên quan
  getRelatedServices: async (serviceId: number, limit = 3) => {
    return api.get(`/services/related/${serviceId}`, { params: { limit } }) as Promise<Service[]>;
  },

  // Tìm kiếm dịch vụ
  searchServices: async (query: string, language?: string) => {
    return api.get('/services/search', { params: { query, language } }) as Promise<Service[]>;
  }
};

export default serviceService;
