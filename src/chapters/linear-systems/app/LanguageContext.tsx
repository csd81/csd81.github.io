/**
 * Adapter: chapter 03 components use `useI18n()` → { lang, setLang, toggleLang,
 * t(key, vars), pick(Bilingual) }. We keep this chapter's own `uiStrings` table
 * and source the active language from the shared LanguageProvider.
 */
import { useCallback } from 'react';
import { useLang as useSharedLang } from '../../../shared/providers/LanguageProvider';
import type { Bilingual, Lang } from '../lib/types';
import { uiStrings } from '../content/uiStrings';

export function useI18n() {
  const { lang, setLang, toggle } = useSharedLang();

  const pick = useCallback((value: Bilingual) => value[lang as Lang], [lang]);
  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const entry = uiStrings[key];
      let str = entry ? entry[lang as Lang] : key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
        }
      }
      return str;
    },
    [lang],
  );

  return { lang: lang as Lang, setLang, toggleLang: toggle, t, pick };
}
