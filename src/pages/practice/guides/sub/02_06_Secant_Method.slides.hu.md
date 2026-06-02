## 2.6. Szelőmódszer

### 55. fólia — szakaszcím

**2.6. Szelőmódszer**

### 56. fólia — szelőmódszer definíciója

Legyen $p_0$ és $p_1$ két egymástól különböző, általunk választott kezdeti érték. Tekintsük az $f$ függvény grafikonjának $p_0$ és $p_1$ pontjaihoz tartozó szelőt, azaz a $(p_0,f(p_0))$ és $(p_1,f(p_1))$ pontokon átmenő egyenest:

$$y=f(p_1)+\frac{f(p_1)-f(p_0)}{p_1-p_0}(x-p_1).$$

Ennek metszete az $x$-tengellyel

$$p_2=p_1-\frac{p_1-p_0}{f(p_1)-f(p_0)}f(p_1).$$

Ezt az eljárást ismételve kapjuk a

$$p_{k+1}=p_k-\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k) \tag{9}$$

sorozatot. A (9) képlettel definiált kétlépéses iterációs módszert *szelőmódszernek* nevezzük.

### 57a. fólia — szelőmódszer 1. lépés

*Ábra (szelőmódszer: 1. lépés): piros görbe $y=f(x)$, a $(p_0,f(p_0))$ és $(p_1,f(p_1))$ pontokat kék szelő köti össze, amely az $x$-tengelyt $p_2$-ben metszi.*

### 57b. fólia — szelőmódszer 2. lépés

*Ábra (szelőmódszer: 2. lépés): az előző kép, hozzávéve a $(p_1,f(p_1))$ és $(p_2,f(p_2))$ pontokat összekötő zöld szelőt, amely az $x$-tengelyt $p_3$-ban metszi.*

### 58. fólia — Példa

**Példa.** A szelőmódszert alkalmazzuk az $e^x-2\cos x=0$ egyenletre.

**Szelőmódszer, $f(x)=e^x-2\cos x$, $p_0=0$, $p_1=1$, $TOL=10^{-5}$**

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |
| 1 | 1.0000000000 | 1.6377e+00 |
| 2 | 0.3791214458 | -3.9698e-01 |
| 3 | 0.5002604213 | -1.0576e-01 |
| 4 | 0.5442561500 | 1.2301e-02 |
| 5 | 0.5396724494 | -3.0921e-04 |
| 6 | 0.5397848464 | -8.6246e-07 |
| 7 | 0.5397851608 | 6.0793e-11 |

### 59. fólia — Tétel

**Tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a szelőmódszer lokálisan konvergál $p$-hez.*

---
