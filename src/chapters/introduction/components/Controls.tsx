interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (v: number) => void
  format?: (v: number) => string
}

export function Slider({ label, value, min, max, step = 1, onChange, format }: SliderProps) {
  return (
    <div className="control-row">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <span className="readout" style={{ margin: 0, padding: '4px 10px', minWidth: 64, textAlign: 'right' }}>
        {format ? format(value) : value}
      </span>
    </div>
  )
}

interface SegmentedProps<T extends string> {
  label?: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}

export function Segmented<T extends string>({ label, value, options, onChange }: SegmentedProps<T>) {
  return (
    <div className="control-row">
      {label && <label>{label}</label>}
      <div className="seg" role="group">
        {options.map((o) => (
          <button
            key={o.value}
            className={o.value === value ? 'active' : ''}
            onClick={() => onChange(o.value)}
            aria-pressed={o.value === value}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}
