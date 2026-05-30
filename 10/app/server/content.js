// Reads the four converted markdown files (kept in the parent folder),
// fixes absolute-value bars inside table cells so remark-gfm doesn't mistake
// them for column separators, and splits each document into sections by `## `.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// app/server -> app -> Desktop/10  (where the .md files live)
const CONTENT_DIR = join(__dirname, "..", "..");

const FILES = {
  "en:textbook": "Chapter_10_ODEs.md",
  "hu:textbook": "10_Differencialegyenletek.md",
  "en:slides": "_num_pres10.md",
  "hu:slides": "10num_pres10.md",
};

const cache = new Map();

// Inside a `$...$` math span, bare `|` are absolute-value bars. On table-row
// lines they collide with GFM cell separators, so swap them for \lvert/\rvert
// (renders identically in KaTeX). Bars come in balanced pairs -> alternate.
function fixMathBars(inner) {
  let open = true;
  return inner.replace(/\|/g, () => {
    const r = open ? "\\lvert " : "\\rvert ";
    open = !open;
    return r;
  });
}

function preprocess(md) {
  const lines = md.split("\n");
  const isTableRow = (l) => /^\s*\|.*\|\s*$/.test(l);
  return lines
    .map((line) =>
      isTableRow(line)
        ? line.replace(/\$([^$]+)\$/g, (_m, inner) => "$" + fixMathBars(inner) + "$")
        : line
    )
    .join("\n");
}

// Split into sections at level-2 `## ` headings. Content before the first
// `## ` becomes the "intro" section (carrying the document's `# ` title).
function splitSections(md) {
  const lines = md.split("\n");
  const sections = [];
  let current = { id: "intro", title: "", body: [] };

  const idFromHeading = (h) => {
    const m = h.match(/(\d+\.\d+)/); // e.g. 10.2
    return m ? m[1] : h.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 24);
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current.body.join("").trim() || current.title) sections.push(current);
      const title = line.replace(/^##\s+/, "").trim();
      current = { id: idFromHeading(title), title, body: [line] };
    } else {
      current.body.push(line);
    }
  }
  if (current.body.join("").trim() || current.title) sections.push(current);

  return sections.map((s) => ({ id: s.id, title: s.title, markdown: s.body.join("\n") }));
}

export async function getDocument(lang, type) {
  const key = `${lang}:${type}`;
  if (cache.has(key)) return cache.get(key);

  const file = FILES[key];
  if (!file) throw new Error(`Unknown content key: ${key}`);

  const raw = await readFile(join(CONTENT_DIR, file), "utf8");
  const sections = splitSections(preprocess(raw));
  const doc = { lang, type, file, sections };
  cache.set(key, doc);
  return doc;
}
