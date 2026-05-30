//! Root-finding methods from Hartung, *Introduction to Numerical Analysis* (2018),
//! Chapter 2 — bisection, false position, Newton, secant, fixed-point.
//!
//! All solvers return a `SolverReport` carrying the approximate root, the value
//! of `f` at that root, and how many iterations were used. Failure modes
//! (non-bracketing inputs, zero derivative, divergence) flow through
//! `SolverError` rather than `unwrap`/`panic`.

use thiserror::Error;

/// The root the textbook's example f(x) = e^x - 2 cos(x) converges to on [0, 1],
/// quoted to ~13 digits in Example 2.29. Useful as a fixed reference in tests.
#[cfg(test)]
pub const HARTUNG_ROOT: f64 = 0.5397851608092811;

#[derive(Debug, Error, PartialEq)]
pub enum SolverError {
    #[error("max iterations ({max}) exceeded; last approx = {last}")]
    MaxIterExceeded { max: usize, last: f64 },
    #[error("f(a) and f(b) must have opposite signs (got f(a)={fa}, f(b)={fb})")]
    SameSignOnBracket { fa: f64, fb: f64 },
    #[error("derivative is zero (or near-zero: {value}) at x={x}; Newton step undefined")]
    ZeroDerivative { x: f64, value: f64 },
    #[error("denominator vanished in secant/false-position update at iter {iter}")]
    DegenerateUpdate { iter: usize },
    #[error("produced non-finite value (NaN or infinity) at iter {iter}")]
    NonFinite { iter: usize },
}

#[derive(Debug, Clone, PartialEq)]
pub struct SolverReport {
    pub root: f64,
    pub f_at_root: f64,
    pub iterations: usize,
}

/// Bisection method. Requires `f(a)·f(b) < 0`.
///
/// Reference: Hartung §2.3, Theorem 2.16. Error bound is `(b-a)/2^(k+1)`.
pub fn bisection<F: Fn(f64) -> f64>(
    f: F,
    a: f64,
    b: f64,
    tol: f64,
    max_iter: usize,
) -> Result<SolverReport, SolverError> {
    let (mut a, mut b) = if a <= b { (a, b) } else { (b, a) };
    let mut fa = f(a);
    let fb = f(b);
    if !fa.is_finite() || !fb.is_finite() {
        return Err(SolverError::NonFinite { iter: 0 });
    }
    if fa * fb > 0.0 {
        return Err(SolverError::SameSignOnBracket { fa, fb });
    }
    // Exact-hit on a boundary.
    if fa == 0.0 {
        return Ok(SolverReport { root: a, f_at_root: 0.0, iterations: 0 });
    }
    if fb == 0.0 {
        return Ok(SolverReport { root: b, f_at_root: 0.0, iterations: 0 });
    }

    for k in 1..=max_iter {
        let p = 0.5 * (a + b);
        let fp = f(p);
        if !fp.is_finite() {
            return Err(SolverError::NonFinite { iter: k });
        }
        if fp == 0.0 || (b - a) * 0.5 < tol {
            return Ok(SolverReport { root: p, f_at_root: fp, iterations: k });
        }
        if fa * fp < 0.0 {
            b = p;
        } else {
            a = p;
            fa = fp;
        }
    }
    Err(SolverError::MaxIterExceeded {
        max: max_iter,
        last: 0.5 * (a + b),
    })
}

/// Method of false position (regula falsi). Hartung §2.4, Algorithm 2.18.
///
/// The book flags the divide-by-zero risk explicitly: bail out if `f(a) == f(b)`.
pub fn false_position<F: Fn(f64) -> f64>(
    f: F,
    a: f64,
    b: f64,
    tol: f64,
    max_iter: usize,
) -> Result<SolverReport, SolverError> {
    let (mut a, mut b) = (a, b);
    let mut fa = f(a);
    let mut fb = f(b);
    if !fa.is_finite() || !fb.is_finite() {
        return Err(SolverError::NonFinite { iter: 0 });
    }
    if fa * fb > 0.0 {
        return Err(SolverError::SameSignOnBracket { fa, fb });
    }

    let mut prev = f64::INFINITY;
    for k in 1..=max_iter {
        let denom = fa - fb;
        if denom == 0.0 {
            return Err(SolverError::DegenerateUpdate { iter: k });
        }
        let p = a - fa * (a - b) / denom;
        let fp = f(p);
        if !fp.is_finite() {
            return Err(SolverError::NonFinite { iter: k });
        }
        if fp == 0.0 || (p - prev).abs() < tol {
            return Ok(SolverReport { root: p, f_at_root: fp, iterations: k });
        }
        if fp * fb < 0.0 {
            a = p;
            fa = fp;
        } else {
            b = p;
            fb = fp;
        }
        prev = p;
    }
    Err(SolverError::MaxIterExceeded { max: max_iter, last: prev })
}

