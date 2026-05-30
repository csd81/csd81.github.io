# Autonomous didactic-improvement loop — status

Persistent state for the Phase B loop. Read at each wake-up; rewrite at the
end. Plan reference: `/home/csd81/.claude/plans/dazzling-singing-moonbeam.md`.

## State

- **last_wake:** 2026-05-21T18:52:00Z   (iter 1 done inline before first wake)
- **pass:** 1
- **pass 1 complete** — every chapter has one didactic enhancement
- **pass 2 complete** — every chapter now has 2 didactic enhancements
- **pass 3 complete** — every chapter now has 3 didactic enhancements
- **next_iter:** 40  (pass 4 / ch10 · intuition_callout)
- **wakeups_completed:** 0
- **wakeups_max_before_pause:** 5

## Pattern catalogue

```
0. intuition_callout      — collapsible "Why this works" panel
1. step_trace             — expandable iteration table
2. pitfall_demo           — preset that fails, with explanation
3. convergence_visual     — log-error plot of empirical order
4. side_by_side           — two-algorithm comparison view
5. animation              — slider scrubbing iterations
6. formula_card           — annotated formula box
7. try_this               — challenge prompt with hint
8. cross_chapter_link     — surface reused primitives
9. worked_book_example    — exact Hartung Ex reproduced
```

## Chapter targets

```
1  ch1_error.rs       — error analysis & summation
2  ch2_roots.rs       — root finding
3  ch3_gauss.rs       — Gaussian elimination
4  ch4_iterative.rs   — Jacobi / Gauss-Seidel
5  ch5_factor.rs      — LU / Cholesky
6  ch6_interp.rs      — Lagrange / Newton / Hermite / splines
7  ch7_calculus.rs    — differentiation & integration
8  ch8_optimize.rs    — golden / simplex / Nelder-Mead / gradient / Newton
9  ch9_lsq.rs         — least squares
10 ch10_ode.rs        — IVP ODEs
```

## Maturity (patterns already applied per chapter)

```
ch1:  [intuition_callout, try_this, formula_card, cross_chapter_link]
ch2:  [step_trace, pitfall_demo, convergence_visual, intuition_callout]
ch3:  [pitfall_demo, animation, formula_card, intuition_callout]
ch4:  [convergence_visual, pitfall_demo, formula_card, intuition_callout]
ch5:  [side_by_side, pitfall_demo, intuition_callout, formula_card]
ch6:  [animation, intuition_callout, try_this, formula_card]
ch7:  [formula_card, intuition_callout, try_this, pitfall_demo]
ch8:  [try_this, convergence_visual, cross_chapter_link, intuition_callout]
ch9:  [cross_chapter_link, worked_book_example, pitfall_demo, intuition_callout]
ch10: [worked_book_example, animation, cross_chapter_link]
```

## Queue (next iterations)

Each iteration: chapter c, pattern catalogue[(pass + c) mod 10].

```
iter 1  →  ch1  ·  intuition_callout
iter 2  →  ch2  ·  step_trace
iter 3  →  ch3  ·  pitfall_demo
iter 4  →  ch4  ·  convergence_visual
iter 5  →  ch5  ·  side_by_side
iter 6  →  ch6  ·  animation
iter 7  →  ch7  ·  formula_card
iter 8  →  ch8  ·  try_this
iter 9  →  ch9  ·  cross_chapter_link
iter 10 →  ch10 ·  worked_book_example
```

## Safety rails (carried from plan)

- Never delete or rename a user-authored file.
- Compile after every change (`cargo check -p web`); on failure, revert and
  pick the next pattern.
- Hard cap: 5 wake-ups before pausing for user check-in.
- Loop stops as soon as the user sends a new message.

## Reference materials

Held in reserve, only opened when ideas run dry:

- `/home/csd81/Desktop/0sci/chapter_pdfs/` (13 chapters, IVP-ODEs and BVP-ODEs
  are 09 and 10)
- `/home/csd81/Desktop/Numerical_Analysis.pdf`

`references_consumed: []`

## History

- 2026-05-21 18:50  Ch10 (ODEs) shipped: numerics/src/ode.rs (4 methods + Taylor-2
  + system RK4, 11 tests) and crates/web/src/chapters/ch10_ode.rs (slope field,
  trajectories, error-vs-h, step tables, 5 presets). Tests: 231 pass. Trunk build OK.
- 2026-05-21 18:52  iter 1 / ch1 · intuition_callout: added collapsible
  "Why this chapter matters" panel at the top of ch1_error.rs with three
  one-liners (cancellation, summation order, unstable recurrence). `cargo
  check -p web` clean.
