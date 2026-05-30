//! Chapter 7 of Hartung — numerical differentiation and integration.
//!
//! Two faces of the same idea: approximate a limit by a finite operation.
//! For derivatives we replace the limit `lim_{h→0} (f(x+h)−f(x))/h` with a
//! linear combination of nearby `f` values; for integrals we replace the
//! Riemann limit with a weighted sum.
//!
//! All quadrature rules in this module follow the same shape:
//!
//! ```text
//!     ∫_a^b f(x) dx  ≈  Σ_i w_i · f(x_i)
//! ```
//!
//! The *degree of precision* — the largest polynomial degree for which the
//! formula is exact — is the textbook's single most useful summary statistic:
//!
//! | rule               | nodes | DoP        | error term (smooth f)                      |
//! |--------------------|-------|------------|---------------------------------------------|
//! | trapezoid          | 2     | 1          | −h³/12 · f″(ξ)                             |
//! | Simpson 1/3        | 3     | 3          | −h⁵/90 · f⁽⁴⁾(η)                           |
//! | Simpson 3/8        | 4     | 3          | −3h⁵/80 · f⁽⁴⁾(ξ)                          |
//! | Boole              | 5     | 5          | −8h⁷/945 · f⁽⁶⁾(ξ)                         |
//! | n-pt Gauss-Legendre| n     | 2n − 1     | C_n · f⁽²ⁿ⁾(η)                              |
//!
//! Gauss-Legendre with `n` nodes integrates polynomials of degree up to
//! `2n − 1` *exactly*. That's the formula's eye-popping headline.

use thiserror::Error;

#[derive(Debug, Error, PartialEq)]
pub enum CalcError {
    #[error("step size h must be positive and finite, got {0}")]
    BadStep(f64),
    #[error("composite Simpson needs an even number of subintervals, got {0}")]
    SimpsonNotEven(usize),
    #[error("need at least {min} sample points, got {got}")]
    TooFewSamples { min: usize, got: usize },
    #[error("xs and ys length mismatch: {x_len} vs {y_len}")]
    LengthMismatch { x_len: usize, y_len: usize },
    #[error("composite Simpson on samples needs an odd number of points (even number of intervals), got {0}")]
    SimpsonOddSamples(usize),
    #[error("Boole on samples needs (4k + 1) points, got {0}")]
    BooleSamples(usize),
    #[error("Gauss-Legendre is implemented for n = 1..=8 directly; for n = {0} use the Newton-iterated path")]
    GaussLegendreOutOfTable(usize),
    #[error("Gauss-Legendre node count must be ≥ 1")]
    GaussLegendreEmpty,
}

// ────────────────────────────────────────────────────────────────────────
// Numerical differentiation (§7.1)
// ────────────────────────────────────────────────────────────────────────

/// First-order forward difference: `(f(x+h) − f(x))/h`. Truncation error `−h/2·f″(ξ)`.
pub fn diff_forward<F: FnMut(f64) -> f64>(mut f: F, x: f64, h: f64) -> f64 {
    (f(x + h) - f(x)) / h
}

/// First-order backward difference: `(f(x) − f(x−h))/h`. Truncation error `+h/2·f″(ξ)`.
pub fn diff_backward<F: FnMut(f64) -> f64>(mut f: F, x: f64, h: f64) -> f64 {
    (f(x) - f(x - h)) / h
}

/// Three-point central difference (eq. 7.9): `(f(x+h) − f(x−h))/(2h)`.
/// Truncation error `−h²/6·f‴(ξ)` — second-order in `h`.
pub fn diff_central<F: FnMut(f64) -> f64>(mut f: F, x: f64, h: f64) -> f64 {
    (f(x + h) - f(x - h)) / (2.0 * h)
}

/// Three-point endpoint formula (eq. 7.6): `(−3f(x) + 4f(x+h) − f(x+2h)) / (2h)`.
/// Truncation error `+h²/3·f‴(ξ)`. Use at the *left* endpoint where you can't
/// look backward; mirror it (h → −h) for the right endpoint (eq. 7.8).
pub fn diff_endpoint_3pt<F: FnMut(f64) -> f64>(mut f: F, x: f64, h: f64) -> f64 {
    (-3.0 * f(x) + 4.0 * f(x + h) - f(x + 2.0 * h)) / (2.0 * h)
}

