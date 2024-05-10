import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './assets/css/styles.module.css';
import { RootState, useAppSelector } from '@/store/configureStore';
import partner1 from './assets/images/partner-1.png';
import partner2 from './assets/images/partner-2.png';
import partner3 from './assets/images/partner-3.png';
import partner4 from './assets/images/partner-4.png';
import partner5 from './assets/images/partner-5.png';
import partner3Dark from './assets/images/partner-3-dark.png';
import partner4Dark from './assets/images/partner-4-dark.png';
import partner5Dark from './assets/images/partner-5-dark.png';

const slides = [
  {
    id: 1,
    lightImage: partner1,
    darkImage: partner1,
  },
  {
    id: 2,
    lightImage: partner2,
    darkImage: partner2,
  },
  {
    id: 3,
    lightImage: partner3,
    darkImage: partner3Dark,
  },
  {
    id: 4,
    lightImage: partner4,
    darkImage: partner4Dark,
  },
  {
    id: 5,
    lightImage: partner5,
    darkImage: partner5Dark,
  },
];

export default function PartnerSlider() {
  const currentTheme = useAppSelector((state: RootState) => state.theme.currentTheme);

  return (
    <div className={`${styles.partnerSlider}`}>
      <div className={`container ${styles.container} p-0 m-0`}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          speed={1000}
          grabCursor={true}
          modules={[Autoplay]}
          className={styles.swiperContainer}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.slideImg}>
                <img
                  src={currentTheme === 'light' ? slide.lightImage : slide.darkImage}
                  alt={`slide ${slide.id}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
