import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const language = localStorage.getItem('language') || 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    lng: language,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    },
    // Add a cache-busting query parameter
    backend: {
      loadPath: '/locales/{{lng}}.json?v=1.0.1',
    }
  });

// Set the document language and direction on initialization
const setLanguageDirection = (lang) => {
  const htmlElement = document.documentElement;
  htmlElement.lang = lang;
  htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('language', lang);
};

setLanguageDirection(language);

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  setLanguageDirection(lng);
});

export default i18n;
