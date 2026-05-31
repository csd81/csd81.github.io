import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { normalizeMath } from "../../../shared/ui/normalizeMath";

// Renders converted markdown with KaTeX math and GFM tables.
export default function MarkdownView({ markdown }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, [rehypeKatex, { throwOnError: false, strict: false }]]}
      >
        {normalizeMath(markdown || "")}
      </ReactMarkdown>
    </div>
  );
}
