import logo from "../../../../public/favicon.png";
import styles from "./assets/css/styles.module.css";

const LoadingSpinner = () => {
  return (
    <>
      <div className={styles.spinner}>
        <img src={logo} alt="favicon" />
      </div>
    </>
  );
};

export default LoadingSpinner;
