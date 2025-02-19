import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./translate/en.json"
import ru from "./translate/ru.json"


const resources = {
  en:{
    translation:en
  },
  ru:{
    translation:ru
  }
}


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },

  });

export default i18n;