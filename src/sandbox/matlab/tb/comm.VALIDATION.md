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
`gray2bin` (integer binary-reflected Gray). **Deferred:** constellation modems (`qammod`/`pskmod`
and demods) — their Gray symbol mapping/scaling is hard to match without the toolbox; `awgn`
(RNG won't match); `hammgen`/coding objects.
