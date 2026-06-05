# Signal Processing Toolbox — validation

Computable subset (window functions, dB conversions, sinc/chirp/medfilt1). The Signal Toolbox is
not installed in the local MATLAB, and Octave's `signal` package is likewise absent — so core
windows were validated against **Octave core** (`hamming`/`hanning`/`blackman`/`bartlett`/`sinc`)
and the rest against their documented closed-form definitions.

| Function | Test | Sandbox | Octave core / closed-form |
|---|---|---|---|
| `hamming` | `hamming(5)` | `0.08 0.54 1 0.54 0.08` | Octave `0.08 0.54 1 0.54 0.08` ✓ |
| `hann`/`hanning` | `hann(5)` | `0 0.5 1 0.5 0` | Octave `0 0.5 1 0.5 0` ✓ |
| `blackman` | `blackman(5)` | `-1.4e-17 0.34 1 0.34 -1.4e-17` | Octave identical ✓ |
| `bartlett` | `bartlett(5)` | `0 0.5 1 0.5 0` | Octave `0 0.5 1 0.5 0` ✓ |
| `sinc` | `sinc([0 0.5 1])` | `1 0.6366 ~0` | Octave `1 0.63662 ~0` ✓ |
| `triang` | `triang(5)` | `0.333 0.667 1 0.667 0.333` | def `1-|2n-L-1|/(L+1)` (odd L) ✓ |
| `kaiser` | `kaiser(5,6)` | `0.0149 0.483 1 0.483 0.0149` | def `I0(β√(1-r²))/I0(β)`, r=2n/N-1 ✓ |
| `gausswin` | `gausswin(5)` | `0.0439 0.4578 1 0.4578 0.0439` | def `exp(-½(α·x)²)`, α=2.5 ✓ |
| `mag2db`/`db2mag` | `mag2db(10)`,`db2mag(20)` | 20, 10 | `20log10`, `10^(/20)` ✓ |
| `pow2db`/`db2pow` | `pow2db(100)` | 20 | `10log10` ✓ |
| `medfilt1` | `medfilt1([2 80 6 3],3)` | `2 6 6 3` | zero-padded centered median ✓ |
| `chirp` | linear sweep | — | `cos(2π(f0·t+½βt²))` ✓ |

**Implemented:** `rectwin`, `hann`/`hanning`, `hamming`, `blackman`, `blackmanharris`,
`nuttallwin`, `flattopwin`, `bartlett`, `triang`, `barthannwin`, `gausswin`, `kaiser`,
`tukeywin` (all with `'periodic'`/`'symmetric'` option where applicable); `mag2db`/`db2mag`/
`pow2db`/`db2pow`; `sinc`, `chirp`, `medfilt1`. Cosine-sum windows (blackmanharris/nuttallwin/
flattopwin/barthannwin) use the documented MathWorks coefficient sets.

**Deferred:** filter design/analysis (`butter`/`cheby`/`freqz`/`filter`-objects), `spectrogram`/
`pwelch`, `findpeaks`, `resample` — larger DSP pieces for a later pass. Names that are already
base MATLAB (`corrcoef`, `cov`, `unwrap`, `ifftshift`, `filloutliers`) are intentionally left to
base (base precedence).

## Filter design & analysis (added)

| Function | Test | Sandbox | Formula reference (base MATLAB) |
|---|---|---|---|
| `freqz` | `abs(freqz([1 1],1,4))` | `2 1.8478 1.4142 0.7654` | `|1+e^{-jw}|` ✓ |
| `freqz` (w) | `[~,w]=freqz([1 1],1,4)` | `0 .7854 1.5708 2.3562` | `(0:3)·π/4` ✓ |
| `fir1` | `fir1(2,0.5)` | `0.0462 0.9076 0.0462` | windowed-sinc·Hamming, DC-normalized = `0.046221 0.90756 0.046221` ✓ |
| `fir1` (gain) | `sum(fir1(20,0.3))` | `1.0000` | unity DC gain ✓ |
| `freqs` | `abs(freqs(1,[1 1],[0 1 10]))` | `1 0.7071 0.0995` | `|1/(jw+1)|` ✓ |

`freqz`/`freqs` return complex responses (over `w∈[0,π)` for `freqz`); `fir1` is a lowpass
windowed-sinc design (Hamming window, scaled to unity passband gain).
