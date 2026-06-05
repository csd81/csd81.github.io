# Control System Toolbox — validation

LTI models (`tf`/`ss`/`zpk`) are generic `ClassV` objects; algebraic analysis + conversions
validated against the live Control System Toolbox.

| Function | Test | Sandbox | MATLAB |
|---|---|---|---|
| `tf` | `class(tf([1],[1 1]))` | `tf` | `tf` ✓ |
| `pole` | `pole(tf([1],[1 3 2]))` | `[-2;-1]` | `[-2;-1]` ✓ |
| `pole` (complex) | `pole(tf([1],[1 2 5]))` | `[-1-2i;-1+2i]` | exact ✓ |
| `zero` | `zero(tf([1 0],[1 3 2]))` | `0` | `0` ✓ |
| `dcgain` | `dcgain(tf([2],[1 4]))` | `0.5` | `0.5` ✓ |
| `isstable` | `isstable(tf([1],[1 3 2]))` / `[1 -1]` | `true` / `false` | ✓ |
| `tf2zp` | `[z,p,k]=tf2zp([1 0],[1 3 2])` | `p=[-2;-1]`, `k=1` | ✓ |
| `zp2tf` | `zp2tf([0]',[-1;-2],1)` | `num=[0 1 0]`, `den=[1 3 2]` | ✓ |

**Implemented:** `tf`/`ss`/`zpk` (ClassV LTI models), `pole`/`zero`/`dcgain`/`isstable`,
`tf2zp`/`zp2tf`. Roots via Durand-Kerner; poles/zeros sorted ascending (real, then imag) to match
MATLAB. **Deferred (next pass):** `tf2ss`/`ss2tf`, `damp`, time/freq responses (`step`/`impulse`/
`bode`/`margin`), interconnections (`series`/`feedback`).
