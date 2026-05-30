// Introduction — curve fitting and the least-square error.
// Bilingual; canonical text from the textbook chapter (HU + EN).

export const intro = {
  id: 'intro',
  title: { hu: 'Bevezetés', en: 'Introduction' },
  blocks: [
    {
      type: 'text',
      hu: `Tegyük fel, hogy egy fizikai folyamatot egy $g$ függvénnyel írhatunk le, amelynek ismerjük vagy feltételezzük az általános képletét, de bizonyos paraméterek a képletben ismeretlenek. A paramétereket egy $\\mathbf{a}$ vektorban tárolva a $g(x;\\mathbf{a})$ jelöléssel hangsúlyozhatjuk, hogy $g$ az $\\mathbf{a}$ paraméterektől függ. Feltesszük, hogy vannak $y_i$ ($i=0,1,\\ldots,n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban.`,
      en: `Suppose that a physical process can be described by a real function $g$, where we know or assume the formula of the function but we do not know the values of some parameters in the formula. We put the parameters into a vector $\\mathbf{a}$, and the notation $g(x;\\mathbf{a})$ emphasizes the dependence of $g$ on the parameters $\\mathbf{a}$. Suppose we have measurements $y_i$ ($i=0,1,\\ldots,n$) of the function values at the mesh points $x_i$.`,
    },
    {
      type: 'text',
      hu: `Ha több mérési értékünk van, mint paraméter, akkor általában nem tudunk olyan görbét rajzolni, amely minden ponton átmegy (a mérési hibák miatt). Ezért a célunk az, hogy megkeressük azokat a paraméter értékeket, amelyekhez tartozó $g$ függvény a „legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk **görbeillesztésnek**.`,
      en: `If we have more measurements than parameters, then in general there is no curve whose graph goes through all the points (due to measurement error). Therefore our goal is to find the parameter values for which the corresponding function $g$ differs from the measurements with the "smallest error". This problem is called **curve fitting**.`,
    },
    {
      type: 'text',
      hu: `Nem nyilvánvaló, mit értünk azon, hogy a függvény „legkevésbé" tér el. Lehetséges az illesztés hibáját mérni az alábbi képletekkel:`,
      en: `It is not obvious how to measure the error of the curve fitting. Depending on its definition, we get different mathematical problems. Possible error formulas are:`,
    },
    { type: 'math', tex: `F_1(\\mathbf{a}) := \\max\\{|g(x_i;\\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}` },
    { type: 'math', tex: `F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i;\\mathbf{a}) - y_i|.` },
    {
      type: 'text',
      hu: `A probléma az, hogy sem $F_1$, sem $F_2$ nem differenciálható $\\mathbf{a}$ szerint, ezért nehéz minimalizálni. Ezt kiküszöbölhetjük az ún. **négyzetes hibával**:`,
      en: `The problem is that neither $F_1$ nor $F_2$ is differentiable with respect to $\\mathbf{a}$, so they are hard to minimize. This technicality can be eliminated with the so-called **least square error**:`,
    },
    { type: 'math', tex: `F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i;\\mathbf{a}) - y_i)^2.` },
    {
      type: 'text',
      hu: `A matematikai feladat tehát az, hogy minimalizáljuk az $F(\\mathbf{a})$ függvényt, és a minimumhelyhez tartozó $\\bar{\\mathbf{a}}$ paraméterekkel definiált $g(x;\\bar{\\mathbf{a}})$ függvényt tekintjük a pontokra legjobban illeszkedő függvénynek. Ezt a módszert hívjuk a **legkisebb négyzetek módszerének**. A fejezetben előbb egyenest, majd tetszőleges polinomot, végül néhány nemlineáris függvényt illesztünk.`,
      en: `The mathematical problem is therefore to minimize $F(\\mathbf{a})$, and consider the graph of $g(x;\\bar{\\mathbf{a}})$ corresponding to the minimum point $\\bar{\\mathbf{a}}$ as the best fitted curve. This is called the **method of least squares**. In this chapter we study line fitting first, then arbitrary polynomials, and finally some nonlinear functions.`,
    },
    {
      type: 'callout',
      variant: 'note',
      hu: `**Miért a négyzetes hiba?** Differenciálható, így a minimum a parciális deriváltak nullhelyén kereshető; a nagy eltéréseket erősebben bünteti; és — mint látni fogjuk — lineáris paraméterek esetén zárt alakú, egyértelmű megoldást ad.`,
      en: `**Why squared error?** It is differentiable, so the minimum can be found where the partial derivatives vanish; it penalizes large deviations more strongly; and — as we will see — for linearly-appearing parameters it yields a closed-form, unique solution.`,
    },
    { type: 'quiz', ref: 'intro' },
  ],
};
