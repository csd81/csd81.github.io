/**
 * Adapter: chapter 04 components use `useLanguage()` → { lang, setLang, toggle }.
 * The shared LanguageProvider is a superset (adds `t`), so we re-export it under
 * the expected name and keep this chapter's `Lang` type.
 */
export { useLang as useLanguage } from '../../../shared/providers/LanguageProvider';
export type { Lang } from '../../../shared/providers/LanguageProvider';
