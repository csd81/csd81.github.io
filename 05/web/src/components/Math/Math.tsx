import { useMemo } from "react";
import katex from "katex";

interface MathProps {
  tex: string;
  display?: boolean;
  className?: string;
}

/** Render a single KaTeX expression. */
export function Math({ tex, display = false, className }: MathProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false,
        output: "htmlAndMathml",
      });
    } catch {
      return tex;
    }
  }, [tex, display]);

  return (
    <span
      className={className}
      style={display ? { display: "block" } : undefined}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * Render mixed prose containing inline math delimited by `$...$`.
 * Also supports simple *emphasis* using single asterisks.
 */
export function RichText({ text }: { text: string }) {
  const nodes = useMemo(() => parseRich(text), [text]);
  return <>{nodes}</>;
}

function parseRich(text: string) {
  // split on $...$ math segments
  const out: React.ReactNode[] = [];
  const regex = /\$([^$]+)\$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) out.push(...emphasize(text.slice(last, m.index), key++));
    out.push(<Math key={`m${key++}`} tex={m[1]} />);
    last = regex.lastIndex;
  }
  if (last < text.length) out.push(...emphasize(text.slice(last), key++));
  return out;
}

function emphasize(chunk: string, baseKey: number): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(chunk)) !== null) {
    if (m.index > last) parts.push(chunk.slice(last, m.index));
    parts.push(<em key={`e${baseKey}-${key++}`}>{m[1]}</em>);
    last = regex.lastIndex;
  }
  if (last < chunk.length) parts.push(chunk.slice(last));
  return parts.length ? parts : [chunk];
}
