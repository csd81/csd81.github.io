import { strings } from '../i18n/strings';
import type { SectionMeta } from '../../../shared/scrolly';

const en = strings.en as Record<string, string>;
const hu = strings.hu as Record<string, string>;
const bi = (key: string) => ({ en: en[key] ?? key, hu: hu[key] ?? en[key] ?? key });

/** Content sections of chapter 1, in scroll order — drives the top-bar jump nav. */
const defs: [id: string, no: string, titleKey: string, leadKey: string][] = [
  ['flow', '1.1', 'flow.title', 'flow.lead'],
  ['trunc', '1.1', 'trunc.title', 'trunc.lead'],
  ['cond', '1.1', 'cond.title', 'cond.lead'],
  ['stab', '1.1', 'stab.title', 'stab.lead'],
  ['cx', '1.1', 'cx.title', 'cx.lead'],
  ['int', '1.2', 'int.title', 'int.lead'],
  ['flt', '1.2', 'flt.title', 'flt.lead'],
  ['mach', '1.2', 'mach.title', 'mach.lead'],
  ['eb', '1.2', 'eb.title', 'eb.lead'],
  ['ep', '1.3', 'ep.title', 'ep.lead'],
  ['fc', '1.4', 'fc.title', 'fc.lead'],
  ['glossary', '1.x', 'gl.title', 'gl.lead'],
  ['flashcards', '1.x', 'flash.title', 'flash.lead'],
  ['quiz', '1.x', 'quiz.title', 'quiz.lead'],
];

export const SECTIONS: SectionMeta[] = defs.map(([id, no, titleKey, leadKey]) => ({
  id,
  no,
  title: bi(titleKey),
  blurb: bi(leadKey),
}));
