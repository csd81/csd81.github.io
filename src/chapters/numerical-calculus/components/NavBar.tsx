import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = [
  { to: '/numerical-calculus', key: 'home', end: true },
  { to: '/numerical-calculus/lessons', key: 'lessons', end: false },
  { to: '/numerical-calculus/playground', key: 'playground', end: false },
  { to: '/numerical-calculus/quiz', key: 'quiz', end: false },
] as const;

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3">
        <NavLink to="/numerical-calculus" className="flex items-center gap-2 font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow">
            ∫
          </span>
          <span className="text-lg">{t('app.title')}</span>
        </NavLink>

        <nav className="order-3 flex w-full gap-1 sm:order-2 sm:w-auto">
          {links.map((l) => (
            <NavLink
              key={l.key}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
            >
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
