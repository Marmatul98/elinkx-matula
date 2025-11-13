import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./locales/cs.json";

const resources = {
  cs: {
    translation: translations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "cs",
  fallbackLng: "cs",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
