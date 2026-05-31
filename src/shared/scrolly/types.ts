import type { ReactNode } from 'react';
import type { Bi } from '../providers/LanguageProvider';

/** Metadata for one scrollytelling section (used by the shell + jump menu). */
export interface SectionMeta {
  /** DOM id / anchor target (`#<id>`) and deck key. */
  id: string;
  /** book section number, e.g. "2.3". */
  no: string;
  title: Bi;
  blurb: Bi;
}

/** One narrative step beside the sticky graphic. */
export interface ScrollyStep {
  /** small kicker, e.g. "Step 1". */
  kicker?: ReactNode;
  title?: ReactNode;
  body: ReactNode;
}