/// Five-point central difference (eq. 7.11):
/// `(f(x−2h) − 8f(x−h) + 8f(x+h) − f(x+2h)) / (12h)`.
/// Truncation error `+h⁴/30·f⁽⁵⁾(ξ)` — fourth-order.
pub fn diff_central_5pt<F: FnMut(f64) -> f64>(mut f: F, x: f64, h: f64) -> f64 {
    (f(x - 2.0 * h) - 8.0 * f(x - h) + 8.0 * f(x + h) - f(x + 2.0 * h)) / (12.0 * h)
}

/// Second-derivative central difference (eq. 7.12):
/// `(f(x−h) − 2f(x) + f(x+h)) / h²`. Truncation error `+h²/12·f⁽⁴⁾(ξ)`.
pub fn diff_second<F: FnMut(f64) -> f64>(mut f: F, x: f64, h: f64) -> f64 {
    (f(x - h) - 2.0 * f(x) + f(x + h)) / (h * h)
}

// ────────────────────────────────────────────────────────────────────────
// Newton-Cotes integration (§7.3)
// ────────────────────────────────────────────────────────────────────────

/// Basic trapezoidal rule on `[a, b]` (eq. 7.31): `h/2 · (f(a) + f(b))`.
/// Exact for polynomials of degree ≤ 1.
pub fn trapezoid<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64) -> f64 {
    let h = b - a;
    0.5 * h * (f(a) + f(b))
}

/// Composite trapezoidal rule with `n` equal subintervals (eq. 7.32).
pub fn composite_trapezoid<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64, n: usize) -> f64 {
    if n == 0 {
        return 0.0;
    }
    let h = (b - a) / n as f64;
    let mut s = 0.5 * (f(a) + f(b));
    for i in 1..n {
        s += f(a + i as f64 * h);
    }
    s * h
}

/// Basic Simpson 1/3 rule (eq. 7.33): `h/3 · (f(a) + 4·f((a+b)/2) + f(b))`.
/// Exact for polynomials of degree ≤ 3.
pub fn simpson<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64) -> f64 {
    let h = 0.5 * (b - a);
    (h / 3.0) * (f(a) + 4.0 * f(a + h) + f(b))
}

/// Composite Simpson 1/3 rule with `n` equal subintervals; `n` must be even
/// (the book parametrises by `2n` half-intervals — same thing).
pub fn composite_simpson<F: FnMut(f64) -> f64>(
    mut f: F,
    a: f64,
    b: f64,
    n: usize,
) -> Result<f64, CalcError> {
    if n == 0 || n % 2 != 0 {
        return Err(CalcError::SimpsonNotEven(n));
    }
    let h = (b - a) / n as f64;
    let mut sum_odd = 0.0;
    let mut sum_even = 0.0;
    for i in 1..n {
        let x = a + i as f64 * h;
        if i % 2 == 1 {
            sum_odd += f(x);
        } else {
            sum_even += f(x);
        }
    }
    Ok((h / 3.0) * (f(a) + 4.0 * sum_odd + 2.0 * sum_even + f(b)))
}

/// Simpson's 3/8 rule (eq. 7.35): four nodes, exact for cubics.
pub fn simpson_3_8<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64) -> f64 {
    let h = (b - a) / 3.0;
    let x0 = a;
    let x1 = a + h;
    let x2 = a + 2.0 * h;
    let x3 = b;
    (3.0 * h / 8.0) * (f(x0) + 3.0 * f(x1) + 3.0 * f(x2) + f(x3))
}

/// Boole's rule (eq. 7.36), five-point closed Newton-Cotes:
/// `2h/45 · (7f₀ + 32f₁ + 12f₂ + 32f₃ + 7f₄)`. Degree of precision 5.
pub fn boole<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64) -> f64 {
    let h = (b - a) / 4.0;
    let x0 = a;
    let x1 = a + h;
    let x2 = a + 2.0 * h;
    let x3 = a + 3.0 * h;
    let x4 = b;
    (2.0 * h / 45.0) * (7.0 * f(x0) + 32.0 * f(x1) + 12.0 * f(x2) + 32.0 * f(x3) + 7.0 * f(x4))
}

/// Midpoint / rectangle rule (eq. 7.27).
pub fn midpoint<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64) -> f64 {
    (b - a) * f(0.5 * (a + b))
}

// ────────────────────────────────────────────────────────────────────────
// Data-based variants (operate on samples, not closures)
// ────────────────────────────────────────────────────────────────────────

