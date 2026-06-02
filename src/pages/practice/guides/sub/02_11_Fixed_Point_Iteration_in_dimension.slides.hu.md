## 2.10. Fixpont tétel $n$-dimenzióban

### 113. fólia — szakaszcím

**2.10. Fixpont tétel $n$-dimenzióban**

### 114. fólia — bevezető példa

**Példa.** Tekintsük a

$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned} \tag{18}$$

egyenletrendszert. Ennek megoldása $x_1=1$ és $x_2=0$. Alakítsuk át a (18) rendszert a következő módon. Fejezzük ki az első egyenletből $x_1$-et, a másodikból pedig $x_2$-t:

$$\begin{aligned}x_1 &= \tfrac{1}{4}(e^{x_1 x_2}+3)\\ x_2 &= \tfrac{1}{3}(x_1-x_2^2-1)\end{aligned} \tag{19}$$

Az egyenletrendszert röviden az $\mathbf{x}=\mathbf{g}(\mathbf{x})$ alakban írhatjuk fel a vektoriális jelölést alkalmazva, ahol $\mathbf{x}=(x_1,x_2)^T$ és

$$\mathbf{g}(\mathbf{x})=\mathbf{g}(x_1,x_2)=\begin{pmatrix}\tfrac{1}{4}(e^{x_1 x_2}+3)\\ \tfrac{1}{3}(x_1-x_2^2-1)\end{pmatrix}. \tag{20}$$

### 115. fólia — Példa folyt.

**Példa folyt.** Az egyváltozós fixpont iterációhoz hasonlóan (19) megoldására definiáljuk a következő iterációt $k=0,1,2,\dots$-re:

$$\begin{aligned}p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)} p_2^{(k)}}+3)\\ p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)}-(p_2^{(k)})^2-1\right)\end{aligned} \tag{21}$$

Definiálva a

$$\mathbf{p}^{(k)}=(p_1^{(k)},p_2^{(k)})^T$$

vektorsorozatot, a (21) egyenletrendszert röviden a

$$\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$$

alakban írhatjuk fel.

### 116. fólia — táblázat

**Fixpont iteráció**

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

### 117. fólia — kontrakció, fixpont tétel

Legyen $E\subset\mathbb{R}^n$, és tekintsünk egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvényt. A $\mathbf{p}\in E$ vektort a $\mathbf{g}$ függvény *fixpontjának* nevezzük, ha

$$\mathbf{p}=\mathbf{g}(\mathbf{p}).$$

Egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvény *kontrakció* az $E$ halmazon a $\|\cdot\|$ vektornormában, ha létezik egy $0\leq c<1$ szám, hogy

$$\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq c\|\mathbf{x}-\mathbf{y}\|$$

minden $\mathbf{x},\mathbf{y}\in E$-re.

**Tétel (fixpont tétel).** *Legyen $E\subset\mathbb{R}^n$ zárt, $\mathbf{g}\colon E\to E$, és legyen $\mathbf{g}$ kontrakció az $E$ halmazon valamely $\|\cdot\|$ normában. Ekkor $\mathbf{g}$-nek létezik egyértelmű $\mathbf{p}\in E$ fixpontja, és a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció $\mathbf{p}$-hez konvergál minden $\mathbf{p}^{(0)}\in E$ kezdeti értékre. A konvergencia rendje legalább lineáris.*

### 118. fólia — Bizonyítás

**Bizonyítás.** Belátjuk, hogy a $\mathbf{p}^{(k)}$ sorozat Cauchy-sorozat. Legyen $c$ a $\mathbf{g}$ függvény Lipschitz-konstansa, és legyen $k>m$. A fixpont sorozat definíciója és a kontrakciós tulajdonságból kapjuk

