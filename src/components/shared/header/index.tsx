import { Link } from "react-router-dom";
import logoDark from "../../../assets/images/logo-dark.png";
import styles from "./assets/css/styles.module.css";
import Navigation from "../navigation";

const Header = () => {
  return (
    <>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className="container">
          <div className={styles.container}>
            <div className="col col-5 col-lg-3 text-start">
              <div className={styles.logo}>
                <Link to="">
                  <img src={logoDark} alt="logo-dark" />
                </Link>
              </div>
            </div>
            <div className="col col-lg-2 d-none d-md-block text-end order-lg-3 ">
              <button className={styles.btnJoin}>
                <Link to="register">join now</Link>
              </button>
            </div>
            <div className="col col-2 col-md-1 col-lg-7 text-end text-lg-center">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
