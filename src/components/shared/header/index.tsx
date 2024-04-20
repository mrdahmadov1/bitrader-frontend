import { Link } from "react-router-dom";
import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";
import styles from "./assets/css/styles.module.css";
import Navigation from "../navigation";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "@/store/configureStore";
import { useEffect, useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className="container">
          <div className={styles.container}>
            <div className="col col-5 col-lg-3 text-start">
              <div className={styles.logo}>
                <Link to="">
                  <img
                    src={currentTheme === "light" ? logoDark : logoLight}
                    alt="logo-dark"
                  />
                </Link>
              </div>
            </div>
            <div className="col col-lg-3 d-none d-md-block text-end order-lg-3 ">
              <button className={styles.btnJoin}>
                <Link to="/register">{t("shared.header.btnJoin")}</Link>
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
              behavior: "smooth",
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