/// Newton's method. Hartung §2.5, eq. (2.7): p_{k+1} = p_k - f(p_k)/f'(p_k).
///
/// Quadratic convergence when f'(p) != 0. Diverges spectacularly when f' is
/// small (cf. Table 2.6 in the book — `0.5·arctan(x)`, p₀=1.4).
pub fn newton<F, G>(
    f: F,
    df: G,
    p0: f64,
    tol: f64,
    max_iter: usize,
) -> Result<SolverReport, SolverError>
where
    F: Fn(f64) -> f64,
    G: Fn(f64) -> f64,
{
    // Guard against derivatives that are essentially zero in f64.
    const DERIV_FLOOR: f64 = 1e-300;

    let mut p = p0;
    for k in 1..=max_iter {
        let fp = f(p);
        let dfp = df(p);
        if !fp.is_finite() || !dfp.is_finite() {
            return Err(SolverError::NonFinite { iter: k });
        }
        if dfp.abs() < DERIV_FLOOR {
            return Err(SolverError::ZeroDerivative { x: p, value: dfp });
        }
        let p_new = p - fp / dfp;
        if !p_new.is_finite() {
            return Err(SolverError::NonFinite { iter: k });
        }
        if (p_new - p).abs() < tol {
            return Ok(SolverReport {
                root: p_new,
                f_at_root: f(p_new),
                iterations: k,
            });
        }
        p = p_new;
    }
    Err(SolverError::MaxIterExceeded { max: max_iter, last: p })
}

/// Secant method. Hartung §2.6, eq. (2.10).
///
/// Order of convergence is the golden ratio (~1.618) — superlinear but slower
/// than Newton. Needs two initial points; `p0 != p1` required.
pub fn secant<F: Fn(f64) -> f64>(
    f: F,
    p0: f64,
    p1: f64,
    tol: f64,
    max_iter: usize,
) -> Result<SolverReport, SolverError> {
    let mut p_prev = p0;
    let mut p_curr = p1;
    let mut f_prev = f(p_prev);
    let mut f_curr = f(p_curr);
    if !f_prev.is_finite() || !f_curr.is_finite() {
        return Err(SolverError::NonFinite { iter: 0 });
    }

    for k in 1..=max_iter {
        let denom = f_curr - f_prev;
        if denom == 0.0 {
            return Err(SolverError::DegenerateUpdate { iter: k });
        }
        let p_next = p_curr - f_curr * (p_curr - p_prev) / denom;
        if !p_next.is_finite() {
            return Err(SolverError::NonFinite { iter: k });
        }
        if (p_next - p_curr).abs() < tol {
            return Ok(SolverReport {
                root: p_next,
                f_at_root: f(p_next),
                iterations: k,
            });
        }
        p_prev = p_curr;
        f_prev = f_curr;
        p_curr = p_next;
        f_curr = f(p_curr);
    }
    Err(SolverError::MaxIterExceeded { max: max_iter, last: p_curr })
}

/// Fixed-point iteration p_{k+1} = g(p_k). Hartung §2.2.
///
/// Converges (locally) when `|g'(p)| < 1` near the fixed point.
pub fn fixed_point<G: Fn(f64) -> f64>(
    g: G,
    p0: f64,
    tol: f64,
    max_iter: usize,
) -> Result<SolverReport, SolverError> {
    let mut p = p0;
    for k in 1..=max_iter {
        let p_new = g(p);
        if !p_new.is_finite() {
            return Err(SolverError::NonFinite { iter: k });
        }
        if (p_new - p).abs() < tol {
            return Ok(SolverReport {
                root: p_new,
                f_at_root: 0.0, // not meaningful here; caller knows g, not f
                iterations: k,
            });
        }
        p = p_new;
    }
    Err(SolverError::MaxIterExceeded { max: max_iter, last: p })
}

#[cfg(test)]
mod tests {
    use super::*;

