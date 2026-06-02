**10.5. Runge–Kutta-módszerek**  



## 1. Motiváció és az alapötlet

* **A probléma a Taylor-módszerekkel:** Bár a magasabb rendű Taylor-módszerek nagyon pontosak, alkalmazásukhoz szükség van a differenciálegyenlet jobb oldalának ($f$) analitikus, magasabb rendű teljes deriváltjaira ($f^{(1)}, f^{(2)}$, stb.). Bonyolult egyenletek esetén ezek rendkívül átláthatatlan, számításigényes képleteket eredményeznek.
* **A Runge–Kutta (RK) módszerek célja:** Úgy csökkentik a számolási igényt és a programozási komplexitást, hogy **megőrzik a Taylor-módszerek magasrendű konvergenciáját, de anélkül, hogy a függvény deriváltjait akár egyszer is ki kellene számítani**. Ehhez a deriváltakat az $f$ függvény okosan megválasztott pontokban vett értékeinek lineáris kombinációjával helyettesítik.



## 2. A Runge–Kutta-módszerek levezetési elve (Másodrendű eset)

A jegyzet a Taylor-sorok összehasonlításán keresztül mutatja be a módszer matematikai hátterét. Induljunk ki a másodrendű Taylor-módszer növekményfüggvényéből:


$$F(t, z; h) = f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right) \tag{10.23}$$

Ezt vessük össze a kétváltozós $f$ függvény $t+a$ és $z+b$ pont körüli elsőrendű Taylor-polinomjával:


$$f(t + a, z + b) = f(t, z) + \frac{\partial f}{\partial t}(t, z)a + \frac{\partial f}{\partial y}(t, z)b + \mathcal{O}(a^2+b^2) \tag{10.24}$$

Ha az (10.24) képletben az $a = \frac{h}{2}$ és $b = \frac{h}{2}f(t,z)$ paramétereket választjuk, akkor a parciális deriváltas kifejezések pontosan megegyeznek az (10.23) Taylor-módszer zárójeles tagjával. Ebből adódik az eljárás rekurziója:


$$z_{i+1} = z_i + h f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}f(t_i, z_i)\right) \tag{10.25}$$

Ezt a formulát **módosított Euler-módszernek** vagy **középpontmódszernek** (midpoint method) nevezzük. Geometriailag ez azt jelenti, hogy teszünk egy fél Euler-lépést előre, ott kiértékeljük az iránymező meredekségét, majd a szakasz középpontjában mért irányt használjuk fel a teljes $h$ hosszúságú lépés megtételéhez a $t_i$ pontból.



## 3. Az általános $p$-lépcsős explicit Runge–Kutta-módszer

Az elv általánosítható úgy, hogy egy időlépésen belül $p$ darab különböző pontban (belső stádiumban) értékeljük ki az $f$ függvényt. Az általános explicit séma a következő:

$$\begin{aligned} w_{i,1} &= f(t_i, z_i) \\ w_{i,2} &= f(t_i + c_2h, z_i + h a_{21}w_{i,1}) \\ w_{i,3} &= f(t_i + c_3h, z_i + h(a_{31}w_{i,1} + a_{32}w_{i,2})) \\ &\vdots \\ w_{i,p} &= f\left(t_i + c_ph, z_i + h\sum_{j=1}^{p-1} a_{pj}w_{i,j}\right) \\ z_{i+1} &= z_i + h\sum_{j=1}^p b_jw_{i,j} \end{aligned} \tag{10.26}$$

A módszer együtthatóit ($a_{ij}, b_j, c_i$) az ún. **Butcher-táblázatban** szokás összefoglalni.



## 4. A stádiumszám ($p$) és a maximális elérhető rend kapcsolata

A stádiumok (függvénykiértékelések) száma és a globális konvergencia rendje között nemlineáris kapcsolat van. A lehetséges maximális rendet az alábbi táblázat foglalja össze:

| $p$ (stádiumok száma) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Maximális globális rend** | **1** | **2** | **3** | **4** | **4** | **5** | **6** | **6** |

> **Fontos elméleti korlát (Butcher-gát):** $p=4$-ig a stádiumok számával egyező rendet kaphatunk. Azonban egy 5-ödrendű módszerhez már legalább 6 stádium (kiértékelés) szükséges, ami miatt a **negyedrendű Runge–Kutta módszer a legoptimálisabb** a hatékonyság/számítási igény arányát tekintve.



## 5. A "klasszikus" negyedrendű Runge–Kutta-módszer (RK4)

Az egyik legszélesebb körben használt numerikus algoritmus a differenciálegyenletek megoldására az **RK4**, amely lépésenként 4 függvénykiértékelést végez, és globálisan **negyedrendben konvergens** ($\mathcal{O}(h^4)$).

### Az RK4 formulája:

$$z_0 = y_0$$

$$\begin{aligned} w_{i,1} &= f(t_i, z_i) \\ w_{i,2} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,1}\right) \\ w_{i,3} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,2}\right) \\ w_{i,4} &= f\left(t_{i+1}, z_i + hw_{i,3}\right) \end{aligned}$$

$$z_{i+1} = z_i + \frac{h}{6}\big(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4}\big)$$



## 6. Numerikus összehasonlítás (10.4. Példa)

A fejezet az $y' = 2y - 10t^2 + 2t$, $y(0)=1$ feladaton teszteli a különböző módszereket $h=0.1$ lépésköz mellett:

* **Euler-módszer (1. rend):** A hiba a $t=1$ végpontban $5.8 \cdot 10^{-2}$.
* **Módosított Euler (2. rend):** A hiba ugyanebben a pontban már lényegesen kisebb: $1.1 \cdot 10^{-2}$.
* **Klasszikus RK4 (4. rend):** Elképesztő pontosságot produkál: a hiba mindössze **$7.3 \cdot 10^{-5}$**.

### Összegzés

A Runge–Kutta módszerek (különösen az RK4) a modern numerikus szoftverek (pl. MATLAB `ode45`) gerincét alkotják. Úgy képesek rendkívül precíz, magasrendű közelítést adni, hogy kiküszöbölik a Taylor-módszerek deriválási nehézségeit, és tisztán csak az $f$ függvény kiértékelésére támaszkodnak.