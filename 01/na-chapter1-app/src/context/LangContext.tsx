import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { strings, type StringKey } from '../i18n/strings'

export type Lang = 'en' | 'hu'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (key: StringKey) => string
}

const Ctx = createContext<LangCtx | null>(null)

function initialLang(): Lang {
  try {
    const l = localStorage.getItem('na-lang')
    if (l === 'en' || l === 'hu') return l
  } catch {
    /* ignore */
  }
  const attr = document.documentElement.getAttribute('lang')
  return attr === 'hu' ? 'hu' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    try {
      localStorage.setItem('na-lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const t = (key: StringKey): string => {
    const table = strings[lang] as Record<string, string>
    return table[key] ?? (strings.en as Record<string, string>)[key] ?? key
  }

  const toggle = () => setLang((l) => (l === 'en' ? 'hu' : 'en'))

  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>
}

export function useLang() {
  const c = useContext(Ctx)
  if (!c) throw new Error('useLang must be used within LangProvider')
  return c
}
