import type { Bilingual } from '../lib/types';

export type Block =
  | { kind: 'p'; text: Bilingual }
  | { kind: 'math'; tex: string }
  | { kind: 'theorem'; label: Bilingual; text: Bilingual; tex?: string }
  | { kind: 'algorithm'; title: Bilingual; lines: string[] }
  | { kind: 'lab'; to: string; label: Bilingual };

export interface Section {
  id: string;
  number: string;
  title: Bilingual;
  summary: Bilingual;
  blocks: Block[];
}

export const sections: Section[] = [
  {
    id: 's31',
    number: '3.1',
    title: { en: 'Review of Linear Algebra', hu: 'Lineáris algebrai előismeretek' },
    summary: {
      en: 'Determinants, invertibility, diagonal dominance and positive definiteness.',
      hu: 'Determinánsok, invertálhatóság, diagonális dominancia és pozitív definitség.',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          en: 'A square matrix A is invertible (nonsingular) exactly when det(A) ≠ 0, which is also equivalent to Ax = b having a unique solution for every b.',
          hu: 'Egy A négyzetes mátrix akkor és csak akkor invertálható (reguláris), ha det(A) ≠ 0, ami azzal is egyenértékű, hogy az Ax = b minden b-re egyértelműen megoldható.',
        },
      },
      {
        kind: 'theorem',
        label: { en: 'Triangular determinant', hu: 'Háromszögmátrix determinánsa' },
        text: {
          en: 'For a triangular matrix the determinant is the product of the diagonal entries.',
          hu: 'Háromszögmátrix determinánsa a főátlóbeli elemek szorzata.',
        },
        tex: '\\det(A) = a_{11}a_{22}\\cdots a_{nn}',
      },
      {
        kind: 'p',
        text: {
          en: 'A is (row) diagonally dominant if each diagonal entry dominates its row:',
          hu: 'A (soronként) diagonálisan domináns, ha a főátlóbeli elem dominálja a sorát:',
        },
      },
      { kind: 'math', tex: '|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|, \\qquad i = 1,\\dots,n.' },
      {
        kind: 'theorem',
        label: { en: 'Diagonal dominance ⇒ invertible', hu: 'Diagonális dominancia ⇒ invertálható' },
        text: {
          en: 'If A is diagonally dominant then A is invertible, and Gaussian elimination needs no pivoting and is stable.',
          hu: 'Ha A diagonálisan domináns, akkor invertálható, és a Gauss-elimináció főelemkiválasztás nélkül, stabilan elvégezhető.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'A symmetric A is positive definite iff xᵀAx > 0 for all x ≠ 0 — equivalently, all leading principal minors are positive.',
          hu: 'Egy szimmetrikus A akkor pozitív definit, ha xᵀAx > 0 minden x ≠ 0 esetén — ezzel egyenértékűen minden bal felső főminor pozitív.',
        },
      },
    ],
  },
  {
    id: 's32',
    number: '3.2',
    title: { en: 'Triangular Systems', hu: 'Trianguláris egyenletrendszerek' },
    summary: {
      en: 'Backward substitution solves upper-triangular systems in O(n²).',
      hu: 'A visszahelyettesítés O(n²) lépésben oldja meg a felső háromszög rendszereket.',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          en: 'An upper-triangular system is solved from the bottom up: the last equation gives xₙ, then each earlier equation has a single new unknown.',
          hu: 'Egy felső háromszög rendszert alulról fölfelé oldunk meg: az utolsó egyenlet adja xₙ-t, majd minden korábbi egyenletben egyetlen új ismeretlen marad.',
        },
      },
      { kind: 'math', tex: 'x_i = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j=i+1}^{n} a_{ij} x_j\\right)' },
      {
        kind: 'algorithm',
        title: { en: 'Backward substitution', hu: 'Visszahelyettesítés' },
        lines: [
          'xₙ ← bₙ / aₙₙ',
          'for i = n−1, …, 1 do',
          '    xᵢ ← (bᵢ − Σ_{j>i} aᵢⱼ xⱼ) / aᵢᵢ',
          'end do',
        ],
      },
      {
        kind: 'p',
        text: {
          en: 'It works iff every diagonal entry is nonzero, i.e. det(A) ≠ 0. Cost: about n²/2 multiplications/divisions.',
          hu: 'Akkor működik, ha minden főátlóbeli elem nemnulla, azaz det(A) ≠ 0. Költség: kb. n²/2 szorzás/osztás.',
        },
      },
    ],
  },
  {
    id: 's33',
    number: '3.3',
    title: { en: 'Gaussian Elimination & Pivoting', hu: 'Gauss-elimináció és főelemkiválasztás' },
    summary: {
      en: 'Reduce to triangular form, then back-substitute. Pivoting controls zero pivots and rounding.',
      hu: 'Háromszög alakra hozás, majd visszahelyettesítés. A főelemkiválasztás kezeli a nulla főelemeket és a kerekítést.',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          en: 'Forward elimination uses the pivot row to clear the entries below each pivot. The multiplier is lᵢₖ = aᵢₖ / aₖₖ.',
          hu: 'Az előre elimináció a főelem sorával nullázza ki a főelem alatti elemeket. A szorzótényező lᵢₖ = aᵢₖ / aₖₖ.',
        },
      },
      { kind: 'math', tex: 'a_{ij}^{(k)} = a_{ij}^{(k-1)} - l_{ik}\\, a_{kj}^{(k-1)}, \\qquad l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}' },
      {
        kind: 'p',
        text: {
          en: 'A zero (or tiny) pivot is a problem. Partial pivoting swaps in the largest-magnitude entry in the column; complete pivoting searches the whole submatrix (and swaps columns, tracking the variable order); scaled pivoting compares entries relative to each row’s scale.',
          hu: 'A nulla (vagy nagyon kicsi) főelem gond. A részleges főelemkiválasztás a legnagyobb abszolút értékű oszlopelemet hozza be; a teljes az egész részmátrixban keres (és oszlopot is cserél, követve a változók sorrendjét); a skálázott a sorok skálájához viszonyít.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Total cost of Gaussian elimination is about n³/3 operations.',
          hu: 'A Gauss-elimináció teljes költsége kb. n³/3 művelet.',
        },
      },
      {
        kind: 'lab',
        to: '/lab?preset=ex3-22&mode=solve&method=gauss&pivot=none',
        label: { en: 'Run Example 3.22 (no pivoting)', hu: '3.22. példa futtatása (csere nélkül)' },
      },
      {
        kind: 'lab',
        to: '/lab?preset=ex3-24&mode=solve&method=gauss&pivot=partial',
        label: { en: 'Run Example 3.24/3.27 (partial pivoting)', hu: '3.24/3.27. példa (részleges)' },
      },
    ],
  },
  {
    id: 's34',
    number: '3.4',
    title: { en: 'Gauss–Jordan Elimination', hu: 'Gauss–Jordan-elimináció' },
    summary: {
      en: 'Eliminate above and below each pivot to reach (I | x) directly.',
      hu: 'A főelem alatt és fölött is eliminálunk, így közvetlenül (I | x) alakot kapunk.',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          en: 'Gauss–Jordan eliminates in every other row, then normalises each pivot row, turning the coefficient block into the identity. The solution is read straight from the last column. Cost ≈ n³/2.',
          hu: 'A Gauss–Jordan minden más sorban eliminál, majd normálja a főelem-sorokat, így az együtthatóblokkból egységmátrix lesz. A megoldás közvetlenül leolvasható az utolsó oszlopból. Költség ≈ n³/2.',
        },
      },
      {
        kind: 'lab',
        to: '/lab?preset=ex3-22&mode=solve&method=gauss-jordan&pivot=none',
        label: { en: 'Run Example 3.35 (Gauss–Jordan)', hu: '3.35. példa (Gauss–Jordan)' },
      },
    ],
  },
  {
    id: 's35',
    number: '3.5',
    title: { en: 'Tridiagonal Systems', hu: 'Tridiagonális egyenletrendszerek' },
    summary: {
      en: 'The Thomas algorithm solves tridiagonal systems in O(n).',
      hu: 'A Thomas-algoritmus O(n) lépésben old meg tridiagonális rendszereket.',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          en: 'When nonzeros sit only on the three central diagonals, a specialised elimination needs only 5n−4 multiplications/divisions — far less than n³/3.',
          hu: 'Ha a nemnulla elemek csak a három középső átlón vannak, egy speciális elimináció már 5n−4 szorzással/osztással elég — sokkal kevesebb, mint n³/3.',
        },
      },
      {
        kind: 'algorithm',
        title: { en: 'Thomas algorithm', hu: 'Thomas-algoritmus' },
        lines: [
          'for i = 2, …, n do',
          '    t ← aᵢ₋₁ / dᵢ₋₁',
          '    dᵢ ← dᵢ − t · cᵢ₋₁',
          '    bᵢ ← bᵢ − t · bᵢ₋₁',
          'end do',
          'xₙ ← bₙ / dₙ',
          'for i = n−1, …, 1 do  xᵢ ← (bᵢ − cᵢ xᵢ₊₁) / dᵢ',
        ],
      },
      {
        kind: 'lab',
        to: '/lab?preset=ex3-5-1&mode=tridiagonal',
        label: { en: 'Run the tridiagonal example', hu: 'Tridiagonális példa futtatása' },
      },
    ],
  },
  {
    id: 's36',
    number: '3.6',
    title: { en: 'Simultaneous Systems', hu: 'Szimultán egyenletrendszerek' },
    summary: {
      en: 'Same A, many right-hand sides: solve (A | B) at once.',
      hu: 'Azonos A, több jobb oldal: az (A | B) egyszerre megoldható.',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          en: 'Because pivoting decisions depend only on A, several systems Ax = b⁽ⁱ⁾ can be solved together by eliminating on the augmented (A | B). Gauss–Jordan turns it into (I | X).',
          hu: 'Mivel a főelemkiválasztás csak A-tól függ, több Ax = b⁽ⁱ⁾ rendszer együtt megoldható az (A | B) kibővített mátrixon. A Gauss–Jordan ezt (I | X) alakra hozza.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Matrix inversion is the special case B = I — see the next lesson.',
          hu: 'A mátrixinvertálás a B = I speciális eset — lásd a következő leckét.',
        },
      },
    ],
  },
  {
    id: 's37',
    number: '3.7',
    title: { en: 'Matrix Inversion & Determinants', hu: 'Mátrixinvertálás és determináns' },
    summary: {
      en: 'Invert via (A | I) → (I | A⁻¹); determinant from the signed product of pivots.',
      hu: 'Invertálás (A | I) → (I | A⁻¹) alakkal; determináns a főelemek előjeles szorzatából.',
    },
    blocks: [
      {
        kind: 'p',
        text: {
          en: 'Solving AX = I with Gauss–Jordan yields A⁻¹ in the right block. The determinant equals the product of the pivots with a sign from the row/column swaps:',
          hu: 'Az AX = I megoldása Gauss–Jordan-nal a jobb blokkban adja A⁻¹-et. A determináns a főelemek szorzata, a sor-/oszlopcserékből adódó előjellel:',
        },
      },
      { kind: 'math', tex: '\\det(A) = (-1)^{s}\\, a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}' },
      {
        kind: 'lab',
        to: '/lab?preset=ex3-38&mode=inverse&method=gauss-jordan&pivot=none',
        label: { en: 'Invert Example 3.38', hu: '3.38. példa invertálása' },
      },
      {
        kind: 'lab',
        to: '/lab?preset=ex3-39&mode=determinant&method=gauss&pivot=none',
        label: { en: 'Determinant of Example 3.39', hu: '3.39. példa determinánsa' },
      },
    ],
  },
];

export function getSection(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}
