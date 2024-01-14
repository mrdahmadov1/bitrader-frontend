import logoDark from "../../../assets/images/logo-dark.png";
import styles from "./assets/css/styles.module.css";

const Header = () => {
  return (
    <>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className="container">
          <div className={styles.container}>
            <div className="col col-2 text-start">
              <div className={styles.logo}>
                <img src={logoDark} alt="logo-dark" />
              </div>
            </div>
            <div className="col col-8 text-center">nav list</div>
            <div className="col col-2 text-end">
              <button className={styles.btnJoin}>join now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
