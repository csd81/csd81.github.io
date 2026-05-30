//! Chapter 9 of Hartung — the method of least squares.
//!
//! Four fits, each minimizing `Σ (model(xᵢ) − yᵢ)²`:
//!
//! * **Line** `y = a·x + b` — closed-form via the 2×2 Gaussian normal
//!   equations (eq. 9.3).
//! * **Polynomial** `y = aₘ·xᵐ + … + a₀` — `(m+1)×(m+1)` normal equations
//!   (eq. 9.4). The coefficient matrix has entries `Σ xᵢ^(j+k)`; it's
//!   symmetric positive-definite when there are at least `m+1` distinct
//!   `xᵢ`, so the standard Gaussian elimination from §3.3 is fine.
//! * **Exponential** `y = b·e^(a·x)` — linearize via `ln y = a·x + ln b`
//!   and fit a line to `(xᵢ, ln yᵢ)`. Cheap and surprisingly accurate.
//! * **Power** `y = b·x^a` — linearize via `ln y = a·ln x + ln b` and fit
//!   a line to `(ln xᵢ, ln yᵢ)`.
//!
//! Linearization minimizes the error *of the linearized residuals*, not of
//! the original nonlinear ones, so we report both. The book makes this
//! explicit in Examples 9.5 and 9.6.

use thiserror::Error;

use crate::linear::{self, LinearError};
use crate::matrix::Matrix;

