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

## Spatial filtering (added)

| Function | Test | Sandbox | Reference |
|---|---|---|---|
| `fspecial` | `fspecial('sobel')` | `[1 2 1;0 0 0;-1 -2 -1]` | MATLAB exact ✓ |
| `fspecial` | `fspecial('average',3)` | all `1/9` | ✓ |
| `fspecial` | `fspecial('laplacian',0.2)` | `[.1667 .6667 .1667;…;-3.3333…]` | MATLAB exact ✓ |
| `imfilter` | `imfilter(magic(3),fspecial('average',3))` | `[1.8889 3.3333 2.1111;…]` | `conv2(A,rot90(h,2),'same')` exact ✓ |
| `imfilter` | `imfilter([1..9],fspecial('sobel'))` | `[-13 -20 -17;-18 -24 -18;13 20 17]` | exact ✓ |
| `imfilter` | replicate pad on `[1 2;3 4]` avg3 | `[2 2.333;2.667 3]` | by hand ✓ |

**Added:** `fspecial` (`average`/`gaussian`/`sobel`/`prewitt`/`laplacian`/`disk`), `imfilter`
(2-D correlation/convolution; boundary `0`/`replicate`/`circular`/`symmetric`, default corr+0-pad
+same — equals `conv2(A,rot90(h,2),'same')`), `imgaussfilt`. **Deferred:** `histeq`, `imresize`,
`imrotate`, `edge`, morphology.
