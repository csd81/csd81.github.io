import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import matlab from 'react-syntax-highlighter/dist/esm/languages/prism/matlab';
import julia from 'react-syntax-highlighter/dist/esm/languages/prism/julia';
import rust from 'react-syntax-highlighter/dist/esm/languages/prism/rust';
import fortran from 'react-syntax-highlighter/dist/esm/languages/prism/fortran';
import wolfram from 'react-syntax-highlighter/dist/esm/languages/prism/wolfram';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go';
import r from 'react-syntax-highlighter/dist/esm/languages/prism/r';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../providers/ThemeProvider';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('matlab', matlab);
SyntaxHighlighter.registerLanguage('julia', julia);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('fortran', fortran);
SyntaxHighlighter.registerLanguage('wolfram', wolfram);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('r', r);

/** Our language ids → Prism grammar names. */
export type CodeLang =
  | 'matlab' | 'python' | 'cpp' | 'julia' | 'rust' | 'fortran' | 'wolfram' | 'javascript' | 'go' | 'r';
const PRISM: Record<string, string> = {
  matlab: 'matlab',
  python: 'python',
  cpp: 'cpp',
  julia: 'julia',
  rust: 'rust',
  fortran: 'fortran',
  wolfram: 'wolfram',
  javascript: 'javascript',
  go: 'go',
  r: 'r',
};

/**
 * Single source of truth for syntax highlighting (used by CodeTabs and by the
 * markdown code-fence renderer). Light/dark theme follows the shared
 * ThemeProvider. Registers only the three languages we ship to keep the bundle
 * small.
 */
export function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const { theme } = useTheme();
  const style = theme === 'dark' ? oneDark : oneLight;
  return (
    <SyntaxHighlighter
      language={PRISM[lang] ?? 'text'}
      style={style}
      customStyle={{
        margin: 0,
        borderRadius: 0,
        background: 'transparent',
        fontSize: '0.86rem',
        padding: '14px 16px',
      }}
      codeTagProps={{ style: { fontFamily: 'var(--font-mono)' } }}
    >
      {code.replace(/\n+$/, '')}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
