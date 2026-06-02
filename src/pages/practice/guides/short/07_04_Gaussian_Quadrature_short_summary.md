**7.4. Gauss-féle kvadratúra-formulák** 



## 1. Motiváció és a szabad alappontok elve

* **A probléma a Newton–Cotes-formulákkal:** A korábban tárgyalt Newton–Cotes-módszereknél (pl. Trapéz- vagy Simpson-szabály) az $x_i$ alappontok előre rögzítettek és egyenlő távolságra (ekvidisztánsan) helyezkednek el. Emiatt egy $n$ alappontos séma legfeljebb $n$ vagy $n+1$ fokszámú polinomokat képes teljesen pontosan integrálni.
* **A Gauss-féle alapötlet:** Miért rögzítenénk le az alappontokat? Ha az $x_i$ **alappontokat is szabad paraméterként (ismeretlenként) kezeljük** a kvadratúra-képlet $c_i$ súlyai mellett, akkor kétszer annyi szabadsági fokunk lesz. Ezáltal egy $n$ stádiumú (pontos) képlettel sokkal magasabb rendű polinomokat is egzaktul integrálhatunk.



## 2. Elméleti háttér és a maximális algebrai pontosság

Tekintsük az alábbi általános kvadratúra-formulát a $[-1, 1]$ intervallumon:


$$\int_{-1}^{1} f(x)\,dx \approx \sum_{i=1}^{n} c_i f(x_i)$$

> **7.10. Tétel:** Egy kvadratúra-formula akkor és csak akkor pontos egy tetszőleges, legfeljebb $m$-edfokú polinomra, ha teljesen pontos az $x^0, x^1, x^2, \ldots, x^m$ monomokra (hatványfüggvényekre).

Mivel $n$ darab $c_i$ súlyunk és $n$ darab $x_i$ alappontunk van, összesen $2n$ darab ismeretlent hangolhatunk be. Ebből adódik a fejezet legfontosabb elméleti korlátja:

* $n$ darab okosan megválasztott alappont segítségével a formula képes **minden legfeljebb $2n-1$ fokú polinomot teljesen pontosan (hiba nélkül)** integrálni.



## 3. Kapcsolat a Legendre-polinomokkal (Az alappontok kijelölése)

Hogyan határozhatjuk meg ezeket az optimális alappontokat anélkül, hogy egy bonyolult nemlineáris egyenletrendszert kellene megoldanunk? A matematikai elmélet az ortogonális polinomokhoz, kifejezetten a **Legendre-polinomokhoz ($P_n(x)$)** vezet.

> **Tétel (Alappontok és súlyok):** Az $\int_{-1}^{1} f(x)\,dx$ integrálra vonatkozó, maximum ($2n-1$) pontosságú Gauss-kvadratúra eljárás $x_1, x_2, \ldots, x_n$ alappontjai **pontosan az $n$-edfokú $P_n(x)$ Legendre-polinom gyökei**. A hozzájuk tartozó $c_i$ súlyok pedig mindig szigorúan pozitívak ($c_i > 0$), és az alábbi integrálképlettel számíthatók:
> 
> $$c_i = \int_{-1}^{1} \prod_{\substack{j=1 \\ j \neq i}}^{n} \frac{x - x_j}{x_i - x_j} \, dx$$
> 
> 

### Az első néhány standard Gauss-Legendre paraméter:

* **$n=2$ eset (pontos harmadfokú polinomig):**
* Alappontok: $x_1 = -\frac{1}{\sqrt{3}} \approx -0.57735$, $\quad x_2 = \frac{1}{\sqrt{3}} \approx 0.57735$
* Súlyok: $c_1 = 1.0$, $\quad c_2 = 1.0$


* **$n=3$ eset (pontos ötödfokú polinomig):**
* Alappontok: $x_1 = -\sqrt{0.6} \approx -0.77459$, $\quad x_2 = 0.0$, $\quad x_3 = \sqrt{0.6} \approx 0.77459$
* Súlyok: $c_1 = \frac{5}{9} \approx 0.55555$, $\quad c_2 = \frac{8}{9} \approx 0.88888$, $\quad c_3 = \frac{5}{9} \approx 0.55555$





## 4. Transzformáció tetszőleges $[a, b]$ intervallumra

Mivel a standard Legendre-gyökök és súlyok szigorúan a $[-1, 1]$ intervallumra vannak letáblázva, egy tetszőleges $[a, b]$ tartományon vett integrál kiszámításához egy lineáris **változó-helyettesítést (transzformációt)** kell végrehajtanunk:

$$x = \frac{b - a}{2}t + \frac{a + b}{2} \implies dx = \frac{b - a}{2}\,dt$$

Behelyettesítve a transzformációt, az integrál az alábbi formában számolható ki a standard rácsparaméterekkel:


$$\int_a^b f(x)\,dx = \frac{b - a}{2} \int_{-1}^{1} f\left( \frac{b - a}{2}t + \frac{a + b}{2} \right) \, dt \approx \frac{b - a}{2} \sum_{i=1}^{n} c_i f\left( \frac{b - a}{2}t_i + \frac{a + b}{2} \right)$$



## 5. Összegzés és gyakorlati előnyök

A Gauss-görbe kvadratúra a modern mérnöki szoftverek (pl. végeselemes szerkezetanalitikai programok) legfontosabb integrálási eszköze a következő tulajdonságai miatt:

1. **Rendkívül magas hatékonyság:** Kevesebb függvénykiértékeléssel ($n$) képes kétszer magasabb elméleti pontosságot ($2n-1$) elérni, mint a Newton–Cotes-formulák. Ez drasztikusan csökkenti a számítógépes futási időt.
2. **Kiváló numerikus stabilitás:** Mivel az ortonormált elméletből következően minden $c_i$ súly garantáltan szigorúan pozitív ($c_i > 0$) tetszőlegesen nagy $n$ esetén is, a kerekítési hibák nem erősödnek fel, a módszer aszimptotikusan is teljesen stabil marad.