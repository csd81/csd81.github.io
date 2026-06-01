/** Calculus books — raw markdown with live (computed) figures swapped in. */
import { lazy, Suspense, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import type { Components } from 'react-markdown';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { normalizeMath } from '../../shared/ui/normalizeMath';
import { useLang, type Bi, type Lang } from '../../shared/providers/LanguageProvider';
import '../../pages/home.css';
import '../ila/ila.css';

const CalcFigure = lazy(() => import('./figures'));

const RAW = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

interface Chapter { num: number; title: string; sections: string[]; body: string; }
/** A book holds a per-language chapter set; `en` may be empty or partial. */
interface Book { id: string; title: Bi; author: Bi; blurb: Bi; chapters: Record<Lang, Chapter[]>; }

/**
 * Split a (preprocessed) book into chapters on a chapter heading — either the
 * Hungarian `#{1,3} N. fejezet` or the English `#{1,3} Chapter N` form. The
 * title is the heading line that follows; `sections` lists the `## N.M.`
 * subsection headings (for a chapter-card table of contents). Content before
 * the first chapter (book title/author) is dropped.
 */
const FEJEZET = /^#{1,3}\s+(?:(\d+)\.\s+fejezet|Chapter\s+(\d+)\.?)\s*$/i;
const fejNum = (l: string): number | null => { const m = l.match(FEJEZET); return m ? parseInt(m[1] ?? m[2], 10) : null; };
function splitChapters(md: string): Chapter[] {
  const lines = md.split('\n');
  const starts: number[] = [];
  lines.forEach((l, i) => { if (FEJEZET.test(l)) starts.push(i); });
  if (starts.length === 0) return [{ num: 1, title: '', sections: [], body: prepareFootnotes(md) }];
  return starts.map((start, k) => {
    const end = k + 1 < starts.length ? starts[k + 1] : lines.length;
    const num = fejNum(lines[start])!;
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

const META: Record<string, { title: Bi; author: Bi; blurb: Bi }> = {
  kalkulus1: {
    title: { hu: 'Kalkulus informatikusoknak I.', en: 'Calculus for Computer Scientists I.' },
    author: { hu: 'Győri István, Pituk Mihály', en: 'István Győri, Mihály Pituk' },
    blurb: { hu: 'Halmazok, függvények, sorozatok, határérték, differenciálszámítás.', en: 'Sets, functions, sequences, limits, differential calculus.' },
  },
  kalkulus2: {
    title: { hu: 'Kalkulus informatikusoknak II.', en: 'Calculus for Computer Scientists II.' },
    author: { hu: 'Győri István, Pituk Mihály', en: 'István Győri, Mihály Pituk' },
    blurb: { hu: 'Végtelen sorok, integrálszámítás, többváltozós analízis.', en: 'Infinite series, integral calculus, multivariable analysis.' },
  },
  'anal-tk1b': {
    title: { hu: 'Matematikai analízis I.', en: 'Mathematical Analysis I.' },
    author: { hu: 'Dr. Szalkai István, Mikó Teréz · Pannon Egyetem', en: 'Dr. István Szalkai, Teréz Mikó · University of Pannonia' },
    blurb: { hu: 'Alapfogalmak, függvények, sorozatok, határérték, deriválás (0–7. fejezet).', en: 'Fundamentals, functions, sequences, limits, differentiation (ch. 0–7).' },
  },
  'kalkulus2-peldatar': {
    title: { hu: 'Kalkulus II. Példatár', en: 'Calculus II. Problem Book' },
    author: { hu: 'Szalkai István, Dósa György · Pannon Egyetem', en: 'István Szalkai, György Dósa · University of Pannonia' },
    blurb: { hu: 'Megoldott feladatgyűjtemény: minden feladat alatt az Útmutatás és a Megoldás (10 fejezet, F1–F10).', en: 'Worked problem collection: each exercise followed by its Hint and Solution (10 chapters, F1–F10).' },
  },
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

/**
 * Group source files by book id: `<id>.md` is the Hungarian (canonical) source,
 * `<id>_en.md` is its (possibly partial) English translation. A book needs a HU
 * source; its EN chapter set may be empty or cover only some chapters.
 */
const byBase: Record<string, { hu?: string; en?: string }> = {};
for (const [path, md] of Object.entries(RAW)) {
  const file = path.replace(/^\.\/content\//, '').replace(/\.md$/, '');
  const en = file.match(/^(.*)_en$/);
  if (en) (byBase[en[1]] ??= {}).en = md;
  else (byBase[file] ??= {}).hu = md;
}

const FALLBACK_META = (id: string) => ({ title: { hu: id, en: id }, author: { hu: '', en: '' }, blurb: { hu: '', en: '' } });

const BOOKS: Book[] = Object.entries(byBase)
  .filter(([, v]) => v.hu) // a book must have a canonical (HU) source
  .map(([id, v]) => {
    const m = META[id] ?? FALLBACK_META(id);
    return {
      id, ...m,
      chapters: {
        hu: splitChapters(prepareCalcMd(id, v.hu!)),
        en: v.en ? splitChapters(prepareCalcMd(id, v.en)) : [],
      } as Record<Lang, Chapter[]>,
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

/**
 * Chapters for the active language: Hungarian is canonical; in English we use
 * the translated chapter where it exists and fall back to the Hungarian chapter
 * (by number) where it doesn't — so partial translations still render fully.
 */
function chaptersFor(book: Book, lang: Lang): Chapter[] {
  if (lang !== 'en' || book.chapters.en.length === 0) return book.chapters.hu;
  return book.chapters.hu.map((h) => book.chapters.en.find((e) => e.num === h.num) ?? h);
}
const isTranslated = (book: Book, num: number) => book.chapters.en.some((e) => e.num === num);

export const CALC_BOOKS = BOOKS.map(({ id, title, author, blurb }) => ({ id, title, author, blurb }));

const bookById = (id: string) => BOOKS.find((b) => b.id === id);

/** Theorem-like lead words → callout colour modifier. */
const THM_KIND: Record<string, string> = {
  // Hungarian
  'Definíció': 'def', 'Tétel': 'thm', 'Példa': 'ex', 'Megjegyzés': 'note',
  'Állítás': 'claim', 'Következmény': 'cor', 'Lemma': 'lem', 'Algoritmus': 'algo',
  'Bizonyítás': 'proof', 'Jelölés': 'note', 'Összefoglalás': 'note',
  'Gyakorlat': 'ex', 'Probléma': 'claim', 'Feltétel': 'note',
  // English (for *_en.md translations)
  'Definition': 'def', 'Theorem': 'thm', 'Example': 'ex', 'Remark': 'note',
  'Proposition': 'claim', 'Statement': 'claim', 'Claim': 'claim',
  'Corollary': 'cor', 'Consequence': 'cor', 'Algorithm': 'algo',
  'Proof': 'proof', 'Notation': 'note', 'Summary': 'note',
  'Exercise': 'ex', 'Problem': 'claim', 'Condition': 'note',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/** The callout modifier for a numbered-item / proof lead text like "0.26. Tétel". */
function leadKindFromText(txt: string): string | null {
  const m = /^\s*\d+(?:\.\d+)*\.?\s*([A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű]+)/.exec(txt);
  if (m && THM_KIND[m[1]]) return THM_KIND[m[1]];
  if (/^\s*(Bizonyítás|Proof)/.test(txt)) return 'proof';
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
function rehypeCallouts({ qed, source }: { qed: boolean; source: string }) {
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

/**
 * Tag *short* emphasis as concept terms (`.concept`) so only those get the
 * bold+colour highlight. Long italic runs — e.g. whole theorem statements,
 * which Szalkai/Győri italicise entirely — stay plain italic. Threshold is on
 * the emphasised text length (math annotations inflate statement length, which
 * is what we want: statements with math stay un-highlighted).
 */
function rehypeConceptEm() {
  const visit = (node: any) => {
    if (node?.type === 'element' && node.tagName === 'em') {
      const txt = hastText(node).trim();
      if (txt.length > 0 && txt.length <= 50) {
        node.properties = node.properties || {};
        const cls = node.properties.className || [];
        node.properties.className = [...(Array.isArray(cls) ? cls : [cls]), 'concept'];
      }
    }
    (node?.children || []).forEach(visit);
  };
  return (tree: any) => visit(tree);
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
function prepareFootnotes(body: string): string {
  const SUP: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  const desup = (s: string) => s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => SUP[c]);
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

/** UI strings for the calc chrome (everything else comes from the markdown). */
const UI = {
  kicker: { hu: 'Analízis · Calculus', en: 'Analysis · Calculus' },
  landingTitle: { hu: 'Kalkulus könyvek', en: 'Calculus books' },
  landingLead: { hu: 'Teljes tankönyvek Markdown formában, KaTeX-renderelt képletekkel és élő (számolt) ábrákkal.', en: 'Full textbooks in Markdown, with KaTeX-rendered formulas and live (computed) figures.' },
  books: { hu: 'Könyvek', en: 'Books' },
  chapters: { hu: 'Fejezetek', en: 'Chapters' },
  chapterWord: { hu: 'fejezet', en: 'chapters' },
  bookNotFound: { hu: 'A könyv nem található.', en: 'Book not found.' },
  chapterNotFound: { hu: 'A fejezet nem található.', en: 'Chapter not found.' },
  chapterFallback: { hu: 'fejezet', en: 'Chapter' },
  inProgress: { hu: 'Az angol fordítás folyamatban — ez a fejezet egyelőre magyarul jelenik meg.', en: 'English translation in progress — this chapter is shown in Hungarian for now.' },
} satisfies Record<string, Bi>;

/** A chapter's display title, with a localized fallback when untitled. */
const chTitle = (c: Chapter, lang: Lang) => c.title || (lang === 'hu' ? `${c.num}. fejezet` : `Chapter ${c.num}`);

function Landing() {
  const { t } = useLang();
  return (
    <div className="ila">
      <p className="ila__kicker">{t(UI.kicker)}</p>
      <h1 className="ila__title">{t(UI.landingTitle)}</h1>
      <p className="ila__cite">{t(UI.landingLead)}</p>
      <ul className="ila__grid">
        {BOOKS.map((b, i) => (
          <li key={b.id}>
            <Link to={`/calc/${b.id}`} className="chcard">
              <span className="chcard__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="chcard__body">
                <span className="chcard__title">{t(b.title)}</span>
                <span className="chcard__blurb">{t(b.author)} · {b.chapters.hu.length} {t(UI.chapterWord)}</span>
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
  const { t, lang } = useLang();
  const book = id ? bookById(id) : undefined;
  if (!book) {
    return (
      <div className="ila">
        <Link to="/calc" className="ila__back">← {t(UI.books)}</Link>
        <p className="ila__cite">{t(UI.bookNotFound)}</p>
      </div>
    );
  }
  const chapters = chaptersFor(book, lang);
  return (
    <div className="ila">
      <Link to="/calc" className="ila__back">← {t(UI.books)}</Link>
      <p className="ila__kicker">{t(UI.kicker)}</p>
      <h1 className="ila__title">{t(book.title)}</h1>
      <p className="ila__cite">{t(book.author)}</p>
      <ul className="ila__grid">
        {chapters.map((c) => (
          <li key={c.num}>
            <Link to={`/calc/${book.id}/${c.num}`} className="chcard">
              <span className="chcard__num">{String(c.num).padStart(2, '0')}</span>
              <span className="chcard__body">
                <span className="chcard__title">{chTitle(c, lang)}</span>
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
  const { t, lang } = useLang();
  const book = id ? bookById(id) : undefined;
  const chapters = book ? chaptersFor(book, lang) : [];
  const idx = chapters.findIndex((c) => String(c.num) === ch);
  if (!book || idx < 0) {
    return (
      <div className="ila">
        <Link to={`/calc/${id ?? ''}`} className="ila__back">← {t(UI.chapters)}</Link>
        <p className="ila__cite">{t(UI.chapterNotFound)}</p>
      </div>
    );
  }
  const c = chapters[idx];
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];
  const qed = book.id === 'anal-tk1b'; // Szalkai marks every item's end with □
  const source = normalizeMath(c.body); // same string react-markdown parses (for box-source offsets)
  const fallback = lang === 'en' && book.chapters.en.length > 0 && !isTranslated(book, c.num);
  const components = { ...bookComponents(book.id), calccopy: ({ node }: any) => <CopyButton tex={String(node?.properties?.tex ?? '')} /> } as Components;
  return (
    <div className="ila">
      <Link to={`/calc/${book.id}`} className="ila__back">← {t(book.title)}</Link>
      <p className="ila__kicker">{t(book.title)} · {chTitle(c, lang)}</p>
      <h1 className="ila__title">{chTitle(c, lang)}</h1>
      {fallback && <p className="calc-i18n-note">{t(UI.inProgress)}</p>}
      <MarkdownView className="calc-prose" markdown={c.body} components={components} rehypePlugins={[[rehypeCallouts, { qed, source }], rehypeConceptEm]} />
      <nav className="calc-chnav">
        {prev
          ? <Link to={`/calc/${book.id}/${prev.num}`} className="ila__back">← {chTitle(prev, lang)}</Link>
          : <span />}
        {next
          ? <Link to={`/calc/${book.id}/${next.num}`} className="ila__back">{chTitle(next, lang)} →</Link>
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
