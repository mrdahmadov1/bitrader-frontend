import shapeImg from "./assets/images/shape-1.png";
import styles from "./assets/css/styles.module.css";
import RoadmapItem from "./roadmapItem";
import { roadmapList } from "../../../../constants/main/home/roadmap";
import { useTranslation } from "react-i18next";

const RoadmapSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.roadmap}>
        <div className="container">
          <div className={styles.shape1}>
            <img src={shapeImg} alt="shape image" />
          </div>
          <div className={styles.shape2}>
            <span></span>
          </div>
          <header className={styles.header}>
            <h2 className={styles.title}>
              {t("home.roadmap.title")}
              <span>{t("home.roadmap.titleSpan")}</span>
            </h2>
            <p className={styles.description}>
              {t("home.roadmap.description")}
            </p>
          </header>
          <ul className={styles.roadmapList}>
            {roadmapList.map((item, index) => (
              <RoadmapItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default RoadmapSection;
