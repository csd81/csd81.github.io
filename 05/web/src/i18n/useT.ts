import { useAppStore } from "../store/useAppStore";
import { t as translate, type UiKey } from "./ui";
import type { Bilingual } from "../content/types";

/** Hook returning a translator bound to the current language. */
export function useT() {
  const lang = useAppStore((s) => s.lang);
  const t = (key: UiKey) => translate(key, lang);
  const tb = <T,>(b: Bilingual<T>): T => b[lang];
  return { t, tb, lang };
}
