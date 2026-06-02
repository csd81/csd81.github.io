/**
 * Per-subsection study material for the 10 Numerical Methods chapters.
 *
 * Two parallel folders, one file per subsection:
 *   guides/short/<CC_SS[_SS]_Title>_short_summary.md  — Hungarian short summary
 *   guides/study/<CC_SS[_SS]_Title>_study_guide.md    — English study guide
 *
 * The numeric prefix (e.g. 03_02_01) gives the chapter, the display number
 * (3.2.1) and the in-chapter ordering; the remaining tokens give the title.
 */

const SHORT = import.meta.glob('./guides/short/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const STUDY = import.meta.glob('./guides/study/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export interface Subsection {
  /** Chapter number 1–10. */
  chapter: number;
  /** Stable sort key (the numeric prefix, e.g. "03_02_01"). */
  sortKey: string;
  /** URL slug within the chapter (e.g. "03-02-01"). */
  slug: string;
  /** Display number, e.g. "3.2.1". */
  number: string;
  /** Cleaned English title derived from the filename. */
  title: string;
  /** Hungarian short-summary markdown. */
  short: string;
  /** English study-guide markdown (may be empty for a not-yet-written guide). */
  study: string;
}

/** Title-case-ish: capitalise each word's first letter, keep the rest as-is
 *  (so acronyms like LU / Gauss survive), and restore `_s_` → "'s". */
function cleanTitle(rest: string): string {
  return rest
    .replace(/_s_/g, "'s_")
    .split('_')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const byChapter = new Map<number, Subsection[]>();

for (const path of Object.keys(SHORT)) {
  const fname = path.split('/').pop()!;
  const base = fname.replace(/_short_summary\.md$/, '');
  const m = base.match(/^(\d+(?:_\d+)*)_(.*)$/);
  if (!m) continue;
  const prefix = m[1];
  const nums = prefix.split('_').map((n) => parseInt(n, 10));
  const chapter = nums[0];
  const sub: Subsection = {
    chapter,
    sortKey: prefix,
    slug: prefix.replace(/_/g, '-'),
    number: nums.map((n) => n).join('.'),
    title: cleanTitle(m[2]),
    short: SHORT[path] ?? '',
    study: STUDY[`./guides/study/${base}_study_guide.md`] ?? '',
  };
  const arr = byChapter.get(chapter) ?? [];
  arr.push(sub);
  byChapter.set(chapter, arr);
}

for (const arr of byChapter.values()) {
  arr.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
}

/** Subsections for a chapter number (1–10), in order. */
export function subsectionsFor(chapter: number): Subsection[] {
  return byChapter.get(chapter) ?? [];
}

/** Look up a single subsection by chapter + slug. */
export function subsectionBySlug(chapter: number, slug: string): Subsection | undefined {
  return subsectionsFor(chapter).find((s) => s.slug === slug);
}

/** Chapters (1–10) that actually have study material, in order. */
export const GUIDE_CHAPTERS: number[] = [...byChapter.keys()].sort((a, b) => a - b);
