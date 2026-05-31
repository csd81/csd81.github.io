/** The 18 ILA / Discrete-Math chapters (Hartung Ferenc, Pannon Egyetem). Hungarian source. */
export interface IlaChapter {
  num: number;
  id: string; // route segment, e.g. 'ch1'
  group: 'ILA' | 'DM' | 'NT';
  title: string; // Hungarian
  ready: boolean; // true once a React chapter component exists
}

export const ILA_CHAPTERS: IlaChapter[] = [
  { num: 1, id: 'ch1', group: 'ILA', title: 'Halmazelmélet', ready: true },
  { num: 2, id: 'ch2', group: 'ILA', title: 'Megfeleltetések és leképezések', ready: true },
  { num: 3, id: 'ch3', group: 'ILA', title: 'Permutációk', ready: true },
  { num: 4, id: 'ch4', group: 'ILA', title: 'Relációk', ready: true },
  { num: 5, id: 'ch5', group: 'ILA', title: 'Halmazok számossága', ready: true },
  { num: 6, id: 'ch6', group: 'ILA', title: 'Matematikai logika alapjai', ready: true },
  { num: 7, id: 'ch7', group: 'ILA', title: 'Komplex számok', ready: true },
  { num: 8, id: 'ch8', group: 'ILA', title: 'Absztrakt algebra', ready: true },
  { num: 9, id: 'ch9', group: 'DM', title: 'Matematikai bizonyítások', ready: true },
  { num: 10, id: 'ch10', group: 'DM', title: 'Kombinatorika 1.', ready: true },
  { num: 11, id: 'ch11', group: 'DM', title: 'Kombinatorika 2.', ready: false },
  { num: 12, id: 'ch12', group: 'DM', title: 'Rekurziók 1.', ready: false },
  { num: 13, id: 'ch13', group: 'DM', title: 'Rekurziók 2.', ready: false },
  { num: 14, id: 'ch14', group: 'DM', title: 'Gráfelmélet 1.', ready: false },
  { num: 15, id: 'ch15', group: 'DM', title: 'Gráfelmélet 2.', ready: false },
  { num: 16, id: 'ch16', group: 'DM', title: 'Gráfelmélet 3.', ready: false },
  { num: 17, id: 'ch17', group: 'NT', title: 'Számelmélet 1.', ready: false },
  { num: 18, id: 'ch18', group: 'NT', title: 'Számelmélet 2.', ready: false },
];

export const GROUP_LABEL: Record<IlaChapter['group'], string> = {
  ILA: 'ILA — Logikai és algebrai alapok',
  DM: 'Diszkrét matematika',
  NT: 'Számelmélet',
};

export const ilaChapterById = (id: string) => ILA_CHAPTERS.find((c) => c.id === id);
