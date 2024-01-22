import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/translations.json";
import ru from "../locales/ru/translations.json";
import az from "../locales/az/translations.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translations: JSON.parse(JSON.stringify(en)),
      },
      ru: {
        translations: JSON.parse(JSON.stringify(ru)),
      },
      az: {
        translations: JSON.parse(JSON.stringify(az)),
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

i18n.languages = ["en", "ru", "az"];

export default i18n;
