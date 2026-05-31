// Full textbook theory per interpolation method, bilingual. Imported as raw
// markdown (rendered with the shared MarkdownView: GFM tables + KaTeX).
import lagrangeEn from './lagrange.en.md?raw';
import lagrangeHu from './lagrange.hu.md?raw';
import newtonEn from './newton.en.md?raw';
import newtonHu from './newton.hu.md?raw';
import hermiteEn from './hermite.en.md?raw';
import hermiteHu from './hermite.hu.md?raw';
import splineEn from './spline.en.md?raw';
import splineHu from './spline.hu.md?raw';

import type { Method } from '../../mathcore';

const THEORY: Record<string, { en: string; hu: string }> = {
  lagrange: { en: lagrangeEn, hu: lagrangeHu },
  newton: { en: newtonEn, hu: newtonHu },
  hermite: { en: hermiteEn, hu: hermiteHu },
  spline: { en: splineEn, hu: splineHu },
};

export function getTheory(method: Method, lang: 'en' | 'hu'): string {
  return THEORY[method]?.[lang] ?? '';
}
