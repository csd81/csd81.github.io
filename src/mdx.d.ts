declare module '*.mdx' {
  import type { ComponentType } from 'react';
  export const frontmatter: { title: string; order: number; summary: string };
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
