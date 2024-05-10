import { useTranslation } from 'react-i18next';
import styles from './assets/css/styles.module.css';
import CommonAnimation from '@/components/common/commonAnimation';
import thumb from './assets/images/thumb.png';
import shape1 from './assets/images/shape-2.png';
import shape2 from './assets/images/shape-3.png';
import shape3 from './assets/images/shape-1.png';

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
            <img src={shape1} alt="shape1" />
          </div>
          <div className={styles.shape2}>
            <img src={shape2} alt="shape2" />
          </div>
          <div className={styles.shape3}>
            <img src={shape3} alt="shape3" />
          </div>
          <CommonAnimation variants={variants} className={styles.content}>
            <div className={styles.thumb}>
              <img src={thumb} alt="thumb image" />
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