#[derive(Debug, Error, PartialEq)]
pub enum LSError {
    #[error("xs and ys length mismatch: {x_len} vs {y_len}")]
    LengthMismatch { x_len: usize, y_len: usize },
    #[error("need at least {min} data points, got {got}")]
    TooFewPoints { min: usize, got: usize },
    #[error("xs must contain at least 2 distinct values")]
    NotEnoughDistinct,
    #[error("polynomial degree {m} must be < number of points {n} (otherwise use interpolation)")]
    DegreeTooHigh { m: usize, n: usize },
    #[error("logarithmic fits require strictly positive {what} values (got {what}[{i}] = {value})")]
    NonPositive {
        what: &'static str,
        i: usize,
        value: f64,
    },
    #[error("linear solver failed: {0}")]
    Linear(#[from] LinearError),
}

// ────────────────────────────────────────────────────────────────────────
// 9.1 — line fit
// ────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone, Copy)]
pub struct LineFit {
    /// Slope.
    pub a: f64,
    /// Intercept.
    pub b: f64,
    /// `Σ (a·xᵢ + b − yᵢ)²`.
    pub error: f64,
}

impl LineFit {
    #[inline]
    pub fn eval(&self, x: f64) -> f64 {
        self.a * x + self.b
    }
}

/// Fit `y = a·x + b` via the Gaussian normal equations (book eq. 9.3, closed
/// form derived from `∂F/∂a = ∂F/∂b = 0`).
pub fn fit_line(xs: &[f64], ys: &[f64]) -> Result<LineFit, LSError> {
    validate_xy(xs, ys, 2)?;
    if !has_distinct_xs(xs) {
        return Err(LSError::NotEnoughDistinct);
    }
    let n_plus_1 = xs.len() as f64;
    let sx: f64 = xs.iter().sum();
    let sy: f64 = ys.iter().sum();
    let sxx: f64 = xs.iter().map(|x| x * x).sum();
    let sxy: f64 = xs.iter().zip(ys).map(|(x, y)| x * y).sum();
    let denom = n_plus_1 * sxx - sx * sx;
    let a = (n_plus_1 * sxy - sx * sy) / denom;
    let b = (sxx * sy - sxy * sx) / denom;
    let error = xs.iter().zip(ys).map(|(x, y)| (a * x + b - y).powi(2)).sum();
    Ok(LineFit { a, b, error })
}

// ────────────────────────────────────────────────────────────────────────
// 9.2 — polynomial fit
// ────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone)]
pub struct PolyFit {
    /// Coefficients in *increasing* order of degree: `coefs[k]` is the
    /// coefficient of `xᵏ`. So a degree-2 fit has `coefs = [a₀, a₁, a₂]`
    /// representing `a₂·x² + a₁·x + a₀`.
    pub coefs: Vec<f64>,
    /// `Σ (model(xᵢ) − yᵢ)²`.
    pub error: f64,
}

impl PolyFit {
    pub fn eval(&self, x: f64) -> f64 {
        // Horner from the highest degree down.
        let n = self.coefs.len();
        if n == 0 {
            return 0.0;
        }
        let mut y = self.coefs[n - 1];
        for i in (0..n - 1).rev() {
            y = y * x + self.coefs[i];
        }
        y
    }
}

/// Fit polynomial of degree `m` to `(xᵢ, yᵢ)` (book eq. 9.4).
///
/// Requires at least `m + 1` distinct `xᵢ` for the normal-equations matrix
/// to be invertible (Thm 9.3 in the book). For `m = 1` this reduces to
/// [`fit_line`] (with coefficients reversed: `[b, a]` here vs `(a, b)`).
pub fn fit_polynomial(xs: &[f64], ys: &[f64], m: usize) -> Result<PolyFit, LSError> {
    if xs.len() != ys.len() {
        return Err(LSError::LengthMismatch {
            x_len: xs.len(),
            y_len: ys.len(),
        });
    }
    let n = xs.len();
    if m >= n {
        return Err(LSError::DegreeTooHigh { m, n });
    }
    if n < m + 1 {
        return Err(LSError::TooFewPoints { min: m + 1, got: n });
    }
    if !has_distinct_xs(xs) {
        return Err(LSError::NotEnoughDistinct);
    }

    // Precompute power sums S_k = Σ x_i^k for k = 0..=2m, since the
    // normal-equations matrix entry A[j,k] = S_{j+k}.
    let mut power_sums = vec![0.0; 2 * m + 1];
    power_sums[0] = n as f64;
    for &x in xs {
        let mut xp = x;
        for s in power_sums.iter_mut().skip(1) {
            *s += xp;
            xp *= x;
        }
    }

    // Build A (size m+1 × m+1) and rhs.
    let dim = m + 1;
    let mut a_data = vec![0.0; dim * dim];
    for j in 0..dim {
        for k in 0..dim {
            a_data[j * dim + k] = power_sums[j + k];
        }
    }
    let a_mat = Matrix::new(dim, dim, a_data);

    let mut rhs = vec![0.0; dim];
    for &(x, y) in xs.iter().zip(ys.iter()).map(|(x, y)| (x, *y)).collect::<Vec<_>>().iter() {
        let mut xp = 1.0;
        for r in rhs.iter_mut() {
            *r += xp * y;
            xp *= *x;
        }
    }

    let coefs = linear::solve_partial_pivot(&a_mat, &rhs)?;
    let fit = PolyFit {
        coefs: coefs.clone(),
        error: 0.0,
    };
    let mut err = 0.0;
    for (x, y) in xs.iter().zip(ys.iter()) {
        let r = fit.eval(*x) - *y;
        err += r * r;
    }
    Ok(PolyFit {
        coefs,
        error: err,
    })
}

// ────────────────────────────────────────────────────────────────────────
// 9.3 — special nonlinear fits via linearization
// ────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone, Copy)]
pub struct ExponentialFit {
    /// Exponent rate.
    pub a: f64,
    /// Prefactor.
    pub b: f64,
    /// `Σ (a·xᵢ + ln b − ln yᵢ)²` — the residual norm on the *linearized*
    /// problem.
    pub error_linearized: f64,
    /// `Σ (b·e^(a·xᵢ) − yᵢ)²` — the residual norm in the original units.
    pub error_nonlinear: f64,
}

impl ExponentialFit {
    #[inline]
    pub fn eval(&self, x: f64) -> f64 {
        self.b * (self.a * x).exp()
    }
}

/// Fit `y = b·e^(a·x)` by linearizing to `ln y = a·x + ln b` and fitting a
/// line. All `yᵢ` must be strictly positive.
pub fn fit_exponential(xs: &[f64], ys: &[f64]) -> Result<ExponentialFit, LSError> {
    validate_xy(xs, ys, 2)?;
    for (i, &y) in ys.iter().enumerate() {
        if y <= 0.0 {
            return Err(LSError::NonPositive {
                what: "y",
                i,
                value: y,
            });
        }
    }
    let ln_ys: Vec<f64> = ys.iter().map(|y| y.ln()).collect();
    let line = fit_line(xs, &ln_ys)?;
    let a = line.a;
    let b = line.b.exp();
    let error_linearized = line.error;
    let fit = ExponentialFit {
        a,
        b,
        error_linearized,
        error_nonlinear: 0.0,
    };
    let mut err = 0.0;
    for (x, y) in xs.iter().zip(ys.iter()) {
        let r = fit.eval(*x) - *y;
        err += r * r;
    }
    Ok(ExponentialFit {
        a,
        b,
        error_linearized,
        error_nonlinear: err,
    })
}

#[derive(Debug, Clone, Copy)]
pub struct PowerFit {
    /// Exponent.
    pub a: f64,
    /// Prefactor.
    pub b: f64,
    /// `Σ (a·ln xᵢ + ln b − ln yᵢ)²` on the linearized problem.
    pub error_linearized: f64,
    /// `Σ (b·xᵢ^a − yᵢ)²` in the original units.
    pub error_nonlinear: f64,
}

impl PowerFit {
    #[inline]
    pub fn eval(&self, x: f64) -> f64 {
        self.b * x.powf(self.a)
    }
}

/// Fit `y = b·x^a` by linearizing to `ln y = a·ln x + ln b` and fitting a
/// line. All `xᵢ` and `yᵢ` must be strictly positive.
pub fn fit_power(xs: &[f64], ys: &[f64]) -> Result<PowerFit, LSError> {
    validate_xy(xs, ys, 2)?;
    for (i, &x) in xs.iter().enumerate() {
        if x <= 0.0 {
            return Err(LSError::NonPositive {
                what: "x",
                i,
                value: x,
            });
        }
    }
    for (i, &y) in ys.iter().enumerate() {
        if y <= 0.0 {
            return Err(LSError::NonPositive {
                what: "y",
                i,
                value: y,
            });
        }
    }
    let ln_xs: Vec<f64> = xs.iter().map(|x| x.ln()).collect();
    let ln_ys: Vec<f64> = ys.iter().map(|y| y.ln()).collect();
    let line = fit_line(&ln_xs, &ln_ys)?;
    let a = line.a;
    let b = line.b.exp();
    let error_linearized = line.error;
    let fit = PowerFit {
        a,
        b,
        error_linearized,
        error_nonlinear: 0.0,
    };
    let mut err = 0.0;
    for (x, y) in xs.iter().zip(ys.iter()) {
        let r = fit.eval(*x) - *y;
        err += r * r;
    }
    Ok(PowerFit {
        a,
        b,
        error_linearized,
        error_nonlinear: err,
    })
}

// ────────────────────────────────────────────────────────────────────────
// Validation helpers
// ────────────────────────────────────────────────────────────────────────

fn validate_xy(xs: &[f64], ys: &[f64], min: usize) -> Result<(), LSError> {
    if xs.len() != ys.len() {
        return Err(LSError::LengthMismatch {
            x_len: xs.len(),
            y_len: ys.len(),
        });
    }
    if xs.len() < min {
        return Err(LSError::TooFewPoints {
            min,
            got: xs.len(),
        });
    }
    Ok(())
}

fn has_distinct_xs(xs: &[f64]) -> bool {
    for i in 0..xs.len() {
        for j in (i + 1)..xs.len() {
            if xs[i] != xs[j] {
                return true;
            }
        }
    }
    false
}

#[cfg(test)]
mod tests {
    use super::*;

