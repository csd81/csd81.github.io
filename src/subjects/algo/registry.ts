/** Algoritmikus számelmélet (Szalkai István & Dósa György, Pannon Egyetem · Typotex 2011) */
export interface AlgoChapter {
  num: number;
  id: string;
  title: string;
  glossary: string;
  tags: string[];
  sections: { id: string; title: string }[];
  related_tetel: { n: number; title: string }[];
  ready: boolean;
}

export const ALGO_CHAPTERS: AlgoChapter[] = [
  {
    num: 1, id: 'ch1', title: 'Bevezetés',
    glossary: 'A számelmélet algoritmikus szemléletmódjának bevezetése. Faktorizációs próbák 6–129 jegyű számokra — miért nem elég a kézi vagy iskolás módszer modern alkalmazásban.',
    tags: ['Faktorizáció', 'Prim1d.exe', 'Jelölések'],
    sections: [{ id: '1.1', title: 'Jelölések' }],
    related_tetel: [{ n: 30, title: 'Prímfelbontás' }],
    ready: true,
  },
  {
    num: 2, id: 'ch2', title: 'Algoritmusok sebessége',
    glossary: 'Aszimptotika: O, Θ, Ω, o. Determinisztikus vs. valószínűségi algoritmusok. Természetes számok mérete és az alapműveletek bitszintű komplexitása.',
    tags: ['Big-O', 'Bitkomplexitás', 'CLR'],
    sections: [
      { id: '2.1', title: 'Alapfogalmak' },
      { id: '2.2', title: 'Alapműveletek sebessége (számok mérete, műveletek)' },
    ],
    related_tetel: [],
    ready: true,
  },
  {
    num: 3, id: 'ch3', title: 'A számelmélet alapjai',
    glossary: 'Oszthatóság, prímszámok, lnko és lkkt. A számelmélet öt kulcs-problémája, prímeloszlás π(n)~n/log n. Pitagorasz, FLT, Karácsonyi tétel, Bolyai János munkássága, számtani sorozatok és ikerprímek.',
    tags: ['Oszthatóság', 'π(n)', 'FLT', 'Bolyai János'],
    sections: [
      { id: '3.1', title: 'Oszthatóság és prímszámok' },
      { id: '3.2', title: 'A számelmélet algoritmikus problémái' },
      { id: '3.3', title: 'lnko és lkkt' },
      { id: '3.4', title: 'A prímszámok eloszlása' },
      { id: '3.5', title: 'Nevezetes problémák (Pitagorasz/FLT, Karácsonyi tétel & Bolyai, számtani sorozatok, ikerprímek)' },
    ],
    related_tetel: [{ n: 30, title: 'Prímfelbontás' }, { n: 31, title: 'Prímtesztelés' }],
    ready: true,
  },
  {
    num: 4, id: 'ch4', title: 'Maradékos osztás és Euklidesz algoritmusa',
    glossary: 'A maradékos osztás létezése és egyértelműsége. Az Euklidesz-algoritmus O(log min(a,b)) lépésben (Lamé-tétel). Kibővített Euklidesz Bézout-együtthatókkal.',
    tags: ['Euklidesz', 'Bézout', 'Lamé'],
    sections: [
      { id: '4.1', title: 'Maradékos osztás' },
      { id: '4.2', title: 'Euklidesz algoritmusa' },
    ],
    related_tetel: [{ n: 33, title: 'Euklideszi algoritmus' }],
    ready: true,
  },
  {
    num: 5, id: 'ch5', title: 'Lineáris Diophantoszi egyenletek',
    glossary: 'ax+by=c egészegyütthatós egyenlet megoldhatósága: gcd(a,b)∣c. Paraméteres általános megoldás. n-változós kiterjesztés a₁x₁+⋯+aₙxₙ=c rekurzív redukcióval.',
    tags: ['Diophantosz', 'Bézout-feltétel', 'Paraméteres mo.'],
    sections: [
      { id: '5.1', title: 'ax + by = c egyenletek' },
      { id: '5.2', title: 'a₁x₁ + ⋯ + aₙxₙ = c egyenletek' },
    ],
    related_tetel: [{ n: 34, title: 'Lineáris diofantikus egyenletek' }],
    ready: true,
  },
  {
    num: 6, id: 'ch6', title: 'Kongruenciák és maradékosztályok',
    glossary: 'Z_m maradékosztály-gyűrű. Elsőfokú kongruencia, Euler-φ, Lagrange/Euler/Fermat-tétel, gyorshatványozás O(log k). Primitív gyökök, diszkrét logaritmus, magasabbfokú kongruenciák.',
    tags: ['Z_m', 'Euler-φ', 'Fermat', 'Gyorshatv.', 'Diszkrét log'],
    sections: [
      { id: '6.1', title: 'Kongruenciák' },
      { id: '6.2', title: 'Maradékosztályok' },
      { id: '6.3', title: 'Elsőfokú kongruencia-egyenletek' },
      { id: '6.4', title: 'Euler-féle φ(n) függvény' },
      { id: '6.5', title: 'Maradékosztály-tételek (Lagrange, Euler, Fermat)' },
      { id: '6.6', title: 'Nagy kitevőjű hatványozás' },
      { id: '6.7', title: 'Primitív gyökök és diszkrét logaritmus' },
      { id: '6.8', title: 'Magasabbfokú kongruenciák' },
    ],
    related_tetel: [
      { n: 36, title: 'Euler-féle φ-függvény' },
      { n: 37, title: 'Lagrange, Euler, Fermat tételei' },
      { n: 38, title: 'Nagy kitevőjű hatványozás mod m' },
    ],
    ready: true,
  },
  {
    num: 7, id: 'ch7', title: 'Kínai Maradéktétel és nagy számok szorzása',
    glossary: 'CRT: páronként relatív prím modulusok esetén egyértelmű megoldás mod M=∏mᵢ. Általános modulusokra kiterjesztés. Algoritmikus alkalmazás: nagy számok párhuzamos szorzása kis modulusokon.',
    tags: ['CRT', 'Párhuzamos szorzás', 'Karatsuba'],
    sections: [
      { id: '7.1', title: 'Kínai Maradéktétel' },
      { id: '7.2', title: 'Általános modulusok' },
      { id: '7.3', title: 'Nagy számok szorzása' },
    ],
    related_tetel: [{ n: 35, title: 'Kínai maradéktétel' }],
    ready: true,
  },
  {
    num: 8, id: 'ch8', title: 'Prímtesztelés és számok felbontása',
    glossary: 'Eratoszthenész szitája. Fermat-féle prímteszt és az álprímek (Carmichael-számok). Miller–Rabin valószínűségi teszt. Pollard ρ-faktorizáció. AKS deterministic prímteszt (2002).',
    tags: ['Eratoszthenész', 'Miller–Rabin', 'Pollard ρ', 'AKS', 'Carmichael'],
    sections: [
      { id: '8.1', title: 'Eratoszthenész algoritmusa' },
      { id: '8.2', title: 'Fermat algoritmusa' },
      { id: '8.3', title: 'Álprímek' },
      { id: '8.4', title: 'Miller–Rabin teszt' },
      { id: '8.5', title: 'Pollard ρ-módszere' },
      { id: '8.6', title: 'Az AKS algoritmus' },
    ],
    related_tetel: [{ n: 31, title: 'Prímtesztelés' }, { n: 30, title: 'Prímfelbontás' }],
    ready: true,
  },
  {
    num: 9, id: 'ch9', title: 'Prímkeresés',
    glossary: 'Speciális prímcsaládok. Mersenne-számok Mₚ=2^p−1 (Lucas-Lehmer teszt, GIMPS rekordok). Fermat-prímek Fₙ=2^(2ⁿ)+1 és a Gauss-féle szabályos sokszögszerkesztés.',
    tags: ['Mersenne', 'Lucas-Lehmer', 'Fermat-prím', 'Gauss-sokszög'],
    sections: [
      { id: '9.1', title: 'Mersenne-számok' },
      { id: '9.2', title: 'Fermat-prímek' },
    ],
    related_tetel: [{ n: 32, title: 'Prímgenerálás' }],
    ready: true,
  },
  {
    num: 10, id: 'ch10', title: 'Titkosírás nyilvános kulccsal',
    glossary: 'RSA (Rivest–Shamir–Adleman 1977): kulcsgenerálás, titkosítás c=mᵉ mod N, dekódolás m=c^d mod N. Konkrét lépéses példák. Merkle–Hellman hátizsák-titkosítás (történelmi, feltört).',
    tags: ['RSA', 'Hátizsák', 'Aláírás'],
    sections: [
      { id: '10.1', title: 'Az RSA-algoritmus (példák és megoldások)' },
      { id: '10.2', title: 'A hátizsák algoritmus' },
    ],
    related_tetel: [{ n: 39, title: 'RSA algoritmus' }],
    ready: true,
  },
  {
    num: 11, id: 'ch11', title: 'Bizonyítás nulla információval',
    glossary: 'Zero-Knowledge Proof: egy állítás bizonyítása anélkül, hogy maga a titok kiszivárogna. Completeness, soundness, zero-knowledge. Goldwasser–Micali–Rackoff 1985; modern zk-SNARKs alkalmazás.',
    tags: ['ZKP', 'Soundness', 'zk-SNARK'],
    sections: [],
    related_tetel: [],
    ready: true,
  },
  {
    num: 12, id: 'ch12', title: 'Számítógépes megvalósítások',
    glossary: 'A könyvhöz mellékelt öt segédprogram: Prim1d.exe (faktorizáció), Eukl1d.exe (Euklidesz), Kongr1d.exe (kongruenciák), Maradek1d.exe (CRT), RSA1d.exe (titkosírás). Lépésenkénti oktatási output.',
    tags: ['Prim1d.exe', 'RSA1d.exe', 'Eukl1d.exe'],
    sections: [],
    related_tetel: [],
    ready: true,
  },
  {
    num: 13, id: 'ch13', title: 'Függelék — Boole-algebrák, Euklideszi gyűrűk, táblázatok',
    glossary: 'Algebrai általánosítások. Boole-algebrák, polinom- és Euklideszi gyűrűk: hová vihető át a maradékos osztás és lnko-számolás. Hivatkozási táblázatok: kis prímek, Mersenne- és Fermat-rekordok.',
    tags: ['Boole-algebra', 'Polinomgyűrű', 'Euklideszi gyűrű'],
    sections: [
      { id: '13.1', title: 'Boole-algebrák' },
      { id: '13.2', title: 'Polinomok, Euklideszi gyűrűk' },
      { id: '13.3', title: 'Táblázatok' },
    ],
    related_tetel: [],
    ready: true,
  },
];

export const algoChapterById = (id: string) => ALGO_CHAPTERS.find((c) => c.id === id);
