import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./assets/css/styles.module.css";
import thumbImg from "./assets/images/thumb.png";

const AboutSection = () => {
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
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
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
    <section className={`wrapper ${styles.wrapper}`}>
      <div className={`container ${styles.container}`}>
        <div className="col col-12 col-lg-6">
          <div className={styles.thumb}>
            <motion.div
              initial="hidden"
              animate={controls1}
              variants={variants1}
              ref={ref1}
              className={`${styles.thumbContent} ${styles.thumbTopLeft}`}
            >
              <h3 className={styles.thumbTitle}>
                <span>10</span> years
              </h3>
              <p className={styles.thumbDescription}>consulting experience</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls3}
              variants={variants1}
              ref={ref3}
              className={styles.thumbImg}
            >
              <img src={thumbImg} alt="thumb image" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls2}
              variants={variants1}
              ref={ref2}
              className={`${styles.thumbContent} ${styles.thumbBottomRight}`}
            >
              <h3 className={styles.thumbTitle}>
                <span>25</span>k+
              </h3>
              <p className={styles.thumbDescription}>satisfied customers</p>
            </motion.div>
          </div>
        </div>
        <div className="col col-12 col-lg-6">
          <motion.div
            initial="hidden"
            animate={controls4}
            variants={variants2}
            ref={ref4}
            className={styles.content}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
