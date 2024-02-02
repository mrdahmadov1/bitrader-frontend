import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import CommonAnimation from "../../../../common/commonAnimation";
import { RootState } from "../../../../../store/configureStore";
import { useSelector } from "react-redux";
import { ServiceItemProps } from "../../../../../models/IServiceItemProps";
import { useTranslation } from "react-i18next";

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const { t } = useTranslation();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <li className="col-sm-6 col-lg-4">
        <Link to="services">
          <CommonAnimation variants={variants} className={styles.serviceItem}>
            <div className={styles.serviceImg}>
              <img
                src={
                  currentTheme === "dark"
                    ? service.images.dark
                    : service.images.light
                }
                alt="service image"
              />
            </div>
            <h5 className={styles.serviceTitle}>
              {t(`home.service.serviceList.${service.title}.title`)}
            </h5>
            <p className={styles.serviceDescription}>
              {t(`home.service.serviceList.${service.title}.description`)}
            </p>
          </CommonAnimation>
        </Link>
      </li>
    </>
  );
};

export default ServiceItem;
