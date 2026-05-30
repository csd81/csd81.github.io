import { NavLink, Outlet } from 'react-router-dom';
import { useStrings } from '../i18n/useStrings';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

export function Layout() {
  const t = useStrings();
  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/fixed-point', label: t.nav.fixedPoint },
    { to: '/jacobi-gauss-seidel', label: t.nav.jacobiGs },
    { to: '/spectral', label: t.nav.spectral },
    { to: '/condition', label: t.nav.condition },
  ];

  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <NavLink to="/" className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-brand-700 dark:text-brand-200">{t.appTitle}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{t.appSubtitle}</span>
          </NavLink>
          <nav className="ml-auto hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 transition ${
                    isActive
                      ? 'bg-brand-100 text-brand-700 font-semibold dark:bg-brand-600/30 dark:text-brand-200'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 md:ml-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile nav */}
        <nav className="md:hidden flex gap-1 overflow-x-auto px-4 pb-2 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-md px-3 py-1.5 transition ${
                  isActive
                    ? 'bg-brand-100 text-brand-700 font-semibold dark:bg-brand-600/30 dark:text-brand-200'
                    : 'text-slate-600 dark:text-slate-300'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-500 dark:text-slate-400">
          Based on F. Hartung, <em>Numerical Analysis</em> — Chapter 4: Iterative Techniques for
          Solving Linear Systems. Built for interactive, in-browser exploration.
        </div>
      </footer>
    </div>
  );
}
