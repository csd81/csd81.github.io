import { useMemo } from "react";
import katex from "katex";

interface Props {
  children: string;
  block?: boolean;
}

/** Renders a KaTeX expression. `children` is the TeX source string. */
export default function Math({ children, block = false }: Props) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(children, {
        displayMode: block,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return children;
    }
  }, [children, block]);

  return block ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  );
}
