/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import type { Components } from 'react-markdown';

/**
 * Szalkai/calculus-style callout boxing for the /practice content. A rehype
 * plugin wraps every numbered theorem/definition/example/proof, every list item
 * (quiz questions, answers, glossary entries…) in its own box with a copy
 * button holding that box's markdown/LaTeX source. A second plugin colours short
 * emphasis as "concept" terms.
 */

/** Lead word → box kind (colour). */
const THM_KIND: Record<string, string> = {
  // English
  Theorem: 'thm', Definition: 'def', Example: 'ex', Remark: 'note', Note: 'note',
  Proposition: 'claim', Statement: 'claim', Claim: 'claim', Lemma: 'claim',
  Corollary: 'cor', Consequence: 'cor', Algorithm: 'algo', Proof: 'proof',
  Notation: 'note', Summary: 'note', Exercise: 'ex', Exercises: 'ex', Problem: 'claim',
  Solution: 'note', Property: 'note', Properties: 'note',
  // Hungarian
  Tétel: 'thm', Definíció: 'def', Példa: 'ex', Megjegyzés: 'note', Jelölés: 'note',
  Állítás: 'claim', Lemma_hu: 'claim', Következmény: 'cor', Algoritmus: 'algo',
  Bizonyítás: 'proof', Megoldás: 'note', Feladat: 'ex', Gyakorlat: 'ex',
};

function leadKindFromText(txt: string): string | null {
  const t = txt.trim();
  // word-first: "Theorem 2.23.", "Example 2.22.", "Definition", "Proof."
  let m = /^([A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű]+)/.exec(t);
  if (m && THM_KIND[m[1]]) return THM_KIND[m[1]];
  // number-first: "2.23. Theorem"
  m = /^\d+(?:\.\d+)*\.?\s*([A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű]+)/.exec(t);
  if (m && THM_KIND[m[1]]) return THM_KIND[m[1]];
  return null;
}

function hastText(n: any): string {
  if (!n) return '';
  if (n.type === 'text') return n.value || '';
  return (n.children || []).map(hastText).join('');
}

/** First element child of a `<p>` that is a `<strong>` lead → its kind. */
function nodeLeadKind(node: any): string | null {
  if (!node || node.type !== 'element' || node.tagName !== 'p') return null;
  const ch = node.children || [];
  let i = 0;
  while (i < ch.length && ch[i].type === 'text' && !ch[i].value.trim()) i++;
  const first = ch[i];
  if (!first || first.type !== 'element' || first.tagName !== 'strong') return null;
  return leadKindFromText(hastText(first));
}

const sliceClean =(source: string, a?: number, b?: number): string =>
  source.slice(a ?? 0, b ?? source.length).replace(/^\[\^[^\]]+\]:.*$/gm, '').trim();

const copyEl = (tex: string): any => ({ type: 'element', tagName: 'pcopy', properties: { tex }, children: [] });
const numEl = (label: string): any => ({
  type: 'element', tagName: 'span', properties: { className: ['pbox__num'] }, children: [{ type: 'text', value: label }],
});
const boxEl = (kind: string, children: any[]): any => ({
  type: 'element', tagName: 'div', properties: { className: ['pbox', `pbox--${kind}`] }, children,
});

/** Box EVERY block individually: each paragraph, list item, blockquote, table
 *  and code block becomes its own box with a copy button. Headings stay as plain
 *  section titles; a paragraph led by a theorem/definition/etc. is colour-coded. */
const cls = (n: any): string => {
  const c = n?.properties?.className;
  return Array.isArray(c) ? c.join(' ') : (c || '');
};
/** A KaTeX display-math block (`$$…$$`) — the element itself, or a wrapper. */
const isDisplayMath = (n: any): boolean => {
  if (n?.type !== 'element') return false;
  const c = cls(n);
  if (/math-display/.test(c) || /katex-display/.test(c)) return true;
  return (n.children || []).some((k: any) => k.type === 'element' && /katex-display/.test(cls(k)));
};

/** The TeX source stored in a KaTeX node's <annotation>, if any. */
function katexTeX(n: any): string {
  if (n?.type === 'element' && n.tagName === 'annotation') return hastText(n);
  for (const c of n?.children || []) {
    const r = katexTeX(c);
    if (r) return r;
  }
  return '';
}