$$
\begin{aligned}
&\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\| \\
&= \|\mathbf{p}^{(k)}-\mathbf{p}^{(k-1)}+\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}+\dots+\mathbf{p}^{(m+1)}-\mathbf{p}^{(m)}\| \\
&\leq \|\mathbf{p}^{(k)}-\mathbf{p}^{(k-1)}\|+\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\dots+\|\mathbf{p}^{(m+1)}-\mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)})-\mathbf{g}(\mathbf{p}^{(k-2)})\|+\|\mathbf{g}(\mathbf{p}^{(k-2)})-\mathbf{g}(\mathbf{p}^{(k-3)})\| \\
&\quad +\dots+\|\mathbf{g}(\mathbf{p}^{(m)})-\mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c(\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\|\mathbf{p}^{(k-2)}-\mathbf{p}^{(k-3)}\|+\dots+\|\mathbf{p}^{(m)}-\mathbf{p}^{(m-1)}\|) \\
&\leq (c^{k-1}+c^{k-2}+\dots+c^m)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1}+c^{k-m-2}+\dots+1)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&\leq c^m\sum_{i=0}^\infty c^i\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\|.
\end{aligned}
$$

### 119. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Ebből adódik hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|\to 0$, ha $m\to\infty$, tehát $\mathbf{p}^{(k)}$ Cauchy-sorozat. Így $\mathbf{p}^{(k)}$ konvergál egy $\mathbf{p}$ vektorhoz. A $\mathbf{g}$ függvény folytonossága alapján ekkor

$$\begin{array}{ccc}\mathbf{p}^{(k+1)} & = & \mathbf{g}(\mathbf{p}^{(k)})\\ \downarrow & & \downarrow\\ \mathbf{p} & = & \mathbf{g}(\mathbf{p}),\end{array}$$

azaz $\mathbf{p}$ fixpontja $\mathbf{g}$-nek.

A konvergencia rendje legalább lineáris, hiszen

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|=\|\mathbf{g}(\mathbf{p}^{(k)})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|.$$

### 120. fólia — egyértelműség

**Bizonyítás folyt.** Tegyük fel, hogy $\mathbf{p}$ és $\bar{\mathbf{p}}$ fixpontjai $\mathbf{g}$-nek. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján

$$\|\mathbf{p}-\bar{\mathbf{p}}\|=\|\mathbf{g}(\mathbf{p})-\mathbf{g}(\bar{\mathbf{p}})\|\leq c\|\mathbf{p}-\bar{\mathbf{p}}\|,$$

amiből $\mathbf{p}=\bar{\mathbf{p}}$ következik.

### 121. fólia — lokális konvergencia $\|g'(p)\|<1$ esetén

**Tétel.** *Legyen $E\subset\mathbb{R}^n$ nyílt halmaz, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^1$, és legyen $\mathbf{p}$ fixpontja $\mathbf{g}$-nek. Ha*

$$\|\mathbf{g}'(\mathbf{p})\|<1$$

*valamilyen $\|\cdot\|$ vektornorma által generált mátrixnormában, akkor a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció lokálisan konvergál $\mathbf{p}$-hez.*

---
### 122. fólia — Bizonyítás (lokális konvergencia)

**Bizonyítás.** Mivel $E$ nyílt halmaz, ezért létezik olyan $\bar{\delta}>0$, hogy

$$\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|<\bar{\delta}\}\subset E.$$

Válasszunk egy $c$ számot, amelyre

$$\|\mathbf{g}'(\mathbf{p})\|<c<1.$$

A $\mathbf{g}'$ függvény folytonos $\mathbf{p}$-ben, így létezik olyan $0<\delta\leq\bar{\delta}$, hogy

$$\|\mathbf{g}'(\mathbf{x})\|\leq c, \qquad \mathbf{x}\in V:=\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|\leq\delta\}.$$

A Lagrange-féle középértéktétel alapján

$$\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq\max_{t\in(0,1)}\|\mathbf{g}'(\mathbf{x}+t(\mathbf{y}-\mathbf{x}))\|\cdot\|\mathbf{x}-\mathbf{y}\|\leq c\|\mathbf{x}-\mathbf{y}\|,$$

azaz $\mathbf{g}$ kontrakció.

### 123. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Megmutatjuk, hogy a $\mathbf{g}$ függvény a $V$ halmazt önmagába képezi. Legyen $\mathbf{x}\in V$. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján

$$\|\mathbf{g}(\mathbf{x})-\mathbf{p}\|=\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{x}-\mathbf{p}\|<\delta,$$