    fn close(a: f64, b: f64, tol: f64) -> bool {
        (a - b).abs() <= tol
    }

    // Hartung Example 9.2 — line through 7 points.
    fn book_line_data() -> (Vec<f64>, Vec<f64>) {
        (
            vec![-1.0, 1.0, 2.5, 3.0, 4.0, 4.5, 6.0],
            vec![0.0, 1.2, 1.9, 2.5, 3.1, 3.2, 4.5],
        )
    }

    #[test]
    fn line_fit_matches_book_example_9_2() {
        let (xs, ys) = book_line_data();
        let f = fit_line(&xs, &ys).unwrap();
        // Book: a = 0.630243, b = 0.542163, error = 0.124691.
        assert!(close(f.a, 0.630243, 1e-6), "a = {}", f.a);
        assert!(close(f.b, 0.542163, 1e-6), "b = {}", f.b);
        assert!(close(f.error, 0.124691, 1e-6), "err = {}", f.error);
    }

    #[test]
    fn line_fit_through_exact_points() {
        // y = 2x + 1 exactly: error should be 0.
        let xs = vec![0.0, 1.0, 2.0, 3.0];
        let ys = vec![1.0, 3.0, 5.0, 7.0];
        let f = fit_line(&xs, &ys).unwrap();
        assert!(close(f.a, 2.0, 1e-12));
        assert!(close(f.b, 1.0, 1e-12));
        assert!(close(f.error, 0.0, 1e-20));
    }

