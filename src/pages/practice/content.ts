import type { Bi } from '../../shared/providers/LanguageProvider';

// Worked-example sources (rendered markdown with KaTeX). We slice the exact
// example block out of each chapter's theory so the Practice page stays in sync.
import lagrangeEn from '../../chapters/interpolation/content/theory/lagrange.en.md?raw';
import lagrangeHu from '../../chapters/interpolation/content/theory/lagrange.hu.md?raw';
import newtonEn from '../../chapters/interpolation/content/theory/newton.en.md?raw';
import newtonHu from '../../chapters/interpolation/content/theory/newton.hu.md?raw';
import hermiteEn from '../../chapters/interpolation/content/theory/hermite.en.md?raw';
import hermiteHu from '../../chapters/interpolation/content/theory/hermite.hu.md?raw';
import diffEn from '../../chapters/numerical-calculus/content/lessons/en/7_1.md?raw';
import diffHu from '../../chapters/numerical-calculus/content/lessons/hu/7_1.md?raw';
import ncEn from '../../chapters/numerical-calculus/content/lessons/en/7_3.md?raw';
import ncHu from '../../chapters/numerical-calculus/content/lessons/hu/7_3.md?raw';
import gqEn from '../../chapters/numerical-calculus/content/lessons/en/7_4.md?raw';
import gqHu from '../../chapters/numerical-calculus/content/lessons/hu/7_4.md?raw';
import ch3SolEn from './ch3sol_en.md?raw';
import ch3SolHu from './ch3sol_hu.md?raw';

/** Slice from an example heading up to (but not including) the next example/heading. */
function slice(src: string, start: RegExp, boundary: RegExp): string {
  const m = src.match(start);
  if (!m || m.index === undefined) return '';
  const rest = src.slice(m.index + m[0].length);
  const b = rest.search(boundary);
  return (m[0] + (b >= 0 ? rest.slice(0, b) : rest)).trim();
}

const EN_B = /\*\*Example \d+\.\d+\.?\*\*|\n#{1,3} |\n\[\^|\n### Exercises|\n\*\*Exercises/;
const HU_B = /\*\*\d+\.\d+\.? *példa\.?\*\*|\n#{1,3} |\n\[\^|\n### Feladat|\n\*\*Feladat/;

const ex = (srcEn: string, reEn: RegExp, srcHu: string, reHu: RegExp): Bi => ({
  en: slice(srcEn, reEn, EN_B),
  hu: slice(srcHu, reHu, HU_B),
});

export interface WorkedExample {
  label: Bi;
  body: Bi; // markdown
}
export interface Topic {
  title: Bi;
  items: WorkedExample[];
}

// --- ch3: Gaussian elimination / pivoting / Gauss–Jordan / inverse (interactive in the chapter Lab) ---
const ch3lab: Bi = {
  en: '\n\n*Step through every elimination step interactively in the [Elimination Lab](/linear-systems#lab).*',
  hu: '\n\n*Lépésről lépésre az [Eliminációs laborban](/linear-systems#lab) követheted végig.*',
};

/** Slice a worked example from its heading to the end of the line containing \square. */
function sliceToSquare(src: string, label: RegExp): string {
  const m = src.match(label);
  if (!m || m.index === undefined) return '';
  const tail = src.slice(m.index);
  const sq = tail.indexOf('\\square');
  if (sq < 0) return tail.trim();
  const nl = tail.indexOf('\n', sq);
  return tail.slice(0, nl >= 0 ? nl : tail.length).trim();
}

/** Full textbook worked solution for a ch3 example, appended below the Lab pointer. */
const ch3sol = (reEn: RegExp, reHu: RegExp): Bi => ({
  en: `${ch3lab.en}\n\n---\n\n**Worked solution.**\n\n${sliceToSquare(ch3SolEn, reEn)}`,
  hu: `${ch3lab.hu}\n\n---\n\n**Kidolgozott megoldás.**\n\n${sliceToSquare(ch3SolHu, reHu)}`,
});

