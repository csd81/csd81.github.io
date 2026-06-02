**6.4. Hermite-interpoláció**


## 1. A feladat megfogalmazása és geometriai jelentése

A korábbi szakaszokban (6.1. és 6.3.) vizsgált klasszikus Lagrange-interpolációnál a cél az volt, hogy a polinom grafikonja pontosan átmenjen az adott pontokon, de a görbe irányát (meredekségét) ezekben a pontokban nem tudtuk szabályozni.

A **Hermite-interpoláció** (vagy érintőinterpoláció) ezt a feladatot általánosítja: az $y_i = f(x_i)$ függvényértékeken kívül előre megadott **$y_i' = f'(x_i)$ derivált értékeket (irányokat)** is pontosan interpolálni akarjuk.

Olyan $H(x)$ polinomot keresünk az $x_0, x_1, \ldots, x_n$ alappontokra, amelyre teljesül:


$$H(x_i) = y_i \qquad \text{és} \qquad H'(x_i) = y_i', \qquad i = 0, 1, \ldots, n \tag{6.15}$$

### Fokszám-becslés

Mivel $n+1$ darab alappontunk van, a feltételek száma $2(n+1)$. Ennyi kényszernek egy $2(n+1)$ ismeretlen együtthatót tartalmazó, **legfeljebb $(2n+1)$-edfokú polinom** ($H_{2n+1}$) képes egyértelműen eleget tenni.



## 2. Elméleti háttér: Osztott differenciák kiterjesztése

A Hermite-polinom explicit felírásához a 6.2. fejezetben bevezetett osztott differenciák elméletét használjuk, méghozzá úgy, hogy minden $x_i$ alappontot **kétszer egymás után szerepeltetünk** a definícióban.

Emlékeztetőül, ha két alappont egybeesik, az osztott differencia a deriválttal egyenlő:


$$f[x_i, x_i] = f'(x_i) = y_i'$$

Ha egynél több különböző pontunk van, a magasabb rendű, ismételt pontokat tartalmazó osztott differenciák a standard rekurzív módon számíthatók ki:


$$f[x_0, x_0, x_1] = \frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0} = \frac{f[x_0, x_1] - f'(x_0)}{x_1 - x_0}$$

$$f[x_0, x_0, x_1, x_1] = \frac{f[x_0, x_1, x_1] - f[x_0, x_0, x_1]}{x_1 - x_0}$$



## 3. A Hermite-polinom általános Newton-féle alakja

Ha bevezetjük a duplázott alappontokból álló új $z$ sorozatot:


$$z_0 = x_0, \ z_1 = x_0, \ z_2 = x_1, \ z_3 = x_1, \ \ldots, \ z_{2n} = x_n, \ z_{2n+1} = x_n$$

Akkor a 6.3-as szakasz mintájára felírható a **Hermite-féle interpolációs polinom általános Newton-alakja**:

$$\mathbf{H_{2n+1}(x) = f[z_0] + \sum_{i=1}^{2n+1} f[z_0, z_1, \ldots, z_i] \prod_{j=0}^{i-1} (x - z_j)} \tag{6.17}$$



## 4. Gyakorlati számítás: Az osztott differenciák kibővített táblázata

A gyakorlatban a számítást egy módosított osztott differenciák táblázatával végezzük. Minden $x_i$ pontot **kétszer egymás után írunk be a táblázat soraiba**, és az azonos pontok közötti elsőrendű oszlopba közvetlenül beírjuk a megadott $f'(x_i)$ derivált értékeket.

### Mintapélda a jegyzetből

Adottak a következő adatok ($n=2$, a keresett polinom fokszáma $2n+1 = 5$):

* $x_0 = -1, \ y_0 = -1, \ y_0' = -5$
* $x_1 = 1, \ y_1 = 1, \ y_1' = 7$
* $x_2 = 2, \ y_2 = 29, \ y_2' = 61$

A felépített kibővített táblázat:

| $z_i$ | $f[z_i]$ | 1. rend | 2. rend | 3. rend | 4. rend | 5. rend |
| --- | --- | --- | --- | --- | --- | --- |
| **-1** | **-1** |  |  |  |  |  |
| -1 | -1 | **-5** *($y_0'$)* |  |  |  |  |
| 1 | 1 | 1 | **3** |  |  |  |
| 1 | 1 | 7 *($y_1'$)* | 3 | **0** |  |  |
| 2 | 29 | 28 | 21 | 6 | **2** |  |
| 2 | 29 | 61 *($y_2'$)* | 33 | 4 | -0.666 | **-0.888** |

### A polinom felírása (A felső átló alapján):

A (6.17) képlet szerint az együtthatók a táblázat legfelső átlós elemei (vastagítással jelölve): **-1, -5, 3, 0, 2, -0.888**.

A gyöktényezőket fokozatosan gyűjtve:


$$H_5(x) = \mathbf{-1} - \mathbf{5}(x+1) + \mathbf{3}(x+1)^2 + \mathbf{0}(x+1)^2(x-1) + \mathbf{2}(x+1)^2(x-1)^2 - \mathbf{\frac{8}{9}}(x+1)^2(x-1)^2(x-2)$$

Zárójelek felbontása és algebrai rendezés után a végeredmény:


$$H_5(x) = -\frac{8}{9}x^5 + \frac{34}{9}x^4 - \frac{10}{9}x^3 - \frac{26}{9}x^2 + \frac{11}{9}x + \frac{7}{9}$$



## 5. Hibabecslés (7.14. Tétel)

Ha a Hermite-polinomot egy $f(x)$ sima függvény közelítésére használjuk, a képlethiba struktúrája nagyon hasonlít a Lagrange-éhoz, de a duplázott pontok miatt a node-polinom tényezői négyzetre emelkednek:

> **7.14. Tétel:** Tegyük fer, hogy $f \in C^{2n+2}[a,b]$. Ekkor minden $x \in [a,b]$ esetén létezik olyan $\xi \in (a,b)$ belső pont, amellyel a Hermite-interpoláció hibája felírható a következő alakban:
> 
> $$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!} \Omega_n(x)$$
> 
> 
> 
> Ahol $\Omega_n(x) := \prod_{i=0}^{n} (x - x_i)^2 = (x-x_0)^2(x-x_1)^2\cdots(x-x_n)^2$.



## 6. Összegzés és gyakorlati haszon

A Hermite-interpoláció rendkívül fontos mérnöki eszköz (például a számítógépes grafika spline-görbéinél vagy fizikai pályatervezésnél). Mivel nemcsak pontokat, hanem érintőirányokat is illeszt, sokkal simább, természetesebb lefutású görbéket képes generálni, mint a Lagrange-módszer, ráadásul az alappontok duplázásának trükkjével a számítása tisztán visszavezethető a Newton-féle osztott differenciák jól ismert táblázatos algoritmusára.