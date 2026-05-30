import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeKatex from 'rehype-katex';
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * GitHub Pages serves a user root page (csd81.github.io) as static files with no
 * SPA fallback: deep links like /linear-systems/lab 404 on refresh. Copying the
 * built index.html to 404.html makes Pages return the SPA shell for any unknown
 * path, after which the client router takes over.
 */
function pagesSpaFallback(): Plugin {
  return {
    name: 'pages-spa-fallback',
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      const index = resolve(dist, 'index.html');
      if (existsSync(index)) {
        copyFileSync(index, resolve(dist, '404.html'));
      }
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [
    // MDX must run before the React plugin (Chapter 2's content is .mdx with
    // KaTeX math and React widgets provided via MDXProvider).
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }],
          remarkMath,
          remarkGfm,
        ],
        rehypePlugins: [[rehypeKatex, { throwOnError: false, trust: true }]],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    pagesSpaFallback(),
  ],
  build: {
    chunkSizeWarningLimit: 1200,
  },
});
