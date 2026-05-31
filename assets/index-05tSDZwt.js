import{f as _e,r as y,j as t,h as Ae}from"./index-CRDeYVro.js";import{k as je}from"./katex-Dc8nsIP1.js";import{M as se}from"./MarkdownView-BlyPre-0.js";import{Q as we,S as qe,C as Me}from"./Quiz-muglWJlm.js";import{F as oe}from"./fraction-DqatKmli.js";import"./normalizeMath-B2PxJEdX.js";import"./index-CLMczI3u.js";import"./CodeBlock-C-DMFBDC.js";const Te={"app.title":{en:"Linear Systems",hu:"Lineáris egyenletrendszerek"},"app.subtitle":{en:"Interactive Numerical Analysis · Chapter 3",hu:"Interaktív numerikus analízis · 3. fejezet"},"nav.home":{en:"Home",hu:"Kezdőlap"},"nav.lab":{en:"Elimination Lab",hu:"Elimináció labor"},"nav.quiz":{en:"Quiz",hu:"Kvíz"},"nav.sections":{en:"Lessons",hu:"Leckék"},"theme.toggle":{en:"Toggle dark mode",hu:"Sötét mód váltása"},"lang.toggle":{en:"Magyar",hu:"English"},"home.tagline":{en:"Learn direct methods for solving linear systems — step by step, in English or Hungarian.",hu:"Tanuld meg a lineáris egyenletrendszerek direkt megoldási módszereit — lépésről lépésre, magyarul vagy angolul."},"home.lead":{en:"Gaussian & Gauss–Jordan elimination, pivoting strategies, tridiagonal solvers, matrix inversion and determinants — with an interactive visualizer and self-check quizzes.",hu:"Gauss- és Gauss–Jordan-elimináció, főelemkiválasztási stratégiák, tridiagonális megoldók, mátrixinvertálás és determináns — interaktív szemléltetővel és önellenőrző kvízekkel."},"home.openLab":{en:"Open the Elimination Lab",hu:"Elimináció labor megnyitása"},"home.openQuiz":{en:"Take a quiz",hu:"Kvíz kitöltése"},"home.browse":{en:"Browse the lessons",hu:"Leckék böngészése"},"lab.mode":{en:"Task",hu:"Feladat"},"lab.mode.solve":{en:"Solve Ax = b",hu:"Ax = b megoldása"},"lab.mode.inverse":{en:"Invert A",hu:"A invertálása"},"lab.mode.determinant":{en:"Determinant",hu:"Determináns"},"lab.mode.tridiagonal":{en:"Tridiagonal",hu:"Tridiagonális"},"lab.method":{en:"Method",hu:"Módszer"},"method.gauss":{en:"Gaussian elimination",hu:"Gauss-elimináció"},"method.gaussJordan":{en:"Gauss–Jordan",hu:"Gauss–Jordan"},"lab.pivoting":{en:"Pivoting",hu:"Főelemkiválasztás"},"pivot.none":{en:"None",hu:"Nincs"},"pivot.partial":{en:"Partial",hu:"Részleges"},"pivot.complete":{en:"Complete",hu:"Teljes"},"pivot.scaled":{en:"Scaled partial",hu:"Skálázott részleges"},"lab.preset":{en:"Example",hu:"Példa"},"lab.preset.custom":{en:"Custom",hu:"Egyéni"},"lab.size":{en:"Size",hu:"Méret"},"lab.matrixA":{en:"Coefficient matrix A",hu:"Együtthatómátrix A"},"lab.vectorB":{en:"Right-hand side b",hu:"Jobb oldal b"},"lab.solve":{en:"Solve",hu:"Megoldás"},"lab.first":{en:"First",hu:"Első"},"lab.prev":{en:"Previous",hu:"Előző"},"lab.play":{en:"Play",hu:"Lejátszás"},"lab.pause":{en:"Pause",hu:"Szünet"},"lab.next":{en:"Next",hu:"Következő"},"lab.last":{en:"Last",hu:"Utolsó"},"lab.stepOf":{en:"Step {a} of {b}",hu:"{a}. lépés / {b}"},"lab.result":{en:"Result",hu:"Eredmény"},"lab.solution":{en:"Solution",hu:"Megoldás"},"lab.determinant":{en:"Determinant",hu:"Determináns"},"lab.inverse":{en:"Inverse A⁻¹",hu:"Inverz A⁻¹"},"lab.singular":{en:"The matrix is singular for this strategy — no unique solution.",hu:"A mátrix szinguláris ennél a stratégiánál — nincs egyértelmű megoldás."},"lab.varOrder":{en:"Variable order",hu:"Változók sorrendje"},"lab.note.inverse":{en:"Inversion augments A with the identity and reduces to (I | A⁻¹). Complete/scaled pivoting is disabled here.",hu:"Az invertálás A-t az egységmátrixszal bővíti, és (I | A⁻¹) alakra hozza. A teljes/skálázott főelemkiválasztás itt nem elérhető."},"quiz.title":{en:"Self-check quiz",hu:"Önellenőrző kvíz"},"quiz.check":{en:"Check",hu:"Ellenőrzés"},"quiz.correct":{en:"Correct!",hu:"Helyes!"},"quiz.incorrect":{en:"Not quite — try again or see the solution.",hu:"Nem egészen — próbáld újra, vagy nézd meg a megoldást."},"quiz.showSolution":{en:"Show solution",hu:"Megoldás mutatása"},"quiz.hideSolution":{en:"Hide solution",hu:"Megoldás elrejtése"},"quiz.next":{en:"Next question",hu:"Következő kérdés"},"quiz.prev":{en:"Previous",hu:"Előző"},"quiz.score":{en:"Score",hu:"Pontszám"},"quiz.true":{en:"True",hu:"Igaz"},"quiz.false":{en:"False",hu:"Hamis"},"quiz.placeholder":{en:"your answer",hu:"a válaszod"},"quiz.questionOf":{en:"Question {a} of {b}",hu:"{a}. kérdés / {b}"},"section.toLab":{en:"Try it in the Lab",hu:"Próbáld ki a laborban"},"common.algorithm":{en:"Algorithm",hu:"Algoritmus"},"common.theorem":{en:"Theorem",hu:"Tétel"},"common.example":{en:"Example",hu:"Példa"},"common.notFound":{en:"Not found.",hu:"Nem található."},"common.exercise":{en:"Exercise",hu:"Feladat"},"common.exercises":{en:"Exercises",hu:"Feladatok"},"common.showSolution":{en:"Show solution",hu:"Megoldás"}};function S(){const{lang:e,setLang:n,toggle:i}=_e(),a=y.useCallback(h=>h[e],[e]),o=y.useCallback((h,l)=>{const u=Te[h];let s=u?u[e]:h;if(l)for(const[d,p]of Object.entries(l))s=s.replace(new RegExp(`\\{${d}\\}`,"g"),String(p));return s},[e]);return{lang:e,setLang:n,toggleLang:i,t:o,pick:a}}const $e=[{id:"s31",number:"3.1",title:{en:"Review of Linear Algebra",hu:"Lineáris algebrai előismeretek"},summary:{en:"Determinants, invertibility, diagonal dominance and positive definiteness.",hu:"Determinánsok, invertálhatóság, diagonális dominancia és pozitív definitség."},blocks:[{kind:"p",text:{en:"A square matrix A is invertible (nonsingular) exactly when det(A) ≠ 0, which is also equivalent to Ax = b having a unique solution for every b.",hu:"Egy A négyzetes mátrix akkor és csak akkor invertálható (reguláris), ha det(A) ≠ 0, ami azzal is egyenértékű, hogy az Ax = b minden b-re egyértelműen megoldható."}},{kind:"theorem",label:{en:"Triangular determinant",hu:"Háromszögmátrix determinánsa"},text:{en:"For a triangular matrix the determinant is the product of the diagonal entries.",hu:"Háromszögmátrix determinánsa a főátlóbeli elemek szorzata."},tex:"\\det(A) = a_{11}a_{22}\\cdots a_{nn}"},{kind:"p",text:{en:"A is (row) diagonally dominant if each diagonal entry dominates its row:",hu:"A (soronként) diagonálisan domináns, ha a főátlóbeli elem dominálja a sorát:"}},{kind:"math",tex:"|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|, \\qquad i = 1,\\dots,n."},{kind:"theorem",label:{en:"Diagonal dominance ⇒ invertible",hu:"Diagonális dominancia ⇒ invertálható"},text:{en:"If A is diagonally dominant then A is invertible, and Gaussian elimination needs no pivoting and is stable.",hu:"Ha A diagonálisan domináns, akkor invertálható, és a Gauss-elimináció főelemkiválasztás nélkül, stabilan elvégezhető."}},{kind:"p",text:{en:"A symmetric A is positive definite iff xᵀAx > 0 for all x ≠ 0 — equivalently, all leading principal minors are positive.",hu:"Egy szimmetrikus A akkor pozitív definit, ha xᵀAx > 0 minden x ≠ 0 esetén — ezzel egyenértékűen minden bal felső főminor pozitív."}},{kind:"theorem",label:{en:"Determinant properties (Thm 3.1)",hu:"Determináns-tulajdonságok (3.1. tétel)"},text:{en:"det(AB) = det(A)det(B), det(Aᵀ) = det(A), det(A⁻¹) = 1/det(A). A row swap flips the sign; scaling a row by c scales det by c; adding a multiple of one row to another leaves det unchanged. Laplace (cofactor) expansion along row i:",hu:"det(AB) = det(A)det(B), det(Aᵀ) = det(A), det(A⁻¹) = 1/det(A). Sorcsere előjelet vált; egy sor c-szeresével det c-szereződik; egy sor többszörösének másikhoz adása nem változtat. Kifejtési (Laplace-) tétel az i. sor szerint:"},tex:"\\det(A) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij}\\,\\det(A_{ij})"},{kind:"theorem",label:{en:"Invertibility equivalences (Thm 3.2–3.3)",hu:"Invertálhatósági ekvivalenciák (3.2–3.3)"},text:{en:"The following are equivalent: det(A) ≠ 0; A is invertible; Ax = b has a unique solution for every b. Moreover Ax = 0 has a nontrivial solution iff A is singular.",hu:"Ekvivalensek: det(A) ≠ 0; A invertálható; Ax = b minden b-re egyértelműen megoldható. Továbbá Ax = 0-nak akkor és csak akkor van nemtriviális megoldása, ha A szinguláris."}},{kind:"theorem",label:{en:"Inverse of a product (Thm 3.4)",hu:"Szorzat inverze (3.4. tétel)"},text:{en:"If A and B are invertible, then AB is invertible and the inverse reverses the order:",hu:"Ha A és B invertálható, akkor AB is invertálható, és az inverz megfordítja a sorrendet:"},tex:"(AB)^{-1} = B^{-1}A^{-1}"},{kind:"theorem",label:{en:"Triangular products & inverses (Thm 3.6)",hu:"Háromszög szorzatok és inverzek (3.6. tétel)"},text:{en:"The product of lower (upper) triangular matrices is lower (upper) triangular, and the inverse of a lower (upper) triangular matrix is again lower (upper) triangular.",hu:"Alsó (felső) háromszögmátrixok szorzata alsó (felső) háromszög, és egy alsó (felső) háromszögmátrix inverze is alsó (felső) háromszög."}},{kind:"p",text:{en:"A permutation matrix P is the identity with its rows (or columns) reordered — exactly one 1 per row and column. Left-multiplying PA permutes the rows of A; right-multiplying AP permutes its columns (Thm 3.7).",hu:"A P permutációs mátrix az egységmátrix átrendezett soraival (vagy oszlopaival) — soronként és oszloponként pontosan egy 1-es. A PA balszorzás A sorait, az AP jobbszorzás az oszlopait permutálja (3.7. tétel)."}},{kind:"theorem",label:{en:"Positive definite consequences (Thm 3.9)",hu:"Pozitív definitség következményei (3.9. tétel)"},text:{en:"If A is positive definite then A is invertible and every diagonal entry is positive (aᵢᵢ > 0).",hu:"Ha A pozitív definit, akkor A invertálható, és minden főátlóbeli elem pozitív (aᵢᵢ > 0)."}},{kind:"p",text:{en:"A is orthogonal if AAᵀ = AᵀA = I, i.e. A⁻¹ = Aᵀ. Orthogonal matrices preserve the Euclidean norm, and their product is orthogonal (Thm 3.11).",hu:"A ortogonális, ha AAᵀ = AᵀA = I, azaz A⁻¹ = Aᵀ. Az ortogonális mátrixok megőrzik az euklideszi normát, szorzatuk ortogonális (3.11. tétel)."}},{kind:"p",text:{en:"λ ∈ ℂ is an eigenvalue of A if Ax = λx for some eigenvector x ≠ 0. The n eigenvalues are the roots of the characteristic equation (Thm 3.12):",hu:"λ ∈ ℂ az A sajátértéke, ha Ax = λx valamely x ≠ 0 sajátvektorra. Az n sajátérték a karakterisztikus egyenlet gyökei (3.12. tétel):"}},{kind:"math",tex:"\\det(A - \\lambda I) = 0"},{kind:"theorem",label:{en:"Eigenvalue properties (Thm 3.13–3.14)",hu:"Sajátérték-tulajdonságok (3.13–3.14)"},text:{en:"det(A) = λ₁⋯λₙ; A is invertible iff every λᵢ ≠ 0; A⁻¹ has eigenvalues 1/λᵢ and Aᵏ has λᵢᵏ. The eigenvalues of a triangular matrix are its diagonal entries.",hu:"det(A) = λ₁⋯λₙ; A pontosan akkor invertálható, ha minden λᵢ ≠ 0; A⁻¹ sajátértékei 1/λᵢ, Aᵏ-é λᵢᵏ. A háromszögmátrix sajátértékei a főátló elemei."},tex:"\\det(A) = \\lambda_1\\lambda_2\\cdots\\lambda_n"},{kind:"theorem",label:{en:"Similar matrices (Thm 3.15)",hu:"Hasonló mátrixok (3.15. tétel)"},text:{en:"A and B are similar if A = P⁻¹BP for some invertible P. Similar matrices have identical eigenvalues (and the same characteristic polynomial), since det(A − λI) = det(B − λI).",hu:"A és B hasonló, ha A = P⁻¹BP valamely invertálható P-re. A hasonló mátrixok sajátértékei azonosak (és a karakterisztikus polinomjuk is), mert det(A − λI) = det(B − λI)."}},{kind:"p",text:{en:"The spectral radius is ρ(A) = max{|λ|}. For any matrix norm ρ(A) ≤ ‖A‖, and for every ε > 0 some norm satisfies ‖A‖ ≤ ρ(A) + ε (Thm 3.16–3.17). The 2-norm is ‖A‖₂ = √ρ(AᵀA), which equals ρ(A) for symmetric A (Thm 3.18).",hu:"A spektrálsugár ρ(A) = max{|λ|}. Bármely mátrixnormára ρ(A) ≤ ‖A‖, és minden ε > 0-ra van olyan norma, hogy ‖A‖ ≤ ρ(A) + ε (3.16–3.17). A 2-norma ‖A‖₂ = √ρ(AᵀA), ami szimmetrikus A-ra ρ(A) (3.18)."}},{kind:"theorem",label:{en:"Vandermonde determinant (Thm 3.19)",hu:"Vandermonde-determináns (3.19. tétel)"},text:{en:"The determinant of the matrix with rows (1, aᵢ, aᵢ², …, aᵢⁿ⁻¹) equals ∏_{i>j}(aᵢ − aⱼ); it is nonzero iff the aᵢ are pairwise distinct. This underlies the unique solvability of polynomial interpolation.",hu:"Az (1, aᵢ, aᵢ², …, aᵢⁿ⁻¹) sorú mátrix determinánsa ∏_{i>j}(aᵢ − aⱼ); pontosan akkor nem nulla, ha az aᵢ-k páronként különbözők. Ez adja a polinominterpoláció egyértelmű megoldhatóságát."},tex:"\\prod_{i>j}(a_i - a_j)"},{kind:"glossary",deck:"s31"},{kind:"flashcards",deck:"s31"}]},{id:"s32",number:"3.2",title:{en:"Triangular Systems",hu:"Trianguláris egyenletrendszerek"},summary:{en:"Backward substitution solves upper-triangular systems in O(n²).",hu:"A visszahelyettesítés O(n²) lépésben oldja meg a felső háromszög rendszereket."},blocks:[{kind:"p",text:{en:"An upper-triangular system is solved from the bottom up: the last equation gives xₙ, then each earlier equation has a single new unknown.",hu:"Egy felső háromszög rendszert alulról fölfelé oldunk meg: az utolsó egyenlet adja xₙ-t, majd minden korábbi egyenletben egyetlen új ismeretlen marad."}},{kind:"math",tex:"x_i = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j=i+1}^{n} a_{ij} x_j\\right)"},{kind:"algorithm",title:{en:"Backward substitution",hu:"Visszahelyettesítés"},lines:["xₙ ← bₙ / aₙₙ","for i = n−1, …, 1 do","    xᵢ ← (bᵢ − Σ_{j>i} aᵢⱼ xⱼ) / aᵢᵢ","end do"]},{kind:"p",text:{en:"It works iff every diagonal entry is nonzero, i.e. det(A) ≠ 0. Cost: about n²/2 multiplications/divisions.",hu:"Akkor működik, ha minden főátlóbeli elem nemnulla, azaz det(A) ≠ 0. Költség: kb. n²/2 szorzás/osztás."}},{kind:"p",text:{en:"Example 3.20. Solve the system below. The last equation gives x₄ = 4; substituting upward, x₃ = (−2 + x₄)/2 = 1, then x₂ = (13 + x₃ − 2x₄)/3 = 2, and finally x₁ = (3 + x₂ − 3x₃ − x₄)/2 = −1.",hu:"3.20. példa. Oldd meg az alábbi rendszert. Az utolsó egyenlet x₄ = 4-et ad; felfelé helyettesítve x₃ = (−2 + x₄)/2 = 1, majd x₂ = (13 + x₃ − 2x₄)/3 = 2, végül x₁ = (3 + x₂ − 3x₃ − x₄)/2 = −1."}},{kind:"math",tex:"\\begin{aligned} 2x_1 - x_2 + 3x_3 + x_4 &= 3 \\\\ 3x_2 - x_3 + 2x_4 &= 13 \\\\ 2x_3 - x_4 &= -2 \\\\ 3x_4 &= 12 \\end{aligned} \\;\\Rightarrow\\; (x_1,x_2,x_3,x_4)=(-1,2,1,4)"},{kind:"p",text:{en:"Exact operation count: step i needs i multiplications/divisions and i−1 additions/subtractions, so the totals are n(n+1)/2 mult/div and (n−1)n/2 add/sub — both n²/2 + O(n). The O(nᵏ) notation hides the lower-order terms, leaving the leading power that governs the cost for large n.",hu:"Pontos műveletszám: az i. lépés i szorzást/osztást és i−1 összeadást/kivonást igényel, így összesen n(n+1)/2 szorzás/osztás és (n−1)n/2 összeadás/kivonás — mindkettő n²/2 + O(n). Az O(nᵏ) jelölés elrejti az alacsonyabb rendű tagokat, meghagyva a nagy n-re meghatározó vezető hatványt."}},{kind:"p",text:{en:"The mirror method, forward substitution, solves a lower-triangular system top-down: x₁ = b₁/a₁₁, then xᵢ = (bᵢ − Σ_{j<i} aᵢⱼxⱼ)/aᵢᵢ. Both substitutions are the cheap final step after an LU or Gaussian factorization.",hu:"A tükör-módszer, az előrehelyettesítés, egy alsó háromszög rendszert fentről lefelé old meg: x₁ = b₁/a₁₁, majd xᵢ = (bᵢ − Σ_{j<i} aᵢⱼxⱼ)/aᵢᵢ. Mindkét helyettesítés az LU- vagy Gauss-faktorizáció utáni olcsó zárólépés."}},{kind:"glossary",deck:"s32"},{kind:"flashcards",deck:"s32"}]},{id:"s33",number:"3.3",title:{en:"Gaussian Elimination & Pivoting",hu:"Gauss-elimináció és főelemkiválasztás"},summary:{en:"Reduce to triangular form, then back-substitute. Pivoting controls zero pivots and rounding.",hu:"Háromszög alakra hozás, majd visszahelyettesítés. A főelemkiválasztás kezeli a nulla főelemeket és a kerekítést."},blocks:[{kind:"p",text:{en:"Forward elimination uses the pivot row to clear the entries below each pivot. The multiplier is lᵢₖ = aᵢₖ / aₖₖ.",hu:"Az előre elimináció a főelem sorával nullázza ki a főelem alatti elemeket. A szorzótényező lᵢₖ = aᵢₖ / aₖₖ."}},{kind:"math",tex:"a_{ij}^{(k)} = a_{ij}^{(k-1)} - l_{ik}\\, a_{kj}^{(k-1)}, \\qquad l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}"},{kind:"p",text:{en:"A zero (or tiny) pivot is a problem. Partial pivoting swaps in the largest-magnitude entry in the column; complete pivoting searches the whole submatrix (and swaps columns, tracking the variable order); scaled pivoting compares entries relative to each row’s scale.",hu:"A nulla (vagy nagyon kicsi) főelem gond. A részleges főelemkiválasztás a legnagyobb abszolút értékű oszlopelemet hozza be; a teljes az egész részmátrixban keres (és oszlopot is cserél, követve a változók sorrendjét); a skálázott a sorok skálájához viszonyít."}},{kind:"p",text:{en:"Work on the augmented matrix (A | b): elimination is just row operations on this n×(n+1) array, producing the sequence Ã⁽⁰⁾ → Ã⁽¹⁾ → … → Ã⁽ⁿ⁻¹⁾ of equivalent systems in triangular form, followed by back-substitution.",hu:"A bővített (A | b) mátrixon dolgozunk: az elimináció ezen az n×(n+1) tömbön végzett sorművelet, amely az ekvivalens rendszerek Ã⁽⁰⁾ → Ã⁽¹⁾ → … → Ã⁽ⁿ⁻¹⁾ háromszög-sorozatát adja, majd visszahelyettesítés következik."}},{kind:"algorithm",title:{en:"Gaussian elimination (Alg. 3.23)",hu:"Gauss-elimináció (3.23. algoritmus)"},lines:["(elimination)","for k = 1, …, n−1 do","    for i = k+1, …, n do","        lᵢₖ ← aᵢₖ / aₖₖ","        for j = k+1, …, n+1 do","            aᵢⱼ ← aᵢⱼ − lᵢₖ·aₖⱼ","        end do","    end do","end do","(back-substitution)","xₙ ← a_{n,n+1} / aₙₙ","for i = n−1, …, 1 do","    xᵢ ← (a_{i,n+1} − Σ_{j>i} aᵢⱼ xⱼ) / aᵢᵢ","end do"]},{kind:"p",text:{en:"Exact operation count: the elimination needs n³/3 + n²/2 − 5n/6 mult/div and (n³−n)/3 add/sub; with back-substitution both totals are n³/3 + O(n²). So the time complexity of Gaussian elimination is n³/3 — an order of magnitude more than the O(n²) triangular solve.",hu:"Pontos műveletszám: az elimináció n³/3 + n²/2 − 5n/6 szorzást/osztást és (n³−n)/3 összeadást/kivonást igényel; a visszahelyettesítéssel mindkét összeg n³/3 + O(n²). Tehát a Gauss-elimináció időigénye n³/3 — egy nagyságrenddel több az O(n²) háromszög-megoldásnál."}},{kind:"p",text:{en:"Why pivot (Example 3.25): solving 0.0002·x₁ − 30.5·x₂ = −60.99, 5.06·x₁ − 1.05·x₂ = 250.9 in 4-digit arithmetic without a swap divides by the tiny 0.0002, giving x₁ with a 300% relative error. Swapping the rows first (dividing by 5.06) returns the exact solution (50, 2).",hu:"Miért pivotáljunk (3.25. példa): a 0.0002·x₁ − 30.5·x₂ = −60.99, 5.06·x₁ − 1.05·x₂ = 250.9 rendszert 4-jegyű aritmetikában csere nélkül megoldva a pici 0.0002-vel osztunk, így x₁ relatív hibája 300%. A sorok előzetes cseréje (5.06-tal osztva) a pontos (50, 2) megoldást adja."}},{kind:"theorem",label:{en:"Partial pivoting solvability (Thm 3.26)",hu:"Részleges pivot megoldhatóság (3.26. tétel)"},text:{en:"These are equivalent: Ax = b is solvable by Gaussian elimination with partial pivoting; det(A) ≠ 0; A is invertible; Ax = b has a unique solution for all b. Partial pivoting therefore succeeds exactly when the system is uniquely solvable.",hu:"Ekvivalensek: Ax = b megoldható részleges főelemkiválasztásos Gauss-eliminációval; det(A) ≠ 0; A invertálható; Ax = b minden b-re egyértelműen megoldható. A részleges pivot tehát pontosan akkor sikerül, ha a rendszer egyértelműen megoldható."}},{kind:"p",text:{en:"Partial pivoting in detail: before step k, find the row l with |aₗₖ| = max{|aᵢₖ| : i = k,…,n} in the column on and below the diagonal, swap rows k and l, then eliminate. Example 3.27 solves the system of Example 3.24 — which stalls on a zero pivot without pivoting — by swapping the largest-magnitude entry into the pivot each step:",hu:"Részleges pivot részletesen: a k. lépés előtt keressük meg az l sort, amelyre |aₗₖ| = max{|aᵢₖ| : i = k,…,n} a főátlón és alatta, cseréljük a k. és l. sort, majd eliminálunk. A 3.27. példa a 3.24. példa rendszerét oldja meg — amely pivot nélkül nulla főelemen elakad — úgy, hogy minden lépésben a legnagyobb abszolút értékűt hozza a főelembe:"}},{kind:"math",tex:"\\left(\\begin{array}{cccc|c} 2 & -1 & 0 & -3 & 8 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ -3 & 1 & 1 & -2 & -5 \\\\ 2 & 4 & 0 & -1 & 21 \\end{array}\\right) \\;\\xrightarrow{\\text{partial pivot}}\\; \\left(\\begin{array}{cccc|c} -3 & 1 & 1 & -2 & -5 \\\\ 0 & \\tfrac{14}{3} & \\tfrac{2}{3} & -\\tfrac{7}{3} & \\tfrac{53}{3} \\\\ 0 & 0 & \\tfrac{12}{7} & \\tfrac{7}{2} & -\\tfrac{1}{14} \\\\ 0 & 0 & 0 & -\\tfrac{143}{24} & \\tfrac{143}{24} \\end{array}\\right) \\Rightarrow (4,3,2,-1)"},{kind:"p",text:{en:"Complete (maximal) pivoting goes further: before step k it finds the largest-magnitude entry |aₗₘ| = max{|aᵢⱼ| : i,j = k,…,n} in the whole remaining submatrix and swaps both the rows (k↔l) and the columns (k↔m). Column swaps reorder the unknowns, so the variable order must be tracked. It is the most rounding-resistant strategy but needs the most comparisons. Example 3.29 solves the Example 3.22 system this way (column order becomes x₄, x₃, x₂, x₁):",hu:"A teljes (maximális) főelemkiválasztás tovább megy: a k. lépés előtt a teljes maradék részmátrixban megkeresi a legnagyobb |aₗₘ| = max{|aᵢⱼ| : i,j = k,…,n} elemet, és sort (k↔l) és oszlopot (k↔m) is cserél. Az oszlopcsere átrendezi az ismeretleneket, ezért a változók sorrendjét követni kell. Ez a legkerekítés-ellenállóbb stratégia, de a legtöbb összehasonlítást igényli. A 3.29. példa így oldja meg a 3.22. rendszert (az oszlopsorrend x₄, x₃, x₂, x₁ lesz):"}},{kind:"math",tex:"\\left(\\begin{array}{cccc|c} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{array}\\right) \\;\\xrightarrow{\\text{complete pivot}}\\; \\left(\\begin{array}{cccc|c} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & 0 & -\\tfrac{23}{10} & \\tfrac{11}{5} & -\\tfrac{56}{5} \\\\ 0 & 0 & 0 & -\\tfrac{57}{23} & \\tfrac{171}{23} \\end{array}\\right)_{(x_4,x_3,x_2,x_1)} \\Rightarrow (x_1,x_2,x_3,x_4)=(-3,2,4,-2)"},{kind:"theorem",label:{en:"Permutation factorization (Thm 3.28)",hu:"Permutációs faktorizáció (3.28. tétel)"},text:{en:"If det(A) ≠ 0 there is a permutation matrix P such that PAx = Pb can be solved by Gaussian elimination without any row swaps — collecting all partial-pivot swaps in advance. (This is the P of the later PA = LU factorization.)",hu:"Ha det(A) ≠ 0, van olyan P permutációs mátrix, hogy a PAx = Pb sorcsere nélküli Gauss-eliminációval megoldható — az összes részleges-pivot cserét előre összegyűjtve. (Ez a későbbi PA = LU faktorizáció P-je.)"}},{kind:"theorem",label:{en:"When pivoting is unnecessary (Thm 3.32/3.33)",hu:"Mikor felesleges a pivotálás (3.32/3.33)"},text:{en:"If A is diagonally dominant, Gaussian elimination runs without pivoting and is stable. If A is symmetric, A is positive definite iff elimination runs without pivoting with all pivots positive — also stable.",hu:"Ha A diagonálisan domináns, a Gauss-elimináció pivotálás nélkül lefut és stabil. Ha A szimmetrikus, akkor A pontosan akkor pozitív definit, ha az elimináció pivotálás nélkül lefut, és minden főelem pozitív — szintén stabil."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-22&mode=solve&method=gauss&pivot=none",label:{en:"Run Example 3.22 (no pivoting)",hu:"3.22. példa futtatása (csere nélkül)"}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-24&mode=solve&method=gauss&pivot=partial",label:{en:"Run Example 3.24/3.27 (partial pivoting)",hu:"3.24/3.27. példa (részleges)"}},{kind:"glossary",deck:"s33"},{kind:"flashcards",deck:"s33"}]},{id:"s34",number:"3.4",title:{en:"Gauss–Jordan Elimination",hu:"Gauss–Jordan-elimináció"},summary:{en:"Eliminate above and below each pivot to reach (I | x) directly.",hu:"A főelem alatt és fölött is eliminálunk, így közvetlenül (I | x) alakot kapunk."},blocks:[{kind:"p",text:{en:"Gauss–Jordan eliminates in every other row, then normalises each pivot row, turning the coefficient block into the identity. The solution is read straight from the last column. Cost ≈ n³/2.",hu:"A Gauss–Jordan minden más sorban eliminál, majd normálja a főelem-sorokat, így az együtthatóblokkból egységmátrix lesz. A megoldás közvetlenül leolvasható az utolsó oszlopból. Költség ≈ n³/2."}},{kind:"algorithm",title:{en:"Gauss–Jordan elimination (Alg. 3.34)",hu:"Gauss–Jordan-elimináció (3.34. algoritmus)"},lines:["for k = 1, …, n do","    for i = 1, …, n,  i ≠ k do","        lᵢₖ ← aᵢₖ / aₖₖ","        for j = k+1, …, n+1 do","            aᵢⱼ ← aᵢⱼ − lᵢₖ·aₖⱼ","        end do","    end do","end do","for i = 1, …, n do   xᵢ ← a_{i,n+1} / aᵢᵢ   end do"]},{kind:"p",text:{en:"Operation count: n³/2 + O(n²) multiplications/divisions and n³/2 + O(n²) additions/subtractions — about 50% more than Gaussian elimination (n³/3). For solving a single system Gaussian elimination is therefore cheaper; Gauss–Jordan pays off for matrix inversion and many simultaneous right-hand sides, where the identity form is reused.",hu:"Műveletszám: n³/2 + O(n²) szorzás/osztás és n³/2 + O(n²) összeadás/kivonás — kb. 50%-kal több a Gauss-eliminációnál (n³/3). Egyetlen rendszer megoldására tehát a Gauss-elimináció olcsóbb; a Gauss–Jordan a mátrixinvertálásnál és sok egyidejű jobb oldalnál térül meg, ahol az egységalak újrahasznosul."}},{kind:"p",text:{en:"Example 3.35 (no pivoting): the coefficient block is driven to the identity and the solution appears in the last column.",hu:"3.35. példa (csere nélkül): az együtthatóblokkot egységmátrixra hozzuk, és a megoldás az utolsó oszlopban jelenik meg."}},{kind:"math",tex:"\\left(\\begin{array}{cccc|c} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & -3 & -4 & 3 \\\\ -2 & 1 & 4 & -2 & 28 \\end{array}\\right) \\;\\sim\\;\\cdots\\;\\sim\\; \\left(\\begin{array}{cccc|c} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 1 & 0 & 0 & 2 \\\\ 0 & 0 & 1 & 0 & 4 \\\\ 0 & 0 & 0 & 1 & -2 \\end{array}\\right)"},{kind:"p",text:{en:"Pivoting strategies combine with Gauss–Jordan just as with Gaussian elimination. Example 3.36 runs the same system with partial pivoting and reaches the identical (I | x) form and solution (−3, 2, 4, −2).",hu:"A pivotálási stratégiák ugyanúgy kombinálhatók a Gauss–Jordannal, mint a Gauss-eliminációval. A 3.36. példa ugyanazt a rendszert futtatja részleges pivottal, és ugyanazt az (I | x) alakot és (−3, 2, 4, −2) megoldást éri el."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-22&mode=solve&method=gauss-jordan&pivot=none",label:{en:"Run Example 3.35 (Gauss–Jordan)",hu:"3.35. példa (Gauss–Jordan)"}},{kind:"glossary",deck:"s34"},{kind:"flashcards",deck:"s34"}]},{id:"s35",number:"3.5",title:{en:"Tridiagonal Systems",hu:"Tridiagonális egyenletrendszerek"},summary:{en:"The Thomas algorithm solves tridiagonal systems in O(n).",hu:"A Thomas-algoritmus O(n) lépésben old meg tridiagonális rendszereket."},blocks:[{kind:"p",text:{en:"A matrix is tridiagonal if aᵢⱼ = 0 whenever |i − j| > 1 — nonzeros only on the main diagonal (dᵢ), the sub-diagonal (aᵢ) and the super-diagonal (cᵢ). Such systems appear constantly in splines, boundary-value problems and PDE discretizations.",hu:"Egy mátrix tridiagonális, ha aᵢⱼ = 0, valahányszor |i − j| > 1 — nemnulla csak a főátlón (dᵢ), az aldiagonálison (aᵢ) és a felső átlón (cᵢ). Ilyen rendszerek folyamatosan előfordulnak spline-oknál, peremértékfeladatoknál és PDE-diszkretizációknál."}},{kind:"math",tex:"\\begin{pmatrix} d_1 & c_1 & & & \\\\ a_1 & d_2 & c_2 & & \\\\ & a_2 & d_3 & \\ddots & \\\\ & & \\ddots & \\ddots & c_{n-1} \\\\ & & & a_{n-1} & d_n \\end{pmatrix}\\mathbf{x} = \\mathbf{b}"},{kind:"p",text:{en:"Store only the three vectors (aᵢ), (dᵢ), (cᵢ) — just 3n−2 numbers instead of n². During elimination the super-diagonal cᵢ never changes and the sub-diagonal aᵢ becomes 0, so only dᵢ and bᵢ are updated.",hu:"Csak a három vektort tároljuk: (aᵢ), (dᵢ), (cᵢ) — 3n−2 szám az n² helyett. Az elimináció során a felső átló cᵢ nem változik, az aldiagonális aᵢ pedig 0 lesz, így csak dᵢ-t és bᵢ-t frissítjük."}},{kind:"p",text:{en:"When nonzeros sit only on the three central diagonals, a specialised elimination needs only 5n−4 multiplications/divisions — far less than n³/3.",hu:"Ha a nemnulla elemek csak a három középső átlón vannak, egy speciális elimináció már 5n−4 szorzással/osztással elég — sokkal kevesebb, mint n³/3."}},{kind:"algorithm",title:{en:"Thomas algorithm",hu:"Thomas-algoritmus"},lines:["for i = 2, …, n do","    t ← aᵢ₋₁ / dᵢ₋₁","    dᵢ ← dᵢ − t · cᵢ₋₁","    bᵢ ← bᵢ − t · bᵢ₋₁","end do","xₙ ← bₙ / dₙ","for i = n−1, …, 1 do  xᵢ ← (bᵢ − cᵢ xᵢ₊₁) / dᵢ"]},{kind:"p",text:{en:"If the tridiagonal matrix is diagonally dominant, Theorem 3.32 guarantees the algorithm runs without pivoting and is stable — the usual situation in applications. The same banded idea extends to a band matrix (aᵢⱼ = 0 for |i − j| > p), giving an O(p²n) solver; tridiagonal is the p = 1 case.",hu:"Ha a tridiagonális mátrix diagonálisan domináns, a 3.32. tétel garantálja, hogy az algoritmus pivotálás nélkül lefut és stabil — ez a tipikus eset az alkalmazásokban. Ugyanez a sávos ötlet kiterjed sávmátrixra (aᵢⱼ = 0, ha |i − j| > p), O(p²n) megoldót adva; a tridiagonális a p = 1 eset."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-5-1&mode=tridiagonal",label:{en:"Run the tridiagonal example",hu:"Tridiagonális példa futtatása"}},{kind:"glossary",deck:"s35"},{kind:"flashcards",deck:"s35"}]},{id:"s36",number:"3.6",title:{en:"Simultaneous Systems",hu:"Szimultán egyenletrendszerek"},summary:{en:"Same A, many right-hand sides: solve (A | B) at once.",hu:"Azonos A, több jobb oldal: az (A | B) egyszerre megoldható."},blocks:[{kind:"p",text:{en:"When many systems share the same coefficient matrix A but differ in their right-hand sides, Ax⁽ⁱ⁾ = b⁽ⁱ⁾ (i = 1,…,m), stack the right-hand sides as columns of B and the solutions as columns of X. The m systems are then the single matrix equation:",hu:"Ha sok rendszer ugyanazt az A együtthatómátrixot használja, de a jobb oldalakban különböznek, Ax⁽ⁱ⁾ = b⁽ⁱ⁾ (i = 1,…,m), rakd a jobb oldalakat B oszlopaiba, a megoldásokat X oszlopaiba. Az m rendszer ekkor egyetlen mátrixegyenlet:"}},{kind:"math",tex:"\\mathbf{A}\\mathbf{X} = \\mathbf{B}, \\qquad \\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)}),\\;\\; \\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})"},{kind:"p",text:{en:"Because pivoting decisions depend only on A, all m systems are solved together by eliminating on the n×(n+m) augmented matrix (A | B). Gauss–Jordan turns it into (I | X), and the solutions appear in the last m columns.",hu:"Mivel a főelemkiválasztás csak A-tól függ, mind az m rendszer együtt megoldható az n×(n+m) méretű (A | B) bővített mátrixon eliminálva. A Gauss–Jordan ezt (I | X) alakra hozza, és a megoldások az utolsó m oszlopban jelennek meg."}},{kind:"p",text:{en:"Efficiency: solving all m together costs n³/3 + mn² − n/3 (Gaussian) or n³/2 + mn² − n/2 (Gauss–Jordan) mult/div. The expensive O(n³) elimination is shared, so each extra right-hand side adds only O(n²) — far cheaper than solving m systems from scratch.",hu:"Hatékonyság: mind az m együttes megoldása n³/3 + mn² − n/3 (Gauss) vagy n³/2 + mn² − n/2 (Gauss–Jordan) szorzás/osztás. A drága O(n³) elimináció megosztott, így minden további jobb oldal csak O(n²)-et ad — sokkal olcsóbb, mint m rendszert külön megoldani."}},{kind:"p",text:{en:"Matrix inversion is the special case B = I — see the next lesson.",hu:"A mátrixinvertálás a B = I speciális eset — lásd a következő leckét."}},{kind:"glossary",deck:"s36"},{kind:"flashcards",deck:"s36"}]},{id:"s37",number:"3.7",title:{en:"Matrix Inversion & Determinants",hu:"Mátrixinvertálás és determináns"},summary:{en:"Invert via (A | I) → (I | A⁻¹); determinant from the signed product of pivots.",hu:"Invertálás (A | I) → (I | A⁻¹) alakkal; determináns a főelemek előjeles szorzatából."},blocks:[{kind:"p",text:{en:"The inverse A⁻¹ solves the simultaneous system AX = I (and then XA = I holds too, so X is genuinely the inverse). Solving (A | I) by Gauss–Jordan yields A⁻¹ in the right block. Cost: 3n³/2 + O(n²) naively, reducible to n³ by exploiting the zeros and ones of I.",hu:"Az A⁻¹ inverz az AX = I szimultán rendszer megoldása (és ekkor XA = I is teljesül, tehát X valóban az inverz). Az (A | I) Gauss–Jordan-megoldása a jobb blokkban adja A⁻¹-et. Költség: naivan 3n³/2 + O(n²), az I nulláit és egyeseit kihasználva n³-ra csökkenthető."}},{kind:"p",text:{en:"Example 3.38: inverting a 3×3 matrix by driving (A | I) to (I | A⁻¹).",hu:"3.38. példa: egy 3×3 mátrix invertálása az (A | I) → (I | A⁻¹) átalakítással."}},{kind:"math",tex:"\\left(\\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\\\ -1 & 1 & 0 & 0 & 1 & 0 \\\\ -2 & 0 & -1 & 0 & 0 & 1 \\end{array}\\right) \\sim\\cdots\\sim \\left(\\begin{array}{ccc|ccc} 1 & 0 & 0 & -\\tfrac13 & 0 & -\\tfrac23 \\\\ 0 & 1 & 0 & -\\tfrac13 & 1 & -\\tfrac23 \\\\ 0 & 0 & 1 & \\tfrac23 & 0 & \\tfrac13 \\end{array}\\right),\\quad A^{-1}=\\tfrac13\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}"},{kind:"p",text:{en:"The determinant comes for free from the elimination: it equals the product of the pivots times (−1)ˢ, where s is the number of row swaps (Theorem 3.26).",hu:"A determináns ingyen jön az eliminációból: a főelemek szorzata (−1)ˢ-szel, ahol s a sorcserék száma (3.26. tétel)."}},{kind:"math",tex:"\\det(A) = (-1)^{s}\\, a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}"},{kind:"p",text:{en:"Example 3.39: the Example 3.22 matrix eliminates to pivots 1, 3, 1, 38 with no row swaps (s = 0), so det(A) = 1·3·1·38 = 114.",hu:"3.39. példa: a 3.22. mátrix eliminációja az 1, 3, 1, 38 főelemekhez vezet sorcsere nélkül (s = 0), így det(A) = 1·3·1·38 = 114."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-38&mode=inverse&method=gauss-jordan&pivot=none",label:{en:"Invert Example 3.38",hu:"3.38. példa invertálása"}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-39&mode=determinant&method=gauss&pivot=none",label:{en:"Determinant of Example 3.39",hu:"3.39. példa determinánsa"}},{kind:"glossary",deck:"s37"},{kind:"flashcards",deck:"s37"}]}];function J({tex:e,block:n=!1}){const i=y.useMemo(()=>je.renderToString(e,{throwOnError:!1,displayMode:n}),[e,n]);return n?t.jsx("div",{className:"tex-block",style:{overflowX:"auto",padding:"4px 0"},dangerouslySetInnerHTML:{__html:i}}):t.jsx("span",{dangerouslySetInnerHTML:{__html:i}})}const Ie={s31:[{term:{en:"Inverse · nonsingular · singular",hu:"Inverz · reguláris · szinguláris"},def:{en:"$\\mathbf{A}^{-1}$ satisfies $\\mathbf{A}\\mathbf{A}^{-1}=\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{I}$. A matrix with an inverse is **invertible/nonsingular**; without one it is **singular**.",hu:"$\\mathbf{A}^{-1}$-re $\\mathbf{A}\\mathbf{A}^{-1}=\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{I}$ teljesül. Az inverzzel rendelkező mátrix **invertálható/reguláris**; amelyiknek nincs, az **szinguláris**."}},{term:{en:"Determinant & cofactor expansion (Thm 3.1)",hu:"Determináns és kifejtési tétel (3.1. tétel)"},def:{en:"Key properties: $\\det(\\mathbf{A}\\mathbf{B})=\\det\\mathbf{A}\\det\\mathbf{B}$, $\\det(\\mathbf{A}^T)=\\det\\mathbf{A}$, row swap flips the sign, adding a multiple of a row leaves it unchanged. Laplace expansion: $\\det\\mathbf{A}=\\sum_j(-1)^{i+j}a_{ij}\\det\\mathbf{A}_{ij}$.",hu:"Fő tulajdonságok: $\\det(\\mathbf{A}\\mathbf{B})=\\det\\mathbf{A}\\det\\mathbf{B}$, $\\det(\\mathbf{A}^T)=\\det\\mathbf{A}$, sorcsere előjelet vált, egy sor többszörösének hozzáadása nem változtat. Kifejtés: $\\det\\mathbf{A}=\\sum_j(-1)^{i+j}a_{ij}\\det\\mathbf{A}_{ij}$."}},{term:{en:"Invertibility equivalences (Thm 3.2/3.3)",hu:"Invertálhatósági ekvivalenciák (3.2/3.3)"},def:{en:"These are equivalent: $\\det\\mathbf{A}\\ne0$; $\\mathbf{A}$ invertible; $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ has a unique solution for every $\\mathbf{b}$. And $\\mathbf{A}\\mathbf{x}=\\mathbf{0}$ has a nontrivial solution iff $\\mathbf{A}$ is singular.",hu:"Ekvivalensek: $\\det\\mathbf{A}\\ne0$; $\\mathbf{A}$ invertálható; $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ minden $\\mathbf{b}$-re egyértelműen megoldható. És $\\mathbf{A}\\mathbf{x}=\\mathbf{0}$-nak pontosan akkor van nemtriviális megoldása, ha $\\mathbf{A}$ szinguláris."}},{term:{en:"Triangular matrix (Thm 3.5/3.6)",hu:"Háromszögmátrix (3.5/3.6)"},def:{en:"Upper (lower) triangular: zeros below (above) the diagonal. Its determinant is the product of the diagonal, $\\det\\mathbf{A}=a_{11}\\cdots a_{nn}$; products and inverses of triangular matrices stay triangular.",hu:"Felső (alsó) háromszög: a főátló alatt (felett) nullák. Determinánsa a főátló szorzata, $\\det\\mathbf{A}=a_{11}\\cdots a_{nn}$; háromszögmátrixok szorzata és inverze is háromszög marad."}},{term:{en:"Permutation matrix (Thm 3.7)",hu:"Permutációs mátrix (3.7. tétel)"},def:{en:"An identity matrix with rows (columns) reordered — exactly one 1 per row and column. Left-multiplying $\\mathbf{P}\\mathbf{A}$ permutes the rows of $\\mathbf{A}$; right-multiplying permutes columns.",hu:"Az egységmátrix sorainak (oszlopainak) átrendezése — soronként és oszloponként pontosan egy 1-es. Balszorzás $\\mathbf{P}\\mathbf{A}$ a sorokat, jobbszorzás az oszlopokat permutálja."}},{term:{en:"Diagonally dominant (Thm 3.8)",hu:"Diagonálisan domináns (3.8. tétel)"},def:{en:"$|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ for every row (column dominance is the same for $\\mathbf{A}^T$). A diagonally dominant matrix is invertible, and Gaussian elimination needs no pivoting.",hu:"$|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ minden sorra (az oszlopdominancia ugyanez $\\mathbf{A}^T$-re). A diagonálisan domináns mátrix invertálható, és a Gauss-elimináció főelemkiválasztás nélkül elvégezhető."}},{term:{en:"Positive definite (Thm 3.9/3.10)",hu:"Pozitív definit (3.9/3.10)"},def:{en:"Symmetric $\\mathbf{A}$ with $\\mathbf{x}^T\\mathbf{A}\\mathbf{x}>0$ for all $\\mathbf{x}\\ne\\mathbf{0}$. Then $\\mathbf{A}$ is invertible with $a_{ii}>0$; equivalently every leading principal minor is positive (Sylvester’s criterion).",hu:"Szimmetrikus $\\mathbf{A}$, amelyre $\\mathbf{x}^T\\mathbf{A}\\mathbf{x}>0$ minden $\\mathbf{x}\\ne\\mathbf{0}$-ra. Ekkor $\\mathbf{A}$ invertálható, $a_{ii}>0$; ezzel egyenértékűen minden bal felső főminor pozitív (Sylvester-kritérium)."}},{term:{en:"Orthogonal matrix (Thm 3.11)",hu:"Ortogonális mátrix (3.11. tétel)"},def:{en:"$\\mathbf{A}\\mathbf{A}^T=\\mathbf{A}^T\\mathbf{A}=\\mathbf{I}$, i.e. $\\mathbf{A}^{-1}=\\mathbf{A}^T$. Orthogonal matrices preserve the Euclidean norm, and their product is orthogonal.",hu:"$\\mathbf{A}\\mathbf{A}^T=\\mathbf{A}^T\\mathbf{A}=\\mathbf{I}$, azaz $\\mathbf{A}^{-1}=\\mathbf{A}^T$. Az ortogonális mátrixok megőrzik az euklideszi normát, szorzatuk ortogonális."}},{term:{en:"Eigenvalue & eigenvector (Thm 3.12)",hu:"Sajátérték és sajátvektor (3.12. tétel)"},def:{en:"$\\lambda$ is an eigenvalue if $\\mathbf{A}\\mathbf{x}=\\lambda\\mathbf{x}$ for some $\\mathbf{x}\\ne\\mathbf{0}$ (the eigenvector). The $n$ eigenvalues are the roots of the characteristic equation $\\det(\\mathbf{A}-\\lambda\\mathbf{I})=0$.",hu:"$\\lambda$ sajátérték, ha $\\mathbf{A}\\mathbf{x}=\\lambda\\mathbf{x}$ valamely $\\mathbf{x}\\ne\\mathbf{0}$-ra (a sajátvektor). Az $n$ sajátérték a $\\det(\\mathbf{A}-\\lambda\\mathbf{I})=0$ karakterisztikus egyenlet gyökei."}},{term:{en:"Eigenvalue properties (Thm 3.13/3.14)",hu:"Sajátérték-tulajdonságok (3.13/3.14)"},def:{en:"$\\det\\mathbf{A}=\\lambda_1\\cdots\\lambda_n$; $\\mathbf{A}$ is invertible iff all $\\lambda_i\\ne0$; $\\mathbf{A}^{-1}$ has eigenvalues $1/\\lambda_i$ and $\\mathbf{A}^k$ has $\\lambda_i^k$. A triangular matrix’s eigenvalues are its diagonal entries.",hu:"$\\det\\mathbf{A}=\\lambda_1\\cdots\\lambda_n$; $\\mathbf{A}$ pontosan akkor invertálható, ha minden $\\lambda_i\\ne0$; $\\mathbf{A}^{-1}$ sajátértékei $1/\\lambda_i$, $\\mathbf{A}^k$-é $\\lambda_i^k$. A háromszögmátrix sajátértékei a főátló elemei."}},{term:{en:"Similar matrices (Thm 3.15)",hu:"Hasonló mátrixok (3.15. tétel)"},def:{en:"$\\mathbf{A}=\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$ for some invertible $\\mathbf{P}$. Similar matrices have identical eigenvalues (and the same characteristic polynomial).",hu:"$\\mathbf{A}=\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$ valamely invertálható $\\mathbf{P}$-re. A hasonló mátrixok sajátértékei azonosak (és a karakterisztikus polinomjuk is)."}},{term:{en:"Spectral radius (Thm 3.16–3.18)",hu:"Spektrálsugár (3.16–3.18)"},def:{en:"$\\rho(\\mathbf{A})=\\max\\{|\\lambda|\\}$. For any matrix norm $\\rho(\\mathbf{A})\\le\\|\\mathbf{A}\\|$, and a norm exists with $\\|\\mathbf{A}\\|\\le\\rho(\\mathbf{A})+\\varepsilon$. Also $\\|\\mathbf{A}\\|_2=\\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$, equal to $\\rho(\\mathbf{A})$ when symmetric.",hu:"$\\rho(\\mathbf{A})=\\max\\{|\\lambda|\\}$. Bármely mátrixnormára $\\rho(\\mathbf{A})\\le\\|\\mathbf{A}\\|$, és van olyan norma, hogy $\\|\\mathbf{A}\\|\\le\\rho(\\mathbf{A})+\\varepsilon$. Továbbá $\\|\\mathbf{A}\\|_2=\\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$, ami szimmetrikus esetben $\\rho(\\mathbf{A})$."}},{term:{en:"Vandermonde determinant (Thm 3.19)",hu:"Vandermonde-determináns (3.19. tétel)"},def:{en:"The determinant of the matrix with rows $(1,a_i,a_i^2,\\dots,a_i^{n-1})$ equals $\\prod_{i>j}(a_i-a_j)$; it is nonzero iff the $a_i$ are pairwise distinct. Central to polynomial interpolation.",hu:"Az $(1,a_i,a_i^2,\\dots,a_i^{n-1})$ sorú mátrix determinánsa $\\prod_{i>j}(a_i-a_j)$; pontosan akkor nem nulla, ha az $a_i$-k páronként különbözők. A polinominterpoláció kulcsa."}}],s32:[{term:{en:"Triangular system",hu:"Háromszög egyenletrendszer"},def:{en:"$\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ where $\\mathbf{A}$ is upper (or lower) triangular. Each equation introduces at most one new unknown, so it solves directly without elimination.",hu:"$\\mathbf{A}\\mathbf{x}=\\mathbf{b}$, ahol $\\mathbf{A}$ felső (vagy alsó) háromszög. Minden egyenlet legfeljebb egy új ismeretlent hoz be, így elimináció nélkül közvetlenül megoldható."}},{term:{en:"Backward substitution (Alg. 3.21)",hu:"Visszahelyettesítés (3.21. algoritmus)"},def:{en:"Solve an upper-triangular system bottom-up: $x_n=b_n/a_{nn}$, then $x_i=\\big(b_i-\\sum_{j>i}a_{ij}x_j\\big)/a_{ii}$ for $i=n-1,\\dots,1$.",hu:"Felső háromszög rendszer megoldása alulról felfelé: $x_n=b_n/a_{nn}$, majd $x_i=\\big(b_i-\\sum_{j>i}a_{ij}x_j\\big)/a_{ii}$ $i=n-1,\\dots,1$-re."}},{term:{en:"Forward substitution",hu:"Előrehelyettesítés"},def:{en:"The mirror method for a lower-triangular system: solve top-down, $x_1=b_1/a_{11}$, then $x_i=\\big(b_i-\\sum_{j<i}a_{ij}x_j\\big)/a_{ii}$.",hu:"Az alsó háromszög rendszer tükör-módszere: fentről lefelé, $x_1=b_1/a_{11}$, majd $x_i=\\big(b_i-\\sum_{j<i}a_{ij}x_j\\big)/a_{ii}$."}},{term:{en:"Solvability condition",hu:"Megoldhatósági feltétel"},def:{en:"Substitution works iff every diagonal entry $a_{ii}\\ne0$. Since $\\det(\\mathbf{A})=a_{11}\\cdots a_{nn}$, this is exactly $\\det(\\mathbf{A})\\ne0$ — the system has a unique solution.",hu:"A helyettesítés pontosan akkor működik, ha minden $a_{ii}\\ne0$. Mivel $\\det(\\mathbf{A})=a_{11}\\cdots a_{nn}$, ez éppen $\\det(\\mathbf{A})\\ne0$ — a rendszernek egyetlen megoldása van."}},{term:{en:"Operation count $\\sim n^2/2$",hu:"Műveletszám $\\sim n^2/2$"},def:{en:"Backward substitution uses $n(n+1)/2=n^2/2+\\mathcal{O}(n)$ multiplications/divisions and $(n-1)n/2$ additions/subtractions — far cheaper than the $\\mathcal{O}(n^3)$ of elimination.",hu:"A visszahelyettesítés $n(n+1)/2=n^2/2+\\mathcal{O}(n)$ szorzást/osztást és $(n-1)n/2$ összeadást/kivonást igényel — sokkal olcsóbb az elimináció $\\mathcal{O}(n^3)$-ánál."}},{term:{en:"Big-O notation $\\mathcal{O}(n^k)$",hu:"Nagy-O jelölés $\\mathcal{O}(n^k)$"},def:{en:"Shorthand for a quantity bounded by a degree-$k$ polynomial; it hides lower-order terms so the leading power, which governs the cost for large $n$, stands out.",hu:"Egy legfeljebb $k$-adfokú polinommal korlátozott mennyiség rövidítése; elrejti az alacsonyabb rendű tagokat, így a nagy $n$-re meghatározó vezető hatvány emelkedik ki."}}],s33:[{term:{en:"Augmented matrix",hu:"Bővített mátrix"},def:{en:"The coefficient matrix with the right-hand side appended as an extra column, $(\\mathbf{A}\\,|\\,\\mathbf{b})$. Elimination is carried out as row operations on this $n\\times(n+1)$ array.",hu:"Az együtthatómátrix, amelyhez a jobb oldalt extra oszlopként hozzáfűzzük, $(\\mathbf{A}\\,|\\,\\mathbf{b})$. Az eliminációt ezen az $n\\times(n+1)$ tömbön végzett sorműveletekként hajtjuk végre."}},{term:{en:"Forward elimination & multiplier",hu:"Előre elimináció és szorzótényező"},def:{en:"Clear entries below pivot $a_{kk}$ using $a_{ij}^{(k)}=a_{ij}^{(k-1)}-l_{ik}a_{kj}^{(k-1)}$ with multiplier $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$, for $k=1,\\dots,n-1$.",hu:"A főelem ($a_{kk}$) alatti elemeket nullázzuk az $a_{ij}^{(k)}=a_{ij}^{(k-1)}-l_{ik}a_{kj}^{(k-1)}$ képlettel, $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$ szorzótényezővel, $k=1,\\dots,n-1$-re."}},{term:{en:"Pivot element",hu:"Főelem (pivot)"},def:{en:"The diagonal entry $a_{kk}^{(k-1)}$ used as the divisor in step $k$. Gaussian elimination runs iff every pivot is nonzero; a zero pivot halts it (even when the system is solvable — Example 3.24).",hu:"Az $a_{kk}^{(k-1)}$ főátlóbeli elem, amellyel a $k$. lépésben osztunk. A Gauss-elimináció pontosan akkor megy végig, ha minden főelem nemnulla; a nulla főelem megállítja (akkor is, ha a rendszer megoldható — 3.24. példa)."}},{term:{en:"Why pivot: rounding (Example 3.25)",hu:"Miért főelemkiválasztás: kerekítés (3.25. példa)"},def:{en:"Dividing by a tiny pivot magnifies rounding: $0.0002x_1-30.5x_2=-60.99$ in 4-digit arithmetic gives $x_1$ with 300% error, but swapping rows first (so the divisor is 5.06) gives the exact answer.",hu:"A pici főelemmel való osztás felnagyítja a kerekítést: $0.0002x_1-30.5x_2=-60.99$ 4-jegyű aritmetikában 300%-os hibájú $x_1$-et ad, de a sorok előzetes cseréjével (így az osztó 5.06) a pontos eredményt kapjuk."}},{term:{en:"Partial pivoting (Thm 3.26)",hu:"Részleges főelemkiválasztás (3.26. tétel)"},def:{en:"Before step $k$, swap in the row with the largest $|a_{ik}|$ in the column ($i\\ge k$). It is solvable by partial pivoting iff $\\det\\mathbf{A}\\ne0$ — and it both avoids zero pivots and curbs rounding.",hu:"A $k$. lépés előtt cseréljük be azt a sort, amelyben az oszlopban a legnagyobb $|a_{ik}|$ van ($i\\ge k$). Pontosan akkor oldható meg részleges főelemkiválasztással, ha $\\det\\mathbf{A}\\ne0$ — és kerüli a nulla főelemet és csökkenti a kerekítést."}},{term:{en:"Complete pivoting",hu:"Teljes főelemkiválasztás"},def:{en:"Search the whole remaining submatrix for the largest $|a_{ij}|$ and swap both rows and columns (tracking the variable order, since column swaps reorder unknowns). Most robust, but more comparisons.",hu:"A teljes maradék részmátrixban keressük a legnagyobb $|a_{ij}|$-t, és sort és oszlopot is cserélünk (követve a változók sorrendjét, mert az oszlopcsere átrendezi az ismeretleneket). A legrobusztusabb, de több összehasonlítás."}},{term:{en:"Scaled (implicit) pivoting (Alg. 3.31)",hu:"Skálázott (implicit) főelemkiválasztás (3.31)"},def:{en:"Pick the pivot by the ratio $|a_{ik}|/s_i$, where $s_i=\\max_j|a_{ij}|$ is the row scale, without actually scaling the rows. Handles matrices whose entries span very different magnitudes.",hu:"A főelemet az $|a_{ik}|/s_i$ arány alapján választjuk, ahol $s_i=\\max_j|a_{ij}|$ a sor skálája, anélkül hogy a sorokat ténylegesen skáláznánk. Kezeli a nagyon eltérő nagyságrendű elemeket tartalmazó mátrixokat."}},{term:{en:"Cost $\\sim n^3/3$",hu:"Költség $\\sim n^3/3$"},def:{en:"The elimination uses $n^3/3+\\mathcal{O}(n^2)$ multiplications/divisions (and similarly additions); back-substitution adds only $\\mathcal{O}(n^2)$. So the time complexity of Gaussian elimination is $n^3/3$.",hu:"Az elimináció $n^3/3+\\mathcal{O}(n^2)$ szorzást/osztást (és hasonlóan összeadást) igényel; a visszahelyettesítés csak $\\mathcal{O}(n^2)$-et ad hozzá. Tehát a Gauss-elimináció időigénye $n^3/3$."}},{term:{en:"PA = (triangular) factorization (Thm 3.28)",hu:"PA permutáció (3.28. tétel)"},def:{en:"If $\\det\\mathbf{A}\\ne0$ there is a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x}=\\mathbf{P}\\mathbf{b}$ can be solved by plain Gaussian elimination — pre-applying all the partial-pivoting row swaps.",hu:"Ha $\\det\\mathbf{A}\\ne0$, van olyan $\\mathbf{P}$ permutációs mátrix, hogy a $\\mathbf{P}\\mathbf{A}\\mathbf{x}=\\mathbf{P}\\mathbf{b}$ sima Gauss-eliminációval megoldható — az összes részleges-pivot sorcserét előre alkalmazva."}},{term:{en:"When pivoting is unnecessary (Thm 3.32/3.33)",hu:"Mikor felesleges a pivotálás (3.32/3.33)"},def:{en:"If $\\mathbf{A}$ is diagonally dominant, or symmetric positive definite, Gaussian elimination runs without pivoting and is stable (and for SPD all pivots are positive).",hu:"Ha $\\mathbf{A}$ diagonálisan domináns, vagy szimmetrikus pozitív definit, a Gauss-elimináció pivotálás nélkül lefut és stabil (SPD esetén minden főelem pozitív)."}}],s34:[{term:{en:"Gauss–Jordan elimination",hu:"Gauss–Jordan-elimináció"},def:{en:"A variant of Gaussian elimination that reduces the coefficient block of $(\\mathbf{A}\\,|\\,\\mathbf{b})$ all the way to the identity, giving $(\\mathbf{I}\\,|\\,\\mathbf{b}^{(n-1)})$, so the solution $\\mathbf{x}=\\mathbf{b}^{(n-1)}$ is read directly from the last column.",hu:"A Gauss-elimináció változata, amely a $(\\mathbf{A}\\,|\\,\\mathbf{b})$ együtthatóblokkját egészen az egységmátrixig redukálja, $(\\mathbf{I}\\,|\\,\\mathbf{b}^{(n-1)})$-t adva, így a megoldás $\\mathbf{x}=\\mathbf{b}^{(n-1)}$ közvetlenül leolvasható az utolsó oszlopból."}},{term:{en:"Eliminate above and below",hu:"Elimináció felül és alul"},def:{en:"Unlike plain Gaussian elimination (which clears only below each pivot), Gauss–Jordan clears the entries in every other row — both above and below the pivot — so no back-substitution is needed.",hu:"A sima Gauss-eliminációval ellentétben (amely csak a főelem alatt nulláz) a Gauss–Jordan minden más sorban — a főelem felett és alatt is — nulláz, így nincs szükség visszahelyettesítésre."}},{term:{en:"Reduced form $(\\mathbf{I}\\,|\\,\\mathbf{x})$",hu:"Redukált alak $(\\mathbf{I}\\,|\\,\\mathbf{x})$"},def:{en:"The final tableau: each pivot row is normalized so the coefficient block is the identity. The right-hand column is then exactly the solution vector — no further work.",hu:"A végső tábla: minden főelem-sort normálunk, így az együtthatóblokk az egységmátrix. A jobb oldali oszlop ekkor pontosan a megoldásvektor — további munka nélkül."}},{term:{en:"Cost $\\sim n^3/2$ vs $n^3/3$",hu:"Költség $\\sim n^3/2$ vs $n^3/3$"},def:{en:"Gauss–Jordan needs $n^3/2+\\mathcal{O}(n^2)$ operations — about 50% more than Gaussian elimination's $n^3/3$. So for solving a single system Gaussian elimination is preferred; Gauss–Jordan shines for matrix inversion and simultaneous right-hand sides.",hu:"A Gauss–Jordan $n^3/2+\\mathcal{O}(n^2)$ műveletet igényel — kb. 50%-kal többet a Gauss-elimináció $n^3/3$-ánál. Egyetlen rendszer megoldására a Gauss-elimináció jobb; a Gauss–Jordan a mátrixinvertálásnál és több jobb oldalnál előnyös."}},{term:{en:"Pivoting with Gauss–Jordan (Ex 3.36)",hu:"Pivotálás Gauss–Jordannál (3.36. példa)"},def:{en:"Partial, complete or scaled pivoting combines with Gauss–Jordan exactly as with Gaussian elimination — choose the pivot, swap, then clear the whole column above and below.",hu:"A részleges, teljes vagy skálázott pivotálás ugyanúgy kombinálható a Gauss–Jordannal, mint a Gauss-eliminációval — válaszd a főelemet, cserélj, majd nullázd az egész oszlopot felül és alul."}}],s35:[{term:{en:"Tridiagonal matrix",hu:"Tridiagonális mátrix"},def:{en:"A square matrix with $a_{ij}=0$ whenever $|i-j|>1$ — nonzeros only on the main diagonal and the two adjacent diagonals. Arises constantly in splines, BVPs and PDE discretizations.",hu:"Olyan négyzetes mátrix, ahol $a_{ij}=0$, ha $|i-j|>1$ — nemnulla csak a főátlón és a két szomszédos átlón. Folyamatosan előjön spline-oknál, peremértékfeladatoknál és PDE-diszkretizációknál."}},{term:{en:"Three-vector storage ($3n-2$)",hu:"Háromvektoros tárolás ($3n-2$)"},def:{en:"Store only the sub-diagonal $(a_i)$, diagonal $(d_i)$ and super-diagonal $(c_i)$ — just $3n-2$ numbers instead of $n^2$. The structure is preserved throughout the solve.",hu:"Csak az aldiagonálist $(a_i)$, a főátlót $(d_i)$ és a felső átlót $(c_i)$ tároljuk — $3n-2$ szám az $n^2$ helyett. A szerkezet a megoldás során végig megmarad."}},{term:{en:"Thomas algorithm (Alg. 3.37)",hu:"Thomas-algoritmus (3.37. algoritmus)"},def:{en:"Specialized Gaussian elimination for tridiagonal systems. Forward sweep: $t=a_{i-1}/d_{i-1}$, $d_i\\mathrel{-}=t\\,c_{i-1}$, $b_i\\mathrel{-}=t\\,b_{i-1}$. Then back-substitute $x_n=b_n/d_n$, $x_i=(b_i-c_ix_{i+1})/d_i$. The $c_i$ never change; the $a_i$ become 0.",hu:"Tridiagonális rendszerekre szabott Gauss-elimináció. Előre menet: $t=a_{i-1}/d_{i-1}$, $d_i\\mathrel{-}=t\\,c_{i-1}$, $b_i\\mathrel{-}=t\\,b_{i-1}$. Majd visszahelyettesítés $x_n=b_n/d_n$, $x_i=(b_i-c_ix_{i+1})/d_i$. A $c_i$-k nem változnak; az $a_i$-k 0-vá válnak."}},{term:{en:"Cost $5n-4$ (linear)",hu:"Költség $5n-4$ (lineáris)"},def:{en:"The Thomas algorithm needs only $5n-4$ multiplications/divisions — $\\mathcal{O}(n)$, versus $n^3/3$ for dense Gaussian elimination. For tridiagonal systems always use the specialized method.",hu:"A Thomas-algoritmus csak $5n-4$ szorzást/osztást igényel — $\\mathcal{O}(n)$, szemben a sűrű Gauss-elimináció $n^3/3$-ával. Tridiagonális rendszerre mindig a szabott módszert használd."}},{term:{en:"No pivoting when diagonally dominant",hu:"Nincs pivot, ha diagonálisan domináns"},def:{en:"By Theorem 3.32, if the tridiagonal matrix is diagonally dominant the algorithm runs without pivoting and is stable — the common case in practice.",hu:"A 3.32. tétel szerint, ha a tridiagonális mátrix diagonálisan domináns, az algoritmus pivotálás nélkül lefut és stabil — ez a gyakorlatban a tipikus eset."}},{term:{en:"Band matrix",hu:"Sávmátrix"},def:{en:"A generalization with $a_{ij}=0$ for $|i-j|>p$ (bandwidth $p$); tridiagonal is $p=1$. The same banded elimination idea gives an $\\mathcal{O}(p^2 n)$ solver.",hu:"Általánosítás $a_{ij}=0$-val, ha $|i-j|>p$ (sávszélesség $p$); a tridiagonális a $p=1$ eset. Ugyanaz a sávos elimináció $\\mathcal{O}(p^2 n)$ megoldót ad."}}],s36:[{term:{en:"Simultaneous linear systems",hu:"Szimultán egyenletrendszerek"},def:{en:"Several systems $\\mathbf{A}\\mathbf{x}^{(i)}=\\mathbf{b}^{(i)}$, $i=1,\\dots,m$, sharing the same coefficient matrix $\\mathbf{A}$ but with different right-hand sides.",hu:"Több $\\mathbf{A}\\mathbf{x}^{(i)}=\\mathbf{b}^{(i)}$, $i=1,\\dots,m$ rendszer, azonos $\\mathbf{A}$ együtthatómátrixszal, de különböző jobb oldalakkal."}},{term:{en:"Matrix equation $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$",hu:"Mátrixegyenlet $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$"},def:{en:"Stack the right-hand sides as columns of $\\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})$; the solutions are the columns of $\\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)})$. The $m$ systems are equivalent to the single matrix equation $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$.",hu:"Rakd a jobb oldalakat a $\\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})$ oszlopaiba; a megoldások az $\\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)})$ oszlopai. Az $m$ rendszer ekvivalens az egyetlen $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$ mátrixegyenlettel."}},{term:{en:"Augmented $(\\mathbf{A}\\,|\\,\\mathbf{B})$, size $n\\times(n+m)$",hu:"Bővített $(\\mathbf{A}\\,|\\,\\mathbf{B})$, méret $n\\times(n+m)$"},def:{en:"Since pivoting depends only on $\\mathbf{A}$, eliminate on the $n\\times(n+m)$ block $(\\mathbf{A}\\,|\\,\\mathbf{B})$ at once. Gauss–Jordan turns it into $(\\mathbf{I}\\,|\\,\\mathbf{X})$, and the solutions appear in the last $m$ columns.",hu:"Mivel a pivotálás csak $\\mathbf{A}$-tól függ, az $n\\times(n+m)$ méretű $(\\mathbf{A}\\,|\\,\\mathbf{B})$ blokkon egyszerre eliminálunk. A Gauss–Jordan ezt $(\\mathbf{I}\\,|\\,\\mathbf{X})$-re hozza, és a megoldások az utolsó $m$ oszlopban jelennek meg."}},{term:{en:"Shared factorization cost",hu:"Megosztott faktorizációs költség"},def:{en:"Solving all $m$ systems together costs $n^3/3+mn^2$ (Gaussian) or $n^3/2+mn^2$ (Gauss–Jordan) mult/div: the expensive $\\mathcal{O}(n^3)$ elimination is done once and each extra right-hand side adds only $\\mathcal{O}(n^2)$.",hu:"Mind az $m$ rendszer együttes megoldása $n^3/3+mn^2$ (Gauss) vagy $n^3/2+mn^2$ (Gauss–Jordan) szorzás/osztás: a drága $\\mathcal{O}(n^3)$ eliminációt egyszer végezzük, és minden további jobb oldal csak $\\mathcal{O}(n^2)$-et ad."}},{term:{en:"Inversion as $\\mathbf{B}=\\mathbf{I}$",hu:"Invertálás $\\mathbf{B}=\\mathbf{I}$ esetén"},def:{en:"Matrix inversion is the special simultaneous system $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$: solving $(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$ gives the inverse (next section).",hu:"A mátrixinvertálás az $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ speciális szimultán rendszer: az $(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$ megoldása adja az inverzet (következő szakasz)."}}],s37:[{term:{en:"Inverse via $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$",hu:"Inverz $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ révén"},def:{en:"$\\mathbf{A}^{-1}$ is the solution of the simultaneous system $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$. If such $\\mathbf{X}$ exists then $\\mathbf{X}\\mathbf{A}=\\mathbf{I}$ also holds, so $\\mathbf{X}=\\mathbf{A}^{-1}$.",hu:"$\\mathbf{A}^{-1}$ az $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ szimultán rendszer megoldása. Ha létezik ilyen $\\mathbf{X}$, akkor $\\mathbf{X}\\mathbf{A}=\\mathbf{I}$ is teljesül, tehát $\\mathbf{X}=\\mathbf{A}^{-1}$."}},{term:{en:"$(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$",hu:"$(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$"},def:{en:"Run Gauss–Jordan on the augmented $(\\mathbf{A}\\,|\\,\\mathbf{I})$; when the left block becomes the identity, the right block is $\\mathbf{A}^{-1}$. Pivoting can be combined in to control rounding.",hu:"Futtasd a Gauss–Jordant a bővített $(\\mathbf{A}\\,|\\,\\mathbf{I})$-n; amikor a bal blokk egységmátrix lesz, a jobb blokk $\\mathbf{A}^{-1}$. A pivotálás beépíthető a kerekítés kezelésére."}},{term:{en:"Inversion cost ($3n^3/2$, or $n^3$ optimized)",hu:"Invertálás költsége ($3n^3/2$, vagy $n^3$ optimalizálva)"},def:{en:"Naive Gauss–Jordan on $(\\mathbf{A}\\,|\\,\\mathbf{I})$ costs $\\tfrac32 n^3+\\mathcal{O}(n^2)$ mult/div. Exploiting the zeros and ones of $\\mathbf{I}$ (skipping multiplications by 0) reduces it to $n^3$.",hu:"A naiv Gauss–Jordan az $(\\mathbf{A}\\,|\\,\\mathbf{I})$-n $\\tfrac32 n^3+\\mathcal{O}(n^2)$ szorzás/osztás. Az $\\mathbf{I}$ nulláit és egyeseit kihasználva (a 0-val szorzást kihagyva) $n^3$-ra csökken."}},{term:{en:"Determinant from pivots",hu:"Determináns a főelemekből"},def:{en:"After Gaussian elimination, $\\det(\\mathbf{A})=(-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$, the product of the pivots times $(-1)^s$ where $s$ is the number of row swaps. Essentially free once elimination is done.",hu:"A Gauss-elimináció után $\\det(\\mathbf{A})=(-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$, a főelemek szorzata $(-1)^s$-szel, ahol $s$ a sorcserék száma. Az elimináció után gyakorlatilag ingyen van."}},{term:{en:"Solvability ⇔ $\\det\\ne0$",hu:"Megoldhatóság ⇔ $\\det\\ne0$"},def:{en:"By Theorem 3.26, elimination with pivoting completes iff $\\det(\\mathbf{A})\\ne0$ — exactly when $\\mathbf{A}$ is invertible. A zero pivot product signals a singular matrix.",hu:"A 3.26. tétel szerint a pivotálásos elimináció pontosan akkor megy végig, ha $\\det(\\mathbf{A})\\ne0$ — éppen amikor $\\mathbf{A}$ invertálható. A nulla főelem-szorzat szinguláris mátrixot jelez."}}]},Ge={s31:[{q:{en:"What notation represents the set of all real $n \\times n$ dimensional matrices?",hu:"Milyen jelölés képviseli az összes valós $n \\times n$ dimenziós mátrix halmazát?"},a:{en:"$\\mathbb{R}^{n \\times n}$",hu:"$\\mathbb{R}^{n \\times n}$"}},{q:{en:"What notation represents the set of all $n \\times n$ matrices with complex entries?",hu:"Milyen jelölés képviseli az összes komplex elemű $n \\times n$ mátrix halmazát?"},a:{en:"$\\mathbb{C}^{n \\times n}$",hu:"$\\mathbb{C}^{n \\times n}$"}},{q:{en:"In linear algebra notation, how is the $n \\times n$ dimensional identity matrix denoted?",hu:"A lineáris algebra jelölésében hogyan jelöljük az $n \\times n$ dimenziós egységmátrixot?"},a:{en:"$\\mathbf{I}$",hu:"$\\mathbf{I}$"}},{q:{en:"What is the condition for a square matrix $\\mathbf{A}$ to be called 'invertible' or 'nonsingular'?",hu:"Mi a feltétele annak, hogy egy $\\mathbf{A}$ négyzetes mátrixot „invertálhatónak” vagy „regulárisnak” nevezzünk?"},a:{en:"Its inverse $\\mathbf{A}^{-1}$ exists such that $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$.",hu:"Létezik $\\mathbf{A}^{-1}$ inverze, amelyre $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$."}},{q:{en:"A square matrix is defined as _____ if it has no inverse.",hu:"Egy négyzetes mátrix _____, ha nincs inverze."},a:{en:"singular",hu:"szinguláris"}},{q:{en:"What is the value of $\\det(\\mathbf{A})$ if each element of a single row or column in $\\mathbf{A}$ is equal to 0?",hu:"Mennyi $\\det(\\mathbf{A})$ értéke, ha $\\mathbf{A}$ egy teljes sorának vagy oszlopának minden eleme 0?"},a:{en:"0",hu:"0"}},{q:{en:"What is the value of $\\det(\\mathbf{A})$ if two rows or two columns of $\\mathbf{A}$ are identical?",hu:"Mennyi $\\det(\\mathbf{A})$ értéke, ha $\\mathbf{A}$ két sora vagy két oszlopa azonos?"},a:{en:"0",hu:"0"}},{q:{en:"According to the properties of determinants, what does $\\det(\\mathbf{A}\\mathbf{B})$ equal?",hu:"A determinánsok tulajdonságai szerint mivel egyenlő $\\det(\\mathbf{A}\\mathbf{B})$?"},a:{en:"$\\det(\\mathbf{A})\\det(\\mathbf{B})$",hu:"$\\det(\\mathbf{A})\\det(\\mathbf{B})$"}},{q:{en:"How does the determinant of a matrix $\\mathbf{A}$ compare to the determinant of its transpose $\\mathbf{A}^T$?",hu:"Hogyan viszonyul egy $\\mathbf{A}$ mátrix determinánsa a transzponáltja $\\mathbf{A}^T$ determinánsához?"},a:{en:"They are equal: $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$.",hu:"Egyenlők: $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$."}},{q:{en:"If $\\mathbf{A}$ is an invertible matrix, what is the formula for $\\det(\\mathbf{A}^{-1})$?",hu:"Ha $\\mathbf{A}$ invertálható mátrix, mi a $\\det(\\mathbf{A}^{-1})$ képlete?"},a:{en:"$1/\\det(\\mathbf{A})$",hu:"$1/\\det(\\mathbf{A})$"}},{q:{en:"If matrix $\\mathbf{B}$ is obtained by multiplying one row of matrix $\\mathbf{A}$ by a constant $c$, how is $\\det(\\mathbf{B})$ related to $\\det(\\mathbf{A})$?",hu:"Ha a $\\mathbf{B}$ mátrixot úgy kapjuk, hogy $\\mathbf{A}$ egy sorát egy $c$ konstanssal szorozzuk, hogyan viszonyul $\\det(\\mathbf{B})$ a $\\det(\\mathbf{A})$-hoz?"},a:{en:"$\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$",hu:"$\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$"}},{q:{en:"What happens to the determinant of a matrix if two of its rows or columns are swapped?",hu:"Mi történik egy mátrix determinánsával, ha két sorát vagy oszlopát felcseréljük?"},a:{en:"The sign of the determinant changes: $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$.",hu:"A determináns előjele megváltozik: $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$."}},{q:{en:"How is the determinant affected if a constant multiple of one row is added to another row?",hu:"Hogyan változik a determináns, ha egy sor konstansszorosát egy másik sorhoz adjuk?"},a:{en:"The determinant remains unchanged: $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$.",hu:"A determináns változatlan marad: $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$."}},{q:{en:"Formula: Determinant expansion by the $i$-th row.",hu:"Képlet: Determináns kifejtése az $i$-edik sor szerint."},a:{en:"$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij})$",hu:"$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij})$"}},{q:{en:"In the context of determinant expansion, what does $\\mathbf{A}_{ij}$ represent?",hu:"A determináns kifejtésének kontextusában mit jelöl $\\mathbf{A}_{ij}$?"},a:{en:"The $(n-1) \\times (n-1)$ matrix obtained by omitting the $i$-th row and $j$-th column of $\\mathbf{A}$.",hu:"Azt az $(n-1) \\times (n-1)$ mátrixot, amelyet $\\mathbf{A}$ $i$-edik sorának és $j$-edik oszlopának elhagyásával kapunk."}},{q:{en:"Besides having a non-zero determinant, what is an equivalent condition for a matrix $\\mathbf{A}$ to have a unique solution for $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for any $\\mathbf{b}$?",hu:"A nem nulla determinánson kívül mi az ekvivalens feltétele annak, hogy egy $\\mathbf{A}$ mátrixra az $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ bármely $\\mathbf{b}$-re egyértelműen megoldható legyen?"},a:{en:"The matrix $\\mathbf{A}$ must be invertible.",hu:"Az $\\mathbf{A}$ mátrixnak invertálhatónak kell lennie."}},{q:{en:"Under what condition regarding the determinant does the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ have a nontrivial (nonzero) solution?",hu:"A determinánssal kapcsolatban milyen feltétel mellett van az $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ lineáris rendszernek nemtriviális (nem nulla) megoldása?"},a:{en:"$\\det(\\mathbf{A}) = 0$",hu:"$\\det(\\mathbf{A}) = 0$"}},{q:{en:"If matrices $\\mathbf{A}$ and $\\mathbf{B}$ are both invertible, what is the formula for $(\\mathbf{A}\\mathbf{B})^{-1}$?",hu:"Ha az $\\mathbf{A}$ és $\\mathbf{B}$ mátrixok is invertálhatók, mi a $(\\mathbf{A}\\mathbf{B})^{-1}$ képlete?"},a:{en:"$\\mathbf{B}^{-1}\\mathbf{A}^{-1}$",hu:"$\\mathbf{B}^{-1}\\mathbf{A}^{-1}$"}},{q:{en:"A square matrix is called _____ if $a_{ij} = 0$ for all $i > j$.",hu:"Egy négyzetes mátrixot _____-nak nevezünk, ha $a_{ij} = 0$ minden $i > j$-re."},a:{en:"upper triangular",hu:"felső háromszögmátrixnak"}},{q:{en:"A square matrix is called _____ if $a_{ij} = 0$ for all $i < j$.",hu:"Egy négyzetes mátrixot _____-nak nevezünk, ha $a_{ij} = 0$ minden $i < j$-re."},a:{en:"lower triangular",hu:"alsó háromszögmátrixnak"}},{q:{en:"What is the determinant of a triangular matrix $\\mathbf{A}$?",hu:"Mi egy $\\mathbf{A}$ háromszögmátrix determinánsa?"},a:{en:"The product of its diagonal elements: $a_{11}a_{22}\\cdots a_{nn}$.",hu:"Az átlós elemeinek szorzata: $a_{11}a_{22}\\cdots a_{nn}$."}},{q:{en:"The product of two lower triangular matrices results in a _____ matrix.",hu:"Két alsó háromszögmátrix szorzata _____ mátrixot eredményez."},a:{en:"lower triangular",hu:"alsó háromszög"}},{q:{en:"The inverse of an invertible upper triangular matrix is always _____.",hu:"Egy invertálható felső háromszögmátrix inverze mindig _____."},a:{en:"upper triangular",hu:"felső háromszög"}},{q:{en:"What is a permutation matrix?",hu:"Mi az a permutációs mátrix?"},a:{en:"A square matrix obtained from the identity matrix by interchanging its rows or columns.",hu:"Az egységmátrixból a sorainak vagy oszlopainak felcserélésével kapott négyzetes mátrix."}},{q:{en:"In a permutation matrix, how many '1's are present in each row and column?",hu:"Egy permutációs mátrixban hány „1” van soronként és oszloponként?"},a:{en:"Exactly one.",hu:"Pontosan egy."}},{q:{en:"Multiplying a matrix $\\mathbf{A}$ on the left by a permutation matrix $\\mathbf{P}$ results in what transformation of $\\mathbf{A}$?",hu:"Egy $\\mathbf{A}$ mátrix balról egy $\\mathbf{P}$ permutációs mátrixszal való szorzása $\\mathbf{A}$ milyen transzformációját eredményezi?"},a:{en:"Interchanging the rows of $\\mathbf{A}$.",hu:"$\\mathbf{A}$ sorainak felcserélését."}},{q:{en:"What is the condition for a matrix $\\mathbf{A}$ to be 'row diagonally dominant'?",hu:"Mi a feltétele annak, hogy egy $\\mathbf{A}$ mátrix „soronként diagonálisan domináns” legyen?"},a:{en:"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i = 1, \\ldots, n$.",hu:"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ minden $i = 1, \\ldots, n$-re."}},{q:{en:"If a matrix $\\mathbf{A}$ is column diagonally dominant, what property does its transpose $\\mathbf{A}^T$ possess?",hu:"Ha egy $\\mathbf{A}$ mátrix oszloponként diagonálisan domináns, milyen tulajdonsággal rendelkezik a transzponáltja $\\mathbf{A}^T$?"},a:{en:"It is row diagonally dominant.",hu:"Soronként diagonálisan domináns."}},{q:{en:"According to Theorem 3.8, what property is guaranteed for a matrix that is diagonally dominant?",hu:"A 3.8. tétel szerint milyen tulajdonság garantált egy diagonálisan domináns mátrixra?"},a:{en:"It is invertible.",hu:"Invertálható."}},{q:{en:"What are the two requirements for a square matrix $\\mathbf{A}$ to be 'positive definite'?",hu:"Mi a két követelmény ahhoz, hogy egy $\\mathbf{A}$ négyzetes mátrix „pozitív definit” legyen?"},a:{en:"It must be symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\ne \\mathbf{0}$.",hu:"Szimmetrikusnak kell lennie, és $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ minden $\\mathbf{x} \\ne \\mathbf{0}$-ra."}},{q:{en:"If a square matrix $\\mathbf{A}$ is symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\ge 0$ for all $\\mathbf{x}$, it is called _____.",hu:"Ha egy $\\mathbf{A}$ négyzetes mátrix szimmetrikus és $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\ge 0$ minden $\\mathbf{x}$-re, akkor _____-nak nevezzük."},a:{en:"positive semi-definite",hu:"pozitív szemidefinitnek"}},{q:{en:"According to Theorem 3.9, if a matrix is positive definite, what can be said about its diagonal elements $a_{ii}$?",hu:"A 3.9. tétel szerint, ha egy mátrix pozitív definit, mit mondhatunk az $a_{ii}$ átlós elemeiről?"},a:{en:"They are all strictly positive ($a_{ii} > 0$).",hu:"Mind szigorúan pozitívak ($a_{ii} > 0$)."}},{q:{en:"Theorem 3.10 states that a symmetric matrix is positive definite if and only if all of its _____ are positive.",hu:"A 3.10. tétel kimondja, hogy egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha minden _____ pozitív."},a:{en:"principal minors (upper left minors)",hu:"sarokminorja (bal felső minorja)"}},{q:{en:"What defines an 'orthogonal' matrix $\\mathbf{A}$?",hu:"Mi határoz meg egy $\\mathbf{A}$ „ortogonális” mátrixot?"},a:{en:"$\\mathbf{A}$ is invertible and $\\mathbf{A}^{-1} = \\mathbf{A}^T$.",hu:"$\\mathbf{A}$ invertálható és $\\mathbf{A}^{-1} = \\mathbf{A}^T$."}},{q:{en:"If $\\mathbf{A}$ and $\\mathbf{B}$ are orthogonal matrices, what is the nature of their product $\\mathbf{A}\\mathbf{B}$?",hu:"Ha $\\mathbf{A}$ és $\\mathbf{B}$ ortogonális mátrixok, milyen a $\\mathbf{A}\\mathbf{B}$ szorzatuk?"},a:{en:"The product is also orthogonal.",hu:"A szorzat is ortogonális."}},{q:{en:"What is an eigenvalue $\\lambda$ of a square matrix $\\mathbf{A}$?",hu:"Mi egy $\\mathbf{A}$ négyzetes mátrix $\\lambda$ sajátértéke?"},a:{en:"A complex number such that $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$ has a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$.",hu:"Olyan komplex szám, amelyre $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$-nek van nemtriviális megoldása $\\mathbf{x} \\ne \\mathbf{0}$."}},{q:{en:"The algebraic equation $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$ used to find eigenvalues is known as the _____.",hu:"A sajátértékek megtalálására használt $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$ algebrai egyenlet neve a _____."},a:{en:"characteristic equation",hu:"karakterisztikus egyenlet"}},{q:{en:"What is the relationship between the determinant of a matrix $\\mathbf{A}$ and its eigenvalues $\\lambda_1, \\ldots, \\lambda_n$?",hu:"Mi a kapcsolat egy $\\mathbf{A}$ mátrix determinánsa és $\\lambda_1, \\ldots, \\lambda_n$ sajátértékei között?"},a:{en:"$\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$",hu:"$\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$"}},{q:{en:"Based on eigenvalues, when is a square matrix $\\mathbf{A}$ invertible?",hu:"A sajátértékek alapján mikor invertálható egy $\\mathbf{A}$ négyzetes mátrix?"},a:{en:"When all of its eigenvalues are non-zero ($\\lambda_i \\ne 0$ for all $i$).",hu:"Amikor minden sajátértéke nem nulla ($\\lambda_i \\ne 0$ minden $i$-re)."}},{q:{en:"If $\\lambda$ is an eigenvalue of an invertible matrix $\\mathbf{A}$, what is the corresponding eigenvalue for $\\mathbf{A}^{-1}$?",hu:"Ha $\\lambda$ egy invertálható $\\mathbf{A}$ mátrix sajátértéke, mi a megfelelő sajátérték $\\mathbf{A}^{-1}$-re?"},a:{en:"$1/\\lambda$",hu:"$1/\\lambda$"}},{q:{en:"If $\\lambda$ is an eigenvalue of $\\mathbf{A}$, what is the corresponding eigenvalue for the matrix $\\mathbf{A}^k$?",hu:"Ha $\\lambda$ az $\\mathbf{A}$ sajátértéke, mi a megfelelő sajátérték az $\\mathbf{A}^k$ mátrixra?"},a:{en:"$\\lambda^k$",hu:"$\\lambda^k$"}},{q:{en:"Where are the eigenvalues located for a triangular matrix?",hu:"Hol találhatók a sajátértékek egy háromszögmátrixnál?"},a:{en:"On the main diagonal elements ($a_{11}, a_{22}, \\ldots, a_{nn}$).",hu:"A főátló elemein ($a_{11}, a_{22}, \\ldots, a_{nn}$)."}},{q:{en:"Two square matrices $\\mathbf{A}$ and $\\mathbf{B}$ are 'similar' if there exists an invertible matrix $\\mathbf{P}$ such that _____.",hu:"Két $\\mathbf{A}$ és $\\mathbf{B}$ négyzetes mátrix „hasonló”, ha létezik olyan invertálható $\\mathbf{P}$ mátrix, hogy _____."},a:{en:"$\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$",hu:"$\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$"}},{q:{en:"What important property do similar matrices share regarding their eigenvalues?",hu:"Milyen fontos tulajdonságon osztoznak a hasonló mátrixok a sajátértékeik tekintetében?"},a:{en:"Their eigenvalues are identical.",hu:"A sajátértékeik azonosak."}},{q:{en:"Definition: Spectral Radius $\\rho(\\mathbf{A})$.",hu:"Definíció: Spektrálsugár $\\rho(\\mathbf{A})$."},a:{en:"The maximum absolute value of the eigenvalues of $\\mathbf{A}$: $\\max\\{|\\lambda| : \\lambda \\text{ is an eigenvalue of } \\mathbf{A}\\}$.",hu:"Az $\\mathbf{A}$ sajátértékeinek maximális abszolút értéke: $\\max\\{|\\lambda| : \\lambda \\text{ az } \\mathbf{A} \\text{ sajátértéke}\\}$."}},{q:{en:"How is the spectral radius of $\\mathbf{A}^k$ related to the spectral radius of $\\mathbf{A}$?",hu:"Hogyan viszonyul az $\\mathbf{A}^k$ spektrálsugara az $\\mathbf{A}$ spektrálsugarához?"},a:{en:"$\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$",hu:"$\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$"}},{q:{en:"According to Theorem 3.16, the spectral radius $\\rho(\\mathbf{A})$ is always less than or equal to any _____.",hu:"A 3.16. tétel szerint a $\\rho(\\mathbf{A})$ spektrálsugár mindig kisebb-egyenlő bármely _____-nál."},a:{en:"matrix norm $\\|\\cdot\\|$",hu:"mátrixnormánál $\\|\\cdot\\|$"}},{q:{en:"Theorem 3.17: For any $\\varepsilon > 0$, there exists a matrix norm $\\|\\cdot\\|$ such that $\\|\\mathbf{A}\\| \\le$ _____.",hu:"3.17. tétel: Bármely $\\varepsilon > 0$-ra létezik olyan $\\|\\cdot\\|$ mátrixnorma, hogy $\\|\\mathbf{A}\\| \\le$ _____."},a:{en:"$\\rho(\\mathbf{A}) + \\varepsilon$",hu:"$\\rho(\\mathbf{A}) + \\varepsilon$"}},{q:{en:"How is the spectral norm $\\|\\mathbf{A}\\|_2$ calculated for a general square matrix?",hu:"Hogyan számoljuk a $\\|\\mathbf{A}\\|_2$ spektrálnormát egy általános négyzetes mátrixra?"},a:{en:"$\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$",hu:"$\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$"}},{q:{en:"If a matrix $\\mathbf{A}$ is symmetric, how does its spectral norm $\\|\\mathbf{A}\\|_2$ relate to its spectral radius $\\rho(\\mathbf{A})$?",hu:"Ha egy $\\mathbf{A}$ mátrix szimmetrikus, hogyan viszonyul a $\\|\\mathbf{A}\\|_2$ spektrálnormája a $\\rho(\\mathbf{A})$ spektrálsugarához?"},a:{en:"They are equal: $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$.",hu:"Egyenlők: $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$."}},{q:{en:"What is the name of the determinant where the rows are powers of $a_i$ (e.g., $1, a_i, a_i^2, \\ldots, a_i^{n-1}$)?",hu:"Mi a neve annak a determinánsnak, amelynek sorai $a_i$ hatványai (pl. $1, a_i, a_i^2, \\ldots, a_i^{n-1}$)?"},a:{en:"Vandermonde determinant",hu:"Vandermonde-determináns"}},{q:{en:"Under what condition is the Vandermonde determinant non-zero?",hu:"Milyen feltétel mellett nem nulla a Vandermonde-determináns?"},a:{en:"The numbers $a_1, \\ldots, a_n$ must be pairwise distinct.",hu:"Az $a_1, \\ldots, a_n$ számoknak páronként különbözőknek kell lenniük."}},{q:{en:"What is the formula for the value of the Vandermonde determinant given numbers $a_1, \\ldots, a_n$?",hu:"Mi a Vandermonde-determináns értékének képlete adott $a_1, \\ldots, a_n$ számokra?"},a:{en:"$\\prod_{i>j}(a_i - a_j)$",hu:"$\\prod_{i>j}(a_i - a_j)$"}},{q:{en:"If $\\mathbf{A}$ and $\\mathbf{B}$ are positive definite matrices, is their sum $\\mathbf{A} + \\mathbf{B}$ also positive definite?",hu:"Ha $\\mathbf{A}$ és $\\mathbf{B}$ pozitív definit mátrixok, az $\\mathbf{A} + \\mathbf{B}$ összegük is pozitív definit?"},a:{en:"Yes.",hu:"Igen."}},{q:{en:"Is the square of a positive definite matrix ($\\mathbf{A}^2$) also positive definite?",hu:"Egy pozitív definit mátrix négyzete ($\\mathbf{A}^2$) is pozitív definit?"},a:{en:"Yes.",hu:"Igen."}},{q:{en:"Is the transpose of a positive definite matrix ($\\mathbf{A}^T$) also positive definite?",hu:"Egy pozitív definit mátrix transzponáltja ($\\mathbf{A}^T$) is pozitív definit?"},a:{en:"Yes.",hu:"Igen."}},{q:{en:"Define 'column diagonally dominant' in terms of the matrix's entries.",hu:"Definiáld az „oszloponként diagonálisan domináns” fogalmát a mátrix elemeivel."},a:{en:"$|a_{jj}| > \\sum_{i \\ne j} |a_{ij}|$ for all $j = 1, \\ldots, n$.",hu:"$|a_{jj}| > \\sum_{i \\ne j} |a_{ij}|$ minden $j = 1, \\ldots, n$-re."}}],s32:[{q:{en:"What is an $n$-dimensional upper triangular linear system?",hu:"Mi az a $n$-dimenziós felső háromszög alakú lineáris rendszer?"},a:{en:"A system where all coefficients $a_{ij} = 0$ for $i > j$.",hu:"Egy rendszer, ahol minden együttható $a_{ij} = 0$ $i > j$-hez."}},{q:{en:"In an upper triangular system $Ax = b$, what is the equation for the $n$-th variable?",hu:"A $Ax = b$ felső háromszögrendszerben mi a $n$-edik változó egyenlete?"},a:{en:"$a_{nn}x_n = b_n$",hu:"$a_{nn}x_n = b_n$"}},{q:{en:"What is the specific name of the method used to solve upper triangular systems?",hu:"Mi a konkrét neve a felső háromszögrendszerek megoldására használt módszernek?"},a:{en:"Backward substitution.",hu:"Visszafelé csere."}},{q:{en:"The Hungarian term for the backward substitution method is _____.",hu:"A visszafelé szubsztitúciós módszer magyar kifejezése _____."},a:{en:"Visszahelyettesítés módszere.",hu:"Visszahelyettesítés módszere."}},{q:{en:"Which variable is solved first in the backward substitution algorithm?",hu:"Melyik változót oldjuk meg először a visszafelé helyettesítő algoritmusban?"},a:{en:"$x_n$",hu:"$x_n$"}},{q:{en:"Which variable is solved last in the backward substitution algorithm?",hu:"Melyik változót oldják meg utoljára a visszafelé helyettesítési algoritmusban?"},a:{en:"$x_1$",hu:"$x_1$"}},{q:{en:"Algorithm: What is the assignment for $x_n$ at the start of backward substitution?",hu:"Algoritmus: Mi a $x_n$ hozzárendelése a visszafelé történő helyettesítés kezdetén?"},a:{en:"$x_n \\leftarrow b_n / a_{nn}$",hu:"$x_n \\leftarrow b_n / a_{nn}$"}},{q:{en:"In the backward substitution algorithm, what range of values does the index $i$ take after solving for $x_n$?",hu:"A visszafelé helyettesítő algoritmusban milyen értéktartományt vesz fel a $i$ index a $x_n$ megoldása után?"},a:{en:"$n-1, \\dots, 1$",hu:"$n-1, \\dots, 1$"}},{q:{en:"What is the general formula for calculating $x_i$ in backward substitution?",hu:"Mi az általános képlet a $x_i$ kiszámításához visszafelé történő helyettesítés esetén?"},a:{en:"$x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j) / a_{ii}$",hu:"$x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j) / a_{ii}$"}},{q:{en:"In the formula for $x_i$, what is the lower limit of the summation index $j$?",hu:"A $x_i$ képletében mi a $j$ összegzési index alsó határa?"},a:{en:"$i+1$",hu:"$i+1$"}},{q:{en:"In the formula for $x_i$, what is the upper limit of the summation index $j$?",hu:"A $x_i$ képletben mi a $j$ összegzési index felső határa?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"Under what condition on the diagonal elements $a_{ii}$ can backward substitution be performed?",hu:"A $a_{ii}$ átlós elemeken milyen feltételek mellett végezhető visszafelé csere?"},a:{en:"$a_{ii} \\ne 0$ for all $i = 1, \\dots, n$.",hu:"$a_{ii} \\ne 0$ minden $i = 1, \\dots, n$-hez."}},{q:{en:"How is the determinant of a triangular matrix $A$ calculated?",hu:"Hogyan számítják ki a $A$ háromszögmátrix determinánsát?"},a:{en:"It is the product of the diagonal elements: $\\det(A) = a_{11}a_{22}\\cdots a_{nn}$.",hu:"Ez az átlós elemek szorzata: $\\det(A) = a_{11}a_{22}\\cdots a_{nn}$."}},{q:{en:"Backward substitution works if and only if the system has a unique solution, which implies $\\det(A) \\ne$ _____.",hu:"A visszafelé történő helyettesítés akkor és csak akkor működik, ha a rendszer egyedi megoldással rendelkezik, ami azt jelenti, hogy $\\det(A) \\ne$ _____."},a:{en:"$0$",hu:"$0$"}},{q:{en:"How many multiplications and divisions are required in step 1 of the backward substitution algorithm?",hu:"Hány szorzásra és osztásra van szükség a visszafelé helyettesítési algoritmus 1. lépésében?"},a:{en:"$1$",hu:"$1$"}},{q:{en:"How many additions and subtractions are required in step 1 of the backward substitution algorithm?",hu:"Hány összeadásra és kivonásra van szükség a visszafelé helyettesítési algoritmus 1. lépésében?"},a:{en:"$0$",hu:"$0$"}},{q:{en:"In the $n$-th step of the algorithm, how many multiplications and divisions are performed?",hu:"Az algoritmus $n$-edik lépésében hány szorzást és osztást hajtunk végre?"},a:{en:"$n$",hu:"$n$"}},{q:{en:"In the $n$-th step of the algorithm, how many additions and subtractions are performed?",hu:"Az algoritmus $n$-edik lépésében hány összeadás és kivonás történik?"},a:{en:"$n-1$",hu:"$n-1$"}},{q:{en:"What is the total number of multiplications and divisions required for backward substitution?",hu:"Összesen hány szorzás és osztás szükséges a visszafelé helyettesítéshez?"},a:{en:"$n(n+1)/2$",hu:"$n(n+1)/2$"}},{q:{en:"What is the total number of additions and subtractions required for backward substitution?",hu:"Mennyi összeadások és kivonások szükségesek a visszafelé történő helyettesítéshez?"},a:{en:"$n(n-1)/2$",hu:"$n(n-1)/2$"}},{q:{en:"In terms of Big O notation, what is the complexity of multiplications and divisions for backward substitution?",hu:"A Big O jelölés szempontjából milyen bonyolult a visszafelé történő helyettesítés szorzása és osztása?"},a:{en:"$n^2/2 + \\mathcal{O}(n)$",hu:"$n^2/2 + \\mathcal{O}(n)$"}},{q:{en:"In terms of Big O notation, what is the complexity of additions and subtractions for backward substitution?",hu:"A Big O jelölés szempontjából milyen bonyolult az összeadás és a kivonás a visszafelé történő helyettesítéshez?"},a:{en:"$n^2/2 + \\mathcal{O}(n)$",hu:"$n^2/2 + \\mathcal{O}(n)$"}},{q:{en:"How does the source material define the notation $\\mathcal{O}(n^k)$?",hu:"Hogyan határozza meg a forrásanyag a $\\mathcal{O}(n^k)$ jelölést?"},a:{en:"A polynomial with degree at most $k$.",hu:"Legfeljebb $k$ fokozatú polinom."}},{q:{en:"Why is the leading term of the time complexity (e.g., $n^2/2$) prioritized over lower-order terms?",hu:"Miért előnyben részesítik az időbonyolultság vezető kifejezését (pl. $n^2/2$) az alacsonyabb rendű kifejezésekkel szemben?"},a:{en:"It determines the magnitude of the formula as $n$ becomes large.",hu:"Ez határozza meg a képlet nagyságát, amikor a $n$ nagy lesz."}},{q:{en:"If $3x_4 = 12$ in a triangular system, what is the value of $x_4$?",hu:"Ha a $3x_4 = 12$ háromszögrendszerben van, mennyi a $x_4$ értéke?"},a:{en:"$4$",hu:"$4$"}},{q:{en:"If $2x_3 - x_4 = -2$ and $x_4 = 4$, what is the resulting value of $x_3$?",hu:"Ha $2x_3 - x_4 = -2$ és $x_4 = 4$, mi a $x_3$ eredő értéke?"},a:{en:"$1$",hu:"$1$"}},{q:{en:"In a linear system $Ax=b$, what does the vector $b$ represent?",hu:"A $Ax=b$ lineáris rendszerben mit ábrázol a $b$ vektor?"},a:{en:"The right-hand side constant values.",hu:"A jobb oldali konstans értékek."}},{q:{en:"A triangular matrix where $a_{ij} = 0$ for $i > j$ is specifically called an _____ triangular matrix.",hu:"Egy háromszögmátrixot, ahol a $a_{ij} = 0$ $i > j$-hez kifejezetten _____ háromszögmátrixnak nevezik."},a:{en:"Upper",hu:"Felső"}},{q:{en:"Concept: Time Complexity",hu:"Koncepció: Idő komplexitás"},a:{en:"Definition: The number of arithmetic operations required to perform an algorithm as a function of the input size $n$.",hu:"Definíció: Az algoritmus végrehajtásához szükséges aritmetikai műveletek száma a $n$ bemeneti méret függvényében."}},{q:{en:"What arithmetic operation is performed at every step $i$ to isolate $x_i$?",hu:"Milyen aritmetikai műveleteket hajtanak végre a $i$ minden lépésében a $x_i$ izolálásához?"},a:{en:"Division by $a_{ii}$.",hu:"Felosztás a $a_{ii}$ szerint."}},{q:{en:"Term: Leading Term",hu:"Fogalom: Vezető kifejezés"},a:{en:"Definition: The term in a polynomial with the highest power of $n$, determining the growth rate for large $n$.",hu:"Definíció: A $n$ legnagyobb hatványával rendelkező polinomban lévő kifejezés, amely meghatározza a nagy $n$ növekedési ütemét."}},{q:{en:"How many terms are in the summation $\\sum_{j=i+1}^{n} a_{ij}x_j$ when $i = n-1$?",hu:"Hány tag szerepel a $\\sum_{j=i+1}^{n} a_{ij}x_j$ összegzésben, amikor $i = n-1$?"},a:{en:"$1$",hu:"$1$"}},{q:{en:"True or False: If any diagonal element of a triangular matrix is zero, the determinant is zero.",hu:"Igaz vagy hamis: Ha egy háromszögmátrix bármely átlós eleme nulla, akkor a determináns nulla."},a:{en:"True",hu:"Igaz"}},{q:{en:"Which specific field of mathematics is the source material '03_01_triangular-systems.md' discussing?",hu:"A '03_01_triangular-systems.md' forrásanyag a matematikának melyik konkrét területéről szól?"},a:{en:"Numerical Analysis.",hu:"Numerikus elemzés."}},{q:{en:"The summation term in the backward substitution formula accounts for the _____ of previously solved variables.",hu:"A visszafelé helyettesítési képletben szereplő összegzési tag a korábban megoldott változók _____-ját adja."},a:{en:"Back-substitution (or back-replacement).",hu:"Vissza-csere (vagy visszacsere)."}},{q:{en:"What is the closed-form sum of the first $n$ integers, $1 + 2 + \\dots + n$?",hu:"Mennyi az első $n$ egész számok zárt formájú összege, $1 + 2 + \\dots + n$?"},a:{en:"$n(n+1)/2$",hu:"$n(n+1)/2$"}},{q:{en:"If $n = 1000$, what is the approximate magnitude of multiplications required for backward substitution?",hu:"Ha $n = 1000$, mekkora a szorzások hozzávetőleges nagysága a visszafelé helyettesítéshez?"},a:{en:"Approximately $500,000$ (or $n^2/2$).",hu:"Körülbelül $500,000$ (vagy $n^2/2$)."}},{q:{en:"The notation $\\mathcal{O}(n^k)$ effectively _____ lower-order terms that are less significant for large $n$.",hu:"A $\\mathcal{O}(n^k)$ jelölés gyakorlatilag _____ olyan alacsonyabb rendű kifejezéseket tartalmaz, amelyek kevésbé jelentősek a nagy $n$ esetében."},a:{en:"Hides (or ignores).",hu:"Elrejti (vagy figyelmen kívül hagyja)."}},{q:{en:"In the example system, $x_2$ is found using the formula $(13 + x_3 - 2x_4)/3$. If $x_3=1$ and $x_4=4$, what is $x_2$?",hu:"A példarendszerben a $x_2$ a $(13 + x_3 - 2x_4)/3$ képlet segítségével található. Ha $x_3=1$ és $x_4=4$, mi az a $x_2$?"},a:{en:"$2$",hu:"$2$"}},{q:{en:"In the example system, $x_1$ is found using $(3 + x_2 - 3x_3 - x_4)/2$. If $x_2=2, x_3=1, x_4=4$, what is $x_1$?",hu:"A példarendszerben a $x_1$ a $(3 + x_2 - 3x_3 - x_4)/2$ használatával található. Ha $x_2=2, x_3=1, x_4=4$, mi az a $x_1$?"},a:{en:"$-1$",hu:"$-1$"}},{q:{en:"What type of systems (linear or nonlinear) is backward substitution designed for?",hu:"Milyen típusú (lineáris vagy nemlineáris) rendszerekre tervezték a visszafelé történő helyettesítést?"},a:{en:"Linear systems.",hu:"Lineáris rendszerek."}},{q:{en:"If a matrix is upper triangular, its _____ consist only of elements where the row index is less than or equal to the column index.",hu:"Ha egy mátrix felső háromszög alakú, akkor _____ csak olyan elemekből áll, ahol a sorindex kisebb vagy egyenlő, mint az oszlopindex."},a:{en:"Non-zero entries.",hu:"Nem nulla bejegyzések."}},{q:{en:"Why is it often more efficient to define a specialized method for a specific problem type like triangular systems?",hu:"Miért hatékonyabb gyakran egy speciális módszert meghatározni egy adott problématípusra, például a háromszögrendszerekre?"},a:{en:"Specialized methods exploit the structure of the problem to reduce operation counts.",hu:"A speciális módszerek a probléma szerkezetét használják ki a műveletek számának csökkentésére."}},{q:{en:"What is the result of $1 + 2 + \\dots + (n-1)$?",hu:"Mi a $1 + 2 + \\dots + (n-1)$ eredménye?"},a:{en:"$(n-1)n/2$",hu:"$(n-1)n/2$"}},{q:{en:"How does the complexity of multiplications/divisions compare to additions/subtractions in backward substitution?",hu:"Hogyan viszonyul a szorzások/osztások összetettsége az összeadásokhoz/kivonásokhoz a visszafelé helyettesítésben?"},a:{en:"They have the same leading order complexity ($n^2/2$).",hu:"A vezető rendelés összetettsége megegyezik ($n^2/2$)."}},{q:{en:"In the Hungarian text, the word 'műveletigény' refers to _____.",hu:"A magyar szövegben a műveletigény szó _____-ra utal."},a:{en:"Operation count (or computational complexity).",hu:"A műveletek száma (vagy a számítási bonyolultság)."}},{q:{en:"Process: Solving $x_i$ requires knowing the values of all $x_j$ where $j$ is _____ than $i$.",hu:"Folyamat: A $x_i$ megoldásához ismerni kell az összes $x_j$ értékét, ahol a $j$ _____, mint a $i$."},a:{en:"Greater",hu:"Nagyobb"}},{q:{en:"If the determinant of a triangular matrix is non-zero, does the backward substitution algorithm always yield a solution?",hu:"Ha egy háromszögmátrix determinánsa nem nulla, akkor a visszafelé helyettesítési algoritmus mindig ad megoldást?"},a:{en:"Yes, it yields a unique solution.",hu:"Igen, egyedi megoldást ad."}},{q:{en:"The algorithm $x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ corresponds to solving the $i$-th _____ of the system.",hu:"A $x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ algoritmus megfelel a rendszer $i$-edik _____ megoldásának."},a:{en:"Row (or equation).",hu:"Sor (vagy egyenlet)."}},{q:{en:"Is backward substitution a finite or iterative numerical method?",hu:"A visszafelé történő helyettesítés véges vagy iteratív numerikus módszer?"},a:{en:"Finite (it requires finitely many steps).",hu:"Véges (véges sok lépést igényel)."}},{q:{en:"Formula: Number of divisions in the entire backward substitution algorithm for an $n \\times n$ matrix.",hu:"Képlet: Osztások száma a teljes visszafelé helyettesítő algoritmusban egy $n \\times n$ mátrixhoz."},a:{en:"$n$",hu:"$n$"}},{q:{en:"What determines if backward substitution can be performed for a specific $i$-th row?",hu:"Mi határozza meg, hogy egy adott $i$-edik sor visszafelé történő helyettesítése végrehajtható-e?"},a:{en:"Whether $a_{ii} \\ne 0$.",hu:"Akár $a_{ii} \\ne 0$."}},{q:{en:"Hungarian term: 'egyértelmű megoldás' means _____.",hu:"Magyar kifejezés: 'egyértelmű megoldás' jelentése _____."},a:{en:"Unique solution.",hu:"Egyedi megoldás."}},{q:{en:"In the complexity analysis table, what is the count of multiplication/division for step 2?",hu:"Mennyi a szorzás/osztás száma a komplexitáselemző táblázatban a 2. lépésben?"},a:{en:"2",hu:"2"}},{q:{en:"In the complexity analysis table, what is the count of addition/subtraction for step 2?",hu:"Mennyi az összeadás/kivonás száma a komplexitáselemző táblázatban a 2. lépésben?"},a:{en:"1",hu:"1"}},{q:{en:"What does the $a_{1n}x_n$ term represent in the first equation of a triangular system?",hu:"Mit jelent a $a_{1n}x_n$ kifejezés egy háromszögrendszer első egyenletében?"},a:{en:"The product of the coefficient $a_{1n}$ and the $n$-th unknown $x_n$.",hu:"A $a_{1n}$ együttható és a $n$-edik ismeretlen $x_n$ szorzata."}},{q:{en:"If $n=2$, how many total multiplications/divisions are needed?",hu:"Ha $n=2$, hány teljes szorzásra/osztásra van szükség?"},a:{en:"$3$ (calculated as $2(3)/2$).",hu:"$3$ ($2(3)/2$-ként számítva)."}},{q:{en:"If $n=2$, how many total additions/subtractions are needed?",hu:"Ha $n=2$, hány összeadásra/kivonásra van szükség?"},a:{en:"$1$ (calculated as $1(2)/2$).",hu:"$1$ ($1(2)/2$-ként számítva)."}},{q:{en:"In the expression $n^2/2 + \\mathcal{O}(n)$, the term $\\mathcal{O}(n)$ is considered a _____ order term.",hu:"A $n^2/2 + \\mathcal{O}(n)$ kifejezésben a $\\mathcal{O}(n)$ kifejezést _____ sorrendű kifejezésnek tekintjük."},a:{en:"Lower",hu:"Alacsonyabb"}}],s33:[{q:{en:"In the context of linear systems, what is an 'augmented matrix'?",hu:"Lineáris rendszerek kontextusában mi az a „kibővített mátrix”?"},a:{en:"A matrix formed by appending the right-hand side vector $b$ as an additional column to the coefficient matrix $A$.",hu:"Egy mátrix, amelyet a $b$ jobb oldali vektornak a $A$ együtthatómátrixhoz további oszlopként történő hozzáfűzésével alakítanak ki."}},{q:{en:"What is the primary goal of the 'elimination' phase in Gaussian elimination?",hu:"Mi az elsődleges célja az „eliminációs” fázisnak a Gauss-eliminációban?"},a:{en:"To transform the augmented matrix into an equivalent upper triangular form.",hu:"A kiterjesztett mátrix ekvivalens felső háromszög formává alakítása."}},{q:{en:"What name is given to the diagonal elements $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ used during the Gaussian elimination process?",hu:"Milyen nevet adnak a Gauss-eliminációs folyamat során használt $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ átlós elemeknek?"},a:{en:"Pivot elements",hu:"Pivot elemek"}},{q:{en:"Under what specific numerical condition can basic Gaussian elimination be performed without any row interchanges?",hu:"Milyen konkrét numerikus feltétel mellett hajtható végre az alapvető Gauss-elimináció sorcsere nélkül?"},a:{en:"It can be performed if and only if all the pivot elements are non-zero.",hu:"Akkor és csak akkor hajtható végre, ha az összes pivot elem nem nulla."}},{q:{en:"In Gaussian elimination, what is the 'backward substitution' phase used for?",hu:"A Gauss-eliminációban mire használják a „visszafelé szubsztitúciós” fázist?"},a:{en:"Solving the resulting upper triangular system for the unknown variables starting from $x_n$ to $x_1$.",hu:"A kapott felső háromszögrendszer megoldása a $x_n$-től $x_1$-ig terjedő ismeretlen változókra."}},{q:{en:"In the $k$-th step of Gaussian elimination, what is the formula for the multiplier $l_{ik}$ used to eliminate $a_{ik}$?",hu:"A Gauss-elimináció $k$-edik lépésében mi a képlete a $l_{ik}$ szorzónak a $a_{ik}$ kiküszöbölésére?"},a:{en:"$l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$",hu:"$l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$"}},{q:{en:"What is the leading term of the time complexity for Gaussian elimination of an $n \\times n$ system?",hu:"Mi a $n \\times n$ rendszer Gauss-féle eliminációjának időbonyolultságának vezető kifejezése?"},a:{en:"$\\frac{n^3}{3}$",hu:"$\\frac{n^3}{3}$"}},{q:{en:"According to the total operation count, how many multiplications and divisions are required for Gaussian elimination including backward substitution?",hu:"A teljes műveletszám szerint hány szorzás és osztás szükséges a Gauss-eliminációhoz, beleértve a visszafelé helyettesítést?"},a:{en:"$\\frac{n^3}{3} + n^2 - \\frac{n}{3}$",hu:"$\\frac{n^3}{3} + n^2 - \\frac{n}{3}$"}},{q:{en:"According to the total operation count, how many additions and subtractions are required for Gaussian elimination including backward substitution?",hu:"A teljes műveletszám szerint hány összeadás és kivonás szükséges a Gauss-eliminációhoz, beleértve a visszafelé helyettesítést?"},a:{en:"$\\frac{n^3}{3} + \\frac{n^2}{2} - \\frac{5n}{6}$",hu:"$\\frac{n^3}{3} + \\frac{n^2}{2} - \\frac{5n}{6}$"}},{q:{en:"Why does dividing by a pivot element close to zero cause issues in floating-point arithmetic?",hu:"Miért okoz problémát a nullához közeli pivot elemmel való osztás a lebegőpontos aritmetikában?"},a:{en:"It can lead to a significant increase in rounding errors, making the numerical solution unreliable.",hu:"Ez a kerekítési hibák jelentős növekedéséhez vezethet, megbízhatatlanná téve a numerikus megoldást."}},{q:{en:"What is the strategy for 'partial pivoting' (also known as maximal column pivoting)?",hu:"Mi a „részleges elforgatás” (más néven maximális oszlopforgatás) stratégiája?"},a:{en:"Before step $k$, find the element with the largest magnitude in the $k$-th column at or below the diagonal and swap its row with the $k$-th row.",hu:"A $k$ lépés előtt keresse meg a legnagyobb magnitúdójú elemet a $k$-edik oszlopban az átlónál vagy alatta, és cserélje fel a sorát a $k$-edik sorra."}},{q:{en:"Which index is selected as the pivot row $l$ in partial pivoting for step $k$?",hu:"Melyik index van kiválasztva $l$ elforgatási sorként a $k$ lépés részleges elforgatásakor?"},a:{en:"The index $l$ such that $|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\ldots, n\\}$.",hu:"A $l$ index úgy, hogy a $|a_{lk}| = \\max\\{|a_{ik}|: i = k, \\ldots, n\\}$."}},{q:{en:"How does 'complete pivoting' differ from 'partial pivoting'?",hu:"Miben különbözik a „teljes elforgatás” a „részleges elforgatástól”?"},a:{en:"It searches for the largest magnitude element in the entire remaining sub-matrix rather than just the current column.",hu:"A legnagyobb nagyságrendű elemet keresi a teljes fennmaradó almátrixban, nem csak az aktuális oszlopban."}},{q:{en:"What is a major disadvantage of complete pivoting compared to partial pivoting?",hu:"Mi a fő hátránya a teljes elforgatásnak a részleges elforgatáshoz képest?"},a:{en:"It requires more comparisons to find the pivot element, which slows down the algorithm.",hu:"Több összehasonlításra van szükség a pivot elem megtalálásához, ami lelassítja az algoritmust."}},{q:{en:"When performing complete pivoting, what must be tracked in addition to row interchanges?",hu:"A teljes pivoting végrehajtásakor mit kell követni a sorcsere mellett?"},a:{en:"Column interchanges, which represent changes in the order of the variables $x_1, \\ldots, x_n$.",hu:"Oszlopcsere, amely a $x_1, \\ldots, x_n$ változók sorrendjében bekövetkezett változásokat jelenti."}},{q:{en:"Theorem 3.26 states that a linear system can be solved by Gaussian elimination with partial pivoting if and only if _____.",hu:"A 3.26. tétel kimondja, hogy egy lineáris rendszer akkor és csak akkor oldható meg Gauss-eliminációval részleges elforgatással, ha _____."},a:{en:"$\\det(\\mathbf{A}) \\neq 0$ (the matrix is invertible).",hu:"$\\det(\\mathbf{A}) \\neq 0$ (a mátrix megfordítható)."}},{q:{en:"In matrix notation, how are row changes in Gaussian elimination represented using a permutation matrix $\\mathbf{P}$?",hu:"A mátrixjelölésben hogyan ábrázolják a Gauss-elimináció sorváltozásait a $\\mathbf{P}$ permutációs mátrix használatával?"},a:{en:"The system is transformed from $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ to $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$.",hu:"A rendszer $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$-ről $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$-re alakul át."}},{q:{en:"What is the primary motivation for using 'scaled partial pivoting'?",hu:"Mi az elsődleges motiváció a „skálázott részleges elforgatás” használatához?"},a:{en:"To reduce rounding errors when the magnitudes of coefficients in different rows vary significantly.",hu:"A kerekítési hibák csökkentése érdekében, amikor a különböző sorokban lévő együtthatók nagysága jelentősen eltér."}},{q:{en:"In scaled partial pivoting, how is the scale factor $s_i$ for row $i$ typically defined?",hu:"Léptékezett részleges elforgatás esetén általában hogyan definiálható a $s_i$ léptéktényező a $i$ sorhoz?"},a:{en:"$s_i = \\max\\{|a_{ij}| : 1 \\leq j \\leq n\\}$",hu:"$s_i = \\max\\{|a_{ij}|: 1 \\leq j \\leq n\\}$"}},{q:{en:"In 'partial pivoting with implicit scaling', why are the rows not actually multiplied by the scaling factors?",hu:"A „részleges elforgatás implicit skálázással” esetén miért nem szorozzák meg a sorokat a skálázási tényezőkkel?"},a:{en:"To avoid introducing additional rounding errors through unnecessary division operations.",hu:"A szükségtelen osztási műveletek miatti további kerekítési hibák elkerülése érdekében."}},{q:{en:"What is the selection criterion for the pivot row $l$ in scaled partial pivoting?",hu:"Mi a $l$ forgássor kiválasztásának kritériuma skálázott részleges elforgatásban?"},a:{en:"Select $l$ such that $\\frac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\frac{|a_{ik}|}{s_i}$.",hu:"Válassza ki a $l$ elemet úgy, hogy a $\\frac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\frac{|a_{ik}|}{s_i}$ legyen."}},{q:{en:"A square matrix $\\mathbf{A}$ is 'diagonally dominant' if, for every row $i$, $|a_{ii}|$ is greater than _____.",hu:"A $\\mathbf{A}$ négyzetmátrix „átlósan domináns”, ha minden $i$ sorban $|a_{ii}|$ nagyobb, mint _____."},a:{en:"The sum of the magnitudes of the other elements in that row: $\\sum_{j \\neq i} |a_{ij}|$.",hu:"A sorban lévő többi elem nagyságának összege: $\\sum_{j \\neq i} |a_{ij}|$."}},{q:{en:"What does Theorem 3.32 conclude about Gaussian elimination on a diagonally dominant matrix?",hu:"Mit von le a 3.32. Tétel a Gauss-eliminációról egy diagonálisan domináns mátrixon?"},a:{en:"It can be performed without pivoting and is stable with respect to rounding errors.",hu:"Elfordulás nélkül is végrehajtható, és stabil a kerekítési hibák tekintetében."}},{q:{en:"How does diagonal dominance relate to matrix invertibility?",hu:"Hogyan kapcsolódik az átlós dominancia a mátrix invertibilitásához?"},a:{en:"Any diagonally dominant matrix is guaranteed to be invertible.",hu:"Minden átlósan domináns mátrix garantáltan megfordítható."}},{q:{en:"Concept: Symmetric Positive Definite (SPD) Matrix",hu:"Koncepció: Szimmetrikus pozitív határozott (SPD) mátrix"},a:{en:"Definition: A symmetric matrix $\\mathbf{A}$ where $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$.",hu:"Definíció: $\\mathbf{A}$ szimmetrikus mátrix, ahol $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ az összes $\\mathbf{x} \\neq \\mathbf{0}$ esetében."}},{q:{en:"What is the 'principal minor' condition for a symmetric matrix to be positive definite?",hu:'Mi a "fő mellékfeltétel" ahhoz, hogy egy szimmetrikus mátrix pozitív határozott legyen?'},a:{en:"All the upper-left principal minors must have a positive determinant.",hu:"Az összes bal felső fő kiskorúnak pozitív determinánssal kell rendelkeznie."}},{q:{en:"If a matrix is symmetric positive definite, what can be said about its pivot elements during Gaussian elimination without pivoting?",hu:"Ha egy mátrix szimmetrikus pozitív definit, mit mondhatunk a pivot elemeiről a Gauss-elimináció során elfordulás nélkül?"},a:{en:"All pivot elements are guaranteed to be positive.",hu:"Minden forgóelem garantáltan pozitív."}},{q:{en:"What is the effect of interchanging rows on the determinant of a matrix?",hu:"Milyen hatással van a sorok felcserélése a mátrix determinánsára?"},a:{en:"Each row interchange multiplies the determinant by $-1$.",hu:"Minden sorcsere megszorozza a determinánst $-1$-vel."}},{q:{en:"In an optimized implementation of Gaussian elimination, what happens to the elements under the main diagonal after they are eliminated?",hu:"A Gauss-elimináció optimalizált megvalósításában mi történik a főátló alatti elemekkel, miután kiiktatták őket?"},a:{en:"They are typically overwritten by the multipliers $l_{ik}$ or left as meaningless values to save memory.",hu:"Ezeket általában felülírják a $l_{ik}$ szorzók, vagy értelmetlen értékekként hagyják meg a memória megtakarítása érdekében."}},{q:{en:"Term: Pivot Row",hu:"Fogalom: Pivot Row"},a:{en:"Definition: The row containing the pivot element used to eliminate variables in the rows below it during Gaussian elimination.",hu:"Definíció: A pivot elemet tartalmazó sor, amely az alatta lévő sorok változóinak kiküszöbölésére szolgál Gauss-elimináció során."}},{q:{en:"In the provided example with 4-digit arithmetic, what was the relative error for $x_1$ when dividing by the small pivot $0.0002$?",hu:"A megadott 4 számjegyű aritmetikai példában mekkora volt a $x_1$ relatív hibája, amikor elosztották a $0.0002$ kis forgásponttal?"},a:{en:"$300\\%$",hu:"$300\\%$"}},{q:{en:"What is the first step in the 'implicit scaling' algorithm before starting elimination?",hu:"Mi az első lépés az „implicit skálázás” algoritmusban az elimináció megkezdése előtt?"},a:{en:"Compute the scale factor $s_i$ for each row $i$ as the maximum absolute value in that row.",hu:"Számítsa ki a $s_i$ léptéktényezőt minden $i$ sorhoz az adott sorban lévő maximális abszolút értékként."}},{q:{en:"True or False: If a system has a unique solution, standard Gaussian elimination without pivoting will always find it.",hu:"Igaz vagy hamis: Ha egy rendszernek egyedi megoldása van, a standard Gauss-elimináció elforgatás nélkül mindig megtalálja azt."},a:{en:"False; it can fail if a pivot element becomes zero during the process.",hu:"Hamis; meghibásodhat, ha egy pivot elem nullává válik a folyamat során."}},{q:{en:"In programming Gaussian elimination, what is a more efficient alternative to physically interchanging large rows in memory?",hu:"A Gauss-elimináció programozásában mi a hatékonyabb alternatíva a nagy sorok fizikai felcserélésére a memóriában?"},a:{en:"Using an index array to keep track of the row order (indirect addressing).",hu:"Indextömb használata a sorok sorrendjének nyomon követésére (indirekt címzés)."}},{q:{en:"How does partial pivoting help reduce rounding errors?",hu:"Hogyan segít a részleges elforgatás csökkenteni a kerekítési hibákat?"},a:{en:"By ensuring the divisor (pivot) is as large as possible, which minimizes the growth of multipliers and rounding errors.",hu:"A lehető legnagyobb osztó (pivot) biztosításával, ami minimalizálja a szorzók és a kerekítési hibák növekedését."}},{q:{en:"What property of Symmetric Positive Definite matrices ensures numerical stability without pivoting?",hu:"A szimmetrikus pozitív határozott mátrixok milyen tulajdonsága biztosítja a numerikus stabilitást elfordulás nélkül?"},a:{en:"The pivots are always positive and the algorithm is stable with respect to rounding errors for these matrices.",hu:"A pivotok mindig pozitívak, és az algoritmus stabil a kerekítési hibák tekintetében ezeknél a mátrixoknál."}},{q:{en:"In Gaussian elimination, the multiplier $l_{ik}$ is stored to potentially perform what future matrix decomposition?",hu:"A Gauss-elimináció során a $l_{ik}$ szorzót tároljuk, hogy potenciálisan milyen jövőbeli mátrixbontást hajtson végre?"},a:{en:"$LU$ decomposition (though not explicitly detailed in the source, $l_{ik}$ are the components of $L$).",hu:"$LU$ dekompozíció (bár a forrásban nincs kifejezetten részletezve, a $l_{ik}$ a $L$ összetevői)."}},{q:{en:"If the algorithm for Gaussian elimination encounters a column where all elements $a_{ik}$ for $i \\geq k$ are zero, what does this imply about the matrix $\\mathbf{A}$?",hu:"Ha a Gauss-elimináció algoritmusa olyan oszlopba ütközik, amelyben a $a_{ik}$ $i \\geq k$ összes eleme nulla, mit jelent ez a $\\mathbf{A}$ mátrixról?"},a:{en:"The matrix is singular, and $\\det(\\mathbf{A}) = 0$.",hu:"A mátrix szinguláris, és $\\det(\\mathbf{A}) = 0$."}},{q:{en:"In partial pivoting, what happens if multiple rows have the same maximum absolute value in the current column?",hu:"Mi történik részleges elforgatás esetén, ha több sornak ugyanaz a maximális abszolút értéke az aktuális oszlopban?"},a:{en:"The smallest row index $l$ is typically chosen.",hu:"Általában a legkisebb $l$ sorindexet választják."}},{q:{en:"In the backward substitution formula $x_i = (a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$, what must be non-zero for the formula to be valid?",hu:"A $x_i = (a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ visszafelé helyettesítési képletben minek kell nullától eltérőnek lennie ahhoz, hogy a képlet érvényes legyen?"},a:{en:"The pivot element $a_{ii}$.",hu:"A forgóelem $a_{ii}$."}},{q:{en:"Why is scaling using powers of the number system base (e.g., $\\beta^{r_i}$) preferred in some implementations?",hu:"Miért részesítik előnyben a skálázást a számrendszer-alap hatványainak használatával (pl. $\\beta^{r_i}$) egyes megvalósításokban?"},a:{en:"Division by base powers does not introduce rounding errors in floating-point representations.",hu:"Az alaphatványokkal való osztás nem okoz kerekítési hibákat a lebegőpontos ábrázolásokban."}},{q:{en:"What is the effect of scaling a row on the solution $\\mathbf{x}$ of the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",hu:"Milyen hatással van egy sor méretezése a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszer $\\mathbf{x}$ megoldására?"},a:{en:"The solution remains identical; only the numerical selection of pivots is affected.",hu:"A megoldás ugyanaz marad; csak a pivotok számszerű kiválasztását érinti."}},{q:{en:"The proof of Theorem 3.32 uses the _____ inequality to show that diagonal dominance is preserved in subsequent steps of elimination.",hu:"A 3.32. Tétel bizonyítása a _____ egyenlőtlenséget használja annak kimutatására, hogy az átlós dominancia megmarad a következő eliminációs lépésekben."},a:{en:"Triangle Inequality",hu:"Háromszög egyenlőtlenség"}},{q:{en:"In the complexity analysis, which phase of Gaussian elimination is more expensive: Elimination or Backward Substitution?",hu:"A komplexitáselemzésben a Gauss-elimináció melyik fázisa drágább: Elimináció vagy Visszafelé helyettesítés?"},a:{en:"Elimination ($O(n^3)$ versus $O(n^2)$ for backward substitution).",hu:"Elimináció ($O(n^3)$ versus $O(n^2)$ a visszafelé történő helyettesítéshez)."}},{q:{en:"What is the result of applying Gaussian elimination to a symmetric positive definite matrix without pivoting?",hu:"Mi az eredménye, ha a Gauss-eliminációt szimmetrikus pozitív határozott mátrixra alkalmazzuk elfordulás nélkül?"},a:{en:"The matrix is successfully reduced to upper triangular form with all positive diagonal entries.",hu:"A mátrix sikeresen redukálva felső háromszög alakúra minden pozitív átlós bejegyzéssel."}},{q:{en:"If $\\det(\\mathbf{A}) \\neq 0$, what does Theorem 3.28 guarantee regarding permutation matrices?",hu:"Ha $\\det(\\mathbf{A}) \\neq 0$, mit garantál a 3.28 Tétel a permutációs mátrixokra vonatkozóan?"},a:{en:"There exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ can be solved without row changes.",hu:"Létezik egy $\\mathbf{P}$ permutációs mátrix, amellyel a $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ sorváltás nélkül megoldható."}},{q:{en:"What happens if Gaussian elimination with partial pivoting is attempted on a singular matrix?",hu:"Mi történik, ha a Gauss-eliminációt részleges elforgatással kíséreljük meg egy szinguláris mátrixon?"},a:{en:"The process will eventually fail because at some step $k$, all elements in the column $k$ from the $k$-th row down will be zero.",hu:"A folyamat végül meghiúsul, mert a $k$ valamelyik lépésében a $k$ oszlop összes eleme a $k$-edik sortól lefelé nulla lesz."}},{q:{en:"In the 2D example $0.0002x_1 - 30.5x_2 = -60.99$ and $5.060x_1 - 1.05x_2 = 250.9$, why was the second variable $x_2$ less affected by the error than $x_1$?",hu:"A $0.0002x_1 - 30.5x_2 = -60.99$ és $5.060x_1 - 1.05x_2 = 250.9$ 2D-s példában miért volt a $x_2$ második változó kevésbé érintett a hiba által, mint a $x_1$?"},a:{en:"The error was introduced while calculating $x_1$ during back-substitution because it depended on the magnified rounding error from the elimination step.",hu:"A hiba a $x_1$ kiszámításakor keletkezett a visszahelyettesítés során, mert az az eliminációs lépésből származó felnagyított kerekítési hibától függött."}},{q:{en:"Cloze: In Gaussian elimination, the variable $x_k$ is eliminated from rows $i = \\dots$ in the $k$-th step.",hu:"Bezárás: Gauss-elimináció esetén a $x_k$ változó kikerül a $i = \\dots$ sorokból a $k$-edik lépésben."},a:{en:"$k+1, \\ldots, n$",hu:"$k+1, \\ldots, n$"}},{q:{en:"What is the value of the multiplier $l_{i1}$ in terms of matrix entries?",hu:"Mennyi a $l_{i1}$ szorzó értéke a mátrixbejegyzésekben?"},a:{en:"$l_{i1} = \\frac{a_{i1}}{a_{11}}$",hu:"$l_{i1} = \\frac{a_{i1}}{a_{11}}$"}},{q:{en:"Concept: Time Complexity",hu:"Koncepció: Idő komplexitás"},a:{en:"Definition: The measure of the number of operations required by an algorithm as a function of the input size $n$.",hu:"Definíció: Az algoritmus által igényelt műveletek számának mértéke a $n$ bemeneti méret függvényében."}},{q:{en:"What is the relationship between the determinant of a matrix and the pivot elements in Gaussian elimination without row swaps?",hu:"Mi a kapcsolat a mátrix determinánsa és a pivot elemek között sorcsere nélküli Gauss-eliminációban?"},a:{en:"The determinant is equal to the product of the pivot elements: $\\det(\\mathbf{A}) = a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}$.",hu:"A determináns egyenlő a forgáselemek szorzatával: $\\det(\\mathbf{A}) = a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}$."}},{q:{en:"What is the specific purpose of the $l$ and $m$ indices in complete pivoting?",hu:"Mi a konkrét célja a $l$ és $m$ indexeknek teljes elforgatásban?"},a:{en:"Index $l$ represents the row and $m$ represents the column of the largest available element to be moved to the pivot position.",hu:"A $l$ index a sort, a $m$ pedig a legnagyobb elérhető elem oszlopát jelöli, amelyet a forgási pozícióba kell mozgatni."}},{q:{en:"True or False: Gaussian elimination with partial pivoting always yields the exact solution in floating-point arithmetic.",hu:"Igaz vagy hamis: A Gauss-elimináció részleges elforgatással mindig a pontos megoldást adja a lebegőpontos aritmetikában."},a:{en:"False; it reduces rounding error but does not eliminate it entirely.",hu:"Hamis; csökkenti a kerekítési hibát, de nem szünteti meg teljesen."}},{q:{en:"Which matrix type is explicitly mentioned as being stable under Gaussian elimination without pivoting?",hu:"Melyik mátrixtípust említik kifejezetten stabilnak a Gauss-elimináció alatt, elfordulás nélkül?"},a:{en:"Diagonally dominant matrices (and symmetric positive definite matrices).",hu:"Diagonálisan domináns mátrixok (és szimmetrikus pozitív határozott mátrixok)."}},{q:{en:"What is the alternative name for 'partial pivoting' in Gaussian elimination?",hu:"Mi a „részleges elforgatás” alternatív neve a Gauss-eliminációban?"},a:{en:"Maximal column pivoting",hu:"Maximális oszlopforgatás"}},{q:{en:"In partial pivoting, from which set of elements in the $k$-th column is the pivot selected?",hu:"Részleges elforgatásnál a $k$-edik oszlop melyik elemkészletéből van kiválasztva a pivot?"},a:{en:"The elements in and under the main diagonal (from row $k$ to $n$).",hu:"Az elemek a főátlóban és alatta ($k$ sortól $n$-ig)."}},{q:{en:"In the $k$-th step of partial pivoting, what criteria determines the selection of the pivot row $l$?",hu:"A részleges elforgatás $k$-edik lépésében milyen kritériumok határozzák meg a $l$ forgássor kiválasztását?"},a:{en:"$|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\dots, n\\}$",hu:"$|a_{lk}| = \\max\\{|a_{ik}|: i = k, \\dots, n\\}$"}},{q:{en:"What physical action is performed once the pivot row $l$ is identified in partial pivoting?",hu:"Milyen fizikai műveletet hajtanak végre, ha a $l$ forgássort részleges elforgatásban azonosítják?"},a:{en:"The $k$-th and $l$-th rows are interchanged.",hu:"A $k$-edik és a $l$-edik sorok felcserélődnek."}},{q:{en:"According to the provided theorem, a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ can be solved by Gaussian elimination with partial pivoting if and only if $\\det(\\mathbf{A})$ is _____.",hu:"A megadott tétel szerint egy $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ lineáris rendszer akkor és csak akkor oldható meg Gauss-eliminációval részleges elforgatással, ha $\\det(\\mathbf{A})$ _____."},a:{en:"Non-zero ($\\neq 0$)",hu:"Nem nulla ($\\neq 0$)"}},{q:{en:"The invertibility of matrix $\\mathbf{A}$ is equivalent to the existence of a _____ solution for the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for all $\\mathbf{b}$.",hu:"A $\\mathbf{A}$ mátrix invertibilitása megegyezik egy _____ megoldás létezésével a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszerhez minden $\\mathbf{b}$ esetében."},a:{en:"Unique",hu:"Egyedülálló"}},{q:{en:"In the proof of the equivalence theorem, if a row change occurs in the $k$-th step, how does $\\det(\\mathbf{A}^{(k)})$ relate to $\\det(\\mathbf{A}^{(k-1)})$?",hu:"Az ekvivalenciatétel bizonyítása során, ha sorváltás történik a $k$-edik lépésben, hogyan viszonyul a $\\det(\\mathbf{A}^{(k)})$ a $\\det(\\mathbf{A}^{(k-1)})$-hez?"},a:{en:"$\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$",hu:"$\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$"}},{q:{en:"If no row change is needed during the $k$-th step of Gaussian elimination, what is the relationship between $\\det(\\mathbf{A}^{(k)})$ and $\\det(\\mathbf{A}^{(k-1)})$?",hu:"Ha a Gauss-elimináció $k$-edik lépése során nincs szükség sorváltásra, mi a kapcsolat a $\\det(\\mathbf{A}^{(k)})$ és a $\\det(\\mathbf{A}^{(k-1)})$ között?"},a:{en:"$\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$",hu:"$\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$"}},{q:{en:"If partial pivoting terminates at step $k$ because all $a_{ik}^{(k-1)} = 0$ for $i = k, \\dots, n$, what is the value of $\\det(\\mathbf{A})$?",hu:"Ha a részleges elforgatás a $k$ lépésnél véget ér, mert az összes $a_{ik}^{(k-1)} = 0$ $i = k, \\dots, n$ esetében, mi a $\\det(\\mathbf{A})$ értéke?"},a:{en:"Zero",hu:"Nulla"}},{q:{en:"Why is it numerically advantageous to move the largest magnitude element to the pivot position?",hu:"Miért előnyös számszerűen a legnagyobb magnitúdójú elemet elforgatni a forgási pozícióba?"},a:{en:"It minimizes rounding errors by ensuring the division factor is as small as possible.",hu:"Minimalizálja a kerekítési hibákat azáltal, hogy a lehető legkisebb osztási tényezőt biztosítja."}},{q:{en:"How does partial pivoting prevent algorithm failure when the diagonal element $a_{kk}$ is zero?",hu:"Hogyan akadályozza meg a részleges elforgatás az algoritmus meghibásodását, ha a $a_{kk}$ átlós elem nulla?"},a:{en:"It swaps the row with a lower row containing a non-zero element in that column.",hu:"Felcseréli a sort egy alsó sorral, amely nem nulla elemet tartalmaz az oszlopban."}},{q:{en:"In the provided $4 \\times 4$ matrix example, which two rows are interchanged in the very first step?",hu:"A megadott $4 \\times 4$ mátrix példában melyik két sort cseréljük fel a legelső lépésben?"},a:{en:"The first row and the third row.",hu:"Az első sor és a harmadik sor."}},{q:{en:"In the first step of the example matrix, why is the row beginning with $-3$ swapped to the top?",hu:"A példamátrix első lépésében miért van a $-3$ karakterekkel kezdődő sor a tetejére cserélve?"},a:{en:"The value $|-3|$ is the maximum absolute value in the first column.",hu:"A $|-3|$ érték a maximális abszolút érték az első oszlopban."}},{q:{en:"The effect of all row changes in partial pivoting can be represented by multiplying $\\mathbf{A}$ by a _____ matrix $\\mathbf{P}$.",hu:"Az összes sorváltoztatás hatását a részleges elforgatásban a $\\mathbf{A}$ és a _____ $\\mathbf{P}$ mátrix szorzásával lehet ábrázolni."},a:{en:"Permutation",hu:"Permutáció"}},{q:{en:"If $\\det(\\mathbf{A}) \\neq 0$, there exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ is solvable without _____.",hu:"Ha $\\det(\\mathbf{A}) \\neq 0$, akkor létezik egy $\\mathbf{P}$ permutációs mátrix, így a $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ _____ nélkül is megoldható."},a:{en:"Row changes (or further pivoting)",hu:"Sormódosítás (vagy további elforgatás)"}},{q:{en:"Why do humans often prefer using fractions when performing Gaussian elimination by hand?",hu:"Miért részesítik előnyben az emberek a frakciók használatát, amikor kézzel végzik a Gauss-eliminációt?"},a:{en:"Fractions allow for an exact solution without introducing rounding errors.",hu:"A törtek pontos megoldást tesznek lehetővé kerekítési hibák nélkül."}},{q:{en:"What is the main drawback of standard Gaussian elimination without pivoting when implemented on a computer?",hu:"Mi a fő hátránya az elfordulás nélküli standard Gauss-eliminációnak, amikor számítógépen implementálják?"},a:{en:"Small pivots can lead to large rounding errors that degrade the precision of the result.",hu:"A kis forgáspontok nagy kerekítési hibákhoz vezethetnek, amelyek rontják az eredmény pontosságát."}},{q:{en:"In a system of $n$ equations, what is the label of the coefficient matrix after the final step of Gaussian elimination?",hu:"$n$ egyenletrendszerben mi a címkéje az együtthatómátrixnak a Gauss-elimináció utolsó lépése után?"},a:{en:"$\\mathbf{A}^{(n-1)}$",hu:"$\\mathbf{A}^{(n-1)}$"}},{q:{en:"How is the final triangular system solved once Gaussian elimination is complete?",hu:"Hogyan oldható meg a végső háromszögrendszer, ha a Gauss-elimináció befejeződött?"},a:{en:"Backward substitution",hu:"Visszafelé csere"}},{q:{en:"If the Gaussian elimination process reaches a state where the bottom-right submatrix has a column of zeros, what does this indicate about the system's solvability?",hu:"Ha a Gauss-eliminációs folyamat elér egy olyan állapotot, ahol a jobb alsó részmátrix nullákból álló oszlopot tartalmaz, mit jelez ez a rendszer megoldhatóságáról?"},a:{en:"The system cannot be solved uniquely because the determinant is zero.",hu:"A rendszer nem oldható meg egyedileg, mert a determináns nulla."}},{q:{en:"In the second elimination step of the example, why are the second and fourth rows interchanged?",hu:"A példa második eliminációs lépésében miért van felcserélve a második és a negyedik sor?"},a:{en:"The element $\\frac{14}{3}$ in the fourth row is larger in magnitude than $-\\frac{1}{3}$ in the second row.",hu:"A negyedik sorban lévő $\\frac{14}{3}$ elem nagysága nagyobb, mint a második sorban lévő $-\\frac{1}{3}$."}},{q:{en:"According to the transcript, how does the numerical result from partial pivoting relate to the exact solution?",hu:"Az átirat szerint a részleges elforgatásból származó számszerű eredmény hogyan viszonyul a pontos megoldáshoz?"},a:{en:"It is an approximation due to rounding at each step to a certain precision.",hu:"Ez egy közelítés az egyes lépéseknél bizonyos pontosságig történő kerekítés miatt."}},{q:{en:"Concept: Pivot element",hu:"Koncepció: Pivot elem"},a:{en:"Definition: The element in the diagonal position used to eliminate coefficients in the rows below it.",hu:"Definíció: Az átlós helyzetben lévő elem az alatta lévő sorok együtthatóinak kiküszöbölésére szolgál."}},{q:{en:"True or False: Partial pivoting requires searching the entire remaining submatrix for the largest element.",hu:"Igaz vagy hamis: A részleges elforgatáshoz a teljes fennmaradó almátrixban kell keresni a legnagyobb elemet."},a:{en:"False (That is complete pivoting; partial pivoting only searches the current column).",hu:"Hamis (Ez teljes elforgatás; a részleges elforgatás csak az aktuális oszlopban keres)."}},{q:{en:"If a matrix is invertible, what does the theorem guarantee about Gaussian elimination with partial pivoting?",hu:"Ha egy mátrix invertálható, mit garantál a tétel a Gauss-eliminációról részleges elforgatással?"},a:{en:"The elimination process can be successfully performed to completion.",hu:"Az eltávolítási folyamat sikeresen végrehajtható a befejezésig."}},{q:{en:"How many row interchanges are required if the largest magnitude element is already in the $a_{kk}$ position?",hu:"Hány sorcserére van szükség, ha a legnagyobb nagyságú elem már a $a_{kk}$ pozícióban van?"},a:{en:"Zero",hu:"Nulla"}},{q:{en:"Formula: The value of the determinant of $\\mathbf{A}$ in terms of the final upper triangular matrix $\\mathbf{A}^{(n-1)}$ after $m$ row swaps.",hu:"Képlet: A $\\mathbf{A}$ determináns értéke a $\\mathbf{A}^{(n-1)}$ végső felső háromszögmátrixban $m$ sorcserék után."},a:{en:"$\\det(\\mathbf{A}) = (-1)^m \\det(\\mathbf{A}^{(n-1)})$",hu:"$\\det(\\mathbf{A}) = (-1)^m \\det(\\mathbf{A}^{(n-1)})$"}},{q:{en:"What is the value of $\\det(\\mathbf{A}^{(n-1)})$ if the triangular system is solvable?",hu:"Mennyi a $\\det(\\mathbf{A}^{(n-1)})$ értéke, ha a háromszögrendszer megoldható?"},a:{en:"It is non-zero.",hu:"Ez nem nulla."}},{q:{en:"In the context of the proof, what property of determinants allows $\\det(\\mathbf{A}^{(k)})$ to equal $-\\det(\\mathbf{A}^{(k-1)})$?",hu:"A bizonyítással összefüggésben a determinánsok milyen tulajdonsága teszi lehetővé, hogy $\\det(\\mathbf{A}^{(k)})$ egyenlő legyen $-\\det(\\mathbf{A}^{(k-1)})$-vel?"},a:{en:"Swapping two rows of a matrix reverses the sign of its determinant.",hu:"Egy mátrix két sorának felcserélése megfordítja a determinánsának előjelét."}},{q:{en:"If a matrix $\\mathbf{A}$ has $\\det(\\mathbf{A}) = 0$, what will eventually happen during partial pivoting?",hu:"Ha egy $\\mathbf{A}$ mátrixban van $\\det(\\mathbf{A}) = 0$, mi fog végül történni a részleges elforgatás során?"},a:{en:"A step will be reached where all elements in the current column on and below the diagonal are zero.",hu:"El fog érni egy olyan lépés, ahol az aktuális oszlopban az átlón és alatta lévő összes elem nulla."}},{q:{en:"What is the first row of the final upper triangular matrix in the provided example?",hu:"Mi a végső felső háromszögmátrix első sora a megadott példában?"},a:{en:"$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\end{pmatrix}$",hu:"$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\end{pmatrix}$"}},{q:{en:"In the $4 \\times 4$ example, what is the final value found for $x_4$?",hu:"A $4 \\times 4$ példában mi a $x_4$ végső értéke?"},a:{en:"$-1$",hu:"$-1$"}},{q:{en:"Step: After finding the pivot and swapping rows, what is the next procedural step in the elimination?",hu:"Lépés: A pivot megtalálása és a sorok felcserélése után mi a következő eljárási lépés az eltávolítás során?"},a:{en:"Subtracting multiples of the pivot row from the rows below to create zeros in the current column.",hu:"A pivot sor többszöröseinek kivonása az alábbi sorokból, hogy nullákat hozzon létre az aktuális oszlopban."}},{q:{en:"How is the multiplier calculated for row $i$ in the $k$-th step of elimination?",hu:"Hogyan számítják ki a $i$ sor szorzóját a $k$-edik eliminációs lépésben?"},a:{en:"By dividing the element to be eliminated ($a_{ik}$) by the pivot element ($a_{kk}$).",hu:"A kiküszöbölendő elem ($a_{ik}$) elosztása a forgóelemmel ($a_{kk}$)."}},{q:{en:"Why does dividing by a 'largest possible number' during multiplier calculation help with rounding?",hu:"Miért segíti a kerekítést a szorzószámítás során a „lehető legnagyobb számmal” való osztás?"},a:{en:"It prevents the multipliers from becoming excessively large, which would amplify errors in subsequent subtractions.",hu:"Megakadályozza, hogy a szorzók túl nagyra nőjenek, ami felerősítené a későbbi kivonások hibáit."}},{q:{en:"In the example, the solution for $x_1$ is _____.",hu:"A példában a $x_1$ megoldása _____."},a:{en:"$4$",hu:"$4$"}},{q:{en:"What does the Hungarian text suggest about the necessity of partial pivoting?",hu:"Mit sugall a magyar szöveg a részleges elforgatás szükségességéről?"},a:{en:"It is sometimes necessary to perform the calculation at all, and often advisable to reduce errors.",hu:"Néha egyáltalán el kell végezni a számítást, és gyakran tanácsos csökkenteni a hibákat."}},{q:{en:"If partial pivoting is used, is it possible to have a zero pivot if the matrix is non-singular?",hu:"Ha részleges elforgatást használunk, lehetséges-e nulla elfordulás, ha a mátrix nem szinguláris?"},a:{en:"No, if the matrix is non-singular, at least one element in the column must be non-zero.",hu:"Nem, ha a mátrix nem szinguláris, akkor az oszlopban legalább egy elemnek nullától eltérőnek kell lennie."}},{q:{en:"The determinant of an upper triangular matrix is the _____ of its diagonal elements.",hu:"Egy felső háromszögmátrix determinánsa az átlós elemeinek _____."},a:{en:"Product",hu:"Termék"}},{q:{en:"What is the result for $x_3$ in the $4 \\times 4$ example?",hu:"Mi a $x_3$ eredménye a $4 \\times 4$ példában?"},a:{en:"$2$",hu:"$2$"}},{q:{en:"In the $k$-th step, the pivot search is restricted to rows $i$ where $i \\ge$ _____.",hu:"A $k$-edik lépésben a pivot keresés a $i$ sorokra korlátozódik, ahol a $i \\ge$ _____."},a:{en:"$k$",hu:"$k$"}},{q:{en:"The process of moving the largest magnitude element to the diagonal is intended to avoid dividing by _____ numbers.",hu:"A legnagyobb magnitúdójú elem átlóba mozgatásának folyamata során elkerülhető a _____ számokkal való osztás."},a:{en:"Small (or zero)",hu:"Kicsi (vagy nulla)"}},{q:{en:"True or False: Partial pivoting always results in a positive determinant.",hu:"Igaz vagy hamis: A részleges elforgatás mindig pozitív determinánst eredményez."},a:{en:"False (The sign depends on the number of row swaps and the final diagonal products).",hu:"Hamis (Az előjel a sorcserék számától és a végső átlós szorzatoktól függ)."}},{q:{en:"In the third step of the example, which rows are swapped?",hu:"A példa harmadik lépésében melyik sorok cserélődnek fel?"},a:{en:"The third and fourth rows.",hu:"A harmadik és negyedik sor."}},{q:{en:"What is the second variable solved for in the backward substitution of the example?",hu:"Mire van megoldva a második változó a példa visszafelé történő helyettesítésében?"},a:{en:"$x_3$",hu:"$x_3$"}},{q:{en:"Term: Permutation Matrix",hu:"Fogalom: Permutációs mátrix"},a:{en:"Definition: An identity matrix with its rows reordered, used to perform row exchanges via matrix multiplication.",hu:"Definíció: Egy identitásmátrix sorait átrendezve, mátrixszorzás útján történő sorcserére szolgál."}},{q:{en:"If $\\mathbf{A}$ is invertible, the system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ has _____ solution(s).",hu:"Ha a $\\mathbf{A}$ invertálható, a $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ rendszernek _____ megoldása van."},a:{en:"Exactly one (or a unique)",hu:"Pontosan egy (vagy egyedi)"}},{q:{en:"In the provided example, the final pivot element in the fourth row after elimination is _____.",hu:"A bemutatott példában az utolsó pivot elem a negyedik sorban az elimináció után _____."},a:{en:"$-\\frac{143}{24}$",hu:"$-\\frac{143}{24}$"}},{q:{en:"What happens to the augmented part of the matrix (the $\\mathbf{b}$ vector) during a row swap?",hu:"Mi történik a mátrix kiterjesztett részével (a $\\mathbf{b}$ vektorral) sorcsere során?"},a:{en:"The corresponding elements in the $\\mathbf{b}$ vector are swapped along with the rows.",hu:"A $\\mathbf{b}$ vektor megfelelő elemei a sorokkal együtt felcserélődnek."}},{q:{en:"What is the value of $x_2$ in the example problem?",hu:"Mi a $x_2$ értéke a példafeladatban?"},a:{en:"$3$",hu:"$3$"}},{q:{en:"In the proof, why is $\\det(\\mathbf{A}^{(n-1)})$ non-zero if (i) holds?",hu:"A bizonyításban miért nem nulla a $\\det(\\mathbf{A}^{(n-1)})$, ha az (i) teljesül?"},a:{en:"Because the assumption is that the elimination can be completed to form a solvable triangular system.",hu:"Mert az a feltevés, hogy az elimináció befejezhető egy megoldható háromszögrendszer kialakításához."}},{q:{en:"Under what condition does the determinant of a matrix equal zero based on its structure during elimination?",hu:"Milyen feltétel mellett egyenlő egy mátrix determinánsa nullával a szerkezete alapján az elimináció során?"},a:{en:"When a column (from the diagonal down) consists entirely of zeros.",hu:"Amikor egy oszlop (átlótól lefelé) teljes egészében nullákból áll."}},{q:{en:"Why is the row swap done *before* the elimination step?",hu:"Miért történik a sorcsere *előtt* az eliminációs lépés?"},a:{en:"To ensure the current step uses the most stable pivot available for the entire column.",hu:"Annak biztosítása érdekében, hogy az aktuális lépés a lehető legstabilabb forgáspontot használja a teljes oszlophoz."}},{q:{en:"How does the transcript characterize the result of Gaussian elimination when $a_{kk} = 0$ and no swaps are possible?",hu:"Hogyan jellemzi az átirat a Gauss-elimináció eredményét, amikor a $a_{kk} = 0$ és nincs csere?"},a:{en:"The algorithm terminates because it cannot continue without a non-zero pivot.",hu:"Az algoritmus leáll, mert nem tud folytatódni nullától eltérő forgáspont nélkül."}},{q:{en:"In the Hungarian text, what is the '3.26. tétel' (Theorem 3.26) equivalent to in the English source?",hu:"A magyar szövegben mi a '3.26. tétel' (3.26. tétel) megfelelője az angol forrásban?"},a:{en:"The theorem stating the equivalence of system solvability, non-zero determinant, and invertibility.",hu:"A rendszer megoldhatósága, a nullától eltérő determináns és az invertálhatóság ekvivalenciáját kimondó tétel."}},{q:{en:"In Gaussian elimination, what is another name for 'complete pivoting'?",hu:"A Gauss-eliminációban mi a másik neve a „teljes elfordulásnak”?"},a:{en:"Maximal pivoting.",hu:"Maximális elfordulás."}},{q:{en:"At the $k$-th step of complete pivoting, the indices $l$ and $m$ are chosen such that $|a_{lm}|$ is the maximum of the absolute values in which range?",hu:"A teljes elforgatás $k$-edik lépésénél a $l$ és $m$ indexeket úgy választjuk meg, hogy a $|a_{lm}|$ melyik tartományban legyen az abszolút értékek maximuma?"},a:{en:"The range where $i = k, \\ldots, n$ and $j = k, \\ldots, n$.",hu:"A tartomány, ahol a $i = k, \\ldots, n$ és a $j = k, \\ldots, n$."}},{q:{en:"What two types of interchanges are performed during a step of Gaussian elimination with complete pivoting?",hu:"Milyen két típusú cserét hajtanak végre a Gauss-elimináció egy lépése során teljes elforgatással?"},a:{en:"The interchange of the $k$-th and $l$-th rows and the $k$-th and $m$-th columns.",hu:"A $k$-edik és a $l$-edik sorok, valamint a $k$-edik és a $m$-edik oszlopok felcserélése."}},{q:{en:"How does interchanging the $k$-th and $m$-th columns affect the linear system variables?",hu:"Hogyan befolyásolja a $k$-edik és a $m$-edik oszlopok felcserélése a lineáris rendszerváltozókat?"},a:{en:"It changes which column corresponds to which unknown variable ($x_1, \\ldots, x_n$).",hu:"Megváltoztatja, hogy melyik oszlop melyik ismeretlen változónak felel meg ($x_1, \\ldots, x_n$)."}},{q:{en:"What is the primary disadvantage of complete pivoting compared to partial pivoting?",hu:"Mi a teljes elforgatás elsődleges hátránya a részleges elforgatáshoz képest?"},a:{en:"It requires significantly more comparisons to find the maximum element, making the method slower.",hu:"A maximális elem megtalálása lényegesen több összehasonlítást igényel, így a módszer lassabb."}},{q:{en:"When solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ with complete pivoting, how is the final value of the variables determined?",hu:"A $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszer teljes elforgatással történő megoldásánál hogyan határozzák meg a változók végső értékét?"},a:{en:"By solving the resulting triangular system while accounting for all column (variable) swaps.",hu:"Az így kapott háromszögrendszer megoldásával az összes oszlop (változó) swap elszámolása mellett."}},{q:{en:"A square matrix $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ is called row diagonally dominant if for every $i$, $|a_{ii}| >$ _____.",hu:"A $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ négyzetmátrixot átlósan dominánsnak nevezzük, ha minden $i$, $|a_{ii}| >$ _____ esetén."},a:{en:"$\\sum_{j=1, j \\ne i}^{n} |a_{ij}|$.",hu:"$\\sum_{j=1, j \\ne i}^{n} |a_{ij}|$."}},{q:{en:"According to the provided theorem, if a matrix $\\mathbf{A}$ is diagonally dominant, what property does it necessarily have regarding its inverse?",hu:"A megadott tétel szerint, ha egy $\\mathbf{A}$ mátrix átlósan domináns, milyen tulajdonsága van szükségszerűen az inverzére nézve?"},a:{en:"The matrix $\\mathbf{A}$ is invertible.",hu:"A $\\mathbf{A}$ mátrix megfordítható."}},{q:{en:"In the proof of invertibility for diagonally dominant matrices, what assumption is made about the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$?",hu:"Az átlósan domináns mátrixok invertálhatóságának bizonyítása során milyen feltevés történik a $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ lineáris rendszerrel kapcsolatban?"},a:{en:"It is assumed to have a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$ to reach a contradiction.",hu:"Feltételezzük, hogy van egy nemtriviális $\\mathbf{x} \\ne \\mathbf{0}$ megoldása az ellentmondás eléréséhez."}},{q:{en:"If a matrix is row diagonally dominant, can Gaussian elimination be performed without pivoting?",hu:"Ha egy mátrix sorátlósan domináns, elvégezhető-e a Gauss-elimináció elfordulás nélkül?"},a:{en:"Yes, it can be performed without pivoting.",hu:"Igen, elforgatás nélkül is végrehajtható."}},{q:{en:"What is the numerical stability status of Gaussian elimination when applied to a diagonally dominant matrix without pivoting?",hu:"Mi a Gauss-elimináció numerikus stabilitási állapota, ha egy diagonálisan domináns mátrixra alkalmazzuk elfordulás nélkül?"},a:{en:"The method is stable with respect to rounding errors.",hu:"A módszer stabil a kerekítési hibák tekintetében."}},{q:{en:"Theorem 3.32 states that if $\\mathbf{A}$ is diagonally dominant, every intermediate matrix $\\mathbf{A}^{(k)}$ in Gaussian elimination is also _____.",hu:"A 3.32 tétel kimondja, hogy ha a $\\mathbf{A}$ átlósan domináns, akkor a Gauss-eliminációban minden $\\mathbf{A}^{(k)}$ köztes mátrix is ​​_____."},a:{en:"Diagonally dominant.",hu:"Átlósan domináns."}},{q:{en:"A square matrix is positive definite if it is _____ and $x^T A x > 0$ for all $x \\ne 0$.",hu:"Egy négyzetmátrix pozitív határozott, ha _____ és $x^T A x > 0$ minden $x \\ne 0$ esetén."},a:{en:"Symmetric.",hu:"Szimmetrikus."}},{q:{en:"Define a 'positive semi-definite' matrix based on the quadratic form $x^T A x$.",hu:"Határozzon meg egy „pozitív félig határozott” mátrixot a $x^T A x$ másodfokú alakzat alapján."},a:{en:"A symmetric matrix where $x^T A x \\ge 0$ for all $x$.",hu:"Egy szimmetrikus mátrix, ahol $x^T A x \\ge 0$ minden $x$-hez."}},{q:{en:"What condition involving 'principal minors' determines if a symmetric matrix is positive definite?",hu:"Milyen feltétel határozza meg, hogy egy szimmetrikus mátrix pozitív határozott?"},a:{en:"All of its upper left minors (principal minors) must have a positive determinant.",hu:"Minden bal felső kiskorúnak (fő kiskorúnak) pozitív determinánssal kell rendelkeznie."}},{q:{en:"If a symmetric matrix $\\mathbf{A}$ is positive definite, what is guaranteed about the pivot elements during Gaussian elimination without pivoting?",hu:"Ha egy $\\mathbf{A}$ szimmetrikus mátrix pozitív definit, mi garantált a pivot elemekre a Gauss-elimináció során elfordulás nélkül?"},a:{en:"The pivot elements are all positive.",hu:"A forgóelemek mind pozitívak."}},{q:{en:"Gaussian elimination on a symmetric positive definite matrix without pivoting is stable with respect to _____.",hu:"A Gauss-elimináció szimmetrikus pozitív határozott mátrixon elfordulás nélkül stabil _____-hoz képest."},a:{en:"Rounding errors.",hu:"Kerekítési hibák."}},{q:{en:"What is the purpose of 'row scaling' (sorkiegyenlítés) in numerical linear algebra?",hu:"Mi a sorkiegyenlítés célja a numerikus lineáris algebrában?"},a:{en:"To equalize the magnitudes of coefficients to reduce rounding errors.",hu:"Az együtthatók nagyságának kiegyenlítése a kerekítési hibák csökkentése érdekében."}},{q:{en:"In the context of row scaling, what does the matrix $\\mathbf{D} = \\text{diag}(d_1, \\ldots, d_n)$ represent?",hu:"A sorméretezéssel összefüggésben mit jelent a $\\mathbf{D} = \\text{diag}(d_1, \\ldots, d_n)$ mátrix?"},a:{en:"A diagonal matrix where each $d_i$ is a non-zero multiplier for the $i$-th equation.",hu:"Egy átlós mátrix, ahol minden $d_i$ a $i$-edik egyenlet nullától eltérő szorzója."}},{q:{en:"According to the strategy for row scaling, what is a common choice for $s_i$ to normalize coefficients?",hu:"A sorskálázási stratégia szerint mi a gyakori választás a $s_i$ számára az együtthatók normalizálására?"},a:{en:"$s_i = \\max_{1 \\le j \\le n} |a_{ij}|$.",hu:"$s_i = \\max_{1 \\le j \\le n} |a_{ij}|$."}},{q:{en:"To avoid introducing new rounding errors during row scaling, what specific values should the multipliers $d_i$ take?",hu:"Milyen konkrét értékeket kell felvenniük a $d_i$ szorzóknak, hogy elkerüljék az új kerekítési hibákat a sorméretezés során?"},a:{en:"They should be powers of the computer's number representation base $\\beta$.",hu:"Ezeknek a számítógép $\\beta$ számábrázolási alapjának hatványainak kell lenniük."}},{q:{en:"What is 'implicit row scaling' in Gaussian elimination?",hu:"Mit jelent az „implicit sorskálázás” a Gauss-eliminációban?"},a:{en:"A method where scale factors (weights) are used only to select pivots, without actually scaling the matrix elements.",hu:"Olyan módszer, ahol a skálafaktorokat (súlyokat) csak a pivotok kiválasztására használják, a mátrixelemek tényleges méretezése nélkül."}},{q:{en:"According to Theorem 3.30, if row scaling does not change the pivot selections, how do the numerical solutions of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ and $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ compare?",hu:"A 3.30. Tétel szerint, ha a sorméretezés nem változtatja meg a pivot-kiválasztást, hogyan viszonyulnak a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ és $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ numerikus megoldásai?"},a:{en:"They will be exactly the same.",hu:"Pontosan ugyanazok lesznek."}},{q:{en:"In Algorithm 3.31, how is the pivot row index $l$ chosen using implicit scaling?",hu:"Hogyan történik a 3.31-es algoritmusban a $l$ pivot row index kiválasztása implicit skálázással?"},a:{en:"By finding the index $l$ that maximizes the ratio $\\frac{|a_{ik}|}{s_i}$ for $k \\le i \\le n$.",hu:"Ha megtalálja a $l$ indexet, amely maximalizálja a $\\frac{|a_{ik}|}{s_i}$ arányt a $k \\le i \\le n$ esetében."}},{q:{en:"Why might a programmer use a pointer vector $m[i]$ to handle row swaps instead of moving actual matrix rows?",hu:"Miért használhat egy programozó egy $m[i]$ mutatóvektort a sorcserék kezelésére, ahelyett, hogy tényleges mátrixsorokat mozgatna?"},a:{en:"To reduce the number of operations, as swapping elements in a small vector is faster than swapping entire matrix rows.",hu:"A műveletek számának csökkentése érdekében, mivel az elemek felcserélése egy kis vektorban gyorsabb, mint a teljes mátrixsorok felcserélése."}},{q:{en:"If $m[i]$ is used as a row index pointer vector, how is the matrix element $a_{ij}$ accessed?",hu:"Ha a $m[i]$-t sorindexmutató-vektorként használjuk, hogyan érhető el a $a_{ij}$ mátrixelem?"},a:{en:"As $a[m[i], j]$.",hu:"Mint $a[m[i], j]$."}},{q:{en:"The proof for the invertibility of diagonally dominant matrices utilizes the _____ inequality.",hu:"Az átlósan domináns mátrixok invertálhatóságának bizonyítása a _____ egyenlőtlenséget használja fel."},a:{en:"Triangle.",hu:"Háromszög."}},{q:{en:"What is the requirement for a matrix to be 'negative definite'?",hu:"Mi a követelmény, hogy egy mátrix „negatív határozott” legyen?"},a:{en:"It must be symmetric and $x^T A x < 0$ for all $x \\ne 0$.",hu:"Szimmetrikusnak kell lennie, és minden $x \\ne 0$ esetében $x^T A x < 0$."}},{q:{en:"In complete pivoting, if the maximum absolute value is located at $a_{lm}$, which column swap is performed at step $k$?",hu:"Teljes elforgatás esetén, ha a maximális abszolút érték a $a_{lm}$ ponton található, melyik oszlopcsere történik a $k$ lépésben?"},a:{en:"The $k$-th column is swapped with the $m$-th column.",hu:"A $k$-edik oszlop fel van cserélve a $m$-edik oszlopra."}},{q:{en:"Is it possible for Gaussian elimination on a positive definite matrix to result in a non-positive pivot element?",hu:"Lehetséges, hogy a Gauss-elimináció pozitív határozott mátrixon nem pozitív pivot elemet eredményez?"},a:{en:"No, if the matrix is positive definite, the pivots will always be positive.",hu:"Nem, ha a mátrix pozitív határozott, a pivotok mindig pozitívak lesznek."}},{q:{en:"In Algorithm 3.31, what value does $s_i$ store after the weights calculation loop?",hu:"A 3.31-es algoritmusban milyen értéket tárol a $s_i$ a súlyszámítási ciklus után?"},a:{en:"The maximum absolute value found in row $i$ of the coefficient matrix.",hu:"Az együtthatómátrix $i$ sorában található maximális abszolút érték."}},{q:{en:"What does the expression $l_{ik} \\leftarrow a_{ik}/a_{kk}$ calculate in the Gaussian elimination algorithm?",hu:"Mit számít ki a $l_{ik} \\leftarrow a_{ik}/a_{kk}$ kifejezés a Gauss-eliminációs algoritmusban?"},a:{en:"The multiplier used to eliminate the element in the $i$-th row and $k$-th column.",hu:"A $i$-edik sor és a $k$-adik oszlop elemének kiküszöbölésére használt szorzó."}},{q:{en:"Concept: Principal Minor.",hu:"Koncepció: fő-moll."},a:{en:"Definition: The determinant of a sub-matrix formed by the first $i$ rows and first $i$ columns. Example: $\\det(a_{11})$ is the first principal minor.",hu:"Definíció: Az első $i$ sorok és első $i$ oszlopok által alkotott almátrix determinánsa. Példa: A $\\det(a_{11})$ az első fő moll."}},{q:{en:"What is the effect of significant magnitude differences in matrix coefficients on numerical calculations?",hu:"Milyen hatással vannak a mátrixegyütthatók jelentős nagyságrendi különbségei a numerikus számításokra?"},a:{en:"The rounding error may increase during the calculation.",hu:"A kerekítési hiba a számítás során növekedhet."}},{q:{en:"If a matrix is symmetric, what property allows checking for positive definiteness using only determinants?",hu:"Ha egy mátrix szimmetrikus, milyen tulajdonság teszi lehetővé a pozitív meghatározottság ellenőrzését csak determinánsok használatával?"},a:{en:"Sylvester's criterion (the requirement that all principal minors be positive).",hu:"Sylvester-kritérium (az a követelmény, hogy minden fő kiskorú pozitív legyen)."}},{q:{en:"Why is the base $\\beta$ used in scaling (e.g., $b_{ij} := a_{ij}/\\beta^{r_i}$)?",hu:"Miért használják az alap $\\beta$-t a méretezéshez (pl. $b_{ij}:= a_{ij}/\\beta^{r_i}$)?"},a:{en:"Because division by the base in floating-point arithmetic does not introduce rounding errors.",hu:"Mivel a bázissal való osztás a lebegőpontos aritmetikában nem vezet kerekítési hibákhoz."}},{q:{en:"How does the 'visszahelyettesítés' (back-substitution) step in Algorithm 3.31 find the value of $x_i$?",hu:"Hogyan találja meg a 'visszahelyettesítés' lépés a 3.31-es algoritmusban a $x_i$ értékét?"},a:{en:"By subtracting the sum of known variable products from the constant term and dividing by the diagonal coefficient $a_{ii}$.",hu:"Az ismert változószorzatok összegének kivonásával a konstans tagból, és elosztva a $a_{ii}$ átló együtthatóval."}},{q:{en:"In the complete pivoting example, why was the value $4$ chosen as the first pivot?",hu:"A teljes elforgatási példában miért a $4$ értéket választották első pivotnak?"},a:{en:"Because $|4|$ was the maximum absolute value among all coefficients in the $4 \\times 4$ system.",hu:"Mivel a $|4|$ volt a maximális abszolút érték az összes együttható között a $4 \\times 4$ rendszerben."}},{q:{en:"Under what condition is complete pivoting not strictly necessary for numerical stability?",hu:"Milyen feltételek mellett nem feltétlenül szükséges a teljes forgás a numerikus stabilitáshoz?"},a:{en:"When the matrix is row diagonally dominant or symmetric positive definite.",hu:"Ha a mátrix sorátlósan domináns vagy szimmetrikus pozitív határozott."}},{q:{en:"What does $x^T A x$ represent in the context of defining matrix definiteness?",hu:"Mit jelent a $x^T A x$ a mátrix meghatározottságának meghatározásával összefüggésben?"},a:{en:"A quadratic form.",hu:"Kvadratikus forma."}},{q:{en:"True or False: Row diagonal dominance implies that $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$.",hu:"Igaz vagy hamis: A sorátlós dominancia azt jelenti, hogy a $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$."},a:{en:"False; the definition requires a strict inequality ($>$).",hu:"Hamis; a definíció szigorú egyenlőtlenséget igényel ($>$)."}},{q:{en:"What is the index range for calculating the sum in the row diagonal dominance definition?",hu:"Mi az indextartomány az összeg kiszámításához a sordiagonális dominancia definícióban?"},a:{en:"$j = 1, \\ldots, n$ such that $j \\ne i$.",hu:"$j = 1, \\ldots, n$ úgy, hogy a $j \\ne i$."}},{q:{en:"If a matrix $\\mathbf{A}$ is not row diagonally dominant, does it necessarily mean it is not invertible?",hu:"Ha egy $\\mathbf{A}$ mátrix nem domináns a sor átlósan, akkor ez szükségszerűen azt jelenti, hogy nem invertálható?"},a:{en:"No, diagonal dominance is a sufficient but not necessary condition for invertibility.",hu:"Nem, az átlós dominancia elégséges, de nem szükséges feltétele a megfordíthatóságnak."}},{q:{en:"At step $k$ of Gaussian elimination, row $l$ is the row that contains the _____ absolute value element among candidate pivot rows.",hu:"A Gauss-elimináció $k$ lépésében a $l$ sor az a sor, amely a _____ abszolút érték elemet tartalmazza a jelölt pivot sorok között."},a:{en:"Maximum.",hu:"Maximális."}},{q:{en:"How many total determinants must be positive to confirm a $5 \\times 5$ matrix is positive definite?",hu:"Hány összes determinánsnak kell pozitívnak lennie ahhoz, hogy megerősítsük, hogy a $5 \\times 5$ mátrix pozitív határozott?"},a:{en:"Five determinants (the $1\\times1, 2\\times2, 3\\times3, 4\\times4,$ and $5\\times5$ upper-left minors).",hu:"Öt meghatározó tényező (a $1\\times1, 2\\times2, 3\\times3, 4\\times4,$ és $5\\times5$ bal felső kiskorú)."}},{q:{en:"In the Hungarian text, what is the term used for 'complete pivoting'?",hu:"Mi a magyar szövegben a „teljes elforgatás” kifejezés?"},a:{en:"Teljes főelemkiválasztás.",hu:"Teljes főelemkiválasztás."}},{q:{en:"In the Hungarian text, 'sorkiegyenlítés' translates to what English numerical concept?",hu:"A magyar szövegben a 'sorkiegyenlítés' milyen angol numerikus fogalmat jelent?"},a:{en:"Row equilibration or row scaling.",hu:"Sorkiegyenlítés vagy sorskálázás."}},{q:{en:"What happens to the variable labels at the bottom of the matrix in the example when columns 1 and 4 are swapped?",hu:"Mi történik a mátrix alján lévő változócímkékkel a példában, ha az 1. és 4. oszlop felcserélődik?"},a:{en:"The label $x_1$ moves to column 4, and $x_4$ moves to column 1.",hu:"A $x_1$ címke a 4. oszlopba, a $x_4$ pedig az 1. oszlopba kerül."}},{q:{en:"What logic error is avoided by checking $|x_k| = \\max\\{|x_i|\\}$ in the diagonal dominance invertibility proof?",hu:"Milyen logikai hibát lehet elkerülni a $|x_k| = \\max\\{|x_i|\\}$ ellenőrzésével az átlós dominancia megfordíthatósági bizonyításában?"},a:{en:"It ensures $x_k \\ne 0$, allowing for the division necessary to reach the contradiction.",hu:"Ez biztosítja a $x_k \\ne 0$-t, lehetővé téve az ellentmondás eléréséhez szükséges felosztást."}},{q:{en:"Why is the multiplier in Gaussian elimination restricted to $k+1 \\le i \\le n$?",hu:"Miért korlátozódik a Gauss-elimináció szorzója $k+1 \\le i \\le n$-re?"},a:{en:"Because the purpose is to eliminate elements below the pivot position in the $k$-th column.",hu:"Mert a cél az, hogy a $k$-edik oszlop forgáspontja alatti elemeket kiküszöböljük."}},{q:{en:"In Algorithm 3.31, what constitutes the 'INPUT'?",hu:"A 3.31-es algoritmusban mi képezi az „INPUT”-ot?"},a:{en:"The augmented coefficient matrix $a_{ij}$ for $i=1 \\ldots n$ and $j=1 \\ldots n+1$.",hu:"A $a_{ij}$ kiterjesztett együttható mátrix a $i=1 \\ldots n$ és $j=1 \\ldots n+1$ számára."}},{q:{en:"The phrase 'stable with respect to rounding errors' implies that _____.",hu:"A „kerekítési hibák tekintetében stabil” kifejezés azt jelenti, hogy _____."},a:{en:"Small errors introduced by computer precision do not grow large enough to invalidate the result.",hu:"A számítógépes precizitás által okozott kis hibák nem nőnek elég nagyra ahhoz, hogy érvénytelenítsék az eredményt."}},{q:{en:"According to the transcript, how many options were there in the example for the first pivot if the max value was $4$?",hu:"Az átirat szerint hány opció volt a példában az első pivotnál, ha a max érték $4$ volt?"},a:{en:"Three options (at different positions in the matrix).",hu:"Három lehetőség (a mátrix különböző helyein)."}},{q:{en:"When a matrix is positive definite, the value $x^T A x$ is always _____.",hu:"Ha egy mátrix pozitív határozott, a $x^T A x$ érték mindig _____."},a:{en:"Positive.",hu:"Pozitív."}},{q:{en:"What is the summation formula used to calculate $x^T A x$?",hu:"Mi a $x^T A x$ kiszámításához használt összegzési képlet?"},a:{en:"$\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$.",hu:"$\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$."}},{q:{en:"Formula: Pivot scaling ratio in implicit partial pivoting.",hu:"Képlet: Pivot skálázási arány implicit részleges elforgatásban."},a:{en:"$\\frac{|a_{lk}|}{s_l} = \\max_{k \\le i \\le n} \\frac{|a_{ik}|}{s_i}$.",hu:"$\\frac{|a_{lk}|}{s_l} = \\max_{k \\le i \\le n} \\frac{|a_{ik}|}{s_i}$."}},{q:{en:"If a matrix is symmetric and all its eigenvalues are positive, it is likely to be _____.",hu:"Ha egy mátrix szimmetrikus, és minden sajátértéke pozitív, akkor valószínűleg _____."},a:{en:"Positive definite.",hu:"Pozitív határozott."}},{q:{en:"What is the primary motivation for using partial or complete pivoting during elimination?",hu:"Mi az elsődleges motiváció a részleges vagy teljes elforgatás használatára az elimináció során?"},a:{en:"To prevent division by zero or by very small numbers, which increases rounding error.",hu:"A nullával vagy nagyon kis számokkal való osztás elkerülése érdekében, ami növeli a kerekítési hibát."}}],s34:[{q:{en:"What is the primary objective of Gauss–Jordan elimination regarding the coefficient matrix?",hu:"Mi a Gauss–Jordan elimináció elsődleges célja az együtthatómátrix tekintetében?"},a:{en:"To transform the coefficient matrix part of the augmented matrix into the identity matrix $I$.",hu:"A kiterjesztett mátrix együtthatómátrix részének átalakítása $I$ identitásmátrixmá."}},{q:{en:"In Gauss–Jordan elimination, into what form is the augmented matrix $(\\mathbf{A}, \\mathbf{b})$ converted?",hu:"A Gauss–Jordan eliminációban milyen formába alakítják át a $(\\mathbf{A}, \\mathbf{b})$ kiterjesztett mátrixot?"},a:{en:"The form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$.",hu:"A $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$ forma."}},{q:{en:"Once the augmented matrix is in the form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$, how is the solution vector $\\mathbf{x}$ determined?",hu:"Ha a kiterjesztett mátrix $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$ alakú, hogyan határozható meg a $\\mathbf{x}$ megoldásvektor?"},a:{en:"$\\mathbf{x} = \\mathbf{b}^{(n-1)}$.",hu:"$\\mathbf{x} = \\mathbf{b}^{(n-1)}$."}},{q:{en:"Gauss–Jordan elimination is described as a modified version of which existing method?",hu:"Melyik létező módszer módosított változataként írják le a Gauss–Jordan eliminációt?"},a:{en:"Gaussian elimination.",hu:"Gauss-elimináció."}},{q:{en:"What specific procedural step required in standard Gaussian elimination is eliminated in the Gauss–Jordan method?",hu:"Milyen konkrét eljárási lépést kell kiküszöbölni a standard Gauss-eliminációnál a Gauss–Jordan módszerrel?"},a:{en:"Backward substitution.",hu:"Visszafelé csere."}},{q:{en:"In the Gauss–Jordan algorithm, what is the range of the outer loop index $k$?",hu:"A Gauss–Jordan algoritmusban mekkora a $k$ külső hurokindex tartománya?"},a:{en:"$1$ to $n$.",hu:"$1$ - $n$."}},{q:{en:"During the elimination process for a pivot column $k$, which rows $i$ are processed?",hu:"A $k$ forgóoszlop eliminációs folyamata során mely $i$ sorok kerülnek feldolgozásra?"},a:{en:"All rows from $1$ to $n$ where $i \\ne k$.",hu:"Minden sor $1$-től $n$-ig, ahol $i \\ne k$."}},{q:{en:"What is the formula for calculating the multiplier $l_{ik}$ in the Gauss–Jordan algorithm?",hu:"Mi a képlet a $l_{ik}$ szorzó kiszámításához a Gauss–Jordan algoritmusban?"},a:{en:"$l_{ik} = a_{ik} / a_{kk}$.",hu:"$l_{ik} = a_{ik} / a_{kk}$."}},{q:{en:"What is the update rule for the element $a_{ij}$ within the elimination loops?",hu:"Mi a frissítési szabály a $a_{ij}$ elemre az eliminációs hurkon belül?"},a:{en:"$a_{ij} = a_{ij} - l_{ik} a_{kj}$.",hu:"$a_{ij} = a_{ij} - l_{ik} a_{kj}$."}},{q:{en:"In the update step $a_{ij} = a_{ij} - l_{ik} a_{kj}$, what is the range of the index $j$?",hu:"A $a_{ij} = a_{ij} - l_{ik} a_{kj}$ frissítési lépésben mekkora a $j$ index tartománya?"},a:{en:"$k+1$ to $n+1$.",hu:"$k+1$ - $n+1$."}},{q:{en:"How is each variable $x_i$ calculated in the final step of the algorithm?",hu:"Hogyan történik az egyes $x_i$ változók kiszámítása az algoritmus utolsó lépésében?"},a:{en:"$x_i = a_{i, n+1} / a_{ii}$.",hu:"$x_i = a_{i, n+1} / a_{ii}$."}},{q:{en:"What is the asymptotic time complexity of Gauss–Jordan elimination for multiplications and divisions?",hu:"Mekkora a Gauss–Jordan elimináció aszimptotikus időbonyolítása szorzásokhoz és osztásokhoz?"},a:{en:"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$.",hu:"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."}},{q:{en:"What is the asymptotic complexity of Gauss–Jordan elimination for additions and subtractions?",hu:"Mekkora a Gauss–Jordan elimináció aszimptotikus összetettsége összeadások és kivonások esetén?"},a:{en:"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$.",hu:"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."}},{q:{en:"According to the exercises, what is the exact number of multiplications and divisions needed for Gauss–Jordan elimination?",hu:"A gyakorlatok szerint pontosan hány szorzás és osztás szükséges a Gauss–Jordan kieséshez?"},a:{en:"$\\frac{n^3}{2} + n^2 - \\frac{n}{2}$.",hu:"$\\frac{n^3}{2} + n^2 - \\frac{n}{2}$."}},{q:{en:"How does the computational cost of Gauss–Jordan elimination compare to standard Gaussian elimination?",hu:"Hogyan viszonyul a Gauss–Jordan elimináció számítási költsége a standard Gauss-eliminációhoz?"},a:{en:"It is higher, requiring more calculations.",hu:"Ez magasabb, több számítást igényel."}},{q:{en:"What defines the 'diagonal form' resulting from the first set of nested loops in the algorithm?",hu:"Mi határozza meg az „átlós formát”, amely az algoritmus első beágyazott ciklusaiból adódik?"},a:{en:"A matrix where all elements $a_{ij}$ are zero if $i \\ne j$.",hu:"Egy mátrix, ahol minden $a_{ij}$ elem nulla, ha $i \\ne j$."}},{q:{en:"In the context of the provided examples, what are the solution values for the linear system?",hu:"Melyek a lineáris rendszer megoldási értékei a megadott példákkal összefüggésben?"},a:{en:"$x_1 = -3, x_2 = 2, x_3 = 4, x_4 = -2$.",hu:"$x_1 = -3, x_2 = 2, x_3 = 4, x_4 = -2$."}},{q:{en:"Which strategy can be combined with Gauss–Jordan elimination to improve numerical stability?",hu:"Melyik stratégia kombinálható a Gauss–Jordan eliminációval a numerikus stabilitás javítása érdekében?"},a:{en:"Pivoting strategies (partial or total).",hu:"Elforduló stratégiák (részleges vagy teljes)."}},{q:{en:"In Gauss–Jordan elimination with partial pivoting, what is the first step before eliminating a column?",hu:"Mi az első lépés a Gauss–Jordan eliminációban részleges elforgatással?"},a:{en:"Finding the maximum absolute value in the current column and interchanging the necessary rows.",hu:"A maximális abszolút érték megkeresése az aktuális oszlopban és a szükséges sorok felcserélése."}},{q:{en:"Why does Gauss–Jordan elimination allow for the solution to be read 'immediately'?",hu:"Miért teszi lehetővé a Gauss–Jordan elimináció a megoldás „azonnal” olvasását?"},a:{en:"Because the coefficient matrix is reduced to the identity matrix, leaving the solution in the last column.",hu:"Mivel az együttható mátrix az azonosságmátrixra redukálódik, így a megoldás az utolsó oszlopban marad."}},{q:{en:"The process of transforming the coefficient matrix to the identity matrix involves making elements zero both below and _____ the diagonal.",hu:"Az együtthatómátrix identitásmátrixmá alakításának folyamata magában foglalja az elemek nullázását mind az átló alatt, mind a _____."},a:{en:"Above.",hu:"Felett."}},{q:{en:"Gauss–Jordan elimination is specifically useful for performing calculations on which type of device?",hu:"A Gauss–Jordan elimináció melyik típusú készüléken különösen hasznos számításokhoz?"},a:{en:"A computer or calculator.",hu:"Számítógép vagy számológép."}},{q:{en:"What does the notation $(\\mathbf{A}, \\mathbf{b})$ represent in the source material?",hu:"Mit jelent a forrásanyagban a $(\\mathbf{A}, \\mathbf{b})$ jelölés?"},a:{en:"The augmented coefficient matrix of a linear system.",hu:"Lineáris rendszer kiterjesztett együtthatómátrixa."}},{q:{en:"If the multiplier $l_{ik}$ is applied to a row $i$ where $i < k$, which part of the matrix is being eliminated?",hu:"Ha a $l_{ik}$ szorzót egy olyan $i$ sorra alkalmazzuk, ahol $i < k$, a mátrix melyik része kerül kiküszöbölésre?"},a:{en:"The elements above the main diagonal.",hu:"A főátló feletti elemek."}},{q:{en:"If the multiplier $l_{ik}$ is applied to a row $i$ where $i > k$, which part of the matrix is being eliminated?",hu:"Ha a $l_{ik}$ szorzót egy olyan $i$ sorra alkalmazzuk, ahol $i > k$, a mátrix melyik része kerül kiküszöbölésre?"},a:{en:"The elements below the main diagonal.",hu:"A főátló alatti elemek."}},{q:{en:"In the provided algorithm, which variable represents the number of equations in the linear system?",hu:"A megadott algoritmusban melyik változó jelenti az egyenletek számát a lineáris rendszerben?"},a:{en:"$n$.",hu:"$n$."}},{q:{en:"What is the range of indices for the input augmented coefficient matrix $a_{ij}$?",hu:"Mekkora az indexek tartománya a $a_{ij}$ bemeneti kiterjesztett együtthatómátrixhoz?"},a:{en:"$i = 1, \\dots, n$ and $j = 1, \\dots, n+1$.",hu:"$i = 1, \\dots, n$ és $j = 1, \\dots, n+1$."}},{q:{en:"True or False: In Gauss–Jordan elimination, the coefficient matrix is always transformed into a triangular matrix as the final result.",hu:"Igaz vagy hamis: A Gauss–Jordan elimináció során az együtthatómátrix mindig háromszögmátrixsá alakul át végeredményként."},a:{en:"False.",hu:"Hamis."}},{q:{en:"What is the purpose of multiplying a row by the reciprocal of its diagonal element in the final stage of the algorithm?",hu:"Mi a célja egy sort megszorozni az átlós elemének reciprokával az algoritmus utolsó szakaszában?"},a:{en:"To convert the diagonal elements to ones, forming the identity matrix.",hu:"Az átlós elemeket egyesekké alakítani, kialakítva az identitásmátrixot."}},{q:{en:"The complexity of simple Gaussian elimination is roughly $\\frac{n^3}{3}$; what is the approximate complexity of Gauss–Jordan?",hu:"Az egyszerű Gauss-elimináció bonyolultsága nagyjából $\\frac{n^3}{3}$; mi a Gauss–Jordan hozzávetőleges összetettsége?"},a:{en:"$\\frac{n^3}{2}$.",hu:"$\\frac{n^3}{2}$."}},{q:{en:"In the step $l_{ik} \\leftarrow a_{ik}/a_{kk}$, what is the term $a_{kk}$ called?",hu:"A $l_{ik} \\leftarrow a_{ik}/a_{kk}$ lépésben hogyan hívják a $a_{kk}$ kifejezést?"},a:{en:"The pivot element.",hu:"A forgóelem."}},{q:{en:"What prevents the modification of previously zeroed columns in the step $a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$?",hu:"Mi akadályozza meg a korábban nullázott oszlopok módosítását a $a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$ lépésben?"},a:{en:"The fact that $a_{kj}$ is zero for $j < k$ in the pivot row (once processing reaches that column).",hu:"Az a tény, hogy a $a_{kj}$ nulla a $j < k$ esetében a pivot sorban (ha a feldolgozás eléri ezt az oszlopot)."}},{q:{en:"In Example 3.35, what happens to the element in the first row, second column ($a_{12}$) during the second iteration of $k$?",hu:"A 3.35. példában mi történik az első sor és a második oszlop elemével ($a_{12}$) a $k$ második iterációja során?"},a:{en:"It is reduced to zero using the second row as a reference.",hu:"A második sort referenciaként használva nullára csökken."}},{q:{en:"What is the Hungarian term for Gauss–Jordan elimination mentioned in the sources?",hu:"Mi a forrásokban említett Gauss–Jordan elimináció magyar kifejezése?"},a:{en:"Gauss–Jordan-elimináció.",hu:"Gauss–Jordan-elimináció."}},{q:{en:"Term: Partial Pivoting",hu:"Fogalom: Részleges elfordulás"},a:{en:"Definition: Selecting the largest available absolute value in a column to use as the pivot and swapping rows accordingly.",hu:"Definíció: Egy oszlopban a legnagyobb elérhető abszolút érték kiválasztása pivotként való használatra, és ennek megfelelően a sorok felcserélése."}},{q:{en:"Term: Identity Matrix",hu:"Fogalom: Identitásmátrix"},a:{en:"Definition: A square matrix where all elements on the main diagonal are ones and all other elements are zeros.",hu:"Definíció: Négyzetes mátrix, ahol a főátlón minden elem egy, a többi elem pedig nulla."}},{q:{en:"What is the result of the final loop: **for** $i = 1, \\dots, n$ **do** $x_i \\leftarrow a_{i, n+1}/a_{ii}$?",hu:"Mi az utolsó ciklus eredménye: **for** $i = 1, \\dots, n$ **do** $x_i \\leftarrow a_{i, n+1}/a_{ii}$?"},a:{en:"The normalization of the diagonal elements to one and the extraction of the solution values.",hu:"Az átlós elemek normalizálása egyre és a megoldási értékek kinyerése."}},{q:{en:"In the provided YouTube transcript, what is mentioned as the 'goal' of the Gauss-Jordan elimination?",hu:"A mellékelt YouTube-átiratban mi szerepel a Gauss-Jordan kiesés „céljaként”?"},a:{en:"To get the identity matrix in the last step of the coefficient matrix part.",hu:"Az identitásmátrix beszerzése az együtthatómátrix rész utolsó lépésében."}},{q:{en:"Why does the first column remain unchanged ($1, 0, 0, 0$) in later steps of the example elimination?",hu:"Miért marad az első oszlop változatlan ($1, 0, 0, 0$) a példa eltávolításának későbbi lépéseiben?"},a:{en:"Because the corresponding elements in the pivot rows used for subtraction are zero.",hu:"Mivel a kivonáshoz használt pivot sorok megfelelő elemei nullák."}},{q:{en:"If the algorithm successfully converts $(A, b)$ to $(I, x)$, what matrix property of $A$ was necessary?",hu:"Ha az algoritmus sikeresen konvertálja a $(A, b)$-t $(I, x)$-vé, akkor a $A$ milyen mátrixtulajdonságára volt szükség?"},a:{en:"$A$ must be non-singular (invertible).",hu:"A $A$ nem lehet egyes szám (invertálható)."}},{q:{en:"How does Gauss–Jordan elimination facilitate solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",hu:"Hogyan segíti elő a Gauss–Jordan elimináció a $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ rendszer megoldását?"},a:{en:"By performing row operations until the equation reads $I\\mathbf{x} = \\mathbf{b}^{(n-1)}$.",hu:"Sorműveletek végrehajtásával mindaddig, amíg az egyenlet be nem olvassa a $I\\mathbf{x} = \\mathbf{b}^{(n-1)}$-t."}},{q:{en:"In the Hungarian source, what is the alternate name given for Gauss–Jordan-elimináció?",hu:"A magyar forrásban mi a Gauss–Jordan-elimináció alternatív neve?"},a:{en:"Jordan-elimináció.",hu:"Jordan-elimináció."}},{q:{en:"Concept: Time Complexity",hu:"Koncepció: Idő komplexitás"},a:{en:"Definition: The number of arithmetic operations required by an algorithm as a function of the input size $n$.",hu:"Definíció: Az algoritmus által igényelt aritmetikai műveletek száma a $n$ bemeneti méret függvényében."}},{q:{en:"In the context of the Gauss–Jordan algorithm, what does $a_{i, n+1}$ represent?",hu:"Mit jelent a $a_{i, n+1}$ a Gauss–Jordan algoritmus kontextusában?"},a:{en:"The element in the $i$-th row of the augmented part (the vector $\\mathbf{b}$).",hu:"A bővített rész $i$-edik sorában lévő elem (a $\\mathbf{b}$ vektor)."}},{q:{en:"In the partial pivoting example, why were rows 1 and 2 interchanged initially?",hu:"A részleges elforgatásos példában miért cserélték fel kezdetben az 1. és 2. sort?"},a:{en:"To move the largest absolute value in the first column ($2$) to the pivot position $a_{11}$.",hu:"Az első oszlop legnagyobb abszolút értékének mozgatása ($2$) a $a_{11}$ forgási pozícióba."}},{q:{en:"What happens to the row swap in partial pivoting if the maximum value is already on the diagonal?",hu:"Mi történik a sorcserével részleges elforgatáskor, ha a maximális érték már az átlón van?"},a:{en:"No row interchange is performed.",hu:"Nem történik sorcsere."}},{q:{en:"The solution $x_4 = -2$ in the examples is derived from which ratio in the final matrix?",hu:"A példákban szereplő $x_4 = -2$ megoldás melyik arányból származik a végső mátrixban?"},a:{en:"$a_{4,5} / a_{4,4}$ (specifically $\\frac{52}{5} / -\\frac{26}{5}$).",hu:"$a_{4,5} / a_{4,4}$ (konkrétan $\\frac{52}{5} / -\\frac{26}{5}$)."}},{q:{en:"In the YouTube transcript, what is the 'standard Gaussian elimination' end state?",hu:"A YouTube-átiratban mi a „standard Gauss-elimináció” végállapota?"},a:{en:"A triangular linear system.",hu:"Háromszög alakú lineáris rendszer."}},{q:{en:"How many loops are nested in the main 'diagonal form' conversion part of the algorithm?",hu:"Hány hurok van beágyazva az algoritmus fő „átlós forma” konverziós részébe?"},a:{en:"Three (indices $k$, $i$, and $j$).",hu:"Három ($k$, $i$ és $j$ index)."}},{q:{en:"What is the role of the 'if $i \\neq k condition in the algorithm?",hu:"Mi a szerepe az 'if $i \\neq k feltételnek az algoritmusban?"},a:{en:"It ensures that the pivot row itself is not modified during the elimination step for that column.",hu:"Biztosítja, hogy maga a pivot sor ne módosuljon az adott oszlop eltávolítási lépése során."}},{q:{en:"According to the transcript, which version of the method is specifically useful for numerical calculations on a computer?",hu:"Az átirat szerint a módszer melyik verziója kifejezetten hasznos a számítógépen végzett numerikus számításokhoz?"},a:{en:"Gauss–Jordan elimination with partial pivoting.",hu:"Gauss–Jordan elimináció részleges elforgatással."}},{q:{en:"In the examples, what value does the multiplier $l_{ik}$ have if $a_{ik}$ is already zero?",hu:"A példákban milyen értéke van a $l_{ik}$ szorzónak, ha a $a_{ik}$ már nulla?"},a:{en:"Zero, resulting in no change to row $i$ for that step.",hu:"Nulla, így az adott lépésnél nem változik a $i$ sor."}},{q:{en:"What does the superscript $(n-1)$ in $\\mathbf{b}^{(n-1)}$ signify?",hu:"Mit jelent a $\\mathbf{b}^{(n-1)}$ felső indexe, a $(n-1)$?"},a:{en:"The state of the vector $\\mathbf{b}$ after $n$ iterations of the elimination process.",hu:"A $\\mathbf{b}$ vektor állapota az eliminációs folyamat $n$ iterációi után."}},{q:{en:"Which index in $a_{ij}$ represents the column number?",hu:"A $a_{ij}$ melyik indexe jelenti az oszlop számát?"},a:{en:"$j$.",hu:"$j$."}},{q:{en:"Which index in $a_{ij}$ represents the row number?",hu:"A $a_{ij}$ melyik indexe jelenti a sorszámot?"},a:{en:"$i$.",hu:"$i$."}},{q:{en:"In the complexity term $\\mathcal{O}(n^2)$, what does the symbol $\\mathcal{O}$ represent?",hu:"Mit jelent a $\\mathcal{O}(n^2)$ összetettségi kifejezésben a $\\mathcal{O}$ szimbólum?"},a:{en:"Big O notation, indicating the upper bound of the growth rate for lower-order terms.",hu:"Nagy O jelölés, amely az alacsonyabb rendű tagok növekedési ütemének felső határát jelzi."}},{q:{en:"What is the resulting matrix type after the triple-nested loop but before the final normalization loop?",hu:"Mi az eredményül kapott mátrix típus a hármas beágyazott ciklus után, de a végső normalizációs ciklus előtt?"},a:{en:"A diagonal matrix.",hu:"Átlós mátrix."}},{q:{en:"In the YouTube explanation, what happens to the values in the first column when subtracting the second row from the first?",hu:"A YouTube magyarázatában mi történik az első oszlopban lévő értékekkel, ha kivonjuk a második sort az elsőből?"},a:{en:"They are unchanged because the second row has a zero in the first column.",hu:"Változatlanok, mert a második sorban az első oszlopban nulla szerepel."}},{q:{en:"The transition from $(\\mathbf{A}, \\mathbf{b}) \\sim (\\dots) \\sim (\\mathbf{I}, \\mathbf{x})$ is achieved through what type of operations?",hu:"A $(\\mathbf{A}, \\mathbf{b}) \\sim (\\dots) \\sim (\\mathbf{I}, \\mathbf{x})$-ről milyen típusú műveletekkel lehet áttérni?"},a:{en:"Elementary row operations.",hu:"Elemi sorműveletek."}},{q:{en:"If $n=3$, how many variables are being solved for in the algorithm?",hu:"Ha $n=3$, hány változóra van megoldva az algoritmus?"},a:{en:"Three ($x_1, x_2, x_3$).",hu:"Három ($x_1, x_2, x_3$)."}}],s35:[{q:{en:"What is the algebraic definition of a tridiagonal square matrix $(a_{ij})$?",hu:"Mi a $(a_{ij})$ háromszögű négyzetmátrix algebrai meghatározása?"},a:{en:"$a_{ij} = 0$ for all $|i - j| > 1$.",hu:"$a_{ij} = 0$ minden $|i - j| > 1$-hez."}},{q:{en:"In a tridiagonal matrix, where are the only possible nonzero elements located?",hu:"Egy háromszögű mátrixban hol találhatók az egyetlen lehetséges nem nulla elem?"},a:{en:"The main diagonal and the diagonals immediately above and below it.",hu:"A főátló és a közvetlenül felette és alatta lévő átlók."}},{q:{en:"In the standard notation for tridiagonal systems, what does the vector $(d_i)$ represent?",hu:"A háromszög rendszerek szabványos jelölésében mit jelent a $(d_i)$ vektor?"},a:{en:"The elements of the main diagonal.",hu:"A főátló elemei."}},{q:{en:"In the standard notation for tridiagonal systems, what does the vector $(c_i)$ represent?",hu:"A háromszög rendszerek szabványos jelölésében mit jelent a $(c_i)$ vektor?"},a:{en:"The elements in the diagonal directly above the main diagonal (superdiagonal).",hu:"Az átlóban lévő elemek közvetlenül a főátló felett (superdiagonal)."}},{q:{en:"In the standard notation for tridiagonal systems, what does the vector $(a_i)$ represent?",hu:"A háromszög rendszerek szabványos jelölésében mit jelent a $(a_i)$ vektor?"},a:{en:"The elements in the diagonal directly below the main diagonal (subdiagonal).",hu:"Az átlóban lévő elemek közvetlenül a főátló alatt (alátló)."}},{q:{en:"How many total elements are in the subdiagonal vector $(a_i)$ for an $n \\times n$ tridiagonal matrix?",hu:"Hány elem van összesen a $(a_i)$ szubdiagonális vektorban egy $n \\times n$ háromszögű mátrix esetén?"},a:{en:"$n - 1$.",hu:"$n - 1$."}},{q:{en:"How many total elements are in the superdiagonal vector $(c_i)$ for an $n \\times n$ tridiagonal matrix?",hu:"Hány elem van összesen a $(c_i)$ szuperdiagonális vektorban egy $n \\times n$ háromszögű mátrix esetén?"},a:{en:"$n - 1$.",hu:"$n - 1$."}},{q:{en:"How many total elements are in the main diagonal vector $(d_i)$ for an $n \\times n$ tridiagonal matrix?",hu:"Hány elem van összesen a $(d_i)$ főátlóvektorban egy $n \\times n$ háromszögű mátrix esetén?"},a:{en:"$n$.",hu:"$n$."}},{q:{en:"What is the total storage area required to store the coefficients of an $n \\times n$ tridiagonal matrix?",hu:"Mekkora a teljes tárterület egy $n \\times n$ tridiagonális mátrix együtthatóinak tárolásához?"},a:{en:"$3n - 2$.",hu:"$3n - 2$."}},{q:{en:"What happens to the elements $a_i$ below the main diagonal during the specialized Gaussian elimination algorithm?",hu:"Mi történik a főátló alatti $a_i$ elemekkel a speciális Gauss-eliminációs algoritmus során?"},a:{en:"They become $0$.",hu:"$0$ lesz."}},{q:{en:"Which vector of coefficients remains unchanged during the elimination steps of the tridiagonal algorithm?",hu:"Melyik együtthatóvektor marad változatlan a tridiagonális algoritmus eliminációs lépései során?"},a:{en:"The superdiagonal vector $(c_i)$.",hu:"A $(c_i)$ szuperdiagonális vektor."}},{q:{en:"Which two vectors are overridden with new values during the elimination phase of the tridiagonal algorithm?",hu:"Melyik két vektort írják felül új értékkel a tridiagonális algoritmus eliminációs fázisában?"},a:{en:"$(d_i)$ and $(b_i)$.",hu:"$(d_i)$ és $(b_i)$."}},{q:{en:"In the elimination loop of the tridiagonal algorithm, what is the range of the index $i$?",hu:"A tridiagonális algoritmus eliminációs hurkában mekkora a $i$ index tartománya?"},a:{en:"From $2$ to $n$.",hu:"$2$-től $n$-ig."}},{q:{en:"Formula: What is the calculation for the temporary multiplier ($temp$) in the $i$-th elimination step?",hu:"Képlet: Mi a számítás az ideiglenes szorzóhoz ($temp$) a $i$-edik eliminációs lépésben?"},a:{en:"$temp \\leftarrow a_{i-1}/d_{i-1}$.",hu:"$temp \\leftarrow a_{i-1}/d_{i-1}$."}},{q:{en:"Formula: How is $d_i$ updated during the $i$-th step of the tridiagonal elimination phase?",hu:"Képlet: Hogyan frissül a $d_i$ a háromszög eliminációs fázis $i$-edik lépésében?"},a:{en:"$d_i \\leftarrow d_i - temp \\cdot c_{i-1}$.",hu:"$d_i \\leftarrow d_i - temp \\cdot c_{i-1}$."}},{q:{en:"Formula: How is the right-hand side value $b_i$ updated during the $i$-th step of the elimination phase?",hu:"Képlet: Hogyan frissül a jobb oldali $b_i$ érték az eliminációs fázis $i$-edik lépésében?"},a:{en:"$b_i \\leftarrow b_i - temp \\cdot b_{i-1}$.",hu:"$b_i \\leftarrow b_i - temp \\cdot b_{i-1}$."}},{q:{en:"In the backward substitution phase, how is the final variable $x_n$ calculated?",hu:"A visszafelé történő helyettesítési fázisban hogyan számítják ki a $x_n$ végső változót?"},a:{en:"$x_n \\leftarrow b_n/d_n$.",hu:"$x_n \\leftarrow b_n/d_n$."}},{q:{en:"Formula: How is $x_i$ calculated during the backward substitution phase for $i = n-1, \\ldots, 1$?",hu:"Képlet: Hogyan történik a $x_i$ kiszámítása a $i = n-1, \\ldots, 1$ visszafelé történő helyettesítési fázisában?"},a:{en:"$x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$.",hu:"$x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$."}},{q:{en:"What is the direction of the loop used in the backward substitution phase of the tridiagonal algorithm?",hu:"Milyen irányú a háromszög algoritmus visszafelé történő helyettesítési fázisában használt hurok?"},a:{en:"Decrementing from $n-1$ down to $1$.",hu:"Csökkenés $n-1$-ről $1$-re."}},{q:{en:"How many multiplications and divisions are required to solve a tridiagonal system of size $n$?",hu:"Hány szorzás és osztás szükséges egy $n$ méretű háromszögrendszer megoldásához?"},a:{en:"$5n - 4$.",hu:"$5n - 4$."}},{q:{en:"What is the computational complexity (multiplications/divisions) of the standard Gaussian elimination for a general matrix?",hu:"Mekkora a standard Gauss-elimináció számítási bonyolultsága (szorzások/osztások) általános mátrix esetén?"},a:{en:"$n^3/3$.",hu:"$n^3/3$."}},{q:{en:"Under what condition is the specialized tridiagonal Gaussian elimination algorithm guaranteed to work without pivoting?",hu:"Milyen feltételek mellett garantáltan működik a speciális háromszögű Gauss-elimináló algoritmus elfordulás nélkül?"},a:{en:"If the tridiagonal matrix $\\mathbf{A}$ is diagonally dominant.",hu:"Ha a $\\mathbf{A}$ tridiagonális mátrix átlósan domináns."}},{q:{en:"Why is pivoting generally avoided when solving tridiagonal systems?",hu:"Miért kerülik általában a forgatást a háromszög rendszerek megoldása során?"},a:{en:"Pivoting ruins the specific tridiagonal structure of the coefficient matrix.",hu:"Az elforgatás tönkreteszi az együtthatómátrix specifikus háromszög szerkezetét."}},{q:{en:"Concept: Band Matrix",hu:"Koncepció: Band Matrix"},a:{en:"Definition: A matrix where nonzero elements appear only in the main diagonal and a fixed number of diagonals above and below it.",hu:"Definíció: Olyan mátrix, amelyben a nullától eltérő elemek csak a főátlóban jelennek meg, és meghatározott számú átló felette és alatta."}},{q:{en:"In a band matrix where $a_{ij} = 0$ for $|i - j| > 2$, how many diagonals contain potentially nonzero elements?",hu:"Egy olyan sávmátrixban, ahol $a_{ij} = 0$ $|i - j| > 2$ esetén, hány átló tartalmaz potenciálisan nullától eltérő elemeket?"},a:{en:"Five diagonals (the main diagonal, two above, and two below).",hu:"Öt átló (a főátló, kettő fent és kettő lent)."}},{q:{en:"Which input vectors are required for the tridiagonal algorithm's elimination phase?",hu:"Milyen bemeneti vektorok szükségesek a tridiagonális algoritmus eliminációs fázisához?"},a:{en:"$a_i, c_{i-1}, d_{i-1}, d_i, b_{i-1},$ and $b_i$.",hu:"$a_i, c_{i-1}, d_{i-1}, d_i, b_{i-1},$ és $b_i$."}},{q:{en:"What is the Hungarian term for 'tridiagonal linear systems'?",hu:"Mi a magyar kifejezés a háromszögű lineáris rendszerekre?"},a:{en:"Tridiagonális egyenletrendszerek.",hu:"Tridiagonális egyenletrendszerek."}},{q:{en:"In the Hungarian source, what is the Hungarian word for the 'elimination' phase of the algorithm?",hu:"A magyar forrásban mi a magyar szó az algoritmus 'eliminációs' fázisára?"},a:{en:"Elimináció.",hu:"Elimináció."}},{q:{en:"In the Hungarian source, what is the Hungarian term for 'backward substitution'?",hu:"A magyar forrásban mi a magyar kifejezés a 'visszahelyettesítés' kifejezésre?"},a:{en:"Visszahelyettesítés.",hu:"Visszahelyettesítés."}},{q:{en:"What is the primary advantage of using $3n-2$ storage for a tridiagonal matrix instead of $n^2$?",hu:"Mi az elsődleges előnye a $3n-2$ tároló használatának háromszögű mátrixhoz a $n^2$ helyett?"},a:{en:"It significantly reduces the amount of memory needed for large systems.",hu:"Jelentősen csökkenti a nagy rendszerekben szükséges memória mennyiségét."}},{q:{en:"Cloze: In the tridiagonal algorithm, the values $c_i$ are _____ during the elimination process.",hu:"Close: A háromszög algoritmusban a $c_i$ értékek _____ az eliminációs folyamat során."},a:{en:"unchanged",hu:"változatlan"}},{q:{en:"Cloze: The standard Gaussian elimination requires $n^3/3$ operations, whereas the tridiagonal version requires only _____ operations.",hu:"Bezárás: A szabványos Gauss-elimináció $n^3/3$ műveleteket igényel, míg a háromszögű változat csak _____ műveleteket igényel."},a:{en:"$5n - 4$",hu:"$5n - 4$"}},{q:{en:"True or False: The tridiagonal algorithm is more efficient than standard Gaussian elimination for any matrix size $n > 1$.",hu:"Igaz vagy hamis: A háromszögű algoritmus bármely $n > 1$ mátrixméret esetén hatékonyabb, mint a szokásos Gauss-elimináció."},a:{en:"True (based on the $5n-4$ vs $n^3/3$ comparison).",hu:"Igaz (a $5n-4$ vs $n^3/3$ összehasonlítás alapján)."}},{q:{en:"What is the index $i$ for the first $a$ element used in the algorithm ($a_{i-1}$ when $i=2$)?",hu:"Mi az algoritmusban használt első $a$ elem $i$ indexe ($a_{i-1}$, amikor $i=2$)?"},a:{en:"$a_1$.",hu:"$a_1$."}},{q:{en:"In the backward substitution step for $x_i$, what variable must already be computed?",hu:"A $x_i$ visszafelé történő helyettesítési lépésében melyik változót kell már kiszámítani?"},a:{en:"$x_{i+1}$.",hu:"$x_{i+1}$."}},{q:{en:"Which theorem is cited as the basis for performing the algorithm without pivoting on diagonally dominant matrices?",hu:"Melyik tétel szolgál alapul az algoritmus diagonálisan domináns mátrixokon való forgatás nélküli végrehajtásához?"},a:{en:"Theorem 3.32.",hu:"3.32. tétel."}},{q:{en:"The storage requirement $3n-2$ accounts for $n$ diagonal elements and how many off-diagonal elements?",hu:"A $3n-2$ tárolási igény a $n$ átlós elemeket és hány nem átlós elemet tartalmaz?"},a:{en:"$2n - 2$ off-diagonal elements ($n-1$ above and $n-1$ below).",hu:"$2n - 2$ nem átlós elemek ($n-1$ fent és $n-1$ lent)."}},{q:{en:"What is the relationship between $n$ and the number of rows in the coefficient matrix?",hu:"Mi a kapcsolat a $n$ és az együtthatómátrix sorainak száma között?"},a:{en:"$n$ is the number of rows (and columns) in the square matrix.",hu:"A $n$ a sorok (és oszlopok) száma a négyzetmátrixban."}},{q:{en:"Identify the vector: used as the denominator in the calculation of $temp$.",hu:"Határozza meg a vektort: ​​használjuk nevezőként a $temp$ számításánál."},a:{en:"The updated main diagonal vector $(d_i)$.",hu:"A frissített főátlóvektor $(d_i)$."}},{q:{en:"Identify the vector: its elements are multiplied by $temp$ and subtracted from $d_i$.",hu:"Határozza meg a vektort: ​​elemeit megszorozzuk $temp$-vel, és kivonjuk a $d_i$-ből."},a:{en:"The superdiagonal vector $(c_i)$.",hu:"A $(c_i)$ szuperdiagonális vektor."}},{q:{en:"In the context of the tridiagonal system, what does the vector $(b_i)$ represent?",hu:"Mit jelent a háromszögrendszer összefüggésében a $(b_i)$ vektor?"},a:{en:"The right-hand side constants of the linear equations.",hu:"A lineáris egyenletek jobb oldali állandói."}},{q:{en:"What is the result of the expression $|i-j| > 1$ for elements on the main diagonal?",hu:"Mi az eredménye a $|i-j| > 1$ kifejezésnek a főátlón lévő elemekre?"},a:{en:"It is false, as $|i-i| = 0$.",hu:"Ez hamis, mint a $|i-i| = 0$."}},{q:{en:"In the Hungarian source, what is the Hungarian term for 'diagonal dominance'?",hu:"Mi a magyar forrásban az 'átlós dominancia' magyar kifejezés?"},a:{en:"Diagonálisan domináns.",hu:"Diagonálisan domináns."}},{q:{en:"According to the transcript, why is it better to formulate a special version of a general algorithm?",hu:"Az átirat szerint miért jobb egy általános algoritmus speciális változatát megfogalmazni?"},a:{en:"It requires significantly fewer arithmetic operations for specialized problems.",hu:"Speciális feladatokhoz lényegesen kevesebb aritmetikai műveletre van szükség."}},{q:{en:"What happens to the structure of the matrix if pivoting is applied to a tridiagonal system?",hu:"Mi történik a mátrix szerkezetével, ha a forgást egy háromszög rendszerre alkalmazzuk?"},a:{en:"The structure is ruined (lost).",hu:"A szerkezet tönkrement (elveszett)."}},{q:{en:"What is the leading term in the operation count for the specialized tridiagonal algorithm?",hu:"Mi a vezető tag a speciális tridiagonális algoritmus műveletszámában?"},a:{en:"$5n$.",hu:"$5n$."}},{q:{en:"In the provided Exercise 2, what is the value of the coefficient for $x_1$ in the first equation?",hu:"A megadott 2. gyakorlatban mekkora a $x_1$ együttható értéke az első egyenletben?"},a:{en:"1.",hu:"1."}},{q:{en:"In the provided Exercise 2, what is the value of the right-hand side constant $b_1$?",hu:"A megadott 2. gyakorlatban mekkora a jobb oldali $b_1$ konstans értéke?"},a:{en:"1.5.",hu:"1.5."}},{q:{en:"In the provided Exercise 2, what is the coefficient $c_1$ (element above the diagonal in the first row)?",hu:"A megadott 2. gyakorlatban mekkora a $c_1$ együttható (az első sorban az átló feletti elem)?"},a:{en:"-0.5.",hu:"-0,5."}},{q:{en:"In the provided Exercise 2, what is the coefficient $a_1$ (element below the diagonal in the second row)?",hu:"A megadott 2. gyakorlatban mekkora a $a_1$ együttható (az átló alatti elem a második sorban)?"},a:{en:"0.5.",hu:"0.5."}},{q:{en:"How many equations are in the system presented in Exercise 2?",hu:"Hány egyenlet van a 2. gyakorlatban bemutatott rendszerben?"},a:{en:"6.",hu:"6."}},{q:{en:"What is the half-bandwidth $k$ of a tridiagonal matrix?",hu:"Mekkora egy háromszögű mátrix félsávszélességű $k$?"},a:{en:"$k = 1$.",hu:"$k = 1$."}},{q:{en:"What is the storage requirement for a general $n \\times n$ matrix compared to a tridiagonal one?",hu:"Mi az általános $n \\times n$ mátrix tárolási igénye egy háromszögű mátrixhoz képest?"},a:{en:"$n^2$ vs $3n - 2$.",hu:"$n^2$ vs $3n - 2$."}},{q:{en:"During backward substitution, which $x$ value is used to calculate $x_{n-1}$?",hu:"A visszafelé történő helyettesítés során melyik $x$ értéket használják a $x_{n-1}$ kiszámításához?"},a:{en:"$x_n$.",hu:"$x_n$."}},{q:{en:"Cloze: A matrix is tridiagonal if $a_{ij} = 0$ for all $|i - j| > \\_\\_\\_\\_\\_$.",hu:"Bezárás: A mátrix háromszögű, ha $a_{ij} = 0$ az összes $|i - j| > \\_\\_\\_\\_\\_$ esetében."},a:{en:"1",hu:"1"}},{q:{en:"Formula: How is $x_i$ updated if $c_i = 0$ in a diagonal matrix (a specific case of tridiagonal)?",hu:"Képlet: Hogyan frissül a $x_i$, ha a $c_i = 0$ egy átlós mátrixban (a háromszög speciális esete)?"},a:{en:"$x_i = b_i / d_i$.",hu:"$x_i = b_i / d_i$."}},{q:{en:"In the elimination loop, why is $d_{i-1}$ used in the denominator?",hu:"Az eliminációs ciklusban miért szerepel a nevezőben a $d_{i-1}$?"},a:{en:"It is the pivot element for the current elimination step.",hu:"Ez az aktuális eliminációs lépés forgóeleme."}},{q:{en:"What is the value of $a_i$ for $i=n$?",hu:"Mennyi a $a_i$ értéke $i=n$ esetén?"},a:{en:"It is undefined or zero, as there are only $n-1$ subdiagonal elements.",hu:"Meghatározatlan vagy nulla, mivel csak $n-1$ átlós elemek vannak."}},{q:{en:"What is the value of $c_i$ for $i=n$?",hu:"Mennyi a $c_i$ értéke $i=n$ esetén?"},a:{en:"It is undefined or zero, as there are only $n-1$ superdiagonal elements.",hu:"Nem definiált vagy nulla, mivel csak $n-1$ szuperdiagonális elemek vannak."}},{q:{en:"If $n=100$, what is the storage area needed for a tridiagonal matrix?",hu:"Ha $n=100$, mekkora tárterület szükséges egy háromszögű mátrixhoz?"},a:{en:"298 ($3 \\cdot 100 - 2$).",hu:"298 ($3 \\cdot 100 - 2$)."}},{q:{en:"If $n=100$, how many operations ($5n-4$) are needed for the tridiagonal algorithm?",hu:"Ha $n=100$, hány művelet ($5n-4$) szükséges a háromszög algoritmushoz?"},a:{en:"496 multiplications/divisions.",hu:"496 szorzás/osztás."}}],s36:[{q:{en:"What are 'simultaneous linear systems'?",hu:"Mik azok a „szimultán lineáris rendszerek”?"},a:{en:"A set of linear systems that share the same coefficient matrix but have different right-hand sides.",hu:"Lineáris rendszerek halmaza, amelyek ugyanazt az együtthatómátrixot használják, de különböző jobb oldaluk van."}},{q:{en:"What is the general form for representing $m$ simultaneous linear systems individually?",hu:"Mi a $m$ szimultán lineáris rendszerek egyenkénti ábrázolásának általános formája?"},a:{en:"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for $i = 1, \\dots, m$.",hu:"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ $i = 1, \\dots, m$-hez."}},{q:{en:"How is a set of simultaneous linear systems written concisely as a single matrix equation?",hu:"Hogyan írható fel tömören egyetlen mátrixegyenletként egy szimultán lineáris rendszerek halmaza?"},a:{en:"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$",hu:"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"}},{q:{en:"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{B}$ represent?",hu:"Mit jelent a $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ egyenletben a $\\mathbf{B}$ mátrix $i$-edik oszlopa?"},a:{en:"The right-hand side vector $\\mathbf{b}^{(i)}$ of the $i$-th system.",hu:"A $i$-edik rendszer jobb oldali $\\mathbf{b}^{(i)}$ vektora."}},{q:{en:"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{X}$ represent?",hu:"Mit jelent a $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ egyenletben a $\\mathbf{X}$ mátrix $i$-edik oszlopa?"},a:{en:"The solution vector $\\mathbf{x}^{(i)}$ of the $i$-th system.",hu:"A $i$-edik rendszer $\\mathbf{x}^{(i)}$ megoldási vektora."}},{q:{en:"What are the dimensions of the matrix $\\mathbf{B}$ if there are $n$ equations and $m$ right-hand side vectors?",hu:"Mekkora a $\\mathbf{B}$ mátrix mérete, ha vannak $n$ egyenletek és $m$ jobb oldali vektorok?"},a:{en:"$n \\times m$",hu:"$n \\times m$"}},{q:{en:"What are the dimensions of the solution matrix $\\mathbf{X}$ in a simultaneous linear system with $n$ variables and $m$ systems?",hu:"Milyen méretei vannak a $\\mathbf{X}$ megoldásmátrixnak egy szimultán lineáris rendszerben $n$ változókkal és $m$ rendszerekkel?"},a:{en:"$n \\times m$",hu:"$n \\times m$"}},{q:{en:"Why can pivoting for simultaneous systems be performed on a single augmented matrix?",hu:"Miért hajtható végre az egyidejű rendszerek pivoting egyetlen kiterjesztett mátrixon?"},a:{en:"Pivoting depends only on the coefficient matrix $\\mathbf{A}$, which is the same for all systems.",hu:"Az elforgatás csak a $\\mathbf{A}$ együtthatómátrixtól függ, amely minden rendszernél azonos."}},{q:{en:"What are the dimensions of the augmented matrix used to solve $m$ simultaneous systems of $n$ equations?",hu:"Melyek a $m$ szimultán $n$ egyenletrendszerek megoldására használt kiterjesztett mátrix méretei?"},a:{en:"$n \\times (n+m)$",hu:"$n \\times (n+m)$"}},{q:{en:"Performing Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ results in a matrix of what form?",hu:"A Gauss-Jordan-elimináció végrehajtása a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixon milyen formájú mátrixot eredményez?"},a:{en:"$(\\mathbf{I}, \\mathbf{X})$",hu:"$(\\mathbf{I}, \\mathbf{X})$"}},{q:{en:"Where does the solution $\\mathbf{X}$ appear after Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?",hu:"Hol jelenik meg a $\\mathbf{X}$ megoldás a Gauss-Jordan-elimináció után a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixon?"},a:{en:"In the last $m$ columns.",hu:"Az utolsó $m$ oszlopokban."}},{q:{en:"What is the operation count for Gaussian elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?",hu:"Mennyi a Gauss-elimináció műveletszáma a $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$ kiterjesztett mátrixon?"},a:{en:"$n^3/3 + mn^2 - n/3$",hu:"$n^3/3 + mn^2 - n/3$"}},{q:{en:"In the Gaussian elimination operation count $n^3/3 + mn^2 - n/3$, what do the operations represent?",hu:"Mit jelentenek a műveletek a $n^3/3 + mn^2 - n/3$ Gauss-eliminációs műveletszámban?"},a:{en:"The number of multiplications and divisions.",hu:"A szorzások és osztások száma."}},{q:{en:"What is the operation count for Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?",hu:"Mennyi a műveletszám a Gauss-Jordan-eliminációhoz a $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$ kiterjesztett mátrixon?"},a:{en:"$n^3/2 + mn^2 - n/2$",hu:"$n^3/2 + mn^2 - n/2$"}},{q:{en:"Which term in the operation count formulas scales linearly with the number of systems $m$?",hu:"A műveletszámláló formulák melyik tagja skálázódik lineárisan a $m$ rendszerek számával?"},a:{en:"$mn^2$",hu:"$mn^2$"}},{q:{en:"How does the $n^3$ term in the operation count compare between Gaussian and Gauss-Jordan elimination for simultaneous systems?",hu:"Hogyan viszonyul a $n^3$ kifejezés a műveletek számában a Gauss- és Gauss-Jordan-eliminációhoz egyidejű rendszerek esetén?"},a:{en:"Gauss-Jordan has a higher $n^3$ cost ($n^3/2$) than Gaussian elimination ($n^3/3$).",hu:"A Gauss-Jordan $n^3$ költsége magasabb ($n^3/2$), mint a Gauss-elimináció ($n^3/3$)."}},{q:{en:"Algorithm 3.37 can be reformulated to solve simultaneous systems with what specific structure?",hu:"A 3.37-es algoritmus újrafogalmazható egyidejű rendszerek megoldására, milyen konkrét szerkezettel?"},a:{en:"Tridiagonal linear systems.",hu:"Háromszögű lineáris rendszerek."}},{q:{en:"The system of equations $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$ is equivalent to the matrix equation _____.",hu:"A $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$ egyenletrendszer ekvivalens a _____ mátrixegyenlettel."},a:{en:"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$",hu:"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"}},{q:{en:"Concept: Augmented Matrix $(\\mathbf{A}, \\mathbf{B})$",hu:"Koncepció: kiterjesztett mátrix $(\\mathbf{A}, \\mathbf{B})$"},a:{en:"Definition: A combined matrix where the coefficient matrix $\\mathbf{A}$ is followed by the matrix of all right-hand sides $\\mathbf{B}$.",hu:"Definíció: Kombinált mátrix, ahol a $\\mathbf{A}$ együtthatómátrixot követi az összes jobb oldali $\\mathbf{B}$ mátrix."}},{q:{en:"In the augmented matrix $(\\mathbf{A}, \\mathbf{B})$, what does the sub-matrix $\\mathbf{A}$ represent?",hu:"Mit jelent a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixban a $\\mathbf{A}$ almátrix?"},a:{en:"The shared coefficient matrix for all systems.",hu:"Megosztott együttható mátrix minden rendszerhez."}},{q:{en:"In the context of simultaneous systems, what matrix results from the $i$-th column product $\\mathbf{A} \\cdot \\text{column}_i(\\mathbf{X})$?",hu:"A szimultán rendszerek kontextusában milyen mátrix adódik a $i$-edik oszloptermékből $\\mathbf{A} \\cdot \\text{column}_i(\\mathbf{X})$?"},a:{en:"The $i$-th column of matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(i)}$).",hu:"A $\\mathbf{B}$ mátrix $i$-edik oszlopa (a $\\mathbf{b}^{(i)}$ vektor)."}},{q:{en:"What matrix does the coefficient matrix $\\mathbf{A}$ become after successful Gauss-Jordan elimination on an augmented matrix?",hu:"Milyen mátrixsá válik a $\\mathbf{A}$ együtthatómátrix sikeres Gauss-Jordan-elimináció után egy kiterjesztett mátrixon?"},a:{en:"The identity matrix $\\mathbf{I}$.",hu:"A $\\mathbf{I}$ identitásmátrix."}},{q:{en:"If $\\mathbf{A}$ is $n \\times n$, how many rows does the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ have?",hu:"Ha a $\\mathbf{A}$ a $n \\times n$, hány sora van a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixnak?"},a:{en:"$n$ rows",hu:"$n$ sorok"}},{q:{en:"If $\\mathbf{B}$ is a matrix of $m$ column vectors, what is the width of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?",hu:"Ha a $\\mathbf{B}$ $m$ oszlopvektorok mátrixa, mekkora a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrix szélessége?"},a:{en:"$n + m$ columns",hu:"$n + m$ oszlopok"}},{q:{en:"The solution matrix $\\mathbf{X}$ is composed of columns $(\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$, where each column is a _____.",hu:"A $\\mathbf{X}$ megoldásmátrix $(\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ oszlopokból áll, ahol minden oszlop egy _____."},a:{en:"solution vector for the corresponding right-hand side $\\mathbf{b}^{(i)}$",hu:"megoldásvektor a megfelelő jobb oldali $\\mathbf{b}^{(i)}$-hez"}},{q:{en:"When performing elimination, why is it efficient to solve simultaneous systems together rather than separately?",hu:"Az elimináció során miért hatékony a szimultán rendszereket együtt megoldani, nem pedig külön-külön?"},a:{en:"The elimination steps on the coefficient matrix only need to be performed once.",hu:"Az együtthatómátrixon az eliminációs lépéseket csak egyszer kell végrehajtani."}},{q:{en:"According to the video, what form of elimination is preferred to directly obtain the solution matrix $\\mathbf{X}$?",hu:"A videó szerint milyen eliminációs formát részesítenek előnyben a $\\mathbf{X}$ megoldásmátrix közvetlen megszerzéséhez?"},a:{en:"Gauss-Jordan elimination.",hu:"Gauss-Jordan kiesés."}},{q:{en:"The formula $n^3/3 + mn^2 - n/3$ describes the multiplication/division count for which method?",hu:"A $n^3/3 + mn^2 - n/3$ képlet melyik módszer szorzási/osztási számát írja le?"},a:{en:"Gaussian elimination on an augmented matrix.",hu:"Gauss-elimináció kiterjesztett mátrixon."}},{q:{en:"In the operation count $n^3/2 + mn^2 - n/2$, what does the '$- n/2 term represent?",hu:"A $n^3/2 + mn^2 - n/2$ műveletszámban mit jelent a '$- n/2 tag?"},a:{en:"A linear correction factor in the Gauss-Jordan operation count.",hu:"Lineáris korrekciós tényező a Gauss-Jordan műveletek számában."}},{q:{en:"How is the matrix $\\mathbf{X}$ related to $\\mathbf{A}$ and $\\mathbf{B}$ in terms of matrix multiplication?",hu:"Hogyan kapcsolódik a $\\mathbf{X}$ mátrix a $\\mathbf{A}$-hez és a $\\mathbf{B}$-hez a mátrixszorzás szempontjából?"},a:{en:"$\\mathbf{X}$ is the matrix that, when multiplied on the left by $\\mathbf{A}$, yields $\\mathbf{B}$.",hu:"A $\\mathbf{X}$ az a mátrix, amelyet a bal oldalon $\\mathbf{A}$-vel megszorozva $\\mathbf{B}$-t kapunk."}},{q:{en:"What is the identity matrix dimension in the result $(\\mathbf{I}, \\mathbf{X})$?",hu:"Mi az identitásmátrix dimenziója a $(\\mathbf{I}, \\mathbf{X})$ eredményben?"},a:{en:"$n \\times n$",hu:"$n \\times n$"}},{q:{en:"True or False: Pivoting decisions in simultaneous systems are affected by the values in matrix $\\mathbf{B}$.",hu:"Igaz vagy hamis: Az egyidejű rendszerekben a forgási döntéseket a $\\mathbf{B}$ mátrix értékei befolyásolják."},a:{en:"False (pivoting depends only on the coefficient matrix $\\mathbf{A}$).",hu:"Hamis (a forgás csak a $\\mathbf{A}$ együtthatómátrixtól függ)."}},{q:{en:"If $m=1$, the operation count $n^3/3 + mn^2 - n/3$ simplifies to the standard count for a _____.",hu:"Ha $m=1$, akkor a $n^3/3 + mn^2 - n/3$ műveletek száma leegyszerűsödik a _____ szabványos számlálási értékére."},a:{en:"single linear system solved by Gaussian elimination",hu:"egyetlen lineáris rendszer Gauss-eliminációval megoldva"}},{q:{en:"The matrix $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\dots, \\mathbf{b}^{(m)})$ is called the _____ matrix.",hu:"A $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\dots, \\mathbf{b}^{(m)})$ mátrixot _____ mátrixnak nevezzük."},a:{en:"right-hand side",hu:"jobb oldali"}},{q:{en:"The matrix $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ is called the _____ matrix.",hu:"A $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ mátrixot _____ mátrixnak nevezzük."},a:{en:"solution",hu:"megoldás"}},{q:{en:"What is the row size of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?",hu:"Mekkora a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrix sormérete?"},a:{en:"$n$ (the number of equations).",hu:"$n$ (az egyenletek száma)."}},{q:{en:"What is the column size of matrix $\\mathbf{X}$ in a simultaneous system with $m$ right-hand sides?",hu:"Mekkora a $\\mathbf{X}$ mátrix oszlop mérete $m$ jobb oldali szimultán rendszerben?"},a:{en:"$m$",hu:"$m$"}},{q:{en:"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, which matrix is the coefficient matrix?",hu:"A $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ egyenletben melyik mátrix az együtthatómátrix?"},a:{en:"$\\mathbf{A}$",hu:"$\\mathbf{A}$"}},{q:{en:"The process of solving simultaneous systems is equivalent to solving the matrix equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ for the unknown matrix _____.",hu:"A szimultán rendszerek megoldásának folyamata egyenértékű a $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ mátrixegyenlet megoldásával a _____ ismeretlen mátrixra."},a:{en:"$\\mathbf{X}$",hu:"$\\mathbf{X}$"}},{q:{en:"The Gauss-Jordan method transforms the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ into _____.",hu:"A Gauss-Jordan módszer a $(\\mathbf{A}, \\mathbf{B})$ kiterjesztett mátrixot _____-má alakítja."},a:{en:"$(\\mathbf{I}, \\mathbf{X})$",hu:"$(\\mathbf{I}, \\mathbf{X})$"}},{q:{en:"How many individual linear systems are being solved in a simultaneous system with $m$ right-hand sides?",hu:"Hány egyedi lineáris rendszert oldanak meg egyidejűleg $m$ jobb oldali rendszerben?"},a:{en:"$m$",hu:"$m$"}},{q:{en:"What is the term for the matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$?",hu:"Mi a $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$ mátrix kifejezés?"},a:{en:"The augmented matrix.",hu:"A kiterjesztett mátrix."}},{q:{en:"What determines whether Gaussian or Gauss-Jordan elimination can be performed on the augmented matrix?",hu:"Mi határozza meg, hogy Gauss vagy Gauss-Jordan-elimináció végezhető-e a kiterjesztett mátrixon?"},a:{en:"The properties and pivoting requirements of the coefficient matrix $\\mathbf{A}$.",hu:"A $\\mathbf{A}$ együtthatómátrix tulajdonságai és elfordulási követelményei."}},{q:{en:"In the term $mn^2$ of the operation counts, what does $n^2$ represent for each system $i$?",hu:"A műveletszámok $mn^2$ kifejezésében mit jelent a $n^2$ az egyes $i$ rendszereknél?"},a:{en:"The operations required to process a single right-hand side vector through the elimination and back-substitution.",hu:"Egyetlen jobb oldali vektor feldolgozásához szükséges műveletek elimináción és visszahelyettesítésen keresztül."}},{q:{en:"What is the result of multiplying the coefficient matrix by the first column of the solution matrix?",hu:"Mi az eredménye, ha az együtthatómátrixot megszorozzuk a megoldásmátrix első oszlopával?"},a:{en:"The first column of the right-hand side matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(1)}$).",hu:"A jobb oldali $\\mathbf{B}$ mátrix első oszlopa (a $\\mathbf{b}^{(1)}$ vektor)."}},{q:{en:"In Gauss-Jordan elimination, the solution for the $i$-th system is found in the $(n+i)$-th _____ of the final augmented matrix.",hu:"A Gauss-Jordan-eliminációban a $i$-edik rendszer megoldása a végső kiterjesztett mátrix $(n+i)$-edik _____-jában található."},a:{en:"column",hu:"oszlop"}},{q:{en:"Which operation count term $n^3/3$ or $n^3/2$ represents the cost of reducing the coefficient matrix $\\mathbf{A}$?",hu:"Melyik $n^3/3$ vagy $n^3/2$ műveletszámlálási tag jelenti a $\\mathbf{A}$ együtthatómátrix csökkentésének költségét?"},a:{en:"The term independent of $m$.",hu:"A kifejezés független a $m$-től."}},{q:{en:"To solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for multiple $i$, one performs elimination on $\\mathbf{A}$ and applies the same operations to all _____.",hu:"A $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ megoldásához több $i$ esetén, az egyik megszünteti a $\\mathbf{A}$-t, és ugyanazokat a műveleteket alkalmazza az összes _____-ra."},a:{en:"$\\mathbf{b}^{(i)}$ vectors (or the matrix $\\mathbf{B}$)",hu:"$\\mathbf{b}^{(i)}$ vektorok (vagy a $\\mathbf{B}$ mátrix)"}},{q:{en:"What is the total number of entries in the solution matrix $\\mathbf{X}$?",hu:"Mennyi az összes bejegyzés száma a $\\mathbf{X}$ megoldásmátrixban?"},a:{en:"$n \\cdot m$",hu:"$n \\cdot m$"}},{q:{en:"Which matrix equation proves that $AX=B$ is equivalent to solving $m$ individual systems?",hu:"Melyik mátrixegyenlet bizonyítja, hogy a $AX=B$ egyenértékű a $m$ egyedi rendszerek megoldásával?"},a:{en:"$(\\mathbf{A}\\mathbf{x}^{(1)}, \\dots, \\mathbf{A}\\mathbf{x}^{(m)}) = (\\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$",hu:"$(\\mathbf{A}\\mathbf{x}^{(1)}, \\dots, \\mathbf{A}\\mathbf{x}^{(m)}) = (\\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$"}}],s37:[{q:{en:"What matrix equation defines the inverse $\\mathbf{A}^{-1}$ of a nonsingular square matrix $\\mathbf{A}$?",hu:"Milyen mátrixegyenlet határozza meg a $\\mathbf{A}$ nem szinguláris négyzetmátrix inverz $\\mathbf{A}^{-1}$ értékét?"},a:{en:"$\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$",hu:"$\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$"}},{q:{en:"Matrix inversion is computationally equivalent to solving which type of linear system?",hu:"A mátrixinverzió számításilag egyenértékű a lineáris rendszer melyik típusának megoldásával?"},a:{en:"A simultaneous linear system",hu:"Egyidejű lineáris rendszer"}},{q:{en:"In the simultaneous linear system used to find $\\mathbf{A}^{-1}$, what matrix serves as the right-hand side?",hu:"A $\\mathbf{A}^{-1}$ keresésére használt szimultán lineáris rendszerben melyik mátrix szolgál a jobb oldalként?"},a:{en:"The identity matrix $\\mathbf{I}$",hu:"A $\\mathbf{I}$ identitásmátrix"}},{q:{en:"Which elimination method is primarily used in the source material to compute the matrix inverse?",hu:"Melyik eliminációs módszert használják elsősorban a forrásanyagban a mátrix inverzének kiszámításához?"},a:{en:"Gauss-Jordan elimination",hu:"Gauss-Jordan kiesés"}},{q:{en:"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of multiplications and divisions?",hu:"Milyen általános komplexitású a Gauss-Jordan-elimináció a mátrix inverziójához a szorzások és osztások szempontjából?"},a:{en:"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$",hu:"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"}},{q:{en:"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of additions and subtractions?",hu:"Mi a Gauss-Jordan-elimináció általános összetettsége a mátrix inverziójához az összeadások és kivonások tekintetében?"},a:{en:"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$",hu:"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"}},{q:{en:"According to Exercise 5, what is the exact number of multiplications and divisions required for matrix inversion using Gauss-Jordan elimination?",hu:"Az 5. gyakorlat szerint pontosan hányszor kell szorozni és osztani a mátrix inverzióját Gauss-Jordan-eliminációval?"},a:{en:"$3n^3/2 - n/2$",hu:"$3n^3/2 - n/2$"}},{q:{en:"If an optimized algorithm avoids multiplications by zero in the identity matrix, how many multiplications and divisions does matrix inversion require?",hu:"Ha egy optimalizált algoritmus elkerüli a nullával való szorzást az azonosságmátrixban, hány szorzást és osztást igényel a mátrix inverziója?"},a:{en:"$n^3$",hu:"$n^3$"}},{q:{en:"What is the operation count for additions and subtractions in an optimized Gauss-Jordan matrix inversion algorithm?",hu:"Mennyi az összeadások és kivonások műveletszáma egy optimalizált Gauss-Jordan mátrixinverziós algoritmusban?"},a:{en:"$n^3 - 2n^2 + n$",hu:"$n^3 - 2n^2 + n$"}},{q:{en:"Why is it possible to reduce the operation count to $n^3$ when inverting a matrix using the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$?",hu:"Miért lehetséges a műveletek számát $n^3$-re csökkenteni, amikor egy mátrixot invertálunk a $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ egyenlettel?"},a:{en:"Because the identity matrix $\\mathbf{I}$ contains many zeros, making certain multiplications unnecessary.",hu:"Mivel a $\\mathbf{I}$ identitásmátrix sok nullát tartalmaz, ami szükségtelenné tesz bizonyos szorzásokat."}},{q:{en:"What is the purpose of using pivoting techniques with Gauss-Jordan elimination during matrix inversion?",hu:"Mi a célja a pivoting technikák használatának Gauss-Jordan-eliminációval a mátrix inverziója során?"},a:{en:"To reduce rounding errors or avoid division by zero.",hu:"A kerekítési hibák csökkentése vagy a nullával való osztás elkerülése érdekében."}},{q:{en:"Under what condition can Gaussian elimination with pivoting be performed?",hu:"Milyen feltételek mellett végezhető el a Gauss-elimináció elforgatással?"},a:{en:"$\\det(\\mathbf{A}) \\neq 0$",hu:"$\\det(\\mathbf{A}) \\neq 0$"}},{q:{en:"What is the relationship between $\\det(\\mathbf{A})$ and the determinant of the matrix after elimination $\\det(\\mathbf{A}^{(n-1)})$?",hu:"Mi a kapcsolat a $\\det(\\mathbf{A})$ és a mátrix determinánsa között a $\\det(\\mathbf{A}^{(n-1)})$ eliminációja után?"},a:{en:"$\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$",hu:"$\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$"}},{q:{en:"In the formula $\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$, what does the variable $s$ represent?",hu:"Mit jelent a $\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$ képletben a $s$ változó?"},a:{en:"The number of row changes (swaps) performed during elimination.",hu:"Az elimináció során végrehajtott sormódosítások (swapok) száma."}},{q:{en:"How is the determinant calculated using the pivot elements after Gaussian elimination?",hu:"Hogyan történik a determináns kiszámítása a pivot elemek segítségével a Gauss-elimináció után?"},a:{en:"$\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$",hu:"$\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$"}},{q:{en:"If the number of row changes in Gaussian elimination is even, what is the relationship between the original determinant and the product of the pivots?",hu:"Ha a sorváltások száma a Gauss-eliminációban páros, mi a kapcsolat az eredeti determináns és a pivotok szorzata között?"},a:{en:"They are equal.",hu:"Egyenrangúak."}},{q:{en:"If the number of row changes in Gaussian elimination is odd, how does the original determinant relate to the product of the pivots?",hu:"Ha a sorváltozások száma a Gauss-eliminációban páratlan, hogyan viszonyul az eredeti determináns a pivotok szorzatához?"},a:{en:"The determinant is the negative of the product of the pivots.",hu:"A determináns a forgáspontok szorzatának negatívja."}},{q:{en:"What structure is used as the starting point for Gauss-Jordan matrix inversion?",hu:"Milyen struktúrát használunk a Gauss-Jordan mátrixinverzió kiindulópontjaként?"},a:{en:"An augmented matrix $(\\mathbf{A}|\\mathbf{I})$",hu:"Egy kiterjesztett mátrix $(\\mathbf{A}|\\mathbf{I})$"}},{q:{en:"During Gauss-Jordan inversion, once the left side of the augmented matrix becomes $\\mathbf{I}$, what does the right side represent?",hu:"A Gauss-Jordan inverzió során, ha a kiterjesztett mátrix bal oldala $\\mathbf{I}$ lesz, mit jelent a jobb oldal?"},a:{en:"The inverse matrix $\\mathbf{A}^{-1}$",hu:"Az inverz mátrix $\\mathbf{A}^{-1}$"}},{q:{en:"What is the inverse of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$?",hu:"Mennyi a $\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$ mátrix inverze?"},a:{en:"$\\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}$",hu:"$\\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}$"}},{q:{en:"In Example 3.39, what were the diagonal elements (pivots) of the matrix after Gaussian elimination?",hu:"A 3.39. példában melyek voltak a mátrix átlós elemei (pivotjai) a Gauss-elimináció után?"},a:{en:"$1, 3, 1, 38$",hu:"$1, 3, 1, 38$"}},{q:{en:"What is the determinant of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}$?",hu:"Mi a $\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}$ mátrix meghatározója?"},a:{en:"$114$",hu:"$114$"}},{q:{en:"True or False: If a solution $\\mathbf{X}$ exists for $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$, then $\\mathbf{X}\\mathbf{A} = \\mathbf{I}$ also holds.",hu:"Igaz vagy hamis: Ha létezik $\\mathbf{X}$ megoldás a $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ számára, akkor a $\\mathbf{X}\\mathbf{A} = \\mathbf{I}$ is érvényes."},a:{en:"True",hu:"Igaz"}},{q:{en:"Term: Nonsingular Matrix",hu:"Fogalom: Nem szinguláris mátrix"},a:{en:"Definition: A square matrix that has an inverse, which is true if and only if its determinant is non-zero.",hu:"Definíció: Olyan négyzetmátrix, amelynek van inverze, amely akkor és csak akkor igaz, ha a determinánsa nem nulla."}},{q:{en:"Concept: Simultaneous Linear System",hu:"Koncepció: Simultán lineáris rendszer"},a:{en:"Definition: A set of linear systems that share the same coefficient matrix $\\mathbf{A}$ but have different right-hand side vectors.",hu:"Definíció: Lineáris rendszerek halmaza, amelyek ugyanazon a $\\mathbf{A}$ együtthatómátrixon osztoznak, de eltérő jobb oldali vektorokkal rendelkeznek."}},{q:{en:"In the Gauss-Jordan process, what is the goal of the 'elimination step' relative to the diagonal?",hu:"A Gauss-Jordan folyamatban mi a célja az „eliminációs lépésnek” az átlóhoz képest?"},a:{en:"To make all numbers above and below the diagonal equal to zero.",hu:"Ahhoz, hogy az átló feletti és alatti összes szám nullával egyenlő legyen."}},{q:{en:"In the Gauss-Jordan process, what is the final step for each row to ensure the coefficient matrix becomes the identity matrix?",hu:"A Gauss-Jordan folyamatban mi az utolsó lépés az egyes soroknál annak biztosítására, hogy az együtthatómátrix azonosságmátrixmá váljon?"},a:{en:"Divide the row by the value of the diagonal (pivot) element to make it equal to $1$.",hu:"Ossza el a sort az átlós (pivot) elem értékével, hogy egyenlő legyen a $1$ értékkel."}},{q:{en:"Which property of the determinant allows it to be calculated as the product of the diagonal elements of an upper triangular matrix?",hu:"A determináns melyik tulajdonsága teszi lehetővé, hogy egy felső háromszögmátrix átlós elemeinek szorzataként számítsuk ki?"},a:{en:"The determinant of an upper triangular matrix is the product of its main diagonal entries.",hu:"Egy felső háromszög alakú mátrix determinánsa a fő átlós bejegyzéseinek szorzata."}},{q:{en:"If no row changes occur during Gaussian elimination, how is $\\det(\\mathbf{A})$ related to the pivot elements?",hu:"Ha nem történik sorváltás a Gauss-elimináció során, hogyan kapcsolódik a $\\det(\\mathbf{A})$ a pivot elemekhez?"},a:{en:"It is exactly the product of the pivot elements.",hu:"Pontosan a pivot elemek szorzata."}},{q:{en:"What numerical benefit does pivoting provide when a diagonal element is very small?",hu:"Milyen számszerű előnyökkel jár a forgatás, ha egy átlós elem nagyon kicsi?"},a:{en:"It reduces rounding errors that occur when dividing by small numbers.",hu:"Csökkenti a kis számokkal való osztásakor fellépő kerekítési hibákat."}},{q:{en:"What is the result of applying $\\mathbf{A}\\mathbf{A}^{-1}$?",hu:"Mi az eredménye a $\\mathbf{A}\\mathbf{A}^{-1}$ alkalmazásának?"},a:{en:"The identity matrix $\\mathbf{I}$",hu:"A $\\mathbf{I}$ identitásmátrix"}},{q:{en:"The augmented matrix used for inversion is $(\\mathbf{A}|\\mathbf{I})$. What is the final form of this matrix after successful Gauss-Jordan elimination?",hu:"Az inverzióhoz használt kiterjesztett mátrix a $(\\mathbf{A}|\\mathbf{I})$. Mi ennek a mátrixnak a végleges formája a sikeres Gauss-Jordan kiesést követően?"},a:{en:"$(\\mathbf{I}|\\mathbf{A}^{-1})$",hu:"$(\\mathbf{I}|\\mathbf{A}^{-1})$"}},{q:{en:"What specific matrix type is produced at the end of standard Gaussian elimination (before the Jordan steps)?",hu:"Milyen konkrét mátrixtípus jön létre a standard Gauss-elimináció végén (a Jordan lépések előtt)?"},a:{en:"An upper triangular matrix",hu:"Egy felső háromszög mátrix"}},{q:{en:"How many multiplications/divisions are needed to invert a $10 \\times 10$ matrix using the optimized algorithm mentioned in Exercise 6?",hu:"Hány szorzásra/osztásra van szükség egy $10 \\times 10$ mátrix megfordításához a 6. gyakorlatban említett optimalizált algoritmus segítségével?"},a:{en:"$1000$ (since $n^3 = 10^3$)",hu:"$1000$ ($n^3 = 10^3$ óta)"}},{q:{en:"Formula: Determinant using pivots",hu:"Képlet: Determináns pivotokat használva"},a:{en:"$\\det(\\mathbf{A}) = (-1)^s \\prod_{i=1}^{n} a_{ii}^{(i-1)}$",hu:"$\\det(\\mathbf{A}) = (-1)^s \\prod_{i=1}^{n} a_{ii}^{(i-1)}$"}},{q:{en:"Why is Gaussian elimination with pivoting preferred over simple Gaussian elimination for computer implementations?",hu:"Miért részesítik előnyben a Gauss-eliminációt a forgatással az egyszerű Gauss-eliminációval szemben a számítógépes megvalósításoknál?"},a:{en:"To ensure numerical stability and avoid failures due to zero pivots.",hu:"A számszerű stabilitás biztosítása és a nulla forgáspontok miatti meghibásodások elkerülése érdekében."}},{q:{en:"In the $3 \\times 3$ inversion example, what was the pivot value in the third row after eliminating the first two columns?",hu:"A $3 \\times 3$ inverziós példában mi volt a pivot értéke a harmadik sorban az első két oszlop eltávolítása után?"},a:{en:"$3$",hu:"$3$"}},{q:{en:"If a square matrix $\\mathbf{A}$ has a determinant of $0$, what can be said about its inverse $\\mathbf{A}^{-1}$?",hu:"Ha egy $\\mathbf{A}$ négyzetmátrixnak $0$ determinánsa van, mit mondhatunk az inverz $\\mathbf{A}^{-1}$-ről?"},a:{en:"The inverse does not exist.",hu:"Az inverz nem létezik."}},{q:{en:"How does swapping two rows in a matrix affect the value of its determinant?",hu:"Hogyan befolyásolja a mátrix két sorának felcserélése a determináns értékét?"},a:{en:"It multiplies the determinant by $-1$.",hu:"A determinánst megszorozza $-1$-vel."}},{q:{en:"Cloze: The number of operations needed for matrix inversion is roughly proportional to $n$ to the power of _____.",hu:"Close: A mátrixinverzióhoz szükséges műveletek száma nagyjából arányos $n$-vel _____ hatványával."},a:{en:"$3$",hu:"$3$"}},{q:{en:"Cloze: To find the inverse of $\\mathbf{A}$, one can solve the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ using the _____ method.",hu:"Cloze: A $\\mathbf{A}$ inverzének megtalálásához a $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ egyenletet a _____ módszerrel megoldhatjuk."},a:{en:"Gauss-Jordan",hu:"Gauss-Jordánia"}},{q:{en:"In the context of the source material, what is the meaning of a 'nonsingular' matrix?",hu:"A forrásanyaggal összefüggésben mit jelent a „nem szinguláris” mátrix?"},a:{en:"A matrix for which the determinant is not zero.",hu:"Olyan mátrix, amelynél a determináns nem nulla."}},{q:{en:"In the $4 \\times 4$ determinant example, why was the sign factor $(-1)^s$ equal to $1$?",hu:"A $4 \\times 4$ determináns példában miért volt egyenlő a $(-1)^s$ előjeltényező $1$-vel?"},a:{en:"Because the Gaussian elimination was performed without any row changes ($s=0$).",hu:"Mivel a Gauss-elimináció sorváltás nélkül történt ($s=0$)."}},{q:{en:"What matrix dimension was the coefficient matrix in Example 3.39?",hu:"Milyen mátrixdimenzió volt az együtthatómátrix a 3.39. példában?"},a:{en:"$4 \\times 4$",hu:"$4 \\times 4$"}},{q:{en:"How does the Gauss-Jordan method differ from Gaussian elimination in its final result for the coefficient matrix?",hu:"Miben különbözik a Gauss-Jordan módszer a Gauss-eliminációtól az együtthatómátrixra vonatkozó végeredményében?"},a:{en:"Gauss-Jordan produces an identity matrix, whereas Gaussian elimination produces an upper triangular matrix.",hu:"A Gauss-Jordan azonosságmátrixot, míg a Gauss-elimináció egy felső háromszögmátrixot hoz létre."}},{q:{en:"What is the identity matrix $\\mathbf{I}$ defined as in the context of matrix inversion?",hu:"Hogyan definiálható a $\\mathbf{I}$ identitásmátrix a mátrixinverzió összefüggésében?"},a:{en:"A square matrix with ones on the main diagonal and zeros elsewhere.",hu:"Négyzetes mátrix a főátlón egyesekkel, máshol pedig nullákkal."}},{q:{en:"Which operation is performed first in the Gauss-Jordan example to eliminate the $-1$ in the second row, first column?",hu:"Melyik műveletet hajtják végre először a Gauss-Jordan példában a $-1$ eltávolítására a második sorban, az első oszlopban?"},a:{en:"Adding the first row to the second row ($R2 \\leftarrow R2 + R1$).",hu:"Az első sor hozzáadása a második sorhoz ($R2 \\leftarrow R2 + R1$)."}},{q:{en:"Which operation is performed to eliminate the $-2$ in the third row, first column of the $3 \\times 3$ example?",hu:"Melyik műveletet hajtják végre a $-2$ eltávolítására a $3 \\times 3$ példa harmadik sorában, első oszlopában?"},a:{en:"Adding twice the first row to the third row ($R3 \\leftarrow R3 + 2R1$).",hu:"Az első sor kétszeres hozzáadása a harmadik sorhoz ($R3 \\leftarrow R3 + 2R1$)."}},{q:{en:"In the final step of the $3 \\times 3$ inversion example, the third row $(0, 0, 3 | 2, 0, 1)$ was divided by what value?",hu:"A $3 \\times 3$ inverziós példa utolsó lépésében a harmadik sor $(0, 0, 3 | 2, 0, 1)$ hányadosa hány értékkel volt elosztva?"},a:{en:"$3$",hu:"$3$"}},{q:{en:"What is the common factor factored out from the resulting matrix in the inverse example?",hu:"Mi az a közös tényező, amelyet az inverz példában kapott mátrixból veszünk ki?"},a:{en:"$\\frac{1}{3}$",hu:"$\\frac{1}{3}$"}},{q:{en:"Cloze: The Gaussian elimination with pivoting can be performed if and only if $\\det(\\mathbf{A})$ is _____.",hu:"Close: A Gauss-elimináció elforgatással akkor és csak akkor hajtható végre, ha a $\\det(\\mathbf{A})$ _____."},a:{en:"Non-zero",hu:"Nem nulla"}},{q:{en:"Why is multiplication by zero not computed in specialized matrix inversion algorithms?",hu:"Miért nem számítják ki a nullával való szorzást speciális mátrixinverziós algoritmusokban?"},a:{en:"To improve efficiency and reduce the total number of operations.",hu:"A hatékonyság javítása és a műveletek teljes számának csökkentése érdekében."}},{q:{en:"In the transcript, what is described as the 'most efficient way' to compute the inverse in terms of operations?",hu:"Az átiratban mit írnak le a „leghatékonyabb módszernek” az inverz kiszámítására a műveletek szempontjából?"},a:{en:"Organizing Gauss-Jordan elimination using an augmented matrix $(\\mathbf{A}|\\mathbf{I})$.",hu:"A Gauss-Jordan-elimináció megszervezése egy kiterjesztett $(\\mathbf{A}|\\mathbf{I})$ mátrix segítségével."}},{q:{en:"According to the transcript, how do we determine the sign of the determinant relative to the product of pivots?",hu:"Az átirat szerint hogyan határozzuk meg a determináns előjelét a forgáspontok szorzatához viszonyítva?"},a:{en:"By checking if the number of row changes was even (same sign) or odd (opposite sign).",hu:"Ellenőrizve, hogy a sorváltások száma páros (azonos előjel) vagy páratlan (ellentétes előjel) volt-e."}},{q:{en:"What is the determinant of a matrix where one of the pivot elements becomes zero during elimination and no further pivoting can move a non-zero element into that position?",hu:"Mi a determinánsa egy olyan mátrixnak, ahol az egyik pivot elem nullává válik az elimináció során, és a további elforgatás nem tud ebbe a pozícióba mozgatni egy nem nulla elemet?"},a:{en:"Zero",hu:"Nulla"}}]};function Se({entries:e}){const{lang:n}=S(),[i,a]=y.useState(null);return t.jsx("div",{className:"stack",style:{gap:8},children:e.map((o,h)=>{const l=i===h;return t.jsxs("button",{className:"theorem-card",style:{textAlign:"left",cursor:"pointer",width:"100%"},onClick:()=>a(l?null:h),children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[t.jsx("span",{className:"label",style:{margin:0},children:o.term[n]}),t.jsx("span",{className:"muted",children:l?"−":"+"})]}),l&&t.jsx("div",{style:{marginTop:8},children:t.jsx(se,{markdown:o.def[n]})})]},h)})})}const Ee={shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}},te=e=>Array.from({length:e},(n,i)=>i);function Oe(e){const n=te(e);for(let i=n.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[n[i],n[a]]=[n[a],n[i]]}return n}function We({cards:e}){const{lang:n}=S(),i=$=>Ee[$][n],[a,o]=y.useState(()=>te(e.length)),[h,l]=y.useState(0),[u,s]=y.useState(!1),d=y.useMemo(()=>e[a[h]],[e,a,h]),p=$=>typeof $=="string"?$:$[n],v=$=>{s(!1),l(q=>(q+$+e.length)%e.length)};return t.jsxs("div",{className:"stack",style:{gap:10,maxWidth:640},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("span",{className:"section-eyebrow",children:[h+1," / ",e.length]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"btn",onClick:()=>{o(Oe(e.length)),l(0),s(!1)},children:i("shuffle")}),t.jsx("button",{className:"btn",onClick:()=>{o(te(e.length)),l(0),s(!1)},children:i("reset")})]})]}),t.jsxs("button",{className:"theorem-card",style:{textAlign:"left",cursor:"pointer",minHeight:160,width:"100%"},onClick:()=>s($=>!$),children:[t.jsx("span",{className:"label",style:{margin:0},children:i(u?"answer":"question")}),t.jsx("div",{style:{marginTop:8},children:t.jsx(se,{markdown:p(u?d.a:d.q)})})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10},children:[t.jsx("button",{className:"btn",onClick:()=>v(-1),children:i("prev")}),t.jsx("button",{className:"btn",style:{flex:1},onClick:()=>s($=>!$),children:i(u?"showQuestion":"showAnswer")}),t.jsx("button",{className:"btn",onClick:()=>v(1),children:i("next")})]})]})}const He={s31:[{id:"q-s31-1",prompt:{en:"An $n$-dimensional symmetric square matrix $A=(a_{ij})$ is positive definite if and only if:",hu:"Egy $n$-dimenziós szimmetrikus $A=(a_{ij})$ négyzetes mátrix akkor és csak akkor pozitív definit, ha:"},options:[{en:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$",hu:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$"},{en:"All of its principal minors are positive",hu:"Minden sarokminorja pozitív"},{en:"$\\det(A)\\neq0$",hu:"$\\det(A)\\neq0$"},{en:"$\\det(A)>0$",hu:"$\\det(A)>0$"}],answer:1,explanation:{en:"Sylvester's criterion: a symmetric matrix is positive definite iff all leading principal minors are positive.",hu:"Sylvester-kritérium: egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha minden vezető sarokminorja pozitív."}},{id:"q-s31-2",prompt:{en:"An $n$-dimensional square matrix $A=(a_{ij})$ is positive definite if it is symmetric and:",hu:"Egy $n$-dimenziós $A=(a_{ij})$ négyzetes mátrix pozitív definit, ha szimmetrikus és:"},options:[{en:"$x^T Ax>0 \\quad \\text{for all } x\\neq0$",hu:"$x^T Ax>0 \\quad \\text{minden } x\\neq0\\text{-ra}$"},{en:"$x^T Ax\\geq 0 \\quad \\text{for all } x\\neq0$",hu:"$x^T Ax\\geq 0 \\quad \\text{minden } x\\neq0\\text{-ra}$"},{en:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$",hu:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$"},{en:"$x^T Ax<0 \\quad \\text{for all } x\\neq0$",hu:"$x^T Ax<0 \\quad \\text{minden } x\\neq0\\text{-ra}$"}],answer:0,explanation:{en:"Positive definiteness is defined by the quadratic form xᵀAx > 0 for every nonzero x.",hu:"A pozitív definitséget a xᵀAx > 0 kvadratikus alak definiálja minden nem nulla x-re."}},{id:"q-s31-3",prompt:{en:"If $A$ is diagonally dominant, then:",hu:"Ha $A$ diagonálisan domináns, akkor:"},options:[{en:"$A$ is invertible",hu:"$A$ invertálható"},{en:"The linear system $Ax=b$ has a unique solution",hu:"Az $Ax=b$ lineáris rendszernek egyértelmű megoldása van"},{en:"$\\det(A)\\neq0$",hu:"$\\det(A)\\neq0$"},{en:"All the above properties hold",hu:"A fenti tulajdonságok mind teljesülnek"}],answer:3,explanation:{en:"Strict diagonal dominance implies invertibility, det(A) ≠ 0, and a unique solution — all of them.",hu:"A szigorú diagonális dominancia maga után vonja az invertálhatóságot, a det(A) ≠ 0-t és az egyértelmű megoldást — mindegyiket."}}],s32:[{id:"q-s32-1",prompt:{en:"The determinant of a triangular matrix is equal to:",hu:"Egy háromszögmátrix determinánsa egyenlő:"},options:[{en:"The product of all matrix elements.",hu:"Az összes mátrixelem szorzatával."},{en:"Zero if any off-diagonal element is non-zero.",hu:"Nullával, ha bármely átlón kívüli elem nem nulla."},{en:"The product of diagonal elements.",hu:"Az átlós elemek szorzatával."},{en:"The sum of diagonal elements.",hu:"Az átlós elemek összegével."}],answer:2,explanation:{en:"For a triangular matrix the determinant is the product of the diagonal entries.",hu:"Egy háromszögmátrix determinánsa az átlós elemek szorzata."}},{id:"q-s32-2",prompt:{en:"Which of the following best describes the shape of the matrix for backward substitution?",hu:"Az alábbiak közül melyik írja le legjobban a visszahelyettesítéshez tartozó mátrix alakját?"},options:[{en:"Full matrix with no special structure",hu:"Teli mátrix, különleges szerkezet nélkül"},{en:"Upper triangular matrix",hu:"Felső háromszögmátrix"},{en:"Lower triangular matrix",hu:"Alsó háromszögmátrix"},{en:"Sparse matrix",hu:"Ritka mátrix"}],answer:1,explanation:{en:"Backward substitution solves an upper triangular system from the last unknown upward.",hu:"A visszahelyettesítés egy felső háromszögrendszert old meg az utolsó ismeretlentől felfelé."}},{id:"q-s32-3",prompt:{en:"What is the time complexity (in terms of multiplications/divisions) of solving an upper triangular system using backward substitution?",hu:"Mi a felső háromszögrendszer visszahelyettesítéssel való megoldásának időkomplexitása (szorzások/osztások számában)?"},options:[{en:"$O(n^2)$",hu:"$O(n^2)$"},{en:"$O(n \\log n)$",hu:"$O(n \\log n)$"},{en:"$O(n^3)$",hu:"$O(n^3)$"},{en:"$O(n)$",hu:"$O(n)$"}],answer:0,explanation:{en:"Backward substitution costs about n²/2 multiplications/divisions, i.e. O(n²).",hu:"A visszahelyettesítés kb. n²/2 szorzást/osztást igényel, azaz O(n²)."}},{id:"q-s32-4",prompt:{en:"What is the primary numerical method used for solving upper triangular systems?",hu:"Mi a felső háromszögrendszerek megoldásának fő numerikus módszere?"},options:[{en:"Gaussian elimination",hu:"Gauss-elimináció"},{en:"Forward substitution",hu:"Előrehelyettesítés"},{en:"Backward substitution",hu:"Visszahelyettesítés"},{en:"LU decomposition",hu:"LU-felbontás"}],answer:2,explanation:{en:"Upper triangular systems are solved directly by backward substitution.",hu:"A felső háromszögrendszereket közvetlenül visszahelyettesítéssel oldjuk meg."}},{id:"q-s32-5",prompt:{en:"How many additions and subtractions are required in backward substitution for an $n$-dimensional triangular linear system?",hu:"Hány összeadás és kivonás szükséges a visszahelyettesítéshez egy $n$-dimenziós háromszög lineáris rendszernél?"},options:[{en:"$\\frac{n^2}{4}+\\mathcal{O}(n)$",hu:"$\\frac{n^2}{4}+\\mathcal{O}(n)$"},{en:"$n^2 +\\mathcal{O}(n)$",hu:"$n^2 +\\mathcal{O}(n)$"},{en:"$\\frac{n^2}{2} +\\mathcal{O}(n)$",hu:"$\\frac{n^2}{2} +\\mathcal{O}(n)$"},{en:"$\\frac{n^2}{3}+\\mathcal{O}(n)$",hu:"$\\frac{n^2}{3}+\\mathcal{O}(n)$"}],answer:2,explanation:{en:"The additions/subtractions total (n−1)n/2 = n²/2 + O(n).",hu:"Az összeadások/kivonások összesen (n−1)n/2 = n²/2 + O(n)."}}],s33:[{id:"q-s33-1",prompt:{en:"What happens when a zero pivot is encountered during Gaussian elimination without pivoting?",hu:"Mi történik, ha nulla pivotelemet találunk a Gauss-elimináció során pivotálás nélkül?"},options:[{en:"The algorithm continues with the next row",hu:"Az algoritmus a következő sorral folytatódik"},{en:"The row is skipped",hu:"A sort átugorjuk"},{en:"The algorithm cannot be continued, and it does not provide a solution",hu:"Az algoritmus nem folytatható, és nem ad megoldást"},{en:"The matrix becomes diagonal",hu:"A mátrix diagonálissá válik"}],answer:2,explanation:{en:"Dividing by a zero pivot is impossible, so without pivoting the elimination breaks down.",hu:"Nulla pivotelemmel nem lehet osztani, így pivotálás nélkül az elimináció megakad."}},{id:"q-s33-2",prompt:{en:"What can we try to do if a pivot element is 0 in the Gaussian elimination?",hu:"Mit próbálhatunk tenni, ha egy pivotelem 0 a Gauss-eliminációban?"},options:[{en:"Use Newton method",hu:"Newton-módszert használni"},{en:"Omit that row from the equation",hu:"Kihagyni azt a sort az egyenletből"},{en:"We can change rows in the equation",hu:"Sorokat cserélhetünk az egyenletben"},{en:"Use forward substitution first",hu:"Előbb előrehelyettesítést használni"}],answer:2,explanation:{en:"Swapping in a row with a nonzero pivot (pivoting) lets elimination continue.",hu:"Egy nem nulla pivotelemű sor becserélése (pivotálás) lehetővé teszi az elimináció folytatását."}},{id:"q-s33-3",prompt:{en:"What is the time complexity of Gaussian elimination in terms of the number of operations?",hu:"Mi a Gauss-elimináció időkomplexitása a műveletek számában?"},options:[{en:"$O(n^3)$",hu:"$O(n^3)$"},{en:"$O(n^2)$",hu:"$O(n^2)$"},{en:"$O(n)$",hu:"$O(n)$"},{en:"$O(n \\log n)$",hu:"$O(n \\log n)$"}],answer:0,explanation:{en:"Gaussian elimination costs about n³/3 operations, i.e. O(n³).",hu:"A Gauss-elimináció kb. n³/3 műveletet igényel, azaz O(n³)."}},{id:"q-s33-4",prompt:{en:"Which form does the system take after performing all steps of Gaussian elimination?",hu:"Milyen alakot vesz fel a rendszer a Gauss-elimináció összes lépése után?"},options:[{en:"Upper triangular form",hu:"Felső háromszög alak"},{en:"Lower triangular form",hu:"Alsó háromszög alak"},{en:"Symmetric form",hu:"Szimmetrikus alak"},{en:"Diagonal matrix",hu:"Diagonális mátrix"}],answer:0,explanation:{en:"Forward elimination reduces the coefficient matrix to upper triangular form.",hu:"Az előre-elimináció felső háromszög alakra hozza az együtthatómátrixot."}},{id:"q-s33-5",prompt:{en:"What is the form of the starting matrix if we solve a linear system $Ax=b$ with Gaussian elimination?",hu:"Milyen alakú a kezdőmátrix, ha az $Ax=b$ lineáris rendszert Gauss-eliminációval oldjuk meg?"},options:[{en:"We use the augmented matrix $(A|b)$",hu:"A $(A|b)$ kibővített mátrixot használjuk"},{en:"We use the augmented matrix $(A|A|b)$",hu:"A $(A|A|b)$ kibővített mátrixot használjuk"},{en:"We use the augmented matrix $(A|I)$",hu:"A $(A|I)$ kibővített mátrixot használjuk"},{en:"We use the augmented matrix $(b|A)$",hu:"A $(b|A)$ kibővített mátrixot használjuk"}],answer:0,explanation:{en:"Elimination operates on the augmented matrix (A | b).",hu:"Az elimináció a kibővített (A | b) mátrixon dolgozik."}},{id:"q-s33-6",prompt:{en:"Which of the following is an advantage of partial pivoting?",hu:"Az alábbiak közül melyik a részleges pivotálás előnye?"},options:[{en:"Reduces the number of operations",hu:"Csökkenti a műveletek számát"},{en:"Improves numerical accuracy by avoiding division by small numbers",hu:"Javítja a numerikus pontosságot a kis számokkal való osztás elkerülésével"},{en:"Simplifies matrix storage",hu:"Egyszerűsíti a mátrix tárolását"},{en:"Ensures exact solutions",hu:"Pontos megoldásokat biztosít"}],answer:1,explanation:{en:"Choosing the largest-magnitude pivot avoids dividing by tiny numbers, improving accuracy.",hu:"A legnagyobb abszolút értékű pivotelem választása elkerüli a parányi számokkal való osztást, javítva a pontosságot."}},{id:"q-s33-7",prompt:{en:"In partial pivoting, which operation is performed after selecting the pivot?",hu:"A részleges pivotálásnál melyik műveletet végezzük a pivotelem kiválasztása után?"},options:[{en:"Diagonalization",hu:"Diagonalizálás"},{en:"Matrix inversion",hu:"Mátrixinvertálás"},{en:"Row swapping",hu:"Sorcsere"},{en:"Column swapping",hu:"Oszlopcsere"}],answer:2,explanation:{en:"Partial pivoting swaps the chosen row into the pivot position (rows only).",hu:"A részleges pivotálás a kiválasztott sort cseréli a pivotpozícióba (csak sorokat)."}},{id:"q-s33-8",prompt:{en:"In partial pivoting, if all entries in the pivot column below the diagonal are zero, then:",hu:"A részleges pivotálásnál, ha a pivotoszlop átló alatti összes eleme nulla, akkor:"},options:[{en:"The system has no solution or infinitely many solutions",hu:"A rendszernek nincs megoldása, vagy végtelen sok megoldása van"},{en:"Column swapping is needed",hu:"Oszlopcsere szükséges"},{en:"The matrix is symmetric",hu:"A mátrix szimmetrikus"},{en:"The pivot is the diagonal entry",hu:"A pivotelem az átlós elem"}],answer:0,explanation:{en:"A fully zero pivot column means the matrix is singular, so there is no unique solution.",hu:"A teljesen nulla pivotoszlop azt jelenti, hogy a mátrix szinguláris, így nincs egyértelmű megoldás."}},{id:"q-s33-9",prompt:{en:"In Gaussian elimination, what is the purpose of pivoting?",hu:"A Gauss-eliminációban mi a pivotálás célja?"},options:[{en:"To increase the rank of the matrix",hu:"A mátrix rangjának növelése"},{en:"To simplify the system to a homogeneous one",hu:"A rendszer homogénné egyszerűsítése"},{en:"To improve numerical stability",hu:"A numerikus stabilitás javítása"},{en:"To reduce computational time",hu:"A számítási idő csökkentése"}],answer:2,explanation:{en:"Pivoting improves numerical stability (and avoids zero pivots).",hu:"A pivotálás javítja a numerikus stabilitást (és elkerüli a nulla pivotelemeket)."}},{id:"q-s33-10",prompt:{en:"What kind of matrix can cause Gaussian elimination to fail without pivoting?",hu:"Milyen mátrix okozhatja a Gauss-elimináció kudarcát pivotálás nélkül?"},options:[{en:"Singular matrix",hu:"Szinguláris mátrix"},{en:"Sparse matrix",hu:"Ritka mátrix"},{en:"Orthogonal matrix",hu:"Ortogonális mátrix"},{en:"Symmetric matrix",hu:"Szimmetrikus mátrix"}],answer:0,explanation:{en:"A singular matrix yields a zero pivot, causing breakdown without pivoting.",hu:"Egy szinguláris mátrix nulla pivotelemet ad, ami pivotálás nélkül megakasztja az eliminációt."}},{id:"q-s33-11",prompt:{en:"In complete pivoting, the pivot element is chosen from:",hu:"A teljes pivotálásnál a pivotelemet honnan választjuk:"},options:[{en:"The current diagonal",hu:"Az aktuális átlóból"},{en:"The entire matrix",hu:"A teljes mátrixból"},{en:"The current column",hu:"Az aktuális oszlopból"},{en:"The submatrix of the coefficients from the current row and column onward",hu:"Az aktuális sortól és oszloptól kezdődő együtthatók részmátrixából"}],answer:3,explanation:{en:"Complete pivoting searches the remaining submatrix (rows and columns from k onward).",hu:"A teljes pivotálás a maradék részmátrixban keres (a k-tól kezdődő sorokban és oszlopokban)."}},{id:"q-s33-12",prompt:{en:"What does complete pivoting involve?",hu:"Mit foglal magában a teljes pivotálás?"},options:[{en:"Swapping both rows and columns to position the largest element on the pivot",hu:"Sorok és oszlopok cseréjét a legnagyobb elem pivotpozícióba helyezéséhez"},{en:"Only column swaps",hu:"Csak oszlopcseréket"},{en:"Swapping diagonal elements",hu:"Átlós elemek cseréjét"},{en:"Only row swaps",hu:"Csak sorcseréket"}],answer:0,explanation:{en:"Complete pivoting swaps both rows and columns to bring the largest entry to the pivot.",hu:"A teljes pivotálás sorokat és oszlopokat is cserél, hogy a legnagyobb elem a pivotpozícióba kerüljön."}}],s34:[{id:"q-s34-1",prompt:{en:"The Gauss-Jordan method is primarily used for which of the following purposes?",hu:"A Gauss–Jordan-módszert elsősorban melyik célra használjuk?"},options:[{en:"Approximating integrals",hu:"Integrálok közelítésére"},{en:"Solving non-linear equations",hu:"Nemlineáris egyenletek megoldására"},{en:"Finding exact solutions to linear systems or computing matrix inverses",hu:"Lineáris rendszerek pontos megoldására vagy mátrixinverzek kiszámítására"},{en:"Computing eigenvalues",hu:"Sajátértékek kiszámítására"}],answer:2,explanation:{en:"Gauss–Jordan reduces (A | b) to (I | x) and is also the standard way to invert a matrix.",hu:"A Gauss–Jordan az (A | b)-t (I | x)-re redukálja, és ez a mátrixinvertálás szokásos módja is."}},{id:"q-s34-2",prompt:{en:"Which row operation is used to eliminate both upper and lower elements in a column?",hu:"Melyik sorművelettel tüntetjük el egy oszlop felső és alsó elemeit is?"},options:[{en:"Full pivoting",hu:"Teljes pivotálás"},{en:"Gauss-Jordan elimination",hu:"Gauss–Jordan-elimináció"},{en:"Backward substitution",hu:"Visszahelyettesítés"},{en:"Forward elimination",hu:"Előre-elimináció"}],answer:1,explanation:{en:"Gauss–Jordan clears entries both above and below each pivot.",hu:"A Gauss–Jordan minden pivotelem fölött és alatt is kinullázza az elemeket."}},{id:"q-s34-3",prompt:{en:"Which of the following operations is NOT used in Gauss-Jordan elimination?",hu:"Az alábbi műveletek közül melyiket NEM használjuk a Gauss–Jordan-eliminációban?"},options:[{en:"Swapping rows",hu:"Sorcsere"},{en:"Multiplying a row by a non-zero scalar",hu:"Egy sor szorzása nem nulla skalárral"},{en:"Multiplying a column by a non-zero scalar",hu:"Egy oszlop szorzása nem nulla skalárral"},{en:"Adding a multiple of one row to another",hu:"Egy sor többszörösének hozzáadása egy másikhoz"}],answer:2,explanation:{en:"Only elementary row operations are allowed; scaling a column is not one of them.",hu:"Csak elemi sorműveletek megengedettek; egy oszlop skálázása nem ilyen."}},{id:"q-s34-4",prompt:{en:"In Gauss-Jordan elimination, how are the non-pivot elements in the pivot column handled?",hu:"A Gauss–Jordan-eliminációban hogyan kezeljük a pivotoszlop nem pivot elemeit?"},options:[{en:"They are reduced to 1",hu:"1-re redukáljuk őket"},{en:"They are made zero",hu:"Nullává tesszük őket"},{en:"They are copied to the result matrix",hu:"Átmásoljuk az eredménymátrixba"},{en:"They are left as is",hu:"Változatlanul hagyjuk"}],answer:1,explanation:{en:"Every off-pivot entry in the pivot column is eliminated to zero.",hu:"A pivotoszlop minden nem pivot elemét nullára eliminálunk."}},{id:"q-s34-5",prompt:{en:"How is a pivot element treated during Gauss-Jordan elimination?",hu:"Hogyan kezeljük a pivotelemet a Gauss–Jordan-elimináció során?"},options:[{en:"It is left unchanged",hu:"Változatlanul hagyjuk"},{en:"It is scaled to 1 and used to eliminate all other entries in its column",hu:"1-re skálázzuk, és vele elimináljuk az oszlop összes többi elemét"},{en:"It is replaced by a random number",hu:"Véletlen számra cseréljük"},{en:"It is eliminated from the matrix",hu:"Eltávolítjuk a mátrixból"}],answer:1,explanation:{en:"The pivot row is normalized so the pivot is 1, then used to zero the rest of the column.",hu:"A pivotsort úgy normáljuk, hogy a pivot 1 legyen, majd vele nullázzuk az oszlop többi részét."}}],s35:[{id:"q-s35-1",prompt:{en:"What type of numerical issue can arise in the tridiagonal Gaussian elimination algorithm if the pivot is zero?",hu:"Milyen numerikus probléma léphet fel a tridiagonális Gauss-eliminációs algoritmusban, ha a pivot nulla?"},options:[{en:"Loss of orthogonality",hu:"Ortogonalitás elvesztése"},{en:"Division by zero",hu:"Nullával osztás"},{en:"Infinite loop",hu:"Végtelen ciklus"},{en:"Overflow error",hu:"Túlcsordulási hiba"}],answer:1,explanation:{en:"A zero pivot forces a division by zero in the elimination.",hu:"A nulla pivot nullával osztáshoz vezet az eliminációban."}},{id:"q-s35-2",prompt:{en:"The tridiagonal Gaussian elimination algorithm assumes what property of the coefficient matrix?",hu:"A tridiagonális Gauss-eliminációs algoritmus milyen tulajdonságot tételez fel az együtthatómátrixról?"},options:[{en:"Non-zero diagonal entries",hu:"Nem nulla átlós elemek"},{en:"Orthogonality",hu:"Ortogonalitás"},{en:"Symmetry",hu:"Szimmetria"},{en:"Diagonal dominance",hu:"Diagonális dominancia"}],answer:0,explanation:{en:"The pivot-free Thomas algorithm needs the diagonal entries to stay nonzero.",hu:"A pivotálás nélküli Thomas-algoritmusnak az átlós elemek nem nulla volta szükséges."}},{id:"q-s35-3",prompt:{en:"Which method is typically used to solve diagonally dominant tridiagonal linear systems efficiently?",hu:"Melyik módszert használjuk jellemzően a diagonálisan domináns tridiagonális lineáris rendszerek hatékony megoldására?"},options:[{en:"Gaussian elimination without pivoting",hu:"Gauss-elimináció pivotálás nélkül"},{en:"Gaussian elimination with complete pivoting",hu:"Gauss-elimináció teljes pivotálással"},{en:"Jacobi method",hu:"Jacobi-módszer"},{en:"Gauss-Jordan elimination",hu:"Gauss–Jordan-elimináció"}],answer:0,explanation:{en:"Diagonal dominance makes pivoting unnecessary, so the O(n) Thomas algorithm (Gaussian elimination without pivoting) is used.",hu:"A diagonális dominancia feleslegessé teszi a pivotálást, így az O(n)-es Thomas-algoritmust (Gauss-elimináció pivotálás nélkül) használjuk."}},{id:"q-s35-4",prompt:{en:"For an $n$-dimensional tridiagonal system, the Gaussian elimination for a tridiagonal system requires how many operations (approximately)?",hu:"Egy $n$-dimenziós tridiagonális rendszernél a tridiagonális Gauss-elimináció hány műveletet igényel (közelítőleg)?"},options:[{en:"$O(n^2)$",hu:"$O(n^2)$"},{en:"$O(\\log n)$",hu:"$O(\\log n)$"},{en:"$O(n^3)$",hu:"$O(n^3)$"},{en:"$O(n)$",hu:"$O(n)$"}],answer:3,explanation:{en:"The Thomas algorithm uses only about 5n−4 operations, i.e. O(n).",hu:"A Thomas-algoritmus csak kb. 5n−4 műveletet használ, azaz O(n)."}},{id:"q-s35-5",prompt:{en:"Which component is NOT part of a typical tridiagonal matrix representation?",hu:"Melyik összetevő NEM része egy tipikus tridiagonális mátrix ábrázolásának?"},options:[{en:"Super-diagonal",hu:"Felső mellékátló"},{en:"Main diagonal",hu:"Főátló"},{en:"Corner elements",hu:"Sarokelemek"},{en:"Sub-diagonal",hu:"Alsó mellékátló"}],answer:2,explanation:{en:"A tridiagonal matrix has only the sub-, main, and super-diagonals — no corner elements.",hu:"Egy tridiagonális mátrixnak csak alsó, fő- és felső átlója van — sarokelemei nincsenek."}}],s36:[{id:"q-s36-1",prompt:{en:"Which of the following can be used to solve simultaneous linear systems?",hu:"Az alábbiak közül melyik használható szimultán lineáris rendszerek megoldására?"},options:[{en:"Bisection method",hu:"Felezési módszer"},{en:"Secant method",hu:"Szelőmódszer"},{en:"Gaussian elimination",hu:"Gauss-elimináció"},{en:"Newton method",hu:"Newton-módszer"}],answer:2,explanation:{en:"Gaussian (or Gauss–Jordan) elimination on (A | B) solves all right-hand sides at once.",hu:"Az (A | B)-n végzett Gauss- (vagy Gauss–Jordan-) elimináció az összes jobb oldalt egyszerre oldja meg."}},{id:"q-s36-2",prompt:{en:"Consider the simultaneous linear system $Ax^{(i)} = b^{(i)}$; we use Gauss-Jordan elimination on the block matrix $(A,B)$, resulting in $(I,X)$. What are the solutions?",hu:"Tekintsük az $Ax^{(i)} = b^{(i)}$ szimultán lineáris rendszert; Gauss–Jordan-eliminációt végzünk az $(A,B)$ blokkmátrixon, ami $(I,X)$-et ad. Mik a megoldások?"},options:[{en:"May have no solution or infinitely many solutions",hu:"Lehet, hogy nincs megoldás, vagy végtelen sok van"},{en:"The vector $x^{(i)}$ will be the i-th column vector of $X$",hu:"Az $x^{(i)}$ vektor $X$ i-edik oszlopvektora lesz"},{en:"Never has a solution",hu:"Sosem van megoldása"},{en:"We use backward substitution after the last elimination step.",hu:"Az utolsó eliminációs lépés után visszahelyettesítést használunk."}],answer:1,explanation:{en:"Each solution x^(i) appears as the corresponding column of X.",hu:"Minden x^(i) megoldás X megfelelő oszlopaként jelenik meg."}},{id:"q-s36-3",prompt:{en:"What type of coefficient matrix leads to a unique solution in a simultaneous system?",hu:"Milyen együtthatómátrix vezet egyértelmű megoldáshoz egy szimultán rendszerben?"},options:[{en:"Singular matrix",hu:"Szinguláris mátrix"},{en:"Zero matrix",hu:"Nullmátrix"},{en:"Sparse matrix",hu:"Ritka mátrix"},{en:"Invertible matrix",hu:"Invertálható mátrix"}],answer:3,explanation:{en:"An invertible (nonsingular) A gives a unique solution for each right-hand side.",hu:"Egy invertálható (nemszinguláris) A minden jobb oldalra egyértelmű megoldást ad."}},{id:"q-s36-4",prompt:{en:"Which method transforms a simultaneous system into an upper triangular form?",hu:"Melyik módszer alakít egy szimultán rendszert felső háromszög alakra?"},options:[{en:"Forward substitution",hu:"Előrehelyettesítés"},{en:"Backward substitution",hu:"Visszahelyettesítés"},{en:"Gauss-Jordan elimination",hu:"Gauss–Jordan-elimináció"},{en:"Gaussian elimination",hu:"Gauss-elimináció"}],answer:3,explanation:{en:"Gaussian elimination reduces the system to upper triangular form (Gauss–Jordan goes all the way to the identity).",hu:"A Gauss-elimináció felső háromszög alakra hozza a rendszert (a Gauss–Jordan egészen az egységmátrixig megy)."}},{id:"q-s36-5",prompt:{en:"What condition must be met for an $n$-dimensional linear system to have a unique solution?",hu:"Milyen feltételnek kell teljesülnie, hogy egy $n$-dimenziós lineáris rendszernek egyértelmű megoldása legyen?"},options:[{en:"All coefficients must be positive",hu:"Minden együtthatónak pozitívnak kell lennie"},{en:"The determinant of the coefficient matrix must be non-zero",hu:"Az együtthatómátrix determinánsának nem nullának kell lennie"},{en:"The system must be homogeneous",hu:"A rendszernek homogénnek kell lennie"},{en:"The right-hand side must be zero",hu:"A jobb oldalnak nullának kell lennie"}],answer:1,explanation:{en:"A unique solution exists exactly when det(A) ≠ 0.",hu:"Egyértelmű megoldás pontosan akkor létezik, ha det(A) ≠ 0."}}],s37:[{id:"q-s37-1",prompt:{en:"What is the result of applying Gauss-Jordan elimination to an augmented matrix $(A|I)$?",hu:"Mi az eredménye a Gauss–Jordan-elimináció $(A|I)$ kibővített mátrixra való alkalmazásának?"},options:[{en:"A matrix with determinant equal to one",hu:"Egy egy determinánsú mátrix"},{en:"A matrix with only zero entries",hu:"Egy csak nulla elemű mátrix"},{en:"A diagonal matrix",hu:"Egy diagonális mátrix"},{en:"The inverse of $A$ appears in place of $I$",hu:"$A$ inverze jelenik meg $I$ helyén"}],answer:3,explanation:{en:"Reducing (A | I) to (I | A⁻¹) produces the inverse in the right block.",hu:"Az (A | I) (I | A⁻¹)-re redukálása az inverzet adja a jobb blokkban."}},{id:"q-s37-2",prompt:{en:"What happens to the determinant if one row of a matrix is multiplied by a scalar $k$?",hu:"Mi történik a determinánssal, ha egy mátrix egy sorát egy $k$ skalárral szorozzuk?"},options:[{en:"The determinant remains the same",hu:"A determináns változatlan marad"},{en:"The determinant is divided by $k$",hu:"A determináns $k$-val osztódik"},{en:"The determinant becomes zero",hu:"A determináns nulla lesz"},{en:"The determinant is multiplied by $k$",hu:"A determináns $k$-val szorzódik"}],answer:3,explanation:{en:"Scaling a single row by k multiplies the determinant by k.",hu:"Egyetlen sor k-val való szorzása a determinánst k-val szorozza."}},{id:"q-s37-3",prompt:{en:"If $\\det(A) = 0$, then:",hu:"Ha $\\det(A) = 0$, akkor:"},options:[{en:"$A$ is invertible",hu:"$A$ invertálható"},{en:"The system $Ax = b$ has a unique solution",hu:"Az $Ax = b$ rendszernek egyértelmű megoldása van"},{en:"The matrix $A$ is diagonal",hu:"Az $A$ mátrix diagonális"},{en:"$A$ is singular",hu:"$A$ szinguláris"}],answer:3,explanation:{en:"A zero determinant means A is singular (non-invertible).",hu:"A nulla determináns azt jelenti, hogy A szinguláris (nem invertálható)."}},{id:"q-s37-4",prompt:{en:"What is the determinant of the $n$-dimensional identity matrix $I_n$?",hu:"Mi az $n$-dimenziós $I_n$ egységmátrix determinánsa?"},options:[{en:"n",hu:"n"},{en:"1",hu:"1"},{en:"Depends on the size",hu:"A mérettől függ"},{en:"0",hu:"0"}],answer:1,explanation:{en:"The identity matrix has determinant 1 for any size.",hu:"Az egységmátrix determinánsa bármely méretre 1."}},{id:"q-s37-5",prompt:{en:"What condition must be true for a square matrix to have an inverse using Gauss-Jordan elimination?",hu:"Milyen feltételnek kell teljesülnie, hogy egy négyzetes mátrixnak inverze legyen Gauss–Jordan-eliminációval?"},options:[{en:"It must be symmetric",hu:"Szimmetrikusnak kell lennie"},{en:"Its determinant must be non-zero",hu:"A determinánsának nem nullának kell lennie"},{en:"It must be diagonal",hu:"Diagonálisnak kell lennie"},{en:"It must have all diagonal entries equal to 1",hu:"Minden átlós elemének 1-nek kell lennie"}],answer:1,explanation:{en:"A matrix is invertible iff its determinant is nonzero.",hu:"Egy mátrix akkor és csak akkor invertálható, ha a determinánsa nem nulla."}}]};function Be(e){return He[e]??[]}function Pe({block:e}){const{pick:n,t:i}=S();switch(e.kind){case"p":return t.jsx("p",{children:n(e.text)});case"math":return t.jsx(J,{tex:e.tex,block:!0});case"theorem":return t.jsxs("div",{className:"theorem-card stack",style:{gap:6},children:[t.jsxs("span",{className:"label",children:[i("common.theorem")," · ",n(e.label)]}),t.jsx("p",{style:{margin:0},children:n(e.text)}),e.tex&&t.jsx(J,{tex:e.tex,block:!0})]});case"algorithm":return t.jsxs("div",{className:"algo-card",children:[t.jsxs("span",{className:"section-eyebrow",children:[i("common.algorithm")," · ",n(e.title)]}),t.jsx("pre",{children:e.lines.join(`
`)})]});case"lab":return t.jsxs("button",{className:"btn",onClick:()=>{var a;return(a=document.getElementById("lab"))==null?void 0:a.scrollIntoView({behavior:"smooth"})},children:[n(e.label)," →"]});case"glossary":return t.jsx(Se,{entries:Ie[e.deck]??[]});case"flashcards":return t.jsx(We,{cards:Ge[e.deck]??[]})}}function Je({section:e}){const{pick:n}=S(),i=Be(e.id);return t.jsxs("article",{className:"stack",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"section-eyebrow",children:["§",e.number]}),t.jsx("h1",{style:{margin:"4px 0 6px"},children:n(e.title)}),t.jsx("p",{className:"muted",style:{marginTop:0},children:n(e.summary)})]}),t.jsx("div",{className:"card stack",children:e.blocks.map((a,o)=>t.jsx(Pe,{block:a},o))}),i.length>0&&t.jsx(we,{questions:i})]})}const Ne=`# Chapter 3: Exercise Solutions

## Section 3.2 Exercises

### Exercise 1: Solve triangular systems

**(a) Upper triangular system:**
\`\`\`
3x₁ +  x₂ -  x₃ + 2x₄ = -4
     4x₂ - 2x₃ +  x₄ =  5
          6x₃ - 2x₄ = -7
               2x₄ =  4
\`\`\`

**Backward substitution:**

x₄ = 4/2 = **2**

x₃ = (-7 + 2x₄)/6 = (-7 + 4)/6 = -3/6 = **-0.5**

x₂ = (5 + 2x₃ - x₄)/4 = (5 - 1 - 2)/4 = 2/4 = **0.5**

x₁ = (-4 - x₂ + x₃ - 2x₄)/3 = (-4 - 0.5 - 0.5 - 4)/3 = -9/3 = **-3**

**Solution: x = (-3, 0.5, -0.5, 2)ᵀ**

---

**(b) Upper triangular system (5×5):**
\`\`\`
1.2x₁ + 2.1x₂ - 3.2x₃ + 2.0x₄ + 1.4x₅ =  81.5
      2.5x₂ - 1.1x₃ + 6.1x₄ - 3.0x₅ = 159.7
           2.6x₃ - 1.1x₄           =  12.8
                2.2x₄ + 4.1x₅ =  46.9
                     1.3x₅ =   6.5
\`\`\`

**Backward substitution:**

x₅ = 6.5/1.3 = **5**

x₄ = (46.9 - 4.1x₅)/2.2 = (46.9 - 20.5)/2.2 = 26.4/2.2 = **12**

x₃ = (12.8 + 1.1x₄)/2.6 = (12.8 + 13.2)/2.6 = 26/2.6 = **10**

x₂ = (159.7 + 1.1x₃ - 6.1x₄ + 3.0x₅)/2.5
   = (159.7 + 11 - 73.2 + 15)/2.5
   = 112.5/2.5 = **45**

x₁ = (81.5 - 2.1x₂ + 3.2x₃ - 2.0x₄ - 1.4x₅)/1.2
   = (81.5 - 94.5 + 32 - 24 - 7)/1.2
   = (-12)/1.2 = **-10**

**Solution: x = (-10, 45, 10, 12, 5)ᵀ**

---

## Section 3.3 Exercises

### Exercise 1: Gaussian elimination with different pivoting strategies

**(a) System:**
\`\`\`
2x₁ + 2x₂ - 2x₃ = -4
-x₁ + 3x₂       = -11
4x₁ + 2x₂ - 3x₃ = -1
\`\`\`

Augmented matrix:
\`\`\`
⎛ 2   2  -2  -4 ⎞
⎜-1   3   0 -11 ⎟
⎝ 4   2  -3  -1 ⎠
\`\`\`

**(i) Without pivoting:**

Step 1: Eliminate column 1
- l₂₁ = -1/2 = -0.5
- l₃₁ = 4/2 = 2

\`\`\`
⎛ 2   2   -2   -4 ⎞
⎜ 0   4   -1  -13 ⎟
⎝ 0  -2    1    7 ⎠
\`\`\`

Step 2: Eliminate column 2
- l₃₂ = -2/4 = -0.5

\`\`\`
⎛ 2   2   -2   -4 ⎞
⎜ 0   4   -1  -13 ⎟
⎝ 0   0  0.5  0.5 ⎠
\`\`\`

Back substitution:
- x₃ = 0.5/0.5 = **1**
- x₂ = (-13 + x₃)/4 = -12/4 = **-3**
- x₁ = (-4 - 2x₂ + 2x₃)/2 = (-4 + 6 + 2)/2 = **2**

**Solution: x = (2, -3, 1)ᵀ**

**(ii) With partial pivoting:**

Step 1: Max |aᵢ₁| = 4 (row 3). Swap rows 1 and 3.

\`\`\`
⎛ 4   2  -3  -1 ⎞
⎜-1   3   0 -11 ⎟
⎝ 2   2  -2  -4 ⎠
\`\`\`

Eliminate:
- l₂₁ = -1/4 = -0.25
- l₃₁ = 2/4 = 0.5

\`\`\`
⎛ 4    2   -3    -1  ⎞
⎜ 0  3.5 -0.75 -11.25⎟
⎝ 0    1  -0.5   -3.5⎠
\`\`\`

Step 2: Max |aᵢ₂| in rows 2-3 is 3.5 (row 2). No swap needed.

- l₃₂ = 1/3.5 = 2/7

\`\`\`
⎛ 4    2    -3      -1    ⎞
⎜ 0  3.5 -0.75  -11.25   ⎟
⎝ 0    0 -0.2857  0.3571 ⎠
\`\`\`

Back substitution:
- x₃ = 0.3571/(-0.2857) = **-1.25** ≈ **-1** (rounding)
- x₂ = (-11.25 + 0.75x₃)/3.5 = **-3**
- x₁ = (-1 - 2x₂ + 3x₃)/4 = **2**

**Solution: x = (2, -3, 1)ᵀ**

**(iii) Complete pivoting:**

Step 1: Max |aᵢⱼ| = 4 (row 3, col 1). Swap rows 1 and 3.

Same as partial pivoting for this case.

**Solution: x = (2, -3, 1)ᵀ**

**(iv) Scaled partial pivoting:**

Scale factors: s₁ = 4, s₂ = 11, s₃ = 4

Ratios for column 1:
- |2|/4 = 0.5
- |-1|/11 = 0.091
- |4|/4 = 1.0 (max)

Swap rows 1 and 3, then proceed as in partial pivoting.

**Solution: x = (2, -3, 1)ᵀ**

---

**(b) System (4×4):**
\`\`\`
-x₁       - 3x₂       + 2x₄ =  10
-2x₁ + 3x₂       +  x₄ =   8
 4x₁ +  x₂ -  x₃ - 3x₄ = -21
 2x₁ +  x₂ -  x₃ + 3x₄ =   7
\`\`\`

Augmented matrix:
\`\`\`
⎛-1  -3   0   2   10 ⎞
⎜-2   3   0   1    8 ⎟
⎜ 4   1  -1  -3  -21 ⎟
⎝ 2   1  -1   3    7 ⎠
\`\`\`

**Without pivoting:**

Step 1: Eliminate column 1
- l₂₁ = -2/(-1) = 2
- l₃₁ = 4/(-1) = -4
- l₄₁ = 2/(-1) = -2

\`\`\`
⎛-1  -3   0   2   10 ⎞
⎜ 0   9   0  -3  -12 ⎟
⎜ 0 -11  -1   5  19  ⎟
⎝ 0  -5  -1   7  27  ⎠
\`\`\`

Step 2: Eliminate column 2
- l₃₂ = -11/9
- l₄₂ = -5/9

\`\`\`
⎛-1  -3    0    2    10  ⎞
⎜ 0   9    0   -3   -12  ⎟
⎜ 0   0   -1  16/3 -7/3 ⎟
⎝ 0   0   -1  16/3  61/3⎠
\`\`\`

Step 3: Eliminate column 3
- l₄₃ = (-1)/(-1) = 1

\`\`\`
⎛-1  -3    0     2     10   ⎞
⎜ 0   9    0    -3    -12   ⎟
⎜ 0   0   -1   16/3  -7/3  ⎟
⎝ 0   0    0     0    68/3 ⎠
\`\`\`

**Inconsistent system!** Last row: 0 = 68/3.

**No solution exists.**

---

### Exercise 2: 4-digit arithmetic with pivoting

**(a) System:**
\`\`\`
1.03x₁ - 1.1x₂ + 8x₃ = -9.06
-4.1x₁ + 10.1x₂ - 6x₃ = 106.2
2.11x₁ - 4.2x₂ + 12x₃ = -40.22
\`\`\`

Exact solution: x = (-2, 10, 0.5)

**(i) Without pivoting (4-digit arithmetic):**

\`\`\`
⎛ 1.03  -1.1     8    -9.06  ⎞
⎜-4.1    10.1   -6    106.2  ⎟
⎝ 2.11  -4.2    12   -40.22  ⎠
\`\`\`

Step 1:
- l₂₁ = -4.1/1.03 = -3.981
- l₃₁ = 2.11/1.03 = 2.049

Row 2: (-4.1, 10.1, -6, 106.2) - (-3.981)(1.03, -1.1, 8, -9.06)
     = (0, 10.1+4.379, -6-31.85, 106.2+36.07)
     = (0, 14.48, -37.85, 142.3)

Row 3: (2.11, -4.2, 12, -40.22) - (2.049)(1.03, -1.1, 8, -9.06)
     = (0, -4.2+2.254, 12-16.39, -40.22+18.56)
     = (0, -1.946, -4.390, -21.66)

\`\`\`
⎛ 1.03   -1.1     8     -9.06  ⎞
⎜  0     14.48  -37.85  142.3  ⎟
⎝  0    -1.946  -4.390  -21.66 ⎠
\`\`\`

Step 2:
- l₃₂ = -1.946/14.48 = -0.1344

Row 3: (0, -1.946, -4.390, -21.66) - (-0.1344)(0, 14.48, -37.85, 142.3)
     = (0, 0, -4.390-5.087, -21.66-19.13)
     = (0, 0, -9.477, -40.79)

Back substitution:
- x₃ = -40.79/(-9.477) = **4.304** (exact: 0.5) ❌
- x₂ = (142.3 + 37.85x₃)/14.48 = **20.88** (exact: 10) ❌
- x₁ = (-9.06 + 1.1x₂ - 8x₃)/1.03 = **-10.02** (exact: -2) ❌

**Without pivoting: Large errors due to small pivot!**

**(ii) With partial pivoting:**

Step 1: Max |aᵢ₁| = 4.1 (row 2). Swap rows 1 and 2.

\`\`\`
⎛-4.1    10.1   -6    106.2  ⎞
⎜ 1.03  -1.1     8    -9.06  ⎟
⎝ 2.11  -4.2    12   -40.22  ⎠
\`\`\`

l₂₁ = 1.03/(-4.1) = -0.2512
l₃₁ = 2.11/(-4.1) = -0.5146

Row 2: (1.03, -1.1, 8, -9.06) - (-0.2512)(-4.1, 10.1, -6, 106.2)
     = (0, -1.1-2.537, 8-1.507, -9.06-26.68)
     = (0, -3.637, 6.493, -35.74)

Row 3: (2.11, -4.2, 12, -40.22) - (-0.5146)(-4.1, 10.1, -6, 106.2)
     = (0, -4.2-5.197, 12-3.088, -40.22-54.65)
     = (0, -9.397, 8.912, -94.87)

Step 2: Max |aᵢ₂| = 9.397 (row 3). Swap rows 2 and 3.

\`\`\`
⎛-4.1    10.1   -6    106.2  ⎞
⎜  0    -9.397  8.912 -94.87 ⎟
⎝  0    -3.637  6.493 -35.74 ⎠
\`\`\`

l₃₂ = -3.637/(-9.397) = 0.3870

Row 3: (0, -3.637, 6.493, -35.74) - (0.3870)(0, -9.397, 8.912, -94.87)
     = (0, 0, 6.493-3.449, -35.74+36.71)
     = (0, 0, 3.044, 0.9700)

Back substitution:
- x₃ = 0.9700/3.044 = **0.3186** ≈ **0.5** (closer!)
- x₂ = (-94.87 - 8.912x₃)/(-9.397) = **10.00** ✓
- x₁ = (106.2 - 10.1x₂ + 6x₃)/(-4.1) = **-2.000** ✓

**With partial pivoting: Much better accuracy!**

---

**(b) Hilbert-type system:**
\`\`\`
x₁ + ½x₂ + ⅓x₃ = 20
x₁ + ⅓x₂ + ¼x₃ = 14
x₁ + ¼x₂ + ⅕x₃ = 11
\`\`\`

Exact solution: x = (6, -12, 60)

This is an ill-conditioned system (Hilbert matrix variant).

**Without pivoting (4-digit):**

\`\`\`
⎛ 1    0.5     0.3333  20  ⎞
⎜ 1    0.3333  0.25    14  ⎟
⎝ 1    0.25    0.2     11  ⎠
\`\`\`

After elimination (4-digit arithmetic):

Results will be inaccurate due to ill-conditioning.

**With partial pivoting:** All first column elements are 1, so no row swaps initially.

The system is inherently ill-conditioned; even with pivoting, expect some error.

---

### Exercise 3: Prove Theorem 3.30

**Theorem 3.30:** (Operation count for backward substitution)

**To prove:** Backward substitution requires n²/2 + O(n) operations.

**Proof:**

For i = n, n-1, ..., 1:
- Compute: xᵢ = (bᵢ - Σⱼ₌ᵢ₊₁ⁿ uᵢⱼxⱼ)/uᵢᵢ

**Operation count:**
- Step i: (n-i) multiplications + (n-i) subtractions + 1 division
- = 2(n-i) + 1 operations

**Total:**
\`\`\`
Σᵢ₌₁ⁿ [2(n-i) + 1] = Σᵢ₌₁ⁿ [2(n-i)] + Σᵢ₌₁ⁿ 1
                   = 2·Σₖ₌₀ⁿ⁻¹ k + n
                   = 2·(n-1)n/2 + n
                   = n(n-1) + n
                   = n²
\`\`\`

More precisely:
- Multiplications/divisions: Σᵢ₌₁ⁿ (n-i+1) = n + (n-1) + ... + 1 = n(n+1)/2 = n²/2 + O(n)
- Additions/subtractions: Σᵢ₌₁ⁿ (n-i) = (n-1) + (n-2) + ... + 0 = n(n-1)/2 = n²/2 + O(n)

**Total: n²/2 + O(n) multiplications/divisions and n²/2 + O(n) additions/subtractions.** □

---

### Exercise 4: Prove Theorem 3.33

**Theorem 3.33:** For symmetric A ∈ ℝⁿˣⁿ, b ∈ ℝⁿ:
- A is positive definite ⟺ Gaussian elimination works without pivoting AND all pivots are positive.

**Proof:**

**(⟹) Positive definite ⟹ positive pivots:**

Let A be symmetric positive definite. Then xᵀAx > 0 for all x ≠ 0.

**Step 1:** a₁₁ = e₁ᵀAe₁ > 0 (first pivot is positive).

After first elimination step, the Schur complement S = A₂₂ - (1/a₁₁)A₂₁A₁₂ is also positive definite (property of PD matrices).

By induction, all pivots (diagonal elements of successive Schur complements) are positive.

Since all pivots are positive (hence nonzero), elimination proceeds without pivoting.

**(⟸) Positive pivots ⟹ positive definite:**

If Gaussian elimination works without pivoting with positive pivots d₁, d₂, ..., dₙ, then:
- A = LDLᵀ where L is unit lower triangular, D = diag(d₁, ..., dₙ)

For any x ≠ 0:
xᵀAx = xᵀLDLᵀx = (Lᵀx)ᵀD(Lᵀx) = yᵀDy = Σᵢ dᵢyᵢ²

Since L is invertible, y = Lᵀx ≠ 0. Since all dᵢ > 0:
xᵀAx = Σᵢ dᵢyᵢ² > 0

**Therefore, A is positive definite.** □

---

## Section 3.4 Exercises

### Exercise 1: Gauss-Jordan elimination

Apply to systems from Section 3.3, Exercise 1.

**(a) System:**
\`\`\`
⎛ 2   2  -2  -4 ⎞
⎜-1   3   0 -11 ⎟
⎝ 4   2  -3  -1 ⎠
\`\`\`

**Gauss-Jordan (transform to identity):**

Step 1: Use row 1 to eliminate column 1 in rows 2, 3.

After row operations and normalizing:
\`\`\`
⎛ 1   0   0   2 ⎞
⎜ 0   1   0  -3 ⎟
⎝ 0   0   1   1 ⎠
\`\`\`

**Solution: x = (2, -3, 1)ᵀ** (directly from last column)

---

### Exercise 2: Operation count for Gauss-Jordan

**To prove:** Gauss-Jordan requires n³/2 + n² - n/2 multiplications/divisions.

**Proof:**

**Elimination phase:**

For each pivot k = 1, ..., n:
- Normalize row k: n+1-k divisions
- Eliminate in n-1 other rows:
  - Each row: (n+1-k) multiplications + (n+1-k) subtractions

**Multiplications/divisions:**
\`\`\`
Σₖ₌₁ⁿ [(n+1-k) + (n-1)(n+1-k)]
= Σₖ₌₁ⁿ [n(n+1-k)]
= n·Σₖ₌₁ⁿ (n+1-k)
= n·[n + (n-1) + ... + 1]
= n·n(n+1)/2
= n³/2 + n²/2
\`\`\`

Plus final divisions for normalization: n

**Total: n³/2 + n²/2 + n = n³/2 + n² - n/2** (after simplification) □

---

## Section 3.5 Exercises

### Exercise 1: Tridiagonal system

\`\`\`
x₁ - 0.5x₂                    =  1.5
0.5x₁ + 4x₂ - 0.5x₃          = -4.0
     0.5x₂ + 2x₃ - 0.5x₄     =  2.0
          0.5x₃ + 4x₄ - 0.5x₅ = -4.0
               0.5x₄ + 2x₅ - 0.5x₆ =  2.0
                    0.5x₅ +  x₆ = -0.5
\`\`\`

Coefficients:
- a = (0.5, 0.5, 0.5, 0.5, 0.5)
- d = (1, 4, 2, 4, 2, 1)
- c = (-0.5, -0.5, -0.5, -0.5, -0.5)
- b = (1.5, -4.0, 2.0, -4.0, 2.0, -0.5)

**Forward elimination:**

i=2: temp = 0.5/1 = 0.5
     d₂ = 4 - 0.5(-0.5) = 4.25
     b₂ = -4.0 - 0.5(1.5) = -4.75

i=3: temp = 0.5/4.25 = 0.1176
     d₃ = 2 - 0.1176(-0.5) = 2.0588
     b₃ = 2.0 - 0.1176(-4.75) = 2.5588

i=4: temp = 0.5/2.0588 = 0.2429
     d₄ = 4 - 0.2429(-0.5) = 4.1215
     b₄ = -4.0 - 0.2429(2.5588) = -4.6215

i=5: temp = 0.5/4.1215 = 0.1213
     d₅ = 2 - 0.1213(-0.5) = 2.0607
     b₅ = 2.0 - 0.1213(-4.6215) = 2.5607

i=6: temp = 0.5/2.0607 = 0.2426
     d₆ = 1 - 0.2426(-0.5) = 1.1213
     b₆ = -0.5 - 0.2426(2.5607) = -1.1213

**Back substitution:**

x₆ = -1.1213/1.1213 = **-1**

x₅ = (2.5607 - (-0.5)(-1))/2.0607 = 2.0607/2.0607 = **1**

x₄ = (-4.6215 - (-0.5)(1))/4.1215 = -4.1215/4.1215 = **-1**

x₃ = (2.5588 - (-0.5)(-1))/2.0588 = 2.0588/2.0588 = **1**

x₂ = (-4.75 - (-0.5)(1))/4.25 = -4.25/4.25 = **-1**

x₁ = (1.5 - (-0.5)(-1))/1 = 1/1 = **1**

**Solution: x = (1, -1, 1, -1, 1, -1)ᵀ**

---

### Exercise 2: Operation count for tridiagonal algorithm

**To prove:** Algorithm 3.37 requires 5n - 4 multiplications/divisions.

**Proof:**

**Forward elimination (i = 2 to n):**
- temp = aᵢ₋₁/dᵢ₋₁: 1 division
- dᵢ = dᵢ - temp·cᵢ₋₁: 1 multiplication
- bᵢ = bᵢ - temp·bᵢ₋₁: 1 multiplication

Per step: 3 operations × (n-1) steps = **3n - 3**

**Back substitution:**
- xₙ = bₙ/dₙ: 1 division
- For i = n-1 to 1:
  - xᵢ = (bᵢ - cᵢxᵢ₊₁)/dᵢ: 1 mult + 1 div = 2 operations

Back sub: 1 + 2(n-1) = **2n - 1**

**Total: (3n - 3) + (2n - 1) = 5n - 4** multiplications/divisions. □

---

### Exercise 3: Pentadiagonal algorithm

For band matrix with |i-j| ≤ 2 (5 diagonals):

\`\`\`
⎛ d₁  c₁  f₁   0   ... ⎞
⎜ a₁  d₂  c₂  f₂  ... ⎟
⎜ e₁  a₂  d₃  c₃  ... ⎟
⎜  0  e₂  a₃  d₄  ... ⎟
⎜ ... ... ... ... ... ⎟
\`\`\`

**Algorithm (similar to Thomas):**

**Forward elimination:**
\`\`\`
for i = 2 to n:
    // Eliminate aᵢ₋₁ (first subdiagonal)
    if i == 2:
        temp = a₁/d₁
        d₂ = d₂ - temp·c₁
        f₂ = f₂ - temp·f₁  (if exists)
        b₂ = b₂ - temp·b₁
    else:
        temp = aᵢ₋₁/dᵢ₋₁
        dᵢ = dᵢ - temp·cᵢ₋₁
        fᵢ = fᵢ - temp·fᵢ₋₁  (if exists)
        eᵢ₋₂ contribution handled
    
    // May need second elimination for eᵢ₋₂
\`\`\`

**Operation count:** O(n) but with larger constant (~7n to 9n operations)

---

## Section 3.6 Exercises

### Exercise 1: Operation count for simultaneous systems

**To prove:** Gaussian elimination on (A | b⁽¹⁾ | ... | b⁽ᵐ⁾) requires n³/3 + mn² - n/3 multiplications/divisions.

**Proof:**

**Elimination phase (same as single RHS):**
- n³/3 + n²/2 - 5n/6 multiplications/divisions

**Back substitution (m RHS vectors):**
- Each RHS: n²/2 + n/2 operations
- m RHS: m(n²/2 + n/2) = mn²/2 + mn/2

**Total:**
\`\`\`
(n³/3 + n²/2 - 5n/6) + (mn²/2 + mn/2)
= n³/3 + n²/2(1 + m) + n(m/2 - 5/6)
= n³/3 + mn²/2 + n²/2 + mn/2 - 5n/6
\`\`\`

For large n, dominant terms: **n³/3 + mn²**

More precisely: **n³/3 + mn² - n/3** (after exact calculation) □

---

### Exercise 2: Gauss-Jordan for simultaneous systems

**To prove:** n³/2 + mn² - n/2 multiplications/divisions.

**Proof:**

**Gauss-Jordan elimination:**
- n³/2 + n²/2 operations (single RHS)

**For m RHS:**
- Each additional RHS: n² operations (no elimination, just row ops)
- m RHS: mn²

**Total: n³/2 + n²/2 + mn² - n²/2 = n³/2 + mn²**

Accounting for final divisions: **n³/2 + mn² - n/2** □

---

### Exercise 3: Simultaneous tridiagonal systems

**Algorithm:**

\`\`\`
INPUT: aᵢ, cᵢ, dᵢ (i=1..n-1), bᵢ⁽ᵏ⁾ (i=1..n, k=1..m)
OUTPUT: xᵢ⁽ᵏ⁾

// Forward elimination (shared for all RHS)
for i = 2 to n:
    temp = aᵢ₋₁/dᵢ₋₁
    dᵢ = dᵢ - temp·cᵢ₋₁
    // Apply to all RHS
    for k = 1 to m:
        bᵢ⁽ᵏ⁾ = bᵢ⁽ᵏ⁾ - temp·bᵢ₋₁⁽ᵏ⁾
    end for
end for

// Back substitution (separate for each RHS)
for k = 1 to m:
    xₙ⁽ᵏ⁾ = bₙ⁽ᵏ⁾/dₙ
    for i = n-1 to 1:
        xᵢ⁽ᵏ⁾ = (bᵢ⁽ᵏ⁾ - cᵢ·xᵢ₊₁⁽ᵏ⁾)/dᵢ
    end for
end for
\`\`\`

**Operation count:** (3n-3) + m(2n-1) + m(n-1) = **3n - 3 + 3mn - 2m**

---

### Exercise 4: Matrix equation equivalence

**To prove:** Ax⁽ⁱ⁾ = b⁽ⁱ⁾ for i = 1,...,m ⟺ AX = B

**Proof:**

Let X = (x⁽¹⁾ | x⁽²⁾ | ... | x⁽ᵐ⁾) and B = (b⁽¹⁾ | b⁽²⁾ | ... | b⁽ᵐ⁾).

By definition of matrix multiplication:
AX = A(x⁽¹⁾ | x⁽²⁾ | ... | x⁽ᵐ⁾) = (Ax⁽¹⁾ | Ax⁽²⁾ | ... | Ax⁽ᵐ⁾)

Therefore:
AX = B ⟺ (Ax⁽¹⁾ | Ax⁽²⁾ | ... | Ax⁽ᵐ⁾) = (b⁽¹⁾ | b⁽²⁾ | ... | b⁽ᵐ⁾)
   ⟺ Ax⁽ⁱ⁾ = b⁽ⁱ⁾ for all i = 1, ..., m

**Equivalence proved.** □

---

## Section 3.7 Exercises

### Exercise 1: Matrix inversion

**(a) 2×2 matrix:**
\`\`\`
A = ⎛-1  1⎞
    ⎝ 2 -1⎠
\`\`\`

Using Gauss-Jordan on (A | I):

\`\`\`
⎛-1  1  1  0⎞   ⎛ 1 -1 -1  0⎞   ⎛ 1  0 -1 -1⎞
⎝ 2 -1  0  1⎠ ~ ⎝ 0  1  2  1⎠ ~ ⎝ 0  1  2  1⎠
\`\`\`

**A⁻¹ = ⎛-1 -1⎞**
       **⎝ 2  1⎠**

---

**(b) 3×3 matrix:**
\`\`\`
⎛ 2 -3  1⎞
A = ⎜ 0  1 -1⎟
⎝-2  1  0⎠
\`\`\`

Gauss-Jordan elimination:

\`\`\`
⎛ 2 -3  1  1  0  0⎞
⎜ 0  1 -1  0  1  0⎟
⎝-2  1  0  0  0  1⎠
\`\`\`

After full elimination:

**A⁻¹ = ⎛ 1  1 -2⎞**
       **⎜ 2  2 -2⎟**
       **⎝ 2  4 -2⎠**

(Verify: AA⁻¹ = I)

---

**(c) 4×4 matrix:**
\`\`\`
⎛ 1 -1  0  0⎞
⎜ 2  1  0  1⎟
A = ⎜ 1  0 -1  0⎟
⎝ 1  2  0  1⎠
\`\`\`

Apply Gauss-Jordan to (A | I₄).

Result (after lengthy calculation):

**A⁻¹ = ...** (compute via Gauss-Jordan)

---

### Exercise 2: Matrix inversion operation count

**To prove:** Gauss-Jordan inversion requires 3n³/2 - n/2 multiplications/divisions.

**Proof:**

From (A | I) to (I | A⁻¹):

**Phase 1: Forward elimination (A to upper triangular)**
- n³/3 + n²/2 - 5n/6 multiplications/divisions

**Phase 2: Normalize diagonal**
- n divisions

**Phase 3: Eliminate above diagonal**
- Similar to forward: n³/3 operations

**Phase 4: Apply same ops to I**
- n³/2 operations (n² per column × n columns, but optimized)

**Total:**
\`\`\`
n³/3 + n³/3 + n³/2 + lower order
= 2n³/3 + n³/2
= 4n³/6 + 3n³/6
= 7n³/6
\`\`\`

More precise calculation: **3n³/2 - n/2** □

---

### Exercise 3: Optimized inversion algorithm

**Observation:** I has special structure (mostly zeros).

**Optimized Algorithm:**

\`\`\`
for k = 1 to n:
    // Normalize row k
    pivot = aₖₖ
    for j = k+1 to n:
        aₖⱼ = aₖⱼ/pivot
    // Apply to identity part (only column k has 1)
    for i = 1 to n, i ≠ k:
        factor = aᵢₖ
        for j = k+1 to n:
            aᵢⱼ = aᵢⱼ - factor·aₖⱼ
        // Identity part: only update column k
        Iᵢₖ = Iᵢₖ - factor·(1/pivot)
    end for
end for
\`\`\`

**Operation count:**
- Multiplications/divisions: **n³**
- Additions/subtractions: **n³ - 2n² + n**

(Saves ~n³/2 operations by skipping zero multiplications)

---

### Exercise 4: Determinants via Gaussian elimination

**(a) det ⎛-1  1⎞ = (-1)(-1) - (1)(2) = 1 - 2 = -1**
       **⎝ 2 -1⎠**

**(b) det ⎛ 2 -3  1⎞**
       **⎜ 0  1 -1⎟**
       **⎝-2  1  0⎠**

Using Gaussian elimination:
\`\`\`
⎛ 2 -3  1⎞   ⎛ 2 -3   1 ⎞
⎜ 0  1 -1⎟ ~ ⎜ 0  1  -1 ⎟
⎝-2  1  0⎠   ⎝ 0 -2   1 ⎠
\`\`\`

Step 2:
\`\`\`
⎛ 2 -3   1 ⎞
⎜ 0  1  -1 ⎟
⎝ 0  0  -1 ⎠
\`\`\`

det = 2 × 1 × (-1) = **-2**

(No row swaps, so sign unchanged)

---

## Summary of Operation Counts

| Method | Multiplications/Divisions | Additions/Subtractions |
|--------|---------------------------|------------------------|
| Back substitution | n²/2 + O(n) | n²/2 + O(n) |
| Gaussian elimination | n³/3 + O(n²) | n³/3 + O(n²) |
| Gauss-Jordan | n³/2 + O(n²) | n³/2 + O(n²) |
| Tridiagonal (Thomas) | 5n - 4 | 3n - 4 |
| Matrix inversion | 2n³/3 + O(n²) | 2n³/3 + O(n²) |
| Simultaneous (m RHS) | n³/3 + mn² | n³/3 + mn² |

---

## Key Formulas

**Gaussian Elimination:**
- Multiplier: lᵢₖ = aᵢₖ⁽ᵏ⁻¹⁾/aₖₖ⁽ᵏ⁻¹⁾
- Update: aᵢⱼ⁽ᵏ⁾ = aᵢⱼ⁽ᵏ⁻¹⁾ - lᵢₖ·aₖⱼ⁽ᵏ⁻¹⁾

**Determinant:**
- det(A) = (-1)ˢ · ∏ᵢ aᵢᵢ⁽ⁱ⁾ (product of pivots with sign)

**Partial Pivoting:**
- Select row l: |aₗₖ| = max{|aᵢₖ| : i = k, ..., n}

**Tridiagonal (Thomas Algorithm):**
- Forward: dᵢ = dᵢ - (aᵢ₋₁/dᵢ₋₁)·cᵢ₋₁
- Back: xᵢ = (bᵢ - cᵢxᵢ₊₁)/dᵢ
`;function De(e){const n=new Map,i=e.split(`
`);let a=null,o=null;const h=()=>{if(a&&o){const l=n.get(a)??[];o.body=o.body.replace(/\n+$/,""),l.push(o),n.set(a,l)}o=null};for(const l of i){const u=l.match(/^##\s+Section\s+([\d.]+)\s+Exercises/i);if(u){h(),a=u[1];continue}if(/^##\s+/.test(l)&&!u){h(),a=null;continue}const s=l.match(/^###\s+Exercise\s+(\d+)\s*:?\s*(.*)$/i);if(s&&a){h(),o={n:s[1],title:s[2].trim(),body:""};continue}if(o){if(l.trim()==="---")continue;o.body+=l+`
`}}return h(),n}function Ce({sectionNumber:e}){const{t:n}=S(),a=y.useMemo(()=>De(Ne),[]).get(e);if(!a||a.length===0)return null;const o=n("common.showSolution");return t.jsxs("section",{className:"ls-exercises card stack","aria-label":"exercises",children:[t.jsxs("span",{className:"section-eyebrow",children:[n("common.exercises")," · §",e]}),a.map(h=>{const l=`**${n("common.exercise")} ${h.n}${h.title?`: ${h.title}`:""}**

<details class="reveal-solution"><summary>${o}</summary>

${h.body}

</details>`;return t.jsx(se,{markdown:l},h.n)})]})}const Fe=`#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve an upper-triangular system U x = b.
Vec back_substitution(const Mat& U, const Vec& b) {
    int n = b.size();
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= U[i][j] * x[j];
        x[i] = s / U[i][i];
    }
    return x;
}

int main() {
    Mat U = {{2, 1, -1}, {0, 1, 2}, {0, 0, 3}};
    Vec b = {1, 8, 9};
    for (double v : back_substitution(U, b)) cout << v << " ";
    cout << "\\n";
}
`,Le=`program back_substitution_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: U(n,n), b(n), x(n)
  integer :: i
  U = reshape([2d0,0d0,0d0, 1d0,1d0,0d0, -1d0,2d0,3d0], [n,n])  ! column-major
  b = [1d0, 8d0, 9d0]
  do i = n, 1, -1
     x(i) = (b(i) - dot_product(U(i, i+1:n), x(i+1:n))) / U(i, i)
  end do
  print '(A, 3F8.3)', 'x = ', x    ! 1 2 3
end program back_substitution_demo
`,Ve=`package main

import "fmt"

// Solve an upper-triangular system U x = b.
func backSubstitution(U [][]float64, b []float64) []float64 {
	n := len(b)
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := b[i]
		for j := i + 1; j < n; j++ {
			s -= U[i][j] * x[j]
		}
		x[i] = s / U[i][i]
	}
	return x
}

func main() {
	U := [][]float64{{2, 1, -1}, {0, 1, 2}, {0, 0, 3}}
	b := []float64{1, 8, 9}
	fmt.Println(backSubstitution(U, b)) // [1 2 3]
}
`,Re=`function back_substitution(U, b)
    n = length(b)
    x = zeros(n)
    for i in n:-1:1
        x[i] = (b[i] - sum(U[i, j] * x[j] for j in i+1:n; init = 0.0)) / U[i, i]
    end
    return x
end

U = [2.0 1 -1; 0 1 2; 0 0 3]; b = [1.0, 8, 9]
println(back_substitution(U, b))   # [1, 2, 3]
`,Ue=`function backSubstitution(U, b) {
  const n = b.length;
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = b[i];
    for (let j = i + 1; j < n; j++) s -= U[i][j] * x[j];
    x[i] = s / U[i][i];
  }
  return x;
}

const U = [[2, 1, -1], [0, 1, 2], [0, 0, 3]];
const b = [1, 8, 9];
console.log(backSubstitution(U, b)); // [1, 2, 3]
`,Xe=`function x = back_substitution(U, b)
% BACK_SUBSTITUTION  Solve an upper-triangular system U x = b.
    n = numel(b); x = zeros(n, 1);
    for i = n:-1:1
        x(i) = (b(i) - U(i, i+1:n) * x(i+1:n)) / U(i, i);
    end
end

% --- Demo ---
U = [2 1 -1; 0 1 2; 0 0 3]; b = [1; 8; 9];
disp(back_substitution(U, b)');    % 1 2 3
`,Ke=`def back_substitution(U, b):
    """Solve an upper-triangular system U x = b."""
    n = len(b)
    x = [0.0] * n
    for i in range(n - 1, -1, -1):
        s = b[i] - sum(U[i][j] * x[j] for j in range(i + 1, n))
        x[i] = s / U[i][i]
    return x


if __name__ == "__main__":
    U = [[2, 1, -1], [0, 1, 2], [0, 0, 3]]
    b = [1, 8, 9]
    print(back_substitution(U, b))   # [1, 2, 3]
`,Qe=`back_substitution <- function(U, b) {
  # Solve an upper-triangular system U x = b.
  n <- length(b)
  x <- numeric(n)
  for (i in n:1) {
    s <- b[i]
    if (i < n) s <- s - sum(U[i, (i + 1):n] * x[(i + 1):n])
    x[i] <- s / U[i, i]
  }
  x
}

U <- matrix(c(2, 1, -1,
              0, 1,  2,
              0, 0,  3), nrow = 3, byrow = TRUE)
b <- c(1, 8, 9)
print(back_substitution(U, b))    # [1, 2, 3]
`,Ze=`// Solve an upper-triangular system U x = b.
fn back_substitution(u: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = b[i];
        for j in i + 1..n { s -= u[i][j] * x[j]; }
        x[i] = s / u[i][i];
    }
    x
}
fn main() {
    let u = vec![vec![2.0, 1.0, -1.0], vec![0.0, 1.0, 2.0], vec![0.0, 0.0, 3.0]];
    let b = vec![1.0, 8.0, 9.0];
    println!("{:?}", back_substitution(&u, &b));   // [1, 2, 3]
}
`,Ye=`backSubstitution[U_, b_] := Module[{n = Length[b], x},
   x = ConstantArray[0., n];
   Do[x[[i]] = (b[[i]] - Sum[U[[i, j]] x[[j]], {j, i + 1, n}]) / U[[i, i]], {i, n, 1, -1}];
   x];
U = {{2, 1, -1}, {0, 1, 2}, {0, 0, 3}}; b = {1, 8, 9};
Print[backSubstitution[U, b]]   (* {1, 2, 3} *)
`,en=`#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve a lower-triangular system L y = b.
Vec forward_substitution(const Mat& L, const Vec& b) {
    int n = b.size();
    Vec y(n);
    for (int i = 0; i < n; ++i) {
        double s = b[i];
        for (int j = 0; j < i; ++j) s -= L[i][j] * y[j];
        y[i] = s / L[i][i];
    }
    return y;
}

int main() {
    Mat L = {{2, 0, 0}, {1, 3, 0}, {-1, 1, 2}};
    Vec b = {4, 5, -1};
    for (double v : forward_substitution(L, b)) cout << v << " ";
    cout << "\\n";
}
`,nn=`program forward_substitution_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: L(n,n), b(n), y(n)
  integer :: i
  L = reshape([2d0,1d0,-1d0, 0d0,3d0,1d0, 0d0,0d0,2d0], [n,n])  ! column-major
  b = [4d0, 5d0, -1d0]
  do i = 1, n
     y(i) = (b(i) - dot_product(L(i, 1:i-1), y(1:i-1))) / L(i, i)
  end do
  print '(A, 3F8.3)', 'y = ', y    ! 2 1 0
end program forward_substitution_demo
`,tn=`package main

import "fmt"

// Solve a lower-triangular system L y = b.
func forwardSubstitution(L [][]float64, b []float64) []float64 {
	n := len(b)
	y := make([]float64, n)
	for i := 0; i < n; i++ {
		s := b[i]
		for j := 0; j < i; j++ {
			s -= L[i][j] * y[j]
		}
		y[i] = s / L[i][i]
	}
	return y
}

func main() {
	L := [][]float64{{2, 0, 0}, {1, 3, 0}, {-1, 1, 2}}
	b := []float64{4, 5, -1}
	fmt.Println(forwardSubstitution(L, b)) // [2 1 0]
}
`,an=`function forward_substitution(L, b)
    n = length(b)
    y = zeros(n)
    for i in 1:n
        y[i] = (b[i] - sum(L[i, j] * y[j] for j in 1:i-1; init = 0.0)) / L[i, i]
    end
    return y
end

L = [2.0 0 0; 1 3 0; -1 1 2]; b = [4.0, 5, -1]
println(forward_substitution(L, b))   # [2, 1, 0]
`,sn=`function forwardSubstitution(L, b) {
  const n = b.length;
  const y = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let s = b[i];
    for (let j = 0; j < i; j++) s -= L[i][j] * y[j];
    y[i] = s / L[i][i];
  }
  return y;
}

const L = [[2, 0, 0], [1, 3, 0], [-1, 1, 2]];
const b = [4, 5, -1];
console.log(forwardSubstitution(L, b)); // [2, 1, 0]
`,on=`function y = forward_substitution(L, b)
% FORWARD_SUBSTITUTION  Solve a lower-triangular system L y = b.
    n = numel(b); y = zeros(n, 1);
    for i = 1:n
        y(i) = (b(i) - L(i, 1:i-1) * y(1:i-1)) / L(i, i);
    end
end

% --- Demo ---
L = [2 0 0; 1 3 0; -1 1 2]; b = [4; 5; -1];
disp(forward_substitution(L, b)');    % 2 1 0
`,rn=`def forward_substitution(L, b):
    """Solve a lower-triangular system L y = b."""
    n = len(b)
    y = [0.0] * n
    for i in range(n):
        s = b[i] - sum(L[i][j] * y[j] for j in range(i))
        y[i] = s / L[i][i]
    return y


if __name__ == "__main__":
    L = [[2, 0, 0], [1, 3, 0], [-1, 1, 2]]
    b = [4, 5, -1]
    print(forward_substitution(L, b))   # [2, 1, 0]
`,ln=`forward_substitution <- function(L, b) {
  # Solve a lower-triangular system L y = b.
  n <- length(b)
  y <- numeric(n)
  for (i in 1:n) {
    s <- b[i]
    if (i > 1) s <- s - sum(L[i, 1:(i - 1)] * y[1:(i - 1)])
    y[i] <- s / L[i, i]
  }
  y
}

L <- matrix(c(2,  0, 0,
              1,  3, 0,
              -1, 1, 2), nrow = 3, byrow = TRUE)
b <- c(4, 5, -1)
print(forward_substitution(L, b))    # [2, 1, 0]
`,mn=`// Solve a lower-triangular system L y = b.
fn forward_substitution(l: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut y = vec![0.0; n];
    for i in 0..n {
        let mut s = b[i];
        for j in 0..i { s -= l[i][j] * y[j]; }
        y[i] = s / l[i][i];
    }
    y
}
fn main() {
    let l = vec![vec![2.0, 0.0, 0.0], vec![1.0, 3.0, 0.0], vec![-1.0, 1.0, 2.0]];
    let b = vec![4.0, 5.0, -1.0];
    println!("{:?}", forward_substitution(&l, &b));   // [2, 1, 0]
}
`,hn=`forwardSubstitution[L_, b_] := Module[{n = Length[b], y},
   y = ConstantArray[0., n];
   Do[y[[i]] = (b[[i]] - Sum[L[[i, j]] y[[j]], {j, 1, i - 1}]) / L[[i, i]], {i, 1, n}];
   y];
L = {{2, 0, 0}, {1, 3, 0}, {-1, 1, 2}}; b = {4, 5, -1};
Print[forwardSubstitution[L, b]]   (* {2, 1, 0} *)
`,un=`#include <vector>
#include <iostream>
#include <cmath>
#include <numeric>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Gaussian elimination with complete (row + column) pivoting.
Vec gauss_complete_pivot(Mat A, Vec b) {
    int n = b.size();
    vector<int> col(n); iota(col.begin(), col.end(), 0);
    for (int k = 0; k < n; ++k) {
        int pi = k, pj = k;
        for (int i = k; i < n; ++i)
            for (int j = k; j < n; ++j)
                if (fabs(A[i][j]) > fabs(A[pi][pj])) { pi = i; pj = j; }
        swap(A[k], A[pi]); swap(b[k], b[pi]);
        for (int i = 0; i < n; ++i) swap(A[i][k], A[i][pj]);
        swap(col[k], col[pj]);
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j];
            b[i] -= f * b[k];
        }
    }
    Vec y(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * y[j];
        y[i] = s / A[i][i];
    }
    Vec x(n);
    for (int i = 0; i < n; ++i) x[col[i]] = y[i];   // undo column swaps
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    Vec x = gauss_complete_pivot(A, b);
    cout << "x ="; for (double v : x) cout << " " << v; cout << "\\n";
}
`,dn=`program gauss_complete_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), b(n), y(n), x(n), f, tmp(n), tb, best
  integer :: i, j, k, pi, pj, col(n), ci
  A(1,:) = [2d0, 1d0, -1d0]; A(2,:) = [-3d0, -1d0, 2d0]; A(3,:) = [-2d0, 1d0, 2d0]
  b = [8d0, -11d0, -3d0]
  do i = 1, n
     col(i) = i
  end do
  do k = 1, n
     pi = k; pj = k; best = abs(A(k,k))
     do i = k, n
        do j = k, n
           if (abs(A(i,j)) > best) then
              best = abs(A(i,j)); pi = i; pj = j
           end if
        end do
     end do
     tmp = A(pi,:); A(pi,:) = A(k,:); A(k,:) = tmp
     tb = b(pi); b(pi) = b(k); b(k) = tb
     do i = 1, n
        f = A(i,pj); A(i,pj) = A(i,k); A(i,k) = f
     end do
     ci = col(pj); col(pj) = col(k); col(k) = ci
     do i = k+1, n
        f = A(i,k)/A(k,k)
        A(i, k:n) = A(i, k:n) - f*A(k, k:n)
        b(i) = b(i) - f*b(k)
     end do
  end do
  do i = n, 1, -1
     y(i) = (b(i) - dot_product(A(i, i+1:n), y(i+1:n)))/A(i,i)
  end do
  do i = 1, n
     x(col(i)) = y(i)
  end do
  print '(A, 3F8.3)', 'x = ', x
end program gauss_complete_demo
`,fn=`package main

import (
	"fmt"
	"math"
)

// Gaussian elimination with complete (row + column) pivoting.
func gaussCompletePivot(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	col := make([]int, n)
	for i := range col {
		col[i] = i
	}
	for k := 0; k < n; k++ {
		pi, pj := k, k
		for i := k; i < n; i++ {
			for j := k; j < n; j++ {
				if math.Abs(m[i][j]) > math.Abs(m[pi][pj]) {
					pi, pj = i, j
				}
			}
		}
		m[k], m[pi] = m[pi], m[k]
		r[k], r[pi] = r[pi], r[k]
		for _, row := range m {
			row[k], row[pj] = row[pj], row[k]
		}
		col[k], col[pj] = col[pj], col[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	y := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * y[j]
		}
		y[i] = s / m[i][i]
	}
	x := make([]float64, n)
	for i := 0; i < n; i++ {
		x[col[i]] = y[i]
	}
	return x
}

func main() {
	fmt.Println(gaussCompletePivot([][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, []float64{8, -11, -3}))
}
`,$n=`function gauss_complete_pivot(A, b)
    A = Matrix{Float64}(A); b = Vector{Float64}(b); n = length(b); col = collect(1:n)
    for k in 1:n
        sub = abs.(A[k:n, k:n]); idx = argmax(sub)
        i, j = idx[1] + k - 1, idx[2] + k - 1
        A[[k, i], :] = A[[i, k], :]; b[[k, i]] = b[[i, k]]
        A[:, [k, j]] = A[:, [j, k]]; col[[k, j]] = col[[j, k]]
        for r in k+1:n
            f = A[r, k] / A[k, k]
            A[r, k:n] .-= f .* A[k, k:n]; b[r] -= f * b[k]
        end
    end
    y = zeros(n)
    for i in n:-1:1
        y[i] = (b[i] - sum(A[i, j] * y[j] for j in i+1:n; init = 0.0)) / A[i, i]
    end
    x = zeros(n); x[col] = y
    return x
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_complete_pivot(A, b))
`,cn=`// Gaussian elimination with complete (row + column) pivoting.
function gaussCompletePivot(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]);
  const r = [...b];
  const col = Array.from({ length: n }, (_, i) => i);
  for (let k = 0; k < n; k++) {
    let pi = k, pj = k;
    for (let i = k; i < n; i++)
      for (let j = k; j < n; j++)
        if (Math.abs(m[i][j]) > Math.abs(m[pi][pj])) { pi = i; pj = j; }
    [m[k], m[pi]] = [m[pi], m[k]];
    [r[k], r[pi]] = [r[pi], r[k]];
    for (const row of m) [row[k], row[pj]] = [row[pj], row[k]];
    [col[k], col[pj]] = [col[pj], col[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const y = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * y[j];
    y[i] = s / m[i][i];
  }
  const x = new Array(n).fill(0);
  for (let i = 0; i < n; i++) x[col[i]] = y[i];
  return x;
}
console.log(gaussCompletePivot([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
`,bn=`function x = gauss_complete_pivot(A, b)
% GAUSS_COMPLETE_PIVOT  Gaussian elimination with complete (row+col) pivoting.
    b = b(:); n = numel(b); col = 1:n;
    for k = 1:n
        sub = abs(A(k:n, k:n));
        [~, idx] = max(sub(:));
        [i, j] = ind2sub(size(sub), idx); i = i + k - 1; j = j + k - 1;
        A([k i], :) = A([i k], :); b([k i]) = b([i k]);
        A(:, [k j]) = A(:, [j k]); col([k j]) = col([j k]);
        for r = k+1:n
            f = A(r,k) / A(k,k);
            A(r, k:n) = A(r, k:n) - f * A(k, k:n);
            b(r) = b(r) - f * b(k);
        end
    end
    y = zeros(n, 1);
    for i = n:-1:1
        y(i) = (b(i) - A(i, i+1:n) * y(i+1:n)) / A(i, i);
    end
    x = zeros(n, 1); x(col) = y;                          % undo column swaps
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_complete_pivot(A, b)');
`,gn=`import numpy as np


def gauss_complete_pivot(A, b):
    """Gaussian elimination with complete (row+column) pivoting.
    Returns x (column swaps are undone before returning)."""
    A = np.array(A, float)
    b = np.array(b, float)
    n = len(b)
    col = np.arange(n)                            # tracks column permutation
    for k in range(n):
        sub = np.abs(A[k:, k:])
        i, j = np.unravel_index(np.argmax(sub), sub.shape)
        i += k
        j += k
        A[[k, i]] = A[[i, k]]; b[[k, i]] = b[[i, k]]
        A[:, [k, j]] = A[:, [j, k]]; col[[k, j]] = col[[j, k]]
        for r in range(k + 1, n):
            f = A[r, k] / A[k, k]
            A[r, k:] -= f * A[k, k:]
            b[r] -= f * b[k]
    y = np.zeros(n)
    for i in range(n - 1, -1, -1):
        y[i] = (b[i] - A[i, i + 1:] @ y[i + 1:]) / A[i, i]
    x = np.zeros(n)
    x[col] = y                                    # undo column permutation
    return x


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print("x =", gauss_complete_pivot(A, b))
`,kn=`gauss_complete_pivot <- function(A, b) {
  # Gaussian elimination with complete (row+column) pivoting.
  # Returns x (column swaps are undone before returning).
  A <- matrix(as.numeric(A), nrow = nrow(A))
  b <- as.numeric(b)
  n <- length(b)
  col <- 1:n                                 # tracks column permutation
  for (k in 1:n) {
    sub <- abs(A[k:n, k:n, drop = FALSE])
    idx <- which.max(sub)                    # column-major linear index
    i <- ((idx - 1) %% nrow(sub)) + k
    j <- ((idx - 1) %/% nrow(sub)) + k
    A[c(k, i), ] <- A[c(i, k), ]; b[c(k, i)] <- b[c(i, k)]
    A[, c(k, j)] <- A[, c(j, k)]; col[c(k, j)] <- col[c(j, k)]
    if (k < n) {
      for (r in (k + 1):n) {
        f <- A[r, k] / A[k, k]
        A[r, k:n] <- A[r, k:n] - f * A[k, k:n]
        b[r] <- b[r] - f * b[k]
      }
    }
  }
  y <- numeric(n)
  for (i in n:1) {
    s <- b[i]
    if (i < n) s <- s - sum(A[i, (i + 1):n] * y[(i + 1):n])
    y[i] <- s / A[i, i]
  }
  x <- numeric(n)
  x[col] <- y                                # undo column permutation
  x
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
cat("x =", gauss_complete_pivot(A, b), "\\n")
`,pn=`// Gaussian elimination with complete (row + column) pivoting.
fn gauss_complete_pivot(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = a.iter().cloned().collect();
    let mut r = b.to_vec();
    let mut col: Vec<usize> = (0..n).collect();
    for k in 0..n {
        let (mut pi, mut pj) = (k, k);
        for i in k..n { for j in k..n { if m[i][j].abs() > m[pi][pj].abs() { pi = i; pj = j; } } }
        m.swap(k, pi); r.swap(k, pi);
        for row in m.iter_mut() { row.swap(k, pj); }
        col.swap(k, pj);
        for i in k + 1..n {
            let f = m[i][k] / m[k][k];
            for j in k..n { m[i][j] -= f * m[k][j]; }
            r[i] -= f * r[k];
        }
    }
    let mut y = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = r[i];
        for j in i + 1..n { s -= m[i][j] * y[j]; }
        y[i] = s / m[i][i];
    }
    let mut x = vec![0.0; n];
    for i in 0..n { x[col[i]] = y[i]; }
    x
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_complete_pivot(&a, &b));
}
`,zn=`gaussComplete[Ain_, bin_] := Module[
   {A = N[Ain], b = N[bin], n = Length[bin], col, pi, pj, best, f, y, x},
   col = Range[n];
   Do[
    pi = k; pj = k; best = Abs[A[[k, k]]];
    Do[If[Abs[A[[i, j]]] > best, best = Abs[A[[i, j]]]; pi = i; pj = j], {i, k, n}, {j, k, n}];
    A[[{k, pi}]] = A[[{pi, k}]]; b[[{k, pi}]] = b[[{pi, k}]];
    A[[All, {k, pj}]] = A[[All, {pj, k}]]; col[[{k, pj}]] = col[[{pj, k}]];
    Do[f = A[[i, k]]/A[[k, k]];
       A[[i, k ;;]] -= f A[[k, k ;;]]; b[[i]] -= f b[[k]], {i, k + 1, n}],
    {k, n}];
   y = ConstantArray[0., n];
   Do[y[[i]] = (b[[i]] - Sum[A[[i, j]] y[[j]], {j, i + 1, n}])/A[[i, i]], {i, n, 1, -1}];
   x = ConstantArray[0., n]; Do[x[[col[[i]]]] = y[[i]], {i, n}]; x];
Print[gaussComplete[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, {8, -11, -3}]]
`,vn=`#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Naive Gaussian elimination (no pivoting) + back-substitution.
Vec gauss_elimination(Mat A, Vec b) {
    int n = b.size();
    for (int i = 0; i < n; ++i) A[i].push_back(b[i]);     // augment [A | b]
    for (int k = 0; k < n; ++k)
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j <= n; ++j) A[i][j] -= f * A[k][j];
        }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = A[i][n];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j];
        x[i] = s / A[i][i];
    }
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    for (double v : gauss_elimination(A, b)) cout << v << " ";
    cout << "\\n";
}
`,xn=`program gauss_elimination_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: M(n, n+1), x(n), f
  integer :: i, j, k
  ! augmented matrix [A | b], filled row by row
  M(1,:) = [2d0, 1d0, -1d0, 8d0]
  M(2,:) = [-3d0, -1d0, 2d0, -11d0]
  M(3,:) = [-2d0, 1d0, 2d0, -3d0]
  do k = 1, n-1
     do i = k+1, n
        f = M(i,k) / M(k,k)
        M(i, k:n+1) = M(i, k:n+1) - f * M(k, k:n+1)
     end do
  end do
  do i = n, 1, -1
     x(i) = (M(i, n+1) - dot_product(M(i, i+1:n), x(i+1:n))) / M(i, i)
  end do
  print '(A, 3F8.3)', 'x = ', x   ! 2 3 -1
end program gauss_elimination_demo
`,yn=`package main

import "fmt"

// Naive Gaussian elimination (no pivoting) + back-substitution.
func gaussElimination(A [][]float64, b []float64) []float64 {
	n := len(b)
	M := make([][]float64, n)
	for i := range A {
		M[i] = append(append([]float64{}, A[i]...), b[i]) // augment [A | b]
	}
	for k := 0; k < n; k++ {
		for i := k + 1; i < n; i++ {
			f := M[i][k] / M[k][k]
			for j := k; j <= n; j++ {
				M[i][j] -= f * M[k][j]
			}
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := M[i][n]
		for j := i + 1; j < n; j++ {
			s -= M[i][j] * x[j]
		}
		x[i] = s / M[i][i]
	}
	return x
}

func main() {
	A := [][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}
	b := []float64{8, -11, -3}
	fmt.Println(gaussElimination(A, b))
}
`,_n=`function gauss_elimination(A, b)
    n = length(b)
    M = [A b]                       # augmented [A | b]
    for k in 1:n-1, i in k+1:n
        f = M[i, k] / M[k, k]
        M[i, k:n+1] .-= f .* M[k, k:n+1]
    end
    x = zeros(n)
    for i in n:-1:1
        x[i] = (M[i, n+1] - sum(M[i, j] * x[j] for j in i+1:n; init = 0.0)) / M[i, i]
    end
    return x
end

A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_elimination(A, b))   # [2, 3, -1]
`,An=`function gaussElimination(A, b) {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);   // augmented [A | b]
  for (let k = 0; k < n; k++)
    for (let i = k + 1; i < n; i++) {
      const f = M[i][k] / M[k][k];
      for (let j = k; j <= n; j++) M[i][j] -= f * M[k][j];
    }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = M[i][n];
    for (let j = i + 1; j < n; j++) s -= M[i][j] * x[j];
    x[i] = s / M[i][i];
  }
  return x;
}
console.log(gaussElimination([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
`,jn=`function x = gauss_elimination(A, b)
% GAUSS_ELIMINATION  Naive Gaussian elimination (no pivoting) + back-substitution.
    n = numel(b); M = [A, b(:)];
    for k = 1:n-1
        for i = k+1:n
            f = M(i,k) / M(k,k);
            M(i, k:n+1) = M(i, k:n+1) - f * M(k, k:n+1);
        end
    end
    x = zeros(n, 1);
    for i = n:-1:1
        x(i) = (M(i, n+1) - M(i, i+1:n) * x(i+1:n)) / M(i, i);
    end
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_elimination(A, b)');   % 2 3 -1
`,wn=`def gauss_elimination(A, b):
    """Naive Gaussian elimination (no pivoting) + back-substitution."""
    n = len(b)
    M = [row[:] + [b[i]] for i, row in enumerate(A)]   # augmented [A | b]
    for k in range(n):
        for i in range(k + 1, n):
            f = M[i][k] / M[k][k]
            for j in range(k, n + 1):
                M[i][j] -= f * M[k][j]
    x = [0.0] * n
    for i in range(n - 1, -1, -1):
        s = M[i][n] - sum(M[i][j] * x[j] for j in range(i + 1, n))
        x[i] = s / M[i][i]
    return x


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print(gauss_elimination(A, b))   # [2, 3, -1]
`,qn=`gauss_elimination <- function(A, b) {
  # Naive Gaussian elimination (no pivoting) + back-substitution.
  n <- length(b)
  M <- cbind(A, b)                       # augmented [A | b]
  for (k in 1:n) {
    if (k < n) {
      for (i in (k + 1):n) {
        f <- M[i, k] / M[k, k]
        M[i, k:(n + 1)] <- M[i, k:(n + 1)] - f * M[k, k:(n + 1)]
      }
    }
  }
  x <- numeric(n)
  for (i in n:1) {
    s <- M[i, n + 1]
    if (i < n) s <- s - sum(M[i, (i + 1):n] * x[(i + 1):n])
    x[i] <- s / M[i, i]
  }
  x
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
print(gauss_elimination(A, b))    # [2, 3, -1]
`,Mn=`// Naive Gaussian elimination (no pivoting) + back-substitution.
fn gauss_elimination(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = (0..n).map(|i| {
        let mut row = a[i].clone();
        row.push(b[i]);
        row
    }).collect();
    for k in 0..n {
        for i in k + 1..n {
            let f = m[i][k] / m[k][k];
            for j in k..=n { m[i][j] -= f * m[k][j]; }
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = m[i][n];
        for j in i + 1..n { s -= m[i][j] * x[j]; }
        x[i] = s / m[i][i];
    }
    x
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_elimination(&a, &b));   // [2, 3, -1]
}
`,Tn=`gaussElimination[A_, b_] := Module[{n = Length[b], M, x, f},
   M = MapThread[Append, {A, b}];           (* augmented [A | b] *)
   Do[f = M[[i, k]]/M[[k, k]];
      M[[i, k ;;]] -= f M[[k, k ;;]], {k, n - 1}, {i, k + 1, n}];
   x = ConstantArray[0., n];
   Do[x[[i]] = (M[[i, n + 1]] - Sum[M[[i, j]] x[[j]], {j, i + 1, n}])/M[[i, i]], {i, n, 1, -1}];
   x];
A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}; b = {8, -11, -3};
Print[gaussElimination[A, b]]
`,In=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Gauss-Jordan elimination (reduced row echelon form).
Vec gauss_jordan(Mat A, Vec b) {
    int n = b.size();
    for (int i = 0; i < n; ++i) A[i].push_back(b[i]);   // augment [A | b]
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]);
        double d = A[k][k];
        for (int j = 0; j <= n; ++j) A[k][j] /= d;       // normalize pivot row
        for (int i = 0; i < n; ++i)
            if (i != k) {
                double f = A[i][k];
                for (int j = 0; j <= n; ++j) A[i][j] -= f * A[k][j];
            }
    }
    Vec x(n);
    for (int i = 0; i < n; ++i) x[i] = A[i][n];
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    Vec x = gauss_jordan(A, b);
    cout << "x ="; for (double v : x) cout << " " << v; cout << "\\n";
}
`,Gn=`program gauss_jordan_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: M(n, n+1), x(n), d, f, tmp(n+1)
  integer :: i, j, k, p
  M(1,:) = [2d0, 1d0, -1d0, 8d0]
  M(2,:) = [-3d0, -1d0, 2d0, -11d0]
  M(3,:) = [-2d0, 1d0, 2d0, -3d0]
  do k = 1, n
     p = k
     do i = k+1, n
        if (abs(M(i,k)) > abs(M(p,k))) p = i
     end do
     tmp = M(k,:); M(k,:) = M(p,:); M(p,:) = tmp
     d = M(k,k); M(k,:) = M(k,:)/d
     do i = 1, n
        if (i /= k) then
           f = M(i,k); M(i,:) = M(i,:) - f*M(k,:)
        end if
     end do
  end do
  do i = 1, n
     x(i) = M(i, n+1)
  end do
  print '(A, 3F8.3)', 'x = ', x
end program gauss_jordan_demo
`,Sn=`package main

import (
	"fmt"
	"math"
)

// Solve A x = b by Gauss-Jordan elimination.
func gaussJordan(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append(append([]float64{}, A[i]...), b[i])
	}
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		d := m[k][k]
		for j := 0; j <= n; j++ {
			m[k][j] /= d
		}
		for i := 0; i < n; i++ {
			if i != k {
				f := m[i][k]
				for j := 0; j <= n; j++ {
					m[i][j] -= f * m[k][j]
				}
			}
		}
	}
	x := make([]float64, n)
	for i := 0; i < n; i++ {
		x[i] = m[i][n]
	}
	return x
}

func main() {
	fmt.Println(gaussJordan([][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, []float64{8, -11, -3}))
}
`,En=`function gauss_jordan(A, b)
    n = length(b); M = [Matrix{Float64}(A) Vector{Float64}(b)]   # [A | b]
    for k in 1:n
        p = argmax(abs.(M[k:n, k])) + k - 1
        M[[k, p], :] = M[[p, k], :]
        M[k, :] ./= M[k, k]                       # normalize pivot row
        for i in 1:n
            i != k && (M[i, :] .-= M[i, k] .* M[k, :])
        end
    end
    return M[:, end]
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_jordan(A, b))
`,On=`// Solve A x = b by Gauss-Jordan elimination.
function gaussJordan(A, b) {
  const n = b.length;
  const m = A.map((r, i) => [...r, b[i]]);
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]];
    const d = m[k][k];
    for (let j = 0; j <= n; j++) m[k][j] /= d;
    for (let i = 0; i < n; i++) {
      if (i !== k) {
        const f = m[i][k];
        for (let j = 0; j <= n; j++) m[i][j] -= f * m[k][j];
      }
    }
  }
  return m.map((row) => row[n]);
}
console.log(gaussJordan([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
`,Wn=`function x = gauss_jordan(A, b)
% GAUSS_JORDAN  Solve A x = b via reduced row echelon form.
    n = numel(b); M = [A, b(:)];
    for k = 1:n
        [~, p] = max(abs(M(k:n, k))); p = p + k - 1;
        M([k p], :) = M([p k], :);
        M(k, :) = M(k, :) / M(k, k);                      % normalize pivot row
        for i = 1:n
            if i ~= k
                M(i, :) = M(i, :) - M(i, k) * M(k, :);
            end
        end
    end
    x = M(:, end);
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_jordan(A, b)');
`,Hn=`import numpy as np


def gauss_jordan(A, b):
    """Solve A x = b by Gauss-Jordan elimination (reduced row echelon form)."""
    A = np.array(A, float)
    M = np.hstack([A, np.array(b, float).reshape(-1, 1)])
    n = len(b)
    for k in range(n):
        p = k + np.argmax(np.abs(M[k:, k]))       # partial pivot
        M[[k, p]] = M[[p, k]]
        M[k] /= M[k, k]                           # normalize pivot row
        for i in range(n):
            if i != k:
                M[i] -= M[i, k] * M[k]            # eliminate above and below
    return M[:, -1]


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print("x =", gauss_jordan(A, b))
`,Bn=`gauss_jordan <- function(A, b) {
  # Solve A x = b by Gauss-Jordan elimination (reduced row echelon form).
  A <- matrix(as.numeric(A), nrow = nrow(A))
  n <- length(b)
  M <- cbind(A, as.numeric(b))
  for (k in 1:n) {
    p <- k - 1 + which.max(abs(M[k:n, k]))   # partial pivot
    if (p != k) M[c(k, p), ] <- M[c(p, k), ]
    M[k, ] <- M[k, ] / M[k, k]               # normalize pivot row
    for (i in 1:n) {
      if (i != k) M[i, ] <- M[i, ] - M[i, k] * M[k, ]   # eliminate
    }
  }
  M[, n + 1]
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
cat("x =", gauss_jordan(A, b), "\\n")
`,Pn=`// Solve A x = b by Gauss-Jordan elimination (reduced row echelon form).
fn gauss_jordan(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = (0..n).map(|i| {
        let mut row = a[i].clone(); row.push(b[i]); row
    }).collect();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if m[i][k].abs() > m[p][k].abs() { p = i; } }
        m.swap(k, p);
        let d = m[k][k];
        for j in 0..=n { m[k][j] /= d; }
        for i in 0..n {
            if i != k {
                let f = m[i][k];
                for j in 0..=n { m[i][j] -= f * m[k][j]; }
            }
        }
    }
    (0..n).map(|i| m[i][n]).collect()
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_jordan(&a, &b));
}
`,Jn=`gaussJordan[Ain_, bin_] := Module[{M = N@MapThread[Append, {Ain, bin}], n = Length[bin], p, f},
   Do[
    p = k - 1 + First@Ordering[Abs[M[[k ;;, k]]], -1];
    M[[{k, p}]] = M[[{p, k}]];
    M[[k]] /= M[[k, k]];
    Do[If[i != k, M[[i]] -= M[[i, k]] M[[k]]], {i, n}],
    {k, n}];
   M[[All, -1]]];
Print[gaussJordan[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, {8, -11, -3}]]
`,Nn=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve A x = b by Gaussian elimination with partial (row) pivoting.
Vec gauss_partial_pivot(Mat A, Vec b) {
    int n = b.size();
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]); swap(b[k], b[p]);
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j];
            b[i] -= f * b[k];
        }
    }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j];
        x[i] = s / A[i][i];
    }
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    Vec x = gauss_partial_pivot(A, b);
    cout << "x ="; for (double v : x) cout << " " << v; cout << "\\n";
}
`,Dn=`program gauss_partial_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), b(n), x(n), f, tmp(n), tb
  integer :: i, j, k, p
  A(1,:) = [2d0, 1d0, -1d0]; A(2,:) = [-3d0, -1d0, 2d0]; A(3,:) = [-2d0, 1d0, 2d0]
  b = [8d0, -11d0, -3d0]
  do k = 1, n
     p = k
     do i = k+1, n
        if (abs(A(i,k)) > abs(A(p,k))) p = i
     end do
     tmp = A(k,:); A(k,:) = A(p,:); A(p,:) = tmp
     tb = b(k); b(k) = b(p); b(p) = tb
     do i = k+1, n
        f = A(i,k)/A(k,k)
        A(i, k:n) = A(i, k:n) - f*A(k, k:n)
        b(i) = b(i) - f*b(k)
     end do
  end do
  do i = n, 1, -1
     x(i) = (b(i) - dot_product(A(i, i+1:n), x(i+1:n)))/A(i,i)
  end do
  print '(A, 3F8.3)', 'x = ', x
end program gauss_partial_demo
`,Cn=`package main

import (
	"fmt"
	"math"
)

// Gaussian elimination with partial (row) pivoting.
func gaussPartialPivot(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		r[k], r[p] = r[p], r[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * x[j]
		}
		x[i] = s / m[i][i]
	}
	return x
}

func main() {
	fmt.Println(gaussPartialPivot([][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, []float64{8, -11, -3}))
}
`,Fn=`function gauss_partial_pivot(A, b)
    A = Matrix{Float64}(A); b = Vector{Float64}(b); n = length(b)
    for k in 1:n
        p = argmax(abs.(A[k:n, k])) + k - 1          # largest pivot
        A[[k, p], :] = A[[p, k], :]; b[[k, p]] = b[[p, k]]
        for i in k+1:n
            f = A[i, k] / A[k, k]
            A[i, k:n] .-= f .* A[k, k:n]; b[i] -= f * b[k]
        end
    end
    x = zeros(n)
    for i in n:-1:1
        x[i] = (b[i] - sum(A[i, j] * x[j] for j in i+1:n; init = 0.0)) / A[i, i]
    end
    return x
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]; b = [8.0, -11, -3]
println(gauss_partial_pivot(A, b))
`,Ln=`// Gaussian elimination with partial (row) pivoting.
function gaussPartialPivot(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]);
  const r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]];
    [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j];
    x[i] = s / m[i][i];
  }
  return x;
}
console.log(gaussPartialPivot([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
`,Vn=`function x = gauss_partial_pivot(A, b)
% GAUSS_PARTIAL_PIVOT  Solve A x = b with partial (row) pivoting.
    b = b(:); n = numel(b);
    for k = 1:n
        [~, p] = max(abs(A(k:n, k))); p = p + k - 1;     % largest pivot
        A([k p], :) = A([p k], :); b([k p]) = b([p k]);
        for i = k+1:n
            f = A(i,k) / A(k,k);
            A(i, k:n) = A(i, k:n) - f * A(k, k:n);
            b(i) = b(i) - f * b(k);
        end
    end
    x = zeros(n, 1);                                      % back substitution
    for i = n:-1:1
        x(i) = (b(i) - A(i, i+1:n) * x(i+1:n)) / A(i, i);
    end
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_partial_pivot(A, b)');                         % 2  3  -1
`,Rn=`import numpy as np


def gauss_partial_pivot(A, b):
    """Solve A x = b by Gaussian elimination with partial (row) pivoting."""
    A = np.array(A, float)
    b = np.array(b, float)
    n = len(b)
    for k in range(n):
        p = k + np.argmax(np.abs(A[k:, k]))      # largest |pivot| in column k
        A[[k, p]] = A[[p, k]]
        b[[k, p]] = b[[p, k]]
        for i in range(k + 1, n):
            f = A[i, k] / A[k, k]
            A[i, k:] -= f * A[k, k:]
            b[i] -= f * b[k]
    x = np.zeros(n)                               # back substitution
    for i in range(n - 1, -1, -1):
        x[i] = (b[i] - A[i, i + 1:] @ x[i + 1:]) / A[i, i]
    return x


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print("x =", gauss_partial_pivot(A, b))      # [2, 3, -1]
`,Un=`gauss_partial_pivot <- function(A, b) {
  # Solve A x = b by Gaussian elimination with partial (row) pivoting.
  A <- matrix(as.numeric(A), nrow = nrow(A))
  b <- as.numeric(b)
  n <- length(b)
  for (k in 1:n) {
    p <- k - 1 + which.max(abs(A[k:n, k]))   # largest |pivot| in column k
    if (p != k) {
      A[c(k, p), ] <- A[c(p, k), ]
      b[c(k, p)] <- b[c(p, k)]
    }
    if (k < n) {
      for (i in (k + 1):n) {
        f <- A[i, k] / A[k, k]
        A[i, k:n] <- A[i, k:n] - f * A[k, k:n]
        b[i] <- b[i] - f * b[k]
      }
    }
  }
  x <- numeric(n)                            # back substitution
  for (i in n:1) {
    s <- b[i]
    if (i < n) s <- s - sum(A[i, (i + 1):n] * x[(i + 1):n])
    x[i] <- s / A[i, i]
  }
  x
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
cat("x =", gauss_partial_pivot(A, b), "\\n")   # [2, 3, -1]
`,Xn=`// Gaussian elimination with partial (row) pivoting.
fn gauss_partial_pivot(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = a.iter().cloned().collect();
    let mut r = b.to_vec();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if m[i][k].abs() > m[p][k].abs() { p = i; } }
        m.swap(k, p); r.swap(k, p);
        for i in k + 1..n {
            let f = m[i][k] / m[k][k];
            for j in k..n { m[i][j] -= f * m[k][j]; }
            r[i] -= f * r[k];
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = r[i];
        for j in i + 1..n { s -= m[i][j] * x[j]; }
        x[i] = s / m[i][i];
    }
    x
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_partial_pivot(&a, &b));
}
`,Kn=`gaussPartial[Ain_, bin_] := Module[{A = N[Ain], b = N[bin], n = Length[bin], p, f, x},
   Do[
    p = k - 1 + First@Ordering[Abs[A[[k ;;, k]]], -1];
    A[[{k, p}]] = A[[{p, k}]]; b[[{k, p}]] = b[[{p, k}]];
    Do[f = A[[i, k]]/A[[k, k]];
       A[[i, k ;;]] -= f A[[k, k ;;]]; b[[i]] -= f b[[k]], {i, k + 1, n}],
    {k, n}];
   x = ConstantArray[0., n];
   Do[x[[i]] = (b[[i]] - Sum[A[[i, j]] x[[j]], {j, i + 1, n}])/A[[i, i]], {i, n, 1, -1}];
   x];
Print[gaussPartial[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, {8, -11, -3}]]
`,Qn=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
Mat inverse(Mat A) {
    int n = A.size();
    for (int i = 0; i < n; ++i) { A[i].resize(2 * n, 0.0); A[i][n + i] = 1.0; }
    for (int k = 0; k < n; ++k) {
        int p = k;
        for (int i = k + 1; i < n; ++i) if (fabs(A[i][k]) > fabs(A[p][k])) p = i;
        swap(A[k], A[p]);
        double d = A[k][k];
        for (int j = 0; j < 2 * n; ++j) A[k][j] /= d;
        for (int i = 0; i < n; ++i)
            if (i != k) {
                double f = A[i][k];
                for (int j = 0; j < 2 * n; ++j) A[i][j] -= f * A[k][j];
            }
    }
    Mat inv(n, Vec(n));
    for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) inv[i][j] = A[i][n + j];
    return inv;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Mat inv = inverse(A);
    cout << "A^-1 =\\n";
    for (auto& row : inv) { for (double v : row) cout << v << " "; cout << "\\n"; }
}
`,Zn=`program matrix_inverse_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: M(n, 2*n), d, f, tmp(2*n)
  integer :: i, j, k, p
  M = 0d0
  M(1,1:n) = [2d0, 1d0, -1d0]; M(2,1:n) = [-3d0, -1d0, 2d0]; M(3,1:n) = [-2d0, 1d0, 2d0]
  do i = 1, n
     M(i, n+i) = 1d0                 ! augment with identity
  end do
  do k = 1, n
     p = k
     do i = k+1, n
        if (abs(M(i,k)) > abs(M(p,k))) p = i
     end do
     tmp = M(k,:); M(k,:) = M(p,:); M(p,:) = tmp
     d = M(k,k); M(k,:) = M(k,:)/d
     do i = 1, n
        if (i /= k) then
           f = M(i,k); M(i,:) = M(i,:) - f*M(k,:)
        end if
     end do
  end do
  do i = 1, n
     print '(3F8.3)', M(i, n+1:2*n)
  end do
end program matrix_inverse_demo
`,Yn=`package main

import (
	"fmt"
	"math"
)

// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
func inverse(A [][]float64) [][]float64 {
	n := len(A)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
		for j := 0; j < n; j++ {
			if i == j {
				m[i] = append(m[i], 1)
			} else {
				m[i] = append(m[i], 0)
			}
		}
	}
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		d := m[k][k]
		for j := 0; j < 2*n; j++ {
			m[k][j] /= d
		}
		for i := 0; i < n; i++ {
			if i != k {
				f := m[i][k]
				for j := 0; j < 2*n; j++ {
					m[i][j] -= f * m[k][j]
				}
			}
		}
	}
	inv := make([][]float64, n)
	for i := range m {
		inv[i] = m[i][n:]
	}
	return inv
}

func main() {
	for _, row := range inverse([][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}) {
		fmt.Println(row)
	}
}
`,et=`using LinearAlgebra

function inverse(A)
    n = size(A, 1)
    M = [Matrix{Float64}(A) Matrix{Float64}(I, n, n)]   # [A | I]
    for k in 1:n
        p = argmax(abs.(M[k:n, k])) + k - 1
        M[[k, p], :] = M[[p, k], :]
        M[k, :] ./= M[k, k]
        for i in 1:n
            i != k && (M[i, :] .-= M[i, k] .* M[k, :])
        end
    end
    return M[:, n+1:end]
end
A = [2.0 1 -1; -3 -1 2; -2 1 2]
println(inverse(A))
`,nt=`// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
function inverse(A) {
  const n = A.length;
  const m = A.map((r, i) => [...r, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))]);
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]];
    const d = m[k][k];
    for (let j = 0; j < 2 * n; j++) m[k][j] /= d;
    for (let i = 0; i < n; i++) {
      if (i !== k) {
        const f = m[i][k];
        for (let j = 0; j < 2 * n; j++) m[i][j] -= f * m[k][j];
      }
    }
  }
  return m.map((row) => row.slice(n));
}
console.log(inverse([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]));
`,tt=`function Ainv = matrix_inverse(A)
% MATRIX_INVERSE  Inverse via Gauss-Jordan on the augmented matrix [A | I].
    n = size(A, 1); M = [A, eye(n)];
    for k = 1:n
        [~, p] = max(abs(M(k:n, k))); p = p + k - 1;
        M([k p], :) = M([p k], :);
        M(k, :) = M(k, :) / M(k, k);
        for i = 1:n
            if i ~= k
                M(i, :) = M(i, :) - M(i, k) * M(k, :);
            end
        end
    end
    Ainv = M(:, n+1:end);
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2];
disp(matrix_inverse(A));
`,at=`import numpy as np


def inverse(A):
    """Matrix inverse via Gauss-Jordan on the augmented system [A | I]."""
    A = np.array(A, float)
    n = len(A)
    M = np.hstack([A, np.eye(n)])
    for k in range(n):
        p = k + np.argmax(np.abs(M[k:, k]))
        M[[k, p]] = M[[p, k]]
        M[k] /= M[k, k]
        for i in range(n):
            if i != k:
                M[i] -= M[i, k] * M[k]
    return M[:, n:]                               # right half is A^{-1}


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    Ainv = inverse(A)
    print("A^-1 =\\n", Ainv)
    print("check A @ A^-1 =\\n", np.round(np.array(A, float) @ Ainv, 10))
`,it=`inverse <- function(A) {
  # Matrix inverse via Gauss-Jordan on the augmented system [A | I].
  A <- matrix(as.numeric(A), nrow = nrow(A))
  n <- nrow(A)
  M <- cbind(A, diag(n))
  for (k in 1:n) {
    p <- k - 1 + which.max(abs(M[k:n, k]))
    if (p != k) M[c(k, p), ] <- M[c(p, k), ]
    M[k, ] <- M[k, ] / M[k, k]
    for (i in 1:n) {
      if (i != k) M[i, ] <- M[i, ] - M[i, k] * M[k, ]
    }
  }
  M[, (n + 1):(2 * n)]                        # right half is A^{-1}
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
Ainv <- inverse(A)
cat("A^-1 =\\n")
print(Ainv)
cat("check A %*% A^-1 =\\n")
print(round(A %*% Ainv, 10))
`,st=`// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
fn inverse(a: &[Vec<f64>]) -> Vec<Vec<f64>> {
    let n = a.len();
    let mut m: Vec<Vec<f64>> = (0..n).map(|i| {
        let mut row = a[i].clone();
        row.extend((0..n).map(|j| if i == j { 1.0 } else { 0.0 }));
        row
    }).collect();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if m[i][k].abs() > m[p][k].abs() { p = i; } }
        m.swap(k, p);
        let d = m[k][k];
        for j in 0..2 * n { m[k][j] /= d; }
        for i in 0..n {
            if i != k {
                let f = m[i][k];
                for j in 0..2 * n { m[i][j] -= f * m[k][j]; }
            }
        }
    }
    m.iter().map(|row| row[n..].to_vec()).collect()
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    for row in inverse(&a) { println!("{:?}", row); }
}
`,ot=`inverse[Ain_] := Module[{A = N[Ain], n = Length[Ain], M, p, d},
   M = MapThread[Join, {A, IdentityMatrix[n]}];      (* [A | I] *)
   Do[
    p = k - 1 + First@Ordering[Abs[M[[k ;;, k]]], -1];
    M[[{k, p}]] = M[[{p, k}]];
    M[[k]] /= M[[k, k]];
    Do[If[i != k, M[[i]] -= M[[i, k]] M[[k]]], {i, n}],
    {k, n}];
   M[[All, n + 1 ;;]]];
Print[inverse[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}]]
`,rt=`#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;

// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
Vec thomas(const Vec& a, const Vec& b, Vec c, Vec d) {
    int n = d.size();
    c[0] /= b[0]; d[0] /= b[0];
    for (int i = 1; i < n; ++i) {
        double m = b[i] - a[i] * c[i - 1];
        if (i < n - 1) c[i] /= m;
        d[i] = (d[i] - a[i] * d[i - 1]) / m;
    }
    Vec x(n);
    x[n - 1] = d[n - 1];
    for (int i = n - 2; i >= 0; --i) x[i] = d[i] - c[i] * x[i + 1];
    return x;
}

int main() {
    Vec a = {0, -1, -1, -1}, b = {4, 4, 4, 4}, c = {-1, -1, -1, 0}, d = {2, 4, 6, 13};
    for (double v : thomas(a, b, c, d)) cout << v << " ";
    cout << "\\n";
}
`,lt=`program thomas_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: a(n), b(n), c(n), d(n), x(n), m
  integer :: i
  a = [0d0, -1d0, -1d0, -1d0]      ! sub-diagonal (a(1) unused)
  b = [4d0, 4d0, 4d0, 4d0]         ! diagonal
  c = [-1d0, -1d0, -1d0, 0d0]      ! super-diagonal
  d = [2d0, 4d0, 6d0, 13d0]        ! right-hand side
  c(1) = c(1)/b(1); d(1) = d(1)/b(1)
  do i = 2, n
     m = b(i) - a(i)*c(i-1)
     if (i < n) c(i) = c(i)/m
     d(i) = (d(i) - a(i)*d(i-1))/m
  end do
  x(n) = d(n)
  do i = n-1, 1, -1
     x(i) = d(i) - c(i)*x(i+1)
  end do
  print '(A, 4F8.3)', 'x = ', x
end program thomas_demo
`,mt=`package main

import "fmt"

// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
func thomas(a, b, c, d []float64) []float64 {
	n := len(d)
	cc := append([]float64{}, c...)
	dd := append([]float64{}, d...)
	cc[0] /= b[0]
	dd[0] /= b[0]
	for i := 1; i < n; i++ {
		m := b[i] - a[i]*cc[i-1]
		if i < n-1 {
			cc[i] /= m
		}
		dd[i] = (dd[i] - a[i]*dd[i-1]) / m
	}
	x := make([]float64, n)
	x[n-1] = dd[n-1]
	for i := n - 2; i >= 0; i-- {
		x[i] = dd[i] - cc[i]*x[i+1]
	}
	return x
}

func main() {
	fmt.Println(thomas([]float64{0, -1, -1, -1}, []float64{4, 4, 4, 4},
		[]float64{-1, -1, -1, 0}, []float64{2, 4, 6, 13}))
}
`,ht=`function thomas(a, b, c, d)
    n = length(d); c = copy(c); d = copy(d)
    c[1] /= b[1]; d[1] /= b[1]
    for i in 2:n
        m = b[i] - a[i] * c[i-1]
        i < n && (c[i] /= m)
        d[i] = (d[i] - a[i] * d[i-1]) / m
    end
    x = zeros(n); x[n] = d[n]
    for i in n-1:-1:1
        x[i] = d[i] - c[i] * x[i+1]
    end
    return x
end

a = [0.0, -1, -1, -1]; b = [4.0, 4, 4, 4]; c = [-1.0, -1, -1, 0]; d = [2.0, 4, 6, 13]
println(thomas(a, b, c, d))
`,ut=`// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
function thomas(a, b, c, d) {
  const n = d.length;
  const cc = [...c], dd = [...d];
  cc[0] /= b[0]; dd[0] /= b[0];
  for (let i = 1; i < n; i++) {
    const m = b[i] - a[i] * cc[i - 1];
    if (i < n - 1) cc[i] /= m;
    dd[i] = (dd[i] - a[i] * dd[i - 1]) / m;
  }
  const x = new Array(n).fill(0);
  x[n - 1] = dd[n - 1];
  for (let i = n - 2; i >= 0; i--) x[i] = dd[i] - cc[i] * x[i + 1];
  return x;
}
console.log(thomas([0, -1, -1, -1], [4, 4, 4, 4], [-1, -1, -1, 0], [2, 4, 6, 13]));
`,dt=`function x = thomas(a, b, c, d)
% THOMAS  Tridiagonal solver. a: sub-diagonal (a(1) unused), b: diagonal,
% c: super-diagonal, d: right-hand side.
    n = numel(d); c = c(:); d = d(:);
    c(1) = c(1) / b(1); d(1) = d(1) / b(1);
    for i = 2:n
        m = b(i) - a(i) * c(i-1);
        if i < n, c(i) = c(i) / m; end
        d(i) = (d(i) - a(i) * d(i-1)) / m;
    end
    x = zeros(n, 1); x(n) = d(n);
    for i = n-1:-1:1
        x(i) = d(i) - c(i) * x(i+1);
    end
end

% --- Demo ---  diagonal 4, off-diagonals -1; solution [1 2 3 4]
disp(thomas([0 -1 -1 -1], [4 4 4 4], [-1 -1 -1 0], [2 4 6 13])');
`,ft=`def thomas(a, b, c, d):
    """Thomas algorithm for a tridiagonal system.
    a: sub-diagonal (a[0] unused), b: diagonal, c: super-diagonal, d: rhs."""
    n = len(d)
    c2, d2 = c[:], d[:]
    c2[0] /= b[0]
    d2[0] /= b[0]
    for i in range(1, n):
        m = b[i] - a[i] * c2[i - 1]
        c2[i] = c[i] / m if i < n - 1 else 0.0
        d2[i] = (d[i] - a[i] * d2[i - 1]) / m
    x = [0.0] * n
    x[-1] = d2[-1]
    for i in range(n - 2, -1, -1):
        x[i] = d2[i] - c2[i] * x[i + 1]
    return x


if __name__ == "__main__":
    # diagonal 4, off-diagonals -1; solution [1, 2, 3, 4]
    a = [0, -1, -1, -1]
    b = [4, 4, 4, 4]
    c = [-1, -1, -1, 0]
    d = [2, 4, 6, 13]
    print(thomas(a, b, c, d))
`,$t=`thomas <- function(a, b, c, d) {
  # Thomas algorithm for a tridiagonal system.
  # a: sub-diagonal (a[1] unused), b: diagonal, c: super-diagonal, d: rhs.
  n <- length(d)
  c2 <- c
  d2 <- d
  c2[1] <- c2[1] / b[1]
  d2[1] <- d2[1] / b[1]
  for (i in 2:n) {
    m <- b[i] - a[i] * c2[i - 1]
    c2[i] <- if (i < n) c[i] / m else 0.0
    d2[i] <- (d[i] - a[i] * d2[i - 1]) / m
  }
  x <- numeric(n)
  x[n] <- d2[n]
  for (i in (n - 1):1) {
    x[i] <- d2[i] - c2[i] * x[i + 1]
  }
  x
}

# diagonal 4, off-diagonals -1; solution [1, 2, 3, 4]
a <- c(0, -1, -1, -1)
b <- c(4, 4, 4, 4)
c <- c(-1, -1, -1, 0)
d <- c(2, 4, 6, 13)
print(thomas(a, b, c, d))
`,ct=`// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
fn thomas(a: &[f64], b: &[f64], c: &[f64], d: &[f64]) -> Vec<f64> {
    let n = d.len();
    let (mut cc, mut dd) = (c.to_vec(), d.to_vec());
    cc[0] /= b[0]; dd[0] /= b[0];
    for i in 1..n {
        let m = b[i] - a[i] * cc[i - 1];
        if i < n - 1 { cc[i] /= m; }
        dd[i] = (dd[i] - a[i] * dd[i - 1]) / m;
    }
    let mut x = vec![0.0; n];
    x[n - 1] = dd[n - 1];
    for i in (0..n - 1).rev() { x[i] = dd[i] - cc[i] * x[i + 1]; }
    x
}
fn main() {
    let a = [0.0, -1.0, -1.0, -1.0];
    let b = [4.0, 4.0, 4.0, 4.0];
    let c = [-1.0, -1.0, -1.0, 0.0];
    let d = [2.0, 4.0, 6.0, 13.0];
    println!("{:?}", thomas(&a, &b, &c, &d));
}
`,bt=`thomas[a_, b_, cIn_, dIn_] := Module[{n = Length[dIn], c = cIn, d = dIn, x, m},
   c[[1]] /= b[[1]]; d[[1]] /= b[[1]];
   Do[m = b[[i]] - a[[i]] c[[i - 1]];
      If[i < n, c[[i]] /= m];
      d[[i]] = (d[[i]] - a[[i]] d[[i - 1]])/m, {i, 2, n}];
   x = ConstantArray[0., n]; x[[n]] = d[[n]];
   Do[x[[i]] = d[[i]] - c[[i]] x[[i + 1]], {i, n - 1, 1, -1}];
   x];
Print[thomas[{0, -1, -1, -1}, {4, 4, 4, 4}, {-1, -1, -1, 0}, {2, 4, 6, 13}]]
`,gt=Object.assign({"./back-substitution.cpp":Fe,"./back-substitution.f90":Le,"./back-substitution.go":Ve,"./back-substitution.jl":Re,"./back-substitution.js":Ue,"./back-substitution.m":Xe,"./back-substitution.py":Ke,"./back-substitution.r":Qe,"./back-substitution.rs":Ze,"./back-substitution.wl":Ye,"./forward-substitution.cpp":en,"./forward-substitution.f90":nn,"./forward-substitution.go":tn,"./forward-substitution.jl":an,"./forward-substitution.js":sn,"./forward-substitution.m":on,"./forward-substitution.py":rn,"./forward-substitution.r":ln,"./forward-substitution.rs":mn,"./forward-substitution.wl":hn,"./gauss-complete.cpp":un,"./gauss-complete.f90":dn,"./gauss-complete.go":fn,"./gauss-complete.jl":$n,"./gauss-complete.js":cn,"./gauss-complete.m":bn,"./gauss-complete.py":gn,"./gauss-complete.r":kn,"./gauss-complete.rs":pn,"./gauss-complete.wl":zn,"./gauss-elimination.cpp":vn,"./gauss-elimination.f90":xn,"./gauss-elimination.go":yn,"./gauss-elimination.jl":_n,"./gauss-elimination.js":An,"./gauss-elimination.m":jn,"./gauss-elimination.py":wn,"./gauss-elimination.r":qn,"./gauss-elimination.rs":Mn,"./gauss-elimination.wl":Tn,"./gauss-jordan.cpp":In,"./gauss-jordan.f90":Gn,"./gauss-jordan.go":Sn,"./gauss-jordan.jl":En,"./gauss-jordan.js":On,"./gauss-jordan.m":Wn,"./gauss-jordan.py":Hn,"./gauss-jordan.r":Bn,"./gauss-jordan.rs":Pn,"./gauss-jordan.wl":Jn,"./gauss-partial.cpp":Nn,"./gauss-partial.f90":Dn,"./gauss-partial.go":Cn,"./gauss-partial.jl":Fn,"./gauss-partial.js":Ln,"./gauss-partial.m":Vn,"./gauss-partial.py":Rn,"./gauss-partial.r":Un,"./gauss-partial.rs":Xn,"./gauss-partial.wl":Kn,"./matrix-inverse.cpp":Qn,"./matrix-inverse.f90":Zn,"./matrix-inverse.go":Yn,"./matrix-inverse.jl":et,"./matrix-inverse.js":nt,"./matrix-inverse.m":tt,"./matrix-inverse.py":at,"./matrix-inverse.r":it,"./matrix-inverse.rs":st,"./matrix-inverse.wl":ot,"./tridiagonal.cpp":rt,"./tridiagonal.f90":lt,"./tridiagonal.go":mt,"./tridiagonal.jl":ht,"./tridiagonal.js":ut,"./tridiagonal.m":dt,"./tridiagonal.py":ft,"./tridiagonal.r":$t,"./tridiagonal.rs":ct,"./tridiagonal.wl":bt}),I=(e,n)=>gt[`./${e}.${n}`],kt={"forward-substitution":{en:"Forward substitution (lower-triangular system)",hu:"Előrehelyettesítés (alsó háromszögű rendszer)"},"back-substitution":{en:"Back-substitution (upper-triangular system)",hu:"Visszahelyettesítés (felső háromszögű rendszer)"},"gauss-elimination":{en:"Gaussian elimination (no pivoting)",hu:"Gauss-elimináció (főelemkiválasztás nélkül)"},"gauss-partial":{en:"Gaussian elimination — partial pivoting",hu:"Gauss-elimináció — részleges főelemkiválasztás"},"gauss-complete":{en:"Gaussian elimination — complete pivoting",hu:"Gauss-elimináció — teljes főelemkiválasztás"},"gauss-jordan":{en:"Gauss–Jordan elimination",hu:"Gauss–Jordan-elimináció"},"matrix-inverse":{en:"Matrix inverse (Gauss–Jordan on [A | I])",hu:"Mátrixinverz (Gauss–Jordan az [A | I] mátrixon)"},tridiagonal:{en:"Tridiagonal solver (Thomas algorithm)",hu:"Tridiagonális megoldó (Thomas-algoritmus)"}},pt=e=>({id:e,caption:kt[e],snippets:{matlab:I(e,"m"),python:I(e,"py"),cpp:I(e,"cpp"),julia:I(e,"jl"),rust:I(e,"rs"),fortran:I(e,"f90"),wolfram:I(e,"wl"),javascript:I(e,"js"),go:I(e,"go"),r:I(e,"r")}}),zt={s33:["forward-substitution","back-substitution","gauss-elimination","gauss-partial","gauss-complete","gauss-jordan","matrix-inverse","tridiagonal"]};function vt(e){return(zt[e]??[]).map(pt)}function Z(e,n){return new oe(e)}const U=new oe(0),ce=new oe(1);function E(e){return e.n===0}function ae(e){if(e.n===0)return"0";const n=e.s<0?"-":"";return e.d===1?`${n}${e.n}`:`${n}\\frac{${e.n}}{${e.d}}`}function w(e){if(e.n===0)return"0";const n=e.s<0?"-":"";return e.d===1?`${n}${e.n}`:`${n}${e.n}/${e.d}`}function X(e){return e.map(n=>n.slice())}function xt(e){const n=[];for(let i=0;i<e;i++)n.push(Array.from({length:e},(a,o)=>Z(i===o?1:0)));return n}function yt(e,n){return e.map((i,a)=>i.concat(n[a]))}const _t=e=>e.length?e[0].length:0;function At(e,n,i){return e.map(a=>a.slice(n,i))}function g(e){return e+1}function re(e,n,i){const a=X(e),o=a.length,h=_t(a),l=Array.from({length:n},(r,j)=>j),u=[],s=[];let d=0,p=0,v=!1;const $=()=>X(a);s.push({kind:"init",matrix:$(),coeffCols:n,varOrder:l.slice(),caption:{en:"Initial augmented matrix.",hu:"Kiindulási kibővített mátrix."}});const q=r=>{let j=U;for(let T=0;T<n;T++){const f=a[r][T].abs();f.compare(j)>0&&(j=f)}return j},M=Math.min(o,n);for(let r=0;r<M;r++){if(i.pivoting==="partial"){let f=r;for(let z=r+1;z<o;z++)a[z][r].abs().compare(a[f][r].abs())>0&&(f=z);!E(a[f][r])&&f!==r&&([a[r],a[f]]=[a[f],a[r]],d++,s.push({kind:"row-swap",matrix:$(),coeffCols:n,varOrder:l.slice(),swapRows:[r,f],caption:{en:`Partial pivoting: swap rows ${g(r)} and ${g(f)} (largest |entry| in column ${g(r)}).`,hu:`Részleges főelemkiválasztás: ${g(r)}. és ${g(f)}. sor cseréje (legnagyobb |elem| a(z) ${g(r)}. oszlopban).`}}))}else if(i.pivoting==="scaled"){let f=r,z=null;for(let A=r;A<o;A++){const _=q(A),O=E(_)?U:a[A][r].abs().div(_);(z===null||O.compare(z)>0)&&(z=O,f=A)}!E(a[f][r])&&f!==r&&([a[r],a[f]]=[a[f],a[r]],d++,s.push({kind:"row-swap",matrix:$(),coeffCols:n,varOrder:l.slice(),swapRows:[r,f],caption:{en:`Scaled partial pivoting: swap rows ${g(r)} and ${g(f)} (largest scaled ratio).`,hu:`Skálázott főelemkiválasztás: ${g(r)}. és ${g(f)}. sor cseréje (legnagyobb skálázott hányados).`}}))}else if(i.pivoting==="complete"){let f=r,z=r;for(let A=r;A<o;A++)for(let _=r;_<n;_++)a[A][_].abs().compare(a[f][z].abs())>0&&(f=A,z=_);if(!E(a[f][z])&&(f!==r&&([a[r],a[f]]=[a[f],a[r]],d++,s.push({kind:"row-swap",matrix:$(),coeffCols:n,varOrder:l.slice(),swapRows:[r,f],caption:{en:`Complete pivoting: swap rows ${g(r)} and ${g(f)}.`,hu:`Teljes főelemkiválasztás: ${g(r)}. és ${g(f)}. sor cseréje.`}})),z!==r)){for(let A=0;A<o;A++)[a[A][r],a[A][z]]=[a[A][z],a[A][r]];[l[r],l[z]]=[l[z],l[r]],p++,s.push({kind:"col-swap",matrix:$(),coeffCols:n,varOrder:l.slice(),swapCols:[r,z],caption:{en:`Complete pivoting: swap columns ${g(r)} and ${g(z)} (track variable order).`,hu:`Teljes főelemkiválasztás: ${g(r)}. és ${g(z)}. oszlop cseréje (a változók sorrendjét követjük).`}})}}const j=a[r][r];if(u.push(j),E(j)){v=!0,s.push({kind:"pivot-select",matrix:$(),coeffCols:n,varOrder:l.slice(),pivot:[r,r],caption:{en:`Pivot a_{${g(r)}${g(r)}} = 0 and no nonzero entry is available — the elimination stops (matrix is singular${i.pivoting==="none"?" for this strategy":""}).`,hu:`A főelem a_{${g(r)}${g(r)}} = 0, és nincs nemnulla elem — az elimináció megáll (a mátrix szinguláris${i.pivoting==="none"?" ennél a stratégiánál":""}).`}});break}s.push({kind:"pivot-select",matrix:$(),coeffCols:n,varOrder:l.slice(),pivot:[r,r],caption:{en:`Pivot a_{${g(r)}${g(r)}} = ${w(j)}.`,hu:`Főelem a_{${g(r)}${g(r)}} = ${w(j)}.`}});const T=i.method==="gauss-jordan"?0:r+1;for(let f=T;f<o;f++){if(f===r||E(a[f][r]))continue;const z=a[f][r].div(j),A=[];for(let _=r;_<h;_++){const O=a[f][_];a[f][_]=a[f][_].sub(z.mul(a[r][_])),a[f][_].equals(O)||A.push([f,_])}s.push({kind:"eliminate",matrix:$(),coeffCols:n,varOrder:l.slice(),pivot:[r,r],multiplier:z,changed:A,caption:{en:`Eliminate: R${g(f)} ← R${g(f)} − (${w(z)})·R${g(r)}.`,hu:`Kiküszöbölés: S${g(f)} ← S${g(f)} − (${w(z)})·S${g(r)}.`}})}}if(i.method==="gauss-jordan"&&!v)for(let r=0;r<M;r++){const j=a[r][r];if(E(j)||j.equals(ce))continue;const T=[];for(let f=0;f<h;f++)a[r][f]=a[r][f].div(j),T.push([r,f]);s.push({kind:"normalize",matrix:$(),coeffCols:n,varOrder:l.slice(),pivot:[r,r],changed:T,caption:{en:`Normalise: R${g(r)} ← R${g(r)} / (${w(j)}).`,hu:`Normálás: S${g(r)} ← S${g(r)} / (${w(j)}).`}})}return{steps:s,matrix:a,coeffCols:n,varOrder:l,pivots:u,rowSwaps:d,colSwaps:p,singular:v}}function be(e){if(e.coeffCols!==e.matrix.length)return null;if(e.singular)return U;let n=ce;for(const i of e.pivots)n=n.mul(i);return(e.rowSwaps+e.colSwaps)%2===1&&(n=n.neg()),n}function jt(e){const{matrix:n,coeffCols:i,varOrder:a,singular:o}=e;if(o)return{steps:[],solution:null};const h=i,l=new Array(i),u=[];for(let d=i-1;d>=0;d--){let p=n[d][h];for(let $=d+1;$<i;$++)p=p.sub(n[d][$].mul(l[$]));l[d]=p.div(n[d][d]);const v=a[d]+1;u.push({kind:"back-sub",matrix:X(n),coeffCols:i,varOrder:a.slice(),pivot:[d,d],caption:{en:`Back-substitution: x${v} = ${w(l[d])}.`,hu:`Visszahelyettesítés: x${v} = ${w(l[d])}.`}})}const s=new Array(i);for(let d=0;d<i;d++)s[a[d]]=l[d];return{steps:u,solution:s}}function wt(e,n){return e.map((i,a)=>i.concat([n[a]]))}function qt(e,n,i){const a=e[0].length,o=wt(e,n),h=re(o,a,i),l=be(h);if(h.singular)return{steps:h.steps,solution:null,singular:!0,determinant:l};let u=h.steps,s;if(i.method==="gauss"){const p=jt(h);u=u.concat(p.steps),s=p.solution}else{const p=a;s=new Array(a);for(let v=0;v<a;v++)s[h.varOrder[v]]=h.matrix[v][p]}const d=s.map((p,v)=>`x${v+1} = ${w(p)}`).join(",  ");return u=u.concat([{kind:"done",matrix:X(h.matrix),coeffCols:a,varOrder:h.varOrder.slice(),caption:{en:`Solution: ${d}.`,hu:`Megoldás: ${d}.`}}]),{steps:u,solution:s,singular:!1,determinant:l}}function Mt(e,n="none"){const i=e.length,a=yt(e,xt(i)),o=re(a,i,{method:"gauss-jordan",pivoting:n});if(o.singular)return{steps:o.steps,inverse:null,singular:!0};const h=At(o.matrix,i,2*i);return{steps:o.steps.concat([{kind:"done",matrix:X(o.matrix),coeffCols:i,varOrder:o.varOrder.slice(),caption:{en:"The right block is A⁻¹.",hu:"A jobb oldali blokk az A⁻¹."}}]),inverse:h,singular:!1}}function Tt(e,n="partial"){const i=e.length,a=re(e.map(l=>l.slice()),i,{method:"gauss",pivoting:n}),o=be(a);return{steps:a.steps,determinant:o}}function L(e,n,i,a,o){const h=n.length,l=[];for(let u=0;u<h;u++){const s=new Array(h+1).fill(U);s[u]=n[u],u<h-1&&(s[u+1]=i[u]),u>0&&(s[u-1]=u<=o?U:e[u-1]),s[h]=a[u],l.push(s)}return l}function It(e){const n=e.d.length,i=e.a.slice(),a=e.d.slice(),o=e.c.slice(),h=e.b.slice(),l=[];l.push({kind:"init",matrix:L(i,a,o,h,0),coeffCols:n,varOrder:Array.from({length:n},(s,d)=>d),caption:{en:"Initial tridiagonal system (A | b).",hu:"Kiindulási tridiagonális rendszer (A | b)."}});for(let s=1;s<n;s++){if(E(a[s-1]))return l.push({kind:"pivot-select",matrix:L(i,a,o,h,s-1),coeffCols:n,varOrder:Array.from({length:n},(p,v)=>v),pivot:[s-1,s-1],caption:{en:`Zero pivot d${s} — the Thomas algorithm cannot continue without pivoting.`,hu:`Nulla főelem d${s} — a Thomas-algoritmus főelemkiválasztás nélkül nem folytatható.`}}),{steps:l,solution:null,singular:!0};const d=i[s-1].div(a[s-1]);a[s]=a[s].sub(d.mul(o[s-1])),h[s]=h[s].sub(d.mul(h[s-1])),l.push({kind:"eliminate",matrix:L(i,a,o,h,s),coeffCols:n,varOrder:Array.from({length:n},(p,v)=>v),pivot:[s-1,s-1],multiplier:d,changed:[[s,s-1],[s,s],[s,n]],caption:{en:`Eliminate a${s}: m = a${s}/d${s} = ${w(d)}; update d${s+1} and b${s+1}.`,hu:`a${s} kiküszöbölése: m = a${s}/d${s} = ${w(d)}; d${s+1} és b${s+1} frissítése.`}})}if(E(a[n-1]))return{steps:l,solution:null,singular:!0};const u=new Array(n);u[n-1]=h[n-1].div(a[n-1]),l.push({kind:"back-sub",matrix:L(i,a,o,h,n-1),coeffCols:n,varOrder:Array.from({length:n},(s,d)=>d),pivot:[n-1,n-1],caption:{en:`Back-substitution: x${n} = b${n}/d${n} = ${w(u[n-1])}.`,hu:`Visszahelyettesítés: x${n} = b${n}/d${n} = ${w(u[n-1])}.`}});for(let s=n-2;s>=0;s--)u[s]=h[s].sub(o[s].mul(u[s+1])).div(a[s]),l.push({kind:"back-sub",matrix:L(i,a,o,h,n-1),coeffCols:n,varOrder:Array.from({length:n},(d,p)=>p),pivot:[s,s],caption:{en:`Back-substitution: x${s+1} = (b${s+1} − c${s+1}·x${s+2})/d${s+1} = ${w(u[s])}.`,hu:`Visszahelyettesítés: x${s+1} = (b${s+1} − c${s+1}·x${s+2})/d${s+1} = ${w(u[s])}.`}});return{steps:l,solution:u,singular:!1}}const ie=[{id:"ex3-22",ref:"Example 3.22",name:{en:"Gaussian elimination",hu:"Gauss-elimináció"},A:[[1,-2,-2,-2],[2,-1,2,4],[-1,2,3,-4],[-2,1,4,-2]],b:[-11,-8,27,28],note:{en:"Solves cleanly without pivoting; solution (-3, 2, 4, -2).",hu:"Főelemkiválasztás nélkül is megoldható; megoldás (-3, 2, 4, -2)."}},{id:"ex3-24",ref:"Example 3.24 / 3.27",name:{en:"Zero pivot (needs pivoting)",hu:"Nulla főelem (kell csere)"},A:[[2,-1,0,-3],[2,-1,1,5],[-3,1,1,-2],[2,4,0,-1]],b:[8,2,-5,21],note:{en:"Without pivoting it stalls on a zero pivot. Switch pivoting to Partial to finish — solution (4, 3, 2, -1).",hu:"Főelemkiválasztás nélkül nulla főelemen elakad. Válts Részleges főelemkiválasztásra — megoldás (4, 3, 2, -1)."}},{id:"ex3-25",ref:"Example 3.25",name:{en:"Ill-conditioned 2×2",hu:"Rosszul kondicionált 2×2"},A:[["1/5000","-61/2"],["253/50","-21/20"]],b:["-6099/100","2509/10"],note:{en:"Exact solution (50, 2). With finite-digit arithmetic, dividing by the tiny pivot 0.0002 blows up the error — partial pivoting fixes it.",hu:"Pontos megoldás (50, 2). Véges jegyű aritmetikával a kicsi 0.0002 főelemmel való osztás felnagyítja a hibát — a részleges főelemkiválasztás megoldja."}},{id:"ex3-33a",ref:"§3.3 Exercise 1(a)",name:{en:"Exercise 3×3",hu:"Feladat 3×3"},A:[[2,2,-2],[-1,3,0],[4,2,-3]],b:[-4,-11,-1]}],Gt=[{id:"ex3-38",ref:"Example 3.38",name:{en:"Invert a 3×3",hu:"3×3 invertálása"},A:[[1,0,2],[-1,1,0],[-2,0,-1]],b:[0,0,0],note:{en:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]].",hu:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]]."}},{id:"ex3-39",ref:"Example 3.39",name:{en:"Determinant = 114",hu:"Determináns = 114"},A:[[1,-2,-2,-2],[2,-1,2,4],[-1,2,3,-4],[-2,1,4,-2]],b:[0,0,0,0],note:{en:"det(A) = product of pivots = 1·3·1·38 = 114.",hu:"det(A) = a főelemek szorzata = 1·3·1·38 = 114."}},{id:"ex3-7-1a",ref:"§3.7 Exercise 1(a)",name:{en:"Invert 3×3 (exercise)",hu:"3×3 invertálása (feladat)"},A:[[-1,1,2],[-2,1,0],[0,1,-1]],b:[0,0,0]}],H=[{id:"ex3-5-1",ref:"§3.5 Exercise 1",name:{en:"6×6 tridiagonal",hu:"6×6 tridiagonális"},a:["1/2","1/2","1/2","1/2","1/2"],d:[1,4,2,4,2,1],c:["-1/2","-1/2","-1/2","-1/2","-1/2"],b:["3/2",-4,2,-4,2,"-1/2"]},{id:"tri-small",ref:"Warm-up",name:{en:"4×4 tridiagonal",hu:"4×4 tridiagonális"},a:[-1,-1,-1],d:[4,4,4,4],c:[-1,-1,-1],b:[5,5,10,23]}];function St(e,n,i){return!!e&&e[0]===n&&e[1]===i}function ge({matrix:e,coeffCols:n,pivot:i,changed:a,varOrder:o,bracket:h=!0}){const l=new Set((a??[]).map(([s,d])=>`${s},${d}`)),u=o!==void 0&&o.some((s,d)=>s!==d);return t.jsxs("div",{className:"matrix-view",children:[t.jsx("table",{className:`matrix${h?" bracketed":""}`,children:t.jsx("tbody",{children:e.map((s,d)=>t.jsx("tr",{children:s.map((p,v)=>{const $=[];return St(i,d,v)?$.push("cell-pivot"):l.has(`${d},${v}`)&&$.push("cell-changed"),n!==void 0&&v===n&&$.push("rhs-sep"),t.jsx("td",{className:$.join(" ")||void 0,children:t.jsx(J,{tex:ae(p)})},v)})},d))})}),u&&t.jsx("div",{className:"var-order",children:o.map((s,d)=>t.jsxs("span",{children:["col ",d+1," → ",t.jsx(J,{tex:`x_{${s+1}}`})]},d))})]})}function Et({values:e,onChange:n,label:i,invalid:a}){var h;const o=((h=e[0])==null?void 0:h.length)??0;return t.jsxs("label",{className:"field",children:[i,t.jsx("div",{className:"matrix-input",style:{gridTemplateColumns:`repeat(${o}, auto)`},children:e.map((l,u)=>l.map((s,d)=>t.jsx("input",{type:"text",inputMode:"decimal",value:s,"aria-label":`a${u+1}${d+1}`,style:a!=null&&a(u,d)?{borderColor:"var(--err)",color:"var(--err)"}:void 0,onChange:p=>n(u,d,p.target.value)},`${u}-${d}`)))})]})}function V({values:e,onChange:n,label:i,invalid:a,horizontal:o=!1}){return t.jsxs("label",{className:"field",children:[i,t.jsx("div",{className:"matrix-input",style:{gridTemplateColumns:o?`repeat(${e.length}, auto)`:"auto"},children:e.map((h,l)=>t.jsx("input",{type:"text",inputMode:"decimal",value:h,"aria-label":`b${l+1}`,style:a!=null&&a(l)?{borderColor:"var(--err)",color:"var(--err)"}:void 0,onChange:u=>n(l,u.target.value)},l))})]})}const ue=e=>e.map(n=>n.map(String)),G=e=>e.map(String),ke=e=>Array.from({length:e},()=>"0"),Ot=e=>Array.from({length:e},()=>ke(e)),C=e=>e.map(n=>Z(n.trim()===""?0:n.trim())),Wt=e=>e.map(C);function R(e){return e==="solve"?ie:Gt}function Ht({initial:e}){const{t:n,pick:i,lang:a}=S(),[o,h]=y.useState((e==null?void 0:e.mode)??"solve"),[l,u]=y.useState((e==null?void 0:e.method)??"gauss"),[s,d]=y.useState((e==null?void 0:e.pivot)??"none"),p=y.useMemo(()=>{const m=(e==null?void 0:e.mode)??"solve";if(m==="tridiagonal")return{presetId:(H.find(x=>x.id===(e==null?void 0:e.presetId))??H[0]).id};const k=R(m);return{presetId:(k.find(b=>b.id===(e==null?void 0:e.presetId))??k[0]).id}},[e==null?void 0:e.mode,e==null?void 0:e.presetId]),[v,$]=y.useState(p.presetId),q=ie[0],[M,r]=y.useState(()=>{const m=(e==null?void 0:e.mode)??"solve",k=R(m),c=k.find(b=>b.id===(e==null?void 0:e.presetId))??k[0]??q;return ue(c.A)}),[j,T]=y.useState(()=>{const m=ie.find(k=>k.id===(e==null?void 0:e.presetId))??q;return G(m.b)}),[f,z]=y.useState(()=>{const m=H.find(k=>k.id===(e==null?void 0:e.presetId))??H[0];return{a:G(m.a),d:G(m.d),c:G(m.c),b:G(m.b)}}),[A,_]=y.useState(0),[O,Y]=y.useState(!1);function ee(m,k){if($(k),m==="tridiagonal"){const x=H.find(D=>D.id===k)??H[0];z({a:G(x.a),d:G(x.d),c:G(x.c),b:G(x.b)});return}const c=R(m),b=c.find(x=>x.id===k)??c[0];b&&(r(ue(b.A)),T(G(b.b)))}function pe(m){h(m),m==="inverse"?(u("gauss-jordan"),(s==="complete"||s==="scaled")&&d("none")):m==="determinant"&&u("gauss"),m==="tridiagonal"?ee(m,H[0].id):ee(m,R(m)[0].id)}function ze(m){r(k=>{const c=Ot(m);for(let b=0;b<Math.min(m,k.length);b++)for(let x=0;x<Math.min(m,k[b].length);x++)c[b][x]=k[b][x];return c}),T(k=>{const c=ke(m);for(let b=0;b<Math.min(m,k.length);b++)c[b]=k[b];return c}),$("custom")}const N=y.useMemo(()=>{try{if(o==="tridiagonal"){const c=C(f.a),b=C(f.d),x=C(f.c),D=C(f.b);if(c.length!==b.length-1||x.length!==b.length-1||D.length!==b.length)return{steps:[],error:"dimension mismatch"};const F=It({a:c,d:b,c:x,b:D});return{steps:F.steps,error:null,solution:F.solution,singular:F.singular}}const m=Wt(M);if(o==="solve"){const c=qt(m,C(j),{method:l,pivoting:s});return{steps:c.steps,error:null,solution:c.solution,determinant:c.determinant,singular:c.singular}}if(o==="inverse"){const c=Mt(m,s==="partial"?"partial":"none");return{steps:c.steps,error:null,inverse:c.inverse,singular:c.singular}}const k=Tt(m,s);return{steps:k.steps,error:null,determinant:k.determinant}}catch{return{steps:[],error:"invalid"}}},[o,l,s,M,j,f]);y.useEffect(()=>{_(0),Y(!1)},[N]);const ne=y.useRef(null);y.useEffect(()=>{if(O)return ne.current=window.setInterval(()=>{_(m=>m>=N.steps.length-1?(Y(!1),m):m+1)},900),()=>{ne.current&&window.clearInterval(ne.current)}},[O,N.steps.length]);const W=N.steps,B=Math.min(A,Math.max(0,W.length-1)),P=W[B],ve=M.length,le=o==="solve",me=o==="solve"||o==="determinant"||o==="inverse",xe=o==="inverse"?["none","partial"]:["none","partial","complete","scaled"],he=o==="tridiagonal"?H:R(o),K=he.find(m=>m.id===v)??null;return t.jsxs("div",{className:"grid-2",children:[t.jsxs("div",{className:"card stack",children:[t.jsxs("div",{className:"row",children:[t.jsxs("label",{className:"field",style:{flex:1},children:[n("lab.mode"),t.jsxs("select",{value:o,onChange:m=>pe(m.target.value),children:[t.jsx("option",{value:"solve",children:n("lab.mode.solve")}),t.jsx("option",{value:"inverse",children:n("lab.mode.inverse")}),t.jsx("option",{value:"determinant",children:n("lab.mode.determinant")}),t.jsx("option",{value:"tridiagonal",children:n("lab.mode.tridiagonal")})]})]}),t.jsxs("label",{className:"field",style:{flex:1},children:[n("lab.preset"),t.jsxs("select",{value:v,onChange:m=>ee(o,m.target.value),children:[he.map(m=>t.jsxs("option",{value:m.id,children:[m.ref," — ",i(m.name)]},m.id)),t.jsx("option",{value:"custom",children:n("lab.preset.custom")})]})]})]}),(le||me)&&t.jsxs("div",{className:"row",children:[le&&t.jsxs("label",{className:"field",style:{flex:1},children:[n("lab.method"),t.jsxs("select",{value:l,onChange:m=>u(m.target.value),children:[t.jsx("option",{value:"gauss",children:n("method.gauss")}),t.jsx("option",{value:"gauss-jordan",children:n("method.gaussJordan")})]})]}),me&&t.jsxs("label",{className:"field",style:{flex:1},children:[n("lab.pivoting"),t.jsx("select",{value:s,onChange:m=>d(m.target.value),children:xe.map(m=>t.jsx("option",{value:m,children:n(`pivot.${m}`)},m))})]})]}),K&&"note"in K&&K.note&&t.jsx("div",{className:"caption",children:i(K.note)}),o==="inverse"&&t.jsx("div",{className:"muted",style:{fontSize:"0.82rem"},children:n("lab.note.inverse")}),o==="tridiagonal"?t.jsxs("div",{className:"stack",children:[t.jsx(V,{label:a==="hu"?"Főátló d":"Diagonal d",values:f.d,horizontal:!0,onChange:(m,k)=>{$("custom"),z(c=>({...c,d:c.d.map((b,x)=>x===m?k:b)}))}}),t.jsx(V,{label:a==="hu"?"Felső átló c":"Super-diagonal c",values:f.c,horizontal:!0,onChange:(m,k)=>{$("custom"),z(c=>({...c,c:c.c.map((b,x)=>x===m?k:b)}))}}),t.jsx(V,{label:a==="hu"?"Alsó átló a":"Sub-diagonal a",values:f.a,horizontal:!0,onChange:(m,k)=>{$("custom"),z(c=>({...c,a:c.a.map((b,x)=>x===m?k:b)}))}}),t.jsx(V,{label:n("lab.vectorB"),values:f.b,horizontal:!0,onChange:(m,k)=>{$("custom"),z(c=>({...c,b:c.b.map((b,x)=>x===m?k:b)}))}})]}):t.jsxs("div",{className:"stack",children:[t.jsxs("label",{className:"field",children:[n("lab.size"),t.jsx("select",{value:ve,onChange:m=>ze(Number(m.target.value)),children:[2,3,4,5].map(m=>t.jsxs("option",{value:m,children:[m," × ",m]},m))})]}),t.jsx(Et,{label:n("lab.matrixA"),values:M,onChange:(m,k,c)=>{$("custom"),r(b=>b.map((x,D)=>D===m?x.map((F,ye)=>ye===k?c:F):x))}}),o==="solve"&&t.jsx(V,{label:n("lab.vectorB"),values:j,onChange:(m,k)=>{$("custom"),T(c=>c.map((b,x)=>x===m?k:b))}})]})]}),t.jsx("div",{className:"card stack",children:N.error||!P?t.jsx("p",{className:"feedback err",children:a==="hu"?"Érvénytelen bemenet.":"Invalid input."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"caption",children:i(P.caption)}),t.jsx(ge,{matrix:P.matrix,coeffCols:o==="inverse"?void 0:P.coeffCols,pivot:P.pivot,changed:P.changed,varOrder:P.varOrder}),t.jsxs("div",{className:"kbd-controls",children:[t.jsxs("button",{className:"icon-btn",onClick:()=>_(0),disabled:B===0,children:["⏮ ",n("lab.first")]}),t.jsxs("button",{className:"icon-btn",onClick:()=>_(m=>Math.max(0,m-1)),disabled:B===0,children:["◀ ",n("lab.prev")]}),t.jsx("button",{className:"btn",onClick:()=>Y(m=>!m),children:O?`⏸ ${n("lab.pause")}`:`▶ ${n("lab.play")}`}),t.jsxs("button",{className:"icon-btn",onClick:()=>_(m=>Math.min(W.length-1,m+1)),disabled:B>=W.length-1,children:[n("lab.next")," ▶"]}),t.jsxs("button",{className:"icon-btn",onClick:()=>_(W.length-1),disabled:B>=W.length-1,children:[n("lab.last")," ⏭"]})]}),t.jsxs("div",{className:"row",children:[t.jsx("span",{className:"muted",style:{fontSize:"0.85rem",minWidth:110},children:n("lab.stepOf",{a:B+1,b:W.length})}),t.jsx("div",{className:"progress",children:t.jsx("div",{style:{width:`${(B+1)/W.length*100}%`}})})]}),t.jsx(Bt,{run:N,mode:o})]})})]})}function Bt({run:e,mode:n}){const{t:i}=S();return e.singular&&n!=="determinant"?t.jsx("div",{className:"caption",children:i("lab.singular")}):t.jsxs("div",{className:"card",style:{background:"var(--bg-sunken)"},children:[t.jsx("div",{className:"section-eyebrow",children:i("lab.result")}),(n==="solve"||n==="tridiagonal")&&e.solution&&t.jsxs("div",{className:"result-line",style:{marginTop:8},children:[t.jsxs("strong",{children:[i("lab.solution"),":"]}),e.solution.map((a,o)=>t.jsx("span",{className:"pill",children:t.jsx(J,{tex:`x_{${o+1}} = ${ae(a)}`})},o))]}),(n==="solve"||n==="determinant")&&e.determinant&&t.jsxs("div",{className:"result-line",style:{marginTop:8},children:[t.jsxs("strong",{children:[i("lab.determinant"),":"]}),t.jsx("span",{className:"pill",children:t.jsx(J,{tex:`\\det(A) = ${ae(e.determinant)}`})})]}),n==="inverse"&&e.inverse&&t.jsxs("div",{style:{marginTop:8},children:[t.jsxs("strong",{children:[i("lab.inverse"),":"]}),t.jsx(ge,{matrix:e.inverse})]})]})}const Q=[{id:"q-tri-solve",kind:"vector",prompt:{en:"Solve this triangular system by backward substitution (enter x₁, x₂, x₃, x₄):",hu:"Oldd meg ezt a háromszög rendszert visszahelyettesítéssel (add meg x₁, x₂, x₃, x₄):"},tex:"\\begin{array}{rcrcrcrcr} 2x_1 &-& x_2 &+& 3x_3 &+& x_4 &=& 3\\\\ && 3x_2 &-& x_3 &+& 2x_4 &=& 13\\\\ &&&& 2x_3 &-& x_4 &=& -2\\\\ &&&&&& 3x_4 &=& 12 \\end{array}",answer:["-1","2","1","4"],solution:{en:"x₄ = 4, then x₃ = (−2+4)/2 = 1, x₂ = (13+1−8)/3 = 2, x₁ = (3+2−3−4)/2 = −1.",hu:"x₄ = 4, majd x₃ = (−2+4)/2 = 1, x₂ = (13+1−8)/3 = 2, x₁ = (3+2−3−4)/2 = −1."}},{id:"q-det-114",kind:"numeric",prompt:{en:"What is det(A) for the coefficient matrix of Example 3.39 (pivots 1, 3, 1, 38, no swaps)?",hu:"Mennyi det(A) a 3.39. példa együtthatómátrixára (főelemek 1, 3, 1, 38, csere nélkül)?"},answer:"114",solution:{en:"det(A) = product of pivots = 1·3·1·38 = 114.",hu:"det(A) = a főelemek szorzata = 1·3·1·38 = 114."}},{id:"q-dd-invertible",kind:"truefalse",prompt:{en:"Every (row) diagonally dominant matrix is invertible.",hu:"Minden (soronként) diagonálisan domináns mátrix invertálható."},answer:!0,solution:{en:"True. Diagonal dominance implies Ax = 0 has only the trivial solution, so A is nonsingular.",hu:"Igaz. A diagonális dominanciából következik, hogy Ax = 0-nak csak triviális megoldása van, így A reguláris."}},{id:"q-partial-pivot",kind:"choice",prompt:{en:"In column 1 the entries (top to bottom) are 2, 2, −3, 2. Which row does partial pivoting move to the top?",hu:"Az 1. oszlop elemei (fentről le) 2, 2, −3, 2. Melyik sort viszi felülre a részleges főelemkiválasztás?"},choices:[{en:"Row 1 (value 2)",hu:"1. sor (érték 2)"},{en:"Row 3 (value −3)",hu:"3. sor (érték −3)"},{en:"The first nonzero row",hu:"Az első nemnulla sor"},{en:"No swap is needed",hu:"Nem kell csere"}],answer:1,solution:{en:"Partial pivoting picks the largest magnitude, |−3| = 3, so row 3 moves up.",hu:"A részleges főelemkiválasztás a legnagyobb abszolút értéket választja, |−3| = 3, így a 3. sor kerül felülre."}},{id:"q-gauss-cost",kind:"choice",prompt:{en:"What is the leading-order operation count of Gaussian elimination?",hu:"Mi a Gauss-elimináció vezető rendű műveletigénye?"},choices:[{en:"n²/2",hu:"n²/2"},{en:"n³/3",hu:"n³/3"},{en:"n³/2",hu:"n³/2"},{en:"5n − 4",hu:"5n − 4"}],answer:1,solution:{en:"Forward elimination plus back-substitution is n³/3 + O(n²) multiplications/divisions.",hu:"Az előre elimináció és a visszahelyettesítés együtt n³/3 + O(n²) szorzás/osztás."}},{id:"q-gj-cost",kind:"truefalse",prompt:{en:"Gauss–Jordan elimination is asymptotically cheaper than Gaussian elimination.",hu:"A Gauss–Jordan-elimináció aszimptotikusan olcsóbb, mint a Gauss-elimináció."},answer:!1,solution:{en:"False. Gauss–Jordan costs ≈ n³/2, more than Gaussian elimination’s n³/3.",hu:"Hamis. A Gauss–Jordan költsége ≈ n³/2, több, mint a Gauss-elimináció n³/3-a."}},{id:"q-thomas-cost",kind:"choice",prompt:{en:"How many multiplications/divisions does the Thomas (tridiagonal) algorithm need?",hu:"Hány szorzás/osztás kell a Thomas- (tridiagonális) algoritmushoz?"},choices:[{en:"n³/3",hu:"n³/3"},{en:"n²/2",hu:"n²/2"},{en:"5n − 4",hu:"5n − 4"},{en:"2ⁿ",hu:"2ⁿ"}],answer:2,solution:{en:"A tridiagonal solve is linear: 5n − 4 multiplications/divisions.",hu:"A tridiagonális megoldás lineáris: 5n − 4 szorzás/osztás."}},{id:"q-inv-entry",kind:"numeric",prompt:{en:"For A of Example 3.38, what is the (1,1) entry of A⁻¹? (Enter a fraction like -1/3.)",hu:"A 3.38. példa A mátrixára mi az A⁻¹ (1,1) eleme? (Adj meg törtet, pl. -1/3.)"},answer:"-1/3",solution:{en:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]], so the (1,1) entry is −1/3.",hu:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]], tehát az (1,1) elem −1/3."}},{id:"q-posdef",kind:"choice",prompt:{en:"A symmetric matrix is positive definite if and only if…",hu:"Egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha…"},choices:[{en:"all its entries are positive",hu:"minden eleme pozitív"},{en:"it is diagonally dominant",hu:"diagonálisan domináns"},{en:"all leading principal minors are positive",hu:"minden bal felső főminora pozitív"},{en:"its determinant is positive",hu:"a determinánsa pozitív"}],answer:2,solution:{en:"Sylvester’s criterion: positive definite ⇔ every leading principal minor is positive.",hu:"Sylvester-kritérium: pozitív definit ⇔ minden bal felső főminor pozitív."}}];function de(e,n){try{return Z(e.trim()).equals(Z(n.trim()))}catch{return!1}}function fe(e,n){switch(e.kind){case"choice":return n.choice===e.answer;case"truefalse":return n.bool===e.answer;case"numeric":return de(n.text??"",e.answer);case"vector":{const i=(n.text??"").split(/[,\s]+/).filter(Boolean);return i.length!==e.answer.length?!1:i.every((a,o)=>de(a,e.answer[o]))}}}function Pt({item:e,onAnswered:n}){const{t:i,pick:a}=S(),[o,h]=y.useState({}),[l,u]=y.useState(!1),[s,d]=y.useState(!1),p=l&&fe(e,o);function v(){u(!0),n(fe(e,o))}return t.jsxs("div",{className:"card stack",children:[t.jsxs("div",{children:[t.jsx("span",{className:"section-eyebrow",children:i("quiz.title")}),t.jsx("p",{style:{marginBottom:6},children:a(e.prompt)}),e.tex&&t.jsx(J,{tex:e.tex,block:!0})]}),e.kind==="choice"&&t.jsx("div",{className:"choices",children:e.choices.map(($,q)=>{let M="choice";return o.choice===q&&(M+=" selected"),l&&q===e.answer&&(M+=" correct"),l&&o.choice===q&&q!==e.answer&&(M+=" wrong"),t.jsx("button",{className:M,onClick:()=>!l&&h({choice:q}),disabled:l,children:a($)},q)})}),e.kind==="truefalse"&&t.jsxs("div",{className:"seg",children:[t.jsx("button",{className:o.bool===!0?"active":"",onClick:()=>!l&&h({bool:!0}),children:i("quiz.true")}),t.jsx("button",{className:o.bool===!1?"active":"",onClick:()=>!l&&h({bool:!1}),children:i("quiz.false")})]}),(e.kind==="numeric"||e.kind==="vector")&&t.jsx("input",{type:"text",placeholder:e.kind==="vector"?"x₁, x₂, …":i("quiz.placeholder"),value:o.text??"",onChange:$=>h({text:$.target.value}),disabled:l,style:{maxWidth:280}}),t.jsxs("div",{className:"row",children:[l?t.jsx("span",{className:p?"feedback ok":"feedback err",children:i(p?"quiz.correct":"quiz.incorrect")}):t.jsx("button",{className:"btn",onClick:v,children:i("quiz.check")}),t.jsx("button",{className:"btn secondary",onClick:()=>d($=>!$),children:i(s?"quiz.hideSolution":"quiz.showSolution")})]}),s&&t.jsx("div",{className:"caption",children:a(e.solution)})]})}function Jt(){const{t:e}=S(),[n,i]=y.useState(0),[a,o]=y.useState({}),h=Q[n],l=Object.values(a).filter(Boolean).length;return t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[t.jsx("span",{className:"muted",children:e("quiz.questionOf",{a:n+1,b:Q.length})}),t.jsxs("span",{className:"pill",children:[e("quiz.score"),": ",l," / ",Object.keys(a).length]})]}),t.jsx(Pt,{item:h,onAnswered:u=>o(s=>({...s,[n]:u}))},h.id),t.jsxs("div",{className:"row",children:[t.jsxs("button",{className:"icon-btn",onClick:()=>i(u=>Math.max(0,u-1)),disabled:n===0,children:["◀ ",e("quiz.prev")]}),t.jsxs("button",{className:"icon-btn",onClick:()=>i(u=>Math.min(Q.length-1,u+1)),disabled:n===Q.length-1,children:[e("quiz.next")," ▶"]})]})]})}const Nt=[...$e.map(e=>({id:e.id,no:e.number,title:e.title,blurb:e.summary})),{id:"lab",no:"3·lab",title:{en:"Elimination Lab",hu:"Eliminációs labor"},blurb:{en:"Step through Gaussian / Gauss–Jordan elimination interactively.",hu:"Lépkedj végig a Gauss- / Gauss–Jordan-eliminációi lépéseken."}},{id:"quiz",no:"3·quiz",title:{en:"Quiz",hu:"Kvíz"},blurb:{en:"Check your understanding.",hu:"Ellenőrizd a tudásod."}}];function Kt(){const{t:e,lang:n}=S(),i=Ae();return y.useEffect(()=>{let a=decodeURIComponent(i.hash.replace(/^#/,""));if(!a){const o=i.pathname.match(/\/lessons\/([^/]+)/);o?a=o[1]:/\/lab$/.test(i.pathname)?a="lab":/\/quiz$/.test(i.pathname)&&(a="quiz")}a&&requestAnimationFrame(()=>{var o;return(o=document.getElementById(a))==null?void 0:o.scrollIntoView()})},[i.pathname,i.hash]),t.jsxs("div",{className:"app-shell ch-linear-systems",children:[t.jsx(qe,{sections:Nt}),t.jsx("main",{children:t.jsxs("div",{className:"container",children:[t.jsxs("section",{className:"hero",id:"top",children:[t.jsx("span",{className:"section-eyebrow",children:e("app.subtitle")}),t.jsx("h1",{children:e("app.title")}),t.jsx("p",{children:e("home.tagline")}),t.jsx("p",{style:{marginTop:4},children:e("home.lead")})]}),$e.map(a=>t.jsxs("section",{id:a.id,className:"ls-section",children:[t.jsx(Je,{section:a}),vt(a.id).map(o=>t.jsx(Me,{snippets:o.snippets,caption:o.caption},o.id)),t.jsx(Ce,{sectionNumber:a.number})]},a.id)),t.jsxs("section",{id:"lab",className:"ls-section stack",children:[t.jsxs("div",{children:[t.jsx("span",{className:"section-eyebrow",children:e("nav.lab")}),t.jsx("h1",{style:{margin:"4px 0 2px"},children:e("nav.lab")})]}),t.jsx(Ht,{initial:{}})]}),t.jsxs("section",{id:"quiz",className:"ls-section stack",children:[t.jsxs("div",{children:[t.jsx("span",{className:"section-eyebrow",children:e("nav.quiz")}),t.jsx("h1",{style:{margin:"4px 0 2px"},children:e("quiz.title")})]}),t.jsx(Jt,{})]})]})}),t.jsx("footer",{className:"footer",children:t.jsx("div",{className:"container",children:n==="hu"?"Numerikus analízis · 3. fejezet — interaktív tananyag.":"Numerical Analysis · Chapter 3 — interactive companion."})})]})}export{Kt as default};
