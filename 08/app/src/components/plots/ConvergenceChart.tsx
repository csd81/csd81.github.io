import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { cssVar, resolveColor, setupHiDPI } from "./canvasUtil";

export interface Series {
  label: string;
  color: string;
  /** errors per iteration (≥0). Zero/tiny values are floored for log display. */
  errs: number[];
  /** highlight only up to this index (for scroll/step sync); default = all */
  upTo?: number;
}

interface Props {
  series: Series[];
  height?: number;
  yLabel?: string;
}

/** Semi-log convergence plot: iteration on x, log10(error) on y. */
export default function ConvergenceChart({
  series,
  height = 320,
  yLabel = "‖pₖ − p*‖",
}: Props) {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(520);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((e) => {
      const cw = e[0].contentRect.width;
      if (cw) setW(cw);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = setupHiDPI(canvas, w, height);
    draw(ctx, w, height, series, yLabel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w, height, series, theme, yLabel]);

  return (
    <div className="plot" ref={wrapRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}

const FLOOR = 1e-16;

function draw(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  series: Series[],
  yLabel: string
) {
  const padL = 52,
    padR = 16,
    padT = 16,
    padB = 34;
  ctx.fillStyle = cssVar("--plot-bg");
  ctx.fillRect(0, 0, w, h);

  const maxK = Math.max(1, ...series.map((s) => s.errs.length - 1));
  const logs = series.flatMap((s) =>
    s.errs.map((e) => Math.log10(Math.max(e, FLOOR)))
  );
  let yhi = Math.max(...logs, 0);
  let ylo = Math.min(...logs, -1);
  yhi = Math.ceil(yhi);
  ylo = Math.floor(ylo);
  if (yhi - ylo > 18) ylo = yhi - 18;

  const X = (k: number) => padL + (k / maxK) * (w - padL - padR);
  const Y = (lg: number) =>
    padT + (1 - (lg - ylo) / (yhi - ylo)) * (h - padT - padB);

  // gridlines per decade
  ctx.strokeStyle = cssVar("--plot-grid");
  ctx.fillStyle = cssVar("--plot-axis");
  ctx.font = "600 10px ui-monospace, monospace";
  ctx.lineWidth = 1;
  for (let lg = ylo; lg <= yhi; lg++) {
    const py = Y(lg);
    ctx.beginPath();
    ctx.moveTo(padL, py);
    ctx.lineTo(w - padR, py);
    ctx.stroke();
    ctx.fillText(`1e${lg}`, 6, py + 3);
  }
  // x ticks
  for (let k = 0; k <= maxK; k += Math.ceil(maxK / 8)) {
    ctx.fillText(`${k}`, X(k) - 3, h - padB + 16);
  }
  ctx.save();
  ctx.translate(12, h / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();

  for (const s of series) {
    const n = s.upTo != null ? Math.min(s.upTo, s.errs.length - 1) : s.errs.length - 1;
    const col = resolveColor(s.color, cssVar("--plot-path"));
    ctx.strokeStyle = col;
    ctx.fillStyle = col;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    for (let k = 0; k <= n; k++) {
      const lg = Math.log10(Math.max(s.errs[k], FLOOR));
      const px = X(k),
        py = Y(lg);
      k === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
    for (let k = 0; k <= n; k++) {
      const lg = Math.log10(Math.max(s.errs[k], FLOOR));
      ctx.beginPath();
      ctx.arc(X(k), Y(lg), 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
