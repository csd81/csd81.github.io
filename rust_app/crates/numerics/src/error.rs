//! Chapter 1 of Hartung, *Introduction to Numerical Analysis* — floating-point
//! error analysis, machine epsilon, and numerically-stable building blocks.
//!
//! The book teaches that *correct formula* and *good computer formula* are not
//! always the same thing. This module provides the small utilities the chapter
//! motivates, plus stable rewrites of the canonical loss-of-significance
//! examples, with tests that demonstrate the unstable behaviour they fix.

/// Compute machine epsilon experimentally — the smallest power of 2 such that
/// `1.0 + ε > 1.0` in the current floating-point arithmetic (Hartung §1.2).
///
/// For IEEE 754 `f64` this returns `2^-52 = 2.220446049250313e-16`,
/// matching `f64::EPSILON`. Defined experimentally (rather than as a constant)
/// because the *experiment* is what the textbook exercises ask for.
pub fn machine_epsilon() -> f64 {
    let mut eps = 1.0_f64;
    while 1.0 + eps * 0.5 > 1.0 {
        eps *= 0.5;
    }
    eps
}

/// Absolute error `|approx - exact|` (Hartung §1.3).
#[inline]
pub fn abs_error(approx: f64, exact: f64) -> f64 {
    (approx - exact).abs()
}

/// Relative error `|approx - exact| / |exact|` (Hartung §1.3).
///
/// Returns `None` when `exact == 0` — absolute error is the only sensible
/// metric there, and the textbook is careful to define rel error only for
/// `x ≠ 0`.
#[inline]
pub fn rel_error(approx: f64, exact: f64) -> Option<f64> {
    if exact == 0.0 {
        None
    } else {
        Some((approx - exact).abs() / exact.abs())
    }
}

/// Number of significant *decimal* digits to which `approx` matches `exact`,
/// using the textbook's `|x - x̃|/|x| ≤ 0.5 · 10^(1-n)` criterion (Hartung §1.3).
///
/// Returns `0` when there is no agreement at all (or `exact == 0`).
pub fn exact_decimal_digits(approx: f64, exact: f64) -> u32 {
    let Some(d) = rel_error(approx, exact) else {
        return 0;
    };
    if d == 0.0 {
        // Use f64 mantissa precision as an upper bound.
        return 16;
    }
    // Find largest n with 0.5 · 10^(1-n) ≥ d, i.e. n ≤ 1 - log10(2d).
    let n = (1.0 - (2.0 * d).log10()).floor();
    if n.is_finite() && n >= 0.0 {
        n as u32
    } else {
        0
    }
}

/// Horner's method (Hartung Algorithm 1.5).
///
/// `coeffs = [a_n, a_{n-1}, ..., a_1, a_0]` — highest-degree coefficient
/// first. Evaluates `a_n·x^n + ... + a_1·x + a_0` with `n` multiplications
/// and `n` additions, vs. the `O(n²)` cost of the naive expansion.
pub fn horner(coeffs: &[f64], x: f64) -> f64 {
    let mut y = 0.0;
    for &c in coeffs {
        y = y * x + c;
    }
    y
}

/// Kahan compensated summation.
///
/// Not from Chapter 1 directly, but it is the canonical fix to the
/// "sum-order matters" pathology of Example 1.24 — the running total carries
/// a separate compensation term that accumulates the bits lost to rounding.
/// Cost is 4 flops per addend instead of 1, but the error grows like O(ε)
/// instead of O(n·ε).
pub fn kahan_sum(xs: &[f64]) -> f64 {
    let mut sum = 0.0_f64;
    let mut c = 0.0_f64; // compensation for lost low-order bits
    for &x in xs {
        let y = x - c;
        let t = sum + y;
        c = (t - sum) - y;
        sum = t;
    }
    sum
}

/// Plain left-to-right sum — the failure mode in Example 1.24.
pub fn naive_sum(xs: &[f64]) -> f64 {
    xs.iter().sum()
}

