// Full textbook theory per section, bilingual (raw markdown → shared MarkdownView).
import calculusEn from './calculus.en.md?raw';
import calculusHu from './calculus.hu.md?raw';
import goldenEn from './golden.en.md?raw';
import goldenHu from './golden.hu.md?raw';
import simplexEn from './simplex.en.md?raw';
import simplexHu from './simplex.hu.md?raw';
import gradientEn from './gradient.en.md?raw';
import gradientHu from './gradient.hu.md?raw';
import linsysEn from './linsys.en.md?raw';
import linsysHu from './linsys.hu.md?raw';
import newtonEn from './newton.en.md?raw';
import newtonHu from './newton.hu.md?raw';
import quasinewtonEn from './quasinewton.en.md?raw';
import quasinewtonHu from './quasinewton.hu.md?raw';

const THEORY: Record<string, { en: string; hu: string }> = {
  calculus: { en: calculusEn, hu: calculusHu },
  golden: { en: goldenEn, hu: goldenHu },
  simplex: { en: simplexEn, hu: simplexHu },
  gradient: { en: gradientEn, hu: gradientHu },
  linsys: { en: linsysEn, hu: linsysHu },
  newton: { en: newtonEn, hu: newtonHu },
  quasinewton: { en: quasinewtonEn, hu: quasinewtonHu },
};

export function getTheory(id: string, lang: 'en' | 'hu'): string {
  return THEORY[id]?.[lang] ?? '';
}
