import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LanguageContext";
import { SECTIONS } from "../sections/registry";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLang();
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ids = ["hero", ...SECTIONS.map((s) => s.id)];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    const onScroll = () => {
      const h =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <a className="nav__brand" href="#hero">
          <svg viewBox="0 0 64 64" aria-hidden>
            <rect width="64" height="64" rx="14" fill="var(--accent)" />
            <path
              d="M10 44 C24 44 24 20 32 20 C40 20 40 44 54 44"
              fill="none"
              stroke="var(--accent-ink)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="32" cy="40" r="5" fill="var(--warm)" />
          </svg>
          <span>min f(x)</span>
        </a>

        <div className="nav__links">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav__link${active === s.id ? " active" : ""}`}
            >
              {s.no}
            </a>
          ))}
        </div>

        <div className="nav__spacer" />

        <div className="nav__tools">
          <div className="seg" role="group" aria-label="language">
            <button
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={lang === "hu" ? "on" : ""}
              onClick={() => setLang("hu")}
            >
              HU
            </button>
          </div>
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label="toggle dark mode"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
      <div className="scrollbar" style={{ width: `${progress}%` }} />
    </>
  );
}
