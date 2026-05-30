import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export function Tex({ children, block = false }: { children: string; block?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, {
        throwOnError: false,
        displayMode: block,
      });
    }
  }, [children, block]);
  return <span ref={ref} className={block ? "tex-block" : "tex-inline"} />;
}
