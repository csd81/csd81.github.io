import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "hu";

/** A bilingual string. */
export type Bi = { en: string; hu: string };

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** pick the active side of a bilingual value */
  t: (b: Bi) => string;
}

const Ctx = createContext<LangCtx | null>(null);
const KEY = "min-lang";

function initialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(KEY) as Lang | null;
  if (saved === "en" || saved === "hu") return saved;
  return navigator.language?.toLowerCase().startsWith("hu") ? "hu" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(KEY, lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((l) => (l === "en" ? "hu" : "en")),
    []
  );
  const t = useCallback((b: Bi) => b[lang], [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle, t }),
    [lang, setLang, toggle, t]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be used within LanguageProvider");
  return c;
}
