import { useLang as useSharedLang } from "../../../shared/providers/LanguageProvider";
import { t as translate, type UiKey } from "./ui";
import type { Bilingual } from "../content/types";

/**
 * Hook returning a translator bound to the current language. Language comes from
 * the shared LanguageProvider (unified nav toggle); the chapter's zustand store
 * is kept for progress/badges only.
 */
export function useT() {
  const { lang } = useSharedLang();
  const t = (key: UiKey) => translate(key, lang);
  const tb = <T,>(b: Bilingual<T>): T => b[lang];
  return { t, tb, lang };
}
