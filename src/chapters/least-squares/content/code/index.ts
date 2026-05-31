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
  line: { en: 'Least-squares line fit (normal equations)', hu: 'Legkisebb négyzetes egyenesillesztés (normálegyenletek)' },
  polynomial: { en: 'Least-squares polynomial fit', hu: 'Legkisebb négyzetes polinomillesztés' },
  exponential: { en: 'Exponential fit  y ≈ b·e^{a t}', hu: 'Exponenciális illesztés  y ≈ b·e^{a t}' },
  power: { en: 'Power-law fit  y ≈ b·t^a', hu: 'Hatványfüggvény-illesztés  y ≈ b·t^a' },
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

/** ch9 section id -> snippet ids */
const SECTION_CODE: Record<string, string[]> = {
  line: ['line'],
  polynomial: ['polynomial'],
  nonlinear: ['exponential', 'power'],
};

export function getSectionCode(sectionId: string): CodeEntry[] {
  return (SECTION_CODE[sectionId] ?? []).map(entry);
}
