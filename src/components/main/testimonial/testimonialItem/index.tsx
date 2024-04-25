import { useTranslation } from "react-i18next";
import { ItemProps } from "@/models/ITestimonialItem";
import CommonAnimation from "@/components/common/commonAnimation";
import styles from "./assets/css/styles.module.css";
import quoteIcon from "./assets/images/quote-icon.svg";

const TestimonialItem: React.FC<ItemProps> = ({ item }) => {
  const { t } = useTranslation();
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <CommonAnimation variants={variants} className={styles.item}>
        <div className={styles.content}>
          <p className={styles.description}>
            {t(`home.testimonial.slides.${item.author}.description`)}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className={styles.author}>
              <div className={styles.authorThumb}>
                <img src={item.authorThumbImg} alt="author thumb image" />
              </div>
              <div className={styles.authorContent}>
                <h6>{t(`home.testimonial.slides.${item.author}.author`)}</h6>
                <span className="text-capitalize">
                  {t(`home.testimonial.slides.${item.author}.title`)}
                </span>
              </div>
            </div>
            <div className={styles.quoteIcon}>
              <img src={quoteIcon} alt="quote icon" />
            </div>
          </div>
        </div>
      </CommonAnimation>
    </>
  );
};

export default TestimonialItem;
