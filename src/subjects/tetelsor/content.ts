/** Loads the 39 exam-syllabus ("tételsor") markdown files with YAML frontmatter. */

export interface ExamTopicDoc {
  n: number;
  title: string;
  glossary: string;
  path: 'combo' | 'graph' | 'szamelm';
  related_dimat: string[];
  related_ila: string[];
  related_exercises: string[];
  formulas: string[];
  body: string;
}

const RAW = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const stripQuotes = (s: string) => s.trim().replace(/^['"]|['"]$/g, '');

/** Parse an inline (`['a','b']` / `[]`) or block (`\n  - 'x'`) YAML list following a key. */
function parseList(inline: string, blockLines: string[]): string[] {
  const t = inline.trim();
  if (t.startsWith('[')) {
    const inner = t.replace(/^\[|\]$/g, '').trim();
    if (!inner) return [];
    return inner.split(',').map((x) => stripQuotes(x)).filter(Boolean);
  }
  return blockLines.map((l) => stripQuotes(l.replace(/^\s*-\s*/, ''))).filter(Boolean);
}

function parseFrontmatter(raw: string): ExamTopicDoc | null {
  const m = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/.exec(raw);
  if (!m) return null;
  const [, fm, body] = m;
  const lines = fm.split('\n');
  const scalar: Record<string, string> = {};
  const lists: Record<string, string[]> = {};
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const kv = /^([a-z_]+):\s*(.*)$/i.exec(line);
    if (!kv) continue;
    const [, key, val] = kv;
    if (val.trim() === '' || val.trim().startsWith('[')) {
      // possibly a block list — collect following indented `- ` lines
      const block: string[] = [];
      let j = i + 1;
      while (j < lines.length && /^\s+-\s*/.test(lines[j])) { block.push(lines[j]); j++; }
      if (val.trim().startsWith('[') || block.length) {
        lists[key] = parseList(val, block);
        i = j - 1;
        continue;
      }
    }
    scalar[key] = stripQuotes(val);
  }
  return {
    n: parseInt(scalar.n ?? '0', 10),
    title: scalar.title ?? '',
    glossary: scalar.glossary ?? '',
    path: (scalar.path as ExamTopicDoc['path']) ?? 'combo',
    related_dimat: lists.related_dimat ?? [],
    related_ila: lists.related_ila ?? [],
    related_exercises: lists.related_exercises ?? [],
    formulas: lists.formulas ?? [],
    body: body.trim(),
  };
}

export const EXAM_TOPICS: ExamTopicDoc[] = Object.values(RAW)
  .map(parseFrontmatter)
  .filter((d): d is ExamTopicDoc => d !== null)
  .sort((a, b) => a.n - b.n);

export const examTopicByN = (n: number) => EXAM_TOPICS.find((t) => t.n === n);

export const PATH_META: Record<ExamTopicDoc['path'], { title: string; titleEn: string; colour: string; range: [number, number] }> = {
  combo: { title: 'Kombinatorika', titleEn: 'Combinatorics', colour: '#f59e0b', range: [1, 10] },
  graph: { title: 'Gráfelmélet', titleEn: 'Graph Theory', colour: '#38bdf8', range: [11, 29] },
  szamelm: { title: 'Számelmélet', titleEn: 'Number Theory', colour: '#a78bfa', range: [30, 39] },
};

export const examTopicsInPath = (p: ExamTopicDoc['path']) => EXAM_TOPICS.filter((t) => t.path === p);
