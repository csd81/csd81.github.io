import { useMemo } from 'react';

// Static, in-browser replacement for the old `/api/content` endpoint. The four
// source markdown documents are bundled, preprocessed and split into sections
// by `## ` headings — the same logic the Express server used (server/content.js).
import enTextbook from '../content/Chapter_10_ODEs.md?raw';
import huTextbook from '../content/10_Differencialegyenletek.md?raw';
import enSlides from '../content/_num_pres10.md?raw';
import huSlides from '../content/10num_pres10.md?raw';

const RAW = {
  'en:textbook': { file: 'Chapter_10_ODEs.md', md: enTextbook },
  'hu:textbook': { file: '10_Differencialegyenletek.md', md: huTextbook },
  'en:slides': { file: '_num_pres10.md', md: enSlides },
  'hu:slides': { file: '10num_pres10.md', md: huSlides },
};

// Inside a `$...$` math span, bare `|` are absolute-value bars. On table-row
// lines they collide with GFM cell separators, so swap them for \lvert/\rvert.
function fixMathBars(inner) {
  let open = true;
  return inner.replace(/\|/g, () => {
    const r = open ? '\\lvert ' : '\\rvert ';
    open = !open;
    return r;
  });
}

function preprocess(md) {
  const isTableRow = (l) => /^\s*\|.*\|\s*$/.test(l);
  return md
    .split('\n')
    .map((line) =>
      isTableRow(line)
        ? line.replace(/\$([^$]+)\$/g, (_m, inner) => '$' + fixMathBars(inner) + '$')
        : line,
    )
    .join('\n');
}

function splitSections(md) {
  const lines = md.split('\n');
  const sections = [];
  let current = { id: 'intro', title: '', body: [] };
  const idFromHeading = (h) => {
    const m = h.match(/(\d+\.\d+)/);
    return m ? m[1] : h.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 24);
  };
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current.body.join('').trim() || current.title) sections.push(current);
      const title = line.replace(/^##\s+/, '').trim();
      current = { id: idFromHeading(title), title, body: [line] };
    } else {
      current.body.push(line);
    }
  }
  if (current.body.join('').trim() || current.title) sections.push(current);
  return sections.map((s) => ({ id: s.id, title: s.title, markdown: s.body.join('\n') }));
}

const cache = new Map();

function getDocument(lang, type) {
  const key = `${lang}:${type}`;
  if (cache.has(key)) return cache.get(key);
  const entry = RAW[key];
  if (!entry) throw new Error(`Unknown content key: ${key}`);
  const doc = { lang, type, file: entry.file, sections: splitSections(preprocess(entry.md)) };
  cache.set(key, doc);
  return doc;
}

// Same hook shape as before: { doc, error }. Computation is synchronous now, so
// `error` is only set if the (lang, type) key is unknown.
export function useContent(lang, type) {
  return useMemo(() => {
    try {
      return { doc: getDocument(lang, type), error: null };
    } catch (e) {
      return { doc: null, error: e.message };
    }
  }, [lang, type]);
}