/// Sum after sorting by ascending magnitude — Hartung's recommendation in
/// §1.4: "in computing sums with several terms, it is advantageous to do the
/// computation in an increasing order of the terms."
pub fn sorted_sum(xs: &[f64]) -> f64 {
    let mut v: Vec<f64> = xs.to_vec();
    v.sort_by(|a, b| a.abs().partial_cmp(&b.abs()).unwrap_or(std::cmp::Ordering::Equal));
    v.iter().sum()
}

/// Numerically-stable `1 - cos(x)`. Naive evaluation loses ~half the digits
/// for small `x` because `cos(x) → 1`; the identity `1 - cos(x) = 2·sin²(x/2)`
/// avoids that subtraction.
#[inline]
pub fn one_minus_cos_stable(x: f64) -> f64 {
    let s = (0.5 * x).sin();
    2.0 * s * s
}

/// Stable quadratic formula (Hartung §1.4, eq. (1.3) and (1.4)).
///
/// Returns `(x1, x2)` for `a·x² + b·x + c = 0` with real coefficients. When
/// the discriminant is negative there are no real roots and we return
/// `(None, None)`. The formula avoids subtraction of nearly-equal numbers by
/// computing whichever root is "safe" with the standard form, then deriving
/// the other from Viète's relation `x1·x2 = c/a`.
pub fn quadratic_roots_stable(a: f64, b: f64, c: f64) -> (Option<f64>, Option<f64>) {
    if a == 0.0 {
        // Degenerate: linear b·x + c = 0.
        if b == 0.0 {
            return (None, None);
        }
        return (Some(-c / b), None);
    }
    let disc = b * b - 4.0 * a * c;
    if disc < 0.0 {
        return (None, None);
    }
    let sqrt_disc = disc.sqrt();
    // Pick the sign that *adds* magnitudes in the numerator (no cancellation):
    //   q = -(b + sign(b) · sqrt_disc) / 2
    // Then one root is q/a, the other is c/q (from Viète's x1·x2 = c/a).
    let q = if b == 0.0 {
        // Both roots are ±sqrt(-c/a); no cancellation regardless.
        0.5 * sqrt_disc
    } else {
        -0.5 * (b + b.signum() * sqrt_disc)
    };
    let x1 = q / a;
    let x2 = if q == 0.0 { 0.0 } else { c / q };
    (Some(x1), Some(x2))
}

