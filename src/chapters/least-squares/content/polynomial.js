// 9.2 Polynomial curve fitting — bilingual, canonical text + math.

export const polynomial = {
  id: 'polynomial',
  title: { hu: '9.2. Polinom illesztése', en: '9.2. Polynomial Curve Fitting' },
  blocks: [
    {
      type: 'text',
      hu: `Most $m$-edfokú polinom illesztését vizsgáljuk a megadott $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontokra: keresünk olyan $a_m, a_{m-1}, \\ldots, a_0$ számokat, amelyek minimalizálják az`,
      en: `Now we study polynomial curve fitting of degree $m$ to the data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$): we look for parameters $a_m, a_{m-1}, \\ldots, a_0$ which minimize`,
    },
    {
      type: 'math',
      tex: `F(a_m,\\ldots,a_0) := \\sum_{i=0}^{n} \\left(a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_1 x_i + a_0 - y_i\\right)^2`,
    },
    {
      type: 'text',
      hu: `$m+1$-változós függvényt. Ha $n \\le m$, akkor a pontokon átmenő $m$-edfokú polinom létezik ($F$ minimuma 0), amit interpolációval kaphatunk meg. Ezért az $m < n$ eset az érdekes, ekkor $F$ általában nem veszi fel a 0 értéket.`,
      en: `a function of $m+1$ variables. If $n \\le m$, then a polynomial of degree $m$ interpolates the data (the minimum of $F$ is 0), obtainable by interpolation. So the interesting case is $m < n$, where $F$ is generally positive.`,
    },
    {
      type: 'text',
      hu: `A szélsőérték ott lehet, ahol minden parciális derivált nulla. Ezeket nullával egyenlővé téve és átrendezve kapjuk a **normálegyenleteket** (4):`,
      en: `An extremum can occur only where all partial derivatives are 0. Setting them to zero and rearranging gives the **normal equations** (4):`,
    },
    {
      type: 'math',
      tex: `\\begin{aligned} a_m\\!\\sum x_i^{2m} + \\cdots + a_0\\!\\sum x_i^{m} &= \\sum x_i^{m} y_i\\\\ a_m\\!\\sum x_i^{2m-1} + \\cdots + a_0\\!\\sum x_i^{m-1} &= \\sum x_i^{m-1} y_i\\\\ &\\vdots\\\\ a_m\\!\\sum x_i^{m} + \\cdots + a_0(n+1) &= \\sum y_i \\end{aligned} \\tag{4}`,
    },
    {
      type: 'text',
      hu: `A (4) rendszer együtthatómátrixa:`,
      en: `The coefficient matrix of system (4) is:`,
    },
    {
      type: 'math',
      tex: `\\mathbf{A} = \\begin{pmatrix} \\sum x_i^{2m} & \\sum x_i^{2m-1} & \\cdots & \\sum x_i^{m}\\\\ \\sum x_i^{2m-1} & \\sum x_i^{2m-2} & \\cdots & \\sum x_i^{m-1}\\\\ \\vdots & \\vdots & & \\vdots\\\\ \\sum x_i^{m} & \\sum x_i^{m-1} & \\cdots & \\sum 1 \\end{pmatrix}`,
    },
    {
      type: 'text',
      hu: `Belátjuk, hogy $\\mathbf{A}$ invertálható, mert **pozitív definit**. A $jk$-adik eleme $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Legyen $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Ekkor`,
      en: `We show $\\mathbf{A}$ is invertible because it is **positive definite**. Its $jk$-th element is $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Let $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Then`,
    },
    {
      type: 'math',
      tex: `\\mathbf{z}^T \\mathbf{A} \\mathbf{z} = \\sum_{j=1}^{m+1}\\sum_{k=1}^{m+1}\\sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k = \\sum_{i=0}^{n}\\left(\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\\right)^2 \\ge 0.`,
    },
    {
      type: 'text',
      hu: `Ha $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, akkor $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ minden $i$-re. Ha az $x_i$-k páronként különböznek, akkor a $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ legfeljebb $m$-edfokú polinomnak $n+1$ különböző gyöke van. Ha $m \\le n$, az algebra alaptétele szerint $p \\equiv 0$, azaz $z_j = 0$ minden $j$-re. Tehát $\\mathbf{A}$ pozitív definit.`,
      en: `If $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, then $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ for all $i$. If the $x_i$ are pairwise distinct, the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ of degree at most $m$ has $n+1$ distinct roots. If $m \\le n$, the fundamental theorem of algebra gives $p \\equiv 0$, i.e. $z_j = 0$ for all $j$. Hence $\\mathbf{A}$ is positive definite.`,
    },
    {
      type: 'text',
      hu: `Mivel $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, azaz $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, az $F$-nek $\\bar{\\mathbf{a}}$-ban lokális — és kvadratikus volta miatt globális — minimuma van.`,
      en: `Since $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, i.e. $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, the function $F$ has a local — and, being quadratic, global — minimum at $\\bar{\\mathbf{a}}$.`,
    },
    {
      type: 'theorem',
      label: { hu: '9.3. Tétel', en: 'Theorem 9.3' },
      hu: `Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol az $x_i$ alappontok páronként különböznek. Legyen $m \\le n$. Ekkor a $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ feladatnak létezik egyértelmű megoldása, amely teljesíti a (4) normálegyenleteket.`,
      en: `Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) with pairwise distinct mesh points $x_i$, and let $m \\le n$. Then the problem $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ has a unique solution, which satisfies the normal equations (4).`,
    },
    {
      type: 'example',
      label: { hu: '9.4. Példa', en: 'Example 9.4' },
      hu: `Illesszünk parabolát az alábbi adatokra. A táblázatban kiszámoljuk a szükséges hatványösszegeket.`,
      en: `Fit a parabola to the data below. The table computes the required power sums.`,
    },
    {
      type: 'table',
      caption: { hu: '9.2. táblázat — Parabola illesztése', en: 'Table 9.2 — Parabola fitting' },
      headers: ['$x_i$', '$y_i$', '$x_i^4$', '$x_i^3$', '$x_i^2$', '$x_i^2 y_i$', '$x_i y_i$'],
      rows: [
        ['-1.0', '1.4', '1.0000', '-1.000', '1.00', '1.400', '-1.40'],
        ['0.0', '1.9', '0.0000', '0.000', '0.00', '0.000', '0.00'],
        ['0.5', '1.6', '0.0625', '0.125', '0.25', '0.400', '0.80'],
        ['1.0', '1.7', '1.0000', '1.000', '1.00', '1.700', '1.70'],
        ['2.0', '0.2', '16.0000', '8.000', '4.00', '0.800', '0.40'],
        ['2.5', '-0.1', '39.0625', '15.625', '6.25', '-0.625', '-0.25'],
        ['3.0', '-2.0', '81.0000', '27.000', '9.00', '-18.000', '-6.00'],
      ],
      totals: ['8.0', '4.7', '138.1250', '50.750', '21.50', '-14.325', '-4.75'],
    },
    {
      type: 'text',
      hu: `A (4) egyenletrendszer: $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Megoldása $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. Az illesztés hibája $0.0964456$.`,
      en: `System (4): $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Solution $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. The fitting error is $0.0964456$.`,
    },
    {
      type: 'demo',
      component: 'polynomial',
      caption: { hu: '9.2. ábra — Polinom illesztése (interaktív)', en: 'Figure 9.2 — Polynomial fitting (interactive)' },
    },
    {
      type: 'exercises',
      label: { hu: 'Feladatok', en: 'Exercises' },
      intro: {
        hu: 'Illesszen parabolát a megadott adatokra, és számítsa ki az illesztés hibáját:',
        en: 'Fit a parabola to the given data, and compute the error of the fitting:',
      },
      items: [
        {
          tag: '(a)',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['-2.0', '-2.1'],
            ['-1.0', '1.4'],
            ['1.0', '0.5'],
            ['2.0', '-2.5'],
            ['3.0', '-7.2'],
          ],
        },
        {
          tag: '(b)',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['1.0', '2.5'],
            ['2.0', '1.2'],
            ['3.0', '-2.0'],
            ['4.0', '3.9'],
            ['5.0', '6.2'],
            ['6.0', '8.3'],
          ],
        },
      ],
      solution: `**Method.** For a parabola $y=ax^2+bx+c$ form the $3\\times3$ normal equations from the sums $\\sum x_i^k$ ($k=0,\\dots,4$) and $\\sum x_i^k y_i$ ($k=0,1,2$), then solve for $a,b,c$ and evaluate $SSR=\\sum(ax_i^2+bx_i+c-y_i)^2$.

**Example A — data** $x_i:-2,-1,1,2,3$, $\\ y_i:-2.1,1.4,0.5,-2.5,-7.2$.

Sums: $n+1=5$, $\\sum x_i=3$, $\\sum x_i^2=19$, $\\sum x_i^3=27$, $\\sum x_i^4=115$, $\\sum y_i=-9.9$, $\\sum x_iy_i=-23.3$, $\\sum x_i^2y_i=-81.3$.

Normal equations $\\left(\\begin{smallmatrix}115 & 27 & 19\\\\ 27 & 19 & 3\\\\ 19 & 3 & 5\\end{smallmatrix}\\right)\\left(\\begin{smallmatrix}a\\\\ b\\\\ c\\end{smallmatrix}\\right)=\\left(\\begin{smallmatrix}-81.3\\\\ -23.3\\\\ -9.9\\end{smallmatrix}\\right)$ give $a\\approx-0.985$, $b\\approx-0.321$, $c\\approx0.156$, so $y=-0.985x^2-0.321x+0.156$ with $SSR\\approx0.142$.

**Example B — data** $x_i:1,\\dots,6$, $\\ y_i:2.5,1.2,-2.0,3.9,6.2,8.3$.

Sums: $\\sum x_i=21$, $\\sum x_i^2=91$, $\\sum x_i^3=441$, $\\sum x_i^4=2275$, $\\sum y_i=20.1$, $\\sum x_iy_i=106.5$, $\\sum x_i^2y_i=553.5$, giving $a\\approx0.304$, $b\\approx-1.286$, $c\\approx2.929$, i.e. $y=0.304x^2-1.286x+2.929$, $SSR\\approx2.847$.

**Cubic fit** to Example A data ($g(x)=ax^3+bx^2+cx+d$): with $\\sum x_i^5=243$, $\\sum x_i^6=859$, $\\sum x_i^3y_i=-198.5$ the $4\\times4$ system yields $a\\approx-0.053$, $b\\approx-0.893$, $c\\approx-0.175$, $d\\approx0.089$, $SSR\\approx0.128$ (slightly better than the parabola).

**Positive definiteness.** With $A_{jk}=\\sum_i x_i^{2m+2-j-k}$, $\\ \\mathbf z^TA\\mathbf z=\\sum_i\\left(\\sum_j z_j x_i^{m+1-j}\\right)^2\\ge0$; equality forces a degree-$\\le m$ polynomial to vanish at $m+1$ distinct nodes, hence $\\mathbf z=0$. So $A$ is positive definite.`,
    },
    { type: 'glossary', deck: 'polynomial' },
    { type: 'flashcards', deck: 'polynomial' },
    { type: 'quiz', ref: 'polynomial' },
  ],
};