    // Hartung's example function from §2.3 onward.
    fn hartung(x: f64) -> f64 {
        x.exp() - 2.0 * x.cos()
    }
    fn d_hartung(x: f64) -> f64 {
        x.exp() + 2.0 * x.sin()
    }

    #[test]
    fn bisection_matches_book() {
        // Book reports 16+ steps to reach 1e-5 on [0,1].
        let r = bisection(hartung, 0.0, 1.0, 1e-5, 100).unwrap();
        assert!((r.root - HARTUNG_ROOT).abs() < 1e-4);
        // Convergence-rate bound: (b-a) / 2^(k+1)
        assert!(r.iterations <= 17);
    }

    #[test]
    fn bisection_rejects_same_sign() {
        let err = bisection(|x: f64| x * x + 1.0, 0.0, 1.0, 1e-9, 100).unwrap_err();
        assert!(matches!(err, SolverError::SameSignOnBracket { .. }));
    }

    #[test]
    fn bisection_handles_swapped_bracket() {
        // a > b should still work; we sort internally.
        let r = bisection(hartung, 1.0, 0.0, 1e-9, 200).unwrap();
        assert!((r.root - HARTUNG_ROOT).abs() < 1e-7);
    }

    #[test]
    fn false_position_matches_book() {
        // Table 2.3: 8 iterations to TOL=1e-5 on [0,1].
        let r = false_position(hartung, 0.0, 1.0, 1e-5, 50).unwrap();
        assert!((r.root - HARTUNG_ROOT).abs() < 1e-4);
        assert!(r.iterations <= 12);
    }

    #[test]
    fn newton_converges_quadratically() {
        // Table 2.5 in the book: f(0.1) ≈ -0.85, reaches 1e-13 in ~5 iters.
        let r = newton(hartung, d_hartung, 0.1, 1e-10, 50).unwrap();
        assert!((r.root - HARTUNG_ROOT).abs() < 1e-9);
        assert!(r.iterations <= 7);
    }

    #[test]
    fn newton_catches_zero_derivative() {
        // f(x) = x^2 has f'(0) = 0; starting exactly at x=0 should error.
        let err = newton(|x: f64| x * x, |x| 2.0 * x, 0.0, 1e-9, 50).unwrap_err();
        assert!(matches!(err, SolverError::ZeroDerivative { x: 0.0, .. }));
    }

    #[test]
    fn newton_diverges_on_arctan_pathology() {
        // Hartung Example 2.24: 0.5*arctan(x) with p0=1.4 diverges to ±∞.
        let f = |x: f64| 0.5 * x.atan();
        let df = |x: f64| 0.5 / (1.0 + x * x);
        let result = newton(f, df, 1.4, 1e-9, 20);
        // Should NOT converge to 0 in 20 iters; either MaxIter or NonFinite.
        // Acceptable outcomes: ZeroDerivative (df underflows to 0 around iter 14),
        // NonFinite (overflow to ±inf), or MaxIterExceeded with a huge magnitude.
        match result {
            Ok(r) => assert!(r.root.abs() > 1e6, "should diverge, got {}", r.root),
            Err(SolverError::ZeroDerivative { .. })
            | Err(SolverError::NonFinite { .. })
            | Err(SolverError::MaxIterExceeded { .. }) => {}
            Err(other) => panic!("unexpected error variant: {other:?}"),
        }
    }

    #[test]
    fn secant_matches_book() {
        // Table 2.7: 7 iterations from p0=0, p1=1.
        let r = secant(hartung, 0.0, 1.0, 1e-10, 50).unwrap();
        assert!((r.root - HARTUNG_ROOT).abs() < 1e-9);
        assert!(r.iterations <= 10);
    }

    #[test]
    fn fixed_point_sqrt2() {
        // Exercise 4 §2.2: p_k = 0.5*p_{k-1} + 1/p_{k-1} converges to sqrt(2).
        let g = |p: f64| 0.5 * p + 1.0 / p;
        let r = fixed_point(g, 1.5, 1e-12, 100).unwrap();
        assert!((r.root - 2.0_f64.sqrt()).abs() < 1e-10);
    }

    #[test]
    fn fixed_point_diverges_then_maxiter() {
        // g(x) = 2x has |g'| = 2 > 1; iteration explodes.
        let err = fixed_point(|p: f64| 2.0 * p, 1.0, 1e-9, 10).unwrap_err();
        assert!(matches!(
            err,
            SolverError::MaxIterExceeded { .. } | SolverError::NonFinite { .. }
        ));
    }
}
