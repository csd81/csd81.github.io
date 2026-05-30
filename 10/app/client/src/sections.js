// Navigation config for Chapter 10. `demo` selects which interactive widget
// the Theory page embeds beneath that section's text.
export const SECTIONS = [
  { id: "intro", en: "Introduction", hu: "Bevezetés", demo: null },
  { id: "10.1", en: "10.1 Review of ODEs", hu: "10.1. Előismeretek", demo: "field" },
  { id: "10.2", en: "10.2 Euler's method", hu: "10.2. Euler-módszer", demo: "field" },
  { id: "10.3", en: "10.3 Rounding error", hu: "10.3. Kerekítési hiba", demo: "convergence" },
  { id: "10.4", en: "10.4 Taylor's method", hu: "10.4. Taylor-módszer", demo: "compare" },
  { id: "10.5", en: "10.5 Runge–Kutta", hu: "10.5. Runge–Kutta", demo: "compare" },
];

export function sectionLabel(s, lang) {
  return lang === "hu" ? s.hu : s.en;
}
