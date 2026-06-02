## 2.11. Fixpont tétel $n$-dimenzióban

Az egyváltozós függvényekre definiált fixpont és a fixpont iteráció fogalmát és annak tulajdonságait könnyen általánosíthatjuk többváltozós függvényekre.

**2.51. példa.** Tekintsük a

$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned} \tag{2.25}$$

egyenletrendszert. Ennek megoldása $x_1=1$ és $x_2=0$. Alakítsuk át a (2.25) rendszert a következő módon. Fejezzük ki az első egyenletből $x_1$-et, a másodikból pedig $x_2$-t:

$$\begin{aligned}x_1 &= \tfrac{1}{4}(e^{x_1 x_2}+3)\\ x_2 &= \tfrac{1}{3}(x_1-x_2^2-1)\end{aligned} \tag{2.26}$$

A (2.26) egyenletrendszert röviden az $\mathbf{x}=\mathbf{g}(\mathbf{x})$ alakban írhatjuk fel vektoriális jelölést alkalmazva, ahol $\mathbf{x}=(x_1,x_2)^T$ és

$$\mathbf{g}(\mathbf{x})=\mathbf{g}(x_1,x_2)=\begin{pmatrix}\tfrac{1}{4}(e^{x_1 x_2}+3)\\ \tfrac{1}{3}(x_1-x_2^2-1)\end{pmatrix}. \tag{2.27}$$

Az egyváltozós fixpont iterációhoz hasonlóan (2.26) megoldására definiáljuk a következő iterációt $k=0,1,2,\dots$-re:

$$\begin{aligned}p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)}p_2^{(k)}}+3)\\ p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)}-(p_2^{(k)})^2-1\right)\end{aligned} \tag{2.28}$$

A $p_1^{(0)}=-2$ és $p_2^{(0)}=-2$ kezdőértékekből kiindulva kiszámoltuk a $p_1^{(k)}$ és $p_2^{(k)}$ sorozatok első néhány tagját a 2.12. táblázatban. Látható, hogy a sorozatok konvergálnak 1-hez ill. 0-hoz.

Definiálva a $\mathbf{p}^{(k)}=(p_1^{(k)},p_2^{(k)})^T$ vektorsorozatot, a (2.28) egyenletrendszert röviden a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ alakban írhatjuk fel. $\square$

**2.12. táblázat.** Fixpont iteráció

| $k$ | $p_1^{(k)}$ | $p_2^{(k)}$ |
|---:|---|---|
| 0 | -2.000000000 | -2.000000000 |
| 1 | 14.399537510 | -2.333333333 |
| 2 | 0.750000000 | 2.651697690 |
| 3 | 2.576641266 | -2.427166879 |
| 4 | 0.750480717 | -1.438165931 |
| 5 | 0.834956989 | -0.772613509 |
| 6 | 0.881152644 | -0.253991549 |
| 7 | 0.949867689 | -0.061119687 |
| 8 | 0.985899367 | -0.017955976 |
| 9 | 0.995613247 | -0.004807684 |
| 10 | 0.998806211 | -0.001469956 |
| 11 | 0.999633219 | -0.000398650 |
| 12 | 0.999900394 | -0.000122313 |

Legyen $E\subset\mathbb{R}^n$, és tekintsünk egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvényt. Az egyváltozós esethez hasonlóan, a $\mathbf{p}\in E$ vektort a $\mathbf{g}$ függvény *fixpontjának* nevezzük, ha $\mathbf{p}=\mathbf{g}(\mathbf{p})$.

Egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvény *kontrakció* az $E$ halmazon a $\|\cdot\|$ vektornormában, ha létezik egy $0\leq c<1$ szám, hogy $\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq c\|\mathbf{x}-\mathbf{y}\|$ minden $\mathbf{x},\mathbf{y}\in E$-re.

**2.52. tétel (fixpont tétel).** *Legyen $E\subset\mathbb{R}^n$ zárt, $\mathbf{g}\colon E\to E$, és legyen $\mathbf{g}$ kontrakció az $E$ halmazon valamely $\|\cdot\|$ normában. Ekkor $\mathbf{g}$-nek létezik egyértelmű $\mathbf{p}\in E$ fixpontja, és a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció $\mathbf{p}$-hez konvergál minden $\mathbf{p}^{(0)}\in E$ kezdeti értékre. A konvergencia rendje legalább lineáris.*

