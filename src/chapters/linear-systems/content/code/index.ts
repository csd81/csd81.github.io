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
  'forward-substitution': { en: 'Forward substitution (lower-triangular system)', hu: 'Előrehelyettesítés (alsó háromszögű rendszer)' },
  'back-substitution': { en: 'Back-substitution (upper-triangular system)', hu: 'Visszahelyettesítés (felső háromszögű rendszer)' },
  'gauss-elimination': { en: 'Gaussian elimination (no pivoting)', hu: 'Gauss-elimináció (főelemkiválasztás nélkül)' },
  'gauss-partial': { en: 'Gaussian elimination — partial pivoting', hu: 'Gauss-elimináció — részleges főelemkiválasztás' },
  'gauss-complete': { en: 'Gaussian elimination — complete pivoting', hu: 'Gauss-elimináció — teljes főelemkiválasztás' },
  'gauss-jordan': { en: 'Gauss–Jordan elimination', hu: 'Gauss–Jordan-elimináció' },
  'matrix-inverse': { en: 'Matrix inverse (Gauss–Jordan on [A | I])', hu: 'Mátrixinverz (Gauss–Jordan az [A | I] mátrixon)' },
  tridiagonal: { en: 'Tridiagonal solver (Thomas algorithm)', hu: 'Tridiagonális megoldó (Thomas-algoritmus)' },
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

const SECTION_CODE: Record<string, string[]> = {
  s33: ['forward-substitution', 'back-substitution', 'gauss-elimination', 'gauss-partial', 'gauss-complete', 'gauss-jordan', 'matrix-inverse', 'tridiagonal'],
};

export function getSectionCode(sectionId: string): CodeEntry[] {
  return (SECTION_CODE[sectionId] ?? []).map(entry);
}
