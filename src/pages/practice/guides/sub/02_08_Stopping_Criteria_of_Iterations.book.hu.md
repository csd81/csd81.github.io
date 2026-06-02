## 2.8. Iterációs módszerek megállási feltételei

Az eddigi módszerek mindegyike az $f$ függvény egy gyökének meghatározására egy $p_k$ sorozatot generált, amely (adott feltételek teljesülése esetén) konvergált az $f$ függvény egy $p$ gyökéhez. A gyököt, azaz a sorozat határértékének közelítésére a sorozat egy $p_k$ tagját használjuk, ahol $k$ „elég nagy". Azt, hogy „meddig kell elmenni" a sorozat generálásában, többféle stratégiát használva dönthetjük el. Itt a három leggyakrabban használtakkal foglalkozunk. Előre megadunk $\varepsilon_1>0$, $\varepsilon_2>0$ és $\varepsilon_3>0$ tolerancia értékeket. A sorozat $k$-adik tagját, $p_k$-t tekintjük $p$ közelítésnek, ha

1. $|p_k-p_{k-1}|<\varepsilon_1$,  2. $\frac{|p_k-p_{k-1}|}{|p_k|}<\varepsilon_2$, vagy  3. $|f(p_k)|<\varepsilon_3$.

Az 1. feltétel a közelítés hibájának, $|p_k-p|$-nek numerikus megfelelője. Azt mondja, hogy ha a sorozat új tagja az előzőtől egy adott tolerancia értéknél kevesebbel tér el, akkor úgy gondoljuk, hogy azért változik csak kicsit az új érték a régihez képest, mert mindkettő már közel van a határértékhez, és ezért megszakítjuk a sorozat generálását.

A 2. feltétellel a közelítés relatív hibáját, $|p_k-p|/|p|$-et közelítjük numerikusan. Mint az előző feltételnél, itt is azt vizsgáljuk, hogy mennyit változik a sorozat következő tagja az előzőhöz képest, de a különbség képzésénél figyelembe vesszük a tagok nagyságrendjét.

A 3. feltétel szerint ha a függvényérték kicsi, akkor feltesszük, hogy közel vagyunk a gyökhöz, és megállunk.

Ezenkívül minden iterációs algoritmusba érdemes beépíteni az iteráció lépésszámának követését, és egy adott lépésszámot túllépve megállítani a program futását. Ezzel megakadályozhatjuk a program végtelen ciklusba kerülését, és kiszűrjük a túl lassú konvergenciát.

Az első két feltétel feltétel minden iterációs módszerre alkalmazható, a harmadik természetesen az ebben a fejezetben vizsgált feladatra, az $f$ függvény gyökének meghatározására vonatkozik. Más feladatoknál többnyire meg lehet adni hasonló feltétel arra vonatkozólag, hogy egy adott közelítő megoldás „mennyire" elégíti ki az adott problémát (lásd pl. a 4.4. szakaszt később).

Mindegyik feltételhez lehet példát megadni, ahol a feltétel teljesülése nem vonja maga után azt, hogy a gyöknek jó közelítését kapjuk. Ezért a gyakorlatban, hogy az egyes feltételekkel kapcsolatos lehetséges problémákat kiszűrjük, ezeknek a megállási kritériumoknak kombinációit szokták használni.

**Feladatok**

1. Tegyük fel, hogy egy iterációs módszer a $p_k=\sum_{i=1}^k \tfrac{1}{i}$ sorozatot generálja, és tegyük fel hogy ebben a szakaszban leírt 1. feltételt használjuk csak megállási feltételként. Mit tapasztalunk? Konvergens-e a sorozat? Mit tapasztalunk ha csak a 2. megállási feltételt használjuk?
2. Legyen $f(x)=x^8$, és tegyük fel, hogy egy módszer a $p_k=1/k$ sorozatot generálja $f$ gyökének közelítésére. Tegyük fel, hogy csak az 1. feltételt használjuk megállási feltételként az $\varepsilon_1=10^{-8}$ tolerancia értékkel. Mi lesz az algoritmussal megadott közelítő gyök értéke? Mi lesz a gyök, ha csak a 2. és ha csak a 3. feltételt használjuk az $\varepsilon_2=10^{-8}$ ill. $\varepsilon_3=10^{-8}$ tolerancia értékekkel?

---