tehát

$$\mathbf{g}(\mathbf{x})\in V.$$

Ha a $\mathbf{g}$ függvényt megszorítjuk a $V$ halmazra, akkor erre a függvényre teljesülnek korábbi tétel feltételei, ezért a $V$ halmazból indított fixpont iteráció konvergens, és $\mathbf{p}$-hez konvergál.

### 124. fólia — Példa: derivált mátrix

**Példa.** Számítsuk ki a (20) képlettel definiált

$$\mathbf{g}(\mathbf{x})=\mathbf{g}(x_1,x_2)=\begin{pmatrix}\tfrac{1}{4}(e^{x_1 x_2}+3)\\ \tfrac{1}{3}(x_1-x_2^2-1)\end{pmatrix}$$

függvény derivált mátrixát:

$$\mathbf{g}'(\mathbf{x})=\begin{pmatrix}\tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4}x_1 e^{x_1 x_2}\\ \tfrac{1}{3} & -\tfrac{2}{3}x_2\end{pmatrix}.$$

A $\mathbf{g}$ függvény $(1,0)^T$ fixpontjában felvett értéke

$$\mathbf{g}'(1,0)=\begin{pmatrix}0 & \tfrac{1}{4}\\ \tfrac{1}{3} & 0\end{pmatrix},$$

aminek 1-normája $\|\mathbf{g}'(1,0)\|_1=\tfrac{1}{3}<1$, ezért a fixpont sorozat lokálisan konvergens.

### 125. fólia — Tétel (másodrendű konvergencia, $g'(p)=0$)

**Tétel.** *Legyen $E\subset\mathbb{R}^n$, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^2$, $\mathbf{g}(\mathbf{p})=\mathbf{p}$, és $\mathbf{g}'(\mathbf{p})=\mathbf{0}$. Ekkor létezik olyan $\delta>0$ hogy a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)}-\mathbf{p}\|<\delta$. Továbbá létezik olyan $c$ konstans, hogy minden $k$-ra*

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|_\infty\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2$$

*teljesül, azaz az iteráció másodrendben lokálisan konvergál $\mathbf{p}$-hez.*

### 126. fólia — Bizonyítás (Taylor-közelítés)

**Bizonyítás.** A feltétel szerint $0=\|\mathbf{g}'(\mathbf{p})\|<1$, így a fixpont iteráció lokálisan konvergens. Vegyük a $\mathbf{g}$ függvény $i$-edik komponensfüggvényének a $\mathbf{p}=(p_1,\dots,p_n)^T$ pont körüli másodrendű Taylor-közelítését:

$$
\begin{aligned}
g_i(x_1,\dots,x_n) &= g_i(p_1,\dots,p_n)+\sum_{j=1}^n\frac{\partial g_i(p_1,\dots,p_n)}{\partial x_j}(x_j-p_j) \\
&\quad +\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n\frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(x_j-p_j)(x_l-p_l).
\end{aligned}
$$

Ezt az $(x_1,\dots,x_n)^T=(p_1^{(k)},\dots,p_n^{(k)})^T$ vektorra alkalmazva, és használva a $p_i=g_i(\mathbf{p})$ és $p_i^{(k+1)}=g_i(\mathbf{p}^{(k)})$ összefüggéseket, kapjuk

$$p_i^{(k+1)}-p_i=\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n\frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(p_j^{(k)}-p_j)(p_l^{(k)}-p_l).$$

### 127. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Legyen $M$ olyan, hogy

$$\left|\frac{\partial^2 g_i(x_1,\dots,x_n)}{\partial x_j\partial x_l}\right|\leq M$$

minden $i,j,l=1,\dots,n$-re a $\mathbf{p}$ pont egy környezetében, melyben minden $\mathbf{p}^{(k)}$ benne van. $M$ definícióját használva

$$|p_i^{(k+1)}-p_i|\leq\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n M|p_j^{(k)}-p_j||p_l^{(k)}-p_l|\leq\tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2.$$

Mivel ez a becslés minden $i=1,\dots,n$-re teljesül, ezért

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|_\infty\leq\tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2,$$

azaz a konvergencia másodrendű.

---
