import { useRef, useEffect, useState, useMemo } from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { METHODS, METHOD_COLORS, referenceSolution } from "../lib/engine.js";

const W = 760;
const H = 440;
const PAD = 44;

export default function SlopeFieldCanvas({ funcs, exactFn, opts, methodKey }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const { theme } = useTheme();
  const { lang } = useLang();
  const t = useT(lang);

  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(4); // steps per second

  // Compute the full method trajectory + a reference solution for the curve.
  const data = useMemo(() => {
    if (!funcs) return null;
    const traj = METHODS[methodKey].fn(funcs, opts);
    const ref = exactFn || referenceSolution(funcs, opts);
    const refTs = [];
    const refYs = [];
    const N = 240;
    for (let i = 0; i <= N; i++) {
      const tt = opts.t0 + ((opts.T - opts.t0) * i) / N;
      refTs.push(tt);
      refYs.push(ref(tt));
    }
    return { traj, ref, refTs, refYs };
  }, [funcs, exactFn, opts, methodKey]);

  const n = data ? data.traj.ts.length - 1 : 0;

  // Reset stepping whenever the problem/method changes.
  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [funcs, exactFn, opts, methodKey]);

  // Animation loop.
  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    const tick = (now) => {
      if (now - last >= 1000 / speed) {
        last = now;
        setStep((s) => {
          if (s >= n) { setPlaying(false); return s; }
          return s + 1;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing, speed, n]);

  // Draw.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const dark = theme === "dark";
    const cGrid = dark ? "#283039" : "#dde3ea";
    const cAxis = dark ? "#475160" : "#9aa7b4";
    const cText = dark ? "#9aa7b4" : "#5b6877";
    const cField = dark ? "#3a4757" : "#aab6c4";
    const cExact = dark ? "#cbd5e1" : "#475569";
    const cMethod = METHOD_COLORS[methodKey] || "#6ea8fe";

    // y-range from reference + trajectory, with padding.
    const vals = [...data.refYs, ...data.traj.zs].filter(Number.isFinite);
    let yMin = Math.min(...vals);
    let yMax = Math.max(...vals);
    if (!Number.isFinite(yMin) || !Number.isFinite(yMax) || yMin === yMax) { yMin -= 1; yMax += 1; }
    const yPad = (yMax - yMin) * 0.12;
    yMin -= yPad; yMax += yPad;
    const { t0, T } = opts;

    const px = (tt) => PAD + ((tt - t0) / (T - t0)) * (W - 2 * PAD);
    const py = (yy) => H - PAD - ((yy - yMin) / (yMax - yMin)) * (H - 2 * PAD);

    // Grid + axes
    ctx.lineWidth = 1;
    ctx.font = "11px ui-monospace, monospace";
    ctx.fillStyle = cText;
    const xticks = 6, yticks = 5;
    for (let i = 0; i <= xticks; i++) {
      const tt = t0 + ((T - t0) * i) / xticks;
      const x = px(tt);
      ctx.strokeStyle = cGrid; ctx.beginPath(); ctx.moveTo(x, PAD); ctx.lineTo(x, H - PAD); ctx.stroke();
      ctx.fillText(tt.toFixed(2), x - 12, H - PAD + 16);
    }
    for (let i = 0; i <= yticks; i++) {
      const yy = yMin + ((yMax - yMin) * i) / yticks;
      const y = py(yy);
      ctx.strokeStyle = cGrid; ctx.beginPath(); ctx.moveTo(PAD, y); ctx.lineTo(W - PAD, y); ctx.stroke();
      ctx.fillText(yy.toFixed(2), 4, y + 4);
    }
    ctx.strokeStyle = cAxis; ctx.lineWidth = 1.4;
    ctx.strokeRect(PAD, PAD, W - 2 * PAD, H - 2 * PAD);

    // Direction field (quiver)
    ctx.strokeStyle = cField; ctx.lineWidth = 1.2;
    const gx = 22, gy = 14;
    const segLen = 11;
    for (let i = 1; i < gx; i++) {
      for (let j = 1; j < gy; j++) {
        const tt = t0 + ((T - t0) * i) / gx;
        const yy = yMin + ((yMax - yMin) * j) / gy;
        const slope = funcs.f(tt, yy);
        if (!Number.isFinite(slope)) continue;
        // direction in pixel space (account for scaling) then normalize
        const dxw = (T - t0) / (W - 2 * PAD);
        const dyw = (yMax - yMin) / (H - 2 * PAD);
        let vx = 1 * (1 / dxw);
        let vy = -slope * (1 / dyw);
        const norm = Math.hypot(vx, vy) || 1;
        vx = (vx / norm) * segLen; vy = (vy / norm) * segLen;
        const cx = px(tt), cy = py(yy);
        ctx.beginPath(); ctx.moveTo(cx - vx, cy - vy); ctx.lineTo(cx + vx, cy + vy); ctx.stroke();
      }
    }

    // Exact / reference curve
    ctx.strokeStyle = cExact; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
    ctx.beginPath();
    data.refTs.forEach((tt, i) => {
      const x = px(tt), y = py(data.refYs[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke(); ctx.setLineDash([]);

    // Method polyline up to `step`
    const { ts, zs } = data.traj;
    ctx.strokeStyle = cMethod; ctx.lineWidth = 2.6;
    ctx.beginPath();
    for (let i = 0; i <= step; i++) {
      const x = px(ts[i]), y = py(zs[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    // points
    ctx.fillStyle = cMethod;
    for (let i = 0; i <= step; i++) {
      ctx.beginPath(); ctx.arc(px(ts[i]), py(zs[i]), 3.2, 0, Math.PI * 2); ctx.fill();
    }

    // current tangent (next Euler-like direction) at the latest point
    if (step < n) {
      const tt = ts[step], yy = zs[step];
      const slope = funcs.f(tt, yy);
      if (Number.isFinite(slope)) {
        const tEnd = ts[step + 1];
        const yEnd = yy + slope * (tEnd - tt);
        ctx.strokeStyle = cMethod; ctx.globalAlpha = 0.5; ctx.lineWidth = 1.6; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(px(tt), py(yy)); ctx.lineTo(px(tEnd), py(yEnd)); ctx.stroke();
        ctx.globalAlpha = 1; ctx.setLineDash([]);
      }
    }
  }, [data, step, theme, methodKey, opts, funcs, n]);

  return (
    <div>
      <canvas ref={canvasRef} className="slopefield" style={{ aspectRatio: `${W}/${H}` }} />
      <div className="controls" style={{ marginTop: 12 }}>
        <button className="btn" onClick={() => setPlaying((p) => !p)} disabled={step >= n && !playing}>
          {playing ? t.pause : t.play}
        </button>
        <button className="btn" onClick={() => setStep((s) => Math.min(n, s + 1))} disabled={step >= n}>
          {t.step}
        </button>
        <button className="btn" onClick={() => { setStep(0); setPlaying(false); }}>{t.reset}</button>
        <div className="field">
          <label>{t.speed}: {speed}/s</label>
          <input type="range" min="1" max="20" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
        </div>
        <span className="muted">step {step} / {n}</span>
      </div>
    </div>
  );
}
