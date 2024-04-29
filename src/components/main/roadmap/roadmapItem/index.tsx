import { useTranslation } from 'react-i18next';
import { RoadmapItemProps } from '@/models/IRoadmapItemProps';
import CommonAnimation from '@/components/common/commonAnimation';
import styles from './assets/css/styles.module.css';

const RoadmapItem: React.FC<RoadmapItemProps> = ({ item }) => {
  const { t } = useTranslation();

  const variants1 = {
    hidden: { opacity: 0, x: item.variantX },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <CommonAnimation variants={variants1} className={`col-md-6 ${styles.roadmapItem}`}>
        <header className={styles.header}>
          <h3 className={styles.title}>{t(`home.roadmap.roadmapList.${item.title}.title`)}</h3>
          <span>{t(`home.roadmap.roadmapList.${item.title}.order`)}</span>
        </header>
        <p className={styles.description}>
          {t(`home.roadmap.roadmapList.${item.title}.description`)}
        </p>
      </CommonAnimation>
    </>
  );
};

export default RoadmapItem;
