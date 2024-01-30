import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import thumbImg from "./assets/images/thumb.png";

const AboutSection = () => {
  return (
    <section className={`wrapper ${styles.wrapper}`}>
      <div className={`container ${styles.container}`}>
        <div className="col col-12 col-lg-6">
          <div className={styles.thumb}>
            <div className={`${styles.thumbContent} ${styles.thumbTopLeft}`}>
              <h3 className={styles.thumbTitle}>
                <span>10</span> years
              </h3>
              <p className={styles.thumbDescription}>consulting experience</p>
            </div>
            <div className={styles.thumbImg}>
              <img src={thumbImg} alt="thumb image" />
            </div>
            <div
              className={`${styles.thumbContent} ${styles.thumbBottomRight}`}
            >
              <h3 className={styles.thumbTitle}>
                <span>25</span>k+
              </h3>
              <p className={styles.thumbDescription}>satisfied customers</p>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-6">
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>
              meet <span>our company</span> unless miss the opportunity
            </h2>
            <p className={styles.contentDescription}>
              Hey there! So glad you stopped by to Meet Our Company. Don't miss
              out on this opportunity to learn about what we do and the amazing
              team that makes it all happen! Our company is all about creating
              innovative solutions and providing top-notch services to our
              clients. From start to finish, we're dedicated to delivering
              results that exceed expectations.
            </p>
            <Link to="about" className={styles.btnMore}>
              explore more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
