import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./assets/css/styles.module.css";

import slide1 from "./assets/images/slide-1.png";
import slide2 from "./assets/images/slide-2.png";
import slide3 from "./assets/images/slide-3.png";
import slide4 from "./assets/images/slide-4.png";
import slide5 from "./assets/images/slide-5.png";

const slides = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
  { id: 4, image: slide4 },
  { id: 5, image: slide5 },
];

export default function App() {
  return (
    <div className={`wrapper ${styles.wrapper}`}>
      <div className={`container ${styles.container}`}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
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
                <img src={slide.image} alt={`slide ${slide.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
