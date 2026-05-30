import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

interface Props {
  markdown: string;
}

/** Render lesson markdown with GFM tables and KaTeX math. */
export default function MarkdownView({ markdown }: Props) {
  return (
    <div className="lesson">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, trust: true }]]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
