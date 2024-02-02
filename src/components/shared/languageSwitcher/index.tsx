import { useEffect, useState } from "react";
import i18n from "../../../utils/i18n";
import styles from "./assets/css/styles.module.css";
import en from "./assets/images/en.png";
import az from "./assets/images/az.png";
import ru from "./assets/images/ru.png";

const getLocalStorageLanguage = () =>
  localStorage.getItem("selectedLanguage") || languages[0];

const setLocalStorageLanguage = (language: string) =>
  localStorage.setItem("selectedLanguage", language);

const languages = ["en", "az", "ru"];
const flags = [en, az, ru];

const LanguageSwitcher = () => {
  const initialLanguage = getLocalStorageLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    setLocalStorageLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = () => {
    const nextLanguageIndex =
      (languages.indexOf(selectedLanguage) + 1) % languages.length;
    const nextLanguage = languages[nextLanguageIndex];
    setSelectedLanguage(nextLanguage);
  };

  return (
    <>
      <div
        className={styles.languageSwitcherContainer}
        onClick={handleLanguageChange}
      >
        <div className={styles.flag}>
          <img src={flags[languages.indexOf(selectedLanguage)]} alt="flag" />
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
