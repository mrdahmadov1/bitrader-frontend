import styles from "./assets/css/styles.module.css";
import shapeImg from "./assets/images/shape.png";
import percentage1Img from "./assets/images/percentage-1.png";
import thumb1Img from "./assets/images/thumb-1.png";
import { useTranslation } from "react-i18next";

const Feature = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.feature}>
      <div className={`container ${styles.container}`}>
        <div className="col-md-6 col-lg-5">
          <div className={styles.content}>
            <header className={styles.contentHeader}>
              <h2 className={styles.contentTitle}>
                <span>{t("home.feature.contentTitleSpan")}</span>
                {t("home.feature.contentTitle")}
              </h2>
              <p className={styles.contentDescription}>
                {t("home.feature.contentDescription")}
              </p>
            </header>
            <ul className={styles.contentNavList}>
              <li className={`${styles.contentNavItem} ${styles.active}`}>
                <h6>{t("home.feature.contentNavList.navItem1")}</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>{t("home.feature.contentNavList.navItem2")}</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>{t("home.feature.contentNavList.navItem3")}</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>{t("home.feature.contentNavList.navItem4")}</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className={styles.thumb}>
            <div className={styles.thumbContentTop}>
              <div className={styles.thumbContentTopImg}>
                <img src={percentage1Img} alt="thumb content image" />
              </div>
              <p className={styles.thumbContentDescription}>
                {t("home.feature.thumbDescription1")}
              </p>
            </div>
            <div className={styles.thumbImg}>
              <img src={thumb1Img} alt="thumb image" />
            </div>
            <div className={styles.thumbContentBottom}>
              <h3 className={styles.thumbContentTitle}>10M</h3>
              <p className={styles.thumbContentDescription}>
                {t("home.feature.thumbDescription2")}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.shape}>
          <img src={shapeImg} alt="shape image" />
        </div>

        <div className={styles.shape2}>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Feature;
