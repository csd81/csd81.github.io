## 2.3. Intervallumfelezés módszere

Ebben és a következő néhány szakaszban az $f(x)=0$ nemlineáris egyenlet numerikus megoldását keressük. Erre a legegyszerűbb algoritmus az ún. *intervallumfelezés módszere*. Ezt ismertetjük ebben a szakaszban.

Tegyük fel, hogy $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, amely ellentétes előjelű az intervallum végpontjaiban, azaz $f(a)f(b)<0$. Ekkor tudjuk, hogy $f$-nek legalább egy gyöke van az $[a,b]$ intervallumban. Definiáljuk intervallumoknak egy sorozatát: Legyen $[a_0,b_0]=[a,b]$, és legyen $p_0$ az intervallum felezőpontja, azaz $p_0=(a_0+b_0)/2$. Ekkor vagy $f(p_0)=0$, vagy az $[a_0,p_0]$ és $[p_0,b_0]$ intervallumok közül az egyiknek a végpontjaiban ellentétes előjelű az $f$ függvény. Ha az $[a_0,p_0]$ intervallumon vált előjelet, akkor $[a_1,b_1]=[a_0,p_0]$, egyébként $[a_1,b_1]=[p_0,b_0]$ lesz a következő intervallum definíciója. Ezt az eljárást folytatva vagy véges sok lépés után az egyik $p_k$ felezőpont gyöke lesz az $f$ függvénynek, vagy pedig zárt intervallumoknak egy egymásba skatulyázott sorozatát kapjuk, amelyek mindegyike tartalmazza az $f$ függvény egy gyökét. Mivel a $k$-adik intervallum hossza $(b-a)/2^k$, ezért az intervallumoknak pontosan egy $p$ közös pontjuk van, ami az $f$ függvény gyöke. Az intervallumok bármely pontja, így speciálisan pl. a felezőpontok sorozata, $p_k$, tart $p$-hez. Tegyük fel a meghatározottság kedvéért, hogy $f(a)<0$ és $f(b)>0$ (a másik eset hasonlóan kezelhető). Ekkor minden $k$-ra $f(a_k)<0$ és $f(b_k)>0$ az iteráció során. Mivel $a_k\to p$ és $b_k\to p$, ezért az $f$ folytonossága miatt $f(p)\leq 0$ és $f(p)\geq 0$ kell legyen, azaz $f(p)=0$. Mivel $a_k\leq p\leq b_k$ minden $k$-ra, ezért $|p_k-p|\leq (b_k-a_k)/2=(b-a)/2^{k+1}$. Ezzel beláttuk a következő tételt:

**2.16. tétel.** *Legyen $f\in C[a,b]$ és $f(a)f(b)<0$. Ekkor az intervallumfelezés módszerével kapott $p_k$ sorozat konvergál az $f$ függvény egy $p$ gyökéhez, és*

$$|p_k-p|\leq \frac{b-a}{2^{k+1}}. \tag{2.4}$$

A (2.4) becslésből következik, hogy ha egy előre megadott $\varepsilon>0$ hibakorlátot (tolerancia értéket) szeretnénk elérni a közelítéssel, akkor olyan $p_k$ tagot kell használni $p$ közelítésére, amelynek indexe

$$k\geq \log_2 \frac{b-a}{\varepsilon}-1. \tag{2.5}$$

**2.17. példa.** Tekintsük az $f(x)=e^x-2\cos x$ függvényt. $f(0)=-1$ és $f(1)>0$, tehát $f$-nek van gyöke a $[0,1]$ intervallumon. (Könnyű belátni, hogy $f$ szigorúan monoton növő, így pontosan egy gyöke van.) A 2.2. táblázat tartalmazza az intervallumfelezéses módszer numerikus eredményét. Az $\varepsilon=10^{-5}$ tolerancia eléréséhez a (2.5) formula szerint $k\geq \log_2 10^5-1\approx 15.61$ lépés elegendő. $\square$

**2.2. táblázat.** Intervallumfelezés módszere, $f(x)=e^x-2\cos x$, $[0,1]$, $\varepsilon=10^{-5}$

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

**Feladatok**

1. Lássa be, hogy az
   - (a) $x^3-6x-1=0$, $[a,b]=[-1,1]$,  (b) $x=e^{-2x}$, $[a,b]=[-1,2]$,
   - (c) $\tan x=x+1$, $[a,b]=[-1,1.5]$,  (d) $e^{-\sin x}=x^2-1$, $[a,b]=[0,2]$

   egyenleteknek létezik gyöke az $[a,b]$ intervallumon! Az intervallumfelezés módszerével, az $\varepsilon=10^{-5}$ tolerancia értéket használva adja meg a gyök közelítését!
2. Alkalmazza az intervallumfelezés módszerét az $f(x)=\tfrac{1}{x}$ függvényre a $[-0.5,3]$ kezdeti intervallumot használva! Mit tapasztal?

---