/// Naive quadratic formula. Provided for comparison with
/// [`quadratic_roots_stable`] in the docs / tests — *do not* call this for
/// production work when `b² ≫ 4·a·c`.
pub fn quadratic_roots_naive(a: f64, b: f64, c: f64) -> (Option<f64>, Option<f64>) {
    if a == 0.0 {
        if b == 0.0 {
            return (None, None);
        }
        return (Some(-c / b), None);
    }
    let disc = b * b - 4.0 * a * c;
    if disc < 0.0 {
        return (None, None);
    }
    let s = disc.sqrt();
    (Some((-b + s) / (2.0 * a)), Some((-b - s) / (2.0 * a)))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn close(a: f64, b: f64, tol: f64) -> bool {
        (a - b).abs() <= tol
    }

    #[test]
    fn machine_epsilon_matches_f64() {
        let eps = machine_epsilon();
        // f64::EPSILON is 2^-52 ~ 2.22e-16; our experimental epsilon matches.
        assert!(close(eps, f64::EPSILON, 0.0), "got {eps:e}, want {:e}", f64::EPSILON);
        // And the defining property: 1 + eps > 1, but 1 + eps/2 == 1 (with default rounding).
        assert!(1.0 + eps > 1.0);
        assert_eq!(1.0 + eps * 0.5, 1.0);
    }

    #[test]
    fn abs_and_rel_error() {
        // Book Example 1.11: x = 1657.3, x_tilde = 1656.2.
        let x = 1657.3;
        let x_tilde = 1656.2;
        assert!(close(abs_error(x_tilde, x), 1.1, 1e-12));
        let r = rel_error(x_tilde, x).unwrap();
        assert!(close(r, 0.0006637, 1e-7));
    }

    #[test]
    fn rel_error_is_none_when_exact_is_zero() {
        assert_eq!(rel_error(1e-10, 0.0), None);
    }

    #[test]
    fn exact_digits_matches_book() {
        // Same example: rel error 6.637e-4 < 0.5e-3, so x̃ is exact in 3 digits.
        let n = exact_decimal_digits(1656.2, 1657.3);
        assert_eq!(n, 3);
        // x̃ = 1656.9 -> rel err 2.4e-4 < 0.5e-3, exact in 4 digits.
        let n = exact_decimal_digits(1656.9, 1657.3);
        assert_eq!(n, 4);
    }

    #[test]
    fn horner_matches_direct_evaluation() {
        // p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10 (Hartung Example 1.4)
        let coeffs = [5.0, -8.0, 2.0, 4.0, -10.0];
        for x in [-2.0_f64, -0.5, 0.0, 1.0, 1.5, 3.0] {
            let direct = 5.0 * x.powi(4) - 8.0 * x.powi(3) + 2.0 * x * x + 4.0 * x - 10.0;
            let h = horner(&coeffs, x);
            assert!(close(h, direct, 1e-10), "x={x}: horner={h}, direct={direct}");
        }
    }

    #[test]
    fn kahan_sum_beats_naive_on_worst_case() {
        // Classic torture sequence: large value + many tiny additions.
        // Naive left-to-right loses the tiny additions to rounding.
        let mut v = vec![1.0e16];
        v.extend(std::iter::repeat(1.0).take(10_000));
        let exact = 1.0e16 + 10_000.0;

        let n_err = (naive_sum(&v) - exact).abs();
        let k_err = (kahan_sum(&v) - exact).abs();

        // Naive loses everything: result is just 1e16.
        assert!(n_err >= 1.0, "expected naive sum to lose precision, got err {n_err:e}");
        // Kahan reconstructs the exact answer.
        assert_eq!(k_err, 0.0, "kahan_sum should be exact here, got err {k_err:e}");
    }

    #[test]
    fn sorted_sum_helps_when_terms_span_magnitudes() {
        // Same as above but reordered so the small numbers accumulate first.
        let mut v = vec![1.0e16];
        v.extend(std::iter::repeat(1.0).take(10_000));
        let exact = 1.0e16 + 10_000.0;

        // sorted_sum sorts ascending, so the 1.0s accumulate first, then add 1e16.
        let s_err = (sorted_sum(&v) - exact).abs();
        let n_err = (naive_sum(&v) - exact).abs();
        assert!(s_err < n_err, "sorted_sum should beat naive_sum: s={s_err:e}, n={n_err:e}");
    }

    #[test]
    fn one_minus_cos_stable_beats_naive_for_small_x() {
        // For very small x, naive 1 - cos(x) suffers catastrophic cancellation.
        // Exact value to high order: 1 - cos(x) ≈ x²/2 - x⁴/24.
        let x = 1.0e-8_f64;
        let exact = 0.5 * x * x - x.powi(4) / 24.0;

        let naive = 1.0 - x.cos();
        let stable = one_minus_cos_stable(x);

        let naive_err = (naive - exact).abs() / exact.abs();
        let stable_err = (stable - exact).abs() / exact.abs();

        // Stable variant should be vastly more accurate.
        assert!(stable_err < 1e-12, "stable err = {stable_err:e}");
        // Naive may lose so many digits that the result is unrecognizable.
        assert!(naive_err > 1e-3, "naive err = {naive_err:e} — expected much worse than stable");
    }

    /// Hartung Example 1.19 in spirit: when `b² ≫ 4ac`, the standard quadratic
    /// formula for the smaller root subtracts two nearly-equal numbers.
    #[test]
    fn quadratic_roots_stable_keeps_precision() {
        // Equation: x² - 1e8 · x + 1 = 0.  Exact roots ≈ 1e8 and 1e-8.
        let a = 1.0;
        let b = -1.0e8;
        let c = 1.0;

        let (n1, n2) = quadratic_roots_naive(a, b, c);
        let (s1, s2) = quadratic_roots_stable(a, b, c);

        // Big root is fine in both.
        let big = 1.0e8;
        for r in [n1.unwrap(), s1.unwrap(), s2.unwrap()] {
            if (r - big).abs() / big < 1e-6 {
                continue;
            }
            // It's the small root for this one — also fine if ~1e-8.
            assert!(r.abs() < 1.0, "unexpected root {r}");
        }

        // Compare the small-root accuracy: the *stable* implementation should
        // produce ~1e-8 with high relative accuracy; naive will be lossy.
        let stable_small = if s1.unwrap().abs() < 1.0 { s1.unwrap() } else { s2.unwrap() };
        let naive_small = if n1.unwrap().abs() < 1.0 { n1.unwrap() } else { n2.unwrap() };

        let stable_err = (stable_small - 1.0e-8).abs() / 1.0e-8;
        let naive_err = (naive_small - 1.0e-8).abs() / 1.0e-8;

        assert!(stable_err < 1e-12, "stable small-root err = {stable_err:e}");
        // Naive should be far worse — at least an order of magnitude.
        assert!(
            naive_err > stable_err * 1e3,
            "expected naive err >> stable err (naive={naive_err:e}, stable={stable_err:e})"
        );
    }

    /// Hartung Example 1.21 in spirit: `cos²(x) - sin²(x) = cos(2x)`.
    /// The book's 4-digit-arithmetic demo doesn't reproduce dramatically in
    /// f64 (the cancellation only costs ~7 digits, leaving plenty of headroom).
    /// What we *can* verify is the identity itself — both formulae agree at
    /// every test point — so the WASM UI can swap one for the other safely.
    #[test]
    fn cos_sq_minus_sin_sq_identity_holds() {
        for &x in &[0.0_f64, 0.1, 0.5, 1.0, std::f64::consts::FRAC_PI_4, 1.5, 2.0] {
            let naive = x.cos().powi(2) - x.sin().powi(2);
            let stable = (2.0 * x).cos();
            assert!(
                (naive - stable).abs() < 1e-12,
                "x={x}: naive={naive}, stable={stable}"
            );
        }
    }

    /// Hartung Example 1.3 — unstable recurrences for `1/3^n`.
    ///
    /// In *single* precision the book shows z_18 grows to ~10². In f64 we have
    /// far more precision, so all three sequences stay near 1/3^n through 18
    /// iterations. We instead verify the property that's universal across
    /// precisions: |z_n - 1/3^n| eventually outgrows |x_n - 1/3^n| because the
    /// unstable recurrence has rounding-error amplification by a factor of 3
    /// per step.
    #[test]
    fn unstable_recurrence_demonstrates_amplification() {
        // x_n = (1/3) x_{n-1};   x_0 = 1
        // z_n = (13/3) z_{n-1} - (4/3) z_{n-2};   z_0 = 1, z_1 = 1/3
        let mut x_prev = 1.0_f64;
        let mut z_prev2 = 1.0_f64;
        let mut z_prev = 1.0 / 3.0;
        // Compare at a larger n to let f64 rounding actually accumulate.
        for n in 1..=60 {
            let exact = (1.0 / 3.0_f64).powi(n);
            let x_n = x_prev / 3.0;
            let z_n = (13.0 / 3.0) * z_prev - (4.0 / 3.0) * z_prev2;
            x_prev = x_n;
            z_prev2 = z_prev;
            z_prev = z_n;
            if n == 60 {
                let x_err = (x_n - exact).abs();
                let z_err = (z_n - exact).abs();
                // The unstable recurrence's error must dwarf the stable one's.
                assert!(z_err > x_err * 1e6, "z_err={z_err:e}, x_err={x_err:e}");
            }
        }
    }
}
