import{d as u,j as e}from"./index-D6pHuXzW.js";import{M as $}from"./MarkdownView-BmoglzbP.js";import{b,l as g,c as k,n as _,a as y,h as v}from"./hermite.hu-BOdAixwp.js";import{a as m,d as h,c as f,n as d,b as c,g as p}from"./7_4-CWMfsFEh.js";import"./normalizeMath-D5GaPAtA.js";import"./index-CLw40Ppf.js";import"./CodeBlock-BIUyJnuw.js";function x(i,a,r){const t=i.match(a);if(!t||t.index===void 0)return"";const s=i.slice(t.index+t[0].length),l=s.search(r);return(t[0]+(l>=0?s.slice(0,l):s)).trim()}const z=/\*\*Example \d+\.\d+\.?\*\*|\n#{1,3} |\n\[\^|\n### Exercises|\n\*\*Exercises/,A=/\*\*\d+\.\d+\.? *példa\.?\*\*|\n#{1,3} |\n\[\^|\n### Feladat|\n\*\*Feladat/,n=(i,a,r,t)=>({en:x(i,a,z),hu:x(r,t,A)}),o={en:`

*Step through every elimination step interactively in the [Elimination Lab](/linear-systems#lab).*`,hu:`

*Lépésről lépésre az [Eliminációs laborban](/linear-systems#lab) követheted végig.*`},w={title:{en:"Gaussian elimination, partial & complete pivoting, Gauss–Jordan, matrix inversion",hu:"Gauss-elimináció, részleges és teljes főelemkiválasztás, Gauss–Jordan-elimináció, mátrixinvertálás"},items:[{label:{en:"Example 3.24 — Gaussian elimination",hu:"3.24. példa — Gauss-elimináció"},body:{en:`**Example 3.24.** Solve $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ with $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 2&-1&0&-3&8\\\\ 2&-1&1&5&2\\\\ -3&1&1&-2&-5\\\\ 2&4&0&-1&21 \\end{array}\\right).$$ Plain Gaussian elimination stalls: after eliminating column 1 the $(2,2)$ pivot becomes $0$, so a row interchange is needed (see Example 3.27). With pivoting the solution is $\\mathbf{x}=(4,3,2,-1)$.${o.en}`,hu:`**3.24. példa.** Oldd meg az $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$ rendszert, ahol $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 2&-1&0&-3&8\\\\ 2&-1&1&5&2\\\\ -3&1&1&-2&-5\\\\ 2&4&0&-1&21 \\end{array}\\right).$$ A sima Gauss-elimináció elakad: az első oszlop kiküszöbölése után a $(2,2)$ főelem $0$ lesz, ezért sorcsere kell (lásd 3.27. példa). Főelemkiválasztással a megoldás $\\mathbf{x}=(4,3,2,-1)$.${o.hu}`}},{label:{en:"Example 3.27 — partial pivoting",hu:"3.27. példa — részleges főelemkiválasztás"},body:{en:`**Example 3.27.** Solve the Example 3.24 system with *partial pivoting*: before each step swap the row whose pivot-column entry has the largest absolute value into the pivot position, then eliminate. This avoids the zero pivot and yields $\\mathbf{x}=(4,3,2,-1)$.${o.en}`,hu:`**3.27. példa.** Oldd meg a 3.24. példa rendszerét *részleges főelemkiválasztással*: minden lépés előtt cseréld a főelem-oszlop legnagyobb abszolút értékű elemét tartalmazó sort a főelem helyére, majd eliminálj. Ez elkerüli a nulla főelemet, a megoldás $\\mathbf{x}=(4,3,2,-1)$.${o.hu}`}},{label:{en:"Example 3.29 — complete pivoting",hu:"3.29. példa — teljes főelemkiválasztás"},body:{en:`**Example 3.29.** Solve $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right)$$ with *complete pivoting*: each step brings the largest-magnitude entry of the whole remaining submatrix to the pivot via a row **and** a column swap (column swaps reorder the unknowns — here the order becomes $x_4,x_3,x_2,x_1$). The solution is $\\mathbf{x}=(-3,2,4,-2)$.${o.en}`,hu:`**3.29. példa.** Oldd meg a $$[\\mathbf{A}\\,|\\,\\mathbf{b}]=\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right)$$ rendszert *teljes főelemkiválasztással*: minden lépésben a teljes maradék részmátrix legnagyobb abszolút értékű elemét hozzuk a főelembe sor- **és** oszlopcserével (az oszlopcsere átrendezi az ismeretleneket — itt a sorrend $x_4,x_3,x_2,x_1$ lesz). A megoldás $\\mathbf{x}=(-3,2,4,-2)$.${o.hu}`}},{label:{en:"Example 3.35 — Gauss–Jordan elimination",hu:"3.35. példa — Gauss–Jordan-elimináció"},body:{en:`**Example 3.35.** Apply Gauss–Jordan elimination to the same augmented matrix $$\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right):$$ drive the coefficient block to the identity $\\mathbf{I}$; the solution then appears directly in the last column, $\\mathbf{x}=(-3,2,4,-2)$.${o.en}`,hu:`**3.35. példa.** Alkalmazz Gauss–Jordan-eliminációt ugyanarra a kibővített mátrixra: $$\\left(\\begin{array}{cccc|c} 1&-2&-2&-2&-11\\\\ 2&-1&2&4&-8\\\\ -1&2&3&-4&27\\\\ -2&1&4&-2&28 \\end{array}\\right):$$ hozd az együtthatóblokkot az $\\mathbf{I}$ egységmátrixra; a megoldás ekkor közvetlenül az utolsó oszlopban jelenik meg, $\\mathbf{x}=(-3,2,4,-2)$.${o.hu}`}},{label:{en:"Example 3.38 — matrix inversion",hu:"3.38. példa — mátrixinvertálás"},body:{en:`**Example 3.38.** Invert $\\mathbf{A}=\\left(\\begin{smallmatrix} 1&0&2\\\\ -1&1&0\\\\ -2&0&-1 \\end{smallmatrix}\\right)$ by running Gauss–Jordan on $[\\mathbf{A}\\,|\\,\\mathbf{I}]$ until it becomes $[\\mathbf{I}\\,|\\,\\mathbf{A}^{-1}]$: $$\\mathbf{A}^{-1}=\\frac{1}{3}\\begin{pmatrix} -1&0&-2\\\\ -1&3&-2\\\\ 2&0&1 \\end{pmatrix}.$$${o.en}`,hu:`**3.38. példa.** Invertáld az $\\mathbf{A}=\\left(\\begin{smallmatrix} 1&0&2\\\\ -1&1&0\\\\ -2&0&-1 \\end{smallmatrix}\\right)$ mátrixot Gauss–Jordan-eliminációval az $[\\mathbf{A}\\,|\\,\\mathbf{I}]$ mátrixon, amíg $[\\mathbf{I}\\,|\\,\\mathbf{A}^{-1}]$ alakot nem kapsz: $$\\mathbf{A}^{-1}=\\frac{1}{3}\\begin{pmatrix} -1&0&-2\\\\ -1&3&-2\\\\ 2&0&1 \\end{pmatrix}.$$${o.hu}`}}]},q={en:`**Example 9.2.** Find the line $y=ax+b$ of best fit to the data below. We tabulate $x_i^2$ and $x_iy_i$ and their column sums.

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

Substituting the sums into the normal equations $89.5a+20.0b=67.25$, $20.0a+7b=16.4$ gives $a=0.630243$, $b=0.542163$. The fitting error is $\\sum_{i=0}^{6}(0.630243x_i+0.542163-y_i)^2=0.124691$.`,hu:`**9.2. példa.** Keresd meg az alábbi adatokra legjobban illeszkedő $y=ax+b$ egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_iy_i$ értékeket, az utolsó sorban az összegeket.

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

Az összegeket a normálegyenletekbe helyettesítve ($89.5a+20.0b=67.25$, $20.0a+7b=16.4$) a megoldás $a=0.630243$, $b=0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i+0.542163-y_i)^2=0.124691$.`},j=[w,{title:{en:"Lagrange interpolation",hu:"Lagrange-interpoláció"},items:[{label:{en:"Example 6.2",hu:"6.2. példa"},body:n(g,/\*\*Example 6\.2\.\*\*/,b,/\*\*6\.2\. *példa\.\*\*/)}]},{title:{en:"Newton interpolating polynomial",hu:"Newton-féle interpolációs polinom"},items:[{label:{en:"Example 6.15",hu:"6.15. példa"},body:n(_,/\*\*Example 6\.15\.\*\*/,k,/\*\*6\.15\. *példa\.\*\*/)}]},{title:{en:"Hermite interpolation",hu:"Hermite-interpoláció"},items:[{label:{en:"Example 6.21",hu:"6.21. példa"},body:n(v,/\*\*Example 6\.21\.\*\*/,y,/\*\*6\.21\. *példa\.\*\*/)}]},{title:{en:"Numerical differentiation (first/second differences, second derivative)",hu:"Numerikus differenciálás (elsőrendű, másodrendű differenciák, második derivált)"},items:[{label:{en:"Example 7.1",hu:"7.1. példa"},body:n(h,/\*\*Example 7\.1\.\*\*/,m,/\*\*7\.1\. *példa\.\*\*/)},{label:{en:"Example 7.2",hu:"7.2. példa"},body:n(h,/\*\*Example 7\.2\.\*\*/,m,/\*\*7\.2\. *példa\.\*\*/)},{label:{en:"Example 7.4",hu:"7.4. példa"},body:n(h,/\*\*Example 7\.4\.\*\*/,m,/\*\*7\.4\. *példa\.\*\*/)}]},{title:{en:"Trapezoidal rule, Simpson’s rule, two-point Gaussian quadrature",hu:"Trapézformula, Simpson-formula, két pontos Gauss-féle kvadratúra"},items:[{label:{en:"Example 7.7",hu:"7.7. példa"},body:n(d,/\*\*Example 7\.7\.\*\*/,f,/\*\*7\.7\. *példa\.\*\*/)},{label:{en:"Example 7.8",hu:"7.8. példa"},body:n(d,/\*\*Example 7\.8\.\*\*/,f,/\*\*7\.8\. *példa\.\*\*/)},{label:{en:"Example 7.11",hu:"7.11. példa"},body:n(p,/\*\*Example 7\.11\.\*\*/,c,/\*\*7\.11\. *példa\.\*\*/)},{label:{en:"Example 7.15",hu:"7.15. példa"},body:n(p,/\*\*Example 7\.15\.\*\*/,c,/\*\*7\.15\. *példa\.\*\*/)}]},{title:{en:"Fitting a line",hu:"Egyenes illesztése"},items:[{label:{en:"Example 9.2",hu:"9.2. példa"},body:q}]}],L=[{title:{en:"Fixed-point iteration in 1 and n dimensions",hu:"Fixpont iteráció 1 és n dimenzióban"},body:{en:`**Setup.** Rewrite $f(x)=0$ as $x=g(x)$; iterate $x_{k+1}=g(x_k)$. A fixed point $p=g(p)$.

**Contraction (1D).** $g$ is a contraction on $[a,b]$ if $g$ maps $[a,b]$ into itself and $|g'(x)|\\le L<1$. Then a unique fixed point exists and iteration converges for any $x_0\\in[a,b]$.

**Local convergence.** If $g$ is $C^1$ near $p$ and $|g'(p)|<1$, the iteration converges locally; it diverges if $|g'(p)|>1$.

**Rate.** Linear with $e_{k+1}\\approx g'(p)\\,e_k$. If $g'(p)=0$ (e.g. Newton) convergence is faster.

**Error / stopping.** A priori: $|x_k-p|\\le \\dfrac{L^k}{1-L}|x_1-x_0|$. A posteriori / stop: $|x_k-p|\\le \\dfrac{L}{1-L}|x_k-x_{k-1}|$, so iterate until $|x_k-x_{k-1}|<\\varepsilon$.

**n dimensions.** $\\mathbf{x}_{k+1}=\\mathbf{g}(\\mathbf{x}_k)$. Contraction if $\\|\\mathbf{g}(\\mathbf{x})-\\mathbf{g}(\\mathbf{y})\\|\\le L\\|\\mathbf{x}-\\mathbf{y}\\|$, $L<1$; sufficient: $\\|\\mathbf{g}'(\\mathbf{x})\\|<1$ in some matrix norm. Local convergence $\\iff$ spectral radius $\\rho(\\mathbf{g}'(\\mathbf{p}))<1$.