- 2026-05-21 18:55  iter 2 / ch2 · step_trace: enriched the iterate table
  in ch2_roots.rs with three columns (k, pₖ, |Δpₖ|, f(pₖ)) and a per-cell
  colour scale (green at ≤1e-10, amber to 1e-4, red beyond). Renamed
  collapsing header to "Step trace". `cargo check -p web` clean.
- 2026-05-21 18:58  iter 3 / ch3 · pitfall_demo: added a "Pitfall — why
  pivoting matters" collapsing callout above the strategy comparison in
  ch3_gauss.rs, plus a new "Pitfall (scaled beats partial)" preset
  ([[1, 1e5],[1, 1]] · x = [1e5, 2]) where scaled pivoting recovers 15
  digits and partial pivoting only ~10. `cargo check -p web` clean.
- 2026-05-21 19:00  iter 4 / ch4 · convergence_visual: added empirical
  contraction ratio panel (geometric mean of |Δx_{k+1}|/|Δx_k| over the
  tail) in ch4_iterative.rs. Prints ρ̂ for Jacobi and Gauss-Seidel side by
  side with colour zone (fast/ok/slow/diverges). Quantitative bridge to
  Thm 4.11/4.15. `cargo check -p web` clean.
- 2026-05-21 19:04  iter 5 / ch5 · side_by_side: added a
  `side_by_side_compare` scoreboard in ch5_factor.rs that, whenever both
  factorisations succeed, prints flops (2n³/3 vs n³/3), storage, solve
  cost, and det(A) computed two independent ways (LU pivot-sign product
  vs ∏Lᵢᵢ²). `cargo check -p web` clean.
- 2026-05-21 19:12  iter 7 / ch7 · formula_card: added an annotated
  composite Newton–Cotes formula card at the top of the integration view
  (orange=trapezoid, blue=Simpson, gold=h), with a tagline reminding the
  user that h-halving cuts trapezoid error 4× and Simpson 16×. `cargo
  check -p web` clean.
- 2026-05-21 21:02  iter 39 (pass 4) / ch9 · intuition_callout: added a
  "Why this chapter matters" callout to ch9_lsq.rs naming least squares
  as the bridge between Ch6 interpolation (noise-honest) and Ch8
  minimisation, with a one-liner on real-data ubiquity. `cargo check
  -p web` clean.
- 2026-05-21 20:58  iter 38 (pass 4) / ch8 · intuition_callout: added a
  "Why this chapter matters" panel to ch8_optimize.rs framing
  minimisation as root-finding for ∇f (Chapter 2 link) and contrasting
  derivative-free vs derivative-using flavours. `cargo check -p web`
  clean.
- 2026-05-21 20:55  iter 37 (pass 4) / ch7 · pitfall_demo: added a
  mode-aware pitfall callout to ch7_calculus.rs — Diff: round-off
  V-shape + complex-step alternative; NewtonCotes: smoothness needed for
  high order; Gauss: Bernstein-ellipse limitation, same Runge phenomenon
  as Lagrange. `cargo check -p web` clean.
- 2026-05-21 20:52  iter 36 (pass 4) / ch6 · formula_card: added a
  three-face Lagrange / Newton / cubic-spline formula card with colour
  coding to ch6_interp.rs. Names the Lagrange ↔ Newton same-polynomial
  observation and the spline as n glued cubics with C² continuity.
  `cargo check -p web` clean.
- 2026-05-21 20:48  iter 35 (pass 4) / ch5 · formula_card: added
  `formula_card_lu_chol` to ch5_factor.rs after intuition_callout. Shows
  P·A = L·U and A = L·Lᵀ side by side and the explicit Cholesky
  recursion that names why SPD is required (√(negative) failure mode).
  `cargo check -p web` clean.
- 2026-05-21 20:45  iter 34 (pass 4) / ch4 · intuition_callout: added a
  "Why this chapter matters" callout to ch4_iterative.rs framing the
  sparse-large-A motivation for iterative solvers and the conditioning
  theme. `cargo check -p web` clean.
- 2026-05-21 20:42  iter 33 (pass 4) / ch3 · intuition_callout: added a
  "Why this chapter matters" panel to ch3_gauss.rs distinguishing the
  textbook algorithm from the engineering (pivoting, conditioning) that
  separates a toy from a tool, and previewing Ch4 conditioning.
  `cargo check -p web` clean.
- 2026-05-21 20:38  iter 32 (pass 4) / ch2 · intuition_callout: added
  a "Why this chapter matters" panel to ch2_roots.rs explaining that
  root finding is the most-reused primitive (implicit ODE, line search,
  estimation) and naming the cost/order tradeoff that recurs in every
  later chapter. `cargo check -p web` clean.
- 2026-05-21 20:34  iter 31 (pass 4) / ch1 · cross_chapter_link: added
  "Where these errors come back" panel at the bottom of ch1_error.rs
  pointing forward to Ch3 4-digit catastrophe, Ch4 Hilbert, Ch7 forward
  difference V-shape, Ch9 polynomial overfit — all the same f64
  pitfalls in costume. `cargo check -p web` clean.
