// Dark/light theme store. The initial value is applied inline in index.html
// (before paint); this module handles toggling and notifying listeners.

const THEME_KEY = 'lsq.theme';
const listeners = new Set();

export function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

export function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return;
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
  listeners.forEach((fn) => fn(theme));
}

export function toggleTheme() {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

/** Subscribe to theme changes; returns an unsubscribe function. */
export function onThemeChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Read a CSS custom property from :root (used by Plotly to match the theme). */
export function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
