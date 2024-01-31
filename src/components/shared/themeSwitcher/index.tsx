import moonIcon from "./assets/images/moon.svg";
import sunIcon from "./assets/images/sun.svg";
import styles from "./assets/css/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/theme/themeSlice";
import { RootState, AppDispatch } from "../../../store/configureStore";

const ThemeSwitcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  return (
    <>
      <div
        onClick={() => dispatch(toggleTheme())}
        className={styles.themeSwitcherContainer}
      >
        <div className={styles.theme}>
          <img
            src={currentTheme === "light" ? sunIcon : moonIcon}
            alt="theme icon"
          />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
