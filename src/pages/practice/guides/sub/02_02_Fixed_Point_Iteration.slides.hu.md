# Numerikus analízis — 2. Nemlineáris egyenletek, egyenletrendszerek

*Ferenc Hartung — Pannon Egyetem, Matematika Tanszék · 2026*

*Beamer-előadáscsomag (151 fólia) markdown átirata. A fóliák sorrendjét megőrizzük; a matematika KaTeX-kompatibilis. A „Példa" / „Tétel" / „Bizonyítás" típusú színes dobozokat címkével azonosítjuk. A táblázatok és lépcsős-/grafikon-ábrák helyét leíró formában jelöljük.*

---

## 2.1. Fixpont iteráció

### 1. fólia — Címoldal

**Numerikus analízis**  
2. Nemlineáris egyenletek, egyenletrendszerek  
*Ferenc Hartung — Pannon Egyetem, Matematika Tanszék — 2026*

### 2. fólia — szakaszcím

**2.1. Fixpont iteráció**

### 3. fólia

A numerikus analízisben szereplő sorozatokat gyakran *rekurzív definícióval*, más néven *iterációval* adjuk meg. Egy

$$p_{k+1}=h(p_k,p_{k-1},\dots,p_{k-m+1}), \qquad k\geq m-1$$

rekurzív definícióval megadott iterációs módszert *$m$-lépéses iterációnak* nevezünk. Egy $m$-lépéses iterációs sorozatot $m$ kezdeti érték, $p_0,p_1,\dots,p_{m-1}$ határoz meg egyértelműen. Ebben a szakaszban a leggyakoribb esettel, az egylépéses iterációval, más néven *fixpont iterációval* foglalkozunk részletesebben.

Legyen $g\colon I\to I$, ahol $I\subset\mathbb{R}$. A

$$p_{k+1}=g(p_k), \qquad k\geq 0, \qquad p_0\in I$$

rekurzív sorozatot *fixpont iterációnak* nevezzük.

### 4. fólia — Példa

**Példa.** Tekintsük a $g(x)=-\tfrac{1}{8}x^3+x+1$ függvényt! A hozzá tartozó fixpont iteráció

$$p_{k+1}=-\tfrac{1}{8}p_k^3+p_k+1.$$

A sorozat első néhány tagját a $p_0=0.4$ kezdőértékből kiindulva számoljuk ki:

### 5. fólia — táblázat

**Fixpont iteráció, $g(x)=-\tfrac{1}{8}x^3+x+1$**

| $k$ | $p_k$ |
|---:|---|
| 0 | 0.40000000 |
| 1 | 1.39200000 |
| 2 | 2.05484646 |
| 3 | 1.97030004 |
| 4 | 2.01419169 |
| 5 | 1.99275275 |
| 6 | 2.00358428 |
| 7 | 1.99819822 |
| 8 | 2.00089846 |
| 9 | 1.99955017 |
| 10 | 2.00022477 |
| 11 | 1.99988758 |
| 12 | 2.00005620 |
| 13 | 1.99997190 |
| 14 | 2.00001405 |
| 15 | 1.99999297 |

### 6a. fólia — lépcsős diagram (külső nézet)

*Ábra: a $[0,2.5]\times[0,2.5]$ négyzeten ábrázolva $y=x$ (zöld), $y=g(x)$ (piros), és a $(p_0,0)\to(p_0,p_1)\to(p_1,p_1)\to(p_1,p_2)\to\dots$ kék töröttvonal. A $(p_0,p_1)$ és $(p_1,p_2)$ vízszintes szakaszokat felirat jelzi, a megoldás a $(2,2)$ pontban van.*

### 6b. fólia — lépcsős diagram (ráközelítve)

*Ábra: ugyanaz a kép a $[1.97,2.06]\times[1.97,2.06]$ ablakon kinagyítva — a kék töröttvonal spirálisan ráhúzódik a $(2,2)$ fixpontra; piros: $y=g(x)$, zöld: $y=x$.*

### 7. fólia

Az előbbi példában azt tapasztaltuk, hogy a fixpont sorozat az $y=x$ egyenes és az $y=g(x)$ grafikon metszéspontjának $x$-koordinátájához konvergál. Ennek a pontnak az $x$-koordinátája (és persze az $y$-koordinátája is) teljesíti a

$$g(x)=x$$

*fixpont egyenletet*. A $p$ számot a $g$ függvény *fixpontjának* nevezzük, ha

$$g(p)=p.$$

### 8. fólia — Tétel + Bizonyítás

**Tétel.** *Legyen $g\colon[a,b]\to[a,b]$ (vagy $\mathbb{R}\to\mathbb{R}$) folytonos függvény, $p_0\in[a,b]$ rögzített, és tekintsük a $p_{k+1}=g(p_k)$ fixpont iterációs sorozatot. Ha $p_k$ konvergens és $p_k\to p$, akkor $p=g(p)$.*