**Pitfalls.** Wrong rearrangement gives $|g'(p)|>1$ (diverges); $g$ must map the interval into itself; $\\rho<1$ is the sharp condition, $\\|\\cdot\\|<1$ is only sufficient.`,hu:`**Felírás.** Az $f(x)=0$ egyenletet $x=g(x)$ alakra hozzuk; iteráció $x_{k+1}=g(x_k)$. Fixpont: $p=g(p)$.

**Kontrakció (1D).** $g$ kontrakció $[a,b]$-n, ha $g$ az $[a,b]$-t önmagába képezi és $|g'(x)|\\le L<1$. Ekkor egyetlen fixpont van, és az iteráció minden $x_0\\in[a,b]$ esetén konvergál.

**Lokális konvergencia.** Ha $g\\in C^1$ a $p$ körül és $|g'(p)|<1$, az iteráció lokálisan konvergál; $|g'(p)|>1$ esetén divergál.

**Sebesség.** Lineáris, $e_{k+1}\\approx g'(p)\\,e_k$. Ha $g'(p)=0$ (pl. Newton), gyorsabb.

**Hibabecslés / leállás.** A priori: $|x_k-p|\\le \\dfrac{L^k}{1-L}|x_1-x_0|$. A posteriori / leállás: $|x_k-p|\\le \\dfrac{L}{1-L}|x_k-x_{k-1}|$, tehát amíg $|x_k-x_{k-1}|<\\varepsilon$.

**n dimenzió.** $\\mathbf{x}_{k+1}=\\mathbf{g}(\\mathbf{x}_k)$. Kontrakció, ha $\\|\\mathbf{g}(\\mathbf{x})-\\mathbf{g}(\\mathbf{y})\\|\\le L\\|\\mathbf{x}-\\mathbf{y}\\|$, $L<1$; elegendő: $\\|\\mathbf{g}'(\\mathbf{x})\\|<1$ valamely mátrixnormában. Lokális konvergencia $\\iff$ a spektrálsugár $\\rho(\\mathbf{g}'(\\mathbf{p}))<1$.

**Buktatók.** Rossz átrendezés $|g'(p)|>1$-et ad (divergál); $g$-nek az intervallumot önmagába kell képeznie; $\\rho<1$ az éles feltétel, $\\|\\cdot\\|<1$ csak elegendő.`}},{title:{en:"Solving nonlinear equations: bisection, regula falsi, Newton, secant",hu:"Nemlineáris egyenletek: intervallumfelezés, húrmódszer, Newton-módszer, szelőmódszer"},body:{en:`Goal: solve $f(x)=0$.

**Bisection.** Need $f(a)f(b)<0$ (sign change, $f$ continuous). Halve interval, keep the half with the sign change. Always converges; **linear**, error halves each step: $|e_{k+1}|=\\tfrac12|e_k|$. After $n$ steps error $\\le (b-a)/2^{n+1}$.

**Regula falsi (chord).** Bracketing too; next point is the chord root
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Keeps a bracket; reliable but often linear (one endpoint can stick).

**Newton.** $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$
**Quadratic** ($p=2$) for a simple root with $f'(p)\\neq0$, given a good start. Needs $f'$; may diverge from a bad start; only linear at a multiple root.

**Secant.** Newton with $f'(x_k)\\approx\\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}}$:
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Order $p=\\frac{1+\\sqrt5}{2}\\approx1.618$ (superlinear); no derivative, two starting points; no bracket guarantee.

**Pitfalls.** Newton/secant: $f'\\approx0$ blows up; multiple roots kill the order; bracketing methods are robust but slow.`,hu:`Cél: $f(x)=0$ megoldása.

**Intervallumfelezés.** Kell $f(a)f(b)<0$ (előjelváltás, $f$ folytonos). Felezzük az intervallumot, az előjelváltó felét tartjuk meg. Mindig konvergál; **lineáris**, a hiba feleződik: $|e_{k+1}|=\\tfrac12|e_k|$. $n$ lépés után hiba $\\le (b-a)/2^{n+1}$.

**Húrmódszer (regula falsi).** Szintén beékelő; a következő pont a húr gyöke
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Megtartja a beékelést; megbízható, de gyakran lineáris (egy végpont beragadhat).

**Newton.** $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$
Egyszeres gyök ($f'(p)\\neq0$) és jó kezdőpont esetén **kvadratikus** ($p=2$). Kell $f'$; rossz kezdőpontból divergálhat; többszörös gyöknél csak lineáris.

**Szelőmódszer.** Newton, ahol $f'(x_k)\\approx\\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}}$:
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Rend $p=\\frac{1+\\sqrt5}{2}\\approx1.618$ (szuperlineáris); nem kell derivált, két kezdőpont; nincs beékelési garancia.

**Buktatók.** Newton/szelő: $f'\\approx0$ esetén elszáll; többszörös gyök rontja a rendet; a beékelő módszerek robusztusak, de lassúak.`}},{title:{en:"Vector and matrix norms",hu:"Vektor- és mátrixnormák"},body:{en:`**Vector norms** ($\\mathbf{x}\\in\\mathbb{R}^n$).
- 1-norm: $\\|\\mathbf{x}\\|_1=\\sum_i|x_i|$.
- 2-norm (Euclidean): $\\|\\mathbf{x}\\|_2=\\sqrt{\\sum_i x_i^2}$.
- $\\infty$-norm (max): $\\|\\mathbf{x}\\|_\\infty=\\max_i|x_i|$.

**Norm axioms.** $\\|\\mathbf{x}\\|\\ge0$, $=0\\iff\\mathbf{x}=0$; $\\|\\alpha\\mathbf{x}\\|=|\\alpha|\\,\\|\\mathbf{x}\\|$; triangle $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$.

**Induced (operator) matrix norms.** $\\displaystyle\\|A\\|=\\max_{\\mathbf{x}\\neq0}\\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}$.
- $\\|A\\|_1=\\max_j\\sum_i|a_{ij}|$ — **max absolute column sum**.
- $\\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|$ — **max absolute row sum**.
- $\\|A\\|_2=\\sqrt{\\rho(A^TA)}=\\sigma_{\\max}(A)$ — **spectral norm** (largest singular value).

**Properties.** Submultiplicative $\\|AB\\|\\le\\|A\\|\\,\\|B\\|$ and compatible $\\|A\\mathbf{x}\\|\\le\\|A\\|\\,\\|\\mathbf{x}\\|$. Always $\\rho(A)\\le\\|A\\|$ for any induced norm.

**Pitfall.** Don't swap the row/column rule for $\\|\\cdot\\|_1$ vs $\\|\\cdot\\|_\\infty$; the Frobenius norm $\\sqrt{\\sum a_{ij}^2}$ is **not** induced by the 2-norm.`,hu:`**Vektornormák** ($\\mathbf{x}\\in\\mathbb{R}^n$).
- 1-norma: $\\|\\mathbf{x}\\|_1=\\sum_i|x_i|$.
- 2-norma (euklideszi): $\\|\\mathbf{x}\\|_2=\\sqrt{\\sum_i x_i^2}$.
- $\\infty$-norma (max): $\\|\\mathbf{x}\\|_\\infty=\\max_i|x_i|$.

**Norma-axiómák.** $\\|\\mathbf{x}\\|\\ge0$, $=0\\iff\\mathbf{x}=0$; $\\|\\alpha\\mathbf{x}\\|=|\\alpha|\\,\\|\\mathbf{x}\\|$; háromszög $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$.

**Indukált (operátor-) mátrixnormák.** $\\displaystyle\\|A\\|=\\max_{\\mathbf{x}\\neq0}\\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}$.
- $\\|A\\|_1=\\max_j\\sum_i|a_{ij}|$ — **maximális abszolút oszlopösszeg**.
- $\\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|$ — **maximális abszolút sorösszeg**.
- $\\|A\\|_2=\\sqrt{\\rho(A^TA)}=\\sigma_{\\max}(A)$ — **spektrálnorma** (legnagyobb szinguláris érték).

**Tulajdonságok.** Szubmultiplikatív $\\|AB\\|\\le\\|A\\|\\,\\|B\\|$ és kompatibilis $\\|A\\mathbf{x}\\|\\le\\|A\\|\\,\\|\\mathbf{x}\\|$. Mindig $\\rho(A)\\le\\|A\\|$ bármely indukált normára.

**Buktató.** Ne keverd a sor/oszlop szabályt $\\|\\cdot\\|_1$ és $\\|\\cdot\\|_\\infty$ közt; a Frobenius-norma $\\sqrt{\\sum a_{ij}^2}$ **nem** a 2-norma indukált normája.`}},{title:{en:"Newton's method in n dimensions",hu:"Newton-módszer n dimenzióban"},body:{en:`Solve $\\mathbf{F}(\\mathbf{x})=\\mathbf{0}$, $\\mathbf{F}:\\mathbb{R}^n\\to\\mathbb{R}^n$.

**Jacobian.** $J(\\mathbf{x})=\\mathbf{F}'(\\mathbf{x})$ with entries $J_{ij}=\\dfrac{\\partial F_i}{\\partial x_j}$.

**Iteration.** $\\mathbf{x}_{k+1}=\\mathbf{x}_k-J(\\mathbf{x}_k)^{-1}\\mathbf{F}(\\mathbf{x}_k)$. In practice **never invert** — solve the linear system for the step $\\Delta\\mathbf{x}_k$:
$$J(\\mathbf{x}_k)\\,\\Delta\\mathbf{x}_k=-\\mathbf{F}(\\mathbf{x}_k),\\qquad \\mathbf{x}_{k+1}=\\mathbf{x}_k+\\Delta\\mathbf{x}_k.$$