const SOL = {
  e324: ch3sol(/\*\*Example 3\.24\.\*\*/, /\*\*3\.24\. *példa\.\*\*/),
  e327: ch3sol(/\*\*Example 3\.27\.\*\*/, /\*\*3\.27\. *példa\.\*\*/),
  e329: ch3sol(/\*\*Example 3\.29\.\*\*/, /\*\*3\.29\. *példa\.\*\*/),
  e335: ch3sol(/\*\*Example 3\.35\.\*\*/, /\*\*3\.35\. *példa\.\*\*/),
  e338: ch3sol(/\*\*Example 3\.38\.\*\*/, /\*\*3\.38\. *példa\.\*\*/),
};

const ch3: Topic = {
  title: {
    en: 'Gaussian elimination, partial & complete pivoting, Gauss–Jordan, matrix inversion',
    hu: 'Gauss-elimináció, részleges és teljes főelemkiválasztás, Gauss–Jordan-elimináció, mátrixinvertálás',
  },
  items: [
    {
      label: { en: 'Example 3.24 — Gaussian elimination', hu: '3.24. példa — Gauss-elimináció' },
      body: {
        en: `**Example 3.24.** Solve $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ with $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 2&-1&0&-3&8\\\\ 2&-1&1&5&2\\\\ -3&1&1&-2&-5\\\\ 2&4&0&-1&21 \\end{array}\\right).$$ Plain Gaussian elimination stalls: after eliminating column 1 the $(2,2)$ pivot becomes $0$, so a row interchange is needed (see Example 3.27). With pivoting the solution is $\\mathbf{x}=(4,3,2,-1)$.${SOL.e324.en}`,
        hu: `**3.24. példa.** Oldd meg az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ rendszert, ahol $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 2&-1&0&-3&8\\\\ 2&-1&1&5&2\\\\ -3&1&1&-2&-5\\\\ 2&4&0&-1&21 \\end{array}\\right).$$ A sima Gauss-elimináció elakad: az első oszlop kiküszöbölése után a $(2,2)$ főelem $0$ lesz, ezért sorcsere kell (lásd 3.27. példa). Főelemkiválasztással a megoldás $\\mathbf{x}=(4,3,2,-1)$.${SOL.e324.hu}`,
      },
    },
    {
      label: { en: 'Example 3.27 — partial pivoting', hu: '3.27. példa — részleges főelemkiválasztás' },
      body: {
        en: `**Example 3.27.** Solve the Example 3.24 system with *partial pivoting*: before each step swap the row whose pivot-column entry has the largest absolute value into the pivot position, then eliminate. This avoids the zero pivot and yields $\\mathbf{x}=(4,3,2,-1)$.${SOL.e327.en}`,
        hu: `**3.27. példa.** Oldd meg a 3.24. példa rendszerét *részleges főelemkiválasztással*: minden lépés előtt cseréld a főelem-oszlop legnagyobb abszolút értékű elemét tartalmazó sort a főelem helyére, majd eliminálj. Ez elkerüli a nulla főelemet, a megoldás $\\mathbf{x}=(4,3,2,-1)$.${SOL.e327.hu}`,
      },
    },
    {
      label: { en: 'Example 3.29 — complete pivoting', hu: '3.29. példa — teljes főelemkiválasztás' },
      body: {
        en: `**Example 3.29.** Solve $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right)$$ with *complete pivoting*: each step brings the largest-magnitude entry of the whole remaining submatrix to the pivot via a row **and** a column swap (column swaps reorder the unknowns — here the order becomes $x_4,x_3,x_2,x_1$). The solution is $\\mathbf{x}=(-3,2,4,-2)$.${SOL.e329.en}`,
        hu: `**3.29. példa.** Oldd meg a $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right)$$ rendszert *teljes főelemkiválasztással*: minden lépésben a teljes maradék részmátrix legnagyobb abszolút értékű elemét hozzuk a főelembe sor- **és** oszlopcserével (az oszlopcsere átrendezi az ismeretleneket — itt a sorrend $x_4,x_3,x_2,x_1$ lesz). A megoldás $\\mathbf{x}=(-3,2,4,-2)$.${SOL.e329.hu}`,
      },
    },
    {
      label: { en: 'Example 3.35 — Gauss–Jordan elimination', hu: '3.35. példa — Gauss–Jordan-elimináció' },
      body: {
        en: `**Example 3.35.** Apply Gauss–Jordan elimination to the same augmented matrix $$\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right):$$ drive the coefficient block to the identity $\\mathbf{I}$; the solution then appears directly in the last column, $\\mathbf{x}=(-3,2,4,-2)$.${SOL.e335.en}`,
        hu: `**3.35. példa.** Alkalmazz Gauss–Jordan-eliminációt ugyanarra a kibővített mátrixra: $$\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right):$$ hozd az együtthatóblokkot az $\\mathbf{I}$ egységmátrixra; a megoldás ekkor közvetlenül az utolsó oszlopban jelenik meg, $\\mathbf{x}=(-3,2,4,-2)$.${SOL.e335.hu}`,
      },
    },
    {
      label: { en: 'Example 3.38 — matrix inversion', hu: '3.38. példa — mátrixinvertálás' },
      body: {
        en: `**Example 3.38.** Invert $\\mathbf{A}=\\left(\\begin{smallmatrix} 1&0&2\\\\ -1&1&0\\\\ -2&0&-1 \\end{smallmatrix}\\right)$ by running Gauss–Jordan on $[\\mathbf{A}\\,|\\,\\mathbf{I}]$ until it becomes $[\\mathbf{I}\\,|\\,\\mathbf{A}^{-1}]$: $$\\mathbf{A}^{-1}=\\frac{1}{3}\\begin{pmatrix} -1&0&-2\\\\ -1&3&-2\\\\ 2&0&1 \\end{pmatrix}.$$${SOL.e338.en}`,
        hu: `**3.38. példa.** Invertáld az $\\mathbf{A}=\\left(\\begin{smallmatrix} 1&0&2\\\\ -1&1&0\\\\ -2&0&-1 \\end{smallmatrix}\\right)$ mátrixot Gauss–Jordan-eliminációval az $[\\mathbf{A}\\,|\\,\\mathbf{I}]$ mátrixon, amíg $[\\mathbf{I}\\,|\\,\\mathbf{A}^{-1}]$ alakot nem kapsz: $$\\mathbf{A}^{-1}=\\frac{1}{3}\\begin{pmatrix} -1&0&-2\\\\ -1&3&-2\\\\ 2&0&1 \\end{pmatrix}.$$${SOL.e338.hu}`,
      },
    },
  ],
};

