// 9.3 Special nonlinear curve fitting — bilingual, canonical text + math.

export const nonlinear = {
  id: 'nonlinear',
  title: { hu: '9.3. Nemlineáris függvény illesztése', en: '9.3. Special Nonlinear Curve Fitting' },
  blocks: [
    {
      type: 'text',
      hu: `A módszer kiterjeszthető nemlineáris függvényekre is, ahol a paraméterek lineárisan szerepelnek — ekkor a normálegyenletek lineárisak. Az általános esetben azonban nemlineárisak lehetnek. Tekintsünk egy $b e^{ax}$ alakú exponenciális függvényt. A négyzetes hiba:`,
      en: `The method extends to nonlinear functions where the parameters appear linearly — then the normal equations are linear. In general, though, they can be nonlinear. Consider an exponential function of the form $b e^{ax}$. The least square error is:`,
    },
    { type: 'math', tex: `F(a, b) = \\sum_{i=0}^{n} (b e^{a x_i} - y_i)^2,` },
    {
      type: 'text',
      hu: `amelynek kritikus pontjait a következő **nemlineáris** rendszer adja:`,
      en: `whose critical points are the solutions of the following **nonlinear** system:`,
    },
    {
      type: 'math',
      tex: `\\begin{aligned} 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, b e^{a x_i} x_i &= 0,\\\\ 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, e^{a x_i} &= 0. \\end{aligned}`,
    },
    {
      type: 'text',
      hu: `Ezt analitikusan nem tudjuk megoldani. Numerikusan megoldható, de a gyakorlatban gyakran a **linearizációs módszert** használjuk.`,
      en: `We cannot solve this analytically. It can be solved numerically, but in practice we often use the **method of linearization**.`,
    },
    {
      type: 'callout',
      variant: 'tip',
      hu: `**Linearizáció ($be^{ax}$).** Vegyük mindkét oldal logaritmusát: $\\ln y = \\ln b + a x$. Új változók: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Illesszünk $Y = AX + B$ egyenest az $(x_i, \\ln y_i)$ pontokra. Ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.`,
      en: `**Linearization ($be^{ax}$).** Take the logarithm of both sides: $\\ln y = \\ln b + a x$. New variables: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Fit a line $Y = AX + B$ to the points $(x_i, \\ln y_i)$. Then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$.`,
    },
    {
      type: 'text',
      hu: `Megjegyzés: a linearizált illesztés nem oldja meg pontosan az eredeti nemlineáris feladatot, de könnyen számolható, ezért a gyakorlatban hasznos.`,
      en: `Note: the linearized fit is not the exact solution of the original nonlinear problem, but it is easy to compute and thus useful in practice.`,
    },
    {
      type: 'example',
      label: { hu: '9.5. Példa', en: 'Example 9.5' },
      hu: `Illesszünk $b e^{ax}$ alakú függvényt az alábbi pontokra. A linearizált adatokat a táblázat tartalmazza.`,
      en: `Fit a function of the form $b e^{ax}$ to the points below. The linearized data are in the table.`,
    },
    {
      type: 'table',
      caption: { hu: '9.3. táblázat — $b e^{ax}$ illesztése', en: 'Table 9.3 — Fitting $b e^{ax}$' },
      headers: ['$x_i$', '$y_i$', '$\\ln y_i$', '$x_i^2$', '$x_i \\ln y_i$'],
      rows: [
        ['0.0', '0.3', '-1.203973', '0.00', '0.000000'],
        ['1.0', '0.7', '-0.356675', '1.00', '-0.356675'],
        ['1.5', '0.9', '-0.105361', '2.25', '-0.158041'],
        ['2.0', '1.2', '0.182322', '4.00', '0.364643'],
        ['3.0', '1.8', '0.587787', '9.00', '1.763360'],
        ['4.0', '2.7', '0.993252', '16.00', '3.973007'],
      ],
      totals: ['11.5', '', '0.097352', '32.25', '5.586294'],
    },
    {
      type: 'text',
      hu: `A normálegyenletek $32.25A + 11.5B = 5.586294$ és $11.5A + 6B = 0.097352$ megoldása $A = 0.528951$, $B = -0.997597$, azaz a függvény $y = 0.368765\\, e^{0.528951 x}$. A linearizált hiba $0.095396$, az eredeti (nemlineáris) hiba $0.165543$.`,
      en: `The normal equations $32.25A + 11.5B = 5.586294$ and $11.5A + 6B = 0.097352$ give $A = 0.528951$, $B = -0.997597$, i.e. $y = 0.368765\\, e^{0.528951 x}$. The linearized error is $0.095396$, and the original (nonlinear) error is $0.165543$.`,
    },
    {
      type: 'callout',
      variant: 'tip',
      hu: `**Linearizáció ($bx^a$).** Az $y = b x^a$ egyenletből $\\ln y = a \\ln x + \\ln b$, így $\\ln y$ lineárisan függ $\\ln x$-től. Illesszünk egyenest az $(\\ln x_i, \\ln y_i)$ pontokra; ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.`,
      en: `**Linearization ($bx^a$).** From $y = b x^a$ we get $\\ln y = a \\ln x + \\ln b$, so $\\ln y$ depends linearly on $\\ln x$. Fit a line to $(\\ln x_i, \\ln y_i)$; then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$.`,
    },
    {
      type: 'example',
      label: { hu: '9.6. Példa', en: 'Example 9.6' },
      hu: `Illesszünk $b x^a$ alakú hatványfüggvényt az alábbi pontokra.`,
      en: `Fit a power function of the form $b x^a$ to the points below.`,
    },
    {
      type: 'table',
      caption: { hu: '9.4. táblázat — $b x^a$ illesztése', en: 'Table 9.4 — Fitting $b x^a$' },
      headers: ['$x_i$', '$y_i$', '$\\ln x_i$', '$\\ln y_i$', '$(\\ln x_i)^2$', '$\\ln x_i \\ln y_i$'],
      rows: [
        ['0.5', '0.7', '-0.693147', '-0.356675', '0.480453', '0.247228'],
        ['1.0', '1.1', '0.000000', '0.095310', '0.000000', '0.000000'],
        ['1.5', '1.6', '0.405465', '0.470004', '0.164402', '0.190570'],
        ['2.5', '2.1', '0.916291', '0.741937', '0.839589', '0.679830'],
        ['3.0', '2.3', '1.098612', '0.832909', '1.206949', '0.915044'],
      ],
      totals: ['', '', '1.727221', '1.783485', '2.691393', '2.032673'],
    },
    {
      type: 'text',
      hu: `A normálegyenletek $2.691393A + 1.727221B = 2.032673$ és $1.727221A + 5B = 1.783485$ megoldása $A = 0.676257$, $B = 0.123088$. Ebből $a = 0.676257$, $b = e^{0.123088} = 1.130984$, azaz $y = 1.130984\\, x^{0.676257}$. A linearizált hiba $0.007279$, az eredeti hiba $0.019616$.`,
      en: `The normal equations $2.691393A + 1.727221B = 2.032673$ and $1.727221A + 5B = 1.783485$ give $A = 0.676257$, $B = 0.123088$. Hence $a = 0.676257$, $b = e^{0.123088} = 1.130984$, i.e. $y = 1.130984\\, x^{0.676257}$. The linearized error is $0.007279$, the original error $0.019616$.`,
    },
    {
      type: 'demo',
      component: 'nonlinear',
      caption: { hu: '9.3.–9.4. ábra — Nemlineáris illesztés (interaktív)', en: 'Figures 9.3–9.4 — Nonlinear fitting (interactive)' },
    },
    {
      type: 'exercises',
      label: { hu: 'Feladatok', en: 'Exercises' },
      intro: {
        hu: 'Illesszen a megadott típusú függvényt az adatokra, és számítsa ki az illesztés hibáját. Oldja meg az eredeti nemlineáris feladatot is Newton-módszerrel!',
        en: 'Fit the indicated function type to the data and compute the error. Also solve the original nonlinear problem with Newton’s method!',
      },
      items: [
        {
          tag: '(a) $b e^{ax}$',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['-2.0', '0.6'],
            ['-1.0', '0.9'],
            ['1.0', '1.6'],
            ['2.0', '2.3'],
            ['3.0', '2.9'],
          ],
        },
        {
          tag: '(b) $b e^{ax}$',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['1.0', '1.3'],
            ['1.5', '1.6'],
            ['2.0', '1.9'],
            ['2.5', '2.2'],
            ['3.0', '3.0'],
            ['3.5', '4.1'],
          ],
        },
        {
          tag: '(c) $b x^a$',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['1.0', '1.6'],
            ['3.0', '1.9'],
            ['4.0', '2.2'],
            ['5.0', '2.3'],
            ['6.0', '3.4'],
            ['9.0', '4.9'],
          ],
        },
        {
          tag: '(d) $b x^a$',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['1.0', '0.7'],
            ['2.0', '2.8'],
            ['3.0', '7.5'],
            ['4.0', '14.8'],
            ['5.0', '25.6'],
          ],
        },
      ],
      solution: `**Exponential fit $y=be^{ax}$.** Linearize with $Y=\\ln y$, $X=x$, $Y=AX+B$ where $A=a$, $B=\\ln b$, then fit a line to $(x_i,\\ln y_i)$.

*Example (a) data* $x_i:-2,-1,1,2,3$, $\\ y_i:0.6,0.9,1.6,2.3,2.9$. Transformed sums: $\\sum X_i=3$, $\\sum X_i^2=19$, $\\sum Y_i=1.752$, $\\sum X_iY_i=6.458$; determinant $d=86$. Then $A=\\dfrac{5(6.458)-3(1.752)}{86}=0.314$, $B=\\dfrac{19(1.752)-3(6.458)}{86}=0.162$, so $a=0.314$, $b=e^{0.162}=1.176$, giving $y=1.176e^{0.314x}$ (linear-space error $\\approx0.0234$, original error $\\approx0.0412$).

*Example (b)* gives $A\\approx0.436$, $B\\approx-0.201$, i.e. $y=0.818e^{0.436x}$.

**Power fit $y=bx^a$.** Linearize with $Y=\\ln y$, $X=\\ln x$.

*Example (c) data* $x_i:1,3,4,5,6,9$, $\\ y_i:1.6,1.9,2.2,2.3,3.4,4.9$. Sums: $\\sum X_i=8.083$, $\\sum X_i^2=14.234$, $\\sum Y_i=5.546$, $\\sum X_iY_i=9.428$, giving $A\\approx0.548$, $B\\approx0.186$, so $a=0.548$, $b=e^{0.186}=1.204$: $y=1.204x^{0.548}$ (error $\\approx0.127$).

*Example (d)* gives $A\\approx1.987\\approx2$, $B\\approx-0.147$: $y=0.863x^{1.987}\\approx0.863x^2$ — the data is essentially quadratic.

**Direct nonlinear minimization (Newton).** Minimize $F(a,b)=\\sum(be^{ax_i}-y_i)^2$ with gradient $\\partial_a F=2\\sum(be^{ax_i}-y_i)be^{ax_i}x_i$, $\\partial_b F=2\\sum(be^{ax_i}-y_i)e^{ax_i}$ and the corresponding Hessian, iterating $\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)^{(k+1)}=\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)^{(k)}-[F'']^{-1}\\nabla F$ from the linearization guess. For (a): $a\\approx0.318$, $b\\approx1.169$, $SSR\\approx0.0398$ (slightly better than linearization’s $0.0412$ — about a 3% improvement). Linearization is simple and gives an excellent initial guess; its drawback is minimizing log-space error, which is biased for additive noise.

**Reciprocal model $y=1/(a+bx)$.** Linearize as $1/y=a+bx$ and fit a line to $(x_i,1/y_i)$; e.g. data $x_i:1,\\dots,5$, $\\ y_i:0.50,0.33,0.25,0.20,0.17$ transform to $Y_i:2.00,3.03,4.00,5.00,5.88$, giving $Y=0.98+0.99X$, hence $y\\approx1/(1+x)$.`,
    },
    { type: 'glossary', deck: 'nonlinear' },
    { type: 'flashcards', deck: 'nonlinear' },
    { type: 'quiz', ref: 'nonlinear' },
  ],
};
