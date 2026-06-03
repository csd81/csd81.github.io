/**
 * The preloaded `.m` library, bundled at build time.
 *
 * Two corpora:
 *  - Course examples (`mfiles/courses/**`) — the lecture scripts + the generic
 *    procedures (`procedures/`, `pivoting/`) which are always "on the path".
 *  - Chapter algorithms (`src/chapters/* /content/code/*.m`) — reference
 *    implementations shown in the chapter code boxes.
 *
 * MATLAB resolves a call to the `.m` file of that name on the path, so to avoid
 * the many cross-folder name clashes (`f.m`, `fgv.m`, `newton.m`, …) each folder
 * is loaded as its own working directory, with the generic procedures always
 * available. `folderSources(id)` returns exactly the sources to preload.
 */

const courseRaw = import.meta.glob('./mfiles/courses/**/*.m', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const chapterRaw = import.meta.glob('/src/chapters/*/content/code/*.m', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export interface MFile {
  id: string;        // unique path-based id
  name: string;      // file name without extension
  file: string;      // file name with extension
  folderId: string;
  source: string;
}
export interface MFolder {
  id: string;
  label: string;
  group: 'course' | 'chapter';
  onPath: boolean;   // generic procedures always available to course folders
  files: MFile[];
}

const COURSE_LABELS: Record<string, string> = {
  'procedures': 'Procedures (shared)',
  'pivoting': 'Pivoting (shared)',
  '01-fixed-point': '01 · Fixed-point iteration',
  '02-iterations': '02 · Root-finding iterations',
  '03-elimination': '03 · Gaussian elimination',
  '04-interpolation': '04 · Interpolation',
  '05-integration': '05 · Numerical integration',
  '06-minimization': '06 · Minimization',
};
const PATH_FOLDERS = new Set(['procedures', 'pivoting']);

function prettifySlug(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const folderMap = new Map<string, MFolder>();
function ensureFolder(id: string, label: string, group: 'course' | 'chapter', onPath: boolean): MFolder {
  let f = folderMap.get(id);
  if (!f) { f = { id, label, group, onPath, files: [] }; folderMap.set(id, f); }
  return f;
}

// Course files: ./mfiles/courses/<folder>/<file>.m
for (const [path, source] of Object.entries(courseRaw)) {
  const m = /\/courses\/([^/]+)\/([^/]+)\.m$/.exec(path);
  if (!m) continue;
  const [, folder, name] = m;
  const f = ensureFolder('course/' + folder, COURSE_LABELS[folder] ?? prettifySlug(folder), 'course', PATH_FOLDERS.has(folder));
  f.files.push({ id: path, name, file: name + '.m', folderId: f.id, source });
}

// Chapter files: /src/chapters/<slug>/content/code/<file>.m
for (const [path, source] of Object.entries(chapterRaw)) {
  const m = /\/chapters\/([^/]+)\/content\/code\/([^/]+)\.m$/.exec(path);
  if (!m) continue;
  const [, slug, name] = m;
  const f = ensureFolder('chapter/' + slug, prettifySlug(slug), 'chapter', false);
  f.files.push({ id: path, name, file: name + '.m', folderId: f.id, source });
}

for (const f of folderMap.values()) f.files.sort((a, b) => a.file.localeCompare(b.file));

const COURSE_ORDER = ['01-fixed-point', '02-iterations', '03-elimination', '04-interpolation', '05-integration', '06-minimization', 'procedures', 'pivoting'];
const GROUP_ORDER: Record<MFolder['group'], number> = { course: 0, chapter: 1 };
export const FOLDERS: MFolder[] = [...folderMap.values()].sort((a, b) => {
  if (a.group !== b.group) return GROUP_ORDER[a.group] - GROUP_ORDER[b.group];
  if (a.group === 'course') {
    const ai = COURSE_ORDER.indexOf(a.id.replace('course/', ''));
    const bi = COURSE_ORDER.indexOf(b.id.replace('course/', ''));
    return ai - bi;
  }
  return a.label.localeCompare(b.label);
});

export const LIBRARY: MFile[] = FOLDERS.flatMap((f) => f.files);
export function fileById(id: string): MFile | undefined { return LIBRARY.find((f) => f.id === id); }
export function folderById(id: string): MFolder | undefined { return folderMap.get(id); }

/** Generic procedures + pivoting, always available to the course working dirs. */
export function pathSources(): string[] {
  return FOLDERS.filter((f) => f.onPath).flatMap((f) => f.files.map((x) => x.source));
}

/** All sources to preload when `folderId` is the working directory. */
export function folderSources(folderId: string): string[] {
  const folder = folderMap.get(folderId);
  if (!folder) return [];
  const own = folder.files.map((f) => f.source);
  if (folder.group === 'course' && !folder.onPath) return [...pathSources(), ...own];
  return own;
}

/** Sources for a chapter slug (used by the embedded ChapterSandbox). */
export function chapterSources(slug: string): string[] {
  return folderSources('chapter/' + slug);
}
