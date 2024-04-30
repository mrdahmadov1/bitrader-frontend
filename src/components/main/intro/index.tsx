import { Link } from 'react-router-dom';
import { socialMediaLinks } from '@/constants/main/intro';
import styles from './assets/css/styles.module.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';
import CommonAnimation from '@/components/common/commonAnimation';

const IntroSection = () => {
  const { t } = useTranslation();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className={`${styles.intro}`}>
        <div className={`d-none d-lg-block ${styles.bg}`}>
          <img
            src={
              currentTheme === 'light'
                ? 'https://thetork.com/demos/html/bitrader/assets/images/banner/home1/bg.png'
                : 'https://thetork.com/demos/html/bitrader/assets/images/banner/home1/bg-dark.png'
            }
            alt="bg image"
          />
        </div>
        <div className={styles.container}>
          <div className="container">
            <CommonAnimation
              variants={variants1}
              className={`col col-12 col-md-7 col-lg-6 ${styles.content}`}
            >
              <div className={styles.imgCoin}>
                <img
                  src={'https://thetork.com/demos/html/bitrader/assets/images/banner/home1/3.png'}
                  alt="coin image"
                />
              </div>
              <h1 className={styles.title}>
                {t('home.intro.title')} <span>{t('home.intro.titleSpan')}</span>
              </h1>
              <p className={styles.description}>{t('home.intro.description')}</p>
              <div className={styles.btnGroup}>
                <Link to="/login" className={styles.btnStart}>
                  {t('home.intro.btnStart')}
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="https://youtube.com" className={styles.btnWatch}>
                  <i className="bi bi-play-circle"></i>
                  {t('home.intro.btnWatch')}
                </Link>
              </div>
              <div className={styles.social}>
                <p>{t('home.intro.socialTitle')}</p>
                <ul className={styles.socialLinkList}>
                  {socialMediaLinks.map((link, index) => (
                    <li key={index} className={styles.socialLinkItem}>
                      <Link to={link.url}>
                        <i className={`bi ${link.icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </CommonAnimation>
            <div className={`col col-12 col-md-5 col-lg-6 ${styles.hero}`}>
              <img
                src={'https://thetork.com/demos/html/bitrader/assets/images/banner/home1/1.png'}
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
