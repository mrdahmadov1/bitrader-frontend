import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import thumbImg from "./assets/images/thumb.png";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import CommonAnimation from "@/components/common/commonAnimation";

const AboutSection = () => {
  const { t } = useTranslation();

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section className={`${styles.about}`}>
      <div className={`container ${styles.container}`}>
        <div className="col col-12 col-lg-6">
          <div className={styles.thumb}>
            <CommonAnimation
              variants={variants1}
              className={`${styles.thumbContent} ${styles.thumbTopLeft}`}
            >
              <h3 className={styles.thumbTitle}>
                <span>
                  <CountUp enableScrollSpy={true} duration={3} end={10} />
                </span>
                {t("home.about.thumbTitleTop")}
              </h3>
              <p className={styles.thumbDescription}>
                {t("home.about.thumbDescriptionTop")}
              </p>
            </CommonAnimation>

            <CommonAnimation variants={variants1} className={styles.thumbImg}>
              <img src={thumbImg} alt="thumb image" />
            </CommonAnimation>

            <CommonAnimation
              variants={variants1}
              className={`${styles.thumbContent} ${styles.thumbBottomRight}`}
            >
              <h3 className={styles.thumbTitle}>
                <span>
                  <CountUp enableScrollSpy={true} duration={1} end={25} />
                </span>
                {t("home.about.thumbTitleBottom")}
              </h3>
              <p className={styles.thumbDescription}>
                {t("home.about.thumbDescriptionBottom")}
              </p>
            </CommonAnimation>
          </div>
        </div>
        <div className="col col-12 col-lg-6 overflow-x-hidden">
          <CommonAnimation variants={variants2} className={styles.content}>
            <h2 className={styles.contentTitle}>
              <span>{t("home.about.contentTitleSpan")}</span>
              {t("home.about.contentTitle")}
            </h2>
            <p className={styles.contentDescription}>
              {t("home.about.contentDescription")}
            </p>
            <Link to="/about" className={styles.btnMore}>
              {t("home.about.btnMore")}
            </Link>
          </CommonAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
