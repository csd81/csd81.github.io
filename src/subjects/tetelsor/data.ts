/**
 * Tetelsor — 39 exam topics across three paths.
 * Transcribed from northwind-control-center/content/tetelsor/*.md (YAML frontmatter)
 * and northwind-control-center/services/dimat_exam.py (PATH_META / PATH_OF_N).
 *
 * Titles kept verbatim from the source files.
 */

export interface ExamTopic {
  /** 1-based sequential number (1–39) */
  n: number;
  /** Hungarian title, verbatim from frontmatter */
  title: string;
}

export interface PathMeta {
  slug: 'combo' | 'graph' | 'szamelm';
  /** Hungarian label */
  title: string;
  /** English label */
  titleEn: string;
  /** CSS accent colour */
  colour: string;
  /** Range label shown under the path heading */
  rangeLabel: string;
  rangeLabelEn: string;
  topics: ExamTopic[];
}

// ── combo — topics 01–10 ──────────────────────────────────────────────────
const COMBO: ExamTopic[] = [
  { n: 1,  title: 'Kombinatorika elemei (P, V, C)' },
  { n: 2,  title: 'Binomiális és polinomiális tételek' },
  { n: 3,  title: 'Stirling-formula' },
  { n: 4,  title: 'Binomiális együtthatók tulajdonságai' },
  { n: 5,  title: 'Logikai szitaformula' },
  { n: 6,  title: String.raw`Zárt formula \(\sum i^k\)-ra` },
  { n: 7,  title: 'Rekurzív sorozatok' },
  { n: 8,  title: 'Generátorfüggvény módszer' },
  { n: 9,  title: 'Extremális halmazrendszerek' },
  { n: 10, title: 'Partíciós problémák' },
];

// ── graph — topics 11–29 ─────────────────────────────────────────────────
const GRAPH: ExamTopic[] = [
  { n: 11, title: 'Gráfelméleti alapfogalmak' },
  { n: 12, title: 'Speciális gráfok' },
  { n: 13, title: 'Elemi összefüggések gráfokban' },
  { n: 14, title: 'Utak és Euler-körök' },
  { n: 15, title: 'Euler tétele' },
  { n: 16, title: 'Hamilton-körök' },
  { n: 17, title: 'Modern eredmények gráfelméletben' },
  { n: 18, title: 'Utazó ügynök probléma' },
  { n: 19, title: 'NP-teljesség' },
  { n: 20, title: 'Fák' },
  { n: 21, title: 'Élszám és csúcsszám kapcsolata fákban' },
  { n: 22, title: 'Adjacencia-mátrix' },
  { n: 23, title: 'Incidencia-mátrix' },
  { n: 24, title: 'Síkbarajzolhatóság' },
  { n: 25, title: 'Kuratowsky tétele' },
  { n: 26, title: 'Euler poliédertétele' },
  { n: 27, title: 'Gráfizomorfizmus' },
  { n: 28, title: 'Páros gráfok' },
  { n: 29, title: 'Kőnig–Hall–Ore tételek' },
];

// ── szamelm — topics 30–39 ───────────────────────────────────────────────
const SZAMELM: ExamTopic[] = [
  { n: 30, title: 'Prímfelbontás' },
  { n: 31, title: 'Prímtesztelés' },
  { n: 32, title: 'Prímgenerálás' },
  { n: 33, title: 'Euklideszi algoritmus' },
  { n: 34, title: 'Lineáris diofantikus egyenletek' },
  { n: 35, title: 'Kínai maradéktétel' },
  { n: 36, title: String.raw`Euler-féle \(\varphi\)-függvény` },
  { n: 37, title: 'Lagrange, Euler és Fermat tételei' },
  { n: 38, title: String.raw`Nagy kitevőjű hatványozás mod \(m\)` },
  { n: 39, title: 'RSA algoritmus' },
];

// ── ILA Foundations (from tetelsor.html hardcoded list) ──────────────────
export interface FoundationTopic {
  n: number;
  title: string;
  /** Route target in the numerics site */
  ilaId: string;
}

export const FOUNDATIONS: FoundationTopic[] = [
  { n: 1, title: 'Halmazelmélet',                      ilaId: 'ch1' },
  { n: 2, title: 'Megfeleltetések és leképezések',     ilaId: 'ch2' },
  { n: 3, title: 'Permutációk',                        ilaId: 'ch3' },
  { n: 4, title: 'Relációk és gráfok',                 ilaId: 'ch4' },
  { n: 5, title: 'Halmazok számossága',                ilaId: 'ch5' },
  { n: 6, title: 'Matematikai logika',                 ilaId: 'ch6' },
  { n: 7, title: 'Komplex számok',                     ilaId: 'ch7' },
  { n: 8, title: 'Absztrakt algebra',                  ilaId: 'ch8' },
  { n: 9, title: 'Matematikai bizonyítások',           ilaId: 'ch9' },
];

// ── Path descriptors ─────────────────────────────────────────────────────
export const PATHS: PathMeta[] = [
  {
    slug: 'combo',
    title: 'Kombinatorika',
    titleEn: 'Combinatorics',
    colour: '#f59e0b',
    rangeLabel: 'Tételek 01–10',
    rangeLabelEn: 'Topics 01–10',
    topics: COMBO,
  },
  {
    slug: 'graph',
    title: 'Gráfelmélet',
    titleEn: 'Graph Theory',
    colour: '#38bdf8',
    rangeLabel: 'Tételek 11–29',
    rangeLabelEn: 'Topics 11–29',
    topics: GRAPH,
  },
  {
    slug: 'szamelm',
    title: 'Számelmélet',
    titleEn: 'Number Theory',
    colour: '#a78bfa',
    rangeLabel: 'Tételek 30–39',
    rangeLabelEn: 'Topics 30–39',
    topics: SZAMELM,
  },
];
