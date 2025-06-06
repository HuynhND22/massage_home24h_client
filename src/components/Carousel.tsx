import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import { useTranslation } from '@/i18n/I18nProvider'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel.css'

type CarouselProps = {
    slider: any[]
}

const Carousel = ({ slider }: CarouselProps) => {
  const { t } = useTranslation();
  console.log('slider', slider);
  return (
    <div className='carousel'>
        <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
            {
                slider.map((data:any) => {
                    const currentLang = typeof window !== 'undefined' ? localStorage.getItem('preferredLanguage') || 'vi' : 'vi';
                    const translation = data.translations.find((t:any) => t.language === currentLang) || data.translations[0];
                    console.log('data', data);
                    return (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                        <div>
                            <p className='title'>{translation?.name}</p>
                            <p>{translation?.description}</p>
                            <a href={`${data.url}`} target="_blank" className='slider-btn text-light bg-primary hover:bg-primary/80 transition-colors duration-300'>{t('common.buttons.viewDetails')}</a>
                        </div>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>

    </div>
  )
}

export default Carousel