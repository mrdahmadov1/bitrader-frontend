import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './assets/css/styles.module.css';
import { RootState, useAppSelector } from '@/store/configureStore';

const slides = [
  {
    id: 1,
    lightImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/1.png',
    darkImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/1-dark.png',
  },
  {
    id: 2,
    lightImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/2.png',
    darkImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/2-dark.png',
  },
  {
    id: 3,
    lightImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/3.png',
    darkImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/3-dark.png',
  },
  {
    id: 4,
    lightImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/4.png',
    darkImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/4-dark.png',
  },
  {
    id: 5,
    lightImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/5.png',
    darkImage: 'https://thetork.com/demos/html/bitrader/assets/images/partner/light/5-dark.png',
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
