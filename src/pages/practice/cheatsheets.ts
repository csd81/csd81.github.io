import type { Cheatsheet } from './cheatsheet-types';
import { CHEATSHEETS_A } from './cheatsheets-a';
import { CHEATSHEETS_B } from './cheatsheets-b';

/** All 17 exam cheatsheets, in exam-topic order. */
export const CHEATSHEETS: Cheatsheet[] = [...CHEATSHEETS_A, ...CHEATSHEETS_B];
