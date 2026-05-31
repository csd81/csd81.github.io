import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 3, keyed by the chapter's section ids
 * (content/sections.ts: s31–s37). Questions come from quiz.md §3.1–§3.6.
 * The quiz.md numbering is topic-based and differs from the app's section
 * numbers, so each quiz.md subsection is mapped to the matching section id:
 *   §3.1 Triangular Systems                  → s32 (Triangular Systems)
 *   §3.2 Gaussian Elimination & Pivoting     → s33 (Gaussian Elimination & Pivoting)
 *   §3.2.1 Partial Pivoting                  → s33
 *   §3.2.2 Complete Pivoting                 → s33 (pivoting items) + s31 (linear-algebra items)
 *   §3.3 Gauss–Jordan Elimination            → s34
 *   §3.4 Tridiagonal Linear Systems          → s35
 *   §3.5 Simultaneous Linear Systems         → s36
 *   §3.6 Matrix Inversion and Determinants   → s37
 * The positive-definiteness / diagonal-dominance items of §3.2.2 belong to the
 * linear-algebra review (s31), so they are attached there.
 * Bilingual: math-only options are identical in both languages.
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  // §3.2.2 items that are really linear-algebra review (positive definiteness,
  // diagonal dominance) → Review of Linear Algebra.
  s31: [
    {
      id: 'q-s31-1',
      prompt: {
        en: 'An $n$-dimensional symmetric square matrix $A=(a_{ij})$ is positive definite if and only if:',
        hu: 'Egy $n$-dimenziós szimmetrikus $A=(a_{ij})$ négyzetes mátrix akkor és csak akkor pozitív definit, ha:',
      },
      options: [
        { en: '$a_{ij}>0, \\quad i,j=1,\\ldots,n$', hu: '$a_{ij}>0, \\quad i,j=1,\\ldots,n$' },
        { en: 'All of its principal minors are positive', hu: 'Minden sarokminorja pozitív' },
        { en: '$\\det(A)\\neq0$', hu: '$\\det(A)\\neq0$' },
        { en: '$\\det(A)>0$', hu: '$\\det(A)>0$' },
      ],
      answer: 1,
      explanation: {
        en: "Sylvester's criterion: a symmetric matrix is positive definite iff all leading principal minors are positive.",
        hu: 'Sylvester-kritérium: egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha minden vezető sarokminorja pozitív.',
      },
    },
    {
      id: 'q-s31-2',
      prompt: {
        en: 'An $n$-dimensional square matrix $A=(a_{ij})$ is positive definite if it is symmetric and:',
        hu: 'Egy $n$-dimenziós $A=(a_{ij})$ négyzetes mátrix pozitív definit, ha szimmetrikus és:',
      },
      options: [
        { en: '$x^T Ax>0 \\quad \\text{for all } x\\neq0$', hu: '$x^T Ax>0 \\quad \\text{minden } x\\neq0\\text{-ra}$' },
        { en: '$x^T Ax\\geq 0 \\quad \\text{for all } x\\neq0$', hu: '$x^T Ax\\geq 0 \\quad \\text{minden } x\\neq0\\text{-ra}$' },
        { en: '$a_{ij}>0, \\quad i,j=1,\\ldots,n$', hu: '$a_{ij}>0, \\quad i,j=1,\\ldots,n$' },
        { en: '$x^T Ax<0 \\quad \\text{for all } x\\neq0$', hu: '$x^T Ax<0 \\quad \\text{minden } x\\neq0\\text{-ra}$' },
      ],
      answer: 0,
      explanation: {
        en: 'Positive definiteness is defined by the quadratic form xᵀAx > 0 for every nonzero x.',
        hu: 'A pozitív definitséget a xᵀAx > 0 kvadratikus alak definiálja minden nem nulla x-re.',
      },
    },
    {
      id: 'q-s31-3',
      prompt: {
        en: 'If $A$ is diagonally dominant, then:',
        hu: 'Ha $A$ diagonálisan domináns, akkor:',
      },
      options: [
        { en: '$A$ is invertible', hu: '$A$ invertálható' },
        { en: 'The linear system $Ax=b$ has a unique solution', hu: 'Az $Ax=b$ lineáris rendszernek egyértelmű megoldása van' },
        { en: '$\\det(A)\\neq0$', hu: '$\\det(A)\\neq0$' },
        { en: 'All the above properties hold', hu: 'A fenti tulajdonságok mind teljesülnek' },
      ],
      answer: 3,
      explanation: {
        en: 'Strict diagonal dominance implies invertibility, det(A) ≠ 0, and a unique solution — all of them.',
        hu: 'A szigorú diagonális dominancia maga után vonja az invertálhatóságot, a det(A) ≠ 0-t és az egyértelmű megoldást — mindegyiket.',
      },
    },
  ],
  // §3.1 Triangular Systems
  s32: [
    {
      id: 'q-s32-1',
      prompt: {
        en: 'The determinant of a triangular matrix is equal to:',
        hu: 'Egy háromszögmátrix determinánsa egyenlő:',
      },
      options: [
        { en: 'The product of all matrix elements.', hu: 'Az összes mátrixelem szorzatával.' },
        { en: 'Zero if any off-diagonal element is non-zero.', hu: 'Nullával, ha bármely átlón kívüli elem nem nulla.' },
        { en: 'The product of diagonal elements.', hu: 'Az átlós elemek szorzatával.' },
        { en: 'The sum of diagonal elements.', hu: 'Az átlós elemek összegével.' },
      ],
      answer: 2,
      explanation: {
        en: 'For a triangular matrix the determinant is the product of the diagonal entries.',
        hu: 'Egy háromszögmátrix determinánsa az átlós elemek szorzata.',
      },
    },
    {
      id: 'q-s32-2',
      prompt: {
        en: 'Which of the following best describes the shape of the matrix for backward substitution?',
        hu: 'Az alábbiak közül melyik írja le legjobban a visszahelyettesítéshez tartozó mátrix alakját?',
      },
      options: [
        { en: 'Full matrix with no special structure', hu: 'Teli mátrix, különleges szerkezet nélkül' },
        { en: 'Upper triangular matrix', hu: 'Felső háromszögmátrix' },
        { en: 'Lower triangular matrix', hu: 'Alsó háromszögmátrix' },
        { en: 'Sparse matrix', hu: 'Ritka mátrix' },
      ],
      answer: 1,
      explanation: {
        en: 'Backward substitution solves an upper triangular system from the last unknown upward.',
        hu: 'A visszahelyettesítés egy felső háromszögrendszert old meg az utolsó ismeretlentől felfelé.',
      },
    },
    {
      id: 'q-s32-3',
      prompt: {
        en: 'What is the time complexity (in terms of multiplications/divisions) of solving an upper triangular system using backward substitution?',
        hu: 'Mi a felső háromszögrendszer visszahelyettesítéssel való megoldásának időkomplexitása (szorzások/osztások számában)?',
      },
      options: [
        { en: '$O(n^2)$', hu: '$O(n^2)$' },
        { en: '$O(n \\log n)$', hu: '$O(n \\log n)$' },
        { en: '$O(n^3)$', hu: '$O(n^3)$' },
        { en: '$O(n)$', hu: '$O(n)$' },
      ],
      answer: 0,
      explanation: {
        en: 'Backward substitution costs about n²/2 multiplications/divisions, i.e. O(n²).',
        hu: 'A visszahelyettesítés kb. n²/2 szorzást/osztást igényel, azaz O(n²).',
      },
    },
    {
      id: 'q-s32-4',
      prompt: {
        en: 'What is the primary numerical method used for solving upper triangular systems?',
        hu: 'Mi a felső háromszögrendszerek megoldásának fő numerikus módszere?',
      },
      options: [
        { en: 'Gaussian elimination', hu: 'Gauss-elimináció' },
        { en: 'Forward substitution', hu: 'Előrehelyettesítés' },
        { en: 'Backward substitution', hu: 'Visszahelyettesítés' },
        { en: 'LU decomposition', hu: 'LU-felbontás' },
      ],
      answer: 2,
      explanation: {
        en: 'Upper triangular systems are solved directly by backward substitution.',
        hu: 'A felső háromszögrendszereket közvetlenül visszahelyettesítéssel oldjuk meg.',
      },
    },
    {
      id: 'q-s32-5',
      prompt: {
        en: 'How many additions and subtractions are required in backward substitution for an $n$-dimensional triangular linear system?',
        hu: 'Hány összeadás és kivonás szükséges a visszahelyettesítéshez egy $n$-dimenziós háromszög lineáris rendszernél?',
      },
      options: [
        { en: '$\\frac{n^2}{4}+\\mathcal{O}(n)$', hu: '$\\frac{n^2}{4}+\\mathcal{O}(n)$' },
        { en: '$n^2 +\\mathcal{O}(n)$', hu: '$n^2 +\\mathcal{O}(n)$' },
        { en: '$\\frac{n^2}{2} +\\mathcal{O}(n)$', hu: '$\\frac{n^2}{2} +\\mathcal{O}(n)$' },
        { en: '$\\frac{n^2}{3}+\\mathcal{O}(n)$', hu: '$\\frac{n^2}{3}+\\mathcal{O}(n)$' },
      ],
      answer: 2,
      explanation: {
        en: 'The additions/subtractions total (n−1)n/2 = n²/2 + O(n).',
        hu: 'Az összeadások/kivonások összesen (n−1)n/2 = n²/2 + O(n).',
      },
    },
  ],
  // §3.2 Gaussian Elimination & Pivoting, §3.2.1 Partial Pivoting, and the
  // pivoting items of §3.2.2 Complete Pivoting.
  s33: [
    {
      id: 'q-s33-1',
      prompt: {
        en: 'What happens when a zero pivot is encountered during Gaussian elimination without pivoting?',
        hu: 'Mi történik, ha nulla pivotelemet találunk a Gauss-elimináció során pivotálás nélkül?',
      },
      options: [
        { en: 'The algorithm continues with the next row', hu: 'Az algoritmus a következő sorral folytatódik' },
        { en: 'The row is skipped', hu: 'A sort átugorjuk' },
        { en: 'The algorithm cannot be continued, and it does not provide a solution', hu: 'Az algoritmus nem folytatható, és nem ad megoldást' },
        { en: 'The matrix becomes diagonal', hu: 'A mátrix diagonálissá válik' },
      ],
      answer: 2,
      explanation: {
        en: 'Dividing by a zero pivot is impossible, so without pivoting the elimination breaks down.',
        hu: 'Nulla pivotelemmel nem lehet osztani, így pivotálás nélkül az elimináció megakad.',
      },
    },
    {
      id: 'q-s33-2',
      prompt: {
        en: 'What can we try to do if a pivot element is 0 in the Gaussian elimination?',
        hu: 'Mit próbálhatunk tenni, ha egy pivotelem 0 a Gauss-eliminációban?',
      },
      options: [
        { en: 'Use Newton method', hu: 'Newton-módszert használni' },
        { en: 'Omit that row from the equation', hu: 'Kihagyni azt a sort az egyenletből' },
        { en: 'We can change rows in the equation', hu: 'Sorokat cserélhetünk az egyenletben' },
        { en: 'Use forward substitution first', hu: 'Előbb előrehelyettesítést használni' },
      ],
      answer: 2,
      explanation: {
        en: 'Swapping in a row with a nonzero pivot (pivoting) lets elimination continue.',
        hu: 'Egy nem nulla pivotelemű sor becserélése (pivotálás) lehetővé teszi az elimináció folytatását.',
      },
    },
    {
      id: 'q-s33-3',
      prompt: {
        en: 'What is the time complexity of Gaussian elimination in terms of the number of operations?',
        hu: 'Mi a Gauss-elimináció időkomplexitása a műveletek számában?',
      },
      options: [
        { en: '$O(n^3)$', hu: '$O(n^3)$' },
        { en: '$O(n^2)$', hu: '$O(n^2)$' },
        { en: '$O(n)$', hu: '$O(n)$' },
        { en: '$O(n \\log n)$', hu: '$O(n \\log n)$' },
      ],
      answer: 0,
      explanation: {
        en: 'Gaussian elimination costs about n³/3 operations, i.e. O(n³).',
        hu: 'A Gauss-elimináció kb. n³/3 műveletet igényel, azaz O(n³).',
      },
    },
    {
      id: 'q-s33-4',
      prompt: {
        en: 'Which form does the system take after performing all steps of Gaussian elimination?',
        hu: 'Milyen alakot vesz fel a rendszer a Gauss-elimináció összes lépése után?',
      },
      options: [
        { en: 'Upper triangular form', hu: 'Felső háromszög alak' },
        { en: 'Lower triangular form', hu: 'Alsó háromszög alak' },
        { en: 'Symmetric form', hu: 'Szimmetrikus alak' },
        { en: 'Diagonal matrix', hu: 'Diagonális mátrix' },
      ],
      answer: 0,
      explanation: {
        en: 'Forward elimination reduces the coefficient matrix to upper triangular form.',
        hu: 'Az előre-elimináció felső háromszög alakra hozza az együtthatómátrixot.',
      },
    },
    {
      id: 'q-s33-5',
      prompt: {
        en: 'What is the form of the starting matrix if we solve a linear system $Ax=b$ with Gaussian elimination?',
        hu: 'Milyen alakú a kezdőmátrix, ha az $Ax=b$ lineáris rendszert Gauss-eliminációval oldjuk meg?',
      },
      options: [
        { en: 'We use the augmented matrix $(A|b)$', hu: 'A $(A|b)$ kibővített mátrixot használjuk' },
        { en: 'We use the augmented matrix $(A|A|b)$', hu: 'A $(A|A|b)$ kibővített mátrixot használjuk' },
        { en: 'We use the augmented matrix $(A|I)$', hu: 'A $(A|I)$ kibővített mátrixot használjuk' },
        { en: 'We use the augmented matrix $(b|A)$', hu: 'A $(b|A)$ kibővített mátrixot használjuk' },
      ],
      answer: 0,
      explanation: {
        en: 'Elimination operates on the augmented matrix (A | b).',
        hu: 'Az elimináció a kibővített (A | b) mátrixon dolgozik.',
      },
    },
    {
      id: 'q-s33-6',
      prompt: {
        en: 'Which of the following is an advantage of partial pivoting?',
        hu: 'Az alábbiak közül melyik a részleges pivotálás előnye?',
      },
      options: [
        { en: 'Reduces the number of operations', hu: 'Csökkenti a műveletek számát' },
        { en: 'Improves numerical accuracy by avoiding division by small numbers', hu: 'Javítja a numerikus pontosságot a kis számokkal való osztás elkerülésével' },
        { en: 'Simplifies matrix storage', hu: 'Egyszerűsíti a mátrix tárolását' },
        { en: 'Ensures exact solutions', hu: 'Pontos megoldásokat biztosít' },
      ],
      answer: 1,
      explanation: {
        en: 'Choosing the largest-magnitude pivot avoids dividing by tiny numbers, improving accuracy.',
        hu: 'A legnagyobb abszolút értékű pivotelem választása elkerüli a parányi számokkal való osztást, javítva a pontosságot.',
      },
    },
    {
      id: 'q-s33-7',
      prompt: {
        en: 'In partial pivoting, which operation is performed after selecting the pivot?',
        hu: 'A részleges pivotálásnál melyik műveletet végezzük a pivotelem kiválasztása után?',
      },
      options: [
        { en: 'Diagonalization', hu: 'Diagonalizálás' },
        { en: 'Matrix inversion', hu: 'Mátrixinvertálás' },
        { en: 'Row swapping', hu: 'Sorcsere' },
        { en: 'Column swapping', hu: 'Oszlopcsere' },
      ],
      answer: 2,
      explanation: {
        en: 'Partial pivoting swaps the chosen row into the pivot position (rows only).',
        hu: 'A részleges pivotálás a kiválasztott sort cseréli a pivotpozícióba (csak sorokat).',
      },
    },
    {
      id: 'q-s33-8',
      prompt: {
        en: 'In partial pivoting, if all entries in the pivot column below the diagonal are zero, then:',
        hu: 'A részleges pivotálásnál, ha a pivotoszlop átló alatti összes eleme nulla, akkor:',
      },
      options: [
        { en: 'The system has no solution or infinitely many solutions', hu: 'A rendszernek nincs megoldása, vagy végtelen sok megoldása van' },
        { en: 'Column swapping is needed', hu: 'Oszlopcsere szükséges' },
        { en: 'The matrix is symmetric', hu: 'A mátrix szimmetrikus' },
        { en: 'The pivot is the diagonal entry', hu: 'A pivotelem az átlós elem' },
      ],
      answer: 0,
      explanation: {
        en: 'A fully zero pivot column means the matrix is singular, so there is no unique solution.',
        hu: 'A teljesen nulla pivotoszlop azt jelenti, hogy a mátrix szinguláris, így nincs egyértelmű megoldás.',
      },
    },
    {
      id: 'q-s33-9',
      prompt: {
        en: 'In Gaussian elimination, what is the purpose of pivoting?',
        hu: 'A Gauss-eliminációban mi a pivotálás célja?',
      },
      options: [
        { en: 'To increase the rank of the matrix', hu: 'A mátrix rangjának növelése' },
        { en: 'To simplify the system to a homogeneous one', hu: 'A rendszer homogénné egyszerűsítése' },
        { en: 'To improve numerical stability', hu: 'A numerikus stabilitás javítása' },
        { en: 'To reduce computational time', hu: 'A számítási idő csökkentése' },
      ],
      answer: 2,
      explanation: {
        en: 'Pivoting improves numerical stability (and avoids zero pivots).',
        hu: 'A pivotálás javítja a numerikus stabilitást (és elkerüli a nulla pivotelemeket).',
      },
    },
    {
      id: 'q-s33-10',
      prompt: {
        en: 'What kind of matrix can cause Gaussian elimination to fail without pivoting?',
        hu: 'Milyen mátrix okozhatja a Gauss-elimináció kudarcát pivotálás nélkül?',
      },
      options: [
        { en: 'Singular matrix', hu: 'Szinguláris mátrix' },
        { en: 'Sparse matrix', hu: 'Ritka mátrix' },
        { en: 'Orthogonal matrix', hu: 'Ortogonális mátrix' },
        { en: 'Symmetric matrix', hu: 'Szimmetrikus mátrix' },
      ],
      answer: 0,
      explanation: {
        en: 'A singular matrix yields a zero pivot, causing breakdown without pivoting.',
        hu: 'Egy szinguláris mátrix nulla pivotelemet ad, ami pivotálás nélkül megakasztja az eliminációt.',
      },
    },
    {
      id: 'q-s33-11',
      prompt: {
        en: 'In complete pivoting, the pivot element is chosen from:',
        hu: 'A teljes pivotálásnál a pivotelemet honnan választjuk:',
      },
      options: [
        { en: 'The current diagonal', hu: 'Az aktuális átlóból' },
        { en: 'The entire matrix', hu: 'A teljes mátrixból' },
        { en: 'The current column', hu: 'Az aktuális oszlopból' },
        { en: 'The submatrix of the coefficients from the current row and column onward', hu: 'Az aktuális sortól és oszloptól kezdődő együtthatók részmátrixából' },
      ],
      answer: 3,
      explanation: {
        en: 'Complete pivoting searches the remaining submatrix (rows and columns from k onward).',
        hu: 'A teljes pivotálás a maradék részmátrixban keres (a k-tól kezdődő sorokban és oszlopokban).',
      },
    },
    {
      id: 'q-s33-12',
      prompt: {
        en: 'What does complete pivoting involve?',
        hu: 'Mit foglal magában a teljes pivotálás?',
      },
      options: [
        { en: 'Swapping both rows and columns to position the largest element on the pivot', hu: 'Sorok és oszlopok cseréjét a legnagyobb elem pivotpozícióba helyezéséhez' },
        { en: 'Only column swaps', hu: 'Csak oszlopcseréket' },
        { en: 'Swapping diagonal elements', hu: 'Átlós elemek cseréjét' },
        { en: 'Only row swaps', hu: 'Csak sorcseréket' },
      ],
      answer: 0,
      explanation: {
        en: 'Complete pivoting swaps both rows and columns to bring the largest entry to the pivot.',
        hu: 'A teljes pivotálás sorokat és oszlopokat is cserél, hogy a legnagyobb elem a pivotpozícióba kerüljön.',
      },
    },
  ],
  // §3.3 Gauss–Jordan Elimination
  s34: [
    {
      id: 'q-s34-1',
      prompt: {
        en: 'The Gauss-Jordan method is primarily used for which of the following purposes?',
        hu: 'A Gauss–Jordan-módszert elsősorban melyik célra használjuk?',
      },
      options: [
        { en: 'Approximating integrals', hu: 'Integrálok közelítésére' },
        { en: 'Solving non-linear equations', hu: 'Nemlineáris egyenletek megoldására' },
        { en: 'Finding exact solutions to linear systems or computing matrix inverses', hu: 'Lineáris rendszerek pontos megoldására vagy mátrixinverzek kiszámítására' },
        { en: 'Computing eigenvalues', hu: 'Sajátértékek kiszámítására' },
      ],
      answer: 2,
      explanation: {
        en: 'Gauss–Jordan reduces (A | b) to (I | x) and is also the standard way to invert a matrix.',
        hu: 'A Gauss–Jordan az (A | b)-t (I | x)-re redukálja, és ez a mátrixinvertálás szokásos módja is.',
      },
    },
    {
      id: 'q-s34-2',
      prompt: {
        en: 'Which row operation is used to eliminate both upper and lower elements in a column?',
        hu: 'Melyik sorművelettel tüntetjük el egy oszlop felső és alsó elemeit is?',
      },
      options: [
        { en: 'Full pivoting', hu: 'Teljes pivotálás' },
        { en: 'Gauss-Jordan elimination', hu: 'Gauss–Jordan-elimináció' },
        { en: 'Backward substitution', hu: 'Visszahelyettesítés' },
        { en: 'Forward elimination', hu: 'Előre-elimináció' },
      ],
      answer: 1,
      explanation: {
        en: 'Gauss–Jordan clears entries both above and below each pivot.',
        hu: 'A Gauss–Jordan minden pivotelem fölött és alatt is kinullázza az elemeket.',
      },
    },
    {
      id: 'q-s34-3',
      prompt: {
        en: 'Which of the following operations is NOT used in Gauss-Jordan elimination?',
        hu: 'Az alábbi műveletek közül melyiket NEM használjuk a Gauss–Jordan-eliminációban?',
      },
      options: [
        { en: 'Swapping rows', hu: 'Sorcsere' },
        { en: 'Multiplying a row by a non-zero scalar', hu: 'Egy sor szorzása nem nulla skalárral' },
        { en: 'Multiplying a column by a non-zero scalar', hu: 'Egy oszlop szorzása nem nulla skalárral' },
        { en: 'Adding a multiple of one row to another', hu: 'Egy sor többszörösének hozzáadása egy másikhoz' },
      ],
      answer: 2,
      explanation: {
        en: 'Only elementary row operations are allowed; scaling a column is not one of them.',
        hu: 'Csak elemi sorműveletek megengedettek; egy oszlop skálázása nem ilyen.',
      },
    },
    {
      id: 'q-s34-4',
      prompt: {
        en: 'In Gauss-Jordan elimination, how are the non-pivot elements in the pivot column handled?',
        hu: 'A Gauss–Jordan-eliminációban hogyan kezeljük a pivotoszlop nem pivot elemeit?',
      },
      options: [
        { en: 'They are reduced to 1', hu: '1-re redukáljuk őket' },
        { en: 'They are made zero', hu: 'Nullává tesszük őket' },
        { en: 'They are copied to the result matrix', hu: 'Átmásoljuk az eredménymátrixba' },
        { en: 'They are left as is', hu: 'Változatlanul hagyjuk' },
      ],
      answer: 1,
      explanation: {
        en: 'Every off-pivot entry in the pivot column is eliminated to zero.',
        hu: 'A pivotoszlop minden nem pivot elemét nullára eliminálunk.',
      },
    },
    {
      id: 'q-s34-5',
      prompt: {
        en: 'How is a pivot element treated during Gauss-Jordan elimination?',
        hu: 'Hogyan kezeljük a pivotelemet a Gauss–Jordan-elimináció során?',
      },
      options: [
        { en: 'It is left unchanged', hu: 'Változatlanul hagyjuk' },
        { en: 'It is scaled to 1 and used to eliminate all other entries in its column', hu: '1-re skálázzuk, és vele elimináljuk az oszlop összes többi elemét' },
        { en: 'It is replaced by a random number', hu: 'Véletlen számra cseréljük' },
        { en: 'It is eliminated from the matrix', hu: 'Eltávolítjuk a mátrixból' },
      ],
      answer: 1,
      explanation: {
        en: 'The pivot row is normalized so the pivot is 1, then used to zero the rest of the column.',
        hu: 'A pivotsort úgy normáljuk, hogy a pivot 1 legyen, majd vele nullázzuk az oszlop többi részét.',
      },
    },
  ],
  // §3.4 Tridiagonal Linear Systems
  s35: [
    {
      id: 'q-s35-1',
      prompt: {
        en: 'What type of numerical issue can arise in the tridiagonal Gaussian elimination algorithm if the pivot is zero?',
        hu: 'Milyen numerikus probléma léphet fel a tridiagonális Gauss-eliminációs algoritmusban, ha a pivot nulla?',
      },
      options: [
        { en: 'Loss of orthogonality', hu: 'Ortogonalitás elvesztése' },
        { en: 'Division by zero', hu: 'Nullával osztás' },
        { en: 'Infinite loop', hu: 'Végtelen ciklus' },
        { en: 'Overflow error', hu: 'Túlcsordulási hiba' },
      ],
      answer: 1,
      explanation: {
        en: 'A zero pivot forces a division by zero in the elimination.',
        hu: 'A nulla pivot nullával osztáshoz vezet az eliminációban.',
      },
    },
    {
      id: 'q-s35-2',
      prompt: {
        en: 'The tridiagonal Gaussian elimination algorithm assumes what property of the coefficient matrix?',
        hu: 'A tridiagonális Gauss-eliminációs algoritmus milyen tulajdonságot tételez fel az együtthatómátrixról?',
      },
      options: [
        { en: 'Non-zero diagonal entries', hu: 'Nem nulla átlós elemek' },
        { en: 'Orthogonality', hu: 'Ortogonalitás' },
        { en: 'Symmetry', hu: 'Szimmetria' },
        { en: 'Diagonal dominance', hu: 'Diagonális dominancia' },
      ],
      answer: 0,
      explanation: {
        en: 'The pivot-free Thomas algorithm needs the diagonal entries to stay nonzero.',
        hu: 'A pivotálás nélküli Thomas-algoritmusnak az átlós elemek nem nulla volta szükséges.',
      },
    },
    {
      id: 'q-s35-3',
      prompt: {
        en: 'Which method is typically used to solve diagonally dominant tridiagonal linear systems efficiently?',
        hu: 'Melyik módszert használjuk jellemzően a diagonálisan domináns tridiagonális lineáris rendszerek hatékony megoldására?',
      },
      options: [
        { en: 'Gaussian elimination without pivoting', hu: 'Gauss-elimináció pivotálás nélkül' },
        { en: 'Gaussian elimination with complete pivoting', hu: 'Gauss-elimináció teljes pivotálással' },
        { en: 'Jacobi method', hu: 'Jacobi-módszer' },
        { en: 'Gauss-Jordan elimination', hu: 'Gauss–Jordan-elimináció' },
      ],
      answer: 0,
      explanation: {
        en: 'Diagonal dominance makes pivoting unnecessary, so the O(n) Thomas algorithm (Gaussian elimination without pivoting) is used.',
        hu: 'A diagonális dominancia feleslegessé teszi a pivotálást, így az O(n)-es Thomas-algoritmust (Gauss-elimináció pivotálás nélkül) használjuk.',
      },
    },
    {
      id: 'q-s35-4',
      prompt: {
        en: 'For an $n$-dimensional tridiagonal system, the Gaussian elimination for a tridiagonal system requires how many operations (approximately)?',
        hu: 'Egy $n$-dimenziós tridiagonális rendszernél a tridiagonális Gauss-elimináció hány műveletet igényel (közelítőleg)?',
      },
      options: [
        { en: '$O(n^2)$', hu: '$O(n^2)$' },
        { en: '$O(\\log n)$', hu: '$O(\\log n)$' },
        { en: '$O(n^3)$', hu: '$O(n^3)$' },
        { en: '$O(n)$', hu: '$O(n)$' },
      ],
      answer: 3,
      explanation: {
        en: 'The Thomas algorithm uses only about 5n−4 operations, i.e. O(n).',
        hu: 'A Thomas-algoritmus csak kb. 5n−4 műveletet használ, azaz O(n).',
      },
    },
    {
      id: 'q-s35-5',
      prompt: {
        en: 'Which component is NOT part of a typical tridiagonal matrix representation?',
        hu: 'Melyik összetevő NEM része egy tipikus tridiagonális mátrix ábrázolásának?',
      },
      options: [
        { en: 'Super-diagonal', hu: 'Felső mellékátló' },
        { en: 'Main diagonal', hu: 'Főátló' },
        { en: 'Corner elements', hu: 'Sarokelemek' },
        { en: 'Sub-diagonal', hu: 'Alsó mellékátló' },
      ],
      answer: 2,
      explanation: {
        en: 'A tridiagonal matrix has only the sub-, main, and super-diagonals — no corner elements.',
        hu: 'Egy tridiagonális mátrixnak csak alsó, fő- és felső átlója van — sarokelemei nincsenek.',
      },
    },
  ],
  // §3.5 Simultaneous Linear Systems
  s36: [
    {
      id: 'q-s36-1',
      prompt: {
        en: 'Which of the following can be used to solve simultaneous linear systems?',
        hu: 'Az alábbiak közül melyik használható szimultán lineáris rendszerek megoldására?',
      },
      options: [
        { en: 'Bisection method', hu: 'Felezési módszer' },
        { en: 'Secant method', hu: 'Szelőmódszer' },
        { en: 'Gaussian elimination', hu: 'Gauss-elimináció' },
        { en: 'Newton method', hu: 'Newton-módszer' },
      ],
      answer: 2,
      explanation: {
        en: 'Gaussian (or Gauss–Jordan) elimination on (A | B) solves all right-hand sides at once.',
        hu: 'Az (A | B)-n végzett Gauss- (vagy Gauss–Jordan-) elimináció az összes jobb oldalt egyszerre oldja meg.',
      },
    },
    {
      id: 'q-s36-2',
      prompt: {
        en: 'Consider the simultaneous linear system $Ax^{(i)} = b^{(i)}$; we use Gauss-Jordan elimination on the block matrix $(A,B)$, resulting in $(I,X)$. What are the solutions?',
        hu: 'Tekintsük az $Ax^{(i)} = b^{(i)}$ szimultán lineáris rendszert; Gauss–Jordan-eliminációt végzünk az $(A,B)$ blokkmátrixon, ami $(I,X)$-et ad. Mik a megoldások?',
      },
      options: [
        { en: 'May have no solution or infinitely many solutions', hu: 'Lehet, hogy nincs megoldás, vagy végtelen sok van' },
        { en: 'The vector $x^{(i)}$ will be the i-th column vector of $X$', hu: 'Az $x^{(i)}$ vektor $X$ i-edik oszlopvektora lesz' },
        { en: 'Never has a solution', hu: 'Sosem van megoldása' },
        { en: 'We use backward substitution after the last elimination step.', hu: 'Az utolsó eliminációs lépés után visszahelyettesítést használunk.' },
      ],
      answer: 1,
      explanation: {
        en: 'Each solution x^(i) appears as the corresponding column of X.',
        hu: 'Minden x^(i) megoldás X megfelelő oszlopaként jelenik meg.',
      },
    },
    {
      id: 'q-s36-3',
      prompt: {
        en: 'What type of coefficient matrix leads to a unique solution in a simultaneous system?',
        hu: 'Milyen együtthatómátrix vezet egyértelmű megoldáshoz egy szimultán rendszerben?',
      },
      options: [
        { en: 'Singular matrix', hu: 'Szinguláris mátrix' },
        { en: 'Zero matrix', hu: 'Nullmátrix' },
        { en: 'Sparse matrix', hu: 'Ritka mátrix' },
        { en: 'Invertible matrix', hu: 'Invertálható mátrix' },
      ],
      answer: 3,
      explanation: {
        en: 'An invertible (nonsingular) A gives a unique solution for each right-hand side.',
        hu: 'Egy invertálható (nemszinguláris) A minden jobb oldalra egyértelmű megoldást ad.',
      },
    },
    {
      id: 'q-s36-4',
      prompt: {
        en: 'Which method transforms a simultaneous system into an upper triangular form?',
        hu: 'Melyik módszer alakít egy szimultán rendszert felső háromszög alakra?',
      },
      options: [
        { en: 'Forward substitution', hu: 'Előrehelyettesítés' },
        { en: 'Backward substitution', hu: 'Visszahelyettesítés' },
        { en: 'Gauss-Jordan elimination', hu: 'Gauss–Jordan-elimináció' },
        { en: 'Gaussian elimination', hu: 'Gauss-elimináció' },
      ],
      answer: 3,
      explanation: {
        en: 'Gaussian elimination reduces the system to upper triangular form (Gauss–Jordan goes all the way to the identity).',
        hu: 'A Gauss-elimináció felső háromszög alakra hozza a rendszert (a Gauss–Jordan egészen az egységmátrixig megy).',
      },
    },
    {
      id: 'q-s36-5',
      prompt: {
        en: 'What condition must be met for an $n$-dimensional linear system to have a unique solution?',
        hu: 'Milyen feltételnek kell teljesülnie, hogy egy $n$-dimenziós lineáris rendszernek egyértelmű megoldása legyen?',
      },
      options: [
        { en: 'All coefficients must be positive', hu: 'Minden együtthatónak pozitívnak kell lennie' },
        { en: 'The determinant of the coefficient matrix must be non-zero', hu: 'Az együtthatómátrix determinánsának nem nullának kell lennie' },
        { en: 'The system must be homogeneous', hu: 'A rendszernek homogénnek kell lennie' },
        { en: 'The right-hand side must be zero', hu: 'A jobb oldalnak nullának kell lennie' },
      ],
      answer: 1,
      explanation: {
        en: 'A unique solution exists exactly when det(A) ≠ 0.',
        hu: 'Egyértelmű megoldás pontosan akkor létezik, ha det(A) ≠ 0.',
      },
    },
  ],
  // §3.6 Matrix Inversion and Determinants
  s37: [
    {
      id: 'q-s37-1',
      prompt: {
        en: 'What is the result of applying Gauss-Jordan elimination to an augmented matrix $(A|I)$?',
        hu: 'Mi az eredménye a Gauss–Jordan-elimináció $(A|I)$ kibővített mátrixra való alkalmazásának?',
      },
      options: [
        { en: 'A matrix with determinant equal to one', hu: 'Egy egy determinánsú mátrix' },
        { en: 'A matrix with only zero entries', hu: 'Egy csak nulla elemű mátrix' },
        { en: 'A diagonal matrix', hu: 'Egy diagonális mátrix' },
        { en: 'The inverse of $A$ appears in place of $I$', hu: '$A$ inverze jelenik meg $I$ helyén' },
      ],
      answer: 3,
      explanation: {
        en: 'Reducing (A | I) to (I | A⁻¹) produces the inverse in the right block.',
        hu: 'Az (A | I) (I | A⁻¹)-re redukálása az inverzet adja a jobb blokkban.',
      },
    },
    {
      id: 'q-s37-2',
      prompt: {
        en: 'What happens to the determinant if one row of a matrix is multiplied by a scalar $k$?',
        hu: 'Mi történik a determinánssal, ha egy mátrix egy sorát egy $k$ skalárral szorozzuk?',
      },
      options: [
        { en: 'The determinant remains the same', hu: 'A determináns változatlan marad' },
        { en: 'The determinant is divided by $k$', hu: 'A determináns $k$-val osztódik' },
        { en: 'The determinant becomes zero', hu: 'A determináns nulla lesz' },
        { en: 'The determinant is multiplied by $k$', hu: 'A determináns $k$-val szorzódik' },
      ],
      answer: 3,
      explanation: {
        en: 'Scaling a single row by k multiplies the determinant by k.',
        hu: 'Egyetlen sor k-val való szorzása a determinánst k-val szorozza.',
      },
    },
    {
      id: 'q-s37-3',
      prompt: {
        en: 'If $\\det(A) = 0$, then:',
        hu: 'Ha $\\det(A) = 0$, akkor:',
      },
      options: [
        { en: '$A$ is invertible', hu: '$A$ invertálható' },
        { en: 'The system $Ax = b$ has a unique solution', hu: 'Az $Ax = b$ rendszernek egyértelmű megoldása van' },
        { en: 'The matrix $A$ is diagonal', hu: 'Az $A$ mátrix diagonális' },
        { en: '$A$ is singular', hu: '$A$ szinguláris' },
      ],
      answer: 3,
      explanation: {
        en: 'A zero determinant means A is singular (non-invertible).',
        hu: 'A nulla determináns azt jelenti, hogy A szinguláris (nem invertálható).',
      },
    },
    {
      id: 'q-s37-4',
      prompt: {
        en: 'What is the determinant of the $n$-dimensional identity matrix $I_n$?',
        hu: 'Mi az $n$-dimenziós $I_n$ egységmátrix determinánsa?',
      },
      options: [
        { en: 'n', hu: 'n' },
        { en: '1', hu: '1' },
        { en: 'Depends on the size', hu: 'A mérettől függ' },
        { en: '0', hu: '0' },
      ],
      answer: 1,
      explanation: {
        en: 'The identity matrix has determinant 1 for any size.',
        hu: 'Az egységmátrix determinánsa bármely méretre 1.',
      },
    },
    {
      id: 'q-s37-5',
      prompt: {
        en: 'What condition must be true for a square matrix to have an inverse using Gauss-Jordan elimination?',
        hu: 'Milyen feltételnek kell teljesülnie, hogy egy négyzetes mátrixnak inverze legyen Gauss–Jordan-eliminációval?',
      },
      options: [
        { en: 'It must be symmetric', hu: 'Szimmetrikusnak kell lennie' },
        { en: 'Its determinant must be non-zero', hu: 'A determinánsának nem nullának kell lennie' },
        { en: 'It must be diagonal', hu: 'Diagonálisnak kell lennie' },
        { en: 'It must have all diagonal entries equal to 1', hu: 'Minden átlós elemének 1-nek kell lennie' },
      ],
      answer: 1,
      explanation: {
        en: 'A matrix is invertible iff its determinant is nonzero.',
        hu: 'Egy mátrix akkor és csak akkor invertálható, ha a determinánsa nem nulla.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
