import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { CodeLang } from './CodeBlock';

interface Ctx {
  lang: CodeLang;
  setLang: (l: CodeLang) => void;
}

const CodeLangContext = createContext<Ctx | null>(null);
const KEY = 'code-lang';
const DEFAULT: CodeLang = 'matlab';

const LANGS: CodeLang[] = ['matlab', 'python', 'cpp', 'julia', 'rust', 'fortran', 'wolfram', 'javascript', 'go', 'r'];

function read(): CodeLang {
  if (typeof localStorage === 'undefined') return DEFAULT;
  const v = localStorage.getItem(KEY) as CodeLang | null;
  return v && LANGS.includes(v) ? v : DEFAULT;
}

/** Global code-language preference so every CodeTabs box switches together. */
export function CodeLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<CodeLang>(read);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);
  const value = useMemo<Ctx>(() => ({ lang, setLang: setLangState }), [lang]);
  return <CodeLangContext.Provider value={value}>{children}</CodeLangContext.Provider>;
}

export function useCodeLang(): Ctx {
  return useContext(CodeLangContext) ?? { lang: DEFAULT, setLang: () => {} };
}
