import { NavLink } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import { INavItem } from "@/models/INavItem";
import { mainNavItems } from "@/constants/shared/navigation";
import { useTranslation } from "react-i18next";

const DesktopNavigation = () => {
  const { t } = useTranslation();

  const renderSubNav = (subItems: INavItem[]) => (
    <ul className={styles.subNavList}>
      {subItems.map((item, index) => (
        <li className={styles.subNavItem} key={index}>
          <NavLink to={item.to}>
            {t(`shared.header.subNavList.${item.label}`)}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className={styles.navList}>
      {mainNavItems.map((item, index) => (
        <li className={styles.navItem} key={index}>
          {item.subItems ? (
            <span>
              <p>{t(`shared.header.navList.${item.label}`)}</p>
              <i className="bi bi-chevron-down"></i>
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
  );
};

export default DesktopNavigation;
