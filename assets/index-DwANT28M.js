var rt=Object.defineProperty;var Ie=i=>{throw TypeError(i)};var mt=(i,n,e)=>n in i?rt(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e;var _=(i,n,e)=>mt(i,typeof n!="symbol"?n+"":n,e),ht=(i,n,e)=>n.has(i)||Ie("Cannot "+e);var Le=(i,n,e)=>n.has(i)?Ie("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,e);var le=(i,n,e)=>(ht(i,n,"access private method"),e);import{r as F,j as m,f as V,l as ut,h as $t}from"./index-DVBvCRjo.js";import{M as P}from"./MarkdownView-BwTWxA0t.js";import{k as ct}from"./katex-Dc8nsIP1.js";import{P as ne}from"./plotly.min-Cy9hTeU7.js";import{r as pt}from"./auto-render-DUhD6wWl.js";import{C as dt,Q as ft,S as gt}from"./Quiz-Bm8pkMxL.js";import"./normalizeMath-C9zaoMoC.js";import"./index-H94H-nGi.js";import"./CodeBlock-jXKJh0U6.js";const Ge="lsq.lang",yt=new Set;let Ye=(()=>{try{return localStorage.getItem(Ge)||"en"}catch{return"en"}})();function xt(i){if(!(i!=="hu"&&i!=="en")){Ye=i;try{localStorage.setItem(Ge,i)}catch{}document.documentElement.setAttribute("lang",i),yt.forEach(n=>n(i))}}function b(i){return i==null?"":typeof i=="string"?i:i[Ye]??i.en??i.hu??""}const q={demoReset:{hu:"Visszaállítás",en:"Reset"},demoAddPoint:{hu:"Pont hozzáadása",en:"Add point"},demoBestFit:{hu:"Legjobb illesztés",en:"Best fit"},demoGuess:{hu:"Tippelj!",en:"Guess mode"},degree:{hu:"Fokszám",en:"Degree"},slope:{hu:"Meredekség",en:"Slope"},intercept:{hu:"Tengelymetszet",en:"Intercept"},error:{hu:"Hiba",en:"Error"},optimalError:{hu:"Optimális hiba",en:"Optimal error"},yourError:{hu:"A te hibád",en:"Your error"},linearizedSpace:{hu:"Linearizált tér",en:"Linearized space"},originalSpace:{hu:"Eredeti tér",en:"Original space"},linearError:{hu:"Linearizált hiba",en:"Linearized error"},nonlinearError:{hu:"Eredeti (nemlineáris) hiba",en:"Original (nonlinear) error"},expModel:{hu:"Exponenciális  b·e^{ax}",en:"Exponential  b·e^{ax}"},powerModel:{hu:"Hatvány  b·x^a",en:"Power  b·x^a"},dragHint:{hu:"Húzd a kék pontokat — az illesztés azonnal frissül.",en:"Drag the blue points — the fit updates live."}},bt="lsq.theme",xe=new Set;function kt(i){if(!(i!=="light"&&i!=="dark")){document.documentElement.setAttribute("data-theme",i);try{localStorage.setItem(bt,i)}catch{}xe.forEach(n=>n(i))}}function ze(i){return xe.add(i),()=>xe.delete(i)}function J(i){return getComputedStyle(document.documentElement).getPropertyValue(i).trim()}const _t={id:"intro",title:{hu:"Bevezetés",en:"Introduction"},blocks:[{type:"text",hu:"Tegyük fel, hogy egy fizikai folyamatot egy $g$ függvénnyel írhatunk le, amelynek ismerjük vagy feltételezzük az általános képletét, de bizonyos paraméterek a képletben ismeretlenek. A paramétereket egy $\\mathbf{a}$ vektorban tárolva a $g(x;\\mathbf{a})$ jelöléssel hangsúlyozhatjuk, hogy $g$ az $\\mathbf{a}$ paraméterektől függ. Feltesszük, hogy vannak $y_i$ ($i=0,1,\\ldots,n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban.",en:"Suppose that a physical process can be described by a real function $g$, where we know or assume the formula of the function but we do not know the values of some parameters in the formula. We put the parameters into a vector $\\mathbf{a}$, and the notation $g(x;\\mathbf{a})$ emphasizes the dependence of $g$ on the parameters $\\mathbf{a}$. Suppose we have measurements $y_i$ ($i=0,1,\\ldots,n$) of the function values at the mesh points $x_i$."},{type:"text",hu:'Ha több mérési értékünk van, mint paraméter, akkor általában nem tudunk olyan görbét rajzolni, amely minden ponton átmegy (a mérési hibák miatt). Ezért a célunk az, hogy megkeressük azokat a paraméter értékeket, amelyekhez tartozó $g$ függvény a „legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk **görbeillesztésnek**.',en:'If we have more measurements than parameters, then in general there is no curve whose graph goes through all the points (due to measurement error). Therefore our goal is to find the parameter values for which the corresponding function $g$ differs from the measurements with the "smallest error". This problem is called **curve fitting**.'},{type:"text",hu:'Nem nyilvánvaló, mit értünk azon, hogy a függvény „legkevésbé" tér el. Lehetséges az illesztés hibáját mérni az alábbi képletekkel:',en:"It is not obvious how to measure the error of the curve fitting. Depending on its definition, we get different mathematical problems. Possible error formulas are:"},{type:"math",tex:"F_1(\\mathbf{a}) := \\max\\{|g(x_i;\\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}"},{type:"math",tex:"F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i;\\mathbf{a}) - y_i|."},{type:"text",hu:"A probléma az, hogy sem $F_1$, sem $F_2$ nem differenciálható $\\mathbf{a}$ szerint, ezért nehéz minimalizálni. Ezt kiküszöbölhetjük az ún. **négyzetes hibával**:",en:"The problem is that neither $F_1$ nor $F_2$ is differentiable with respect to $\\mathbf{a}$, so they are hard to minimize. This technicality can be eliminated with the so-called **least square error**:"},{type:"math",tex:"F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i;\\mathbf{a}) - y_i)^2."},{type:"text",hu:"A matematikai feladat tehát az, hogy minimalizáljuk az $F(\\mathbf{a})$ függvényt, és a minimumhelyhez tartozó $\\bar{\\mathbf{a}}$ paraméterekkel definiált $g(x;\\bar{\\mathbf{a}})$ függvényt tekintjük a pontokra legjobban illeszkedő függvénynek. Ezt a módszert hívjuk a **legkisebb négyzetek módszerének**. A fejezetben előbb egyenest, majd tetszőleges polinomot, végül néhány nemlineáris függvényt illesztünk.",en:"The mathematical problem is therefore to minimize $F(\\mathbf{a})$, and consider the graph of $g(x;\\bar{\\mathbf{a}})$ corresponding to the minimum point $\\bar{\\mathbf{a}}$ as the best fitted curve. This is called the **method of least squares**. In this chapter we study line fitting first, then arbitrary polynomials, and finally some nonlinear functions."},{type:"callout",variant:"note",hu:"**Miért a négyzetes hiba?** Differenciálható, így a minimum a parciális deriváltak nullhelyén kereshető; a nagy eltéréseket erősebben bünteti; és — mint látni fogjuk — lineáris paraméterek esetén zárt alakú, egyértelmű megoldást ad.",en:"**Why squared error?** It is differentiable, so the minimum can be found where the partial derivatives vanish; it penalizes large deviations more strongly; and — as we will see — for linearly-appearing parameters it yields a closed-form, unique solution."},{type:"quiz",ref:"intro"}]},zt={id:"line",title:{hu:"9.1. Egyenes illesztése",en:"9.1. Line Fitting"},blocks:[{type:"text",hu:"Adottak $(x_i, y_i)$, $i = 0, 1, \\ldots, n$ pontok, ahol az $x_i$-k páronként különböznek. Keresünk egy olyan $g(x) = ax + b$ lineáris függvényt, amelynek az adatoktól számított négyzetes eltérése minimális:",en:"Given data points $(x_i, y_i)$, $i = 0, 1, \\ldots, n$, where at least some of the mesh points $x_i$ are different. We are looking for a linear function $g(x) = ax + b$ which minimizes the least square error:"},{type:"math",tex:"F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2. \\tag{1}"},{type:"text",hu:"Az $F$ függvény folytonosan parciálisan differenciálható $a$ és $b$ szerint:",en:"The function $F$ is continuously partially differentiable with respect to $a$ and $b$:"},{type:"math",tex:"\\begin{aligned} \\frac{\\partial F}{\\partial a}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i)x_i,\\\\ \\frac{\\partial F}{\\partial b}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i). \\end{aligned} \\tag{2}"},{type:"text",hu:"A (2) deriváltakat nullával egyenlővé téve és átrendezve kapjuk az ún. **Gauss-féle normálegyenleteket**:",en:"Making the partial derivatives in (2) equal to 0 and rearranging gives the so-called **Gaussian normal equations**:"},{type:"math",tex:"\\begin{aligned} a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i &= \\sum_{i=0}^{n} x_i y_i,\\\\ a\\sum_{i=0}^{n} x_i + b(n+1) &= \\sum_{i=0}^{n} y_i. \\end{aligned} \\tag{3}"},{type:"text",hu:"Ez egy lineáris egyenletrendszer $a$-ra és $b$-re. Akkor és csak akkor oldható meg egyértelműen, ha az együtthatómátrix determinánsa nem nulla:",en:"This is a linear system for $a$ and $b$. It is solvable if and only if the determinant of its coefficient matrix is nonzero:"},{type:"math",tex:"d := \\det\\begin{pmatrix} \\sum_{i=0}^{n} x_i^2 & \\sum_{i=0}^{n} x_i \\\\ \\sum_{i=0}^{n} x_i & n+1 \\end{pmatrix} = (n+1)\\sum_{i=0}^{n} x_i^2 - \\left(\\sum_{i=0}^{n} x_i\\right)^2."},{type:"text",hu:"A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség szerint",en:"The Cauchy–Bunyakovsky–Schwarz inequality yields"},{type:"math",tex:"\\left(\\sum_{i=0}^{n} x_i\\right)^2 = \\left(\\sum_{i=0}^{n} 1\\cdot x_i\\right)^2 \\le \\sum_{i=0}^{n} 1 \\sum_{i=0}^{n} x_i^2 = (n+1)\\sum_{i=0}^{n} x_i^2,"},{type:"text",hu:"ezért $d \\ge 0$. Ha legalább két $x_i$ különbözik, akkor a szigorú egyenlőtlenség áll fenn, azaz $d > 0$. Így a (3) rendszernek pontosan egy megoldása van:",en:"therefore $d \\ge 0$. If at least two mesh points differ, the strict inequality $d > 0$ holds. Hence system (3) has a unique solution:"},{type:"math",tex:"\\bar{a} = \\frac{(n+1)\\left(\\sum x_i y_i\\right) - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}, \\qquad \\bar{b} = \\frac{\\left(\\sum x_i^2\\right)\\left(\\sum y_i\\right) - \\left(\\sum x_i y_i\\right)\\left(\\sum x_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}."},{type:"text",hu:"Az $F$-nek az $(\\bar a, \\bar b)$ pontban lokális szélsőértéke van, ha a Hesse-determináns pozitív:",en:"$F$ has a local extremum at $(\\bar a, \\bar b)$ if the Hessian determinant is positive:"},{type:"math",tex:"D(\\bar a,\\bar b) := \\frac{\\partial^2 F}{\\partial a^2}\\cdot\\frac{\\partial^2 F}{\\partial b^2} - \\left(\\frac{\\partial^2 F}{\\partial a\\,\\partial b}\\right)^2 > 0."},{type:"text",hu:"Mivel",en:"Since"},{type:"math",tex:"\\frac{\\partial^2 F}{\\partial a^2} = 2\\sum_{i=0}^{n} x_i^2,\\quad \\frac{\\partial^2 F}{\\partial b^2} = 2(n+1),\\quad \\frac{\\partial^2 F}{\\partial a\\,\\partial b} = 2\\sum_{i=0}^{n} x_i,"},{type:"text",hu:"ezért $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, és mivel $\\frac{\\partial^2 F}{\\partial a^2} > 0$, az $(\\bar a, \\bar b)$ pont lokális — és (kvadratikus $F$ miatt) globális — minimum.",en:"we get $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, and since $\\frac{\\partial^2 F}{\\partial a^2} > 0$, the point $(\\bar a, \\bar b)$ is a local — and (as $F$ is quadratic) global — minimum."},{type:"theorem",label:{hu:"9.1. Tétel",en:"Theorem 9.1"},hu:"Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol van olyan $i$ és $j$, hogy $x_i \\ne x_j$. Ekkor a $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ szélsőérték-feladatnak létezik egyértelmű megoldása, amely teljesíti a (3) normálegyenleteket.",en:"Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) such that there exist $i$ and $j$ with $x_i \\ne x_j$. Then the problem $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ has a unique solution, which satisfies the Gaussian normal equations (3)."},{type:"example",label:{hu:"9.2. Példa",en:"Example 9.2"},hu:"Keressük meg az alábbi adatokra legjobban illeszkedő egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_i y_i$ értékeket, és az utolsó sorban az összegeket.",en:"Find the line of best fit to the data below. We compute $x_i^2$ and $x_i y_i$ in separate columns, and the column sums in the last row."},{type:"table",caption:{hu:"9.1. táblázat — Egyenes illesztése",en:"Table 9.1 — Line fitting"},headers:["$x_i$","$y_i$","$x_i^2$","$x_i y_i$"],rows:[["-1.0","0.0","1.00","0.00"],["1.0","1.2","1.00","1.20"],["2.5","1.9","6.25","4.75"],["3.0","2.5","9.00","7.50"],["4.0","3.1","16.00","12.40"],["4.5","3.2","20.25","14.40"],["6.0","4.5","36.00","27.00"]],totals:["20.0","16.4","89.50","67.25"]},{type:"text",hu:"Az összegeket a (3) normálegyenletekbe helyettesítve: $89.5a + 20.0b = 67.25$ és $20.0a + 7b = 16.4$, amelynek megoldása $a = 0.630243$, $b = 0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$.",en:"Substituting the sums into the normal equations (3): $89.5a + 20.0b = 67.25$ and $20.0a + 7b = 16.4$, with solution $a = 0.630243$, $b = 0.542163$. The error of the fitting is $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$."},{type:"demo",component:"line",caption:{hu:"9.1. ábra — Egyenes illesztése (interaktív)",en:"Figure 9.1 — Line fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen egyenest a megadott adatokra, és számítsa ki az illesztés hibáját:",en:"Find the line of best fit to the data, and compute the error of the fitting:"},items:[{tag:"(a)",headers:["$x_i$","$y_i$"],cols:[["0.0","-1.8"],["1.0","1.3"],["1.5","2.5"],["2.0","3.9"],["3.0","8.3"]]},{tag:"(b)",headers:["$x_i$","$y_i$"],cols:[["-1.0","4.2"],["1.0","2.1"],["2.0","1.3"],["3.0","2.1"],["4.0","2.8"],["5.0","-2.1"],["6.0","-3.0"]]},{tag:"(c)",headers:["$x_i$","$y_i$"],cols:[["-1.0","-0.1"],["1.0","3.4"],["3.0","7.3"],["5.0","15.1"],["9.0","29.1"],["10.0","35.6"],["13.0","56.3"]]}],solution:`**Method (worked example).** For each data set, form the sums $\\sum x_i$, $\\sum x_i^2$, $\\sum y_i$, $\\sum x_i y_i$, solve the $2\\times2$ normal equations for $\\bar a,\\bar b$, then evaluate $SSR=\\sum(\\bar a x_i+\\bar b-y_i)^2$ and $RMSE=\\sqrt{SSR/(n+1)}$.

**Example A — data** $x_i:-2,-1,0,1,2$, $\\ y_i:1,2,2.5,2,1$.

Sums: $n+1=5$, $\\sum x_i=0$, $\\sum x_i^2=10$, $\\sum y_i=8.5$, $\\sum x_iy_i=0$.

Normal equations $\\left(\\begin{smallmatrix}10 & 0\\\\ 0 & 5\\end{smallmatrix}\\right)\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)=\\left(\\begin{smallmatrix}0\\\\ 8.5\\end{smallmatrix}\\right)$ give $a=0$, $b=1.7$, i.e. the horizontal line $y=1.7$.

$SSR=(1.7-1)^2+(1.7-2)^2+(1.7-2.5)^2+(1.7-2)^2+(1.7-1)^2=1.80$, $\\ RMSE=\\sqrt{1.80/5}=0.60$.

**Example B — data** $x_i:0,1,2,3,4$, $\\ y_i:1,2.9,5.1,7,9.1$.

Sums: $\\sum x_i=10$, $\\sum x_i^2=30$, $\\sum y_i=25.1$, $\\sum x_iy_i=70.5$. Determinant $d=30\\cdot5-10\\cdot10=50$.

$a=\\dfrac{5(70.5)-10(25.1)}{50}=2.03$, $\\ b=\\dfrac{30(25.1)-10(70.5)}{50}=0.96$, so $y=2.03x+0.96$, with $SSR\\approx0.019$, $RMSE\\approx0.062$ (excellent fit).

**Uniqueness of the fit.** By Cauchy–Schwarz with $u_i=1,\\ v_i=x_i$: $(\\sum x_i)^2\\le(n+1)\\sum x_i^2$, so $d=(n+1)\\sum x_i^2-(\\sum x_i)^2\\ge0$, with strict inequality (hence a unique solution) whenever at least two $x_i$ differ.`},{type:"glossary",deck:"line"},{type:"flashcards",deck:"line"},{type:"quiz",ref:"line"}]},vt={id:"polynomial",title:{hu:"9.2. Polinom illesztése",en:"9.2. Polynomial Curve Fitting"},blocks:[{type:"text",hu:"Most $m$-edfokú polinom illesztését vizsgáljuk a megadott $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontokra: keresünk olyan $a_m, a_{m-1}, \\ldots, a_0$ számokat, amelyek minimalizálják az",en:"Now we study polynomial curve fitting of degree $m$ to the data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$): we look for parameters $a_m, a_{m-1}, \\ldots, a_0$ which minimize"},{type:"math",tex:"F(a_m,\\ldots,a_0) := \\sum_{i=0}^{n} \\left(a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_1 x_i + a_0 - y_i\\right)^2"},{type:"text",hu:"$m+1$-változós függvényt. Ha $n \\le m$, akkor a pontokon átmenő $m$-edfokú polinom létezik ($F$ minimuma 0), amit interpolációval kaphatunk meg. Ezért az $m < n$ eset az érdekes, ekkor $F$ általában nem veszi fel a 0 értéket.",en:"a function of $m+1$ variables. If $n \\le m$, then a polynomial of degree $m$ interpolates the data (the minimum of $F$ is 0), obtainable by interpolation. So the interesting case is $m < n$, where $F$ is generally positive."},{type:"text",hu:"A szélsőérték ott lehet, ahol minden parciális derivált nulla. Ezeket nullával egyenlővé téve és átrendezve kapjuk a **normálegyenleteket** (4):",en:"An extremum can occur only where all partial derivatives are 0. Setting them to zero and rearranging gives the **normal equations** (4):"},{type:"math",tex:"\\begin{aligned} a_m\\!\\sum x_i^{2m} + \\cdots + a_0\\!\\sum x_i^{m} &= \\sum x_i^{m} y_i\\\\ a_m\\!\\sum x_i^{2m-1} + \\cdots + a_0\\!\\sum x_i^{m-1} &= \\sum x_i^{m-1} y_i\\\\ &\\vdots\\\\ a_m\\!\\sum x_i^{m} + \\cdots + a_0(n+1) &= \\sum y_i \\end{aligned} \\tag{4}"},{type:"text",hu:"A (4) rendszer együtthatómátrixa:",en:"The coefficient matrix of system (4) is:"},{type:"math",tex:"\\mathbf{A} = \\begin{pmatrix} \\sum x_i^{2m} & \\sum x_i^{2m-1} & \\cdots & \\sum x_i^{m}\\\\ \\sum x_i^{2m-1} & \\sum x_i^{2m-2} & \\cdots & \\sum x_i^{m-1}\\\\ \\vdots & \\vdots & & \\vdots\\\\ \\sum x_i^{m} & \\sum x_i^{m-1} & \\cdots & \\sum 1 \\end{pmatrix}"},{type:"text",hu:"Belátjuk, hogy $\\mathbf{A}$ invertálható, mert **pozitív definit**. A $jk$-adik eleme $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Legyen $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Ekkor",en:"We show $\\mathbf{A}$ is invertible because it is **positive definite**. Its $jk$-th element is $\\sum_{i=0}^{n} x_i^{2m+2-j-k}$. Let $\\mathbf{z} = (z_1,\\ldots,z_{m+1}) \\in \\mathbb{R}^{m+1}$. Then"},{type:"math",tex:"\\mathbf{z}^T \\mathbf{A} \\mathbf{z} = \\sum_{j=1}^{m+1}\\sum_{k=1}^{m+1}\\sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k = \\sum_{i=0}^{n}\\left(\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\\right)^2 \\ge 0."},{type:"text",hu:"Ha $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, akkor $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ minden $i$-re. Ha az $x_i$-k páronként különböznek, akkor a $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ legfeljebb $m$-edfokú polinomnak $n+1$ különböző gyöke van. Ha $m \\le n$, az algebra alaptétele szerint $p \\equiv 0$, azaz $z_j = 0$ minden $j$-re. Tehát $\\mathbf{A}$ pozitív definit.",en:"If $\\mathbf{z}^T\\mathbf{A}\\mathbf{z} = 0$, then $\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ for all $i$. If the $x_i$ are pairwise distinct, the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ of degree at most $m$ has $n+1$ distinct roots. If $m \\le n$, the fundamental theorem of algebra gives $p \\equiv 0$, i.e. $z_j = 0$ for all $j$. Hence $\\mathbf{A}$ is positive definite."},{type:"text",hu:"Mivel $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, azaz $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, az $F$-nek $\\bar{\\mathbf{a}}$-ban lokális — és kvadratikus volta miatt globális — minimuma van.",en:"Since $\\frac{\\partial^2 F}{\\partial a_j \\partial a_k}(\\bar{\\mathbf{a}}) = 2\\sum_{i=0}^{n} x_i^{j+k}$, i.e. $F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$, the function $F$ has a local — and, being quadratic, global — minimum at $\\bar{\\mathbf{a}}$."},{type:"theorem",label:{hu:"9.3. Tétel",en:"Theorem 9.3"},hu:"Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol az $x_i$ alappontok páronként különböznek. Legyen $m \\le n$. Ekkor a $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ feladatnak létezik egyértelmű megoldása, amely teljesíti a (4) normálegyenleteket.",en:"Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) with pairwise distinct mesh points $x_i$, and let $m \\le n$. Then the problem $\\min_{(a_m,\\ldots,a_0)\\in\\mathbb{R}^{m+1}} \\sum_{i=0}^{n}(a_m x_i^m + \\cdots + a_0 - y_i)^2$ has a unique solution, which satisfies the normal equations (4)."},{type:"example",label:{hu:"9.4. Példa",en:"Example 9.4"},hu:"Illesszünk parabolát az alábbi adatokra. A táblázatban kiszámoljuk a szükséges hatványösszegeket.",en:"Fit a parabola to the data below. The table computes the required power sums."},{type:"table",caption:{hu:"9.2. táblázat — Parabola illesztése",en:"Table 9.2 — Parabola fitting"},headers:["$x_i$","$y_i$","$x_i^4$","$x_i^3$","$x_i^2$","$x_i^2 y_i$","$x_i y_i$"],rows:[["-1.0","1.4","1.0000","-1.000","1.00","1.400","-1.40"],["0.0","1.9","0.0000","0.000","0.00","0.000","0.00"],["0.5","1.6","0.0625","0.125","0.25","0.400","0.80"],["1.0","1.7","1.0000","1.000","1.00","1.700","1.70"],["2.0","0.2","16.0000","8.000","4.00","0.800","0.40"],["2.5","-0.1","39.0625","15.625","6.25","-0.625","-0.25"],["3.0","-2.0","81.0000","27.000","9.00","-18.000","-6.00"]],totals:["8.0","4.7","138.1250","50.750","21.50","-14.325","-4.75"]},{type:"text",hu:"A (4) egyenletrendszer: $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Megoldása $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. Az illesztés hibája $0.0964456$.",en:"System (4): $249.125a + 77.75b + 27.5c = -7.225$, $77.75a + 27.5b + 8c = -3.55$, $27.5a + 8b + 7c = 6.2$. Solution $a = -0.196021$, $b = -0.084748$, $c = 1.752653$. The fitting error is $0.0964456$."},{type:"demo",component:"polynomial",caption:{hu:"9.2. ábra — Polinom illesztése (interaktív)",en:"Figure 9.2 — Polynomial fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen parabolát a megadott adatokra, és számítsa ki az illesztés hibáját:",en:"Fit a parabola to the given data, and compute the error of the fitting:"},items:[{tag:"(a)",headers:["$x_i$","$y_i$"],cols:[["-2.0","-2.1"],["-1.0","1.4"],["1.0","0.5"],["2.0","-2.5"],["3.0","-7.2"]]},{tag:"(b)",headers:["$x_i$","$y_i$"],cols:[["1.0","2.5"],["2.0","1.2"],["3.0","-2.0"],["4.0","3.9"],["5.0","6.2"],["6.0","8.3"]]}],solution:`**Method.** For a parabola $y=ax^2+bx+c$ form the $3\\times3$ normal equations from the sums $\\sum x_i^k$ ($k=0,\\dots,4$) and $\\sum x_i^k y_i$ ($k=0,1,2$), then solve for $a,b,c$ and evaluate $SSR=\\sum(ax_i^2+bx_i+c-y_i)^2$.

**Example A — data** $x_i:-2,-1,1,2,3$, $\\ y_i:-2.1,1.4,0.5,-2.5,-7.2$.

Sums: $n+1=5$, $\\sum x_i=3$, $\\sum x_i^2=19$, $\\sum x_i^3=27$, $\\sum x_i^4=115$, $\\sum y_i=-9.9$, $\\sum x_iy_i=-23.3$, $\\sum x_i^2y_i=-81.3$.

Normal equations $\\left(\\begin{smallmatrix}115 & 27 & 19\\\\ 27 & 19 & 3\\\\ 19 & 3 & 5\\end{smallmatrix}\\right)\\left(\\begin{smallmatrix}a\\\\ b\\\\ c\\end{smallmatrix}\\right)=\\left(\\begin{smallmatrix}-81.3\\\\ -23.3\\\\ -9.9\\end{smallmatrix}\\right)$ give $a\\approx-0.985$, $b\\approx-0.321$, $c\\approx0.156$, so $y=-0.985x^2-0.321x+0.156$ with $SSR\\approx0.142$.

**Example B — data** $x_i:1,\\dots,6$, $\\ y_i:2.5,1.2,-2.0,3.9,6.2,8.3$.

Sums: $\\sum x_i=21$, $\\sum x_i^2=91$, $\\sum x_i^3=441$, $\\sum x_i^4=2275$, $\\sum y_i=20.1$, $\\sum x_iy_i=106.5$, $\\sum x_i^2y_i=553.5$, giving $a\\approx0.304$, $b\\approx-1.286$, $c\\approx2.929$, i.e. $y=0.304x^2-1.286x+2.929$, $SSR\\approx2.847$.

**Cubic fit** to Example A data ($g(x)=ax^3+bx^2+cx+d$): with $\\sum x_i^5=243$, $\\sum x_i^6=859$, $\\sum x_i^3y_i=-198.5$ the $4\\times4$ system yields $a\\approx-0.053$, $b\\approx-0.893$, $c\\approx-0.175$, $d\\approx0.089$, $SSR\\approx0.128$ (slightly better than the parabola).

**Positive definiteness.** With $A_{jk}=\\sum_i x_i^{2m+2-j-k}$, $\\ \\mathbf z^TA\\mathbf z=\\sum_i\\left(\\sum_j z_j x_i^{m+1-j}\\right)^2\\ge0$; equality forces a degree-$\\le m$ polynomial to vanish at $m+1$ distinct nodes, hence $\\mathbf z=0$. So $A$ is positive definite.`},{type:"glossary",deck:"polynomial"},{type:"flashcards",deck:"polynomial"},{type:"quiz",ref:"polynomial"}]},wt={id:"nonlinear",title:{hu:"9.3. Nemlineáris függvény illesztése",en:"9.3. Special Nonlinear Curve Fitting"},blocks:[{type:"text",hu:"A módszer kiterjeszthető nemlineáris függvényekre is, ahol a paraméterek lineárisan szerepelnek — ekkor a normálegyenletek lineárisak. Az általános esetben azonban nemlineárisak lehetnek. Tekintsünk egy $b e^{ax}$ alakú exponenciális függvényt. A négyzetes hiba:",en:"The method extends to nonlinear functions where the parameters appear linearly — then the normal equations are linear. In general, though, they can be nonlinear. Consider an exponential function of the form $b e^{ax}$. The least square error is:"},{type:"math",tex:"F(a, b) = \\sum_{i=0}^{n} (b e^{a x_i} - y_i)^2,"},{type:"text",hu:"amelynek kritikus pontjait a következő **nemlineáris** rendszer adja:",en:"whose critical points are the solutions of the following **nonlinear** system:"},{type:"math",tex:"\\begin{aligned} 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, b e^{a x_i} x_i &= 0,\\\\ 2\\sum_{i=0}^{n}(b e^{a x_i} - y_i)\\, e^{a x_i} &= 0. \\end{aligned}"},{type:"text",hu:"Ezt analitikusan nem tudjuk megoldani. Numerikusan megoldható, de a gyakorlatban gyakran a **linearizációs módszert** használjuk.",en:"We cannot solve this analytically. It can be solved numerically, but in practice we often use the **method of linearization**."},{type:"callout",variant:"tip",hu:"**Linearizáció ($be^{ax}$).** Vegyük mindkét oldal logaritmusát: $\\ln y = \\ln b + a x$. Új változók: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Illesszünk $Y = AX + B$ egyenest az $(x_i, \\ln y_i)$ pontokra. Ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.",en:"**Linearization ($be^{ax}$).** Take the logarithm of both sides: $\\ln y = \\ln b + a x$. New variables: $X := x$, $Y := \\ln y$, $A := a$, $B := \\ln b$. Fit a line $Y = AX + B$ to the points $(x_i, \\ln y_i)$. Then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$."},{type:"text",hu:"Megjegyzés: a linearizált illesztés nem oldja meg pontosan az eredeti nemlineáris feladatot, de könnyen számolható, ezért a gyakorlatban hasznos.",en:"Note: the linearized fit is not the exact solution of the original nonlinear problem, but it is easy to compute and thus useful in practice."},{type:"example",label:{hu:"9.5. Példa",en:"Example 9.5"},hu:"Illesszünk $b e^{ax}$ alakú függvényt az alábbi pontokra. A linearizált adatokat a táblázat tartalmazza.",en:"Fit a function of the form $b e^{ax}$ to the points below. The linearized data are in the table."},{type:"table",caption:{hu:"9.3. táblázat — $b e^{ax}$ illesztése",en:"Table 9.3 — Fitting $b e^{ax}$"},headers:["$x_i$","$y_i$","$\\ln y_i$","$x_i^2$","$x_i \\ln y_i$"],rows:[["0.0","0.3","-1.203973","0.00","0.000000"],["1.0","0.7","-0.356675","1.00","-0.356675"],["1.5","0.9","-0.105361","2.25","-0.158041"],["2.0","1.2","0.182322","4.00","0.364643"],["3.0","1.8","0.587787","9.00","1.763360"],["4.0","2.7","0.993252","16.00","3.973007"]],totals:["11.5","","0.097352","32.25","5.586294"]},{type:"text",hu:"A normálegyenletek $32.25A + 11.5B = 5.586294$ és $11.5A + 6B = 0.097352$ megoldása $A = 0.528951$, $B = -0.997597$, azaz a függvény $y = 0.368765\\, e^{0.528951 x}$. A linearizált hiba $0.095396$, az eredeti (nemlineáris) hiba $0.165543$.",en:"The normal equations $32.25A + 11.5B = 5.586294$ and $11.5A + 6B = 0.097352$ give $A = 0.528951$, $B = -0.997597$, i.e. $y = 0.368765\\, e^{0.528951 x}$. The linearized error is $0.095396$, and the original (nonlinear) error is $0.165543$."},{type:"callout",variant:"tip",hu:"**Linearizáció ($bx^a$).** Az $y = b x^a$ egyenletből $\\ln y = a \\ln x + \\ln b$, így $\\ln y$ lineárisan függ $\\ln x$-től. Illesszünk egyenest az $(\\ln x_i, \\ln y_i)$ pontokra; ekkor $\\bar a = \\bar A$ és $\\bar b = e^{\\bar B}$.",en:"**Linearization ($bx^a$).** From $y = b x^a$ we get $\\ln y = a \\ln x + \\ln b$, so $\\ln y$ depends linearly on $\\ln x$. Fit a line to $(\\ln x_i, \\ln y_i)$; then $\\bar a = \\bar A$ and $\\bar b = e^{\\bar B}$."},{type:"example",label:{hu:"9.6. Példa",en:"Example 9.6"},hu:"Illesszünk $b x^a$ alakú hatványfüggvényt az alábbi pontokra.",en:"Fit a power function of the form $b x^a$ to the points below."},{type:"table",caption:{hu:"9.4. táblázat — $b x^a$ illesztése",en:"Table 9.4 — Fitting $b x^a$"},headers:["$x_i$","$y_i$","$\\ln x_i$","$\\ln y_i$","$(\\ln x_i)^2$","$\\ln x_i \\ln y_i$"],rows:[["0.5","0.7","-0.693147","-0.356675","0.480453","0.247228"],["1.0","1.1","0.000000","0.095310","0.000000","0.000000"],["1.5","1.6","0.405465","0.470004","0.164402","0.190570"],["2.5","2.1","0.916291","0.741937","0.839589","0.679830"],["3.0","2.3","1.098612","0.832909","1.206949","0.915044"]],totals:["","","1.727221","1.783485","2.691393","2.032673"]},{type:"text",hu:"A normálegyenletek $2.691393A + 1.727221B = 2.032673$ és $1.727221A + 5B = 1.783485$ megoldása $A = 0.676257$, $B = 0.123088$. Ebből $a = 0.676257$, $b = e^{0.123088} = 1.130984$, azaz $y = 1.130984\\, x^{0.676257}$. A linearizált hiba $0.007279$, az eredeti hiba $0.019616$.",en:"The normal equations $2.691393A + 1.727221B = 2.032673$ and $1.727221A + 5B = 1.783485$ give $A = 0.676257$, $B = 0.123088$. Hence $a = 0.676257$, $b = e^{0.123088} = 1.130984$, i.e. $y = 1.130984\\, x^{0.676257}$. The linearized error is $0.007279$, the original error $0.019616$."},{type:"demo",component:"nonlinear",caption:{hu:"9.3.–9.4. ábra — Nemlineáris illesztés (interaktív)",en:"Figures 9.3–9.4 — Nonlinear fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen a megadott típusú függvényt az adatokra, és számítsa ki az illesztés hibáját. Oldja meg az eredeti nemlineáris feladatot is Newton-módszerrel!",en:"Fit the indicated function type to the data and compute the error. Also solve the original nonlinear problem with Newton’s method!"},items:[{tag:"(a) $b e^{ax}$",headers:["$x_i$","$y_i$"],cols:[["-2.0","0.6"],["-1.0","0.9"],["1.0","1.6"],["2.0","2.3"],["3.0","2.9"]]},{tag:"(b) $b e^{ax}$",headers:["$x_i$","$y_i$"],cols:[["1.0","1.3"],["1.5","1.6"],["2.0","1.9"],["2.5","2.2"],["3.0","3.0"],["3.5","4.1"]]},{tag:"(c) $b x^a$",headers:["$x_i$","$y_i$"],cols:[["1.0","1.6"],["3.0","1.9"],["4.0","2.2"],["5.0","2.3"],["6.0","3.4"],["9.0","4.9"]]},{tag:"(d) $b x^a$",headers:["$x_i$","$y_i$"],cols:[["1.0","0.7"],["2.0","2.8"],["3.0","7.5"],["4.0","14.8"],["5.0","25.6"]]}],solution:`**Exponential fit $y=be^{ax}$.** Linearize with $Y=\\ln y$, $X=x$, $Y=AX+B$ where $A=a$, $B=\\ln b$, then fit a line to $(x_i,\\ln y_i)$.

*Example (a) data* $x_i:-2,-1,1,2,3$, $\\ y_i:0.6,0.9,1.6,2.3,2.9$. Transformed sums: $\\sum X_i=3$, $\\sum X_i^2=19$, $\\sum Y_i=1.752$, $\\sum X_iY_i=6.458$; determinant $d=86$. Then $A=\\dfrac{5(6.458)-3(1.752)}{86}=0.314$, $B=\\dfrac{19(1.752)-3(6.458)}{86}=0.162$, so $a=0.314$, $b=e^{0.162}=1.176$, giving $y=1.176e^{0.314x}$ (linear-space error $\\approx0.0234$, original error $\\approx0.0412$).

*Example (b)* gives $A\\approx0.436$, $B\\approx-0.201$, i.e. $y=0.818e^{0.436x}$.

**Power fit $y=bx^a$.** Linearize with $Y=\\ln y$, $X=\\ln x$.

*Example (c) data* $x_i:1,3,4,5,6,9$, $\\ y_i:1.6,1.9,2.2,2.3,3.4,4.9$. Sums: $\\sum X_i=8.083$, $\\sum X_i^2=14.234$, $\\sum Y_i=5.546$, $\\sum X_iY_i=9.428$, giving $A\\approx0.548$, $B\\approx0.186$, so $a=0.548$, $b=e^{0.186}=1.204$: $y=1.204x^{0.548}$ (error $\\approx0.127$).

*Example (d)* gives $A\\approx1.987\\approx2$, $B\\approx-0.147$: $y=0.863x^{1.987}\\approx0.863x^2$ — the data is essentially quadratic.

**Direct nonlinear minimization (Newton).** Minimize $F(a,b)=\\sum(be^{ax_i}-y_i)^2$ with gradient $\\partial_a F=2\\sum(be^{ax_i}-y_i)be^{ax_i}x_i$, $\\partial_b F=2\\sum(be^{ax_i}-y_i)e^{ax_i}$ and the corresponding Hessian, iterating $\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)^{(k+1)}=\\left(\\begin{smallmatrix}a\\\\ b\\end{smallmatrix}\\right)^{(k)}-[F'']^{-1}\\nabla F$ from the linearization guess. For (a): $a\\approx0.318$, $b\\approx1.169$, $SSR\\approx0.0398$ (slightly better than linearization’s $0.0412$ — about a 3% improvement). Linearization is simple and gives an excellent initial guess; its drawback is minimizing log-space error, which is biased for additive noise.

**Reciprocal model $y=1/(a+bx)$.** Linearize as $1/y=a+bx$ and fit a line to $(x_i,1/y_i)$; e.g. data $x_i:1,\\dots,5$, $\\ y_i:0.50,0.33,0.25,0.20,0.17$ transform to $Y_i:2.00,3.03,4.00,5.00,5.88$, giving $Y=0.98+0.99X$, hence $y\\approx1/(1+x)$.`},{type:"glossary",deck:"nonlinear"},{type:"flashcards",deck:"nonlinear"},{type:"quiz",ref:"nonlinear"}]},Oe=[_t,zt,vt,wt];Oe.map(i=>i.id);const Xe="lsq.progress",qt=new Set,Be=()=>({completed:{},xp:0});let X=(()=>{try{const i=localStorage.getItem(Xe);if(i)return{...Be(),...JSON.parse(i)}}catch{}return Be()})();function jt(){try{localStorage.setItem(Xe,JSON.stringify(X))}catch{}qt.forEach(i=>i(X))}function At(i){return!!X.completed[i]}function Ft(i,n=50){X.completed[i]||(X.completed[i]=!0,X.xp+=n,jt())}function St(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function L({text:i}){const n=F.useMemo(()=>(i||"").split(/(\$[^$]+\$)/g).map(e=>e.length>1&&e.startsWith("$")&&e.endsWith("$")?ct.renderToString(e.slice(1,-1),{throwOnError:!1}):St(e)).join(""),[i]);return m.jsx("span",{dangerouslySetInnerHTML:{__html:n}})}function Qe(i,n){const e=n.length,t=i.map((s,a)=>[...s,n[a]]);for(let s=0;s<e;s++){let a=s;for(let o=s+1;o<e;o++)Math.abs(t[o][s])>Math.abs(t[a][s])&&(a=o);if(Math.abs(t[a][s])<1e-15)throw new Error("Singular matrix in solveLinearSystem");[t[s],t[a]]=[t[a],t[s]];for(let o=s+1;o<e;o++){const r=t[o][s]/t[s][s];if(r!==0)for(let u=s;u<=e;u++)t[o][u]-=r*t[s][u]}}const l=new Array(e).fill(0);for(let s=e-1;s>=0;s--){let a=t[s][e];for(let o=s+1;o<e;o++)a-=t[s][o]*l[o];l[s]=a/t[s][s]}return l}function Q(i,n){const e=i.length;let t=0,l=0,s=0,a=0;for(let u=0;u<e;u++)t+=i[u],l+=n[u],s+=i[u]*i[u],a+=i[u]*n[u];const[o,r]=Qe([[s,t],[t,e]],[a,l]);return{a:o,b:r}}function Tt(i,n,e){const t=i.length,l=e+1,s=new Array(2*e+1).fill(0);for(let r=0;r<t;r++){let u=1;for(let h=0;h<=2*e;h++)s[h]+=u,u*=i[r]}const a=new Array(l).fill(0);for(let r=0;r<t;r++){let u=1;for(let h=0;h<l;h++)a[h]+=u*n[r],u*=i[r]}const o=[];for(let r=0;r<l;r++){const u=[];for(let h=0;h<l;h++)u.push(s[r+h]);o.push(u)}return Qe(o,a)}function Mt(i,n){const e=n.map(s=>Math.log(s)),{a:t,b:l}=Q(i,e);return{a:t,b:Math.exp(l)}}function Et(i,n){const e=i.map(a=>Math.log(a)),t=n.map(a=>Math.log(a)),{a:l,b:s}=Q(e,t);return{a:l,b:Math.exp(s)}}function D(i,n,e){let t=0;for(let l=0;l<n.length;l++){const s=i(n[l])-e[l];t+=s*s}return t}function Re(i,n){let e=0;for(let t=i.length-1;t>=0;t--)e=e*n+i[t];return e}function ve(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let O=ve();function Ze(i){O=i}const Ke=/[&<>"']/,It=new RegExp(Ke.source,"g"),Ue=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Lt=new RegExp(Ue.source,"g"),Bt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ne=i=>Bt[i];function S(i,n){if(n){if(Ke.test(i))return i.replace(It,Ne)}else if(Ue.test(i))return i.replace(Lt,Ne);return i}const Rt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Nt(i){return i.replace(Rt,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Wt=/(^|[^\[])\^/g;function k(i,n){let e=typeof i=="string"?i:i.source;n=n||"";const t={replace:(l,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(Wt,"$1"),e=e.replace(l,a),t},getRegex:()=>new RegExp(e,n)};return t}function We(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const ee={exec:()=>null};function Ce(i,n){const e=i.replace(/\|/g,(s,a,o)=>{let r=!1,u=a;for(;--u>=0&&o[u]==="\\";)r=!r;return r?"|":" |"}),t=e.split(/ \|/);let l=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;l<t.length;l++)t[l]=t[l].trim().replace(/\\\|/g,"|");return t}function oe(i,n,e){const t=i.length;if(t===0)return"";let l=0;for(;l<t&&i.charAt(t-l-1)===n;)l++;return i.slice(0,t-l)}function Ct(i,n){if(i.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<i.length;t++)if(i[t]==="\\")t++;else if(i[t]===n[0])e++;else if(i[t]===n[1]&&(e--,e<0))return t;return-1}function Pe(i,n,e,t){const l=n.href,s=n.title?S(n.title):null,a=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){t.state.inLink=!0;const o={type:"link",raw:e,href:l,title:s,text:a,tokens:t.inlineTokens(a)};return t.state.inLink=!1,o}return{type:"image",raw:e,href:l,title:s,text:S(a)}}function Pt(i,n){const e=i.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(l=>{const s=l.match(/^\s+/);if(s===null)return l;const[a]=s;return a.length>=t.length?l.slice(t.length):l}).join(`
`)}class he{constructor(n){_(this,"options");_(this,"rules");_(this,"lexer");this.options=n||O}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:oe(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],l=Pt(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:l}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const l=oe(t,"#");(this.options.pedantic||!l||/ $/.test(l))&&(t=l.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);t=oe(t.replace(/^ *>[ \t]?/gm,""),`
`);const l=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(t);return this.lexer.state.top=l,{type:"blockquote",raw:e[0],tokens:s,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const l=t.length>1,s={type:"list",raw:"",ordered:l,start:l?+t.slice(0,-1):"",loose:!1,items:[]};t=l?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=l?t:"[*+-]");const a=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",r="",u=!1;for(;n;){let h=!1;if(!(e=a.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let $=e[2].split(`
`,1)[0].replace(/^\t+/,y=>" ".repeat(3*y.length)),c=n.split(`
`,1)[0],p=0;this.options.pedantic?(p=2,r=$.trimStart()):(p=e[2].search(/[^ ]/),p=p>4?1:p,r=$.slice(p),p+=e[1].length);let d=!1;if(!$&&/^ *$/.test(c)&&(o+=c+`
`,n=n.substring(c.length+1),h=!0),!h){const y=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),v=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),z=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;n;){const A=n.split(`
`,1)[0];if(c=A,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),z.test(c)||w.test(c)||y.test(c)||v.test(n))break;if(c.search(/[^ ]/)>=p||!c.trim())r+=`
`+c.slice(p);else{if(d||$.search(/[^ ]/)>=4||z.test($)||w.test($)||v.test($))break;r+=`
`+c}!d&&!c.trim()&&(d=!0),o+=A+`
`,n=n.substring(A.length+1),$=c.slice(p)}}s.loose||(u?s.loose=!0:/\n *\n *$/.test(o)&&(u=!0));let f=null,g;this.options.gfm&&(f=/^\[[ xX]\] /.exec(r),f&&(g=f[0]!=="[ ] ",r=r.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:o,task:!!f,checked:g,loose:!1,text:r,tokens:[]}),s.raw+=o}s.items[s.items.length-1].raw=o.trimEnd(),s.items[s.items.length-1].text=r.trimEnd(),s.raw=s.raw.trimEnd();for(let h=0;h<s.items.length;h++)if(this.lexer.state.top=!1,s.items[h].tokens=this.lexer.blockTokens(s.items[h].text,[]),!s.loose){const $=s.items[h].tokens.filter(p=>p.type==="space"),c=$.length>0&&$.some(p=>/\n.*\n/.test(p.raw));s.loose=c}if(s.loose)for(let h=0;h<s.items.length;h++)s.items[h].loose=!0;return s}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),l=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:l,title:s}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!/[:|]/.test(e[2]))return;const t=Ce(e[1]),l=e[2].replace(/^\||\| *$/g,"").split("|"),s=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===l.length){for(const o of l)/^ *-+: *$/.test(o)?a.align.push("right"):/^ *:-+: *$/.test(o)?a.align.push("center"):/^ *:-+ *$/.test(o)?a.align.push("left"):a.align.push(null);for(const o of t)a.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of s)a.rows.push(Ce(o,a.header.length).map(r=>({text:r,tokens:this.lexer.inline(r)})));return a}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:S(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const a=oe(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{const a=Ct(e[2],"()");if(a>-1){const r=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,r).trim(),e[3]=""}}let l=e[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);a&&(l=a[1],s=a[3])}else s=e[3]?e[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(t)?l=l.slice(1):l=l.slice(1,-1)),Pe(e,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const l=(t[2]||t[1]).replace(/\s+/g," "),s=e[l.toLowerCase()];if(!s){const a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return Pe(t,s,t[0],this.lexer)}}emStrong(n,e,t=""){let l=this.rules.inline.emStrongLDelim.exec(n);if(!l||l[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(l[1]||l[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const a=[...l[0]].length-1;let o,r,u=a,h=0;const $=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for($.lastIndex=0,e=e.slice(-1*n.length+a);(l=$.exec(e))!=null;){if(o=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!o)continue;if(r=[...o].length,l[3]||l[4]){u+=r;continue}else if((l[5]||l[6])&&a%3&&!((a+r)%3)){h+=r;continue}if(u-=r,u>0)continue;r=Math.min(r,r+u+h);const c=[...l[0]][0].length,p=n.slice(0,a+l.index+c+r);if(Math.min(a,r)%2){const f=p.slice(1,-1);return{type:"em",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}const d=p.slice(2,-2);return{type:"strong",raw:p,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const l=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return l&&s&&(t=t.substring(1,t.length-1)),t=S(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,l;return e[2]==="@"?(t=S(e[1]),l="mailto:"+t):(t=S(e[1]),l=t),{type:"link",raw:e[0],text:t,href:l,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let l,s;if(e[2]==="@")l=S(e[0]),s="mailto:"+l;else{let a;do a=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(a!==e[0]);l=S(e[0]),e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:l,href:s,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=S(e[0]),{type:"text",raw:e[0],text:t}}}}const Ht=/^(?: *(?:\n|$))+/,Vt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Dt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ie=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Gt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Je=/(?:[*+-]|\d{1,9}[.)])/,et=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Je).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),we=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Yt=/^[^\n]+/,qe=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ot=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",qe).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Xt=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Je).getRegex(),ge="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",je=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Qt=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",je).replace("tag",ge).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tt=k(we).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ge).getRegex(),Zt=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tt).getRegex(),Ae={blockquote:Zt,code:Vt,def:Ot,fences:Dt,heading:Gt,hr:ie,html:Qt,lheading:et,list:Xt,newline:Ht,paragraph:tt,table:ee,text:Yt},He=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ge).getRegex(),Kt={...Ae,table:He,paragraph:k(we).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",He).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ge).getRegex()},Ut={...Ae,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",je).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(we).replace("hr",ie).replace("heading",` *#{1,6} *[^
]`).replace("lheading",et).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Jt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,it=/^( {2,}|\\)\n(?!\s*$)/,en=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ae="\\p{P}\\p{S}",tn=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ae).getRegex(),nn=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,an=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ae).getRegex(),sn=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ae).getRegex(),ln=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ae).getRegex(),on=k(/\\([punct])/,"gu").replace(/punct/g,ae).getRegex(),rn=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),mn=k(je).replace("(?:-->|$)","-->").getRegex(),hn=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",mn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ue=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,un=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ue).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),at=k(/^!?\[(label)\]\[(ref)\]/).replace("label",ue).replace("ref",qe).getRegex(),st=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",qe).getRegex(),$n=k("reflink|nolink(?!\\()","g").replace("reflink",at).replace("nolink",st).getRegex(),Fe={_backpedal:ee,anyPunctuation:on,autolink:rn,blockSkip:nn,br:it,code:Jt,del:ee,emStrongLDelim:an,emStrongRDelimAst:sn,emStrongRDelimUnd:ln,escape:nt,link:un,nolink:st,punctuation:tn,reflink:at,reflinkSearch:$n,tag:hn,text:en,url:ee},cn={...Fe,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",ue).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ue).getRegex()},be={...Fe,escape:k(nt).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},pn={...be,br:k(it).replace("{2,}","*").getRegex(),text:k(be.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},re={normal:Ae,gfm:Kt,pedantic:Ut},U={normal:Fe,gfm:be,breaks:pn,pedantic:cn};class B{constructor(n){_(this,"tokens");_(this,"options");_(this,"state");_(this,"tokenizer");_(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||O,this.options.tokenizer=this.options.tokenizer||new he,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:re.normal,inline:U.normal};this.options.pedantic?(e.block=re.pedantic,e.inline=U.pedantic):this.options.gfm&&(e.block=re.gfm,this.options.breaks?e.inline=U.breaks:e.inline=U.gfm),this.tokenizer.rules=e}static get rules(){return{block:re,inline:U}}static lex(n,e){return new B(e).lex(n)}static lexInline(n,e){return new B(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(o,r,u)=>r+"    ".repeat(u.length));let t,l,s,a;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(t=o.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),l=e[e.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+t.raw,l.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),l=e[e.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+t.raw,l.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const r=n.slice(1);let u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},r),typeof u=="number"&&u>=0&&(o=Math.min(o,u))}),o<1/0&&o>=0&&(s=n.substring(0,o+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){l=e[e.length-1],a&&l.type==="paragraph"?(l.raw+=`
`+t.raw,l.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):e.push(t),a=s.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),l=e[e.length-1],l&&l.type==="text"?(l.raw+=`
`+t.raw,l.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):e.push(t);continue}if(n){const o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,l,s,a=n,o,r,u;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)h.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,o.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(r||(u=""),r=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(t=h.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),l=e[e.length-1],l&&t.type==="text"&&l.type==="text"?(l.raw+=t.raw,l.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),l=e[e.length-1],l&&t.type==="text"&&l.type==="text"?(l.raw+=t.raw,l.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,a,u)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const $=n.slice(1);let c;this.options.extensions.startInline.forEach(p=>{c=p.call({lexer:this},$),typeof c=="number"&&c>=0&&(h=Math.min(h,c))}),h<1/0&&h>=0&&(s=n.substring(0,h+1))}if(t=this.tokenizer.inlineText(s)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(u=t.raw.slice(-1)),r=!0,l=e[e.length-1],l&&l.type==="text"?(l.raw+=t.raw,l.text+=t.text):e.push(t);continue}if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return e}}class $e{constructor(n){_(this,"options");this.options=n||O}code(n,e,t){var s;const l=(s=(e||"").match(/^\S*/))==null?void 0:s[0];return n=n.replace(/\n$/,"")+`
`,l?'<pre><code class="language-'+S(l)+'">'+(t?n:S(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:S(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const l=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+l+s+`>
`+n+"</"+l+`>
`}listitem(n,e,t){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const l=We(n);if(l===null)return t;n=l;let s='<a href="'+n+'"';return e&&(s+=' title="'+e+'"'),s+=">"+t+"</a>",s}image(n,e,t){const l=We(n);if(l===null)return t;n=l;let s=`<img src="${n}" alt="${t}"`;return e&&(s+=` title="${e}"`),s+=">",s}text(n){return n}}class Se{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class R{constructor(n){_(this,"options");_(this,"renderer");_(this,"textRenderer");this.options=n||O,this.options.renderer=this.options.renderer||new $e,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Se}static parse(n,e){return new R(e).parse(n)}static parseInline(n,e){return new R(e).parseInline(n)}parse(n,e=!0){let t="";for(let l=0;l<n.length;l++){const s=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=s,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){t+=o||"";continue}}switch(s.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const a=s;t+=this.renderer.heading(this.parseInline(a.tokens),a.depth,Nt(this.parseInline(a.tokens,this.textRenderer)));continue}case"code":{const a=s;t+=this.renderer.code(a.text,a.lang,!!a.escaped);continue}case"table":{const a=s;let o="",r="";for(let h=0;h<a.header.length;h++)r+=this.renderer.tablecell(this.parseInline(a.header[h].tokens),{header:!0,align:a.align[h]});o+=this.renderer.tablerow(r);let u="";for(let h=0;h<a.rows.length;h++){const $=a.rows[h];r="";for(let c=0;c<$.length;c++)r+=this.renderer.tablecell(this.parseInline($[c].tokens),{header:!1,align:a.align[c]});u+=this.renderer.tablerow(r)}t+=this.renderer.table(o,u);continue}case"blockquote":{const a=s,o=this.parse(a.tokens);t+=this.renderer.blockquote(o);continue}case"list":{const a=s,o=a.ordered,r=a.start,u=a.loose;let h="";for(let $=0;$<a.items.length;$++){const c=a.items[$],p=c.checked,d=c.task;let f="";if(c.task){const g=this.renderer.checkbox(!!p);u?c.tokens.length>0&&c.tokens[0].type==="paragraph"?(c.tokens[0].text=g+" "+c.tokens[0].text,c.tokens[0].tokens&&c.tokens[0].tokens.length>0&&c.tokens[0].tokens[0].type==="text"&&(c.tokens[0].tokens[0].text=g+" "+c.tokens[0].tokens[0].text)):c.tokens.unshift({type:"text",text:g+" "}):f+=g+" "}f+=this.parse(c.tokens,u),h+=this.renderer.listitem(f,d,!!p)}t+=this.renderer.list(h,o,r);continue}case"html":{const a=s;t+=this.renderer.html(a.text,a.block);continue}case"paragraph":{const a=s;t+=this.renderer.paragraph(this.parseInline(a.tokens));continue}case"text":{let a=s,o=a.tokens?this.parseInline(a.tokens):a.text;for(;l+1<n.length&&n[l+1].type==="text";)a=n[++l],o+=`
`+(a.tokens?this.parseInline(a.tokens):a.text);t+=e?this.renderer.paragraph(o):o;continue}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let l=0;l<n.length;l++){const s=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=a||"";continue}}switch(s.type){case"escape":{const a=s;t+=e.text(a.text);break}case"html":{const a=s;t+=e.html(a.text);break}case"link":{const a=s;t+=e.link(a.href,a.title,this.parseInline(a.tokens,e));break}case"image":{const a=s;t+=e.image(a.href,a.title,a.text);break}case"strong":{const a=s;t+=e.strong(this.parseInline(a.tokens,e));break}case"em":{const a=s;t+=e.em(this.parseInline(a.tokens,e));break}case"codespan":{const a=s;t+=e.codespan(a.text);break}case"br":{t+=e.br();break}case"del":{const a=s;t+=e.del(this.parseInline(a.tokens,e));break}case"text":{const a=s;t+=e.text(a.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}}class te{constructor(n){_(this,"options");this.options=n||O}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}_(te,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Y,ke,lt;class dn{constructor(...n){Le(this,Y);_(this,"defaults",ve());_(this,"options",this.setOptions);_(this,"parse",le(this,Y,ke).call(this,B.lex,R.parse));_(this,"parseInline",le(this,Y,ke).call(this,B.lexInline,R.parseInline));_(this,"Parser",R);_(this,"Renderer",$e);_(this,"TextRenderer",Se);_(this,"Lexer",B);_(this,"Tokenizer",he);_(this,"Hooks",te);this.use(...n)}walkTokens(n,e){var l,s;let t=[];for(const a of n)switch(t=t.concat(e.call(this,a)),a.type){case"table":{const o=a;for(const r of o.header)t=t.concat(this.walkTokens(r.tokens,e));for(const r of o.rows)for(const u of r)t=t.concat(this.walkTokens(u.tokens,e));break}case"list":{const o=a;t=t.concat(this.walkTokens(o.items,e));break}default:{const o=a;(s=(l=this.defaults.extensions)==null?void 0:l.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(r=>{const u=o[r].flat(1/0);t=t.concat(this.walkTokens(u,e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const l={...t};if(l.async=this.defaults.async||l.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const a=e.renderers[s.name];a?e.renderers[s.name]=function(...o){let r=s.renderer.apply(this,o);return r===!1&&(r=a.apply(this,o)),r}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=e[s.level];a?a.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),l.extensions=e),t.renderer){const s=this.defaults.renderer||new $e(this.defaults);for(const a in t.renderer){if(!(a in s))throw new Error(`renderer '${a}' does not exist`);if(a==="options")continue;const o=a,r=t.renderer[o],u=s[o];s[o]=(...h)=>{let $=r.apply(s,h);return $===!1&&($=u.apply(s,h)),$||""}}l.renderer=s}if(t.tokenizer){const s=this.defaults.tokenizer||new he(this.defaults);for(const a in t.tokenizer){if(!(a in s))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const o=a,r=t.tokenizer[o],u=s[o];s[o]=(...h)=>{let $=r.apply(s,h);return $===!1&&($=u.apply(s,h)),$}}l.tokenizer=s}if(t.hooks){const s=this.defaults.hooks||new te;for(const a in t.hooks){if(!(a in s))throw new Error(`hook '${a}' does not exist`);if(a==="options")continue;const o=a,r=t.hooks[o],u=s[o];te.passThroughHooks.has(a)?s[o]=h=>{if(this.defaults.async)return Promise.resolve(r.call(s,h)).then(c=>u.call(s,c));const $=r.call(s,h);return u.call(s,$)}:s[o]=(...h)=>{let $=r.apply(s,h);return $===!1&&($=u.apply(s,h)),$}}l.hooks=s}if(t.walkTokens){const s=this.defaults.walkTokens,a=t.walkTokens;l.walkTokens=function(o){let r=[];return r.push(a.call(this,o)),s&&(r=r.concat(s.call(this,o))),r}}this.defaults={...this.defaults,...l}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return B.lex(n,e??this.defaults)}parser(n,e){return R.parse(n,e??this.defaults)}}Y=new WeakSet,ke=function(n,e){return(t,l)=>{const s={...l},a={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(a.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),a.async=!0);const o=le(this,Y,lt).call(this,!!a.silent,!!a.async);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a),a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(t):t).then(r=>n(r,a)).then(r=>a.hooks?a.hooks.processAllTokens(r):r).then(r=>a.walkTokens?Promise.all(this.walkTokens(r,a.walkTokens)).then(()=>r):r).then(r=>e(r,a)).then(r=>a.hooks?a.hooks.postprocess(r):r).catch(o);try{a.hooks&&(t=a.hooks.preprocess(t));let r=n(t,a);a.hooks&&(r=a.hooks.processAllTokens(r)),a.walkTokens&&this.walkTokens(r,a.walkTokens);let u=e(r,a);return a.hooks&&(u=a.hooks.postprocess(u)),u}catch(r){return o(r)}}},lt=function(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const l="<p>An error occurred:</p><pre>"+S(t.message+"",!0)+"</pre>";return e?Promise.resolve(l):l}if(e)return Promise.reject(t);throw t}};const G=new dn;function x(i,n){return G.parse(i,n)}x.options=x.setOptions=function(i){return G.setOptions(i),x.defaults=G.defaults,Ze(x.defaults),x};x.getDefaults=ve;x.defaults=O;x.use=function(...i){return G.use(...i),x.defaults=G.defaults,Ze(x.defaults),x};x.walkTokens=function(i,n){return G.walkTokens(i,n)};x.parseInline=G.parseInline;x.Parser=R;x.parser=R.parse;x.Renderer=$e;x.TextRenderer=Se;x.Lexer=B;x.lexer=B.lex;x.Tokenizer=he;x.Hooks=te;x.parse=x;x.options;x.setOptions;x.use;x.walkTokens;x.parseInline;R.parse;B.lex;const fn={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1};function Te(i){i&&pt(i,fn)}x.setOptions({breaks:!0,gfm:!0});function Me(i,n){const e=()=>n.forEach(l=>{if(l&&l.offsetParent!==null)try{ne.Plots.resize(l)}catch{}});requestAnimationFrame(e),setTimeout(e,60);let t;return typeof ResizeObserver<"u"&&(t=new ResizeObserver(e),t.observe(i)),()=>{t&&t.disconnect()}}function ce(i={}){const n=J("--fg")||"#1a1a2e",e=J("--grid")||"#d8d8e0",t=J("--surface")||"#ffffff";return{paper_bgcolor:t,plot_bgcolor:t,font:{color:n,family:"system-ui, sans-serif"},margin:{l:44,r:16,t:28,b:40},xaxis:{gridcolor:e,zerolinecolor:e},yaxis:{gridcolor:e,zerolinecolor:e},showlegend:!0,legend:{orientation:"h",y:1.12,x:0},...i}}const pe=()=>J("--accent")||"#e63946",de=()=>J("--point")||"#3a6ea5",fe={displayModeBar:!1,responsive:!0},me={xs:[-1,1,2.5,3,4,4.5,6],ys:[0,1.2,1.9,2.5,3.1,3.2,4.5]};function gn(i){let n=[...me.xs],e=[...me.ys],t=!1,l=.5,s=.5;i.innerHTML=`
    <div class="demo">
      <p class="demo-hint">${b(q.dragHint)}</p>
      <div class="demo-plot" data-plot></div>
      <div class="demo-controls">
        <button class="btn" data-act="best">${b(q.demoBestFit)}</button>
        <button class="btn" data-act="guess" aria-pressed="false">${b(q.demoGuess)}</button>
        <button class="btn" data-act="add">${b(q.demoAddPoint)}</button>
        <button class="btn" data-act="reset">${b(q.demoReset)}</button>
      </div>
      <div class="demo-sliders" data-sliders hidden>
        <label>${b(q.slope)} (<span data-ga></span>)<input type="range" min="-2" max="3" step="0.01" data-slider="a"></label>
        <label>${b(q.intercept)} (<span data-gb></span>)<input type="range" min="-3" max="4" step="0.01" data-slider="b"></label>
      </div>
      <div class="demo-readout" data-readout></div>
    </div>`;const a=i.querySelector("[data-plot]"),o=i.querySelector("[data-readout]"),r=i.querySelector("[data-sliders]");function u(d,f){const g=(f-d)*.1||1;return[d-g,f+g]}function h(){const{a:d,b:f}=Q(n,e),[g,y]=u(Math.min(...n),Math.max(...n)),v=[{x:n,y:e,mode:"markers",type:"scatter",name:b({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:[g,y],y:[d*g+f,d*y+f],mode:"lines",name:b(q.demoBestFit),line:{color:pe(),width:3}}];t&&v.push({x:[g,y],y:[l*g+s,l*y+s],mode:"lines",name:b(q.demoGuess),line:{color:"#f4a261",width:2,dash:"dash"}}),ne.react(a,v,ce({xaxis:{range:[g,y]}}),fe);const z=D(A=>d*A+f,n,e);let w=`<div class="ro-row">$\\bar a = ${d.toFixed(6)},\\quad \\bar b = ${f.toFixed(6)}$</div>`;if(w+=`<div class="ro-row"><span class="ro-label">${b(q.optimalError)}:</span> $F = ${z.toFixed(6)}$</div>`,t){const A=D(T=>l*T+s,n,e),N=A>0?z/A:1,W=N>.98?"★★★":N>.85?"★★☆":N>.6?"★☆☆":"☆☆☆";w+=`<div class="ro-row"><span class="ro-label">${b(q.yourError)}:</span> $F = ${A.toFixed(6)}$ <span class="ro-stars">${W}</span></div>`}o.innerHTML=w,Te(o)}function $(){const d=a.querySelector(".nsewdrag");if(!d)return;let f=-1;const g=y=>{const v=d.getBoundingClientRect(),z=a._fullLayout.xaxis,w=a._fullLayout.yaxis;return{x:z.p2d(y.clientX-v.left),y:w.p2d(y.clientY-v.top)}};d.addEventListener("mousedown",y=>{const v=g(y),z=a._fullLayout.xaxis,w=a._fullLayout.yaxis,A=z.range[1]-z.range[0],N=w.range[1]-w.range[0];let W=-1,T=1/0;for(let H=0;H<n.length;H++){const se=(n[H]-v.x)/A,Z=(e[H]-v.y)/N,K=se*se+Z*Z;K<T&&(T=K,W=H)}W>=0&&T<.0025&&(f=W,y.preventDefault())}),window.addEventListener("mousemove",y=>{f<0||(e[f]=g(y).y,h())}),window.addEventListener("mouseup",()=>{f=-1})}i.querySelector('[data-act="best"]').addEventListener("click",()=>{t=!1,r.hidden=!0,i.querySelector('[data-act="guess"]').setAttribute("aria-pressed","false"),h()}),i.querySelector('[data-act="guess"]').addEventListener("click",d=>{t=!t,r.hidden=!t,d.currentTarget.setAttribute("aria-pressed",String(t)),h()}),i.querySelector('[data-act="add"]').addEventListener("click",()=>{const d=Q(n,e),f=Math.max(...n)+1;n.push(f),e.push(d.a*f+d.b),h(),setTimeout($,60)}),i.querySelector('[data-act="reset"]').addEventListener("click",()=>{n=[...me.xs],e=[...me.ys],h(),setTimeout($,60)}),i.querySelectorAll("[data-slider]").forEach(d=>{d.value=d.dataset.slider==="a"?l:s,d.addEventListener("input",()=>{d.dataset.slider==="a"?l=parseFloat(d.value):s=parseFloat(d.value),i.querySelector("[data-ga]").textContent=l.toFixed(2),i.querySelector("[data-gb]").textContent=s.toFixed(2),h()})}),i.querySelector("[data-ga]").textContent=l.toFixed(2),i.querySelector("[data-gb]").textContent=s.toFixed(2),h(),setTimeout($,80);const c=ze(()=>h()),p=Me(i,[a]);return()=>{c(),p()}}const Ve={xs:[-1,0,.5,1,2,2.5,3],ys:[1.4,1.9,1.6,1.7,.2,-.1,-2]};function yn(i){let n=[...Ve.xs],e=[...Ve.ys],t=2;const l=Math.min(6,n.length-1);i.innerHTML=`
    <div class="demo">
      <div class="demo-sliders">
        <label>${b(q.degree)} $m$ (<span data-deg></span>)
          <input type="range" min="1" max="${l}" step="1" value="${t}" data-slider="m">
        </label>
      </div>
      <div class="demo-plot" data-plot></div>
      <div class="demo-readout" data-readout></div>
    </div>`;const s=i.querySelector("[data-plot]"),a=i.querySelector("[data-readout]");i.querySelector("[data-deg]").textContent=t;function o(){const h=Tt(n,e,t),$=Math.min(...n)-.4,c=Math.max(...n)+.4,p=[],d=[],f=120;for(let z=0;z<=f;z++){const w=$+(c-$)*z/f;p.push(w),d.push(Re(h,w))}ne.react(s,[{x:n,y:e,mode:"markers",type:"scatter",name:b({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:p,y:d,mode:"lines",name:`${b({hu:"fokszám",en:"degree"})} ${t}`,line:{color:pe(),width:3}}],ce({xaxis:{range:[$,c]}}),fe);const g=D(z=>Re(h,z),n,e);let v=`<div class="ro-row">$p(x) = ${h.map((z,w)=>w===0?z.toFixed(4):`${z>=0?"+":""}${z.toFixed(4)}x^{${w}}`).join(" ")}$</div>`;v+=`<div class="ro-row"><span class="ro-label">${b(q.error)}:</span> $F = ${g.toFixed(6)}$</div>`,t>=n.length-1&&(v+=`<div class="ro-row ro-warn">${b({hu:"⚠ $m \\ge n$: interpoláció, a hiba ≈ 0.",en:"⚠ $m \\ge n$: interpolation, error ≈ 0."})}</div>`),a.innerHTML=v,Te(a)}i.querySelector('[data-slider="m"]').addEventListener("input",h=>{t=parseInt(h.target.value,10),i.querySelector("[data-deg]").textContent=t,o()}),o();const r=ze(()=>o()),u=Me(i,[s]);return()=>{r(),u()}}const xn={exp:{xs:[0,1,1.5,2,3,4],ys:[.3,.7,.9,1.2,1.8,2.7]},power:{xs:[.5,1,1.5,2.5,3],ys:[.7,1.1,1.6,2.1,2.3]}};function bn(i){let n="exp";i.innerHTML=`
    <div class="demo">
      <div class="demo-controls">
        <button class="btn" data-model="exp" aria-pressed="true">${b(q.expModel)}</button>
        <button class="btn" data-model="power" aria-pressed="false">${b(q.powerModel)}</button>
      </div>
      <div class="demo-twoplots">
        <figure><figcaption data-cap1></figcaption><div class="demo-plot" data-plot1></div></figure>
        <figure><figcaption data-cap2></figcaption><div class="demo-plot" data-plot2></div></figure>
      </div>
      <div class="demo-readout" data-readout></div>
    </div>`;const e=i.querySelector("[data-plot1]"),t=i.querySelector("[data-plot2]"),l=i.querySelector("[data-cap1]"),s=i.querySelector("[data-cap2]"),a=i.querySelector("[data-readout]");function o(){const{xs:h,ys:$}=xn[n];l.textContent=b(q.linearizedSpace),s.textContent=b(q.originalSpace);let c,p,d,f,g,y,v,z,w,A;if(n==="exp"){d=h.slice(),f=$.map(j=>Math.log(j));const C=Q(d,f);g=C.a,y=C.b,{a:c,b:p}=Mt(h,$),v=j=>p*Math.exp(c*j),z=D(j=>g*j+y,d,f),w=D(v,h,$),A=`y = ${p.toFixed(6)}\\, e^{${c.toFixed(6)} x}`}else{d=h.map(j=>Math.log(j)),f=$.map(j=>Math.log(j));const C=Q(d,f);g=C.a,y=C.b,{a:c,b:p}=Et(h,$),v=j=>p*Math.pow(j,c),z=D(j=>g*j+y,d,f),w=D(v,h,$),A=`y = ${p.toFixed(6)}\\, x^{${c.toFixed(6)}}`}const N=Math.min(...d),W=Math.max(...d),T=(W-N)*.1||1;ne.react(e,[{x:d,y:f,mode:"markers",type:"scatter",name:b(n==="exp"?{hu:"(x, ln y)",en:"(x, ln y)"}:{hu:"(ln x, ln y)",en:"(ln x, ln y)"}),marker:{size:10,color:de()}},{x:[N-T,W+T],y:[g*(N-T)+y,g*(W+T)+y],mode:"lines",name:b({hu:"illesztett egyenes",en:"fitted line"}),line:{color:pe(),width:3}}],ce(),fe);const H=Math.min(...h),se=Math.max(...h),Z=[],K=[],Ee=120;for(let C=0;C<=Ee;C++){const j=H+(se-H)*C/Ee;Z.push(j),K.push(v(j))}ne.react(t,[{x:h,y:$,mode:"markers",type:"scatter",name:b({hu:"adatok",en:"data"}),marker:{size:10,color:de()}},{x:Z,y:K,mode:"lines",name:b({hu:"illesztett görbe",en:"fitted curve"}),line:{color:pe(),width:3}}],ce(),fe),a.innerHTML=`<div class="ro-row">$${A}$</div><div class="ro-row">$A = ${g.toFixed(6)},\\quad B = ${y.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${b(q.linearError)}:</span> $${z.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${b(q.nonlinearError)}:</span> $${w.toFixed(6)}$</div>`,Te(a)}i.querySelectorAll("[data-model]").forEach(h=>{h.addEventListener("click",()=>{n=h.dataset.model,i.querySelectorAll("[data-model]").forEach($=>$.setAttribute("aria-pressed",String($.dataset.model===n))),o()})}),o();const r=ze(()=>o()),u=Me(i,[e,t]);return()=>{r(),u()}}const ye={line:gn,polynomial:yn,nonlinear:bn};function kn({component:i,caption:n}){const e=F.useRef(null);return F.useEffect(()=>{var s;const t=e.current;if(!t)return;const l=(s=ye[i])==null?void 0:s.call(ye,t);return()=>{typeof l=="function"&&l()}},[i]),m.jsxs("figure",{className:"demo-figure",children:[m.jsx("div",{className:"demo-host",ref:e}),n&&m.jsx("figcaption",{children:m.jsx(P,{markdown:n})})]})}const _n={intro:[{q:{hu:"Miért a négyzetes hibát ($F$) minimalizáljuk az $F_1$ (maximum) vagy $F_2$ (abszolút) helyett?",en:"Why minimize the squared error ($F$) instead of $F_1$ (max) or $F_2$ (absolute)?"},options:[{hu:"Mert differenciálható, így a minimum a deriváltak nullhelyén kereshető",en:"Because it is differentiable, so the minimum is found where derivatives vanish"},{hu:"Mert mindig kisebb értéket ad",en:"Because it always gives a smaller value"},{hu:"Mert nem igényel mérési adatokat",en:"Because it needs no measurement data"}],correct:0},{q:{hu:"Mit jelöl az $\\mathbf{a}$ a $g(x;\\mathbf{a})$ jelölésben?",en:"What does $\\mathbf{a}$ denote in the notation $g(x;\\mathbf{a})$?"},options:[{hu:"A mérési pontok számát",en:"The number of data points"},{hu:"Az illesztendő függvény ismeretlen paramétereit",en:"The unknown parameters of the function to fit"},{hu:"A maximális hibát",en:"The maximum error"}],correct:1}],line:[{q:{hu:"Mi a $b$ együtthatója a második Gauss-féle normálegyenletben?",en:"What is the coefficient of $b$ in the second Gaussian normal equation?"},options:[{hu:"$\\sum x_i$",en:"$\\sum x_i$"},{hu:"$n+1$ (a mérési pontok száma)",en:"$n+1$ (the number of data points)"},{hu:"$\\sum x_i^2$",en:"$\\sum x_i^2$"}],correct:1},{q:{hu:"Mikor garantált, hogy a $d$ determináns pozitív (egyértelmű megoldás)?",en:"When is the determinant $d$ guaranteed positive (unique solution)?"},options:[{hu:"Ha minden $y_i$ egyenlő",en:"If all $y_i$ are equal"},{hu:"Ha legalább két $x_i$ különböző",en:"If at least two $x_i$ are distinct"},{hu:"Ha $n = 1$",en:"If $n = 1$"}],correct:1},{q:{hu:"A 9.2. példában mekkora az illesztett egyenes meredeksége ($\\bar a$)?",en:"In Example 9.2, what is the slope $\\bar a$ of the fitted line?"},options:[{hu:"$0.542163$",en:"$0.542163$"},{hu:"$0.630243$",en:"$0.630243$"},{hu:"$0.124691$",en:"$0.124691$"}],correct:1}],polynomial:[{q:{hu:"Miért invertálható a (4) rendszer $\\mathbf{A}$ mátrixa, ha $m \\le n$ és az $x_i$-k különbözők?",en:"Why is the matrix $\\mathbf{A}$ of system (4) invertible when $m \\le n$ and the $x_i$ are distinct?"},options:[{hu:"Mert szimmetrikus",en:"Because it is symmetric"},{hu:"Mert pozitív definit ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ ha $\\mathbf{z} \\ne 0$)",en:"Because it is positive definite ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ for $\\mathbf{z} \\ne 0$)"},{hu:"Mert minden eleme pozitív",en:"Because all its entries are positive"}],correct:1},{q:{hu:"Mi történik, ha $n \\le m$ (több paraméter, mint a kényszerek)?",en:"What happens if $n \\le m$ (more parameters than constraints)?"},options:[{hu:"A pontokon átmenő interpoláló polinom létezik, $F$ minimuma 0",en:"An interpolating polynomial exists through the points; the minimum of $F$ is 0"},{hu:"Nincs megoldás",en:"There is no solution"},{hu:"A hiba végtelen",en:"The error is infinite"}],correct:0}],nonlinear:[{q:{hu:"Hogyan linearizáljuk a $y = b e^{ax}$ modellt?",en:"How do we linearize the model $y = b e^{ax}$?"},options:[{hu:"$\\ln y = \\ln b + a x$ (egyenes az $(x, \\ln y)$ síkon)",en:"$\\ln y = \\ln b + a x$ (a line in the $(x, \\ln y)$ plane)"},{hu:"$\\ln y = a \\ln x + \\ln b$",en:"$\\ln y = a \\ln x + \\ln b$"},{hu:"$y^2 = a x + b$",en:"$y^2 = a x + b$"}],correct:0},{q:{hu:"A $y = b x^a$ hatványfüggvényt melyik koordinátákban illesztjük egyenessel?",en:"In which coordinates do we fit a line for the power model $y = b x^a$?"},options:[{hu:"$(x, \\ln y)$",en:"$(x, \\ln y)$"},{hu:"$(\\ln x, \\ln y)$",en:"$(\\ln x, \\ln y)$"},{hu:"$(\\ln x, y)$",en:"$(\\ln x, y)$"}],correct:1},{q:{hu:"Igaz-e, hogy a linearizált illesztés pontosan minimalizálja az eredeti nemlineáris négyzetes hibát?",en:"Does the linearized fit exactly minimize the original nonlinear least-square error?"},options:[{hu:"Igen, mindig",en:"Yes, always"},{hu:"Nem — jó közelítés, de a transzformált térben minimalizál",en:"No — it is a good approximation, but minimizes in the transformed space"},{hu:"Csak ha $a = 0$",en:"Only if $a = 0$"}],correct:1}]},M={quiz:{en:"Quiz",hu:"Kvíz"},check:{en:"Check answer",hu:"Ellenőrzés"},next:{en:"Next",hu:"Következő"},correct:{en:"Correct! ✓",hu:"Helyes! ✓"},incorrect:{en:"Not quite — try again.",hu:"Nem egészen — próbáld újra."},done:{en:"Quiz complete!",hu:"Kvíz teljesítve!"},score:{en:"Score",hu:"Eredmény"},complete:{en:"Section complete",hu:"Szakasz teljesítve"},retry:{en:"Retry",hu:"Újra"}};function zn({refKey:i,sectionId:n}){const{t:e}=V(),t=_n[i]??[],[l,s]=F.useState(0),[a,o]=F.useState(0),[r,u]=F.useState(-1),[h,$]=F.useState("none");if(!t.length)return null;const c=()=>{s(0),o(0),u(-1),$("none")};if(l>=t.length){const g=Math.round(a/t.length*100),y=a===t.length;return y&&Ft(n),m.jsxs("div",{className:"quiz",children:[m.jsxs("div",{className:"quiz-head",children:[m.jsx("span",{className:"quiz-icon",children:"🎯"}),m.jsx("strong",{children:e(M.quiz)})]}),m.jsx("div",{className:"quiz-body",children:m.jsxs("div",{className:"quiz-done",children:[m.jsxs("p",{children:[e(M.done)," ",e(M.score),": ",a,"/",t.length," (",g,"%)"]}),y&&m.jsxs("p",{className:"quiz-pass",children:[e(M.complete)," ✓"]}),m.jsx("button",{className:"btn",onClick:c,children:e(M.retry)})]})})]})}const p=t[l],d=()=>{r<0||(r===p.correct?($("right"),o(g=>g+1)):$("wrong"))},f=()=>{s(g=>g+1),u(-1),$("none")};return m.jsxs("div",{className:"quiz",children:[m.jsxs("div",{className:"quiz-head",children:[m.jsx("span",{className:"quiz-icon",children:"🎯"}),m.jsx("strong",{children:e(M.quiz)})]}),m.jsxs("div",{className:"quiz-body",children:[m.jsxs("p",{className:"quiz-q",children:[l+1,". ",m.jsx(L,{text:e(p.q)})]}),m.jsx("div",{className:"quiz-opts",children:p.options.map((g,y)=>m.jsx("button",{className:`quiz-opt${r===y?" selected":""}${h!=="none"&&y===p.correct?" right":""}${h==="wrong"&&y===r?" wrong":""}`,onClick:()=>h!=="right"&&u(y),children:m.jsx(L,{text:e(g)})},y))}),h!=="none"&&m.jsx("div",{className:`quiz-feedback ${h==="right"?"ok":"bad"}`,children:e(h==="right"?M.correct:M.incorrect)}),h==="right"?m.jsx("button",{className:"btn",onClick:f,children:e(M.next)}):m.jsx("button",{className:"btn",onClick:d,children:e(M.check)})]})]})}const vn={line:[{term:{en:"Least squares method",hu:"Legkisebb négyzetek módszere"},def:{en:"Fit a model to data $(x_i,y_i)$ by minimizing the sum of squared residuals. Unlike interpolation, the curve need not pass through the points — it captures the trend and smooths out noise.",hu:"Egy modell illesztése $(x_i,y_i)$ adatokra a négyzetes eltérések összegének minimalizálásával. Az interpolációval ellentétben a görbe nem megy át a pontokon — a trendet ragadja meg és simítja a zajt."}},{term:{en:"Line fitting $g(x)=ax+b$",hu:"Egyenes illesztése $g(x)=ax+b$"},def:{en:"The simplest least-squares model: choose slope $a$ and intercept $b$ to minimize $F(a,b)=\\sum_i(ax_i+b-y_i)^2$. Also called linear regression.",hu:"A legegyszerűbb legkisebb-négyzetes modell: válaszd az $a$ meredekséget és $b$ tengelymetszetet úgy, hogy $F(a,b)=\\sum_i(ax_i+b-y_i)^2$ minimális legyen. Lineáris regressziónak is hívják."}},{term:{en:"Least-square error $F(a,b)$",hu:"Négyzetes hiba $F(a,b)$"},def:{en:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — the objective. Squaring (vs absolute value) makes $F$ smooth and differentiable, so calculus locates the minimum, and it penalizes large deviations more.",hu:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — a célfüggvény. A négyzetre emelés (az abszolút érték helyett) simává, differenciálhatóvá teszi $F$-et, így az analízis megtalálja a minimumot, és jobban bünteti a nagy eltéréseket."}},{term:{en:"Normal equations (Gaussian)",hu:"Normálegyenletek (Gauss-féle)"},def:{en:"Setting $\\partial F/\\partial a=\\partial F/\\partial b=0$ gives the linear system $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ for the optimal $a,b$.",hu:"A $\\partial F/\\partial a=\\partial F/\\partial b=0$ feltételből az $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ lineáris rendszer adódik az optimális $a,b$-re."}},{term:{en:"Unique solvability",hu:"Egyértelmű megoldhatóság"},def:{en:"The $2\\times2$ normal system has a unique solution whenever at least two of the $x_i$ differ (its determinant $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ is convex, so the stationary point is the global minimum.",hu:"A $2\\times2$-es normálrendszernek egyetlen megoldása van, valahányszor legalább két $x_i$ különbözik (determinánsa $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ konvex, így a stacionárius pont a globális minimum."}},{term:{en:"Residuals & best fit",hu:"Reziduumok és legjobb illeszkedés"},def:{en:"The residual at $x_i$ is $r_i=ax_i+b-y_i$. The best-fit line makes $\\sum r_i^2$ as small as possible; the residuals sum to zero and are uncorrelated with the $x_i$ at the optimum.",hu:"Az $x_i$-beli reziduum $r_i=ax_i+b-y_i$. A legjobban illeszkedő egyenes a $\\sum r_i^2$-et teszi a lehető legkisebbé; az optimumban a reziduumok összege nulla és korrelálatlanok az $x_i$-vel."}}],polynomial:[{term:{en:"Polynomial curve fitting",hu:"Polinom illesztése"},def:{en:"Fit a degree-$m$ polynomial $p(x)=a_m x^m+\\dots+a_0$ to data $(x_i,y_i)$ by least squares, minimizing $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ over the $m+1$ coefficients.",hu:"Egy $m$-edfokú $p(x)=a_m x^m+\\dots+a_0$ polinom illesztése $(x_i,y_i)$ adatokra legkisebb négyzetekkel, az $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ minimalizálásával az $m+1$ együtthatóra."}},{term:{en:"Fitting vs interpolation ($m<n$)",hu:"Illesztés vs interpoláció ($m<n$)"},def:{en:"If $m\\ge n$ a degree-$m$ polynomial interpolates exactly ($F=0$). The interesting case is $m<n$: fewer parameters than data, so $F>0$ and the polynomial approximates the trend instead of passing through every point.",hu:"Ha $m\\ge n$, egy $m$-edfokú polinom pontosan interpolál ($F=0$). Az érdekes eset $m<n$: kevesebb paraméter, mint adat, így $F>0$, és a polinom a trendet közelíti, nem megy át minden ponton."}},{term:{en:"Normal equations",hu:"Normálegyenletek"},def:{en:"Setting $\\partial F/\\partial a_k=0$ gives an $(m+1)\\times(m+1)$ linear system $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ whose entries are power sums $\\sum_i x_i^{j+k}$ and $\\sum_i x_i^k y_i$.",hu:"A $\\partial F/\\partial a_k=0$ feltételből egy $(m+1)\\times(m+1)$-es lineáris rendszer $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ adódik, amelynek elemei a $\\sum_i x_i^{j+k}$ hatványösszegek és $\\sum_i x_i^k y_i$."}},{term:{en:"Positive definite normal matrix",hu:"Pozitív definit normálmátrix"},def:{en:"If there are at least $m+1$ distinct nodes, the normal matrix $\\mathbf{A}$ is symmetric positive definite (via the Fundamental Theorem of Algebra), so the system has a unique solution — the global least-squares minimum.",hu:"Ha legalább $m+1$ különböző alappont van, a normálmátrix $\\mathbf{A}$ szimmetrikus pozitív definit (az algebra alaptétele révén), így a rendszernek egyetlen megoldása van — a globális legkisebb-négyzetes minimum."}},{term:{en:"Ill-conditioning at high degree",hu:"Rossz kondicionáltság magas foknál"},def:{en:"The power-sum normal matrix is a Vandermonde-style Gram matrix that becomes badly conditioned as $m$ grows (like the Hilbert matrix). High-degree fits also overfit noise — prefer modest $m$ or orthogonal-polynomial bases.",hu:"A hatványösszeges normálmátrix egy Vandermonde-jellegű Gram-mátrix, amely $m$ növekedtével rosszul kondicionálttá válik (mint a Hilbert-mátrix). A magas fokú illesztések túlillesztik a zajt — válassz mérsékelt $m$-et vagy ortogonális polinom bázist."}}],nonlinear:[{term:{en:"Nonlinear curve fitting",hu:"Nemlineáris függvény illesztése"},def:{en:"Fitting a model whose parameters enter nonlinearly (e.g. $be^{ax}$, $bx^a$). If parameters appear linearly the normal equations stay linear; otherwise they become a nonlinear system.",hu:"Olyan modell illesztése, amelyben a paraméterek nemlineárisan szerepelnek (pl. $be^{ax}$, $bx^a$). Ha a paraméterek lineárisan jelennek meg, a normálegyenletek lineárisak maradnak; különben nemlineáris rendszerré válnak."}},{term:{en:"Linearization",hu:"Linearizálás"},def:{en:"Transform the model into a linear one by a change of variables, fit a line by least squares, then map back. A fast, practical approximation — not the exact nonlinear least-squares solution.",hu:"Alakítsd a modellt lineárissá változócserével, illessz egyenest legkisebb négyzetekkel, majd alakítsd vissza. Gyors, gyakorlati közelítés — nem a pontos nemlineáris legkisebb-négyzetes megoldás."}},{term:{en:"Exponential fit $y=be^{ax}$",hu:"Exponenciális illesztés $y=be^{ax}$"},def:{en:"Take logs: $\\ln y=\\ln b+ax$. Fit a line $Y=AX+B$ to $(x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$. Used for growth/decay data.",hu:"Vegyél logaritmust: $\\ln y=\\ln b+ax$. Illessz $Y=AX+B$ egyenest az $(x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$. Növekedési/bomlási adatokra."}},{term:{en:"Power fit $y=bx^a$",hu:"Hatványfüggvény illesztés $y=bx^a$"},def:{en:"Take logs of both: $\\ln y=a\\ln x+\\ln b$. Fit a line to $(\\ln x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$ — a log–log linear fit.",hu:"Vegyél logaritmust mindkettőből: $\\ln y=a\\ln x+\\ln b$. Illessz egyenest a $(\\ln x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$ — log–log lineáris illesztés."}},{term:{en:"Caveat: not the true optimum",hu:"Figyelmeztetés: nem a valódi optimum"},def:{en:"Linearization minimizes error in the transformed variables, not in the original ones, so it weights the data differently. It gives a good, cheap starting fit — refine with a genuine nonlinear least-squares solver if needed.",hu:"A linearizálás a transzformált változókban minimalizálja a hibát, nem az eredetiekben, így másképp súlyozza az adatokat. Jó, olcsó kiinduló illesztést ad — szükség esetén finomítsd valódi nemlineáris legkisebb-négyzetes megoldóval."}}]},wn={line:[{q:{en:"In curve fitting, what does the notation $g(x; \\mathbf{a})$ represent?",hu:"A görbeillesztésnél mit jelent a $g(x; \\mathbf{a})$ jelölés?"},a:{en:"A function $g$ describing a physical process where the general formula is known but parameters $\\mathbf{a}$ are unknown.",hu:"$g$ függvény, amely egy olyan fizikai folyamatot ír le, ahol az általános képlet ismert, de a $\\mathbf{a}$ paraméterek ismeretlenek."}},{q:{en:"What is the primary goal of curve fitting?",hu:"Mi a görbeillesztés elsődleges célja?"},a:{en:"To find parameter values such that the function $g$ deviates the 'least' from measured data points.",hu:"Olyan paraméterértékek megtalálása, amelyeknél a $g$ függvény a „legkisebb” eltérést mutat a mért adatpontoktól."}},{q:{en:"Why is it usually impossible to draw a curve exactly through all measurement points $(x_i, y_i)$?",hu:"Miért nem lehet általában minden $(x_i, y_i)$ mérési ponton keresztül pontosan megrajzolni a görbét?"},a:{en:"Measurement errors typically cause data points to lie off the ideal graph of the assumed function.",hu:"A mérési hibák általában azt okozzák, hogy az adatpontok eltérnek a feltételezett függvény ideális grafikonjától."}},{q:{en:"Define the maximum error formula $F_1(\\mathbf{a})$.",hu:"Határozza meg a $F_1(\\mathbf{a})$ maximális hibaképletet."},a:{en:"$F_1(\\mathbf{a}) := \\max\\{|g(x_i; \\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}$",hu:"$F_1(\\mathbf{a}):= \\max\\{|g(x_i; \\mathbf{a}) - y_i|: i = 0, 1, \\ldots, n\\}$"}},{q:{en:"Define the absolute error sum formula $F_2(\\mathbf{a})$.",hu:"Határozza meg a $F_2(\\mathbf{a})$ abszolút hibaösszeg képletet."},a:{en:"$F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$",hu:"$F_2(\\mathbf{a}):= \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$"}},{q:{en:"What is the mathematical disadvantage of using $F_1(\\mathbf{a})$ or $F_2(\\mathbf{a})$ for curve fitting?",hu:"Mi a matematikai hátránya a $F_1(\\mathbf{a})$ vagy $F_2(\\mathbf{a})$ használatának görbeillesztéshez?"},a:{en:"They are difficult to minimize because they are not differentiable with respect to the parameters $\\mathbf{a}$.",hu:"Nehéz minimalizálni őket, mert nem különböztethetők meg a $\\mathbf{a}$ paraméterek tekintetében."}},{q:{en:"What is the formula for the quadratic error (least square error) $F(\\mathbf{a})$?",hu:"Mi a $F(\\mathbf{a})$ másodfokú hiba (legkisebb négyzetes hiba) képlete?"},a:{en:"$F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$",hu:"$F(\\mathbf{a}):= \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$"}},{q:{en:"What is the 'method of least squares'?",hu:"Mi a „kisebb négyzetek módszere”?"},a:{en:"A method that finds the best-fitting function by minimizing the sum of the squares of the deviations from the data points.",hu:"Olyan módszer, amely az adatpontoktól való eltérések négyzetösszegének minimalizálásával találja meg a legjobban illeszkedő függvényt."}},{q:{en:"In line fitting, what is the standard form of the linear function $g(x)$?",hu:"Vonalillesztésnél mi a $g(x)$ lineáris függvény szabványos formája?"},a:{en:"$g(x) = ax + b$",hu:"$g(x) = ax + b$"}},{q:{en:"For line fitting, what is the error function $F(a, b)$ that needs to be minimized?",hu:"Vonalillesztésnél mi az a $F(a, b)$ hibafüggvény, amelyet minimalizálni kell?"},a:{en:"$F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2$",hu:"$F(a, b):= \\sum_{i=0}^{n} (ax_i + b - y_i)^2$"}},{q:{en:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $a$?",hu:"Mi a $F(a, b)$ lineáris hibafüggvény parciális deriváltja a $a$ függvényhez képest?"},a:{en:"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$",hu:"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$"}},{q:{en:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $b$?",hu:"Mi a $F(a, b)$ lineáris hibafüggvény parciális deriváltja a $b$ függvényhez képest?"},a:{en:"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$",hu:"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$"}},{q:{en:"What are the 'Gaussian normal equations' in the context of line fitting?",hu:"Mik a „Gauss-normál egyenletek” a vonalillesztés összefüggésében?"},a:{en:"The system of equations obtained by setting the partial derivatives of the error function $F(a, b)$ to zero.",hu:"A $F(a, b)$ hibafüggvény parciális deriváltjainak nullára állításával kapott egyenletrendszer."}},{q:{en:"Write the first Gaussian normal equation for line fitting ($a \\sum \\ldots$).",hu:"Írja fel az első Gauss-normálegyenletet a vonalillesztéshez ($a \\sum \\ldots$)."},a:{en:"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$",hu:"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$"}},{q:{en:"Write the second Gaussian normal equation for line fitting ($a \\sum \\ldots$).",hu:"Írja fel a második Gauss-normálegyenletet a vonalillesztéshez ($a \\sum \\ldots$)."},a:{en:"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$",hu:"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$"}},{q:{en:"In the second Gaussian normal equation for line fitting, what does the coefficient $n+1$ represent?",hu:"Mit jelent a $n+1$ együttható a vonalillesztés második Gauss-normálegyenletében?"},a:{en:"The total number of measurement data points.",hu:"A mérési adatpontok teljes száma."}},{q:{en:"What is the formula for the determinant $d$ of the coefficient matrix of the Gaussian normal equations?",hu:"Mi a képlete a Gauss-normálegyenletek együtthatómátrixának $d$ determinánsának?"},a:{en:"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$",hu:"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$"}},{q:{en:"Which mathematical inequality is used to prove that the determinant $d$ of the normal equations is always non-negative?",hu:"Melyik matematikai egyenlőtlenség bizonyítja, hogy a normálegyenletek $d$ determinánsa mindig nem negatív?"},a:{en:"The Cauchy–Bunyakovsky–Schwarz inequality.",hu:"A Cauchy–Bunyakovsky–Schwarz egyenlőtlenség."}},{q:{en:"Under what condition is the determinant $d$ of the Gaussian normal equations strictly positive?",hu:"Milyen feltétel mellett szigorúan pozitív a Gauss-normálegyenletek $d$ determinánsa?"},a:{en:"When there are at least two distinct mesh points $x_i$.",hu:"Ha legalább két különböző hálópont van, $x_i$."}},{q:{en:"If $d > 0$, how many solutions does the Gaussian normal equation system have for line fitting?",hu:"Ha $d > 0$, hány megoldása van a Gauss-normál egyenletrendszernek a vonalillesztésre?"},a:{en:"Exactly one unique solution.",hu:"Pontosan egy egyedi megoldás."}},{q:{en:"What is the explicit formula for the optimal slope $\\bar{a}$ in line fitting?",hu:"Mi az optimális $\\bar{a}$ lejtő egyértelmű képlete a vonalillesztésnél?"},a:{en:"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$",hu:"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"}},{q:{en:"What is the explicit formula for the optimal intercept $\\bar{b}$ in line fitting?",hu:"Mi az optimális $\\bar{b}$ metszéspont képlete a vonalillesztésben?"},a:{en:"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$",hu:"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"}},{q:{en:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$?",hu:"Mennyi a $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$ második parciális derivált értéke?"},a:{en:"$2\\sum_{i=0}^{n} x_i^2$",hu:"$2\\sum_{i=0}^{n} x_i^2$"}},{q:{en:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$?",hu:"Mennyi a $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$ második parciális derivált értéke?"},a:{en:"$2(n + 1)$",hu:"$2(n + 1)$"}},{q:{en:"What is the value of the mixed partial derivative $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$?",hu:"Mennyi a $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$ vegyes parciális derivált értéke?"},a:{en:"$2\\sum_{i=0}^{n} x_i$",hu:"$2\\sum_{i=0}^{n} x_i$"}},{q:{en:"What is the relationship between the discriminant $D(\\bar{a}, \\bar{b})$ and the determinant $d$?",hu:"Mi a kapcsolat a $D(\\bar{a}, \\bar{b})$ diszkrimináns és a $d$ determináns között?"},a:{en:"$D(\\bar{a}, \\bar{b}) = 4d$",hu:"$D(\\bar{a}, \\bar{b}) = 4d$"}},{q:{en:"Why is the stationary point $(\\bar{a}, \\bar{b})$ specifically a local minimum for $F$?",hu:"Miért a $(\\bar{a}, \\bar{b})$ állópont kifejezetten helyi minimum a $F$ számára?"},a:{en:"Because the discriminant $D$ is positive ($4d > 0$) and the second derivative with respect to $a$ is positive.",hu:"Mivel a diszkrimináns $D$ pozitív ($4d > 0$), a második derivált pedig a $a$-hez képest pozitív."}},{q:{en:"Is the local minimum found by the method of least squares for line fitting also a global minimum?",hu:"A legkisebb négyzetek módszerével a vonalillesztéshez kapott lokális minimum is globális minimum?"},a:{en:"Yes, it is both a local and a global minimum.",hu:"Igen, ez egy helyi és egy globális minimum."}},{q:{en:"According to Theorem 9.1, what condition must the points $(x_i, y_i)$ meet for a unique line of best fit to exist?",hu:"A 9.1. Tétel szerint milyen feltételnek kell megfelelnie a $(x_i, y_i)$ pontoknak ahhoz, hogy létezzen egy egyedi, legjobban illeszkedő egyenes?"},a:{en:"There must exist at least two points $i$ and $j$ such that $x_i \\neq x_j$.",hu:"Legalább két $i$ és $j$ pontnak léteznie kell úgy, hogy a $x_i \\neq x_j$ legyen."}},{q:{en:"When performing manual line fitting calculations, what values should be computed in the third and fourth columns of the summary table?",hu:"Kézi vonalillesztési számítások végzésekor milyen értékeket kell kiszámolni az összefoglaló táblázat harmadik és negyedik oszlopában?"},a:{en:"The squares of the mesh points ($x_i^2$) and the products of the coordinates ($x_i y_i$).",hu:"A hálópontok négyzete ($x_i^2$) és a koordináták szorzata ($x_i y_i$)."}},{q:{en:"In Example 9.2, for the data set with $n=6$, what were the final calculated values for the slope $a$ and intercept $b$?",hu:"A 9.2. példában a $n=6$ adathalmaz esetében mik voltak a $a$ lejtő és a $b$ metszés végső számított értékei?"},a:{en:"$a = 0.630243$ and $b = 0.542163$",hu:"$a = 0.630243$ és $b = 0.542163$"}},{q:{en:"How is the fitting error calculated after finding the optimal parameters $\\bar{a}$ and $\\bar{b}$?",hu:"Hogyan történik az illesztési hiba kiszámítása az optimális $\\bar{a}$ és $\\bar{b}$ paraméterek megtalálása után?"},a:{en:"By evaluating the sum of squares $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$.",hu:"A $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$ négyzetösszeg kiértékelésével."}},{q:{en:"In Example 9.2, what was the numerical value of the final error of the fitting?",hu:"A 9.2. példában mekkora volt az illesztés végső hibájának számértéke?"},a:{en:"$0.124691$",hu:"$0.124691$"}},{q:{en:"The points where the function values are measured are called the _____ points.",hu:"Azokat a pontokat, ahol a függvényértékeket mérik, _____-pontoknak nevezzük."},a:{en:"mesh",hu:"háló"}},{q:{en:"If a physical process is suspected to be a second-degree polynomial, how many parameters must be determined?",hu:"Ha egy fizikai folyamatról feltételezzük, hogy másodfokú polinom, hány paramétert kell meghatározni?"},a:{en:"Three parameters (the coefficients of the polynomial).",hu:"Három paraméter (a polinom együtthatói)."}},{q:{en:"True or False: The Gaussian normal equations constitute a non-linear system of equations.",hu:"Igaz vagy hamis: A Gauss-féle normálegyenletek nemlineáris egyenletrendszert alkotnak."},a:{en:"False, it is a linear system for the parameters $a$ and $b$.",hu:"Hamis, ez egy lineáris rendszer a $a$ és $b$ paraméterekhez."}},{q:{en:"What property of the least square error $F(\\mathbf{a})$ allows the use of derivatives to find its minimum?",hu:"A $F(\\mathbf{a})$ legkisebb négyzetes hibának melyik tulajdonsága teszi lehetővé, hogy deriváltak segítségével megtaláljuk a minimumát?"},a:{en:"It is continuously partially differentiable.",hu:"Folyamatosan részlegesen differenciálható."}},{q:{en:"The determinant of the coefficient matrix $d$ is given by the determinant of which $2 \\times 2$ matrix?",hu:"A $d$ együttható mátrix determinánsát melyik $2 \\times 2$ mátrix determinánsa adja meg?"},a:{en:"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$",hu:"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$"}},{q:{en:"What is the Hungarian term for 'curve fitting' mentioned in the source material?",hu:"Mi a forrásanyagban említett magyar nyelvű „görbeillesztés” kifejezés?"},a:{en:"görbeillesztés",hu:"görbeillesztés"}},{q:{en:"In the Hungarian source text, what is the term for 'Method of Least Squares'?",hu:"Mi a magyar forrásszövegben a „Legkisebb négyzetek módszere” kifejezés?"},a:{en:"legkisebb négyzetek módszere",hu:"legkisebb négyzetek módszere"}},{q:{en:"According to the CBS inequality, $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____.",hu:"A CBS egyenlőtlenség szerint $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____."},a:{en:"$\\sum_{i=0}^{n} x_i^2$",hu:"$\\sum_{i=0}^{n} x_i^2$"}},{q:{en:"If all mesh points $x_i$ were identical, what would be the value of the determinant $d$?",hu:"Ha minden $x_i$ hálópont azonos lenne, mi lenne a $d$ determináns értéke?"},a:{en:"Zero.",hu:"Nulla."}},{q:{en:"In the provided line fitting examples, what is the range of the index $i$ if there are 8 data points?",hu:"A megadott sorillesztési példákban mekkora a $i$ index tartománya, ha 8 adatpont van?"},a:{en:"$i = 0, 1, \\ldots, 7$",hu:"$i = 0, 1, \\ldots, 7$"}},{q:{en:"What is the next step after calculating the sums of $x_i, y_i, x_i^2,$ and $x_i y_i$ in the least squares procedure?",hu:"Mi a következő lépés $x_i, y_i, x_i^2,$ és $x_i y_i$ összegének kiszámítása után a legkisebb négyzetek eljárásban?"},a:{en:"Substituting the sums into the Gaussian normal equations to solve for $a$ and $b$.",hu:"A $a$ és $b$ megoldásához az összegeket behelyettesítjük a Gauss-normál egyenletekbe."}},{q:{en:"In the slide example 'Egyenes illesztése', for the sums $\\sum x_i = 23.5$ and $\\sum y_i = 19.7$ with 8 points, what was the value of $b$'s coefficient in the second equation?",hu:"Az „Egyenes illesztése” diapéldában a $\\sum x_i = 23.5$ és $\\sum y_i = 19.7$ 8 pontos összegekre mennyi volt a $b$ együttható értéke a második egyenletben?"},a:{en:"8",hu:"8"}},{q:{en:"What does the second Gaussian normal equation $\\sum (ax_i + b - y_i) = 0$ imply about the average error?",hu:"Mit jelent a $\\sum (ax_i + b - y_i) = 0$ második Gauss-normálegyenlet az átlagos hibáról?"},a:{en:"It implies that the sum of the residuals (deviations) is zero.",hu:"Ez azt jelenti, hogy a maradékok (eltérések) összege nulla."}},{q:{en:"Term: Mesh points",hu:"Fogalom: Hálópontok"},a:{en:"Definition: The specific $x$-coordinates ($x_i$) at which measurement values ($y_i$) are obtained.",hu:"Definíció: A konkrét $x$ koordináták ($x_i$), amelyeken a mérési értékeket ($y_i$) kapjuk."}},{q:{en:"Term: Gaussian normal equations",hu:"Fogalom: Gauss-normál egyenletek"},a:{en:"Definition: A system of linear equations used to find the parameters that minimize the sum of squared residuals.",hu:"Definíció: Lineáris egyenletrendszer, amely a négyzetes maradékok összegét minimalizáló paraméterek megtalálására szolgál."}},{q:{en:"Why is the method of least squares preferred over minimizing the maximum deviation ($F_1$)?",hu:"Miért részesítik előnyben a legkisebb négyzetek módszerét a maximális eltérés minimalizálásával szemben ($F_1$)?"},a:{en:"The quadratic function $F(\\mathbf{a})$ is easier to handle analytically using calculus.",hu:"A $F(\\mathbf{a})$ másodfokú függvény könnyebben kezelhető analitikusan kalkulus segítségével."}},{q:{en:"What is the result of applying Theorem 8.2 to the discriminant $D$ in the proof of line fitting?",hu:"Mi az eredménye, ha a 8.2 Tételt alkalmazzuk a $D$ diszkriminánsra a vonalillesztés bizonyítása során?"},a:{en:"It identifies that the stationary point $(\\bar{a}, \\bar{b})$ is a local extremum.",hu:"Azonosítja, hogy a $(\\bar{a}, \\bar{b})$ állópont egy lokális szélsőség."}},{q:{en:"How does Corollary 8.11 extend the findings of the local minimum in line fitting?",hu:"Hogyan terjeszti ki a 8.11 következtetés a lokális minimum megállapításait a vonalillesztésben?"},a:{en:"It confirms that the local minimum is also the global minimum for the error function $F$.",hu:"Megerősíti, hogy a helyi minimum egyben a $F$ hibafüggvény globális minimuma is."}},{q:{en:"In the example calculation table, what represents the sum of all elements in the $y_i$ column?",hu:"A példaszámítási táblázatban mi jelenti a $y_i$ oszlop összes elemének összegét?"},a:{en:"$\\sum_{i=0}^{n} y_i$",hu:"$\\sum_{i=0}^{n} y_i$"}},{q:{en:"Which variable represents the independent measurement coordinate in the formula $g(x; \\mathbf{a})$?",hu:"Melyik változó reprezentálja a független mérési koordinátát a $g(x; \\mathbf{a})$ képletben?"},a:{en:"$x$",hu:"$x$"}},{q:{en:"In the Hungarian text, what is the term used for 'Gaussian normal equations'?",hu:"Mi a magyar szövegben a Gauss-féle normálegyenletek kifejezés?"},a:{en:"Gauss-féle normálegyenletek",hu:"Gauss-féle normálegyenletek"}},{q:{en:"If $n=7$, how many terms are included in the summation $\\sum_{i=0}^{n} x_i$?",hu:"Ha $n=7$, hány kifejezést tartalmaz a $\\sum_{i=0}^{n} x_i$ összegzés?"},a:{en:"8 terms.",hu:"8 kifejezés."}},{q:{en:"What is the primary technical problem solved by switching from absolute error to squared error?",hu:"Mi az az elsődleges technikai probléma, amelyet az abszolút hibáról a négyzetes hibára való átállással megoldunk?"},a:{en:"Non-differentiability at points where $g(x_i) = y_i$.",hu:"Nem differenciálhatóság azokon a pontokon, ahol a $g(x_i) = y_i$."}},{q:{en:"To find the minimum of $F(a, b)$, we must set the _____ derivatives to zero.",hu:"A $F(a, b)$ minimumának meghatározásához a _____ deriváltokat nullára kell állítanunk."},a:{en:"partial",hu:"részleges"}},{q:{en:"What is the graphical interpretation of the 'best fitted curve'?",hu:"Mi a „legjobban illeszkedő görbe” grafikus értelmezése?"},a:{en:"The curve for which the sum of the squares of the vertical distances from the data points is minimized.",hu:"Az a görbe, amelynél az adatpontoktól mért függőleges távolságok négyzetösszege minimalizálva van."}},{q:{en:"In Example 9.2 (7 points), what was the value of $\\sum x_i^2$ used in the normal equations?",hu:"A 9.2. példában (7 pont) mekkora volt a normálegyenletekben használt $\\sum x_i^2$ értéke?"},a:{en:"89.5",hu:"89.5"}},{q:{en:"In Example 9.2 (7 points), what was the value of $\\sum x_i$ used in the normal equations?",hu:"A 9.2. példában (7 pont) mekkora volt a normálegyenletekben használt $\\sum x_i$ értéke?"},a:{en:"20.0",hu:"20.0"}}],polynomial:[{q:{en:"In polynomial curve fitting, what parameters are sought to minimize the least square error function $F$?",hu:"A polinomiális görbeillesztésnél milyen paramétereket keresünk a $F$ legkisebb négyzetes hibafüggvény minimalizálására?"},a:{en:"The coefficients $a_m, a_{m-1}, \\ldots, a_0$.",hu:"Az együtthatók $a_m, a_{m-1}, \\ldots, a_0$."}},{q:{en:"What is the least square error function $F(a_m, \\ldots, a_0)$ used in polynomial curve fitting?",hu:"Mi a $F(a_m, \\ldots, a_0)$ legkisebb négyzetes hibafüggvény, amelyet polinomiális görbeillesztésnél használnak?"},a:{en:"$F(a_m, \\ldots, a_0) := \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$",hu:"$F(a_m, \\ldots, a_0):= \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$"}},{q:{en:"When $n \\le m$ for given data points $(x_i, y_i)$, how can the polynomial coefficients be determined?",hu:"Amikor $n \\le m$ adott $(x_i, y_i)$ adatpontokra, hogyan határozhatók meg a polinomiális együtthatók?"},a:{en:"By polynomial interpolation.",hu:"Polinom interpolációval."}},{q:{en:"What is the minimal value of the error function $F$ if $n \\le m$?",hu:"Mennyi a $F$ hibafüggvény minimális értéke, ha $n \\le m$?"},a:{en:"$0$",hu:"$0$"}},{q:{en:"Why is the case $m < n$ primarily investigated in polynomial curve fitting?",hu:"Miért a $m < n$ esetet elsősorban polinomiális görbeillesztésben vizsgálják?"},a:{en:"Because the error function $F$ generally does not reach zero in this case.",hu:"Mivel a $F$ hibafüggvény ebben az esetben általában nem éri el a nullát."}},{q:{en:"According to the source, at what points can the function $F$ have an extremum?",hu:"A forrás szerint a $F$ függvény mely pontokon lehet extrémuma?"},a:{en:"Where all of its partial derivatives are equal to zero.",hu:"Ahol az összes parciális deriváltja egyenlő nullával."}},{q:{en:"What is the general expression for the partial derivative $\\frac{\\partial F}{\\partial a_k}$ in polynomial fitting?",hu:"Mi a $\\frac{\\partial F}{\\partial a_k}$ parciális derivált általános kifejezése polinomiális illesztésben?"},a:{en:"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$",hu:"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$"}},{q:{en:"What system of linear equations is obtained by setting the partial derivatives of $F$ to zero?",hu:"Milyen lineáris egyenletrendszert kapunk, ha a $F$ parciális deriváltjait nullára állítjuk?"},a:{en:"The normal equations.",hu:"A normál egyenletek."}},{q:{en:"In the normal equations, what is the right-hand side of the equation corresponding to the partial derivative of $a_k$?",hu:"A normál egyenletekben melyik a $a_k$ parciális deriváltjának megfelelő egyenlet jobb oldala?"},a:{en:"$\\sum_{i=0}^{n} x_i^k y_i$",hu:"$\\sum_{i=0}^{n} x_i^k y_i$"}},{q:{en:"The coefficient matrix $\\mathbf{A}$ of the normal equations is invertable if it is shown to be _____.",hu:"A normálegyenletek $\\mathbf{A}$ együtthatómátrixa megfordítható, ha _____."},a:{en:"positive definite",hu:"pozitív határozott"}},{q:{en:"What is the formula for the $jk$-th element of the coefficient matrix $\\mathbf{A}$ in polynomial fitting?",hu:"Mi a képlete a $\\mathbf{A}$ együtthatómátrix $jk$-edik elemének polinomiális illesztésben?"},a:{en:"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ where $j, k = 1, 2, \\ldots, m + 1$",hu:"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ ahol $j, k = 1, 2, \\ldots, m + 1$"}},{q:{en:"In the proof of the existence of a unique solution, what expression represents the quadratic form $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$?",hu:"Egy egyedi megoldás létezésének bizonyítására melyik kifejezés reprezentálja a $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$ másodfokú alakot?"},a:{en:"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$",hu:"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$"}},{q:{en:"Under what condition on the points $x_i$ does the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ being zero at all $x_i$ imply $z_j = 0$?",hu:"Milyen feltétel mellett a $x_i$ pontokon az a $p(x):= \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ polinom, amely egyáltalán nulla $x_i$, azt jelenti, hogy $z_j = 0$?"},a:{en:"If there are at least $m + 1$ distinct mesh points.",hu:"Ha legalább $m + 1$ különálló hálópontok vannak."}},{q:{en:"Which mathematical theorem implies $p(x) = 0$ for all $x$ if it has $m+1$ roots but degree at most $m$?",hu:"Melyik matematikai tétel tartalmazza a $p(x) = 0$-t minden $x$-re, ha $m+1$ gyökei vannak, de legfeljebb $m$ foka van?"},a:{en:"The Fundamental Theorem of Algebra.",hu:"Az algebra alaptétele."}},{q:{en:"What is the relationship between the Hessian matrix $F''(\\bar{\\mathbf{a}})$ and the coefficient matrix $\\mathbf{A}$?",hu:"Mi a kapcsolat a $F''(\\bar{\\mathbf{a}})$ Hess-mátrix és a $\\mathbf{A}$ együtthatómátrix között?"},a:{en:"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$",hu:"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$"}},{q:{en:"Why is the local minimum of the error function $F$ also its global minimum?",hu:"Miért a $F$ hibafüggvény lokális minimuma a globális minimuma is?"},a:{en:"Because $F$ is a quadratic function.",hu:"Mivel a $F$ egy másodfokú függvény."}},{q:{en:"Theorem 9.3 states that a unique solution exists for polynomial fitting if $m < n$ and there are at least _____ distinct mesh points.",hu:"A 9.3. tétel kimondja, hogy létezik egy egyedi megoldás a polinomiális illesztésre, ha $m < n$ és legalább _____ különálló hálópont van."},a:{en:"$m + 1$",hu:"$m + 1$"}},{q:{en:"What is the sum of the squared differences between the predicted and actual $y$-values called in this context?",hu:"Mennyi az előrejelzett és a tényleges $y$-értékek négyzetes különbségeinek összege ebben az összefüggésben?"},a:{en:"The error of the fitting.",hu:"Az illesztés hibája."}},{q:{en:"In the provided parabola fitting example ($m=2$), how many equations are in the resulting system?",hu:"A megadott parabolaillesztési példában ($m=2$) hány egyenlet található a kapott rendszerben?"},a:{en:"Three equations.",hu:"Három egyenlet."}},{q:{en:"In a parabola fitting problem ($y = ax^2 + bx + c$), what does the variable $c$ represent in the coefficient vector $(a, b, c)$?",hu:"Egy parabolaillesztési feladatban ($y = ax^2 + bx + c$) mit reprezentál a $c$ változó a $(a, b, c)$ együtthatóvektorban?"},a:{en:"The constant term ($a_0$).",hu:"Az állandó tag ($a_0$)."}},{q:{en:"Formula: Error of the fitting",hu:"Képlet: Szerelési hiba"},a:{en:"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ where $P(x)$ is the calculated polynomial.",hu:"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ ahol $P(x)$ a számított polinom."}},{q:{en:"The matrix $\\mathbf{A}$ is symmetric because its $jk$-th element depends on the _____ of indices $j$ and $k$.",hu:"A $\\mathbf{A}$ mátrix szimmetrikus, mert a $jk$-edik eleme a $j$ és $k$ indexek _____ értékétől függ."},a:{en:"sum",hu:"összeg"}},{q:{en:"What value of $n$ corresponds to the total number of data points being $7$?",hu:"A $n$ mekkora értéke felel meg a $7$ adatpontok teljes számának?"},a:{en:"$n = 6$",hu:"$n = 6$"}},{q:{en:"If the normal equations for a parabola are $249.1250a + 77.750b + 27.50c = -7.225$, what does $27.50$ represent in terms of $x_i$?",hu:"Ha egy parabola normál egyenlete $249.1250a + 77.750b + 27.50c = -7.225$, mit jelent a $27.50$ a $x_i$ kifejezésben?"},a:{en:"The sum of $x_i^2$.",hu:"$x_i^2$ összege."}},{q:{en:"What determines the number of variables in the error function $F$ for a polynomial of degree $m$?",hu:"Mi határozza meg a változók számát a $F$ hibafüggvényben $m$ fokú polinom esetén?"},a:{en:"The number of coefficients, which is $m + 1$.",hu:"Az együtthatók száma, ami $m + 1$."}}],nonlinear:[{q:{en:"In the context of nonlinear curve fitting, what defines the least square error function $F(a, b)$ for an exponential function $b e^{ax}$?",hu:"A nemlineáris görbeillesztéssel összefüggésben mi határozza meg a $F(a, b)$ legkisebb négyzetes hibafüggvényt egy $b e^{ax}$ exponenciális függvényre?"},a:{en:"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$",hu:"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$"}},{q:{en:"Why can't the normal equations for the function $y = b e^{ax}$ be solved analytically?",hu:"Miért nem lehet analitikusan megoldani a $y = b e^{ax}$ függvény normálegyenleteit?"},a:{en:"They form a nonlinear system of equations.",hu:"Nemlineáris egyenletrendszert alkotnak."}},{q:{en:"What numerical method can be used to minimize the nonlinear error function $F$ if linearization is not used?",hu:"Milyen numerikus módszerrel minimalizálható a $F$ nemlineáris hibafüggvény, ha nem használunk linearizálást?"},a:{en:"Newton's method",hu:"Newton módszere"}},{q:{en:"What is the core idea of the 'linearization method' in curve fitting?",hu:"Mi a „linearizációs módszer” alapötlete a görbeillesztésben?"},a:{en:"Transforming a nonlinear equation into a linear form by applying functions like the natural logarithm.",hu:"Nemlineáris egyenlet átalakítása lineáris formává olyan függvények alkalmazásával, mint a természetes logaritmus."}},{q:{en:"Applying the natural logarithm to both sides of $y = b e^{ax}$ results in what linear relationship?",hu:"Milyen lineáris összefüggést kapunk, ha a természetes logaritmust alkalmazzuk a $y = b e^{ax}$ mindkét oldalára?"},a:{en:"$\\ln y = \\ln b + ax$",hu:"$\\ln y = \\ln b + ax$"}},{q:{en:"When linearizing $y = b e^{ax}$, what is the substituted variable $Y$?",hu:"A $y = b e^{ax}$ linearizálása során mi a $Y$ helyettesített változó?"},a:{en:"$Y = \\ln y$",hu:"$Y = \\ln y$"}},{q:{en:"When linearizing $y = b e^{ax}$, what is the substituted variable $B$ representing the intercept?",hu:"A $y = b e^{ax}$ linearizálása során mi az a $B$ helyettesített változó, amely a metszéspontot reprezentálja?"},a:{en:"$B = \\ln b$",hu:"$B = \\ln b$"}},{q:{en:"In the linearization of $y = b e^{ax}$, how is the original parameter $a$ related to the slope $A$ of the fitted line?",hu:"A $y = b e^{ax}$ linearizálásában hogyan kapcsolódik az eredeti $a$ paraméter az illesztett vonal $A$ meredekségéhez?"},a:{en:"$a = A$",hu:"$a = A$"}},{q:{en:"After finding the intercept $B$ from a linearized fit of $b e^{ax}$, how is the original parameter $b$ calculated?",hu:"Miután megtalálta a $B$ metszéspontot a $b e^{ax}$ linearizált illesztéséből, hogyan számítják ki az eredeti $b$ paramétert?"},a:{en:"$b = e^B$",hu:"$b = e^B$"}},{q:{en:"True or False: The linearization method provides the exact same solution as the original nonlinear least squares problem.",hu:"Igaz vagy hamis: A linearizációs módszer pontosan ugyanazt a megoldást adja, mint az eredeti nemlineáris legkisebb négyzetek problémája."},a:{en:"False",hu:"Hamis"}},{q:{en:"What is the general form of the power function discussed in the material?",hu:"Mi az anyagban tárgyalt hatványfüggvény általános formája?"},a:{en:"$y = b x^a$",hu:"$y = b x^a$"}},{q:{en:"What linear relationship is obtained by taking the natural logarithm of the power function $y = b x^a$?",hu:"Milyen lineáris összefüggést kapunk a $y = b x^a$ hatványfüggvény természetes logaritmusának felvételével?"},a:{en:"$\\ln y = a \\ln x + \\ln b$",hu:"$\\ln y = a \\ln x + \\ln b$"}},{q:{en:"In the linearization of the power function $y = b x^a$, what is the substituted variable $X$?",hu:"A $y = b x^a$ hatványfüggvény linearizálásában mi a behelyettesített $X$ változó?"},a:{en:"$X = \\ln x$",hu:"$X = \\ln x$"}},{q:{en:"In the linearization of the power function $y = b x^a$, what is the substituted variable $Y$?",hu:"A $y = b x^a$ hatványfüggvény linearizálásában mi a behelyettesített $Y$ változó?"},a:{en:"$Y = \\ln y$",hu:"$Y = \\ln y$"}},{q:{en:"When fitting $y = b x^a$ via linearization, the slope $A$ of the line $Y = AX + B$ corresponds to which original parameter?",hu:"A $y = b x^a$ linearizálással történő illesztése esetén a $Y = AX + B$ vonal $A$ meredeksége melyik eredeti paraméternek felel meg?"},a:{en:"$a$",hu:"$a$"}},{q:{en:"For the power function $y = b x^a$, the intercept $B$ in the linearized model $Y = AX + B$ is equal to _____.",hu:"A $y = b x^a$ teljesítményfüggvény esetében a $B$ metszéspont a $Y = AX + B$ linearizált modellben egyenlő _____."},a:{en:"$\\ln b$",hu:"$\\ln b$"}},{q:{en:"Which set of data points is used to fit a line when linearizing the power function $b x^a$?",hu:"Melyik adatpontkészletet használjuk egy egyeneshez a $b x^a$ hatványfüggvény linearizálása során?"},a:{en:"$(\\ln x_i, \\ln y_i)$",hu:"$(\\ln x_i, \\ln y_i)$"}},{q:{en:"In the exponential fitting example, what were the resulting linearized parameters $A$ and $B$?",hu:"Az exponenciális illesztési példában melyek voltak a kapott $A$ és $B$ linearizált paraméterek?"},a:{en:"$A = 0.528951$ and $B = -0.997597$",hu:"$A = 0.528951$ és $B = -0.997597$"}},{q:{en:"What was the final exponential function obtained in Example 9.5 using linearization?",hu:"Mi volt a 9.5. példában linearizálással kapott végső exponenciális függvény?"},a:{en:"$y = 0.368765 e^{0.528951x}$",hu:"$y = 0.368765 e^{0.528951x}$"}},{q:{en:"In Example 9.5, what was the calculated error of the original nonlinear fitting for the result $0.368765 e^{0.528951x}$?",hu:"A 9.5. példában mekkora volt az eredeti nemlineáris illesztés számított hibája a $0.368765 e^{0.528951x}$ eredményre?"},a:{en:"$0.165543$",hu:"$0.165543$"}},{q:{en:"In Example 9.6, what were the resulting linearized parameters $A$ and $B$ for the power function?",hu:"A 9.6. példában melyek voltak az eredményül kapott $A$ és $B$ linearizált paraméterek a hatványfüggvényhez?"},a:{en:"$A = 0.676257$ and $B = 0.123088$",hu:"$A = 0.676257$ és $B = 0.123088$"}},{q:{en:"What was the final power function obtained in Example 9.6?",hu:"Mi volt a 9.6. példában kapott végső hatványfüggvény?"},a:{en:"$y = 1.130984 x^{0.676257}$",hu:"$y = 1.130984 x^{0.676257}$"}},{q:{en:"In the power function example, what was the calculated error of the linear fitting?",hu:"A hatványfüggvény példájában mekkora volt a lineáris illesztés számított hibája?"},a:{en:"$0.007279$",hu:"$0.007279$"}},{q:{en:"What was the calculated error of the original nonlinear fitting in the power function example?",hu:"Mekkora volt az eredeti nemlineáris illesztés számított hibája a hatványfüggvény példájában?"},a:{en:"$0.019616$",hu:"$0.019616$"}},{q:{en:"Which equation represents one of the critical point conditions for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $b$?",hu:"Melyik egyenlet jelenti a $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ egyik kritikus pontfeltételét a $b$ vonatkozásában?"},a:{en:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$",hu:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$"}},{q:{en:"Which equation represents the critical point condition for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $a$?",hu:"Melyik egyenlet jelenti a $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ kritikus pontfeltételét a $a$ vonatkozásában?"},a:{en:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$",hu:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$"}},{q:{en:"In linearizing $y = b e^{ax}$, the data points $(x_i, y_i)$ are transformed into _____.",hu:"A $y = b e^{ax}$ linearizálása során a $(x_i, y_i)$ adatpontok _____-ba kerülnek."},a:{en:"$(x_i, \\ln y_i)$",hu:"$(x_i, \\ln y_i)$"}},{q:{en:"The Gaussian normal equations for linear fitting $Y = AX + B$ generally take what form for a set of $n+1$ points?",hu:"A $Y = AX + B$ lineáris illesztésre vonatkozó Gauss-normálegyenletek általában milyen formát öltenek a $n+1$ pontok halmazára?"},a:{en:"A $2 \\times 2$ linear system for unknowns $A$ and $B$.",hu:"Egy $2 \\times 2$ lineáris rendszer az ismeretlen $A$ és $B$ számára."}},{q:{en:"What is the coefficient of $B$ in the second Gaussian normal equation ($11.5A + 6B = 0.097352$) from Example 9.5?",hu:"Mekkora a $B$ együtthatója a 9.5. példa második Gauss-normálegyenletében ($11.5A + 6B = 0.097352$)?"},a:{en:"$6$ (representing the number of data points $n+1$)",hu:"$6$ (a $n+1$ adatpontok számát jelenti)"}},{q:{en:"Concept: Critical Points of $F(a, b)$",hu:"Koncepció: A $F(a, b)$ kritikus pontjai"},a:{en:"Definition: The points where the partial derivatives of the error function with respect to $a$ and $b$ are zero.",hu:"Definíció: Azok a pontok, ahol a hibafüggvény parciális deriváltjai $a$ és $b$ vonatkozásában nullák."}},{q:{en:"Why is linearization used in practice despite not being the 'original' nonlinear solution?",hu:"Miért alkalmazzák a linearizálást a gyakorlatban annak ellenére, hogy nem az „eredeti” nemlineáris megoldás?"},a:{en:"It is easy to compute as it only requires solving a linear system.",hu:"Könnyen kiszámítható, mivel csak egy lineáris rendszer megoldását igényli."}},{q:{en:"When performing linearized fitting for $y = b x^a$, what value does the sum of $(\\ln x_i)^2$ represent in the normal equations?",hu:"A $y = b x^a$ linearizált illesztése során milyen értéket képvisel a $(\\ln x_i)^2$ összege a normál egyenletekben?"},a:{en:"The coefficient of $A$ in the first normal equation.",hu:"A $A$ együtthatója az első normálegyenletben."}},{q:{en:"In Example 9.5, the sum of $x_i$ was $11.5$. This value appears as the coefficient for which variables in the normal equations?",hu:"A 9.5. példában a $x_i$ összege $11.5$ volt. Ez az érték mely változók együtthatójaként jelenik meg a normál egyenletekben?"},a:{en:"$B$ in the first equation and $A$ in the second equation.",hu:"$B$ az első egyenletben és $A$ a második egyenletben."}},{q:{en:"To find the error of the nonlinear fitting for $y = f(x)$, we calculate the sum of the squares of the _____.",hu:"A $y = f(x)$ nemlineáris illesztésének hibájának meghatározásához kiszámítjuk a _____ négyzeteinek összegét."},a:{en:"Residuals ($f(x_i) - y_i$)",hu:"Maradék ($f(x_i) - y_i$)"}},{q:{en:"How is the variable $B$ related to the original parameter $b$ in both the exponential and power function linearization examples?",hu:"Hogyan kapcsolódik a $B$ változó az eredeti $b$ paraméterhez mind az exponenciális, mind a hatványfüggvény linearizálási példájában?"},a:{en:"$B = \\ln b$",hu:"$B = \\ln b$"}},{q:{en:"What was the total sum of $x_i \\ln y_i$ in the table for Example 9.5?",hu:"Mennyi volt a $x_i \\ln y_i$ teljes összege a 9.5. példa táblázatában?"},a:{en:"$5.586294$",hu:"$5.586294$"}},{q:{en:"What was the total sum of $(\\ln x_i)^2$ in the table for Example 9.6?",hu:"Mennyi volt a $(\\ln x_i)^2$ teljes összege a 9.6. példa táblázatában?"},a:{en:"$2.691393$",hu:"$2.691393$"}},{q:{en:"In the normal equations for Example 9.6 ($1.727221A + 5B = 1.783485$), what does the constant $5$ represent?",hu:"A 9.6. példa normálegyenleteiben ($1.727221A + 5B = 1.783485$) mit jelent a $5$ konstans?"},a:{en:"The total number of data points ($n=4$, so $n+1=5$).",hu:"Az adatpontok teljes száma ($n=4$, tehát $n+1=5$)."}},{q:{en:"If we have data points $(0.5, 0.7)$ for a power function fit, what is the value of the transformed point $(\\ln x_i, \\ln y_i)$?",hu:"Ha van $(0.5, 0.7)$ adatpontunk egy hatványfüggvény illesztéshez, akkor mekkora a $(\\ln x_i, \\ln y_i)$ transzformált pont értéke?"},a:{en:"$(-0.693147, -0.356675)$",hu:"$(-0.693147, -0.356675)$"}},{q:{en:"The linearized error $\\sum (A X_i + B - Y_i)^2$ for $b e^{ax}$ uses $Y_i$ as _____.",hu:"A $b e^{ax}$ $\\sum (A X_i + B - Y_i)^2$ linearizált hibája a $Y_i$ értéket használja _____-ként."},a:{en:"$\\ln y_i$",hu:"$\\ln y_i$"}},{q:{en:"True or False: The normal equations for a linear fit $Y = AX + B$ are always linear.",hu:"Igaz vagy hamis: A $Y = AX + B$ lineáris illeszkedés normál egyenletei mindig lineárisak."},a:{en:"True",hu:"Igaz"}},{q:{en:"What is the primary advantage of Newton's method over linearization for these problems?",hu:"Mi a Newton-módszer elsődleges előnye a linearizálással szemben ezeknél a problémáknál?"},a:{en:"It can minimize the original nonlinear error function $F(a, b)$ directly.",hu:"Közvetlenül minimalizálhatja az eredeti $F(a, b)$ nemlineáris hibafüggvényt."}},{q:{en:"In the linearization of $y = b e^{ax}$, the transformed variable $X$ is simply _____.",hu:"A $y = b e^{ax}$ linearizálásában a $X$ transzformált változó egyszerűen _____."},a:{en:"$x$",hu:"$x$"}},{q:{en:"The error of the linear fitting for the power function in Example 9.6 is calculated as $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. What is the value of $A$ used?",hu:"A 9.6. példában szereplő teljesítményfüggvény lineáris illesztésének hibáját a következőképpen számítjuk ki: $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. Mennyi a használt $A$ értéke?"},a:{en:"$0.676257$",hu:"$0.676257$"}},{q:{en:"What does the term $\\ln b$ represent in the equation $\\ln y = a \\ln x + \\ln b$?",hu:"Mit jelent a $\\ln b$ kifejezés a $\\ln y = a \\ln x + \\ln b$ egyenletben?"},a:{en:"The y-intercept of the line in the log-log plot.",hu:"Az egyenes y-metszete a log-log diagramban."}},{q:{en:"In the exponential fit table, what was the value of $\\ln y_i$ for $y_i = 0.3$?",hu:"Az exponenciális illesztési táblázatban mekkora volt a $\\ln y_i$ értéke $y_i = 0.3$ esetén?"},a:{en:"$-1.203973$",hu:"$-1.203973$"}},{q:{en:"In the exponential fit table, what was the value of $x_i \\ln y_i$ for $x_i = 4.0$ and $y_i = 2.7$?",hu:"Az exponenciális illeszkedési táblázatban mekkora volt a $x_i \\ln y_i$ értéke $x_i = 4.0$ és $y_i = 2.7$ esetén?"},a:{en:"$3.973007$",hu:"$3.973007$"}},{q:{en:"In the power function table, what was the value of $\\ln x_i \\ln y_i$ for $x_i = 0.5$ and $y_i = 0.7$?",hu:"A teljesítményfüggvény táblázatban mekkora volt a $\\ln x_i \\ln y_i$ értéke $x_i = 0.5$ és $y_i = 0.7$ esetén?"},a:{en:"$0.247228$",hu:"$0.247228$"}},{q:{en:"The sum of $\\ln y_i$ in Example 9.5 was $0.097352$. Where does this value appear in the normal equations?",hu:"A 9.5. példában a $\\ln y_i$ összege $0.097352$ volt. Hol jelenik meg ez az érték a normál egyenletekben?"},a:{en:"As the constant term on the right side of the second normal equation.",hu:"Mint a konstans tag a második normálegyenlet jobb oldalán."}},{q:{en:"In the power function example, what was the sum of $\\ln x_i$?",hu:"A hatványfüggvény példájában mekkora volt a $\\ln x_i$ összege?"},a:{en:"$1.727221$",hu:"$1.727221$"}},{q:{en:"What is the value of $e^{0.123088}$ used to find $b$ in Example 9.6?",hu:"Mekkora a $e^{0.123088}$ értéke a $b$ meghatározásához a 9.6. példában?"},a:{en:"$1.130984$",hu:"$1.130984$"}},{q:{en:"What is the value of $e^{-0.997597}$ used to find $b$ in Example 9.5?",hu:"Mekkora a $e^{-0.997597}$ értéke a $b$ meghatározásához a 9.5 példában?"},a:{en:"$0.368765$",hu:"$0.368765$"}},{q:{en:"When fitting $b e^{ax}$, if $a$ is positive, the function represents _____.",hu:"$b e^{ax}$ illesztése esetén, ha a $a$ pozitív, a függvény _____."},a:{en:"Exponential growth",hu:"Exponenciális növekedés"}},{q:{en:"In the linearization of $y = b x^a$, both variables $x$ and $y$ must be _____ for the logarithms to be defined.",hu:"A $y = b x^a$ linearizálásánál mindkét $x$ és $y$ változónak _____ értékűnek kell lennie a logaritmus meghatározásához."},a:{en:"Positive",hu:"Pozitív"}},{q:{en:"The process of determining the best-fitting curve by minimizing the sum of the squares of the vertical deviations is called the _____.",hu:"A legjobban illeszkedő görbe meghatározásának folyamatát a függőleges eltérések négyzetösszegének minimalizálásával _____-nak nevezzük."},a:{en:"Method of Least Squares",hu:"A legkisebb négyzetek módszere"}},{q:{en:"The critical points of $F(a, b)$ are found by setting the _____ equal to zero.",hu:"A $F(a, b)$ kritikus pontjait úgy találjuk meg, hogy a _____-t nullára állítjuk."},a:{en:"Partial derivatives (gradient)",hu:"Részleges származékok (gradiens)"}}]},I={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset",hu:"Eredeti"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz"},showQuestion:{en:"Show question",hu:"Kérdés"}};function qn({deck:i}){const{t:n,lang:e}=V(),t=vn[i]??[],[l,s]=F.useState(null);return t.length?m.jsxs("div",{className:"deck glossary-deck",children:[m.jsx("h4",{children:n(I.glossary)}),m.jsx("div",{className:"deck-list",children:t.map((a,o)=>{const r=l===o;return m.jsxs("button",{className:"deck-item",onClick:()=>s(r?null:o),children:[m.jsxs("div",{className:"deck-item__head",children:[m.jsx("strong",{children:m.jsx(P,{markdown:a.term[e]})}),m.jsx("span",{children:r?"−":"+"})]}),r&&m.jsx("div",{className:"deck-item__body",children:m.jsx(P,{markdown:a.def[e]})})]},o)})})]}):null}const _e=i=>Array.from({length:i},(n,e)=>e);function jn(i){const n=_e(i);for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function An({deck:i}){const{t:n,lang:e}=V(),t=wn[i]??[],[l,s]=F.useState(()=>_e(t.length)),[a,o]=F.useState(0),[r,u]=F.useState(!1),h=F.useMemo(()=>t[l[a]],[t,l,a]),$=p=>typeof p=="string"?p:p[e];if(!t.length)return null;const c=p=>{u(!1),o(d=>(d+p+t.length)%t.length)};return m.jsxs("div",{className:"deck flashcard-deck",children:[m.jsxs("div",{className:"deck__bar",children:[m.jsx("h4",{children:n(I.flashcards)}),m.jsxs("div",{className:"deck__ctrls",children:[m.jsxs("span",{className:"deck__count",children:[a+1," / ",t.length]}),m.jsx("button",{className:"btn",onClick:()=>{s(jn(t.length)),o(0),u(!1)},children:n(I.shuffle)}),m.jsx("button",{className:"btn",onClick:()=>{s(_e(t.length)),o(0),u(!1)},children:n(I.reset)})]})]}),m.jsxs("button",{className:"deck-card",onClick:()=>u(p=>!p),children:[m.jsx("div",{className:"deck-card__tag",children:n(r?I.answer:I.question)}),m.jsx(P,{markdown:$(r?h.a:h.q)})]}),m.jsxs("div",{className:"deck__nav",children:[m.jsx("button",{className:"btn",onClick:()=>c(-1),children:n(I.prev)}),m.jsx("button",{className:"btn btn--primary",onClick:()=>u(p=>!p),children:n(r?I.showQuestion:I.showAnswer)}),m.jsx("button",{className:"btn",onClick:()=>c(1),children:n(I.next)})]})]})}const Fn=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;

// Linear regression y = a*x + b on the given points; returns {a, b}.
pair<double, double> linreg(const Vec& x, const Vec& y) {
    int n = x.size();
    double sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (int i = 0; i < n; ++i) { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    double a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    return {a, (sy - a * sx) / n};
}

// Fit y ~ b*exp(a*t) via regression on ln(y).  Returns {a, b}.
pair<double, double> exp_fit(const Vec& t, const Vec& y) {
    Vec ly(y.size());
    for (size_t i = 0; i < y.size(); ++i) ly[i] = log(y[i]);
    auto [a, lnb] = linreg(t, ly);
    return {a, exp(lnb)};
}

int main() {
    Vec t = {0, 1, 2, 3}, y = {2.0, 4.1, 8.2, 15.9};
    auto [a, b] = exp_fit(t, y);
    cout.precision(4);
    cout << "a = " << a << ", b = " << b << "\\n";
}
`,Sn=`program exp_fit_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: t(n), y(n), a, b
  t = [0d0, 1d0, 2d0, 3d0]
  y = [2.0d0, 4.1d0, 8.2d0, 15.9d0]
  call linreg(t, log(y), n, a, b)        ! ln y = a t + ln b
  print '(A, F8.4, A, F8.4)', 'a = ', a, ', b = ', exp(b)
contains
  subroutine linreg(x, yy, m, a, b)
    integer, intent(in) :: m
    real(8), intent(in) :: x(m), yy(m)
    real(8), intent(out) :: a, b
    real(8) :: sx, sy, sxx, sxy
    sx = sum(x); sy = sum(yy); sxx = sum(x*x); sxy = sum(x*yy)
    a = (m*sxy - sx*sy)/(m*sxx - sx*sx)
    b = (sy - a*sx)/m
  end subroutine linreg
end program exp_fit_demo
`,Tn=`package main

import (
	"fmt"
	"math"
)

// Least-squares line fit z = slope*x + intercept.
func linFit(x, z []float64) (float64, float64) {
	n := float64(len(x))
	var sx, sz, sxx, sxz float64
	for i := range x {
		sx += x[i]
		sz += z[i]
		sxx += x[i] * x[i]
		sxz += x[i] * z[i]
	}
	slope := (n*sxz - sx*sz) / (n*sxx - sx*sx)
	intercept := (sz - slope*sx) / n
	return slope, intercept
}

// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b).
func expFit(t, y []float64) (float64, float64) {
	ly := make([]float64, len(y))
	for i := range y {
		ly[i] = math.Log(y[i])
	}
	a, lnb := linFit(t, ly)
	return a, math.Exp(lnb)
}

func main() {
	t := []float64{0, 1, 2, 3}
	y := []float64{2.0, 4.1, 8.2, 15.9}
	a, b := expFit(t, y)
	fmt.Printf("a = %.4f, b = %.4f\\n", a, b)
}
`,Mn=`function exp_fit(t, y)
    A = [t ones(length(t))]                  # ln y = a t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [0.0, 1, 2, 3]; y = [2.0, 4.1, 8.2, 15.9]
a, b = exp_fit(t, y); println("a = $a, b = $b")
`,En=`// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns [a, b].
// Fits the line ln y = a*t + ln b via the slope/intercept formulas.
function linFit(x, z) {
  const n = x.length;
  let sx = 0, sz = 0, sxx = 0, sxz = 0;
  for (let i = 0; i < n; i++) {
    sx += x[i]; sz += z[i]; sxx += x[i] * x[i]; sxz += x[i] * z[i];
  }
  const slope = (n * sxz - sx * sz) / (n * sxx - sx * sx);
  const intercept = (sz - slope * sx) / n;
  return [slope, intercept];
}

function expFit(t, y) {
  const ly = y.map(Math.log);
  const [a, lnb] = linFit(t, ly);
  return [a, Math.exp(lnb)];
}

const t = [0, 1, 2, 3];
const y = [2.0, 4.1, 8.2, 15.9];
const [a, b] = expFit(t, y);
console.log(\`a = \${a.toFixed(4)}, b = \${b.toFixed(4)}\`);
`,In=`function [a, b] = exp_fit(t, y)
% EXP_FIT  Fit y ~ b*exp(a*t) by linear least squares on log(y).
    t = t(:); ly = log(y(:));
    p = [t, ones(numel(t),1)] \\ ly;   % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [0 1 2 3]; y = [2.0 4.1 8.2 15.9];
[a, b] = exp_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,Ln=`import numpy as np


def exp_fit(t, y):
    """Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b)."""
    t = np.asarray(t, float)
    ly = np.log(np.asarray(y, float))
    A = np.column_stack([t, np.ones_like(t)])         # ln y = a*t + ln b
    (a, lnb), *_ = np.linalg.lstsq(A, ly, rcond=None)
    return a, np.exp(lnb)


if __name__ == "__main__":
    t = [0, 1, 2, 3]
    y = [2.0, 4.1, 8.2, 15.9]
    a, b = exp_fit(t, y)
    print(f"a = {a:.4f}, b = {b:.4f}")
`,Bn=`# Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b).
exp_fit <- function(t, y) {
  ly <- log(y)
  A <- cbind(t, 1)                    # ln y = a*t + ln b
  sol <- qr.solve(A, ly)
  list(a = sol[1], b = exp(sol[2]))
}

t <- c(0, 1, 2, 3)
y <- c(2.0, 4.1, 8.2, 15.9)
res <- exp_fit(t, y)
cat(sprintf("a = %.4f, b = %.4f\\n", res$a, res$b))
`,Rn=`// Linear regression y = a x + b; returns (a, b).
fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let (mut sx, mut sy, mut sxx, mut sxy) = (0.0, 0.0, 0.0, 0.0);
    for i in 0..x.len() { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    let a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    (a, (sy - a * sx) / n)
}
// Fit y ~ b e^{a t} via regression on ln(y).
fn exp_fit(t: &[f64], y: &[f64]) -> (f64, f64) {
    let ly: Vec<f64> = y.iter().map(|v| v.ln()).collect();
    let (a, lnb) = linreg(t, &ly);
    (a, lnb.exp())
}
fn main() {
    let t = [0.0, 1.0, 2.0, 3.0];
    let y = [2.0, 4.1, 8.2, 15.9];
    let (a, b) = exp_fit(&t, &y);
    println!("a = {:.4}, b = {:.4}", a, b);
}
`,Nn=`expFit[t_, y_] := Module[{A, p},
   A = Transpose[{t, ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {0, 1, 2, 3}; y = {2.0, 4.1, 8.2, 15.9};
Print["a, b = ", expFit[t, y]]
`,Wn=`#include <iostream>
#include <vector>
using namespace std;
using Vec = vector<double>;

// Least-squares line y = a + b x via the 2x2 normal equations.
void line_fit(const Vec& x, const Vec& y, double& a, double& b) {
    int n = x.size();
    double Sx = 0, Sy = 0, Sxx = 0, Sxy = 0;
    for (int i = 0; i < n; ++i) {
        Sx += x[i]; Sy += y[i];
        Sxx += x[i] * x[i]; Sxy += x[i] * y[i];
    }
    b = (n * Sxy - Sx * Sy) / (n * Sxx - Sx * Sx);   // slope
    a = (Sy - b * Sx) / n;                            // intercept
}

int main() {
    Vec x = {0, 1, 2, 3, 4}, y = {1, 3, 2, 5, 4};
    double a, b;
    line_fit(x, y, a, b);
    cout.precision(4);
    cout << fixed << "slope b = " << b << ", intercept a = " << a << "\\n";
}
// -> slope b = 0.8000, intercept a = 1.4000
`,Cn=`program line_fit_demo
  implicit none
  integer, parameter :: n = 5
  real(8) :: x(n), y(n), Sx, Sy, Sxx, Sxy, a, b
  x = [0d0, 1d0, 2d0, 3d0, 4d0]
  y = [1d0, 3d0, 2d0, 5d0, 4d0]
  Sx = sum(x); Sy = sum(y)
  Sxx = sum(x**2); Sxy = sum(x*y)
  b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx**2)   ! slope
  a = (Sy - b*Sx) / n                       ! intercept
  print '(A, F8.4, A, F8.4)', 'slope b = ', b, ', intercept a = ', a
  ! -> slope b = 0.8000, intercept a = 1.4000
end program line_fit_demo
`,Pn=`package main

import "fmt"

// Least-squares line y = a + b x via the 2x2 normal equations.
func lineFit(x, y []float64) (a, b float64) {
	n := float64(len(x))
	var Sx, Sy, Sxx, Sxy float64
	for i := range x {
		Sx += x[i]
		Sy += y[i]
		Sxx += x[i] * x[i]
		Sxy += x[i] * y[i]
	}
	b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx*Sx) // slope
	a = (Sy - b*Sx) / n                    // intercept
	return
}

func main() {
	x := []float64{0, 1, 2, 3, 4}
	y := []float64{1, 3, 2, 5, 4}
	a, b := lineFit(x, y)
	fmt.Println("slope b =", b, ", intercept a =", a)
}
// -> slope b = 0.8, intercept a = 1.4
`,Hn=`function line_fit(x, y)
    n = length(x)
    Sx = sum(x); Sy = sum(y)
    Sxx = sum(x .^ 2); Sxy = sum(x .* y)
    b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx^2)   # slope
    a = (Sy - b*Sx) / n                      # intercept
    return a, b
end

x = [0, 1, 2, 3, 4]; y = [1, 3, 2, 5, 4]
a, b = line_fit(x, y)
println("slope b = ", b, ", intercept a = ", a)
# -> slope b = 0.8, intercept a = 1.4
`,Vn=`// Least-squares line y = a + b x via the 2x2 normal equations.
function lineFit(x, y) {
  const n = x.length;
  const Sx = x.reduce((s, xi) => s + xi, 0);
  const Sy = y.reduce((s, yi) => s + yi, 0);
  const Sxx = x.reduce((s, xi) => s + xi * xi, 0);
  const Sxy = x.reduce((s, xi, i) => s + xi * y[i], 0);
  const b = (n * Sxy - Sx * Sy) / (n * Sxx - Sx * Sx); // slope
  const a = (Sy - b * Sx) / n; // intercept
  return { a, b };
}

const x = [0, 1, 2, 3, 4];
const y = [1, 3, 2, 5, 4];
const { a, b } = lineFit(x, y);
console.log("slope b =", b, ", intercept a =", a);
// -> slope b = 0.8, intercept a = 1.4
`,Dn=`function [a, b] = line_fit(x, y)
% LINE_FIT  Least-squares line y = a + b x via the 2x2 normal equations.
    x = x(:); y = y(:);
    n = numel(x);
    Sx = sum(x); Sy = sum(y);
    Sxx = sum(x .^ 2); Sxy = sum(x .* y);
    b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx^2);   % slope
    a = (Sy - b*Sx) / n;                      % intercept
end

% --- Demo ---
x = [0 1 2 3 4]; y = [1 3 2 5 4];
[a, b] = line_fit(x, y);
fprintf('slope b = %.4f, intercept a = %.4f\\n', b, a);
% -> slope b = 0.8000, intercept a = 1.4000
`,Gn=`def line_fit(x, y):
    """Least-squares line y = a + b x via the 2x2 normal equations."""
    n = len(x)
    Sx = sum(x)
    Sy = sum(y)
    Sxx = sum(xi * xi for xi in x)
    Sxy = sum(xi * yi for xi, yi in zip(x, y))
    b = (n * Sxy - Sx * Sy) / (n * Sxx - Sx * Sx)   # slope
    a = (Sy - b * Sx) / n                            # intercept
    return a, b


if __name__ == "__main__":
    x = [0, 1, 2, 3, 4]
    y = [1, 3, 2, 5, 4]
    a, b = line_fit(x, y)
    print("slope b =", b, ", intercept a =", a)
# -> slope b = 0.8, intercept a = 1.4
`,Yn=`# Least-squares line y = a + b x via the 2x2 normal equations.
line_fit <- function(x, y) {
  n <- length(x)
  Sx <- sum(x); Sy <- sum(y)
  Sxx <- sum(x^2); Sxy <- sum(x * y)
  b <- (n * Sxy - Sx * Sy) / (n * Sxx - Sx^2)   # slope
  a <- (Sy - b * Sx) / n                          # intercept
  c(a = a, b = b)
}

x <- c(0, 1, 2, 3, 4)
y <- c(1, 3, 2, 5, 4)
fit <- line_fit(x, y)
cat("slope b =", fit["b"], ", intercept a =", fit["a"], "\\n")
# -> slope b = 0.8, intercept a = 1.4
`,On=`// Least-squares line y = a + b x via the 2x2 normal equations.
fn line_fit(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let sx: f64 = x.iter().sum();
    let sy: f64 = y.iter().sum();
    let sxx: f64 = x.iter().map(|&xi| xi * xi).sum();
    let sxy: f64 = x.iter().zip(y).map(|(&xi, &yi)| xi * yi).sum();
    let b = (n * sxy - sx * sy) / (n * sxx - sx * sx);   // slope
    let a = (sy - b * sx) / n;                            // intercept
    (a, b)
}
fn main() {
    let x = [0.0, 1.0, 2.0, 3.0, 4.0];
    let y = [1.0, 3.0, 2.0, 5.0, 4.0];
    let (a, b) = line_fit(&x, &y);
    println!("slope b = {}, intercept a = {}", b, a);
}
// -> slope b = 0.8, intercept a = 1.4
`,Xn=`lineFit[x_, y_] := Module[{n = Length[x], Sx, Sy, Sxx, Sxy, a, b},
   Sx = Total[x]; Sy = Total[y];
   Sxx = Total[x^2]; Sxy = Total[x y];
   b = (n Sxy - Sx Sy)/(n Sxx - Sx^2);     (* slope *)
   a = (Sy - b Sx)/n;                        (* intercept *)
   {a, b}];
x = {0, 1, 2, 3, 4}; y = {1, 3, 2, 5, 4};
With[{r = lineFit[x, y]},
  Print["slope b = ", r[[2]], ", intercept a = ", r[[1]]]]
(* -> slope b = 0.8, intercept a = 1.4 *)
`,Qn=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

Vec solve(Mat A, Vec b) {                       // Gaussian elimination, partial pivot
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

// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
Vec poly_fit(const Vec& t, const Vec& y, int deg) {
    int n = t.size(), m = deg + 1;
    Mat A(n, Vec(m, 1.0));
    for (int i = 0; i < n; ++i)
        for (int j = 1; j < m; ++j) A[i][j] = A[i][j - 1] * t[i];
    Mat N(m, Vec(m, 0.0)); Vec r(m, 0.0);
    for (int j = 0; j < m; ++j) {
        for (int k = 0; k < m; ++k) { double s = 0; for (int i = 0; i < n; ++i) s += A[i][j] * A[i][k]; N[j][k] = s; }
        double s = 0; for (int i = 0; i < n; ++i) s += A[i][j] * y[i]; r[j] = s;
    }
    return solve(N, r);
}

int main() {
    Vec t = {0, 1, 2, 3, 4}, y = {1.0, 1.8, 3.3, 4.5, 6.3};
    Vec c = poly_fit(t, y, 2);
    cout << "coeffs (low->high):";
    for (double v : c) cout << " " << v;
    cout << "\\n";
}
`,Zn=`program poly_fit_demo
  implicit none
  integer, parameter :: n = 5, deg = 2, m = deg + 1
  real(8) :: t(n), y(n), A(n,m), N_(m,m), r(m), c(m)
  integer :: i, j, k
  t = [0d0, 1d0, 2d0, 3d0, 4d0]
  y = [1.0d0, 1.8d0, 3.3d0, 4.5d0, 6.3d0]
  do i = 1, n
     do j = 1, m
        A(i,j) = t(i)**(j-1)
     end do
  end do
  N_ = matmul(transpose(A), A)          ! normal equations (A^T A) c = A^T y
  r  = matmul(transpose(A), y)
  c  = gauss_solve(N_, r, m)
  print '(A, 3F12.6)', 'coeffs (low->high): ', c
contains
  function gauss_solve(Ain, bin, sz) result(x)
    integer, intent(in) :: sz
    real(8), intent(in) :: Ain(sz,sz), bin(sz)
    real(8) :: M(sz,sz), b(sz), x(sz), f
    integer :: i, j, k, p
    M = Ain; b = bin
    do k = 1, sz
       p = k
       do i = k+1, sz
          if (abs(M(i,k)) > abs(M(p,k))) p = i
       end do
       call swap_row(M, b, k, p, sz)
       do i = k+1, sz
          f = M(i,k)/M(k,k)
          M(i,k:sz) = M(i,k:sz) - f*M(k,k:sz)
          b(i) = b(i) - f*b(k)
       end do
    end do
    do i = sz, 1, -1
       x(i) = (b(i) - dot_product(M(i,i+1:sz), x(i+1:sz)))/M(i,i)
    end do
  end function gauss_solve
  subroutine swap_row(M, b, i, j, sz)
    integer, intent(in) :: i, j, sz
    real(8), intent(inout) :: M(sz,sz), b(sz)
    real(8) :: tmp(sz), tb
    tmp = M(i,:); M(i,:) = M(j,:); M(j,:) = tmp
    tb = b(i); b(i) = b(j); b(j) = tb
  end subroutine swap_row
end program poly_fit_demo
`,Kn=`package main

import (
	"fmt"
	"math"
)

func solve(A [][]float64, b []float64) []float64 {
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

// Least-squares polynomial fit via the normal equations (coeffs low -> high).
func polyFit(t, y []float64, degree int) []float64 {
	m := degree + 1
	V := make([][]float64, len(t))
	for r := range t {
		V[r] = make([]float64, m)
		for j := 0; j < m; j++ {
			V[r][j] = math.Pow(t[r], float64(j))
		}
	}
	ATA := make([][]float64, m)
	for i := range ATA {
		ATA[i] = make([]float64, m)
	}
	ATy := make([]float64, m)
	for r := range t {
		for i := 0; i < m; i++ {
			ATy[i] += V[r][i] * y[r]
			for j := 0; j < m; j++ {
				ATA[i][j] += V[r][i] * V[r][j]
			}
		}
	}
	return solve(ATA, ATy)
}

func main() {
	t := []float64{0, 1, 2, 3, 4}
	y := []float64{1.0, 1.8, 3.3, 4.5, 6.3}
	fmt.Println("coeffs (low->high):", polyFit(t, y, 2))
}
`,Un=`function poly_fit(t, y, degree)
    A = [ti^j for ti in t, j in 0:degree]   # Vandermonde: columns 1, t, t^2, ...
    return A \\ y                              # least-squares solution
end

t = [0.0, 1, 2, 3, 4]; y = [1.0, 1.8, 3.3, 4.5, 6.3]
println("coeffs (low->high): ", poly_fit(t, y, 2))
`,Jn=`// Least-squares polynomial fit via the normal equations.
// Returns coefficients (low -> high).
function solve(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
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

function polyFit(t, y, degree = 2) {
  const m = degree + 1;
  // Vandermonde columns 1, t, t^2, ...
  const V = t.map((ti) => Array.from({ length: m }, (_, j) => ti ** j));
  // Normal equations (V^T V) c = V^T y.
  const ATA = Array.from({ length: m }, () => new Array(m).fill(0));
  const ATy = new Array(m).fill(0);
  for (let r = 0; r < t.length; r++) {
    for (let i = 0; i < m; i++) {
      ATy[i] += V[r][i] * y[r];
      for (let j = 0; j < m; j++) ATA[i][j] += V[r][i] * V[r][j];
    }
  }
  return solve(ATA, ATy);
}

const t = [0, 1, 2, 3, 4];
const y = [1.0, 1.8, 3.3, 4.5, 6.3];
console.log("coeffs (low->high):", polyFit(t, y, 2));
`,ei=`function c = poly_fit(t, y, degree)
% POLY_FIT  Least-squares polynomial fit; c are coefficients low -> high.
    t = t(:); y = y(:);
    A = zeros(numel(t), degree+1);
    for j = 0:degree
        A(:, j+1) = t .^ j;          % columns 1, t, t^2, ...
    end
    c = A \\ y;                        % least-squares solution
end

% --- Demo ---
t = [0 1 2 3 4]; y = [1.0 1.8 3.3 4.5 6.3];
disp(poly_fit(t, y, 2)');
`,ti=`import numpy as np


def poly_fit(t, y, degree=2):
    """Least-squares polynomial fit; returns coefficients (low -> high)."""
    t = np.asarray(t, float)
    y = np.asarray(y, float)
    A = np.vander(t, degree + 1, increasing=True)    # columns 1, t, t^2, ...
    coeffs, *_ = np.linalg.lstsq(A, y, rcond=None)    # minimizes ||A c - y||
    return coeffs


if __name__ == "__main__":
    t = [0, 1, 2, 3, 4]
    y = [1.0, 1.8, 3.3, 4.5, 6.3]
    print("coeffs (low->high):", poly_fit(t, y, 2))
`,ni=`# Least-squares polynomial fit; returns coefficients (low -> high).
poly_fit <- function(t, y, degree = 2) {
  A <- outer(t, 0:degree, \`^\`)        # columns 1, t, t^2, ...
  as.vector(qr.solve(A, y))           # minimizes ||A c - y||
}

t <- c(0, 1, 2, 3, 4)
y <- c(1.0, 1.8, 3.3, 4.5, 6.3)
cat("coeffs (low->high):", poly_fit(t, y, 2), "\\n")
`,ii=`// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
fn solve(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Vec<f64> {
    let n = b.len();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if a[i][k].abs() > a[p][k].abs() { p = i; } }
        a.swap(k, p); b.swap(k, p);
        for i in k + 1..n {
            let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j]; }
            b[i] -= f * b[k];
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = b[i];
        for j in i + 1..n { s -= a[i][j] * x[j]; }
        x[i] = s / a[i][i];
    }
    x
}
fn poly_fit(t: &[f64], y: &[f64], deg: usize) -> Vec<f64> {
    let (n, m) = (t.len(), deg + 1);
    let a: Vec<Vec<f64>> = t.iter().map(|&ti| (0..m).map(|j| ti.powi(j as i32)).collect()).collect();
    let mut nn = vec![vec![0.0; m]; m];
    let mut r = vec![0.0; m];
    for j in 0..m {
        for k in 0..m { for i in 0..n { nn[j][k] += a[i][j] * a[i][k]; } }
        for i in 0..n { r[j] += a[i][j] * y[i]; }
    }
    solve(nn, r)
}
fn main() {
    let t = [0.0, 1.0, 2.0, 3.0, 4.0];
    let y = [1.0, 1.8, 3.3, 4.5, 6.3];
    println!("coeffs (low->high): {:?}", poly_fit(&t, &y, 2));
}
`,ai=`polyFit[t_, y_, degree_] := Module[{A},
   A = Table[ti^j, {ti, t}, {j, 0, degree}];   (* Vandermonde *)
   LeastSquares[A, y]];
t = {0, 1, 2, 3, 4}; y = {1.0, 1.8, 3.3, 4.5, 6.3};
Print["coeffs (low->high): ", polyFit[t, y, 2]]
`,si=`#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;

pair<double, double> linreg(const Vec& x, const Vec& y) {
    int n = x.size();
    double sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (int i = 0; i < n; ++i) { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    double a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    return {a, (sy - a * sx) / n};
}

// Fit y ~ b*t^a via regression on log-log data.  Returns {a, b}.
pair<double, double> power_fit(const Vec& t, const Vec& y) {
    Vec lt(t.size()), ly(y.size());
    for (size_t i = 0; i < t.size(); ++i) { lt[i] = log(t[i]); ly[i] = log(y[i]); }
    auto [a, lnb] = linreg(lt, ly);
    return {a, exp(lnb)};
}

int main() {
    Vec t = {1, 2, 3, 4}, y = {2.0, 5.6, 9.7, 16.0};
    auto [a, b] = power_fit(t, y);
    cout.precision(4);
    cout << "a = " << a << ", b = " << b << "\\n";
}
`,li=`program power_fit_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: t(n), y(n), a, b
  t = [1d0, 2d0, 3d0, 4d0]
  y = [2.0d0, 5.6d0, 9.7d0, 16.0d0]
  call linreg(log(t), log(y), n, a, b)   ! ln y = a ln t + ln b
  print '(A, F8.4, A, F8.4)', 'a = ', a, ', b = ', exp(b)
contains
  subroutine linreg(x, yy, m, a, b)
    integer, intent(in) :: m
    real(8), intent(in) :: x(m), yy(m)
    real(8), intent(out) :: a, b
    real(8) :: sx, sy, sxx, sxy
    sx = sum(x); sy = sum(yy); sxx = sum(x*x); sxy = sum(x*yy)
    a = (m*sxy - sx*sy)/(m*sxx - sx*sx)
    b = (sy - a*sx)/m
  end subroutine linreg
end program power_fit_demo
`,oi=`package main

import (
	"fmt"
	"math"
)

// Least-squares line fit z = slope*x + intercept.
func linFit(x, z []float64) (float64, float64) {
	n := float64(len(x))
	var sx, sz, sxx, sxz float64
	for i := range x {
		sx += x[i]
		sz += z[i]
		sxx += x[i] * x[i]
		sxz += x[i] * z[i]
	}
	slope := (n*sxz - sx*sz) / (n*sxx - sx*sx)
	intercept := (sz - slope*sx) / n
	return slope, intercept
}

// Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
func powerFit(t, y []float64) (float64, float64) {
	lt := make([]float64, len(t))
	ly := make([]float64, len(y))
	for i := range t {
		lt[i] = math.Log(t[i])
		ly[i] = math.Log(y[i])
	}
	a, lnb := linFit(lt, ly)
	return a, math.Exp(lnb)
}

func main() {
	t := []float64{1, 2, 3, 4}
	y := []float64{2.0, 5.6, 9.7, 16.0}
	a, b := powerFit(t, y)
	fmt.Printf("a = %.4f, b = %.4f\\n", a, b)
}
`,ri=`function power_fit(t, y)
    A = [log.(t) ones(length(t))]            # ln y = a ln t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [1.0, 2, 3, 4]; y = [2.0, 5.6, 9.7, 16.0]
a, b = power_fit(t, y); println("a = $a, b = $b")
`,mi=`// Fit y ~ b*t^a by linear least squares on log-log data. Returns [a, b].
// Fits the line ln y = a*ln t + ln b via the slope/intercept formulas.
function linFit(x, z) {
  const n = x.length;
  let sx = 0, sz = 0, sxx = 0, sxz = 0;
  for (let i = 0; i < n; i++) {
    sx += x[i]; sz += z[i]; sxx += x[i] * x[i]; sxz += x[i] * z[i];
  }
  const slope = (n * sxz - sx * sz) / (n * sxx - sx * sx);
  const intercept = (sz - slope * sx) / n;
  return [slope, intercept];
}

function powerFit(t, y) {
  const lt = t.map(Math.log);
  const ly = y.map(Math.log);
  const [a, lnb] = linFit(lt, ly);
  return [a, Math.exp(lnb)];
}

const t = [1, 2, 3, 4];
const y = [2.0, 5.6, 9.7, 16.0];
const [a, b] = powerFit(t, y);
console.log(\`a = \${a.toFixed(4)}, b = \${b.toFixed(4)}\`);
`,hi=`function [a, b] = power_fit(t, y)
% POWER_FIT  Fit y ~ b*t^a by linear least squares on log-log data.
    lt = log(t(:)); ly = log(y(:));
    p = [lt, ones(numel(lt),1)] \\ ly; % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [1 2 3 4]; y = [2.0 5.6 9.7 16.0];
[a, b] = power_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,ui=`import numpy as np


def power_fit(t, y):
    """Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b)."""
    lt = np.log(np.asarray(t, float))
    ly = np.log(np.asarray(y, float))
    A = np.column_stack([lt, np.ones_like(lt)])       # ln y = a*ln t + ln b
    (a, lnb), *_ = np.linalg.lstsq(A, ly, rcond=None)
    return a, np.exp(lnb)


if __name__ == "__main__":
    t = [1, 2, 3, 4]
    y = [2.0, 5.6, 9.7, 16.0]
    a, b = power_fit(t, y)
    print(f"a = {a:.4f}, b = {b:.4f}")
`,$i=`# Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
power_fit <- function(t, y) {
  lt <- log(t)
  ly <- log(y)
  A <- cbind(lt, 1)                   # ln y = a*ln t + ln b
  sol <- qr.solve(A, ly)
  list(a = sol[1], b = exp(sol[2]))
}

t <- c(1, 2, 3, 4)
y <- c(2.0, 5.6, 9.7, 16.0)
res <- power_fit(t, y)
cat(sprintf("a = %.4f, b = %.4f\\n", res$a, res$b))
`,ci=`fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let (mut sx, mut sy, mut sxx, mut sxy) = (0.0, 0.0, 0.0, 0.0);
    for i in 0..x.len() { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    let a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    (a, (sy - a * sx) / n)
}
// Fit y ~ b t^a via regression on log-log data.
fn power_fit(t: &[f64], y: &[f64]) -> (f64, f64) {
    let lt: Vec<f64> = t.iter().map(|v| v.ln()).collect();
    let ly: Vec<f64> = y.iter().map(|v| v.ln()).collect();
    let (a, lnb) = linreg(&lt, &ly);
    (a, lnb.exp())
}
fn main() {
    let t = [1.0, 2.0, 3.0, 4.0];
    let y = [2.0, 5.6, 9.7, 16.0];
    let (a, b) = power_fit(&t, &y);
    println!("a = {:.4}, b = {:.4}", a, b);
}
`,pi=`powerFit[t_, y_] := Module[{A, p},
   A = Transpose[{Log[t], ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a ln t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {1, 2, 3, 4}; y = {2.0, 5.6, 9.7, 16.0};
Print["a, b = ", powerFit[t, y]]
`,di=Object.assign({"./exponential.cpp":Fn,"./exponential.f90":Sn,"./exponential.go":Tn,"./exponential.jl":Mn,"./exponential.js":En,"./exponential.m":In,"./exponential.py":Ln,"./exponential.r":Bn,"./exponential.rs":Rn,"./exponential.wl":Nn,"./line.cpp":Wn,"./line.f90":Cn,"./line.go":Pn,"./line.jl":Hn,"./line.js":Vn,"./line.m":Dn,"./line.py":Gn,"./line.r":Yn,"./line.rs":On,"./line.wl":Xn,"./polynomial.cpp":Qn,"./polynomial.f90":Zn,"./polynomial.go":Kn,"./polynomial.jl":Un,"./polynomial.js":Jn,"./polynomial.m":ei,"./polynomial.py":ti,"./polynomial.r":ni,"./polynomial.rs":ii,"./polynomial.wl":ai,"./power.cpp":si,"./power.f90":li,"./power.go":oi,"./power.jl":ri,"./power.js":mi,"./power.m":hi,"./power.py":ui,"./power.r":$i,"./power.rs":ci,"./power.wl":pi}),E=(i,n)=>di[`./${i}.${n}`],fi={line:{en:"Least-squares line fit (normal equations)",hu:"Legkisebb négyzetes egyenesillesztés (normálegyenletek)"},polynomial:{en:"Least-squares polynomial fit",hu:"Legkisebb négyzetes polinomillesztés"},exponential:{en:"Exponential fit  y ≈ b·e^{a t}",hu:"Exponenciális illesztés  y ≈ b·e^{a t}"},power:{en:"Power-law fit  y ≈ b·t^a",hu:"Hatványfüggvény-illesztés  y ≈ b·t^a"}},gi=i=>({id:i,caption:fi[i],snippets:{matlab:E(i,"m"),python:E(i,"py"),cpp:E(i,"cpp"),julia:E(i,"jl"),rust:E(i,"rs"),fortran:E(i,"f90"),wolfram:E(i,"wl"),javascript:E(i,"js"),go:E(i,"go"),r:E(i,"r")}}),yi={line:["line"],polynomial:["polynomial"],nonlinear:["exponential","power"]};function xi(i){return(yi[i]??[]).map(gi)}const bi={line:[{id:"q-line-1",prompt:{en:"What are the two equations in the Gaussian normal system derived from minimizing the least-squares error F(a, b)?",hu:"Mi az F(a, b) legkisebb négyzetes hiba minimalizálásából származó Gauss-féle normálrendszer két egyenlete?"},options:[{en:"A system of equations solved by interpolation",hu:"Egy interpolációval megoldott egyenletrendszer"},{en:"Two equations from setting the partial derivatives of F(a, b) to zero",hu:"Két egyenlet az F(a, b) parciális deriváltjainak nullára állításából"},{en:"Equations derived from the maximum error",hu:"A maximális hibából származó egyenletek"},{en:"The sum of residuals and their squares",hu:"A maradékok és négyzeteik összege"}],answer:1,explanation:{en:"The normal equations come from ∂F/∂a = 0 and ∂F/∂b = 0.",hu:"A normálegyenletek a ∂F/∂a = 0 és ∂F/∂b = 0 feltételekből származnak."}},{id:"q-line-2",prompt:{en:"What does a positive determinant d of the coefficient matrix indicate?",hu:"Mit jelez az együtthatómátrix pozitív d determinánsa?"},options:[{en:"The line fitting has multiple solutions",hu:"Az illesztésnek több megoldása van"},{en:"There is no solution to the system",hu:"A rendszernek nincs megoldása"},{en:"The Gaussian normal equations have a unique solution",hu:"A Gauss-féle normálegyenleteknek egyértelmű megoldása van"},{en:"The solution is not optimal",hu:"A megoldás nem optimális"}],answer:2,explanation:{en:"A nonzero (positive) determinant means the normal equations have a unique solution.",hu:"A nem nulla (pozitív) determináns azt jelenti, hogy a normálegyenleteknek egyértelmű megoldása van."}},{id:"q-line-3",prompt:{en:"Which inequality guarantees that the determinant d of the Gaussian normal equations is positive?",hu:"Melyik egyenlőtlenség garantálja, hogy a Gauss-féle normálegyenletek d determinánsa pozitív?"},options:[{en:"Jensen's inequality",hu:"Jensen-egyenlőtlenség"},{en:"Minkowski's inequality",hu:"Minkowski-egyenlőtlenség"},{en:"Hölder's inequality",hu:"Hölder-egyenlőtlenség"},{en:"Cauchy–Bunyakovsky–Schwarz inequality",hu:"Cauchy–Bunyakovszkij–Schwarz-egyenlőtlenség"}],answer:3,explanation:{en:"The Cauchy–Schwarz inequality (strict unless all xᵢ equal) makes n·Σxᵢ² − (Σxᵢ)² > 0.",hu:"A Cauchy–Schwarz-egyenlőtlenség (szigorú, hacsak nem minden xᵢ egyenlő) miatt n·Σxᵢ² − (Σxᵢ)² > 0."}},{id:"q-line-4",prompt:{en:"What is the general form of the linear function used in line fitting?",hu:"Mi az egyenesillesztésben használt lineáris függvény általános alakja?"},options:[{en:"g(x) = aˣ + b",hu:"g(x) = aˣ + b"},{en:"g(x) = a x² + b",hu:"g(x) = a x² + b"},{en:"g(x) = a x + b",hu:"g(x) = a x + b"},{en:"g(x) = a·ln(x) + b",hu:"g(x) = a·ln(x) + b"}],answer:2,explanation:{en:"Line fitting models data with the straight line g(x) = a x + b.",hu:"Az egyenesillesztés a g(x) = a x + b egyenessel modellezi az adatokat."}},{id:"q-line-5",prompt:{en:"Which condition ensures that F(a, b) has a local (and global) minimum?",hu:"Melyik feltétel biztosítja, hogy F(a, b)-nek lokális (és globális) minimuma van?"},options:[{en:"The Hessian determinant D(a,b) is positive and ∂²F/∂a² > 0",hu:"A D(a,b) Hesse-determináns pozitív és ∂²F/∂a² > 0"},{en:"The second partial derivatives form a negative definite matrix",hu:"A második parciális deriváltak negatív definit mátrixot alkotnak"},{en:"The sum of the data points is constant",hu:"Az adatpontok összege állandó"},{en:"The value of a is greater than b",hu:"Az a értéke nagyobb b-nél"}],answer:0,explanation:{en:"A positive Hessian determinant with positive ∂²F/∂a² means F is convex → minimum.",hu:"A pozitív Hesse-determináns pozitív ∂²F/∂a²-tel azt jelenti, hogy F konvex → minimum."}}],polynomial:[{id:"q-polynomial-1",prompt:{en:"What is the role of the normal equations in polynomial fitting?",hu:"Mi a normálegyenletek szerepe a polinomillesztésben?"},options:[{en:"They give the interpolation polynomial",hu:"Az interpolációs polinomot adják"},{en:"They are used to calculate derivatives",hu:"Deriváltak kiszámítására szolgálnak"},{en:"They find the mean of the data",hu:"Az adatok átlagát keresik meg"},{en:"They determine the coefficients that minimize the least-squares error",hu:"A legkisebb négyzetes hibát minimalizáló együtthatókat határozzák meg"}],answer:3,explanation:{en:"The normal equations yield the coefficients minimizing the sum of squared residuals.",hu:"A normálegyenletek a maradékok négyzetösszegét minimalizáló együtthatókat adják."}},{id:"q-polynomial-2",prompt:{en:"What is the least-squares error function for polynomial curve fitting?",hu:"Mi a polinomillesztés legkisebb négyzetes hibafüggvénye?"},options:[{en:"F = max |p(xᵢ) − yᵢ|",hu:"F = max |p(xᵢ) − yᵢ|"},{en:"F = Σ |p(xᵢ) − yᵢ|",hu:"F = Σ |p(xᵢ) − yᵢ|"},{en:"F = Σ (p(xᵢ) − yᵢ)²",hu:"F = Σ (p(xᵢ) − yᵢ)²"},{en:"F = Σ (xᵢ − yᵢ)²",hu:"F = Σ (xᵢ − yᵢ)²"}],answer:2,explanation:{en:"Least squares minimizes the sum of squared residuals Σ (p(xᵢ) − yᵢ)².",hu:"A legkisebb négyzetek a maradékok négyzetösszegét Σ (p(xᵢ) − yᵢ)² minimalizálja."}},{id:"q-polynomial-3",prompt:{en:"How are the normal equations for polynomial fitting obtained?",hu:"Hogyan kapjuk meg a polinomillesztés normálegyenleteit?"},options:[{en:"By interpolation",hu:"Interpolációval"},{en:"By setting all partial derivatives of the error function to zero",hu:"A hibafüggvény összes parciális deriváltjának nullára állításával"},{en:"By numerical integration",hu:"Numerikus integrálással"},{en:"By choosing the smallest coefficients",hu:"A legkisebb együtthatók választásával"}],answer:1,explanation:{en:"Setting every ∂F/∂cⱼ = 0 produces the linear normal equations.",hu:"Minden ∂F/∂cⱼ = 0 beállítása a lineáris normálegyenleteket adja."}},{id:"q-polynomial-4",prompt:{en:"Which type of function is the error function F in polynomial fitting (in the coefficients)?",hu:"Milyen típusú függvény az F hibafüggvény a polinomillesztésben (az együtthatókban)?"},options:[{en:"Quadratic",hu:"Kvadratikus"},{en:"Linear",hu:"Lineáris"},{en:"Logarithmic",hu:"Logaritmikus"},{en:"Exponential",hu:"Exponenciális"}],answer:0,explanation:{en:"F is a quadratic (convex) function of the unknown coefficients.",hu:"F az ismeretlen együtthatók kvadratikus (konvex) függvénye."}},{id:"q-polynomial-5",prompt:{en:"What is true about the minimum found by minimizing the least-squares error in polynomial fitting?",hu:"Mi igaz a polinomillesztésben a legkisebb négyzetes hiba minimalizálásával talált minimumra?"},options:[{en:"It always lies on one of the data points",hu:"Mindig az egyik adatponton van"},{en:"It may not be unique",hu:"Lehet, hogy nem egyértelmű"},{en:"It is always a local and global minimum",hu:"Mindig lokális és globális minimum"},{en:"It must be zero",hu:"Nullának kell lennie"}],answer:2,explanation:{en:"Because F is convex (quadratic), its minimum is simultaneously local and global.",hu:"Mivel F konvex (kvadratikus), a minimuma egyszerre lokális és globális."}}],nonlinear:[{id:"q-nonlinear-1",prompt:{en:"What type of equations are solved after linearization of nonlinear models?",hu:"Milyen típusú egyenleteket oldunk meg a nemlineáris modellek linearizálása után?"},options:[{en:"Algebraic equations",hu:"Algebrai egyenleteket"},{en:"Trigonometric equations",hu:"Trigonometrikus egyenleteket"},{en:"Differential equations",hu:"Differenciálegyenleteket"},{en:"Normal equations for linear regression",hu:"A lineáris regresszió normálegyenleteit"}],answer:3,explanation:{en:"After linearizing, one solves the linear normal equations of ordinary line fitting.",hu:"A linearizálás után a szokásos egyenesillesztés lineáris normálegyenleteit oldjuk meg."}},{id:"q-nonlinear-2",prompt:{en:"What is the form of the error function for exponential curve fitting?",hu:"Mi az exponenciális görbeillesztés hibafüggvényének alakja?"},options:[{en:"F(a, b) = Σ (a xᵢ + b − yᵢ)²",hu:"F(a, b) = Σ (a xᵢ + b − yᵢ)²"},{en:"F(a, b) = max |b·e^(a xᵢ) − yᵢ|",hu:"F(a, b) = max |b·e^(a xᵢ) − yᵢ|"},{en:"F(a, b) = Σ |b·e^(a xᵢ) − yᵢ|",hu:"F(a, b) = Σ |b·e^(a xᵢ) − yᵢ|"},{en:"F(a, b) = Σ (b·e^(a xᵢ) − yᵢ)²",hu:"F(a, b) = Σ (b·e^(a xᵢ) − yᵢ)²"}],answer:3,explanation:{en:"For model y = b·e^(a x) the least-squares error is Σ (b·e^(a xᵢ) − yᵢ)².",hu:"Az y = b·e^(a x) modellre a legkisebb négyzetes hiba Σ (b·e^(a xᵢ) − yᵢ)²."}},{id:"q-nonlinear-3",prompt:{en:"After linearizing y = b·xᵃ, what data is used for linear fitting?",hu:"Az y = b·xᵃ linearizálása után milyen adatokat használunk a lineáris illesztéshez?"},options:[{en:"(x, ln y)",hu:"(x, ln y)"},{en:"(ln x, y)",hu:"(ln x, y)"},{en:"(ln x, ln y)",hu:"(ln x, ln y)"},{en:"(x, y)",hu:"(x, y)"}],answer:2,explanation:{en:"ln y = ln b + a·ln x, so one fits a line to (ln x, ln y).",hu:"ln y = ln b + a·ln x, így egyenest illesztünk a (ln x, ln y) adatokra."}},{id:"q-nonlinear-4",prompt:{en:"Why is linearization used in exponential curve fitting?",hu:"Miért használunk linearizálást az exponenciális görbeillesztésben?"},options:[{en:"To remove errors in the data",hu:"Az adatok hibáinak eltávolítására"},{en:"To improve interpolation",hu:"Az interpoláció javítására"},{en:"To convert logarithms to exponentials",hu:"Logaritmusok exponenciálissá alakítására"},{en:"To convert the problem to line fitting",hu:"A feladat egyenesillesztéssé alakítására"}],answer:3,explanation:{en:"Taking logarithms turns the exponential model into a straight-line fitting problem.",hu:"A logaritmus vétele az exponenciális modellt egyenesillesztési feladattá alakítja."}},{id:"q-nonlinear-5",prompt:{en:"What is the purpose of fitting a line to the transformed data in exponential curve fitting?",hu:"Mi a célja az egyenes illesztésének a transzformált adatokra az exponenciális görbeillesztésben?"},options:[{en:"To estimate the parameters a and b",hu:"Az a és b paraméterek becslése"},{en:"To maximize the function",hu:"A függvény maximalizálása"},{en:"To interpolate the data",hu:"Az adatok interpolálása"},{en:"To find roots of the function",hu:"A függvény gyökeinek keresése"}],answer:0,explanation:{en:"The line slope and intercept recover the model parameters a and b.",hu:"Az egyenes meredeksége és tengelymetszete adja vissza az a és b modellparamétereket."}}]};function De(i){return bi[i]??[]}function ki({block:i}){const{t:n}=V();return m.jsxs("figure",{className:"data-table",children:[i.caption&&m.jsx("figcaption",{children:m.jsx(L,{text:n(i.caption)})}),m.jsxs("table",{children:[m.jsx("thead",{children:m.jsx("tr",{children:i.headers.map((e,t)=>m.jsx("th",{children:m.jsx(L,{text:e})},t))})}),m.jsxs("tbody",{children:[i.rows.map((e,t)=>m.jsx("tr",{children:e.map((l,s)=>m.jsx("td",{children:m.jsx(L,{text:l})},s))},t)),i.totals&&m.jsx("tr",{className:"totals",children:i.totals.map((e,t)=>m.jsx("td",{children:m.jsx(L,{text:e})},t))})]})]})]})}function _i({block:i}){const{t:n,lang:e}=V(),t=e==="hu"?"Megoldás":"Show solution";return m.jsxs("div",{className:"exercises",children:[m.jsx("h4",{children:n(i.label)}),m.jsx("p",{children:m.jsx(L,{text:n(i.intro)})}),m.jsx("div",{className:"exercise-grid",children:i.items.map((l,s)=>m.jsxs("div",{className:"exercise-card",children:[m.jsx("div",{className:"exercise-tag",children:m.jsx(L,{text:l.tag})}),m.jsx("table",{className:"mini",children:m.jsxs("tbody",{children:[m.jsxs("tr",{children:[m.jsx("th",{children:m.jsx(L,{text:l.headers[0]})}),l.cols.map(([a],o)=>m.jsx("td",{children:a},o))]}),m.jsxs("tr",{children:[m.jsx("th",{children:m.jsx(L,{text:l.headers[1]})}),l.cols.map(([,a],o)=>m.jsx("td",{children:a},o))]})]})})]},s))}),i.solution&&m.jsx("div",{className:"prose",children:m.jsx(P,{markdown:`<details class="reveal-solution"><summary>${t}</summary>

${i.solution}

</details>`})})]})}function zi({block:i,sectionId:n}){const{t:e}=V();switch(i.type){case"text":return m.jsx("div",{className:"prose",children:m.jsx(P,{markdown:e(i)})});case"math":return m.jsx("div",{className:"math-display",children:m.jsx(P,{markdown:`$$
${i.tex}
$$`})});case"callout":return m.jsx("div",{className:`callout ${i.variant||"note"}`,children:m.jsx(P,{markdown:e(i)})});case"theorem":case"example":return m.jsxs("div",{className:`box ${i.type}`,children:[m.jsx("div",{className:"box-label",children:e(i.label)}),m.jsx("div",{className:"box-body",children:m.jsx(P,{markdown:e(i)})})]});case"table":return m.jsx(ki,{block:i});case"exercises":return m.jsx(_i,{block:i});case"demo":return m.jsx(kn,{component:i.component,caption:i.caption?e(i.caption):void 0});case"quiz":return m.jsx(zn,{refKey:i.ref,sectionId:n});case"glossary":return m.jsx(qn,{deck:i.deck});case"flashcards":return m.jsx(An,{deck:i.deck});default:return null}}function vi({section:i}){const{t:n}=V();return m.jsxs("article",{className:"section",id:`sec-${i.id}`,children:[m.jsxs("h2",{className:"section-title",children:[n(i.title),At(i.id)&&m.jsx("span",{className:"done-badge",children:"✓"})]}),i.blocks.map((e,t)=>m.jsx(zi,{block:e,sectionId:i.id},t)),xi(i.id).map(e=>m.jsx(dt,{snippets:e.snippets,caption:e.caption},e.id)),De(i.id).length>0&&m.jsx(ft,{questions:De(i.id)})]})}const ot=Oe,wi={intro:"9",line:"9.1",polynomial:"9.2",nonlinear:"9.3"},qi=ot.map(i=>({id:`sec-${i.id}`,no:wi[i.id]??"9",title:i.title,blurb:{en:"",hu:""}}));function Ri(){const{lang:i}=V(),{theme:n}=ut(),e=$t();return F.useEffect(()=>{xt(i)},[i]),F.useEffect(()=>{kt(n)},[n]),F.useEffect(()=>{const t=decodeURIComponent(e.hash.replace(/^#/,""));t&&requestAnimationFrame(()=>{var l;return(l=document.getElementById(t))==null?void 0:l.scrollIntoView()})},[e.hash]),m.jsxs("div",{className:"ch-least-squares",children:[m.jsx(gt,{sections:qi}),m.jsx("main",{className:"content content--full",children:ot.map(t=>m.jsx(vi,{section:t},t.id))})]})}export{Ri as default};
