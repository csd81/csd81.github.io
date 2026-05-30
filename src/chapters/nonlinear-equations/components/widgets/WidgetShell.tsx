import type { ReactNode } from 'react'

interface WidgetShellProps {
  /** controls column (inputs, sliders, presets) */
  controls: ReactNode
  /** visual column (usually a <Mafs> plot) */
  plot: ReactNode
  /** optional full-width footer (status line, iterate table) */
  footer?: ReactNode
}

/**
 * Shared two-column frame for the chapter-2 widgets: controls on the left, the
 * Mafs visualization on the right, an optional full-width footer underneath.
 * Mirrors the layout the original CobwebPlot used so every widget looks alike.
 */
export function WidgetShell({ controls, plot, footer }: WidgetShellProps) {
  return (
    <div className="my-6 rounded-lg border border-ink-200 dark:border-ink-800 p-4 not-prose">
      <div className="grid md:grid-cols-2 gap-4">
        <div>{controls}</div>
        <div>{plot}</div>
      </div>
      {footer && <div className="mt-3">{footer}</div>}
    </div>
  )
}

/** A labelled number input used across the widgets. */
export function NumberField({
  label,
  value,
  onChange,
  step = 0.01,
  min,
  max,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  step?: number
  min?: number
  max?: number
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="number"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-3 py-2 font-mono text-sm"
      />
    </div>
  )
}

/** A labelled range slider returning a number. */
export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
  suffix?: string
}) {
  return (
    <div className="mt-2">
      <label className="block text-sm font-medium mb-1">
        {label}: <span className="font-mono">{value}{suffix}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--brand-500)]"
      />
    </div>
  )
}
