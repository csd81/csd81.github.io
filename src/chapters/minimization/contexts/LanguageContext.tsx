/**
 * Adapter: chapter 08's LanguageContext API ({ lang, setLang, toggle, t(Bi) })
 * is identical to the shared LanguageProvider, so we simply re-export it.
 */
export { useLang, LanguageProvider } from '../../../shared/providers/LanguageProvider';
export type { Lang, Bi } from '../../../shared/providers/LanguageProvider';
