import { Link } from "react-router-dom";
import coinImg from "./assets/images/coin.png";
import heroImg from "./assets/images/hero.png";
import { socialMediaLinks } from "../../../../constants/main/home/intro";
import styles from "./assets/css/styles.module.css";

const Intro = () => {
  return (
    <>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className="container">
          <div className={styles.container}>
            <div className={`col col-12 col-md-7 col-lg-6 ${styles.content}`}>
              <div className={styles.imgCoin}>
                <img src={coinImg} alt="coin image" />
              </div>
              <h1 className={styles.title}>
                invest your money with <span>higher return</span>
              </h1>
              <p className={styles.description}>
                Anyone can invest money to different currency to increase their
                earnings by the help of Bitrader through online.
              </p>
              <div className={styles.btnGroup}>
                <Link to="login" className={styles.btnStart}>
                  get started
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="https://youtube.com" className={styles.btnWatch}>
                  <i className="bi bi-play-circle"></i>
                  watch video
                </Link>
              </div>
              <div className={styles.social}>
                <p>follow us</p>
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
            </div>
            <div className={`col col-12 col-md-5 col-lg-6 ${styles.hero}`}>
              <img src={heroImg} alt="hero image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;