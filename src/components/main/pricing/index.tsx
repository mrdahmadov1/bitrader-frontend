import { useTranslation } from "react-i18next";
import shapeImg from "../roadmap/assets/images/shape-1.png";
import styles from "./assets/css/styles.module.css";
import PlanItem from "./planItem";
import { planList } from "@/constants/main/pricing";

const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.shape1}>
            <img src={shapeImg} alt="shape image" />
          </div>
          <div className={styles.shape2}>
            <span></span>
          </div>
          <header className={styles.header}>
            <h2 className={styles.title}>
              {t("home.pricing.titleLeft")}
              <span>{t("home.pricing.titleSpan")}</span>
              {t("home.pricing.titleRight")}
            </h2>
            <p className={styles.description}>
              {t("home.pricing.description")}
            </p>
          </header>
          <ul className={styles.planList}>
            {planList.map((item, index) => (
              <PlanItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
