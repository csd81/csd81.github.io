## 2.4. Húrmódszer

Az intervallumfelezéses módszer előnye, hogy előre lehet tudni, hogy egy adott pontosságú közelítés eléréséhez hány lépésre van szükség. A módszer hátránya viszont az, hogy nem veszi figyelembe a függvény alakját az intervallumok képzésekor. Ezt a hiányosságot próbálja kiküszöbölni a *húrmódszer*.

A kiindulás ugyanaz, mint az előző módszernél. Feltesszük, hogy $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, amely ellentétes előjelű az intervallum végpontjaiban, azaz $f(a)f(b)<0$. Ennél a módszernél is $[a_k,b_k]$ intervallumoknak és azokat osztó $p_k$ pontoknak egy sorozatát képezzük. Kiindulásul legyen $[a_0,b_0]=[a,b]$. Az $k$-adik lépésben $p_k$-t az $f$ függvény $a_k$ és $b_k$ pontjaihoz tartozó húrja (azaz az $(a_k,f(a_k))$ és $(b_k,f(b_k))$ pontokat összekötő szakasz) és $x$-tengely metszeteként definiáljuk. Kis számolással kapjuk, hogy

$$p_k=a_k-f(a_k)\frac{a_k-b_k}{f(a_k)-f(b_k)}. \tag{2.6}$$

Ezután a következő lépés $[a_{k+1},b_{k+1}]$ intervallumának az $[a_k,p_k]$ és $[p_k,b_k]$ intervallumok közül azt választjuk, ahol a függvény szintén előjelet vált. A módszert a 2.18. algoritmussal írjuk le pontosabban.

**2.18. algoritmus. Húrmódszer**

```
INPUT:
    f      - függvény,
    [a,b]  - intervallum, ahol f(a)f(b) < 0,
    TOL    - tolerancia,
    MAXIT  - maximális iterációszám,
OUTPUT: p - közelítő gyök.

i ← 1               (lépésszám)
q ← a
while i < MAXIT do
    p ← a - f(a)(a-b)/(f(a) - f(b))
    if |p - q| < TOL do
        output(p)
        stop
    end do
    if f(p)f(b) < 0 do
        a ← p
    else if f(a)f(p) < 0 do
        b ← p
    else
        output(p)
        stop
    end do
    i ← i + 1
    q ← p
end do
output(Maximális iterációszám túllépve)
```

Az előbbi algoritmus programozásakor természetesen $p$ definiálása előtt célszerű megvizsgálni, hogy $f(a)$ egyenlő-e $f(b)$-vel, nehogy nullával való osztás miatt futási hibával álljon le a program. Ha $f(a)=f(b)$, akkor a program adjon egy figyelmeztető üzenetet, hogy nem alkalmazható a módszer, és szakítsuk meg szabályosan a program futását. Az ilyen jellegű ellenőrzéseket az egyszerűség kedvéért nem építettük be ebbe és a későbbi algoritmusokba sem, de természetesen ezekről gondoskodnia kell a programozónak az algoritmus számítógépen történő implementációjánál.

A húrmódszer konvergenciáját csak arra a speciális esetre bizonyítjuk be, amikor $f$ konvex vagy konkáv.

**2.19. tétel.** *Tegyük fel, hogy az $f\in C[a,b]$ függvény konvex vagy konkáv $[a,b]$-n és $f(a)f(b)<0$. Ekkor a húrmódszer konvergál az $f$ függvény (egyértelmű) $p$ gyökéhez.*

**Bizonyítás.** Tegyük fel, hogy $f$ konvex és $f(a)>0$, $f(b)<0$. A többi eset hasonlóan igazolható. Ekkor minden lépésben a bal oldali részintervallum fogja tartalmazni $f$ gyökét, azaz $a_{k+1}=a$ és $b_{k+1}=p_k$ minden $k$-ra. Mivel a $p_k$ sorozat monoton csökkenő és az $a$ szám egy alsó korlátja, ezért konvergál egy $p\geq a$ számhoz. $f(p_k)<0$ minden $k$-ra, ezért $f(p)\leq 0$. Mivel $f(a)>0$, ezért $p>a$. A (2.6) egyenletből kapjuk a $k\to\infty$ határértéket véve, hogy

$$p=a-f(a)\frac{a-p}{f(a)-f(p)},$$

amiből $f(p)=0$ következik. $\square$

**2.20. példa.** A húrmódszert, azaz a 2.18. algoritmust alkalmazva a 2.17. példa feladatára a 2.3. táblázatban felsorolt értékeket kapjuk. A 2.17. példához hasonlóan most is a $[0,1]$ kezdeti intervallumot és a $TOL=10^{-5}$ értéket használtuk. Látható, hogy ezen a feladaton a húrmódszer sokkal gyorsabban konvergál mint az intervallumfelezés módszere. $\square$

**2.3. táblázat.** Húrmódszer, $f(x)=e^x-2\cos x$, $[0,1]$, $TOL=10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.37912145 | -3.9698e-01 |
| 1 | 0.37912145 | 1.00000000 | 0.50026042 | -1.0576e-01 |
| 2 | 0.50026042 | 1.00000000 | 0.53057677 | -2.5118e-02 |
| 3 | 0.53057677 | 1.00000000 | 0.53766789 | -5.8011e-03 |
| 4 | 0.53766789 | 1.00000000 | 0.53929982 | -1.3311e-03 |
| 5 | 0.53929982 | 1.00000000 | 0.53967359 | -3.0499e-04 |
| 6 | 0.53967359 | 1.00000000 | 0.53975922 | -6.9856e-05 |
| 7 | 0.53975922 | 1.00000000 | 0.53977883 | -1.5999e-05 |
| 8 | 0.53977883 | 1.00000000 | 0.53978383 | -3.6640e-06 |

**2.21. példa.** Alkalmazzuk újra a húrmódszert a 2.17. példa feladatára, de most a $[0,4]$ intervallumból kiindulva! A 2.4. táblázatban látható az eredmény. (Csak az első és utolsó néhány tagot listáztuk.) Most az előző példához képest sokkal lassabb a konvergencia. (Ez még további lassul, ha az intervallum bal oldali végpontját tovább csökkentjük.) Ha viszont az intervallumfelezés módszerét indítjuk a $[0,4]$ kezdeti intervallummal, akkor a lépésszám csak kettővel nő, mivel $\log_2 4/10^{-5}-1\approx 17.61$. $\square$

**2.4. táblázat.** Húrmódszer, $f(x)=e^x-2\cos x$, $[0,4]$, $TOL=10^{-5}$

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

**Feladatok**

1. Alkalmazza a húrmódszert a 2.3. szakasz 1. feladatában felsorolt egyenletekre!
2. Legyen

$$f(x)=\begin{cases}\delta, & x\leq 0.5\\ 4(1+\delta)(x-x^2)-1, & x\geq 0.5\end{cases}$$

Alkalmazza az intervallumfelezés módszerét és a húrmódszert a $[0,1]$ intervallumon az $f$ függvény gyökének meghatározására, ha (a) $\delta=2$, (b) $\delta=0.5$, (c) $\delta=0.09$.

3. Dolgozza ki a 2.19. tétel bizonyítását a többi esetre is!

---
