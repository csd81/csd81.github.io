# Image Processing Toolbox — validation

Computable numeric subset (Image Processing Toolbox not installed locally; verified by definition
and known results). `rgb2gray`/`im2gray` were already base.

| Function | Test | Sandbox | Expected |
|---|---|---|---|
| `im2double` | `im2double(uint8([0 128 255]))` | `0 0.5020 1` | `/255` ✓ |
| `im2uint8` | `im2uint8([0 0.5 1])` | `0 128 255` | `round(255·x)` ✓ |
| `mat2gray` | `mat2gray([1 2 3 4 5])` | `0 .25 .5 .75 1` | `(x−min)/(max−min)` ✓ |
| `imcomplement` | `imcomplement([0 0.25 1])` | `1 0.75 0` | `1−x` ✓ |
| `graythresh` | `graythresh([0 0 0 1 1 1])` | `0.4980` | Otsu, mean-of-argmax tie-break (= MATLAB) ✓ |
| `imbinarize` | `imbinarize([.1 .4 .6 .9],0.5)` | `0 0 1 1` | `x>level` ✓ |
| `rgb2ycbcr` | `round(rgb2ycbcr([1 1 1])·255)` | `235 128 128` | BT.601 studio range ✓ |

**Implemented:** `im2double`, `im2uint8`, `im2uint16`, `mat2gray`, `imcomplement`, `imadjust`
(explicit limits + gamma), `graythresh` (Otsu, MATLAB tie-break), `imbinarize`, `rgb2ycbcr`,
`ycbcr2rgb`. **Deferred:** spatial filters (`imfilter`/`imgaussfilt`), `imresize`/`imrotate`,
`histeq`, `edge`, morphology — larger pieces for a later pass.
