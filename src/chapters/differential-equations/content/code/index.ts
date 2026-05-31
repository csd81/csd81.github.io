import type { CodeSnippets } from '../../../../shared/ui/CodeTabs';
import type { Bi } from '../../../../shared/providers/LanguageProvider';

const ids = ['euler', 'heun', 'modified-euler', 'rk4', 'taylor2', 'taylor3'] as const;
type Id = (typeof ids)[number];

// eager-import every language file: { '../code/euler.py': '...' , ... }
const raw = import.meta.glob('./*.{m,py,cpp,jl,rs,f90,wl,js,go,r}', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const pick = (id: string, ext: string) => raw[`./${id}.${ext}`];

export interface CodeEntry {
  id: string;
  snippets: CodeSnippets;
  caption: Bi;
}

const CAPTION: Record<Id, Bi> = {
  euler: { en: 'Forward Euler method', hu: 'Explicit Euler-módszer' },
  heun: { en: "Heun's method (RK2)", hu: 'Heun-módszer (RK2)' },
  'modified-euler': { en: 'Modified Euler (midpoint RK2)', hu: 'Módosított Euler (középponti RK2)' },
  rk4: { en: 'Runge–Kutta 4th order', hu: 'Negyedrendű Runge–Kutta' },
  taylor2: { en: 'Second-order Taylor method', hu: 'Másodrendű Taylor-módszer' },
  taylor3: { en: 'Third-order Taylor method', hu: 'Harmadrendű Taylor-módszer' },
};

const entry = (id: Id): CodeEntry => ({
  id,
  caption: CAPTION[id],
  snippets: {
    matlab: pick(id, 'm'), python: pick(id, 'py'), cpp: pick(id, 'cpp'),
    julia: pick(id, 'jl'), rust: pick(id, 'rs'), fortran: pick(id, 'f90'), wolfram: pick(id, 'wl'),
    javascript: pick(id, 'js'), go: pick(id, 'go'), r: pick(id, 'r'),
  },
});

const SECTION_CODE: Record<string, Id[]> = {
  '10.2': ['euler'],
  '10.4': ['taylor2', 'taylor3'],
  '10.5': ['heun', 'modified-euler', 'rk4'],
};

export function getSectionCode(sectionId: string): CodeEntry[] {
  return (SECTION_CODE[sectionId] ?? []).map(entry);
}
