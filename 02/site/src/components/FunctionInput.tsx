import { useEffect, useState } from 'react'
import { validateScalar } from '~/lib/expression'

interface FunctionInputProps {
  label?: string
  initialExpr: string
  varName?: string
  onChangeValid?: (expr: string) => void
}

/**
 * Debounced input field for a math.js scalar expression.
 * Calls `onChangeValid` only when the expression parses and evaluates to a finite number.
 */
export function FunctionInput({
  label = 'f(x)',
  initialExpr,
  varName = 'x',
  onChangeValid,
}: FunctionInputProps) {
  const [text, setText] = useState(initialExpr)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      const err = validateScalar(text, varName)
      setError(err)
      if (!err && onChangeValid) onChangeValid(text)
    }, 200)
    return () => clearTimeout(t)
    // intentionally exclude onChangeValid from deps to avoid re-validation loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, varName])

  return (
    <div className="my-3">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}
