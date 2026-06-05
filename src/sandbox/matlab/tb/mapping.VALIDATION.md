# Mapping Toolbox — validation

Great-circle unit conversions on a sphere of mean Earth radius R = 6371 km. Validated vs live
Mapping Toolbox.

| Function | Test | Sandbox | MATLAB |
|---|---|---|---|
| `km2rad` | `km2rad(6371)` | `1` | `1` ✓ |
| `rad2km` | `rad2km(1)` | `6371` | `6371` ✓ |
| `deg2km` | `deg2km(1)` | `111.195` | `111.195` ✓ |
| `km2deg` | `km2deg(111.32)` | `1.00112` | `1.00112` ✓ |
| `deg2nm` | `deg2nm(1)` | `60` | `60` ✓ |

## Conversions + spherical geometry + wrapping (validated vs live Mapping Toolbox)

R = 6371 km, nautical mile = 1852 m, statute mile = 1609.3472186944 m (US survey).

| Fn | Check | Result |
|---|---|---|
| nm2km / km2nm | `nm2km(1)`, `km2nm(1)` | 1.852, 0.539957 ✓ |
| nm2sm / sm2nm | `nm2sm(1)`, `sm2nm(1)` | 1.150777, 0.868978 ✓ |
| km2sm / sm2km | `km2sm(1)`, `sm2km(1)` | 0.621370, 1.609347 ✓ |
| deg2sm / sm2deg | `deg2sm(1)`, `sm2deg(1)` | 69.093186, 0.014473 ✓ |
| nm2deg | `nm2deg(1)` | 0.016655 (≠ 1/deg2nm — MATLAB asymmetry) ✓ |
| rad2nm / nm2rad | `rad2nm(1)`, `nm2rad(1)` | 3440.064795, 0.000290692 ✓ |
| rad2sm / sm2rad | `rad2sm(1)`, `sm2rad(1)` | 3958.747948, 0.000252605 ✓ |
| distance | `distance(40,-70,51,0)` | arc=48.361895°, az=52.305237° ✓ |
| azimuth | `azimuth(40,-70,51,0)` | 52.305237° ✓ |
| reckon | `reckon(40,-70,1000/111.195,30)` | [47.611349, -63.342407] ✓ |
| departure | `departure(-70,0,40)` | 53.623111 ✓ |
| antipode | `antipode(45,-100)` | [-45, 80] ✓ |
| wrapTo180 | `[190 -190 180 -180 540 0]` | [-170 170 180 -180 180 0] ✓ |
| wrapTo360 | `[370 -10 360 0 720]` | [10 350 360 0 360] ✓ |
| wrapToPi | `[π+.1 -π-.1 π -π 0]` | [-3.0416 3.0416 π -π 0] ✓ |
| wrapTo2Pi | `[2π+.1 -.1 2π 0]` | [0.1 6.183185 2π 0] ✓ |
