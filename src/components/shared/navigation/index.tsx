import MobileNavigation from "./mobile";
import DesktopNavigation from "./desktop";
import styles from "./assets/css/styles.module.css";

const Navigation = () => {
  return (
    <>
      <div className={styles.desktop}>
        <DesktopNavigation />
      </div>
      <div className={styles.mobile}>
        <MobileNavigation />
      </div>
    </>
  );
};

export default Navigation;
