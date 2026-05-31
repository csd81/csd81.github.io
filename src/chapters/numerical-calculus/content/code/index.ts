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
  differentiation: { en: 'Numerical differentiation (central differences)', hu: 'Numerikus deriválás (centrális differenciák)' },
  richardson: { en: 'Richardson extrapolation of the derivative', hu: 'A derivált Richardson-extrapolációja' },
  trapezoid: { en: 'Composite trapezoidal rule', hu: 'Összetett trapéz-szabály' },
  simpson: { en: "Composite Simpson's rule", hu: 'Összetett Simpson-szabály' },
  'gauss-quad': { en: 'Gauss–Legendre quadrature (2- and 3-point)', hu: 'Gauss–Legendre-kvadratúra (2- és 3-pontos)' },
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

/** lesson slug -> snippet ids */
const SECTION_CODE: Record<string, string[]> = {
  '7_1': ['differentiation'],
  '7_2': ['richardson'],
  '7_3': ['trapezoid', 'simpson'],
  '7_4': ['gauss-quad'],
};

export function getSectionCode(slug: string): CodeEntry[] {
  return (SECTION_CODE[slug] ?? []).map(entry);
}