**Bizonyítás.** A $g$ függvény folytonossága és a $p_k\to p$ feltétel szerint

$$\begin{array}{ccc} p_{k+1} & = & g(p_k) \\ \downarrow & & \downarrow \\ p & = & g(p). \end{array}$$

### 9. fólia — két ellenpélda

**Példa.** Tekintsük a $g(x)=2x$ függvényt. Ekkor a $p_{k+1}=g(p_k)$ egyenletből a $p_0=1$ kezdeti értéket használva kapjuk, hogy $p_k=2^k\to\infty$.

**Példa.** Tekintsük a $g(x)=-x$ függvényt. Ekkor a $p_{k+1}=g(p_k)$ egyenletből a $p_0=1$ kezdeti értéket használva kapjuk, hogy $p_k=(-1)^k$, ami nem konvergens.

### 10. fólia — jelölések

Használni fogjuk az alábbi jelöléseket:

$$
\begin{aligned}
C[a,b] &= C([a,b],\mathbb{R})=\{f\colon[a,b]\to\mathbb{R},\ f\ \text{folytonos}\}, \\
C^1[a,b] &= C^1([a,b],\mathbb{R})=\{f\colon[a,b]\to\mathbb{R},\ f\ \text{folytonosan differenciálható}\}, \\
C^n[a,b] &= C^n([a,b],\mathbb{R})=\{f\colon[a,b]\to\mathbb{R},\ f\ n\text{-szer folytonosan differenciálható}\}.
\end{aligned}
$$

### 11. fólia — Lagrange-tétel

**Tétel (Lagrange-féle középértéktétel).** *Legyen $f\in C^1[a,b]$. Ekkor létezik olyan $\xi\in(a,b)$, hogy*

$$f(b)-f(a)=f'(\xi)(b-a),$$

*vagy ekvivalens módon,*

$$\frac{f(b)-f(a)}{b-a}=f'(\xi).$$

*Ábra: $f$ grafikonja (piros), $f(a)$ és $f(b)$ között a húr (kék), valamint az $f$-fel párhuzamos érintő a $\xi$ pontban (zöld).*

### 12. fólia — fixpont létezése és egyértelműsége

**Tétel.** *Legyen $g\colon[a,b]\to[a,b]$ folytonos. Ekkor $g$-nek létezik legalább egy fixpontja az $[a,b]$ intervallumon. Ha ezenkívül feltesszük azt is, hogy $g$ differenciálható $(a,b)$-n, és létezik olyan $0\leq c<1$ szám, hogy $|g'(x)|\leq c$ minden $x\in(a,b)$-re, akkor a fixpont egyértelmű.*

**Bizonyítás.** *Ábra: az $[a,b]\times[a,b]$ négyzeten a $g$ folytonos görbéje (piros), valamint az $y=x$ átló (zöld). A görbe metszi az átlót — ez a fixpont.*

### 13. fólia — Bizonyítás folytatása

**Bizonyítás folyt.** A tétel második felének bizonyításához tegyük fel, hogy $g$-nek két fixpontja is van, $p$ és $q$. Ekkor használva a Lagrange-féle középértéktételt, létezik olyan $\xi\in(a,b)$ szám, hogy

$$|p-q|=|g(p)-g(q)|=|g'(\xi)||p-q|\leq c|p-q|,$$

amiből következik, hogy $p=q$, azaz a fixpont egyértelmű.

### 14. fólia — Fixpont tétel

**Tétel (fixpont tétel).** *Legyen $g\colon[a,b]\to[a,b]$ folytonos függvény, $g$ differenciálható $(a,b)$-n, és tegyük fel hogy létezik olyan $0\leq c<1$ szám, hogy*

$$|g'(x)|\leq c, \qquad x\in(a,b).$$

*Legyen $p_0\in[a,b]$ tetszőleges, és $p_{k+1}=g(p_k)$ ($k\geq 0$). Ekkor a $p_k$ sorozat konvergál a $g$ függvény (egyértelmű) $p$ fixpontjához,*

$$|p_k-p|\leq c^k|p_0-p|, \tag{1}$$

*valamint*

$$|p_k-p|\leq \frac{c^k}{1-c}|p_1-p_0|. \tag{2}$$

### 15. fólia — Bizonyítás

**Bizonyítás.** Előző tétel szerint $g$-nek létezik egyértelmű fixpontja, $p$. Mivel $0\leq c<1$ a feltételek szerint, ezért ha belátjuk (1)-et, abból $p_k\to p$ következik. A feltételek és a Lagrange-féle középértéktétel szerint

$$|p_k-p|=|g(p_{k-1})-g(p)|=|g'(\xi)||p_{k-1}-p|\leq c|p_{k-1}-p|.$$

