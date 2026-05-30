import type { Lang } from '../context/LanguageContext';
import { en } from './en';
import { hu } from './hu';

export type Strings = typeof en;

const dict: Record<Lang, Strings> = { en, hu };

export function getStrings(lang: Lang): Strings {
  return dict[lang];
}
