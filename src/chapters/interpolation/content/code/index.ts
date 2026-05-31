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
  lagrange: { en: 'Lagrange interpolation (Vandermonde system)', hu: 'Lagrange-interpoláció (Vandermonde-rendszer)' },
  newton: { en: "Newton's divided differences (coefficients)", hu: 'Newton-féle osztott differenciák (együtthatók)' },
  'newton-eval': { en: 'Newton polynomial evaluation (nested form)', hu: 'Newton-polinom kiértékelése (beágyazott alak)' },
  hermite: { en: 'Hermite interpolation', hu: 'Hermite-interpoláció' },
  spline: { en: 'Natural cubic spline', hu: 'Természetes köbös spline' },
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

/** ch6 lesson method -> ordered snippet ids */
const METHOD_CODE: Record<string, string[]> = {
  lagrange: ['lagrange'],
  newton: ['newton', 'newton-eval'],
  hermite: ['hermite'],
  spline: ['spline'],
};

export function getMethodCode(method: string): CodeEntry[] {
  return (METHOD_CODE[method] ?? []).map(entry);
}
