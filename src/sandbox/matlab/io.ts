/**
 * File-format parsers for the sandbox VFS: CSV text, Excel (.xlsx) and MATLAB
 * Live Scripts (.mlx) — both OPC zip+XML containers, unzipped with fflate.
 * Pure functions on bytes/text so they run in the worker and on the main thread.
 */
import { unzipSync, strFromU8 } from 'fflate';
import { type Table, type Mat, type Value, zeros, colVec, makeStrArr } from './values';

// ── CSV ────────────────────────────────────────────────────────────────
export interface Csv { headers: string[] | null; rows: (string | number)[][] }

const isNum = (s: string): boolean => s.trim() !== '' && Number.isFinite(Number(s.trim()));

/** Parse CSV/DSV text: quoted fields (with embedded delimiter/quote/newline), numeric inference. */
export function parseCsv(text: string, delim = ','): Csv {
  const t = text.replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  const rows: string[][] = []; let row: string[] = []; let field = ''; let i = 0; let quoted = false;
  const endField = () => { row.push(field); field = ''; };
  const endRow = () => { endField(); rows.push(row); row = []; };
  while (i < t.length) {
    const c = t[i];
    if (quoted) {
      if (c === '"') { if (t[i + 1] === '"') { field += '"'; i += 2; continue; } quoted = false; i++; continue; }
      field += c; i++; continue;
    }
    if (c === '"') { quoted = true; i++; continue; }
    if (c === delim) { endField(); i++; continue; }
    if (c === '\n') { endRow(); i++; continue; }
    field += c; i++;
  }
  if (field !== '' || row.length) endRow();
  while (rows.length && rows[rows.length - 1].every((f) => f === '')) rows.pop();   // drop trailing blank lines
  if (!rows.length) return { headers: null, rows: [] };
  // Header row = a first row that is not all-numeric.
  const hasHeader = rows[0].some((f) => f.trim() !== '' && !isNum(f));
  const headers = hasHeader ? rows[0].map((h) => h.trim()) : null;
  const body = hasHeader ? rows.slice(1) : rows;
  const data = body.map((r) => r.map((f) => (isNum(f) ? Number(f.trim()) : f)));
  return { headers, rows: data };
}

/** Build the interpreter's Table value from parsed CSV (numeric columns → doubles, else strings). */
export function csvToTable(csv: Csv): Table {
  const ncol = Math.max(0, ...csv.rows.map((r) => r.length), csv.headers?.length ?? 0);
  const nrows = csv.rows.length;
  const vars = Array.from({ length: ncol }, (_, j) => csv.headers?.[j]?.trim() || `Var${j + 1}`);
  const cols: Value[] = [];
  for (let j = 0; j < ncol; j++) {
    const cell = csv.rows.map((r) => r[j]);
    const allNum = cell.every((v) => typeof v === 'number' || v === undefined || v === '');
    if (allNum) cols.push(colVec(cell.map((v) => (typeof v === 'number' ? v : NaN))));
    else cols.push(makeStrArr(nrows, 1, cell.map((v) => (v === undefined ? '' : String(v)))));
  }
  return { kind: 'table', vars, cols, nrows };
}

/** Build a numeric matrix from parsed CSV (non-numeric cells → NaN). */
export function csvToMatrix(csv: Csv): Mat {
  const body = csv.headers ? csv.rows : csv.rows;
  const nrows = body.length; const ncol = Math.max(0, ...body.map((r) => r.length));
  const M = zeros(nrows, ncol);
  for (let r = 0; r < nrows; r++) for (let c = 0; c < ncol; c++) { const v = body[r][c]; M.data[r + c * nrows] = typeof v === 'number' ? v : NaN; }
  return M;
}

/** Serialize a matrix to CSV text (for writematrix/csvwrite). */
export function matrixToCsv(M: Mat): string {
  const out: string[] = [];
  for (let r = 0; r < M.rows; r++) { const row: string[] = []; for (let c = 0; c < M.cols; c++) row.push(String(M.data[r + c * M.rows])); out.push(row.join(',')); }
  return out.join('\n') + '\n';
}

// ── XLSX (OPC zip + XML) ─────────────────────────────────────────────────
export interface Sheet { name: string; grid: (string | number | null)[][] }

