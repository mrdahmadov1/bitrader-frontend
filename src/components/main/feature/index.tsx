import styles from './assets/css/styles.module.css';
import { useTranslation } from 'react-i18next';
// import CountUp from "react-countup";
import CommonAnimation from '@/components/common/commonAnimation';
import { useState } from 'react';
import { navContent } from '@/constants/main/feature';
import { FeatureNavItem } from '@/models/IFeatureNavItem';

const FeatureSection = () => {
  const { t } = useTranslation();
  const [content, setNavContent] = useState(navContent[1]);

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const handleNavContent = (selectedContent: FeatureNavItem) => {
    setNavContent(selectedContent);
  };

  return (
    <section className={styles.feature}>
      <div className={`container ${styles.container}`}>
        <div className="col-md-6 col-lg-5">
          <CommonAnimation variants={variants1} className={styles.content}>
            <header className={styles.contentHeader}>
              <h2 className={styles.contentTitle}>
                <span>{t('home.feature.contentTitleSpan')}</span>
                {t('home.feature.contentTitle')}
              </h2>
              <p className={styles.contentDescription}>{t('home.feature.contentDescription')}</p>
            </header>
            <ul className={styles.contentNavList}>
              {navContent.map((navItem) => (
                <li
                  key={navItem.id}
                  className={`${styles.contentNavItem} ${
                    content.id === navItem.id ? styles.active : ''
                  }`}
                  onClick={() => handleNavContent(navItem)}
                >
                  <h6>{t(`home.feature.contentNavList.navItem${navItem.id}`)}</h6>
                </li>
              ))}
            </ul>
          </CommonAnimation>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className={styles.thumb}>
            <CommonAnimation variants={variants2} className={styles.thumbContentTop}>
              <div className={styles.thumbContentTopImg}>
                <img src={content.percentageImg} alt="thumb content image" />
              </div>
              <p className={styles.thumbContentDescription}>
                {t('home.feature.thumbDescription1')}
              </p>
            </CommonAnimation>
            <CommonAnimation variants={variants2} className={styles.thumbImg}>
              <img src={content.thumbImg} alt="thumb image" />
            </CommonAnimation>
            <CommonAnimation variants={variants2} className={styles.thumbContentBottom}>
              <h3 className={styles.thumbContentTitle}>
                {/* <CountUp
                  enableScrollSpy={true}
                  duration={1}
                  end={content.loanValue}
                /> */}
                {content.loanValue}M
              </h3>
              <p className={styles.thumbContentDescription}>
                {t('home.feature.thumbDescription2')}
              </p>
            </CommonAnimation>
          </div>
        </div>

        <div className={styles.shape}>
          <img
            src={'https://thetork.com/demos/html/bitrader/assets/images/feature/shape/1.png'}
            alt="shape image"
          />
        </div>

        <div className={styles.shape2}>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
