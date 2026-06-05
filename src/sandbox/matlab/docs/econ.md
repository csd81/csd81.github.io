# Econ Toolbox Reference

| Implemented | Function | Description |
| :---: | :--- | :--- |
| ✅ | `adftest` | Augmented Dickey-Fuller test for a unit root (Model `AR`/`ARD`/`TS`, Test `t1`/`t2`; numeric vector input) |
|   | `pptest` | Phillips-Perron test for a unit root |
|   | `kpsstest` | KPSS test for stationarity |
|   | `lmctest` | Leybourne-McCabe stationarity test |
|   | `vratiotest` | Variance ratio test |

Notes: `adftest` supports the `t1` (standard) and `t2` (normalized-coefficient)
statistics with numeric vector data; the `F` test and table/timetable inputs are
not yet ported. Critical-value tables are taken verbatim from the MATLAB source.
