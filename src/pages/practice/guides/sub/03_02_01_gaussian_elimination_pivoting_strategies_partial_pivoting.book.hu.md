### Részleges főelemkiválasztás

Az előző két példa mutatja, hogy néha kell, és sok esetben célszerű módosítani a 3.23. algoritmust. Erre az egyik legegyszerűbb stratégia a következő, *részleges főelemkiválasztásnak* (vagy egyszerűen csak *főelemkiválasztásnak*) nevezett módszer: a Gauss-elimináció $k$-adik lépése előtt keressük meg a $k$-adik oszlopban a főátlóban és az alatta álló elemek közül a legnagyobb abszolút értékűt, azaz legyen

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}.$$

(A maximális elem az $l$-edik sorban van.) Cseréljük fel a $k$-adik és $l$-edik sort, és folytassuk az eliminációt. Ezzel a 3.24. és 3.25. példákban vizsgált problémákat ki tudjuk küszöbölni: ha $a_{kk}^{(k-1)} = 0$, akkor a sorcsere után nemnulla elem kerül erre a pozícióra (feltéve ha van nemnulla elem $a_{kk}^{(k-1)}$ alatt), valamint folytatva a Gauss-eliminációt a sorcserékkel elérhető lehető legnagyobb abszolút értékű számmal fogunk osztani, ami a kerekítési hibákat csökkenti.

**3.26. tétel.** *A következő állítások ekvivalensek:*

1. *az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenlet egyértelműen megoldható Gauss-eliminációval részleges főelemkiválasztást használva,*

2. $\det(\mathbf{A}) \neq 0$,

3. *az $\mathbf{A}$ mátrix invertálható,*

4. *az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletnek létezik megoldása minden $\mathbf{b}$ vektorra.*

**Bizonyítás.** Lineáris algebrából ismert, hogy a 2., 3. és 4. állítások ekvivalensek (lásd a 3.2. tételt). Így most azt látjuk be, hogy 1. és 2. ekvivalens.

Tegyük fel először, hogy 1. teljesül. Legyen $\mathbf{A}^{(0)} = \mathbf{A}$, és jelöljük $\mathbf{A}^{(k)}$-val a Gauss-elimináció $k$-adik lépésekor kapott együtthatómátrixot. A determinánsok tulajdonságából következik, hogy $\det(\mathbf{A}^{(k)}) = \det(\mathbf{A}^{(k-1)})$, ha nem történt sorcsere a $k$-adik lépésben, ill. $\det(\mathbf{A}^{(k)}) = -\det(\mathbf{A}^{(k-1)})$, ha volt sorcsere. Mivel a feltétel szerint a Gauss-elimináció elvégezhető, ezért az $\mathbf{A}^{(n-1)}$ mátrixhoz tartozó trianguláris egyenletrendszer megoldható, azaz $\det(\mathbf{A}^{(n-1)}) \neq 0$. Ebből viszont következik, hogy $\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(n-1)}) \neq 0$.

Belátjuk, hogy ha a részleges főelemkiválasztással végzett Gauss-elimináció $k$-adik lépése nem hajtható végre, akkor $\det(\mathbf{A}) = 0$. A $k$-adik lépés akkor és csak akkor nem hajtható végre, ha $a_{ik}^{(k-1)} = 0$ minden $i = k, \ldots, n$-re, azaz:

$$\mathbf{A}^{(k-1)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{k,k+1} & \cdots & a_{1n} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k-1}^{(1)} & a_{2k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2n}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k-1,k-1}^{(k-2)} & a_{k-1,k}^{(k-2)} & a_{k-1,k+1}^{(k-2)} & \cdots & a_{k-1,n}^{(k-2)} \\
0 & 0 & \cdots & 0 & 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\
\vdots & \vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & 0 & 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)}
\end{pmatrix}.$$

Ezért

$$\det(\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\cdots a_{k-1,k-1}^{(k-2)}\det\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\ \vdots & \vdots & & \vdots \\ 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)} \end{pmatrix} = 0,$$

és így $\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(k-1)}) = 0$. $\qquad\square$

**3.27. példa.** Tekintsük újra a 3.22. példa egyenletrendszerét, és oldjuk meg a feladatot Gauss-eliminációval részleges főelemkiválasztást használva! A kibővített mátrixok sorozata a következő:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 2 & -1 & 1 & 5 & 2 \\ 2 & -1 & 0 & -3 & 8 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 5/7 & -9/2 & 83/14 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \\ 0 & 0 & 5/7 & -9/2 & 83/14 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \\ 0 & 0 & 0 & -143/24 & 143/24 \end{pmatrix}.$$

Látható, hogy az első és a harmadik eliminációs lépés előtt volt sorcsere. A trianguláris egyenletet megoldva kapjuk: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$. $\qquad\square$

Tegyük fel, hogy egy $\mathbf{A}$ együtthatómátrixon részleges főelemkiválasztással elvégzett Gauss-elimináció közben szükséges sorcseréket összegyűjtjük. Végezzük el ezeket egyszerre előre, az első eliminációs lépés előtt. Ezután a kapott mátrixon sorcsere nélkül végrehajtható lesz a Gauss-elimináció (és az eredménye ugyanaz, mint az $\mathbf{A}$ mátrixon részleges főelemkiválasztással elvégzett Gauss-elimináció). A 3.7. tétel szerint a sorcserék hatása egy megfelelő permutációs $\mathbf{P}$ mátrixszal (balról) történő szorzással ekvivalens. A 3.26. tételből tehát rögtön következik az alábbi eredmény:

**3.28. tétel.** *Ha $\det(\mathbf{A}) \neq 0$, akkor létezik olyan $\mathbf{P}$ permutációs mátrix, hogy a $\mathbf{P}\mathbf{A}\mathbf{x} = \mathbf{P}\mathbf{b}$ egyenletrendszer egyértelműen megoldható Gauss-eliminációval (sorcserék nélkül) minden $\mathbf{b}$ vektorra.*
