import styles from "./assets/css/styles.module.css";
import shapeImg from "./assets/images/shape.png";
import percentage1Img from "./assets/images/percentage-1.png";
import thumb1Img from "./assets/images/thumb-1.png";
import { useTranslation } from "react-i18next";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Feature = () => {
  const { t } = useTranslation();

  const animateSection = (controls: AnimationControls, inView: boolean) => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

  const [ref1, inView1] = useInView({ triggerOnce: false });
  const controls1 = useAnimation();

  const [ref2, inView2] = useInView({ triggerOnce: false });
  const controls2 = useAnimation();

  const [ref3, inView3] = useInView({ triggerOnce: false });
  const controls3 = useAnimation();

  const [ref4, inView4] = useInView({ triggerOnce: false });
  const controls4 = useAnimation();

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    animateSection(controls1, inView1);
    animateSection(controls2, inView2);
    animateSection(controls3, inView3);
    animateSection(controls4, inView4);
  }, [
    controls1,
    inView1,
    controls2,
    inView2,
    controls3,
    inView3,
    controls4,
    inView4,
  ]);

  return (
    <section className={styles.feature}>
      <div className={`container ${styles.container}`}>
        <div className="col-md-6 col-lg-5">
          <motion.div
            initial="hidden"
            animate={controls4}
            variants={variants1}
            ref={ref4}
            className={styles.content}
          >
            <header className={styles.contentHeader}>
              <h2 className={styles.contentTitle}>
                <span>{t("home.feature.contentTitleSpan")}</span>
                {t("home.feature.contentTitle")}
              </h2>
              <p className={styles.contentDescription}>
                {t("home.feature.contentDescription")}
              </p>
            </header>
            <ul className={styles.contentNavList}>
              <li className={`${styles.contentNavItem} ${styles.active}`}>
                <h6>{t("home.feature.contentNavList.navItem1")}</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>{t("home.feature.contentNavList.navItem2")}</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>{t("home.feature.contentNavList.navItem3")}</h6>
              </li>
              <li className={styles.contentNavItem}>
                <h6>{t("home.feature.contentNavList.navItem4")}</h6>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className={styles.thumb}>
            <motion.div
              initial="hidden"
              animate={controls1}
              variants={variants2}
              ref={ref1}
              className={styles.thumbContentTop}
            >
              <div className={styles.thumbContentTopImg}>
                <img src={percentage1Img} alt="thumb content image" />
              </div>
              <p className={styles.thumbContentDescription}>
                {t("home.feature.thumbDescription1")}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls3}
              variants={variants2}
              ref={ref3}
              className={styles.thumbImg}
            >
              <img src={thumb1Img} alt="thumb image" />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls2}
              variants={variants2}
              ref={ref2}
              className={styles.thumbContentBottom}
            >
              <h3 className={styles.thumbContentTitle}>
                <CountUp enableScrollSpy={true} duration={3} end={10} />M
              </h3>
              <p className={styles.thumbContentDescription}>
                {t("home.feature.thumbDescription2")}
              </p>
            </motion.div>
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
