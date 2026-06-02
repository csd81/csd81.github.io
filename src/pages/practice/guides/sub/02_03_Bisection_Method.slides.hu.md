## 2.3. Intervallumfelezés módszere

### 26. fólia — szakaszcím

**2.3. Intervallumfelezés módszere**

### 27. fólia — Bolzano–Darboux

Az $\alpha$ és $\beta$ valós számok által generált nyílt intervallumot jelölje

$$\langle\alpha,\beta\rangle:=(\min\{\alpha,\beta\},\max\{\alpha,\beta\}).$$

**Tétel (Bolzano–Darboux-tétel).** *Legyen $f\in C[a,b]$, $f(a)\neq f(b)$, és legyen $d\in\langle f(a),f(b)\rangle$. Ekkor létezik olyan $c\in(a,b)$, hogy $f(c)=d$.*

*Ábra: piros görbe $y=f(x)$, $f(a)$ alatt, $f(b)$ fölött; a vízszintes $y=d$ vonal a görbét $c$-ben metszi.*

### 28. fólia — kiindulás

Az $f(x)=0$ nemlineáris egyenlet numerikus megoldását keressük az *intervallumfelezés módszerével*.

Tegyük fel, hogy $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, amely ellentétes előjelű az intervallum végpontjaiban, azaz

$$f(a)f(b)<0.$$

Ekkor a Bolzano–Darboux-tétel szerint $f$-nek létezik legalább egy gyöke az $[a,b]$ intervallumban.

*Ábra: piros görbe $a$-ban pozitív, $b$-ben negatív, közben átmetszi az $x$-tengelyt.*

### 29. fólia — intervallumok rekurziója

Definiáljunk intervallumoknak egy sorozatát: legyen

$$[a_0,b_0]=[a,b],$$

és legyen $p_0$ az intervallum felezőpontja, azaz

$$p_0=\frac{a_0+b_0}{2}.$$

Ekkor vagy $f(p_0)=0$, vagy az $[a_0,p_0]$ és $[p_0,b_0]$ intervallumok egyikén $f$ előjelet vált. Ha $f$ az $[a_0,p_0]$ intervallumon vált előjelet, akkor legyen

$$[a_1,b_1]=[a_0,p_0],$$

egyébként

$$[a_1,b_1]=[p_0,b_0].$$

Ezt az eljárást folytatva vagy véges sok lépés után az egyik $p_k$ felezőpont gyöke lesz az $f$ függvénynek, vagy pedig zárt intervallumoknak egy egymásba skatulyázott sorozatát kapjuk, amelyek mindegyike tartalmazza az $f$ függvény egy gyökét.

### 30a/b/c/d. fólia — az iteráció ábrái $n=0,1,2,3$

*Ábra ($n=0$): piros görbe, kék vonal az $[a_0,b_0]$ intervallum, $p_0$ középen.*  
*Ábra ($n=1$): az $[a_1,p_1,b_1]$ szűkebb intervallum az előző bal feléből, a görbe folytatása szürke.*  
*Ábra ($n=2$): további felezés $[a_2,p_2,b_2]$-re.*  
*Ábra ($n=3$): a $[a_3,p_3,b_3]$ intervallum már a gyök közvetlen környékére zsugorodott.*

### 31. fólia

A $k$-adik intervallum hossza

$$b_k-a_k=\frac{b-a}{2^k}\to 0, \quad \text{ha } k\to\infty.$$

Ezért létezik $p\in[a,b]$, amelyre

$$a_k\to p \quad \text{és} \quad b_k\to p, \quad \text{ha } k\to\infty,$$

és $p$ a közös pontja az intervallumoknak. Speciálisan,

$$p_k\to p.$$

### 32. fólia

Tegyük fel például, hogy $f(a)<0$ és $f(b)>0$. Ekkor minden $k$-ra

$$f(a_k)<0 \quad \text{és} \quad f(b_k)>0.$$

Mivel $a_k\to p$ és $b_k\to p$, az $f$ függvény folytonossága miatt

$$f(p)\leq 0 \quad \text{és} \quad f(p)\geq 0,$$

így $f(p)=0$. Mivel $a_k\leq p\leq b_k$ minden $k$-ra, és

$$\underbrace{a_k \quad p_k\,p \quad b_k}_{\text{az }[a_k,b_k]\text{ intervallum}}$$

ezért

$$|p_k-p|\leq\frac{b_k-a_k}{2}=\frac{b-a}{2^{k+1}}.$$

### 33. fólia — Tétel

**Tétel.** *Legyen $f\in C[a,b]$ és $f(a)f(b)<0$. Ekkor az intervallumfelezés módszerével kapott $p_k$ sorozat konvergál az $f$ függvény egy $p$ gyökéhez, és*

$$|p_k-p|\leq\frac{b-a}{2^{k+1}}. \tag{4}$$

A (4) becslésből következik, hogy ha egy előre megadott $\varepsilon>0$ hibakorlátot szeretnénk elérni a közelítéssel, akkor

$$|p_k-p|\leq\frac{b-a}{2^{k+1}}<\varepsilon$$

teljesül, ha

$$k\geq\log_2\frac{b-a}{\varepsilon}-1.$$

### 34. fólia — Példa

**Példa.** Tekintsük az

$$f(x)=e^x-2\cos x$$

függvényt. $f(0)=-1$ és $f(1)>0$, tehát $f$-nek van gyöke a $[0,1]$ intervallumon. (Könnyű belátni, hogy $f$ szigorúan monoton növő, így pontosan egy gyöke van.) A következő táblázat tartalmazza az intervallumfelezéses módszer numerikus eredményét. Az $\varepsilon=10^{-5}$ tolerancia eléréséhez az előző formula szerint $k\geq\log_2 10^5-1\approx 15.61$ lépés elegendő.

### 35. fólia — táblázat

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.50000000 | -1.0644e-01 |
| 1 | 0.50000000 | 1.00000000 | 0.75000000 | 6.5362e-01 |
| 2 | 0.50000000 | 0.75000000 | 0.62500000 | 2.4632e-01 |
| 3 | 0.50000000 | 0.62500000 | 0.56250000 | 6.3206e-02 |
| 4 | 0.50000000 | 0.56250000 | 0.53125000 | -2.3292e-02 |
| 5 | 0.53125000 | 0.56250000 | 0.54687500 | 1.9538e-02 |
| 6 | 0.53125000 | 0.54687500 | 0.53906250 | -1.9818e-03 |
| 7 | 0.53906250 | 0.54687500 | 0.54296875 | 8.7517e-03 |
| 8 | 0.53906250 | 0.54296875 | 0.54101563 | 3.3784e-03 |
| 9 | 0.53906250 | 0.54101563 | 0.54003906 | 6.9670e-04 |
| 10 | 0.53906250 | 0.54003906 | 0.53955078 | -6.4294e-04 |
| 11 | 0.53955078 | 0.54003906 | 0.53979492 | 2.6780e-05 |
| 12 | 0.53955078 | 0.53979492 | 0.53967285 | -3.0810e-04 |
| 13 | 0.53967285 | 0.53979492 | 0.53973389 | -1.4067e-04 |
| 14 | 0.53973389 | 0.53979492 | 0.53976440 | -5.6946e-05 |
| 15 | 0.53976440 | 0.53979492 | 0.53977966 | -1.5083e-05 |
| 16 | 0.53977966 | 0.53979492 | 0.53978729 | 5.8483e-06 |

---
