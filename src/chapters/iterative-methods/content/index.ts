import type { Lang } from '../context/LanguageContext';
import type { ModuleId } from '../context/ProgressContext';

import fpEn from './fixed-point.en.md?raw';
import fpHu from './fixed-point.hu.md?raw';
import jgEn from './jacobi-gs.en.md?raw';
import jgHu from './jacobi-gs.hu.md?raw';
import spEn from './spectral.en.md?raw';
import spHu from './spectral.hu.md?raw';
import coEn from './condition.en.md?raw';
import coHu from './condition.hu.md?raw';

const content: Record<ModuleId, Record<Lang, string>> = {
  'fixed-point': { en: fpEn, hu: fpHu },
  'jacobi-gs': { en: jgEn, hu: jgHu },
  spectral: { en: spEn, hu: spHu },
  condition: { en: coEn, hu: coHu },
};

export function getTheory(id: ModuleId, lang: Lang): string {
  return content[id][lang];
}
