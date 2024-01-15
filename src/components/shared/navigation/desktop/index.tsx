import { NavLink } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import { INavItem } from "../../../../models/INavItem";
import { mainNavItems } from "../../../../constants/shared/navigation";

const DesktopNavigation = () => {
  const renderSubNav = (subItems: INavItem[]) => (
    <ul className={styles.subNavList}>
      {subItems.map((item, index) => (
        <li className={styles.subNavItem} key={index}>
          <NavLink to={item.to}>{item.label}</NavLink>
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
              <p>{item.label}</p>
              <i className="bi bi-chevron-down"></i>
            </span>
          ) : (
            <NavLink to={item.to}>{item.label}</NavLink>
          )}

          {item.subItems && renderSubNav(item.subItems)}
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;
