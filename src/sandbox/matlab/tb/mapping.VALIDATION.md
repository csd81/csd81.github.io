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
