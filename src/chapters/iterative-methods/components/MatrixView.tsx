import { Math as Tex } from './MathBlock';
import type { Mat, Vec } from '../compute';

function num(v: number): string {
  if (!Number.isFinite(v)) return '\\infty';
  const r = Math.round(v);
  if (Math.abs(v - r) < 1e-9) return String(r);
  if (Math.abs(v) >= 1e5 || (Math.abs(v) < 1e-3 && v !== 0)) {
    const [m, e] = v.toExponential(2).split('e');
    return `${m}\\cdot 10^{${parseInt(e, 10)}}`;
  }
  return v.toFixed(3);
}

export function matToTex(a: Mat): string {
  const rows = a.map((row) => row.map(num).join(' & ')).join(' \\\\ ');
  return `\\begin{bmatrix} ${rows} \\end{bmatrix}`;
}

export function vecToTex(v: Vec): string {
  return `\\begin{bmatrix} ${v.map(num).join(' \\\\ ')} \\end{bmatrix}`;
}

interface MatrixViewProps {
  matrix?: Mat;
  vector?: Vec;
  prefix?: string; // e.g. "T ="
  display?: boolean;
}

export function MatrixView({ matrix, vector, prefix = '', display = true }: MatrixViewProps) {
  const body = matrix ? matToTex(matrix) : vector ? vecToTex(vector) : '';
  return <Tex tex={`${prefix}${body}`} display={display} />;
}
