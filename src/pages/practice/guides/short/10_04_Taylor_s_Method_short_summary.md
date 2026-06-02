**10.4. Taylor-módszer**



## 1. Motiváció és az általános egylépéses módszer definíciója

* **A probléma az Euler-módszerrel:** Bár az Euler-módszer egyszerű, csupán elsőrendben konvergens, ami azt jelenti, hogy a hiba lassan csökken, és a gyakorlatban túl kicsi lépésközt ($h$) követel meg.
* **Az általánosítás elve:** Az Euler-módszer szerkezetét megtartva definiálhatunk egy általános **egylépéses numerikus eljárást** ekvidisztáns időrácson ($t_i = t_0 + ih$) a kezdeti érték probléma (IVP) megoldására:

$$z_{i+1} = z_i + hF(t_i, z_i; h), \qquad i = 0, 1, \dots, n-1, \qquad z_0 = y_0 \tag{10.18}$$



Ahol $F$ az úgynevezett **növekményfüggvény** (increment function). (Az Euler-módszer ennek a speciális esete, ahol $F(t, z; h) = f(t, z)$).



## 2. Lokális csonkítási hiba és globális konvergencia

Ahhoz, hogy egy ilyen (10.18) típusú általános módszer konvergenciáját jellemezhessük, bevezetjük a **lokális csonkítási hiba (LTE)** fogalmát:


$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h) \tag{10.19}$$


Ahol $y(t)$ a differenciálegyenlet pontos matematikai megoldása.

> **Konvergenciatétel (10.7. Tétel):** Ha a növekményfüggvény ($F$) Lipschitz-folytonos a második változójában $L_F$ konstanssal, és a lokális csonkítási hiba $\alpha$-ad rendű (azaz $|\tau_{i+1}| \leq K_2 h^\alpha$), akkor a módszer **globálisan is $\alpha$-ad rendben konvergens**. A globális hibára az alábbi felső becslés érvényes:
> 
> $$|y(t_i) - z_i| \leq \frac{K_2(e^{L_F(t_i - t_0)} - 1)}{L_F} \cdot h^\alpha \tag{10.20}$$
> 
> 



## 3. A magasabbrangú Taylor-módszerek felépítése

A Taylor-módszer alapötlete, hogy a növekményfüggvényt ($F$) úgy tervezzük meg, hogy a lokális hiba rendje ($\alpha$) tetszőlegesen magas egész szám lehessen. Ehhez a pontos megoldás $t_i$ pont körüli **magasabb fokú Taylor-polinomját** használjuk fel:


$$y(t_{i+1}) = y(t_i) + h y'(t_i) + \frac{h^2}{2} y''(t_i) + \dots + \frac{h^m}{m!} y^{(m)}(t_i) + \frac{h^{m+1}}{(m+1)!} y^{(m+1)}(\xi_i)$$

Mivel a differenciálegyenlet alapján $y'(t) = f(t, y(t))$, a magasabb rendű deriváltak láncszabállyal (teljes differenciálással) egymás után analitikusan előállíthatók:

* $y''(t) = \frac{d}{dt}f(t, y(t)) =: f^{(1)}(t, y(t))$
* $y'''(t) = \frac{d^2}{dt^2}f(t, y(t)) =: f^{(2)}(t, y(t))$

Ezeket behelyettesítve megkapjuk az **$m$-edrendű Taylor-módszer** növekményfüggvényét:


$$F(t, z; h) = f(t, z) + \frac{h}{2}f^{(1)}(t, z) + \frac{h^2}{3!}f^{(2)}(t, z) + \dots + \frac{h^{m-1}}{m!}f^{(m-1)}(t, z) \tag{10.22}$$

> **Tulajdonság:** Az $m$-edrendű Taylor-módszer lokális csonkítási hibája $\mathcal{O}(h^m)$ rendű, és a globális hibája is **$m$-edrendű** ($\alpha = m$).



## 4. Mintapélda és a rend numerikus ellenőrzése

A fejezet az $y' = 2y - 10t^2 + 2t$, $y(0)=1$ feladaton mutatja be a módszer működését.

### A másodrendű ($m=2$) Taylor-módszer levezetése:

Kiszámítjuk az első teljes deriváltat:


$$f^{(1)}(t, y) = \frac{d}{dt}(2y - 10t^2 + 2t) = 2y' - 20t + 2 = 2(2y - 10t^2 + 2t) - 20t + 2 = 4y - 20t^2 - 16t + 2$$


Így a rekurziós formula:


$$z_{i+1} = z_i + h(2z_i - 10t_i^2 + 2t_i) + \frac{h^2}{2}(4z_i - 20t_i^2 - 16t_i + 2)$$

### Numerikus tapasztalatok (A rend igazolása)

A különböző lépésközökkel ($h=0.2$ és $h=0.1$) végzett számítások eredményeiből leolvasható:

* Ha a lépésközt a **felére** csökkentjük ($0.2 \to 0.1$), a globális hiba durván a **negyedére** esik vissza. Ez gyakorlati bizonyítéka annak, hogy a módszer valóban **másodrendű** ($2$-es rendű).
* A harmadrendű ($m=3$) Taylor-módszer esetén a lépésköz felezése már a hiba **nyolcadára** való csökkenését eredményezi.



## 5. A Taylor-módszerek előnyei és komoly hátránya

### Előny:

* Elméletileg tetszőlegesen magas konvergencia-rendet ($m=2, 3, 4, \dots$) képes biztosítani, így rendkívül pontos közelítéseket kaphatunk viszonylag tágasabb lépésközök mellett is.

### Hátrány (Amiért a gyakorlatban ritkán használják):

* Minden egyes lépcsőfokhoz ki kell számítani az $f$ függvény **analitikus magasabb rendű teljes deriváltjait** ($f^{(1)}, f^{(2)}$, stb.). Ha a differenciálegyenlet jobb oldala bonyolult, ezek a többszörös parciális deriváltakból álló láncolatok hatalmas, átláthatatlan és nehezen programozható képleteket eredményeznek, amelyek kiértékelése számításigényes.

> **Átvezetés a következő fejezethez:** Ez a komoly gyakorlati hátrány vezetett a **Runge–Kutta-módszerek** kifejlesztéséhez, amelyek képesek megtartani a magas konvergencia-rendet, de anélkül, hogy a függvény deriváltjait egyszer is ki kellene számítani.