export function rehypePracticeBoxes({ source }: { source: string }) {
  const sliceNode = (n: any) => sliceClean(source, n.position?.start?.offset, n.position?.end?.offset);
  // Wrap every display-math block (at any depth) in its own colour box.
  const wrapMathDeep = (node: any) => {
    const ch = node?.children;
    if (!Array.isArray(ch)) return;
    for (let i = 0; i < ch.length; i++) {
      const c = ch[i];
      if (c?.type === 'element' && isDisplayMath(c)) {
        const tex = katexTeX(c);
        ch[i] = boxEl('math', [copyEl(tex ? `$$${tex}$$` : sliceNode(c)), c]);
      } else {
        wrapMathDeep(c);
      }
    }
  };
  return (tree: any) => {
    wrapMathDeep(tree);
    const out: any[] = [];
    for (const node of tree.children || []) {
      if (node.type !== 'element') { out.push(node); continue; }
      const tag = node.tagName;

      // Headings remain section titles (not boxed).
      if (/^h[1-6]$/.test(tag) || tag === 'hr') { out.push(node); continue; }

      // Display math → its own box (distinct colour).
      if (isDisplayMath(node)) { out.push(boxEl('math', [copyEl(sliceNode(node)), node])); continue; }

      // Lists → one box per <li>.
      if (tag === 'ol' || tag === 'ul') {
        const ordered = tag === 'ol';
        let idx = Number(node.properties?.start) || 1;
        for (const li of node.children || []) {
          if (li.type !== 'element' || li.tagName !== 'li') continue;
          const head: any[] = [copyEl(sliceNode(li))];
          if (ordered) head.push(numEl(`${idx}.`));
          out.push(boxEl(ordered ? 'num' : 'item', [...head, ...(li.children || [])]));
          if (ordered) idx++;
        }
        continue;
      }

      // Every paragraph / blockquote / table / code block → its own box.
      if (tag === 'p' || tag === 'blockquote' || tag === 'table' || tag === 'pre') {
        const kind = (tag === 'p' && nodeLeadKind(node)) || (tag === 'p' ? 'para' : tag);
        out.push(boxEl(kind, [copyEl(sliceNode(node)), node]));
        continue;
      }

      out.push(node);
    }
    tree.children = out;
  };
}

/** Tag short emphasis as `.concept` (coloured), leaving long italic runs plain. */
export function rehypeConceptEm() {
  const visit = (node: any) => {
    if (node?.type === 'element' && node.tagName === 'em') {
      const txt = hastText(node).trim();
      if (txt.length > 0 && txt.length <= 60) {
        node.properties = node.properties || {};
        const cls = node.properties.className || [];
        node.properties.className = [...(Array.isArray(cls) ? cls : [cls]), 'concept'];
      }
    }
    (node?.children || []).forEach(visit);
  };
  return (tree: any) => visit(tree);
}

/** Copy-to-clipboard button for a box's markdown/LaTeX source. */
export function CopyButton({ tex }: { tex: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="pbox__copy"
      title="Copy LaTeX / Markdown source"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard?.writeText(tex).then(
          () => { setDone(true); setTimeout(() => setDone(false), 1200); },
          () => {},
        );
      }}
    >
      {done ? '✓' : '⧉ LaTeX'}
    </button>
  );
}

/** react-markdown component map that renders the injected `<pcopy>` elements. */
export const practiceBoxComponents: Components = {
  // @ts-expect-error custom element injected by rehypePracticeBoxes
  pcopy: ({ node }: any) => <CopyButton tex={String(node?.properties?.tex ?? '')} />,
};

/**
 * Convert a study guide's tab-separated "Glossary of Key Terms" table into a
 * bullet list (`- **Term** — Definition`) so each term becomes its own box.
 */
export function prepareStudyGuide(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let inGloss = false;
  for (const l of lines) {
    if (/Glossary of Key Terms/i.test(l)) { inGloss = true; out.push(l); continue; }
    if (inGloss) {
      if (/^#{1,6}\s/.test(l) || /Reference Table/i.test(l)) { inGloss = false; out.push(l); continue; }
      const tab = l.indexOf('\t');
      if (tab > 0) {
        const term = l.slice(0, tab).trim();
        const def = l.slice(tab + 1).trim();
        if (term && term.toLowerCase() !== 'term') out.push(`- **${term}** — ${def}`);
        continue; // drop the header row / blank
      }
      out.push(l);
      continue;
    }
    out.push(l);
  }
  return out.join('\n');
}
