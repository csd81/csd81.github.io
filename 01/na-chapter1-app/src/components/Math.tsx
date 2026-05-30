import { useMemo } from 'react'
import katex from 'katex'

interface TexProps {
  children: string
  block?: boolean
}

export function Tex({ children, block = false }: TexProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(children, {
        displayMode: block,
        throwOnError: false,
        output: 'html',
      })
    } catch {
      return children
    }
  }, [children, block])

  if (block) {
    return <div className="katex-display-wrap" dangerouslySetInnerHTML={{ __html: html }} />
  }
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}
