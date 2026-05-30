import { NavLink, Link } from 'react-router-dom';
import { useI18n } from '../../app/LanguageContext';
import { useTheme } from '../../app/ThemeContext';

export function Header() {
  const { t, toggleLang, lang } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-title">{t('app.title')}</span>
          <span className="brand-sub">{t('app.subtitle')}</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/lessons">{t('nav.sections')}</NavLink>
          <NavLink to="/lab">{t('nav.lab')}</NavLink>
          <NavLink to="/quiz">{t('nav.quiz')}</NavLink>
        </nav>

        <button
          type="button"
          className="icon-btn"
          onClick={toggleLang}
          aria-label={t('lang.toggle')}
          title={t('lang.toggle')}
        >
          {lang === 'en' ? 'HU' : 'EN'}
        </button>

        <button
          type="button"
          className="icon-btn"
          onClick={toggleTheme}
          aria-label={t('theme.toggle')}
          title={t('theme.toggle')}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </header>
  );
}
