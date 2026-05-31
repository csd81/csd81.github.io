// 9.1 Line fitting — bilingual, canonical text + math from the textbook.

export const lineFitting = {
  id: 'line',
  title: { hu: '9.1. Egyenes illesztése', en: '9.1. Line Fitting' },
  blocks: [
    {
      type: 'text',
      hu: `Adottak $(x_i, y_i)$, $i = 0, 1, \\ldots, n$ pontok, ahol az $x_i$-k páronként különböznek. Keresünk egy olyan $g(x) = ax + b$ lineáris függvényt, amelynek az adatoktól számított négyzetes eltérése minimális:`,
      en: `Given data points $(x_i, y_i)$, $i = 0, 1, \\ldots, n$, where at least some of the mesh points $x_i$ are different. We are looking for a linear function $g(x) = ax + b$ which minimizes the least square error:`,
    },
    { type: 'math', tex: `F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2. \\tag{1}` },
    {
      type: 'text',
      hu: `Az $F$ függvény folytonosan parciálisan differenciálható $a$ és $b$ szerint:`,
      en: `The function $F$ is continuously partially differentiable with respect to $a$ and $b$:`,
    },
    {
      type: 'math',
      tex: `\\begin{aligned} \\frac{\\partial F}{\\partial a}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i)x_i,\\\\ \\frac{\\partial F}{\\partial b}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i). \\end{aligned} \\tag{2}`,
    },
    {
      type: 'text',
      hu: `A (2) deriváltakat nullával egyenlővé téve és átrendezve kapjuk az ún. **Gauss-féle normálegyenleteket**:`,
      en: `Making the partial derivatives in (2) equal to 0 and rearranging gives the so-called **Gaussian normal equations**:`,
    },
    {
      type: 'math',
      tex: `\\begin{aligned} a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i &= \\sum_{i=0}^{n} x_i y_i,\\\\ a\\sum_{i=0}^{n} x_i + b(n+1) &= \\sum_{i=0}^{n} y_i. \\end{aligned} \\tag{3}`,
    },
    {
      type: 'text',
      hu: `Ez egy lineáris egyenletrendszer $a$-ra és $b$-re. Akkor és csak akkor oldható meg egyértelműen, ha az együtthatómátrix determinánsa nem nulla:`,
      en: `This is a linear system for $a$ and $b$. It is solvable if and only if the determinant of its coefficient matrix is nonzero:`,
    },
    {
      type: 'math',
      tex: `d := \\det\\begin{pmatrix} \\sum_{i=0}^{n} x_i^2 & \\sum_{i=0}^{n} x_i \\\\ \\sum_{i=0}^{n} x_i & n+1 \\end{pmatrix} = (n+1)\\sum_{i=0}^{n} x_i^2 - \\left(\\sum_{i=0}^{n} x_i\\right)^2.`,
    },
    {
      type: 'text',
      hu: `A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség szerint`,
      en: `The Cauchy–Bunyakovsky–Schwarz inequality yields`,
    },
    {
      type: 'math',
      tex: `\\left(\\sum_{i=0}^{n} x_i\\right)^2 = \\left(\\sum_{i=0}^{n} 1\\cdot x_i\\right)^2 \\le \\sum_{i=0}^{n} 1 \\sum_{i=0}^{n} x_i^2 = (n+1)\\sum_{i=0}^{n} x_i^2,`,
    },
    {
      type: 'text',
      hu: `ezért $d \\ge 0$. Ha legalább két $x_i$ különbözik, akkor a szigorú egyenlőtlenség áll fenn, azaz $d > 0$. Így a (3) rendszernek pontosan egy megoldása van:`,
      en: `therefore $d \\ge 0$. If at least two mesh points differ, the strict inequality $d > 0$ holds. Hence system (3) has a unique solution:`,
    },
    {
      type: 'math',
      tex: `\\bar{a} = \\frac{(n+1)\\left(\\sum x_i y_i\\right) - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}, \\qquad \\bar{b} = \\frac{\\left(\\sum x_i^2\\right)\\left(\\sum y_i\\right) - \\left(\\sum x_i y_i\\right)\\left(\\sum x_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}.`,
    },
    {
      type: 'text',
      hu: `Az $F$-nek az $(\\bar a, \\bar b)$ pontban lokális szélsőértéke van, ha a Hesse-determináns pozitív:`,
      en: `$F$ has a local extremum at $(\\bar a, \\bar b)$ if the Hessian determinant is positive:`,
    },
    {
      type: 'math',
      tex: `D(\\bar a,\\bar b) := \\frac{\\partial^2 F}{\\partial a^2}\\cdot\\frac{\\partial^2 F}{\\partial b^2} - \\left(\\frac{\\partial^2 F}{\\partial a\\,\\partial b}\\right)^2 > 0.`,
    },
    {
      type: 'text',
      hu: `Mivel`,
      en: `Since`,
    },
    {
      type: 'math',
      tex: `\\frac{\\partial^2 F}{\\partial a^2} = 2\\sum_{i=0}^{n} x_i^2,\\quad \\frac{\\partial^2 F}{\\partial b^2} = 2(n+1),\\quad \\frac{\\partial^2 F}{\\partial a\\,\\partial b} = 2\\sum_{i=0}^{n} x_i,`,
    },
    {
      type: 'text',
      hu: `ezért $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, és mivel $\\frac{\\partial^2 F}{\\partial a^2} > 0$, az $(\\bar a, \\bar b)$ pont lokális — és (kvadratikus $F$ miatt) globális — minimum.`,
      en: `we get $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, and since $\\frac{\\partial^2 F}{\\partial a^2} > 0$, the point $(\\bar a, \\bar b)$ is a local — and (as $F$ is quadratic) global — minimum.`,
    },
    {
      type: 'theorem',
      label: { hu: '9.1. Tétel', en: 'Theorem 9.1' },
      hu: `Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol van olyan $i$ és $j$, hogy $x_i \\ne x_j$. Ekkor a $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ szélsőérték-feladatnak létezik egyértelmű megoldása, amely teljesíti a (3) normálegyenleteket.`,
      en: `Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) such that there exist $i$ and $j$ with $x_i \\ne x_j$. Then the problem $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ has a unique solution, which satisfies the Gaussian normal equations (3).`,
    },
    {
      type: 'example',
      label: { hu: '9.2. Példa', en: 'Example 9.2' },
      hu: `Keressük meg az alábbi adatokra legjobban illeszkedő egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_i y_i$ értékeket, és az utolsó sorban az összegeket.`,
      en: `Find the line of best fit to the data below. We compute $x_i^2$ and $x_i y_i$ in separate columns, and the column sums in the last row.`,
    },
    {
      type: 'table',
      caption: { hu: '9.1. táblázat — Egyenes illesztése', en: 'Table 9.1 — Line fitting' },
      headers: ['$x_i$', '$y_i$', '$x_i^2$', '$x_i y_i$'],
      rows: [
        ['-1.0', '0.0', '1.00', '0.00'],
        ['1.0', '1.2', '1.00', '1.20'],
        ['2.5', '1.9', '6.25', '4.75'],
        ['3.0', '2.5', '9.00', '7.50'],
        ['4.0', '3.1', '16.00', '12.40'],
        ['4.5', '3.2', '20.25', '14.40'],
        ['6.0', '4.5', '36.00', '27.00'],
      ],
      totals: ['20.0', '16.4', '89.50', '67.25'],
    },
    {
      type: 'text',
      hu: `Az összegeket a (3) normálegyenletekbe helyettesítve: $89.5a + 20.0b = 67.25$ és $20.0a + 7b = 16.4$, amelynek megoldása $a = 0.630243$, $b = 0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$.`,
      en: `Substituting the sums into the normal equations (3): $89.5a + 20.0b = 67.25$ and $20.0a + 7b = 16.4$, with solution $a = 0.630243$, $b = 0.542163$. The error of the fitting is $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$.`,
    },
    {
      type: 'demo',
      component: 'line',
      caption: { hu: '9.1. ábra — Egyenes illesztése (interaktív)', en: 'Figure 9.1 — Line fitting (interactive)' },
    },
    {
      type: 'exercises',
      label: { hu: 'Feladatok', en: 'Exercises' },
      intro: {
        hu: 'Illesszen egyenest a megadott adatokra, és számítsa ki az illesztés hibáját:',
        en: 'Find the line of best fit to the data, and compute the error of the fitting:',
      },
      items: [
        {
          tag: '(a)',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['0.0', '-1.8'],
            ['1.0', '1.3'],
            ['1.5', '2.5'],
            ['2.0', '3.9'],
            ['3.0', '8.3'],
          ],
        },
        {
          tag: '(b)',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['-1.0', '4.2'],
            ['1.0', '2.1'],
            ['2.0', '1.3'],
            ['3.0', '2.1'],
            ['4.0', '2.8'],
            ['5.0', '-2.1'],
            ['6.0', '-3.0'],
          ],
        },
        {
          tag: '(c)',
          headers: ['$x_i$', '$y_i$'],
          cols: [
            ['-1.0', '-0.1'],
            ['1.0', '3.4'],
            ['3.0', '7.3'],
            ['5.0', '15.1'],
            ['9.0', '29.1'],
            ['10.0', '35.6'],
            ['13.0', '56.3'],
          ],
        },
      ],
      solution: `**Method (worked example).** For each data set, form the sums $\\sum x_i$, $\\sum x_i^2$, $\\sum y_i$, $\\sum x_i y_i$, solve the $2\\times2$ normal equations for $\\bar a,\\bar b$, then evaluate $SSR=\\sum(\\bar a x_i+\\bar b-y_i)^2$ and $RMSE=\\sqrt{SSR/(n+1)}$.

**Example A — data** $x_i:-2,-1,0,1,2$, $\\ y_i:1,2,2.5,2,1$.

Sums: $n+1=5$, $\\sum x_i=0$, $\\sum x_i^2=10$, $\\sum y_i=8.5$, $\\sum x_iy_i=0$.

Normal equations $\\left(\\begin{smallmatrix}10 & 0\\\\ 0 & 5\\end{smallmatrix}\\right)\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)=\\left(\\begin{smallmatrix}0\\\\ 8.5\\end{smallmatrix}\\right)$ give $a=0$, $b=1.7$, i.e. the horizontal line $y=1.7$.

$SSR=(1.7-1)^2+(1.7-2)^2+(1.7-2.5)^2+(1.7-2)^2+(1.7-1)^2=1.80$, $\\ RMSE=\\sqrt{1.80/5}=0.60$.

**Example B — data** $x_i:0,1,2,3,4$, $\\ y_i:1,2.9,5.1,7,9.1$.

Sums: $\\sum x_i=10$, $\\sum x_i^2=30$, $\\sum y_i=25.1$, $\\sum x_iy_i=70.5$. Determinant $d=30\\cdot5-10\\cdot10=50$.

$a=\\dfrac{5(70.5)-10(25.1)}{50}=2.03$, $\\ b=\\dfrac{30(25.1)-10(70.5)}{50}=0.96$, so $y=2.03x+0.96$, with $SSR\\approx0.019$, $RMSE\\approx0.062$ (excellent fit).

**Uniqueness of the fit.** By Cauchy–Schwarz with $u_i=1,\\ v_i=x_i$: $(\\sum x_i)^2\\le(n+1)\\sum x_i^2$, so $d=(n+1)\\sum x_i^2-(\\sum x_i)^2\\ge0$, with strict inequality (hence a unique solution) whenever at least two $x_i$ differ.`,
    },
    { type: 'glossary', deck: 'line' },
    { type: 'flashcards', deck: 'line' },
    { type: 'quiz', ref: 'line' },
  ],
};
