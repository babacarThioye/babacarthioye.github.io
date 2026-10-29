import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations } from './translations'
import { pageCopy } from '../features/content/pageCopy'

const storedLanguage = typeof window === 'undefined' ? 'en' : localStorage.getItem('portfolio-language')

void i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: { ...translations.fr, content: pageCopy.fr } },
    en: { translation: { ...translations.en, content: pageCopy.en } },
  },
  lng: storedLanguage === 'fr' ? 'fr' : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnNull: false,
})

export default i18n
