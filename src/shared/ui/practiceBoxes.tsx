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

const isBoldHeader = (node: any): boolean => {
  if (!node || node.type !== 'element' || node.tagName !== 'p') return false;
  const sig = (node.children || []).filter((c: any) => !(c.type === 'text' && !c.value.trim()));
  return sig.length === 1 && sig[0].type === 'element' && sig[0].tagName === 'strong';
};

const sliceClean = (source: string, a?: number, b?: number): string =>
  source.slice(a ?? 0, b ?? source.length).replace(/^\[\^[^\]]+\]:.*$/gm, '').trim();

const copyEl = (tex: string): any => ({ type: 'element', tagName: 'pcopy', properties: { tex }, children: [] });
const numEl = (label: string): any => ({
  type: 'element', tagName: 'span', properties: { className: ['pbox__num'] }, children: [{ type: 'text', value: label }],
});
const boxEl = (kind: string, children: any[]): any => ({
  type: 'element', tagName: 'div', properties: { className: ['pbox', `pbox--${kind}`] }, children,
});

/** Box numbered theorem-like items, proofs, and every list item. */
export function rehypePracticeBoxes({ source }: { source: string }) {
  return (tree: any) => {
    const kids: any[] = tree.children || [];
    const out: any[] = [];
    let i = 0;
    while (i < kids.length) {
      const node = kids[i];

      // Lists → one box per <li>.
      if (node.type === 'element' && (node.tagName === 'ol' || node.tagName === 'ul')) {
        const ordered = node.tagName === 'ol';
        let idx = Number(node.properties?.start) || 1;
        for (const li of node.children || []) {
          if (li.type !== 'element' || li.tagName !== 'li') continue;
          const tex = sliceClean(source, li.position?.start?.offset, li.position?.end?.offset);
          const head: any[] = [copyEl(tex)];
          if (ordered) head.push(numEl(`${idx}.`));
          out.push(boxEl(ordered ? 'num' : 'item', [...head, ...(li.children || [])]));
          if (ordered) idx++;
        }
        i++;
        continue;
      }

      // Theorem/def/example/proof lead → box the run up to the next lead/break.
      const kind = nodeLeadKind(node);
      if (kind) {
        const group = [node];
        let j = i + 1;
        for (; j < kids.length; j++) {
          const n = kids[j];
          const brk =
            (n.type === 'element' && (/^h[1-6]$/.test(n.tagName) || n.tagName === 'section' || n.tagName === 'ol' || n.tagName === 'ul')) ||
            isBoldHeader(n) || nodeLeadKind(n);
          if (brk) break;
          group.push(n);
        }
        const start = node.position?.start?.offset;
        const end = kids[j]?.position?.start?.offset;
        out.push(boxEl(kind, [copyEl(sliceClean(source, start, end)), ...group]));
        i = j;
        continue;
      }

      out.push(node);
      i++;
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
