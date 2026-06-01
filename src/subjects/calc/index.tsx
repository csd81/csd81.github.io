/** Calculus books — raw markdown with live (computed) figures swapped in. */
import { lazy, Suspense } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import type { Components } from 'react-markdown';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import '../../pages/home.css';
import '../ila/ila.css';

const CalcFigure = lazy(() => import('./figures'));

const RAW = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

interface Book { id: string; title: string; author: string; blurb: string; md: string; }

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
    return { id, ...m, md: prepareCalcMd(id, md) };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export const CALC_BOOKS = BOOKS.map(({ id, title, author, blurb }) => ({ id, title, author, blurb }));

const bookById = (id: string) => BOOKS.find((b) => b.id === id);

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
                <span className="chcard__blurb">{b.author}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
  // Swap each `![N.N. ábra …](…)` reference for the live figure (or drop it).
  const components: Components = {
    img: ({ alt }) => {
      const a = alt ?? '';
      const id = /^fig:(\S+)/.exec(a)?.[1] ?? /^(\d+\.\d+)/.exec(a)?.[1];
      if (!id) return null;
      return (
        <Suspense fallback={<span className="calc-fig-loading" style={{ display: 'block', textAlign: 'center', opacity: 0.5, margin: '1.5rem 0' }}>ábra…</span>}>
          <CalcFigure book={book.id} id={id} />
        </Suspense>
      );
    },
  };
  return (
    <div className="ila">
      <Link to="/calc" className="ila__back">← Könyvek</Link>
      <MarkdownView markdown={book.md} components={components} />
    </div>
  );
}

export default function Calc() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path=":id" element={<BookView />} />
    </Routes>
  );
}
