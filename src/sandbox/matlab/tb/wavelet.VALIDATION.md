# Wavelet Toolbox — validation

Wavelet Toolbox not installed locally (nor Octave's). `dct`/`idct` are exact and were validated
against an orthonormal DCT-II computed in base MATLAB; the Haar/Daubechies DWT is an orthonormal
filter bank, so it was validated by hand (Haar pairing) and by **perfect reconstruction**.

| Function | Test | Sandbox | Reference |
|---|---|---|---|
| `dct` | `dct([1 2 3 4])` | `5 -2.2304 ~0 -0.1585` | base-MATLAB DCT-II `5 -2.23044 ~0 -0.158513` ✓ |
| `idct` | `idct(dct([1 2 3 4]))` | `1 2 3 4` | perfect reconstruction ✓ |
| `dwt`/haar | `dwt([1 2 3 4],'haar')` | `cA=[2.1213 4.9497]`, `cD=[-0.7071 -0.7071]` | `(x₀±x₁)/√2`, `(x₂±x₃)/√2` ✓ |
| `idwt`/haar | `idwt(dwt([1..8]))` | `1 2 3 4 5 6 7 8` | perfect reconstruction ✓ |
| `dwt`/`idwt` db2 | round-trip `[1..8]` | `1 2 3 4 5 6 7 8` | perfect reconstruction ✓ |
| `wavedec`/`waverec` | 3-level haar round-trip | original recovered | perfect reconstruction ✓ |

**Implemented:** `dct`/`idct` (orthonormal DCT-II, MATLAB-compatible), `dwt`/`idwt`
(single-level, wavelets `haar`/`db1`/`db2`, **periodic** extension), `wavedec`/`waverec`
(multilevel). The DWT uses the even-shift periodic convention so Haar gives the standard
`(x₂ₖ,x₂ₖ₊₁)` pairing and the analysis/synthesis pair is an exact transpose (perfect
reconstruction). **Deferred:** `cwt`, `wpdec`/`wprec`, `wdenoise`, `haart`/`ihaart`, longer
Daubechies/Symlet/Coiflet families, and non-periodic ('sym'/'zpd') boundary modes.

## Haar transform (haart/ihaart, added)

| Test | Sandbox | Reference |
|---|---|---|
| `[a,d]=haart([1 2 3 4])` | a=`5`, d={`[-0.7071 -0.7071]`, `-2`} | normalized Haar, full decomposition ✓ |
| `ihaart(haart([1..8]))` | `1 2 3 4 5 6 7 8` | perfect reconstruction ✓ |
| `haart([1 2 3 4],1)` | a=`[2.1213 4.9497]`, d=`[-0.7071 -0.7071]` | single-level Haar ✓ |
| `ihaart` (single level) | `1 2 3 4` | perfect reconstruction ✓ |

`haart`/`ihaart` use the normalized Haar (`(x₂ₖ±x₂ₖ₊₁)/√2`); multilevel detail `d` is a cell
array (finest first), a vector for single-level — matching the MATLAB output shape.
