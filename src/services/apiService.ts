// API service for fetching translations and other dynamic content

interface TranslationResponse {
  key: string;
  translations: {
    [locale: string]: string;
  };
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// List of keys that should be fetched from API instead of static JSON files
export const dynamicTranslationKeys = [
  'home.hero.slide1.title',
  'home.hero.slide1.description',
  'home.hero.slide2.title',
  'home.hero.slide2.description'
];

// Mock API response - replace with actual API call in production
const mockTranslations: TranslationResponse[] = [
  {
    key: 'home.hero.slide1.title',
    translations: {
      en: 'Massage Home24h - Professional Service',
      vi: 'Massage Home24h - Dịch vụ chuyên nghiệp',
      ko: '마사지 홈24시 - 전문 서비스',
      zh: '按摩之家24小时 - 专业服务'
    }
  },
  {
    key: 'home.hero.slide1.description',
    translations: {
      en: 'Experience premium massage services and relaxation in your home',
      vi: 'Trải nghiệm dịch vụ massage cao cấp và thư giãn tại nhà bạn',
      ko: '집에서 프리미엄 마사지 서비스와 휴식을 경험하세요',
      zh: '在您家中体验高级按摩服务和放松'
    }
  },
  {
    key: 'home.hero.slide2.title',
    translations: {
      en: 'Premium Spa Experience',
      vi: 'Trải nghiệm Spa cao cấp',
      ko: '프리미엄 스파 경험',
      zh: '高级水疗体验'
    }
  },
  {
    key: 'home.hero.slide2.description',
    translations: {
      en: 'Professional therapists at your service 24/7',
      vi: 'Chuyên gia trị liệu phục vụ bạn 24/7',
      ko: '전문 테라피스트가 24/7 서비스를 제공합니다',
      zh: '专业治疗师24/7为您服务'
    }
  }
];

/**
 * Fetch translations from API for a specific key and locale
 * @param key The translation key to fetch
 * @param locale The language code
 * @returns The translation string or undefined if not found
 */
export const fetchTranslationByKey = async (
  key: string,
  locale: string
): Promise<string | undefined> => {
  // In a real app, this would make an actual API call
  // For demo purposes, we'll use the mock data
  try {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const translation = mockTranslations.find(t => t.key === key);
    if (translation && translation.translations[locale]) {
      return translation.translations[locale];
    }
    return undefined;
  } catch (error) {
    console.error(`Error fetching translation for key ${key}:`, error);
    return undefined;
  }
};

/**
 * Fetch all dynamic translations for a specific locale
 * @param locale The language code
 * @returns Object with key-value pairs of translations
 */
export const fetchAllDynamicTranslations = async (
  locale: string
): Promise<Record<string, string>> => {
  try {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const result: Record<string, string> = {};
    
    // Filter and transform mock data
    mockTranslations.forEach(item => {
      if (item.translations[locale]) {
        result[item.key] = item.translations[locale];
      }
    });
    
    return result;
  } catch (error) {
    console.error(`Error fetching all dynamic translations:`, error);
    return {};
  }
};
