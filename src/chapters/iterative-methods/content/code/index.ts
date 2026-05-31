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
  jacobi: { en: 'Jacobi iteration', hu: 'Jacobi-iteráció' },
  'gauss-seidel': { en: 'Gauss–Seidel iteration', hu: 'Gauss–Seidel-iteráció' },
  'iterative-refinement': { en: 'Iterative refinement', hu: 'Iteratív javítás' },
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

/** section id -> ordered snippet ids */
const SECTION_CODE: Record<string, string[]> = {
  'jacobi-gs': ['jacobi', 'gauss-seidel'],
  condition: ['iterative-refinement'],
};

export function getSectionCode(sectionId: string): CodeEntry[] {
  return (SECTION_CODE[sectionId] ?? []).map(entry);
}
