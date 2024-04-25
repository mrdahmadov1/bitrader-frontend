import { useTranslation } from "react-i18next";
import styles from "./assets/css/styles.module.css";
import shapeImg from "./assets/images/shape1.png";
import shapeImg2 from "./assets/images/shape2.png";
import shapeImg3 from "./assets/images/shape3.png";
import thumbImg from "./assets/images/thumb.png";
import CommonAnimation from "@/components/common/commonAnimation";

const Newsletter = () => {
  const { t } = useTranslation();

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.shape1}>
            <img src={shapeImg} alt="shape1" />
          </div>
          <div className={styles.shape2}>
            <img src={shapeImg2} alt="shape2" />
          </div>
          <div className={styles.shape3}>
            <img src={shapeImg3} alt="shape3" />
          </div>
          <CommonAnimation variants={variants} className={styles.content}>
            <div className={styles.thumb}>
              <img src={thumbImg} alt="thumb image" />
            </div>
            <form className={styles.form}>
              <header className={styles.header}>
                <h2 className={styles.title}>
                  <span>{t("home.newsletter.titleSpan")}</span>
                  {t("home.newsletter.title")}
                </h2>
                <p className={styles.description}>
                  {t("home.newsletter.description")}
                </p>
              </header>
              <div className={styles.formInner}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder={t("home.newsletter.inputPlaceholder")}
                />
                <button type="submit" className={styles.btnSubmit}>
                  {t(`home.newsletter.btnSubmit`)}
                </button>
              </div>
            </form>
          </CommonAnimation>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
