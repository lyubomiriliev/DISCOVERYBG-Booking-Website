import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import bgTranslation from "./locale/bg.json";
import enTranslation from "./locale/en.json";
import plTranslation from "./locale/pl.json";

i18n.use(initReactI18next).init({
  resources: {
    bg: { translation: bgTranslation },
    en: { translation: enTranslation },
    pl: { translation: plTranslation },
  },
  lng: "bg",
  fallbackLng: "bg",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
