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
  /** Optional route to the related interactive dimat chapter, e.g. 'ch14' */
  dimatId?: string;
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
  { n: 1,  title: 'Kombinatorika elemei (P, V, C)',          dimatId: 'ch2' },
  { n: 2,  title: 'Binomiális és polinomiális tételek',      dimatId: 'ch3' },
  { n: 3,  title: 'Stirling-formula',                        dimatId: 'ch2' },
  { n: 4,  title: 'Binomiális együtthatók tulajdonságai',    dimatId: 'ch3' },
  { n: 5,  title: 'Logikai szitaformula',                    dimatId: 'ch4' },
  { n: 6,  title: String.raw`Zárt formula \(\sum i^k\)-ra`,  dimatId: 'ch5' },
  { n: 7,  title: 'Rekurzív sorozatok',                      dimatId: 'ch5' },
  { n: 8,  title: 'Generátorfüggvény módszer',               dimatId: 'ch6' },
  { n: 9,  title: 'Extremális halmazrendszerek',             dimatId: 'ch7' },
  { n: 10, title: 'Partíciós problémák',                     dimatId: 'ch8' },
];

// ── graph — topics 11–29 ─────────────────────────────────────────────────
const GRAPH: ExamTopic[] = [
  { n: 11, title: 'Gráfelméleti alapfogalmak',              dimatId: 'ch9' },
  { n: 12, title: 'Speciális gráfok',                       dimatId: 'ch9' },
  { n: 13, title: 'Elemi összefüggések gráfokban',          dimatId: 'ch9' },
  { n: 14, title: 'Utak és Euler-körök',                    dimatId: 'ch10' },
  { n: 15, title: 'Euler tétele',                           dimatId: 'ch10' },
  { n: 16, title: 'Hamilton-körök',                         dimatId: 'ch11' },
  { n: 17, title: 'Modern eredmények gráfelméletben',       dimatId: 'ch11' },
  { n: 18, title: 'Utazó ügynök probléma',                  dimatId: 'ch13' },
  { n: 19, title: 'NP-teljesség',                           dimatId: 'ch11' },
  { n: 20, title: 'Fák',                                    dimatId: 'ch14' },
  { n: 21, title: 'Élszám és csúcsszám kapcsolata fákban',  dimatId: 'ch14' },
  { n: 22, title: 'Adjacencia-mátrix',                      dimatId: 'ch12' },
  { n: 23, title: 'Incidencia-mátrix',                      dimatId: 'ch12' },
  { n: 24, title: 'Síkbarajzolhatóság',                     dimatId: 'ch17' },
  { n: 25, title: 'Kuratowsky tétele',                      dimatId: 'ch17' },
  { n: 26, title: 'Euler poliédertétele',                   dimatId: 'ch17' },
  { n: 27, title: 'Gráfizomorfizmus',                       dimatId: 'ch16' },
  { n: 28, title: 'Páros gráfok',                           dimatId: 'ch19' },
  { n: 29, title: 'Kőnig–Hall–Ore tételek',                 dimatId: 'ch19' },
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
