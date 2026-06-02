**6.1. Lagrange-interpoláció**



## 1. Az interpoláció alapfeladata

A mérnöki és tudományos gyakorlatban gyakran előfordul, hogy egy folyamatról nem ismerünk folytonos függvényt, csupán diszkrét mérési pontok (adatpárok) állnak rendelkezésünkre.

Az **interpoláció alapfeladata**: Adottak a páronként különböző $x_0, x_1, \ldots, x_n \in [a,b]$ **alappontok** (vagy osztópontok) és a hozzájuk tartozó $y_0, y_1, \ldots, y_n$ **függvényértékek**. Olyan egyszerűen kezelhető $g$ függvényt (osztályt) keresünk, amely ezeket a pontokat pontosan összeköti, azaz:


$$g(x_i) = y_i, \qquad i = 0, 1, \ldots, n \tag{6.1}$$

A legalapvetőbb megközelítés, amikor a keresett $g$ függvény egy **polinom**. Mivel $n+1$ darab adatpontunk van (0-tól $n$-ig), természetes elvárás, hogy a feladatot egy **legfeljebb $n$-edfokú polinom** ($L_n$) fogja egyértelműen megoldani.



## 2. A Lagrange-alappolinomok és a Lagrange-formula

A tétel szerint a fenti interpolációs feladatnak **mindig létezik egyetlen egyértelmű megoldása**. Ezt a polinomot explicit módon, közvetlen képlettel is felírhatjuk a **Lagrange-alappolinomok** segítségével.

### A Lagrange-alappolinomok ($l_k(x)$) definíciója:

Minden $k = 0, 1, \ldots, n$ alapponthoz hozzárendelünk egy $n$-edfokú polinomot az alábbi produktum-formulával:


$$l_k(x) := \prod_{\substack{j=0 \\ j \neq k}}^{n} \frac{x - x_j}{x_k - x_j} = \frac{(x - x_0) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)} \tag{6.2}$$

#### Kulcstulajdonság (Kronecker-delta tulajdonság):

Az alappolinomokat a szerkezetükből adódóan úgy tervezték, hogy az alappontokba behelyettesítve a következőt adják:


$$l_k(x_i) = \begin{cases} 1, & \text{ha } i = k \\ 0, & \text{ha } i \neq k \end{cases}$$

### A Lagrange-interpolációs polinom:

Az alappolinomok fenti tulajdonságát kihasználva, a keresett $L_n(x)$ polinomot egyszerűen a megadott $y_k$ értékek és az alappolinomok lineáris kombinációjaként állítjuk elő:

$$\mathbf{L_n(x) = \sum_{k=0}^{n} y_k l_k(x)} \tag{6.3}$$

Ha behelyettesítünk egy tetszőleges $x_i$ alappontot, az összes tag nullává válik, kivéve az $i$-ediket (ahol $l_i(x_i)=1$), így $L_n(x_i) = y_i \cdot 1 = y_i$, azaz a polinom valóban tökéletesen interpolál.



## 3. Hibaanalízis (Képlethiba)

Ha az interpolációt egy létező, de bonyolult $f(x)$ függvény helyettesítésére használjuk (ahol $y_i = f(x_i)$), fontos mérnöki kérdés, hogy az alappontok között mekkora hibát követünk el.

> **Tétel (Képlethiba):** Tegyük fel, hogy $f \in C^{n+1}[a,b]$. Ekkor minden $x \in [a,b]$ esetén létezik egy olyan $\xi_x \in (a,b)$ belső pont, amellyel a valódi függvény és az interpolációs polinom eltérése (maradéktagja) felírható az alábbi formában:
> 
> $$E_n(x) = f(x) - L_n(x) = \frac{f^{(n+1)}(\xi_x)}{(n+1)!} \omega_n(x)$$
> 
> 
> 
> Ahol $\omega_n(x) := \prod_{i=0}^{n} (x - x_i) = (x-x_0)(x-x_1)\cdots(x-x_n)$ az úgynevezett **nNode-polinom**.

### A hiba gyakorlati felső korlátja:

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{(n+1)!} |\omega_n(x)|, \qquad \text{ahol } M_{n+1} := \max_{t \in [a,b]} |f^{(n+1)}(t)|$$

*Figyelmeztetés (Runge-jelenség):* Bár azt gondolhatnánk, hogy az alappontok számának ($n$) növelésével a hiba mindenhol csökken, egyenletes eloszlású alappontok esetén magas fokszámú polinomoknál az intervallum szélein a hiba hatalmas, vad oszcillációkba kezdhet (ezt hívjuk Runge-jelenségnek).



## 4. Kétváltozós (Bivariáns) Lagrange-interpoláció

Az elv kiterjeszthető kétdimenziós, téglalap alakú tartományokra is. Ha az $x$-irányban rögzítünk $n+1$ darab ($x_i$), $y$-irányban pedig $m+1$ darab ($y_j$) különálló alappontot, akkor a megadott $z_{ij} = f(x_i, y_j)$ felületi pontok rácsára az alábbi kétváltozós interpolációs polinom illeszthető:

$$L_{n,m}(x, y) := \sum_{i=0}^{n} \sum_{j=0}^{m} z_{ij} l_i(x) \tilde{l}_j(y) \tag{6.5}$$

Ahol $l_i(x)$ az $x$ alappontokhoz, míg $\tilde{l}_j(y)$ az $y$ alappontokhoz tartozó egyváltozós Lagrange-alappolinomok.

### Gyakorlati mintapélda a jegyzetből:

A jegyzet bemutat egy $3 \times 2$-es rácspontrendszert ($x$-ben másodfokú, $y$-ban elsőfokú eset). A (6.5) formula algebrai kibontásával és rendezésével az alábbi kétváltozós polinom adódik a megadott pontokra:


$$L_{2,1}(x, y) = -\frac{1}{2}x^2 y + \frac{5}{2}x^2 + \frac{3}{2}xy - \frac{11}{2}x - \frac{1}{2}y + 2$$



## 5. Összegzés és gyakorlati kontextus

A Lagrange-interpoláció egy alapvető és elméletileg tiszta matematikai eszköz, mivel explicit módon, közvetlen képlettel adja meg az interpolációs polinomot. Hátránya viszont, hogy ha egy újabb mérési pontot kapunk, a teljes alappolinom-rendszert és a kombinációs összeget az alapoktól újra kell számolni. (Ez a gyakorlati nehézség vezetett a Newton-féle osztott differenciák és a spline-interpolációk kifejlesztéséhez).