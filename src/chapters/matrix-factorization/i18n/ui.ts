import type { Bilingual, Lang } from "../content/types";

/** UI chrome strings (navigation, buttons, labels). */
export const ui = {
  appName: { en: "Matrix Factorization Academy", hu: "Mátrix Faktorizáció Akadémia" },
  tagline: {
    en: "Interactive course on LU & Cholesky factorization",
    hu: "Interaktív kurzus az LU- és Cholesky-faktorizációról",
  },

  nav_home: { en: "Home", hu: "Kezdőlap" },
  nav_lu: { en: "LU Factorization", hu: "LU-faktorizáció" },
  nav_cholesky: { en: "Cholesky", hu: "Cholesky" },
  nav_practice: { en: "Practice", hu: "Gyakorlás" },
  nav_solver: { en: "Solvers", hu: "Megoldók" },

  start_learning: { en: "Start learning", hu: "Kezdés" },
  open_solver: { en: "Open solver", hu: "Megoldó megnyitása" },
  watch_example: { en: "Watch worked example", hu: "Kidolgozott példa" },

  theme_light: { en: "Light", hu: "Világos" },
  theme_dark: { en: "Dark", hu: "Sötét" },

  // solvers
  lu_solver: { en: "LU Solver", hu: "LU-megoldó" },
  cholesky_solver: { en: "Cholesky Solver", hu: "Cholesky-megoldó" },
  matrix_size: { en: "Size", hu: "Méret" },
  your_matrix: { en: "Your matrix A", hu: "A te A mátrixod" },
  factorize: { en: "Factorize", hu: "Faktorizálás" },
  reset: { en: "Reset", hu: "Visszaállítás" },
  randomize: { en: "Random", hu: "Véletlen" },
  load_example: { en: "Load example", hu: "Példa betöltése" },
  verify: { en: "Verify (multiply back)", hu: "Ellenőrzés (visszaszorzás)" },
  verify_ok: { en: "Verified: the product equals A.", hu: "Ellenőrizve: a szorzat egyenlő A-val." },
  step: { en: "Step", hu: "Lépés" },
  of: { en: "of", hu: "/" },
  prev: { en: "Previous", hu: "Előző" },
  next: { en: "Next", hu: "Következő" },
  play: { en: "Play", hu: "Lejátszás" },
  pause: { en: "Pause", hu: "Szünet" },
  first: { en: "Start", hu: "Elejére" },
  last: { en: "End", hu: "Végére" },
  result: { en: "Result", hu: "Eredmény" },

  // errors
  err_not_square: { en: "Matrix must be square.", hu: "A mátrixnak négyzetesnek kell lennie." },
  err_zero_pivot: {
    en: "Zero pivot encountered — LU does not exist without a row interchange (see Theorem 5.5).",
    hu: "Nulla pivot keletkezett — LU sorcsere nélkül nem létezik (lásd 5.5. tétel).",
  },
  err_not_symmetric: {
    en: "Matrix is not symmetric — Cholesky requires a symmetric matrix.",
    hu: "A mátrix nem szimmetrikus — a Cholesky szimmetrikus mátrixot igényel.",
  },
  err_not_pd: {
    en: "Matrix is not positive definite — a non-positive value appeared under the square root.",
    hu: "A mátrix nem pozitív definit — nem-pozitív érték került a gyök alá.",
  },
  err_parse: { en: "Could not read the matrix. Check the numbers.", hu: "Nem sikerült beolvasni a mátrixot. Ellenőrizd a számokat." },

  // practice
  check: { en: "Check", hu: "Ellenőrzés" },
  show_hint: { en: "Hint", hu: "Segítség" },
  show_answer: { en: "Show answer", hu: "Megoldás" },
  correct: { en: "Correct! 🎉", hu: "Helyes! 🎉" },
  incorrect: { en: "Not quite — try again.", hu: "Nem egészen — próbáld újra." },
  your_answer_L: { en: "Your L", hu: "A te L-ed" },
  your_answer_U: { en: "Your U", hu: "A te U-d" },

  // gamification
  progress: { en: "Progress", hu: "Haladás" },
  badges: { en: "Badges", hu: "Jelvények" },
  reset_progress: { en: "Reset progress", hu: "Haladás törlése" },
  no_badges: { en: "No badges yet — start exploring!", hu: "Még nincs jelvény — fedezz fel!" },
  badge_unlocked: { en: "Badge unlocked!", hu: "Jelvény feloldva!" },

  language: { en: "Language", hu: "Nyelv" },
} satisfies Record<string, Bilingual>;

export type UiKey = keyof typeof ui;

export function t(key: UiKey, lang: Lang): string {
  return ui[key][lang];
}
