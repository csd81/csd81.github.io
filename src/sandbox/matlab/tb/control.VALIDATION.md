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

## Part 2 + OOP method dispatch (validated vs live MATLAB)

| Function | Test | Result |
|---|---|---|
| `tf2ss` | `tf2ss([1 2],[1 3 2])` | `A=[-3 -2;1 0]`, `C=[1 2]` ✓ |
| `ss2tf` | round-trip of the above | `num=[0 1 2]`, `den=[1 3 2]` ✓ |
| `damp` | `damp(tf([1],[1 2 5]))` | `wn=[2.2361 2.2361]`, `ζ=[0.4472 0.4472]` ✓ |
| `ctrb` | `ctrb([1 1;0 2],[1;1])` | `[1 2;1 2]` ✓ |
| `obsv` | `obsv([1 1;0 2],[1 0])` | `[1 0;1 1]` ✓ |
| `dsort` | `dsort([0.5 -0.9 0.1])` | `[-0.9;0.5;0.1]` (by |·|) ✓ |
| `esort` | `esort([-1 -3 -2])` | `[-1;-2;-3]` (by Re) ✓ |
| `parallel` | `dcgain(parallel(tf(1,[1 1]),tf(1,[1 2])))` | `1.5` ✓ |
| `feedback` | `pole(feedback(tf(1,[1 1]),1))` | `-2` ✓ |
| `order` | `order(tf([1],[1 3 3 1]))` | `3` ✓ |
| `series` (OOP) | `series(tf(1,[1 1]),tf(1,[1 2]))` | poles `[-2 -1]` (Control) ✓ |
| `series` (OOP) | `series(sin(x),x,0,6)` | `x - x³/6 + x⁵/120` (Symbolic, unaffected) ✓ |

**OOP method dispatch:** `series` is owned by both Control (LTI cascade) and Symbolic (Taylor).
The framework now resolves this MATLAB-style — a call whose **first argument's class** has a
registered method routes there (`series(tf,…)`→Control), otherwise the global builtin runs
(`series(sym,…)`→Symbolic). Implemented via `ToolboxModule.methods` (className→fn) + `TOOLBOX_METHODS`
in `tb/index.ts` + a dispatch hook in `interp.ts`.
