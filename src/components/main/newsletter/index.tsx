import { useTranslation } from 'react-i18next';
import styles from './assets/css/styles.module.css';
import CommonAnimation from '@/components/common/commonAnimation';

const Newsletter = () => {
  const { t } = useTranslation();

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.shape1}>
            <img
              src={'https://thetork.com/demos/html/bitrader/assets/images/cta/2.png'}
              alt="shape1"
            />
          </div>
          <div className={styles.shape2}>
            <img
              src={'https://thetork.com/demos/html/bitrader/assets/images/cta/5.png'}
              alt="shape2"
            />
          </div>
          <div className={styles.shape3}>
            <img
              src={'https://thetork.com/demos/html/bitrader/assets/images/cta/4.png'}
              alt="shape3"
            />
          </div>
          <CommonAnimation variants={variants} className={styles.content}>
            <div className={styles.thumb}>
              <img
                src={'https://thetork.com/demos/html/bitrader/assets/images/cta/3.png'}
                alt="thumb image"
              />
            </div>
            <form className={styles.form}>
              <header className={styles.header}>
                <h2 className={styles.title}>
                  <span>{t('home.newsletter.titleSpan')}</span>
                  {t('home.newsletter.title')}
                </h2>
                <p className={styles.description}>{t('home.newsletter.description')}</p>
              </header>
              <div className={styles.formInner}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder={t('home.newsletter.inputPlaceholder')}
                />
                <button type="submit" className={styles.btnSubmit}>
                  {t(`home.newsletter.btnSubmit`)}
                </button>
              </div>
            </form>
          </CommonAnimation>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