Ebből (teljes indukcióval) könnyen látható az (1) egyenlőtlenség.

### 16. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** (2) igazolásához legyen $m>k$ tetszőleges. A háromszög-egyenlőtlenséget, középértéktételt és a feltételeket alkalmazva

$$
\begin{aligned}
|p_k-p_m| &\leq |p_k-p_{k+1}|+|p_{k+1}-p_{k+2}|+\dots+|p_{m-1}-p_m| \\
&\leq |g(p_{k-1})-g(p_k)|+|g(p_k)-g(p_{k+1})|+\dots+|g(p_{m-2})-g(p_{m-1})| \\
&\leq c|p_{k-1}-p_k|+c|p_k-p_{k+1}|+\dots+c|p_{m-2}-p_{m-1}| \\
&\leq (c^k+c^{k+1}+\dots+c^{m-1})|p_0-p_1| \\
&= c^k(1+c+\dots+c^{m-k-1})|p_1-p_0| \\
&\leq c^k \sum_{i=0}^\infty c^i|p_1-p_0|.
\end{aligned}
$$

Így

$$|p_k-p_m|\leq\frac{c^k}{1-c}|p_1-p_0|$$

minden $m>k$-ra. Ha $k$ rögzített és $m$ tart a végtelenbe, kapjuk a (2) egyenlőtlenséget.

### 17. fólia — Lipschitz-tulajdonság

Azt mondjuk, hogy a $g$ függvény *Lipschitz-tulajdonságú* az $I$ intervallumon, ha létezik olyan $c\geq 0$ konstans, hogy

$$|g(x)-g(y)|\leq c|x-y|, \qquad x,y\in I. \tag{3}$$

Az egyenlőtlenségben szereplő $c$ számot a $g$ függvény *Lipschitz-konstansának* nevezzük.

- $g$ Lipschitz-tulajdonságú $I$-n $\Rightarrow$ $g$ folytonos $I$-n.
- $g\in C^1[a,b]$ $\Rightarrow$ $g$ Lipschitz-tulajdonságú $[a,b]$-n:

$$|g(x)-g(y)|=|g'(\xi)||x-y|\leq c|x-y|,$$

ahol $c:=\max\{|g'(x)|\colon x\in[a,b]\}$.
- $g$ szakaszonként folytonosan differenciálható $\Rightarrow$ $g$ Lipschitz-tulajdonságú. Például $g(x)=|x|$.

### 18. fólia — kontrakciós elv

Ha $g$ Lipschitz-tulajdonságú egy $0\leq c<1$ Lipschitz-konstanssal, akkor $g$-t *kontrakciónak* nevezzük.

**Tétel (kontrakciós elv, fixpont tétel).** *Legyen $g\colon[a,b]\to[a,b]$ folytonos függvény kontrakció, $p_0\in[a,b]$ tetszőleges, és $p_{k+1}=g(p_k)$ ($k\geq 0$). Ekkor a $p_k$ sorozat konvergál a $g$ függvény (egyértelmű) $p$ fixpontjához, és teljesülnek az (1) és (2) becslések.*

### 19. fólia — lokális vs globális konvergencia

Azt mondjuk, hogy egy

$$p_{k+1}=h(p_k,p_{k-1},\dots,p_{k-m+1})$$

iterációs módszer *lokálisan konvergál* $p$-hez, ha létezik olyan $\delta>0$, hogy minden $p_0,p_1,\dots,p_{m-1}\in(p-\delta,p+\delta)$ kezdeti értékekhez tartozó $p_k$ sorozat $p$-hez konvergál. Ha a $p_k$ sorozat tetszőleges kezdeti értékre konvergál $p$-hez, akkor az iterációs módszert *globálisan konvergensnek* nevezzük.

---
### 20. fólia — lokális fixponttétel

**Tétel.** *Legyen $g\in C^1[a,b]$, és legyen $p\in(a,b)$ a $g$ függvény egy fixpontja. Tegyük fel, hogy*

$$|g'(p)|<1.$$

*Ekkor a fixpont iteráció lokálisan konvergál $p$-hez, azaz létezik olyan $\delta>0$, hogy a $p_{k+1}=g(p_k)$ sorozat minden $p_0\in(p-\delta,p+\delta)$-ra konvergál $p$-hez.*

*Ábra (két panel): bal — $0<g'(p)<1$ esetén a lépcsős diagram monoton közelít $p$-hez; jobb — $-1<g'(p)<0$ esetén a sorozat spirálisan konvergál $p$-hez.*

### 21. fólia — divergencia két esete

*Ábra (két panel): bal — $1<g'(p)$ esetén a lépcsős diagram eltávolodik $p$-től (monoton divergencia); jobb — $g'(p)<-1$ esetén spirálisan kifelé halad (oszcilláló divergencia).*

---