**Bizonyítás.** Belátjuk, hogy a $\mathbf{p}^{(k)}$ sorozat Cauchy-sorozat. Legyen $c$ a $\mathbf{g}$ függvény Lipschitz-konstansa, és legyen $k>m$. Az egyváltozós esethez hasonlóan a fixpont sorozat definíciója és a kontrakciós tulajdonságból kapjuk

$$
\begin{aligned}
\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\| &\leq \|\mathbf{p}^{(k)}-\mathbf{p}^{(k-1)}\|+\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\dots+\|\mathbf{p}^{(m+1)}-\mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)})-\mathbf{g}(\mathbf{p}^{(k-2)})\|+\|\mathbf{g}(\mathbf{p}^{(k-2)})-\mathbf{g}(\mathbf{p}^{(k-3)})\|+\dots+\|\mathbf{g}(\mathbf{p}^{(m)})-\mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c(\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\|\mathbf{p}^{(k-2)}-\mathbf{p}^{(k-3)}\|+\dots+\|\mathbf{p}^{(m)}-\mathbf{p}^{(m-1)}\|) \\
&\leq (c^{k-1}+c^{k-2}+\dots+c^m)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1}+c^{k-m-2}+\dots+1)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&\leq c^m \sum_{i=0}^\infty c^i\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\|.
\end{aligned}
$$

Ebből adódik hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|\to 0$, ha $m\to\infty$, tehát $\mathbf{p}^{(k)}$ Cauchy-sorozat. A 2.49. tétel 5. pontja szerint $\mathbf{p}^{(k)}$ konvergál egy $\mathbf{p}$ vektorhoz. A $\mathbf{g}$ függvény folytonossága alapján ekkor $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})\to\mathbf{g}(\mathbf{p})$, ezért $\mathbf{p}=\mathbf{g}(\mathbf{p})$, azaz $\mathbf{p}$ fixpontja $\mathbf{g}$-nek.

A konvergencia rendje legalább lineáris, hiszen

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|=\|\mathbf{g}(\mathbf{p}^{(k)})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|.$$

Tegyük fel, hogy $\mathbf{p}$ és $\bar{\mathbf{p}}$ fixpontjai $\mathbf{g}$-nek. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján $\|\mathbf{p}-\bar{\mathbf{p}}\|=\|\mathbf{g}(\mathbf{p})-\mathbf{g}(\bar{\mathbf{p}})\|\leq c\|\mathbf{p}-\bar{\mathbf{p}}\|$, amiből $\mathbf{p}=\bar{\mathbf{p}}$ következik. $\square$

**2.53. tétel.** *Legyen $E\subset\mathbb{R}^n$ nyílt halmaz, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^1$, és legyen $\mathbf{p}$ fixpontja $\mathbf{g}$-nek. Ha $\|\mathbf{g}'(\mathbf{p})\|<1$ valamilyen $\|\cdot\|$ vektornorma által generált mátrixnormában, akkor a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció lokálisan konvergál $\mathbf{p}$-hez.*

**Bizonyítás.** Mivel $E$ nyílt halmaz, ezért létezik olyan $\bar{\delta}>0$, hogy $\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|<\bar{\delta}\}\subset E$. Válasszunk egy $c$ számot, amelyre $\|\mathbf{g}'(\mathbf{p})\|<c<1$. A $\mathbf{g}'$ függvény folytonos $\mathbf{p}$-ben, így létezik olyan $0<\delta\leq\bar{\delta}$, hogy $\|\mathbf{g}'(\mathbf{x})\|\leq c$ minden $\mathbf{x}\in V:=\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|\leq\delta\}$-ra. A Lagrange-féle középértéktétel (2.50. tétel) alapján

$$\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq \max_{t\in(0,1)}\|\mathbf{g}'(\mathbf{x}+t(\mathbf{y}-\mathbf{x}))\|\cdot\|\mathbf{x}-\mathbf{y}\|\leq c\|\mathbf{x}-\mathbf{y}\|,$$

azaz $\mathbf{g}$ kontrakció.

Megmutatjuk, hogy a $\mathbf{g}$ függvény a $V$ halmazt önmagába képezi. Legyen $\mathbf{x}\in V$. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján $\|\mathbf{g}(\mathbf{x})-\mathbf{p}\|=\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{x}-\mathbf{p}\|<\delta$, tehát $\mathbf{g}(\mathbf{x})\in V$. Ha a $\mathbf{g}$ függvényt megszorítjuk a $V$ halmazra, akkor erre a függvényre teljesülnek a 2.52. tétel feltételei, ezért a $V$ halmazból indított fixpont iteráció konvergens, és $\mathbf{p}$-hez konvergál. $\square$