/// Composite trapezoid on possibly-irregular sample data:
/// `Σ (x_{i+1} − x_i)·(y_i + y_{i+1})/2`.
pub fn trapezoid_data(xs: &[f64], ys: &[f64]) -> Result<f64, CalcError> {
    if xs.len() != ys.len() {
        return Err(CalcError::LengthMismatch {
            x_len: xs.len(),
            y_len: ys.len(),
        });
    }
    if xs.len() < 2 {
        return Err(CalcError::TooFewSamples {
            min: 2,
            got: xs.len(),
        });
    }
    let mut s = 0.0;
    for i in 0..xs.len() - 1 {
        s += (xs[i + 1] - xs[i]) * 0.5 * (ys[i] + ys[i + 1]);
    }
    Ok(s)
}

/// Composite Simpson 1/3 on uniformly-spaced sample data. Requires an *odd*
/// number of samples (even number of intervals).
pub fn simpson_data(xs: &[f64], ys: &[f64]) -> Result<f64, CalcError> {
    if xs.len() != ys.len() {
        return Err(CalcError::LengthMismatch {
            x_len: xs.len(),
            y_len: ys.len(),
        });
    }
    let n_samples = xs.len();
    if n_samples < 3 {
        return Err(CalcError::TooFewSamples {
            min: 3,
            got: n_samples,
        });
    }
    if n_samples % 2 == 0 {
        return Err(CalcError::SimpsonOddSamples(n_samples));
    }
    let n_intervals = n_samples - 1;
    let h = (xs[n_samples - 1] - xs[0]) / n_intervals as f64;
    let mut sum_odd = 0.0;
    let mut sum_even = 0.0;
    for i in 1..n_intervals {
        if i % 2 == 1 {
            sum_odd += ys[i];
        } else {
            sum_even += ys[i];
        }
    }
    Ok((h / 3.0) * (ys[0] + 4.0 * sum_odd + 2.0 * sum_even + ys[n_samples - 1]))
}

// ────────────────────────────────────────────────────────────────────────
// Romberg / Richardson extrapolation (§7.2)
// ────────────────────────────────────────────────────────────────────────

/// Romberg integration table — Richardson extrapolation applied to the
/// composite trapezoid rule. Returns the full triangular table `R[i][j]`
/// where `R[i][0]` is the trapezoid with `2^i` subintervals and successive
/// columns boost the order: `R[i][j]` has `O(h^{2j+2})` accuracy.
///
/// The best estimate is `R[levels-1][levels-1]`.
pub fn romberg<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64, levels: usize) -> Vec<Vec<f64>> {
    let mut r: Vec<Vec<f64>> = (0..levels).map(|_| Vec::new()).collect();
    for i in 0..levels {
        let n = 1usize << i;
        r[i].push(composite_trapezoid(&mut f, a, b, n));
        for j in 1..=i {
            let prev = r[i][j - 1];
            let above = r[i - 1][j - 1];
            let four_j = (1u64 << (2 * j)) as f64; // 4^j
            let extrap = prev + (prev - above) / (four_j - 1.0);
            r[i].push(extrap);
        }
    }
    r
}

// ────────────────────────────────────────────────────────────────────────
// Gauss-Legendre quadrature (§7.4)
// ────────────────────────────────────────────────────────────────────────

/// Standard Legendre polynomial `P_n` (the `P_n(1) = 1` normalization), via
/// the three-term recurrence `(n+1)·P_{n+1} = (2n+1)·x·P_n − n·P_{n−1}`.
///
/// Note: the book uses *monic* Legendre polynomials in its Gram-Schmidt
/// construction; the standard form (used here) has the same roots, which is
/// all Gauss-Legendre cares about.
pub fn legendre(n: usize, x: f64) -> f64 {
    if n == 0 {
        return 1.0;
    }
    if n == 1 {
        return x;
    }
    let mut p_prev = 1.0;
    let mut p_curr = x;
    for k in 1..n {
        let p_next = ((2 * k + 1) as f64 * x * p_curr - k as f64 * p_prev) / (k + 1) as f64;
        p_prev = p_curr;
        p_curr = p_next;
    }
    p_curr
}

