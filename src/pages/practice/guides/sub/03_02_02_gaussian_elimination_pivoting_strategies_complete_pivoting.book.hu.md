### Teljes főelemkiválasztás

A kerekítési hibák további kiküszöbölésére használhatjuk a részleges főelemkiválasztás következő módosítását, az ún. *teljes főelemkiválasztás* módszerét: a Gauss-elimináció $k$-adik lépése előtt keressük meg az első olyan $l$ sor- és $m$ oszlopindexet, amelyre

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n,\ j = k, \ldots, n\}.$$

(A maximális elem az $l$-edik sorban és $m$-edik oszlopban van.) Cseréljük fel a $k$-adik és $l$-edik sort és a $k$-adik és $m$-edik oszlopot. Jegyezzük meg, hogy az oszlopcserével melyik oszlop melyik ismeretlen együtthatóit tartalmazza, és folytassuk az eliminációt.

Ennek a módszernek a hátránya a részleges főelemkiválasztáshoz képest az, hogy sokkal több összehasonlításra van szükség, ami lassítja a módszert.

**3.29. példa.** Tekintsük újra a 3.22. és 3.27. példa egyenletrendszerét, és oldjuk meg a feladatot most Gauss-elimimációval teljes főelemkiválasztást használva:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ -2 & -2 & 2 & 1 & -11 \\ -4 & 2 & 3 & -1 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & -5/2 & 1 & 2 & -15 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & 1/2 & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & -5/2 & 1 & 2 & -15 \\ 0 & 1/2 & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & -1 & -5/2 & 2 & -15 \\ 0 & 5 & 1/2 & -1 & 24 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -23/10 & 11/5 & -56/5 \\ 0 & 0 & -1/2 & -2 & 5 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -23/10 & 11/5 & -56/5 \\ 0 & 0 & 0 & -57/23 & 171/23 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix}.$$

Azért, hogy az oszlopcseréket követni tudjuk, kibővítettük a mátrixot egy plusz sorral, ahol azt jelöljük, hogy az adott oszlop melyik változó együtthatóit tartalmazza. Az első eliminációs lépés előtt felcseréltük az első és második sort és az első és negyedik oszlopot, mivel 4 volt a maximális elem az együtthatók abszolút értékei közül. (Lehetett volna az első és második sor és az első és negyedik oszlop felcserélésével $-4$-et behozni a főelem pozíciójába; vagy pedig az első és negyedik sor és az első és harmadik oszlop cseréjével az 4-et behozni az első főelem pozíciójába.) A második eliminációs lépés előtt felcseréltük a második és harmadik sort és a második és harmadik oszlopot. A harmadik eliminációs lépés előtt pedig nem volt sor vagy oszlop csere. A megoldást most is a trianguláris egyenletrendszert megoldva kapjuk, de például a 4. egyenletből most az $x_1$ értékét kapjuk meg. A végeredmény: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$.

Természetesen a részleges ill. a teljes főelemkiválasztás módszerének előnye csak akkor jelentkezik, ha numerikusan számoljuk végig az egyenletrendszert. $\qquad\square$
