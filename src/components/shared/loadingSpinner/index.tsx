import styles from './assets/css/styles.module.css';

const LoadingSpinner = () => {
  return (
    <>
      <div className={styles.spinner}>
        <img
          src={'https://thetork.com/demos/html/bitrader/assets/images/logo/preloader.png'}
          alt="favicon"
        />
      </div>
    </>
  );
};

export default LoadingSpinner;
