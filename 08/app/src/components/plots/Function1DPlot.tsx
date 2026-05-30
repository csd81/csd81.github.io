import { useEffect, useRef, useState } from "react";
import type { Fn1D } from "../../math/functions";
import type { GoldenFrame } from "../../algorithms/types";
import { useTheme } from "../../contexts/ThemeContext";
import { cssVar, setupHiDPI } from "./canvasUtil";

interface Props {
  fn: Fn1D;
  frame?: GoldenFrame;
  height?: number;
}

export default function Function1DPlot({ fn, frame, height = 360 }: Props) {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(520);

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
    draw(ctx, w, height, fn, frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w, height, fn, frame, theme]);

  return (
    <div className="plot" ref={wrapRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}

function draw(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  fn: Fn1D,
  frame?: GoldenFrame
) {
  const pad = 40;
  const { a: A, b: B } = fn.domain;
  const N = 240;
  let lo = Infinity,
    hi = -Infinity;
  const ys: number[] = [];
  for (let i = 0; i <= N; i++) {
    const x = A + ((B - A) * i) / N;
    const y = fn.f(x);
    ys.push(y);
    if (y < lo) lo = y;
    if (y > hi) hi = y;
  }
  const padY = (hi - lo) * 0.12 || 1;
  lo -= padY;
  hi += padY;

  const X = (x: number) => pad + ((x - A) / (B - A)) * (w - 2 * pad);
  const Y = (y: number) => h - pad - ((y - lo) / (hi - lo)) * (h - 2 * pad);

  ctx.fillStyle = cssVar("--plot-bg");
  ctx.fillRect(0, 0, w, h);

  // grid
  ctx.strokeStyle = cssVar("--plot-grid");
  ctx.lineWidth = 1;
  for (let i = 0; i <= 6; i++) {
    const gx = pad + ((w - 2 * pad) * i) / 6;
    ctx.beginPath();
    ctx.moveTo(gx, pad);
    ctx.lineTo(gx, h - pad);
    ctx.stroke();
  }

  // highlight current interval [a,b]
  if (frame) {
    ctx.fillStyle = cssVar("--accent-soft");
    ctx.globalAlpha = 0.7;
    ctx.fillRect(X(frame.a), pad, X(frame.b) - X(frame.a), h - 2 * pad);
    ctx.globalAlpha = 1;
  }

  // curve
  ctx.strokeStyle = cssVar("--plot-point");
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const x = A + ((B - A) * i) / N;
    const px = X(x),
      py = Y(ys[i]);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.stroke();

  if (frame) {
    const tick = (x: number, fx: number, color: string, label: string) => {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(X(x), Y(fx));
      ctx.lineTo(X(x), h - pad);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(X(x), Y(fx), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "600 12px ui-monospace, monospace";
      ctx.fillText(label, X(x) - 4, h - pad + 16);
    };
    // endpoints
    ctx.fillStyle = cssVar("--plot-axis");
    ctx.font = "600 11px ui-monospace, monospace";
    ctx.fillText("a", X(frame.a) - 3, h - pad + 16);
    ctx.fillText("b", X(frame.b) - 3, h - pad + 16);
    tick(frame.y, frame.fy, cssVar("--plot-path2"), "y");
    tick(frame.x, frame.fx, cssVar("--plot-accent"), "x");
  }
}
