import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import checkDarkImg from "./assets/images/check-dark.svg";
import { PlanItemProps } from "@/models/IPlanItemProps";
import CommonAnimation from "@/components/common/commonAnimation";
import { useTranslation } from "react-i18next";

const PlanItem: React.FC<PlanItemProps> = ({ item }) => {
  const { t } = useTranslation();

  const offerList = t(`home.pricing.planList.${item.title}.offerList`, {
    returnObjects: true,
  }) as string[];

  const variants1 = {
    hidden: {
      opacity: 0,
      x: item.isVertical ? item.variant : 0,
      y: item.isVertical ? 0 : item.variant,
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <li className="col-12 col-md-6 col-lg-4">
        <CommonAnimation
          variants={variants1}
          className={`${styles.planItem} ${
            item.price === 149 ? styles.active : null
          }`}
        >
          <div className={styles.planTop}>
            <h6>{item.title}</h6>
            <h3>
              ${item.price}/<span>{t("home.pricing.planTitleSpan")}</span>
            </h3>
          </div>
          <div className={styles.planMiddle}>
            <ul className={styles.offerList}>
              {offerList.map((offer: string, index: number) => (
                <li key={index} className={styles.offerItem}>
                  <span>
                    <img src={checkDarkImg} alt="check dark image" />
                  </span>
                  {offer}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.planBottom}>
            <Link to="/register" className={styles.btnChoose}>
              {t("home.pricing.btnChoose")}
            </Link>
          </div>
        </CommonAnimation>
      </li>
    </>
  );
};

export default PlanItem;
