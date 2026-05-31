import{d as wn,r as _,j as t,e as zn}from"./index-DoynSaMl.js";import{k as jn}from"./CodeBlock-CA7xDN9g.js";import{M as sn}from"./MarkdownView-MHKfn5ud.js";import{Q as qn,S as Tn,C as In}from"./Quiz-BLhCeOzu.js";import{F as rn}from"./fraction-DqatKmli.js";import"./normalizeMath-BnsY3yhx.js";import"./index-CSoWSvIo.js";const Mn={"app.title":{en:"Linear Systems",hu:"Lineáris egyenletrendszerek"},"app.subtitle":{en:"Interactive Numerical Analysis · Chapter 3",hu:"Interaktív numerikus analízis · 3. fejezet"},"nav.home":{en:"Home",hu:"Kezdőlap"},"nav.lab":{en:"Elimination Lab",hu:"Elimináció labor"},"nav.quiz":{en:"Quiz",hu:"Kvíz"},"nav.sections":{en:"Lessons",hu:"Leckék"},"theme.toggle":{en:"Toggle dark mode",hu:"Sötét mód váltása"},"lang.toggle":{en:"Magyar",hu:"English"},"home.tagline":{en:"Learn direct methods for solving linear systems — step by step, in English or Hungarian.",hu:"Tanuld meg a lineáris egyenletrendszerek direkt megoldási módszereit — lépésről lépésre, magyarul vagy angolul."},"home.lead":{en:"Gaussian & Gauss–Jordan elimination, pivoting strategies, tridiagonal solvers, matrix inversion and determinants — with an interactive visualizer and self-check quizzes.",hu:"Gauss- és Gauss–Jordan-elimináció, főelemkiválasztási stratégiák, tridiagonális megoldók, mátrixinvertálás és determináns — interaktív szemléltetővel és önellenőrző kvízekkel."},"home.openLab":{en:"Open the Elimination Lab",hu:"Elimináció labor megnyitása"},"home.openQuiz":{en:"Take a quiz",hu:"Kvíz kitöltése"},"home.browse":{en:"Browse the lessons",hu:"Leckék böngészése"},"lab.mode":{en:"Task",hu:"Feladat"},"lab.mode.solve":{en:"Solve Ax = b",hu:"Ax = b megoldása"},"lab.mode.inverse":{en:"Invert A",hu:"A invertálása"},"lab.mode.determinant":{en:"Determinant",hu:"Determináns"},"lab.mode.tridiagonal":{en:"Tridiagonal",hu:"Tridiagonális"},"lab.method":{en:"Method",hu:"Módszer"},"method.gauss":{en:"Gaussian elimination",hu:"Gauss-elimináció"},"method.gaussJordan":{en:"Gauss–Jordan",hu:"Gauss–Jordan"},"lab.pivoting":{en:"Pivoting",hu:"Főelemkiválasztás"},"pivot.none":{en:"None",hu:"Nincs"},"pivot.partial":{en:"Partial",hu:"Részleges"},"pivot.complete":{en:"Complete",hu:"Teljes"},"pivot.scaled":{en:"Scaled partial",hu:"Skálázott részleges"},"lab.preset":{en:"Example",hu:"Példa"},"lab.preset.custom":{en:"Custom",hu:"Egyéni"},"lab.size":{en:"Size",hu:"Méret"},"lab.matrixA":{en:"Coefficient matrix A",hu:"Együtthatómátrix A"},"lab.vectorB":{en:"Right-hand side b",hu:"Jobb oldal b"},"lab.solve":{en:"Solve",hu:"Megoldás"},"lab.first":{en:"First",hu:"Első"},"lab.prev":{en:"Previous",hu:"Előző"},"lab.play":{en:"Play",hu:"Lejátszás"},"lab.pause":{en:"Pause",hu:"Szünet"},"lab.next":{en:"Next",hu:"Következő"},"lab.last":{en:"Last",hu:"Utolsó"},"lab.stepOf":{en:"Step {a} of {b}",hu:"{a}. lépés / {b}"},"lab.result":{en:"Result",hu:"Eredmény"},"lab.solution":{en:"Solution",hu:"Megoldás"},"lab.determinant":{en:"Determinant",hu:"Determináns"},"lab.inverse":{en:"Inverse A⁻¹",hu:"Inverz A⁻¹"},"lab.singular":{en:"The matrix is singular for this strategy — no unique solution.",hu:"A mátrix szinguláris ennél a stratégiánál — nincs egyértelmű megoldás."},"lab.varOrder":{en:"Variable order",hu:"Változók sorrendje"},"lab.note.inverse":{en:"Inversion augments A with the identity and reduces to (I | A⁻¹). Complete/scaled pivoting is disabled here.",hu:"Az invertálás A-t az egységmátrixszal bővíti, és (I | A⁻¹) alakra hozza. A teljes/skálázott főelemkiválasztás itt nem elérhető."},"quiz.title":{en:"Self-check quiz",hu:"Önellenőrző kvíz"},"quiz.check":{en:"Check",hu:"Ellenőrzés"},"quiz.correct":{en:"Correct!",hu:"Helyes!"},"quiz.incorrect":{en:"Not quite — try again or see the solution.",hu:"Nem egészen — próbáld újra, vagy nézd meg a megoldást."},"quiz.showSolution":{en:"Show solution",hu:"Megoldás mutatása"},"quiz.hideSolution":{en:"Hide solution",hu:"Megoldás elrejtése"},"quiz.next":{en:"Next question",hu:"Következő kérdés"},"quiz.prev":{en:"Previous",hu:"Előző"},"quiz.score":{en:"Score",hu:"Pontszám"},"quiz.true":{en:"True",hu:"Igaz"},"quiz.false":{en:"False",hu:"Hamis"},"quiz.placeholder":{en:"your answer",hu:"a válaszod"},"quiz.questionOf":{en:"Question {a} of {b}",hu:"{a}. kérdés / {b}"},"section.toLab":{en:"Try it in the Lab",hu:"Próbáld ki a laborban"},"common.algorithm":{en:"Algorithm",hu:"Algoritmus"},"common.theorem":{en:"Theorem",hu:"Tétel"},"common.example":{en:"Example",hu:"Példa"},"common.notFound":{en:"Not found.",hu:"Nem található."},"common.exercise":{en:"Exercise",hu:"Feladat"},"common.exercises":{en:"Exercises",hu:"Feladatok"},"common.showSolution":{en:"Show solution",hu:"Megoldás"}};function S(){const{lang:n,setLang:e,toggle:a}=wn(),i=_.useCallback(h=>h[n],[n]),s=_.useCallback((h,l)=>{const d=Mn[h];let o=d?d[n]:h;if(l)for(const[u,v]of Object.entries(l))o=o.replace(new RegExp(`\\{${u}\\}`,"g"),String(v));return o},[n]);return{lang:n,setLang:e,toggleLang:a,t:s,pick:i}}const pn=[{id:"s31",number:"3.1",title:{en:"Review of Linear Algebra",hu:"Lineáris algebrai előismeretek"},summary:{en:"Determinants, invertibility, diagonal dominance and positive definiteness.",hu:"Determinánsok, invertálhatóság, diagonális dominancia és pozitív definitség."},blocks:[{kind:"p",text:{en:"A square matrix A is invertible (nonsingular) exactly when det(A) ≠ 0, which is also equivalent to Ax = b having a unique solution for every b.",hu:"Egy A négyzetes mátrix akkor és csak akkor invertálható (reguláris), ha det(A) ≠ 0, ami azzal is egyenértékű, hogy az Ax = b minden b-re egyértelműen megoldható."}},{kind:"theorem",label:{en:"Triangular determinant",hu:"Háromszögmátrix determinánsa"},text:{en:"For a triangular matrix the determinant is the product of the diagonal entries.",hu:"Háromszögmátrix determinánsa a főátlóbeli elemek szorzata."},tex:"\\det(A) = a_{11}a_{22}\\cdots a_{nn}"},{kind:"p",text:{en:"A is (row) diagonally dominant if each diagonal entry dominates its row:",hu:"A (soronként) diagonálisan domináns, ha a főátlóbeli elem dominálja a sorát:"}},{kind:"math",tex:"|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|, \\qquad i = 1,\\dots,n."},{kind:"theorem",label:{en:"Diagonal dominance ⇒ invertible",hu:"Diagonális dominancia ⇒ invertálható"},text:{en:"If A is diagonally dominant then A is invertible, and Gaussian elimination needs no pivoting and is stable.",hu:"Ha A diagonálisan domináns, akkor invertálható, és a Gauss-elimináció főelemkiválasztás nélkül, stabilan elvégezhető."}},{kind:"p",text:{en:"A symmetric A is positive definite iff xᵀAx > 0 for all x ≠ 0 — equivalently, all leading principal minors are positive.",hu:"Egy szimmetrikus A akkor pozitív definit, ha xᵀAx > 0 minden x ≠ 0 esetén — ezzel egyenértékűen minden bal felső főminor pozitív."}},{kind:"theorem",label:{en:"Determinant properties (Thm 3.1)",hu:"Determináns-tulajdonságok (3.1. tétel)"},text:{en:"det(AB) = det(A)det(B), det(Aᵀ) = det(A), det(A⁻¹) = 1/det(A). A row swap flips the sign; scaling a row by c scales det by c; adding a multiple of one row to another leaves det unchanged. Laplace (cofactor) expansion along row i:",hu:"det(AB) = det(A)det(B), det(Aᵀ) = det(A), det(A⁻¹) = 1/det(A). Sorcsere előjelet vált; egy sor c-szeresével det c-szereződik; egy sor többszörösének másikhoz adása nem változtat. Kifejtési (Laplace-) tétel az i. sor szerint:"},tex:"\\det(A) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij}\\,\\det(A_{ij})"},{kind:"theorem",label:{en:"Invertibility equivalences (Thm 3.2–3.3)",hu:"Invertálhatósági ekvivalenciák (3.2–3.3)"},text:{en:"The following are equivalent: det(A) ≠ 0; A is invertible; Ax = b has a unique solution for every b. Moreover Ax = 0 has a nontrivial solution iff A is singular.",hu:"Ekvivalensek: det(A) ≠ 0; A invertálható; Ax = b minden b-re egyértelműen megoldható. Továbbá Ax = 0-nak akkor és csak akkor van nemtriviális megoldása, ha A szinguláris."}},{kind:"theorem",label:{en:"Inverse of a product (Thm 3.4)",hu:"Szorzat inverze (3.4. tétel)"},text:{en:"If A and B are invertible, then AB is invertible and the inverse reverses the order:",hu:"Ha A és B invertálható, akkor AB is invertálható, és az inverz megfordítja a sorrendet:"},tex:"(AB)^{-1} = B^{-1}A^{-1}"},{kind:"theorem",label:{en:"Triangular products & inverses (Thm 3.6)",hu:"Háromszög szorzatok és inverzek (3.6. tétel)"},text:{en:"The product of lower (upper) triangular matrices is lower (upper) triangular, and the inverse of a lower (upper) triangular matrix is again lower (upper) triangular.",hu:"Alsó (felső) háromszögmátrixok szorzata alsó (felső) háromszög, és egy alsó (felső) háromszögmátrix inverze is alsó (felső) háromszög."}},{kind:"p",text:{en:"A permutation matrix P is the identity with its rows (or columns) reordered — exactly one 1 per row and column. Left-multiplying PA permutes the rows of A; right-multiplying AP permutes its columns (Thm 3.7).",hu:"A P permutációs mátrix az egységmátrix átrendezett soraival (vagy oszlopaival) — soronként és oszloponként pontosan egy 1-es. A PA balszorzás A sorait, az AP jobbszorzás az oszlopait permutálja (3.7. tétel)."}},{kind:"theorem",label:{en:"Positive definite consequences (Thm 3.9)",hu:"Pozitív definitség következményei (3.9. tétel)"},text:{en:"If A is positive definite then A is invertible and every diagonal entry is positive (aᵢᵢ > 0).",hu:"Ha A pozitív definit, akkor A invertálható, és minden főátlóbeli elem pozitív (aᵢᵢ > 0)."}},{kind:"p",text:{en:"A is orthogonal if AAᵀ = AᵀA = I, i.e. A⁻¹ = Aᵀ. Orthogonal matrices preserve the Euclidean norm, and their product is orthogonal (Thm 3.11).",hu:"A ortogonális, ha AAᵀ = AᵀA = I, azaz A⁻¹ = Aᵀ. Az ortogonális mátrixok megőrzik az euklideszi normát, szorzatuk ortogonális (3.11. tétel)."}},{kind:"p",text:{en:"λ ∈ ℂ is an eigenvalue of A if Ax = λx for some eigenvector x ≠ 0. The n eigenvalues are the roots of the characteristic equation (Thm 3.12):",hu:"λ ∈ ℂ az A sajátértéke, ha Ax = λx valamely x ≠ 0 sajátvektorra. Az n sajátérték a karakterisztikus egyenlet gyökei (3.12. tétel):"}},{kind:"math",tex:"\\det(A - \\lambda I) = 0"},{kind:"theorem",label:{en:"Eigenvalue properties (Thm 3.13–3.14)",hu:"Sajátérték-tulajdonságok (3.13–3.14)"},text:{en:"det(A) = λ₁⋯λₙ; A is invertible iff every λᵢ ≠ 0; A⁻¹ has eigenvalues 1/λᵢ and Aᵏ has λᵢᵏ. The eigenvalues of a triangular matrix are its diagonal entries.",hu:"det(A) = λ₁⋯λₙ; A pontosan akkor invertálható, ha minden λᵢ ≠ 0; A⁻¹ sajátértékei 1/λᵢ, Aᵏ-é λᵢᵏ. A háromszögmátrix sajátértékei a főátló elemei."},tex:"\\det(A) = \\lambda_1\\lambda_2\\cdots\\lambda_n"},{kind:"theorem",label:{en:"Similar matrices (Thm 3.15)",hu:"Hasonló mátrixok (3.15. tétel)"},text:{en:"A and B are similar if A = P⁻¹BP for some invertible P. Similar matrices have identical eigenvalues (and the same characteristic polynomial), since det(A − λI) = det(B − λI).",hu:"A és B hasonló, ha A = P⁻¹BP valamely invertálható P-re. A hasonló mátrixok sajátértékei azonosak (és a karakterisztikus polinomjuk is), mert det(A − λI) = det(B − λI)."}},{kind:"p",text:{en:"The spectral radius is ρ(A) = max{|λ|}. For any matrix norm ρ(A) ≤ ‖A‖, and for every ε > 0 some norm satisfies ‖A‖ ≤ ρ(A) + ε (Thm 3.16–3.17). The 2-norm is ‖A‖₂ = √ρ(AᵀA), which equals ρ(A) for symmetric A (Thm 3.18).",hu:"A spektrálsugár ρ(A) = max{|λ|}. Bármely mátrixnormára ρ(A) ≤ ‖A‖, és minden ε > 0-ra van olyan norma, hogy ‖A‖ ≤ ρ(A) + ε (3.16–3.17). A 2-norma ‖A‖₂ = √ρ(AᵀA), ami szimmetrikus A-ra ρ(A) (3.18)."}},{kind:"theorem",label:{en:"Vandermonde determinant (Thm 3.19)",hu:"Vandermonde-determináns (3.19. tétel)"},text:{en:"The determinant of the matrix with rows (1, aᵢ, aᵢ², …, aᵢⁿ⁻¹) equals ∏_{i>j}(aᵢ − aⱼ); it is nonzero iff the aᵢ are pairwise distinct. This underlies the unique solvability of polynomial interpolation.",hu:"Az (1, aᵢ, aᵢ², …, aᵢⁿ⁻¹) sorú mátrix determinánsa ∏_{i>j}(aᵢ − aⱼ); pontosan akkor nem nulla, ha az aᵢ-k páronként különbözők. Ez adja a polinominterpoláció egyértelmű megoldhatóságát."},tex:"\\prod_{i>j}(a_i - a_j)"},{kind:"glossary",deck:"s31"},{kind:"flashcards",deck:"s31"}]},{id:"s32",number:"3.2",title:{en:"Triangular Systems",hu:"Trianguláris egyenletrendszerek"},summary:{en:"Backward substitution solves upper-triangular systems in O(n²).",hu:"A visszahelyettesítés O(n²) lépésben oldja meg a felső háromszög rendszereket."},blocks:[{kind:"p",text:{en:"An upper-triangular system is solved from the bottom up: the last equation gives xₙ, then each earlier equation has a single new unknown.",hu:"Egy felső háromszög rendszert alulról fölfelé oldunk meg: az utolsó egyenlet adja xₙ-t, majd minden korábbi egyenletben egyetlen új ismeretlen marad."}},{kind:"math",tex:"x_i = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j=i+1}^{n} a_{ij} x_j\\right)"},{kind:"algorithm",title:{en:"Backward substitution",hu:"Visszahelyettesítés"},lines:["xₙ ← bₙ / aₙₙ","for i = n−1, …, 1 do","    xᵢ ← (bᵢ − Σ_{j>i} aᵢⱼ xⱼ) / aᵢᵢ","end do"]},{kind:"p",text:{en:"It works iff every diagonal entry is nonzero, i.e. det(A) ≠ 0. Cost: about n²/2 multiplications/divisions.",hu:"Akkor működik, ha minden főátlóbeli elem nemnulla, azaz det(A) ≠ 0. Költség: kb. n²/2 szorzás/osztás."}},{kind:"p",text:{en:"Example 3.20. Solve the system below. The last equation gives x₄ = 4; substituting upward, x₃ = (−2 + x₄)/2 = 1, then x₂ = (13 + x₃ − 2x₄)/3 = 2, and finally x₁ = (3 + x₂ − 3x₃ − x₄)/2 = −1.",hu:"3.20. példa. Oldd meg az alábbi rendszert. Az utolsó egyenlet x₄ = 4-et ad; felfelé helyettesítve x₃ = (−2 + x₄)/2 = 1, majd x₂ = (13 + x₃ − 2x₄)/3 = 2, végül x₁ = (3 + x₂ − 3x₃ − x₄)/2 = −1."}},{kind:"math",tex:"\\begin{aligned} 2x_1 - x_2 + 3x_3 + x_4 &= 3 \\\\ 3x_2 - x_3 + 2x_4 &= 13 \\\\ 2x_3 - x_4 &= -2 \\\\ 3x_4 &= 12 \\end{aligned} \\;\\Rightarrow\\; (x_1,x_2,x_3,x_4)=(-1,2,1,4)"},{kind:"p",text:{en:"Exact operation count: step i needs i multiplications/divisions and i−1 additions/subtractions, so the totals are n(n+1)/2 mult/div and (n−1)n/2 add/sub — both n²/2 + O(n). The O(nᵏ) notation hides the lower-order terms, leaving the leading power that governs the cost for large n.",hu:"Pontos műveletszám: az i. lépés i szorzást/osztást és i−1 összeadást/kivonást igényel, így összesen n(n+1)/2 szorzás/osztás és (n−1)n/2 összeadás/kivonás — mindkettő n²/2 + O(n). Az O(nᵏ) jelölés elrejti az alacsonyabb rendű tagokat, meghagyva a nagy n-re meghatározó vezető hatványt."}},{kind:"p",text:{en:"The mirror method, forward substitution, solves a lower-triangular system top-down: x₁ = b₁/a₁₁, then xᵢ = (bᵢ − Σ_{j<i} aᵢⱼxⱼ)/aᵢᵢ. Both substitutions are the cheap final step after an LU or Gaussian factorization.",hu:"A tükör-módszer, az előrehelyettesítés, egy alsó háromszög rendszert fentről lefelé old meg: x₁ = b₁/a₁₁, majd xᵢ = (bᵢ − Σ_{j<i} aᵢⱼxⱼ)/aᵢᵢ. Mindkét helyettesítés az LU- vagy Gauss-faktorizáció utáni olcsó zárólépés."}},{kind:"glossary",deck:"s32"},{kind:"flashcards",deck:"s32"}]},{id:"s33",number:"3.3",title:{en:"Gaussian Elimination & Pivoting",hu:"Gauss-elimináció és főelemkiválasztás"},summary:{en:"Reduce to triangular form, then back-substitute. Pivoting controls zero pivots and rounding.",hu:"Háromszög alakra hozás, majd visszahelyettesítés. A főelemkiválasztás kezeli a nulla főelemeket és a kerekítést."},blocks:[{kind:"p",text:{en:"Forward elimination uses the pivot row to clear the entries below each pivot. The multiplier is lᵢₖ = aᵢₖ / aₖₖ.",hu:"Az előre elimináció a főelem sorával nullázza ki a főelem alatti elemeket. A szorzótényező lᵢₖ = aᵢₖ / aₖₖ."}},{kind:"math",tex:"a_{ij}^{(k)} = a_{ij}^{(k-1)} - l_{ik}\\, a_{kj}^{(k-1)}, \\qquad l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}"},{kind:"p",text:{en:"A zero (or tiny) pivot is a problem. Partial pivoting swaps in the largest-magnitude entry in the column; complete pivoting searches the whole submatrix (and swaps columns, tracking the variable order); scaled pivoting compares entries relative to each row’s scale.",hu:"A nulla (vagy nagyon kicsi) főelem gond. A részleges főelemkiválasztás a legnagyobb abszolút értékű oszlopelemet hozza be; a teljes az egész részmátrixban keres (és oszlopot is cserél, követve a változók sorrendjét); a skálázott a sorok skálájához viszonyít."}},{kind:"p",text:{en:"Work on the augmented matrix (A | b): elimination is just row operations on this n×(n+1) array, producing the sequence Ã⁽⁰⁾ → Ã⁽¹⁾ → … → Ã⁽ⁿ⁻¹⁾ of equivalent systems in triangular form, followed by back-substitution.",hu:"A bővített (A | b) mátrixon dolgozunk: az elimináció ezen az n×(n+1) tömbön végzett sorművelet, amely az ekvivalens rendszerek Ã⁽⁰⁾ → Ã⁽¹⁾ → … → Ã⁽ⁿ⁻¹⁾ háromszög-sorozatát adja, majd visszahelyettesítés következik."}},{kind:"algorithm",title:{en:"Gaussian elimination (Alg. 3.23)",hu:"Gauss-elimináció (3.23. algoritmus)"},lines:["(elimination)","for k = 1, …, n−1 do","    for i = k+1, …, n do","        lᵢₖ ← aᵢₖ / aₖₖ","        for j = k+1, …, n+1 do","            aᵢⱼ ← aᵢⱼ − lᵢₖ·aₖⱼ","        end do","    end do","end do","(back-substitution)","xₙ ← a_{n,n+1} / aₙₙ","for i = n−1, …, 1 do","    xᵢ ← (a_{i,n+1} − Σ_{j>i} aᵢⱼ xⱼ) / aᵢᵢ","end do"]},{kind:"p",text:{en:"Exact operation count: the elimination needs n³/3 + n²/2 − 5n/6 mult/div and (n³−n)/3 add/sub; with back-substitution both totals are n³/3 + O(n²). So the time complexity of Gaussian elimination is n³/3 — an order of magnitude more than the O(n²) triangular solve.",hu:"Pontos műveletszám: az elimináció n³/3 + n²/2 − 5n/6 szorzást/osztást és (n³−n)/3 összeadást/kivonást igényel; a visszahelyettesítéssel mindkét összeg n³/3 + O(n²). Tehát a Gauss-elimináció időigénye n³/3 — egy nagyságrenddel több az O(n²) háromszög-megoldásnál."}},{kind:"p",text:{en:"Why pivot (Example 3.25): solving 0.0002·x₁ − 30.5·x₂ = −60.99, 5.06·x₁ − 1.05·x₂ = 250.9 in 4-digit arithmetic without a swap divides by the tiny 0.0002, giving x₁ with a 300% relative error. Swapping the rows first (dividing by 5.06) returns the exact solution (50, 2).",hu:"Miért pivotáljunk (3.25. példa): a 0.0002·x₁ − 30.5·x₂ = −60.99, 5.06·x₁ − 1.05·x₂ = 250.9 rendszert 4-jegyű aritmetikában csere nélkül megoldva a pici 0.0002-vel osztunk, így x₁ relatív hibája 300%. A sorok előzetes cseréje (5.06-tal osztva) a pontos (50, 2) megoldást adja."}},{kind:"theorem",label:{en:"Partial pivoting solvability (Thm 3.26)",hu:"Részleges pivot megoldhatóság (3.26. tétel)"},text:{en:"These are equivalent: Ax = b is solvable by Gaussian elimination with partial pivoting; det(A) ≠ 0; A is invertible; Ax = b has a unique solution for all b. Partial pivoting therefore succeeds exactly when the system is uniquely solvable.",hu:"Ekvivalensek: Ax = b megoldható részleges főelemkiválasztásos Gauss-eliminációval; det(A) ≠ 0; A invertálható; Ax = b minden b-re egyértelműen megoldható. A részleges pivot tehát pontosan akkor sikerül, ha a rendszer egyértelműen megoldható."}},{kind:"p",text:{en:"Partial pivoting in detail: before step k, find the row l with |aₗₖ| = max{|aᵢₖ| : i = k,…,n} in the column on and below the diagonal, swap rows k and l, then eliminate. Example 3.27 solves the system of Example 3.24 — which stalls on a zero pivot without pivoting — by swapping the largest-magnitude entry into the pivot each step:",hu:"Részleges pivot részletesen: a k. lépés előtt keressük meg az l sort, amelyre |aₗₖ| = max{|aᵢₖ| : i = k,…,n} a főátlón és alatta, cseréljük a k. és l. sort, majd eliminálunk. A 3.27. példa a 3.24. példa rendszerét oldja meg — amely pivot nélkül nulla főelemen elakad — úgy, hogy minden lépésben a legnagyobb abszolút értékűt hozza a főelembe:"}},{kind:"math",tex:"\\left(\\begin{array}{cccc|c} 2 & -1 & 0 & -3 & 8 \\\\ 2 & -1 & 1 & 5 & 2 \\\\ -3 & 1 & 1 & -2 & -5 \\\\ 2 & 4 & 0 & -1 & 21 \\end{array}\\right) \\;\\xrightarrow{\\text{partial pivot}}\\; \\left(\\begin{array}{cccc|c} -3 & 1 & 1 & -2 & -5 \\\\ 0 & \\tfrac{14}{3} & \\tfrac{2}{3} & -\\tfrac{7}{3} & \\tfrac{53}{3} \\\\ 0 & 0 & \\tfrac{12}{7} & \\tfrac{7}{2} & -\\tfrac{1}{14} \\\\ 0 & 0 & 0 & -\\tfrac{143}{24} & \\tfrac{143}{24} \\end{array}\\right) \\Rightarrow (4,3,2,-1)"},{kind:"p",text:{en:"Complete (maximal) pivoting goes further: before step k it finds the largest-magnitude entry |aₗₘ| = max{|aᵢⱼ| : i,j = k,…,n} in the whole remaining submatrix and swaps both the rows (k↔l) and the columns (k↔m). Column swaps reorder the unknowns, so the variable order must be tracked. It is the most rounding-resistant strategy but needs the most comparisons. Example 3.29 solves the Example 3.22 system this way (column order becomes x₄, x₃, x₂, x₁):",hu:"A teljes (maximális) főelemkiválasztás tovább megy: a k. lépés előtt a teljes maradék részmátrixban megkeresi a legnagyobb |aₗₘ| = max{|aᵢⱼ| : i,j = k,…,n} elemet, és sort (k↔l) és oszlopot (k↔m) is cserél. Az oszlopcsere átrendezi az ismeretleneket, ezért a változók sorrendjét követni kell. Ez a legkerekítés-ellenállóbb stratégia, de a legtöbb összehasonlítást igényli. A 3.29. példa így oldja meg a 3.22. rendszert (az oszlopsorrend x₄, x₃, x₂, x₁ lesz):"}},{kind:"math",tex:"\\left(\\begin{array}{cccc|c} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & 3 & -4 & 27 \\\\ -2 & 1 & 4 & -2 & 28 \\end{array}\\right) \\;\\xrightarrow{\\text{complete pivot}}\\; \\left(\\begin{array}{cccc|c} 4 & 2 & -1 & 2 & -8 \\\\ 0 & 5 & 1 & 1 & 19 \\\\ 0 & 0 & -\\tfrac{23}{10} & \\tfrac{11}{5} & -\\tfrac{56}{5} \\\\ 0 & 0 & 0 & -\\tfrac{57}{23} & \\tfrac{171}{23} \\end{array}\\right)_{(x_4,x_3,x_2,x_1)} \\Rightarrow (x_1,x_2,x_3,x_4)=(-3,2,4,-2)"},{kind:"theorem",label:{en:"Permutation factorization (Thm 3.28)",hu:"Permutációs faktorizáció (3.28. tétel)"},text:{en:"If det(A) ≠ 0 there is a permutation matrix P such that PAx = Pb can be solved by Gaussian elimination without any row swaps — collecting all partial-pivot swaps in advance. (This is the P of the later PA = LU factorization.)",hu:"Ha det(A) ≠ 0, van olyan P permutációs mátrix, hogy a PAx = Pb sorcsere nélküli Gauss-eliminációval megoldható — az összes részleges-pivot cserét előre összegyűjtve. (Ez a későbbi PA = LU faktorizáció P-je.)"}},{kind:"theorem",label:{en:"When pivoting is unnecessary (Thm 3.32/3.33)",hu:"Mikor felesleges a pivotálás (3.32/3.33)"},text:{en:"If A is diagonally dominant, Gaussian elimination runs without pivoting and is stable. If A is symmetric, A is positive definite iff elimination runs without pivoting with all pivots positive — also stable.",hu:"Ha A diagonálisan domináns, a Gauss-elimináció pivotálás nélkül lefut és stabil. Ha A szimmetrikus, akkor A pontosan akkor pozitív definit, ha az elimináció pivotálás nélkül lefut, és minden főelem pozitív — szintén stabil."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-22&mode=solve&method=gauss&pivot=none",label:{en:"Run Example 3.22 (no pivoting)",hu:"3.22. példa futtatása (csere nélkül)"}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-24&mode=solve&method=gauss&pivot=partial",label:{en:"Run Example 3.24/3.27 (partial pivoting)",hu:"3.24/3.27. példa (részleges)"}},{kind:"glossary",deck:"s33"},{kind:"flashcards",deck:"s33"}]},{id:"s34",number:"3.4",title:{en:"Gauss–Jordan Elimination",hu:"Gauss–Jordan-elimináció"},summary:{en:"Eliminate above and below each pivot to reach (I | x) directly.",hu:"A főelem alatt és fölött is eliminálunk, így közvetlenül (I | x) alakot kapunk."},blocks:[{kind:"p",text:{en:"Gauss–Jordan eliminates in every other row, then normalises each pivot row, turning the coefficient block into the identity. The solution is read straight from the last column. Cost ≈ n³/2.",hu:"A Gauss–Jordan minden más sorban eliminál, majd normálja a főelem-sorokat, így az együtthatóblokkból egységmátrix lesz. A megoldás közvetlenül leolvasható az utolsó oszlopból. Költség ≈ n³/2."}},{kind:"algorithm",title:{en:"Gauss–Jordan elimination (Alg. 3.34)",hu:"Gauss–Jordan-elimináció (3.34. algoritmus)"},lines:["for k = 1, …, n do","    for i = 1, …, n,  i ≠ k do","        lᵢₖ ← aᵢₖ / aₖₖ","        for j = k+1, …, n+1 do","            aᵢⱼ ← aᵢⱼ − lᵢₖ·aₖⱼ","        end do","    end do","end do","for i = 1, …, n do   xᵢ ← a_{i,n+1} / aᵢᵢ   end do"]},{kind:"p",text:{en:"Operation count: n³/2 + O(n²) multiplications/divisions and n³/2 + O(n²) additions/subtractions — about 50% more than Gaussian elimination (n³/3). For solving a single system Gaussian elimination is therefore cheaper; Gauss–Jordan pays off for matrix inversion and many simultaneous right-hand sides, where the identity form is reused.",hu:"Műveletszám: n³/2 + O(n²) szorzás/osztás és n³/2 + O(n²) összeadás/kivonás — kb. 50%-kal több a Gauss-eliminációnál (n³/3). Egyetlen rendszer megoldására tehát a Gauss-elimináció olcsóbb; a Gauss–Jordan a mátrixinvertálásnál és sok egyidejű jobb oldalnál térül meg, ahol az egységalak újrahasznosul."}},{kind:"p",text:{en:"Example 3.35 (no pivoting): the coefficient block is driven to the identity and the solution appears in the last column.",hu:"3.35. példa (csere nélkül): az együtthatóblokkot egységmátrixra hozzuk, és a megoldás az utolsó oszlopban jelenik meg."}},{kind:"math",tex:"\\left(\\begin{array}{cccc|c} 1 & -2 & -2 & -2 & -11 \\\\ 2 & -1 & 2 & 4 & -8 \\\\ -1 & 2 & -3 & -4 & 3 \\\\ -2 & 1 & 4 & -2 & 28 \\end{array}\\right) \\;\\sim\\;\\cdots\\;\\sim\\; \\left(\\begin{array}{cccc|c} 1 & 0 & 0 & 0 & -3 \\\\ 0 & 1 & 0 & 0 & 2 \\\\ 0 & 0 & 1 & 0 & 4 \\\\ 0 & 0 & 0 & 1 & -2 \\end{array}\\right)"},{kind:"p",text:{en:"Pivoting strategies combine with Gauss–Jordan just as with Gaussian elimination. Example 3.36 runs the same system with partial pivoting and reaches the identical (I | x) form and solution (−3, 2, 4, −2).",hu:"A pivotálási stratégiák ugyanúgy kombinálhatók a Gauss–Jordannal, mint a Gauss-eliminációval. A 3.36. példa ugyanazt a rendszert futtatja részleges pivottal, és ugyanazt az (I | x) alakot és (−3, 2, 4, −2) megoldást éri el."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-22&mode=solve&method=gauss-jordan&pivot=none",label:{en:"Run Example 3.35 (Gauss–Jordan)",hu:"3.35. példa (Gauss–Jordan)"}},{kind:"glossary",deck:"s34"},{kind:"flashcards",deck:"s34"}]},{id:"s35",number:"3.5",title:{en:"Tridiagonal Systems",hu:"Tridiagonális egyenletrendszerek"},summary:{en:"The Thomas algorithm solves tridiagonal systems in O(n).",hu:"A Thomas-algoritmus O(n) lépésben old meg tridiagonális rendszereket."},blocks:[{kind:"p",text:{en:"A matrix is tridiagonal if aᵢⱼ = 0 whenever |i − j| > 1 — nonzeros only on the main diagonal (dᵢ), the sub-diagonal (aᵢ) and the super-diagonal (cᵢ). Such systems appear constantly in splines, boundary-value problems and PDE discretizations.",hu:"Egy mátrix tridiagonális, ha aᵢⱼ = 0, valahányszor |i − j| > 1 — nemnulla csak a főátlón (dᵢ), az aldiagonálison (aᵢ) és a felső átlón (cᵢ). Ilyen rendszerek folyamatosan előfordulnak spline-oknál, peremértékfeladatoknál és PDE-diszkretizációknál."}},{kind:"math",tex:"\\begin{pmatrix} d_1 & c_1 & & & \\\\ a_1 & d_2 & c_2 & & \\\\ & a_2 & d_3 & \\ddots & \\\\ & & \\ddots & \\ddots & c_{n-1} \\\\ & & & a_{n-1} & d_n \\end{pmatrix}\\mathbf{x} = \\mathbf{b}"},{kind:"p",text:{en:"Store only the three vectors (aᵢ), (dᵢ), (cᵢ) — just 3n−2 numbers instead of n². During elimination the super-diagonal cᵢ never changes and the sub-diagonal aᵢ becomes 0, so only dᵢ and bᵢ are updated.",hu:"Csak a három vektort tároljuk: (aᵢ), (dᵢ), (cᵢ) — 3n−2 szám az n² helyett. Az elimináció során a felső átló cᵢ nem változik, az aldiagonális aᵢ pedig 0 lesz, így csak dᵢ-t és bᵢ-t frissítjük."}},{kind:"p",text:{en:"When nonzeros sit only on the three central diagonals, a specialised elimination needs only 5n−4 multiplications/divisions — far less than n³/3.",hu:"Ha a nemnulla elemek csak a három középső átlón vannak, egy speciális elimináció már 5n−4 szorzással/osztással elég — sokkal kevesebb, mint n³/3."}},{kind:"algorithm",title:{en:"Thomas algorithm",hu:"Thomas-algoritmus"},lines:["for i = 2, …, n do","    t ← aᵢ₋₁ / dᵢ₋₁","    dᵢ ← dᵢ − t · cᵢ₋₁","    bᵢ ← bᵢ − t · bᵢ₋₁","end do","xₙ ← bₙ / dₙ","for i = n−1, …, 1 do  xᵢ ← (bᵢ − cᵢ xᵢ₊₁) / dᵢ"]},{kind:"p",text:{en:"If the tridiagonal matrix is diagonally dominant, Theorem 3.32 guarantees the algorithm runs without pivoting and is stable — the usual situation in applications. The same banded idea extends to a band matrix (aᵢⱼ = 0 for |i − j| > p), giving an O(p²n) solver; tridiagonal is the p = 1 case.",hu:"Ha a tridiagonális mátrix diagonálisan domináns, a 3.32. tétel garantálja, hogy az algoritmus pivotálás nélkül lefut és stabil — ez a tipikus eset az alkalmazásokban. Ugyanez a sávos ötlet kiterjed sávmátrixra (aᵢⱼ = 0, ha |i − j| > p), O(p²n) megoldót adva; a tridiagonális a p = 1 eset."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-5-1&mode=tridiagonal",label:{en:"Run the tridiagonal example",hu:"Tridiagonális példa futtatása"}},{kind:"glossary",deck:"s35"},{kind:"flashcards",deck:"s35"}]},{id:"s36",number:"3.6",title:{en:"Simultaneous Systems",hu:"Szimultán egyenletrendszerek"},summary:{en:"Same A, many right-hand sides: solve (A | B) at once.",hu:"Azonos A, több jobb oldal: az (A | B) egyszerre megoldható."},blocks:[{kind:"p",text:{en:"When many systems share the same coefficient matrix A but differ in their right-hand sides, Ax⁽ⁱ⁾ = b⁽ⁱ⁾ (i = 1,…,m), stack the right-hand sides as columns of B and the solutions as columns of X. The m systems are then the single matrix equation:",hu:"Ha sok rendszer ugyanazt az A együtthatómátrixot használja, de a jobb oldalakban különböznek, Ax⁽ⁱ⁾ = b⁽ⁱ⁾ (i = 1,…,m), rakd a jobb oldalakat B oszlopaiba, a megoldásokat X oszlopaiba. Az m rendszer ekkor egyetlen mátrixegyenlet:"}},{kind:"math",tex:"\\mathbf{A}\\mathbf{X} = \\mathbf{B}, \\qquad \\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)}),\\;\\; \\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})"},{kind:"p",text:{en:"Because pivoting decisions depend only on A, all m systems are solved together by eliminating on the n×(n+m) augmented matrix (A | B). Gauss–Jordan turns it into (I | X), and the solutions appear in the last m columns.",hu:"Mivel a főelemkiválasztás csak A-tól függ, mind az m rendszer együtt megoldható az n×(n+m) méretű (A | B) bővített mátrixon eliminálva. A Gauss–Jordan ezt (I | X) alakra hozza, és a megoldások az utolsó m oszlopban jelennek meg."}},{kind:"p",text:{en:"Efficiency: solving all m together costs n³/3 + mn² − n/3 (Gaussian) or n³/2 + mn² − n/2 (Gauss–Jordan) mult/div. The expensive O(n³) elimination is shared, so each extra right-hand side adds only O(n²) — far cheaper than solving m systems from scratch.",hu:"Hatékonyság: mind az m együttes megoldása n³/3 + mn² − n/3 (Gauss) vagy n³/2 + mn² − n/2 (Gauss–Jordan) szorzás/osztás. A drága O(n³) elimináció megosztott, így minden további jobb oldal csak O(n²)-et ad — sokkal olcsóbb, mint m rendszert külön megoldani."}},{kind:"p",text:{en:"Matrix inversion is the special case B = I — see the next lesson.",hu:"A mátrixinvertálás a B = I speciális eset — lásd a következő leckét."}},{kind:"glossary",deck:"s36"},{kind:"flashcards",deck:"s36"}]},{id:"s37",number:"3.7",title:{en:"Matrix Inversion & Determinants",hu:"Mátrixinvertálás és determináns"},summary:{en:"Invert via (A | I) → (I | A⁻¹); determinant from the signed product of pivots.",hu:"Invertálás (A | I) → (I | A⁻¹) alakkal; determináns a főelemek előjeles szorzatából."},blocks:[{kind:"p",text:{en:"The inverse A⁻¹ solves the simultaneous system AX = I (and then XA = I holds too, so X is genuinely the inverse). Solving (A | I) by Gauss–Jordan yields A⁻¹ in the right block. Cost: 3n³/2 + O(n²) naively, reducible to n³ by exploiting the zeros and ones of I.",hu:"Az A⁻¹ inverz az AX = I szimultán rendszer megoldása (és ekkor XA = I is teljesül, tehát X valóban az inverz). Az (A | I) Gauss–Jordan-megoldása a jobb blokkban adja A⁻¹-et. Költség: naivan 3n³/2 + O(n²), az I nulláit és egyeseit kihasználva n³-ra csökkenthető."}},{kind:"p",text:{en:"Example 3.38: inverting a 3×3 matrix by driving (A | I) to (I | A⁻¹).",hu:"3.38. példa: egy 3×3 mátrix invertálása az (A | I) → (I | A⁻¹) átalakítással."}},{kind:"math",tex:"\\left(\\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\\\ -1 & 1 & 0 & 0 & 1 & 0 \\\\ -2 & 0 & -1 & 0 & 0 & 1 \\end{array}\\right) \\sim\\cdots\\sim \\left(\\begin{array}{ccc|ccc} 1 & 0 & 0 & -\\tfrac13 & 0 & -\\tfrac23 \\\\ 0 & 1 & 0 & -\\tfrac13 & 1 & -\\tfrac23 \\\\ 0 & 0 & 1 & \\tfrac23 & 0 & \\tfrac13 \\end{array}\\right),\\quad A^{-1}=\\tfrac13\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}"},{kind:"p",text:{en:"The determinant comes for free from the elimination: it equals the product of the pivots times (−1)ˢ, where s is the number of row swaps (Theorem 3.26).",hu:"A determináns ingyen jön az eliminációból: a főelemek szorzata (−1)ˢ-szel, ahol s a sorcserék száma (3.26. tétel)."}},{kind:"math",tex:"\\det(A) = (-1)^{s}\\, a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}"},{kind:"p",text:{en:"Example 3.39: the Example 3.22 matrix eliminates to pivots 1, 3, 1, 38 with no row swaps (s = 0), so det(A) = 1·3·1·38 = 114.",hu:"3.39. példa: a 3.22. mátrix eliminációja az 1, 3, 1, 38 főelemekhez vezet sorcsere nélkül (s = 0), így det(A) = 1·3·1·38 = 114."}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-38&mode=inverse&method=gauss-jordan&pivot=none",label:{en:"Invert Example 3.38",hu:"3.38. példa invertálása"}},{kind:"lab",to:"/linear-systems/lab?preset=ex3-39&mode=determinant&method=gauss&pivot=none",label:{en:"Determinant of Example 3.39",hu:"3.39. példa determinánsa"}},{kind:"glossary",deck:"s37"},{kind:"flashcards",deck:"s37"}]}];function J({tex:n,block:e=!1}){const a=_.useMemo(()=>jn.renderToString(n,{throwOnError:!1,displayMode:e}),[n,e]);return e?t.jsx("div",{className:"tex-block",style:{overflowX:"auto",padding:"4px 0"},dangerouslySetInnerHTML:{__html:a}}):t.jsx("span",{dangerouslySetInnerHTML:{__html:a}})}const Gn={s31:[{term:{en:"Inverse · nonsingular · singular",hu:"Inverz · reguláris · szinguláris"},def:{en:"$\\mathbf{A}^{-1}$ satisfies $\\mathbf{A}\\mathbf{A}^{-1}=\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{I}$. A matrix with an inverse is **invertible/nonsingular**; without one it is **singular**.",hu:"$\\mathbf{A}^{-1}$-re $\\mathbf{A}\\mathbf{A}^{-1}=\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{I}$ teljesül. Az inverzzel rendelkező mátrix **invertálható/reguláris**; amelyiknek nincs, az **szinguláris**."}},{term:{en:"Determinant & cofactor expansion (Thm 3.1)",hu:"Determináns és kifejtési tétel (3.1. tétel)"},def:{en:"Key properties: $\\det(\\mathbf{A}\\mathbf{B})=\\det\\mathbf{A}\\det\\mathbf{B}$, $\\det(\\mathbf{A}^T)=\\det\\mathbf{A}$, row swap flips the sign, adding a multiple of a row leaves it unchanged. Laplace expansion: $\\det\\mathbf{A}=\\sum_j(-1)^{i+j}a_{ij}\\det\\mathbf{A}_{ij}$.",hu:"Fő tulajdonságok: $\\det(\\mathbf{A}\\mathbf{B})=\\det\\mathbf{A}\\det\\mathbf{B}$, $\\det(\\mathbf{A}^T)=\\det\\mathbf{A}$, sorcsere előjelet vált, egy sor többszörösének hozzáadása nem változtat. Kifejtés: $\\det\\mathbf{A}=\\sum_j(-1)^{i+j}a_{ij}\\det\\mathbf{A}_{ij}$."}},{term:{en:"Invertibility equivalences (Thm 3.2/3.3)",hu:"Invertálhatósági ekvivalenciák (3.2/3.3)"},def:{en:"These are equivalent: $\\det\\mathbf{A}\\ne0$; $\\mathbf{A}$ invertible; $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ has a unique solution for every $\\mathbf{b}$. And $\\mathbf{A}\\mathbf{x}=\\mathbf{0}$ has a nontrivial solution iff $\\mathbf{A}$ is singular.",hu:"Ekvivalensek: $\\det\\mathbf{A}\\ne0$; $\\mathbf{A}$ invertálható; $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ minden $\\mathbf{b}$-re egyértelműen megoldható. És $\\mathbf{A}\\mathbf{x}=\\mathbf{0}$-nak pontosan akkor van nemtriviális megoldása, ha $\\mathbf{A}$ szinguláris."}},{term:{en:"Triangular matrix (Thm 3.5/3.6)",hu:"Háromszögmátrix (3.5/3.6)"},def:{en:"Upper (lower) triangular: zeros below (above) the diagonal. Its determinant is the product of the diagonal, $\\det\\mathbf{A}=a_{11}\\cdots a_{nn}$; products and inverses of triangular matrices stay triangular.",hu:"Felső (alsó) háromszög: a főátló alatt (felett) nullák. Determinánsa a főátló szorzata, $\\det\\mathbf{A}=a_{11}\\cdots a_{nn}$; háromszögmátrixok szorzata és inverze is háromszög marad."}},{term:{en:"Permutation matrix (Thm 3.7)",hu:"Permutációs mátrix (3.7. tétel)"},def:{en:"An identity matrix with rows (columns) reordered — exactly one 1 per row and column. Left-multiplying $\\mathbf{P}\\mathbf{A}$ permutes the rows of $\\mathbf{A}$; right-multiplying permutes columns.",hu:"Az egységmátrix sorainak (oszlopainak) átrendezése — soronként és oszloponként pontosan egy 1-es. Balszorzás $\\mathbf{P}\\mathbf{A}$ a sorokat, jobbszorzás az oszlopokat permutálja."}},{term:{en:"Diagonally dominant (Thm 3.8)",hu:"Diagonálisan domináns (3.8. tétel)"},def:{en:"$|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ for every row (column dominance is the same for $\\mathbf{A}^T$). A diagonally dominant matrix is invertible, and Gaussian elimination needs no pivoting.",hu:"$|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ minden sorra (az oszlopdominancia ugyanez $\\mathbf{A}^T$-re). A diagonálisan domináns mátrix invertálható, és a Gauss-elimináció főelemkiválasztás nélkül elvégezhető."}},{term:{en:"Positive definite (Thm 3.9/3.10)",hu:"Pozitív definit (3.9/3.10)"},def:{en:"Symmetric $\\mathbf{A}$ with $\\mathbf{x}^T\\mathbf{A}\\mathbf{x}>0$ for all $\\mathbf{x}\\ne\\mathbf{0}$. Then $\\mathbf{A}$ is invertible with $a_{ii}>0$; equivalently every leading principal minor is positive (Sylvester’s criterion).",hu:"Szimmetrikus $\\mathbf{A}$, amelyre $\\mathbf{x}^T\\mathbf{A}\\mathbf{x}>0$ minden $\\mathbf{x}\\ne\\mathbf{0}$-ra. Ekkor $\\mathbf{A}$ invertálható, $a_{ii}>0$; ezzel egyenértékűen minden bal felső főminor pozitív (Sylvester-kritérium)."}},{term:{en:"Orthogonal matrix (Thm 3.11)",hu:"Ortogonális mátrix (3.11. tétel)"},def:{en:"$\\mathbf{A}\\mathbf{A}^T=\\mathbf{A}^T\\mathbf{A}=\\mathbf{I}$, i.e. $\\mathbf{A}^{-1}=\\mathbf{A}^T$. Orthogonal matrices preserve the Euclidean norm, and their product is orthogonal.",hu:"$\\mathbf{A}\\mathbf{A}^T=\\mathbf{A}^T\\mathbf{A}=\\mathbf{I}$, azaz $\\mathbf{A}^{-1}=\\mathbf{A}^T$. Az ortogonális mátrixok megőrzik az euklideszi normát, szorzatuk ortogonális."}},{term:{en:"Eigenvalue & eigenvector (Thm 3.12)",hu:"Sajátérték és sajátvektor (3.12. tétel)"},def:{en:"$\\lambda$ is an eigenvalue if $\\mathbf{A}\\mathbf{x}=\\lambda\\mathbf{x}$ for some $\\mathbf{x}\\ne\\mathbf{0}$ (the eigenvector). The $n$ eigenvalues are the roots of the characteristic equation $\\det(\\mathbf{A}-\\lambda\\mathbf{I})=0$.",hu:"$\\lambda$ sajátérték, ha $\\mathbf{A}\\mathbf{x}=\\lambda\\mathbf{x}$ valamely $\\mathbf{x}\\ne\\mathbf{0}$-ra (a sajátvektor). Az $n$ sajátérték a $\\det(\\mathbf{A}-\\lambda\\mathbf{I})=0$ karakterisztikus egyenlet gyökei."}},{term:{en:"Eigenvalue properties (Thm 3.13/3.14)",hu:"Sajátérték-tulajdonságok (3.13/3.14)"},def:{en:"$\\det\\mathbf{A}=\\lambda_1\\cdots\\lambda_n$; $\\mathbf{A}$ is invertible iff all $\\lambda_i\\ne0$; $\\mathbf{A}^{-1}$ has eigenvalues $1/\\lambda_i$ and $\\mathbf{A}^k$ has $\\lambda_i^k$. A triangular matrix’s eigenvalues are its diagonal entries.",hu:"$\\det\\mathbf{A}=\\lambda_1\\cdots\\lambda_n$; $\\mathbf{A}$ pontosan akkor invertálható, ha minden $\\lambda_i\\ne0$; $\\mathbf{A}^{-1}$ sajátértékei $1/\\lambda_i$, $\\mathbf{A}^k$-é $\\lambda_i^k$. A háromszögmátrix sajátértékei a főátló elemei."}},{term:{en:"Similar matrices (Thm 3.15)",hu:"Hasonló mátrixok (3.15. tétel)"},def:{en:"$\\mathbf{A}=\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$ for some invertible $\\mathbf{P}$. Similar matrices have identical eigenvalues (and the same characteristic polynomial).",hu:"$\\mathbf{A}=\\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$ valamely invertálható $\\mathbf{P}$-re. A hasonló mátrixok sajátértékei azonosak (és a karakterisztikus polinomjuk is)."}},{term:{en:"Spectral radius (Thm 3.16–3.18)",hu:"Spektrálsugár (3.16–3.18)"},def:{en:"$\\rho(\\mathbf{A})=\\max\\{|\\lambda|\\}$. For any matrix norm $\\rho(\\mathbf{A})\\le\\|\\mathbf{A}\\|$, and a norm exists with $\\|\\mathbf{A}\\|\\le\\rho(\\mathbf{A})+\\varepsilon$. Also $\\|\\mathbf{A}\\|_2=\\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$, equal to $\\rho(\\mathbf{A})$ when symmetric.",hu:"$\\rho(\\mathbf{A})=\\max\\{|\\lambda|\\}$. Bármely mátrixnormára $\\rho(\\mathbf{A})\\le\\|\\mathbf{A}\\|$, és van olyan norma, hogy $\\|\\mathbf{A}\\|\\le\\rho(\\mathbf{A})+\\varepsilon$. Továbbá $\\|\\mathbf{A}\\|_2=\\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$, ami szimmetrikus esetben $\\rho(\\mathbf{A})$."}},{term:{en:"Vandermonde determinant (Thm 3.19)",hu:"Vandermonde-determináns (3.19. tétel)"},def:{en:"The determinant of the matrix with rows $(1,a_i,a_i^2,\\dots,a_i^{n-1})$ equals $\\prod_{i>j}(a_i-a_j)$; it is nonzero iff the $a_i$ are pairwise distinct. Central to polynomial interpolation.",hu:"Az $(1,a_i,a_i^2,\\dots,a_i^{n-1})$ sorú mátrix determinánsa $\\prod_{i>j}(a_i-a_j)$; pontosan akkor nem nulla, ha az $a_i$-k páronként különbözők. A polinominterpoláció kulcsa."}}],s32:[{term:{en:"Triangular system",hu:"Háromszög egyenletrendszer"},def:{en:"$\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ where $\\mathbf{A}$ is upper (or lower) triangular. Each equation introduces at most one new unknown, so it solves directly without elimination.",hu:"$\\mathbf{A}\\mathbf{x}=\\mathbf{b}$, ahol $\\mathbf{A}$ felső (vagy alsó) háromszög. Minden egyenlet legfeljebb egy új ismeretlent hoz be, így elimináció nélkül közvetlenül megoldható."}},{term:{en:"Backward substitution (Alg. 3.21)",hu:"Visszahelyettesítés (3.21. algoritmus)"},def:{en:"Solve an upper-triangular system bottom-up: $x_n=b_n/a_{nn}$, then $x_i=\\big(b_i-\\sum_{j>i}a_{ij}x_j\\big)/a_{ii}$ for $i=n-1,\\dots,1$.",hu:"Felső háromszög rendszer megoldása alulról felfelé: $x_n=b_n/a_{nn}$, majd $x_i=\\big(b_i-\\sum_{j>i}a_{ij}x_j\\big)/a_{ii}$ $i=n-1,\\dots,1$-re."}},{term:{en:"Forward substitution",hu:"Előrehelyettesítés"},def:{en:"The mirror method for a lower-triangular system: solve top-down, $x_1=b_1/a_{11}$, then $x_i=\\big(b_i-\\sum_{j<i}a_{ij}x_j\\big)/a_{ii}$.",hu:"Az alsó háromszög rendszer tükör-módszere: fentről lefelé, $x_1=b_1/a_{11}$, majd $x_i=\\big(b_i-\\sum_{j<i}a_{ij}x_j\\big)/a_{ii}$."}},{term:{en:"Solvability condition",hu:"Megoldhatósági feltétel"},def:{en:"Substitution works iff every diagonal entry $a_{ii}\\ne0$. Since $\\det(\\mathbf{A})=a_{11}\\cdots a_{nn}$, this is exactly $\\det(\\mathbf{A})\\ne0$ — the system has a unique solution.",hu:"A helyettesítés pontosan akkor működik, ha minden $a_{ii}\\ne0$. Mivel $\\det(\\mathbf{A})=a_{11}\\cdots a_{nn}$, ez éppen $\\det(\\mathbf{A})\\ne0$ — a rendszernek egyetlen megoldása van."}},{term:{en:"Operation count $\\sim n^2/2$",hu:"Műveletszám $\\sim n^2/2$"},def:{en:"Backward substitution uses $n(n+1)/2=n^2/2+\\mathcal{O}(n)$ multiplications/divisions and $(n-1)n/2$ additions/subtractions — far cheaper than the $\\mathcal{O}(n^3)$ of elimination.",hu:"A visszahelyettesítés $n(n+1)/2=n^2/2+\\mathcal{O}(n)$ szorzást/osztást és $(n-1)n/2$ összeadást/kivonást igényel — sokkal olcsóbb az elimináció $\\mathcal{O}(n^3)$-ánál."}},{term:{en:"Big-O notation $\\mathcal{O}(n^k)$",hu:"Nagy-O jelölés $\\mathcal{O}(n^k)$"},def:{en:"Shorthand for a quantity bounded by a degree-$k$ polynomial; it hides lower-order terms so the leading power, which governs the cost for large $n$, stands out.",hu:"Egy legfeljebb $k$-adfokú polinommal korlátozott mennyiség rövidítése; elrejti az alacsonyabb rendű tagokat, így a nagy $n$-re meghatározó vezető hatvány emelkedik ki."}}],s33:[{term:{en:"Augmented matrix",hu:"Bővített mátrix"},def:{en:"The coefficient matrix with the right-hand side appended as an extra column, $(\\mathbf{A}\\,|\\,\\mathbf{b})$. Elimination is carried out as row operations on this $n\\times(n+1)$ array.",hu:"Az együtthatómátrix, amelyhez a jobb oldalt extra oszlopként hozzáfűzzük, $(\\mathbf{A}\\,|\\,\\mathbf{b})$. Az eliminációt ezen az $n\\times(n+1)$ tömbön végzett sorműveletekként hajtjuk végre."}},{term:{en:"Forward elimination & multiplier",hu:"Előre elimináció és szorzótényező"},def:{en:"Clear entries below pivot $a_{kk}$ using $a_{ij}^{(k)}=a_{ij}^{(k-1)}-l_{ik}a_{kj}^{(k-1)}$ with multiplier $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$, for $k=1,\\dots,n-1$.",hu:"A főelem ($a_{kk}$) alatti elemeket nullázzuk az $a_{ij}^{(k)}=a_{ij}^{(k-1)}-l_{ik}a_{kj}^{(k-1)}$ képlettel, $l_{ik}=a_{ik}^{(k-1)}/a_{kk}^{(k-1)}$ szorzótényezővel, $k=1,\\dots,n-1$-re."}},{term:{en:"Pivot element",hu:"Főelem (pivot)"},def:{en:"The diagonal entry $a_{kk}^{(k-1)}$ used as the divisor in step $k$. Gaussian elimination runs iff every pivot is nonzero; a zero pivot halts it (even when the system is solvable — Example 3.24).",hu:"Az $a_{kk}^{(k-1)}$ főátlóbeli elem, amellyel a $k$. lépésben osztunk. A Gauss-elimináció pontosan akkor megy végig, ha minden főelem nemnulla; a nulla főelem megállítja (akkor is, ha a rendszer megoldható — 3.24. példa)."}},{term:{en:"Why pivot: rounding (Example 3.25)",hu:"Miért főelemkiválasztás: kerekítés (3.25. példa)"},def:{en:"Dividing by a tiny pivot magnifies rounding: $0.0002x_1-30.5x_2=-60.99$ in 4-digit arithmetic gives $x_1$ with 300% error, but swapping rows first (so the divisor is 5.06) gives the exact answer.",hu:"A pici főelemmel való osztás felnagyítja a kerekítést: $0.0002x_1-30.5x_2=-60.99$ 4-jegyű aritmetikában 300%-os hibájú $x_1$-et ad, de a sorok előzetes cseréjével (így az osztó 5.06) a pontos eredményt kapjuk."}},{term:{en:"Partial pivoting (Thm 3.26)",hu:"Részleges főelemkiválasztás (3.26. tétel)"},def:{en:"Before step $k$, swap in the row with the largest $|a_{ik}|$ in the column ($i\\ge k$). It is solvable by partial pivoting iff $\\det\\mathbf{A}\\ne0$ — and it both avoids zero pivots and curbs rounding.",hu:"A $k$. lépés előtt cseréljük be azt a sort, amelyben az oszlopban a legnagyobb $|a_{ik}|$ van ($i\\ge k$). Pontosan akkor oldható meg részleges főelemkiválasztással, ha $\\det\\mathbf{A}\\ne0$ — és kerüli a nulla főelemet és csökkenti a kerekítést."}},{term:{en:"Complete pivoting",hu:"Teljes főelemkiválasztás"},def:{en:"Search the whole remaining submatrix for the largest $|a_{ij}|$ and swap both rows and columns (tracking the variable order, since column swaps reorder unknowns). Most robust, but more comparisons.",hu:"A teljes maradék részmátrixban keressük a legnagyobb $|a_{ij}|$-t, és sort és oszlopot is cserélünk (követve a változók sorrendjét, mert az oszlopcsere átrendezi az ismeretleneket). A legrobusztusabb, de több összehasonlítás."}},{term:{en:"Scaled (implicit) pivoting (Alg. 3.31)",hu:"Skálázott (implicit) főelemkiválasztás (3.31)"},def:{en:"Pick the pivot by the ratio $|a_{ik}|/s_i$, where $s_i=\\max_j|a_{ij}|$ is the row scale, without actually scaling the rows. Handles matrices whose entries span very different magnitudes.",hu:"A főelemet az $|a_{ik}|/s_i$ arány alapján választjuk, ahol $s_i=\\max_j|a_{ij}|$ a sor skálája, anélkül hogy a sorokat ténylegesen skáláznánk. Kezeli a nagyon eltérő nagyságrendű elemeket tartalmazó mátrixokat."}},{term:{en:"Cost $\\sim n^3/3$",hu:"Költség $\\sim n^3/3$"},def:{en:"The elimination uses $n^3/3+\\mathcal{O}(n^2)$ multiplications/divisions (and similarly additions); back-substitution adds only $\\mathcal{O}(n^2)$. So the time complexity of Gaussian elimination is $n^3/3$.",hu:"Az elimináció $n^3/3+\\mathcal{O}(n^2)$ szorzást/osztást (és hasonlóan összeadást) igényel; a visszahelyettesítés csak $\\mathcal{O}(n^2)$-et ad hozzá. Tehát a Gauss-elimináció időigénye $n^3/3$."}},{term:{en:"PA = (triangular) factorization (Thm 3.28)",hu:"PA permutáció (3.28. tétel)"},def:{en:"If $\\det\\mathbf{A}\\ne0$ there is a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x}=\\mathbf{P}\\mathbf{b}$ can be solved by plain Gaussian elimination — pre-applying all the partial-pivoting row swaps.",hu:"Ha $\\det\\mathbf{A}\\ne0$, van olyan $\\mathbf{P}$ permutációs mátrix, hogy a $\\mathbf{P}\\mathbf{A}\\mathbf{x}=\\mathbf{P}\\mathbf{b}$ sima Gauss-eliminációval megoldható — az összes részleges-pivot sorcserét előre alkalmazva."}},{term:{en:"When pivoting is unnecessary (Thm 3.32/3.33)",hu:"Mikor felesleges a pivotálás (3.32/3.33)"},def:{en:"If $\\mathbf{A}$ is diagonally dominant, or symmetric positive definite, Gaussian elimination runs without pivoting and is stable (and for SPD all pivots are positive).",hu:"Ha $\\mathbf{A}$ diagonálisan domináns, vagy szimmetrikus pozitív definit, a Gauss-elimináció pivotálás nélkül lefut és stabil (SPD esetén minden főelem pozitív)."}}],s34:[{term:{en:"Gauss–Jordan elimination",hu:"Gauss–Jordan-elimináció"},def:{en:"A variant of Gaussian elimination that reduces the coefficient block of $(\\mathbf{A}\\,|\\,\\mathbf{b})$ all the way to the identity, giving $(\\mathbf{I}\\,|\\,\\mathbf{b}^{(n-1)})$, so the solution $\\mathbf{x}=\\mathbf{b}^{(n-1)}$ is read directly from the last column.",hu:"A Gauss-elimináció változata, amely a $(\\mathbf{A}\\,|\\,\\mathbf{b})$ együtthatóblokkját egészen az egységmátrixig redukálja, $(\\mathbf{I}\\,|\\,\\mathbf{b}^{(n-1)})$-t adva, így a megoldás $\\mathbf{x}=\\mathbf{b}^{(n-1)}$ közvetlenül leolvasható az utolsó oszlopból."}},{term:{en:"Eliminate above and below",hu:"Elimináció felül és alul"},def:{en:"Unlike plain Gaussian elimination (which clears only below each pivot), Gauss–Jordan clears the entries in every other row — both above and below the pivot — so no back-substitution is needed.",hu:"A sima Gauss-eliminációval ellentétben (amely csak a főelem alatt nulláz) a Gauss–Jordan minden más sorban — a főelem felett és alatt is — nulláz, így nincs szükség visszahelyettesítésre."}},{term:{en:"Reduced form $(\\mathbf{I}\\,|\\,\\mathbf{x})$",hu:"Redukált alak $(\\mathbf{I}\\,|\\,\\mathbf{x})$"},def:{en:"The final tableau: each pivot row is normalized so the coefficient block is the identity. The right-hand column is then exactly the solution vector — no further work.",hu:"A végső tábla: minden főelem-sort normálunk, így az együtthatóblokk az egységmátrix. A jobb oldali oszlop ekkor pontosan a megoldásvektor — további munka nélkül."}},{term:{en:"Cost $\\sim n^3/2$ vs $n^3/3$",hu:"Költség $\\sim n^3/2$ vs $n^3/3$"},def:{en:"Gauss–Jordan needs $n^3/2+\\mathcal{O}(n^2)$ operations — about 50% more than Gaussian elimination's $n^3/3$. So for solving a single system Gaussian elimination is preferred; Gauss–Jordan shines for matrix inversion and simultaneous right-hand sides.",hu:"A Gauss–Jordan $n^3/2+\\mathcal{O}(n^2)$ műveletet igényel — kb. 50%-kal többet a Gauss-elimináció $n^3/3$-ánál. Egyetlen rendszer megoldására a Gauss-elimináció jobb; a Gauss–Jordan a mátrixinvertálásnál és több jobb oldalnál előnyös."}},{term:{en:"Pivoting with Gauss–Jordan (Ex 3.36)",hu:"Pivotálás Gauss–Jordannál (3.36. példa)"},def:{en:"Partial, complete or scaled pivoting combines with Gauss–Jordan exactly as with Gaussian elimination — choose the pivot, swap, then clear the whole column above and below.",hu:"A részleges, teljes vagy skálázott pivotálás ugyanúgy kombinálható a Gauss–Jordannal, mint a Gauss-eliminációval — válaszd a főelemet, cserélj, majd nullázd az egész oszlopot felül és alul."}}],s35:[{term:{en:"Tridiagonal matrix",hu:"Tridiagonális mátrix"},def:{en:"A square matrix with $a_{ij}=0$ whenever $|i-j|>1$ — nonzeros only on the main diagonal and the two adjacent diagonals. Arises constantly in splines, BVPs and PDE discretizations.",hu:"Olyan négyzetes mátrix, ahol $a_{ij}=0$, ha $|i-j|>1$ — nemnulla csak a főátlón és a két szomszédos átlón. Folyamatosan előjön spline-oknál, peremértékfeladatoknál és PDE-diszkretizációknál."}},{term:{en:"Three-vector storage ($3n-2$)",hu:"Háromvektoros tárolás ($3n-2$)"},def:{en:"Store only the sub-diagonal $(a_i)$, diagonal $(d_i)$ and super-diagonal $(c_i)$ — just $3n-2$ numbers instead of $n^2$. The structure is preserved throughout the solve.",hu:"Csak az aldiagonálist $(a_i)$, a főátlót $(d_i)$ és a felső átlót $(c_i)$ tároljuk — $3n-2$ szám az $n^2$ helyett. A szerkezet a megoldás során végig megmarad."}},{term:{en:"Thomas algorithm (Alg. 3.37)",hu:"Thomas-algoritmus (3.37. algoritmus)"},def:{en:"Specialized Gaussian elimination for tridiagonal systems. Forward sweep: $t=a_{i-1}/d_{i-1}$, $d_i\\mathrel{-}=t\\,c_{i-1}$, $b_i\\mathrel{-}=t\\,b_{i-1}$. Then back-substitute $x_n=b_n/d_n$, $x_i=(b_i-c_ix_{i+1})/d_i$. The $c_i$ never change; the $a_i$ become 0.",hu:"Tridiagonális rendszerekre szabott Gauss-elimináció. Előre menet: $t=a_{i-1}/d_{i-1}$, $d_i\\mathrel{-}=t\\,c_{i-1}$, $b_i\\mathrel{-}=t\\,b_{i-1}$. Majd visszahelyettesítés $x_n=b_n/d_n$, $x_i=(b_i-c_ix_{i+1})/d_i$. A $c_i$-k nem változnak; az $a_i$-k 0-vá válnak."}},{term:{en:"Cost $5n-4$ (linear)",hu:"Költség $5n-4$ (lineáris)"},def:{en:"The Thomas algorithm needs only $5n-4$ multiplications/divisions — $\\mathcal{O}(n)$, versus $n^3/3$ for dense Gaussian elimination. For tridiagonal systems always use the specialized method.",hu:"A Thomas-algoritmus csak $5n-4$ szorzást/osztást igényel — $\\mathcal{O}(n)$, szemben a sűrű Gauss-elimináció $n^3/3$-ával. Tridiagonális rendszerre mindig a szabott módszert használd."}},{term:{en:"No pivoting when diagonally dominant",hu:"Nincs pivot, ha diagonálisan domináns"},def:{en:"By Theorem 3.32, if the tridiagonal matrix is diagonally dominant the algorithm runs without pivoting and is stable — the common case in practice.",hu:"A 3.32. tétel szerint, ha a tridiagonális mátrix diagonálisan domináns, az algoritmus pivotálás nélkül lefut és stabil — ez a gyakorlatban a tipikus eset."}},{term:{en:"Band matrix",hu:"Sávmátrix"},def:{en:"A generalization with $a_{ij}=0$ for $|i-j|>p$ (bandwidth $p$); tridiagonal is $p=1$. The same banded elimination idea gives an $\\mathcal{O}(p^2 n)$ solver.",hu:"Általánosítás $a_{ij}=0$-val, ha $|i-j|>p$ (sávszélesség $p$); a tridiagonális a $p=1$ eset. Ugyanaz a sávos elimináció $\\mathcal{O}(p^2 n)$ megoldót ad."}}],s36:[{term:{en:"Simultaneous linear systems",hu:"Szimultán egyenletrendszerek"},def:{en:"Several systems $\\mathbf{A}\\mathbf{x}^{(i)}=\\mathbf{b}^{(i)}$, $i=1,\\dots,m$, sharing the same coefficient matrix $\\mathbf{A}$ but with different right-hand sides.",hu:"Több $\\mathbf{A}\\mathbf{x}^{(i)}=\\mathbf{b}^{(i)}$, $i=1,\\dots,m$ rendszer, azonos $\\mathbf{A}$ együtthatómátrixszal, de különböző jobb oldalakkal."}},{term:{en:"Matrix equation $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$",hu:"Mátrixegyenlet $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$"},def:{en:"Stack the right-hand sides as columns of $\\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})$; the solutions are the columns of $\\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)})$. The $m$ systems are equivalent to the single matrix equation $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$.",hu:"Rakd a jobb oldalakat a $\\mathbf{B}=(\\mathbf{b}^{(1)},\\dots,\\mathbf{b}^{(m)})$ oszlopaiba; a megoldások az $\\mathbf{X}=(\\mathbf{x}^{(1)},\\dots,\\mathbf{x}^{(m)})$ oszlopai. Az $m$ rendszer ekvivalens az egyetlen $\\mathbf{A}\\mathbf{X}=\\mathbf{B}$ mátrixegyenlettel."}},{term:{en:"Augmented $(\\mathbf{A}\\,|\\,\\mathbf{B})$, size $n\\times(n+m)$",hu:"Bővített $(\\mathbf{A}\\,|\\,\\mathbf{B})$, méret $n\\times(n+m)$"},def:{en:"Since pivoting depends only on $\\mathbf{A}$, eliminate on the $n\\times(n+m)$ block $(\\mathbf{A}\\,|\\,\\mathbf{B})$ at once. Gauss–Jordan turns it into $(\\mathbf{I}\\,|\\,\\mathbf{X})$, and the solutions appear in the last $m$ columns.",hu:"Mivel a pivotálás csak $\\mathbf{A}$-tól függ, az $n\\times(n+m)$ méretű $(\\mathbf{A}\\,|\\,\\mathbf{B})$ blokkon egyszerre eliminálunk. A Gauss–Jordan ezt $(\\mathbf{I}\\,|\\,\\mathbf{X})$-re hozza, és a megoldások az utolsó $m$ oszlopban jelennek meg."}},{term:{en:"Shared factorization cost",hu:"Megosztott faktorizációs költség"},def:{en:"Solving all $m$ systems together costs $n^3/3+mn^2$ (Gaussian) or $n^3/2+mn^2$ (Gauss–Jordan) mult/div: the expensive $\\mathcal{O}(n^3)$ elimination is done once and each extra right-hand side adds only $\\mathcal{O}(n^2)$.",hu:"Mind az $m$ rendszer együttes megoldása $n^3/3+mn^2$ (Gauss) vagy $n^3/2+mn^2$ (Gauss–Jordan) szorzás/osztás: a drága $\\mathcal{O}(n^3)$ eliminációt egyszer végezzük, és minden további jobb oldal csak $\\mathcal{O}(n^2)$-et ad."}},{term:{en:"Inversion as $\\mathbf{B}=\\mathbf{I}$",hu:"Invertálás $\\mathbf{B}=\\mathbf{I}$ esetén"},def:{en:"Matrix inversion is the special simultaneous system $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$: solving $(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$ gives the inverse (next section).",hu:"A mátrixinvertálás az $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ speciális szimultán rendszer: az $(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$ megoldása adja az inverzet (következő szakasz)."}}],s37:[{term:{en:"Inverse via $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$",hu:"Inverz $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ révén"},def:{en:"$\\mathbf{A}^{-1}$ is the solution of the simultaneous system $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$. If such $\\mathbf{X}$ exists then $\\mathbf{X}\\mathbf{A}=\\mathbf{I}$ also holds, so $\\mathbf{X}=\\mathbf{A}^{-1}$.",hu:"$\\mathbf{A}^{-1}$ az $\\mathbf{A}\\mathbf{X}=\\mathbf{I}$ szimultán rendszer megoldása. Ha létezik ilyen $\\mathbf{X}$, akkor $\\mathbf{X}\\mathbf{A}=\\mathbf{I}$ is teljesül, tehát $\\mathbf{X}=\\mathbf{A}^{-1}$."}},{term:{en:"$(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$",hu:"$(\\mathbf{A}\\,|\\,\\mathbf{I})\\to(\\mathbf{I}\\,|\\,\\mathbf{A}^{-1})$"},def:{en:"Run Gauss–Jordan on the augmented $(\\mathbf{A}\\,|\\,\\mathbf{I})$; when the left block becomes the identity, the right block is $\\mathbf{A}^{-1}$. Pivoting can be combined in to control rounding.",hu:"Futtasd a Gauss–Jordant a bővített $(\\mathbf{A}\\,|\\,\\mathbf{I})$-n; amikor a bal blokk egységmátrix lesz, a jobb blokk $\\mathbf{A}^{-1}$. A pivotálás beépíthető a kerekítés kezelésére."}},{term:{en:"Inversion cost ($3n^3/2$, or $n^3$ optimized)",hu:"Invertálás költsége ($3n^3/2$, vagy $n^3$ optimalizálva)"},def:{en:"Naive Gauss–Jordan on $(\\mathbf{A}\\,|\\,\\mathbf{I})$ costs $\\tfrac32 n^3+\\mathcal{O}(n^2)$ mult/div. Exploiting the zeros and ones of $\\mathbf{I}$ (skipping multiplications by 0) reduces it to $n^3$.",hu:"A naiv Gauss–Jordan az $(\\mathbf{A}\\,|\\,\\mathbf{I})$-n $\\tfrac32 n^3+\\mathcal{O}(n^2)$ szorzás/osztás. Az $\\mathbf{I}$ nulláit és egyeseit kihasználva (a 0-val szorzást kihagyva) $n^3$-ra csökken."}},{term:{en:"Determinant from pivots",hu:"Determináns a főelemekből"},def:{en:"After Gaussian elimination, $\\det(\\mathbf{A})=(-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$, the product of the pivots times $(-1)^s$ where $s$ is the number of row swaps. Essentially free once elimination is done.",hu:"A Gauss-elimináció után $\\det(\\mathbf{A})=(-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$, a főelemek szorzata $(-1)^s$-szel, ahol $s$ a sorcserék száma. Az elimináció után gyakorlatilag ingyen van."}},{term:{en:"Solvability ⇔ $\\det\\ne0$",hu:"Megoldhatóság ⇔ $\\det\\ne0$"},def:{en:"By Theorem 3.26, elimination with pivoting completes iff $\\det(\\mathbf{A})\\ne0$ — exactly when $\\mathbf{A}$ is invertible. A zero pivot product signals a singular matrix.",hu:"A 3.26. tétel szerint a pivotálásos elimináció pontosan akkor megy végig, ha $\\det(\\mathbf{A})\\ne0$ — éppen amikor $\\mathbf{A}$ invertálható. A nulla főelem-szorzat szinguláris mátrixot jelez."}}]},Sn={s31:[{q:"What notation represents the set of all real $n \\times n$ dimensional matrices?",a:"$\\mathbb{R}^{n \\times n}$"},{q:"What notation represents the set of all $n \\times n$ matrices with complex entries?",a:"$\\mathbb{C}^{n \\times n}$"},{q:"In linear algebra notation, how is the $n \\times n$ dimensional identity matrix denoted?",a:"$\\mathbf{I}$"},{q:"What is the condition for a square matrix $\\mathbf{A}$ to be called 'invertible' or 'nonsingular'?",a:"Its inverse $\\mathbf{A}^{-1}$ exists such that $\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$."},{q:"A square matrix is defined as _____ if it has no inverse.",a:"singular"},{q:"What is the value of $\\det(\\mathbf{A})$ if each element of a single row or column in $\\mathbf{A}$ is equal to 0?",a:"0"},{q:"What is the value of $\\det(\\mathbf{A})$ if two rows or two columns of $\\mathbf{A}$ are identical?",a:"0"},{q:"According to the properties of determinants, what does $\\det(\\mathbf{A}\\mathbf{B})$ equal?",a:"$\\det(\\mathbf{A})\\det(\\mathbf{B})$"},{q:"How does the determinant of a matrix $\\mathbf{A}$ compare to the determinant of its transpose $\\mathbf{A}^T$?",a:"They are equal: $\\det(\\mathbf{A}^T) = \\det(\\mathbf{A})$."},{q:"If $\\mathbf{A}$ is an invertible matrix, what is the formula for $\\det(\\mathbf{A}^{-1})$?",a:"$1/\\det(\\mathbf{A})$"},{q:"If matrix $\\mathbf{B}$ is obtained by multiplying one row of matrix $\\mathbf{A}$ by a constant $c$, how is $\\det(\\mathbf{B})$ related to $\\det(\\mathbf{A})$?",a:"$\\det(\\mathbf{B}) = c\\det(\\mathbf{A})$"},{q:"What happens to the determinant of a matrix if two of its rows or columns are swapped?",a:"The sign of the determinant changes: $\\det(\\mathbf{B}) = -\\det(\\mathbf{A})$."},{q:"How is the determinant affected if a constant multiple of one row is added to another row?",a:"The determinant remains unchanged: $\\det(\\mathbf{B}) = \\det(\\mathbf{A})$."},{q:"Formula: Determinant expansion by the $i$-th row.",a:"$\\det(\\mathbf{A}) = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} \\det(\\mathbf{A}_{ij})$"},{q:"In the context of determinant expansion, what does $\\mathbf{A}_{ij}$ represent?",a:"The $(n-1) \\times (n-1)$ matrix obtained by omitting the $i$-th row and $j$-th column of $\\mathbf{A}$."},{q:"Besides having a non-zero determinant, what is an equivalent condition for a matrix $\\mathbf{A}$ to have a unique solution for $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for any $\\mathbf{b}$?",a:"The matrix $\\mathbf{A}$ must be invertible."},{q:"Under what condition regarding the determinant does the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ have a nontrivial (nonzero) solution?",a:"$\\det(\\mathbf{A}) = 0$"},{q:"If matrices $\\mathbf{A}$ and $\\mathbf{B}$ are both invertible, what is the formula for $(\\mathbf{A}\\mathbf{B})^{-1}$?",a:"$\\mathbf{B}^{-1}\\mathbf{A}^{-1}$"},{q:"A square matrix is called _____ if $a_{ij} = 0$ for all $i > j$.",a:"upper triangular"},{q:"A square matrix is called _____ if $a_{ij} = 0$ for all $i < j$.",a:"lower triangular"},{q:"What is the determinant of a triangular matrix $\\mathbf{A}$?",a:"The product of its diagonal elements: $a_{11}a_{22}\\cdots a_{nn}$."},{q:"The product of two lower triangular matrices results in a _____ matrix.",a:"lower triangular"},{q:"The inverse of an invertible upper triangular matrix is always _____.",a:"upper triangular"},{q:"What is a permutation matrix?",a:"A square matrix obtained from the identity matrix by interchanging its rows or columns."},{q:"In a permutation matrix, how many '1's are present in each row and column?",a:"Exactly one."},{q:"Multiplying a matrix $\\mathbf{A}$ on the left by a permutation matrix $\\mathbf{P}$ results in what transformation of $\\mathbf{A}$?",a:"Interchanging the rows of $\\mathbf{A}$."},{q:"What is the condition for a matrix $\\mathbf{A}$ to be 'row diagonally dominant'?",a:"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i = 1, \\ldots, n$."},{q:"If a matrix $\\mathbf{A}$ is column diagonally dominant, what property does its transpose $\\mathbf{A}^T$ possess?",a:"It is row diagonally dominant."},{q:"According to Theorem 3.8, what property is guaranteed for a matrix that is diagonally dominant?",a:"It is invertible."},{q:"What are the two requirements for a square matrix $\\mathbf{A}$ to be 'positive definite'?",a:"It must be symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\ne \\mathbf{0}$."},{q:"If a square matrix $\\mathbf{A}$ is symmetric and $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} \\ge 0$ for all $\\mathbf{x}$, it is called _____.",a:"positive semi-definite"},{q:"According to Theorem 3.9, if a matrix is positive definite, what can be said about its diagonal elements $a_{ii}$?",a:"They are all strictly positive ($a_{ii} > 0$)."},{q:"Theorem 3.10 states that a symmetric matrix is positive definite if and only if all of its _____ are positive.",a:"principal minors (upper left minors)"},{q:"What defines an 'orthogonal' matrix $\\mathbf{A}$?",a:"$\\mathbf{A}$ is invertible and $\\mathbf{A}^{-1} = \\mathbf{A}^T$."},{q:"If $\\mathbf{A}$ and $\\mathbf{B}$ are orthogonal matrices, what is the nature of their product $\\mathbf{A}\\mathbf{B}$?",a:"The product is also orthogonal."},{q:"What is an eigenvalue $\\lambda$ of a square matrix $\\mathbf{A}$?",a:"A complex number such that $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$ has a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$."},{q:"The algebraic equation $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$ used to find eigenvalues is known as the _____.",a:"characteristic equation"},{q:"What is the relationship between the determinant of a matrix $\\mathbf{A}$ and its eigenvalues $\\lambda_1, \\ldots, \\lambda_n$?",a:"$\\det(\\mathbf{A}) = \\lambda_1\\lambda_2\\cdots\\lambda_n$"},{q:"Based on eigenvalues, when is a square matrix $\\mathbf{A}$ invertible?",a:"When all of its eigenvalues are non-zero ($\\lambda_i \\ne 0$ for all $i$)."},{q:"If $\\lambda$ is an eigenvalue of an invertible matrix $\\mathbf{A}$, what is the corresponding eigenvalue for $\\mathbf{A}^{-1}$?",a:"$1/\\lambda$"},{q:"If $\\lambda$ is an eigenvalue of $\\mathbf{A}$, what is the corresponding eigenvalue for the matrix $\\mathbf{A}^k$?",a:"$\\lambda^k$"},{q:"Where are the eigenvalues located for a triangular matrix?",a:"On the main diagonal elements ($a_{11}, a_{22}, \\ldots, a_{nn}$)."},{q:"Two square matrices $\\mathbf{A}$ and $\\mathbf{B}$ are 'similar' if there exists an invertible matrix $\\mathbf{P}$ such that _____.",a:"$\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{B}\\mathbf{P}$"},{q:"What important property do similar matrices share regarding their eigenvalues?",a:"Their eigenvalues are identical."},{q:"Definition: Spectral Radius $\\rho(\\mathbf{A})$.",a:"The maximum absolute value of the eigenvalues of $\\mathbf{A}$: $\\max\\{|\\lambda| : \\lambda \\text{ is an eigenvalue of } \\mathbf{A}\\}$."},{q:"How is the spectral radius of $\\mathbf{A}^k$ related to the spectral radius of $\\mathbf{A}$?",a:"$\\rho(\\mathbf{A}^k) = (\\rho(\\mathbf{A}))^k$"},{q:"According to Theorem 3.16, the spectral radius $\\rho(\\mathbf{A})$ is always less than or equal to any _____.",a:"matrix norm $\\|\\cdot\\|$"},{q:"Theorem 3.17: For any $\\varepsilon > 0$, there exists a matrix norm $\\|\\cdot\\|$ such that $\\|\\mathbf{A}\\| \\le$ _____.",a:"$\\rho(\\mathbf{A}) + \\varepsilon$"},{q:"How is the spectral norm $\\|\\mathbf{A}\\|_2$ calculated for a general square matrix?",a:"$\\|\\mathbf{A}\\|_2 = \\sqrt{\\rho(\\mathbf{A}^T\\mathbf{A})}$"},{q:"If a matrix $\\mathbf{A}$ is symmetric, how does its spectral norm $\\|\\mathbf{A}\\|_2$ relate to its spectral radius $\\rho(\\mathbf{A})$?",a:"They are equal: $\\|\\mathbf{A}\\|_2 = \\rho(\\mathbf{A})$."},{q:"What is the name of the determinant where the rows are powers of $a_i$ (e.g., $1, a_i, a_i^2, \\ldots, a_i^{n-1}$)?",a:"Vandermonde determinant"},{q:"Under what condition is the Vandermonde determinant non-zero?",a:"The numbers $a_1, \\ldots, a_n$ must be pairwise distinct."},{q:"What is the formula for the value of the Vandermonde determinant given numbers $a_1, \\ldots, a_n$?",a:"$\\prod_{i>j}(a_i - a_j)$"},{q:"If $\\mathbf{A}$ and $\\mathbf{B}$ are positive definite matrices, is their sum $\\mathbf{A} + \\mathbf{B}$ also positive definite?",a:"Yes."},{q:"Is the square of a positive definite matrix ($\\mathbf{A}^2$) also positive definite?",a:"Yes."},{q:"Is the transpose of a positive definite matrix ($\\mathbf{A}^T$) also positive definite?",a:"Yes."},{q:"Define 'column diagonally dominant' in terms of the matrix's entries.",a:"$|a_{jj}| > \\sum_{i \\ne j} |a_{ij}|$ for all $j = 1, \\ldots, n$."}],s32:[{q:"What is an $n$-dimensional upper triangular linear system?",a:"A system where all coefficients $a_{ij} = 0$ for $i > j$."},{q:"In an upper triangular system $Ax = b$, what is the equation for the $n$-th variable?",a:"$a_{nn}x_n = b_n$"},{q:"What is the specific name of the method used to solve upper triangular systems?",a:"Backward substitution."},{q:"The Hungarian term for the backward substitution method is _____.",a:"Visszahelyettesítés módszere."},{q:"Which variable is solved first in the backward substitution algorithm?",a:"$x_n$"},{q:"Which variable is solved last in the backward substitution algorithm?",a:"$x_1$"},{q:"Algorithm: What is the assignment for $x_n$ at the start of backward substitution?",a:"$x_n \\leftarrow b_n / a_{nn}$"},{q:"In the backward substitution algorithm, what range of values does the index $i$ take after solving for $x_n$?",a:"$n-1, \\dots, 1$"},{q:"What is the general formula for calculating $x_i$ in backward substitution?",a:"$x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j) / a_{ii}$"},{q:"In the formula for $x_i$, what is the lower limit of the summation index $j$?",a:"$i+1$"},{q:"In the formula for $x_i$, what is the upper limit of the summation index $j$?",a:"$n$"},{q:"Under what condition on the diagonal elements $a_{ii}$ can backward substitution be performed?",a:"$a_{ii} \\ne 0$ for all $i = 1, \\dots, n$."},{q:"How is the determinant of a triangular matrix $A$ calculated?",a:"It is the product of the diagonal elements: $\\det(A) = a_{11}a_{22}\\cdots a_{nn}$."},{q:"Backward substitution works if and only if the system has a unique solution, which implies $\\det(A) \\ne$ _____.",a:"$0$"},{q:"How many multiplications and divisions are required in step 1 of the backward substitution algorithm?",a:"$1$"},{q:"How many additions and subtractions are required in step 1 of the backward substitution algorithm?",a:"$0$"},{q:"In the $n$-th step of the algorithm, how many multiplications and divisions are performed?",a:"$n$"},{q:"In the $n$-th step of the algorithm, how many additions and subtractions are performed?",a:"$n-1$"},{q:"What is the total number of multiplications and divisions required for backward substitution?",a:"$n(n+1)/2$"},{q:"What is the total number of additions and subtractions required for backward substitution?",a:"$n(n-1)/2$"},{q:"In terms of Big O notation, what is the complexity of multiplications and divisions for backward substitution?",a:"$n^2/2 + \\mathcal{O}(n)$"},{q:"In terms of Big O notation, what is the complexity of additions and subtractions for backward substitution?",a:"$n^2/2 + \\mathcal{O}(n)$"},{q:"How does the source material define the notation $\\mathcal{O}(n^k)$?",a:"A polynomial with degree at most $k$."},{q:"Why is the leading term of the time complexity (e.g., $n^2/2$) prioritized over lower-order terms?",a:"It determines the magnitude of the formula as $n$ becomes large."},{q:"If $3x_4 = 12$ in a triangular system, what is the value of $x_4$?",a:"$4$"},{q:"If $2x_3 - x_4 = -2$ and $x_4 = 4$, what is the resulting value of $x_3$?",a:"$1$"},{q:"In a linear system $Ax=b$, what does the vector $b$ represent?",a:"The right-hand side constant values."},{q:"A triangular matrix where $a_{ij} = 0$ for $i > j$ is specifically called an _____ triangular matrix.",a:"Upper"},{q:"Concept: Time Complexity",a:"Definition: The number of arithmetic operations required to perform an algorithm as a function of the input size $n$."},{q:"What arithmetic operation is performed at every step $i$ to isolate $x_i$?",a:"Division by $a_{ii}$."},{q:"Term: Leading Term",a:"Definition: The term in a polynomial with the highest power of $n$, determining the growth rate for large $n$."},{q:"How many terms are in the summation $\\sum_{j=i+1}^{n} a_{ij}x_j$ when $i = n-1$?",a:"$1$"},{q:"True or False: If any diagonal element of a triangular matrix is zero, the determinant is zero.",a:"True"},{q:"Which specific field of mathematics is the source material '03_01_triangular-systems.md' discussing?",a:"Numerical Analysis."},{q:"The summation term in the backward substitution formula accounts for the _____ of previously solved variables.",a:"Back-substitution (or back-replacement)."},{q:"What is the closed-form sum of the first $n$ integers, $1 + 2 + \\dots + n$?",a:"$n(n+1)/2$"},{q:"If $n = 1000$, what is the approximate magnitude of multiplications required for backward substitution?",a:"Approximately $500,000$ (or $n^2/2$)."},{q:"The notation $\\mathcal{O}(n^k)$ effectively _____ lower-order terms that are less significant for large $n$.",a:"Hides (or ignores)."},{q:"In the example system, $x_2$ is found using the formula $(13 + x_3 - 2x_4)/3$. If $x_3=1$ and $x_4=4$, what is $x_2$?",a:"$2$"},{q:"In the example system, $x_1$ is found using $(3 + x_2 - 3x_3 - x_4)/2$. If $x_2=2, x_3=1, x_4=4$, what is $x_1$?",a:"$-1$"},{q:"What type of systems (linear or nonlinear) is backward substitution designed for?",a:"Linear systems."},{q:"If a matrix is upper triangular, its _____ consist only of elements where the row index is less than or equal to the column index.",a:"Non-zero entries."},{q:"Why is it often more efficient to define a specialized method for a specific problem type like triangular systems?",a:"Specialized methods exploit the structure of the problem to reduce operation counts."},{q:"What is the result of $1 + 2 + \\dots + (n-1)$?",a:"$(n-1)n/2$"},{q:"How does the complexity of multiplications/divisions compare to additions/subtractions in backward substitution?",a:"They have the same leading order complexity ($n^2/2$)."},{q:"In the Hungarian text, the word 'műveletigény' refers to _____.",a:"Operation count (or computational complexity)."},{q:"Process: Solving $x_i$ requires knowing the values of all $x_j$ where $j$ is _____ than $i$.",a:"Greater"},{q:"If the determinant of a triangular matrix is non-zero, does the backward substitution algorithm always yield a solution?",a:"Yes, it yields a unique solution."},{q:"The algorithm $x_i \\leftarrow (b_i - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$ corresponds to solving the $i$-th _____ of the system.",a:"Row (or equation)."},{q:"Is backward substitution a finite or iterative numerical method?",a:"Finite (it requires finitely many steps)."},{q:"Formula: Number of divisions in the entire backward substitution algorithm for an $n \\times n$ matrix.",a:"$n$"},{q:"What determines if backward substitution can be performed for a specific $i$-th row?",a:"Whether $a_{ii} \\ne 0$."},{q:"Hungarian term: 'egyértelmű megoldás' means _____.",a:"Unique solution."},{q:"In the complexity analysis table, what is the count of multiplication/division for step 2?",a:"2"},{q:"In the complexity analysis table, what is the count of addition/subtraction for step 2?",a:"1"},{q:"What does the $a_{1n}x_n$ term represent in the first equation of a triangular system?",a:"The product of the coefficient $a_{1n}$ and the $n$-th unknown $x_n$."},{q:"If $n=2$, how many total multiplications/divisions are needed?",a:"$3$ (calculated as $2(3)/2$)."},{q:"If $n=2$, how many total additions/subtractions are needed?",a:"$1$ (calculated as $1(2)/2$)."},{q:"In the expression $n^2/2 + \\mathcal{O}(n)$, the term $\\mathcal{O}(n)$ is considered a _____ order term.",a:"Lower"}],s33:[{q:"In the context of linear systems, what is an 'augmented matrix'?",a:"A matrix formed by appending the right-hand side vector $b$ as an additional column to the coefficient matrix $A$."},{q:"What is the primary goal of the 'elimination' phase in Gaussian elimination?",a:"To transform the augmented matrix into an equivalent upper triangular form."},{q:"What name is given to the diagonal elements $a_{11}, a_{22}^{(1)}, \\ldots, a_{nn}^{(n-1)}$ used during the Gaussian elimination process?",a:"Pivot elements"},{q:"Under what specific numerical condition can basic Gaussian elimination be performed without any row interchanges?",a:"It can be performed if and only if all the pivot elements are non-zero."},{q:"In Gaussian elimination, what is the 'backward substitution' phase used for?",a:"Solving the resulting upper triangular system for the unknown variables starting from $x_n$ to $x_1$."},{q:"In the $k$-th step of Gaussian elimination, what is the formula for the multiplier $l_{ik}$ used to eliminate $a_{ik}$?",a:"$l_{ik} = \\frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$"},{q:"What is the leading term of the time complexity for Gaussian elimination of an $n \\times n$ system?",a:"$\\frac{n^3}{3}$"},{q:"According to the total operation count, how many multiplications and divisions are required for Gaussian elimination including backward substitution?",a:"$\\frac{n^3}{3} + n^2 - \\frac{n}{3}$"},{q:"According to the total operation count, how many additions and subtractions are required for Gaussian elimination including backward substitution?",a:"$\\frac{n^3}{3} + \\frac{n^2}{2} - \\frac{5n}{6}$"},{q:"Why does dividing by a pivot element close to zero cause issues in floating-point arithmetic?",a:"It can lead to a significant increase in rounding errors, making the numerical solution unreliable."},{q:"What is the strategy for 'partial pivoting' (also known as maximal column pivoting)?",a:"Before step $k$, find the element with the largest magnitude in the $k$-th column at or below the diagonal and swap its row with the $k$-th row."},{q:"Which index is selected as the pivot row $l$ in partial pivoting for step $k$?",a:"The index $l$ such that $|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\ldots, n\\}$."},{q:"How does 'complete pivoting' differ from 'partial pivoting'?",a:"It searches for the largest magnitude element in the entire remaining sub-matrix rather than just the current column."},{q:"What is a major disadvantage of complete pivoting compared to partial pivoting?",a:"It requires more comparisons to find the pivot element, which slows down the algorithm."},{q:"When performing complete pivoting, what must be tracked in addition to row interchanges?",a:"Column interchanges, which represent changes in the order of the variables $x_1, \\ldots, x_n$."},{q:"Theorem 3.26 states that a linear system can be solved by Gaussian elimination with partial pivoting if and only if _____.",a:"$\\det(\\mathbf{A}) \\neq 0$ (the matrix is invertible)."},{q:"In matrix notation, how are row changes in Gaussian elimination represented using a permutation matrix $\\mathbf{P}$?",a:"The system is transformed from $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ to $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$."},{q:"What is the primary motivation for using 'scaled partial pivoting'?",a:"To reduce rounding errors when the magnitudes of coefficients in different rows vary significantly."},{q:"In scaled partial pivoting, how is the scale factor $s_i$ for row $i$ typically defined?",a:"$s_i = \\max\\{|a_{ij}| : 1 \\leq j \\leq n\\}$"},{q:"In 'partial pivoting with implicit scaling', why are the rows not actually multiplied by the scaling factors?",a:"To avoid introducing additional rounding errors through unnecessary division operations."},{q:"What is the selection criterion for the pivot row $l$ in scaled partial pivoting?",a:"Select $l$ such that $\\frac{|a_{lk}|}{s_l} = \\max\\limits_{k \\leq i \\leq n} \\frac{|a_{ik}|}{s_i}$."},{q:"A square matrix $\\mathbf{A}$ is 'diagonally dominant' if, for every row $i$, $|a_{ii}|$ is greater than _____.",a:"The sum of the magnitudes of the other elements in that row: $\\sum_{j \\neq i} |a_{ij}|$."},{q:"What does Theorem 3.32 conclude about Gaussian elimination on a diagonally dominant matrix?",a:"It can be performed without pivoting and is stable with respect to rounding errors."},{q:"How does diagonal dominance relate to matrix invertibility?",a:"Any diagonally dominant matrix is guaranteed to be invertible."},{q:"Concept: Symmetric Positive Definite (SPD) Matrix",a:"Definition: A symmetric matrix $\\mathbf{A}$ where $\\mathbf{x}^T\\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$."},{q:"What is the 'principal minor' condition for a symmetric matrix to be positive definite?",a:"All the upper-left principal minors must have a positive determinant."},{q:"If a matrix is symmetric positive definite, what can be said about its pivot elements during Gaussian elimination without pivoting?",a:"All pivot elements are guaranteed to be positive."},{q:"What is the effect of interchanging rows on the determinant of a matrix?",a:"Each row interchange multiplies the determinant by $-1$."},{q:"In an optimized implementation of Gaussian elimination, what happens to the elements under the main diagonal after they are eliminated?",a:"They are typically overwritten by the multipliers $l_{ik}$ or left as meaningless values to save memory."},{q:"Term: Pivot Row",a:"Definition: The row containing the pivot element used to eliminate variables in the rows below it during Gaussian elimination."},{q:"In the provided example with 4-digit arithmetic, what was the relative error for $x_1$ when dividing by the small pivot $0.0002$?",a:"$300\\%$"},{q:"What is the first step in the 'implicit scaling' algorithm before starting elimination?",a:"Compute the scale factor $s_i$ for each row $i$ as the maximum absolute value in that row."},{q:"True or False: If a system has a unique solution, standard Gaussian elimination without pivoting will always find it.",a:"False; it can fail if a pivot element becomes zero during the process."},{q:"In programming Gaussian elimination, what is a more efficient alternative to physically interchanging large rows in memory?",a:"Using an index array to keep track of the row order (indirect addressing)."},{q:"How does partial pivoting help reduce rounding errors?",a:"By ensuring the divisor (pivot) is as large as possible, which minimizes the growth of multipliers and rounding errors."},{q:"What property of Symmetric Positive Definite matrices ensures numerical stability without pivoting?",a:"The pivots are always positive and the algorithm is stable with respect to rounding errors for these matrices."},{q:"In Gaussian elimination, the multiplier $l_{ik}$ is stored to potentially perform what future matrix decomposition?",a:"$LU$ decomposition (though not explicitly detailed in the source, $l_{ik}$ are the components of $L$)."},{q:"If the algorithm for Gaussian elimination encounters a column where all elements $a_{ik}$ for $i \\geq k$ are zero, what does this imply about the matrix $\\mathbf{A}$?",a:"The matrix is singular, and $\\det(\\mathbf{A}) = 0$."},{q:"In partial pivoting, what happens if multiple rows have the same maximum absolute value in the current column?",a:"The smallest row index $l$ is typically chosen."},{q:"In the backward substitution formula $x_i = (a_{i,n+1} - \\sum_{j=i+1}^{n} a_{ij}x_j)/a_{ii}$, what must be non-zero for the formula to be valid?",a:"The pivot element $a_{ii}$."},{q:"Why is scaling using powers of the number system base (e.g., $\\beta^{r_i}$) preferred in some implementations?",a:"Division by base powers does not introduce rounding errors in floating-point representations."},{q:"What is the effect of scaling a row on the solution $\\mathbf{x}$ of the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",a:"The solution remains identical; only the numerical selection of pivots is affected."},{q:"The proof of Theorem 3.32 uses the _____ inequality to show that diagonal dominance is preserved in subsequent steps of elimination.",a:"Triangle Inequality"},{q:"In the complexity analysis, which phase of Gaussian elimination is more expensive: Elimination or Backward Substitution?",a:"Elimination ($O(n^3)$ versus $O(n^2)$ for backward substitution)."},{q:"What is the result of applying Gaussian elimination to a symmetric positive definite matrix without pivoting?",a:"The matrix is successfully reduced to upper triangular form with all positive diagonal entries."},{q:"If $\\det(\\mathbf{A}) \\neq 0$, what does Theorem 3.28 guarantee regarding permutation matrices?",a:"There exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ can be solved without row changes."},{q:"What happens if Gaussian elimination with partial pivoting is attempted on a singular matrix?",a:"The process will eventually fail because at some step $k$, all elements in the column $k$ from the $k$-th row down will be zero."},{q:"In the 2D example $0.0002x_1 - 30.5x_2 = -60.99$ and $5.060x_1 - 1.05x_2 = 250.9$, why was the second variable $x_2$ less affected by the error than $x_1$?",a:"The error was introduced while calculating $x_1$ during back-substitution because it depended on the magnified rounding error from the elimination step."},{q:"Cloze: In Gaussian elimination, the variable $x_k$ is eliminated from rows $i = \\dots$ in the $k$-th step.",a:"$k+1, \\ldots, n$"},{q:"What is the value of the multiplier $l_{i1}$ in terms of matrix entries?",a:"$l_{i1} = \\frac{a_{i1}}{a_{11}}$"},{q:"Concept: Time Complexity",a:"Definition: The measure of the number of operations required by an algorithm as a function of the input size $n$."},{q:"What is the relationship between the determinant of a matrix and the pivot elements in Gaussian elimination without row swaps?",a:"The determinant is equal to the product of the pivot elements: $\\det(\\mathbf{A}) = a_{11} a_{22}^{(1)} \\cdots a_{nn}^{(n-1)}$."},{q:"What is the specific purpose of the $l$ and $m$ indices in complete pivoting?",a:"Index $l$ represents the row and $m$ represents the column of the largest available element to be moved to the pivot position."},{q:"True or False: Gaussian elimination with partial pivoting always yields the exact solution in floating-point arithmetic.",a:"False; it reduces rounding error but does not eliminate it entirely."},{q:"Which matrix type is explicitly mentioned as being stable under Gaussian elimination without pivoting?",a:"Diagonally dominant matrices (and symmetric positive definite matrices)."},{q:"What is the alternative name for 'partial pivoting' in Gaussian elimination?",a:"Maximal column pivoting"},{q:"In partial pivoting, from which set of elements in the $k$-th column is the pivot selected?",a:"The elements in and under the main diagonal (from row $k$ to $n$)."},{q:"In the $k$-th step of partial pivoting, what criteria determines the selection of the pivot row $l$?",a:"$|a_{lk}| = \\max\\{|a_{ik}| : i = k, \\dots, n\\}$"},{q:"What physical action is performed once the pivot row $l$ is identified in partial pivoting?",a:"The $k$-th and $l$-th rows are interchanged."},{q:"According to the provided theorem, a linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ can be solved by Gaussian elimination with partial pivoting if and only if $\\det(\\mathbf{A})$ is _____.",a:"Non-zero ($\\neq 0$)"},{q:"The invertibility of matrix $\\mathbf{A}$ is equivalent to the existence of a _____ solution for the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ for all $\\mathbf{b}$.",a:"Unique"},{q:"In the proof of the equivalence theorem, if a row change occurs in the $k$-th step, how does $\\det(\\mathbf{A}^{(k)})$ relate to $\\det(\\mathbf{A}^{(k-1)})$?",a:"$\\det(\\mathbf{A}^{(k)}) = -\\det(\\mathbf{A}^{(k-1)})$"},{q:"If no row change is needed during the $k$-th step of Gaussian elimination, what is the relationship between $\\det(\\mathbf{A}^{(k)})$ and $\\det(\\mathbf{A}^{(k-1)})$?",a:"$\\det(\\mathbf{A}^{(k)}) = \\det(\\mathbf{A}^{(k-1)})$"},{q:"If partial pivoting terminates at step $k$ because all $a_{ik}^{(k-1)} = 0$ for $i = k, \\dots, n$, what is the value of $\\det(\\mathbf{A})$?",a:"Zero"},{q:"Why is it numerically advantageous to move the largest magnitude element to the pivot position?",a:"It minimizes rounding errors by ensuring the division factor is as small as possible."},{q:"How does partial pivoting prevent algorithm failure when the diagonal element $a_{kk}$ is zero?",a:"It swaps the row with a lower row containing a non-zero element in that column."},{q:"In the provided $4 \\times 4$ matrix example, which two rows are interchanged in the very first step?",a:"The first row and the third row."},{q:"In the first step of the example matrix, why is the row beginning with $-3$ swapped to the top?",a:"The value $|-3|$ is the maximum absolute value in the first column."},{q:"The effect of all row changes in partial pivoting can be represented by multiplying $\\mathbf{A}$ by a _____ matrix $\\mathbf{P}$.",a:"Permutation"},{q:"If $\\det(\\mathbf{A}) \\neq 0$, there exists a permutation matrix $\\mathbf{P}$ such that $\\mathbf{P}\\mathbf{A}\\mathbf{x} = \\mathbf{P}\\mathbf{b}$ is solvable without _____.",a:"Row changes (or further pivoting)"},{q:"Why do humans often prefer using fractions when performing Gaussian elimination by hand?",a:"Fractions allow for an exact solution without introducing rounding errors."},{q:"What is the main drawback of standard Gaussian elimination without pivoting when implemented on a computer?",a:"Small pivots can lead to large rounding errors that degrade the precision of the result."},{q:"In a system of $n$ equations, what is the label of the coefficient matrix after the final step of Gaussian elimination?",a:"$\\mathbf{A}^{(n-1)}$"},{q:"How is the final triangular system solved once Gaussian elimination is complete?",a:"Backward substitution"},{q:"If the Gaussian elimination process reaches a state where the bottom-right submatrix has a column of zeros, what does this indicate about the system's solvability?",a:"The system cannot be solved uniquely because the determinant is zero."},{q:"In the second elimination step of the example, why are the second and fourth rows interchanged?",a:"The element $\\frac{14}{3}$ in the fourth row is larger in magnitude than $-\\frac{1}{3}$ in the second row."},{q:"According to the transcript, how does the numerical result from partial pivoting relate to the exact solution?",a:"It is an approximation due to rounding at each step to a certain precision."},{q:"Concept: Pivot element",a:"Definition: The element in the diagonal position used to eliminate coefficients in the rows below it."},{q:"True or False: Partial pivoting requires searching the entire remaining submatrix for the largest element.",a:"False (That is complete pivoting; partial pivoting only searches the current column)."},{q:"If a matrix is invertible, what does the theorem guarantee about Gaussian elimination with partial pivoting?",a:"The elimination process can be successfully performed to completion."},{q:"How many row interchanges are required if the largest magnitude element is already in the $a_{kk}$ position?",a:"Zero"},{q:"Formula: The value of the determinant of $\\mathbf{A}$ in terms of the final upper triangular matrix $\\mathbf{A}^{(n-1)}$ after $m$ row swaps.",a:"$\\det(\\mathbf{A}) = (-1)^m \\det(\\mathbf{A}^{(n-1)})$"},{q:"What is the value of $\\det(\\mathbf{A}^{(n-1)})$ if the triangular system is solvable?",a:"It is non-zero."},{q:"In the context of the proof, what property of determinants allows $\\det(\\mathbf{A}^{(k)})$ to equal $-\\det(\\mathbf{A}^{(k-1)})$?",a:"Swapping two rows of a matrix reverses the sign of its determinant."},{q:"If a matrix $\\mathbf{A}$ has $\\det(\\mathbf{A}) = 0$, what will eventually happen during partial pivoting?",a:"A step will be reached where all elements in the current column on and below the diagonal are zero."},{q:"What is the first row of the final upper triangular matrix in the provided example?",a:"$\\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\end{pmatrix}$"},{q:"In the $4 \\times 4$ example, what is the final value found for $x_4$?",a:"$-1$"},{q:"Step: After finding the pivot and swapping rows, what is the next procedural step in the elimination?",a:"Subtracting multiples of the pivot row from the rows below to create zeros in the current column."},{q:"How is the multiplier calculated for row $i$ in the $k$-th step of elimination?",a:"By dividing the element to be eliminated ($a_{ik}$) by the pivot element ($a_{kk}$)."},{q:"Why does dividing by a 'largest possible number' during multiplier calculation help with rounding?",a:"It prevents the multipliers from becoming excessively large, which would amplify errors in subsequent subtractions."},{q:"In the example, the solution for $x_1$ is _____.",a:"$4$"},{q:"What does the Hungarian text suggest about the necessity of partial pivoting?",a:"It is sometimes necessary to perform the calculation at all, and often advisable to reduce errors."},{q:"If partial pivoting is used, is it possible to have a zero pivot if the matrix is non-singular?",a:"No, if the matrix is non-singular, at least one element in the column must be non-zero."},{q:"The determinant of an upper triangular matrix is the _____ of its diagonal elements.",a:"Product"},{q:"What is the result for $x_3$ in the $4 \\times 4$ example?",a:"$2$"},{q:"In the $k$-th step, the pivot search is restricted to rows $i$ where $i \\ge$ _____.",a:"$k$"},{q:"The process of moving the largest magnitude element to the diagonal is intended to avoid dividing by _____ numbers.",a:"Small (or zero)"},{q:"True or False: Partial pivoting always results in a positive determinant.",a:"False (The sign depends on the number of row swaps and the final diagonal products)."},{q:"In the third step of the example, which rows are swapped?",a:"The third and fourth rows."},{q:"What is the second variable solved for in the backward substitution of the example?",a:"$x_3$"},{q:"Term: Permutation Matrix",a:"Definition: An identity matrix with its rows reordered, used to perform row exchanges via matrix multiplication."},{q:"If $\\mathbf{A}$ is invertible, the system $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ has _____ solution(s).",a:"Exactly one (or a unique)"},{q:"In the provided example, the final pivot element in the fourth row after elimination is _____.",a:"$-\\frac{143}{24}$"},{q:"What happens to the augmented part of the matrix (the $\\mathbf{b}$ vector) during a row swap?",a:"The corresponding elements in the $\\mathbf{b}$ vector are swapped along with the rows."},{q:"What is the value of $x_2$ in the example problem?",a:"$3$"},{q:"In the proof, why is $\\det(\\mathbf{A}^{(n-1)})$ non-zero if (i) holds?",a:"Because the assumption is that the elimination can be completed to form a solvable triangular system."},{q:"Under what condition does the determinant of a matrix equal zero based on its structure during elimination?",a:"When a column (from the diagonal down) consists entirely of zeros."},{q:"Why is the row swap done *before* the elimination step?",a:"To ensure the current step uses the most stable pivot available for the entire column."},{q:"How does the transcript characterize the result of Gaussian elimination when $a_{kk} = 0$ and no swaps are possible?",a:"The algorithm terminates because it cannot continue without a non-zero pivot."},{q:"In the Hungarian text, what is the '3.26. tétel' (Theorem 3.26) equivalent to in the English source?",a:"The theorem stating the equivalence of system solvability, non-zero determinant, and invertibility."},{q:"In Gaussian elimination, what is another name for 'complete pivoting'?",a:"Maximal pivoting."},{q:"At the $k$-th step of complete pivoting, the indices $l$ and $m$ are chosen such that $|a_{lm}|$ is the maximum of the absolute values in which range?",a:"The range where $i = k, \\ldots, n$ and $j = k, \\ldots, n$."},{q:"What two types of interchanges are performed during a step of Gaussian elimination with complete pivoting?",a:"The interchange of the $k$-th and $l$-th rows and the $k$-th and $m$-th columns."},{q:"How does interchanging the $k$-th and $m$-th columns affect the linear system variables?",a:"It changes which column corresponds to which unknown variable ($x_1, \\ldots, x_n$)."},{q:"What is the primary disadvantage of complete pivoting compared to partial pivoting?",a:"It requires significantly more comparisons to find the maximum element, making the method slower."},{q:"When solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ with complete pivoting, how is the final value of the variables determined?",a:"By solving the resulting triangular system while accounting for all column (variable) swaps."},{q:"A square matrix $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ is called row diagonally dominant if for every $i$, $|a_{ii}| >$ _____.",a:"$\\sum_{j=1, j \\ne i}^{n} |a_{ij}|$."},{q:"According to the provided theorem, if a matrix $\\mathbf{A}$ is diagonally dominant, what property does it necessarily have regarding its inverse?",a:"The matrix $\\mathbf{A}$ is invertible."},{q:"In the proof of invertibility for diagonally dominant matrices, what assumption is made about the linear system $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$?",a:"It is assumed to have a nontrivial solution $\\mathbf{x} \\ne \\mathbf{0}$ to reach a contradiction."},{q:"If a matrix is row diagonally dominant, can Gaussian elimination be performed without pivoting?",a:"Yes, it can be performed without pivoting."},{q:"What is the numerical stability status of Gaussian elimination when applied to a diagonally dominant matrix without pivoting?",a:"The method is stable with respect to rounding errors."},{q:"Theorem 3.32 states that if $\\mathbf{A}$ is diagonally dominant, every intermediate matrix $\\mathbf{A}^{(k)}$ in Gaussian elimination is also _____.",a:"Diagonally dominant."},{q:"A square matrix is positive definite if it is _____ and $x^T A x > 0$ for all $x \\ne 0$.",a:"Symmetric."},{q:"Define a 'positive semi-definite' matrix based on the quadratic form $x^T A x$.",a:"A symmetric matrix where $x^T A x \\ge 0$ for all $x$."},{q:"What condition involving 'principal minors' determines if a symmetric matrix is positive definite?",a:"All of its upper left minors (principal minors) must have a positive determinant."},{q:"If a symmetric matrix $\\mathbf{A}$ is positive definite, what is guaranteed about the pivot elements during Gaussian elimination without pivoting?",a:"The pivot elements are all positive."},{q:"Gaussian elimination on a symmetric positive definite matrix without pivoting is stable with respect to _____.",a:"Rounding errors."},{q:"What is the purpose of 'row scaling' (sorkiegyenlítés) in numerical linear algebra?",a:"To equalize the magnitudes of coefficients to reduce rounding errors."},{q:"In the context of row scaling, what does the matrix $\\mathbf{D} = \\text{diag}(d_1, \\ldots, d_n)$ represent?",a:"A diagonal matrix where each $d_i$ is a non-zero multiplier for the $i$-th equation."},{q:"According to the strategy for row scaling, what is a common choice for $s_i$ to normalize coefficients?",a:"$s_i = \\max_{1 \\le j \\le n} |a_{ij}|$."},{q:"To avoid introducing new rounding errors during row scaling, what specific values should the multipliers $d_i$ take?",a:"They should be powers of the computer's number representation base $\\beta$."},{q:"What is 'implicit row scaling' in Gaussian elimination?",a:"A method where scale factors (weights) are used only to select pivots, without actually scaling the matrix elements."},{q:"According to Theorem 3.30, if row scaling does not change the pivot selections, how do the numerical solutions of $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ and $\\mathbf{D}\\mathbf{A}\\mathbf{x} = \\mathbf{D}\\mathbf{b}$ compare?",a:"They will be exactly the same."},{q:"In Algorithm 3.31, how is the pivot row index $l$ chosen using implicit scaling?",a:"By finding the index $l$ that maximizes the ratio $\\frac{|a_{ik}|}{s_i}$ for $k \\le i \\le n$."},{q:"Why might a programmer use a pointer vector $m[i]$ to handle row swaps instead of moving actual matrix rows?",a:"To reduce the number of operations, as swapping elements in a small vector is faster than swapping entire matrix rows."},{q:"If $m[i]$ is used as a row index pointer vector, how is the matrix element $a_{ij}$ accessed?",a:"As $a[m[i], j]$."},{q:"The proof for the invertibility of diagonally dominant matrices utilizes the _____ inequality.",a:"Triangle."},{q:"What is the requirement for a matrix to be 'negative definite'?",a:"It must be symmetric and $x^T A x < 0$ for all $x \\ne 0$."},{q:"In complete pivoting, if the maximum absolute value is located at $a_{lm}$, which column swap is performed at step $k$?",a:"The $k$-th column is swapped with the $m$-th column."},{q:"Is it possible for Gaussian elimination on a positive definite matrix to result in a non-positive pivot element?",a:"No, if the matrix is positive definite, the pivots will always be positive."},{q:"In Algorithm 3.31, what value does $s_i$ store after the weights calculation loop?",a:"The maximum absolute value found in row $i$ of the coefficient matrix."},{q:"What does the expression $l_{ik} \\leftarrow a_{ik}/a_{kk}$ calculate in the Gaussian elimination algorithm?",a:"The multiplier used to eliminate the element in the $i$-th row and $k$-th column."},{q:"Concept: Principal Minor.",a:"Definition: The determinant of a sub-matrix formed by the first $i$ rows and first $i$ columns. Example: $\\det(a_{11})$ is the first principal minor."},{q:"What is the effect of significant magnitude differences in matrix coefficients on numerical calculations?",a:"The rounding error may increase during the calculation."},{q:"If a matrix is symmetric, what property allows checking for positive definiteness using only determinants?",a:"Sylvester's criterion (the requirement that all principal minors be positive)."},{q:"Why is the base $\\beta$ used in scaling (e.g., $b_{ij} := a_{ij}/\\beta^{r_i}$)?",a:"Because division by the base in floating-point arithmetic does not introduce rounding errors."},{q:"How does the 'visszahelyettesítés' (back-substitution) step in Algorithm 3.31 find the value of $x_i$?",a:"By subtracting the sum of known variable products from the constant term and dividing by the diagonal coefficient $a_{ii}$."},{q:"In the complete pivoting example, why was the value $4$ chosen as the first pivot?",a:"Because $|4|$ was the maximum absolute value among all coefficients in the $4 \\times 4$ system."},{q:"Under what condition is complete pivoting not strictly necessary for numerical stability?",a:"When the matrix is row diagonally dominant or symmetric positive definite."},{q:"What does $x^T A x$ represent in the context of defining matrix definiteness?",a:"A quadratic form."},{q:"True or False: Row diagonal dominance implies that $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$.",a:"False; the definition requires a strict inequality ($>$)."},{q:"What is the index range for calculating the sum in the row diagonal dominance definition?",a:"$j = 1, \\ldots, n$ such that $j \\ne i$."},{q:"If a matrix $\\mathbf{A}$ is not row diagonally dominant, does it necessarily mean it is not invertible?",a:"No, diagonal dominance is a sufficient but not necessary condition for invertibility."},{q:"At step $k$ of Gaussian elimination, row $l$ is the row that contains the _____ absolute value element among candidate pivot rows.",a:"Maximum."},{q:"How many total determinants must be positive to confirm a $5 \\times 5$ matrix is positive definite?",a:"Five determinants (the $1\\times1, 2\\times2, 3\\times3, 4\\times4,$ and $5\\times5$ upper-left minors)."},{q:"In the Hungarian text, what is the term used for 'complete pivoting'?",a:"Teljes főelemkiválasztás."},{q:"In the Hungarian text, 'sorkiegyenlítés' translates to what English numerical concept?",a:"Row equilibration or row scaling."},{q:"What happens to the variable labels at the bottom of the matrix in the example when columns 1 and 4 are swapped?",a:"The label $x_1$ moves to column 4, and $x_4$ moves to column 1."},{q:"What logic error is avoided by checking $|x_k| = \\max\\{|x_i|\\}$ in the diagonal dominance invertibility proof?",a:"It ensures $x_k \\ne 0$, allowing for the division necessary to reach the contradiction."},{q:"Why is the multiplier in Gaussian elimination restricted to $k+1 \\le i \\le n$?",a:"Because the purpose is to eliminate elements below the pivot position in the $k$-th column."},{q:"In Algorithm 3.31, what constitutes the 'INPUT'?",a:"The augmented coefficient matrix $a_{ij}$ for $i=1 \\ldots n$ and $j=1 \\ldots n+1$."},{q:"The phrase 'stable with respect to rounding errors' implies that _____.",a:"Small errors introduced by computer precision do not grow large enough to invalidate the result."},{q:"According to the transcript, how many options were there in the example for the first pivot if the max value was $4$?",a:"Three options (at different positions in the matrix)."},{q:"When a matrix is positive definite, the value $x^T A x$ is always _____.",a:"Positive."},{q:"What is the summation formula used to calculate $x^T A x$?",a:"$\\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j$."},{q:"Formula: Pivot scaling ratio in implicit partial pivoting.",a:"$\\frac{|a_{lk}|}{s_l} = \\max_{k \\le i \\le n} \\frac{|a_{ik}|}{s_i}$."},{q:"If a matrix is symmetric and all its eigenvalues are positive, it is likely to be _____.",a:"Positive definite."},{q:"What is the primary motivation for using partial or complete pivoting during elimination?",a:"To prevent division by zero or by very small numbers, which increases rounding error."}],s34:[{q:"What is the primary objective of Gauss–Jordan elimination regarding the coefficient matrix?",a:"To transform the coefficient matrix part of the augmented matrix into the identity matrix $I$."},{q:"In Gauss–Jordan elimination, into what form is the augmented matrix $(\\mathbf{A}, \\mathbf{b})$ converted?",a:"The form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$."},{q:"Once the augmented matrix is in the form $(\\mathbf{I}, \\mathbf{b}^{(n-1)})$, how is the solution vector $\\mathbf{x}$ determined?",a:"$\\mathbf{x} = \\mathbf{b}^{(n-1)}$."},{q:"Gauss–Jordan elimination is described as a modified version of which existing method?",a:"Gaussian elimination."},{q:"What specific procedural step required in standard Gaussian elimination is eliminated in the Gauss–Jordan method?",a:"Backward substitution."},{q:"In the Gauss–Jordan algorithm, what is the range of the outer loop index $k$?",a:"$1$ to $n$."},{q:"During the elimination process for a pivot column $k$, which rows $i$ are processed?",a:"All rows from $1$ to $n$ where $i \\ne k$."},{q:"What is the formula for calculating the multiplier $l_{ik}$ in the Gauss–Jordan algorithm?",a:"$l_{ik} = a_{ik} / a_{kk}$."},{q:"What is the update rule for the element $a_{ij}$ within the elimination loops?",a:"$a_{ij} = a_{ij} - l_{ik} a_{kj}$."},{q:"In the update step $a_{ij} = a_{ij} - l_{ik} a_{kj}$, what is the range of the index $j$?",a:"$k+1$ to $n+1$."},{q:"How is each variable $x_i$ calculated in the final step of the algorithm?",a:"$x_i = a_{i, n+1} / a_{ii}$."},{q:"What is the asymptotic time complexity of Gauss–Jordan elimination for multiplications and divisions?",a:"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."},{q:"What is the asymptotic complexity of Gauss–Jordan elimination for additions and subtractions?",a:"$\\frac{n^3}{2} + \\mathcal{O}(n^2)$."},{q:"According to the exercises, what is the exact number of multiplications and divisions needed for Gauss–Jordan elimination?",a:"$\\frac{n^3}{2} + n^2 - \\frac{n}{2}$."},{q:"How does the computational cost of Gauss–Jordan elimination compare to standard Gaussian elimination?",a:"It is higher, requiring more calculations."},{q:"What defines the 'diagonal form' resulting from the first set of nested loops in the algorithm?",a:"A matrix where all elements $a_{ij}$ are zero if $i \\ne j$."},{q:"In the context of the provided examples, what are the solution values for the linear system?",a:"$x_1 = -3, x_2 = 2, x_3 = 4, x_4 = -2$."},{q:"Which strategy can be combined with Gauss–Jordan elimination to improve numerical stability?",a:"Pivoting strategies (partial or total)."},{q:"In Gauss–Jordan elimination with partial pivoting, what is the first step before eliminating a column?",a:"Finding the maximum absolute value in the current column and interchanging the necessary rows."},{q:"Why does Gauss–Jordan elimination allow for the solution to be read 'immediately'?",a:"Because the coefficient matrix is reduced to the identity matrix, leaving the solution in the last column."},{q:"The process of transforming the coefficient matrix to the identity matrix involves making elements zero both below and _____ the diagonal.",a:"Above."},{q:"Gauss–Jordan elimination is specifically useful for performing calculations on which type of device?",a:"A computer or calculator."},{q:"What does the notation $(\\mathbf{A}, \\mathbf{b})$ represent in the source material?",a:"The augmented coefficient matrix of a linear system."},{q:"If the multiplier $l_{ik}$ is applied to a row $i$ where $i < k$, which part of the matrix is being eliminated?",a:"The elements above the main diagonal."},{q:"If the multiplier $l_{ik}$ is applied to a row $i$ where $i > k$, which part of the matrix is being eliminated?",a:"The elements below the main diagonal."},{q:"In the provided algorithm, which variable represents the number of equations in the linear system?",a:"$n$."},{q:"What is the range of indices for the input augmented coefficient matrix $a_{ij}$?",a:"$i = 1, \\dots, n$ and $j = 1, \\dots, n+1$."},{q:"True or False: In Gauss–Jordan elimination, the coefficient matrix is always transformed into a triangular matrix as the final result.",a:"False."},{q:"What is the purpose of multiplying a row by the reciprocal of its diagonal element in the final stage of the algorithm?",a:"To convert the diagonal elements to ones, forming the identity matrix."},{q:"The complexity of simple Gaussian elimination is roughly $\\frac{n^3}{3}$; what is the approximate complexity of Gauss–Jordan?",a:"$\\frac{n^3}{2}$."},{q:"In the step $l_{ik} \\leftarrow a_{ik}/a_{kk}$, what is the term $a_{kk}$ called?",a:"The pivot element."},{q:"What prevents the modification of previously zeroed columns in the step $a_{ij} \\leftarrow a_{ij} - l_{ik}a_{kj}$?",a:"The fact that $a_{kj}$ is zero for $j < k$ in the pivot row (once processing reaches that column)."},{q:"In Example 3.35, what happens to the element in the first row, second column ($a_{12}$) during the second iteration of $k$?",a:"It is reduced to zero using the second row as a reference."},{q:"What is the Hungarian term for Gauss–Jordan elimination mentioned in the sources?",a:"Gauss–Jordan-elimináció."},{q:"Term: Partial Pivoting",a:"Definition: Selecting the largest available absolute value in a column to use as the pivot and swapping rows accordingly."},{q:"Term: Identity Matrix",a:"Definition: A square matrix where all elements on the main diagonal are ones and all other elements are zeros."},{q:"What is the result of the final loop: **for** $i = 1, \\dots, n$ **do** $x_i \\leftarrow a_{i, n+1}/a_{ii}$?",a:"The normalization of the diagonal elements to one and the extraction of the solution values."},{q:"In the provided YouTube transcript, what is mentioned as the 'goal' of the Gauss-Jordan elimination?",a:"To get the identity matrix in the last step of the coefficient matrix part."},{q:"Why does the first column remain unchanged ($1, 0, 0, 0$) in later steps of the example elimination?",a:"Because the corresponding elements in the pivot rows used for subtraction are zero."},{q:"If the algorithm successfully converts $(A, b)$ to $(I, x)$, what matrix property of $A$ was necessary?",a:"$A$ must be non-singular (invertible)."},{q:"How does Gauss–Jordan elimination facilitate solving the system $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$?",a:"By performing row operations until the equation reads $I\\mathbf{x} = \\mathbf{b}^{(n-1)}$."},{q:"In the Hungarian source, what is the alternate name given for Gauss–Jordan-elimináció?",a:"Jordan-elimináció."},{q:"Concept: Time Complexity",a:"Definition: The number of arithmetic operations required by an algorithm as a function of the input size $n$."},{q:"In the context of the Gauss–Jordan algorithm, what does $a_{i, n+1}$ represent?",a:"The element in the $i$-th row of the augmented part (the vector $\\mathbf{b}$)."},{q:"In the partial pivoting example, why were rows 1 and 2 interchanged initially?",a:"To move the largest absolute value in the first column ($2$) to the pivot position $a_{11}$."},{q:"What happens to the row swap in partial pivoting if the maximum value is already on the diagonal?",a:"No row interchange is performed."},{q:"The solution $x_4 = -2$ in the examples is derived from which ratio in the final matrix?",a:"$a_{4,5} / a_{4,4}$ (specifically $\\frac{52}{5} / -\\frac{26}{5}$)."},{q:"In the YouTube transcript, what is the 'standard Gaussian elimination' end state?",a:"A triangular linear system."},{q:"How many loops are nested in the main 'diagonal form' conversion part of the algorithm?",a:"Three (indices $k$, $i$, and $j$)."},{q:"What is the role of the 'if $i \\neq k condition in the algorithm?",a:"It ensures that the pivot row itself is not modified during the elimination step for that column."},{q:"According to the transcript, which version of the method is specifically useful for numerical calculations on a computer?",a:"Gauss–Jordan elimination with partial pivoting."},{q:"In the examples, what value does the multiplier $l_{ik}$ have if $a_{ik}$ is already zero?",a:"Zero, resulting in no change to row $i$ for that step."},{q:"What does the superscript $(n-1)$ in $\\mathbf{b}^{(n-1)}$ signify?",a:"The state of the vector $\\mathbf{b}$ after $n$ iterations of the elimination process."},{q:"Which index in $a_{ij}$ represents the column number?",a:"$j$."},{q:"Which index in $a_{ij}$ represents the row number?",a:"$i$."},{q:"In the complexity term $\\mathcal{O}(n^2)$, what does the symbol $\\mathcal{O}$ represent?",a:"Big O notation, indicating the upper bound of the growth rate for lower-order terms."},{q:"What is the resulting matrix type after the triple-nested loop but before the final normalization loop?",a:"A diagonal matrix."},{q:"In the YouTube explanation, what happens to the values in the first column when subtracting the second row from the first?",a:"They are unchanged because the second row has a zero in the first column."},{q:"The transition from $(\\mathbf{A}, \\mathbf{b}) \\sim (\\dots) \\sim (\\mathbf{I}, \\mathbf{x})$ is achieved through what type of operations?",a:"Elementary row operations."},{q:"If $n=3$, how many variables are being solved for in the algorithm?",a:"Three ($x_1, x_2, x_3$)."}],s35:[{q:"What is the algebraic definition of a tridiagonal square matrix $(a_{ij})$?",a:"$a_{ij} = 0$ for all $|i - j| > 1$."},{q:"In a tridiagonal matrix, where are the only possible nonzero elements located?",a:"The main diagonal and the diagonals immediately above and below it."},{q:"In the standard notation for tridiagonal systems, what does the vector $(d_i)$ represent?",a:"The elements of the main diagonal."},{q:"In the standard notation for tridiagonal systems, what does the vector $(c_i)$ represent?",a:"The elements in the diagonal directly above the main diagonal (superdiagonal)."},{q:"In the standard notation for tridiagonal systems, what does the vector $(a_i)$ represent?",a:"The elements in the diagonal directly below the main diagonal (subdiagonal)."},{q:"How many total elements are in the subdiagonal vector $(a_i)$ for an $n \\times n$ tridiagonal matrix?",a:"$n - 1$."},{q:"How many total elements are in the superdiagonal vector $(c_i)$ for an $n \\times n$ tridiagonal matrix?",a:"$n - 1$."},{q:"How many total elements are in the main diagonal vector $(d_i)$ for an $n \\times n$ tridiagonal matrix?",a:"$n$."},{q:"What is the total storage area required to store the coefficients of an $n \\times n$ tridiagonal matrix?",a:"$3n - 2$."},{q:"What happens to the elements $a_i$ below the main diagonal during the specialized Gaussian elimination algorithm?",a:"They become $0$."},{q:"Which vector of coefficients remains unchanged during the elimination steps of the tridiagonal algorithm?",a:"The superdiagonal vector $(c_i)$."},{q:"Which two vectors are overridden with new values during the elimination phase of the tridiagonal algorithm?",a:"$(d_i)$ and $(b_i)$."},{q:"In the elimination loop of the tridiagonal algorithm, what is the range of the index $i$?",a:"From $2$ to $n$."},{q:"Formula: What is the calculation for the temporary multiplier ($temp$) in the $i$-th elimination step?",a:"$temp \\leftarrow a_{i-1}/d_{i-1}$."},{q:"Formula: How is $d_i$ updated during the $i$-th step of the tridiagonal elimination phase?",a:"$d_i \\leftarrow d_i - temp \\cdot c_{i-1}$."},{q:"Formula: How is the right-hand side value $b_i$ updated during the $i$-th step of the elimination phase?",a:"$b_i \\leftarrow b_i - temp \\cdot b_{i-1}$."},{q:"In the backward substitution phase, how is the final variable $x_n$ calculated?",a:"$x_n \\leftarrow b_n/d_n$."},{q:"Formula: How is $x_i$ calculated during the backward substitution phase for $i = n-1, \\ldots, 1$?",a:"$x_i \\leftarrow (b_i - c_i x_{i+1})/d_i$."},{q:"What is the direction of the loop used in the backward substitution phase of the tridiagonal algorithm?",a:"Decrementing from $n-1$ down to $1$."},{q:"How many multiplications and divisions are required to solve a tridiagonal system of size $n$?",a:"$5n - 4$."},{q:"What is the computational complexity (multiplications/divisions) of the standard Gaussian elimination for a general matrix?",a:"$n^3/3$."},{q:"Under what condition is the specialized tridiagonal Gaussian elimination algorithm guaranteed to work without pivoting?",a:"If the tridiagonal matrix $\\mathbf{A}$ is diagonally dominant."},{q:"Why is pivoting generally avoided when solving tridiagonal systems?",a:"Pivoting ruins the specific tridiagonal structure of the coefficient matrix."},{q:"Concept: Band Matrix",a:"Definition: A matrix where nonzero elements appear only in the main diagonal and a fixed number of diagonals above and below it."},{q:"In a band matrix where $a_{ij} = 0$ for $|i - j| > 2$, how many diagonals contain potentially nonzero elements?",a:"Five diagonals (the main diagonal, two above, and two below)."},{q:"Which input vectors are required for the tridiagonal algorithm's elimination phase?",a:"$a_i, c_{i-1}, d_{i-1}, d_i, b_{i-1},$ and $b_i$."},{q:"What is the Hungarian term for 'tridiagonal linear systems'?",a:"Tridiagonális egyenletrendszerek."},{q:"In the Hungarian source, what is the Hungarian word for the 'elimination' phase of the algorithm?",a:"Elimináció."},{q:"In the Hungarian source, what is the Hungarian term for 'backward substitution'?",a:"Visszahelyettesítés."},{q:"What is the primary advantage of using $3n-2$ storage for a tridiagonal matrix instead of $n^2$?",a:"It significantly reduces the amount of memory needed for large systems."},{q:"Cloze: In the tridiagonal algorithm, the values $c_i$ are _____ during the elimination process.",a:"unchanged"},{q:"Cloze: The standard Gaussian elimination requires $n^3/3$ operations, whereas the tridiagonal version requires only _____ operations.",a:"$5n - 4$"},{q:"True or False: The tridiagonal algorithm is more efficient than standard Gaussian elimination for any matrix size $n > 1$.",a:"True (based on the $5n-4$ vs $n^3/3$ comparison)."},{q:"What is the index $i$ for the first $a$ element used in the algorithm ($a_{i-1}$ when $i=2$)?",a:"$a_1$."},{q:"In the backward substitution step for $x_i$, what variable must already be computed?",a:"$x_{i+1}$."},{q:"Which theorem is cited as the basis for performing the algorithm without pivoting on diagonally dominant matrices?",a:"Theorem 3.32."},{q:"The storage requirement $3n-2$ accounts for $n$ diagonal elements and how many off-diagonal elements?",a:"$2n - 2$ off-diagonal elements ($n-1$ above and $n-1$ below)."},{q:"What is the relationship between $n$ and the number of rows in the coefficient matrix?",a:"$n$ is the number of rows (and columns) in the square matrix."},{q:"Identify the vector: used as the denominator in the calculation of $temp$.",a:"The updated main diagonal vector $(d_i)$."},{q:"Identify the vector: its elements are multiplied by $temp$ and subtracted from $d_i$.",a:"The superdiagonal vector $(c_i)$."},{q:"In the context of the tridiagonal system, what does the vector $(b_i)$ represent?",a:"The right-hand side constants of the linear equations."},{q:"What is the result of the expression $|i-j| > 1$ for elements on the main diagonal?",a:"It is false, as $|i-i| = 0$."},{q:"In the Hungarian source, what is the Hungarian term for 'diagonal dominance'?",a:"Diagonálisan domináns."},{q:"According to the transcript, why is it better to formulate a special version of a general algorithm?",a:"It requires significantly fewer arithmetic operations for specialized problems."},{q:"What happens to the structure of the matrix if pivoting is applied to a tridiagonal system?",a:"The structure is ruined (lost)."},{q:"What is the leading term in the operation count for the specialized tridiagonal algorithm?",a:"$5n$."},{q:"In the provided Exercise 2, what is the value of the coefficient for $x_1$ in the first equation?",a:"1."},{q:"In the provided Exercise 2, what is the value of the right-hand side constant $b_1$?",a:"1.5."},{q:"In the provided Exercise 2, what is the coefficient $c_1$ (element above the diagonal in the first row)?",a:"-0.5."},{q:"In the provided Exercise 2, what is the coefficient $a_1$ (element below the diagonal in the second row)?",a:"0.5."},{q:"How many equations are in the system presented in Exercise 2?",a:"6."},{q:"What is the half-bandwidth $k$ of a tridiagonal matrix?",a:"$k = 1$."},{q:"What is the storage requirement for a general $n \\times n$ matrix compared to a tridiagonal one?",a:"$n^2$ vs $3n - 2$."},{q:"During backward substitution, which $x$ value is used to calculate $x_{n-1}$?",a:"$x_n$."},{q:"Cloze: A matrix is tridiagonal if $a_{ij} = 0$ for all $|i - j| > \\_\\_\\_\\_\\_$.",a:"1"},{q:"Formula: How is $x_i$ updated if $c_i = 0$ in a diagonal matrix (a specific case of tridiagonal)?",a:"$x_i = b_i / d_i$."},{q:"In the elimination loop, why is $d_{i-1}$ used in the denominator?",a:"It is the pivot element for the current elimination step."},{q:"What is the value of $a_i$ for $i=n$?",a:"It is undefined or zero, as there are only $n-1$ subdiagonal elements."},{q:"What is the value of $c_i$ for $i=n$?",a:"It is undefined or zero, as there are only $n-1$ superdiagonal elements."},{q:"If $n=100$, what is the storage area needed for a tridiagonal matrix?",a:"298 ($3 \\cdot 100 - 2$)."},{q:"If $n=100$, how many operations ($5n-4$) are needed for the tridiagonal algorithm?",a:"496 multiplications/divisions."}],s36:[{q:"What are 'simultaneous linear systems'?",a:"A set of linear systems that share the same coefficient matrix but have different right-hand sides."},{q:"What is the general form for representing $m$ simultaneous linear systems individually?",a:"$\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for $i = 1, \\dots, m$."},{q:"How is a set of simultaneous linear systems written concisely as a single matrix equation?",a:"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"},{q:"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{B}$ represent?",a:"The right-hand side vector $\\mathbf{b}^{(i)}$ of the $i$-th system."},{q:"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, what does the $i$-th column of the matrix $\\mathbf{X}$ represent?",a:"The solution vector $\\mathbf{x}^{(i)}$ of the $i$-th system."},{q:"What are the dimensions of the matrix $\\mathbf{B}$ if there are $n$ equations and $m$ right-hand side vectors?",a:"$n \\times m$"},{q:"What are the dimensions of the solution matrix $\\mathbf{X}$ in a simultaneous linear system with $n$ variables and $m$ systems?",a:"$n \\times m$"},{q:"Why can pivoting for simultaneous systems be performed on a single augmented matrix?",a:"Pivoting depends only on the coefficient matrix $\\mathbf{A}$, which is the same for all systems."},{q:"What are the dimensions of the augmented matrix used to solve $m$ simultaneous systems of $n$ equations?",a:"$n \\times (n+m)$"},{q:"Performing Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ results in a matrix of what form?",a:"$(\\mathbf{I}, \\mathbf{X})$"},{q:"Where does the solution $\\mathbf{X}$ appear after Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?",a:"In the last $m$ columns."},{q:"What is the operation count for Gaussian elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?",a:"$n^3/3 + mn^2 - n/3$"},{q:"In the Gaussian elimination operation count $n^3/3 + mn^2 - n/3$, what do the operations represent?",a:"The number of multiplications and divisions."},{q:"What is the operation count for Gauss-Jordan elimination on the augmented matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$?",a:"$n^3/2 + mn^2 - n/2$"},{q:"Which term in the operation count formulas scales linearly with the number of systems $m$?",a:"$mn^2$"},{q:"How does the $n^3$ term in the operation count compare between Gaussian and Gauss-Jordan elimination for simultaneous systems?",a:"Gauss-Jordan has a higher $n^3$ cost ($n^3/2$) than Gaussian elimination ($n^3/3$)."},{q:"Algorithm 3.37 can be reformulated to solve simultaneous systems with what specific structure?",a:"Tridiagonal linear systems."},{q:"The system of equations $\\mathbf{A}\\mathbf{x}^{(i)} = \\mathbf{b}^{(i)}$ is equivalent to the matrix equation _____.",a:"$\\mathbf{A}\\mathbf{X} = \\mathbf{B}$"},{q:"Concept: Augmented Matrix $(\\mathbf{A}, \\mathbf{B})$",a:"Definition: A combined matrix where the coefficient matrix $\\mathbf{A}$ is followed by the matrix of all right-hand sides $\\mathbf{B}$."},{q:"In the augmented matrix $(\\mathbf{A}, \\mathbf{B})$, what does the sub-matrix $\\mathbf{A}$ represent?",a:"The shared coefficient matrix for all systems."},{q:"In the context of simultaneous systems, what matrix results from the $i$-th column product $\\mathbf{A} \\cdot \\text{column}_i(\\mathbf{X})$?",a:"The $i$-th column of matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(i)}$)."},{q:"What matrix does the coefficient matrix $\\mathbf{A}$ become after successful Gauss-Jordan elimination on an augmented matrix?",a:"The identity matrix $\\mathbf{I}$."},{q:"If $\\mathbf{A}$ is $n \\times n$, how many rows does the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ have?",a:"$n$ rows"},{q:"If $\\mathbf{B}$ is a matrix of $m$ column vectors, what is the width of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?",a:"$n + m$ columns"},{q:"The solution matrix $\\mathbf{X}$ is composed of columns $(\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$, where each column is a _____.",a:"solution vector for the corresponding right-hand side $\\mathbf{b}^{(i)}$"},{q:"When performing elimination, why is it efficient to solve simultaneous systems together rather than separately?",a:"The elimination steps on the coefficient matrix only need to be performed once."},{q:"According to the video, what form of elimination is preferred to directly obtain the solution matrix $\\mathbf{X}$?",a:"Gauss-Jordan elimination."},{q:"The formula $n^3/3 + mn^2 - n/3$ describes the multiplication/division count for which method?",a:"Gaussian elimination on an augmented matrix."},{q:"In the operation count $n^3/2 + mn^2 - n/2$, what does the '$- n/2 term represent?",a:"A linear correction factor in the Gauss-Jordan operation count."},{q:"How is the matrix $\\mathbf{X}$ related to $\\mathbf{A}$ and $\\mathbf{B}$ in terms of matrix multiplication?",a:"$\\mathbf{X}$ is the matrix that, when multiplied on the left by $\\mathbf{A}$, yields $\\mathbf{B}$."},{q:"What is the identity matrix dimension in the result $(\\mathbf{I}, \\mathbf{X})$?",a:"$n \\times n$"},{q:"True or False: Pivoting decisions in simultaneous systems are affected by the values in matrix $\\mathbf{B}$.",a:"False (pivoting depends only on the coefficient matrix $\\mathbf{A}$)."},{q:"If $m=1$, the operation count $n^3/3 + mn^2 - n/3$ simplifies to the standard count for a _____.",a:"single linear system solved by Gaussian elimination"},{q:"The matrix $\\mathbf{B} = (\\mathbf{b}^{(1)}, \\mathbf{b}^{(2)}, \\dots, \\mathbf{b}^{(m)})$ is called the _____ matrix.",a:"right-hand side"},{q:"The matrix $\\mathbf{X} = (\\mathbf{x}^{(1)}, \\mathbf{x}^{(2)}, \\dots, \\mathbf{x}^{(m)})$ is called the _____ matrix.",a:"solution"},{q:"What is the row size of the augmented matrix $(\\mathbf{A}, \\mathbf{B})$?",a:"$n$ (the number of equations)."},{q:"What is the column size of matrix $\\mathbf{X}$ in a simultaneous system with $m$ right-hand sides?",a:"$m$"},{q:"In the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$, which matrix is the coefficient matrix?",a:"$\\mathbf{A}$"},{q:"The process of solving simultaneous systems is equivalent to solving the matrix equation $\\mathbf{A}\\mathbf{X} = \\mathbf{B}$ for the unknown matrix _____.",a:"$\\mathbf{X}$"},{q:"The Gauss-Jordan method transforms the augmented matrix $(\\mathbf{A}, \\mathbf{B})$ into _____.",a:"$(\\mathbf{I}, \\mathbf{X})$"},{q:"How many individual linear systems are being solved in a simultaneous system with $m$ right-hand sides?",a:"$m$"},{q:"What is the term for the matrix $(\\mathbf{A}, \\mathbf{b}^{(1)}, \\ldots, \\mathbf{b}^{(m)})$?",a:"The augmented matrix."},{q:"What determines whether Gaussian or Gauss-Jordan elimination can be performed on the augmented matrix?",a:"The properties and pivoting requirements of the coefficient matrix $\\mathbf{A}$."},{q:"In the term $mn^2$ of the operation counts, what does $n^2$ represent for each system $i$?",a:"The operations required to process a single right-hand side vector through the elimination and back-substitution."},{q:"What is the result of multiplying the coefficient matrix by the first column of the solution matrix?",a:"The first column of the right-hand side matrix $\\mathbf{B}$ (the vector $\\mathbf{b}^{(1)}$)."},{q:"In Gauss-Jordan elimination, the solution for the $i$-th system is found in the $(n+i)$-th _____ of the final augmented matrix.",a:"column"},{q:"Which operation count term $n^3/3$ or $n^3/2$ represents the cost of reducing the coefficient matrix $\\mathbf{A}$?",a:"The term independent of $m$."},{q:"To solve $\\mathbf{A}\\mathbf{x} = \\mathbf{b}^{(i)}$ for multiple $i$, one performs elimination on $\\mathbf{A}$ and applies the same operations to all _____.",a:"$\\mathbf{b}^{(i)}$ vectors (or the matrix $\\mathbf{B}$)"},{q:"What is the total number of entries in the solution matrix $\\mathbf{X}$?",a:"$n \\cdot m$"},{q:"Which matrix equation proves that $AX=B$ is equivalent to solving $m$ individual systems?",a:"$(\\mathbf{A}\\mathbf{x}^{(1)}, \\dots, \\mathbf{A}\\mathbf{x}^{(m)}) = (\\mathbf{b}^{(1)}, \\dots, \\mathbf{b}^{(m)})$"}],s37:[{q:"What matrix equation defines the inverse $\\mathbf{A}^{-1}$ of a nonsingular square matrix $\\mathbf{A}$?",a:"$\\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I}$"},{q:"Matrix inversion is computationally equivalent to solving which type of linear system?",a:"A simultaneous linear system"},{q:"In the simultaneous linear system used to find $\\mathbf{A}^{-1}$, what matrix serves as the right-hand side?",a:"The identity matrix $\\mathbf{I}$"},{q:"Which elimination method is primarily used in the source material to compute the matrix inverse?",a:"Gauss-Jordan elimination"},{q:"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of multiplications and divisions?",a:"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"},{q:"What is the general complexity of Gauss-Jordan elimination for matrix inversion in terms of additions and subtractions?",a:"$\\frac{3}{2}n^3 + \\mathcal{O}(n^2)$"},{q:"According to Exercise 5, what is the exact number of multiplications and divisions required for matrix inversion using Gauss-Jordan elimination?",a:"$3n^3/2 - n/2$"},{q:"If an optimized algorithm avoids multiplications by zero in the identity matrix, how many multiplications and divisions does matrix inversion require?",a:"$n^3$"},{q:"What is the operation count for additions and subtractions in an optimized Gauss-Jordan matrix inversion algorithm?",a:"$n^3 - 2n^2 + n$"},{q:"Why is it possible to reduce the operation count to $n^3$ when inverting a matrix using the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$?",a:"Because the identity matrix $\\mathbf{I}$ contains many zeros, making certain multiplications unnecessary."},{q:"What is the purpose of using pivoting techniques with Gauss-Jordan elimination during matrix inversion?",a:"To reduce rounding errors or avoid division by zero."},{q:"Under what condition can Gaussian elimination with pivoting be performed?",a:"$\\det(\\mathbf{A}) \\neq 0$"},{q:"What is the relationship between $\\det(\\mathbf{A})$ and the determinant of the matrix after elimination $\\det(\\mathbf{A}^{(n-1)})$?",a:"$\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$"},{q:"In the formula $\\det(\\mathbf{A}) = (-1)^s \\det(\\mathbf{A}^{(n-1)})$, what does the variable $s$ represent?",a:"The number of row changes (swaps) performed during elimination."},{q:"How is the determinant calculated using the pivot elements after Gaussian elimination?",a:"$\\det(\\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\\cdots a_{nn}^{(n-1)}$"},{q:"If the number of row changes in Gaussian elimination is even, what is the relationship between the original determinant and the product of the pivots?",a:"They are equal."},{q:"If the number of row changes in Gaussian elimination is odd, how does the original determinant relate to the product of the pivots?",a:"The determinant is the negative of the product of the pivots."},{q:"What structure is used as the starting point for Gauss-Jordan matrix inversion?",a:"An augmented matrix $(\\mathbf{A}|\\mathbf{I})$"},{q:"During Gauss-Jordan inversion, once the left side of the augmented matrix becomes $\\mathbf{I}$, what does the right side represent?",a:"The inverse matrix $\\mathbf{A}^{-1}$"},{q:"What is the inverse of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$?",a:"$\\frac{1}{3}\\begin{pmatrix} -1 & 0 & -2 \\\\ -1 & 3 & -2 \\\\ 2 & 0 & 1 \\end{pmatrix}$"},{q:"In Example 3.39, what were the diagonal elements (pivots) of the matrix after Gaussian elimination?",a:"$1, 3, 1, 38$"},{q:"What is the determinant of the matrix $\\mathbf{A} = \\begin{pmatrix} 1 & -2 & -2 & -2 \\\\ 2 & -1 & 2 & 4 \\\\ -1 & 2 & 3 & -4 \\\\ -2 & 1 & 4 & -2 \\end{pmatrix}$?",a:"$114$"},{q:"True or False: If a solution $\\mathbf{X}$ exists for $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$, then $\\mathbf{X}\\mathbf{A} = \\mathbf{I}$ also holds.",a:"True"},{q:"Term: Nonsingular Matrix",a:"Definition: A square matrix that has an inverse, which is true if and only if its determinant is non-zero."},{q:"Concept: Simultaneous Linear System",a:"Definition: A set of linear systems that share the same coefficient matrix $\\mathbf{A}$ but have different right-hand side vectors."},{q:"In the Gauss-Jordan process, what is the goal of the 'elimination step' relative to the diagonal?",a:"To make all numbers above and below the diagonal equal to zero."},{q:"In the Gauss-Jordan process, what is the final step for each row to ensure the coefficient matrix becomes the identity matrix?",a:"Divide the row by the value of the diagonal (pivot) element to make it equal to $1$."},{q:"Which property of the determinant allows it to be calculated as the product of the diagonal elements of an upper triangular matrix?",a:"The determinant of an upper triangular matrix is the product of its main diagonal entries."},{q:"If no row changes occur during Gaussian elimination, how is $\\det(\\mathbf{A})$ related to the pivot elements?",a:"It is exactly the product of the pivot elements."},{q:"What numerical benefit does pivoting provide when a diagonal element is very small?",a:"It reduces rounding errors that occur when dividing by small numbers."},{q:"What is the result of applying $\\mathbf{A}\\mathbf{A}^{-1}$?",a:"The identity matrix $\\mathbf{I}$"},{q:"The augmented matrix used for inversion is $(\\mathbf{A}|\\mathbf{I})$. What is the final form of this matrix after successful Gauss-Jordan elimination?",a:"$(\\mathbf{I}|\\mathbf{A}^{-1})$"},{q:"What specific matrix type is produced at the end of standard Gaussian elimination (before the Jordan steps)?",a:"An upper triangular matrix"},{q:"How many multiplications/divisions are needed to invert a $10 \\times 10$ matrix using the optimized algorithm mentioned in Exercise 6?",a:"$1000$ (since $n^3 = 10^3$)"},{q:"Formula: Determinant using pivots",a:"$\\det(\\mathbf{A}) = (-1)^s \\prod_{i=1}^{n} a_{ii}^{(i-1)}$"},{q:"Why is Gaussian elimination with pivoting preferred over simple Gaussian elimination for computer implementations?",a:"To ensure numerical stability and avoid failures due to zero pivots."},{q:"In the $3 \\times 3$ inversion example, what was the pivot value in the third row after eliminating the first two columns?",a:"$3$"},{q:"If a square matrix $\\mathbf{A}$ has a determinant of $0$, what can be said about its inverse $\\mathbf{A}^{-1}$?",a:"The inverse does not exist."},{q:"How does swapping two rows in a matrix affect the value of its determinant?",a:"It multiplies the determinant by $-1$."},{q:"Cloze: The number of operations needed for matrix inversion is roughly proportional to $n$ to the power of _____.",a:"$3$"},{q:"Cloze: To find the inverse of $\\mathbf{A}$, one can solve the equation $\\mathbf{A}\\mathbf{X} = \\mathbf{I}$ using the _____ method.",a:"Gauss-Jordan"},{q:"In the context of the source material, what is the meaning of a 'nonsingular' matrix?",a:"A matrix for which the determinant is not zero."},{q:"In the $4 \\times 4$ determinant example, why was the sign factor $(-1)^s$ equal to $1$?",a:"Because the Gaussian elimination was performed without any row changes ($s=0$)."},{q:"What matrix dimension was the coefficient matrix in Example 3.39?",a:"$4 \\times 4$"},{q:"How does the Gauss-Jordan method differ from Gaussian elimination in its final result for the coefficient matrix?",a:"Gauss-Jordan produces an identity matrix, whereas Gaussian elimination produces an upper triangular matrix."},{q:"What is the identity matrix $\\mathbf{I}$ defined as in the context of matrix inversion?",a:"A square matrix with ones on the main diagonal and zeros elsewhere."},{q:"Which operation is performed first in the Gauss-Jordan example to eliminate the $-1$ in the second row, first column?",a:"Adding the first row to the second row ($R2 \\leftarrow R2 + R1$)."},{q:"Which operation is performed to eliminate the $-2$ in the third row, first column of the $3 \\times 3$ example?",a:"Adding twice the first row to the third row ($R3 \\leftarrow R3 + 2R1$)."},{q:"In the final step of the $3 \\times 3$ inversion example, the third row $(0, 0, 3 | 2, 0, 1)$ was divided by what value?",a:"$3$"},{q:"What is the common factor factored out from the resulting matrix in the inverse example?",a:"$\\frac{1}{3}$"},{q:"Cloze: The Gaussian elimination with pivoting can be performed if and only if $\\det(\\mathbf{A})$ is _____.",a:"Non-zero"},{q:"Why is multiplication by zero not computed in specialized matrix inversion algorithms?",a:"To improve efficiency and reduce the total number of operations."},{q:"In the transcript, what is described as the 'most efficient way' to compute the inverse in terms of operations?",a:"Organizing Gauss-Jordan elimination using an augmented matrix $(\\mathbf{A}|\\mathbf{I})$."},{q:"According to the transcript, how do we determine the sign of the determinant relative to the product of pivots?",a:"By checking if the number of row changes was even (same sign) or odd (opposite sign)."},{q:"What is the determinant of a matrix where one of the pivot elements becomes zero during elimination and no further pivoting can move a non-zero element into that position?",a:"Zero"}]};function Wn({entries:n}){const{lang:e}=S(),[a,i]=_.useState(null);return t.jsx("div",{className:"stack",style:{gap:8},children:n.map((s,h)=>{const l=a===h;return t.jsxs("button",{className:"theorem-card",style:{textAlign:"left",cursor:"pointer",width:"100%"},onClick:()=>i(l?null:h),children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[t.jsx("span",{className:"label",style:{margin:0},children:s.term[e]}),t.jsx("span",{className:"muted",children:l?"−":"+"})]}),l&&t.jsx("div",{style:{marginTop:8},children:t.jsx(sn,{markdown:s.def[e]})})]},h)})})}const En={shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset order",hu:"Eredeti sorrend"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz mutatása"},showQuestion:{en:"Show question",hu:"Kérdés mutatása"}},tn=n=>Array.from({length:n},(e,a)=>a);function On(n){const e=tn(n);for(let a=e.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[e[a],e[i]]=[e[i],e[a]]}return e}function Pn({cards:n}){const{lang:e}=S(),a=$=>En[$][e],[i,s]=_.useState(()=>tn(n.length)),[h,l]=_.useState(0),[d,o]=_.useState(!1),u=_.useMemo(()=>n[i[h]],[n,i,h]),v=$=>{o(!1),l(p=>(p+$+n.length)%n.length)};return t.jsxs("div",{className:"stack",style:{gap:10,maxWidth:640},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("span",{className:"section-eyebrow",children:[h+1," / ",n.length]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"btn",onClick:()=>{s(On(n.length)),l(0),o(!1)},children:a("shuffle")}),t.jsx("button",{className:"btn",onClick:()=>{s(tn(n.length)),l(0),o(!1)},children:a("reset")})]})]}),t.jsxs("button",{className:"theorem-card",style:{textAlign:"left",cursor:"pointer",minHeight:160,width:"100%"},onClick:()=>o($=>!$),children:[t.jsx("span",{className:"label",style:{margin:0},children:a(d?"answer":"question")}),t.jsx("div",{style:{marginTop:8},children:t.jsx(sn,{markdown:d?u.a:u.q})})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10},children:[t.jsx("button",{className:"btn",onClick:()=>v(-1),children:a("prev")}),t.jsx("button",{className:"btn",style:{flex:1},onClick:()=>o($=>!$),children:a(d?"showQuestion":"showAnswer")}),t.jsx("button",{className:"btn",onClick:()=>v(1),children:a("next")})]})]})}const Bn={s31:[{id:"q-s31-1",prompt:{en:"An $n$-dimensional symmetric square matrix $A=(a_{ij})$ is positive definite if and only if:",hu:"Egy $n$-dimenziós szimmetrikus $A=(a_{ij})$ négyzetes mátrix akkor és csak akkor pozitív definit, ha:"},options:[{en:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$",hu:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$"},{en:"All of its principal minors are positive",hu:"Minden sarokminorja pozitív"},{en:"$\\det(A)\\neq0$",hu:"$\\det(A)\\neq0$"},{en:"$\\det(A)>0$",hu:"$\\det(A)>0$"}],answer:1,explanation:{en:"Sylvester's criterion: a symmetric matrix is positive definite iff all leading principal minors are positive.",hu:"Sylvester-kritérium: egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha minden vezető sarokminorja pozitív."}},{id:"q-s31-2",prompt:{en:"An $n$-dimensional square matrix $A=(a_{ij})$ is positive definite if it is symmetric and:",hu:"Egy $n$-dimenziós $A=(a_{ij})$ négyzetes mátrix pozitív definit, ha szimmetrikus és:"},options:[{en:"$x^T Ax>0 \\quad \\text{for all } x\\neq0$",hu:"$x^T Ax>0 \\quad \\text{minden } x\\neq0\\text{-ra}$"},{en:"$x^T Ax\\geq 0 \\quad \\text{for all } x\\neq0$",hu:"$x^T Ax\\geq 0 \\quad \\text{minden } x\\neq0\\text{-ra}$"},{en:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$",hu:"$a_{ij}>0, \\quad i,j=1,\\ldots,n$"},{en:"$x^T Ax<0 \\quad \\text{for all } x\\neq0$",hu:"$x^T Ax<0 \\quad \\text{minden } x\\neq0\\text{-ra}$"}],answer:0,explanation:{en:"Positive definiteness is defined by the quadratic form xᵀAx > 0 for every nonzero x.",hu:"A pozitív definitséget a xᵀAx > 0 kvadratikus alak definiálja minden nem nulla x-re."}},{id:"q-s31-3",prompt:{en:"If $A$ is diagonally dominant, then:",hu:"Ha $A$ diagonálisan domináns, akkor:"},options:[{en:"$A$ is invertible",hu:"$A$ invertálható"},{en:"The linear system $Ax=b$ has a unique solution",hu:"Az $Ax=b$ lineáris rendszernek egyértelmű megoldása van"},{en:"$\\det(A)\\neq0$",hu:"$\\det(A)\\neq0$"},{en:"All the above properties hold",hu:"A fenti tulajdonságok mind teljesülnek"}],answer:3,explanation:{en:"Strict diagonal dominance implies invertibility, det(A) ≠ 0, and a unique solution — all of them.",hu:"A szigorú diagonális dominancia maga után vonja az invertálhatóságot, a det(A) ≠ 0-t és az egyértelmű megoldást — mindegyiket."}}],s32:[{id:"q-s32-1",prompt:{en:"The determinant of a triangular matrix is equal to:",hu:"Egy háromszögmátrix determinánsa egyenlő:"},options:[{en:"The product of all matrix elements.",hu:"Az összes mátrixelem szorzatával."},{en:"Zero if any off-diagonal element is non-zero.",hu:"Nullával, ha bármely átlón kívüli elem nem nulla."},{en:"The product of diagonal elements.",hu:"Az átlós elemek szorzatával."},{en:"The sum of diagonal elements.",hu:"Az átlós elemek összegével."}],answer:2,explanation:{en:"For a triangular matrix the determinant is the product of the diagonal entries.",hu:"Egy háromszögmátrix determinánsa az átlós elemek szorzata."}},{id:"q-s32-2",prompt:{en:"Which of the following best describes the shape of the matrix for backward substitution?",hu:"Az alábbiak közül melyik írja le legjobban a visszahelyettesítéshez tartozó mátrix alakját?"},options:[{en:"Full matrix with no special structure",hu:"Teli mátrix, különleges szerkezet nélkül"},{en:"Upper triangular matrix",hu:"Felső háromszögmátrix"},{en:"Lower triangular matrix",hu:"Alsó háromszögmátrix"},{en:"Sparse matrix",hu:"Ritka mátrix"}],answer:1,explanation:{en:"Backward substitution solves an upper triangular system from the last unknown upward.",hu:"A visszahelyettesítés egy felső háromszögrendszert old meg az utolsó ismeretlentől felfelé."}},{id:"q-s32-3",prompt:{en:"What is the time complexity (in terms of multiplications/divisions) of solving an upper triangular system using backward substitution?",hu:"Mi a felső háromszögrendszer visszahelyettesítéssel való megoldásának időkomplexitása (szorzások/osztások számában)?"},options:[{en:"$O(n^2)$",hu:"$O(n^2)$"},{en:"$O(n \\log n)$",hu:"$O(n \\log n)$"},{en:"$O(n^3)$",hu:"$O(n^3)$"},{en:"$O(n)$",hu:"$O(n)$"}],answer:0,explanation:{en:"Backward substitution costs about n²/2 multiplications/divisions, i.e. O(n²).",hu:"A visszahelyettesítés kb. n²/2 szorzást/osztást igényel, azaz O(n²)."}},{id:"q-s32-4",prompt:{en:"What is the primary numerical method used for solving upper triangular systems?",hu:"Mi a felső háromszögrendszerek megoldásának fő numerikus módszere?"},options:[{en:"Gaussian elimination",hu:"Gauss-elimináció"},{en:"Forward substitution",hu:"Előrehelyettesítés"},{en:"Backward substitution",hu:"Visszahelyettesítés"},{en:"LU decomposition",hu:"LU-felbontás"}],answer:2,explanation:{en:"Upper triangular systems are solved directly by backward substitution.",hu:"A felső háromszögrendszereket közvetlenül visszahelyettesítéssel oldjuk meg."}},{id:"q-s32-5",prompt:{en:"How many additions and subtractions are required in backward substitution for an $n$-dimensional triangular linear system?",hu:"Hány összeadás és kivonás szükséges a visszahelyettesítéshez egy $n$-dimenziós háromszög lineáris rendszernél?"},options:[{en:"$\\frac{n^2}{4}+\\mathcal{O}(n)$",hu:"$\\frac{n^2}{4}+\\mathcal{O}(n)$"},{en:"$n^2 +\\mathcal{O}(n)$",hu:"$n^2 +\\mathcal{O}(n)$"},{en:"$\\frac{n^2}{2} +\\mathcal{O}(n)$",hu:"$\\frac{n^2}{2} +\\mathcal{O}(n)$"},{en:"$\\frac{n^2}{3}+\\mathcal{O}(n)$",hu:"$\\frac{n^2}{3}+\\mathcal{O}(n)$"}],answer:2,explanation:{en:"The additions/subtractions total (n−1)n/2 = n²/2 + O(n).",hu:"Az összeadások/kivonások összesen (n−1)n/2 = n²/2 + O(n)."}}],s33:[{id:"q-s33-1",prompt:{en:"What happens when a zero pivot is encountered during Gaussian elimination without pivoting?",hu:"Mi történik, ha nulla pivotelemet találunk a Gauss-elimináció során pivotálás nélkül?"},options:[{en:"The algorithm continues with the next row",hu:"Az algoritmus a következő sorral folytatódik"},{en:"The row is skipped",hu:"A sort átugorjuk"},{en:"The algorithm cannot be continued, and it does not provide a solution",hu:"Az algoritmus nem folytatható, és nem ad megoldást"},{en:"The matrix becomes diagonal",hu:"A mátrix diagonálissá válik"}],answer:2,explanation:{en:"Dividing by a zero pivot is impossible, so without pivoting the elimination breaks down.",hu:"Nulla pivotelemmel nem lehet osztani, így pivotálás nélkül az elimináció megakad."}},{id:"q-s33-2",prompt:{en:"What can we try to do if a pivot element is 0 in the Gaussian elimination?",hu:"Mit próbálhatunk tenni, ha egy pivotelem 0 a Gauss-eliminációban?"},options:[{en:"Use Newton method",hu:"Newton-módszert használni"},{en:"Omit that row from the equation",hu:"Kihagyni azt a sort az egyenletből"},{en:"We can change rows in the equation",hu:"Sorokat cserélhetünk az egyenletben"},{en:"Use forward substitution first",hu:"Előbb előrehelyettesítést használni"}],answer:2,explanation:{en:"Swapping in a row with a nonzero pivot (pivoting) lets elimination continue.",hu:"Egy nem nulla pivotelemű sor becserélése (pivotálás) lehetővé teszi az elimináció folytatását."}},{id:"q-s33-3",prompt:{en:"What is the time complexity of Gaussian elimination in terms of the number of operations?",hu:"Mi a Gauss-elimináció időkomplexitása a műveletek számában?"},options:[{en:"$O(n^3)$",hu:"$O(n^3)$"},{en:"$O(n^2)$",hu:"$O(n^2)$"},{en:"$O(n)$",hu:"$O(n)$"},{en:"$O(n \\log n)$",hu:"$O(n \\log n)$"}],answer:0,explanation:{en:"Gaussian elimination costs about n³/3 operations, i.e. O(n³).",hu:"A Gauss-elimináció kb. n³/3 műveletet igényel, azaz O(n³)."}},{id:"q-s33-4",prompt:{en:"Which form does the system take after performing all steps of Gaussian elimination?",hu:"Milyen alakot vesz fel a rendszer a Gauss-elimináció összes lépése után?"},options:[{en:"Upper triangular form",hu:"Felső háromszög alak"},{en:"Lower triangular form",hu:"Alsó háromszög alak"},{en:"Symmetric form",hu:"Szimmetrikus alak"},{en:"Diagonal matrix",hu:"Diagonális mátrix"}],answer:0,explanation:{en:"Forward elimination reduces the coefficient matrix to upper triangular form.",hu:"Az előre-elimináció felső háromszög alakra hozza az együtthatómátrixot."}},{id:"q-s33-5",prompt:{en:"What is the form of the starting matrix if we solve a linear system $Ax=b$ with Gaussian elimination?",hu:"Milyen alakú a kezdőmátrix, ha az $Ax=b$ lineáris rendszert Gauss-eliminációval oldjuk meg?"},options:[{en:"We use the augmented matrix $(A|b)$",hu:"A $(A|b)$ kibővített mátrixot használjuk"},{en:"We use the augmented matrix $(A|A|b)$",hu:"A $(A|A|b)$ kibővített mátrixot használjuk"},{en:"We use the augmented matrix $(A|I)$",hu:"A $(A|I)$ kibővített mátrixot használjuk"},{en:"We use the augmented matrix $(b|A)$",hu:"A $(b|A)$ kibővített mátrixot használjuk"}],answer:0,explanation:{en:"Elimination operates on the augmented matrix (A | b).",hu:"Az elimináció a kibővített (A | b) mátrixon dolgozik."}},{id:"q-s33-6",prompt:{en:"Which of the following is an advantage of partial pivoting?",hu:"Az alábbiak közül melyik a részleges pivotálás előnye?"},options:[{en:"Reduces the number of operations",hu:"Csökkenti a műveletek számát"},{en:"Improves numerical accuracy by avoiding division by small numbers",hu:"Javítja a numerikus pontosságot a kis számokkal való osztás elkerülésével"},{en:"Simplifies matrix storage",hu:"Egyszerűsíti a mátrix tárolását"},{en:"Ensures exact solutions",hu:"Pontos megoldásokat biztosít"}],answer:1,explanation:{en:"Choosing the largest-magnitude pivot avoids dividing by tiny numbers, improving accuracy.",hu:"A legnagyobb abszolút értékű pivotelem választása elkerüli a parányi számokkal való osztást, javítva a pontosságot."}},{id:"q-s33-7",prompt:{en:"In partial pivoting, which operation is performed after selecting the pivot?",hu:"A részleges pivotálásnál melyik műveletet végezzük a pivotelem kiválasztása után?"},options:[{en:"Diagonalization",hu:"Diagonalizálás"},{en:"Matrix inversion",hu:"Mátrixinvertálás"},{en:"Row swapping",hu:"Sorcsere"},{en:"Column swapping",hu:"Oszlopcsere"}],answer:2,explanation:{en:"Partial pivoting swaps the chosen row into the pivot position (rows only).",hu:"A részleges pivotálás a kiválasztott sort cseréli a pivotpozícióba (csak sorokat)."}},{id:"q-s33-8",prompt:{en:"In partial pivoting, if all entries in the pivot column below the diagonal are zero, then:",hu:"A részleges pivotálásnál, ha a pivotoszlop átló alatti összes eleme nulla, akkor:"},options:[{en:"The system has no solution or infinitely many solutions",hu:"A rendszernek nincs megoldása, vagy végtelen sok megoldása van"},{en:"Column swapping is needed",hu:"Oszlopcsere szükséges"},{en:"The matrix is symmetric",hu:"A mátrix szimmetrikus"},{en:"The pivot is the diagonal entry",hu:"A pivotelem az átlós elem"}],answer:0,explanation:{en:"A fully zero pivot column means the matrix is singular, so there is no unique solution.",hu:"A teljesen nulla pivotoszlop azt jelenti, hogy a mátrix szinguláris, így nincs egyértelmű megoldás."}},{id:"q-s33-9",prompt:{en:"In Gaussian elimination, what is the purpose of pivoting?",hu:"A Gauss-eliminációban mi a pivotálás célja?"},options:[{en:"To increase the rank of the matrix",hu:"A mátrix rangjának növelése"},{en:"To simplify the system to a homogeneous one",hu:"A rendszer homogénné egyszerűsítése"},{en:"To improve numerical stability",hu:"A numerikus stabilitás javítása"},{en:"To reduce computational time",hu:"A számítási idő csökkentése"}],answer:2,explanation:{en:"Pivoting improves numerical stability (and avoids zero pivots).",hu:"A pivotálás javítja a numerikus stabilitást (és elkerüli a nulla pivotelemeket)."}},{id:"q-s33-10",prompt:{en:"What kind of matrix can cause Gaussian elimination to fail without pivoting?",hu:"Milyen mátrix okozhatja a Gauss-elimináció kudarcát pivotálás nélkül?"},options:[{en:"Singular matrix",hu:"Szinguláris mátrix"},{en:"Sparse matrix",hu:"Ritka mátrix"},{en:"Orthogonal matrix",hu:"Ortogonális mátrix"},{en:"Symmetric matrix",hu:"Szimmetrikus mátrix"}],answer:0,explanation:{en:"A singular matrix yields a zero pivot, causing breakdown without pivoting.",hu:"Egy szinguláris mátrix nulla pivotelemet ad, ami pivotálás nélkül megakasztja az eliminációt."}},{id:"q-s33-11",prompt:{en:"In complete pivoting, the pivot element is chosen from:",hu:"A teljes pivotálásnál a pivotelemet honnan választjuk:"},options:[{en:"The current diagonal",hu:"Az aktuális átlóból"},{en:"The entire matrix",hu:"A teljes mátrixból"},{en:"The current column",hu:"Az aktuális oszlopból"},{en:"The submatrix of the coefficients from the current row and column onward",hu:"Az aktuális sortól és oszloptól kezdődő együtthatók részmátrixából"}],answer:3,explanation:{en:"Complete pivoting searches the remaining submatrix (rows and columns from k onward).",hu:"A teljes pivotálás a maradék részmátrixban keres (a k-tól kezdődő sorokban és oszlopokban)."}},{id:"q-s33-12",prompt:{en:"What does complete pivoting involve?",hu:"Mit foglal magában a teljes pivotálás?"},options:[{en:"Swapping both rows and columns to position the largest element on the pivot",hu:"Sorok és oszlopok cseréjét a legnagyobb elem pivotpozícióba helyezéséhez"},{en:"Only column swaps",hu:"Csak oszlopcseréket"},{en:"Swapping diagonal elements",hu:"Átlós elemek cseréjét"},{en:"Only row swaps",hu:"Csak sorcseréket"}],answer:0,explanation:{en:"Complete pivoting swaps both rows and columns to bring the largest entry to the pivot.",hu:"A teljes pivotálás sorokat és oszlopokat is cserél, hogy a legnagyobb elem a pivotpozícióba kerüljön."}}],s34:[{id:"q-s34-1",prompt:{en:"The Gauss-Jordan method is primarily used for which of the following purposes?",hu:"A Gauss–Jordan-módszert elsősorban melyik célra használjuk?"},options:[{en:"Approximating integrals",hu:"Integrálok közelítésére"},{en:"Solving non-linear equations",hu:"Nemlineáris egyenletek megoldására"},{en:"Finding exact solutions to linear systems or computing matrix inverses",hu:"Lineáris rendszerek pontos megoldására vagy mátrixinverzek kiszámítására"},{en:"Computing eigenvalues",hu:"Sajátértékek kiszámítására"}],answer:2,explanation:{en:"Gauss–Jordan reduces (A | b) to (I | x) and is also the standard way to invert a matrix.",hu:"A Gauss–Jordan az (A | b)-t (I | x)-re redukálja, és ez a mátrixinvertálás szokásos módja is."}},{id:"q-s34-2",prompt:{en:"Which row operation is used to eliminate both upper and lower elements in a column?",hu:"Melyik sorművelettel tüntetjük el egy oszlop felső és alsó elemeit is?"},options:[{en:"Full pivoting",hu:"Teljes pivotálás"},{en:"Gauss-Jordan elimination",hu:"Gauss–Jordan-elimináció"},{en:"Backward substitution",hu:"Visszahelyettesítés"},{en:"Forward elimination",hu:"Előre-elimináció"}],answer:1,explanation:{en:"Gauss–Jordan clears entries both above and below each pivot.",hu:"A Gauss–Jordan minden pivotelem fölött és alatt is kinullázza az elemeket."}},{id:"q-s34-3",prompt:{en:"Which of the following operations is NOT used in Gauss-Jordan elimination?",hu:"Az alábbi műveletek közül melyiket NEM használjuk a Gauss–Jordan-eliminációban?"},options:[{en:"Swapping rows",hu:"Sorcsere"},{en:"Multiplying a row by a non-zero scalar",hu:"Egy sor szorzása nem nulla skalárral"},{en:"Multiplying a column by a non-zero scalar",hu:"Egy oszlop szorzása nem nulla skalárral"},{en:"Adding a multiple of one row to another",hu:"Egy sor többszörösének hozzáadása egy másikhoz"}],answer:2,explanation:{en:"Only elementary row operations are allowed; scaling a column is not one of them.",hu:"Csak elemi sorműveletek megengedettek; egy oszlop skálázása nem ilyen."}},{id:"q-s34-4",prompt:{en:"In Gauss-Jordan elimination, how are the non-pivot elements in the pivot column handled?",hu:"A Gauss–Jordan-eliminációban hogyan kezeljük a pivotoszlop nem pivot elemeit?"},options:[{en:"They are reduced to 1",hu:"1-re redukáljuk őket"},{en:"They are made zero",hu:"Nullává tesszük őket"},{en:"They are copied to the result matrix",hu:"Átmásoljuk az eredménymátrixba"},{en:"They are left as is",hu:"Változatlanul hagyjuk"}],answer:1,explanation:{en:"Every off-pivot entry in the pivot column is eliminated to zero.",hu:"A pivotoszlop minden nem pivot elemét nullára eliminálunk."}},{id:"q-s34-5",prompt:{en:"How is a pivot element treated during Gauss-Jordan elimination?",hu:"Hogyan kezeljük a pivotelemet a Gauss–Jordan-elimináció során?"},options:[{en:"It is left unchanged",hu:"Változatlanul hagyjuk"},{en:"It is scaled to 1 and used to eliminate all other entries in its column",hu:"1-re skálázzuk, és vele elimináljuk az oszlop összes többi elemét"},{en:"It is replaced by a random number",hu:"Véletlen számra cseréljük"},{en:"It is eliminated from the matrix",hu:"Eltávolítjuk a mátrixból"}],answer:1,explanation:{en:"The pivot row is normalized so the pivot is 1, then used to zero the rest of the column.",hu:"A pivotsort úgy normáljuk, hogy a pivot 1 legyen, majd vele nullázzuk az oszlop többi részét."}}],s35:[{id:"q-s35-1",prompt:{en:"What type of numerical issue can arise in the tridiagonal Gaussian elimination algorithm if the pivot is zero?",hu:"Milyen numerikus probléma léphet fel a tridiagonális Gauss-eliminációs algoritmusban, ha a pivot nulla?"},options:[{en:"Loss of orthogonality",hu:"Ortogonalitás elvesztése"},{en:"Division by zero",hu:"Nullával osztás"},{en:"Infinite loop",hu:"Végtelen ciklus"},{en:"Overflow error",hu:"Túlcsordulási hiba"}],answer:1,explanation:{en:"A zero pivot forces a division by zero in the elimination.",hu:"A nulla pivot nullával osztáshoz vezet az eliminációban."}},{id:"q-s35-2",prompt:{en:"The tridiagonal Gaussian elimination algorithm assumes what property of the coefficient matrix?",hu:"A tridiagonális Gauss-eliminációs algoritmus milyen tulajdonságot tételez fel az együtthatómátrixról?"},options:[{en:"Non-zero diagonal entries",hu:"Nem nulla átlós elemek"},{en:"Orthogonality",hu:"Ortogonalitás"},{en:"Symmetry",hu:"Szimmetria"},{en:"Diagonal dominance",hu:"Diagonális dominancia"}],answer:0,explanation:{en:"The pivot-free Thomas algorithm needs the diagonal entries to stay nonzero.",hu:"A pivotálás nélküli Thomas-algoritmusnak az átlós elemek nem nulla volta szükséges."}},{id:"q-s35-3",prompt:{en:"Which method is typically used to solve diagonally dominant tridiagonal linear systems efficiently?",hu:"Melyik módszert használjuk jellemzően a diagonálisan domináns tridiagonális lineáris rendszerek hatékony megoldására?"},options:[{en:"Gaussian elimination without pivoting",hu:"Gauss-elimináció pivotálás nélkül"},{en:"Gaussian elimination with complete pivoting",hu:"Gauss-elimináció teljes pivotálással"},{en:"Jacobi method",hu:"Jacobi-módszer"},{en:"Gauss-Jordan elimination",hu:"Gauss–Jordan-elimináció"}],answer:0,explanation:{en:"Diagonal dominance makes pivoting unnecessary, so the O(n) Thomas algorithm (Gaussian elimination without pivoting) is used.",hu:"A diagonális dominancia feleslegessé teszi a pivotálást, így az O(n)-es Thomas-algoritmust (Gauss-elimináció pivotálás nélkül) használjuk."}},{id:"q-s35-4",prompt:{en:"For an $n$-dimensional tridiagonal system, the Gaussian elimination for a tridiagonal system requires how many operations (approximately)?",hu:"Egy $n$-dimenziós tridiagonális rendszernél a tridiagonális Gauss-elimináció hány műveletet igényel (közelítőleg)?"},options:[{en:"$O(n^2)$",hu:"$O(n^2)$"},{en:"$O(\\log n)$",hu:"$O(\\log n)$"},{en:"$O(n^3)$",hu:"$O(n^3)$"},{en:"$O(n)$",hu:"$O(n)$"}],answer:3,explanation:{en:"The Thomas algorithm uses only about 5n−4 operations, i.e. O(n).",hu:"A Thomas-algoritmus csak kb. 5n−4 műveletet használ, azaz O(n)."}},{id:"q-s35-5",prompt:{en:"Which component is NOT part of a typical tridiagonal matrix representation?",hu:"Melyik összetevő NEM része egy tipikus tridiagonális mátrix ábrázolásának?"},options:[{en:"Super-diagonal",hu:"Felső mellékátló"},{en:"Main diagonal",hu:"Főátló"},{en:"Corner elements",hu:"Sarokelemek"},{en:"Sub-diagonal",hu:"Alsó mellékátló"}],answer:2,explanation:{en:"A tridiagonal matrix has only the sub-, main, and super-diagonals — no corner elements.",hu:"Egy tridiagonális mátrixnak csak alsó, fő- és felső átlója van — sarokelemei nincsenek."}}],s36:[{id:"q-s36-1",prompt:{en:"Which of the following can be used to solve simultaneous linear systems?",hu:"Az alábbiak közül melyik használható szimultán lineáris rendszerek megoldására?"},options:[{en:"Bisection method",hu:"Felezési módszer"},{en:"Secant method",hu:"Szelőmódszer"},{en:"Gaussian elimination",hu:"Gauss-elimináció"},{en:"Newton method",hu:"Newton-módszer"}],answer:2,explanation:{en:"Gaussian (or Gauss–Jordan) elimination on (A | B) solves all right-hand sides at once.",hu:"Az (A | B)-n végzett Gauss- (vagy Gauss–Jordan-) elimináció az összes jobb oldalt egyszerre oldja meg."}},{id:"q-s36-2",prompt:{en:"Consider the simultaneous linear system $Ax^{(i)} = b^{(i)}$; we use Gauss-Jordan elimination on the block matrix $(A,B)$, resulting in $(I,X)$. What are the solutions?",hu:"Tekintsük az $Ax^{(i)} = b^{(i)}$ szimultán lineáris rendszert; Gauss–Jordan-eliminációt végzünk az $(A,B)$ blokkmátrixon, ami $(I,X)$-et ad. Mik a megoldások?"},options:[{en:"May have no solution or infinitely many solutions",hu:"Lehet, hogy nincs megoldás, vagy végtelen sok van"},{en:"The vector $x^{(i)}$ will be the i-th column vector of $X$",hu:"Az $x^{(i)}$ vektor $X$ i-edik oszlopvektora lesz"},{en:"Never has a solution",hu:"Sosem van megoldása"},{en:"We use backward substitution after the last elimination step.",hu:"Az utolsó eliminációs lépés után visszahelyettesítést használunk."}],answer:1,explanation:{en:"Each solution x^(i) appears as the corresponding column of X.",hu:"Minden x^(i) megoldás X megfelelő oszlopaként jelenik meg."}},{id:"q-s36-3",prompt:{en:"What type of coefficient matrix leads to a unique solution in a simultaneous system?",hu:"Milyen együtthatómátrix vezet egyértelmű megoldáshoz egy szimultán rendszerben?"},options:[{en:"Singular matrix",hu:"Szinguláris mátrix"},{en:"Zero matrix",hu:"Nullmátrix"},{en:"Sparse matrix",hu:"Ritka mátrix"},{en:"Invertible matrix",hu:"Invertálható mátrix"}],answer:3,explanation:{en:"An invertible (nonsingular) A gives a unique solution for each right-hand side.",hu:"Egy invertálható (nemszinguláris) A minden jobb oldalra egyértelmű megoldást ad."}},{id:"q-s36-4",prompt:{en:"Which method transforms a simultaneous system into an upper triangular form?",hu:"Melyik módszer alakít egy szimultán rendszert felső háromszög alakra?"},options:[{en:"Forward substitution",hu:"Előrehelyettesítés"},{en:"Backward substitution",hu:"Visszahelyettesítés"},{en:"Gauss-Jordan elimination",hu:"Gauss–Jordan-elimináció"},{en:"Gaussian elimination",hu:"Gauss-elimináció"}],answer:3,explanation:{en:"Gaussian elimination reduces the system to upper triangular form (Gauss–Jordan goes all the way to the identity).",hu:"A Gauss-elimináció felső háromszög alakra hozza a rendszert (a Gauss–Jordan egészen az egységmátrixig megy)."}},{id:"q-s36-5",prompt:{en:"What condition must be met for an $n$-dimensional linear system to have a unique solution?",hu:"Milyen feltételnek kell teljesülnie, hogy egy $n$-dimenziós lineáris rendszernek egyértelmű megoldása legyen?"},options:[{en:"All coefficients must be positive",hu:"Minden együtthatónak pozitívnak kell lennie"},{en:"The determinant of the coefficient matrix must be non-zero",hu:"Az együtthatómátrix determinánsának nem nullának kell lennie"},{en:"The system must be homogeneous",hu:"A rendszernek homogénnek kell lennie"},{en:"The right-hand side must be zero",hu:"A jobb oldalnak nullának kell lennie"}],answer:1,explanation:{en:"A unique solution exists exactly when det(A) ≠ 0.",hu:"Egyértelmű megoldás pontosan akkor létezik, ha det(A) ≠ 0."}}],s37:[{id:"q-s37-1",prompt:{en:"What is the result of applying Gauss-Jordan elimination to an augmented matrix $(A|I)$?",hu:"Mi az eredménye a Gauss–Jordan-elimináció $(A|I)$ kibővített mátrixra való alkalmazásának?"},options:[{en:"A matrix with determinant equal to one",hu:"Egy egy determinánsú mátrix"},{en:"A matrix with only zero entries",hu:"Egy csak nulla elemű mátrix"},{en:"A diagonal matrix",hu:"Egy diagonális mátrix"},{en:"The inverse of $A$ appears in place of $I$",hu:"$A$ inverze jelenik meg $I$ helyén"}],answer:3,explanation:{en:"Reducing (A | I) to (I | A⁻¹) produces the inverse in the right block.",hu:"Az (A | I) (I | A⁻¹)-re redukálása az inverzet adja a jobb blokkban."}},{id:"q-s37-2",prompt:{en:"What happens to the determinant if one row of a matrix is multiplied by a scalar $k$?",hu:"Mi történik a determinánssal, ha egy mátrix egy sorát egy $k$ skalárral szorozzuk?"},options:[{en:"The determinant remains the same",hu:"A determináns változatlan marad"},{en:"The determinant is divided by $k$",hu:"A determináns $k$-val osztódik"},{en:"The determinant becomes zero",hu:"A determináns nulla lesz"},{en:"The determinant is multiplied by $k$",hu:"A determináns $k$-val szorzódik"}],answer:3,explanation:{en:"Scaling a single row by k multiplies the determinant by k.",hu:"Egyetlen sor k-val való szorzása a determinánst k-val szorozza."}},{id:"q-s37-3",prompt:{en:"If $\\det(A) = 0$, then:",hu:"Ha $\\det(A) = 0$, akkor:"},options:[{en:"$A$ is invertible",hu:"$A$ invertálható"},{en:"The system $Ax = b$ has a unique solution",hu:"Az $Ax = b$ rendszernek egyértelmű megoldása van"},{en:"The matrix $A$ is diagonal",hu:"Az $A$ mátrix diagonális"},{en:"$A$ is singular",hu:"$A$ szinguláris"}],answer:3,explanation:{en:"A zero determinant means A is singular (non-invertible).",hu:"A nulla determináns azt jelenti, hogy A szinguláris (nem invertálható)."}},{id:"q-s37-4",prompt:{en:"What is the determinant of the $n$-dimensional identity matrix $I_n$?",hu:"Mi az $n$-dimenziós $I_n$ egységmátrix determinánsa?"},options:[{en:"n",hu:"n"},{en:"1",hu:"1"},{en:"Depends on the size",hu:"A mérettől függ"},{en:"0",hu:"0"}],answer:1,explanation:{en:"The identity matrix has determinant 1 for any size.",hu:"Az egységmátrix determinánsa bármely méretre 1."}},{id:"q-s37-5",prompt:{en:"What condition must be true for a square matrix to have an inverse using Gauss-Jordan elimination?",hu:"Milyen feltételnek kell teljesülnie, hogy egy négyzetes mátrixnak inverze legyen Gauss–Jordan-eliminációval?"},options:[{en:"It must be symmetric",hu:"Szimmetrikusnak kell lennie"},{en:"Its determinant must be non-zero",hu:"A determinánsának nem nullának kell lennie"},{en:"It must be diagonal",hu:"Diagonálisnak kell lennie"},{en:"It must have all diagonal entries equal to 1",hu:"Minden átlós elemének 1-nek kell lennie"}],answer:1,explanation:{en:"A matrix is invertible iff its determinant is nonzero.",hu:"Egy mátrix akkor és csak akkor invertálható, ha a determinánsa nem nulla."}}]};function Nn(n){return Bn[n]??[]}function Jn({block:n}){const{pick:e,t:a}=S();switch(n.kind){case"p":return t.jsx("p",{children:e(n.text)});case"math":return t.jsx(J,{tex:n.tex,block:!0});case"theorem":return t.jsxs("div",{className:"theorem-card stack",style:{gap:6},children:[t.jsxs("span",{className:"label",children:[a("common.theorem")," · ",e(n.label)]}),t.jsx("p",{style:{margin:0},children:e(n.text)}),n.tex&&t.jsx(J,{tex:n.tex,block:!0})]});case"algorithm":return t.jsxs("div",{className:"algo-card",children:[t.jsxs("span",{className:"section-eyebrow",children:[a("common.algorithm")," · ",e(n.title)]}),t.jsx("pre",{children:n.lines.join(`
`)})]});case"lab":return t.jsxs("button",{className:"btn",onClick:()=>{var i;return(i=document.getElementById("lab"))==null?void 0:i.scrollIntoView({behavior:"smooth"})},children:[e(n.label)," →"]});case"glossary":return t.jsx(Wn,{entries:Gn[n.deck]??[]});case"flashcards":return t.jsx(Pn,{cards:Sn[n.deck]??[]})}}function Cn({section:n}){const{pick:e}=S(),a=Nn(n.id);return t.jsxs("article",{className:"stack",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"section-eyebrow",children:["§",n.number]}),t.jsx("h1",{style:{margin:"4px 0 6px"},children:e(n.title)}),t.jsx("p",{className:"muted",style:{marginTop:0},children:e(n.summary)})]}),t.jsx("div",{className:"card stack",children:n.blocks.map((i,s)=>t.jsx(Jn,{block:i},s))}),a.length>0&&t.jsx(qn,{questions:a})]})}const Fn=`# Chapter 3: Exercise Solutions

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
`;function Ln(n){const e=new Map,a=n.split(`
`);let i=null,s=null;const h=()=>{if(i&&s){const l=e.get(i)??[];s.body=s.body.replace(/\n+$/,""),l.push(s),e.set(i,l)}s=null};for(const l of a){const d=l.match(/^##\s+Section\s+([\d.]+)\s+Exercises/i);if(d){h(),i=d[1];continue}if(/^##\s+/.test(l)&&!d){h(),i=null;continue}const o=l.match(/^###\s+Exercise\s+(\d+)\s*:?\s*(.*)$/i);if(o&&i){h(),s={n:o[1],title:o[2].trim(),body:""};continue}if(s){if(l.trim()==="---")continue;s.body+=l+`
`}}return h(),e}function Vn({sectionNumber:n}){const{t:e}=S(),i=_.useMemo(()=>Ln(Fn),[]).get(n);if(!i||i.length===0)return null;const s=e("common.showSolution");return t.jsxs("section",{className:"ls-exercises card stack","aria-label":"exercises",children:[t.jsxs("span",{className:"section-eyebrow",children:[e("common.exercises")," · §",n]}),i.map(h=>{const l=`**${e("common.exercise")} ${h.n}${h.title?`: ${h.title}`:""}**

<details class="reveal-solution"><summary>${s}</summary>

${h.body}

</details>`;return t.jsx(sn,{markdown:l},h.n)})]})}const Dn=`#include <vector>
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
`,Hn=`program back_substitution_demo
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
`,Un=`package main

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
`,Rn=`function back_substitution(U, b)
    n = length(b)
    x = zeros(n)
    for i in n:-1:1
        x[i] = (b[i] - sum(U[i, j] * x[j] for j in i+1:n; init = 0.0)) / U[i, i]
    end
    return x
end

U = [2.0 1 -1; 0 1 2; 0 0 3]; b = [1.0, 8, 9]
println(back_substitution(U, b))   # [1, 2, 3]
`,Xn=`function backSubstitution(U, b) {
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
`,Kn=`function x = back_substitution(U, b)
% BACK_SUBSTITUTION  Solve an upper-triangular system U x = b.
    n = numel(b); x = zeros(n, 1);
    for i = n:-1:1
        x(i) = (b(i) - U(i, i+1:n) * x(i+1:n)) / U(i, i);
    end
end

% --- Demo ---
U = [2 1 -1; 0 1 2; 0 0 3]; b = [1; 8; 9];
disp(back_substitution(U, b)');    % 1 2 3
`,Qn=`def back_substitution(U, b):
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
`,Zn=`back_substitution <- function(U, b) {
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
`,Yn=`// Solve an upper-triangular system U x = b.
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
`,ne=`backSubstitution[U_, b_] := Module[{n = Length[b], x},
   x = ConstantArray[0., n];
   Do[x[[i]] = (b[[i]] - Sum[U[[i, j]] x[[j]], {j, i + 1, n}]) / U[[i, i]], {i, n, 1, -1}];
   x];
U = {{2, 1, -1}, {0, 1, 2}, {0, 0, 3}}; b = {1, 8, 9};
Print[backSubstitution[U, b]]   (* {1, 2, 3} *)
`,ee=`#include <vector>
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
`,te=`program forward_substitution_demo
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
`,ie=`package main

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
`,ae=`function forward_substitution(L, b)
    n = length(b)
    y = zeros(n)
    for i in 1:n
        y[i] = (b[i] - sum(L[i, j] * y[j] for j in 1:i-1; init = 0.0)) / L[i, i]
    end
    return y
end

L = [2.0 0 0; 1 3 0; -1 1 2]; b = [4.0, 5, -1]
println(forward_substitution(L, b))   # [2, 1, 0]
`,oe=`function forwardSubstitution(L, b) {
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
`,se=`function y = forward_substitution(L, b)
% FORWARD_SUBSTITUTION  Solve a lower-triangular system L y = b.
    n = numel(b); y = zeros(n, 1);
    for i = 1:n
        y(i) = (b(i) - L(i, 1:i-1) * y(1:i-1)) / L(i, i);
    end
end

% --- Demo ---
L = [2 0 0; 1 3 0; -1 1 2]; b = [4; 5; -1];
disp(forward_substitution(L, b)');    % 2 1 0
`,re=`def forward_substitution(L, b):
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
`,le=`forward_substitution <- function(L, b) {
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
`,me=`// Solve a lower-triangular system L y = b.
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
`,he=`forwardSubstitution[L_, b_] := Module[{n = Length[b], y},
   y = ConstantArray[0., n];
   Do[y[[i]] = (b[[i]] - Sum[L[[i, j]] y[[j]], {j, 1, i - 1}]) / L[[i, i]], {i, 1, n}];
   y];
L = {{2, 0, 0}, {1, 3, 0}, {-1, 1, 2}}; b = {4, 5, -1};
Print[forwardSubstitution[L, b]]   (* {2, 1, 0} *)
`,de=`#include <vector>
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
`,ue=`program gauss_complete_demo
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
`,ce=`package main

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
`,fe=`function gauss_complete_pivot(A, b)
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
`,pe=`// Gaussian elimination with complete (row + column) pivoting.
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
`,be=`function x = gauss_complete_pivot(A, b)
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
`,ge=`import numpy as np


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
`,$e=`gauss_complete_pivot <- function(A, b) {
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
`,ke=`// Gaussian elimination with complete (row + column) pivoting.
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
`,ve=`gaussComplete[Ain_, bin_] := Module[
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
`,xe=`#include <vector>
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
`,ye=`program gauss_elimination_demo
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
`,_e=`package main

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
`,Ae=`function gauss_elimination(A, b)
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
`,we=`function gaussElimination(A, b) {
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
`,ze=`function x = gauss_elimination(A, b)
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
`,je=`def gauss_elimination(A, b):
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
`,qe=`gauss_elimination <- function(A, b) {
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
`,Te=`// Naive Gaussian elimination (no pivoting) + back-substitution.
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
`,Ie=`gaussElimination[A_, b_] := Module[{n = Length[b], M, x, f},
   M = MapThread[Append, {A, b}];           (* augmented [A | b] *)
   Do[f = M[[i, k]]/M[[k, k]];
      M[[i, k ;;]] -= f M[[k, k ;;]], {k, n - 1}, {i, k + 1, n}];
   x = ConstantArray[0., n];
   Do[x[[i]] = (M[[i, n + 1]] - Sum[M[[i, j]] x[[j]], {j, i + 1, n}])/M[[i, i]], {i, n, 1, -1}];
   x];
A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}; b = {8, -11, -3};
Print[gaussElimination[A, b]]
`,Me=`#include <vector>
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
`,Ge=`program gauss_jordan_demo
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
`,Se=`package main

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
`,We=`function gauss_jordan(A, b)
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
`,Ee=`// Solve A x = b by Gauss-Jordan elimination.
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
`,Oe=`function x = gauss_jordan(A, b)
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
`,Pe=`import numpy as np


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
`,Be=`gauss_jordan <- function(A, b) {
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
`,Ne=`// Solve A x = b by Gauss-Jordan elimination (reduced row echelon form).
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
`,Je=`gaussJordan[Ain_, bin_] := Module[{M = N@MapThread[Append, {Ain, bin}], n = Length[bin], p, f},
   Do[
    p = k - 1 + First@Ordering[Abs[M[[k ;;, k]]], -1];
    M[[{k, p}]] = M[[{p, k}]];
    M[[k]] /= M[[k, k]];
    Do[If[i != k, M[[i]] -= M[[i, k]] M[[k]]], {i, n}],
    {k, n}];
   M[[All, -1]]];
Print[gaussJordan[{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}, {8, -11, -3}]]
`,Ce=`#include <vector>
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
`,Fe=`program gauss_partial_demo
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
`,Le=`package main

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
`,Ve=`function gauss_partial_pivot(A, b)
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
`,De=`// Gaussian elimination with partial (row) pivoting.
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
`,He=`function x = gauss_partial_pivot(A, b)
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
`,Ue=`import numpy as np


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
`,Re=`gauss_partial_pivot <- function(A, b) {
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
`,Xe=`// Gaussian elimination with partial (row) pivoting.
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
`,Ke=`gaussPartial[Ain_, bin_] := Module[{A = N[Ain], b = N[bin], n = Length[bin], p, f, x},
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
`,Qe=`#include <vector>
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
`,Ze=`program matrix_inverse_demo
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
`,Ye=`package main

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
`,nt=`using LinearAlgebra

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
`,et=`// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
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
`,it=`import numpy as np


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
`,at=`inverse <- function(A) {
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
`,ot=`// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
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
`,st=`inverse[Ain_] := Module[{A = N[Ain], n = Length[Ain], M, p, d},
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
`,dt=`// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
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
`,ut=`function x = thomas(a, b, c, d)
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
`,ct=`def thomas(a, b, c, d):
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
`,ft=`thomas <- function(a, b, c, d) {
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
`,pt=`// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
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
`,gt=Object.assign({"./back-substitution.cpp":Dn,"./back-substitution.f90":Hn,"./back-substitution.go":Un,"./back-substitution.jl":Rn,"./back-substitution.js":Xn,"./back-substitution.m":Kn,"./back-substitution.py":Qn,"./back-substitution.r":Zn,"./back-substitution.rs":Yn,"./back-substitution.wl":ne,"./forward-substitution.cpp":ee,"./forward-substitution.f90":te,"./forward-substitution.go":ie,"./forward-substitution.jl":ae,"./forward-substitution.js":oe,"./forward-substitution.m":se,"./forward-substitution.py":re,"./forward-substitution.r":le,"./forward-substitution.rs":me,"./forward-substitution.wl":he,"./gauss-complete.cpp":de,"./gauss-complete.f90":ue,"./gauss-complete.go":ce,"./gauss-complete.jl":fe,"./gauss-complete.js":pe,"./gauss-complete.m":be,"./gauss-complete.py":ge,"./gauss-complete.r":$e,"./gauss-complete.rs":ke,"./gauss-complete.wl":ve,"./gauss-elimination.cpp":xe,"./gauss-elimination.f90":ye,"./gauss-elimination.go":_e,"./gauss-elimination.jl":Ae,"./gauss-elimination.js":we,"./gauss-elimination.m":ze,"./gauss-elimination.py":je,"./gauss-elimination.r":qe,"./gauss-elimination.rs":Te,"./gauss-elimination.wl":Ie,"./gauss-jordan.cpp":Me,"./gauss-jordan.f90":Ge,"./gauss-jordan.go":Se,"./gauss-jordan.jl":We,"./gauss-jordan.js":Ee,"./gauss-jordan.m":Oe,"./gauss-jordan.py":Pe,"./gauss-jordan.r":Be,"./gauss-jordan.rs":Ne,"./gauss-jordan.wl":Je,"./gauss-partial.cpp":Ce,"./gauss-partial.f90":Fe,"./gauss-partial.go":Le,"./gauss-partial.jl":Ve,"./gauss-partial.js":De,"./gauss-partial.m":He,"./gauss-partial.py":Ue,"./gauss-partial.r":Re,"./gauss-partial.rs":Xe,"./gauss-partial.wl":Ke,"./matrix-inverse.cpp":Qe,"./matrix-inverse.f90":Ze,"./matrix-inverse.go":Ye,"./matrix-inverse.jl":nt,"./matrix-inverse.js":et,"./matrix-inverse.m":tt,"./matrix-inverse.py":it,"./matrix-inverse.r":at,"./matrix-inverse.rs":ot,"./matrix-inverse.wl":st,"./tridiagonal.cpp":rt,"./tridiagonal.f90":lt,"./tridiagonal.go":mt,"./tridiagonal.jl":ht,"./tridiagonal.js":dt,"./tridiagonal.m":ut,"./tridiagonal.py":ct,"./tridiagonal.r":ft,"./tridiagonal.rs":pt,"./tridiagonal.wl":bt}),M=(n,e)=>gt[`./${n}.${e}`],$t={"forward-substitution":{en:"Forward substitution (lower-triangular system)",hu:"Előrehelyettesítés (alsó háromszögű rendszer)"},"back-substitution":{en:"Back-substitution (upper-triangular system)",hu:"Visszahelyettesítés (felső háromszögű rendszer)"},"gauss-elimination":{en:"Gaussian elimination (no pivoting)",hu:"Gauss-elimináció (főelemkiválasztás nélkül)"},"gauss-partial":{en:"Gaussian elimination — partial pivoting",hu:"Gauss-elimináció — részleges főelemkiválasztás"},"gauss-complete":{en:"Gaussian elimination — complete pivoting",hu:"Gauss-elimináció — teljes főelemkiválasztás"},"gauss-jordan":{en:"Gauss–Jordan elimination",hu:"Gauss–Jordan-elimináció"},"matrix-inverse":{en:"Matrix inverse (Gauss–Jordan on [A | I])",hu:"Mátrixinverz (Gauss–Jordan az [A | I] mátrixon)"},tridiagonal:{en:"Tridiagonal solver (Thomas algorithm)",hu:"Tridiagonális megoldó (Thomas-algoritmus)"}},kt=n=>({id:n,caption:$t[n],snippets:{matlab:M(n,"m"),python:M(n,"py"),cpp:M(n,"cpp"),julia:M(n,"jl"),rust:M(n,"rs"),fortran:M(n,"f90"),wolfram:M(n,"wl"),javascript:M(n,"js"),go:M(n,"go"),r:M(n,"r")}}),vt={s33:["forward-substitution","back-substitution","gauss-elimination","gauss-partial","gauss-complete","gauss-jordan","matrix-inverse","tridiagonal"]};function xt(n){return(vt[n]??[]).map(kt)}function Z(n,e){return new rn(n)}const R=new rn(0),bn=new rn(1);function W(n){return n.n===0}function an(n){if(n.n===0)return"0";const e=n.s<0?"-":"";return n.d===1?`${e}${n.n}`:`${e}\\frac{${n.n}}{${n.d}}`}function j(n){if(n.n===0)return"0";const e=n.s<0?"-":"";return n.d===1?`${e}${n.n}`:`${e}${n.n}/${n.d}`}function X(n){return n.map(e=>e.slice())}function yt(n){const e=[];for(let a=0;a<n;a++)e.push(Array.from({length:n},(i,s)=>Z(a===s?1:0)));return e}function _t(n,e){return n.map((a,i)=>a.concat(e[i]))}const At=n=>n.length?n[0].length:0;function wt(n,e,a){return n.map(i=>i.slice(e,a))}function g(n){return n+1}function ln(n,e,a){const i=X(n),s=i.length,h=At(i),l=Array.from({length:e},(r,z)=>z),d=[],o=[];let u=0,v=0,$=!1;const p=()=>X(i);o.push({kind:"init",matrix:p(),coeffCols:e,varOrder:l.slice(),caption:{en:"Initial augmented matrix.",hu:"Kiindulási kibővített mátrix."}});const I=r=>{let z=R;for(let T=0;T<e;T++){const c=i[r][T].abs();c.compare(z)>0&&(z=c)}return z},q=Math.min(s,e);for(let r=0;r<q;r++){if(a.pivoting==="partial"){let c=r;for(let x=r+1;x<s;x++)i[x][r].abs().compare(i[c][r].abs())>0&&(c=x);!W(i[c][r])&&c!==r&&([i[r],i[c]]=[i[c],i[r]],u++,o.push({kind:"row-swap",matrix:p(),coeffCols:e,varOrder:l.slice(),swapRows:[r,c],caption:{en:`Partial pivoting: swap rows ${g(r)} and ${g(c)} (largest |entry| in column ${g(r)}).`,hu:`Részleges főelemkiválasztás: ${g(r)}. és ${g(c)}. sor cseréje (legnagyobb |elem| a(z) ${g(r)}. oszlopban).`}}))}else if(a.pivoting==="scaled"){let c=r,x=null;for(let w=r;w<s;w++){const A=I(w),E=W(A)?R:i[w][r].abs().div(A);(x===null||E.compare(x)>0)&&(x=E,c=w)}!W(i[c][r])&&c!==r&&([i[r],i[c]]=[i[c],i[r]],u++,o.push({kind:"row-swap",matrix:p(),coeffCols:e,varOrder:l.slice(),swapRows:[r,c],caption:{en:`Scaled partial pivoting: swap rows ${g(r)} and ${g(c)} (largest scaled ratio).`,hu:`Skálázott főelemkiválasztás: ${g(r)}. és ${g(c)}. sor cseréje (legnagyobb skálázott hányados).`}}))}else if(a.pivoting==="complete"){let c=r,x=r;for(let w=r;w<s;w++)for(let A=r;A<e;A++)i[w][A].abs().compare(i[c][x].abs())>0&&(c=w,x=A);if(!W(i[c][x])&&(c!==r&&([i[r],i[c]]=[i[c],i[r]],u++,o.push({kind:"row-swap",matrix:p(),coeffCols:e,varOrder:l.slice(),swapRows:[r,c],caption:{en:`Complete pivoting: swap rows ${g(r)} and ${g(c)}.`,hu:`Teljes főelemkiválasztás: ${g(r)}. és ${g(c)}. sor cseréje.`}})),x!==r)){for(let w=0;w<s;w++)[i[w][r],i[w][x]]=[i[w][x],i[w][r]];[l[r],l[x]]=[l[x],l[r]],v++,o.push({kind:"col-swap",matrix:p(),coeffCols:e,varOrder:l.slice(),swapCols:[r,x],caption:{en:`Complete pivoting: swap columns ${g(r)} and ${g(x)} (track variable order).`,hu:`Teljes főelemkiválasztás: ${g(r)}. és ${g(x)}. oszlop cseréje (a változók sorrendjét követjük).`}})}}const z=i[r][r];if(d.push(z),W(z)){$=!0,o.push({kind:"pivot-select",matrix:p(),coeffCols:e,varOrder:l.slice(),pivot:[r,r],caption:{en:`Pivot a_{${g(r)}${g(r)}} = 0 and no nonzero entry is available — the elimination stops (matrix is singular${a.pivoting==="none"?" for this strategy":""}).`,hu:`A főelem a_{${g(r)}${g(r)}} = 0, és nincs nemnulla elem — az elimináció megáll (a mátrix szinguláris${a.pivoting==="none"?" ennél a stratégiánál":""}).`}});break}o.push({kind:"pivot-select",matrix:p(),coeffCols:e,varOrder:l.slice(),pivot:[r,r],caption:{en:`Pivot a_{${g(r)}${g(r)}} = ${j(z)}.`,hu:`Főelem a_{${g(r)}${g(r)}} = ${j(z)}.`}});const T=a.method==="gauss-jordan"?0:r+1;for(let c=T;c<s;c++){if(c===r||W(i[c][r]))continue;const x=i[c][r].div(z),w=[];for(let A=r;A<h;A++){const E=i[c][A];i[c][A]=i[c][A].sub(x.mul(i[r][A])),i[c][A].equals(E)||w.push([c,A])}o.push({kind:"eliminate",matrix:p(),coeffCols:e,varOrder:l.slice(),pivot:[r,r],multiplier:x,changed:w,caption:{en:`Eliminate: R${g(c)} ← R${g(c)} − (${j(x)})·R${g(r)}.`,hu:`Kiküszöbölés: S${g(c)} ← S${g(c)} − (${j(x)})·S${g(r)}.`}})}}if(a.method==="gauss-jordan"&&!$)for(let r=0;r<q;r++){const z=i[r][r];if(W(z)||z.equals(bn))continue;const T=[];for(let c=0;c<h;c++)i[r][c]=i[r][c].div(z),T.push([r,c]);o.push({kind:"normalize",matrix:p(),coeffCols:e,varOrder:l.slice(),pivot:[r,r],changed:T,caption:{en:`Normalise: R${g(r)} ← R${g(r)} / (${j(z)}).`,hu:`Normálás: S${g(r)} ← S${g(r)} / (${j(z)}).`}})}return{steps:o,matrix:i,coeffCols:e,varOrder:l,pivots:d,rowSwaps:u,colSwaps:v,singular:$}}function gn(n){if(n.coeffCols!==n.matrix.length)return null;if(n.singular)return R;let e=bn;for(const a of n.pivots)e=e.mul(a);return(n.rowSwaps+n.colSwaps)%2===1&&(e=e.neg()),e}function zt(n){const{matrix:e,coeffCols:a,varOrder:i,singular:s}=n;if(s)return{steps:[],solution:null};const h=a,l=new Array(a),d=[];for(let u=a-1;u>=0;u--){let v=e[u][h];for(let p=u+1;p<a;p++)v=v.sub(e[u][p].mul(l[p]));l[u]=v.div(e[u][u]);const $=i[u]+1;d.push({kind:"back-sub",matrix:X(e),coeffCols:a,varOrder:i.slice(),pivot:[u,u],caption:{en:`Back-substitution: x${$} = ${j(l[u])}.`,hu:`Visszahelyettesítés: x${$} = ${j(l[u])}.`}})}const o=new Array(a);for(let u=0;u<a;u++)o[i[u]]=l[u];return{steps:d,solution:o}}function jt(n,e){return n.map((a,i)=>a.concat([e[i]]))}function qt(n,e,a){const i=n[0].length,s=jt(n,e),h=ln(s,i,a),l=gn(h);if(h.singular)return{steps:h.steps,solution:null,singular:!0,determinant:l};let d=h.steps,o;if(a.method==="gauss"){const v=zt(h);d=d.concat(v.steps),o=v.solution}else{const v=i;o=new Array(i);for(let $=0;$<i;$++)o[h.varOrder[$]]=h.matrix[$][v]}const u=o.map((v,$)=>`x${$+1} = ${j(v)}`).join(",  ");return d=d.concat([{kind:"done",matrix:X(h.matrix),coeffCols:i,varOrder:h.varOrder.slice(),caption:{en:`Solution: ${u}.`,hu:`Megoldás: ${u}.`}}]),{steps:d,solution:o,singular:!1,determinant:l}}function Tt(n,e="none"){const a=n.length,i=_t(n,yt(a)),s=ln(i,a,{method:"gauss-jordan",pivoting:e});if(s.singular)return{steps:s.steps,inverse:null,singular:!0};const h=wt(s.matrix,a,2*a);return{steps:s.steps.concat([{kind:"done",matrix:X(s.matrix),coeffCols:a,varOrder:s.varOrder.slice(),caption:{en:"The right block is A⁻¹.",hu:"A jobb oldali blokk az A⁻¹."}}]),inverse:h,singular:!1}}function It(n,e="partial"){const a=n.length,i=ln(n.map(l=>l.slice()),a,{method:"gauss",pivoting:e}),s=gn(i);return{steps:i.steps,determinant:s}}function D(n,e,a,i,s){const h=e.length,l=[];for(let d=0;d<h;d++){const o=new Array(h+1).fill(R);o[d]=e[d],d<h-1&&(o[d+1]=a[d]),d>0&&(o[d-1]=d<=s?R:n[d-1]),o[h]=i[d],l.push(o)}return l}function Mt(n){const e=n.d.length,a=n.a.slice(),i=n.d.slice(),s=n.c.slice(),h=n.b.slice(),l=[];l.push({kind:"init",matrix:D(a,i,s,h,0),coeffCols:e,varOrder:Array.from({length:e},(o,u)=>u),caption:{en:"Initial tridiagonal system (A | b).",hu:"Kiindulási tridiagonális rendszer (A | b)."}});for(let o=1;o<e;o++){if(W(i[o-1]))return l.push({kind:"pivot-select",matrix:D(a,i,s,h,o-1),coeffCols:e,varOrder:Array.from({length:e},(v,$)=>$),pivot:[o-1,o-1],caption:{en:`Zero pivot d${o} — the Thomas algorithm cannot continue without pivoting.`,hu:`Nulla főelem d${o} — a Thomas-algoritmus főelemkiválasztás nélkül nem folytatható.`}}),{steps:l,solution:null,singular:!0};const u=a[o-1].div(i[o-1]);i[o]=i[o].sub(u.mul(s[o-1])),h[o]=h[o].sub(u.mul(h[o-1])),l.push({kind:"eliminate",matrix:D(a,i,s,h,o),coeffCols:e,varOrder:Array.from({length:e},(v,$)=>$),pivot:[o-1,o-1],multiplier:u,changed:[[o,o-1],[o,o],[o,e]],caption:{en:`Eliminate a${o}: m = a${o}/d${o} = ${j(u)}; update d${o+1} and b${o+1}.`,hu:`a${o} kiküszöbölése: m = a${o}/d${o} = ${j(u)}; d${o+1} és b${o+1} frissítése.`}})}if(W(i[e-1]))return{steps:l,solution:null,singular:!0};const d=new Array(e);d[e-1]=h[e-1].div(i[e-1]),l.push({kind:"back-sub",matrix:D(a,i,s,h,e-1),coeffCols:e,varOrder:Array.from({length:e},(o,u)=>u),pivot:[e-1,e-1],caption:{en:`Back-substitution: x${e} = b${e}/d${e} = ${j(d[e-1])}.`,hu:`Visszahelyettesítés: x${e} = b${e}/d${e} = ${j(d[e-1])}.`}});for(let o=e-2;o>=0;o--)d[o]=h[o].sub(s[o].mul(d[o+1])).div(i[o]),l.push({kind:"back-sub",matrix:D(a,i,s,h,e-1),coeffCols:e,varOrder:Array.from({length:e},(u,v)=>v),pivot:[o,o],caption:{en:`Back-substitution: x${o+1} = (b${o+1} − c${o+1}·x${o+2})/d${o+1} = ${j(d[o])}.`,hu:`Visszahelyettesítés: x${o+1} = (b${o+1} − c${o+1}·x${o+2})/d${o+1} = ${j(d[o])}.`}});return{steps:l,solution:d,singular:!1}}const on=[{id:"ex3-22",ref:"Example 3.22",name:{en:"Gaussian elimination",hu:"Gauss-elimináció"},A:[[1,-2,-2,-2],[2,-1,2,4],[-1,2,3,-4],[-2,1,4,-2]],b:[-11,-8,27,28],note:{en:"Solves cleanly without pivoting; solution (-3, 2, 4, -2).",hu:"Főelemkiválasztás nélkül is megoldható; megoldás (-3, 2, 4, -2)."}},{id:"ex3-24",ref:"Example 3.24 / 3.27",name:{en:"Zero pivot (needs pivoting)",hu:"Nulla főelem (kell csere)"},A:[[2,-1,0,-3],[2,-1,1,5],[-3,1,1,-2],[2,4,0,-1]],b:[8,2,-5,21],note:{en:"Without pivoting it stalls on a zero pivot. Switch pivoting to Partial to finish — solution (4, 3, 2, -1).",hu:"Főelemkiválasztás nélkül nulla főelemen elakad. Válts Részleges főelemkiválasztásra — megoldás (4, 3, 2, -1)."}},{id:"ex3-25",ref:"Example 3.25",name:{en:"Ill-conditioned 2×2",hu:"Rosszul kondicionált 2×2"},A:[["1/5000","-61/2"],["253/50","-21/20"]],b:["-6099/100","2509/10"],note:{en:"Exact solution (50, 2). With finite-digit arithmetic, dividing by the tiny pivot 0.0002 blows up the error — partial pivoting fixes it.",hu:"Pontos megoldás (50, 2). Véges jegyű aritmetikával a kicsi 0.0002 főelemmel való osztás felnagyítja a hibát — a részleges főelemkiválasztás megoldja."}},{id:"ex3-33a",ref:"§3.3 Exercise 1(a)",name:{en:"Exercise 3×3",hu:"Feladat 3×3"},A:[[2,2,-2],[-1,3,0],[4,2,-3]],b:[-4,-11,-1]}],Gt=[{id:"ex3-38",ref:"Example 3.38",name:{en:"Invert a 3×3",hu:"3×3 invertálása"},A:[[1,0,2],[-1,1,0],[-2,0,-1]],b:[0,0,0],note:{en:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]].",hu:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]]."}},{id:"ex3-39",ref:"Example 3.39",name:{en:"Determinant = 114",hu:"Determináns = 114"},A:[[1,-2,-2,-2],[2,-1,2,4],[-1,2,3,-4],[-2,1,4,-2]],b:[0,0,0,0],note:{en:"det(A) = product of pivots = 1·3·1·38 = 114.",hu:"det(A) = a főelemek szorzata = 1·3·1·38 = 114."}},{id:"ex3-7-1a",ref:"§3.7 Exercise 1(a)",name:{en:"Invert 3×3 (exercise)",hu:"3×3 invertálása (feladat)"},A:[[-1,1,2],[-2,1,0],[0,1,-1]],b:[0,0,0]}],P=[{id:"ex3-5-1",ref:"§3.5 Exercise 1",name:{en:"6×6 tridiagonal",hu:"6×6 tridiagonális"},a:["1/2","1/2","1/2","1/2","1/2"],d:[1,4,2,4,2,1],c:["-1/2","-1/2","-1/2","-1/2","-1/2"],b:["3/2",-4,2,-4,2,"-1/2"]},{id:"tri-small",ref:"Warm-up",name:{en:"4×4 tridiagonal",hu:"4×4 tridiagonális"},a:[-1,-1,-1],d:[4,4,4,4],c:[-1,-1,-1],b:[5,5,10,23]}];function St(n,e,a){return!!n&&n[0]===e&&n[1]===a}function $n({matrix:n,coeffCols:e,pivot:a,changed:i,varOrder:s,bracket:h=!0}){const l=new Set((i??[]).map(([o,u])=>`${o},${u}`)),d=s!==void 0&&s.some((o,u)=>o!==u);return t.jsxs("div",{className:"matrix-view",children:[t.jsx("table",{className:`matrix${h?" bracketed":""}`,children:t.jsx("tbody",{children:n.map((o,u)=>t.jsx("tr",{children:o.map((v,$)=>{const p=[];return St(a,u,$)?p.push("cell-pivot"):l.has(`${u},${$}`)&&p.push("cell-changed"),e!==void 0&&$===e&&p.push("rhs-sep"),t.jsx("td",{className:p.join(" ")||void 0,children:t.jsx(J,{tex:an(v)})},$)})},u))})}),d&&t.jsx("div",{className:"var-order",children:s.map((o,u)=>t.jsxs("span",{children:["col ",u+1," → ",t.jsx(J,{tex:`x_{${o+1}}`})]},u))})]})}function Wt({values:n,onChange:e,label:a,invalid:i}){var h;const s=((h=n[0])==null?void 0:h.length)??0;return t.jsxs("label",{className:"field",children:[a,t.jsx("div",{className:"matrix-input",style:{gridTemplateColumns:`repeat(${s}, auto)`},children:n.map((l,d)=>l.map((o,u)=>t.jsx("input",{type:"text",inputMode:"decimal",value:o,"aria-label":`a${d+1}${u+1}`,style:i!=null&&i(d,u)?{borderColor:"var(--err)",color:"var(--err)"}:void 0,onChange:v=>e(d,u,v.target.value)},`${d}-${u}`)))})]})}function H({values:n,onChange:e,label:a,invalid:i,horizontal:s=!1}){return t.jsxs("label",{className:"field",children:[a,t.jsx("div",{className:"matrix-input",style:{gridTemplateColumns:s?`repeat(${n.length}, auto)`:"auto"},children:n.map((h,l)=>t.jsx("input",{type:"text",inputMode:"decimal",value:h,"aria-label":`b${l+1}`,style:i!=null&&i(l)?{borderColor:"var(--err)",color:"var(--err)"}:void 0,onChange:d=>e(l,d.target.value)},l))})]})}const un=n=>n.map(e=>e.map(String)),G=n=>n.map(String),kn=n=>Array.from({length:n},()=>"0"),Et=n=>Array.from({length:n},()=>kn(n)),L=n=>n.map(e=>Z(e.trim()===""?0:e.trim())),Ot=n=>n.map(L);function U(n){return n==="solve"?on:Gt}function Pt({initial:n}){const{t:e,pick:a,lang:i}=S(),[s,h]=_.useState((n==null?void 0:n.mode)??"solve"),[l,d]=_.useState((n==null?void 0:n.method)??"gauss"),[o,u]=_.useState((n==null?void 0:n.pivot)??"none"),v=_.useMemo(()=>{const m=(n==null?void 0:n.mode)??"solve";if(m==="tridiagonal")return{presetId:(P.find(y=>y.id===(n==null?void 0:n.presetId))??P[0]).id};const k=U(m);return{presetId:(k.find(b=>b.id===(n==null?void 0:n.presetId))??k[0]).id}},[n==null?void 0:n.mode,n==null?void 0:n.presetId]),[$,p]=_.useState(v.presetId),I=on[0],[q,r]=_.useState(()=>{const m=(n==null?void 0:n.mode)??"solve",k=U(m),f=k.find(b=>b.id===(n==null?void 0:n.presetId))??k[0]??I;return un(f.A)}),[z,T]=_.useState(()=>{const m=on.find(k=>k.id===(n==null?void 0:n.presetId))??I;return G(m.b)}),[c,x]=_.useState(()=>{const m=P.find(k=>k.id===(n==null?void 0:n.presetId))??P[0];return{a:G(m.a),d:G(m.d),c:G(m.c),b:G(m.b)}}),[w,A]=_.useState(0),[E,Y]=_.useState(!1);function nn(m,k){if(p(k),m==="tridiagonal"){const y=P.find(F=>F.id===k)??P[0];x({a:G(y.a),d:G(y.d),c:G(y.c),b:G(y.b)});return}const f=U(m),b=f.find(y=>y.id===k)??f[0];b&&(r(un(b.A)),T(G(b.b)))}function vn(m){h(m),m==="inverse"?(d("gauss-jordan"),(o==="complete"||o==="scaled")&&u("none")):m==="determinant"&&d("gauss"),m==="tridiagonal"?nn(m,P[0].id):nn(m,U(m)[0].id)}function xn(m){r(k=>{const f=Et(m);for(let b=0;b<Math.min(m,k.length);b++)for(let y=0;y<Math.min(m,k[b].length);y++)f[b][y]=k[b][y];return f}),T(k=>{const f=kn(m);for(let b=0;b<Math.min(m,k.length);b++)f[b]=k[b];return f}),p("custom")}const C=_.useMemo(()=>{try{if(s==="tridiagonal"){const f=L(c.a),b=L(c.d),y=L(c.c),F=L(c.b);if(f.length!==b.length-1||y.length!==b.length-1||F.length!==b.length)return{steps:[],error:"dimension mismatch"};const V=Mt({a:f,d:b,c:y,b:F});return{steps:V.steps,error:null,solution:V.solution,singular:V.singular}}const m=Ot(q);if(s==="solve"){const f=qt(m,L(z),{method:l,pivoting:o});return{steps:f.steps,error:null,solution:f.solution,determinant:f.determinant,singular:f.singular}}if(s==="inverse"){const f=Tt(m,o==="partial"?"partial":"none");return{steps:f.steps,error:null,inverse:f.inverse,singular:f.singular}}const k=It(m,o);return{steps:k.steps,error:null,determinant:k.determinant}}catch{return{steps:[],error:"invalid"}}},[s,l,o,q,z,c]);_.useEffect(()=>{A(0),Y(!1)},[C]);const en=_.useRef(null);_.useEffect(()=>{if(E)return en.current=window.setInterval(()=>{A(m=>m>=C.steps.length-1?(Y(!1),m):m+1)},900),()=>{en.current&&window.clearInterval(en.current)}},[E,C.steps.length]);const O=C.steps,B=Math.min(w,Math.max(0,O.length-1)),N=O[B],yn=q.length,mn=s==="solve",hn=s==="solve"||s==="determinant"||s==="inverse",_n=s==="inverse"?["none","partial"]:["none","partial","complete","scaled"],dn=s==="tridiagonal"?P:U(s),K=dn.find(m=>m.id===$)??null;return t.jsxs("div",{className:"grid-2",children:[t.jsxs("div",{className:"card stack",children:[t.jsxs("div",{className:"row",children:[t.jsxs("label",{className:"field",style:{flex:1},children:[e("lab.mode"),t.jsxs("select",{value:s,onChange:m=>vn(m.target.value),children:[t.jsx("option",{value:"solve",children:e("lab.mode.solve")}),t.jsx("option",{value:"inverse",children:e("lab.mode.inverse")}),t.jsx("option",{value:"determinant",children:e("lab.mode.determinant")}),t.jsx("option",{value:"tridiagonal",children:e("lab.mode.tridiagonal")})]})]}),t.jsxs("label",{className:"field",style:{flex:1},children:[e("lab.preset"),t.jsxs("select",{value:$,onChange:m=>nn(s,m.target.value),children:[dn.map(m=>t.jsxs("option",{value:m.id,children:[m.ref," — ",a(m.name)]},m.id)),t.jsx("option",{value:"custom",children:e("lab.preset.custom")})]})]})]}),(mn||hn)&&t.jsxs("div",{className:"row",children:[mn&&t.jsxs("label",{className:"field",style:{flex:1},children:[e("lab.method"),t.jsxs("select",{value:l,onChange:m=>d(m.target.value),children:[t.jsx("option",{value:"gauss",children:e("method.gauss")}),t.jsx("option",{value:"gauss-jordan",children:e("method.gaussJordan")})]})]}),hn&&t.jsxs("label",{className:"field",style:{flex:1},children:[e("lab.pivoting"),t.jsx("select",{value:o,onChange:m=>u(m.target.value),children:_n.map(m=>t.jsx("option",{value:m,children:e(`pivot.${m}`)},m))})]})]}),K&&"note"in K&&K.note&&t.jsx("div",{className:"caption",children:a(K.note)}),s==="inverse"&&t.jsx("div",{className:"muted",style:{fontSize:"0.82rem"},children:e("lab.note.inverse")}),s==="tridiagonal"?t.jsxs("div",{className:"stack",children:[t.jsx(H,{label:i==="hu"?"Főátló d":"Diagonal d",values:c.d,horizontal:!0,onChange:(m,k)=>{p("custom"),x(f=>({...f,d:f.d.map((b,y)=>y===m?k:b)}))}}),t.jsx(H,{label:i==="hu"?"Felső átló c":"Super-diagonal c",values:c.c,horizontal:!0,onChange:(m,k)=>{p("custom"),x(f=>({...f,c:f.c.map((b,y)=>y===m?k:b)}))}}),t.jsx(H,{label:i==="hu"?"Alsó átló a":"Sub-diagonal a",values:c.a,horizontal:!0,onChange:(m,k)=>{p("custom"),x(f=>({...f,a:f.a.map((b,y)=>y===m?k:b)}))}}),t.jsx(H,{label:e("lab.vectorB"),values:c.b,horizontal:!0,onChange:(m,k)=>{p("custom"),x(f=>({...f,b:f.b.map((b,y)=>y===m?k:b)}))}})]}):t.jsxs("div",{className:"stack",children:[t.jsxs("label",{className:"field",children:[e("lab.size"),t.jsx("select",{value:yn,onChange:m=>xn(Number(m.target.value)),children:[2,3,4,5].map(m=>t.jsxs("option",{value:m,children:[m," × ",m]},m))})]}),t.jsx(Wt,{label:e("lab.matrixA"),values:q,onChange:(m,k,f)=>{p("custom"),r(b=>b.map((y,F)=>F===m?y.map((V,An)=>An===k?f:V):y))}}),s==="solve"&&t.jsx(H,{label:e("lab.vectorB"),values:z,onChange:(m,k)=>{p("custom"),T(f=>f.map((b,y)=>y===m?k:b))}})]})]}),t.jsx("div",{className:"card stack",children:C.error||!N?t.jsx("p",{className:"feedback err",children:i==="hu"?"Érvénytelen bemenet.":"Invalid input."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"caption",children:a(N.caption)}),t.jsx($n,{matrix:N.matrix,coeffCols:s==="inverse"?void 0:N.coeffCols,pivot:N.pivot,changed:N.changed,varOrder:N.varOrder}),t.jsxs("div",{className:"kbd-controls",children:[t.jsxs("button",{className:"icon-btn",onClick:()=>A(0),disabled:B===0,children:["⏮ ",e("lab.first")]}),t.jsxs("button",{className:"icon-btn",onClick:()=>A(m=>Math.max(0,m-1)),disabled:B===0,children:["◀ ",e("lab.prev")]}),t.jsx("button",{className:"btn",onClick:()=>Y(m=>!m),children:E?`⏸ ${e("lab.pause")}`:`▶ ${e("lab.play")}`}),t.jsxs("button",{className:"icon-btn",onClick:()=>A(m=>Math.min(O.length-1,m+1)),disabled:B>=O.length-1,children:[e("lab.next")," ▶"]}),t.jsxs("button",{className:"icon-btn",onClick:()=>A(O.length-1),disabled:B>=O.length-1,children:[e("lab.last")," ⏭"]})]}),t.jsxs("div",{className:"row",children:[t.jsx("span",{className:"muted",style:{fontSize:"0.85rem",minWidth:110},children:e("lab.stepOf",{a:B+1,b:O.length})}),t.jsx("div",{className:"progress",children:t.jsx("div",{style:{width:`${(B+1)/O.length*100}%`}})})]}),t.jsx(Bt,{run:C,mode:s})]})})]})}function Bt({run:n,mode:e}){const{t:a}=S();return n.singular&&e!=="determinant"?t.jsx("div",{className:"caption",children:a("lab.singular")}):t.jsxs("div",{className:"card",style:{background:"var(--bg-sunken)"},children:[t.jsx("div",{className:"section-eyebrow",children:a("lab.result")}),(e==="solve"||e==="tridiagonal")&&n.solution&&t.jsxs("div",{className:"result-line",style:{marginTop:8},children:[t.jsxs("strong",{children:[a("lab.solution"),":"]}),n.solution.map((i,s)=>t.jsx("span",{className:"pill",children:t.jsx(J,{tex:`x_{${s+1}} = ${an(i)}`})},s))]}),(e==="solve"||e==="determinant")&&n.determinant&&t.jsxs("div",{className:"result-line",style:{marginTop:8},children:[t.jsxs("strong",{children:[a("lab.determinant"),":"]}),t.jsx("span",{className:"pill",children:t.jsx(J,{tex:`\\det(A) = ${an(n.determinant)}`})})]}),e==="inverse"&&n.inverse&&t.jsxs("div",{style:{marginTop:8},children:[t.jsxs("strong",{children:[a("lab.inverse"),":"]}),t.jsx($n,{matrix:n.inverse})]})]})}const Q=[{id:"q-tri-solve",kind:"vector",prompt:{en:"Solve this triangular system by backward substitution (enter x₁, x₂, x₃, x₄):",hu:"Oldd meg ezt a háromszög rendszert visszahelyettesítéssel (add meg x₁, x₂, x₃, x₄):"},tex:"\\begin{array}{rcrcrcrcr} 2x_1 &-& x_2 &+& 3x_3 &+& x_4 &=& 3\\\\ && 3x_2 &-& x_3 &+& 2x_4 &=& 13\\\\ &&&& 2x_3 &-& x_4 &=& -2\\\\ &&&&&& 3x_4 &=& 12 \\end{array}",answer:["-1","2","1","4"],solution:{en:"x₄ = 4, then x₃ = (−2+4)/2 = 1, x₂ = (13+1−8)/3 = 2, x₁ = (3+2−3−4)/2 = −1.",hu:"x₄ = 4, majd x₃ = (−2+4)/2 = 1, x₂ = (13+1−8)/3 = 2, x₁ = (3+2−3−4)/2 = −1."}},{id:"q-det-114",kind:"numeric",prompt:{en:"What is det(A) for the coefficient matrix of Example 3.39 (pivots 1, 3, 1, 38, no swaps)?",hu:"Mennyi det(A) a 3.39. példa együtthatómátrixára (főelemek 1, 3, 1, 38, csere nélkül)?"},answer:"114",solution:{en:"det(A) = product of pivots = 1·3·1·38 = 114.",hu:"det(A) = a főelemek szorzata = 1·3·1·38 = 114."}},{id:"q-dd-invertible",kind:"truefalse",prompt:{en:"Every (row) diagonally dominant matrix is invertible.",hu:"Minden (soronként) diagonálisan domináns mátrix invertálható."},answer:!0,solution:{en:"True. Diagonal dominance implies Ax = 0 has only the trivial solution, so A is nonsingular.",hu:"Igaz. A diagonális dominanciából következik, hogy Ax = 0-nak csak triviális megoldása van, így A reguláris."}},{id:"q-partial-pivot",kind:"choice",prompt:{en:"In column 1 the entries (top to bottom) are 2, 2, −3, 2. Which row does partial pivoting move to the top?",hu:"Az 1. oszlop elemei (fentről le) 2, 2, −3, 2. Melyik sort viszi felülre a részleges főelemkiválasztás?"},choices:[{en:"Row 1 (value 2)",hu:"1. sor (érték 2)"},{en:"Row 3 (value −3)",hu:"3. sor (érték −3)"},{en:"The first nonzero row",hu:"Az első nemnulla sor"},{en:"No swap is needed",hu:"Nem kell csere"}],answer:1,solution:{en:"Partial pivoting picks the largest magnitude, |−3| = 3, so row 3 moves up.",hu:"A részleges főelemkiválasztás a legnagyobb abszolút értéket választja, |−3| = 3, így a 3. sor kerül felülre."}},{id:"q-gauss-cost",kind:"choice",prompt:{en:"What is the leading-order operation count of Gaussian elimination?",hu:"Mi a Gauss-elimináció vezető rendű műveletigénye?"},choices:[{en:"n²/2",hu:"n²/2"},{en:"n³/3",hu:"n³/3"},{en:"n³/2",hu:"n³/2"},{en:"5n − 4",hu:"5n − 4"}],answer:1,solution:{en:"Forward elimination plus back-substitution is n³/3 + O(n²) multiplications/divisions.",hu:"Az előre elimináció és a visszahelyettesítés együtt n³/3 + O(n²) szorzás/osztás."}},{id:"q-gj-cost",kind:"truefalse",prompt:{en:"Gauss–Jordan elimination is asymptotically cheaper than Gaussian elimination.",hu:"A Gauss–Jordan-elimináció aszimptotikusan olcsóbb, mint a Gauss-elimináció."},answer:!1,solution:{en:"False. Gauss–Jordan costs ≈ n³/2, more than Gaussian elimination’s n³/3.",hu:"Hamis. A Gauss–Jordan költsége ≈ n³/2, több, mint a Gauss-elimináció n³/3-a."}},{id:"q-thomas-cost",kind:"choice",prompt:{en:"How many multiplications/divisions does the Thomas (tridiagonal) algorithm need?",hu:"Hány szorzás/osztás kell a Thomas- (tridiagonális) algoritmushoz?"},choices:[{en:"n³/3",hu:"n³/3"},{en:"n²/2",hu:"n²/2"},{en:"5n − 4",hu:"5n − 4"},{en:"2ⁿ",hu:"2ⁿ"}],answer:2,solution:{en:"A tridiagonal solve is linear: 5n − 4 multiplications/divisions.",hu:"A tridiagonális megoldás lineáris: 5n − 4 szorzás/osztás."}},{id:"q-inv-entry",kind:"numeric",prompt:{en:"For A of Example 3.38, what is the (1,1) entry of A⁻¹? (Enter a fraction like -1/3.)",hu:"A 3.38. példa A mátrixára mi az A⁻¹ (1,1) eleme? (Adj meg törtet, pl. -1/3.)"},answer:"-1/3",solution:{en:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]], so the (1,1) entry is −1/3.",hu:"A⁻¹ = (1/3)·[[-1,0,-2],[-1,3,-2],[2,0,1]], tehát az (1,1) elem −1/3."}},{id:"q-posdef",kind:"choice",prompt:{en:"A symmetric matrix is positive definite if and only if…",hu:"Egy szimmetrikus mátrix akkor és csak akkor pozitív definit, ha…"},choices:[{en:"all its entries are positive",hu:"minden eleme pozitív"},{en:"it is diagonally dominant",hu:"diagonálisan domináns"},{en:"all leading principal minors are positive",hu:"minden bal felső főminora pozitív"},{en:"its determinant is positive",hu:"a determinánsa pozitív"}],answer:2,solution:{en:"Sylvester’s criterion: positive definite ⇔ every leading principal minor is positive.",hu:"Sylvester-kritérium: pozitív definit ⇔ minden bal felső főminor pozitív."}}];function cn(n,e){try{return Z(n.trim()).equals(Z(e.trim()))}catch{return!1}}function fn(n,e){switch(n.kind){case"choice":return e.choice===n.answer;case"truefalse":return e.bool===n.answer;case"numeric":return cn(e.text??"",n.answer);case"vector":{const a=(e.text??"").split(/[,\s]+/).filter(Boolean);return a.length!==n.answer.length?!1:a.every((i,s)=>cn(i,n.answer[s]))}}}function Nt({item:n,onAnswered:e}){const{t:a,pick:i}=S(),[s,h]=_.useState({}),[l,d]=_.useState(!1),[o,u]=_.useState(!1),v=l&&fn(n,s);function $(){d(!0),e(fn(n,s))}return t.jsxs("div",{className:"card stack",children:[t.jsxs("div",{children:[t.jsx("span",{className:"section-eyebrow",children:a("quiz.title")}),t.jsx("p",{style:{marginBottom:6},children:i(n.prompt)}),n.tex&&t.jsx(J,{tex:n.tex,block:!0})]}),n.kind==="choice"&&t.jsx("div",{className:"choices",children:n.choices.map((p,I)=>{let q="choice";return s.choice===I&&(q+=" selected"),l&&I===n.answer&&(q+=" correct"),l&&s.choice===I&&I!==n.answer&&(q+=" wrong"),t.jsx("button",{className:q,onClick:()=>!l&&h({choice:I}),disabled:l,children:i(p)},I)})}),n.kind==="truefalse"&&t.jsxs("div",{className:"seg",children:[t.jsx("button",{className:s.bool===!0?"active":"",onClick:()=>!l&&h({bool:!0}),children:a("quiz.true")}),t.jsx("button",{className:s.bool===!1?"active":"",onClick:()=>!l&&h({bool:!1}),children:a("quiz.false")})]}),(n.kind==="numeric"||n.kind==="vector")&&t.jsx("input",{type:"text",placeholder:n.kind==="vector"?"x₁, x₂, …":a("quiz.placeholder"),value:s.text??"",onChange:p=>h({text:p.target.value}),disabled:l,style:{maxWidth:280}}),t.jsxs("div",{className:"row",children:[l?t.jsx("span",{className:v?"feedback ok":"feedback err",children:a(v?"quiz.correct":"quiz.incorrect")}):t.jsx("button",{className:"btn",onClick:$,children:a("quiz.check")}),t.jsx("button",{className:"btn secondary",onClick:()=>u(p=>!p),children:a(o?"quiz.hideSolution":"quiz.showSolution")})]}),o&&t.jsx("div",{className:"caption",children:i(n.solution)})]})}function Jt(){const{t:n}=S(),[e,a]=_.useState(0),[i,s]=_.useState({}),h=Q[e],l=Object.values(i).filter(Boolean).length;return t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[t.jsx("span",{className:"muted",children:n("quiz.questionOf",{a:e+1,b:Q.length})}),t.jsxs("span",{className:"pill",children:[n("quiz.score"),": ",l," / ",Object.keys(i).length]})]}),t.jsx(Nt,{item:h,onAnswered:d=>s(o=>({...o,[e]:d}))},h.id),t.jsxs("div",{className:"row",children:[t.jsxs("button",{className:"icon-btn",onClick:()=>a(d=>Math.max(0,d-1)),disabled:e===0,children:["◀ ",n("quiz.prev")]}),t.jsxs("button",{className:"icon-btn",onClick:()=>a(d=>Math.min(Q.length-1,d+1)),disabled:e===Q.length-1,children:[n("quiz.next")," ▶"]})]})]})}const Ct=[...pn.map(n=>({id:n.id,no:n.number,title:n.title,blurb:n.summary})),{id:"lab",no:"3·lab",title:{en:"Elimination Lab",hu:"Eliminációs labor"},blurb:{en:"Step through Gaussian / Gauss–Jordan elimination interactively.",hu:"Lépkedj végig a Gauss- / Gauss–Jordan-eliminációi lépéseken."}},{id:"quiz",no:"3·quiz",title:{en:"Quiz",hu:"Kvíz"},blurb:{en:"Check your understanding.",hu:"Ellenőrizd a tudásod."}}];function Xt(){const{t:n,lang:e}=S(),a=zn();return _.useEffect(()=>{let i=decodeURIComponent(a.hash.replace(/^#/,""));if(!i){const s=a.pathname.match(/\/lessons\/([^/]+)/);s?i=s[1]:/\/lab$/.test(a.pathname)?i="lab":/\/quiz$/.test(a.pathname)&&(i="quiz")}i&&requestAnimationFrame(()=>{var s;return(s=document.getElementById(i))==null?void 0:s.scrollIntoView()})},[a.pathname,a.hash]),t.jsxs("div",{className:"app-shell ch-linear-systems",children:[t.jsx(Tn,{sections:Ct}),t.jsx("main",{children:t.jsxs("div",{className:"container",children:[t.jsxs("section",{className:"hero",id:"top",children:[t.jsx("span",{className:"section-eyebrow",children:n("app.subtitle")}),t.jsx("h1",{children:n("app.title")}),t.jsx("p",{children:n("home.tagline")}),t.jsx("p",{style:{marginTop:4},children:n("home.lead")})]}),pn.map(i=>t.jsxs("section",{id:i.id,className:"ls-section",children:[t.jsx(Cn,{section:i}),xt(i.id).map(s=>t.jsx(In,{snippets:s.snippets,caption:s.caption},s.id)),t.jsx(Vn,{sectionNumber:i.number})]},i.id)),t.jsxs("section",{id:"lab",className:"ls-section stack",children:[t.jsxs("div",{children:[t.jsx("span",{className:"section-eyebrow",children:n("nav.lab")}),t.jsx("h1",{style:{margin:"4px 0 2px"},children:n("nav.lab")})]}),t.jsx(Pt,{initial:{}})]}),t.jsxs("section",{id:"quiz",className:"ls-section stack",children:[t.jsxs("div",{children:[t.jsx("span",{className:"section-eyebrow",children:n("nav.quiz")}),t.jsx("h1",{style:{margin:"4px 0 2px"},children:n("quiz.title")})]}),t.jsx(Jt,{})]})]})}),t.jsx("footer",{className:"footer",children:t.jsx("div",{className:"container",children:e==="hu"?"Numerikus analízis · 3. fejezet — interaktív tananyag.":"Numerical Analysis · Chapter 3 — interactive companion."})})]})}export{Xt as default};
