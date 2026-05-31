// Full textbook theory attached to chapter-1 anchor sections, bilingual
// (raw markdown → shared MarkdownView). Keyed by the anchor section id:
//   flow → 1.1 main objective/notions, int → 1.2 representation,
//   eb → 1.3 error analysis, fc → 1.4 consequences of FP arithmetic.
import flowEn from './flow.en.md?raw';
import flowHu from './flow.hu.md?raw';
import intEn from './int.en.md?raw';
import intHu from './int.hu.md?raw';
import ebEn from './eb.en.md?raw';
import ebHu from './eb.hu.md?raw';
import fcEn from './fc.en.md?raw';
import fcHu from './fc.hu.md?raw';

const THEORY: Record<string, { en: string; hu: string }> = {
  flow: { en: flowEn, hu: flowHu },
  int: { en: intEn, hu: intHu },
  eb: { en: ebEn, hu: ebHu },
  fc: { en: fcEn, hu: fcHu },
};

export function getTheory(id: string, lang: 'en' | 'hu'): string {
  return THEORY[id]?.[lang] ?? '';
}
