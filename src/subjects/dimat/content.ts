import type { Bi } from '../../shared/providers/LanguageProvider';

/** A markdown document available in one or both languages (base `.md` = default, `.hu.md` = HU). */
export interface Doc {
  en?: string;
  hu?: string;
}
export interface Exercise extends Doc {
  id: string;
}
export interface Topic {
  id: string; // folder, e.g. '01_Halmazok'
  no: string; // '01'
  title: Bi;
  readme?: Doc;
  solutions?: Doc;
  checklist?: Doc;
  quiz?: Doc;
  exercises: Exercise[];
}

/** English glosses for the 18 discrete-math topic folders (HU names come from the folder). */
const TITLES: Record<string, Bi> = {
  '01_Halmazok': { en: 'Sets & Boolean Algebra', hu: 'Halmazok' },
  '02_Elemi_leszammlalasok': { en: 'Elementary Counting', hu: 'Elemi leszámlálások' },
  '03_Binomialis_egyutthatok': { en: 'Binomial Coefficients', hu: 'Binomiális együtthatók' },
  '04_Logikai_szitaformula': { en: 'Inclusion–Exclusion', hu: 'Logikai szitaformula' },
  '05_Rekurziv_sorozatok': { en: 'Recurrences', hu: 'Rekurzív sorozatok' },
  '06_Generatorfuggvenyek': { en: 'Generating Functions', hu: 'Generátorfüggvények' },
  '07_Extremalis_halmazok': { en: 'Extremal Set Theory', hu: 'Extremális halmazok' },
  '08_Particios_problemak': { en: 'Partition Problems', hu: 'Partíciós problémák' },
  '09_Graf_Alapfogalmak': { en: 'Graph Basics', hu: 'Gráf alapfogalmak' },
  '10_Euler_utak': { en: 'Euler Trails', hu: 'Euler-utak' },
  '11_Hamilton_utak': { en: 'Hamiltonian Paths', hu: 'Hamilton-utak' },
  '12_Graf_matrixok': { en: 'Graph Matrices', hu: 'Gráfmátrixok' },
  '13_Utkereso_algoritmusok': { en: 'Path-finding Algorithms', hu: 'Útkereső algoritmusok' },
  '14_Fak': { en: 'Trees', hu: 'Fák' },
  '15_Feszitofak': { en: 'Spanning Trees', hu: 'Feszítőfák' },
  '16_Izomorfia': { en: 'Graph Isomorphism', hu: 'Izomorfia' },
  '17_Sikgrafok': { en: 'Planar Graphs', hu: 'Síkgráfok' },
  '18_Szinezesek': { en: 'Colorings', hu: 'Színezések' },
};

// Eager-load every markdown file under content/ as a raw string.
const raw = import.meta.glob('./content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function setVariant(doc: Doc, isHu: boolean, text: string) {
  if (isHu) doc.hu = text;
  else doc.en = text;
}

const byId = new Map<string, Topic>();

for (const [path, text] of Object.entries(raw)) {
  // path like './content/01_Halmazok/quiz.hu.md' or '.../exercises/05_x.md'
  const rel = path.replace(/^\.\/content\//, '');
  const parts = rel.split('/');
  const folder = parts[0];
  if (!TITLES[folder]) continue;

  let topic = byId.get(folder);
  if (!topic) {
    topic = {
      id: folder,
      no: folder.slice(0, 2),
      title: TITLES[folder],
      exercises: [],
    };
    byId.set(folder, topic);
  }

  const file = parts[parts.length - 1];
  const isHu = file.endsWith('.hu.md');
  const base = file.replace(/\.hu\.md$/, '').replace(/\.md$/, '');

  if (parts[1] === 'exercises') {
    const exId = base;
    let ex = topic.exercises.find((e) => e.id === exId);
    if (!ex) {
      ex = { id: exId };
      topic.exercises.push(ex);
    }
    setVariant(ex, isHu, text);
    continue;
  }

  if (base === 'README') topic.readme = { ...(topic.readme ?? {}), ...(isHu ? { hu: text } : { en: text }) };
  else if (base === 'solutions') setVariant((topic.solutions ??= {}), isHu, text);
  else if (base === 'exercise_checklist') setVariant((topic.checklist ??= {}), isHu, text);
  else if (base === 'quiz') setVariant((topic.quiz ??= {}), isHu, text);
}

for (const t of byId.values()) {
  t.exercises.sort((a, b) => a.id.localeCompare(b.id));
}

export const TOPICS: Topic[] = [...byId.values()].sort((a, b) => a.no.localeCompare(b.no));

export const topicById = (id: string) => TOPICS.find((t) => t.id === id);

/** Pick the best language variant of a doc: requested lang, then the other, else ''. */
export function pickDoc(doc: Doc | undefined, lang: 'en' | 'hu'): string {
  if (!doc) return '';
  return (lang === 'hu' ? doc.hu ?? doc.en : doc.en ?? doc.hu) ?? '';
}

/** True when a doc only exists in the non-requested language (so the UI can flag it). */
export function isFallback(doc: Doc | undefined, lang: 'en' | 'hu'): boolean {
  if (!doc) return false;
  return lang === 'hu' ? !doc.hu && !!doc.en : !doc.en && !!doc.hu;
}
