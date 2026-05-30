import { useEffect, useRef } from 'react';
import { useLang } from '../../shared/providers/LanguageProvider';
import { useTheme } from '../../shared/providers/ThemeProvider';
import { setLang as setVanillaLang, onLangChange } from './state/i18n.js';
import { setTheme as setVanillaTheme, onThemeChange } from './state/theme.js';
import { renderSidebar, onProgressChange } from './ui/nav.js';
import { renderContent } from './ui/render.js';
import './styles/themes.css';
import './styles/main.css';

/**
 * Chapter 9 — Least Squares. The original 09 app is vanilla JS that renders into
 * DOM nodes. Rather than rewrite every Plotly demo, we mount its existing
 * `renderSidebar`/`renderContent` into React-owned containers and bridge the
 * shared language/theme into the chapter's own state modules (its header — with
 * duplicate lang/theme toggles — is dropped for the unified shell nav).
 */
export default function Chapter() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const sidebarRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  // Keep the chapter's own stores in sync with the shared providers.
  useEffect(() => {
    setVanillaLang(lang);
  }, [lang]);
  useEffect(() => {
    setVanillaTheme(theme);
  }, [theme]);

  useEffect(() => {
    const sidebarEl = sidebarRef.current;
    const contentEl = contentRef.current;
    if (!sidebarEl || !contentEl) return;

    const navigateTo = (id: string) => {
      const target = document.getElementById(`sec-${id}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    let teardown: () => void = () => {};
    const renderAll = () => {
      renderSidebar(sidebarEl, navigateTo);
      teardown();
      teardown = renderContent(contentEl) || (() => {});
    };
    renderAll();

    const offLang = onLangChange(renderAll);
    const offProgress = onProgressChange(() => renderSidebar(sidebarEl, navigateTo));
    const offTheme = onThemeChange(() => renderSidebar(sidebarEl, navigateTo));

    return () => {
      offLang();
      offProgress();
      offTheme();
      teardown();
    };
  }, []);

  return (
    <div className="ch-least-squares">
      <div className="layout">
        <aside ref={sidebarRef} id="sidebar"></aside>
        <main ref={contentRef} id="content" className="content"></main>
      </div>
    </div>
  );
}