    #[test]
    fn line_fit_rejects_constant_xs() {
        let xs = vec![1.0, 1.0, 1.0];
        let ys = vec![0.0, 1.0, 2.0];
        let err = fit_line(&xs, &ys).unwrap_err();
        assert!(matches!(err, LSError::NotEnoughDistinct));
    }

    /// Hartung Example 9.4 — parabola.
    #[test]
    fn poly_fit_matches_book_example_9_4() {
        let xs = vec![-1.0, -0.5, 0.0, 1.0, 2.0, 3.0, 3.5];
        let ys = vec![1.6, 1.7, 1.9, 1.5, 0.6, -0.1, -1.0];
        let f = fit_polynomial(&xs, &ys, 2).unwrap();
        // Book: a = -0.196021 (a₂), b = -0.084748 (a₁), c = 1.752653 (a₀).
        // Our coefficients are in increasing order, so [a₀, a₁, a₂].
        assert!(close(f.coefs[0], 1.752653, 1e-5), "a₀ = {}", f.coefs[0]);
        assert!(close(f.coefs[1], -0.084748, 1e-5), "a₁ = {}", f.coefs[1]);
        assert!(close(f.coefs[2], -0.196021, 1e-5), "a₂ = {}", f.coefs[2]);
        assert!(close(f.error, 0.0964456, 1e-5), "err = {}", f.error);
    }

    #[test]
    fn poly_fit_degree_1_matches_line_fit() {
        let (xs, ys) = book_line_data();
        let line = fit_line(&xs, &ys).unwrap();
        let poly = fit_polynomial(&xs, &ys, 1).unwrap();
        assert!(close(poly.coefs[0], line.b, 1e-9), "intercept");
        assert!(close(poly.coefs[1], line.a, 1e-9), "slope");
        assert!(close(poly.error, line.error, 1e-9));
    }

    #[test]
    fn poly_fit_rejects_degree_too_high() {
        let xs = vec![0.0, 1.0, 2.0];
        let ys = vec![0.0, 1.0, 4.0];
        let err = fit_polynomial(&xs, &ys, 3).unwrap_err();
        assert!(matches!(err, LSError::DegreeTooHigh { m: 3, n: 3 }));
    }

    /// Hartung Example 9.5 — exponential fit.
    #[test]
    fn exponential_fit_matches_book_example_9_5() {
        let xs = vec![0.0, 1.0, 1.5, 2.0, 3.0, 4.0];
        let ys = vec![0.3, 0.7, 0.9, 1.2, 1.8, 2.7];
        let f = fit_exponential(&xs, &ys).unwrap();
        // Book: A = 0.528951, B = -0.997597, so a = A = 0.528951, b = e^B = 0.368765.
        assert!(close(f.a, 0.528951, 1e-5), "a = {}", f.a);
        assert!(close(f.b, 0.368765, 1e-5), "b = {}", f.b);
        // Book linearized error: 0.095396. Nonlinear: 0.165543.
        assert!(close(f.error_linearized, 0.095396, 1e-5));
        assert!(close(f.error_nonlinear, 0.165543, 1e-5));
    }

    /// Hartung Example 9.6 — power fit.
    #[test]
    fn power_fit_matches_book_example_9_6() {
        let xs = vec![0.5, 1.0, 1.5, 2.5, 3.0];
        let ys = vec![0.7, 1.1, 1.6, 2.1, 2.3];
        let f = fit_power(&xs, &ys).unwrap();
        // Book: A = 0.676257, B = 0.123088, so a = 0.676257, b = e^B = 1.130984.
        assert!(close(f.a, 0.676257, 1e-5), "a = {}", f.a);
        assert!(close(f.b, 1.130984, 1e-5), "b = {}", f.b);
        assert!(close(f.error_linearized, 0.007279, 1e-5));
        assert!(close(f.error_nonlinear, 0.019616, 1e-5));
    }

    #[test]
    fn exponential_fit_rejects_non_positive_y() {
        let xs = vec![0.0, 1.0, 2.0];
        let ys = vec![1.0, -0.5, 2.0];
        let err = fit_exponential(&xs, &ys).unwrap_err();
        assert!(matches!(err, LSError::NonPositive { what: "y", i: 1, .. }));
    }

    #[test]
    fn power_fit_rejects_non_positive_x() {
        let xs = vec![1.0, -1.0, 2.0];
        let ys = vec![1.0, 1.0, 1.0];
        let err = fit_power(&xs, &ys).unwrap_err();
        assert!(matches!(err, LSError::NonPositive { what: "x", i: 1, .. }));
    }
}
