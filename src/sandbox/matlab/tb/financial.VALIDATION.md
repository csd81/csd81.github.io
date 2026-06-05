# Financial Toolbox — validation

Closed-form subset. The Financial Toolbox is not installed locally, so each function was validated
against its defining formula computed in **base MATLAB** (no toolbox needed). All matched.

| Function | Test | Sandbox | Base-MATLAB closed form |
|---|---|---|---|
| `npv` | `npv(0.1,[-100 50 60])` | −4.9587 | `Σcf/(1+r)^t` = −4.95868 ✓ |
| `irr` | `irr([-100 50 60])` | 0.0639 | root of NPV = 0.063941 ✓ |
| `pvfix` | `pvfix(0.1,5,100)` | 379.0787 | `100·(1−1.1⁻⁵)/0.1` = 379.079 ✓ |
| `fvfix` | `fvfix(0.1,5,100)` | 610.5100 | `100·(1.1⁵−1)/0.1` = 610.51 ✓ |
| `payper` | `payper(0.1,5,1000)` | −263.7975 | annuity payment −263.797 ✓ |
| `effrr` | `effrr(0.1,4)` | 0.1038 | `(1+0.1/4)⁴−1` = 0.103813 ✓ |
| `nomrr` | `nomrr(0.10381,4)` | 0.1000 | `4((1+e)^¼−1)` = 0.09999 ✓ |
| `blsprice` (call) | `blsprice(50,50,0.1,0.25,0.3)` | 3.6104 | Black-Scholes 3.61045 ✓ |
| `blsprice` (put) | " | 2.3759 | 2.37594 ✓ |
| `blsdelta` (call) | `blsdelta(50,50,0.1,0.25,0.3)` | 0.5955 | `N(d1)` = 0.595481 ✓ |

**Implemented:** `npv`, `pvvar`, `fvvar`, `irr`, `pvfix`, `fvfix`, `payper`, `annuity`, `effrr`,
`nomrr`, `blsprice` (call+put), `blsdelta`. Black-Scholes uses an A&S-7.1.26 `erf` (≈1.5e-7,
ample for option prices). **Deferred:** bond pricing (`bndprice`/`bndyield`), date functions,
portfolio/risk objects.