**Algorithm gist.** Per step: (1) evaluate $\\mathbf{F}(\\mathbf{x}_k)$ and $J(\\mathbf{x}_k)$; (2) solve $J\\Delta=-\\mathbf{F}$ (e.g. Gauss/LU); (3) update; (4) stop when $\\|\\Delta\\mathbf{x}_k\\|$ or $\\|\\mathbf{F}(\\mathbf{x}_k)\\|<\\varepsilon$.

**Convergence.** **Quadratic** locally if $J(\\mathbf{p})$ is nonsingular and $\\mathbf{F}\\in C^2$, with a good start $\\mathbf{x}_0$.

**Pitfalls.** Singular/ill-conditioned $J$; cost of forming $J$ ($n^2$ derivatives) and solving ($O(n^3)$) each step; needs a good initial guess; divergence otherwise. Variants reuse $J$ (modified Newton) or approximate it (quasi-Newton/Broyden).`,hu:`Megoldandó $\\mathbf{F}(\\mathbf{x})=\\mathbf{0}$, $\\mathbf{F}:\\mathbb{R}^n\\to\\mathbb{R}^n$.

**Jacobi-mátrix.** $J(\\mathbf{x})=\\mathbf{F}'(\\mathbf{x})$, elemei $J_{ij}=\\dfrac{\\partial F_i}{\\partial x_j}$.

**Iteráció.** $\\mathbf{x}_{k+1}=\\mathbf{x}_k-J(\\mathbf{x}_k)^{-1}\\mathbf{F}(\\mathbf{x}_k)$. A gyakorlatban **soha nem invertálunk** — a $\\Delta\\mathbf{x}_k$ lépésre megoldjuk a lineáris rendszert:
$$J(\\mathbf{x}_k)\\,\\Delta\\mathbf{x}_k=-\\mathbf{F}(\\mathbf{x}_k),\\qquad \\mathbf{x}_{k+1}=\\mathbf{x}_k+\\Delta\\mathbf{x}_k.$$

**Algoritmus.** Lépésenként: (1) $\\mathbf{F}(\\mathbf{x}_k)$ és $J(\\mathbf{x}_k)$ kiértékelése; (2) $J\\Delta=-\\mathbf{F}$ megoldása (pl. Gauss/LU); (3) frissítés; (4) leállás, ha $\\|\\Delta\\mathbf{x}_k\\|$ vagy $\\|\\mathbf{F}(\\mathbf{x}_k)\\|<\\varepsilon$.

**Konvergencia.** Lokálisan **kvadratikus**, ha $J(\\mathbf{p})$ nemszinguláris és $\\mathbf{F}\\in C^2$, jó $\\mathbf{x}_0$ kezdőpontnál.

**Buktatók.** Szinguláris/rosszul kondicionált $J$; $J$ felépítése ($n^2$ derivált) és a megoldás ($O(n^3)$) lépésenkénti költsége; jó kezdőpont kell, különben divergál. Változatok: $J$ újrahasználata (módosított Newton) vagy közelítése (kvázi-Newton/Broyden).`}},{title:{en:"Order of convergence",hu:"Konvergenciarend"},body:{en:`Let $e_k=x_k-p$ (error). A sequence converges with **order** $p\\ge1$ if
$$\\lim_{k\\to\\infty}\\frac{|e_{k+1}|}{|e_k|^p}=C,\\qquad 0<C<\\infty\\ \\ (C<1\\text{ if }p=1).$$
$C$ is the asymptotic error constant.

**Cases.**
- **Linear** ($p=1$, $0<C<1$): error shrinks by factor $C$ each step, e.g. bisection ($C=\\tfrac12$), typical fixed-point with $0<|g'(p)|<1$.
- **Superlinear** ($1<p<2$): e.g. secant, $p\\approx1.618$.
- **Quadratic** ($p=2$): error roughly squares; digits double; e.g. Newton at a simple root.

**Estimating $p$ from data** (three iterates' errors, or use successive differences):
$$p\\approx\\frac{\\ln\\!\\big(|e_{k+1}|/|e_k|\\big)}{\\ln\\!\\big(|e_k|/|e_{k-1}|\\big)}.$$
If $p$ unknown use $d_k=x_{k+1}-x_k$ in place of $e_k$.

**Pitfalls.** $C<1$ is required only for linear order ($p=1$); for $p>1$ no smallness of $C$ is needed (only a good enough start). A multiple root drops Newton from quadratic to linear.`,hu:`Legyen $e_k=x_k-p$ (hiba). A sorozat $p\\ge1$ **renddel** konvergál, ha
$$\\lim_{k\\to\\infty}\\frac{|e_{k+1}|}{|e_k|^p}=C,\\qquad 0<C<\\infty\\ \\ (C<1,\\text{ ha }p=1).$$
$C$ az aszimptotikus hibakonstans.

**Esetek.**
- **Lineáris** ($p=1$, $0<C<1$): a hiba $C$-szeresére csökken lépésenként, pl. intervallumfelezés ($C=\\tfrac12$), tipikus fixpont $0<|g'(p)|<1$ esetén.
- **Szuperlineáris** ($1<p<2$): pl. szelőmódszer, $p\\approx1.618$.
- **Kvadratikus** ($p=2$): a hiba kb. négyzetre emelkedik; a jegyek száma duplázódik; pl. Newton egyszeres gyöknél.

**$p$ becslése adatokból** (három iteráció hibájából, vagy egymást követő különbségekből):
$$p\\approx\\frac{\\ln\\!\\big(|e_{k+1}|/|e_k|\\big)}{\\ln\\!\\big(|e_k|/|e_{k-1}|\\big)}.$$
Ha $p$ ismeretlen, $e_k$ helyett $d_k=x_{k+1}-x_k$ használható.

**Buktatók.** $C<1$ csak lineáris rendnél ($p=1$) kell; $p>1$ esetén nem kell $C$ kicsisége (csak elég jó kezdőpont). Többszörös gyök a Newtont kvadratikusról lineárisra rontja.`}},{title:{en:"Gaussian elimination, pivoting, Gauss–Jordan",hu:"Gauss-elimináció, főelemkiválasztás, Gauss–Jordan-elimináció"},body:{en:`Solve $A\\mathbf{x}=\\mathbf{b}$.

**Gaussian elimination.** Forward elimination turns $A$ into upper triangular $U$ (multiplier $m_{ik}=a_{ik}/a_{kk}$, subtract $m_{ik}\\times$ pivot row); then **back substitution**. This is the LU factorization $A=LU$.

**Pivoting (why).** A zero or tiny pivot $a_{kk}$ causes division by ~0 and large rounding errors.
- **Partial pivoting:** swap rows so the pivot is the largest $|a_{ik}|$ in the column. Gives $PA=LU$; standard and stable enough.
- **Complete pivoting:** search whole submatrix (row + column swaps); more stable, rarely needed, costlier.

**Gauss–Jordan.** Eliminate **above and below** each pivot and scale pivots to 1, reducing $[A\\,|\\,\\mathbf{b}]$ to $[I\\,|\\,\\mathbf{x}]$ — no back substitution. Also gives $A^{-1}$ via $[A\\,|\\,I]\\to[I\\,|\\,A^{-1}]$.

**Operation counts.** Gaussian elimination $\\approx \\dfrac{n^3}{3}$ multiplications (back-sub $\\approx n^2/2$). Gauss–Jordan $\\approx \\dfrac{n^3}{2}$ — more work, so GE+back-sub is preferred for solving.

**Pitfalls.** Never solve via $\\mathbf{x}=A^{-1}\\mathbf{b}$ (slower, less accurate); without pivoting GE can fail/be unstable even for nonsingular $A$.`,hu:`Megoldandó $A\\mathbf{x}=\\mathbf{b}$.

**Gauss-elimináció.** Az előre-elimináció $A$-t felső háromszög $U$-vá alakítja (szorzó $m_{ik}=a_{ik}/a_{kk}$, kivonjuk a $m_{ik}\\times$ pivotsort); majd **visszahelyettesítés**. Ez az $A=LU$ felbontás.

**Főelemkiválasztás (miért).** Nulla vagy kicsi $a_{kk}$ pivot ~0-val való osztáshoz és nagy kerekítési hibákhoz vezet.
- **Részleges:** sorcserékkel a pivot legyen az oszlop legnagyobb $|a_{ik}|$ eleme. $PA=LU$; szabványos és elég stabil.
- **Teljes:** az egész részmátrixban keres (sor- és oszlopcsere); stabilabb, ritkán kell, költségesebb.

**Gauss–Jordan.** Minden pivot **alatt és felett** is eliminál, a pivotokat 1-re skálázza, $[A\\,|\\,\\mathbf{b}]$-t $[I\\,|\\,\\mathbf{x}]$-re hozza — nincs visszahelyettesítés. $A^{-1}$-t is ad: $[A\\,|\\,I]\\to[I\\,|\\,A^{-1}]$.

**Műveletigény.** Gauss-elimináció $\\approx \\dfrac{n^3}{3}$ szorzás (visszahelyettesítés $\\approx n^2/2$). Gauss–Jordan $\\approx \\dfrac{n^3}{2}$ — több munka, ezért megoldásra a GE+visszahelyettesítés jobb.

**Buktatók.** Soha ne $\\mathbf{x}=A^{-1}\\mathbf{b}$ útján oldj (lassabb, pontatlanabb); főelemkiválasztás nélkül a GE nemszinguláris $A$-ra is elromolhat/instabil lehet.`}},{title:{en:"Linear fixed-point iteration",hu:"Lineáris fixpont iteráció"},body:{en:`**Form.** Iterate $\\mathbf{x}_{k+1}=B\\mathbf{x}_k+\\mathbf{c}$ (e.g. from splitting $A\\mathbf{x}=\\mathbf{b}$). Fixed point $\\mathbf{x}^*=B\\mathbf{x}^*+\\mathbf{c}$, i.e. $(I-B)\\mathbf{x}^*=\\mathbf{c}$.

**Error recursion.** With $\\mathbf{e}_k=\\mathbf{x}_k-\\mathbf{x}^*$: $\\mathbf{e}_{k+1}=B\\mathbf{e}_k=B^{k+1}\\mathbf{e}_0$.

**Convergence (sharp).** Converges for every $\\mathbf{x}_0$ **iff** the spectral radius
$$\\rho(B)=\\max_i|\\lambda_i(B)|<1.$$
**Sufficient:** $\\|B\\|<1$ in some induced norm (then it's a contraction).

**Rate / error bound.** If $\\|B\\|=q<1$:
$$\\|\\mathbf{e}_k\\|\\le q^k\\|\\mathbf{e}_0\\|,\\qquad \\|\\mathbf{x}_k-\\mathbf{x}^*\\|\\le\\frac{q}{1-q}\\|\\mathbf{x}_k-\\mathbf{x}_{k-1}\\|.$$
Asymptotic convergence factor is $\\rho(B)$ (smaller $\\Rightarrow$ faster).

**Pitfalls.** $\\rho(B)<1$ is necessary and sufficient; $\\|B\\|<1$ is only sufficient — $\\|B\\|\\ge1$ does **not** imply divergence. Convergence can be slow if $\\rho(B)$ is close to 1.`,hu:`**Alak.** Iteráció $\\mathbf{x}_{k+1}=B\\mathbf{x}_k+\\mathbf{c}$ (pl. $A\\mathbf{x}=\\mathbf{b}$ felbontásából). Fixpont $\\mathbf{x}^*=B\\mathbf{x}^*+\\mathbf{c}$, azaz $(I-B)\\mathbf{x}^*=\\mathbf{c}$.

**Hibarekurzió.** $\\mathbf{e}_k=\\mathbf{x}_k-\\mathbf{x}^*$ jelöléssel: $\\mathbf{e}_{k+1}=B\\mathbf{e}_k=B^{k+1}\\mathbf{e}_0$.

**Konvergencia (éles).** Minden $\\mathbf{x}_0$-ra **akkor és csak akkor** konvergál, ha a spektrálsugár
$$\\rho(B)=\\max_i|\\lambda_i(B)|<1.$$
**Elegendő:** $\\|B\\|<1$ valamely indukált normában (ekkor kontrakció).

**Sebesség / hibabecslés.** Ha $\\|B\\|=q<1$:
$$\\|\\mathbf{e}_k\\|\\le q^k\\|\\mathbf{e}_0\\|,\\qquad \\|\\mathbf{x}_k-\\mathbf{x}^*\\|\\le\\frac{q}{1-q}\\|\\mathbf{x}_k-\\mathbf{x}_{k-1}\\|.$$
Az aszimptotikus konvergenciafaktor $\\rho(B)$ (kisebb $\\Rightarrow$ gyorsabb).

**Buktatók.** $\\rho(B)<1$ szükséges és elegendő; $\\|B\\|<1$ csak elegendő — $\\|B\\|\\ge1$ **nem** jelent divergenciát. Ha $\\rho(B)$ közel van 1-hez, a konvergencia lassú.`}},{title:{en:"Jacobi and Gauss–Seidel iteration",hu:"Jacobi- és Gauss-Seidel-iteráció"},body:{en:`Solve $A\\mathbf{x}=\\mathbf{b}$ by splitting $A=D-L-U$ ($D$ diagonal, $-L$ strictly lower, $-U$ strictly upper part).

**Jacobi.** Use only old components:
$$\\mathbf{x}^{(k+1)}=D^{-1}\\big(L+U)\\mathbf{x}^{(k)}+D^{-1}\\mathbf{b},\\quad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big).$$
Iteration matrix $B_J=D^{-1}(L+U)$.

**Gauss–Seidel.** Use already-updated components immediately:
$$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)}\\Big).$$
Iteration matrix $B_{GS}=(D-L)^{-1}U$.