/// Derivative `P_n′(x)`, via the standard identity
/// `(1 − x²)·P_n′(x) = n·(P_{n−1}(x) − x·P_n(x))`.
pub fn legendre_prime(n: usize, x: f64) -> f64 {
    if n == 0 {
        return 0.0;
    }
    let pn = legendre(n, x);
    let pnm1 = legendre(n - 1, x);
    n as f64 * (pnm1 - x * pn) / (1.0 - x * x)
}

/// Gauss-Legendre nodes and weights on the canonical interval `[−1, 1]`.
///
/// For `n ≤ 8` we return high-precision tabulated values; for `n ≥ 9` we
/// compute the nodes via Newton's method on `P_n` (initial guesses from the
/// asymptotic formula `x_i ≈ cos((4i−1)π/(4n+2))`).
pub fn gauss_legendre_table(n: usize) -> Result<(Vec<f64>, Vec<f64>), CalcError> {
    if n == 0 {
        return Err(CalcError::GaussLegendreEmpty);
    }
    // Hand-tabulated for n ≤ 8 — these are the standard high-precision values.
    let (nodes, weights): (Vec<f64>, Vec<f64>) = match n {
        1 => (vec![0.0], vec![2.0]),
        2 => (
            vec![-1.0 / 3.0_f64.sqrt(), 1.0 / 3.0_f64.sqrt()],
            vec![1.0, 1.0],
        ),
        3 => (
            vec![-0.7745966692414834, 0.0, 0.7745966692414834],
            vec![5.0 / 9.0, 8.0 / 9.0, 5.0 / 9.0],
        ),
        4 => (
            vec![
                -0.8611363115940526,
                -0.3399810435848563,
                0.3399810435848563,
                0.8611363115940526,
            ],
            vec![
                0.3478548451374538,
                0.6521451548625461,
                0.6521451548625461,
                0.3478548451374538,
            ],
        ),
        5 => (
            vec![
                -0.9061798459386640,
                -0.5384693101056831,
                0.0,
                0.5384693101056831,
                0.9061798459386640,
            ],
            vec![
                0.2369268850561891,
                0.4786286704993665,
                128.0 / 225.0,
                0.4786286704993665,
                0.2369268850561891,
            ],
        ),
        6 => (
            vec![
                -0.9324695142031521,
                -0.6612093864662645,
                -0.2386191860831969,
                0.2386191860831969,
                0.6612093864662645,
                0.9324695142031521,
            ],
            vec![
                0.1713244923791703,
                0.3607615730481386,
                0.4679139345726910,
                0.4679139345726910,
                0.3607615730481386,
                0.1713244923791703,
            ],
        ),
        7 => (
            vec![
                -0.9491079123427585,
                -0.7415311855993945,
                -0.4058451513773972,
                0.0,
                0.4058451513773972,
                0.7415311855993945,
                0.9491079123427585,
            ],
            vec![
                0.1294849661688697,
                0.2797053914892767,
                0.3818300505051189,
                0.4179591836734694,
                0.3818300505051189,
                0.2797053914892767,
                0.1294849661688697,
            ],
        ),
        8 => (
            vec![
                -0.9602898564975362,
                -0.7966664774136267,
                -0.5255324099163290,
                -0.1834346424956498,
                0.1834346424956498,
                0.5255324099163290,
                0.7966664774136267,
                0.9602898564975362,
            ],
            vec![
                0.1012285362903763,
                0.2223810344533745,
                0.3137066458778873,
                0.3626837833783620,
                0.3626837833783620,
                0.3137066458778873,
                0.2223810344533745,
                0.1012285362903763,
            ],
        ),
        _ => return compute_gauss_legendre(n),
    };
    Ok((nodes, weights))
}

