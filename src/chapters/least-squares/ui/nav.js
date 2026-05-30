// Header (title, language + theme toggles, progress) and sidebar navigation.
import { sections } from '../content/sections.js';
import { t, UI, getLang, toggleLang } from '../state/i18n.js';
import { getTheme, toggleTheme } from '../state/theme.js';
import {
  getXP,
  completionRatio,
  allComplete,
  onProgressChange,
  reset,
} from '../state/progress.js';

const sectionIds = sections.map((s) => s.id);

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

export function renderHeader(host) {
  host.innerHTML = '';
  const bar = el('header', 'topbar');

  const titles = el('div', 'brand');
  titles.appendChild(el('div', 'brand-title', t(UI.appTitle)));
  titles.appendChild(el('div', 'brand-sub', t(UI.subtitle)));
  bar.appendChild(titles);

  const actions = el('div', 'actions');

  const langBtn = el('button', 'pill', getLang() === 'hu' ? '🇭🇺 HU' : '🇬🇧 EN');
  langBtn.title = t(UI.langName);
  langBtn.addEventListener('click', () => toggleLang());
  actions.appendChild(langBtn);

  const themeBtn = el('button', 'pill', getTheme() === 'dark' ? '🌙' : '☀️');
  themeBtn.title = getTheme() === 'dark' ? t(UI.themeDark) : t(UI.themeLight);
  themeBtn.addEventListener('click', () => toggleTheme());
  actions.appendChild(themeBtn);

  bar.appendChild(actions);
  host.appendChild(bar);

  // Progress strip
  const strip = el('div', 'progress-strip');
  const ratio = completionRatio(sectionIds.length);
  strip.innerHTML = `
    <div class="progress-label">${t(UI.progress)}</div>
    <div class="progress-track"><div class="progress-fill" style="width:${Math.round(ratio * 100)}%"></div></div>
    <div class="xp">⭐ ${getXP()} ${t(UI.xp)}</div>`;
  host.appendChild(strip);

  if (allComplete(sectionIds)) {
    host.appendChild(el('div', 'badge-banner', t(UI.badgeEarned)));
  }
}

export function renderSidebar(host, onNavigate) {
  host.innerHTML = '';
  const nav = el('nav', 'sidebar');
  nav.appendChild(el('div', 'sidebar-title', t(UI.nav)));
  const list = el('ul', 'sidebar-list');
  sections.forEach((s) => {
    const li = el('li');
    const a = el('a', 'sidebar-link');
    a.href = `#sec-${s.id}`;
    a.textContent = t(s.title);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate(s.id);
    });
    li.appendChild(a);
    list.appendChild(li);
  });
  nav.appendChild(list);

  const resetBtn = el('button', 'btn ghost', t(UI.resetProgress));
  resetBtn.addEventListener('click', () => reset());
  nav.appendChild(resetBtn);

  host.appendChild(nav);
}

export { onProgressChange };
