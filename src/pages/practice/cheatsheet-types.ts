import type { Bi } from '../../shared/providers/LanguageProvider';

/** A short "must-know-to-pass" exam cheatsheet for one exam topic. */
export interface Cheatsheet {
  /** topic title */
  title: Bi;
  /** concise markdown body (KaTeX math supported) */
  body: Bi;
}
