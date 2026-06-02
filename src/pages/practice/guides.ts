/**
 * Per-subsection study material for the 10 Numerical Methods chapters.
 *
 * Two parallel folders, one file per subsection:
 *   guides/short/<CC_SS[_SS]_Title>_short_summary.md     — Hungarian short summary
 *   guides/short/<CC_SS[_SS]_Title>_short_summary_en.md  — English short summary
 *   guides/study/<CC_SS[_SS]_Title>_study_guide.md       — English study guide
 *
 * The numeric prefix (e.g. 03_02_01) gives the chapter, the display number
 * (3.2.1) and the in-chapter ordering; the remaining tokens give the title.
 */

const SHORT = import.meta.glob('./guides/short/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const STUDY = import.meta.glob('./guides/study/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const BOOK = import.meta.glob('./guides/book/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const SLIDES = import.meta.glob('./guides/slides/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const FLASH = import.meta.glob('./guides/flashcards/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const SUB = import.meta.glob('./guides/sub/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export interface Flashcard { front: string; back: string; }

/** Parse CSV text into rows (RFC-4180-ish: "" escapes a quote; quoted fields
 *  may contain commas/newlines). */
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let field = '', row: string[] = [], inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQ = false; }
      else field += c;
    } else if (c === '"') {
      inQ = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      if (field !== '' || row.length) { row.push(field); rows.push(row); row = []; field = ''; }
    } else {
      field += c;
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/** Flashcards (front/back) for a subsection base, from its CSV (or []). */
function flashcardsFor(base: string): Flashcard[] {
  const csv = FLASH[`./guides/flashcards/${base}_flashcards.csv`];
  if (!csv) return [];
  return parseCSV(csv)
    .filter((r) => r.length >= 2 && r[0].trim())
    .map((r) => ({ front: r[0].trim(), back: r[1].trim() }));
}

export interface Subsection {
  /** Full source base / folder name (e.g. '02_05_Newton_s_Method'). */
  base: string;
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
  /** English short-summary markdown (empty if untranslated). */
  shortEn: string;
  /** English study-guide markdown (may be empty for a not-yet-written guide). */
  study: string;
  /** Self-test flashcards (front/back), empty if none for this subsection. */
  flashcards: Flashcard[];
  /** Per-subsection textbook prose (HU / EN) and lecture slides (HU / EN). */
  subBookHu: string;
  subBookEn: string;
  subSlidesHu: string;
  subSlidesEn: string;
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
  if (fname.endsWith('_short_summary_en.md')) continue; // English variant: looked up below
  const base = fname.replace(/_short_summary\.md$/, '');
  const m = base.match(/^(\d+(?:_\d+)*)_(.*)$/);
  if (!m) continue;
  const prefix = m[1];
  const nums = prefix.split('_').map((n) => parseInt(n, 10));
  const chapter = nums[0];
  const sub: Subsection = {
    base,
    chapter,
    sortKey: prefix,
    slug: prefix.replace(/_/g, '-'),
    number: nums.map((n) => n).join('.'),
    title: cleanTitle(m[2]),
    short: SHORT[path] ?? '',
    shortEn: SHORT[`./guides/short/${base}_short_summary_en.md`] ?? '',
    study: STUDY[`./guides/study/${base}_study_guide.md`] ?? '',
    flashcards: flashcardsFor(base),
    subBookHu: SUB[`./guides/sub/${base}.book.hu.md`] ?? '',
    subBookEn: SUB[`./guides/sub/${base}.book.en.md`] ?? '',
    subSlidesHu: SUB[`./guides/sub/${base}.slides.hu.md`] ?? '',
    subSlidesEn: SUB[`./guides/sub/${base}.slides.en.md`] ?? '',
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

/* ── Full book chapters (EN) and presentation slides (HU + EN) ──────────── */

const bookEnByCh = new Map<number, string>();
const bookHuByCh = new Map<number, string>();
for (const [path, md] of Object.entries(BOOK)) {
  const fname = path.split('/').pop()!;
  const en = fname.match(/^Chapter_(\d+)_/);              // Chapter_3_Linear_Systems.md → EN
  if (en) { bookEnByCh.set(parseInt(en[1], 10), md); continue; }
  const hu = fname.match(/^(\d+)_/);                       // 03_Linearis_egyenletrendszerek.md → HU
  if (hu) bookHuByCh.set(parseInt(hu[1], 10), md);
}

const slidesEnByCh = new Map<number, string>();
const slidesHuByCh = new Map<number, string>();
for (const [path, md] of Object.entries(SLIDES)) {
  const fname = path.split('/').pop()!;
  if (/^_num_pres\d+\.md$/.test(fname)) {                       // _num_pres07.md → EN
    slidesEnByCh.set(parseInt(fname.match(/(\d+)/)![1], 10), md);
  } else {                                                       // 07num_pres07.md → HU
    const m = fname.match(/num_pres(\d+)/);
    if (m) slidesHuByCh.set(parseInt(m[1], 10), md);
  }
}

/** Full book-chapter markdown in the active language (Hungarian when available
 *  + requested, English otherwise). */
export function chapterBook(chapter: number, lang: 'en' | 'hu'): string {
  const hu = bookHuByCh.get(chapter);
  const en = bookEnByCh.get(chapter);
  return (lang === 'hu' ? hu : en) || en || hu || '';
}

/** Presentation-slide markdown for a chapter in the active language
 *  (Hungarian when available + requested, English otherwise). */
export function chapterSlides(chapter: number, lang: 'en' | 'hu'): string {
  const hu = slidesHuByCh.get(chapter);
  const en = slidesEnByCh.get(chapter);
  return (lang === 'hu' ? hu : en) || en || hu || '';
}

export const hasBook = (chapter: number): boolean =>
  bookEnByCh.has(chapter) || bookHuByCh.has(chapter);
export const hasSlides = (chapter: number): boolean =>
  slidesEnByCh.has(chapter) || slidesHuByCh.has(chapter);
