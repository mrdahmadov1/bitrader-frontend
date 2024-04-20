import { useTranslation } from "react-i18next";
import shapeImg from "../roadmap/assets/images/shape-1.png";
import styles from "./assets/css/styles.module.css";
import FaqItem from "./faqItem";
import thumbImg from "./assets/images/thumb.png";
import CommonAnimation from "@/components/common/commonAnimation";
import { faqList } from "@/constants/main/faq";

const FAQSection = () => {
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
    <>
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.shape1}>
            <img src={shapeImg} alt="shape image" />
          </div>
          <header className={styles.header}>
            <h2 className={styles.title}>
              <span>{t("home.faq.titleSpan")}</span>
              {t("home.faq.title")}
            </h2>
            <p className={styles.description}>{t("home.faq.description")}</p>
          </header>
          <div className="d-flex align-items-stretch justify-content-center flex-column flex-lg-row align-items-lg-center">
            <CommonAnimation variants={variants1} className="col col-lg-6">
              <ul className={styles.faqList}>
                {faqList.map((question, index) => (
                  <FaqItem key={index} question={question} />
                ))}
              </ul>
            </CommonAnimation>
            <CommonAnimation variants={variants2} className="col col-lg-6">
              <div className={styles.thumb}>
                <img src={thumbImg} alt="thumb image" />
              </div>
            </CommonAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
