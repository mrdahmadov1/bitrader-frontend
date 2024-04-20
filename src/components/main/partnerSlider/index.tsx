import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./assets/css/styles.module.css";

import slide1 from "./assets/images/slide-1.png";
import slide1Dark from "./assets/images/slide-1-dark.png";
import slide2 from "./assets/images/slide-2.png";
import slide2Dark from "./assets/images/slide-2-dark.png";
import slide3 from "./assets/images/slide-3.png";
import slide4 from "./assets/images/slide-4.png";
import slide5 from "./assets/images/slide-5.png";
import slide5Dark from "./assets/images/slide-5-dark.png";
import { RootState, useAppSelector } from "@/store/configureStore";

const slides = [
  { id: 1, lightImage: slide1, darkImage: slide1Dark },
  { id: 2, lightImage: slide2, darkImage: slide2Dark },
  { id: 3, lightImage: slide3, darkImage: slide3 },
  { id: 4, lightImage: slide4, darkImage: slide4 },
  { id: 5, lightImage: slide5, darkImage: slide5Dark },
];

export default function PartnerSlider() {
  const currentTheme = useAppSelector(
    (state: RootState) => state.theme.currentTheme
  );

  return (
    <div className={`${styles.partnerSlider}`}>
      <div className={`container ${styles.container}`}>
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
                  src={
                    currentTheme === "light"
                      ? slide.lightImage
                      : slide.darkImage
                  }
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