// --- ch9 line fit (Example 9.2), reconstructed from the chapter content ---
const line92: Bi = {
  en: `**Example 9.2.** Find the line $y=ax+b$ of best fit to the data below. We tabulate $x_i^2$ and $x_iy_i$ and their column sums.

| $x_i$ | $y_i$ | $x_i^2$ | $x_iy_i$ |
|---|---|---|---|
| -1.0 | 0.0 | 1.00 | 0.00 |
| 1.0 | 1.2 | 1.00 | 1.20 |
| 2.5 | 1.9 | 6.25 | 4.75 |
| 3.0 | 2.5 | 9.00 | 7.50 |
| 4.0 | 3.1 | 16.00 | 12.40 |
| 4.5 | 3.2 | 20.25 | 14.40 |
| 6.0 | 4.5 | 36.00 | 27.00 |
| **Σ 20.0** | **16.4** | **89.50** | **67.25** |

Substituting the sums into the normal equations $89.5a+20.0b=67.25$, $20.0a+7b=16.4$ gives $a=0.630243$, $b=0.542163$. The fitting error is $\\sum_{i=0}^{6}(0.630243x_i+0.542163-y_i)^2=0.124691$.`,
  hu: `**9.2. példa.** Keresd meg az alábbi adatokra legjobban illeszkedő $y=ax+b$ egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_iy_i$ értékeket, az utolsó sorban az összegeket.

| $x_i$ | $y_i$ | $x_i^2$ | $x_iy_i$ |
|---|---|---|---|
| -1.0 | 0.0 | 1.00 | 0.00 |
| 1.0 | 1.2 | 1.00 | 1.20 |
| 2.5 | 1.9 | 6.25 | 4.75 |
| 3.0 | 2.5 | 9.00 | 7.50 |
| 4.0 | 3.1 | 16.00 | 12.40 |
| 4.5 | 3.2 | 20.25 | 14.40 |
| 6.0 | 4.5 | 36.00 | 27.00 |
| **Σ 20.0** | **16.4** | **89.50** | **67.25** |

Az összegeket a normálegyenletekbe helyettesítve ($89.5a+20.0b=67.25$, $20.0a+7b=16.4$) a megoldás $a=0.630243$, $b=0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i+0.542163-y_i)^2=0.124691$.`,
};

