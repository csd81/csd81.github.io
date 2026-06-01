/** Calculus books — raw markdown with live (computed) figures swapped in. */
import { lazy, Suspense, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import type { Components } from 'react-markdown';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { normalizeMath } from '../../shared/ui/normalizeMath';
import '../../pages/home.css';
import '../ila/ila.css';

const CalcFigure = lazy(() => import('./figures'));

const RAW = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

interface Chapter { num: number; title: string; sections: string[]; body: string; }
interface Book { id: string; title: string; author: string; blurb: string; chapters: Chapter[]; }

/**
 * Split a (preprocessed) book into chapters on `#{1,3} N. fejezet` headings.
 * The title is the heading line that follows; `sections` lists the `## N.M.`
 * subsection headings (for a chapter-card table of contents). Content before
 * the first chapter (book title/author) is dropped.
 */
const FEJEZET = /^#{1,3}\s+(\d+)\.\s+fejezet\s*$/;
function splitChapters(md: string): Chapter[] {
  const lines = md.split('\n');
  const starts: number[] = [];
  lines.forEach((l, i) => { if (FEJEZET.test(l)) starts.push(i); });
  if (starts.length === 0) return [{ num: 1, title: '', sections: [], body: prepareFootnotes(md) }];
  return starts.map((start, k) => {
    const end = k + 1 < starts.length ? starts[k + 1] : lines.length;
    const num = parseInt(lines[start].match(FEJEZET)![1], 10);
    let title = '', bodyStart = start + 1;
    for (let j = start + 1; j < end; j++) {
      const t = lines[j].trim();
      if (t === '') continue;
      const h = t.match(/^#{1,3}\s+(.*)$/);
      if (h) { title = h[1].trim(); bodyStart = j + 1; }
      break;
    }
    // Drop standalone `---` page-break rules; GFM footnotes (incl. the manual
    // ones, normalised by prepareFootnotes) are gathered to the chapter end by
    // remark-gfm in the single render.
    const kept = lines.slice(bodyStart, end).filter((l) => !/^-{3,}\s*$/.test(l));
    const body = prepareFootnotes(kept.join('\n').trim());
    const sections = body.split('\n')
      .map((l) => l.match(/^##\s+([\d.]+\.?\s*.+)$/)?.[1]?.trim())
      .filter((s): s is string => !!s);
    return { num, title, sections, body };
  });
}

const META: Record<string, { title: string; author: string; blurb: string }> = {
  kalkulus1: { title: 'Kalkulus informatikusoknak I.', author: 'Győri István, Pituk Mihály', blurb: 'Halmazok, függvények, sorozatok, határérték, differenciálszámítás.' },
  kalkulus2: { title: 'Kalkulus informatikusoknak II.', author: 'Győri István, Pituk Mihály', blurb: 'Végtelen sorok, integrálszámítás, többváltozós analízis.' },
  'anal-tk1b': { title: 'Matematikai analízis I.', author: 'Dr. Szalkai István, Mikó Teréz · Pannon Egyetem', blurb: 'Alapfogalmak, függvények, sorozatok, határérték, deriválás (0–7. fejezet).' },
};

/**
 * Szalkai (anal-tk1b) figure markers → slug. Order matters: the more specific
 * "Hatványfüggvények …" variants must precede the bare one. Done as literal
 * string replacements (the LaTeX in some markers makes regex escaping fragile).
 */
const ATK_MARKERS: [string, string][] = [
  ['*(ábra)* Hatványfüggvények pozitív kitevők esetén', 'powers-pos'],
  ['*(ábra)* Hatványfüggvények negatív kitevők esetén', 'powers-neg'],
  ['*(ábra)* Hatványfüggvények', 'powers-int'],
  ['*(ábra: Exponenciális függvények minden alapra)*', 'exp-all'],
  ['*(ábra: Logaritmikus függvények minden alapra)*', 'log-all'],
  ['*(ábra: Alapfüggvények nagyságrendje)*', 'growth-order'],
  ['*(ábra: cosec(x))*', 'cosec'],
  ['*(ábra: sec(x))*', 'sec'],
  ['*(ábra: sin(x))*', 'sin'],
  ['*(ábra: arcsin(x))*', 'arcsin'],
  ['*(ábra: cos(x))*', 'cos'],
  ['*(ábra: arccos(x))*', 'arccos'],
  ['*(ábra: $\\sqrt[3]{x}$)*', 'cbrt'],
  ['*(ábra: $\\sqrt[3]{1 - x^3}$)*', 'cbrt-1mx3'],
  ['*(ábra: $\\sqrt[3]{x^2}$)*', 'cbrt-x2'],
  ['*(ábra: $x \\cdot \\sin\\left(\\dfrac{1}{x}\\right)$ grafikonja kalkulátorképernyőn)*', 'xsin'],
  ['*(ábra: $x^2 \\cdot \\sin\\left(\\dfrac{1}{x}\\right)$ grafikonja kalkulátorképernyőn)*', 'x2sin'],
  ['*(ábra: az $y=\\sin(x)$ függvény néhány Taylor polinomja)*', 'taylor-sin'],
  ['*(ábra: $x^2$ és $-x^2$ alulról nézve)*', 'x2-negx2'],
  ['*(ábra: $G(x) = F(x) + C$)*', 'antideriv-family'],
  ['*(ábra)* $\\dfrac{1}{x^2}$', 'inv-sq'],
  ['*(ábra)* $\\log|x|$', 'log-abs'],
  ['*(ábra)* $\\sin\\dfrac{1}{x}$ („karambolfüggvény")', 'karambol'],
  ['*(ábra)* **Trapézformula**', 'trapezoid'],
];

/**
 * Normalise figure references so the `img` renderer can swap in a live figure.
 * - kalkulus1: already `![N.N. ábra ...](pages_300/…)`.
 * - kalkulus2: text markers `*3.2. ábra.*` / `*(ábra: 4.4. ábra.)*` → `![N.N. ábra](calcfig)`.
 * - anal-tk1b: inline `*(ábra…)*` markers → `![fig:<slug>](calcfig)`.
 * Inline "lásd a N.N. ábra" prose mentions are left untouched.
 */
const prepareCalcMd = (id: string, md: string): string => {
  if (id === 'kalkulus2') {
    return md
      .replace(/^\*\(ábra:\s*(\d+\.\d+)\.\s*ábra\.\)\*\s*$/gm, '![$1. ábra](calcfig)')
      .replace(/^\*(\d+\.\d+)\.\s*ábra\.\*\s*$/gm, '![$1. ábra](calcfig)');
  }
  if (id === 'anal-tk1b') {
    let out = md;
    for (const [needle, slug] of ATK_MARKERS) out = out.split(needle).join(`![fig:${slug}](calcfig)`);
    out = out
      // long/variable-text markers (contain `*` from x_i^*, so match loosely)
      .replace(/\*\(ábra: \$f\(x\)\$ függvénygörbe alatti integrálközelítő összeg[\s\S]*?magasság\)\*/g, '![fig:riemann-tagged](calcfig)')
      .replace(/^\*\(ábra\)\* \$f' > 0\$.*$/gm, '![fig:convexity-cases](calcfig)');
    // Two remaining bare `*(ábra)*` lines: 1st = sine construction (skip), 2nd = sin wave.
    let n = 0;
    out = out.replace(/^\*\(ábra\)\*\s*$/gm, () => (++n === 2 ? '![fig:sin-wave](calcfig)' : ''));
    return out;
  }
  return md;
};

const BOOKS: Book[] = Object.entries(RAW)
  .map(([path, md]) => {
    const id = path.replace(/^\.\/content\//, '').replace(/\.md$/, '');
    const m = META[id] ?? { title: id, author: '', blurb: '' };
    return { id, ...m, chapters: splitChapters(prepareCalcMd(id, md)) };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export const CALC_BOOKS = BOOKS.map(({ id, title, author, blurb }) => ({ id, title, author, blurb }));

const bookById = (id: string) => BOOKS.find((b) => b.id === id);

/** Theorem-like lead words → callout colour modifier. */
const THM_KIND: Record<string, string> = {
  'Definíció': 'def', 'Tétel': 'thm', 'Példa': 'ex', 'Megjegyzés': 'note',
  'Állítás': 'claim', 'Következmény': 'cor', 'Lemma': 'lem', 'Algoritmus': 'algo',
  'Bizonyítás': 'proof', 'Jelölés': 'note', 'Összefoglalás': 'note',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/** The callout modifier for a numbered-item / proof lead text like "0.26. Tétel". */
function leadKindFromText(txt: string): string | null {
  const m = /^\s*\d+(?:\.\d+)*\.?\s*([A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű]+)/.exec(txt);
  if (m && THM_KIND[m[1]]) return THM_KIND[m[1]];
  if (/^\s*Bizonyítás/.test(txt)) return 'proof';
  return null;
}
/** Concatenate the text of a hast node tree. */
function hastText(n: any): string {
  if (n.type === 'text') return n.value || '';
  return (n.children || []).map(hastText).join('');
}
/** A hast `<p>` whose first element child is a `<strong>` lead → its kind. */
function nodeLeadKind(node: any): string | null {
  if (!node || node.type !== 'element' || node.tagName !== 'p') return null;
  const ch = node.children || [];
  let i = 0;
  while (i < ch.length && ch[i].type === 'text' && !ch[i].value.trim()) i++;
  const first = ch[i];
  if (!first || first.type !== 'element' || first.tagName !== 'strong') return null;
  return leadKindFromText(hastText(first));
}

/**
 * rehype plugin: wrap each theorem/definition/proof item in a `.calc-thm` box.
 * An item runs from its `**N.N. Type**` / `**Bizonyítás**` lead until the next
 * lead, heading, or a footnotes `<section>`. Proofs are their own boxes. When
 * `qed`, a □ is appended at the box end unless the next box is its proof.
 */
function rehypeCallouts(qed: boolean, source: string) {
  // A `<p>` whose entire content is one `<strong>` = a bold section header (not
  // a theorem lead, which has trailing statement text) → it breaks a box.
  const isBoldHeader = (node: any) => {
    if (!node || node.type !== 'element' || node.tagName !== 'p') return false;
    const sig = (node.children || []).filter((c: any) => !(c.type === 'text' && !c.value.trim()));
    return sig.length === 1 && sig[0].type === 'element' && sig[0].tagName === 'strong';
  };
  return (tree: any) => {
    const items: { kind: string | null; nodes: any[] }[] = [];
    let cur: { kind: string | null; nodes: any[] } | null = null;
    for (const node of tree.children || []) {
      const k = nodeLeadKind(node);
      const isBreak = (node.type === 'element' && (/^h[1-6]$/.test(node.tagName) || node.tagName === 'section')) || isBoldHeader(node);
      if (k) { cur = { kind: k, nodes: [node] }; items.push(cur); }
      else if (isBreak) { cur = { kind: null, nodes: [node] }; items.push(cur); }
      else { if (!cur) { cur = { kind: null, nodes: [] }; items.push(cur); } cur.nodes.push(node); }
    }
    const out: any[] = [];
    items.forEach((it, idx) => {
      if (it.kind === null) { out.push(...it.nodes); return; }
      const start = it.nodes[0]?.position?.start?.offset ?? 0;
      const end = items[idx + 1]?.nodes[0]?.position?.start?.offset ?? source.length;
      const tex = source.slice(start, end).replace(/^\[\^[^\]]+\]:.*$/gm, '').trim(); // drop footnote defs
      const children: any[] = [
        { type: 'element', tagName: 'calccopy', properties: { tex }, children: [] },
        ...it.nodes,
      ];
      const nextIsProof = items[idx + 1]?.kind === 'proof';
      if (qed && !nextIsProof) children.push({ type: 'element', tagName: 'span', properties: { className: ['calc-qed'] }, children: [{ type: 'text', value: '□' }] });
      out.push({ type: 'element', tagName: 'div', properties: { className: ['calc-thm', `thm--${it.kind}`] }, children });
    });
    tree.children = out;
  };
}

/** Copy-to-clipboard button for a callout box's LaTeX/markdown source. */
function CopyButton({ tex }: { tex: string }) {
  const [done, setDone] = useState(false);
  return (
    <button type="button" className="calc-copy" title="LaTeX forrás másolása"
      onClick={() => { navigator.clipboard?.writeText(tex).then(() => { setDone(true); setTimeout(() => setDone(false), 1200); }, () => {}); }}>
      {done ? '✓ másolva' : '⧉ LaTeX'}
    </button>
  );
}

/**
 * Normalise footnotes per chapter: convert the manual forms (`<sup>N)</sup>`,
 * `$^{N)}$`) to GFM `[^id]`, then renumber every footnote uniquely (the book
 * reuses ids like `[^1]` across sections, which collides in one render). Each
 * reference is paired with the next definition of the same id.
 */
const SUP: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
const desup = (s: string) => s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => SUP[c]);
function prepareFootnotes(body: string): string {
  const b = body
    .replace(/^<sup>(\d+)\)<\/sup>[ \t]+/gm, '[^sup$1]: ')
    .replace(/<sup>(\d+)\)<\/sup>/g, '[^sup$1]')
    .replace(/^\$\^\{(\d+)\)\}\$[ \t]+/gm, '[^pp$1]: ')
    .replace(/\$\^\{(\d+)\)\}\$/g, '[^pp$1]')
    .replace(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)⁾[ \t]+/gm, (_m, d: string) => `[^u${desup(d)}]: `)
    .replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)⁾/g, (_m, d: string) => `[^u${desup(d)}]`);
  const toks: { start: number; len: number; id: string; isDef: boolean }[] = [];
  const re = /\[\^([^\]\s]+)\](:?)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(b))) toks.push({ start: m.index, len: m[0].length, id: m[1], isDef: m[2] === ':' });
  const assign: (number | null)[] = new Array(toks.length).fill(null);
  const pend = new Map<string, number[]>();
  let n = 0;
  toks.forEach((t, i) => {
    if (t.isDef) { n++; assign[i] = n; (pend.get(t.id) || []).forEach((j) => { assign[j] = n; }); pend.set(t.id, []); }
    else { const arr = pend.get(t.id) || []; arr.push(i); pend.set(t.id, arr); }
  });
  toks.forEach((_, i) => { if (assign[i] == null) { n++; assign[i] = n; } });
  let out = '', last = 0;
  toks.forEach((t, i) => { out += b.slice(last, t.start) + `[^${assign[i]}]` + (t.isDef ? ':' : ''); last = t.start + t.len; });
  return out + b.slice(last);
}