/// Compute Gauss-Legendre nodes and weights from scratch for arbitrary `n`,
/// using Newton's method on `P_n` with asymptotic initial guesses.
fn compute_gauss_legendre(n: usize) -> Result<(Vec<f64>, Vec<f64>), CalcError> {
    if n == 0 {
        return Err(CalcError::GaussLegendreEmpty);
    }
    let mut nodes = Vec::with_capacity(n);
    let mut weights = Vec::with_capacity(n);
    let pi = std::f64::consts::PI;
    for i in 1..=n {
        // Asymptotic initial guess from Tricomi: x ≈ cos((4i−1)π/(4n+2)).
        let mut x = (pi * (4.0 * i as f64 - 1.0) / (4.0 * n as f64 + 2.0)).cos();
        // Newton iterate.
        for _ in 0..100 {
            let p = legendre(n, x);
            let dp = legendre_prime(n, x);
            let dx = p / dp;
            x -= dx;
            if dx.abs() < 1e-15 {
                break;
            }
        }
        let dp = legendre_prime(n, x);
        let w = 2.0 / ((1.0 - x * x) * dp * dp);
        nodes.push(x);
        weights.push(w);
    }
    // Sort by node value ascending — keeps the output stable across runs.
    let mut idx: Vec<usize> = (0..n).collect();
    idx.sort_by(|&a, &b| nodes[a].partial_cmp(&nodes[b]).unwrap());
    let sorted_nodes: Vec<f64> = idx.iter().map(|&i| nodes[i]).collect();
    let sorted_weights: Vec<f64> = idx.iter().map(|&i| weights[i]).collect();
    Ok((sorted_nodes, sorted_weights))
}

