import type { CodeSnippets } from '../../../../shared/ui/CodeTabs';
import type { Bi } from '../../../../shared/providers/LanguageProvider';

const raw = import.meta.glob('./*.{m,py,cpp,jl,rs,f90,wl,js,go,r}', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const pick = (id: string, ext: string) => raw[`./${id}.${ext}`];

export interface CodeEntry {
  id: string;
  snippets: CodeSnippets;
  caption: Bi;
}

const CAPTION: Record<string, Bi> = {
  bisection: { en: 'Bisection method', hu: 'Intervallumfelezés' },
  'fixed-point': { en: 'Fixed-point iteration', hu: 'Fixpont-iteráció' },
  newton: { en: "Newton's method", hu: 'Newton-módszer' },
  secant: { en: 'Secant method', hu: 'Szelő módszer' },
  'false-position': { en: 'Regula falsi (false position)', hu: 'Regula falsi (húrmódszer)' },
  'fixed-point-nd': { en: 'Fixed-point iteration (systems)', hu: 'Fixpont-iteráció (rendszerek)' },
  'newton-nd': { en: "Newton's method for systems", hu: 'Newton-módszer rendszerekre' },
  broyden: { en: "Broyden's method", hu: 'Broyden-módszer' },
};

const entry = (id: string): CodeEntry => ({
  id,
  caption: CAPTION[id],
  snippets: {
    matlab: pick(id, 'm'), python: pick(id, 'py'), cpp: pick(id, 'cpp'),
    julia: pick(id, 'jl'), rust: pick(id, 'rs'), fortran: pick(id, 'f90'), wolfram: pick(id, 'wl'),
    javascript: pick(id, 'js'), go: pick(id, 'go'), r: pick(id, 'r'),
  },
});

/** ch2 section slug -> snippet ids */
const SECTION_CODE: Record<string, string[]> = {
  bisection: ['bisection'],
  'fixed-point': ['fixed-point'],
  newton: ['newton'],
  secant: ['secant'],
  'false-position': ['false-position'],
  'fixed-point-nd': ['fixed-point-nd'],
  'newton-nd': ['newton-nd'],
  broyden: ['broyden'],
};

export function getSectionCode(slug: string): CodeEntry[] {
  return (SECTION_CODE[slug] ?? []).map(entry);
}
