var ct=Object.defineProperty;var Me=a=>{throw TypeError(a)};var mt=(a,n,e)=>n in a?ct(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var k=(a,n,e)=>mt(a,typeof n!="symbol"?n+"":n,e),ut=(a,n,e)=>n.has(a)||Me("Cannot "+e);var Re=(a,n,e)=>n.has(a)?Me("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(a):n.set(a,e);var oe=(a,n,e)=>(ut(a,n,"access private method"),e);import{r as T,j as c,d as H,i as pt,e as $t}from"./index-D6pHuXzW.js";import{M as P}from"./MarkdownView-BmoglzbP.js";import{k as ye}from"./CodeBlock-BIUyJnuw.js";import{P as ne}from"./plotly.min-B2bsdS6B.js";import{C as dt,Q as ft,S as xt}from"./Quiz-DMThdacN.js";import"./normalizeMath-D5GaPAtA.js";import"./index-CLw40Ppf.js";const Ge="lsq.lang",gt=new Set;let Xe=(()=>{try{return localStorage.getItem(Ge)||"en"}catch{return"en"}})();function yt(a){if(!(a!=="hu"&&a!=="en")){Xe=a;try{localStorage.setItem(Ge,a)}catch{}document.documentElement.setAttribute("lang",a),gt.forEach(n=>n(a))}}function b(a){return a==null?"":typeof a=="string"?a:a[Xe]??a.en??a.hu??""}const q={demoReset:{hu:"Visszaállítás",en:"Reset"},demoAddPoint:{hu:"Pont hozzáadása",en:"Add point"},demoBestFit:{hu:"Legjobb illesztés",en:"Best fit"},demoGuess:{hu:"Tippelj!",en:"Guess mode"},degree:{hu:"Fokszám",en:"Degree"},slope:{hu:"Meredekség",en:"Slope"},intercept:{hu:"Tengelymetszet",en:"Intercept"},error:{hu:"Hiba",en:"Error"},optimalError:{hu:"Optimális hiba",en:"Optimal error"},yourError:{hu:"A te hibád",en:"Your error"},linearizedSpace:{hu:"Linearizált tér",en:"Linearized space"},originalSpace:{hu:"Eredeti tér",en:"Original space"},linearError:{hu:"Linearizált hiba",en:"Linearized error"},nonlinearError:{hu:"Eredeti (nemlineáris) hiba",en:"Original (nonlinear) error"},expModel:{hu:"Exponenciális  b·e^{ax}",en:"Exponential  b·e^{ax}"},powerModel:{hu:"Hatvány  b·x^a",en:"Power  b·x^a"},dragHint:{hu:"Húzd a kék pontokat — az illesztés azonnal frissül.",en:"Drag the blue points — the fit updates live."}},bt="lsq.theme",be=new Set;function _t(a){if(!(a!=="light"&&a!=="dark")){document.documentElement.setAttribute("data-theme",a);try{localStorage.setItem(bt,a)}catch{}be.forEach(n=>n(a))}}function ve(a){return be.add(a),()=>be.delete(a)}function J(a){return getComputedStyle(document.documentElement).getPropertyValue(a).trim()}const kt={id:"intro",title:{hu:"Bevezetés",en:"Introduction"},blocks:[{type:"text",hu:"Tegyük fel, hogy egy fizikai folyamatot egy $g$ függvénnyel írhatunk le, amelynek ismerjük vagy feltételezzük az általános képletét, de bizonyos paraméterek a képletben ismeretlenek. A paramétereket egy $\\mathbf{a}$ vektorban tárolva a $g(x;\\mathbf{a})$ jelöléssel hangsúlyozhatjuk, hogy $g$ az $\\mathbf{a}$ paraméterektől függ. Feltesszük, hogy vannak $y_i$ ($i=0,1,\\ldots,n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban.",en:"Suppose that a physical process can be described by a real function $g$, where we know or assume the formula of the function but we do not know the values of some parameters in the formula. We put the parameters into a vector $\\mathbf{a}$, and the notation $g(x;\\mathbf{a})$ emphasizes the dependence of $g$ on the parameters $\\mathbf{a}$. Suppose we have measurements $y_i$ ($i=0,1,\\ldots,n$) of the function values at the mesh points $x_i$."},{type:"text",hu:'Ha több mérési értékünk van, mint paraméter, akkor általában nem tudunk olyan görbét rajzolni, amely minden ponton átmegy (a mérési hibák miatt). Ezért a célunk az, hogy megkeressük azokat a paraméter értékeket, amelyekhez tartozó $g$ függvény a „legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk **görbeillesztésnek**.',en:'If we have more measurements than parameters, then in general there is no curve whose graph goes through all the points (due to measurement error). Therefore our goal is to find the parameter values for which the corresponding function $g$ differs from the measurements with the "smallest error". This problem is called **curve fitting**.'},{type:"text",hu:'Nem nyilvánvaló, mit értünk azon, hogy a függvény „legkevésbé" tér el. Lehetséges az illesztés hibáját mérni az alábbi képletekkel:',en:"It is not obvious how to measure the error of the curve fitting. Depending on its definition, we get different mathematical problems. Possible error formulas are:"},{type:"math",tex:"F_1(\\mathbf{a}) := \\max\\{|g(x_i;\\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}"},{type:"math",tex:"F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i;\\mathbf{a}) - y_i|."},{type:"text",hu:"A probléma az, hogy sem $F_1$, sem $F_2$ nem differenciálható $\\mathbf{a}$ szerint, ezért nehéz minimalizálni. Ezt kiküszöbölhetjük az ún. **négyzetes hibával**:",en:"The problem is that neither $F_1$ nor $F_2$ is differentiable with respect to $\\mathbf{a}$, so they are hard to minimize. This technicality can be eliminated with the so-called **least square error**:"},{type:"math",tex:"F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i;\\mathbf{a}) - y_i)^2."},{type:"text",hu:"A matematikai feladat tehát az, hogy minimalizáljuk az $F(\\mathbf{a})$ függvényt, és a minimumhelyhez tartozó $\\bar{\\mathbf{a}}$ paraméterekkel definiált $g(x;\\bar{\\mathbf{a}})$ függvényt tekintjük a pontokra legjobban illeszkedő függvénynek. Ezt a módszert hívjuk a **legkisebb négyzetek módszerének**. A fejezetben előbb egyenest, majd tetszőleges polinomot, végül néhány nemlineáris függvényt illesztünk.",en:"The mathematical problem is therefore to minimize $F(\\mathbf{a})$, and consider the graph of $g(x;\\bar{\\mathbf{a}})$ corresponding to the minimum point $\\bar{\\mathbf{a}}$ as the best fitted curve. This is called the **method of least squares**. In this chapter we study line fitting first, then arbitrary polynomials, and finally some nonlinear functions."},{type:"callout",variant:"note",hu:"**Miért a négyzetes hiba?** Differenciálható, így a minimum a parciális deriváltak nullhelyén kereshető; a nagy eltéréseket erősebben bünteti; és — mint látni fogjuk — lineáris paraméterek esetén zárt alakú, egyértelmű megoldást ad.",en:"**Why squared error?** It is differentiable, so the minimum can be found where the partial derivatives vanish; it penalizes large deviations more strongly; and — as we will see — for linearly-appearing parameters it yields a closed-form, unique solution."},{type:"quiz",ref:"intro"}]},zt={id:"line",title:{hu:"9.1. Egyenes illesztése",en:"9.1. Line Fitting"},blocks:[{type:"text",hu:"Adottak $(x_i, y_i)$, $i = 0, 1, \\ldots, n$ pontok, ahol az $x_i$-k páronként különböznek. Keresünk egy olyan $g(x) = ax + b$ lineáris függvényt, amelynek az adatoktól számított négyzetes eltérése minimális:",en:"Given data points $(x_i, y_i)$, $i = 0, 1, \\ldots, n$, where at least some of the mesh points $x_i$ are different. We are looking for a linear function $g(x) = ax + b$ which minimizes the least square error:"},{type:"math",tex:"F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2. \\tag{1}"},{type:"text",hu:"Az $F$ függvény folytonosan parciálisan differenciálható $a$ és $b$ szerint:",en:"The function $F$ is continuously partially differentiable with respect to $a$ and $b$:"},{type:"math",tex:"\\begin{aligned} \\frac{\\partial F}{\\partial a}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i)x_i,\\\\ \\frac{\\partial F}{\\partial b}(a,b) &= 2\\sum_{i=0}^{n}(ax_i + b - y_i). \\end{aligned} \\tag{2}"},{type:"text",hu:"A (2) deriváltakat nullával egyenlővé téve és átrendezve kapjuk az ún. **Gauss-féle normálegyenleteket**:",en:"Making the partial derivatives in (2) equal to 0 and rearranging gives the so-called **Gaussian normal equations**:"},{type:"math",tex:"\\begin{aligned} a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i &= \\sum_{i=0}^{n} x_i y_i,\\\\ a\\sum_{i=0}^{n} x_i + b(n+1) &= \\sum_{i=0}^{n} y_i. \\end{aligned} \\tag{3}"},{type:"text",hu:"Ez egy lineáris egyenletrendszer $a$-ra és $b$-re. Akkor és csak akkor oldható meg egyértelműen, ha az együtthatómátrix determinánsa nem nulla:",en:"This is a linear system for $a$ and $b$. It is solvable if and only if the determinant of its coefficient matrix is nonzero:"},{type:"math",tex:"d := \\det\\begin{pmatrix} \\sum_{i=0}^{n} x_i^2 & \\sum_{i=0}^{n} x_i \\\\ \\sum_{i=0}^{n} x_i & n+1 \\end{pmatrix} = (n+1)\\sum_{i=0}^{n} x_i^2 - \\left(\\sum_{i=0}^{n} x_i\\right)^2."},{type:"text",hu:"A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség szerint",en:"The Cauchy–Bunyakovsky–Schwarz inequality yields"},{type:"math",tex:"\\left(\\sum_{i=0}^{n} x_i\\right)^2 = \\left(\\sum_{i=0}^{n} 1\\cdot x_i\\right)^2 \\le \\sum_{i=0}^{n} 1 \\sum_{i=0}^{n} x_i^2 = (n+1)\\sum_{i=0}^{n} x_i^2,"},{type:"text",hu:"ezért $d \\ge 0$. Ha legalább két $x_i$ különbözik, akkor a szigorú egyenlőtlenség áll fenn, azaz $d > 0$. Így a (3) rendszernek pontosan egy megoldása van:",en:"therefore $d \\ge 0$. If at least two mesh points differ, the strict inequality $d > 0$ holds. Hence system (3) has a unique solution:"},{type:"math",tex:"\\bar{a} = \\frac{(n+1)\\left(\\sum x_i y_i\\right) - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}, \\qquad \\bar{b} = \\frac{\\left(\\sum x_i^2\\right)\\left(\\sum y_i\\right) - \\left(\\sum x_i y_i\\right)\\left(\\sum x_i\\right)}{(n+1)\\left(\\sum x_i^2\\right) - \\left(\\sum x_i\\right)^2}."},{type:"text",hu:"Az $F$-nek az $(\\bar a, \\bar b)$ pontban lokális szélsőértéke van, ha a Hesse-determináns pozitív:",en:"$F$ has a local extremum at $(\\bar a, \\bar b)$ if the Hessian determinant is positive:"},{type:"math",tex:"D(\\bar a,\\bar b) := \\frac{\\partial^2 F}{\\partial a^2}\\cdot\\frac{\\partial^2 F}{\\partial b^2} - \\left(\\frac{\\partial^2 F}{\\partial a\\,\\partial b}\\right)^2 > 0."},{type:"text",hu:"Mivel",en:"Since"},{type:"math",tex:"\\frac{\\partial^2 F}{\\partial a^2} = 2\\sum_{i=0}^{n} x_i^2,\\quad \\frac{\\partial^2 F}{\\partial b^2} = 2(n+1),\\quad \\frac{\\partial^2 F}{\\partial a\\,\\partial b} = 2\\sum_{i=0}^{n} x_i,"},{type:"text",hu:"ezért $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, és mivel $\\frac{\\partial^2 F}{\\partial a^2} > 0$, az $(\\bar a, \\bar b)$ pont lokális — és (kvadratikus $F$ miatt) globális — minimum.",en:"we get $D(\\bar a,\\bar b) = 4(n+1)\\sum x_i^2 - 4\\left(\\sum x_i\\right)^2 = 4d > 0$, and since $\\frac{\\partial^2 F}{\\partial a^2} > 0$, the point $(\\bar a, \\bar b)$ is a local — and (as $F$ is quadratic) global — minimum."},{type:"theorem",label:{hu:"9.1. Tétel",en:"Theorem 9.1"},hu:"Adottak az $(x_i, y_i)$ ($i=0,1,\\ldots,n$) pontok, ahol van olyan $i$ és $j$, hogy $x_i \\ne x_j$. Ekkor a $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ szélsőérték-feladatnak létezik egyértelmű megoldása, amely teljesíti a (3) normálegyenleteket.",en:"Given data points $(x_i, y_i)$ ($i=0,1,\\ldots,n$) such that there exist $i$ and $j$ with $x_i \\ne x_j$. Then the problem $\\min_{(a,b)\\in\\mathbb{R}^2} \\sum_{i=0}^{n}(ax_i + b - y_i)^2$ has a unique solution, which satisfies the Gaussian normal equations (3)."},{type:"example",label:{hu:"9.2. Példa",en:"Example 9.2"},hu:"Keressük meg az alábbi adatokra legjobban illeszkedő egyenest. Külön oszlopban kiszámoljuk az $x_i^2$ és $x_i y_i$ értékeket, és az utolsó sorban az összegeket.",en:"Find the line of best fit to the data below. We compute $x_i^2$ and $x_i y_i$ in separate columns, and the column sums in the last row."},{type:"table",caption:{hu:"9.1. táblázat — Egyenes illesztése",en:"Table 9.1 — Line fitting"},headers:["$x_i$","$y_i$","$x_i^2$","$x_i y_i$"],rows:[["-1.0","0.0","1.00","0.00"],["1.0","1.2","1.00","1.20"],["2.5","1.9","6.25","4.75"],["3.0","2.5","9.00","7.50"],["4.0","3.1","16.00","12.40"],["4.5","3.2","20.25","14.40"],["6.0","4.5","36.00","27.00"]],totals:["20.0","16.4","89.50","67.25"]},{type:"text",hu:"Az összegeket a (3) normálegyenletekbe helyettesítve: $89.5a + 20.0b = 67.25$ és $20.0a + 7b = 16.4$, amelynek megoldása $a = 0.630243$, $b = 0.542163$. Az illesztés hibája $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$.",en:"Substituting the sums into the normal equations (3): $89.5a + 20.0b = 67.25$ and $20.0a + 7b = 16.4$, with solution $a = 0.630243$, $b = 0.542163$. The error of the fitting is $\\sum_{i=0}^{6}(0.630243x_i + 0.542163 - y_i)^2 = 0.124691$."},{type:"demo",component:"line",caption:{hu:"9.1. ábra — Egyenes illesztése (interaktív)",en:"Figure 9.1 — Line fitting (interactive)"}},{type:"exercises",label:{hu:"Feladatok",en:"Exercises"},intro:{hu:"Illesszen egyenest a megadott adatokra, és számítsa ki az illesztés hibáját:",en:"Find the line of best fit to the data, and compute the error of the fitting:"},items:[{tag:"(a)",headers:["$x_i$","$y_i$"],cols:[["0.0","-1.8"],["1.0","1.3"],["1.5","2.5"],["2.0","3.9"],["3.0","8.3"]]},{tag:"(b)",headers:["$x_i$","$y_i$"],cols:[["-1.0","4.2"],["1.0","2.1"],["2.0","1.3"],["3.0","2.1"],["4.0","2.8"],["5.0","-2.1"],["6.0","-3.0"]]},{tag:"(c)",headers:["$x_i$","$y_i$"],cols:[["-1.0","-0.1"],["1.0","3.4"],["3.0","7.3"],["5.0","15.1"],["9.0","29.1"],["10.0","35.6"],["13.0","56.3"]]}],solution:`**Method (worked example).** For each data set, form the sums $\\sum x_i$, $\\sum x_i^2$, $\\sum y_i$, $\\sum x_i y_i$, solve the $2\\times2$ normal equations for $\\bar a,\\bar b$, then evaluate $SSR=\\sum(\\bar a x_i+\\bar b-y_i)^2$ and $RMSE=\\sqrt{SSR/(n+1)}$.

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

**Reciprocal model $y=1/(a+bx)$.** Linearize as $1/y=a+bx$ and fit a line to $(x_i,1/y_i)$; e.g. data $x_i:1,\\dots,5$, $\\ y_i:0.50,0.33,0.25,0.20,0.17$ transform to $Y_i:2.00,3.03,4.00,5.00,5.88$, giving $Y=0.98+0.99X$, hence $y\\approx1/(1+x)$.`},{type:"glossary",deck:"nonlinear"},{type:"flashcards",deck:"nonlinear"},{type:"quiz",ref:"nonlinear"}]},Ye=[kt,zt,vt,wt];Ye.map(a=>a.id);const Qe="lsq.progress",qt=new Set,Ne=()=>({completed:{},xp:0});let Y=(()=>{try{const a=localStorage.getItem(Qe);if(a)return{...Ne(),...JSON.parse(a)}}catch{}return Ne()})();function jt(){try{localStorage.setItem(Qe,JSON.stringify(Y))}catch{}qt.forEach(a=>a(Y))}function At(a){return!!Y.completed[a]}function Tt(a,n=50){Y.completed[a]||(Y.completed[a]=!0,Y.xp+=n,jt())}function St(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M({text:a}){const n=T.useMemo(()=>(a||"").split(/(\$[^$]+\$)/g).map(e=>e.length>1&&e.startsWith("$")&&e.endsWith("$")?ye.renderToString(e.slice(1,-1),{throwOnError:!1}):St(e)).join(""),[a]);return c.jsx("span",{dangerouslySetInnerHTML:{__html:n}})}function Ze(a,n){const e=n.length,t=a.map((s,i)=>[...s,n[i]]);for(let s=0;s<e;s++){let i=s;for(let r=s+1;r<e;r++)Math.abs(t[r][s])>Math.abs(t[i][s])&&(i=r);if(Math.abs(t[i][s])<1e-15)throw new Error("Singular matrix in solveLinearSystem");[t[s],t[i]]=[t[i],t[s]];for(let r=s+1;r<e;r++){const l=t[r][s]/t[s][s];if(l!==0)for(let m=s;m<=e;m++)t[r][m]-=l*t[s][m]}}const o=new Array(e).fill(0);for(let s=e-1;s>=0;s--){let i=t[s][e];for(let r=s+1;r<e;r++)i-=t[s][r]*o[r];o[s]=i/t[s][s]}return o}function Q(a,n){const e=a.length;let t=0,o=0,s=0,i=0;for(let m=0;m<e;m++)t+=a[m],o+=n[m],s+=a[m]*a[m],i+=a[m]*n[m];const[r,l]=Ze([[s,t],[t,e]],[i,o]);return{a:r,b:l}}function Ft(a,n,e){const t=a.length,o=e+1,s=new Array(2*e+1).fill(0);for(let l=0;l<t;l++){let m=1;for(let h=0;h<=2*e;h++)s[h]+=m,m*=a[l]}const i=new Array(o).fill(0);for(let l=0;l<t;l++){let m=1;for(let h=0;h<o;h++)i[h]+=m*n[l],m*=a[l]}const r=[];for(let l=0;l<o;l++){const m=[];for(let h=0;h<o;h++)m.push(s[l+h]);r.push(m)}return Ze(r,i)}function Et(a,n){const e=n.map(s=>Math.log(s)),{a:t,b:o}=Q(a,e);return{a:t,b:Math.exp(o)}}function It(a,n){const e=a.map(i=>Math.log(i)),t=n.map(i=>Math.log(i)),{a:o,b:s}=Q(e,t);return{a:o,b:Math.exp(s)}}function D(a,n,e){let t=0;for(let o=0;o<n.length;o++){const s=a(n[o])-e[o];t+=s*s}return t}function Be(a,n){let e=0;for(let t=a.length-1;t>=0;t--)e=e*n+a[t];return e}var Lt=function(n,e,t){for(var o=t,s=0,i=n.length;o<e.length;){var r=e[o];if(s<=0&&e.slice(o,o+i)===n)return o;r==="\\"?o++:r==="{"?s++:r==="}"&&s--,o++}return-1},Mt=function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},Rt=/^\\begin{/,Nt=function(n,e){for(var t,o=[],s=new RegExp("("+e.map(m=>Mt(m.left)).join("|")+")");t=n.search(s),t!==-1;){t>0&&(o.push({type:"text",data:n.slice(0,t)}),n=n.slice(t));var i=e.findIndex(m=>n.startsWith(m.left));if(t=Lt(e[i].right,n,e[i].left.length),t===-1)break;var r=n.slice(0,t+e[i].right.length),l=Rt.test(r)?r:n.slice(e[i].left.length,t);o.push({type:"math",data:l,rawData:r,display:e[i].display}),n=n.slice(t+e[i].right.length)}return n!==""&&o.push({type:"text",data:n}),o},Bt=function(n,e){var t=Nt(n,e.delimiters);if(t.length===1&&t[0].type==="text")return null;for(var o=document.createDocumentFragment(),s=0;s<t.length;s++)if(t[s].type==="text")o.appendChild(document.createTextNode(t[s].data));else{var i=document.createElement("span"),r=t[s].data;e.displayMode=t[s].display;try{e.preProcess&&(r=e.preProcess(r)),ye.render(r,i,e)}catch(l){if(!(l instanceof ye.ParseError))throw l;e.errorCallback("KaTeX auto-render: Failed to parse `"+t[s].data+"` with ",l),o.appendChild(document.createTextNode(t[s].rawData));continue}o.appendChild(i)}return o},Ke=function(n,e){for(var t=function(i){var r=n.childNodes[i];if(r.nodeType===3){for(var l,m=(l=r.textContent)!=null?l:"",h=r.nextSibling,u=0;h&&h.nodeType===Node.TEXT_NODE;){var p;m+=(p=h.textContent)!=null?p:"",h=h.nextSibling,u++}var d=Bt(m,e);if(d){for(var $=0;$<u;$++)r.nextSibling.remove();i+=d.childNodes.length-1,n.replaceChild(d,r)}else i+=u}else if(r.nodeType===1){var f=" "+r.className+" ",x=!e.ignoredTags.has(r.nodeName.toLowerCase())&&e.ignoredClasses.every(g=>!f.includes(" "+g+" "));x&&Ke(r,e)}o=i},o=0;o<n.childNodes.length;o++)t(o)},Wt=function(n,e){if(!n)throw new Error("No element provided to render");var t={};Object.assign(t,e),t.delimiters=t.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],t.ignoredTags=new Set((e==null?void 0:e.ignoredTags)||["script","noscript","style","textarea","pre","code","option"]),t.ignoredClasses=t.ignoredClasses||[],t.errorCallback=t.errorCallback||console.error,t.macros=t.macros||{},Ke(n,t)};function we(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let X=we();function Ue(a){X=a}const Je=/[&<>"']/,Ct=new RegExp(Je.source,"g"),et=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Pt=new RegExp(et.source,"g"),Vt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=a=>Vt[a];function S(a,n){if(n){if(Je.test(a))return a.replace(Ct,We)}else if(et.test(a))return a.replace(Pt,We);return a}const Ht=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Dt(a){return a.replace(Ht,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Ot=/(^|[^\[])\^/g;function _(a,n){let e=typeof a=="string"?a:a.source;n=n||"";const t={replace:(o,s)=>{let i=typeof s=="string"?s:s.source;return i=i.replace(Ot,"$1"),e=e.replace(o,i),t},getRegex:()=>new RegExp(e,n)};return t}function Ce(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const ee={exec:()=>null};function Pe(a,n){const e=a.replace(/\|/g,(s,i,r)=>{let l=!1,m=i;for(;--m>=0&&r[m]==="\\";)l=!l;return l?"|":" |"}),t=e.split(/ \|/);let o=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;o<t.length;o++)t[o]=t[o].trim().replace(/\\\|/g,"|");return t}function re(a,n,e){const t=a.length;if(t===0)return"";let o=0;for(;o<t&&a.charAt(t-o-1)===n;)o++;return a.slice(0,t-o)}function Gt(a,n){if(a.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===n[0])e++;else if(a[t]===n[1]&&(e--,e<0))return t;return-1}function Ve(a,n,e,t){const o=n.href,s=n.title?S(n.title):null,i=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){t.state.inLink=!0;const r={type:"link",raw:e,href:o,title:s,text:i,tokens:t.inlineTokens(i)};return t.state.inLink=!1,r}return{type:"image",raw:e,href:o,title:s,text:S(i)}}function Xt(a,n){const e=a.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(o=>{const s=o.match(/^\s+/);if(s===null)return o;const[i]=s;return i.length>=t.length?o.slice(t.length):o}).join(`
`)}class ce{constructor(n){k(this,"options");k(this,"rules");k(this,"lexer");this.options=n||X}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:re(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],o=Xt(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:o}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const o=re(t,"#");(this.options.pedantic||!o||/ $/.test(o))&&(t=o.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);t=re(t.replace(/^ *>[ \t]?/gm,""),`
`);const o=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(t);return this.lexer.state.top=o,{type:"blockquote",raw:e[0],tokens:s,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const o=t.length>1,s={type:"list",raw:"",ordered:o,start:o?+t.slice(0,-1):"",loose:!1,items:[]};t=o?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=o?t:"[*+-]");const i=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let r="",l="",m=!1;for(;n;){let h=!1;if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;r=e[0],n=n.substring(r.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,g=>" ".repeat(3*g.length)),p=n.split(`
`,1)[0],d=0;this.options.pedantic?(d=2,l=u.trimStart()):(d=e[2].search(/[^ ]/),d=d>4?1:d,l=u.slice(d),d+=e[1].length);let $=!1;if(!u&&/^ *$/.test(p)&&(r+=p+`
`,n=n.substring(p.length+1),h=!0),!h){const g=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),v=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),z=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;n;){const A=n.split(`
`,1)[0];if(p=A,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),z.test(p)||w.test(p)||g.test(p)||v.test(n))break;if(p.search(/[^ ]/)>=d||!p.trim())l+=`
`+p.slice(d);else{if($||u.search(/[^ ]/)>=4||z.test(u)||w.test(u)||v.test(u))break;l+=`
`+p}!$&&!p.trim()&&($=!0),r+=A+`
`,n=n.substring(A.length+1),u=p.slice(d)}}s.loose||(m?s.loose=!0:/\n *\n *$/.test(r)&&(m=!0));let f=null,x;this.options.gfm&&(f=/^\[[ xX]\] /.exec(l),f&&(x=f[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:r,task:!!f,checked:x,loose:!1,text:l,tokens:[]}),s.raw+=r}s.items[s.items.length-1].raw=r.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let h=0;h<s.items.length;h++)if(this.lexer.state.top=!1,s.items[h].tokens=this.lexer.blockTokens(s.items[h].text,[]),!s.loose){const u=s.items[h].tokens.filter(d=>d.type==="space"),p=u.length>0&&u.some(d=>/\n.*\n/.test(d.raw));s.loose=p}if(s.loose)for(let h=0;h<s.items.length;h++)s.items[h].loose=!0;return s}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),o=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:o,title:s}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!/[:|]/.test(e[2]))return;const t=Pe(e[1]),o=e[2].replace(/^\||\| *$/g,"").split("|"),s=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===o.length){for(const r of o)/^ *-+: *$/.test(r)?i.align.push("right"):/^ *:-+: *$/.test(r)?i.align.push("center"):/^ *:-+ *$/.test(r)?i.align.push("left"):i.align.push(null);for(const r of t)i.header.push({text:r,tokens:this.lexer.inline(r)});for(const r of s)i.rows.push(Pe(r,i.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return i}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:S(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const i=re(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{const i=Gt(e[2],"()");if(i>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let o=e[2],s="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);i&&(o=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(t)?o=o.slice(1):o=o.slice(1,-1)),Ve(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const o=(t[2]||t[1]).replace(/\s+/g," "),s=e[o.toLowerCase()];if(!s){const i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return Ve(t,s,t[0],this.lexer)}}emStrong(n,e,t=""){let o=this.rules.inline.emStrongLDelim.exec(n);if(!o||o[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const i=[...o[0]].length-1;let r,l,m=i,h=0;const u=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*n.length+i);(o=u.exec(e))!=null;){if(r=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!r)continue;if(l=[...r].length,o[3]||o[4]){m+=l;continue}else if((o[5]||o[6])&&i%3&&!((i+l)%3)){h+=l;continue}if(m-=l,m>0)continue;l=Math.min(l,l+m+h);const p=[...o[0]][0].length,d=n.slice(0,i+o.index+p+l);if(Math.min(i,l)%2){const f=d.slice(1,-1);return{type:"em",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}const $=d.slice(2,-2);return{type:"strong",raw:d,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const o=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return o&&s&&(t=t.substring(1,t.length-1)),t=S(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,o;return e[2]==="@"?(t=S(e[1]),o="mailto:"+t):(t=S(e[1]),o=t),{type:"link",raw:e[0],text:t,href:o,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let o,s;if(e[2]==="@")o=S(e[0]),s="mailto:"+o;else{let i;do i=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(i!==e[0]);o=S(e[0]),e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=S(e[0]),{type:"text",raw:e[0],text:t}}}}const Yt=/^(?: *(?:\n|$))+/,Qt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Zt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ie=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Kt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,tt=/(?:[*+-]|\d{1,9}[.)])/,nt=_(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,tt).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),qe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ut=/^[^\n]+/,je=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Jt=_(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",je).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),en=_(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,tt).getRegex(),xe="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ae=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,tn=_("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Ae).replace("tag",xe).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),it=_(qe).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex(),nn=_(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",it).getRegex(),Te={blockquote:nn,code:Qt,def:Jt,fences:Zt,heading:Kt,hr:ie,html:tn,lheading:nt,list:en,newline:Yt,paragraph:it,table:ee,text:Ut},He=_("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex(),an={...Te,table:He,paragraph:_(qe).replace("hr",ie).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",He).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xe).getRegex()},sn={...Te,html:_(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ae).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:_(qe).replace("hr",ie).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},at=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,on=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,st=/^( {2,}|\\)\n(?!\s*$)/,rn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ae="\\p{P}\\p{S}",ln=_(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ae).getRegex(),hn=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,cn=_(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ae).getRegex(),mn=_("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ae).getRegex(),un=_("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ae).getRegex(),pn=_(/\\([punct])/,"gu").replace(/punct/g,ae).getRegex(),$n=_(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),dn=_(Ae).replace("(?:-->|$)","-->").getRegex(),fn=_("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",dn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),me=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,xn=_(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",me).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ot=_(/^!?\[(label)\]\[(ref)\]/).replace("label",me).replace("ref",je).getRegex(),rt=_(/^!?\[(ref)\](?:\[\])?/).replace("ref",je).getRegex(),gn=_("reflink|nolink(?!\\()","g").replace("reflink",ot).replace("nolink",rt).getRegex(),Se={_backpedal:ee,anyPunctuation:pn,autolink:$n,blockSkip:hn,br:st,code:on,del:ee,emStrongLDelim:cn,emStrongRDelimAst:mn,emStrongRDelimUnd:un,escape:at,link:xn,nolink:rt,punctuation:ln,reflink:ot,reflinkSearch:gn,tag:fn,text:rn,url:ee},yn={...Se,link:_(/^!?\[(label)\]\((.*?)\)/).replace("label",me).getRegex(),reflink:_(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",me).getRegex()},_e={...Se,escape:_(at).replace("])","~|])").getRegex(),url:_(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},bn={..._e,br:_(st).replace("{2,}","*").getRegex(),text:_(_e.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},le={normal:Te,gfm:an,pedantic:sn},U={normal:Se,gfm:_e,breaks:bn,pedantic:yn};class R{constructor(n){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||X,this.options.tokenizer=this.options.tokenizer||new ce,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:le.normal,inline:U.normal};this.options.pedantic?(e.block=le.pedantic,e.inline=U.pedantic):this.options.gfm&&(e.block=le.gfm,this.options.breaks?e.inline=U.breaks:e.inline=U.gfm),this.tokenizer.rules=e}static get rules(){return{block:le,inline:U}}static lex(n,e){return new R(e).lex(n)}static lexInline(n,e){return new R(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(r,l,m)=>l+"    ".repeat(m.length));let t,o,s,i;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>(t=r.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),o=e[e.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+t.raw,o.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),o=e[e.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+t.raw,o.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startBlock){let r=1/0;const l=n.slice(1);let m;this.options.extensions.startBlock.forEach(h=>{m=h.call({lexer:this},l),typeof m=="number"&&m>=0&&(r=Math.min(r,m))}),r<1/0&&r>=0&&(s=n.substring(0,r+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){o=e[e.length-1],i&&o.type==="paragraph"?(o.raw+=`
`+t.raw,o.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):e.push(t),i=s.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),o=e[e.length-1],o&&o.type==="text"?(o.raw+=`
`+t.raw,o.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):e.push(t);continue}if(n){const r="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,o,s,i=n,r,l,m;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)h.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(l||(m=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(t=h.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),o=e[e.length-1],o&&t.type==="text"&&o.type==="text"?(o.raw+=t.raw,o.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),o=e[e.length-1],o&&t.type==="text"&&o.type==="text"?(o.raw+=t.raw,o.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,i,m)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const u=n.slice(1);let p;this.options.extensions.startInline.forEach(d=>{p=d.call({lexer:this},u),typeof p=="number"&&p>=0&&(h=Math.min(h,p))}),h<1/0&&h>=0&&(s=n.substring(0,h+1))}if(t=this.tokenizer.inlineText(s)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(m=t.raw.slice(-1)),l=!0,o=e[e.length-1],o&&o.type==="text"?(o.raw+=t.raw,o.text+=t.text):e.push(t);continue}if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return e}}class ue{constructor(n){k(this,"options");this.options=n||X}code(n,e,t){var s;const o=(s=(e||"").match(/^\S*/))==null?void 0:s[0];return n=n.replace(/\n$/,"")+`
`,o?'<pre><code class="language-'+S(o)+'">'+(t?n:S(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:S(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const o=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+o+s+`>
`+n+"</"+o+`>
`}listitem(n,e,t){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const o=Ce(n);if(o===null)return t;n=o;let s='<a href="'+n+'"';return e&&(s+=' title="'+e+'"'),s+=">"+t+"</a>",s}image(n,e,t){const o=Ce(n);if(o===null)return t;n=o;let s=`<img src="${n}" alt="${t}"`;return e&&(s+=` title="${e}"`),s+=">",s}text(n){return n}}class Fe{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class N{constructor(n){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=n||X,this.options.renderer=this.options.renderer||new ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Fe}static parse(n,e){return new N(e).parse(n)}static parseInline(n,e){return new N(e).parseInline(n)}parse(n,e=!0){let t="";for(let o=0;o<n.length;o++){const s=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const i=s,r=this.options.extensions.renderers[i.type].call({parser:this},i);if(r!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){t+=r||"";continue}}switch(s.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const i=s;t+=this.renderer.heading(this.parseInline(i.tokens),i.depth,Dt(this.parseInline(i.tokens,this.textRenderer)));continue}case"code":{const i=s;t+=this.renderer.code(i.text,i.lang,!!i.escaped);continue}case"table":{const i=s;let r="",l="";for(let h=0;h<i.header.length;h++)l+=this.renderer.tablecell(this.parseInline(i.header[h].tokens),{header:!0,align:i.align[h]});r+=this.renderer.tablerow(l);let m="";for(let h=0;h<i.rows.length;h++){const u=i.rows[h];l="";for(let p=0;p<u.length;p++)l+=this.renderer.tablecell(this.parseInline(u[p].tokens),{header:!1,align:i.align[p]});m+=this.renderer.tablerow(l)}t+=this.renderer.table(r,m);continue}case"blockquote":{const i=s,r=this.parse(i.tokens);t+=this.renderer.blockquote(r);continue}case"list":{const i=s,r=i.ordered,l=i.start,m=i.loose;let h="";for(let u=0;u<i.items.length;u++){const p=i.items[u],d=p.checked,$=p.task;let f="";if(p.task){const x=this.renderer.checkbox(!!d);m?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=x+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=x+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:x+" "}):f+=x+" "}f+=this.parse(p.tokens,m),h+=this.renderer.listitem(f,$,!!d)}t+=this.renderer.list(h,r,l);continue}case"html":{const i=s;t+=this.renderer.html(i.text,i.block);continue}case"paragraph":{const i=s;t+=this.renderer.paragraph(this.parseInline(i.tokens));continue}case"text":{let i=s,r=i.tokens?this.parseInline(i.tokens):i.text;for(;o+1<n.length&&n[o+1].type==="text";)i=n[++o],r+=`
`+(i.tokens?this.parseInline(i.tokens):i.text);t+=e?this.renderer.paragraph(r):r;continue}default:{const i='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let o=0;o<n.length;o++){const s=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const i=this.options.extensions.renderers[s.type].call({parser:this},s);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=i||"";continue}}switch(s.type){case"escape":{const i=s;t+=e.text(i.text);break}case"html":{const i=s;t+=e.html(i.text);break}case"link":{const i=s;t+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break}case"image":{const i=s;t+=e.image(i.href,i.title,i.text);break}case"strong":{const i=s;t+=e.strong(this.parseInline(i.tokens,e));break}case"em":{const i=s;t+=e.em(this.parseInline(i.tokens,e));break}case"codespan":{const i=s;t+=e.codespan(i.text);break}case"br":{t+=e.br();break}case"del":{const i=s;t+=e.del(this.parseInline(i.tokens,e));break}case"text":{const i=s;t+=e.text(i.text);break}default:{const i='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return t}}class te{constructor(n){k(this,"options");this.options=n||X}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}k(te,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var G,ke,lt;class _n{constructor(...n){Re(this,G);k(this,"defaults",we());k(this,"options",this.setOptions);k(this,"parse",oe(this,G,ke).call(this,R.lex,N.parse));k(this,"parseInline",oe(this,G,ke).call(this,R.lexInline,N.parseInline));k(this,"Parser",N);k(this,"Renderer",ue);k(this,"TextRenderer",Fe);k(this,"Lexer",R);k(this,"Tokenizer",ce);k(this,"Hooks",te);this.use(...n)}walkTokens(n,e){var o,s;let t=[];for(const i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{const r=i;for(const l of r.header)t=t.concat(this.walkTokens(l.tokens,e));for(const l of r.rows)for(const m of l)t=t.concat(this.walkTokens(m.tokens,e));break}case"list":{const r=i;t=t.concat(this.walkTokens(r.items,e));break}default:{const r=i;(s=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&s[r.type]?this.defaults.extensions.childTokens[r.type].forEach(l=>{const m=r[l].flat(1/0);t=t.concat(this.walkTokens(m,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const o={...t};if(o.async=this.defaults.async||o.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...r){let l=s.renderer.apply(this,r);return l===!1&&(l=i.apply(this,r)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),o.extensions=e),t.renderer){const s=this.defaults.renderer||new ue(this.defaults);for(const i in t.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(i==="options")continue;const r=i,l=t.renderer[r],m=s[r];s[r]=(...h)=>{let u=l.apply(s,h);return u===!1&&(u=m.apply(s,h)),u||""}}o.renderer=s}if(t.tokenizer){const s=this.defaults.tokenizer||new ce(this.defaults);for(const i in t.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const r=i,l=t.tokenizer[r],m=s[r];s[r]=(...h)=>{let u=l.apply(s,h);return u===!1&&(u=m.apply(s,h)),u}}o.tokenizer=s}if(t.hooks){const s=this.defaults.hooks||new te;for(const i in t.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;const r=i,l=t.hooks[r],m=s[r];te.passThroughHooks.has(i)?s[r]=h=>{if(this.defaults.async)return Promise.resolve(l.call(s,h)).then(p=>m.call(s,p));const u=l.call(s,h);return m.call(s,u)}:s[r]=(...h)=>{let u=l.apply(s,h);return u===!1&&(u=m.apply(s,h)),u}}o.hooks=s}if(t.walkTokens){const s=this.defaults.walkTokens,i=t.walkTokens;o.walkTokens=function(r){let l=[];return l.push(i.call(this,r)),s&&(l=l.concat(s.call(this,r))),l}}this.defaults={...this.defaults,...o}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return R.lex(n,e??this.defaults)}parser(n,e){return N.parse(n,e??this.defaults)}}G=new WeakSet,ke=function(n,e){return(t,o)=>{const s={...o},i={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);const r=oe(this,G,lt).call(this,!!i.silent,!!i.async);if(typeof t>"u"||t===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(l=>n(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>e(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(r);try{i.hooks&&(t=i.hooks.preprocess(t));let l=n(t,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let m=e(l,i);return i.hooks&&(m=i.hooks.postprocess(m)),m}catch(l){return r(l)}}},lt=function(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const o="<p>An error occurred:</p><pre>"+S(t.message+"",!0)+"</pre>";return e?Promise.resolve(o):o}if(e)return Promise.reject(t);throw t}};const O=new _n;function y(a,n){return O.parse(a,n)}y.options=y.setOptions=function(a){return O.setOptions(a),y.defaults=O.defaults,Ue(y.defaults),y};y.getDefaults=we;y.defaults=X;y.use=function(...a){return O.use(...a),y.defaults=O.defaults,Ue(y.defaults),y};y.walkTokens=function(a,n){return O.walkTokens(a,n)};y.parseInline=O.parseInline;y.Parser=N;y.parser=N.parse;y.Renderer=ue;y.TextRenderer=Fe;y.Lexer=R;y.lexer=R.lex;y.Tokenizer=ce;y.Hooks=te;y.parse=y;y.options;y.setOptions;y.use;y.walkTokens;y.parseInline;N.parse;R.lex;const kn={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1};function Ee(a){a&&Wt(a,kn)}y.setOptions({breaks:!0,gfm:!0});function Ie(a,n){const e=()=>n.forEach(o=>{if(o&&o.offsetParent!==null)try{ne.Plots.resize(o)}catch{}});requestAnimationFrame(e),setTimeout(e,60);let t;return typeof ResizeObserver<"u"&&(t=new ResizeObserver(e),t.observe(a)),()=>{t&&t.disconnect()}}function pe(a={}){const n=J("--fg")||"#1a1a2e",e=J("--grid")||"#d8d8e0",t=J("--surface")||"#ffffff";return{paper_bgcolor:t,plot_bgcolor:t,font:{color:n,family:"system-ui, sans-serif"},margin:{l:44,r:16,t:28,b:40},xaxis:{gridcolor:e,zerolinecolor:e},yaxis:{gridcolor:e,zerolinecolor:e},showlegend:!0,legend:{orientation:"h",y:1.12,x:0},...a}}const $e=()=>J("--accent")||"#e63946",de=()=>J("--point")||"#3a6ea5",fe={displayModeBar:!1,responsive:!0},he={xs:[-1,1,2.5,3,4,4.5,6],ys:[0,1.2,1.9,2.5,3.1,3.2,4.5]};function zn(a){let n=[...he.xs],e=[...he.ys],t=!1,o=.5,s=.5;a.innerHTML=`
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
    </div>`;const i=a.querySelector("[data-plot]"),r=a.querySelector("[data-readout]"),l=a.querySelector("[data-sliders]");function m($,f){const x=(f-$)*.1||1;return[$-x,f+x]}function h(){const{a:$,b:f}=Q(n,e),[x,g]=m(Math.min(...n),Math.max(...n)),v=[{x:n,y:e,mode:"markers",type:"scatter",name:b({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:[x,g],y:[$*x+f,$*g+f],mode:"lines",name:b(q.demoBestFit),line:{color:$e(),width:3}}];t&&v.push({x:[x,g],y:[o*x+s,o*g+s],mode:"lines",name:b(q.demoGuess),line:{color:"#f4a261",width:2,dash:"dash"}}),ne.react(i,v,pe({xaxis:{range:[x,g]}}),fe);const z=D(A=>$*A+f,n,e);let w=`<div class="ro-row">$\\bar a = ${$.toFixed(6)},\\quad \\bar b = ${f.toFixed(6)}$</div>`;if(w+=`<div class="ro-row"><span class="ro-label">${b(q.optimalError)}:</span> $F = ${z.toFixed(6)}$</div>`,t){const A=D(F=>o*F+s,n,e),B=A>0?z/A:1,W=B>.98?"★★★":B>.85?"★★☆":B>.6?"★☆☆":"☆☆☆";w+=`<div class="ro-row"><span class="ro-label">${b(q.yourError)}:</span> $F = ${A.toFixed(6)}$ <span class="ro-stars">${W}</span></div>`}r.innerHTML=w,Ee(r)}function u(){const $=i.querySelector(".nsewdrag");if(!$)return;let f=-1;const x=g=>{const v=$.getBoundingClientRect(),z=i._fullLayout.xaxis,w=i._fullLayout.yaxis;return{x:z.p2d(g.clientX-v.left),y:w.p2d(g.clientY-v.top)}};$.addEventListener("mousedown",g=>{const v=x(g),z=i._fullLayout.xaxis,w=i._fullLayout.yaxis,A=z.range[1]-z.range[0],B=w.range[1]-w.range[0];let W=-1,F=1/0;for(let V=0;V<n.length;V++){const se=(n[V]-v.x)/A,Z=(e[V]-v.y)/B,K=se*se+Z*Z;K<F&&(F=K,W=V)}W>=0&&F<.0025&&(f=W,g.preventDefault())}),window.addEventListener("mousemove",g=>{f<0||(e[f]=x(g).y,h())}),window.addEventListener("mouseup",()=>{f=-1})}a.querySelector('[data-act="best"]').addEventListener("click",()=>{t=!1,l.hidden=!0,a.querySelector('[data-act="guess"]').setAttribute("aria-pressed","false"),h()}),a.querySelector('[data-act="guess"]').addEventListener("click",$=>{t=!t,l.hidden=!t,$.currentTarget.setAttribute("aria-pressed",String(t)),h()}),a.querySelector('[data-act="add"]').addEventListener("click",()=>{const $=Q(n,e),f=Math.max(...n)+1;n.push(f),e.push($.a*f+$.b),h(),setTimeout(u,60)}),a.querySelector('[data-act="reset"]').addEventListener("click",()=>{n=[...he.xs],e=[...he.ys],h(),setTimeout(u,60)}),a.querySelectorAll("[data-slider]").forEach($=>{$.value=$.dataset.slider==="a"?o:s,$.addEventListener("input",()=>{$.dataset.slider==="a"?o=parseFloat($.value):s=parseFloat($.value),a.querySelector("[data-ga]").textContent=o.toFixed(2),a.querySelector("[data-gb]").textContent=s.toFixed(2),h()})}),a.querySelector("[data-ga]").textContent=o.toFixed(2),a.querySelector("[data-gb]").textContent=s.toFixed(2),h(),setTimeout(u,80);const p=ve(()=>h()),d=Ie(a,[i]);return()=>{p(),d()}}const De={xs:[-1,0,.5,1,2,2.5,3],ys:[1.4,1.9,1.6,1.7,.2,-.1,-2]};function vn(a){let n=[...De.xs],e=[...De.ys],t=2;const o=Math.min(6,n.length-1);a.innerHTML=`
    <div class="demo">
      <div class="demo-sliders">
        <label>${b(q.degree)} $m$ (<span data-deg></span>)
          <input type="range" min="1" max="${o}" step="1" value="${t}" data-slider="m">
        </label>
      </div>
      <div class="demo-plot" data-plot></div>
      <div class="demo-readout" data-readout></div>
    </div>`;const s=a.querySelector("[data-plot]"),i=a.querySelector("[data-readout]");a.querySelector("[data-deg]").textContent=t;function r(){const h=Ft(n,e,t),u=Math.min(...n)-.4,p=Math.max(...n)+.4,d=[],$=[],f=120;for(let z=0;z<=f;z++){const w=u+(p-u)*z/f;d.push(w),$.push(Be(h,w))}ne.react(s,[{x:n,y:e,mode:"markers",type:"scatter",name:b({hu:"adatok",en:"data"}),marker:{size:11,color:de()}},{x:d,y:$,mode:"lines",name:`${b({hu:"fokszám",en:"degree"})} ${t}`,line:{color:$e(),width:3}}],pe({xaxis:{range:[u,p]}}),fe);const x=D(z=>Be(h,z),n,e);let v=`<div class="ro-row">$p(x) = ${h.map((z,w)=>w===0?z.toFixed(4):`${z>=0?"+":""}${z.toFixed(4)}x^{${w}}`).join(" ")}$</div>`;v+=`<div class="ro-row"><span class="ro-label">${b(q.error)}:</span> $F = ${x.toFixed(6)}$</div>`,t>=n.length-1&&(v+=`<div class="ro-row ro-warn">${b({hu:"⚠ $m \\ge n$: interpoláció, a hiba ≈ 0.",en:"⚠ $m \\ge n$: interpolation, error ≈ 0."})}</div>`),i.innerHTML=v,Ee(i)}a.querySelector('[data-slider="m"]').addEventListener("input",h=>{t=parseInt(h.target.value,10),a.querySelector("[data-deg]").textContent=t,r()}),r();const l=ve(()=>r()),m=Ie(a,[s]);return()=>{l(),m()}}const wn={exp:{xs:[0,1,1.5,2,3,4],ys:[.3,.7,.9,1.2,1.8,2.7]},power:{xs:[.5,1,1.5,2.5,3],ys:[.7,1.1,1.6,2.1,2.3]}};function qn(a){let n="exp";a.innerHTML=`
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
    </div>`;const e=a.querySelector("[data-plot1]"),t=a.querySelector("[data-plot2]"),o=a.querySelector("[data-cap1]"),s=a.querySelector("[data-cap2]"),i=a.querySelector("[data-readout]");function r(){const{xs:h,ys:u}=wn[n];o.textContent=b(q.linearizedSpace),s.textContent=b(q.originalSpace);let p,d,$,f,x,g,v,z,w,A;if(n==="exp"){$=h.slice(),f=u.map(j=>Math.log(j));const C=Q($,f);x=C.a,g=C.b,{a:p,b:d}=Et(h,u),v=j=>d*Math.exp(p*j),z=D(j=>x*j+g,$,f),w=D(v,h,u),A=`y = ${d.toFixed(6)}\\, e^{${p.toFixed(6)} x}`}else{$=h.map(j=>Math.log(j)),f=u.map(j=>Math.log(j));const C=Q($,f);x=C.a,g=C.b,{a:p,b:d}=It(h,u),v=j=>d*Math.pow(j,p),z=D(j=>x*j+g,$,f),w=D(v,h,u),A=`y = ${d.toFixed(6)}\\, x^{${p.toFixed(6)}}`}const B=Math.min(...$),W=Math.max(...$),F=(W-B)*.1||1;ne.react(e,[{x:$,y:f,mode:"markers",type:"scatter",name:b(n==="exp"?{hu:"(x, ln y)",en:"(x, ln y)"}:{hu:"(ln x, ln y)",en:"(ln x, ln y)"}),marker:{size:10,color:de()}},{x:[B-F,W+F],y:[x*(B-F)+g,x*(W+F)+g],mode:"lines",name:b({hu:"illesztett egyenes",en:"fitted line"}),line:{color:$e(),width:3}}],pe(),fe);const V=Math.min(...h),se=Math.max(...h),Z=[],K=[],Le=120;for(let C=0;C<=Le;C++){const j=V+(se-V)*C/Le;Z.push(j),K.push(v(j))}ne.react(t,[{x:h,y:u,mode:"markers",type:"scatter",name:b({hu:"adatok",en:"data"}),marker:{size:10,color:de()}},{x:Z,y:K,mode:"lines",name:b({hu:"illesztett görbe",en:"fitted curve"}),line:{color:$e(),width:3}}],pe(),fe),i.innerHTML=`<div class="ro-row">$${A}$</div><div class="ro-row">$A = ${x.toFixed(6)},\\quad B = ${g.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${b(q.linearError)}:</span> $${z.toFixed(6)}$</div><div class="ro-row"><span class="ro-label">${b(q.nonlinearError)}:</span> $${w.toFixed(6)}$</div>`,Ee(i)}a.querySelectorAll("[data-model]").forEach(h=>{h.addEventListener("click",()=>{n=h.dataset.model,a.querySelectorAll("[data-model]").forEach(u=>u.setAttribute("aria-pressed",String(u.dataset.model===n))),r()})}),r();const l=ve(()=>r()),m=Ie(a,[e,t]);return()=>{l(),m()}}const ge={line:zn,polynomial:vn,nonlinear:qn};function jn({component:a,caption:n}){const e=T.useRef(null);return T.useEffect(()=>{var s;const t=e.current;if(!t)return;const o=(s=ge[a])==null?void 0:s.call(ge,t);return()=>{typeof o=="function"&&o()}},[a]),c.jsxs("figure",{className:"demo-figure",children:[c.jsx("div",{className:"demo-host",ref:e}),n&&c.jsx("figcaption",{children:c.jsx(P,{markdown:n})})]})}const An={intro:[{q:{hu:"Miért a négyzetes hibát ($F$) minimalizáljuk az $F_1$ (maximum) vagy $F_2$ (abszolút) helyett?",en:"Why minimize the squared error ($F$) instead of $F_1$ (max) or $F_2$ (absolute)?"},options:[{hu:"Mert differenciálható, így a minimum a deriváltak nullhelyén kereshető",en:"Because it is differentiable, so the minimum is found where derivatives vanish"},{hu:"Mert mindig kisebb értéket ad",en:"Because it always gives a smaller value"},{hu:"Mert nem igényel mérési adatokat",en:"Because it needs no measurement data"}],correct:0},{q:{hu:"Mit jelöl az $\\mathbf{a}$ a $g(x;\\mathbf{a})$ jelölésben?",en:"What does $\\mathbf{a}$ denote in the notation $g(x;\\mathbf{a})$?"},options:[{hu:"A mérési pontok számát",en:"The number of data points"},{hu:"Az illesztendő függvény ismeretlen paramétereit",en:"The unknown parameters of the function to fit"},{hu:"A maximális hibát",en:"The maximum error"}],correct:1}],line:[{q:{hu:"Mi a $b$ együtthatója a második Gauss-féle normálegyenletben?",en:"What is the coefficient of $b$ in the second Gaussian normal equation?"},options:[{hu:"$\\sum x_i$",en:"$\\sum x_i$"},{hu:"$n+1$ (a mérési pontok száma)",en:"$n+1$ (the number of data points)"},{hu:"$\\sum x_i^2$",en:"$\\sum x_i^2$"}],correct:1},{q:{hu:"Mikor garantált, hogy a $d$ determináns pozitív (egyértelmű megoldás)?",en:"When is the determinant $d$ guaranteed positive (unique solution)?"},options:[{hu:"Ha minden $y_i$ egyenlő",en:"If all $y_i$ are equal"},{hu:"Ha legalább két $x_i$ különböző",en:"If at least two $x_i$ are distinct"},{hu:"Ha $n = 1$",en:"If $n = 1$"}],correct:1},{q:{hu:"A 9.2. példában mekkora az illesztett egyenes meredeksége ($\\bar a$)?",en:"In Example 9.2, what is the slope $\\bar a$ of the fitted line?"},options:[{hu:"$0.542163$",en:"$0.542163$"},{hu:"$0.630243$",en:"$0.630243$"},{hu:"$0.124691$",en:"$0.124691$"}],correct:1}],polynomial:[{q:{hu:"Miért invertálható a (4) rendszer $\\mathbf{A}$ mátrixa, ha $m \\le n$ és az $x_i$-k különbözők?",en:"Why is the matrix $\\mathbf{A}$ of system (4) invertible when $m \\le n$ and the $x_i$ are distinct?"},options:[{hu:"Mert szimmetrikus",en:"Because it is symmetric"},{hu:"Mert pozitív definit ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ ha $\\mathbf{z} \\ne 0$)",en:"Because it is positive definite ($\\mathbf{z}^T\\mathbf{A}\\mathbf{z} > 0$ for $\\mathbf{z} \\ne 0$)"},{hu:"Mert minden eleme pozitív",en:"Because all its entries are positive"}],correct:1},{q:{hu:"Mi történik, ha $n \\le m$ (több paraméter, mint a kényszerek)?",en:"What happens if $n \\le m$ (more parameters than constraints)?"},options:[{hu:"A pontokon átmenő interpoláló polinom létezik, $F$ minimuma 0",en:"An interpolating polynomial exists through the points; the minimum of $F$ is 0"},{hu:"Nincs megoldás",en:"There is no solution"},{hu:"A hiba végtelen",en:"The error is infinite"}],correct:0}],nonlinear:[{q:{hu:"Hogyan linearizáljuk a $y = b e^{ax}$ modellt?",en:"How do we linearize the model $y = b e^{ax}$?"},options:[{hu:"$\\ln y = \\ln b + a x$ (egyenes az $(x, \\ln y)$ síkon)",en:"$\\ln y = \\ln b + a x$ (a line in the $(x, \\ln y)$ plane)"},{hu:"$\\ln y = a \\ln x + \\ln b$",en:"$\\ln y = a \\ln x + \\ln b$"},{hu:"$y^2 = a x + b$",en:"$y^2 = a x + b$"}],correct:0},{q:{hu:"A $y = b x^a$ hatványfüggvényt melyik koordinátákban illesztjük egyenessel?",en:"In which coordinates do we fit a line for the power model $y = b x^a$?"},options:[{hu:"$(x, \\ln y)$",en:"$(x, \\ln y)$"},{hu:"$(\\ln x, \\ln y)$",en:"$(\\ln x, \\ln y)$"},{hu:"$(\\ln x, y)$",en:"$(\\ln x, y)$"}],correct:1},{q:{hu:"Igaz-e, hogy a linearizált illesztés pontosan minimalizálja az eredeti nemlineáris négyzetes hibát?",en:"Does the linearized fit exactly minimize the original nonlinear least-square error?"},options:[{hu:"Igen, mindig",en:"Yes, always"},{hu:"Nem — jó közelítés, de a transzformált térben minimalizál",en:"No — it is a good approximation, but minimizes in the transformed space"},{hu:"Csak ha $a = 0$",en:"Only if $a = 0$"}],correct:1}]},E={quiz:{en:"Quiz",hu:"Kvíz"},check:{en:"Check answer",hu:"Ellenőrzés"},next:{en:"Next",hu:"Következő"},correct:{en:"Correct! ✓",hu:"Helyes! ✓"},incorrect:{en:"Not quite — try again.",hu:"Nem egészen — próbáld újra."},done:{en:"Quiz complete!",hu:"Kvíz teljesítve!"},score:{en:"Score",hu:"Eredmény"},complete:{en:"Section complete",hu:"Szakasz teljesítve"},retry:{en:"Retry",hu:"Újra"}};function Tn({refKey:a,sectionId:n}){const{t:e}=H(),t=An[a]??[],[o,s]=T.useState(0),[i,r]=T.useState(0),[l,m]=T.useState(-1),[h,u]=T.useState("none");if(!t.length)return null;const p=()=>{s(0),r(0),m(-1),u("none")};if(o>=t.length){const x=Math.round(i/t.length*100),g=i===t.length;return g&&Tt(n),c.jsxs("div",{className:"quiz",children:[c.jsxs("div",{className:"quiz-head",children:[c.jsx("span",{className:"quiz-icon",children:"🎯"}),c.jsx("strong",{children:e(E.quiz)})]}),c.jsx("div",{className:"quiz-body",children:c.jsxs("div",{className:"quiz-done",children:[c.jsxs("p",{children:[e(E.done)," ",e(E.score),": ",i,"/",t.length," (",x,"%)"]}),g&&c.jsxs("p",{className:"quiz-pass",children:[e(E.complete)," ✓"]}),c.jsx("button",{className:"btn",onClick:p,children:e(E.retry)})]})})]})}const d=t[o],$=()=>{l<0||(l===d.correct?(u("right"),r(x=>x+1)):u("wrong"))},f=()=>{s(x=>x+1),m(-1),u("none")};return c.jsxs("div",{className:"quiz",children:[c.jsxs("div",{className:"quiz-head",children:[c.jsx("span",{className:"quiz-icon",children:"🎯"}),c.jsx("strong",{children:e(E.quiz)})]}),c.jsxs("div",{className:"quiz-body",children:[c.jsxs("p",{className:"quiz-q",children:[o+1,". ",c.jsx(M,{text:e(d.q)})]}),c.jsx("div",{className:"quiz-opts",children:d.options.map((x,g)=>c.jsx("button",{className:`quiz-opt${l===g?" selected":""}${h!=="none"&&g===d.correct?" right":""}${h==="wrong"&&g===l?" wrong":""}`,onClick:()=>h!=="right"&&m(g),children:c.jsx(M,{text:e(x)})},g))}),h!=="none"&&c.jsx("div",{className:`quiz-feedback ${h==="right"?"ok":"bad"}`,children:e(h==="right"?E.correct:E.incorrect)}),h==="right"?c.jsx("button",{className:"btn",onClick:f,children:e(E.next)}):c.jsx("button",{className:"btn",onClick:$,children:e(E.check)})]})]})}const Sn={line:[{term:{en:"Least squares method",hu:"Legkisebb négyzetek módszere"},def:{en:"Fit a model to data $(x_i,y_i)$ by minimizing the sum of squared residuals. Unlike interpolation, the curve need not pass through the points — it captures the trend and smooths out noise.",hu:"Egy modell illesztése $(x_i,y_i)$ adatokra a négyzetes eltérések összegének minimalizálásával. Az interpolációval ellentétben a görbe nem megy át a pontokon — a trendet ragadja meg és simítja a zajt."}},{term:{en:"Line fitting $g(x)=ax+b$",hu:"Egyenes illesztése $g(x)=ax+b$"},def:{en:"The simplest least-squares model: choose slope $a$ and intercept $b$ to minimize $F(a,b)=\\sum_i(ax_i+b-y_i)^2$. Also called linear regression.",hu:"A legegyszerűbb legkisebb-négyzetes modell: válaszd az $a$ meredekséget és $b$ tengelymetszetet úgy, hogy $F(a,b)=\\sum_i(ax_i+b-y_i)^2$ minimális legyen. Lineáris regressziónak is hívják."}},{term:{en:"Least-square error $F(a,b)$",hu:"Négyzetes hiba $F(a,b)$"},def:{en:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — the objective. Squaring (vs absolute value) makes $F$ smooth and differentiable, so calculus locates the minimum, and it penalizes large deviations more.",hu:"$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — a célfüggvény. A négyzetre emelés (az abszolút érték helyett) simává, differenciálhatóvá teszi $F$-et, így az analízis megtalálja a minimumot, és jobban bünteti a nagy eltéréseket."}},{term:{en:"Normal equations (Gaussian)",hu:"Normálegyenletek (Gauss-féle)"},def:{en:"Setting $\\partial F/\\partial a=\\partial F/\\partial b=0$ gives the linear system $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ for the optimal $a,b$.",hu:"A $\\partial F/\\partial a=\\partial F/\\partial b=0$ feltételből az $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ lineáris rendszer adódik az optimális $a,b$-re."}},{term:{en:"Unique solvability",hu:"Egyértelmű megoldhatóság"},def:{en:"The $2\\times2$ normal system has a unique solution whenever at least two of the $x_i$ differ (its determinant $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ is convex, so the stationary point is the global minimum.",hu:"A $2\\times2$-es normálrendszernek egyetlen megoldása van, valahányszor legalább két $x_i$ különbözik (determinánsa $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ konvex, így a stacionárius pont a globális minimum."}},{term:{en:"Residuals & best fit",hu:"Reziduumok és legjobb illeszkedés"},def:{en:"The residual at $x_i$ is $r_i=ax_i+b-y_i$. The best-fit line makes $\\sum r_i^2$ as small as possible; the residuals sum to zero and are uncorrelated with the $x_i$ at the optimum.",hu:"Az $x_i$-beli reziduum $r_i=ax_i+b-y_i$. A legjobban illeszkedő egyenes a $\\sum r_i^2$-et teszi a lehető legkisebbé; az optimumban a reziduumok összege nulla és korrelálatlanok az $x_i$-vel."}}],polynomial:[{term:{en:"Polynomial curve fitting",hu:"Polinom illesztése"},def:{en:"Fit a degree-$m$ polynomial $p(x)=a_m x^m+\\dots+a_0$ to data $(x_i,y_i)$ by least squares, minimizing $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ over the $m+1$ coefficients.",hu:"Egy $m$-edfokú $p(x)=a_m x^m+\\dots+a_0$ polinom illesztése $(x_i,y_i)$ adatokra legkisebb négyzetekkel, az $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ minimalizálásával az $m+1$ együtthatóra."}},{term:{en:"Fitting vs interpolation ($m<n$)",hu:"Illesztés vs interpoláció ($m<n$)"},def:{en:"If $m\\ge n$ a degree-$m$ polynomial interpolates exactly ($F=0$). The interesting case is $m<n$: fewer parameters than data, so $F>0$ and the polynomial approximates the trend instead of passing through every point.",hu:"Ha $m\\ge n$, egy $m$-edfokú polinom pontosan interpolál ($F=0$). Az érdekes eset $m<n$: kevesebb paraméter, mint adat, így $F>0$, és a polinom a trendet közelíti, nem megy át minden ponton."}},{term:{en:"Normal equations",hu:"Normálegyenletek"},def:{en:"Setting $\\partial F/\\partial a_k=0$ gives an $(m+1)\\times(m+1)$ linear system $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ whose entries are power sums $\\sum_i x_i^{j+k}$ and $\\sum_i x_i^k y_i$.",hu:"A $\\partial F/\\partial a_k=0$ feltételből egy $(m+1)\\times(m+1)$-es lineáris rendszer $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ adódik, amelynek elemei a $\\sum_i x_i^{j+k}$ hatványösszegek és $\\sum_i x_i^k y_i$."}},{term:{en:"Positive definite normal matrix",hu:"Pozitív definit normálmátrix"},def:{en:"If there are at least $m+1$ distinct nodes, the normal matrix $\\mathbf{A}$ is symmetric positive definite (via the Fundamental Theorem of Algebra), so the system has a unique solution — the global least-squares minimum.",hu:"Ha legalább $m+1$ különböző alappont van, a normálmátrix $\\mathbf{A}$ szimmetrikus pozitív definit (az algebra alaptétele révén), így a rendszernek egyetlen megoldása van — a globális legkisebb-négyzetes minimum."}},{term:{en:"Ill-conditioning at high degree",hu:"Rossz kondicionáltság magas foknál"},def:{en:"The power-sum normal matrix is a Vandermonde-style Gram matrix that becomes badly conditioned as $m$ grows (like the Hilbert matrix). High-degree fits also overfit noise — prefer modest $m$ or orthogonal-polynomial bases.",hu:"A hatványösszeges normálmátrix egy Vandermonde-jellegű Gram-mátrix, amely $m$ növekedtével rosszul kondicionálttá válik (mint a Hilbert-mátrix). A magas fokú illesztések túlillesztik a zajt — válassz mérsékelt $m$-et vagy ortogonális polinom bázist."}}],nonlinear:[{term:{en:"Nonlinear curve fitting",hu:"Nemlineáris függvény illesztése"},def:{en:"Fitting a model whose parameters enter nonlinearly (e.g. $be^{ax}$, $bx^a$). If parameters appear linearly the normal equations stay linear; otherwise they become a nonlinear system.",hu:"Olyan modell illesztése, amelyben a paraméterek nemlineárisan szerepelnek (pl. $be^{ax}$, $bx^a$). Ha a paraméterek lineárisan jelennek meg, a normálegyenletek lineárisak maradnak; különben nemlineáris rendszerré válnak."}},{term:{en:"Linearization",hu:"Linearizálás"},def:{en:"Transform the model into a linear one by a change of variables, fit a line by least squares, then map back. A fast, practical approximation — not the exact nonlinear least-squares solution.",hu:"Alakítsd a modellt lineárissá változócserével, illessz egyenest legkisebb négyzetekkel, majd alakítsd vissza. Gyors, gyakorlati közelítés — nem a pontos nemlineáris legkisebb-négyzetes megoldás."}},{term:{en:"Exponential fit $y=be^{ax}$",hu:"Exponenciális illesztés $y=be^{ax}$"},def:{en:"Take logs: $\\ln y=\\ln b+ax$. Fit a line $Y=AX+B$ to $(x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$. Used for growth/decay data.",hu:"Vegyél logaritmust: $\\ln y=\\ln b+ax$. Illessz $Y=AX+B$ egyenest az $(x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$. Növekedési/bomlási adatokra."}},{term:{en:"Power fit $y=bx^a$",hu:"Hatványfüggvény illesztés $y=bx^a$"},def:{en:"Take logs of both: $\\ln y=a\\ln x+\\ln b$. Fit a line to $(\\ln x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$ — a log–log linear fit.",hu:"Vegyél logaritmust mindkettőből: $\\ln y=a\\ln x+\\ln b$. Illessz egyenest a $(\\ln x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$ — log–log lineáris illesztés."}},{term:{en:"Caveat: not the true optimum",hu:"Figyelmeztetés: nem a valódi optimum"},def:{en:"Linearization minimizes error in the transformed variables, not in the original ones, so it weights the data differently. It gives a good, cheap starting fit — refine with a genuine nonlinear least-squares solver if needed.",hu:"A linearizálás a transzformált változókban minimalizálja a hibát, nem az eredetiekben, így másképp súlyozza az adatokat. Jó, olcsó kiinduló illesztést ad — szükség esetén finomítsd valódi nemlineáris legkisebb-négyzetes megoldóval."}}]},Fn={line:[{q:"In curve fitting, what does the notation $g(x; \\mathbf{a})$ represent?",a:"A function $g$ describing a physical process where the general formula is known but parameters $\\mathbf{a}$ are unknown."},{q:"What is the primary goal of curve fitting?",a:"To find parameter values such that the function $g$ deviates the 'least' from measured data points."},{q:"Why is it usually impossible to draw a curve exactly through all measurement points $(x_i, y_i)$?",a:"Measurement errors typically cause data points to lie off the ideal graph of the assumed function."},{q:"Define the maximum error formula $F_1(\\mathbf{a})$.",a:"$F_1(\\mathbf{a}) := \\max\\{|g(x_i; \\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}$"},{q:"Define the absolute error sum formula $F_2(\\mathbf{a})$.",a:"$F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$"},{q:"What is the mathematical disadvantage of using $F_1(\\mathbf{a})$ or $F_2(\\mathbf{a})$ for curve fitting?",a:"They are difficult to minimize because they are not differentiable with respect to the parameters $\\mathbf{a}$."},{q:"What is the formula for the quadratic error (least square error) $F(\\mathbf{a})$?",a:"$F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$"},{q:"What is the 'method of least squares'?",a:"A method that finds the best-fitting function by minimizing the sum of the squares of the deviations from the data points."},{q:"In line fitting, what is the standard form of the linear function $g(x)$?",a:"$g(x) = ax + b$"},{q:"For line fitting, what is the error function $F(a, b)$ that needs to be minimized?",a:"$F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2$"},{q:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $a$?",a:"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$"},{q:"What is the partial derivative of the linear error function $F(a, b)$ with respect to $b$?",a:"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$"},{q:"What are the 'Gaussian normal equations' in the context of line fitting?",a:"The system of equations obtained by setting the partial derivatives of the error function $F(a, b)$ to zero."},{q:"Write the first Gaussian normal equation for line fitting ($a \\sum \\ldots$).",a:"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$"},{q:"Write the second Gaussian normal equation for line fitting ($a \\sum \\ldots$).",a:"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$"},{q:"In the second Gaussian normal equation for line fitting, what does the coefficient $n+1$ represent?",a:"The total number of measurement data points."},{q:"What is the formula for the determinant $d$ of the coefficient matrix of the Gaussian normal equations?",a:"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$"},{q:"Which mathematical inequality is used to prove that the determinant $d$ of the normal equations is always non-negative?",a:"The Cauchy–Bunyakovsky–Schwarz inequality."},{q:"Under what condition is the determinant $d$ of the Gaussian normal equations strictly positive?",a:"When there are at least two distinct mesh points $x_i$."},{q:"If $d > 0$, how many solutions does the Gaussian normal equation system have for line fitting?",a:"Exactly one unique solution."},{q:"What is the explicit formula for the optimal slope $\\bar{a}$ in line fitting?",a:"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},{q:"What is the explicit formula for the optimal intercept $\\bar{b}$ in line fitting?",a:"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},{q:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$?",a:"$2\\sum_{i=0}^{n} x_i^2$"},{q:"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$?",a:"$2(n + 1)$"},{q:"What is the value of the mixed partial derivative $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$?",a:"$2\\sum_{i=0}^{n} x_i$"},{q:"What is the relationship between the discriminant $D(\\bar{a}, \\bar{b})$ and the determinant $d$?",a:"$D(\\bar{a}, \\bar{b}) = 4d$"},{q:"Why is the stationary point $(\\bar{a}, \\bar{b})$ specifically a local minimum for $F$?",a:"Because the discriminant $D$ is positive ($4d > 0$) and the second derivative with respect to $a$ is positive."},{q:"Is the local minimum found by the method of least squares for line fitting also a global minimum?",a:"Yes, it is both a local and a global minimum."},{q:"According to Theorem 9.1, what condition must the points $(x_i, y_i)$ meet for a unique line of best fit to exist?",a:"There must exist at least two points $i$ and $j$ such that $x_i \\neq x_j$."},{q:"When performing manual line fitting calculations, what values should be computed in the third and fourth columns of the summary table?",a:"The squares of the mesh points ($x_i^2$) and the products of the coordinates ($x_i y_i$)."},{q:"In Example 9.2, for the data set with $n=6$, what were the final calculated values for the slope $a$ and intercept $b$?",a:"$a = 0.630243$ and $b = 0.542163$"},{q:"How is the fitting error calculated after finding the optimal parameters $\\bar{a}$ and $\\bar{b}$?",a:"By evaluating the sum of squares $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$."},{q:"In Example 9.2, what was the numerical value of the final error of the fitting?",a:"$0.124691$"},{q:"The points where the function values are measured are called the _____ points.",a:"mesh"},{q:"If a physical process is suspected to be a second-degree polynomial, how many parameters must be determined?",a:"Three parameters (the coefficients of the polynomial)."},{q:"True or False: The Gaussian normal equations constitute a non-linear system of equations.",a:"False, it is a linear system for the parameters $a$ and $b$."},{q:"What property of the least square error $F(\\mathbf{a})$ allows the use of derivatives to find its minimum?",a:"It is continuously partially differentiable."},{q:"The determinant of the coefficient matrix $d$ is given by the determinant of which $2 \\times 2$ matrix?",a:"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$"},{q:"What is the Hungarian term for 'curve fitting' mentioned in the source material?",a:"görbeillesztés"},{q:"In the Hungarian source text, what is the term for 'Method of Least Squares'?",a:"legkisebb négyzetek módszere"},{q:"According to the CBS inequality, $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____.",a:"$\\sum_{i=0}^{n} x_i^2$"},{q:"If all mesh points $x_i$ were identical, what would be the value of the determinant $d$?",a:"Zero."},{q:"In the provided line fitting examples, what is the range of the index $i$ if there are 8 data points?",a:"$i = 0, 1, \\ldots, 7$"},{q:"What is the next step after calculating the sums of $x_i, y_i, x_i^2,$ and $x_i y_i$ in the least squares procedure?",a:"Substituting the sums into the Gaussian normal equations to solve for $a$ and $b$."},{q:"In the slide example 'Egyenes illesztése', for the sums $\\sum x_i = 23.5$ and $\\sum y_i = 19.7$ with 8 points, what was the value of $b$'s coefficient in the second equation?",a:"8"},{q:"What does the second Gaussian normal equation $\\sum (ax_i + b - y_i) = 0$ imply about the average error?",a:"It implies that the sum of the residuals (deviations) is zero."},{q:"Term: Mesh points",a:"Definition: The specific $x$-coordinates ($x_i$) at which measurement values ($y_i$) are obtained."},{q:"Term: Gaussian normal equations",a:"Definition: A system of linear equations used to find the parameters that minimize the sum of squared residuals."},{q:"Why is the method of least squares preferred over minimizing the maximum deviation ($F_1$)?",a:"The quadratic function $F(\\mathbf{a})$ is easier to handle analytically using calculus."},{q:"What is the result of applying Theorem 8.2 to the discriminant $D$ in the proof of line fitting?",a:"It identifies that the stationary point $(\\bar{a}, \\bar{b})$ is a local extremum."},{q:"How does Corollary 8.11 extend the findings of the local minimum in line fitting?",a:"It confirms that the local minimum is also the global minimum for the error function $F$."},{q:"In the example calculation table, what represents the sum of all elements in the $y_i$ column?",a:"$\\sum_{i=0}^{n} y_i$"},{q:"Which variable represents the independent measurement coordinate in the formula $g(x; \\mathbf{a})$?",a:"$x$"},{q:"In the Hungarian text, what is the term used for 'Gaussian normal equations'?",a:"Gauss-féle normálegyenletek"},{q:"If $n=7$, how many terms are included in the summation $\\sum_{i=0}^{n} x_i$?",a:"8 terms."},{q:"What is the primary technical problem solved by switching from absolute error to squared error?",a:"Non-differentiability at points where $g(x_i) = y_i$."},{q:"To find the minimum of $F(a, b)$, we must set the _____ derivatives to zero.",a:"partial"},{q:"What is the graphical interpretation of the 'best fitted curve'?",a:"The curve for which the sum of the squares of the vertical distances from the data points is minimized."},{q:"In Example 9.2 (7 points), what was the value of $\\sum x_i^2$ used in the normal equations?",a:"89.5"},{q:"In Example 9.2 (7 points), what was the value of $\\sum x_i$ used in the normal equations?",a:"20.0"}],polynomial:[{q:"In polynomial curve fitting, what parameters are sought to minimize the least square error function $F$?",a:"The coefficients $a_m, a_{m-1}, \\ldots, a_0$."},{q:"What is the least square error function $F(a_m, \\ldots, a_0)$ used in polynomial curve fitting?",a:"$F(a_m, \\ldots, a_0) := \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$"},{q:"When $n \\le m$ for given data points $(x_i, y_i)$, how can the polynomial coefficients be determined?",a:"By polynomial interpolation."},{q:"What is the minimal value of the error function $F$ if $n \\le m$?",a:"$0$"},{q:"Why is the case $m < n$ primarily investigated in polynomial curve fitting?",a:"Because the error function $F$ generally does not reach zero in this case."},{q:"According to the source, at what points can the function $F$ have an extremum?",a:"Where all of its partial derivatives are equal to zero."},{q:"What is the general expression for the partial derivative $\\frac{\\partial F}{\\partial a_k}$ in polynomial fitting?",a:"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$"},{q:"What system of linear equations is obtained by setting the partial derivatives of $F$ to zero?",a:"The normal equations."},{q:"In the normal equations, what is the right-hand side of the equation corresponding to the partial derivative of $a_k$?",a:"$\\sum_{i=0}^{n} x_i^k y_i$"},{q:"The coefficient matrix $\\mathbf{A}$ of the normal equations is invertable if it is shown to be _____.",a:"positive definite"},{q:"What is the formula for the $jk$-th element of the coefficient matrix $\\mathbf{A}$ in polynomial fitting?",a:"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ where $j, k = 1, 2, \\ldots, m + 1$"},{q:"In the proof of the existence of a unique solution, what expression represents the quadratic form $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$?",a:"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$"},{q:"Under what condition on the points $x_i$ does the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ being zero at all $x_i$ imply $z_j = 0$?",a:"If there are at least $m + 1$ distinct mesh points."},{q:"Which mathematical theorem implies $p(x) = 0$ for all $x$ if it has $m+1$ roots but degree at most $m$?",a:"The Fundamental Theorem of Algebra."},{q:"What is the relationship between the Hessian matrix $F''(\\bar{\\mathbf{a}})$ and the coefficient matrix $\\mathbf{A}$?",a:"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$"},{q:"Why is the local minimum of the error function $F$ also its global minimum?",a:"Because $F$ is a quadratic function."},{q:"Theorem 9.3 states that a unique solution exists for polynomial fitting if $m < n$ and there are at least _____ distinct mesh points.",a:"$m + 1$"},{q:"What is the sum of the squared differences between the predicted and actual $y$-values called in this context?",a:"The error of the fitting."},{q:"In the provided parabola fitting example ($m=2$), how many equations are in the resulting system?",a:"Three equations."},{q:"In a parabola fitting problem ($y = ax^2 + bx + c$), what does the variable $c$ represent in the coefficient vector $(a, b, c)$?",a:"The constant term ($a_0$)."},{q:"Formula: Error of the fitting",a:"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ where $P(x)$ is the calculated polynomial."},{q:"The matrix $\\mathbf{A}$ is symmetric because its $jk$-th element depends on the _____ of indices $j$ and $k$.",a:"sum"},{q:"What value of $n$ corresponds to the total number of data points being $7$?",a:"$n = 6$"},{q:"If the normal equations for a parabola are $249.1250a + 77.750b + 27.50c = -7.225$, what does $27.50$ represent in terms of $x_i$?",a:"The sum of $x_i^2$."},{q:"What determines the number of variables in the error function $F$ for a polynomial of degree $m$?",a:"The number of coefficients, which is $m + 1$."}],nonlinear:[{q:"In the context of nonlinear curve fitting, what defines the least square error function $F(a, b)$ for an exponential function $b e^{ax}$?",a:"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$"},{q:"Why can't the normal equations for the function $y = b e^{ax}$ be solved analytically?",a:"They form a nonlinear system of equations."},{q:"What numerical method can be used to minimize the nonlinear error function $F$ if linearization is not used?",a:"Newton's method"},{q:"What is the core idea of the 'linearization method' in curve fitting?",a:"Transforming a nonlinear equation into a linear form by applying functions like the natural logarithm."},{q:"Applying the natural logarithm to both sides of $y = b e^{ax}$ results in what linear relationship?",a:"$\\ln y = \\ln b + ax$"},{q:"When linearizing $y = b e^{ax}$, what is the substituted variable $Y$?",a:"$Y = \\ln y$"},{q:"When linearizing $y = b e^{ax}$, what is the substituted variable $B$ representing the intercept?",a:"$B = \\ln b$"},{q:"In the linearization of $y = b e^{ax}$, how is the original parameter $a$ related to the slope $A$ of the fitted line?",a:"$a = A$"},{q:"After finding the intercept $B$ from a linearized fit of $b e^{ax}$, how is the original parameter $b$ calculated?",a:"$b = e^B$"},{q:"True or False: The linearization method provides the exact same solution as the original nonlinear least squares problem.",a:"False"},{q:"What is the general form of the power function discussed in the material?",a:"$y = b x^a$"},{q:"What linear relationship is obtained by taking the natural logarithm of the power function $y = b x^a$?",a:"$\\ln y = a \\ln x + \\ln b$"},{q:"In the linearization of the power function $y = b x^a$, what is the substituted variable $X$?",a:"$X = \\ln x$"},{q:"In the linearization of the power function $y = b x^a$, what is the substituted variable $Y$?",a:"$Y = \\ln y$"},{q:"When fitting $y = b x^a$ via linearization, the slope $A$ of the line $Y = AX + B$ corresponds to which original parameter?",a:"$a$"},{q:"For the power function $y = b x^a$, the intercept $B$ in the linearized model $Y = AX + B$ is equal to _____.",a:"$\\ln b$"},{q:"Which set of data points is used to fit a line when linearizing the power function $b x^a$?",a:"$(\\ln x_i, \\ln y_i)$"},{q:"In the exponential fitting example, what were the resulting linearized parameters $A$ and $B$?",a:"$A = 0.528951$ and $B = -0.997597$"},{q:"What was the final exponential function obtained in Example 9.5 using linearization?",a:"$y = 0.368765 e^{0.528951x}$"},{q:"In Example 9.5, what was the calculated error of the original nonlinear fitting for the result $0.368765 e^{0.528951x}$?",a:"$0.165543$"},{q:"In Example 9.6, what were the resulting linearized parameters $A$ and $B$ for the power function?",a:"$A = 0.676257$ and $B = 0.123088$"},{q:"What was the final power function obtained in Example 9.6?",a:"$y = 1.130984 x^{0.676257}$"},{q:"In the power function example, what was the calculated error of the linear fitting?",a:"$0.007279$"},{q:"What was the calculated error of the original nonlinear fitting in the power function example?",a:"$0.019616$"},{q:"Which equation represents one of the critical point conditions for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $b$?",a:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$"},{q:"Which equation represents the critical point condition for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $a$?",a:"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$"},{q:"In linearizing $y = b e^{ax}$, the data points $(x_i, y_i)$ are transformed into _____.",a:"$(x_i, \\ln y_i)$"},{q:"The Gaussian normal equations for linear fitting $Y = AX + B$ generally take what form for a set of $n+1$ points?",a:"A $2 \\times 2$ linear system for unknowns $A$ and $B$."},{q:"What is the coefficient of $B$ in the second Gaussian normal equation ($11.5A + 6B = 0.097352$) from Example 9.5?",a:"$6$ (representing the number of data points $n+1$)"},{q:"Concept: Critical Points of $F(a, b)$",a:"Definition: The points where the partial derivatives of the error function with respect to $a$ and $b$ are zero."},{q:"Why is linearization used in practice despite not being the 'original' nonlinear solution?",a:"It is easy to compute as it only requires solving a linear system."},{q:"When performing linearized fitting for $y = b x^a$, what value does the sum of $(\\ln x_i)^2$ represent in the normal equations?",a:"The coefficient of $A$ in the first normal equation."},{q:"In Example 9.5, the sum of $x_i$ was $11.5$. This value appears as the coefficient for which variables in the normal equations?",a:"$B$ in the first equation and $A$ in the second equation."},{q:"To find the error of the nonlinear fitting for $y = f(x)$, we calculate the sum of the squares of the _____.",a:"Residuals ($f(x_i) - y_i$)"},{q:"How is the variable $B$ related to the original parameter $b$ in both the exponential and power function linearization examples?",a:"$B = \\ln b$"},{q:"What was the total sum of $x_i \\ln y_i$ in the table for Example 9.5?",a:"$5.586294$"},{q:"What was the total sum of $(\\ln x_i)^2$ in the table for Example 9.6?",a:"$2.691393$"},{q:"In the normal equations for Example 9.6 ($1.727221A + 5B = 1.783485$), what does the constant $5$ represent?",a:"The total number of data points ($n=4$, so $n+1=5$)."},{q:"If we have data points $(0.5, 0.7)$ for a power function fit, what is the value of the transformed point $(\\ln x_i, \\ln y_i)$?",a:"$(-0.693147, -0.356675)$"},{q:"The linearized error $\\sum (A X_i + B - Y_i)^2$ for $b e^{ax}$ uses $Y_i$ as _____.",a:"$\\ln y_i$"},{q:"True or False: The normal equations for a linear fit $Y = AX + B$ are always linear.",a:"True"},{q:"What is the primary advantage of Newton's method over linearization for these problems?",a:"It can minimize the original nonlinear error function $F(a, b)$ directly."},{q:"In the linearization of $y = b e^{ax}$, the transformed variable $X$ is simply _____.",a:"$x$"},{q:"The error of the linear fitting for the power function in Example 9.6 is calculated as $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. What is the value of $A$ used?",a:"$0.676257$"},{q:"What does the term $\\ln b$ represent in the equation $\\ln y = a \\ln x + \\ln b$?",a:"The y-intercept of the line in the log-log plot."},{q:"In the exponential fit table, what was the value of $\\ln y_i$ for $y_i = 0.3$?",a:"$-1.203973$"},{q:"In the exponential fit table, what was the value of $x_i \\ln y_i$ for $x_i = 4.0$ and $y_i = 2.7$?",a:"$3.973007$"},{q:"In the power function table, what was the value of $\\ln x_i \\ln y_i$ for $x_i = 0.5$ and $y_i = 0.7$?",a:"$0.247228$"},{q:"The sum of $\\ln y_i$ in Example 9.5 was $0.097352$. Where does this value appear in the normal equations?",a:"As the constant term on the right side of the second normal equation."},{q:"In the power function example, what was the sum of $\\ln x_i$?",a:"$1.727221$"},{q:"What is the value of $e^{0.123088}$ used to find $b$ in Example 9.6?",a:"$1.130984$"},{q:"What is the value of $e^{-0.997597}$ used to find $b$ in Example 9.5?",a:"$0.368765$"},{q:"When fitting $b e^{ax}$, if $a$ is positive, the function represents _____.",a:"Exponential growth"},{q:"In the linearization of $y = b x^a$, both variables $x$ and $y$ must be _____ for the logarithms to be defined.",a:"Positive"},{q:"The process of determining the best-fitting curve by minimizing the sum of the squares of the vertical deviations is called the _____.",a:"Method of Least Squares"},{q:"The critical points of $F(a, b)$ are found by setting the _____ equal to zero.",a:"Partial derivatives (gradient)"}]},L={glossary:{en:"Glossary",hu:"Fogalomtár"},flashcards:{en:"Flashcards",hu:"Tanulókártyák"},shuffle:{en:"🔀 Shuffle",hu:"🔀 Keverés"},reset:{en:"Reset",hu:"Eredeti"},question:{en:"Question",hu:"Kérdés"},answer:{en:"Answer",hu:"Válasz"},prev:{en:"‹ Prev",hu:"‹ Előző"},next:{en:"Next ›",hu:"Következő ›"},showAnswer:{en:"Show answer",hu:"Válasz"},showQuestion:{en:"Show question",hu:"Kérdés"}};function En({deck:a}){const{t:n,lang:e}=H(),t=Sn[a]??[],[o,s]=T.useState(null);return t.length?c.jsxs("div",{className:"deck glossary-deck",children:[c.jsx("h4",{children:n(L.glossary)}),c.jsx("div",{className:"deck-list",children:t.map((i,r)=>{const l=o===r;return c.jsxs("button",{className:"deck-item",onClick:()=>s(l?null:r),children:[c.jsxs("div",{className:"deck-item__head",children:[c.jsx("strong",{children:c.jsx(P,{markdown:i.term[e]})}),c.jsx("span",{children:l?"−":"+"})]}),l&&c.jsx("div",{className:"deck-item__body",children:c.jsx(P,{markdown:i.def[e]})})]},r)})})]}):null}const ze=a=>Array.from({length:a},(n,e)=>e);function In(a){const n=ze(a);for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function Ln({deck:a}){const{t:n}=H(),e=Fn[a]??[],[t,o]=T.useState(()=>ze(e.length)),[s,i]=T.useState(0),[r,l]=T.useState(!1),m=T.useMemo(()=>e[t[s]],[e,t,s]);if(!e.length)return null;const h=u=>{l(!1),i(p=>(p+u+e.length)%e.length)};return c.jsxs("div",{className:"deck flashcard-deck",children:[c.jsxs("div",{className:"deck__bar",children:[c.jsx("h4",{children:n(L.flashcards)}),c.jsxs("div",{className:"deck__ctrls",children:[c.jsxs("span",{className:"deck__count",children:[s+1," / ",e.length]}),c.jsx("button",{className:"btn",onClick:()=>{o(In(e.length)),i(0),l(!1)},children:n(L.shuffle)}),c.jsx("button",{className:"btn",onClick:()=>{o(ze(e.length)),i(0),l(!1)},children:n(L.reset)})]})]}),c.jsxs("button",{className:"deck-card",onClick:()=>l(u=>!u),children:[c.jsx("div",{className:"deck-card__tag",children:n(r?L.answer:L.question)}),c.jsx(P,{markdown:r?m.a:m.q})]}),c.jsxs("div",{className:"deck__nav",children:[c.jsx("button",{className:"btn",onClick:()=>h(-1),children:n(L.prev)}),c.jsx("button",{className:"btn btn--primary",onClick:()=>l(u=>!u),children:n(r?L.showQuestion:L.showAnswer)}),c.jsx("button",{className:"btn",onClick:()=>h(1),children:n(L.next)})]})]})}const Mn=`#include <vector>
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
`,Rn=`program exp_fit_demo
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
`,Nn=`package main

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
`,Bn=`function exp_fit(t, y)
    A = [t ones(length(t))]                  # ln y = a t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [0.0, 1, 2, 3]; y = [2.0, 4.1, 8.2, 15.9]
a, b = exp_fit(t, y); println("a = $a, b = $b")
`,Wn=`// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns [a, b].
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
`,Cn=`function [a, b] = exp_fit(t, y)
% EXP_FIT  Fit y ~ b*exp(a*t) by linear least squares on log(y).
    t = t(:); ly = log(y(:));
    p = [t, ones(numel(t),1)] \\ ly;   % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [0 1 2 3]; y = [2.0 4.1 8.2 15.9];
[a, b] = exp_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,Pn=`import numpy as np


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
`,Vn=`# Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b).
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
`,Hn=`// Linear regression y = a x + b; returns (a, b).
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
`,Dn=`expFit[t_, y_] := Module[{A, p},
   A = Transpose[{t, ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {0, 1, 2, 3}; y = {2.0, 4.1, 8.2, 15.9};
Print["a, b = ", expFit[t, y]]
`,On=`#include <iostream>
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
`,Gn=`program line_fit_demo
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
`,Xn=`package main

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
`,Yn=`function line_fit(x, y)
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
`,Qn=`// Least-squares line y = a + b x via the 2x2 normal equations.
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
`,Zn=`function [a, b] = line_fit(x, y)
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
`,Kn=`def line_fit(x, y):
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
`,Un=`# Least-squares line y = a + b x via the 2x2 normal equations.
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
`,Jn=`// Least-squares line y = a + b x via the 2x2 normal equations.
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
`,ei=`lineFit[x_, y_] := Module[{n = Length[x], Sx, Sy, Sxx, Sxy, a, b},
   Sx = Total[x]; Sy = Total[y];
   Sxx = Total[x^2]; Sxy = Total[x y];
   b = (n Sxy - Sx Sy)/(n Sxx - Sx^2);     (* slope *)
   a = (Sy - b Sx)/n;                        (* intercept *)
   {a, b}];
x = {0, 1, 2, 3, 4}; y = {1, 3, 2, 5, 4};
With[{r = lineFit[x, y]},
  Print["slope b = ", r[[2]], ", intercept a = ", r[[1]]]]
(* -> slope b = 0.8, intercept a = 1.4 *)
`,ti=`#include <vector>
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
`,ni=`program poly_fit_demo
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
`,ii=`package main

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
`,ai=`function poly_fit(t, y, degree)
    A = [ti^j for ti in t, j in 0:degree]   # Vandermonde: columns 1, t, t^2, ...
    return A \\ y                              # least-squares solution
end

t = [0.0, 1, 2, 3, 4]; y = [1.0, 1.8, 3.3, 4.5, 6.3]
println("coeffs (low->high): ", poly_fit(t, y, 2))
`,si=`// Least-squares polynomial fit via the normal equations.
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
`,oi=`function c = poly_fit(t, y, degree)
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
`,ri=`import numpy as np


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
`,li=`# Least-squares polynomial fit; returns coefficients (low -> high).
poly_fit <- function(t, y, degree = 2) {
  A <- outer(t, 0:degree, \`^\`)        # columns 1, t, t^2, ...
  as.vector(qr.solve(A, y))           # minimizes ||A c - y||
}

t <- c(0, 1, 2, 3, 4)
y <- c(1.0, 1.8, 3.3, 4.5, 6.3)
cat("coeffs (low->high):", poly_fit(t, y, 2), "\\n")
`,hi=`// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
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
`,ci=`polyFit[t_, y_, degree_] := Module[{A},
   A = Table[ti^j, {ti, t}, {j, 0, degree}];   (* Vandermonde *)
   LeastSquares[A, y]];
t = {0, 1, 2, 3, 4}; y = {1.0, 1.8, 3.3, 4.5, 6.3};
Print["coeffs (low->high): ", polyFit[t, y, 2]]
`,mi=`#include <vector>
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
`,ui=`program power_fit_demo
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
`,pi=`package main

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
`,$i=`function power_fit(t, y)
    A = [log.(t) ones(length(t))]            # ln y = a ln t + ln b
    p = A \\ log.(y)
    return p[1], exp(p[2])
end

t = [1.0, 2, 3, 4]; y = [2.0, 5.6, 9.7, 16.0]
a, b = power_fit(t, y); println("a = $a, b = $b")
`,di=`// Fit y ~ b*t^a by linear least squares on log-log data. Returns [a, b].
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
`,fi=`function [a, b] = power_fit(t, y)
% POWER_FIT  Fit y ~ b*t^a by linear least squares on log-log data.
    lt = log(t(:)); ly = log(y(:));
    p = [lt, ones(numel(lt),1)] \\ ly; % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [1 2 3 4]; y = [2.0 5.6 9.7 16.0];
[a, b] = power_fit(t, y);
fprintf('a = %.4f, b = %.4f\\n', a, b);
`,xi=`import numpy as np


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
`,gi=`# Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
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
`,yi=`fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
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
`,bi=`powerFit[t_, y_] := Module[{A, p},
   A = Transpose[{Log[t], ConstantArray[1, Length[t]]}];
   p = LeastSquares[A, Log[y]];               (* ln y = a ln t + ln b *)
   {p[[1]], Exp[p[[2]]]}];
t = {1, 2, 3, 4}; y = {2.0, 5.6, 9.7, 16.0};
Print["a, b = ", powerFit[t, y]]
`,_i=Object.assign({"./exponential.cpp":Mn,"./exponential.f90":Rn,"./exponential.go":Nn,"./exponential.jl":Bn,"./exponential.js":Wn,"./exponential.m":Cn,"./exponential.py":Pn,"./exponential.r":Vn,"./exponential.rs":Hn,"./exponential.wl":Dn,"./line.cpp":On,"./line.f90":Gn,"./line.go":Xn,"./line.jl":Yn,"./line.js":Qn,"./line.m":Zn,"./line.py":Kn,"./line.r":Un,"./line.rs":Jn,"./line.wl":ei,"./polynomial.cpp":ti,"./polynomial.f90":ni,"./polynomial.go":ii,"./polynomial.jl":ai,"./polynomial.js":si,"./polynomial.m":oi,"./polynomial.py":ri,"./polynomial.r":li,"./polynomial.rs":hi,"./polynomial.wl":ci,"./power.cpp":mi,"./power.f90":ui,"./power.go":pi,"./power.jl":$i,"./power.js":di,"./power.m":fi,"./power.py":xi,"./power.r":gi,"./power.rs":yi,"./power.wl":bi}),I=(a,n)=>_i[`./${a}.${n}`],ki={line:{en:"Least-squares line fit (normal equations)",hu:"Legkisebb négyzetes egyenesillesztés (normálegyenletek)"},polynomial:{en:"Least-squares polynomial fit",hu:"Legkisebb négyzetes polinomillesztés"},exponential:{en:"Exponential fit  y ≈ b·e^{a t}",hu:"Exponenciális illesztés  y ≈ b·e^{a t}"},power:{en:"Power-law fit  y ≈ b·t^a",hu:"Hatványfüggvény-illesztés  y ≈ b·t^a"}},zi=a=>({id:a,caption:ki[a],snippets:{matlab:I(a,"m"),python:I(a,"py"),cpp:I(a,"cpp"),julia:I(a,"jl"),rust:I(a,"rs"),fortran:I(a,"f90"),wolfram:I(a,"wl"),javascript:I(a,"js"),go:I(a,"go"),r:I(a,"r")}}),vi={line:["line"],polynomial:["polynomial"],nonlinear:["exponential","power"]};function wi(a){return(vi[a]??[]).map(zi)}const qi={line:[{id:"q-line-1",prompt:"What are the two equations in the Gaussian normal system derived from minimizing the least-squares error F(a, b)?",options:["A system of equations solved by interpolation","Two equations from setting the partial derivatives of F(a, b) to zero","Equations derived from the maximum error","The sum of residuals and their squares"],answer:1,explanation:"The normal equations come from ∂F/∂a = 0 and ∂F/∂b = 0."},{id:"q-line-2",prompt:"What does a positive determinant d of the coefficient matrix indicate?",options:["The line fitting has multiple solutions","There is no solution to the system","The Gaussian normal equations have a unique solution","The solution is not optimal"],answer:2,explanation:"A nonzero (positive) determinant means the normal equations have a unique solution."},{id:"q-line-3",prompt:"Which inequality guarantees that the determinant d of the Gaussian normal equations is positive?",options:["Jensen's inequality","Minkowski's inequality","Hölder's inequality","Cauchy–Bunyakovsky–Schwarz inequality"],answer:3,explanation:"The Cauchy–Schwarz inequality (strict unless all xᵢ equal) makes n·Σxᵢ² − (Σxᵢ)² > 0."},{id:"q-line-4",prompt:"What is the general form of the linear function used in line fitting?",options:["g(x) = aˣ + b","g(x) = a x² + b","g(x) = a x + b","g(x) = a·ln(x) + b"],answer:2,explanation:"Line fitting models data with the straight line g(x) = a x + b."},{id:"q-line-5",prompt:"Which condition ensures that F(a, b) has a local (and global) minimum?",options:["The Hessian determinant D(a,b) is positive and ∂²F/∂a² > 0","The second partial derivatives form a negative definite matrix","The sum of the data points is constant","The value of a is greater than b"],answer:0,explanation:"A positive Hessian determinant with positive ∂²F/∂a² means F is convex → minimum."}],polynomial:[{id:"q-polynomial-1",prompt:"What is the role of the normal equations in polynomial fitting?",options:["They give the interpolation polynomial","They are used to calculate derivatives","They find the mean of the data","They determine the coefficients that minimize the least-squares error"],answer:3,explanation:"The normal equations yield the coefficients minimizing the sum of squared residuals."},{id:"q-polynomial-2",prompt:"What is the least-squares error function for polynomial curve fitting?",options:["F = max |p(xᵢ) − yᵢ|","F = Σ |p(xᵢ) − yᵢ|","F = Σ (p(xᵢ) − yᵢ)²","F = Σ (xᵢ − yᵢ)²"],answer:2,explanation:"Least squares minimizes the sum of squared residuals Σ (p(xᵢ) − yᵢ)²."},{id:"q-polynomial-3",prompt:"How are the normal equations for polynomial fitting obtained?",options:["By interpolation","By setting all partial derivatives of the error function to zero","By numerical integration","By choosing the smallest coefficients"],answer:1,explanation:"Setting every ∂F/∂cⱼ = 0 produces the linear normal equations."},{id:"q-polynomial-4",prompt:"Which type of function is the error function F in polynomial fitting (in the coefficients)?",options:["Quadratic","Linear","Logarithmic","Exponential"],answer:0,explanation:"F is a quadratic (convex) function of the unknown coefficients."},{id:"q-polynomial-5",prompt:"What is true about the minimum found by minimizing the least-squares error in polynomial fitting?",options:["It always lies on one of the data points","It may not be unique","It is always a local and global minimum","It must be zero"],answer:2,explanation:"Because F is convex (quadratic), its minimum is simultaneously local and global."}],nonlinear:[{id:"q-nonlinear-1",prompt:"What type of equations are solved after linearization of nonlinear models?",options:["Algebraic equations","Trigonometric equations","Differential equations","Normal equations for linear regression"],answer:3,explanation:"After linearizing, one solves the linear normal equations of ordinary line fitting."},{id:"q-nonlinear-2",prompt:"What is the form of the error function for exponential curve fitting?",options:["F(a, b) = Σ (a xᵢ + b − yᵢ)²","F(a, b) = max |b·e^(a xᵢ) − yᵢ|","F(a, b) = Σ |b·e^(a xᵢ) − yᵢ|","F(a, b) = Σ (b·e^(a xᵢ) − yᵢ)²"],answer:3,explanation:"For model y = b·e^(a x) the least-squares error is Σ (b·e^(a xᵢ) − yᵢ)²."},{id:"q-nonlinear-3",prompt:"After linearizing y = b·xᵃ, what data is used for linear fitting?",options:["(x, ln y)","(ln x, y)","(ln x, ln y)","(x, y)"],answer:2,explanation:"ln y = ln b + a·ln x, so one fits a line to (ln x, ln y)."},{id:"q-nonlinear-4",prompt:"Why is linearization used in exponential curve fitting?",options:["To remove errors in the data","To improve interpolation","To convert logarithms to exponentials","To convert the problem to line fitting"],answer:3,explanation:"Taking logarithms turns the exponential model into a straight-line fitting problem."},{id:"q-nonlinear-5",prompt:"What is the purpose of fitting a line to the transformed data in exponential curve fitting?",options:["To estimate the parameters a and b","To maximize the function","To interpolate the data","To find roots of the function"],answer:0,explanation:"The line slope and intercept recover the model parameters a and b."}]};function Oe(a){return qi[a]??[]}function ji({block:a}){const{t:n}=H();return c.jsxs("figure",{className:"data-table",children:[a.caption&&c.jsx("figcaption",{children:c.jsx(M,{text:n(a.caption)})}),c.jsxs("table",{children:[c.jsx("thead",{children:c.jsx("tr",{children:a.headers.map((e,t)=>c.jsx("th",{children:c.jsx(M,{text:e})},t))})}),c.jsxs("tbody",{children:[a.rows.map((e,t)=>c.jsx("tr",{children:e.map((o,s)=>c.jsx("td",{children:c.jsx(M,{text:o})},s))},t)),a.totals&&c.jsx("tr",{className:"totals",children:a.totals.map((e,t)=>c.jsx("td",{children:c.jsx(M,{text:e})},t))})]})]})]})}function Ai({block:a}){const{t:n,lang:e}=H(),t=e==="hu"?"Megoldás":"Show solution";return c.jsxs("div",{className:"exercises",children:[c.jsx("h4",{children:n(a.label)}),c.jsx("p",{children:c.jsx(M,{text:n(a.intro)})}),c.jsx("div",{className:"exercise-grid",children:a.items.map((o,s)=>c.jsxs("div",{className:"exercise-card",children:[c.jsx("div",{className:"exercise-tag",children:c.jsx(M,{text:o.tag})}),c.jsx("table",{className:"mini",children:c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("th",{children:c.jsx(M,{text:o.headers[0]})}),o.cols.map(([i],r)=>c.jsx("td",{children:i},r))]}),c.jsxs("tr",{children:[c.jsx("th",{children:c.jsx(M,{text:o.headers[1]})}),o.cols.map(([,i],r)=>c.jsx("td",{children:i},r))]})]})})]},s))}),a.solution&&c.jsx("div",{className:"prose",children:c.jsx(P,{markdown:`<details class="reveal-solution"><summary>${t}</summary>

${a.solution}

</details>`})})]})}function Ti({block:a,sectionId:n}){const{t:e}=H();switch(a.type){case"text":return c.jsx("div",{className:"prose",children:c.jsx(P,{markdown:e(a)})});case"math":return c.jsx("div",{className:"math-display",children:c.jsx(P,{markdown:`$$
${a.tex}
$$`})});case"callout":return c.jsx("div",{className:`callout ${a.variant||"note"}`,children:c.jsx(P,{markdown:e(a)})});case"theorem":case"example":return c.jsxs("div",{className:`box ${a.type}`,children:[c.jsx("div",{className:"box-label",children:e(a.label)}),c.jsx("div",{className:"box-body",children:c.jsx(P,{markdown:e(a)})})]});case"table":return c.jsx(ji,{block:a});case"exercises":return c.jsx(Ai,{block:a});case"demo":return c.jsx(jn,{component:a.component,caption:a.caption?e(a.caption):void 0});case"quiz":return c.jsx(Tn,{refKey:a.ref,sectionId:n});case"glossary":return c.jsx(En,{deck:a.deck});case"flashcards":return c.jsx(Ln,{deck:a.deck});default:return null}}function Si({section:a}){const{t:n}=H();return c.jsxs("article",{className:"section",id:`sec-${a.id}`,children:[c.jsxs("h2",{className:"section-title",children:[n(a.title),At(a.id)&&c.jsx("span",{className:"done-badge",children:"✓"})]}),a.blocks.map((e,t)=>c.jsx(Ti,{block:e,sectionId:a.id},t)),wi(a.id).map(e=>c.jsx(dt,{snippets:e.snippets,caption:e.caption},e.id)),Oe(a.id).length>0&&c.jsx(ft,{questions:Oe(a.id)})]})}const ht=Ye,Fi={intro:"9",line:"9.1",polynomial:"9.2",nonlinear:"9.3"},Ei=ht.map(a=>({id:`sec-${a.id}`,no:Fi[a.id]??"9",title:a.title,blurb:{en:"",hu:""}}));function Pi(){const{lang:a}=H(),{theme:n}=pt(),e=$t();return T.useEffect(()=>{yt(a)},[a]),T.useEffect(()=>{_t(n)},[n]),T.useEffect(()=>{const t=decodeURIComponent(e.hash.replace(/^#/,""));t&&requestAnimationFrame(()=>{var o;return(o=document.getElementById(t))==null?void 0:o.scrollIntoView()})},[e.hash]),c.jsxs("div",{className:"ch-least-squares",children:[c.jsx(xt,{sections:Ei}),c.jsx("main",{className:"content content--full",children:ht.map(t=>c.jsx(Si,{section:t},t.id))})]})}export{Pi as default};
