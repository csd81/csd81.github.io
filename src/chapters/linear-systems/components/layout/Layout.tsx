import type { ReactNode } from 'react';
import { Header } from './Header';
import { useI18n } from '../../app/LanguageContext';

export function Layout({ children }: { children: ReactNode }) {
  const { lang } = useI18n();
  return (
    <div className="app-shell">
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <footer className="footer">
        <div className="container">
          {lang === 'hu'
            ? 'Numerikus analízis · 3. fejezet — interaktív tananyag.'
            : 'Numerical Analysis · Chapter 3 — interactive companion.'}
        </div>
      </footer>
    </div>
  );
}
