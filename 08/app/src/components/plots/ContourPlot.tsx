import { useEffect, useMemo, useRef, useState } from "react";
import type { Fn2D } from "../../math/functions";
import {
  autoLevels,
  isoSegments,
  sampleGrid,
  type Grid,
} from "../../math/contours";
import type { Vec } from "../../math/linalg";
import { useTheme } from "../../contexts/ThemeContext";
import {
  cssVar,
  makeView,
  mix,
  resolveColor,
  setupHiDPI,
  toPx,
  toWorld,
  type View,
} from "./canvasUtil";

export interface Triangle {
  verts: Vec[];
  centroid?: Vec;
  trial?: { kind: string; point: Vec };
}

export interface ContourOverlay {
  /** one or more polyline paths (each a list of points) */
  paths?: { pts: Vec[]; color?: string; dotted?: boolean }[];
  /** standalone markers */
  points?: { p: Vec; color?: string; r?: number; ring?: boolean }[];
  /** gradient arrow from p in direction dir (world units) */
  arrow?: { from: Vec; to: Vec; color?: string };
  triangles?: Triangle[];
  /** highlight the function minimum */
  showMin?: boolean;
}

interface Props {
  fn: Fn2D;
  overlay?: ContourOverlay;
  height?: number;
  onPick?: (p: Vec) => void;
}

export default function ContourPlot({
  fn,
  overlay,
  height = 420,
  onPick,
}: Props) {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(520);

  // cache the (expensive) grid + iso segments per function
  const grid = useMemo<Grid>(
    () => sampleGrid(fn.f, fn.domain, 150, 150),
    [fn]
  );
  const levels = useMemo(
    () => fn.levels ?? autoLevels(grid, 15),
    [fn, grid]
  );
  const isos = useMemo(
    () => levels.map((lv) => ({ lv, segs: isoSegments(grid, lv) })),
    [levels, grid]
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const cw = entries[0].contentRect.width;
      if (cw) setW(cw);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = setupHiDPI(canvas, w, height);
    const view = makeView(fn.domain, w, height);
    draw(ctx, view, grid, isos, fn, overlay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w, height, fn, grid, isos, overlay, theme]);

  const handleClick = (e: React.MouseEvent) => {
    if (!onPick) return;
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const view = makeView(fn.domain, w, height);
    const [x, y] = toWorld(view, e.clientX - rect.left, e.clientY - rect.top);
    onPick([x, y]);
  };

  return (
    <div
      className="plot"
      ref={wrapRef}
      style={{ cursor: onPick ? "crosshair" : "default" }}
    >
      <canvas ref={canvasRef} onClick={handleClick} />
    </div>
  );
}

