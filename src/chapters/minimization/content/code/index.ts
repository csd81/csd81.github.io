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
  golden: { en: 'Golden-section search', hu: 'Aranymetszéses keresés' },
  simplex: { en: 'Nelder–Mead simplex', hu: 'Nelder–Mead-szimplex' },
  'simplex-basic': { en: 'Basic simplex method (fixed shape)', hu: 'Alap szimplex-módszer (rögzített alak)' },
  gradient: { en: 'Gradient descent (constant step)', hu: 'Gradiens-módszer (állandó lépés)' },
  newton: { en: 'Newton minimization', hu: 'Newton-minimalizálás' },
  steepest: { en: 'Steepest descent (line search)', hu: 'Legmeredekebb csökkenés (vonalmenti keresés)' },
  bfgs: { en: 'BFGS quasi-Newton', hu: 'BFGS kvázi-Newton' },
  dfp: { en: 'DFP quasi-Newton (Davidon–Fletcher–Powell)', hu: 'DFP kvázi-Newton (Davidon–Fletcher–Powell)' },
  sr1: { en: 'SR1 quasi-Newton (symmetric rank-one)', hu: 'SR1 kvázi-Newton (szimmetrikus rang-egy)' },
  psb: { en: 'PSB quasi-Newton (Powell-symmetric-Broyden)', hu: 'PSB kvázi-Newton (Powell-szimmetrikus-Broyden)' },
  broyden: { en: "Broyden's method (optimization, rank-one)", hu: 'Broyden-módszer (optimalizálás, rang-egy)' },
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

/** ch8 section meta.id -> snippet id(s); §8.7 shows the whole quasi-Newton family */
const SECTION_FILE: Record<string, string[]> = {
  golden: ['golden'],
  simplex: ['simplex', 'simplex-basic'],
  gradient: ['gradient'],
  newton: ['newton'],
  linsys: ['steepest'],
  quasinewton: ['bfgs', 'dfp', 'sr1', 'psb', 'broyden'],
};

export function getCodeFor(sectionId: string): CodeEntry[] {
  return (SECTION_FILE[sectionId] ?? []).map(entry);
}