**2.54. példa.** Számítsuk ki a 2.51. feladatban szereplő, a (2.27) képlettel definiált $\mathbf{g}$ függvény derivált mátrixát:

$$\mathbf{g}'(\mathbf{x})=\begin{pmatrix}\tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4}x_1 e^{x_1 x_2}\\ \tfrac{1}{3} & -\tfrac{2}{3}x_2\end{pmatrix}.$$

Ennek a $\mathbf{g}$ függvény $(1,0)^T$ fixpontjában felvett értéke

$$\mathbf{g}'(1,0)=\begin{pmatrix}0 & \tfrac{1}{4}\\ \tfrac{1}{3} & 0\end{pmatrix},$$

aminek 1-normája $\|\mathbf{g}'(1,0)\|_1=\tfrac{1}{3}<1$, ezért 2.53. tétel szerint a fixpont sorozat lokálisan konvergens. $\square$

**2.55. tétel.** *Legyen $E\subset\mathbb{R}^n$, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^2$, $\mathbf{g}(\mathbf{p})=\mathbf{p}$, és $\mathbf{g}'(\mathbf{p})=\mathbf{0}$. Ekkor létezik olyan $\delta>0$ hogy a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)}-\mathbf{p}\|<\delta$. Továbbá létezik olyan $c$ konstans, hogy minden $k$-ra $\|\mathbf{p}^{(k+1)}-\mathbf{p}\|\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2$ teljesül, azaz az iteráció másodrendben lokálisan konvergál $\mathbf{p}$-hez.*

**Bizonyítás.** A feltétel szerint $0=\|\mathbf{g}'(\mathbf{p})\|<1$, így a 2.53. tételből következik, hogy a fixpont iteráció lokálisan konvergens.

Most belátjuk, hogy a konvergencia kvadratikus. Vegyük a $\mathbf{g}$ függvény $i$-edik komponensfüggvényének a $\mathbf{p}=(p_1,\dots,p_n)^T$ pont körüli másodrendű Taylor-közelítését:

$$
\begin{aligned}
g_i(x_1,\dots,x_n) &= g_i(p_1,\dots,p_n)+\sum_{j=1}^n \frac{\partial g_i(p_1,\dots,p_n)}{\partial x_j}(x_j-p_j) \\
&\quad +\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n \frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(x_j-p_j)(x_l-p_l).
\end{aligned}
$$

Ezt az $(x_1,\dots,x_n)^T=(p_1^{(k)},\dots,p_n^{(k)})^T$ vektorra alkalmazva, és használva a $p_i=g_i(\mathbf{p})$ és $p_i^{(k+1)}=g_i(\mathbf{p}^{(k)})$ összefüggéseket, kapjuk

$$p_i^{(k+1)}-p_i=\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n \frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(p_j^{(k)}-p_j)(p_l^{(k)}-p_l).$$

Legyen $M$ olyan, hogy $\left|\frac{\partial^2 g_i(x_1,\dots,x_n)}{\partial x_j\partial x_l}\right|\leq M$ minden $i,j,l=1,\dots,n$-re a $\mathbf{p}$ pont egy környezetében, melyben minden $\mathbf{p}^{(k)}$ benne van. $M$ definícióját használva

$$|p_i^{(k+1)}-p_i|\leq \tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n M|p_j^{(k)}-p_j||p_l^{(k)}-p_l|\leq \tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2.$$

Mivel ez a becslés minden $i=1,\dots,n$-re teljesül, ezért

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|_\infty\leq \tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2,$$

azaz a konvergencia másodrendű. $\square$

**Feladatok**

1. Alakítsa át a következő egyenleteket fixpont feladattá, majd keresse meg az egyenlet közelítő megoldását fixpont iterációval a $(0,0)^T$ kezdeti értékből kiindulva:
   - (a) $-2x^2+6x-y^2=4$, $x^2+y^3-5y=3$
   - (b) $8x+\cos x-y^3=-7$, $x^2+4y=8$
   - (c) $x^2+7x+y^2-4y=3$, $2x+y^3+4y=-5$
   - (d) $\cos x-5y=3$, $x^2-6x+y^2-2y=4$
2. Számítsa ki az előző feladatban használt fixpont függvény deriváltját és annak normáját a numerikusan kapott fixpontban!
3. Mutassa meg, hogy 2.55. tétel feltételei mellett a $\mathbf{p}^{(k)}$ fixpont iteráció tetszőleges vektornormában lokálisan kvadratikusan konvergál!

---
