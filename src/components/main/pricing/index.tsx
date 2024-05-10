import { useTranslation } from 'react-i18next';
import styles from './assets/css/styles.module.css';
import PlanItem from './planItem';
import { planList } from '@/constants/main/pricing';
import shape1 from './assets/images/shape-1.png';

const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.shape1}>
            <img src={shape1} alt="shape image" />
          </div>
          <div className={styles.shape2}>
            <span></span>
          </div>
          <header className={styles.header}>
            <h2 className={styles.title}>
              {t('home.pricing.titleLeft')}
              <span>{t('home.pricing.titleSpan')}</span>
              {t('home.pricing.titleRight')}
            </h2>
            <p className={styles.description}>{t('home.pricing.description')}</p>
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
