// Per-section quizzes (bilingual). Each item: question + options + index of correct.

export const quizzes = {
  intro: [
    {
      q: {
        hu: 'Miért a négyzetes hibát ($F$) minimalizáljuk az $F_1$ (maximum) vagy $F_2$ (abszolút) helyett?',
        en: 'Why minimize the squared error ($F$) instead of $F_1$ (max) or $F_2$ (absolute)?',
      },
      options: [
        { hu: 'Mert differenciálható, így a minimum a deriváltak nullhelyén kereshető', en: 'Because it is differentiable, so the minimum is found where derivatives vanish' },
        { hu: 'Mert mindig kisebb értéket ad', en: 'Because it always gives a smaller value' },
        { hu: 'Mert nem igényel mérési adatokat', en: 'Because it needs no measurement data' },
      ],
      correct: 0,
    },
    {
      q: {
        hu: 'Mit jelöl az $\\mathbf{a}$ a $g(x;\\mathbf{a})$ jelölésben?',
        en: 'What does $\\mathbf{a}$ denote in the notation $g(x;\\mathbf{a})$?',
      },
      options: [
        { hu: 'A mérési pontok számát', en: 'The number of data points' },
        { hu: 'Az illesztendő függvény ismeretlen paramétereit', en: 'The unknown parameters of the function to fit' },
        { hu: 'A maximális hibát', en: 'The maximum error' },
      ],
      correct: 1,
    },
  ],
  line: [
    {
      q: {
        hu: 'Mi a $b$ együtthatója a második Gauss-féle normálegyenletben?',
        en: 'What is the coefficient of $b$ in the second Gaussian normal equation?',
      },
      options: [
        { hu: '$\\sum x_i$', en: '$\\sum x_i$' },
        { hu: '$n+1$ (a mérési pontok száma)', en: '$n+1$ (the number of data points)' },
        { hu: '$\\sum x_i^2$', en: '$\\sum x_i^2$' },
      ],
      correct: 1,
    },
    {
      q: {
        hu: 'Mikor garantált, hogy a $d$ determináns pozitív (egyértelmű megoldás)?',
        en: 'When is the determinant $d$ guaranteed positive (unique solution)?',
      },
      options: [
        { hu: 'Ha minden $y_i$ egyenlő', en: 'If all $y_i$ are equal' },
        { hu: 'Ha legalább két $x_i$ különböző', en: 'If at least two $x_i$ are distinct' },
        { hu: 'Ha $n = 1$', en: 'If $n = 1$' },
      ],
      correct: 1,
    },
    {
      q: {
        hu: 'A 9.2. példában mekkora az illesztett egyenes meredeksége ($\\bar a$)?',
        en: 'In Example 9.2, what is the slope $\\bar a$ of the fitted line?',
      },
      options: [
        { hu: '$0.542163$', en: '$0.542163$' },
        { hu: '$0.630243$', en: '$0.630243$' },
        { hu: '$0.124691$', en: '$0.124691$' },
      ],
      correct: 1,
    },
  ],
  polynomial: [
    {
      q: {
        hu: 'Miért invertálható a (4) rendszer $\\mathbf{A}$ mátrixa, ha $m \\le n$ és az $x_i$-k különbözők?',
        en: 'Why is the matrix $\\mathbf{A}$ of system (4) invertible when $m \\le n$ and the $x_i$ are distinct?',
      },
      options: [
        { hu: 'Mert szimmetrikus', en: 'Because it is symmetric' },
        { hu: 'Mert pozitív definit ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ ha $\\mathbf{z} \\ne 0$)', en: 'Because it is positive definite ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ for $\\mathbf{z} \\ne 0$)' },
        { hu: 'Mert minden eleme pozitív', en: 'Because all its entries are positive' },
      ],
      correct: 1,
    },
    {
      q: {
        hu: 'Mi történik, ha $n \\le m$ (több paraméter, mint a kényszerek)?',
        en: 'What happens if $n \\le m$ (more parameters than constraints)?',
      },
      options: [
        { hu: 'A pontokon átmenő interpoláló polinom létezik, $F$ minimuma 0', en: 'An interpolating polynomial exists through the points; the minimum of $F$ is 0' },
        { hu: 'Nincs megoldás', en: 'There is no solution' },
        { hu: 'A hiba végtelen', en: 'The error is infinite' },
      ],
      correct: 0,
    },
  ],
  nonlinear: [
    {
      q: {
        hu: 'Hogyan linearizáljuk a $y = b e^{ax}$ modellt?',
        en: 'How do we linearize the model $y = b e^{ax}$?',
      },
      options: [
        { hu: '$\\ln y = \\ln b + a x$ (egyenes az $(x, \\ln y)$ síkon)', en: '$\\ln y = \\ln b + a x$ (a line in the $(x, \\ln y)$ plane)' },
        { hu: '$\\ln y = a \\ln x + \\ln b$', en: '$\\ln y = a \\ln x + \\ln b$' },
        { hu: '$y^2 = a x + b$', en: '$y^2 = a x + b$' },
      ],
      correct: 0,
    },
    {
      q: {
        hu: 'A $y = b x^a$ hatványfüggvényt melyik koordinátákban illesztjük egyenessel?',
        en: 'In which coordinates do we fit a line for the power model $y = b x^a$?',
      },
      options: [
        { hu: '$(x, \\ln y)$', en: '$(x, \\ln y)$' },
        { hu: '$(\\ln x, \\ln y)$', en: '$(\\ln x, \\ln y)$' },
        { hu: '$(\\ln x, y)$', en: '$(\\ln x, y)$' },
      ],
      correct: 1,
    },
    {
      q: {
        hu: 'Igaz-e, hogy a linearizált illesztés pontosan minimalizálja az eredeti nemlineáris négyzetes hibát?',
        en: 'Does the linearized fit exactly minimize the original nonlinear least-square error?',
      },
      options: [
        { hu: 'Igen, mindig', en: 'Yes, always' },
        { hu: 'Nem — jó közelítés, de a transzformált térben minimalizál', en: 'No — it is a good approximation, but minimizes in the transformed space' },
        { hu: 'Csak ha $a = 0$', en: 'Only if $a = 0$' },
      ],
      correct: 1,
    },
  ],
};
