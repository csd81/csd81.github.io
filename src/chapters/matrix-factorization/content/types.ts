export type Lang = "en" | "hu";

/** A value available in both supported languages. */
export type Bilingual<T = string> = { en: T; hu: T };

export function pick<T>(b: Bilingual<T>, lang: Lang): T {
  return b[lang];
}

/** Kinds of styled callout boxes used to present theory. */
export type BlockKind =
  | "text"
  | "definition"
  | "theorem"
  | "proof"
  | "example"
  | "algorithm"
  | "remark"
  | "exercise"
  | "solution";

/**
 * A theory block. `body` is an array of bilingual fragments which may be plain
 * prose (lang-specific) or shared display math (`math`).
 */
export interface Fragment {
  /** prose paragraph (bilingual) */
  text?: Bilingual;
  /** display (block) math — language independent KaTeX */
  math?: string;
  /** inline-rich paragraph mixing text + inline math via $...$ delimiters */
  rich?: Bilingual;
}

export interface TheoryBlock {
  id: string;
  kind: BlockKind;
  /** optional heading/label, e.g. "Theorem 5.1" */
  label?: Bilingual;
  body: Fragment[];
}

export interface Section {
  id: string;
  title: Bilingual;
  blocks: TheoryBlock[];
}
