import styles from "./assets/css/styles.module.css";
import shapeImg from "./assets/images/shape.png";
import percentage1Img from "./assets/images/percentage-1.png";
import thumb1Img from "./assets/images/thumb-1.png";

const Feature = () => {
  return (
    <section className={styles.feature}>
      <div className={`container ${styles.container}`}>
        <div className="col-md-6 col-lg-5">
          <div className={styles.content}>
            <header className={styles.contentHeader}>
              <h2 className={styles.contentTitle}>
                <span>benefits</span> we offer
              </h2>
              <p className={styles.contentDescription}>
                Unlock the full potential of our product with our amazing
                features and top-notch.
              </p>
            </header>
            <ul className={styles.contentNavList}>
              <li className={`${styles.contentNavItem} ${styles.active}`}>
                <h6>Lending money for investment of your new projects</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>more Security and control over money from the rest</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>
                  Mobile payment is more flexible and easy for all investors
                </h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>
                  all transaction is kept free for the member of pro traders
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className={styles.thumb}>
            <div className={styles.thumbContentTop}>
              <div className={styles.thumbContentTopImg}>
                <img src={percentage1Img} alt="thumb content image" />
              </div>
              <p className={styles.thumbContentDescription}>
                interest rate for loan
              </p>
            </div>
            <div className={styles.thumbImg}>
              <img src={thumb1Img} alt="thumb image" />
            </div>
            <div className={styles.thumbContentBottom}>
              <h3 className={styles.thumbContentTitle}>10M</h3>
              <p className={styles.thumbContentDescription}>
                avialable for loan
              </p>
            </div>
          </div>
        </div>

        <div className={styles.shape}>
          <img src={shapeImg} alt="shape image" />
        </div>

        <div className={styles.shape2}>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Feature;
