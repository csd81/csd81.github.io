import type { Cheatsheet } from './cheatsheet-types';

export const CHEATSHEETS_A: Cheatsheet[] = [
  // 1. Fixed-point iteration in 1 and n dimensions
  {
    title: {
      en: 'Fixed-point iteration in 1 and n dimensions',
      hu: 'Fixpont iteráció 1 és n dimenzióban',
    },
    body: {
      en: `**Setup.** Rewrite $f(x)=0$ as $x=g(x)$; iterate $x_{k+1}=g(x_k)$. A fixed point $p=g(p)$.

**Contraction (1D).** $g$ is a contraction on $[a,b]$ if $g$ maps $[a,b]$ into itself and $|g'(x)|\\le L<1$. Then a unique fixed point exists and iteration converges for any $x_0\\in[a,b]$.

**Local convergence.** If $g$ is $C^1$ near $p$ and $|g'(p)|<1$, the iteration converges locally; it diverges if $|g'(p)|>1$.

**Rate.** Linear with $e_{k+1}\\approx g'(p)\\,e_k$. If $g'(p)=0$ (e.g. Newton) convergence is faster.

**Error / stopping.** A priori: $|x_k-p|\\le \\dfrac{L^k}{1-L}|x_1-x_0|$. A posteriori / stop: $|x_k-p|\\le \\dfrac{L}{1-L}|x_k-x_{k-1}|$, so iterate until $|x_k-x_{k-1}|<\\varepsilon$.

**n dimensions.** $\\mathbf{x}_{k+1}=\\mathbf{g}(\\mathbf{x}_k)$. Contraction if $\\|\\mathbf{g}(\\mathbf{x})-\\mathbf{g}(\\mathbf{y})\\|\\le L\\|\\mathbf{x}-\\mathbf{y}\\|$, $L<1$; sufficient: $\\|\\mathbf{g}'(\\mathbf{x})\\|<1$ in some matrix norm. Local convergence $\\iff$ spectral radius $\\rho(\\mathbf{g}'(\\mathbf{p}))<1$.

**Pitfalls.** Wrong rearrangement gives $|g'(p)|>1$ (diverges); $g$ must map the interval into itself; $\\rho<1$ is the sharp condition, $\\|\\cdot\\|<1$ is only sufficient.`,
      hu: `**Felírás.** Az $f(x)=0$ egyenletet $x=g(x)$ alakra hozzuk; iteráció $x_{k+1}=g(x_k)$. Fixpont: $p=g(p)$.

**Kontrakció (1D).** $g$ kontrakció $[a,b]$-n, ha $g$ az $[a,b]$-t önmagába képezi és $|g'(x)|\\le L<1$. Ekkor egyetlen fixpont van, és az iteráció minden $x_0\\in[a,b]$ esetén konvergál.

**Lokális konvergencia.** Ha $g\\in C^1$ a $p$ körül és $|g'(p)|<1$, az iteráció lokálisan konvergál; $|g'(p)|>1$ esetén divergál.

**Sebesség.** Lineáris, $e_{k+1}\\approx g'(p)\\,e_k$. Ha $g'(p)=0$ (pl. Newton), gyorsabb.

**Hibabecslés / leállás.** A priori: $|x_k-p|\\le \\dfrac{L^k}{1-L}|x_1-x_0|$. A posteriori / leállás: $|x_k-p|\\le \\dfrac{L}{1-L}|x_k-x_{k-1}|$, tehát amíg $|x_k-x_{k-1}|<\\varepsilon$.

**n dimenzió.** $\\mathbf{x}_{k+1}=\\mathbf{g}(\\mathbf{x}_k)$. Kontrakció, ha $\\|\\mathbf{g}(\\mathbf{x})-\\mathbf{g}(\\mathbf{y})\\|\\le L\\|\\mathbf{x}-\\mathbf{y}\\|$, $L<1$; elegendő: $\\|\\mathbf{g}'(\\mathbf{x})\\|<1$ valamely mátrixnormában. Lokális konvergencia $\\iff$ a spektrálsugár $\\rho(\\mathbf{g}'(\\mathbf{p}))<1$.

**Buktatók.** Rossz átrendezés $|g'(p)|>1$-et ad (divergál); $g$-nek az intervallumot önmagába kell képeznie; $\\rho<1$ az éles feltétel, $\\|\\cdot\\|<1$ csak elegendő.`,
    },
  },

  // 2. Solving nonlinear equations
  {
    title: {
      en: 'Solving nonlinear equations: bisection, regula falsi, Newton, secant',
      hu: 'Nemlineáris egyenletek: intervallumfelezés, húrmódszer, Newton-módszer, szelőmódszer',
    },
    body: {
      en: `Goal: solve $f(x)=0$.

**Bisection.** Need $f(a)f(b)<0$ (sign change, $f$ continuous). Halve interval, keep the half with the sign change. Always converges; **linear**, error halves each step: $|e_{k+1}|=\\tfrac12|e_k|$. After $n$ steps error $\\le (b-a)/2^{n+1}$.

**Regula falsi (chord).** Bracketing too; next point is the chord root
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Keeps a bracket; reliable but often linear (one endpoint can stick).

**Newton.** $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$
**Quadratic** ($p=2$) for a simple root with $f'(p)\\neq0$, given a good start. Needs $f'$; may diverge from a bad start; only linear at a multiple root.

**Secant.** Newton with $f'(x_k)\\approx\\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}}$:
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Order $p=\\frac{1+\\sqrt5}{2}\\approx1.618$ (superlinear); no derivative, two starting points; no bracket guarantee.

**Pitfalls.** Newton/secant: $f'\\approx0$ blows up; multiple roots kill the order; bracketing methods are robust but slow.`,
      hu: `Cél: $f(x)=0$ megoldása.

**Intervallumfelezés.** Kell $f(a)f(b)<0$ (előjelváltás, $f$ folytonos). Felezzük az intervallumot, az előjelváltó felét tartjuk meg. Mindig konvergál; **lineáris**, a hiba feleződik: $|e_{k+1}|=\\tfrac12|e_k|$. $n$ lépés után hiba $\\le (b-a)/2^{n+1}$.

**Húrmódszer (regula falsi).** Szintén beékelő; a következő pont a húr gyöke
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Megtartja a beékelést; megbízható, de gyakran lineáris (egy végpont beragadhat).

**Newton.** $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$
Egyszeres gyök ($f'(p)\\neq0$) és jó kezdőpont esetén **kvadratikus** ($p=2$). Kell $f'$; rossz kezdőpontból divergálhat; többszörös gyöknél csak lineáris.

**Szelőmódszer.** Newton, ahol $f'(x_k)\\approx\\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}}$:
$$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$
Rend $p=\\frac{1+\\sqrt5}{2}\\approx1.618$ (szuperlineáris); nem kell derivált, két kezdőpont; nincs beékelési garancia.

**Buktatók.** Newton/szelő: $f'\\approx0$ esetén elszáll; többszörös gyök rontja a rendet; a beékelő módszerek robusztusak, de lassúak.`,
    },
  },

  // 3. Vector and matrix norms
  {
    title: {
      en: 'Vector and matrix norms',
      hu: 'Vektor- és mátrixnormák',
    },
    body: {
      en: `**Vector norms** ($\\mathbf{x}\\in\\mathbb{R}^n$).
- 1-norm: $\\|\\mathbf{x}\\|_1=\\sum_i|x_i|$.
- 2-norm (Euclidean): $\\|\\mathbf{x}\\|_2=\\sqrt{\\sum_i x_i^2}$.
- $\\infty$-norm (max): $\\|\\mathbf{x}\\|_\\infty=\\max_i|x_i|$.

**Norm axioms.** $\\|\\mathbf{x}\\|\\ge0$, $=0\\iff\\mathbf{x}=0$; $\\|\\alpha\\mathbf{x}\\|=|\\alpha|\\,\\|\\mathbf{x}\\|$; triangle $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$.

**Induced (operator) matrix norms.** $\\displaystyle\\|A\\|=\\max_{\\mathbf{x}\\neq0}\\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}$.
- $\\|A\\|_1=\\max_j\\sum_i|a_{ij}|$ — **max absolute column sum**.
- $\\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|$ — **max absolute row sum**.
- $\\|A\\|_2=\\sqrt{\\rho(A^TA)}=\\sigma_{\\max}(A)$ — **spectral norm** (largest singular value).

**Properties.** Submultiplicative $\\|AB\\|\\le\\|A\\|\\,\\|B\\|$ and compatible $\\|A\\mathbf{x}\\|\\le\\|A\\|\\,\\|\\mathbf{x}\\|$. Always $\\rho(A)\\le\\|A\\|$ for any induced norm.

**Pitfall.** Don't swap the row/column rule for $\\|\\cdot\\|_1$ vs $\\|\\cdot\\|_\\infty$; the Frobenius norm $\\sqrt{\\sum a_{ij}^2}$ is **not** induced by the 2-norm.`,
      hu: `**Vektornormák** ($\\mathbf{x}\\in\\mathbb{R}^n$).
- 1-norma: $\\|\\mathbf{x}\\|_1=\\sum_i|x_i|$.
- 2-norma (euklideszi): $\\|\\mathbf{x}\\|_2=\\sqrt{\\sum_i x_i^2}$.
- $\\infty$-norma (max): $\\|\\mathbf{x}\\|_\\infty=\\max_i|x_i|$.

**Norma-axiómák.** $\\|\\mathbf{x}\\|\\ge0$, $=0\\iff\\mathbf{x}=0$; $\\|\\alpha\\mathbf{x}\\|=|\\alpha|\\,\\|\\mathbf{x}\\|$; háromszög $\\|\\mathbf{x}+\\mathbf{y}\\|\\le\\|\\mathbf{x}\\|+\\|\\mathbf{y}\\|$.

**Indukált (operátor-) mátrixnormák.** $\\displaystyle\\|A\\|=\\max_{\\mathbf{x}\\neq0}\\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}$.
- $\\|A\\|_1=\\max_j\\sum_i|a_{ij}|$ — **maximális abszolút oszlopösszeg**.
- $\\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|$ — **maximális abszolút sorösszeg**.
- $\\|A\\|_2=\\sqrt{\\rho(A^TA)}=\\sigma_{\\max}(A)$ — **spektrálnorma** (legnagyobb szinguláris érték).

**Tulajdonságok.** Szubmultiplikatív $\\|AB\\|\\le\\|A\\|\\,\\|B\\|$ és kompatibilis $\\|A\\mathbf{x}\\|\\le\\|A\\|\\,\\|\\mathbf{x}\\|$. Mindig $\\rho(A)\\le\\|A\\|$ bármely indukált normára.

**Buktató.** Ne keverd a sor/oszlop szabályt $\\|\\cdot\\|_1$ és $\\|\\cdot\\|_\\infty$ közt; a Frobenius-norma $\\sqrt{\\sum a_{ij}^2}$ **nem** a 2-norma indukált normája.`,
    },
  },

  // 4. Newton's method in n dimensions
  {
    title: {
      en: "Newton's method in n dimensions",
      hu: 'Newton-módszer n dimenzióban',
    },
    body: {
      en: `Solve $\\mathbf{F}(\\mathbf{x})=\\mathbf{0}$, $\\mathbf{F}:\\mathbb{R}^n\\to\\mathbb{R}^n$.

**Jacobian.** $J(\\mathbf{x})=\\mathbf{F}'(\\mathbf{x})$ with entries $J_{ij}=\\dfrac{\\partial F_i}{\\partial x_j}$.

**Iteration.** $\\mathbf{x}_{k+1}=\\mathbf{x}_k-J(\\mathbf{x}_k)^{-1}\\mathbf{F}(\\mathbf{x}_k)$. In practice **never invert** — solve the linear system for the step $\\Delta\\mathbf{x}_k$:
$$J(\\mathbf{x}_k)\\,\\Delta\\mathbf{x}_k=-\\mathbf{F}(\\mathbf{x}_k),\\qquad \\mathbf{x}_{k+1}=\\mathbf{x}_k+\\Delta\\mathbf{x}_k.$$

**Algorithm gist.** Per step: (1) evaluate $\\mathbf{F}(\\mathbf{x}_k)$ and $J(\\mathbf{x}_k)$; (2) solve $J\\Delta=-\\mathbf{F}$ (e.g. Gauss/LU); (3) update; (4) stop when $\\|\\Delta\\mathbf{x}_k\\|$ or $\\|\\mathbf{F}(\\mathbf{x}_k)\\|<\\varepsilon$.

**Convergence.** **Quadratic** locally if $J(\\mathbf{p})$ is nonsingular and $\\mathbf{F}\\in C^2$, with a good start $\\mathbf{x}_0$.

**Pitfalls.** Singular/ill-conditioned $J$; cost of forming $J$ ($n^2$ derivatives) and solving ($O(n^3)$) each step; needs a good initial guess; divergence otherwise. Variants reuse $J$ (modified Newton) or approximate it (quasi-Newton/Broyden).`,
      hu: `Megoldandó $\\mathbf{F}(\\mathbf{x})=\\mathbf{0}$, $\\mathbf{F}:\\mathbb{R}^n\\to\\mathbb{R}^n$.

**Jacobi-mátrix.** $J(\\mathbf{x})=\\mathbf{F}'(\\mathbf{x})$, elemei $J_{ij}=\\dfrac{\\partial F_i}{\\partial x_j}$.

**Iteráció.** $\\mathbf{x}_{k+1}=\\mathbf{x}_k-J(\\mathbf{x}_k)^{-1}\\mathbf{F}(\\mathbf{x}_k)$. A gyakorlatban **soha nem invertálunk** — a $\\Delta\\mathbf{x}_k$ lépésre megoldjuk a lineáris rendszert:
$$J(\\mathbf{x}_k)\\,\\Delta\\mathbf{x}_k=-\\mathbf{F}(\\mathbf{x}_k),\\qquad \\mathbf{x}_{k+1}=\\mathbf{x}_k+\\Delta\\mathbf{x}_k.$$

**Algoritmus.** Lépésenként: (1) $\\mathbf{F}(\\mathbf{x}_k)$ és $J(\\mathbf{x}_k)$ kiértékelése; (2) $J\\Delta=-\\mathbf{F}$ megoldása (pl. Gauss/LU); (3) frissítés; (4) leállás, ha $\\|\\Delta\\mathbf{x}_k\\|$ vagy $\\|\\mathbf{F}(\\mathbf{x}_k)\\|<\\varepsilon$.

**Konvergencia.** Lokálisan **kvadratikus**, ha $J(\\mathbf{p})$ nemszinguláris és $\\mathbf{F}\\in C^2$, jó $\\mathbf{x}_0$ kezdőpontnál.

**Buktatók.** Szinguláris/rosszul kondicionált $J$; $J$ felépítése ($n^2$ derivált) és a megoldás ($O(n^3)$) lépésenkénti költsége; jó kezdőpont kell, különben divergál. Változatok: $J$ újrahasználata (módosított Newton) vagy közelítése (kvázi-Newton/Broyden).`,
    },
  },

  // 5. Order of convergence
  {
    title: {
      en: 'Order of convergence',
      hu: 'Konvergenciarend',
    },
    body: {
      en: `Let $e_k=x_k-p$ (error). A sequence converges with **order** $p\\ge1$ if
$$\\lim_{k\\to\\infty}\\frac{|e_{k+1}|}{|e_k|^p}=C,\\qquad 0<C<\\infty\\ \\ (C<1\\text{ if }p=1).$$
$C$ is the asymptotic error constant.

**Cases.**
- **Linear** ($p=1$, $0<C<1$): error shrinks by factor $C$ each step, e.g. bisection ($C=\\tfrac12$), typical fixed-point with $0<|g'(p)|<1$.
- **Superlinear** ($1<p<2$): e.g. secant, $p\\approx1.618$.
- **Quadratic** ($p=2$): error roughly squares; digits double; e.g. Newton at a simple root.

**Estimating $p$ from data** (three iterates' errors, or use successive differences):
$$p\\approx\\frac{\\ln\\!\\big(|e_{k+1}|/|e_k|\\big)}{\\ln\\!\\big(|e_k|/|e_{k-1}|\\big)}.$$
If $p$ unknown use $d_k=x_{k+1}-x_k$ in place of $e_k$.

**Pitfalls.** $C<1$ is required only for linear order ($p=1$); for $p>1$ no smallness of $C$ is needed (only a good enough start). A multiple root drops Newton from quadratic to linear.`,
      hu: `Legyen $e_k=x_k-p$ (hiba). A sorozat $p\\ge1$ **renddel** konvergál, ha
$$\\lim_{k\\to\\infty}\\frac{|e_{k+1}|}{|e_k|^p}=C,\\qquad 0<C<\\infty\\ \\ (C<1,\\text{ ha }p=1).$$
$C$ az aszimptotikus hibakonstans.

**Esetek.**
- **Lineáris** ($p=1$, $0<C<1$): a hiba $C$-szeresére csökken lépésenként, pl. intervallumfelezés ($C=\\tfrac12$), tipikus fixpont $0<|g'(p)|<1$ esetén.
- **Szuperlineáris** ($1<p<2$): pl. szelőmódszer, $p\\approx1.618$.
- **Kvadratikus** ($p=2$): a hiba kb. négyzetre emelkedik; a jegyek száma duplázódik; pl. Newton egyszeres gyöknél.

**$p$ becslése adatokból** (három iteráció hibájából, vagy egymást követő különbségekből):
$$p\\approx\\frac{\\ln\\!\\big(|e_{k+1}|/|e_k|\\big)}{\\ln\\!\\big(|e_k|/|e_{k-1}|\\big)}.$$
Ha $p$ ismeretlen, $e_k$ helyett $d_k=x_{k+1}-x_k$ használható.

**Buktatók.** $C<1$ csak lineáris rendnél ($p=1$) kell; $p>1$ esetén nem kell $C$ kicsisége (csak elég jó kezdőpont). Többszörös gyök a Newtont kvadratikusról lineárisra rontja.`,
    },
  },

  // 6. Gaussian elimination, pivoting, Gauss-Jordan
  {
    title: {
      en: 'Gaussian elimination, pivoting, Gauss–Jordan',
      hu: 'Gauss-elimináció, főelemkiválasztás, Gauss–Jordan-elimináció',
    },
    body: {
      en: `Solve $A\\mathbf{x}=\\mathbf{b}$.

**Gaussian elimination.** Forward elimination turns $A$ into upper triangular $U$ (multiplier $m_{ik}=a_{ik}/a_{kk}$, subtract $m_{ik}\\times$ pivot row); then **back substitution**. This is the LU factorization $A=LU$.

**Pivoting (why).** A zero or tiny pivot $a_{kk}$ causes division by ~0 and large rounding errors.
- **Partial pivoting:** swap rows so the pivot is the largest $|a_{ik}|$ in the column. Gives $PA=LU$; standard and stable enough.
- **Complete pivoting:** search whole submatrix (row + column swaps); more stable, rarely needed, costlier.

**Gauss–Jordan.** Eliminate **above and below** each pivot and scale pivots to 1, reducing $[A\\,|\\,\\mathbf{b}]$ to $[I\\,|\\,\\mathbf{x}]$ — no back substitution. Also gives $A^{-1}$ via $[A\\,|\\,I]\\to[I\\,|\\,A^{-1}]$.

**Operation counts.** Gaussian elimination $\\approx \\dfrac{n^3}{3}$ multiplications (back-sub $\\approx n^2/2$). Gauss–Jordan $\\approx \\dfrac{n^3}{2}$ — more work, so GE+back-sub is preferred for solving.

**Pitfalls.** Never solve via $\\mathbf{x}=A^{-1}\\mathbf{b}$ (slower, less accurate); without pivoting GE can fail/be unstable even for nonsingular $A$.`,
      hu: `Megoldandó $A\\mathbf{x}=\\mathbf{b}$.

**Gauss-elimináció.** Az előre-elimináció $A$-t felső háromszög $U$-vá alakítja (szorzó $m_{ik}=a_{ik}/a_{kk}$, kivonjuk a $m_{ik}\\times$ pivotsort); majd **visszahelyettesítés**. Ez az $A=LU$ felbontás.

**Főelemkiválasztás (miért).** Nulla vagy kicsi $a_{kk}$ pivot ~0-val való osztáshoz és nagy kerekítési hibákhoz vezet.
- **Részleges:** sorcserékkel a pivot legyen az oszlop legnagyobb $|a_{ik}|$ eleme. $PA=LU$; szabványos és elég stabil.
- **Teljes:** az egész részmátrixban keres (sor- és oszlopcsere); stabilabb, ritkán kell, költségesebb.

**Gauss–Jordan.** Minden pivot **alatt és felett** is eliminál, a pivotokat 1-re skálázza, $[A\\,|\\,\\mathbf{b}]$-t $[I\\,|\\,\\mathbf{x}]$-re hozza — nincs visszahelyettesítés. $A^{-1}$-t is ad: $[A\\,|\\,I]\\to[I\\,|\\,A^{-1}]$.

**Műveletigény.** Gauss-elimináció $\\approx \\dfrac{n^3}{3}$ szorzás (visszahelyettesítés $\\approx n^2/2$). Gauss–Jordan $\\approx \\dfrac{n^3}{2}$ — több munka, ezért megoldásra a GE+visszahelyettesítés jobb.

**Buktatók.** Soha ne $\\mathbf{x}=A^{-1}\\mathbf{b}$ útján oldj (lassabb, pontatlanabb); főelemkiválasztás nélkül a GE nemszinguláris $A$-ra is elromolhat/instabil lehet.`,
    },
  },

  // 7. Linear fixed-point iteration
  {
    title: {
      en: 'Linear fixed-point iteration',
      hu: 'Lineáris fixpont iteráció',
    },
    body: {
      en: `**Form.** Iterate $\\mathbf{x}_{k+1}=B\\mathbf{x}_k+\\mathbf{c}$ (e.g. from splitting $A\\mathbf{x}=\\mathbf{b}$). Fixed point $\\mathbf{x}^*=B\\mathbf{x}^*+\\mathbf{c}$, i.e. $(I-B)\\mathbf{x}^*=\\mathbf{c}$.

**Error recursion.** With $\\mathbf{e}_k=\\mathbf{x}_k-\\mathbf{x}^*$: $\\mathbf{e}_{k+1}=B\\mathbf{e}_k=B^{k+1}\\mathbf{e}_0$.

**Convergence (sharp).** Converges for every $\\mathbf{x}_0$ **iff** the spectral radius
$$\\rho(B)=\\max_i|\\lambda_i(B)|<1.$$
**Sufficient:** $\\|B\\|<1$ in some induced norm (then it's a contraction).

**Rate / error bound.** If $\\|B\\|=q<1$:
$$\\|\\mathbf{e}_k\\|\\le q^k\\|\\mathbf{e}_0\\|,\\qquad \\|\\mathbf{x}_k-\\mathbf{x}^*\\|\\le\\frac{q}{1-q}\\|\\mathbf{x}_k-\\mathbf{x}_{k-1}\\|.$$
Asymptotic convergence factor is $\\rho(B)$ (smaller $\\Rightarrow$ faster).

**Pitfalls.** $\\rho(B)<1$ is necessary and sufficient; $\\|B\\|<1$ is only sufficient — $\\|B\\|\\ge1$ does **not** imply divergence. Convergence can be slow if $\\rho(B)$ is close to 1.`,
      hu: `**Alak.** Iteráció $\\mathbf{x}_{k+1}=B\\mathbf{x}_k+\\mathbf{c}$ (pl. $A\\mathbf{x}=\\mathbf{b}$ felbontásából). Fixpont $\\mathbf{x}^*=B\\mathbf{x}^*+\\mathbf{c}$, azaz $(I-B)\\mathbf{x}^*=\\mathbf{c}$.

**Hibarekurzió.** $\\mathbf{e}_k=\\mathbf{x}_k-\\mathbf{x}^*$ jelöléssel: $\\mathbf{e}_{k+1}=B\\mathbf{e}_k=B^{k+1}\\mathbf{e}_0$.

**Konvergencia (éles).** Minden $\\mathbf{x}_0$-ra **akkor és csak akkor** konvergál, ha a spektrálsugár
$$\\rho(B)=\\max_i|\\lambda_i(B)|<1.$$
**Elegendő:** $\\|B\\|<1$ valamely indukált normában (ekkor kontrakció).

**Sebesség / hibabecslés.** Ha $\\|B\\|=q<1$:
$$\\|\\mathbf{e}_k\\|\\le q^k\\|\\mathbf{e}_0\\|,\\qquad \\|\\mathbf{x}_k-\\mathbf{x}^*\\|\\le\\frac{q}{1-q}\\|\\mathbf{x}_k-\\mathbf{x}_{k-1}\\|.$$
Az aszimptotikus konvergenciafaktor $\\rho(B)$ (kisebb $\\Rightarrow$ gyorsabb).

**Buktatók.** $\\rho(B)<1$ szükséges és elegendő; $\\|B\\|<1$ csak elegendő — $\\|B\\|\\ge1$ **nem** jelent divergenciát. Ha $\\rho(B)$ közel van 1-hez, a konvergencia lassú.`,
    },
  },

  // 8. Jacobi and Gauss-Seidel iteration
  {
    title: {
      en: 'Jacobi and Gauss–Seidel iteration',
      hu: 'Jacobi- és Gauss-Seidel-iteráció',
    },
    body: {
      en: `Solve $A\\mathbf{x}=\\mathbf{b}$ by splitting $A=D-L-U$ ($D$ diagonal, $-L$ strictly lower, $-U$ strictly upper part).

**Jacobi.** Use only old components:
$$\\mathbf{x}^{(k+1)}=D^{-1}\\big(L+U)\\mathbf{x}^{(k)}+D^{-1}\\mathbf{b},\\quad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big).$$
Iteration matrix $B_J=D^{-1}(L+U)$.

**Gauss–Seidel.** Use already-updated components immediately:
$$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)}\\Big).$$
Iteration matrix $B_{GS}=(D-L)^{-1}U$.

**Convergence.** Both converge $\\iff \\rho(B)<1$. **Strict diagonal dominance** ($|a_{ii}|>\\sum_{j\\neq i}|a_{ij}|$ for all $i$) $\\Rightarrow$ both converge. GS also converges for symmetric positive definite $A$. GS usually faster than Jacobi.

**Pitfalls.** Need $a_{ii}\\neq0$ (reorder rows if needed). Diagonal dominance is sufficient, not necessary. Jacobi is parallelizable; GS is sequential (depends on update order).`,
      hu: `Megoldandó $A\\mathbf{x}=\\mathbf{b}$ az $A=D-L-U$ felbontással ($D$ diagonális, $-L$ szigorúan alsó, $-U$ szigorúan felső rész).

**Jacobi.** Csak régi komponensek:
$$\\mathbf{x}^{(k+1)}=D^{-1}\\big(L+U)\\mathbf{x}^{(k)}+D^{-1}\\mathbf{b},\\quad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big).$$
Iterációs mátrix $B_J=D^{-1}(L+U)$.

**Gauss–Seidel.** A már frissített komponenseket azonnal használja:
$$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)}\\Big).$$
Iterációs mátrix $B_{GS}=(D-L)^{-1}U$.

**Konvergencia.** Mindkettő $\\iff \\rho(B)<1$. **Szigorú diagonális dominancia** ($|a_{ii}|>\\sum_{j\\neq i}|a_{ij}|$ minden $i$-re) $\\Rightarrow$ mindkettő konvergál. A GS szimmetrikus pozitív definit $A$-ra is konvergál. A GS általában gyorsabb a Jacobinál.

**Buktatók.** Kell $a_{ii}\\neq0$ (szükség esetén sorcsere). A diagonális dominancia elegendő, nem szükséges. A Jacobi párhuzamosítható; a GS soros (függ a frissítési sorrendtől).`,
    },
  },

  // 9. Perturbation of linear systems, condition number
  {
    title: {
      en: 'Perturbation of linear systems, condition number',
      hu: 'Lineáris egyenletrendszerek perturbációja, kondíciószám',
    },
    body: {
      en: `For $A\\mathbf{x}=\\mathbf{b}$, how do errors in $\\mathbf{b}$ and $A$ affect $\\mathbf{x}$?

**Condition number.** $$\\kappa(A)=\\|A\\|\\,\\|A^{-1}\\|\\ \\ (\\ge1).$$
Depends on the chosen norm.

**Perturbation bounds.**
- Right-hand side only ($A\\hat{\\mathbf{x}}=\\mathbf{b}+\\Delta\\mathbf{b}$):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\le\\kappa(A)\\,\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}.$$
- Both $A$ and $\\mathbf{b}$ perturbed (to first order):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\lesssim \\kappa(A)\\left(\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}+\\frac{\\|\\Delta A\\|}{\\|A\\|}\\right).$$

**Reading it.** $\\kappa(A)$ amplifies relative input errors. $\\kappa\\approx1$: well-conditioned. $\\kappa\\gg1$: **ill-conditioned** — tiny data/rounding errors cause large solution errors; expect to lose about $\\log_{10}\\kappa(A)$ decimal digits.

**Pitfalls.** Ill-conditioning is a property of $A$, **not** of the algorithm — even a perfect solver loses accuracy. A small residual $\\|\\mathbf{b}-A\\hat{\\mathbf{x}}\\|$ does **not** guarantee a small error when $\\kappa(A)$ is large. $\\kappa$ is norm-dependent and always $\\ge1$.`,
      hu: `Az $A\\mathbf{x}=\\mathbf{b}$ rendszerben hogyan hatnak $\\mathbf{b}$ és $A$ hibái $\\mathbf{x}$-re?

**Kondíciószám.** $$\\kappa(A)=\\|A\\|\\,\\|A^{-1}\\|\\ \\ (\\ge1).$$
Függ a választott normától.

**Perturbációs becslések.**
- Csak a jobb oldal ($A\\hat{\\mathbf{x}}=\\mathbf{b}+\\Delta\\mathbf{b}$):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\le\\kappa(A)\\,\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}.$$
- $A$ és $\\mathbf{b}$ is perturbált (elsőrendben):
$$\\frac{\\|\\Delta\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}\\lesssim \\kappa(A)\\left(\\frac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}+\\frac{\\|\\Delta A\\|}{\\|A\\|}\\right).$$

**Értelmezés.** $\\kappa(A)$ felnagyítja a relatív bemeneti hibákat. $\\kappa\\approx1$: jól kondicionált. $\\kappa\\gg1$: **rosszul kondicionált** — apró adat-/kerekítési hibák nagy megoldáshibát okoznak; kb. $\\log_{10}\\kappa(A)$ tizedesjegyet veszítünk.

**Buktatók.** A rossz kondicionáltság $A$ tulajdonsága, **nem** az algoritmusé — egy tökéletes megoldó is veszít pontosságból. Kis reziduum $\\|\\mathbf{b}-A\\hat{\\mathbf{x}}\\|$ **nem** garantál kis hibát, ha $\\kappa(A)$ nagy. $\\kappa$ normafüggő és mindig $\\ge1$.`,
    },
  },
];
