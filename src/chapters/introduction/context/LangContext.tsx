/**
 * Adapter: chapter 01 components expect a key-based `t(StringKey)` plus
 * `lang/setLang/toggle`. We keep this chapter's own `strings` table but source
 * the active language from the shared, app-wide LanguageProvider so the global
 * nav toggle controls it.
 */
import { useLang as useSharedLang } from '../../../shared/providers/LanguageProvider';
import { strings, type StringKey } from '../i18n/strings';

export type Lang = 'en' | 'hu';

export function useLang() {
  const { lang, setLang, toggle } = useSharedLang();
  const t = (key: StringKey): string => {
    const table = strings[lang] as Record<string, string>;
    return table[key] ?? (strings.en as Record<string, string>)[key] ?? key;
  };
  return { lang: lang as Lang, setLang, toggle, t };
}
