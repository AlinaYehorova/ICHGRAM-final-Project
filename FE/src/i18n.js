// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './translations/en';
import { ua } from './translations/ua';
import { ru } from './translations/ru';
import { es } from './translations/es';
import { fr } from './translations/fr';
// Добавьте здесь все необходимые переводы

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
    ru: { translation: ru },
    es: { translation: es },
    fr: { translation: fr },
    // Добавьте другие языки здесь
  },
  lng: 'en', // Начальный язык
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;