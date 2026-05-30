// Language store + UI string dictionary.
// Content blocks carry their own {hu,en}; this module holds chrome strings
// and the current-language signal.

const LANG_KEY = 'lsq.lang';
const listeners = new Set();

let current = (() => {
  try {
    return localStorage.getItem(LANG_KEY) || 'en';
  } catch {
    return 'en';
  }
})();

export function getLang() {
  return current;
}

export function setLang(lang) {
  if (lang !== 'hu' && lang !== 'en') return;
  current = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {}
  document.documentElement.setAttribute('lang', lang);
  listeners.forEach((fn) => fn(lang));
}

export function toggleLang() {
  setLang(current === 'hu' ? 'en' : 'hu');
}

/** Subscribe to language changes; returns an unsubscribe function. */
export function onLangChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Pick the right side of a {hu,en} value (falls back gracefully). */
export function t(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[current] ?? value.en ?? value.hu ?? '';
}

// UI chrome strings.
export const UI = {
  appTitle: { hu: 'Legkisebb négyzetek labor', en: 'Least Squares Lab' },
  subtitle: {
    hu: '9. fejezet — Legkisebb négyzetek módszere',
    en: 'Chapter 9 — Method of Least Squares',
  },
  nav: { hu: 'Tartalom', en: 'Contents' },
  progress: { hu: 'Haladás', en: 'Progress' },
  xp: { hu: 'XP', en: 'XP' },
  themeLight: { hu: 'Világos', en: 'Light' },
  themeDark: { hu: 'Sötét', en: 'Dark' },
  langName: { hu: 'Magyar', en: 'English' },
  startQuiz: { hu: 'Kvíz indítása', en: 'Start quiz' },
  checkAnswer: { hu: 'Ellenőrzés', en: 'Check answer' },
  next: { hu: 'Következő', en: 'Next' },
  correct: { hu: 'Helyes! ✓', en: 'Correct! ✓' },
  incorrect: { hu: 'Nem egészen — próbáld újra.', en: 'Not quite — try again.' },
  quizDone: { hu: 'Kvíz teljesítve!', en: 'Quiz complete!' },
  quizScore: { hu: 'Eredmény', en: 'Score' },
  retry: { hu: 'Újra', en: 'Retry' },
  sectionComplete: { hu: 'Szakasz teljesítve', en: 'Section complete' },
  badgeEarned: {
    hu: '🏆 Mesterszint elérve — az egész fejezetet teljesítetted!',
    en: '🏆 Chapter mastered — you completed every section!',
  },
  resetProgress: { hu: 'Haladás törlése', en: 'Reset progress' },
  // Demo chrome
  demoReset: { hu: 'Visszaállítás', en: 'Reset' },
  demoAddPoint: { hu: 'Pont hozzáadása', en: 'Add point' },
  demoBestFit: { hu: 'Legjobb illesztés', en: 'Best fit' },
  demoGuess: { hu: 'Tippelj!', en: 'Guess mode' },
  degree: { hu: 'Fokszám', en: 'Degree' },
  slope: { hu: 'Meredekség', en: 'Slope' },
  intercept: { hu: 'Tengelymetszet', en: 'Intercept' },
  error: { hu: 'Hiba', en: 'Error' },
  optimalError: { hu: 'Optimális hiba', en: 'Optimal error' },
  yourError: { hu: 'A te hibád', en: 'Your error' },
  linearizedSpace: { hu: 'Linearizált tér', en: 'Linearized space' },
  originalSpace: { hu: 'Eredeti tér', en: 'Original space' },
  linearError: { hu: 'Linearizált hiba', en: 'Linearized error' },
  nonlinearError: { hu: 'Eredeti (nemlineáris) hiba', en: 'Original (nonlinear) error' },
  expModel: { hu: 'Exponenciális  b·e^{ax}', en: 'Exponential  b·e^{ax}' },
  powerModel: { hu: 'Hatvány  b·x^a', en: 'Power  b·x^a' },
  dragHint: {
    hu: 'Húzd a kék pontokat — az illesztés azonnal frissül.',
    en: 'Drag the blue points — the fit updates live.',
  },
  tryYourself: { hu: 'Próbáld ki', en: 'Try it yourself' },
  exercises: { hu: 'Feladatok', en: 'Exercises' },
};