- 2026-05-21 20:30  iter 30 (pass 3) / ch10 · cross_chapter_link: added
  "Under the hood — what this reuses, what it enables" callout to the
  bottom of ch10_ode.rs main_view. Connects Taylor (Ch1), trapezoid/
  Simpson weights (Ch7), Newton for implicit methods (Ch2), and method-
  of-lines PDEs (Ch3 + Ch7 + Ch10). Closing remark: "you've now seen
  every ingredient of a real-world physics simulator". `cargo check -p
  web` clean.
- 2026-05-21 20:26  iter 29 (pass 3) / ch9 · pitfall_demo: added a
  "Pitfall — over-fit a linear trend" preset (12 points on y≈0.5x+noise
  + degree-10 polynomial) and a conditional callout that fires when the
  polynomial degree ≥ 8 or within 2 of n. Explains Hilbert-like
  conditioning and points at spline alternatives in Ch6. `cargo check
  -p web` clean.
- 2026-05-21 20:22  iter 28 (pass 3) / ch8 · cross_chapter_link: added a
  method-aware "Under the hood — what this reuses" callout to
  ch8_optimize.rs main view. Newton-min surfaces Ch7 numerical Hessian +
  Ch3 partial-pivot solve + Ch2 1D Newton; gradient methods surface Ch7
  gradient + nested Ch2 golden-section line search. `cargo check -p web`
  clean.
- 2026-05-21 20:18  iter 27 (pass 3) / ch7 · try_this: appended a
  mode-aware (Diff / NewtonCotes / Gauss) "Try this" cluster to
  ch7_calculus.rs; each mode has 2 challenges with hideable answers about
  V-shaped error, Simpson's degree-3 exactness, and Gauss-Legendre
  2n−1 exactness. `cargo check -p web` clean.
- 2026-05-21 20:14  iter 26 (pass 3) / ch6 · try_this: appended a
  three-question "Try this" cluster to ch6_interp.rs (where Runge
  oscillations live, why cos doesn't go Runge, step-function overshoot).
  Hideable answers via ui.ctx().data_mut. `cargo check -p web` clean.
- 2026-05-21 20:11  iter 25 (pass 3) / ch5 · intuition_callout: added a
  "Why this chapter matters" panel near the heading of ch5_factor.rs
  spelling out the amortisation argument (factor once at O(n³), solve
  later at O(n²)) with a concrete 1000× example, and the spillover into
  det/inverse/sensitivity analysis. `cargo check -p web` clean.
- 2026-05-21 20:08  iter 24 (pass 3) / ch4 · formula_card: added
  `formula_card_jacobi_gs` between the status strip and convergence plot
  in ch4_iterative.rs. Component-wise Jacobi vs Gauss–Seidel with blue =
  "old x", green = "newly-updated x", and a one-liner about ρ(B_GS) ≈
  ρ(B_J)² explaining the ~2× speed-up. `cargo check -p web` clean.
- 2026-05-21 20:05  iter 23 (pass 3) / ch3 · formula_card: added
  `formula_card_gauss` above the step slider in ch3_gauss.rs showing
  multiplier mᵢⱼ = aᵢⱼ / aⱼⱼ (cyan = multiplier, gold = pivot) and the
  row + rhs updates, with a one-line connection to the pivoting pitfall
  callout. `cargo check -p web` clean.
- 2026-05-21 20:02  iter 22 (pass 3) / ch2 · convergence_visual:
  augmented ch2_roots.rs convergence_plot with an empirical order q̂
  diagnostic — least-squares fit of log|eₖ₊₁| vs log|eₖ| over the tail.
  Prints q̂ alongside the theoretical expectation per method
  (bisection ≈1, secant ≈φ, Newton ≈2). `cargo check -p web` clean.
- 2026-05-21 19:58  iter 21 (pass 3) / ch1 · formula_card: added an
  annotated Kahan compensated summation formula card to ch1_error.rs
  between machine_epsilon_card and the cancellation experiment.
  Colour-coded sum (cyan), compensation c (gold), and y (white) with a
  one-line explanation of why total error becomes O(εₘ) instead of
  O(n·εₘ). `cargo check -p web` clean.
- 2026-05-21 19:55  iter 20 (pass 2) / ch10 · animation: added a
  "Animate h → 0" Play/Pause button to ch10_ode.rs that shrinks the step
  size geometrically by 0.7× every second (wrapping back to 0.5 at the
  bottom). The user watches the Euler trajectory snap onto the analytical
  curve in real time. `cargo check -p web` clean.
- 2026-05-21 19:52  iter 19 (pass 2) / ch9 · worked_book_example: added
  "Hartung textbook values (for verification)" reference card to
  ch9_lsq.rs listing the bit-for-bit expected coefficients for Ex
  9.2 / 9.4 / 9.5 / 9.6 so the user can flip presets and compare against
  the live banner. `cargo check -p web` clean.
- 2026-05-21 19:49  iter 18 (pass 2) / ch8 · convergence_visual:
  augmented the existing log₁₀ f vs k plot in ch8_optimize.rs with an
  empirical tail-slope strip that prints ρ̂ and a verdict
  (quadratic / fast linear / linear / very slow / diverging). Fits the
  second half of f_history so transient first iterates don't pollute the
  slope. `cargo check -p web` clean.
- 2026-05-21 19:46  iter 17 (pass 2) / ch7 · intuition_callout: added a
  "Why this chapter matters" callout to ch7_calculus.rs naming the
  truncation/round-off tradeoff (h^p vs ε/h) and explaining the V-shape
  visible in the diff tab. `cargo check -p web` clean.
- 2026-05-21 19:43  iter 16 (pass 2) / ch6 · intuition_callout: added a
  "Why this chapter matters" collapsing panel to ch6_interp.rs explaining
  three things — what interpolation IS, the polynomial-trap (Runge), and
  the cubic-spline cure. `cargo check -p web` clean.
- 2026-05-21 19:40  iter 15 (pass 2) / ch5 · pitfall_demo: added a
  "Cholesky fails on non-SPD" preset ([[1,2,3],[2,1,4],[3,4,1]] —
  symmetric but indefinite) and a conditional callout that explains the
  √(negative) failure mode and points to Sylvester's criterion / the
  AᵀA construction. `cargo check -p web` clean.
- 2026-05-21 19:37  iter 14 (pass 2) / ch4 · pitfall_demo: added a
  conditional "Pitfall — diagonal dominance lost" callout in
  ch4_iterative.rs that fires whenever `state.diag_dominant == false`.
  Explains Thm 4.11/4.15 silence on non-dominant A and suggests rescue
  strategies. `cargo check -p web` clean.
- 2026-05-21 19:34  iter 13 (pass 2) / ch3 · animation: added a Play /
  Pause button (▶▶ ⏸) to the elimination step bar in ch3_gauss.rs that
  auto-advances the step slider at 1 step/sec via
  `request_repaint_after`. Wraps back to 0 at the end for replay.
  `cargo check -p web` clean.
- 2026-05-21 19:31  iter 12 (pass 2) / ch2 · pitfall_demo: added a
  method-aware "Pitfall — …" collapsing callout to ch2_roots.rs (under
  the iterate table) that switches text based on the selected method:
  Bisection (always converges, linear rate), Newton (arctan / x³
  pathologies), Secant (φ-rate + nearly-horizontal secant), FixedPoint
  (|g'(p)| < 1 condition). `cargo check -p web` clean.
- 2026-05-21 19:28  iter 11 (pass 2) / ch1 · try_this: appended a three-
  question "Try this" cluster to ch1_error.rs with hideable answers for
  the cancellation, summation, and unstable-recurrence experiments. Uses
  ui.ctx().data_mut to persist the open-answer index across frames.
  `cargo check -p web` clean.
- 2026-05-21 19:25  iter 10 / ch10 · worked_book_example: added "Worked
  book example · Hartung Ex 10.1" collapsing panel under the Ch10 step
  tables. Only renders when the preset matches y'=y, t∈[0,1], h=0.1.
  Shows Hartung's tabulated (1.1)ⁿ vs e^tₙ for n=0..10. Trunk build OK.
- 2026-05-21 19:20  iter 9 / ch9 · cross_chapter_link: added "Under the
  hood — what this reuses" collapsing card to ch9_lsq.rs main view that
  varies by fit type: Line → closed-form normal equations; Polynomial →
  Ch3 `solve_partial_pivot` + Hilbert-conditioning warning; Exp/Power →
  Ch1 log identity. Wires the chapter graph together. `cargo check -p
  web` clean.
- 2026-05-21 19:16  iter 8 / ch8 · try_this: appended a "Try this" panel
  to ch8_optimize.rs main view with three open-ended challenges (huge
  gradient step, Nelder-Mead vs Newton, two-local-min golden section).
  Each has a hideable hint via a button; hint state persists via
  ui.ctx().data_mut. `cargo check -p web` clean.
- 2026-05-21 19:07  iter 6 / ch6 · animation: added Play/Pause button
  alongside the runge_n slider in ch6_interp.rs; the new
  `maybe_advance_animation` tick auto-cycles n=3..=21 at ~3 Hz with
  `request_repaint_after`, letting the user watch Runge oscillations
  develop while the spline stays calm. `cargo check -p web` clean.
