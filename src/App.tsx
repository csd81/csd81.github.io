import { Link, Outlet, useLocation } from 'react-router-dom';
import { useLang } from './shared/providers/LanguageProvider';
import { useTheme } from './shared/providers/ThemeProvider';
import { CHAPTERS } from './chapters/registry';

function ChapterJump() {
  const { lang } = useLang();
  const loc = useLocation();
  const current = CHAPTERS.find((c) => loc.pathname.startsWith(`/${c.slug}`))?.slug ?? '';
  return (
    <select
      className="app-nav__select"
      value={current}
      onChange={(e) => {
        const slug = e.target.value;
        if (slug) window.location.assign(`/${slug}`);
      }}
      aria-label={lang === 'hu' ? 'Ugrás fejezetre' : 'Jump to chapter'}
    >
      <option value="">{lang === 'hu' ? 'Fejezetek…' : 'Chapters…'}</option>
      {CHAPTERS.map((c) => (
        <option key={c.slug} value={c.slug}>
          {c.num}. {c.title[lang]}
        </option>
      ))}
    </select>
  );
}

export default function App() {
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <>
      <nav className="app-nav">
        <Link to="/" className="app-nav__brand">
          {lang === 'hu' ? 'Numerikus módszerek' : 'Numerical Methods'}
        </Link>
        <span className="app-nav__spacer" />
        <ChapterJump />
        <button
          className="btn btn--icon"
          onClick={toggleLang}
          aria-label="Toggle language"
          title={lang === 'hu' ? 'Nyelv: magyar' : 'Language: English'}
        >
          {lang === 'hu' ? '🇭🇺 HU' : '🇬🇧 EN'}
        </button>
        <button
          className="btn btn--icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Dark' : 'Light'}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </nav>
      <main className="site-main">
        <Outlet />
      </main>
    </>
  );
}