**Convergence.** Both converge $\\iff \\rho(B)<1$. **Strict diagonal dominance** ($|a_{ii}|>\\sum_{j\\neq i}|a_{ij}|$ for all $i$) $\\Rightarrow$ both converge. GS also converges for symmetric positive definite $A$. GS usually faster than Jacobi.

**Pitfalls.** Need $a_{ii}\\neq0$ (reorder rows if needed). Diagonal dominance is sufficient, not necessary. Jacobi is parallelizable; GS is sequential (depends on update order).`,hu:`Megoldandó $A\\mathbf{x}=\\mathbf{b}$ az $A=D-L-U$ felbontással ($D$ diagonális, $-L$ szigorúan alsó, $-U$ szigorúan felső rész).

**Jacobi.** Csak régi komponensek:
$$\\mathbf{x}^{(k+1)}=D^{-1}\\big(L+U)\\mathbf{x}^{(k)}+D^{-1}\\mathbf{b},\\quad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big).$$
Iterációs mátrix $B_J=D^{-1}(L+U)$.

**Gauss–Seidel.** A már frissített komponenseket azonnal használja:
$$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)}\\Big).$$
Iterációs mátrix $B_{GS}=(D-L)^{-1}U$.

**Konvergencia.** Mindkettő $\\iff \\rho(B)<1$. **Szigorú diagonális dominancia** ($|a_{ii}|>\\sum_{j\\neq i}|a_{ij}|$ minden $i$-re) $\\Rightarrow$ mindkettő konvergál. A GS szimmetrikus pozitív definit $A$-ra is konvergál. A GS általában gyorsabb a Jacobinál.

**Buktatók.** Kell $a_{ii}\\neq0$ (szükség esetén sorcsere). A diagonális dominancia elegendő, nem szükséges. A Jacobi párhuzamosítható; a GS soros (függ a frissítési sorrendtől).`}},{title:{en:"Perturbation of linear systems, condition number",hu:"Lineáris egyenletrendszerek perturbációja, kondíciószám"},body:{en:`For $A\\mathbf{x}=\\mathbf{b}$, how do errors in $\\mathbf{b}$ and $A$ affect $\\mathbf{x}$?

**Condition number.** $$\\kappa(A)=\\|A\\|\\,\\|A^{-1}\\|\\ \\ (\\ge1).$$
Depends on the chosen norm.

**Perturbation bounds.**
- Right-hand side only ($A\\hat{\\mathbf{x}}=\\mathbf{b}+\\Delta\\mathbf{b}$):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\le\\kappa(A)\\,\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}.$$
- Both $A$ and $\\mathbf{b}$ perturbed (to first order):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\lesssim \\kappa(A)\\left(\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}+\\frac{\\|\\Delta A\\|}{\\|A\\|}\\right).$$

**Reading it.** $\\kappa(A)$ amplifies relative input errors. $\\kappa\\approx1$: well-conditioned. $\\kappa\\gg1$: **ill-conditioned** — tiny data/rounding errors cause large solution errors; expect to lose about $\\log_{10}\\kappa(A)$ decimal digits.

**Pitfalls.** Ill-conditioning is a property of $A$, **not** of the algorithm — even a perfect solver loses accuracy. A small residual $\\|\\mathbf{b}-A\\hat{\\mathbf{x}}\\|$ does **not** guarantee a small error when $\\kappa(A)$ is large. $\\kappa$ is norm-dependent and always $\\ge1$.`,hu:`Az $A\\mathbf{x}=\\mathbf{b}$ rendszerben hogyan hatnak $\\mathbf{b}$ és $A$ hibái $\\mathbf{x}$-re?

**Kondíciószám.** $$\\kappa(A)=\\|A\\|\\,\\|A^{-1}\\|\\ \\ (\\ge1).$$
Függ a választott normától.

**Perturbációs becslések.**
- Csak a jobb oldal ($A\\hat{\\mathbf{x}}=\\mathbf{b}+\\Delta\\mathbf{b}$):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\le\\kappa(A)\\,\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}.$$
- $A$ és $\\mathbf{b}$ is perturbált (elsőrendben):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\lesssim \\kappa(A)\\left(\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}+\\frac{\\|\\Delta A\\|}{\\|A\\|}\\right).$$

**Értelmezés.** $\\kappa(A)$ felnagyítja a relatív bemeneti hibákat. $\\kappa\\approx1$: jól kondicionált. $\\kappa\\gg1$: **rosszul kondicionált** — apró adat-/kerekítési hibák nagy megoldáshibát okoznak; kb. $\\log_{10}\\kappa(A)$ tizedesjegyet veszítünk.

**Buktatók.** A rossz kondicionáltság $A$ tulajdonsága, **nem** az algoritmusé — egy tökéletes megoldó is veszít pontosságból. Kis reziduum $\\|\\mathbf{b}-A\\hat{\\mathbf{x}}\\|$ **nem** garantál kis hibát, ha $\\kappa(A)$ nagy. $\\kappa$ normafüggő és mindig $\\ge1$.`}}],E=[{title:{en:"Lagrange interpolation",hu:"Lagrange-interpoláció"},body:{en:`**Goal.** Find the unique degree $\\le n$ polynomial through $n+1$ points $(x_0,y_0),\\dots,(x_n,y_n)$ with distinct nodes $x_i$.

**Basis polynomials (cardinal):**
$$l_k(x)=\\prod_{i\\ne k}\\frac{x-x_i}{x_k-x_i},\\qquad l_k(x_j)=\\delta_{kj}.$$

**Interpolant:**
$$L_n(x)=\\sum_{k=0}^{n} y_k\\, l_k(x).$$

**Error term** (if $f\\in C^{n+1}$, some $\\xi$ in the interval):
$$f(x)-L_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{n}(x-x_i).$$

- Uniqueness: only **one** polynomial of degree $\\le n$ fits $n+1$ distinct nodes.
- Drawback: adding a node recomputes **all** $l_k$ (use Newton form for incremental work).
- Runge phenomenon: equispaced high-degree nodes oscillate; prefer Chebyshev nodes.`,hu:`**Cél.** Megkeresni az egyetlen, legfeljebb $n$-edfokú polinomot, amely átmegy az $n+1$ db $(x_0,y_0),\\dots,(x_n,y_n)$ ponton (a $x_i$ alappontok különbözőek).

**Alappolinomok:**
$$l_k(x)=\\prod_{i\\ne k}\\frac{x-x_i}{x_k-x_i},\\qquad l_k(x_j)=\\delta_{kj}.$$

**Interpolációs polinom:**
$$L_n(x)=\\sum_{k=0}^{n} y_k\\, l_k(x).$$

**Hibatag** (ha $f\\in C^{n+1}$, valamely $\\xi$-re az intervallumban):
$$f(x)-L_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{n}(x-x_i).$$

- Egyértelműség: $n+1$ különböző alappontra **csak egy** legfeljebb $n$-edfokú polinom illik.
- Hátrány: új alappontnál **minden** $l_k$ újraszámolandó (inkrementálishoz Newton-alak).
- Runge-jelenség: egyenközű, magas fokú alappontok oszcillálnak; Csebisev-alappontok jobbak.`}},{title:{en:"Divided differences, Newton form of the interpolating polynomial",hu:"Osztott differenciák, a Lagrange-interpoláció Newton-féle alakja"},body:{en:`**Divided differences (recurrence):**
$$f[x_i]=f(x_i),\\qquad f[x_i,\\dots,x_{i+k}]=\\frac{f[x_{i+1},\\dots,x_{i+k}]-f[x_i,\\dots,x_{i+k-1}]}{x_{i+k}-x_i}.$$

**Newton form** (same polynomial as Lagrange's $L_n$):
$$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i).$$

**Divided-difference table** — top diagonal gives the coefficients:
$$
\\begin{array}{c|cccc}
x_0 & f[x_0] & & & \\\\
x_1 & f[x_1] & f[x_0,x_1] & & \\\\
x_2 & f[x_2] & f[x_1,x_2] & f[x_0,x_1,x_2] & \\\\
\\end{array}
$$

