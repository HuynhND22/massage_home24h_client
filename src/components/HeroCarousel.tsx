import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaRegClock } from "react-icons/fa";
import Link from 'next/link';
import { useTranslation } from '@/i18n/I18nProvider';
import api from '@/services/api';


type HeroCarouselProps = {
  slides: any;
  interval?: number;
};

export default function HeroCarousel({ slides, interval = 5000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const { t } = useTranslation();
  const [webInformation, setWebInformation] = useState<any>();

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [current, slides.length, interval]);

  useEffect(() => {
    const fetchWebInformation = async () => {
      try {
        const response = await api.get('/web-settings');
        setWebInformation(response);
      } catch (error) {
        // Có thể xử lý lỗi ở đây nếu muốn
      }
    };
    fetchWebInformation();
  }, []);

  //check if current is which language in localstorage is active, select language i18n 
  const currentLang = typeof window !== 'undefined' ? localStorage.getItem('preferredLanguage') || 'vi' : 'vi';
  const currentSlide = slides[current];
  const translation = currentSlide.translations.find((t: any) => t.language === currentLang) || currentSlide.translations[0];
  
  return (
    <section className="relative h-[100vh] md:h-[100vh] sm:min-h-[max-content] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          {prev !== null && prev !== current && (
            <motion.div
              key={`slide-prev-${prev}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[prev].image}
                alt={slides[prev].image}
                fill
                priority
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>
          )}
          <motion.div
            key={`slide-current-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].image}
              fill
              priority
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container relative h-full flex flex-col justify-center items-center text-center text-light z-20 px-4 py-16 md:py-0">
        <motion.h2
          key={`title-${current}`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-garamond font-bold mb-4 md:mb-6"
        >
          {translation.title}
        </motion.h2>

        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-xl md:max-w-2xl px-4"
        >
          {translation.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-1 sm:gap-8 w-full max-w-md mx-auto sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row w-full max-w-md mx-auto sm:px-0 "
          >
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg py-3 px-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-center group relative overflow-hidden"
            >
              <span className="relative z-10 text-base">{t('common.buttons.bookNow')}</span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row w-full max-w-md mx-auto sm:px-0 "
          >
            <Link 
              href="#services" 
              className="bg-transparent border-2 border-white/80 text-white font-semibold rounded-lg py-3 px-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-center hover:bg-white/10 group relative overflow-hidden"
            >
              <span className="relative z-10 text-base">{t('common.buttons.services')}</span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm backdrop-blur-md rounded-lg shadow-lg bg-white/10 p-4 text-light"
        >
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>{webInformation?.address || t('contact.info.addressValue')}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary" />
            <a
              href={webInformation?.phone ? `tel:+84${webInformation.phone}` : 'tel:+849999333444'}
              className="hover:text-primary transition-colors text-white"
            >
              {webInformation?.phone ? `+84 ${webInformation.phone}` : '+84 9999 333 444'}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaRegClock className="text-primary" />
            <span>{webInformation?.workingHours || '10:00 AM - 12:00 AM'}</span>
          </div>
        </motion.div>

        {/* Pagination */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_:any, index:any) => (
            <button
              key={index}
              onClick={() => {
                if (index !== current) {
                  setPrev(current);
                  setCurrent(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
