import Fraction from 'fraction.js';

/**
 * Exact rational number used throughout the computation engine.
 * Wrapping fraction.js keeps the textbook's exact values (e.g. 14/3, -143/24)
 * instead of accumulating floating-point error.
 */
export type Frac = Fraction;

/** Construct a fraction from a number, "a/b" string, or another fraction. */
export function F(n: number | string | Frac, d?: number): Frac {
  if (d !== undefined) return new Fraction(n as number, d);
  return new Fraction(n as number | string);
}

export const ZERO: Frac = new Fraction(0);
export const ONE: Frac = new Fraction(1);

export function isZero(f: Frac): boolean {
  return f.n === 0;
}

export function eq(a: Frac, b: Frac): boolean {
  return a.equals(b);
}

/** |f| as a fraction. */
export function abs(f: Frac): Frac {
  return f.abs();
}

/** Compare magnitudes: returns true if |a| > |b|. */
export function absGreater(a: Frac, b: Frac): boolean {
  return a.abs().compare(b.abs()) > 0;
}

/** KaTeX source for a fraction, rendering proper \frac{}{} for non-integers. */
export function toKatex(f: Frac): string {
  if (f.n === 0) return '0';
  const sign = f.s < 0 ? '-' : '';
  if (f.d === 1) return `${sign}${f.n}`;
  return `${sign}\\frac{${f.n}}{${f.d}}`;
}

/** Plain text form for a fraction, e.g. "-143/24" or "4". */
export function toPlain(f: Frac): string {
  if (f.n === 0) return '0';
  const sign = f.s < 0 ? '-' : '';
  if (f.d === 1) return `${sign}${f.n}`;
  return `${sign}${f.n}/${f.d}`;
}

/** Numeric (lossy) value, for display only. */
export function toNumber(f: Frac): number {
  return f.valueOf();
}
