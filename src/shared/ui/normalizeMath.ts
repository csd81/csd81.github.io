/**
 * Force every `$$…$$` display-math block onto its own lines.
 *
 * Two `remark-math` / micromark quirks corrupt our hand-authored `.md` math:
 *   1. A single-line `$$…$$` is parsed as *inline* math, where KaTeX rejects
 *      display-only constructs (`\tag{}`, `&`-alignment) and dumps raw LaTeX.
 *   2. Text on the *same line* as the opening `$$` (e.g. `$$\begin{array}{rcr}`)
 *      is treated as a discarded "meta" info string, so KaTeX receives the body
 *      without its environment → `Expected 'EOF', got '&'`.
 *
 * Rewriting each `$$…$$` so the fences sit on their own lines and the body
 * starts on a fresh line fixes both. It's idempotent: blocks already formatted
 * this way are reproduced unchanged.
 *
 * Also strips leading blockquote markers (`> `) from inside a display block:
 * slide "blocks" wrap content (including multi-line `$$…$$`) in a Markdown
 * blockquote, and those `>` would otherwise render as literal `>` in the math.
 */
export function normalizeMath(markdown: string): string {
  if (!markdown) return markdown;
  return markdown.replace(
    /\$\$([\s\S]+?)\$\$/g,
    (_whole, inner: string) => `\n\n$$\n${inner.replace(/^[ \t]*>[ \t]?/gm, '').trim()}\n$$\n\n`,
  );
}
