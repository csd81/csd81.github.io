import { useEffect, useRef, useState } from "react";
import { useT } from "../i18n/useT";
import "./stepplayer.css";

interface Props {
  count: number;
  index: number;
  onIndex: (i: number) => void;
  /** auto-play interval ms */
  interval?: number;
}

export function StepPlayer({ count, index, onIndex, interval = 1400 }: Props) {
  const { t } = useT();
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    if (index >= count - 1) {
      setPlaying(false);
      return;
    }
    timer.current = window.setTimeout(() => onIndex(index + 1), interval);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [playing, index, count, interval, onIndex]);

  const go = (i: number) => {
    setPlaying(false);
    onIndex(Math.max(0, Math.min(count - 1, i)));
  };

  return (
    <div className="player">
      <div className="player__btns">
        <button className="btn sm ghost" onClick={() => go(0)} disabled={index === 0} aria-label={t("first")}>
          ⏮
        </button>
        <button className="btn sm" onClick={() => go(index - 1)} disabled={index === 0}>
          ‹ {t("prev")}
        </button>
        <button
          className="btn sm primary"
          onClick={() => setPlaying((p) => !p)}
          disabled={index >= count - 1 && !playing}
        >
          {playing ? `⏸ ${t("pause")}` : `▶ ${t("play")}`}
        </button>
        <button className="btn sm" onClick={() => go(index + 1)} disabled={index >= count - 1}>
          {t("next")} ›
        </button>
        <button
          className="btn sm ghost"
          onClick={() => go(count - 1)}
          disabled={index >= count - 1}
          aria-label={t("last")}
        >
          ⏭
        </button>
      </div>
      <div className="player__meta">
        <input
          type="range"
          min={0}
          max={Math.max(0, count - 1)}
          value={index}
          onChange={(e) => go(Number(e.target.value))}
          aria-label={t("step")}
        />
        <span className="player__count">
          {t("step")} {index + 1} {t("of")} {count}
        </span>
      </div>
    </div>
  );
}