**Horner-like (nested) evaluation** with coeffs $c_k=f[x_0,\\dots,x_k]$:
$$p=c_n;\\quad p=c_k+(x-x_k)\\,p\\ \\text{ for } k=n-1,\\dots,0.$$

- Adding a new node only appends **one** term — cheap incremental updates.
- $f[x_0,\\dots,x_n]=\\dfrac{f^{(n)}(\\xi)}{n!}$ for some $\\xi$; symmetric in its arguments.`,hu:`**Osztott differenciák (rekurzió):**
$$f[x_i]=f(x_i),\\qquad f[x_i,\\dots,x_{i+k}]=\\frac{f[x_{i+1},\\dots,x_{i+k}]-f[x_i,\\dots,x_{i+k-1}]}{x_{i+k}-x_i}.$$

**Newton-féle alak** (ugyanaz a polinom, mint a Lagrange-féle $L_n$):
$$L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i).$$

**Osztott differencia táblázat** — a felső átló adja az együtthatókat:
$$
\\begin{array}{c|cccc}
x_0 & f[x_0] & & & \\\\
x_1 & f[x_1] & f[x_0,x_1] & & \\\\
x_2 & f[x_2] & f[x_1,x_2] & f[x_0,x_1,x_2] & \\\\
\\end{array}
$$

**Horner-szerű (beágyazott) kiértékelés** a $c_k=f[x_0,\\dots,x_k]$ együtthatókkal:
$$p=c_n;\\quad p=c_k+(x-x_k)\\,p\\ \\text{ ahol } k=n-1,\\dots,0.$$

- Új alappont csak **egy** taggal bővít — olcsó inkrementális frissítés.
- $f[x_0,\\dots,x_n]=\\dfrac{f^{(n)}(\\xi)}{n!}$ valamely $\\xi$-re; az argumentumokban szimmetrikus.`}},{title:{en:"Numerical differentiation (Lagrange and Taylor approaches)",hu:"Numerikus differenciálás – Lagrange és Taylor módszerek"},body:{en:`**First derivative (step $h$):**
$$
f'(x)\\approx\\frac{f(x+h)-f(x)}{h}\\ \\text{(forward, }O(h)\\text{)},\\quad
\\frac{f(x)-f(x-h)}{h}\\ \\text{(backward, }O(h)\\text{)},
$$
$$
f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}\\quad\\text{(central, }O(h^2)\\text{)}.
$$

**Second derivative (central, $O(h^2)$):**
$$f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}.$$

