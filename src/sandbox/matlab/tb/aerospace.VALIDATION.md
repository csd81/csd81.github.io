# Aerospace Toolbox — validation

39 computable functions, every value cross-checked against **live MATLAB R2026a** (`matlab -batch`)
via an Interpreter harness (65 assertions total incl. Mapping). Conventions confirmed from the raw
`.m` source where ambiguous (`type quat2dcm`, …). Scalar-first `[w x y z]` quaternions; MATLAB
`quat2dcm` is the standard rotation-matrix form `DCM(1,2)=2(xy+wz)` (its `reshape(...,1,9)` is
column-major — misreading it as row-major yields the transpose).

## Unit conversions (SI factor tables; temperature affine)
| Fn | Check | Result |
|---|---|---|
| convlength | `convlength(1,'ft','m')` | 0.3048 ✓ |
| convvel | `convvel(1,'kts','m/s')` | 0.514444 ✓ |
| convmass | `convmass(1,'slug','kg')` | 14.593903 ✓ |
| convforce | `convforce(1,'lbf','N')` | 4.448222 ✓ |
| convpres | `convpres(1,'psi','Pa')` | 6894.757293 ✓ |
| convdensity | `convdensity(1,'lbm/ft^3','kg/m^3')` | 16.018463 ✓ |
| convacc | `convacc(1,'km/h-s','m/s^2')` | 0.277778 ✓ |
| convang | `convang(1,'rev','rad')` | 6.283185 ✓ |
| convangvel | `convangvel(1,'rpm','rad/s')` | 0.104720 ✓ |
| convangacc | `convangacc(1,'rpm/s','rad/s^2')` | 0.104720 ✓ |
| convtemp | `convtemp(0,'C','K')`, `convtemp(671.67,'R','F')`, `convtemp(300,'K','F')` | 273.15, 212, 80.33 ✓ |

(`convacc` has no `'G'` unit — MATLAB rejects it despite the doc artifact.)

## Quaternion algebra (q=[1 2 3 4], p=[2 3 4 5])
| Fn | Result |
|---|---|
| quatconj | `[1 -2 -3 -4]` ✓ |
| quatnorm | `30` (sum of squares, **not** its root) ✓ |
| quatmod | `5.477226` ✓ |
| quatinv | `[0.0333 -0.0667 -0.1 -0.1333]` ✓ |
| quatnormalize | `[0.18257 0.36515 0.54772 0.73030]` ✓ |
| quatmultiply | `[-36 6 12 12]` ✓ |
| quatdivide | `quatmultiply(inv(p),q)` = `[0.7407 0 0.0741 0.0370]` ✓ |
| quatrotate | `quatrotate(qn,[1 0 0])` = `[-0.6667 0.1333 0.7333]` (= DCM·v) ✓ |
| quat2dcm / dcm2quat | round-trips to `qn`; DCM matches MATLAB column-major ✓ |
| quat2rod / rod2quat | `[2 3 4]` / `rod2quat([.1 .2 .3])=[0.9366 0.0937 0.1873 0.2810]` ✓ |
| quatexp | `quatexp([0 .1 .2 .3])=[0.9308 0.0977 0.1954 0.2930]` ✓ |
| quatlog | `[0 0.5152 0.7728 1.0304]` ✓ |
| quatpower | `quatpower(qn,2)=[-0.9333 0.1333 0.2 0.2667]` ✓ |
| quatinterp | `slerp([1 0 0 0],qn,0.5)=[0.7690 0.2374 0.3561 0.4749]` ✓ |

## Rotations (default 'ZYX')
| Fn | Result |
|---|---|
| angle2quat | `angle2quat(.1,.2,.3)=[0.9833 0.1436 0.1060 0.0343]` ✓ |
| quat2angle | `[2.3562 -0.3398 1.4289]` ✓ |
| angle2dcm / dcm2angle | DCM matches MATLAB; round-trips to `[.1 .2 .3]` ✓ |
| angle2rod / rod2angle | `[0.1460 0.1078 0.0349]` / round-trips ✓ |
| rod2dcm / dcm2rod | DCM matches MATLAB; round-trips to `[.1 .2 .3]` ✓ |

## 1976 standard atmosphere
| Fn | Check | Result |
|---|---|---|
| atmosisa | `atmosisa(0)` | T=288.15, a=340.294, P=101325, ρ=1.225 ✓ |
| atmosisa | `atmosisa(11000)` | 216.65, 295.069, 22632.04, 0.363918 ✓ |
| atmosisa | `atmosisa(20000)` | 216.65, 295.069, 5474.878, 0.088035 ✓ |
| atmoscoesa | `atmoscoesa(0)` | matches atmosisa to <1e-5 ✓ |
| atmospalt | `atmospalt(101325)`, `atmospalt(54019.9)` | 0, 5000 ✓ |
