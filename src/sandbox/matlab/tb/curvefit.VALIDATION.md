# Curve Fitting Toolbox — validation

`fit`/`fittype`/`polyfit`/`spline` are already base. Added here:

| Function | Test | Result |
|---|---|---|
| `smooth` | `smooth([1 2 100 4 5])` | `[1 34.33 22.4 36.33 5]` (moving avg, shrinking-window edges) ✓ |
| `datastats` | `datastats([1 2 3 4 100]')` | struct `num=5,max=100,min=1,mean=22,median=3,range=99,std=43.6177` — exact vs live MATLAB ✓ |