export const TOPICS: Topic[] = [
  ch3,
  {
    title: { en: 'Lagrange interpolation', hu: 'Lagrange-interpoláció' },
    items: [{ label: { en: 'Example 6.2', hu: '6.2. példa' },
      body: ex(lagrangeEn, /\*\*Example 6\.2\.\*\*/, lagrangeHu, /\*\*6\.2\. *példa\.\*\*/) }],
  },
  {
    title: { en: 'Newton interpolating polynomial', hu: 'Newton-féle interpolációs polinom' },
    items: [{ label: { en: 'Example 6.15', hu: '6.15. példa' },
      body: ex(newtonEn, /\*\*Example 6\.15\.\*\*/, newtonHu, /\*\*6\.15\. *példa\.\*\*/) }],
  },
  {
    title: { en: 'Hermite interpolation', hu: 'Hermite-interpoláció' },
    items: [{ label: { en: 'Example 6.21', hu: '6.21. példa' },
      body: ex(hermiteEn, /\*\*Example 6\.21\.\*\*/, hermiteHu, /\*\*6\.21\. *példa\.\*\*/) }],
  },
  {
    title: {
      en: 'Numerical differentiation (first/second differences, second derivative)',
      hu: 'Numerikus differenciálás (elsőrendű, másodrendű differenciák, második derivált)',
    },
    items: [
      { label: { en: 'Example 7.1', hu: '7.1. példa' }, body: ex(diffEn, /\*\*Example 7\.1\.\*\*/, diffHu, /\*\*7\.1\. *példa\.\*\*/) },
      { label: { en: 'Example 7.2', hu: '7.2. példa' }, body: ex(diffEn, /\*\*Example 7\.2\.\*\*/, diffHu, /\*\*7\.2\. *példa\.\*\*/) },
      { label: { en: 'Example 7.4', hu: '7.4. példa' }, body: ex(diffEn, /\*\*Example 7\.4\.\*\*/, diffHu, /\*\*7\.4\. *példa\.\*\*/) },
    ],
  },
  {
    title: {
      en: 'Trapezoidal rule, Simpson’s rule, two-point Gaussian quadrature',
      hu: 'Trapézformula, Simpson-formula, két pontos Gauss-féle kvadratúra',
    },
    items: [
      { label: { en: 'Example 7.7', hu: '7.7. példa' }, body: ex(ncEn, /\*\*Example 7\.7\.\*\*/, ncHu, /\*\*7\.7\. *példa\.\*\*/) },
      { label: { en: 'Example 7.8', hu: '7.8. példa' }, body: ex(ncEn, /\*\*Example 7\.8\.\*\*/, ncHu, /\*\*7\.8\. *példa\.\*\*/) },
      { label: { en: 'Example 7.11', hu: '7.11. példa' }, body: ex(gqEn, /\*\*Example 7\.11\.\*\*/, gqHu, /\*\*7\.11\. *példa\.\*\*/) },
      { label: { en: 'Example 7.15', hu: '7.15. példa' }, body: ex(gqEn, /\*\*Example 7\.15\.\*\*/, gqHu, /\*\*7\.15\. *példa\.\*\*/) },
    ],
  },
  {
    title: { en: 'Fitting a line', hu: 'Egyenes illesztése' },
    items: [{ label: { en: 'Example 9.2', hu: '9.2. példa' }, body: line92 }],
  },
];
