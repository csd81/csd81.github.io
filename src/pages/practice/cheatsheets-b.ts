import type { Cheatsheet } from './cheatsheet-types';

/** Exam cheatsheets for topics 10–17 (interpolation, numerical calculus, optimization, least squares). */
export const CHEATSHEETS_B: Cheatsheet[] = [
  // 10. Lagrange interpolation
  {
    title: {
      en: 'Lagrange interpolation',
      hu: 'Lagrange-interpoláció',
    },
    body: {
      en: `**Goal.** Find the unique degree $\\le n$ polynomial through $n+1$ points $(x_0,y_0),\\dots,(x_n,y_n)$ with distinct nodes $x_i$.

**Basis polynomials (cardinal):**
$$l_k(x)=\\prod_{i\\ne k}\\frac{x-x_i}{x_k-x_i},\\qquad l_k(x_j)=\\delta_{kj}.$$

**Interpolant:**
$$L_n(x)=\\sum_{k=0}^{n} y_k\\, l_k(x).$$

**Error term** (if $f\\in C^{n+1}$, some $\\xi$ in the interval):
$$f(x)-L_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{n}(x-x_i).$$

- Uniqueness: only **one** polynomial of degree $\\le n$ fits $n+1$ distinct nodes.
- Drawback: adding a node recomputes **all** $l_k$ (use Newton form for incremental work).
- Runge phenomenon: equispaced high-degree nodes oscillate; prefer Chebyshev nodes.`,
      hu: `**Cél.** Megkeresni az egyetlen, legfeljebb $n$-edfokú polinomot, amely átmegy az $n+1$ db $(x_0,y_0),\\dots,(x_n,y_n)$ ponton (a $x_i$ alappontok különbözőek).

**Alappolinomok:**
$$l_k(x)=\\prod_{i\\ne k}\\frac{x-x_i}{x_k-x_i},\\qquad l_k(x_j)=\\delta_{kj}.$$

**Interpolációs polinom:**
$$L_n(x)=\\sum_{k=0}^{n} y_k\\, l_k(x).$$

**Hibatag** (ha $f\\in C^{n+1}$, valamely $\\xi$-re az intervallumban):
$$f(x)-L_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^{n}(x-x_i).$$

- Egyértelműség: $n+1$ különböző alappontra **csak egy** legfeljebb $n$-edfokú polinom illik.
- Hátrány: új alappontnál **minden** $l_k$ újraszámolandó (inkrementálishoz Newton-alak).
- Runge-jelenség: egyenközű, magas fokú alappontok oszcillálnak; Csebisev-alappontok jobbak.`,
    },
  },

  // 11. Divided differences, Newton form
  {
    title: {
      en: 'Divided differences, Newton form of the interpolating polynomial',
      hu: 'Osztott differenciák, a Lagrange-interpoláció Newton-féle alakja',
    },
    body: {
      en: `**Divided differences (recurrence):**
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
- $f[x_0,\\dots,x_n]=\\dfrac{f^{(n)}(\\xi)}{n!}$ for some $\\xi$; symmetric in its arguments.`,
      hu: `**Osztott differenciák (rekurzió):**
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
- $f[x_0,\\dots,x_n]=\\dfrac{f^{(n)}(\\xi)}{n!}$ valamely $\\xi$-re; az argumentumokban szimmetrikus.`,
    },
  },

  // 12. Numerical differentiation
  {
    title: {
      en: 'Numerical differentiation (Lagrange and Taylor approaches)',
      hu: 'Numerikus differenciálás – Lagrange és Taylor módszerek',
    },
    body: {
      en: `**First derivative (step $h$):**
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

- **Trade-off:** smaller $h$ cuts truncation error but inflates round-off ($\\sim \\varepsilon/h$); an optimal $h$ exists.`,
      hu: `**Első derivált (lépés $h$):**
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

- **Kompromisszum:** kisebb $h$ csökkenti a csonkítási hibát, de növeli a kerekítést ($\\sim \\varepsilon/h$); van optimális $h$.`,
    },
  },

  // 13. Newton–Cotes formulas
  {
    title: {
      en: 'Newton–Cotes formulas',
      hu: 'Newton–Cotes-formulák',
    },
    body: {
      en: `Approximate $\\int_a^b f\\,dx$ by integrating an interpolating polynomial on **equispaced** nodes.

**Trapezoidal rule** (degree of exactness 1):
$$\\int_a^b f\\,dx\\approx\\frac{h}{2}\\big(f(a)+f(b)\\big),\\quad h=b-a,\\quad E=-\\frac{h^3}{12}f''(\\xi).$$

**Simpson's rule** (degree of exactness 3):
$$\\int_a^b f\\,dx\\approx\\frac{h}{3}\\big(f(a)+4f(m)+f(b)\\big),\\ m=\\tfrac{a+b}{2},\\ h=\\tfrac{b-a}{2},\\ E=-\\frac{h^5}{90}f^{(4)}(\\xi).$$

**Composite versions** (subinterval width $h=(b-a)/n$):
$$\\text{Trap: } \\frac{h}{2}\\Big(f_0+2\\!\\sum_{i=1}^{n-1}\\! f_i+f_n\\Big),\\quad E=-\\frac{(b-a)h^2}{12}f''(\\xi).$$
$$\\text{Simpson ($n$ even): } \\frac{h}{3}\\Big(f_0+4\\!\\!\\sum_{\\text{odd }i}\\!\\! f_i+2\\!\\!\\sum_{\\text{even }i}\\!\\! f_i+f_n\\Big),\\ E=-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi).$$

- **Degree of exactness:** highest polynomial degree integrated exactly (Trap = 1, Simpson = 3).
- Composite error orders: $O(h^2)$ trapezoidal, $O(h^4)$ Simpson.`,
      hu: `Az $\\int_a^b f\\,dx$ közelítése **egyenközű** alappontokon vett interpolációs polinom integrálásával.

**Trapézszabály** (pontossági fok 1):
$$\\int_a^b f\\,dx\\approx\\frac{h}{2}\\big(f(a)+f(b)\\big),\\quad h=b-a,\\quad E=-\\frac{h^3}{12}f''(\\xi).$$

**Simpson-szabály** (pontossági fok 3):
$$\\int_a^b f\\,dx\\approx\\frac{h}{3}\\big(f(a)+4f(m)+f(b)\\big),\\ m=\\tfrac{a+b}{2},\\ h=\\tfrac{b-a}{2},\\ E=-\\frac{h^5}{90}f^{(4)}(\\xi).$$

**Összetett (kompozit) változatok** (részintervallum szélesség $h=(b-a)/n$):
$$\\text{Trapéz: } \\frac{h}{2}\\Big(f_0+2\\!\\sum_{i=1}^{n-1}\\! f_i+f_n\\Big),\\quad E=-\\frac{(b-a)h^2}{12}f''(\\xi).$$
$$\\text{Simpson ($n$ páros): } \\frac{h}{3}\\Big(f_0+4\\!\\!\\sum_{\\text{páratlan }i}\\!\\! f_i+2\\!\\!\\sum_{\\text{páros }i}\\!\\! f_i+f_n\\Big),\\ E=-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi).$$

- **Pontossági fok:** a legmagasabb polinomfok, amit pontosan integrál (trapéz = 1, Simpson = 3).
- Összetett hibarend: $O(h^2)$ trapéz, $O(h^4)$ Simpson.`,
    },
  },

  // 14. Golden-section search
  {
    title: {
      en: 'Golden-section search',
      hu: 'Aranymetszés szerinti keresés módszere',
    },
    body: {
      en: `**Use when:** minimizing a **unimodal** $f$ on $[a,b]$ with **no derivatives** available (derivative-free 1-D minimization).

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
- Stop when interval width $<$ tolerance.`,
      hu: `**Mikor:** egy **unimodális** $f$ minimalizálása $[a,b]$-n, ha **nincs derivált** (derivált nélküli 1-D minimumkeresés).

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
- Megállás, ha az intervallum hossza $<$ tűréshatár.`,
    },
  },

  // 15. Gradient method
  {
    title: {
      en: 'Gradient method (steepest descent)',
      hu: 'Gradiens-módszer',
    },
    body: {
      en: `**Idea.** Move opposite the gradient (direction of fastest decrease):
$$x_{k+1}=x_k-\\alpha_k\\,\\nabla f(x_k).$$

**Step size $\\alpha_k$:**
- **Constant** $\\alpha$: simple, but too large diverges, too small is slow.
- **Line search (steepest/optimal):** $\\alpha_k=\\arg\\min_{\\alpha>0} f(x_k-\\alpha\\nabla f(x_k))$. Consecutive search directions are then orthogonal.

**Convergence.** Globally convergent for smooth functions with suitable steps; for **convex / quadratic** $f$ it converges **linearly**, with rate governed by the condition number $\\kappa=\\lambda_{\\max}/\\lambda_{\\min}$ of the Hessian:
$$\\text{rate}\\sim\\Big(\\frac{\\kappa-1}{\\kappa+1}\\Big)^2.$$

- Stationary point: $\\nabla f(x^\\*)=0$.
- Ill-conditioned $\\kappa\\gg1$ $\\Rightarrow$ slow zig-zag; only first-order info (no Hessian needed).`,
      hu: `**Ötlet.** A gradienssel ellentétes irányba lépünk (a leggyorsabb csökkenés iránya):
$$x_{k+1}=x_k-\\alpha_k\\,\\nabla f(x_k).$$

**Lépéshossz $\\alpha_k$:**
- **Állandó** $\\alpha$: egyszerű, de túl nagy divergál, túl kicsi lassú.
- **Vonalmenti keresés (legmeredekebb/optimális):** $\\alpha_k=\\arg\\min_{\\alpha>0} f(x_k-\\alpha\\nabla f(x_k))$. Ekkor az egymást követő keresési irányok merőlegesek.

**Konvergencia.** Sima függvényeknél megfelelő lépéssel globálisan konvergens; **konvex / kvadratikus** $f$-re **lineárisan** konvergál, az ütemet a Hesse-mátrix $\\kappa=\\lambda_{\\max}/\\lambda_{\\min}$ kondíciószáma szabja meg:
$$\\text{ütem}\\sim\\Big(\\frac{\\kappa-1}{\\kappa+1}\\Big)^2.$$

- Stacionárius pont: $\\nabla f(x^\\*)=0$.
- Rosszul kondicionált $\\kappa\\gg1$ $\\Rightarrow$ lassú cikcakk; csak elsőrendű információ (nem kell Hesse-mátrix).`,
    },
  },

  // 16. Newton's method for minimization
  {
    title: {
      en: "Newton's method for minimization",
      hu: 'Newton-módszer minimumkeresésre',
    },
    body: {
      en: `**Idea.** Minimize the local quadratic (2nd-order Taylor) model; set its gradient to zero:
$$x_{k+1}=x_k-\\big[\\nabla^2 f(x_k)\\big]^{-1}\\nabla f(x_k).$$
($\\nabla^2 f$ = Hessian.) Solve the linear system $\\nabla^2 f(x_k)\\,p_k=-\\nabla f(x_k)$, then $x_{k+1}=x_k+p_k$.

**Convergence.** **Quadratic** near a minimum where the Hessian is **positive definite (PD)** and $f$ is smooth — far fewer iterations than gradient descent.

**Requirements / caveats:**
- Needs the Hessian (expensive: $O(n^2)$ storage, $O(n^3)$ solve) and its second derivatives.
- Hessian must be PD for a descent direction; if not, may step toward a saddle/max (use modification / line search / damping).

**Quasi-Newton (BFGS).** Avoids forming the Hessian: build an approximation $B_k\\approx\\nabla^2 f$ (or its inverse) from successive gradients; **superlinear** convergence, only first derivatives needed.`,
      hu: `**Ötlet.** A lokális kvadratikus (másodrendű Taylor) modell minimalizálása; gradiensét nullázzuk:
$$x_{k+1}=x_k-\\big[\\nabla^2 f(x_k)\\big]^{-1}\\nabla f(x_k).$$
($\\nabla^2 f$ = Hesse-mátrix.) Megoldjuk a $\\nabla^2 f(x_k)\\,p_k=-\\nabla f(x_k)$ lineáris rendszert, majd $x_{k+1}=x_k+p_k$.

**Konvergencia.** **Kvadratikus** a minimum közelében, ahol a Hesse-mátrix **pozitív definit (PD)** és $f$ sima — sokkal kevesebb iteráció, mint a gradiens-módszernél.

**Feltételek / buktatók:**
- Kell a Hesse-mátrix (drága: $O(n^2)$ tárolás, $O(n^3)$ megoldás) és a második deriváltak.
- A Hesse-mátrixnak PD-nek kell lennie a csökkenő irányhoz; ha nem, nyeregpont/maximum felé léphet (módosítás / vonalkeresés / csillapítás kell).

**Kvázi-Newton (BFGS).** Nem képezi a Hesse-mátrixot: $B_k\\approx\\nabla^2 f$ (vagy inverze) közelítést épít az egymást követő gradiensekből; **szuperlineáris** konvergencia, csak első deriváltak kellenek.`,
    },
  },

  // 17. Method of least squares
  {
    title: {
      en: 'Method of least squares',
      hu: 'Legkisebb négyzetek módszere',
    },
    body: {
      en: `**Problem.** Overdetermined $A c\\approx y$ ($m$ data, $n<m$ params). Minimize the sum of squared residuals:
$$\\min_c\\;\\lVert Ac-y\\rVert_2^2=\\sum_i\\big(y_i-\\hat y_i\\big)^2.$$

**Normal equations** (set gradient to 0):
$$A^{\\top}A\\,c=A^{\\top}y\\quad\\Rightarrow\\quad c=(A^{\\top}A)^{-1}A^{\\top}y\\ \\text{(if }A\\text{ full column rank)}.$$

**Line fit** $y=c_0+c_1 x$: columns of $A$ are $[1,\\ x_i]$.

**Polynomial fit** degree $d$: columns $[1,\\ x_i,\\ x_i^2,\\dots,x_i^d]$ (Vandermonde).

**Linearizable nonlinear fits** (take logs $\\Rightarrow$ linear LSQ):
- Exponential $y=ae^{bx}$: $\\ln y=\\ln a+bx$.
- Power $y=ax^{b}$: $\\ln y=\\ln a+b\\ln x$.

- $A^{\\top}A$ may be ill-conditioned (esp. high-degree Vandermonde); prefer QR/SVD numerically.`,
      hu: `**Feladat.** Túlhatározott $A c\\approx y$ ($m$ adat, $n<m$ paraméter). A reziduumok négyzetösszegét minimalizáljuk:
$$\\min_c\\;\\lVert Ac-y\\rVert_2^2=\\sum_i\\big(y_i-\\hat y_i\\big)^2.$$

**Normálegyenletek** (a gradienst nullázva):
$$A^{\\top}A\\,c=A^{\\top}y\\quad\\Rightarrow\\quad c=(A^{\\top}A)^{-1}A^{\\top}y\\ \\text{(ha }A\\text{ teljes oszloprangú)}.$$

**Egyenes-illesztés** $y=c_0+c_1 x$: $A$ oszlopai $[1,\\ x_i]$.

**Polinom-illesztés** $d$-edfokú: oszlopok $[1,\\ x_i,\\ x_i^2,\\dots,x_i^d]$ (Vandermonde).

**Linearizálható nemlineáris illesztések** (logaritmus $\\Rightarrow$ lineáris LNN):
- Exponenciális $y=ae^{bx}$: $\\ln y=\\ln a+bx$.
- Hatvány $y=ax^{b}$: $\\ln y=\\ln a+b\\ln x$.

- $A^{\\top}A$ rosszul kondicionált lehet (főleg magas fokú Vandermonde); numerikusan QR/SVD ajánlott.`,
    },
  },
];
