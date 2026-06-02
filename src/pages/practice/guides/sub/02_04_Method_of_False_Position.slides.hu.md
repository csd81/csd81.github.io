## 2.4. Húrmódszer

### 36. fólia — szakaszcím

**2.4. Húrmódszer**

---
### 37. fólia — húr definíciója

Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos, amelyre $f(a)f(b)<0$. Kiindulásul legyen $[a_0,b_0]=[a,b]$. Az $k$-adik lépésben $p_k$-t az $f$ függvény $a_k$ és $b_k$ pontjaihoz tartozó húrja (azaz az $(a_k,f(a_k))$ és $(b_k,f(b_k))$ pontokat összekötő szakasz) és $x$-tengely metszeteként definiáljuk.

*Ábra: az $f$ piros görbe a $[a_k,b_k]$ intervallumon, kék húr a két végpontot köti össze, a metszéspont az $x$-tengelyen $p_k$.*

Kis számolással kapjuk, hogy

$$p_k=a_k-f(a_k)\frac{a_k-b_k}{f(a_k)-f(b_k)}. \tag{5}$$

Ezután a következő lépés $[a_{k+1},b_{k+1}]$ intervallumának az $[a_k,p_k]$ és $[p_k,b_k]$ intervallumok közül azt választjuk, ahol a függvény szintén előjelet vált.

### 38. fólia — Algoritmus: Húrmódszer (1/2)

**Algoritmus: Húrmódszer.**

```
INPUT:
    f      - függvény,
    [a,b]  - intervallum, ahol f(a)f(b) < 0
    TOL    - tolerancia,
    MAXIT  - maximális iterációszám,
OUTPUT: p - közelítő gyök.

i ← 1                  (lépésszám)
q ← a
while i < MAXIT do
    p ← a - f(a)(a - b)/(f(a) - f(b))
    if |p - q| < TOL do
        output(p)
        stop
    end do
```

### 39. fólia — Algoritmus: Húrmódszer (2/2)

```
    if f(p) f(b) < 0 do
        a ← p
    else if f(a) f(p) < 0 do
        b ← p
    else
        output(p)
        stop
    end do
    i ← i + 1
    q ← p
end do
output(Maximális iterációszám túllépve.)
```

### 40. fólia — konvergencia konvex esetben

**Tétel.** *Legyen az $f\in C[a,b]$ függvény konvex vagy konkáv $[a,b]$-n és $f(a)f(b)<0$. Ekkor a húrmódszer konvergál az $f$ függvény (egyértelmű) $p$ gyökéhez.*

**Bizonyítás.** Tegyük fel, hogy $f$ konvex és $f(a)>0$, $f(b)<0$. Ekkor

$$a_{k+1}=a \quad \text{és} \quad b_{k+1}=p_k \quad \text{minden } k\text{-ra}.$$

*Ábra (két panel): bal — az $[a_k,b_k]$ intervallumon a konvex piros görbe és a kék húr; jobb — a következő lépésben $[a_{k+1},b_{k+1}]$ szűkebb, és a görbe továbbra is konvex.*

Mivel a $p_k$ sorozat monoton csökkenő és az $a$ szám egy alsó korlátja, ezért konvergál egy $p\geq a$ számhoz. $f(p_k)<0$ minden $k$-ra, ezért $f(p)\leq 0$.

### 41. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Mivel $f(a)>0$, ezért $p>a$. A

$$p_k=a_k-f(a_k)\frac{a_k-b_k}{f(a_k)-f(b_k)}$$

egyenletből $k\to\infty$ esetén kapjuk, hogy

$$p=a-f(a)\frac{a-p}{f(a)-f(p)},$$

amiből $f(p)=0$ következik. A többi eset hasonlóan látható be.

### 42. fólia — Példa, $[0,1]$

**Példa.** Alkalmazzuk a húrmódszert az $e^x-2\cos x=0$ egyenletre, a $[0,1]$ intervallumból kiindulva!

**Húrmódszer, $f(x)=e^x-2\cos x$, $[0,1]$, $TOL=10^{-5}$**

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.37912145 | -3.9698e-01 |
| 1 | 0.37912145 | 1.00000000 | 0.50026042 | -1.0576e-01 |
| 2 | 0.50026042 | 1.00000000 | 0.53057677 | -2.5118e-02 |
| 3 | 0.53057677 | 1.00000000 | 0.53766789 | -5.8011e-03 |
| 4 | 0.53766789 | 1.00000000 | 0.53929982 | -1.3311e-03 |
| 5 | 0.53929982 | 1.00000000 | 0.53967359 | -3.0499e-04 |
| 6 | 0.53967399 | 1.00000000 | 0.53975970 | -6.9856e-05 |
| 7 | 0.53975970 | 1.00000000 | 0.53977933 | -1.5999e-05 |
| 8 | 0.53977933 | 1.00000000 | 0.53978383 | -3.6640e-06 |

### 43. fólia — geometriai ábra, $[0,1]$

*Ábra: $y=f(x)=e^x-2\cos x$ piros, a $[0,1]$ végpontokat összekötő kék húr, és a $[0.4,0.6]$ ablakon a következő, szűkebb húr (zöld); az $x$-tengely metszete adja $p_k$-t.*

### 44. fólia — Példa, $[0,4]$

**Példa.** Alkalmazzuk a húrmódszert az $e^x-2\cos x=0$ egyenletre, a $[0,4]$ intervallumból kiindulva!

**Húrmódszer, $f(x)=e^x-2\cos x$, $[0,4]$, $TOL=10^{-5}$**

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 4.00000000 | 0.07029205 | -9.2224e-01 |
| 1 | 0.07029205 | 4.00000000 | 0.13406612 | -8.3858e-01 |
| 2 | 0.13406612 | 4.00000000 | 0.19119837 | -7.5285e-01 |
| 3 | 0.19119837 | 4.00000000 | 0.24180834 | -6.6826e-01 |
| 4 | 0.24180834 | 4.00000000 | 0.28620106 | -5.8729e-01 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 47 | 0.53966897 | 4.00000000 | 0.53968870 | -2.6464e-04 |
| 48 | 0.53968870 | 4.00000000 | 0.53970508 | -2.1970e-04 |
| 49 | 0.53970508 | 4.00000000 | 0.53971868 | -1.8240e-04 |
| 50 | 0.53971868 | 4.00000000 | 0.53972996 | -1.5143e-04 |
| 51 | 0.53972996 | 4.00000000 | 0.53973934 | -1.2572e-04 |

Az intervallumfelezés lépésszáma: $\log_2 4/10^{-5}-1\approx 17.61$.

### 45. fólia — geometriai ábra, $[0,4]$

*Ábra: $y=f(x)=e^x-2\cos x$ piros görbéje a $[0,4]$ intervallumon (gyorsan emelkedik 4-ig), a kék húr $(0,-1)$ és $(4,\approx 54)$ között, az $x$-tengely metszete csak nagyon közel van $0$-hoz — ezért lassú az iteráció.*

---
