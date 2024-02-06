import { useTranslation } from "react-i18next";
import { serviceList } from "../../../../constants/main/home/service";
import styles from "./assets/css/styles.module.css";
import ServiceItem from "./serviceItem";

const ServiceSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.service}>
        <div className="container">
          <header className={styles.header}>
            <h2 className={styles.title}>
              <span>{t("home.service.titleSpan")}</span>
              {t("home.service.title")}
            </h2>
            <p className={styles.description}>
              {t("home.service.description")}
            </p>
          </header>
          <ul className="row g-4 align-items-stretch">
            {serviceList.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
