import type { Bilingual } from '../lib/types';

export type Block =
  | { kind: 'p'; text: Bilingual }
  | { kind: 'math'; tex: string }
  | { kind: 'theorem'; label: Bilingual; text: Bilingual; tex?: string }
  | { kind: 'algorithm'; title: Bilingual; lines: string[] }
  | { kind: 'lab'; to: string; label: Bilingual }
  | { kind: 'glossary'; deck: string }
  | { kind: 'flashcards'; deck: string };

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
      {
        kind: 'theorem',
        label: { en: 'Determinant properties (Thm 3.1)', hu: 'Determináns-tulajdonságok (3.1. tétel)' },
        text: {
          en: 'det(AB) = det(A)det(B), det(Aᵀ) = det(A), det(A⁻¹) = 1/det(A). A row swap flips the sign; scaling a row by c scales det by c; adding a multiple of one row to another leaves det unchanged. Laplace (cofactor) expansion along row i:',
          hu: 'det(AB) = det(A)det(B), det(Aᵀ) = det(A), det(A⁻¹) = 1/det(A). Sorcsere előjelet vált; egy sor c-szeresével det c-szereződik; egy sor többszörösének másikhoz adása nem változtat. Kifejtési (Laplace-) tétel az i. sor szerint:',
        },
        tex: '\\det(A) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij}\\,\\det(A_{ij})',
      },
      {
        kind: 'theorem',
        label: { en: 'Invertibility equivalences (Thm 3.2–3.3)', hu: 'Invertálhatósági ekvivalenciák (3.2–3.3)' },
        text: {
          en: 'The following are equivalent: det(A) ≠ 0; A is invertible; Ax = b has a unique solution for every b. Moreover Ax = 0 has a nontrivial solution iff A is singular.',
          hu: 'Ekvivalensek: det(A) ≠ 0; A invertálható; Ax = b minden b-re egyértelműen megoldható. Továbbá Ax = 0-nak akkor és csak akkor van nemtriviális megoldása, ha A szinguláris.',
        },
      },
      {
        kind: 'theorem',
        label: { en: 'Inverse of a product (Thm 3.4)', hu: 'Szorzat inverze (3.4. tétel)' },
        text: {
          en: 'If A and B are invertible, then AB is invertible and the inverse reverses the order:',
          hu: 'Ha A és B invertálható, akkor AB is invertálható, és az inverz megfordítja a sorrendet:',
        },
        tex: '(AB)^{-1} = B^{-1}A^{-1}',
      },
      {
        kind: 'theorem',
        label: { en: 'Triangular products & inverses (Thm 3.6)', hu: 'Háromszög szorzatok és inverzek (3.6. tétel)' },
        text: {
          en: 'The product of lower (upper) triangular matrices is lower (upper) triangular, and the inverse of a lower (upper) triangular matrix is again lower (upper) triangular.',
          hu: 'Alsó (felső) háromszögmátrixok szorzata alsó (felső) háromszög, és egy alsó (felső) háromszögmátrix inverze is alsó (felső) háromszög.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'A permutation matrix P is the identity with its rows (or columns) reordered — exactly one 1 per row and column. Left-multiplying PA permutes the rows of A; right-multiplying AP permutes its columns (Thm 3.7).',
          hu: 'A P permutációs mátrix az egységmátrix átrendezett soraival (vagy oszlopaival) — soronként és oszloponként pontosan egy 1-es. A PA balszorzás A sorait, az AP jobbszorzás az oszlopait permutálja (3.7. tétel).',
        },
      },
      {
        kind: 'theorem',
        label: { en: 'Positive definite consequences (Thm 3.9)', hu: 'Pozitív definitség következményei (3.9. tétel)' },
        text: {
          en: 'If A is positive definite then A is invertible and every diagonal entry is positive (aᵢᵢ > 0).',
          hu: 'Ha A pozitív definit, akkor A invertálható, és minden főátlóbeli elem pozitív (aᵢᵢ > 0).',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'A is orthogonal if AAᵀ = AᵀA = I, i.e. A⁻¹ = Aᵀ. Orthogonal matrices preserve the Euclidean norm, and their product is orthogonal (Thm 3.11).',
          hu: 'A ortogonális, ha AAᵀ = AᵀA = I, azaz A⁻¹ = Aᵀ. Az ortogonális mátrixok megőrzik az euklideszi normát, szorzatuk ortogonális (3.11. tétel).',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'λ ∈ ℂ is an eigenvalue of A if Ax = λx for some eigenvector x ≠ 0. The n eigenvalues are the roots of the characteristic equation (Thm 3.12):',
          hu: 'λ ∈ ℂ az A sajátértéke, ha Ax = λx valamely x ≠ 0 sajátvektorra. Az n sajátérték a karakterisztikus egyenlet gyökei (3.12. tétel):',
        },
      },
      { kind: 'math', tex: '\\det(A - \\lambda I) = 0' },
      {
        kind: 'theorem',
        label: { en: 'Eigenvalue properties (Thm 3.13–3.14)', hu: 'Sajátérték-tulajdonságok (3.13–3.14)' },
        text: {
          en: 'det(A) = λ₁⋯λₙ; A is invertible iff every λᵢ ≠ 0; A⁻¹ has eigenvalues 1/λᵢ and Aᵏ has λᵢᵏ. The eigenvalues of a triangular matrix are its diagonal entries.',
          hu: 'det(A) = λ₁⋯λₙ; A pontosan akkor invertálható, ha minden λᵢ ≠ 0; A⁻¹ sajátértékei 1/λᵢ, Aᵏ-é λᵢᵏ. A háromszögmátrix sajátértékei a főátló elemei.',
        },
        tex: '\\det(A) = \\lambda_1\\lambda_2\\cdots\\lambda_n',
      },
      {
        kind: 'theorem',
        label: { en: 'Similar matrices (Thm 3.15)', hu: 'Hasonló mátrixok (3.15. tétel)' },
        text: {
          en: 'A and B are similar if A = P⁻¹BP for some invertible P. Similar matrices have identical eigenvalues (and the same characteristic polynomial), since det(A − λI) = det(B − λI).',
          hu: 'A és B hasonló, ha A = P⁻¹BP valamely invertálható P-re. A hasonló mátrixok sajátértékei azonosak (és a karakterisztikus polinomjuk is), mert det(A − λI) = det(B − λI).',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The spectral radius is ρ(A) = max{|λ|}. For any matrix norm ρ(A) ≤ ‖A‖, and for every ε > 0 some norm satisfies ‖A‖ ≤ ρ(A) + ε (Thm 3.16–3.17). The 2-norm is ‖A‖₂ = √ρ(AᵀA), which equals ρ(A) for symmetric A (Thm 3.18).',
          hu: 'A spektrálsugár ρ(A) = max{|λ|}. Bármely mátrixnormára ρ(A) ≤ ‖A‖, és minden ε > 0-ra van olyan norma, hogy ‖A‖ ≤ ρ(A) + ε (3.16–3.17). A 2-norma ‖A‖₂ = √ρ(AᵀA), ami szimmetrikus A-ra ρ(A) (3.18).',
        },
      },
      {
        kind: 'theorem',
        label: { en: 'Vandermonde determinant (Thm 3.19)', hu: 'Vandermonde-determináns (3.19. tétel)' },
        text: {
          en: 'The determinant of the matrix with rows (1, aᵢ, aᵢ², …, aᵢⁿ⁻¹) equals ∏_{i>j}(aᵢ − aⱼ); it is nonzero iff the aᵢ are pairwise distinct. This underlies the unique solvability of polynomial interpolation.',
          hu: 'Az (1, aᵢ, aᵢ², …, aᵢⁿ⁻¹) sorú mátrix determinánsa ∏_{i>j}(aᵢ − aⱼ); pontosan akkor nem nulla, ha az aᵢ-k páronként különbözők. Ez adja a polinominterpoláció egyértelmű megoldhatóságát.',
        },
        tex: '\\prod_{i>j}(a_i - a_j)',
      },
      { kind: 'glossary', deck: 's31' },
      { kind: 'flashcards', deck: 's31' },
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
      {
        kind: 'p',
        text: {
          en: 'Example 3.20. Solve the system below. The last equation gives x₄ = 4; substituting upward, x₃ = (−2 + x₄)/2 = 1, then x₂ = (13 + x₃ − 2x₄)/3 = 2, and finally x₁ = (3 + x₂ − 3x₃ − x₄)/2 = −1.',
          hu: '3.20. példa. Oldd meg az alábbi rendszert. Az utolsó egyenlet x₄ = 4-et ad; felfelé helyettesítve x₃ = (−2 + x₄)/2 = 1, majd x₂ = (13 + x₃ − 2x₄)/3 = 2, végül x₁ = (3 + x₂ − 3x₃ − x₄)/2 = −1.',
        },
      },
      { kind: 'math', tex: '\\begin{aligned} 2x_1 - x_2 + 3x_3 + x_4 &= 3 \\\\ 3x_2 - x_3 + 2x_4 &= 13 \\\\ 2x_3 - x_4 &= -2 \\\\ 3x_4 &= 12 \\end{aligned} \\;\\Rightarrow\\; (x_1,x_2,x_3,x_4)=(-1,2,1,4)' },
      {
        kind: 'p',
        text: {
          en: 'Exact operation count: step i needs i multiplications/divisions and i−1 additions/subtractions, so the totals are n(n+1)/2 mult/div and (n−1)n/2 add/sub — both n²/2 + O(n). The O(nᵏ) notation hides the lower-order terms, leaving the leading power that governs the cost for large n.',
          hu: 'Pontos műveletszám: az i. lépés i szorzást/osztást és i−1 összeadást/kivonást igényel, így összesen n(n+1)/2 szorzás/osztás és (n−1)n/2 összeadás/kivonás — mindkettő n²/2 + O(n). Az O(nᵏ) jelölés elrejti az alacsonyabb rendű tagokat, meghagyva a nagy n-re meghatározó vezető hatványt.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The mirror method, forward substitution, solves a lower-triangular system top-down: x₁ = b₁/a₁₁, then xᵢ = (bᵢ − Σ_{j<i} aᵢⱼxⱼ)/aᵢᵢ. Both substitutions are the cheap final step after an LU or Gaussian factorization.',
          hu: 'A tükör-módszer, az előrehelyettesítés, egy alsó háromszög rendszert fentről lefelé old meg: x₁ = b₁/a₁₁, majd xᵢ = (bᵢ − Σ_{j<i} aᵢⱼxⱼ)/aᵢᵢ. Mindkét helyettesítés az LU- vagy Gauss-faktorizáció utáni olcsó zárólépés.',
        },
      },
      { kind: 'glossary', deck: 's32' },
      { kind: 'flashcards', deck: 's32' },
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
          en: 'Work on the augmented matrix (A | b): elimination is just row operations on this n×(n+1) array, producing the sequence Ã⁽⁰⁾ → Ã⁽¹⁾ → … → Ã⁽ⁿ⁻¹⁾ of equivalent systems in triangular form, followed by back-substitution.',
          hu: 'A bővített (A | b) mátrixon dolgozunk: az elimináció ezen az n×(n+1) tömbön végzett sorművelet, amely az ekvivalens rendszerek Ã⁽⁰⁾ → Ã⁽¹⁾ → … → Ã⁽ⁿ⁻¹⁾ háromszög-sorozatát adja, majd visszahelyettesítés következik.',
        },
      },
      {
        kind: 'algorithm',
        title: { en: 'Gaussian elimination (Alg. 3.23)', hu: 'Gauss-elimináció (3.23. algoritmus)' },
        lines: [
          '(elimination)',
          'for k = 1, …, n−1 do',
          '    for i = k+1, …, n do',
          '        lᵢₖ ← aᵢₖ / aₖₖ',
          '        for j = k+1, …, n+1 do',
          '            aᵢⱼ ← aᵢⱼ − lᵢₖ·aₖⱼ',
          '        end do',
          '    end do',
          'end do',
          '(back-substitution)',
          'xₙ ← a_{n,n+1} / aₙₙ',
          'for i = n−1, …, 1 do',
          '    xᵢ ← (a_{i,n+1} − Σ_{j>i} aᵢⱼ xⱼ) / aᵢᵢ',
          'end do',
        ],
      },
      {
        kind: 'p',
        text: {
          en: 'Exact operation count: the elimination needs n³/3 + n²/2 − 5n/6 mult/div and (n³−n)/3 add/sub; with back-substitution both totals are n³/3 + O(n²). So the time complexity of Gaussian elimination is n³/3 — an order of magnitude more than the O(n²) triangular solve.',
          hu: 'Pontos műveletszám: az elimináció n³/3 + n²/2 − 5n/6 szorzást/osztást és (n³−n)/3 összeadást/kivonást igényel; a visszahelyettesítéssel mindkét összeg n³/3 + O(n²). Tehát a Gauss-elimináció időigénye n³/3 — egy nagyságrenddel több az O(n²) háromszög-megoldásnál.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Why pivot (Example 3.25): solving 0.0002·x₁ − 30.5·x₂ = −60.99, 5.06·x₁ − 1.05·x₂ = 250.9 in 4-digit arithmetic without a swap divides by the tiny 0.0002, giving x₁ with a 300% relative error. Swapping the rows first (dividing by 5.06) returns the exact solution (50, 2).',
          hu: 'Miért pivotáljunk (3.25. példa): a 0.0002·x₁ − 30.5·x₂ = −60.99, 5.06·x₁ − 1.05·x₂ = 250.9 rendszert 4-jegyű aritmetikában csere nélkül megoldva a pici 0.0002-vel osztunk, így x₁ relatív hibája 300%. A sorok előzetes cseréje (5.06-tal osztva) a pontos (50, 2) megoldást adja.',
        },
      },
      {
        kind: 'theorem',
        label: { en: 'Partial pivoting solvability (Thm 3.26)', hu: 'Részleges pivot megoldhatóság (3.26. tétel)' },
        text: {
          en: 'These are equivalent: Ax = b is solvable by Gaussian elimination with partial pivoting; det(A) ≠ 0; A is invertible; Ax = b has a unique solution for all b. Partial pivoting therefore succeeds exactly when the system is uniquely solvable.',
          hu: 'Ekvivalensek: Ax = b megoldható részleges főelemkiválasztásos Gauss-eliminációval; det(A) ≠ 0; A invertálható; Ax = b minden b-re egyértelműen megoldható. A részleges pivot tehát pontosan akkor sikerül, ha a rendszer egyértelműen megoldható.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Partial pivoting in detail: before step k, find the row l with |aₗₖ| = max{|aᵢₖ| : i = k,…,n} in the column on and below the diagonal, swap rows k and l, then eliminate. Example 3.27 solves the system of Example 3.24 — which stalls on a zero pivot without pivoting — by swapping the largest-magnitude entry into the pivot each step:',
          hu: 'Részleges pivot részletesen: a k. lépés előtt keressük meg az l sort, amelyre |aₗₖ| = max{|aᵢₖ| : i = k,…,n} a főátlón és alatta, cseréljük a k. és l. sort, majd eliminálunk. A 3.27. példa a 3.24. példa rendszerét oldja meg — amely pivot nélkül nulla főelemen elakad — úgy, hogy minden lépésben a legnagyobb abszolút értékűt hozza a főelembe:',
        },
      },
      { kind: 'math', tex: '\\left(\\begin{array}{cccc|c} 2 & -1 & 0 & -3 & 8 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ -3 & 1 & 1 & -2 & -5 \\\\ 2 & 4 & 0 & -1 & 21 \\end{array}\\right) \\;\\xrightarrow{\\text{partial pivot}}\\; \\left(\\begin{array}{cccc|c} -3 & 1 & 1 & -2 & -5 \\\\ 0 & \\tfrac{14}{3} & \\tfrac{2}{3} & -\\tfrac{7}{3} & \\tfrac{53}{3} \\\\ 0 & 0 & \\tfrac{12}{7} & \\tfrac{7}{2} & -\\tfrac{1}{14} \\\\ 0 & 0 & 0 & -\\tfrac{143}{24} & \\tfrac{143}{24} \\end{array}\\right) \\Rightarrow (4,3,2,-1)' },
      {
        kind: 'p',
        text: {
          en: 'Complete (maximal) pivoting goes further: before step k it finds the largest-magnitude entry |aₗₘ| = max{|aᵢⱼ| : i,j = k,…,n} in the whole remaining submatrix and swaps both the rows (k↔l) and the columns (k↔m). Column swaps reorder the unknowns, so the variable order must be tracked. It is the most rounding-resistant strategy but needs the most comparisons. Example 3.29 solves the Example 3.22 system this way (column order becomes x₄, x₃, x₂, x₁):',
          hu: 'A teljes (maximális) főelemkiválasztás tovább megy: a k. lépés előtt a teljes maradék részmátrixban megkeresi a legnagyobb |aₗₘ| = max{|aᵢⱼ| : i,j = k,…,n} elemet, és sort (k↔l) és oszlopot (k↔m) is cserél. Az oszlopcsere átrendezi az ismeretleneket, ezért a változók sorrendjét követni kell. Ez a legkerekítés-ellenállóbb stratégia, de a legtöbb összehasonlítást igényli. A 3.29. példa így oldja meg a 3.22. rendszert (az oszlopsorrend x₄, x₃, x₂, x₁ lesz):',
        },
      },
      { kind: 'math', tex: '\\left(\\begin{array}{cccc|c} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{array}\\right) \\;\\xrightarrow{\\text{complete pivot}}\\; \\left(\\begin{array}{cccc|c} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & 0 & -\\tfrac{23}{10} & \\tfrac{11}{5} & -\\tfrac{56}{5} \\\\ 0 & 0 & 0 & -\\tfrac{57}{23} & \\tfrac{171}{23} \\end{array}\\right)_{(x_4,x_3,x_2,x_1)} \\Rightarrow (x_1,x_2,x_3,x_4)=(-3,2,4,-2)' },
      {
        kind: 'theorem',
        label: { en: 'Permutation factorization (Thm 3.28)', hu: 'Permutációs faktorizáció (3.28. tétel)' },
        text: {
          en: 'If det(A) ≠ 0 there is a permutation matrix P such that PAx = Pb can be solved by Gaussian elimination without any row swaps — collecting all partial-pivot swaps in advance. (This is the P of the later PA = LU factorization.)',
          hu: 'Ha det(A) ≠ 0, van olyan P permutációs mátrix, hogy a PAx = Pb sorcsere nélküli Gauss-eliminációval megoldható — az összes részleges-pivot cserét előre összegyűjtve. (Ez a későbbi PA = LU faktorizáció P-je.)',
        },
      },
      {
        kind: 'theorem',
        label: { en: 'When pivoting is unnecessary (Thm 3.32/3.33)', hu: 'Mikor felesleges a pivotálás (3.32/3.33)' },
        text: {
          en: 'If A is diagonally dominant, Gaussian elimination runs without pivoting and is stable. If A is symmetric, A is positive definite iff elimination runs without pivoting with all pivots positive — also stable.',
          hu: 'Ha A diagonálisan domináns, a Gauss-elimináció pivotálás nélkül lefut és stabil. Ha A szimmetrikus, akkor A pontosan akkor pozitív definit, ha az elimináció pivotálás nélkül lefut, és minden főelem pozitív — szintén stabil.',
        },
      },
      {
        kind: 'lab',
        to: '/linear-systems/lab?preset=ex3-22&mode=solve&method=gauss&pivot=none',
        label: { en: 'Run Example 3.22 (no pivoting)', hu: '3.22. példa futtatása (csere nélkül)' },
      },
      {
        kind: 'lab',
        to: '/linear-systems/lab?preset=ex3-24&mode=solve&method=gauss&pivot=partial',
        label: { en: 'Run Example 3.24/3.27 (partial pivoting)', hu: '3.24/3.27. példa (részleges)' },
      },
      { kind: 'glossary', deck: 's33' },
      { kind: 'flashcards', deck: 's33' },
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
        kind: 'algorithm',
        title: { en: 'Gauss–Jordan elimination (Alg. 3.34)', hu: 'Gauss–Jordan-elimináció (3.34. algoritmus)' },
        lines: [
          'for k = 1, …, n do',
          '    for i = 1, …, n,  i ≠ k do',
          '        lᵢₖ ← aᵢₖ / aₖₖ',
          '        for j = k+1, …, n+1 do',
          '            aᵢⱼ ← aᵢⱼ − lᵢₖ·aₖⱼ',
          '        end do',
          '    end do',
          'end do',
          'for i = 1, …, n do   xᵢ ← a_{i,n+1} / aᵢᵢ   end do',
        ],
      },
      {
        kind: 'p',
        text: {
          en: 'Operation count: n³/2 + O(n²) multiplications/divisions and n³/2 + O(n²) additions/subtractions — about 50% more than Gaussian elimination (n³/3). For solving a single system Gaussian elimination is therefore cheaper; Gauss–Jordan pays off for matrix inversion and many simultaneous right-hand sides, where the identity form is reused.',
          hu: 'Műveletszám: n³/2 + O(n²) szorzás/osztás és n³/2 + O(n²) összeadás/kivonás — kb. 50%-kal több a Gauss-eliminációnál (n³/3). Egyetlen rendszer megoldására tehát a Gauss-elimináció olcsóbb; a Gauss–Jordan a mátrixinvertálásnál és sok egyidejű jobb oldalnál térül meg, ahol az egységalak újrahasznosul.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Example 3.35 (no pivoting): the coefficient block is driven to the identity and the solution appears in the last column.',
          hu: '3.35. példa (csere nélkül): az együtthatóblokkot egységmátrixra hozzuk, és a megoldás az utolsó oszlopban jelenik meg.',
        },
      },
      { kind: 'math', tex: '\\left(\\begin{array}{cccc|c} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & -3 & -4 & 3 \\\\ -2 & 1 & 4 & -2 & 28 \\end{array}\\right) \\;\\sim\\;\\cdots\\;\\sim\\; \\left(\\begin{array}{cccc|c} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 1 & 0 & 0 & 2 \\\\ 0 & 0 & 1 & 0 & 4 \\\\ 0 & 0 & 0 & 1 & -2 \\end{array}\\right)' },
      {
        kind: 'p',
        text: {
          en: 'Pivoting strategies combine with Gauss–Jordan just as with Gaussian elimination. Example 3.36 runs the same system with partial pivoting and reaches the identical (I | x) form and solution (−3, 2, 4, −2).',
          hu: 'A pivotálási stratégiák ugyanúgy kombinálhatók a Gauss–Jordannal, mint a Gauss-eliminációval. A 3.36. példa ugyanazt a rendszert futtatja részleges pivottal, és ugyanazt az (I | x) alakot és (−3, 2, 4, −2) megoldást éri el.',
        },
      },
      {
        kind: 'lab',
        to: '/linear-systems/lab?preset=ex3-22&mode=solve&method=gauss-jordan&pivot=none',
        label: { en: 'Run Example 3.35 (Gauss–Jordan)', hu: '3.35. példa (Gauss–Jordan)' },
      },
      { kind: 'glossary', deck: 's34' },
      { kind: 'flashcards', deck: 's34' },
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
          en: 'A matrix is tridiagonal if aᵢⱼ = 0 whenever |i − j| > 1 — nonzeros only on the main diagonal (dᵢ), the sub-diagonal (aᵢ) and the super-diagonal (cᵢ). Such systems appear constantly in splines, boundary-value problems and PDE discretizations.',
          hu: 'Egy mátrix tridiagonális, ha aᵢⱼ = 0, valahányszor |i − j| > 1 — nemnulla csak a főátlón (dᵢ), az aldiagonálison (aᵢ) és a felső átlón (cᵢ). Ilyen rendszerek folyamatosan előfordulnak spline-oknál, peremértékfeladatoknál és PDE-diszkretizációknál.',
        },
      },
      { kind: 'math', tex: '\\begin{pmatrix} d_1 & c_1 & & & \\\\ a_1 & d_2 & c_2 & & \\\\ & a_2 & d_3 & \\ddots & \\\\ & & \\ddots & \\ddots & c_{n-1} \\\\ & & & a_{n-1} & d_n \\end{pmatrix}\\mathbf{x} = \\mathbf{b}' },
      {
        kind: 'p',
        text: {
          en: 'Store only the three vectors (aᵢ), (dᵢ), (cᵢ) — just 3n−2 numbers instead of n². During elimination the super-diagonal cᵢ never changes and the sub-diagonal aᵢ becomes 0, so only dᵢ and bᵢ are updated.',
          hu: 'Csak a három vektort tároljuk: (aᵢ), (dᵢ), (cᵢ) — 3n−2 szám az n² helyett. Az elimináció során a felső átló cᵢ nem változik, az aldiagonális aᵢ pedig 0 lesz, így csak dᵢ-t és bᵢ-t frissítjük.',
        },
      },
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
        kind: 'p',
        text: {
          en: 'If the tridiagonal matrix is diagonally dominant, Theorem 3.32 guarantees the algorithm runs without pivoting and is stable — the usual situation in applications. The same banded idea extends to a band matrix (aᵢⱼ = 0 for |i − j| > p), giving an O(p²n) solver; tridiagonal is the p = 1 case.',
          hu: 'Ha a tridiagonális mátrix diagonálisan domináns, a 3.32. tétel garantálja, hogy az algoritmus pivotálás nélkül lefut és stabil — ez a tipikus eset az alkalmazásokban. Ugyanez a sávos ötlet kiterjed sávmátrixra (aᵢⱼ = 0, ha |i − j| > p), O(p²n) megoldót adva; a tridiagonális a p = 1 eset.',
        },
      },
      {
        kind: 'lab',
        to: '/linear-systems/lab?preset=ex3-5-1&mode=tridiagonal',
        label: { en: 'Run the tridiagonal example', hu: 'Tridiagonális példa futtatása' },
      },
      { kind: 'glossary', deck: 's35' },
      { kind: 'flashcards', deck: 's35' },
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
          en: 'When many systems share the same coefficient matrix A but differ in their right-hand sides, Ax⁽ⁱ⁾ = b⁽ⁱ⁾ (i = 1,…,m), stack the right-hand sides as columns of B and the solutions as columns of X. The m systems are then the single matrix equation:',
          hu: 'Ha sok rendszer ugyanazt az A együtthatómátrixot használja, de a jobb oldalakban különböznek, Ax⁽ⁱ⁾ = b⁽ⁱ⁾ (i = 1,…,m), rakd a jobb oldalakat B oszlopaiba, a megoldásokat X oszlopaiba. Az m rendszer ekkor egyetlen mátrixegyenlet:',
        },
      },
      { kind: 'math', tex: '\\mathbf{A}\\mathbf{X} = \\mathbf{B}, \\qquad \\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)}),\\;\\; \\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})' },
      {
        kind: 'p',
        text: {
          en: 'Because pivoting decisions depend only on A, all m systems are solved together by eliminating on the n×(n+m) augmented matrix (A | B). Gauss–Jordan turns it into (I | X), and the solutions appear in the last m columns.',
          hu: 'Mivel a főelemkiválasztás csak A-tól függ, mind az m rendszer együtt megoldható az n×(n+m) méretű (A | B) bővített mátrixon eliminálva. A Gauss–Jordan ezt (I | X) alakra hozza, és a megoldások az utolsó m oszlopban jelennek meg.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Efficiency: solving all m together costs n³/3 + mn² − n/3 (Gaussian) or n³/2 + mn² − n/2 (Gauss–Jordan) mult/div. The expensive O(n³) elimination is shared, so each extra right-hand side adds only O(n²) — far cheaper than solving m systems from scratch.',
          hu: 'Hatékonyság: mind az m együttes megoldása n³/3 + mn² − n/3 (Gauss) vagy n³/2 + mn² − n/2 (Gauss–Jordan) szorzás/osztás. A drága O(n³) elimináció megosztott, így minden további jobb oldal csak O(n²)-et ad — sokkal olcsóbb, mint m rendszert külön megoldani.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Matrix inversion is the special case B = I — see the next lesson.',
          hu: 'A mátrixinvertálás a B = I speciális eset — lásd a következő leckét.',
        },
      },
      { kind: 'glossary', deck: 's36' },
      { kind: 'flashcards', deck: 's36' },
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
          en: 'The inverse A⁻¹ solves the simultaneous system AX = I (and then XA = I holds too, so X is genuinely the inverse). Solving (A | I) by Gauss–Jordan yields A⁻¹ in the right block. Cost: 3n³/2 + O(n²) naively, reducible to n³ by exploiting the zeros and ones of I.',
          hu: 'Az A⁻¹ inverz az AX = I szimultán rendszer megoldása (és ekkor XA = I is teljesül, tehát X valóban az inverz). Az (A | I) Gauss–Jordan-megoldása a jobb blokkban adja A⁻¹-et. Költség: naivan 3n³/2 + O(n²), az I nulláit és egyeseit kihasználva n³-ra csökkenthető.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Example 3.38: inverting a 3×3 matrix by driving (A | I) to (I | A⁻¹).',
          hu: '3.38. példa: egy 3×3 mátrix invertálása az (A | I) → (I | A⁻¹) átalakítással.',
        },
      },
      { kind: 'math', tex: '\\left(\\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\\\ -1 & 1 & 0 & 0 & 1 & 0 \\\\ -2 & 0 & -1 & 0 & 0 & 1 \\end{array}\\right) \\sim\\cdots\\sim \\left(\\begin{array}{ccc|ccc} 1 & 0 & 0 & -\\tfrac13 & 0 & -\\tfrac23 \\\\ 0 & 1 & 0 & -\\tfrac13 & 1 & -\\tfrac23 \\\\ 0 & 0 & 1 & \\tfrac23 & 0 & \\tfrac13 \\end{array}\\right),\\quad A^{-1}=\\tfrac13\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}' },
      {
        kind: 'p',
        text: {
          en: 'The determinant comes for free from the elimination: it equals the product of the pivots times (−1)ˢ, where s is the number of row swaps (Theorem 3.26).',
          hu: 'A determináns ingyen jön az eliminációból: a főelemek szorzata (−1)ˢ-szel, ahol s a sorcserék száma (3.26. tétel).',
        },
      },
      { kind: 'math', tex: '\\det(A) = (-1)^{s}\\, a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}' },
      {
        kind: 'p',
        text: {
          en: 'Example 3.39: the Example 3.22 matrix eliminates to pivots 1, 3, 1, 38 with no row swaps (s = 0), so det(A) = 1·3·1·38 = 114.',
          hu: '3.39. példa: a 3.22. mátrix eliminációja az 1, 3, 1, 38 főelemekhez vezet sorcsere nélkül (s = 0), így det(A) = 1·3·1·38 = 114.',
        },
      },
      {
        kind: 'lab',
        to: '/linear-systems/lab?preset=ex3-38&mode=inverse&method=gauss-jordan&pivot=none',
        label: { en: 'Invert Example 3.38', hu: '3.38. példa invertálása' },
      },
      {
        kind: 'lab',
        to: '/linear-systems/lab?preset=ex3-39&mode=determinant&method=gauss&pivot=none',
        label: { en: 'Determinant of Example 3.39', hu: '3.39. példa determinánsa' },
      },
      { kind: 'glossary', deck: 's37' },
      { kind: 'flashcards', deck: 's37' },
    ],
  },
];

export function getSection(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}