function draw(
  ctx: CanvasRenderingContext2D,
  view: View,
  grid: Grid,
  isos: { lv: number; segs: ReturnType<typeof isoSegments> }[],
  fn: Fn2D,
  overlay?: ContourOverlay
) {
  const bg = cssVar("--plot-bg");
  const low = cssVar("--plot-low");
  const high = cssVar("--plot-high");
  const contour = cssVar("--plot-contour");
  const axis = cssVar("--plot-axis");
  const ink = cssVar("--plot-ink");

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, view.w, view.h);

  // faint heatmap of values (coarse blocks for speed)
  const bx = 60,
    by = 60;
  const span = grid.vmax - grid.vmin || 1;
  for (let j = 0; j < by; j++) {
    for (let i = 0; i < bx; i++) {
      const x = view.xmin + ((view.xmax - view.xmin) * (i + 0.5)) / bx;
      const y = view.ymin + ((view.ymax - view.ymin) * (j + 0.5)) / by;
      const v = fn.f(x, y);
      const t = Math.min(1, Math.max(0, (v - grid.vmin) / span));
      // sqrt to emphasize low basin
      ctx.fillStyle = mix(low, high, Math.sqrt(t));
      const [px, py] = toPx(view, x, y);
      const [px2, py2] = toPx(
        view,
        view.xmin + ((view.xmax - view.xmin) * (i + 1.5)) / bx,
        view.ymin + ((view.ymax - view.ymin) * (j - 0.5)) / by
      );
      ctx.globalAlpha = 0.32;
      ctx.fillRect(
        Math.floor(px) - 1,
        Math.floor(py) - 1,
        Math.ceil(px2 - px) + 2,
        Math.ceil(py2 - py) + 2
      );
    }
  }
  ctx.globalAlpha = 1;

  // contour iso-lines
  ctx.strokeStyle = contour;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (const { segs } of isos) {
    for (const s of segs) {
      const [x1, y1] = toPx(view, s.x1, s.y1);
      const [x2, y2] = toPx(view, s.x2, s.y2);
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
    }
  }
  ctx.stroke();

  // axes through origin if visible
  ctx.strokeStyle = axis;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.6;
  if (view.ymin < 0 && view.ymax > 0) {
    const [, y0] = toPx(view, 0, 0);
    ctx.beginPath();
    ctx.moveTo(view.pad, y0);
    ctx.lineTo(view.w - view.pad, y0);
    ctx.stroke();
  }
  if (view.xmin < 0 && view.xmax > 0) {
    const [x0] = toPx(view, 0, 0);
    ctx.beginPath();
    ctx.moveTo(x0, view.pad);
    ctx.lineTo(x0, view.h - view.pad);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // ---- overlays ----
  const P = (p: Vec) => toPx(view, p[0], p[1]);

  if (overlay?.triangles) {
    for (const tri of overlay.triangles) {
      ctx.lineJoin = "round";
      ctx.strokeStyle = cssVar("--plot-path");
      ctx.fillStyle = cssVar("--plot-path");
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.12;
      ctx.beginPath();
      tri.verts.forEach((v, i) => {
        const [px, py] = P(v);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.stroke();
      // vertices
      tri.verts.forEach((v, i) => {
        const [px, py] = P(v);
        ctx.fillStyle =
          i === 0
            ? cssVar("--plot-path2")
            : i === tri.verts.length - 1
            ? cssVar("--plot-accent")
            : cssVar("--plot-path");
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fill();
      });
      if (tri.trial) {
        const [px, py] = P(tri.trial.point);
        ctx.strokeStyle = cssVar("--plot-point");
        ctx.setLineDash([4, 4]);
        const [cx, cy] = tri.centroid ? P(tri.centroid) : [px, py];
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = cssVar("--plot-point");
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  if (overlay?.paths) {
    for (const path of overlay.paths) {
      if (path.pts.length < 1) continue;
      const col = resolveColor(path.color, cssVar("--plot-path"));
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      if (path.dotted) ctx.setLineDash([5, 5]);
      ctx.beginPath();
      path.pts.forEach((p, i) => {
        const [px, py] = P(p);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.setLineDash([]);
      // node dots
      ctx.fillStyle = col;
      path.pts.forEach((p) => {
        const [px, py] = P(p);
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  }

  if (overlay?.arrow) {
    const [x1, y1] = P(overlay.arrow.from);
    const [x2, y2] = P(overlay.arrow.to);
    ctx.strokeStyle = resolveColor(overlay.arrow.color, cssVar("--plot-accent"));
    ctx.fillStyle = ctx.strokeStyle;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    const ang = Math.atan2(y2 - y1, x2 - x1);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(
      x2 - 9 * Math.cos(ang - 0.4),
      y2 - 9 * Math.sin(ang - 0.4)
    );
    ctx.lineTo(
      x2 - 9 * Math.cos(ang + 0.4),
      y2 - 9 * Math.sin(ang + 0.4)
    );
    ctx.closePath();
    ctx.fill();
  }

  if (overlay?.points) {
    for (const m of overlay.points) {
      const [px, py] = P(m.p);
      ctx.fillStyle = resolveColor(m.color, cssVar("--plot-point"));
      ctx.beginPath();
      ctx.arc(px, py, m.r ?? 5, 0, Math.PI * 2);
      ctx.fill();
      if (m.ring) {
        ctx.strokeStyle = bg;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  }

  if (overlay?.showMin && fn.min) {
    const [px, py] = P(fn.min);
    ctx.fillStyle = cssVar("--plot-point");
    ctx.strokeStyle = ink;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}
