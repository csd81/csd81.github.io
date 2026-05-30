import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

// Toggle-only, no persistence (resets to English on reload, per spec).
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "hu" : "en"));
  return <LanguageContext.Provider value={{ lang, toggle, setLang }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