/** react-markdown components for a chapter: live figures. */
const bookComponents = (bookId: string): Components => ({
  img: ({ alt }) => {
    const a = alt ?? '';
    const figId = /^fig:(\S+)/.exec(a)?.[1] ?? /^(\d+\.\d+)/.exec(a)?.[1];
    if (!figId) return null;
    return (
      <Suspense fallback={<span className="calc-fig-loading" style={{ display: 'block', textAlign: 'center', opacity: 0.5, margin: '1.5rem 0' }}>ábra…</span>}>
        <CalcFigure book={bookId} id={figId} />
      </Suspense>
    );
  },
});

function Landing() {
  return (
    <div className="ila">
      <p className="ila__kicker">Analízis · Calculus</p>
      <h1 className="ila__title">Kalkulus könyvek</h1>
      <p className="ila__cite">Teljes tankönyvek Markdown formában, KaTeX-renderelt képletekkel és élő (számolt) ábrákkal.</p>
      <ul className="ila__grid">
        {BOOKS.map((b, i) => (
          <li key={b.id}>
            <Link to={`/calc/${b.id}`} className="chcard">
              <span className="chcard__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="chcard__body">
                <span className="chcard__title">{b.title}</span>
                <span className="chcard__blurb">{b.author} · {b.chapters.length} fejezet</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Book page — header + a card per chapter (with a section table of contents). */
function BookView() {
  const { id } = useParams();
  const book = id ? bookById(id) : undefined;
  if (!book) {
    return (
      <div className="ila">
        <Link to="/calc" className="ila__back">← Könyvek</Link>
        <p className="ila__cite">A könyv nem található.</p>
      </div>
    );
  }
  return (
    <div className="ila">
      <Link to="/calc" className="ila__back">← Könyvek</Link>
      <p className="ila__kicker">Analízis · Calculus</p>
      <h1 className="ila__title">{book.title}</h1>
      <p className="ila__cite">{book.author}</p>
      <ul className="ila__grid">
        {book.chapters.map((c) => (
          <li key={c.num}>
            <Link to={`/calc/${book.id}/${c.num}`} className="chcard">
              <span className="chcard__num">{String(c.num).padStart(2, '0')}</span>
              <span className="chcard__body">
                <span className="chcard__title">{c.title || `${c.num}. fejezet`}</span>
                {c.sections.length > 0 && (
                  <span className="chcard__desc">{c.sections.join(' · ')}</span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Single-chapter view with prev/next navigation. */
function ChapterView() {
  const { id, ch } = useParams();
  const book = id ? bookById(id) : undefined;
  const idx = book ? book.chapters.findIndex((c) => String(c.num) === ch) : -1;
  if (!book || idx < 0) {
    return (
      <div className="ila">
        <Link to={`/calc/${id ?? ''}`} className="ila__back">← Fejezetek</Link>
        <p className="ila__cite">A fejezet nem található.</p>
      </div>
    );
  }
  const c = book.chapters[idx];
  const prev = book.chapters[idx - 1];
  const next = book.chapters[idx + 1];
  const qed = book.id === 'anal-tk1b'; // Szalkai marks every item's end with □
  const source = normalizeMath(c.body); // same string react-markdown parses (for box-source offsets)
  const components = { ...bookComponents(book.id), calccopy: ({ node }: any) => <CopyButton tex={String(node?.properties?.tex ?? '')} /> } as Components;
  return (
    <div className="ila">
      <Link to={`/calc/${book.id}`} className="ila__back">← {book.title}</Link>
      <p className="ila__kicker">{book.title} · {c.num}. fejezet</p>
      <h1 className="ila__title">{c.title || `${c.num}. fejezet`}</h1>
      <MarkdownView markdown={c.body} components={components} rehypePlugins={[[rehypeCallouts, qed, source]]} />
      <nav className="calc-chnav">
        {prev
          ? <Link to={`/calc/${book.id}/${prev.num}`} className="ila__back">← {prev.num}. {prev.title}</Link>
          : <span />}
        {next
          ? <Link to={`/calc/${book.id}/${next.num}`} className="ila__back">{next.num}. {next.title} →</Link>
          : <span />}
      </nav>
    </div>
  );
}

export default function Calc() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path=":id" element={<BookView />} />
      <Route path=":id/:ch" element={<ChapterView />} />
    </Routes>
  );
}