**Taylor derivation** (e.g. central first derivative):
$$f(x\\pm h)=f(x)\\pm hf'(x)+\\tfrac{h^2}{2}f''(x)\\pm\\tfrac{h^3}{6}f'''(x)+\\dots$$
Subtracting cancels even terms $\\Rightarrow$ leading error $-\\tfrac{h^2}{6}f'''(\\xi)$, hence $O(h^2)$.

**Lagrange approach.** Differentiate the interpolating polynomial $L_n$ and evaluate at $x$; same formulas arise from chosen nodes.

- **Trade-off:** smaller $h$ cuts truncation error but inflates round-off ($\\sim \\varepsilon/h$); an optimal $h$ exists.`,hu:`**Első derivált (lépés $h$):**
$$
f'(x)\\approx\\frac{f(x+h)-f(x)}{h}\\ \\text{(haladó, }O(h)\\text{)},\\quad
\\frac{f(x)-f(x-h)}{h}\\ \\text{(hátráló, }O(h)\\text{)},
$$
$$
f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}\\quad\\text{(centrális, }O(h^2)\\text{)}.
$$

**Második derivált (centrális, $O(h^2)$):**
$$f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}.$$

**Taylor-levezetés** (pl. centrális első derivált):
$$f(x\\pm h)=f(x)\\pm hf'(x)+\\tfrac{h^2}{2}f''(x)\\pm\\tfrac{h^3}{6}f'''(x)+\\dots$$
Kivonáskor a páros tagok kiesnek $\\Rightarrow$ vezető hiba $-\\tfrac{h^2}{6}f'''(\\xi)$, tehát $O(h^2)$.

**Lagrange-féle megközelítés.** Az $L_n$ interpolációs polinomot deriváljuk és kiértékeljük $x$-ben; az alappontválasztásból ugyanezek a képletek adódnak.

- **Kompromisszum:** kisebb $h$ csökkenti a csonkítási hibát, de növeli a kerekítést ($\\sim \\varepsilon/h$); van optimális $h$.`}},{title:{en:"Newton–Cotes formulas",hu:"Newton–Cotes-formulák"},body:{en:`Approximate $\\int_a^b f\\,dx$ by integrating an interpolating polynomial on **equispaced** nodes.

**Trapezoidal rule** (degree of exactness 1):
$$\\int_a^b f\\,dx\\approx\\frac{h}{2}\\big(f(a)+f(b)\\big),\\quad h=b-a,\\quad E=-\\frac{h^3}{12}f''(\\xi).$$

**Simpson's rule** (degree of exactness 3):
$$\\int_a^b f\\,dx\\approx\\frac{h}{3}\\big(f(a)+4f(m)+f(b)\\big),\\ m=\\tfrac{a+b}{2},\\ h=\\tfrac{b-a}{2},\\ E=-\\frac{h^5}{90}f^{(4)}(\\xi).$$

**Composite versions** (subinterval width $h=(b-a)/n$):
$$\\text{Trap: } \\frac{h}{2}\\Big(f_0+2\\!\\sum_{i=1}^{n-1}\\! f_i+f_n\\Big),\\quad E=-\\frac{(b-a)h^2}{12}f''(\\xi).$$
$$\\text{Simpson ($n$ even): } \\frac{h}{3}\\Big(f_0+4\\!\\!\\sum_{\\text{odd }i}\\!\\! f_i+2\\!\\!\\sum_{\\text{even }i}\\!\\! f_i+f_n\\Big),\\ E=-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi).$$

- **Degree of exactness:** highest polynomial degree integrated exactly (Trap = 1, Simpson = 3).
- Composite error orders: $O(h^2)$ trapezoidal, $O(h^4)$ Simpson.`,hu:`Az $\\int_a^b f\\,dx$ közelítése **egyenközű** alappontokon vett interpolációs polinom integrálásával.

**Trapézszabály** (pontossági fok 1):
$$\\int_a^b f\\,dx\\approx\\frac{h}{2}\\big(f(a)+f(b)\\big),\\quad h=b-a,\\quad E=-\\frac{h^3}{12}f''(\\xi).$$

**Simpson-szabály** (pontossági fok 3):
$$\\int_a^b f\\,dx\\approx\\frac{h}{3}\\big(f(a)+4f(m)+f(b)\\big),\\ m=\\tfrac{a+b}{2},\\ h=\\tfrac{b-a}{2},\\ E=-\\frac{h^5}{90}f^{(4)}(\\xi).$$

**Összetett (kompozit) változatok** (részintervallum szélesség $h=(b-a)/n$):
$$\\text{Trapéz: } \\frac{h}{2}\\Big(f_0+2\\!\\sum_{i=1}^{n-1}\\! f_i+f_n\\Big),\\quad E=-\\frac{(b-a)h^2}{12}f''(\\xi).$$
$$\\text{Simpson ($n$ páros): } \\frac{h}{3}\\Big(f_0+4\\!\\!\\sum_{\\text{páratlan }i}\\!\\! f_i+2\\!\\!\\sum_{\\text{páros }i}\\!\\! f_i+f_n\\Big),\\ E=-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi).$$

- **Pontossági fok:** a legmagasabb polinomfok, amit pontosan integrál (trapéz = 1, Simpson = 3).
- Összetett hibarend: $O(h^2)$ trapéz, $O(h^4)$ Simpson.`}},{title:{en:"Golden-section search",hu:"Aranymetszés szerinti keresés módszere"},body:{en:`**Use when:** minimizing a **unimodal** $f$ on $[a,b]$ with **no derivatives** available (derivative-free 1-D minimization).

**Golden ratio:**
$$\\tau=\\frac{\\sqrt5-1}{2}\\approx0.618.$$

**Interior points** in $[a,b]$:
$$x_1=b-\\tau(b-a),\\qquad x_2=a+\\tau(b-a).$$

**Bracket reduction:**
- if $f(x_1)<f(x_2)$: keep $[a,x_2]$ (minimum is left);
- else: keep $[x_1,b]$.

**Key property.** One interior point is **reused** each step, so only **one new** evaluation per iteration. The interval shrinks by factor $\\tau$ each step:
$$(b-a)_{k}=\\tau^{k}(b-a)_0\\quad\\Rightarrow\\quad \\text{linear convergence}.$$

- Robust, no smoothness/derivatives needed; slower than Newton-type methods.
- Stop when interval width $<$ tolerance.`,hu:`**Mikor:** egy **unimodális** $f$ minimalizálása $[a,b]$-n, ha **nincs derivált** (derivált nélküli 1-D minimumkeresés).

**Aranymetszés aránya:**
$$\\tau=\\frac{\\sqrt5-1}{2}\\approx0.618.$$

**Belső pontok** $[a,b]$-ben:
$$x_1=b-\\tau(b-a),\\qquad x_2=a+\\tau(b-a).$$

**Intervallum-szűkítés:**
- ha $f(x_1)<f(x_2)$: tartsuk meg $[a,x_2]$-t (a minimum balra van);
- különben: tartsuk meg $[x_1,b]$-t.

**Kulcstulajdonság.** Minden lépésben az egyik belső pont **újrahasználható**, így iterációnként csak **egy új** függvénykiértékelés kell. Az intervallum lépésenként $\\tau$ arányban zsugorodik:
$$(b-a)_{k}=\\tau^{k}(b-a)_0\\quad\\Rightarrow\\quad \\text{lineáris konvergencia}.$$

- Robusztus, nem kell simaság/derivált; lassabb a Newton-típusú módszereknél.
- Megállás, ha az intervallum hossza $<$ tűréshatár.`}},{title:{en:"Gradient method (steepest descent)",hu:"Gradiens-módszer"},body:{en:`**Idea.** Move opposite the gradient (direction of fastest decrease):
$$x_{k+1}=x_k-\\alpha_k\\,\\nabla f(x_k).$$

**Step size $\\alpha_k$:**
- **Constant** $\\alpha$: simple, but too large diverges, too small is slow.
- **Line search (steepest/optimal):** $\\alpha_k=\\arg\\min_{\\alpha>0} f(x_k-\\alpha\\nabla f(x_k))$. Consecutive search directions are then orthogonal.

**Convergence.** Globally convergent for smooth functions with suitable steps; for **convex / quadratic** $f$ it converges **linearly**, with rate governed by the condition number $\\kappa=\\lambda_{\\max}/\\lambda_{\\min}$ of the Hessian:
$$\\text{rate}\\sim\\Big(\\frac{\\kappa-1}{\\kappa+1}\\Big)^2.$$

- Stationary point: $\\nabla f(x^\\*)=0$.
- Ill-conditioned $\\kappa\\gg1$ $\\Rightarrow$ slow zig-zag; only first-order info (no Hessian needed).`,hu:`**Ötlet.** A gradienssel ellentétes irányba lépünk (a leggyorsabb csökkenés iránya):
$$x_{k+1}=x_k-\\alpha_k\\,\\nabla f(x_k).$$

**Lépéshossz $\\alpha_k$:**
- **Állandó** $\\alpha$: egyszerű, de túl nagy divergál, túl kicsi lassú.
- **Vonalmenti keresés (legmeredekebb/optimális):** $\\alpha_k=\\arg\\min_{\\alpha>0} f(x_k-\\alpha\\nabla f(x_k))$. Ekkor az egymást követő keresési irányok merőlegesek.

**Konvergencia.** Sima függvényeknél megfelelő lépéssel globálisan konvergens; **konvex / kvadratikus** $f$-re **lineárisan** konvergál, az ütemet a Hesse-mátrix $\\kappa=\\lambda_{\\max}/\\lambda_{\\min}$ kondíciószáma szabja meg:
$$\\text{ütem}\\sim\\Big(\\frac{\\kappa-1}{\\kappa+1}\\Big)^2.$$

- Stacionárius pont: $\\nabla f(x^\\*)=0$.
- Rosszul kondicionált $\\kappa\\gg1$ $\\Rightarrow$ lassú cikcakk; csak elsőrendű információ (nem kell Hesse-mátrix).`}},{title:{en:"Newton's method for minimization",hu:"Newton-módszer minimumkeresésre"},body:{en:`**Idea.** Minimize the local quadratic (2nd-order Taylor) model; set its gradient to zero:
$$x_{k+1}=x_k-\\big[\\nabla^2 f(x_k)\\big]^{-1}\\nabla f(x_k).$$
($\\nabla^2 f$ = Hessian.) Solve the linear system $\\nabla^2 f(x_k)\\,p_k=-\\nabla f(x_k)$, then $x_{k+1}=x_k+p_k$.

**Convergence.** **Quadratic** near a minimum where the Hessian is **positive definite (PD)** and $f$ is smooth — far fewer iterations than gradient descent.

**Requirements / caveats:**
- Needs the Hessian (expensive: $O(n^2)$ storage, $O(n^3)$ solve) and its second derivatives.
- Hessian must be PD for a descent direction; if not, may step toward a saddle/max (use modification / line search / damping).

**Quasi-Newton (BFGS).** Avoids forming the Hessian: build an approximation $B_k\\approx\\nabla^2 f$ (or its inverse) from successive gradients; **superlinear** convergence, only first derivatives needed.`,hu:`**Ötlet.** A lokális kvadratikus (másodrendű Taylor) modell minimalizálása; gradiensét nullázzuk:
$$x_{k+1}=x_k-\\big[\\nabla^2 f(x_k)\\big]^{-1}\\nabla f(x_k).$$
($\\nabla^2 f$ = Hesse-mátrix.) Megoldjuk a $\\nabla^2 f(x_k)\\,p_k=-\\nabla f(x_k)$ lineáris rendszert, majd $x_{k+1}=x_k+p_k$.

**Konvergencia.** **Kvadratikus** a minimum közelében, ahol a Hesse-mátrix **pozitív definit (PD)** és $f$ sima — sokkal kevesebb iteráció, mint a gradiens-módszernél.

**Feltételek / buktatók:**
- Kell a Hesse-mátrix (drága: $O(n^2)$ tárolás, $O(n^3)$ megoldás) és a második deriváltak.
- A Hesse-mátrixnak PD-nek kell lennie a csökkenő irányhoz; ha nem, nyeregpont/maximum felé léphet (módosítás / vonalkeresés / csillapítás kell).

**Kvázi-Newton (BFGS).** Nem képezi a Hesse-mátrixot: $B_k\\approx\\nabla^2 f$ (vagy inverze) közelítést épít az egymást követő gradiensekből; **szuperlineáris** konvergencia, csak első deriváltak kellenek.`}},{title:{en:"Method of least squares",hu:"Legkisebb négyzetek módszere"},body:{en:`**Problem.** Overdetermined $A c\\approx y$ ($m$ data, $n<m$ params). Minimize the sum of squared residuals:
$$\\min_c\\;\\lVert Ac-y\\rVert_2^2=\\sum_i\\big(y_i-\\hat y_i\\big)^2.$$

**Normal equations** (set gradient to 0):
$$A^{\\top}A\\,c=A^{\\top}y\\quad\\Rightarrow\\quad c=(A^{\\top}A)^{-1}A^{\\top}y\\ \\text{(if }A\\text{ full column rank)}.$$

**Line fit** $y=c_0+c_1 x$: columns of $A$ are $[1,\\ x_i]$.

**Polynomial fit** degree $d$: columns $[1,\\ x_i,\\ x_i^2,\\dots,x_i^d]$ (Vandermonde).

**Linearizable nonlinear fits** (take logs $\\Rightarrow$ linear LSQ):
- Exponential $y=ae^{bx}$: $\\ln y=\\ln a+bx$.
- Power $y=ax^{b}$: $\\ln y=\\ln a+b\\ln x$.

- $A^{\\top}A$ may be ill-conditioned (esp. high-degree Vandermonde); prefer QR/SVD numerically.`,hu:`**Feladat.** Túlhatározott $A c\\approx y$ ($m$ adat, $n<m$ paraméter). A reziduumok négyzetösszegét minimalizáljuk:
$$\\min_c\\;\\lVert Ac-y\\rVert_2^2=\\sum_i\\big(y_i-\\hat y_i\\big)^2.$$

**Normálegyenletek** (a gradienst nullázva):
$$A^{\\top}A\\,c=A^{\\top}y\\quad\\Rightarrow\\quad c=(A^{\\top}A)^{-1}A^{\\top}y\\ \\text{(ha }A\\text{ teljes oszloprangú)}.$$

**Egyenes-illesztés** $y=c_0+c_1 x$: $A$ oszlopai $[1,\\ x_i]$.

**Polinom-illesztés** $d$-edfokú: oszlopok $[1,\\ x_i,\\ x_i^2,\\dots,x_i^d]$ (Vandermonde).

**Linearizálható nemlineáris illesztések** (logaritmus $\\Rightarrow$ lineáris LNN):
- Exponenciális $y=ae^{bx}$: $\\ln y=\\ln a+bx$.
- Hatvány $y=ax^{b}$: $\\ln y=\\ln a+b\\ln x$.

- $A^{\\top}A$ rosszul kondicionált lehet (főleg magas fokú Vandermonde); numerikusan QR/SVD ajánlott.`}}],S=[...L,...E],T=`## Numerical Analysis Glossary

---

### 1

* **1-Norm of a Vector**: Defined as $\\|x\\|_1 = \\sum_{i=1}^n |x_i|$.

---

### A

* **Absolute Error**: The difference between the true value and an approximate value: $|x-\\tilde x|$.

---

### B

* **Backward Difference**: Defined as $f'(x) \\approx \\frac{f(x) - f(x-h)}{h}$.
* **Backward Substitution**: Solving a triangular system starting from the last equation and substituting backward.
* **Band Matrix**: A sparse matrix whose non-zero entries are confined to a diagonal band.
* **BFGS Method**: A popular quasi-Newton method using update formulas for Hessian approximation named after Broyden, Fletcher, Goldfarb, and Shanno.
* **Bisection Method**: A root-finding method where $f(a)f(b) < 0$ guarantees a root in $[a, b]$, and intervals are halved recursively.
* **Block Matrix**: A matrix partitioned into smaller matrices called blocks.
* **Broyden's Method**: A quasi-Newton method that updates an approximation of the Jacobian matrix in solving nonlinear systems.

---

### C

* **Cauchy–Bunyakovsky–Schwarz Inequality**: For all vectors $x$ and $y$: $| x^T y| \\leq \\|x\\|_2 \\cdot \\|y\\|_2$.
* **Central Difference**: Defined as $f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}$.
* **Characteristic Equation**: The equation $\\det(A - \\lambda I) = 0$, used to find the eigenvalues of $A$.
* **Cholesky Decomposition**: Decomposes a symmetric positive definite matrix $A$ as $A = LL^T$, where $L$ is lower triangular.
* **Chopping**: A method of rounding where digits beyond a certain precision are simply discarded.
* **Clamped Spline**: A cubic spline with specified first derivatives at endpoints: $S'(x_0)$ and $S'(x_n)$ are known.
* **Classical Runge–Kutta Method**: A widely used fourth-order method: combines four slopes for high accuracy.
* **Complete Pivoting**: A pivoting strategy where both rows and columns are interchanged to select the largest available pivot element.
* **Composite Simpson's Rule**: A more accurate rule by applying Simpson’s Rule over multiple subintervals.
* **Composite Trapezoidal Rule**: Applies the trapezoidal rule to subintervals of $[a, b]$ for better accuracy.
* **Condition Number**: Defined as $\\text{cond}(A) := \\|A\\| \\|A^{-1}\\|$, indicating sensitivity of the solution.
* **Contraction**: A Lipschitz function with constant $0 \\leq c < 1$; ensures convergence in fixed-point iteration.
* **Convergence Criterion**: For linear iterations: the method converges if $\\rho(T) < 1$.
* **Convergence of a Vector Sequence**: A sequence $x^{(k)}$ converges to $x$ if $\\|x^{(k)} - x\\| \\to 0$ as $k \\to \\infty$.
* **Convergence of Iterative Methods**: An iterative method converges if the sequence of approximations approaches the exact solution as iterations increase.
* **Cubic Spline**: A spline composed of piecewise cubic polynomials with continuous first and second derivatives.

---

### D

* **Descent**: The process of moving in the direction where the function decreases.
* **Determinant Condition**: The condition $d > 0$ ensures a unique solution to the normal equations.
* **DFP Update**: The Davidon–Fletcher–Powell update formula used to approximate the inverse Hessian in quasi-Newton methods.
* **Diagonal Dominance**: A matrix $A$ is diagonally dominant if $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$.
* **Diagonally Dominant Matrix**: A matrix $A$ where $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all rows $i$.
* **Direct Method**: A method that aims to solve the system in a finite number of steps, such as Gaussian elimination.
* **Distance Between Vectors**: Defined by $\\|x - y\\|$, typically using the Euclidean norm.
* **Divided Differences**: Recursive coefficients used in Newton's form of interpolating polynomials.
* **Double Precision**: A 64-bit floating point representation conforming to IEEE 754, offering about 15–17 decimal digits of precision.

---

### E

* **Eigenvalue**: A scalar $\\lambda$ is an eigenvalue of matrix $A$ if there exists a nonzero vector $x$ such that $Ax = \\lambda x$.
* **Eigenvector**: A nonzero vector $x$ such that $Ax = \\lambda x$, where $\\lambda$ is an eigenvalue of $A$.
* **Equally Spaced Points**: Points with constant spacing $h = x_{i+1} - x_i$.
* **Equidistant Nodes**: Data points where $x_{i+1} - x_i = h$ for a constant $h$.
* **Error**: The difference between the computed solution $\\tilde{\\mathbf{x}}$ and the exact solution $\\mathbf{x}$, i.e., $\\| \\tilde{\\mathbf{x}} - \\mathbf{x} \\|$.
* **Error Minimization**: The goal of curve fitting: $\\min F(a)$ where $F$ is the squared error.
* **Error of Interpolation**: For the Lagrange interpolation: $f(x) - L_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\prod_{i=0}^n (x - x_i)$ for some $\\xi \\in [x_0, x_n]$.
* **Error Term of Integration**: Indicates how the numerical approximation differs from the exact integral.
* **Euclidean Norm**: Defined as $\\|x\\|_2 = \\sqrt{\\sum_{i=1}^n x_i^2}$, also known as the 2-norm.
* **Euler's Method**: A first-order numerical method for solving ordinary differential equations: $z_{i+1} = z_i + h f(t_i, z_i)$.
* **Exponential Curve Fitting**: Fitting a model of the form $y = be^{ax}$ to data.

---

### F

* **False Position Method**: Also known as Regula Falsi, uses secant lines to find successive approximations to the root.
* **Fixed Point**: A number $p$ is a fixed point of $g$ if $g(p) = p$.
* **Fixed-Point Iteration**: A method where a sequence $p_{k+1} = g(p_k)$ is generated to approximate a solution $p$ such that $g(p) = p$.
* **Floating Point Arithmetic**: A method of representing real numbers in computers by using a fixed number of bits to store the sign, exponent, and mantissa (significand).
* **Forward Difference**: Defined as $f'(x) \\approx \\frac{f(x+h) - f(x)}{h}$.
* **Forward Substitution**: A method to solve $Ly = b$ where $L$ is a lower triangular matrix.

---

### G

* **Gauss–Jordan Elimination**: An elimination method that reduces the coefficient matrix to the identity matrix, solving $A x = b$ and $A^{-1}$.
* **Gauss–Seidel Iteration**: An iterative method for solving linear systems using updated values as soon as they are available during the iteration.
* **Gauss–Seidel Matrix**: In Gauss–Seidel, $T_G = -(D+L)^{-1}U$.
* **Gaussian Elimination**: A method for solving linear systems by transforming the coefficient matrix into upper triangular form.
* **Gaussian Normal Equations**: The system of equations obtained by setting the gradient of the least squares error to zero.
* **Gaussian Quadrature**: A numerical integration method that approximates $\\int_{-1}^{1} f(x) \\, dx$ using optimally chosen points and weights.
* **Global Error**: The difference between the numerical solution and the exact solution at a mesh point.
* **Global Minimum**: A point where the function attains its lowest value over the entire domain.
* **Golden Section Search Method**: A technique for finding the extremum of a unimodal function by narrowing the range of values inside the domain and comparing function values.
* **Gradient**: The vector of first partial derivatives of a multivariable function: $f'(x)$.
* **Gradient Method**: An iterative optimization method based on the gradient of the objective function.
* **Gradient Vector**: A vector containing all first-order partial derivatives of a scalar-valued function.

---

### H

* **Hermite Interpolation**: Interpolates both function values and derivatives at given points.
* **Hermite Polynomial**: A polynomial used in Hermite interpolation that incorporates both function and derivative values at mesh points.
* **Hessian Matrix**: A square matrix of second-order partial derivatives of a scalar-valued function.
* **Heun's Method**: A second-order method: $z_{i+1} = z_i + \\frac{h}{4}(f(t_i, z_i) + 3f(t_i + \\frac{2h}{3}, z_i + \\frac{2h}{3} f(t_i, z_i)))$.
* **Hilbert Matrix**: An example of an ill-conditioned matrix: $H_n = \\left[ \\frac{1}{i+j-1} \\right]$.
* **Horner’s Method**: An efficient algorithm for polynomial evaluation that reduces the number of multiplications and additions required by using nested multiplication.

---

### I

* **Ill-conditioned Matrix**: A matrix for which small changes in input cause large changes in the solution; has a large condition number.
* **Initial Value Problem (IVP)**: A differential equation along with a specified value, called the initial condition, which the solution must satisfy: $y' = f(t, y),\\ y(t_0) = y_0$.
* **Intermediate Value Theorem**: If $f \\in C[a, b]$ and $f(a) \\neq f(b)$, then for any $d$ in between $f(a)$ and $f(b)$, there exists $c \\in (a, b)$ such that $f(c) = d$.
* **Interpolation**: The process of finding a function of certain property whose graph goes through the given data points.
* **Interpolation Error**: The error between the interpolated value and the actual function value.
* **Inverse Matrix**: A matrix $A^{-1}$ such that $A A^{-1} = I$, exists only for square and non-singular matrices.
* **Iterative Method**: A procedure that generates successive approximations to the solution of a system, such as Jacobi or Gauss-Seidel methods.

---

### J

* **Jacobi Iteration**: A method for solving linear systems where each variable is solved using values from the previous iteration.
* **Jacobi Matrix**: In Jacobi iteration, $T_J = -D^{-1}(L + U)$.
* **Jacobian Matrix**: A matrix of all first-order partial derivatives of a vector-valued and vector-variable function.

---

### L

* **Lagrange Basis Polynomial**: Defined as $l_k(x) = \\prod_{j=0,j\\neq k}^n \\frac{x - x_j}{x_k - x_j}$, used in Lagrange interpolation.
* **Lagrange Form**: The Lagrange interpolating polynomial in the form $L_n(x) = \\sum_{k=0}^n y_k l_k(x)$, where $l_k(x)$ are Lagrange basis polynomials.
* **Lagrange Interpolating Polynomial**: A polynomial $L_n(x)$ of degree at most $n$ that passes through $n+1$ given data points.
* **Lagrange Polynomial**: Defined as $L_n(x) = \\sum_{k=0}^n y_k l_k(x)$, where $l_k(x)$ are Lagrange basis polynomials.
* **Lagrange's Mean Value Theorem**: If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then $f'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a, b)$.
* **Least Squares Error**: The error function $F(a) = \\sum_{i=0}^n (g(x_i;a) - y_i)^2$ minimized in the method of least squares.
* **Least Squares Method**: A technique to approximate the solution of overdetermined systems by minimizing the sum of the squares of the residuals.
* **Legendre Polynomials**: A sequence of orthogonal polynomials $P_n(x)$ defined on $[-1, 1]$, used in Gaussian quadrature.
* **Length of a Vector**: The norm of the vector, denoted $\\|x\\|$, typically the Euclidean norm.
* **Line Fitting**: Fitting a linear function $g(x) = ax + b$ to a set of data points.
* **Linear Convergence**: Convergence with order $\\alpha = 1$ and constant $0 < c < 1$.
* **Linear Fixed-Point Equation**: A linear system of the form $x = T x + c$.
* **Linear Fixed-Point Iteration**: An iterative process of the form $x^{(k+1)} = T x^{(k)} + c$ for solving linear fixed-point equations.
* **Linear System**: A set of equations of the form $A \\mathbf{x} = \\mathbf{b}$, where $A$ is a matrix, $\\mathbf{x}$ a vector of variables, and $\\mathbf{b}$ a vector of constants.
* **Linearization**: Transforming a nonlinear model into a linear one using logarithms.
* **Lipschitz Continuity**: A function $g$ is Lipschitz continuous if $|g(x) - g(y)| \\leq c|x - y|$ for all $x, y$.
* **Local Minimum**: A point where the function value is lower than nearby points, but not necessarily global.
* **Local Truncation Error**: The error made in a single step of a numerical method, e.g. in Euler's method: $\\tau_{i+1} = \\frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i))$.
* **Loss of Significance**: A problem that occurs when subtracting nearly equal numbers, causing significant digits to be lost due to rounding, thus reducing precision.
* **LU Decomposition**: Decomposes matrix $A$ as $A = LU$, where $L$ is lower triangular where the diagonal consists of 1s and $U$ is upper triangular.
[Image showing the LU decomposition of a matrix into Lower and Upper triangular parts]

---

### M

* **m-order Recursion**: A recursion of the form $p_{k+1} = h(p_k, p_{k-1}, \\dots, p_{k-m+1})$, defined with $m$ initial values.
* **Machine Epsilon**: The smallest number $\\varepsilon$ such that $1 + \\varepsilon > 1$ in the floating point arithmetic system. It indicates the precision of the system.
* **Machine Number**: A number that can be represented exactly in a computer's floating point system. Other numbers are approximated by the nearest machine number.
* **Matrix**: A rectangular array of numbers or functions arranged in rows and columns.
* **Matrix Factorization**: The decomposition of a matrix into a product of matrices with specific properties.
* **Matrix Norm**: The norm of a matrix $A$ generated by a vector norm $\\|\\cdot\\|$ is defined by $\\|A\\|=\\sup_{x\\neq0}\\frac{\\|Ax\\|}{ \\|x\\|}$.
* **Mesh Points**: A sequence of points $x_0, x_1, \\ldots, x_n$ used in interpolation or numerical methods to define intervals.
* **Midpoint Method**: A second-order Runge–Kutta method: $z_{i+1} = z_i + h f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2} f(t_i, z_i))$.
* **Model Function**: The function $g(x;a)$ used to approximate the observed data.
* **Modified Euler Method**: A second-order method: $z_{i+1} = z_i + \\frac{h}{2}(f(t_i, z_i) + f(t_{i+1}, z_i + h f(t_i, z_i)))$.

---

### N

* **Natural Spline**: A cubic spline where the second derivative at the endpoints is zero: $S''(x_0) = S''(x_n) = 0$.
* **Nelder-Mead Method**: A simplex-based direct search method that uses reflection, expansion, contraction, and shrinking.
* **Neumann Series**: A geometric series of matrices: $I + A + A^2 + \\cdots$, which converges if $\\rho(A) < 1$.
* **Newton Polynomial**: The Lagrange interpolating polynomial expressed in terms of divided differences.
* **Newton–Cotes Formula**: A family of quadrature formulas for numerical integration where the weights are the integrals of the basis Lagrange polynomials.
* **Newton's Method (Optimization)**: Uses both gradient and Hessian to find a local minimum of a function.
* **Newton’s Form**: The Lagrange interpolating polynomial written as $L_n(x) = f[x_0] + f[x_0,x_1](x - x_0) + \\ldots + f[x_0,\\ldots,x_n](x - x_0)(x - x_1)\\ldots(x - x_{n-1})$.
* **Newton’s Interpolation**: Uses divided differences to construct interpolating polynomial incrementally.
* **Newton’s Method (Roots)**: An iteration of the form $p_{k+1} = p_k - \\frac{f(p_k)}{f'(p_k)}$ to find roots of $f(x) = 0$.
* **Non-Singular Matrix**: A square matrix which is invertible, i.e., has non-zero determinant.
* **Numerical Analysis**: The field of mathematics that seeks exact or approximate solutions to mathematical problems using arithmetic operations like addition, subtraction, multiplication, and division.
* **Numerical Differentiation**: The process of estimating the derivative of a function using discrete data points.
* **Numerical Integration**: The process of approximating the definite integral of a function using numerical methods.

---

### O

* **Order of a Method**: A method is of order $p$ if the global error is $\\mathcal{O}(h^p)$.
* **Order of Convergence**: If $|p_{k+1} - p| \\leq c|p_k - p|^\\alpha$, then $\\alpha$ is the order of convergence.
* **Orthogonal Functions**: Functions $f$ and $g$ are orthogonal on $[a, b]$ if $\\int_a^b f(x)g(x)dx = 0$.
* **Overflow**: Occurs when a number exceeds the maximum representable value in the floating point system.

---

### P

* **Parameter Estimation**: The process of determining optimal values $a, b, \\ldots$ in the fitting function.
* **Partial Pivoting**: Technique used in Gaussian elimination to improve numerical stability by swapping rows based on the largest pivot element.
* **Permutation Matrix**: A matrix $P$ used to record row swaps in LU decomposition with pivoting: $PA = LU$.
* **Perturbed System**: A system $\\tilde{A}\\tilde{x} = \\tilde{b}$ differing slightly from the original $Ax=b$.
* **Piecewise Polynomial**: A function composed of polynomial segments on subintervals.
* **Pivot Element**: The element $a_{kk}$ used during the $k$-th step of Gaussian elimination to eliminate variables below the diagonal.
* **Pivoting**: A technique used during LU decomposition to improve numerical stability by row swapping.
* **Polynomial Curve Fitting**: Fitting a polynomial $g(x) = a_mx^m + \\ldots + a_0$ to a dataset.
* **Positive Definite Matrix**: A symmetric matrix $A$ such that $x^T A x > 0$ for all non-zero vectors $x$.
* **Power Function Fitting**: Fitting a model $y = bx^a$ to data using logarithmic transformation.
* **Principal Minor**: The determinant of a principal submatrix of $A$, used in determining definiteness of a matrix.
* **PSB Update**: The Powell–Symmetric–Broyden update formula used in quasi-Newton optimization.

---

### Q

* **Quadratic Convergence**: Convergence with order $\\alpha = 2$; error squared at each step.
* **Quadrature Formula**: A formula $\\sum_{k=0}^n c_k f(x_k)$ for approximating the definite integral $\\int_a^b f(x) dx$.
* **Quasi Newton-Method**: An iterative method to find the roots of a function using an approximate Jacobian matrix.
* **Quasi-Newton Method (Optimization)**: Approximates the Hessian matrix to reduce computational cost.

---

### R

* **Relative Error**: The ratio of the absolute error to the true value: $\\frac{|x-\\tilde x|}{|x|}$. It measures the size of the error in relation to the size of the quantity being measured.
* **Residual**: The difference $g(x_i;a) - y_i$ between the model prediction and observed data.
* **Residual Vector**: Given an approximate solution $\\tilde{x}$ of a linear system $Ax=b$, the residual is $r = b - A\\tilde{x}$.
* **Richardson Extrapolation**: A method to improve the accuracy of a numerical approximation by combining estimates with different step sizes.
* **Root of Multiplicity m**: A root $p$ such that $f(x) = (x - p)^m q(x)$, where $q(p) \\neq 0$.
* **Rounding**: A method of approximation where a number is replaced by the nearest representable value.
* **Rounding Error**: Error arising from the finite precision with which computers store real numbers. It accumulates through computations and affects the accuracy of results.
* **Runge–Kutta Method**: A family of iterative methods, including the classical fourth-order method: $z_{i+1} = z_i + \\frac{h}{6}(w_1 + 2w_2 + 2w_3 + w_4)$.

---

### S

* **Search Direction**: The direction in which a new iterate is calculated during optimization.
* **Secant Method**: Root finding using $p_{k+1} = p_k - \\frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$, avoiding the derivative.
* **Simplex**: A geometric figure consisting of $n+1$ points in $n$-dimensional space.
* **Simplex Method**: An optimization technique that moves and reshapes the simplex to locate the minimum.
* **Simpson's Rule**: Approximates $\\int_a^b f(x) dx$ using $\\frac h3\\Bigl(f(x_0)+4f(x_1)+f(x_2)\\Bigr)$.
* **Simultaneous Linear System**: A sequence of linear systems where the coefficient matrices are equal, i.e., equations of the form $A x = b^{(i)},\\ i=1,\\ldots,m$.
* **Single Precision**: A 32-bit floating point representation conforming to IEEE 754, offering about 7 decimal digits of precision.
* **Singular Matrix**: A matrix that is not invertible, i.e., it has determinant zero.
* **Space Complexity**: The amount of memory storage needed in the worst case at any point in an algorithm.
* **Spectral Condition Number**: Defined as $\\rho(A)\\rho(A^{-1})$, a lower bound for $\\text{cond}(A)$.
* **Spectral Radius**: Defined as $\\rho(A) := \\max\\{ |\\lambda| : \\lambda \\text{ is an eigenvalue of } A \\}$.
* **Spline Interpolation**: Piecewise-defined polynomials that ensure smoothness at the joints of intervals, often cubic splines are used.
* **Stability**: The method is stable if small perturbations in data result in small errors.
* **Stability (of Algorithm)**: An algorithm is said to be stable if small changes in input or rounding errors do not cause large changes in the output.
* **Stability (of Mathematical Problem)**: A mathematical problem is stable (well-conditioned) if small changes in input result in small changes in the output. Otherwise, it is ill-conditioned.
* **Stationary Point**: A point $x^*$ where the gradient $f'(x^*) = 0$.
* **Steepest Descent Method**: An iterative optimization method using the negative gradient direction.
* **Step Size (h)**: The distance between two mesh points in time: $h = t_{i+1} - t_i$.
* **Stopping conditions**: Conditions like $|p_k - p_{k-1}| < \\varepsilon_1$, $\\frac{|p_k - p_{k-1}|}{|p_k|} < \\varepsilon_2$, or $|f(p_k)| < \\varepsilon_3$ used to stop iteration.
* **Stopping Criteria**: Conditions like $\\|x^{(k+1)} - x^{(k)}\\| < \\varepsilon$ to end iteration.
* **Strictly Lower Triangular Matrix**: A matrix where all diagonal and upper triangular entries are zero.
* **Sum of Squares**: The function $F(a) = \\sum (g(x_i;a) - y_i)^2$ representing total squared error.

---

### T

* **Taylor's Method**: A method using higher derivatives for better accuracy. Second-order Taylor: $z_{i+1} = z_i + h f(t_i, z_i) + \\frac{h^2}{2} f^{(1)}(t_i, z_i)$.
* **Taylor's polynomial**: The Taylor's polynomial of degree $n$ of a real function $f$ at $p_0$ is defined by $T_n(x)=f(p_0)+f'(p_0)(x-p_0)+\\frac{f''(p_0)}2(x-p_0)^2+\\cdots+\\frac{f^{(n)}(p_0)}{n!}(x-p_0)^n$.
* **Taylor’s Theorem**: Provides polynomial approximation: $f(x) = T_n(x) + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - x_0)^{n+1}$.
* **Time Complexity**: A measure of the number of steps or arithmetic operations required by an algorithm.
* **Trapezoidal Rule**: Approximates $\\int_a^b f(x) dx$ using $\\frac{h}{2} (f(a) + f(b))$.
* **Triangle Inequality**: States that $\\|x + y\\| \\leq \\|x\\| + \\|y\\|$ for any vectors $x$ and $y$.
* **Triangular Matrix**: A matrix where all elements above (or below) the main diagonal are zero.
* **Triangular System**: A system where the coefficient matrix is either lower or upper triangular.
* **Tridiagonal Matrix**: A matrix where non-zero entries appear only on the main diagonal and the first diagonals above and below it.
* **Truncation Error**: The error that occurs when an exact mathematical expression is replaced with an approximate formula, such as using a Taylor polynomial instead of the function.

---

### U

* **Underflow**: Occurs when a number is closer to zero than the smallest positive representable number, resulting in a stored value of zero.
* **Unequally Spaced Points**: Points for which the distance between them varies.
* **Unimodal Function**: A function that has a single minimum (or maximum) in a given interval.
* **Unit Lower Triangular Matrix**: A lower triangular matrix with 1s on the diagonal.
* **Upper Triangular Matrix**: A matrix with all entries below the main diagonal equal to zero.

---

### V

* **Vector Norm**: A function $\\|x\\|$ that assigns a non-negative scalar to a vector, representing its length.

---

### W

* **Well-Conditioned Matrix**: A matrix where small changes in input result in small changes in the solution of the corresponding linear system; has a small condition number.

`;function I(){const{t:i,lang:a}=u();return e.jsxs("div",{className:"practice",children:[e.jsxs("header",{className:"practice__hero",children:[e.jsx("p",{className:"practice__kicker",children:a==="hu"?"Gyakorlat":"Practice"}),e.jsx("h1",{children:a==="hu"?"Vizsgafelkészülés":"Exam preparation"}),e.jsx("p",{className:"practice__lead",children:a==="hu"?"Vizsga-puskák, kidolgozott példák és fogalomtár egy helyen.":"Exam cheatsheets, worked examples and a glossary in one place."}),e.jsxs("nav",{className:"practice__toc",children:[e.jsx("a",{href:"#cheatsheets",children:a==="hu"?"Puskák":"Cheatsheets"}),e.jsx("a",{href:"#examples",children:a==="hu"?"Kidolgozott példák":"Worked examples"}),e.jsx("a",{href:"#glossary",children:a==="hu"?"Fogalomtár":"Glossary"})]})]}),e.jsxs("section",{className:"practice__section",id:"cheatsheets",children:[e.jsx("h2",{className:"practice__h2",children:a==="hu"?"📌 Vizsga-puskák (must-know)":"📌 Exam cheatsheets (must-know)"}),S.map((r,t)=>e.jsxs("details",{className:"practice__example",open:!0,children:[e.jsx("summary",{children:`${t+1}. ${i(r.title)}`}),e.jsx($,{markdown:i(r.body)})]},t))]}),e.jsxs("section",{className:"practice__section",id:"examples",children:[e.jsx("h2",{className:"practice__h2",children:a==="hu"?"📝 Kidolgozott példák":"📝 Worked examples"}),j.map((r,t)=>e.jsxs("div",{className:"practice__topic",children:[e.jsx("h3",{className:"practice__topic-title",children:i(r.title)}),r.items.map((s,l)=>e.jsxs("details",{className:"practice__example",children:[e.jsx("summary",{children:i(s.label)}),e.jsx($,{markdown:i(s.body)})]},l))]},t))]}),e.jsxs("section",{className:"practice__section",id:"glossary",children:[e.jsx("h2",{className:"practice__h2",children:a==="hu"?"📖 Fogalomtár":"📖 Glossary"}),e.jsxs("details",{className:"practice__example",children:[e.jsx("summary",{children:a==="hu"?"Numerikus analízis fogalomtár (A–Z)":"Numerical analysis glossary (A–Z)"}),e.jsx($,{markdown:T})]})]})]})}export{I as default};
