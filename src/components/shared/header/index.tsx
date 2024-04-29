import { Link } from 'react-router-dom';
import styles from './assets/css/styles.module.css';
import Navigation from '../navigation';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth < 768 ? 100 : 200;
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.container}>
            <div className="col col-5 col-lg-3 text-start">
              <div className={styles.logo}>
                <Link to="">
                  <img
                    src={
                      currentTheme === 'light'
                        ? 'https://thetork.com/demos/html/bitrader/assets/images/logo/logo.png'
                        : 'https://thetork.com/demos/html/bitrader/assets/images/logo/logo-dark.png'
                    }
                    alt="logo-dark"
                  />
                </Link>
              </div>
            </div>
            <div className="col col-lg-3 d-none d-md-block text-end order-lg-3 ">
              <button className={styles.btnJoin}>
                <Link to="/register">{t('shared.header.btnJoin')}</Link>
              </button>
            </div>
            <div className="col col-2 col-md-1 col-lg-6 col-xl-5  text-end text-lg-center">
              <Navigation />
            </div>
          </div>
        </div>
      </header>
      {scrolled && (
        <button
          className={styles.scrollUp}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <i className="bi bi-box-arrow-in-up"></i>
        </button>
      )}
    </>
  );
};

export default Header;
