import { NavLink } from "react-router-dom";
import { handleToggler } from "../../../helpers";
import { useState } from "react";
import styles from "./assets/css/styles.module.css";

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);

  return (
    <>
      <div className={styles.desktop}></div>

      <div className={styles.mobile}>
        <button
          onClick={() => handleToggler(isOpenMenu, setIsOpenMenu)}
          className={styles.btnToggle}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className={`container `}>
          <ul
            className={`${styles.navList} ${isOpenMenu ? styles.active : ""}`}
          >
            <li className={styles.navItem}>
              <NavLink to="home">home</NavLink>
            </li>
            <li className={styles.navItem}>
              <span
                className="d-flex justify-content-between align-items-center"
                onClick={() => handleToggler(isOpenSubMenu, setIsOpenSubMenu)}
              >
                <p>about</p>
                <i
                  className={`bi bi-chevron-down ${
                    isOpenSubMenu ? styles.active : null
                  }`}
                ></i>
              </span>

              <ul
                className={`${styles.subNavList} ${
                  isOpenSubMenu ? styles.active : ""
                }`}
              >
                <li className={styles.subNavItem}>
                  <NavLink to="about">about us</NavLink>
                </li>
                <li className={styles.subNavItem}>
                  <NavLink to="about/team">team</NavLink>
                </li>
                <li className={styles.subNavItem}>
                  <NavLink to="about/price">price</NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <NavLink to="blogs">blogs</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="services">services</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="contact">contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
