# Communications Toolbox — validation

Exactly-validatable integer/counting subset (Communications Toolbox not installed locally;
verified by definition — these are deterministic integer operations).

| Function | Test | Sandbox | Expected |
|---|---|---|---|
| `de2bi` | `de2bi(6)` | `0 1 1` | LSB-first 6=110→011 ✓ |
| `de2bi` | `de2bi([1 2 3])` | `[1 0;0 1;1 1]` | per-row, 2-bit ✓ |
| `de2bi` | `de2bi(6,4,'left-msb')` | `0 1 1 0` | MSB-first, 4-bit ✓ |
| `bi2de` | `bi2de([1 0 1])` | 5 | 1+0+4 ✓ |
| `bi2de` | `bi2de([1 0;0 1;1 1])` | `[1;2;3]` | per-row ✓ |
| `symerr` | `symerr([1 2 3 4],[1 0 3 0])` | `2, 0.5` | 2 mismatches / 4 ✓ |
| `biterr` | `biterr([1 2 3],[0 2 1])` | `2, 0.3333` | 2 bit diffs / (3·2) ✓ |
| `bin2gray` | `bin2gray(0:7)` | `0 1 3 2 6 7 5 4` | binary-reflected Gray ✓ |
| `gray2bin` | `gray2bin([0 1 3 2 6 7 5 4])` | `0..7` | inverse ✓ |

**Implemented:** `de2bi`, `bi2de` (base/MSB options), `symerr`, `biterr` (with rate), `bin2gray`,
`gray2bin` (integer binary-reflected Gray), plus `qammod`/`qamdemod`/`pskmod`/`pskdemod`/`marcumq`/
`finddelay` (see below — validated once MATLAB had the toolbox). **Deferred:** `awgn` (RNG won't
match); `hammgen`/coding objects (`rsenc`/`crc*`).

## Modulation/demodulation added (validated vs live MATLAB Communications Toolbox)

| Function | Test | Result |
|---|---|---|
| `qammod` | `qammod(0:3,4)` | `[-1+1i -1-1i 1+1i 1-1i]` ✓ |
| `qammod` | `qammod(0:15,16)` / `0:63,64` | matches MATLAB exactly (incl. M=64 first-4 `[-7+7i -7+5i -7+1i -7+3i]`) ✓ |
| `qamdemod` | `qamdemod(qammod(0:63,64),64)` | `0:63` (round-trip = MATLAB identity) ✓ |
| `pskmod` | `pskmod(0:3,4)` | `[1 i -i -1]`; psk8 matches ✓ |
| `pskdemod` | `pskdemod(pskmod(0:3,4),4)` | `0:3` ✓ |
| `marcumq` | `marcumq(1,2)` | `0.2690` (MATLAB 0.26901) ✓ |
| `finddelay` | `finddelay([0 0 1 2 3],[1 2 3 0 0])` | `-2` (and `2` reversed) ✓ |

`qammod` uses MATLAB's per-axis Gray levels `−(√M−1)+2·bin2gray(idx)` (no UnitAveragePower);
`pskmod` uses `exp(j·2π·gray2bin(x)/M)`; demods are nearest-constellation. `marcumq` via Simpson
integration of the Marcum integrand. **Deferred:** `apskmod`, `dpskmod`, coding (`rsenc`/`crc*`).
