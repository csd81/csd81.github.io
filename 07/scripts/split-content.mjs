// Splits the Chapter 7 textbook markdown (EN + HU) into per-section lesson files
// under content/lessons/{en,hu}/ and writes a bilingual manifest index.json.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const sources = {
  en: resolve(root, 'Chapter_7_Numerical_Calculus.md'),
  hu: resolve(root, '07_Numerikus_differencialas_integralas.md'),
};

/** Split a markdown doc into { id, title, body } chunks keyed by `## 7.x` headers. */
function splitDoc(text) {
  const lines = text.split('\n');
  const sections = [];
  let current = { id: 'intro', title: null, lines: [] };
  for (const line of lines) {
    const secMatch = line.startsWith('## ') ? line.match(/7\.(\d)/) : null;
    if (secMatch) {
      sections.push(current);
      const title = line
        .replace(/^##\s+/, '')
        .replace(/^7\.\d\.?\s*/, '')
        .trim();
      current = { id: `7.${secMatch[1]}`, title, lines: [line] };
      continue;
    }
    // Capture the chapter intro title from the second-level heading before 7.1
    if (current.id === 'intro' && line.startsWith('## ') && !current.title) {
      current.title = line.replace(/^##\s+/, '').trim();
    }
    current.lines.push(line);
  }
  sections.push(current);

  // Strip a trailing footer (--- + italic credit) from the last section.
  return sections.map((s) => {
    let body = s.lines.join('\n').trim();
    body = body.replace(/\n+---\s*\n+\*[^*]+\*\s*$/, '').trim();
    return { ...s, body };
  });
}

const docs = {};
for (const [lang, file] of Object.entries(sources)) {
  docs[lang] = splitDoc(readFileSync(file, 'utf8'));
}

// Order of lessons we expose (intro first, then 7.1–7.4).
const order = ['intro', '7.1', '7.2', '7.3', '7.4'];
const manifest = [];

for (const id of order) {
  const slug = id === 'intro' ? 'intro' : id.replace('.', '_');
  const entry = { id, slug, title: {} };
  for (const lang of Object.keys(sources)) {
    const sec = docs[lang].find((s) => s.id === id);
    if (!sec) continue;
    const dir = resolve(root, 'content', 'lessons', lang);
    mkdirSync(dir, { recursive: true });
    writeFileSync(resolve(dir, `${slug}.md`), sec.body + '\n', 'utf8');
    entry.title[lang] = sec.title ?? id;
  }
  manifest.push(entry);
}

mkdirSync(resolve(root, 'content', 'lessons'), { recursive: true });
writeFileSync(
  resolve(root, 'content', 'lessons', 'index.json'),
  JSON.stringify(manifest, null, 2) + '\n',
  'utf8',
);

console.log('Wrote', manifest.length, 'lessons per language:');
for (const m of manifest) console.log(' ', m.id, '→', m.title);
