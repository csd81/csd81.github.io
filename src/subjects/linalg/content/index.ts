/** Linear-algebra reference documents (Markdown, KaTeX). One .md per lecture/jegyzet. */

const RAW = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const BOOK = import.meta.glob('./book/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function byId(id: string): string {
  return RAW[`./${id}.md`] ?? '';
}

/** Read a markdown file from the ./book/ folder by filename (e.g. 'lin-algebra-part1-hu.md'). */
function bookFile(name: string): string {
  return BOOK[`./book/${name}`] ?? '';
}

export type GroupKey = 'eloismeretek' | 'linalg' | 'alkalmazasok' | 'jegyzet' | 'feladatok';

export interface Doc {
  id: string;
  title: string;
  blurb: string;
  group: GroupKey;
  /** Short glyph shown on the card. */
  icon: string;
  /** Placeholder: card is shown but not yet linked (content in progress). */
  comingSoon?: boolean;
  /** Source markdown filename in ./book/ (Hungarian). When set, content loads from there instead of ./<id>.md. */
  srcHu?: string;
  /** Optional English translation filename in ./book/ (shown when the site language is English). */
  srcEn?: string;
}

export const GROUP_LABEL: Record<GroupKey, { hu: string; en: string }> = {
  eloismeretek: { hu: 'Előismeretek', en: 'Prerequisites' },
  linalg: { hu: 'Lineáris algebra', en: 'Linear algebra' },
  alkalmazasok: { hu: 'Alkalmazások', en: 'Applications' },
  feladatok: { hu: 'Feladatok', en: 'Exercises' },
  jegyzet: { hu: 'Jegyzetek', en: 'Lecture notes' },
};

export const GROUP_ORDER: GroupKey[] = ['linalg', 'eloismeretek', 'alkalmazasok', 'feladatok', 'jegyzet'];

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

  // --- Alkalmazások ---
  { id: 'tamop-alkalmazasok', group: 'alkalmazasok', icon: '∂', title: 'A lineáris algebra alkalmazásai',
    blurb: 'Wettl Ferenc · BME — differenciálhatóság és Jacobi-mátrix, differencia-/differenciálegyenletek, kombinatorika, Markov-láncok, lineáris programozás és dualitás, kódelmélet és kriptográfia, SVD-alkalmazások (teljes könyv, 4 fejezet).' },

  // --- Feladatok ---
  { id: 'peldatar', group: 'feladatok', icon: '✎', title: 'Lineáris algebra példatár',
    blurb: 'Leitold Adrien · Pannon Egyetem — 67 részletesen megoldott minta feladat 8 témakörben, plusz a gyakorló feladatok megoldásai.' },

  // --- Jegyzetek ---
  { id: 'linalg-bevezeto', group: 'jegyzet', icon: '📖', title: 'Lineáris algebra alapfogalmak',
    blurb: 'Dr. Szalkai István · Pannon Egyetem — bázis, koordináták és az elemi bázistranszformáció részletes magyarázattal.' },
  { id: 'lin-algebra-konyv-1', group: 'jegyzet', icon: '📘', title: 'Lineáris algebra (tankönyv) — I. rész',
    blurb: 'Wettl Ferenc · BME — I. rész: A lineáris algebra forrásai (vektorok, lineáris egyenletrendszerek, megoldhatóság és a megoldások tere). Magyar és angol nyelven.',
    srcHu: 'lin-algebra-part1-hu.md', srcEn: 'lin-algebra-part1-en.md' },
  { id: 'lin-algebra-konyv-2', group: 'jegyzet', icon: '📗', title: 'Lineáris algebra (tankönyv) — II. rész',
    blurb: 'Wettl Ferenc · BME — II. rész: Mátrixok algebrája és geometriája (mátrixműveletek, determináns, mátrixleképezések és geometriájuk).',
    srcHu: 'lin-algebra-part2-hu.md' },
  { id: 'lin-algebra-konyv3', group: 'jegyzet', icon: '📕', title: 'Lineáris algebra (tankönyv) — III. rész',
    blurb: 'Wettl Ferenc · BME — III. rész: Mátrixok sajátságai (sajátérték és diagonalizálás, szinguláris érték/SVD, Jordan-féle normálalak, nemnegatív mátrixok).',
    srcHu: 'lin-algebra-part3-hu.md' },
];

const BY_ID = new Map(DOCS.map((d) => [d.id, d]));

export function docById(id: string): (Doc & { markdown: string; markdownEn?: string }) | undefined {
  const meta = BY_ID.get(id);
  if (!meta) return undefined;
  if (meta.srcHu) {
    return { ...meta, markdown: bookFile(meta.srcHu), markdownEn: meta.srcEn ? bookFile(meta.srcEn) : undefined };
  }
  return { ...meta, markdown: byId(id) };
}
