import { useEffect, useRef, useState } from "react";

/**
 * Tracks which "step" element is currently active as the user scrolls.
 * Returns a ref to attach to the steps container, the active index, and a
 * registrar to attach to each step element.
 */
export function useScrollama(count: number) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, count);
    const obs = new IntersectionObserver(
      (entries) => {
        // pick the entry whose center is closest to the viewport's trigger line
        let best: { idx: number; ratio: number } | null = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const idx = Number((e.target as HTMLElement).dataset.step);
          if (!best || e.intersectionRatio > best.ratio)
            best = { idx, ratio: e.intersectionRatio };
        }
        if (best) setActive(best.idx);
      },
      {
        // trigger band around the upper-middle of the viewport
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [count]);

  const register = (idx: number) => (el: HTMLElement | null) => {
    stepRefs.current[idx] = el;
  };

  return { active, register };
}