const xmlEntities = (s: string): string => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d)).replace(/&amp;/g, '&');
/** Column letters → 0-based index (A→0, Z→25, AA→26, …). */
function colIdx(ref: string): number { const m = ref.match(/^[A-Z]+/); if (!m) return 0; let n = 0; for (const ch of m[0]) n = n * 26 + (ch.charCodeAt(0) - 64); return n - 1; }

export function parseXlsx(bytes: Uint8Array): { sheets: Sheet[] } {
  const files = unzipSync(bytes);
  const read = (p: string) => (files[p] ? strFromU8(files[p]) : '');
  // shared strings: each <si> may hold several <t> runs → concatenate
  const shared: string[] = [];
  for (const si of read('xl/sharedStrings.xml').split('</si>')) {
    if (!si.includes('<si')) continue;
    const parts = [...si.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((m) => xmlEntities(m[1]));
    shared.push(parts.join(''));
  }
  // sheet names + order from workbook.xml
  const names = [...read('xl/workbook.xml').matchAll(/<sheet[^>]*\bname="([^"]*)"/g)].map((m) => xmlEntities(m[1]));
  const sheetPaths = Object.keys(files).filter((p) => /^xl\/worksheets\/sheet\d+\.xml$/.test(p)).sort((a, b) => (parseInt(a.match(/\d+/)![0]) - parseInt(b.match(/\d+/)![0])));
  const sheets: Sheet[] = [];
  sheetPaths.forEach((p, si) => {
    const xml = read(p); const grid: (string | number | null)[][] = [];
    for (const cm of xml.matchAll(/<c\b([^>]*)>([\s\S]*?)<\/c>/g)) {
      const attrs = cm[1]; const inner = cm[2];
      const ref = (attrs.match(/r="([A-Z]+\d+)"/) || [])[1]; if (!ref) continue;
      const t = (attrs.match(/t="([^"]*)"/) || [])[1];
      const row = parseInt(ref.match(/\d+/)![0]) - 1; const col = colIdx(ref);
      let val: string | number | null = null;
      const vMatch = inner.match(/<v>([\s\S]*?)<\/v>/);
      if (t === 's') val = shared[parseInt(vMatch?.[1] ?? '0')] ?? '';
      else if (t === 'inlineStr' || t === 'str') { const isM = inner.match(/<t[^>]*>([\s\S]*?)<\/t>/); val = isM ? xmlEntities(isM[1]) : (vMatch ? xmlEntities(vMatch[1]) : ''); }
      else if (vMatch) { const n = Number(vMatch[1]); val = Number.isFinite(n) ? n : xmlEntities(vMatch[1]); }
      (grid[row] ||= [])[col] = val;
    }
    for (const r of grid) for (let c = 0; c < r.length; c++) if (r[c] === undefined) r[c] = null;
    sheets.push({ name: names[si] ?? `Sheet${si + 1}`, grid });
  });
  return { sheets };
}

/** First sheet of a workbook as CSV-shaped data (for readtable/readmatrix on .xlsx). */
export function xlsxToCsv(bytes: Uint8Array): Csv {
  const sheet = parseXlsx(bytes).sheets[0];
  if (!sheet) return { headers: null, rows: [] };
  const rows = sheet.grid.map((r) => r.map((v) => (v == null ? '' : v)));
  const hasHeader = rows.length > 0 && rows[0].some((v) => typeof v === 'string' && v.trim() !== '');
  const headers = hasHeader ? rows[0].map((v) => String(v ?? '').trim()) : null;
  return { headers, rows: hasHeader ? rows.slice(1) : rows };
}

// ── MLX (MATLAB Live Script: OPC zip, code in matlab/document.xml) ────────
/** Extract the plain `.m` source from a `.mlx` Live Script (the `code`-styled paragraphs). */
export function parseMlx(bytes: Uint8Array): string {
  const files = unzipSync(bytes);
  const xml = files['matlab/document.xml'] ? strFromU8(files['matlab/document.xml']) : '';
  const lines: string[] = [];
  for (const p of xml.match(/<w:p\b[\s\S]*?<\/w:p>/g) ?? []) {
    const style = p.match(/<w:pStyle[^>]*w:val="([^"]+)"/);
    if (!style || style[1] !== 'code') continue;
    const text = [...p.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map((m) => xmlEntities(m[1])).join('');
    lines.push(text.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, ''));
  }
  return lines.join('\n');
}
