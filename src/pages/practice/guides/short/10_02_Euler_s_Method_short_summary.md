**10.2. Euler-módszer**



## 1. A módszer célja és definíciója

Az Euler-módszer a közönséges differenciálegyenletek elsőrendű kezdeti érték problémáinak (IVP) **legegyszerűbb és legklasszikusabb numerikus megoldási eljárása**.

A feladatunk a következő:


$$\begin{cases} y' = f(t, y), & t \in [t_0, T] \\ y(t_0) = y_0 \end{cases}$$

A cél az $y(t)$ pontos megoldásfüggvény értékeinek közelítése előre rögzített $t_0 < t_1 < \dots < t_n = T$ időpontokban (az ún. időrácson vagy alappontokban). Ha az alappontok távolsága állandó, akkor **ekvidisztáns** rácsról beszélünk, ahol a lépésköz:


$$h = \frac{T - t_0}{n} \qquad \text{és} \qquad t_i = t_0 + ih \tag{10.2}$$

A módszer az $y(t_i)$ pontos értékeket egy rekurzívan generált $z_i$ sorozattal (**Euler-sorozat**) közelíti:

$$\mathbf{z_{i+1} = z_i + h f(t_i, z_i)}, \qquad i = 0, 1, \dots, n-1, \qquad z_0 = y_0 \tag{10.4}$$



## 2. Az Euler-módszer három különböző levezetése

A jegyzet bemutatja, hogy a fenti (10.4) formula három egymástól független matematikai megközelítéssel is megkapható:

### (i) Geometriai levezetés (Taylor-polinommal)

Induljunk ki a pontos megoldás $t_i$ pont körüli elsőrendű Taylor-polinomjából (lineáris érintő-közelítéséből):


$$y(t) \approx y(t_i) + y'(t_i)(t - t_i)$$


Mivel a differenciálegyenlet miatt tudjuk, hogy $y'(t_i) = f(t_i, y(t_i))$, a következő $t = t_{i+1}$ rácspontban felírható:


$$y(t_{i+1}) \approx y(t_i) + h f(t_i, y(t_i))$$


Ha a pontos $y(t_i)$ értékeket lecseréljük a numerikus $z_i$ közelítésekre, megkapjuk az Euler-formulát. Geometriailag ez azt jelenti, hogy az aktuális pontból a mező által kijelölt **érintőegyenes mentén** lépünk tovább a következő időlépcsőre.

### (ii) Numerikus deriválással (Véges időkülönbséggel)

A $t_i$ pontban közelítsük az $y'(t_i)$ deriváltat a klasszikus **előrehaladó különbségi hányadossal** (forward difference coefficient):


$$y'(t_i) \approx \frac{y(t_{i+1}) - y(t_i)}{h}$$


Behelyettesítve ezt a differenciálegyenletbe:


$$\frac{y(t_{i+1}) - y(t_i)}{h} \approx f(t_i, y(t_i))$$


Ezt az egyenletet $y(t_{i+1})$-re rendezve és a közelítéseket bevezetve szintén a (10.4) rekurzióhoz jutunk.

### (iii) Numerikus integrálással (Téglalapszabállyal)

Integráljuk a differenciálegyenlet mindkét oldalát a $[t_i, t_{i+1}]$ részintervallumon:


$$\int_{t_i}^{t_{i+1}} y'(t) \, dt = \int_{t_i}^{t_{i+1}} f(t, y(t)) \, dt \implies y(t_{i+1}) - y(t_i) = \int_{t_i}^{t_{i+1}} f(t, y(t)) \, dt$$


A jobb oldali integrált közelítsük a **bal oldali téglalapszabállyal** (ahol az integrálandó függvényt a szakasz elején felvett értékével konstansnak feltételezzük):


$$\int_{t_i}^{t_{i+1}} f(t, y(t)) \, dt \approx h f(t_i, y(t_i))$$


Ebből $y(t_{i+1}) \approx y(t_i) + h f(t_i, y(t_i))$, ami harmadszorra is az Euler-módszert adja.



## 3. Hibaelemzés és Konvergencia

Egy numerikus módszernél kritikus kérdés, hogy a lépésköz ($h$) csökkentésével a közelítés hibája nullához tart-e.

### Lokális csonkítási hiba (Local Truncation Error)

A lokális hiba azt méri, hogy mekkora hibát követünk el **egyetlen időlépés során**, feltételezve, hogy az előző pontban még a pontos értékről indultunk. A Taylor-tétel másodrendű maradéktagjából adódik:


$$\tau_{i+1} = \frac{h}{2}y''(\xi_i)$$


Ha a függvény parciális deriváltjai folytonosak és korlátosak, akkor az $y''(t)$ függvény is korlátos ($M_2$ konstanssal), így a lokális hiba:


$$|\tau_{i+1}| \leq \frac{M_2}{2}h \sim \mathcal{O}(h^2)$$

### Globális hiba és Konvergenciatétel (10.5. Tétel)

A globális hiba ($e_i = |y(t_i) - z_i|$) a teljes $[t_0, T]$ intervallumon felhalmozódott összes hiba hatása az $i$-edik lépésben.

> **10.5. Tétel:** Ha $f$ folytonos és a második változójában Lipschitz-folytonos $L$ konstanssal, valamint a pontos megoldás kétszer folytonosan differenciálható, akkor az Euler-módszer globális hibájára érvényes az alábbi becslés:
> 
> $$|y(t_i) - z_i| \leq \frac{M_2}{2L} \left( e^{L(t_i - t_0)} - 1 \right) \cdot h \tag{10.6}$$
> 
> 

### Következmény: Elsőrendű konvergencia

Mivel a (10.6) becslés jobb oldalán a $h$ lépésköz az első hatványon szerepel, az Euler-módszer **elsőrendben konvergens** (rendje: $1$). Ez azt jelenti, hogy ha a lépésközt a felére csökkentjük ($h \to h/2$), a globális hiba is durván a felére fog csökkenni.



## 4. Az Euler-módszer alkalmazása differenciálegyenlet-rendszerekre

Bár a levezetések skalár egyenletekre történtek, a formula közvetlenül kiterjeszthető **elsőrendű differenciálegyenlet-rendszerekre** is, csupán a skalár változókat vektorokra kell cserélni:

$$\mathbf{z}_{i+1} = \mathbf{z}_i + h \mathbf{f}(t_i, \mathbf{z}_i)$$

A fejezet végén található feladatok bemutatják, hogy magasabbrendű skalár differenciálegyenleteket először rendszerré kell alakítani, és utána erre a vektoros formulára már programozható vagy kézzel számolható az Euler-közelítés.