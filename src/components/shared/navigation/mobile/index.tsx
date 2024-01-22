import { useState } from "react";
import { NavLink } from "react-router-dom";
import { handleToggler } from "../../../../helpers/handleToggler";
import styles from "./assets/css/styles.module.css";
import { INavItem } from "../../../../models/INavItem";
import { mainNavItems } from "../../../../constants/shared/navigation";
import { useTranslation } from "react-i18next";

const MobileNavigation = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);

  const renderSubNav = (subItems: INavItem[]) => {
    return (
      <ul
        className={`${styles.subNavList} ${isOpenSubMenu ? styles.active : ""}`}
      >
        {subItems.map((item, index) => (
          <li className={styles.subNavItem} key={index}>
            <NavLink to={item.to}>
              {t(`shared.header.subNavList.${item.label}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <button
        onClick={() => handleToggler(isOpenMenu, setIsOpenMenu)}
        className={styles.btnToggle}
      >
        <i className="bi bi-list"></i>
      </button>

      <div className={`container `}>
        <ul className={`${styles.navList} ${isOpenMenu ? styles.active : ""}`}>
          {mainNavItems.map((item, index) => (
            <li className={styles.navItem} key={index}>
              {item.subItems ? (
                <span
                  className={`d-flex justify-content-between align-items-center`}
                  onClick={() => handleToggler(isOpenSubMenu, setIsOpenSubMenu)}
                >
                  <p>{t(`shared.header.navList.${item.label}`)}</p>
                  <i
                    className={`bi bi-chevron-down ${
                      isOpenSubMenu ? styles.active : null
                    }`}
                  ></i>
                </span>
              ) : (
                <NavLink to={item.to}>
                  {t(`shared.header.navList.${item.label}`)}
                </NavLink>
              )}

              {item.subItems && renderSubNav(item.subItems)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
