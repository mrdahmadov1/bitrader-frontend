import { useTranslation } from "react-i18next";
import { ItemProps } from "../../../../../models/IBlogItem";
import CommonAnimation from "../../../../common/commonAnimation";
import styles from "./assets/css/styles.module.css";

const BlogItem: React.FC<ItemProps> = ({ item }) => {
  const { t } = useTranslation();
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <CommonAnimation variants={variants} className={styles.item}>
        <div className={styles.thumb}>
          <img src={item.thumbImg} alt="blog thumb image" />
        </div>
        <div className={styles.content}>
          <div className={styles.meta}>
            <span>{t(`home.testimonial.slides.${item.meta}.meta`)}</span>
          </div>
          <h5 className={styles.title}>
            {t(`home.testimonial.slides.${item.meta}.title`)}
          </h5>
          <p className={styles.description}>
            {t(`home.testimonial.slides.${item.meta}.description`)}
          </p>
          <div className={styles.author}>
            <div className={styles.authorThumb}>
              <img src={item.authorThumbImg} alt="author thumb image" />
            </div>
            <div className={styles.authorContent}>
              <h6>{t(`home.testimonial.slides.${item.meta}.author`)}</h6>
              <span>{t(`home.testimonial.slides.${item.meta}.date`)}</span>
            </div>
          </div>
        </div>
      </CommonAnimation>
    </>
  );
};

export default BlogItem;
