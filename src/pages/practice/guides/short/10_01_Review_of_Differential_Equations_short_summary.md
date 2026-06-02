**10.1. Differenciálegyenletek előismeretek**


## 1. A Kezdeti Érték Probléma (IVP) definíciója

A fejezet központi vizsgálati tárgya az elsőrendű, skaláris **kezdeti érték probléma** (Initial Value Problem – IVP) egy véges $[t_0, T]$ időintervallumon:

$$\begin{cases} y' = f(t, y), & t \in [t_0, T] \\ y(t_0) = y_0 \end{cases} \tag{10.1}$$

Ahol:

* $t$ a független változó (idő),
* $y = y(t)$ a keresett (ismeretlen) valós értékű függvény,
* $y_0 \in \mathbb{R}$ a megadott kezdeti állapot (kezdeti feltétel),
* $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ a differenciálegyenlet jobb oldala, amely geometriailag egy iránymezőt határoz meg a síkon.



## 2. Lipschitz-folytonosság (A stabilitás és egyértelműség kulcsa)

Ahhoz, hogy a differenciálegyenletnek biztosan létezzen egyértelmű és stabil megoldása, a jobb oldali $f$ függvénynek teljesítenie kell egy speciális feltételt a második (azaz az $y$) változójában.

> **Definíció:** Az $f(t, y)$ függvény a második változójában teljesíti a **Lipschitz-tulajdonságot** az $L \geq 0$ Lipschitz-konstanssal, ha minden $t \in [t_0, T]$ és tetszőleges $y, \tilde{y} \in \mathbb{R}$ esetén érvényes az alábbi egyenlőtlenség:
> 
> $$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \tag{10.3}$$
> 
> 

### Hogyan ellenőrizhető ez könnyen?

Ha az $f(t, y)$ függvény az $y$ változó szerint folytonosan differenciálható ($\frac{\partial f}{\partial y}$ létezik és folytonos) egy konvex tartományon, akkor a Lagrange-féle középértéktétel miatt teljesül a Lipschitz-feltétel, és a konstans megválasztható a parciális derivált abszolút értékének felső korlátjaként:


$$L = \max \left| \frac{\partial f(t,y)}{\partial y} \right|$$



## 3. Picard–Lindelöf egzisztencia- és unicitástétel

A fejezet legfontosabb elméleti tétele rögzíti, hogy milyen feltételek mellett van értelme numerikus közelítő módszereket futtatni a differenciálegyenletre.

> **Tétel (Egzisztencia és Unicitás):** Tegyük fel, hogy az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ függvény folytonos, és a második változójában Lipschitz-folytonos az $L$ konstanssal. Ekkor a (10.1) kezdeti érték problémának **létezik pontosan egy (egyértelmű) megoldása** a teljes $[t_0, T]$ intervallumon, bármely $y_0 \in \mathbb{R}$ kezdeti érték esetén.



## 4. Magasabbrendű differenciálegyenletek átírása rendszerré

A gyakorlatban (például fizikai rezgőmozgások leírásakor) gyakran találkozunk másod- vagy annál magasabbrendű differenciálegyenletekkel. A jegyzet bemutatja, hogy egy tetszőleges $m$-edrendű skaláris differenciálegyenlet **mindig átírható egy vele ekvivalens, elsőrendű differenciálegyenlet-rendszerré**.

Tekintsünk egy $m$-edrendű kezdeti érték problémát:


$$y^{(m)} = f(t, y, y', \ldots, y^{(m-1)}), \quad y(t_0) = y_0,\ y'(t_0) = y_1, \ldots,\ y^{(m-1)}(t_0) = y_{m-1}$$

Az átíráshoz bevezetünk $m$ darab új változót az alábbi módon:


$$\begin{aligned} u_1(t) &= y(t) \\ u_2(t) &= y'(t) \\ u_3(t) &= y''(t) \\ &\vdots \\ u_m(t) &= y^{(m-1)}(t) \end{aligned}$$

Ekkor a deriváltakat felírva az alábbi **elsőrendű egyenletrendszert** kapjuk:


$$\begin{aligned} u_1' &= u_2 \\ u_2' &= u_3 \\ &\vdots \\ u_{m-1}' &= u_m \\ u_m' &= f(t, u_1, u_2, \ldots, u_m) \end{aligned}$$

A hozzá tartozó kezdeti vektor pedig egyszerűen: $\mathbf{u}(t_0) = (y_0, y_1, \ldots, y_{m-1})^T$.

### Gyakorlati következmény

Mivel minden magasabbrendű egyenlet átalakítható elsőrendű rendszerré, a numerikus analízisben elegendő az elsőrendű problémák megoldására koncentrálni, hiszen a kifejlesztett algoritmusok (pl. Runge–Kutta-módszerek) vektoros formában ezekre a rendszerekre is közvetlenül alkalmazhatók.