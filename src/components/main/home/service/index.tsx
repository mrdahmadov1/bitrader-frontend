import { serviceList } from "../../../../constants/main/home/service";
import styles from "./assets/css/styles.module.css";
import ServiceItem from "./serviceItem";

const ServiceSection = () => {
  return (
    <>
      <section className={styles.service}>
        <div className="container">
          <header className={styles.header}>
            <h2 className={styles.title}>
              <span>services</span> we offer
            </h2>
            <p className={styles.description}>
              We offer the best services around - from installations to repairs,
              maintenance, and more!
            </p>
          </header>
          <ul className="row g-4 align-items-center">
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
