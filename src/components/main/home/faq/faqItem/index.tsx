import { useTranslation } from "react-i18next";
import styles from "./assets/css/styles.module.css";
import { useState } from "react";

interface IFaqItemProps {
  question: string;
}

const FaqItem: React.FC<IFaqItemProps> = ({ question }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.item} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.title}>
        {t(`home.faq.faqList.${question}.title`)}
        <i className="bi bi-chevron-down" />
      </div>
      <p className={styles.description}>
        {t(`home.faq.faqList.${question}.description`)}
      </p>
    </div>
  );
};

export default FaqItem;
