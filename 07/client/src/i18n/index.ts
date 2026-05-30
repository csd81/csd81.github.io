import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import hu from './hu.json';

export type Lang = 'en' | 'hu';
export const LANGS: Lang[] = ['en', 'hu'];
const STORAGE_KEY = 'numcalc-lang';

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'hu') return stored;
    if (navigator.language?.toLowerCase().startsWith('hu')) return 'hu';
  } catch {
    /* ignore */
  }
  return 'en';
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hu: { translation: hu },
  },
  lng: initialLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.setAttribute('lang', lng);
  } catch {
    /* ignore */
  }
});

document.documentElement.setAttribute('lang', i18n.language);

export default i18n;
