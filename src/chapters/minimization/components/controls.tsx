import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "../contexts/LanguageContext";

/** Steps through [0, count-1] with play/pause; respects reduced-motion. */
export function usePlayer(count: number, fps = 1.6) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const raf = useRef<number>();
  const last = useRef(0);

  useEffect(() => {
    if (i > count - 1) setI(Math.max(0, count - 1));
  }, [count, i]);

  useEffect(() => {
    if (!playing) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setI(count - 1);
      setPlaying(false);
      return;
    }
    const tick = (t: number) => {
      if (t - last.current > 1000 / fps) {
        last.current = t;
        setI((prev) => {
          if (prev >= count - 1) {
            setPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [playing, count, fps]);

  const play = useCallback(() => {
    setI((p) => (p >= count - 1 ? 0 : p));
    setPlaying((p) => !p);
  }, [count]);
  const step = useCallback(
    (d: number) =>
      setI((p) => Math.min(count - 1, Math.max(0, p + d))),
    [count]
  );
  const reset = useCallback(() => {
    setI(0);
    setPlaying(false);
  }, []);

  return { i, setI, playing, play, step, reset };
}

export function PlayBar({
  i,
  count,
  playing,
  onPlay,
  onStep,
  onReset,
  onScrub,
}: {
  i: number;
  count: number;
  playing: boolean;
  onPlay: () => void;
  onStep: (d: number) => void;
  onReset: () => void;
  onScrub: (i: number) => void;
}) {
  const { t } = useLang();
  return (
    <div className="playbar">
      <button
        className="ctl-btn ctl-btn--accent"
        onClick={onPlay}
        aria-label="play/pause"
      >
        {playing ? "⏸" : "▶"} {t({ en: playing ? "Pause" : "Play", hu: playing ? "Szünet" : "Lejátszás" })}
      </button>
      <button className="ctl-btn" onClick={() => onStep(-1)} aria-label="previous">
        ◀
      </button>
      <input
        type="range"
        min={0}
        max={Math.max(0, count - 1)}
        value={i}
        onChange={(e) => onScrub(Number(e.target.value))}
        style={{ accentColor: "var(--accent)", flex: 1, minWidth: 90 }}
        aria-label="step"
      />
      <button className="ctl-btn" onClick={() => onStep(1)} aria-label="next">
        ▶
      </button>
      <button className="ctl-btn" onClick={onReset} aria-label="reset">
        ↺
      </button>
    </div>
  );
}

export function RangeField({
  label,
  value,
  min,
  max,
  step = 0.01,
  onChange,
  fmt,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  fmt?: (v: number) => string;
}) {
  return (
    <div className="field">
      <label>
        {label} <b>{fmt ? fmt(value) : value}</b>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export function SelectField<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
