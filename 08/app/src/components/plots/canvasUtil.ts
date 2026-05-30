// Helpers shared by the canvas plot components.

export interface View {
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
  w: number; // css px
  h: number; // css px
  pad: number;
}

export function makeView(
  dom: { xmin: number; xmax: number; ymin: number; ymax: number },
  w: number,
  h: number,
  pad = 26
): View {
  return { ...dom, w, h, pad };
}

/** world → pixel */
export function toPx(v: View, x: number, y: number): [number, number] {
  const px = v.pad + ((x - v.xmin) / (v.xmax - v.xmin)) * (v.w - 2 * v.pad);
  const py =
    v.h - v.pad - ((y - v.ymin) / (v.ymax - v.ymin)) * (v.h - 2 * v.pad);
  return [px, py];
}

/** pixel → world */
export function toWorld(v: View, px: number, py: number): [number, number] {
  const x = v.xmin + ((px - v.pad) / (v.w - 2 * v.pad)) * (v.xmax - v.xmin);
  const y =
    v.ymin + ((v.h - v.pad - py) / (v.h - 2 * v.pad)) * (v.ymax - v.ymin);
  return [x, y];
}

/** read a CSS custom property from :root (respects current theme) */
export function cssVar(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

/** Resolve a color for canvas use. Canvas can't parse `var(--x)`, so look it up.
 *  Plain colors (#hex, rgb(), names) pass through unchanged. */
export function resolveColor(c: string | undefined, fallback: string): string {
  if (!c) return fallback;
  const m = c.match(/^var\((--[\w-]+)\)$/);
  return m ? cssVar(m[1]) || fallback : c;
}

/** Set up a HiDPI canvas; returns the 2D context scaled to CSS pixels. */
export function setupHiDPI(
  canvas: HTMLCanvasElement,
  w: number,
  h: number
): CanvasRenderingContext2D {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

/** linear blend between two hex/rgb colors at t∈[0,1] */
export function mix(c1: string, c2: string, t: number): string {
  const p = (c: string) => {
    const m = c.match(/\d+(\.\d+)?/g)?.map(Number) ?? [0, 0, 0];
    if (c.startsWith("#")) {
      const h = c.replace("#", "");
      const f = h.length === 3 ? h.split("").map((d) => d + d).join("") : h;
      return [
        parseInt(f.slice(0, 2), 16),
        parseInt(f.slice(2, 4), 16),
        parseInt(f.slice(4, 6), 16),
      ];
    }
    return m;
  };
  const a = p(c1),
    b = p(c2);
  const r = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
}
