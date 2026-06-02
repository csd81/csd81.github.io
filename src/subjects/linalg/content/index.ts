/** Linear-algebra reference documents (Markdown, KaTeX). One .md per lecture/jegyzet. */

const RAW = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function byId(id: string): string {
  return RAW[`./${id}.md`] ?? '';
}

export type GroupKey = 'eloismeretek' | 'linalg' | 'jegyzet';

export interface Doc {
  id: string;
  title: string;
  blurb: string;
  group: GroupKey;
  /** Short glyph shown on the card. */
  icon: string;
}

export const GROUP_LABEL: Record<GroupKey, { hu: string; en: string }> = {
  eloismeretek: { hu: 'Előismeretek', en: 'Prerequisites' },
  linalg: { hu: 'Lineáris algebra', en: 'Linear algebra' },
  jegyzet: { hu: 'Jegyzetek', en: 'Lecture notes' },
};

export const GROUP_ORDER: GroupKey[] = ['linalg', 'eloismeretek', 'jegyzet'];

/** Curated order + titles. Slugs match the .md filenames in this folder. */
export const DOCS: Doc[] = [
  // --- Lineáris algebra (törzsanyag) ---
  { id: 'rn-vektorter', group: 'linalg', icon: 'ℝⁿ', title: 'Az ℝⁿ vektortér',
    blurb: 'Vektorműveletek, lineáris kombináció, függetlenség, bázis, dimenzió, rang, bázistranszformáció, alterek, direkt összeg.' },
  { id: 'absztrakt-vektorterek', group: 'linalg', icon: 'V', title: 'Absztrakt vektorterek',
    blurb: 'Általános vektortér-axiómák, altér, lineáris burok, bázis és dimenzió absztrakt terekben.' },
  { id: 'matrixok', group: 'linalg', icon: '⊞', title: 'Mátrixok',
    blurb: 'Mátrixműveletek, transzponált, rang, inverz, determináns és tulajdonságai, adjungált.' },
  { id: 'gauss', group: 'linalg', icon: '⇲', title: 'A Gauss-elimináció',
    blurb: 'Lépcsős alak, Gauss- és Gauss–Jordan-elimináció, megoldhatóság (jegyzet).' },
  { id: 'linearis-egyenletrendszerek', group: 'linalg', icon: '∥', title: 'Lineáris egyenletrendszerek',
    blurb: 'Leontieff-modell, megoldhatóság, homogén/inhomogén rendszerek, megoldóképlet, Cramer-szabály.' },
  { id: 'linearis-lekepezesek', group: 'linalg', icon: '↦', title: 'Lineáris leképezések',
    blurb: 'Mag- és képtér, mátrix-reprezentáció, rang, sajátérték/sajátvektor, karakterisztikus polinom, Cayley–Hamilton.' },
  { id: 'skalaris-szorzat', group: 'linalg', icon: '⟨·⟩', title: 'Skaláris szorzat az ℝⁿ-ben',
    blurb: 'Skaláris szorzat, norma, Cauchy–Schwarz, ortogonalitás, Fourier-együttható, ortogonális felbontás és projekció.' },
  { id: 'r3-geometria', group: 'linalg', icon: '△', title: 'Az ℝ³ tér geometriája',
    blurb: 'Vektorok a térben, skaláris/vektoriális/vegyes szorzat, egyenes és sík egyenletei.' },

  // --- Előismeretek ---
  { id: 'halmazok', group: 'eloismeretek', icon: '∈', title: 'Halmazok',
    blurb: 'Halmazműveletek, komplementer, De Morgan, számhalmazok, logika elemei.' },
  { id: 'egyenletek-egyenlotlensegek', group: 'eloismeretek', icon: '=', title: 'Egyenletek, egyenlőtlenségek',
    blurb: 'Alaphalmaz, ekvivalens átalakítások, másodfokú egyenlet, Viète-formulák, egyenlőtlenségek.' },
  { id: 'azonos-atalakitasok', group: 'eloismeretek', icon: '≡', title: 'Azonos átalakítások',
    blurb: 'Nevezetes azonosságok, szorzattá alakítás, törtek.' },
  { id: 'hatvany-gyok-log', group: 'eloismeretek', icon: 'aⁿ', title: 'Hatvány, gyök, logaritmus',
    blurb: 'Hatványozás és gyökvonás értelmezése és azonosságai, logaritmus és azonosságai.' },
  { id: 'trigonometria', group: 'eloismeretek', icon: '∢', title: 'Trigonometria',
    blurb: 'Szögfüggvények, ívmérték, forgásszögek, addíciós tételek.' },
  { id: 'elemi-fuggvenyek', group: 'eloismeretek', icon: 'ƒ', title: 'Elemi függvények, transzformációk',
    blurb: 'Függvényfogalom, elemi függvények és tulajdonságaik, függvénytranszformációk.' },
  { id: 'koordinata-geometria', group: 'eloismeretek', icon: 'xy', title: 'Koordináta-geometria',
    blurb: 'Vektorok a koordináta-rendszerben, egyenes és kör egyenletei a síkban.' },

  // --- Jegyzetek ---
  { id: 'linalg-bevezeto', group: 'jegyzet', icon: '📖', title: 'Lineáris algebra alapfogalmak',
    blurb: 'Dr. Szalkai István · Pannon Egyetem — bázis, koordináták és az elemi bázistranszformáció részletes magyarázattal.' },
];

const BY_ID = new Map(DOCS.map((d) => [d.id, d]));

export function docById(id: string): (Doc & { markdown: string }) | undefined {
  const meta = BY_ID.get(id);
  if (!meta) return undefined;
  return { ...meta, markdown: byId(id) };
}
