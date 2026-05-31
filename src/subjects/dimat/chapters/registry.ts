/** The 24 interactive dimat chapters ("Kombinatorika és Gráfelmélet", Dr. Szalkai István / Pannon Egyetem). Hungarian source. */
export interface DimatChapter {
  id: string; // route segment, e.g. 'ch0'
  group: 'KOMB' | 'GRAF';
  title: string; // Hungarian
  part: string; // e.g. 'I.2' / 'II.4'
}

export const DIMAT_CHAPTERS: DimatChapter[] = [
  { id: 'ch0', group: 'KOMB', part: 'I.0', title: 'Bevezetés — jelölések és konvenciók' },
  { id: 'ch1', group: 'KOMB', part: 'I.1', title: 'Halmazok' },
  { id: 'ch2', group: 'KOMB', part: 'I.2', title: 'Elemi leszámlálások' },
  { id: 'ch3', group: 'KOMB', part: 'I.3', title: 'Binomiális és polinomiális együtthatók' },
  { id: 'ch4', group: 'KOMB', part: 'I.4', title: 'A logikai szitaformula' },
  { id: 'ch5', group: 'KOMB', part: 'I.5', title: 'Rekurzív sorozatok' },
  { id: 'ch6', group: 'KOMB', part: 'I.6', title: 'Generátorfüggvények' },
  { id: 'ch7', group: 'KOMB', part: 'I.7', title: 'Extremális halmazrendszerek' },
  { id: 'ch8', group: 'KOMB', part: 'I.8', title: 'Partíciós problémák' },
  { id: 'ch9', group: 'GRAF', part: 'II.1', title: 'Gráf alapfogalmak' },
  { id: 'ch10', group: 'GRAF', part: 'II.2', title: 'Euler-utak és -körök' },
  { id: 'ch11', group: 'GRAF', part: 'II.3', title: 'Hamilton-utak és -körök' },
  { id: 'ch12', group: 'GRAF', part: 'II.4', title: 'Gráf-mátrixok' },
  { id: 'ch13', group: 'GRAF', part: 'II.5', title: 'Útkeresési algoritmusok' },
  { id: 'ch14', group: 'GRAF', part: 'II.6', title: 'Fák' },
  { id: 'ch15', group: 'GRAF', part: 'II.7', title: 'Feszítőfák' },
  { id: 'ch16', group: 'GRAF', part: 'II.8', title: 'Gráfok izomorfizmusa' },
  { id: 'ch17', group: 'GRAF', part: 'II.9', title: 'Síkgráfok' },
  { id: 'ch18', group: 'GRAF', part: 'II.10', title: 'Gráfok színezései' },
  { id: 'ch19', group: 'GRAF', part: 'II.11', title: 'Kétpólusú gráfok' },
  { id: 'ch20', group: 'GRAF', part: 'II.12', title: 'Extremális gráfok' },
  { id: 'ch21', group: 'GRAF', part: 'II.13', title: 'Gráfok spektruma' },
  { id: 'ch22', group: 'GRAF', part: 'II.14', title: 'Hálózati folyamok' },
  { id: 'ch23', group: 'GRAF', part: 'II.15', title: 'Matroidok' },
  { id: 'appendix', group: 'GRAF', part: 'F', title: 'Függelék — binomiális polinomok, hatványösszegek, parciális törtek' },
];

export const DIMAT_GROUP_LABEL: Record<DimatChapter['group'], { hu: string; en: string }> = {
  KOMB: { hu: 'I. rész — Kombinatorika', en: 'Part I — Combinatorics' },
  GRAF: { hu: 'II. rész — Gráfelmélet', en: 'Part II — Graph Theory' },
};

export const dimatChapterById = (id: string) => DIMAT_CHAPTERS.find((c) => c.id === id);
