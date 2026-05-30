export type Matrix = number[][];

export function rows(m: Matrix): number {
  return m.length;
}
export function cols(m: Matrix): number {
  return m.length === 0 ? 0 : m[0].length;
}

export function isSquare(m: Matrix): boolean {
  return rows(m) > 0 && rows(m) === cols(m);
}

export function clone(m: Matrix): Matrix {
  return m.map((r) => [...r]);
}

export function zeros(n: number, mCols = n): Matrix {
  return Array.from({ length: n }, () => Array.from({ length: mCols }, () => 0));
}

export function identity(n: number): Matrix {
  const out = zeros(n);
  for (let i = 0; i < n; i++) out[i][i] = 1;
  return out;
}

export function transpose(m: Matrix): Matrix {
  const r = rows(m);
  const c = cols(m);
  const out = zeros(c, r);
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) out[j][i] = m[i][j];
  return out;
}

export function multiply(a: Matrix, b: Matrix): Matrix {
  const ar = rows(a);
  const ac = cols(a);
  const bc = cols(b);
  const out = zeros(ar, bc);
  for (let i = 0; i < ar; i++)
    for (let j = 0; j < bc; j++) {
      let s = 0;
      for (let k = 0; k < ac; k++) s += a[i][k] * b[k][j];
      out[i][j] = s;
    }
  return out;
}

export function isSymmetric(m: Matrix, eps = 1e-9): boolean {
  if (!isSquare(m)) return false;
  const n = rows(m);
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (Math.abs(m[i][j] - m[j][i]) > eps) return false;
  return true;
}

export function approxEqual(a: Matrix, b: Matrix, eps = 1e-6): boolean {
  if (rows(a) !== rows(b) || cols(a) !== cols(b)) return false;
  for (let i = 0; i < rows(a); i++)
    for (let j = 0; j < cols(a); j++)
      if (Math.abs(a[i][j] - b[i][j]) > eps) return false;
  return true;
}

/** Round to a sensible number of decimals, dropping floating fuzz like -0 and 2.9999999. */
export function tidy(x: number, decimals = 4): number {
  const f = Math.pow(10, decimals);
  const r = Math.round((x + Number.EPSILON) * f) / f;
  return Object.is(r, -0) ? 0 : r;
}

export function tidyMatrix(m: Matrix, decimals = 4): Matrix {
  return m.map((r) => r.map((x) => tidy(x, decimals)));
}

/** Compact number formatting for display (integers stay integers). */
export function fmt(x: number, decimals = 4): string {
  const t = tidy(x, decimals);
  if (Number.isInteger(t)) return String(t);
  return String(t);
}

/** Build a KaTeX pmatrix from a numeric matrix. */
export function toLatex(m: Matrix, decimals = 4): string {
  const body = m.map((r) => r.map((x) => fmt(x, decimals)).join(" & ")).join(" \\\\ ");
  return `\\begin{pmatrix} ${body} \\end{pmatrix}`;
}

/** Parse a textual matrix (rows separated by newlines or ';', entries by space/comma). */
export function parseMatrix(text: string): { matrix?: Matrix; error?: string } {
  const lines = text
    .split(/[\n;]+/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  if (lines.length === 0) return { error: "empty" };
  const matrix: Matrix = [];
  let width = -1;
  for (const line of lines) {
    const parts = line.split(/[\s,]+/).filter((p) => p.length > 0);
    const nums = parts.map(Number);
    if (nums.some((n) => Number.isNaN(n))) return { error: "nan" };
    if (width === -1) width = nums.length;
    else if (nums.length !== width) return { error: "ragged" };
    matrix.push(nums);
  }
  return { matrix };
}