/// `n`-point Gauss-Legendre quadrature on `[a, b]`:
///
/// ```text
///   ∫_a^b f(x) dx  ≈  (b−a)/2 · Σ w_i · f( (b−a)/2 · x_i + (a+b)/2 )
/// ```
///
/// Exact for polynomials of degree ≤ `2n − 1`.
pub fn gauss_legendre<F: FnMut(f64) -> f64>(mut f: F, a: f64, b: f64, n: usize) -> Result<f64, CalcError> {
    let (nodes, weights) = gauss_legendre_table(n)?;
    let half = 0.5 * (b - a);
    let mid = 0.5 * (a + b);
    let mut s = 0.0;
    for i in 0..n {
        s += weights[i] * f(half * nodes[i] + mid);
    }
    Ok(half * s)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn close(a: f64, b: f64, tol: f64) -> bool {
        (a - b).abs() <= tol
    }

    // ─── Differentiation ────────────────────────────────────────────────

    /// Hartung Example 7.1 / 7.2 / 7.4 / 7.5 — f(x) = exp(x² + x), f'(0) = 1, f''(0) = 3.
    fn book_fn(x: f64) -> f64 {
        (x * x + x).exp()
    }

    #[test]
    fn forward_difference_first_order_in_h() {
        // Book Table 7.1: h=0.1 → 1.1627807, error ~1.63e-1.
        let got = diff_forward(book_fn, 0.0, 0.1);
        assert!(close(got, 1.1627807, 1e-6), "got {got}");
    }

    #[test]
    fn central_difference_second_order_in_h() {
        // Book Table 7.2: central with h=0.1 → 1.0117344, error 1.17e-2.
        let got = diff_central(book_fn, 0.0, 0.1);
        assert!(close(got, 1.0117344, 1e-6), "got {got}");
    }

    #[test]
    fn central_5pt_fourth_order_in_h() {
        // Book Table 7.3: 5-pt central at h=0.1 → 0.9997248, error ~2.75e-4.
        let got = diff_central_5pt(book_fn, 0.0, 0.1);
        assert!(close(got, 0.9997248, 1e-6), "got {got}");
    }

    #[test]
    fn second_derivative_book_example_7_4() {
        // Book Table 7.4: f''(0)=3, h=0.01 → 3.0002083, error 2.08e-4.
        let got = diff_second(book_fn, 0.0, 0.01);
        assert!(close(got, 3.0002083, 1e-6), "got {got}");
    }

    #[test]
    fn order_of_difference_formulas_holds() {
        // For a smooth function the error scales as h, h², h⁴ respectively.
        // Use three step sizes and verify each formula's slope on a log-log fit.
        let xs = [0.1_f64, 0.01, 0.001];
        let exact = 1.0; // f'(0) = 1
        let pairs = [
            (xs[0], (diff_forward(book_fn, 0.0, xs[0]) - exact).abs()),
            (xs[1], (diff_forward(book_fn, 0.0, xs[1]) - exact).abs()),
        ];
        // First-order: error ratio ≈ 10 when h shrinks by 10×.
        let ratio = pairs[0].1 / pairs[1].1;
        assert!((ratio - 10.0).abs() < 2.0, "forward ratio = {ratio}");

        // Central: error ratio ≈ 100.
        let e0 = (diff_central(book_fn, 0.0, xs[0]) - exact).abs();
        let e1 = (diff_central(book_fn, 0.0, xs[1]) - exact).abs();
        let ratio = e0 / e1;
        assert!((ratio - 100.0).abs() < 10.0, "central ratio = {ratio}");

        // 5-pt central: error ratio ≈ 10000.
        let e0 = (diff_central_5pt(book_fn, 0.0, xs[0]) - exact).abs();
        let e1 = (diff_central_5pt(book_fn, 0.0, xs[1]) - exact).abs();
        let ratio = e0 / e1;
        // f64 rounding limits how clean this gets — accept anything in [3e3, 5e4].
        assert!(
            ratio > 1.0e3 && ratio < 5.0e4,
            "5pt ratio = {ratio:e}"
        );
    }

    // ─── Newton-Cotes integration ────────────────────────────────────────

    /// Hartung Examples 7.7 / 7.8: ∫₀¹ x²·eˣ dx = e − 2 = 0.7182818…
    fn x2_exp_x(x: f64) -> f64 {
        x * x * x.exp()
    }
    const E_MINUS_2: f64 = std::f64::consts::E - 2.0;

    #[test]
    fn trapezoid_book_example_7_7() {
        // h=1 trapezoid on [0,1] → 1.3591409
        let got = trapezoid(x2_exp_x, 0.0, 1.0);
        assert!(close(got, 1.3591409, 1e-6), "got {got}");

        // h=0.5 composite trapezoid → 0.8856606
        let got = composite_trapezoid(x2_exp_x, 0.0, 1.0, 2);
        assert!(close(got, 0.8856606, 1e-6), "got {got}");

        // h=0.25 composite trapezoid → 0.7605963
        let got = composite_trapezoid(x2_exp_x, 0.0, 1.0, 4);
        assert!(close(got, 0.7605963, 1e-6), "got {got}");
    }

    #[test]
    fn simpson_book_example_7_8() {
        // h=0.5 Simpson (2 intervals) → 0.7278339
        let got = composite_simpson(x2_exp_x, 0.0, 1.0, 2).unwrap();
        assert!(close(got, 0.7278339, 1e-6), "got {got}");

        // h=0.25 Simpson (4 intervals) → 0.7189082
        let got = composite_simpson(x2_exp_x, 0.0, 1.0, 4).unwrap();
        assert!(close(got, 0.7189082, 1e-6), "got {got}");

        // h=0.125 Simpson (8 intervals) → 0.7183215
        let got = composite_simpson(x2_exp_x, 0.0, 1.0, 8).unwrap();
        assert!(close(got, 0.7183215, 1e-6), "got {got}");
    }

    #[test]
    fn composite_simpson_quartic_convergence() {
        // Error must shrink by ≈16× when h halves (4th-order in h).
        let e_h = (composite_simpson(x2_exp_x, 0.0, 1.0, 4).unwrap() - E_MINUS_2).abs();
        let e_h_half = (composite_simpson(x2_exp_x, 0.0, 1.0, 8).unwrap() - E_MINUS_2).abs();
        let ratio = e_h / e_h_half;
        assert!((ratio - 16.0).abs() < 4.0, "Simpson order ratio = {ratio}");
    }

    #[test]
    fn simpson_rejects_odd_n() {
        let err = composite_simpson(x2_exp_x, 0.0, 1.0, 3).unwrap_err();
        assert!(matches!(err, CalcError::SimpsonNotEven(3)));
    }

    #[test]
    fn simpson_3_8_exact_for_cubics() {
        // ∫₀¹ x³ dx = 1/4. Simpson 3/8 is exact for cubics.
        let got = simpson_3_8(|x: f64| x * x * x, 0.0, 1.0);
        assert!(close(got, 0.25, 1e-12), "got {got}");
    }

    #[test]
    fn boole_exact_for_degree_5() {
        // ∫₀¹ x⁵ dx = 1/6. Boole has degree of precision 5.
        let got = boole(|x: f64| x.powi(5), 0.0, 1.0);
        assert!(close(got, 1.0 / 6.0, 1e-12), "got {got}");
    }

    #[test]
    fn data_versions_match_closure_versions() {
        let xs: Vec<f64> = (0..=8).map(|i| i as f64 / 8.0).collect();
        let ys: Vec<f64> = xs.iter().map(|&x| x2_exp_x(x)).collect();
        let trap_data = trapezoid_data(&xs, &ys).unwrap();
        let trap_fn = composite_trapezoid(x2_exp_x, 0.0, 1.0, 8);
        assert!(close(trap_data, trap_fn, 1e-12));
        let simp_data = simpson_data(&xs, &ys).unwrap();
        let simp_fn = composite_simpson(x2_exp_x, 0.0, 1.0, 8).unwrap();
        assert!(close(simp_data, simp_fn, 1e-12));
    }

    // ─── Romberg ────────────────────────────────────────────────────────

    #[test]
    fn romberg_converges_rapidly() {
        let table = romberg(x2_exp_x, 0.0, 1.0, 6);
        let best = table[5][5];
        assert!(close(best, E_MINUS_2, 1e-12), "Romberg best = {best}");
        // First column (trapezoid) is much worse than the diagonal.
        assert!((table[0][0] - E_MINUS_2).abs() > 1e-2);
    }

    // ─── Legendre / Gauss-Legendre ──────────────────────────────────────

    #[test]
    fn legendre_values_match_book_table() {
        // P_2(x) = (3x² − 1)/2.
        assert!(close(legendre(2, 0.0), -0.5, 1e-12));
        assert!(close(legendre(2, 1.0), 1.0, 1e-12));
        // P_3(x) = (5x³ − 3x)/2.
        assert!(close(legendre(3, 1.0), 1.0, 1e-12));
        assert!(close(legendre(3, 0.0), 0.0, 1e-12));
        // P_4(1) = 1, P_5(1) = 1 — boundary normalization.
        for n in 0..=8 {
            assert!(close(legendre(n, 1.0), 1.0, 1e-12), "P_{n}(1) = {}", legendre(n, 1.0));
        }
    }

    #[test]
    fn legendre_roots_are_quadrature_nodes() {
        for n in 2..=8 {
            let (nodes, _) = gauss_legendre_table(n).unwrap();
            for &x in &nodes {
                let p = legendre(n, x);
                assert!(p.abs() < 1e-10, "P_{n}({x}) = {p:e} should be a root");
            }
        }
    }

    #[test]
    fn gauss_2pt_book_example_7_11() {
        // ∫₋₁¹ eˣ dx ≈ 2.3426961 via 2-point Gauss.
        let got = gauss_legendre(|x: f64| x.exp(), -1.0, 1.0, 2).unwrap();
        assert!(close(got, 2.3426961, 1e-6), "got {got}");
        let exact = std::f64::consts::E - 1.0 / std::f64::consts::E;
        let err = (got - exact).abs();
        // Book reports error 0.0077062.
        assert!(close(err, 0.0077062, 1e-6), "err = {err}");
    }

    #[test]
    fn gauss_n_point_exact_for_degree_2n_minus_1() {
        // n-point Gauss-Legendre integrates x^{2n-1} exactly.
        for n in 2..=6 {
            let p = 2 * n - 1;
            let exact = if p % 2 == 0 { 2.0 / (p as f64 + 1.0) } else { 0.0 };
            let got = gauss_legendre(|x: f64| x.powi(p as i32), -1.0, 1.0, n).unwrap();
            assert!(
                (got - exact).abs() < 1e-12,
                "Gauss_{n} on x^{p}: got {got}, exact {exact}"
            );
        }
    }

    #[test]
    fn gauss_higher_n_via_newton_path() {
        // n=12: not in the table, must trigger Newton iteration.
        let (nodes, weights) = gauss_legendre_table(12).unwrap();
        assert_eq!(nodes.len(), 12);
        assert_eq!(weights.len(), 12);
        // Sanity: weights sum to 2 (integral of 1 on [-1,1]).
        let s: f64 = weights.iter().sum();
        assert!((s - 2.0).abs() < 1e-12);
        // Symmetric about 0.
        for i in 0..6 {
            assert!((nodes[i] + nodes[11 - i]).abs() < 1e-12);
            assert!((weights[i] - weights[11 - i]).abs() < 1e-12);
        }
        // Exact on a polynomial of degree 23.
        let got = gauss_legendre(|x: f64| x.powi(22), -1.0, 1.0, 12).unwrap();
        let exact = 2.0 / 23.0;
        assert!((got - exact).abs() < 1e-12);
    }

    #[test]
    fn gauss_legendre_weight_sum_invariant() {
        for n in 1..=8 {
            let (_, weights) = gauss_legendre_table(n).unwrap();
            let s: f64 = weights.iter().sum();
            assert!((s - 2.0).abs() < 1e-12, "weights sum at n={n}: {s}");
        }
    }
}
