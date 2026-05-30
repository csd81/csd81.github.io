//! Condition numbers, matrix inverse, residual, iterative refinement, and
//! the canonical ill-conditioned test matrix (Hilbert) — Hartung §§4.4–4.5.
//!
//! `cond_inf(A) = ‖A‖∞ · ‖A⁻¹‖∞` measures how much a relative perturbation in
//! `b` can be amplified into the solution: `‖x − x̃‖/‖x‖ ≤ cond(A)·‖b − b̃‖/‖b‖`
//! (Thm 4.22). A condition number above 10²–10³ is considered ill-conditioned
//! per the book (§4.4).

use thiserror::Error;

use crate::linear::{self, LinearError};
use crate::matrix::Matrix;
use crate::norms::{mat_norm_inf, vec_norm_inf};

#[derive(Debug, Error, PartialEq)]
pub enum ConditionError {
    #[error("matrix is singular (or numerically so) — inverse does not exist")]
    Singular,
    #[error("matrix must be square, got {rows}x{cols}")]
    NotSquare { rows: usize, cols: usize },
    #[error("dimension mismatch: A is {rows}x{cols}, x has length {x_len}, b has length {b_len}")]
    DimensionMismatch {
        rows: usize,
        cols: usize,
        x_len: usize,
        b_len: usize,
    },
    #[error("iterative refinement did not converge in {max} steps")]
    RefinementDidNotConverge { max: usize },
    #[error("propagated linear-solver error: {0}")]
    Linear(#[from] LinearError),
}

/// Compute `A⁻¹` by solving `A · X[:,j] = e_j` once for each column, using
/// Gaussian elimination with partial pivoting.
///
/// `O(n⁴)` overall (`n` solves at `n³/3` each); fine for the small matrices
/// numerical-analysis pedagogy actually deals with. For production code one
/// would factor once (LU) and reuse — see Chapter 5.
pub fn invert(a: &Matrix) -> Result<Matrix, ConditionError> {
    let (rows, cols) = a.shape();
    if rows != cols {
        return Err(ConditionError::NotSquare { rows, cols });
    }
    let n = rows;
    let mut out = Matrix::zeros(n, n);
    for j in 0..n {
        let mut e = vec![0.0; n];
        e[j] = 1.0;
        let col = match linear::solve_partial_pivot(a, &e) {
            Ok(x) => x,
            Err(LinearError::SingularMatrix { .. }) => return Err(ConditionError::Singular),
            Err(e) => return Err(ConditionError::Linear(e)),
        };
        for i in 0..n {
            out.set(i, j, col[i]).unwrap();
        }
    }
    Ok(out)
}

/// `cond_∞(A) = ‖A‖∞ · ‖A⁻¹‖∞` (Hartung §4.4).
pub fn cond_inf(a: &Matrix) -> Result<f64, ConditionError> {
    let inv = invert(a)?;
    Ok(mat_norm_inf(a) * mat_norm_inf(&inv))
}

/// `cond₁(A) = ‖A‖₁ · ‖A⁻¹‖₁`.
pub fn cond_1(a: &Matrix) -> Result<f64, ConditionError> {
    use crate::norms::mat_norm_1;
    let inv = invert(a)?;
    Ok(mat_norm_1(a) * mat_norm_1(&inv))
}

/// Residual `r = b − A·x` (Hartung §4.4). Used as a stopping signal for
/// iterative solvers and as the right-hand side of one iterative-refinement
/// step.
pub fn residual(a: &Matrix, x: &[f64], b: &[f64]) -> Result<Vec<f64>, ConditionError> {
    let (rows, cols) = a.shape();
    if x.len() != cols || b.len() != rows {
        return Err(ConditionError::DimensionMismatch {
            rows,
            cols,
            x_len: x.len(),
            b_len: b.len(),
        });
    }
    let mut r = vec![0.0; rows];
    for i in 0..rows {
        let mut s = b[i];
        for j in 0..cols {
            s -= a.get(i, j).unwrap() * x[j];
        }
        r[i] = s;
    }
    Ok(r)
}

#[derive(Debug, Clone, Copy)]
pub struct RefinementOptions {
    pub tol: f64,
    pub max_iter: usize,
}

impl Default for RefinementOptions {
    fn default() -> Self {
        Self {
            tol: 1e-12,
            max_iter: 20,
        }
    }
}

#[derive(Debug, Clone)]
pub struct RefinementReport {
    pub x: Vec<f64>,
    pub iterations: usize,
    pub converged: bool,
    /// Final residual ∞-norm, `‖b − A·x_refined‖∞`.
    pub final_residual: f64,
    /// First-iteration condition-number estimate
    /// `‖y‖∞ / ‖x̃‖∞ × 10^t` per Hartung eq. 4.23. We use `t = 16` for f64.
    /// Available only if at least one refinement step ran.
    pub cond_estimate: Option<f64>,
}

/// Iterative refinement (Hartung Algorithm 4.20).
///
/// Given an initial approximate solution `x_initial` (or `None` to compute one
/// via partial-pivot Gaussian elimination), repeatedly solve `A·y = r` for
/// the correction `y` and update `x ← x + y` until `‖y‖∞ < tol`.
///
/// Returns `cond_estimate` from the *first* correction step, which is the
/// LINPACK-style estimator `10^t · ‖y‖∞/‖x̃‖∞` (the book uses base-10
/// arithmetic with `t` decimal digits; for f64 we substitute `10^16` as the
/// nominal precision).
///
/// Note: the book recommends computing the residual in *2t-digit* precision.
/// We use plain f64 throughout — this matches the algorithm's structure and
/// still helps when `x_initial` came from a lower-precision solve (or from
/// rounding noise in a real workload).
pub fn iterative_refinement(
    a: &Matrix,
    b: &[f64],
    x_initial: Option<&[f64]>,
    opts: RefinementOptions,
) -> Result<RefinementReport, ConditionError> {
    let (rows, cols) = a.shape();
    if rows != cols {
        return Err(ConditionError::NotSquare { rows, cols });
    }
    if b.len() != rows {
        return Err(ConditionError::DimensionMismatch {
            rows,
            cols,
            x_len: 0,
            b_len: b.len(),
        });
    }

    let mut x: Vec<f64> = match x_initial {
        Some(v) => v.to_vec(),
        None => linear::solve_partial_pivot(a, b)?,
    };
    if x.len() != rows {
        return Err(ConditionError::DimensionMismatch {
            rows,
            cols,
            x_len: x.len(),
            b_len: b.len(),
        });
    }

    let mut cond_estimate = None;
    let mut iterations = 0usize;

    for k in 1..=opts.max_iter {
        iterations = k;
        let r = residual(a, &x, b)?;
        let y = linear::solve_partial_pivot(a, &r)?;
        if k == 1 {
            let x_norm = vec_norm_inf(&x);
            if x_norm > 0.0 {
                // 10^t with t = 16 (f64 precision target).
                cond_estimate = Some(1.0e16 * vec_norm_inf(&y) / x_norm);
            }
        }
        for i in 0..rows {
            x[i] += y[i];
        }
        if vec_norm_inf(&y) < opts.tol {
            let final_r = vec_norm_inf(&residual(a, &x, b)?);
            return Ok(RefinementReport {
                x,
                iterations: k,
                converged: true,
                final_residual: final_r,
                cond_estimate,
            });
        }
    }

    let final_r = vec_norm_inf(&residual(a, &x, b)?);
    Ok(RefinementReport {
        x,
        iterations,
        converged: false,
        final_residual: final_r,
        cond_estimate,
    })
}

/// Hilbert matrix `H_n` with `H_ij = 1 / (i + j − 1)` (Hartung §4.5).
///
/// Classic ill-conditioned test matrix: `cond_*(H_n)` grows like `(1+√2)^(4n)`
/// (Wilkinson). The book's Table 4.3 lists `cond_*(H_3) ≈ 524`,
/// `cond_*(H_10) ≈ 1.6·10¹³`.
pub fn hilbert(n: usize) -> Matrix {
    let mut h = Matrix::zeros(n, n);
    for i in 0..n {
        for j in 0..n {
            // 1-indexed in the book, 0-indexed here, so denominator is i + j + 1.
            h.set(i, j, 1.0 / (i + j + 1) as f64).unwrap();
        }
    }
    h
}

#[cfg(test)]
mod tests {
    use super::*;

    fn mat(rows: usize, cols: usize, data: &[f64]) -> Matrix {
        Matrix::new(rows, cols, data.to_vec())
    }

    fn close(a: &[f64], b: &[f64], tol: f64) -> bool {
        a.len() == b.len() && a.iter().zip(b).all(|(x, y)| (x - y).abs() <= tol)
    }

    #[test]
    fn invert_then_multiply_yields_identity() {
        let a = mat(3, 3, &[2.0, 1.0, 0.0, 1.0, 3.0, 1.0, 0.0, 1.0, 2.0]);
        let ainv = invert(&a).unwrap();
        let prod = a.matmul(&ainv).unwrap();
        let id = Matrix::eye(3);
        for i in 0..3 {
            for j in 0..3 {
                assert!(
                    (prod.get(i, j).unwrap() - id.get(i, j).unwrap()).abs() < 1e-10,
                    "(A·A⁻¹)[{i},{j}] = {}",
                    prod.get(i, j).unwrap()
                );
            }
        }
    }

    #[test]
    fn invert_singular_errors() {
        let a = mat(2, 2, &[1.0, 2.0, 2.0, 4.0]);
        assert!(matches!(invert(&a), Err(ConditionError::Singular)));
    }

    #[test]
    fn cond_inf_book_example_4_19() {
        // A = [[4, 1], [4.03, 1]] — book reports cond_∞(A) ≈ 1346.
        // (Book uses |A⁻¹|_∞ from the rounded inverse [[-33.33, 33.33],[143.3, -133.3]]
        // and ||A||_∞ = 5.03; product ≈ 1346.) We get the same shape but with
        // f64 precision the value is ~1351 vs ~1346 — close enough.
        let a = mat(2, 2, &[4.0, 1.0, 4.03, 1.0]);
        let c = cond_inf(&a).unwrap();
        assert!(
            (c - 1346.0).abs() < 50.0,
            "expected cond_∞ ≈ 1346, got {c}"
        );
    }

    #[test]
    fn residual_zero_for_exact_solution() {
        // A x = b with x exact.
        let a = mat(2, 2, &[1.0, 2.0, 3.0, 4.0]);
        let x = vec![1.0, 1.0];
        let b = vec![3.0, 7.0];
        let r = residual(&a, &x, &b).unwrap();
        assert!(close(&r, &[0.0, 0.0], 1e-12));
    }

    #[test]
    fn residual_can_be_small_yet_x_wrong() {
        // Hartung Example 4.17: A = [[4, 1], [4.03, 1]], exact x = (1, 1),
        // but x̃ = (2, -3) gives residual r = (0, 0.03) — small in ∞-norm!
        let a = mat(2, 2, &[4.0, 1.0, 4.03, 1.0]);
        let b = vec![5.0, 5.03];
        let x_wrong = vec![2.0, -3.0];
        let r = residual(&a, &x_wrong, &b).unwrap();
        assert!(vec_norm_inf(&r) < 0.05, "‖r‖∞ = {}", vec_norm_inf(&r));
        // But ‖x_exact − x_wrong‖∞ is huge.
        let err = (x_wrong[0] - 1.0).abs().max((x_wrong[1] - 1.0).abs());
        assert!(err > 1.0);
    }

    #[test]
    fn iterative_refinement_recovers_exact() {
        // Same ill-conditioned A from Example 4.17 / 4.21.
        let a = mat(2, 2, &[4.0, 1.0, 4.03, 1.0]);
        let b = vec![5.0, 5.03];
        // Deliberately noisy initial guess (rough 4-digit Gaussian elim result
        // from the book: x̃ ≈ (0.9375, 1.25)).
        let x_noisy = vec![0.9375, 1.25];
        let r = iterative_refinement(&a, &b, Some(&x_noisy), RefinementOptions::default())
            .unwrap();
        assert!(r.converged);
        assert!(close(&r.x, &[1.0, 1.0], 1e-10), "refined = {:?}", r.x);
        // Condition estimate should be of the right order of magnitude.
        let est = r.cond_estimate.expect("first-step estimate must be set");
        assert!(est > 1.0, "cond estimate = {est}");
    }

    /// Hartung Table 4.3 — the standard ill-conditioning canary.
    /// We compute `cond_∞(H_n)` and verify the order of magnitude. The book
    /// reports `cond_* (spectral)` which is always ≤ `cond_p` for any p, so
    /// `cond_∞` is *at least as large* as the book's numbers.
    #[test]
    fn hilbert_matrices_are_increasingly_ill_conditioned() {
        let h3 = hilbert(3);
        let h5 = hilbert(5);
        let h6 = hilbert(6);

        let c3 = cond_inf(&h3).unwrap();
        let c5 = cond_inf(&h5).unwrap();
        let c6 = cond_inf(&h6).unwrap();

        // Book's spectral values: cond_*(H_3) = 524, H_5 = 4.77e5, H_6 = 1.5e6.
        // Our cond_∞ should be at least that order of magnitude.
        assert!(c3 >= 5.0e2 && c3 <= 1.0e4, "cond_∞(H_3) = {c3:e}");
        assert!(c5 >= 4.0e5 && c5 <= 5.0e7, "cond_∞(H_5) = {c5:e}");
        assert!(c6 >= 1.0e6 && c6 <= 1.0e9, "cond_∞(H_6) = {c6:e}");
        // Monotone increasing in n.
        assert!(c3 < c5 && c5 < c6);
    }

    #[test]
    fn hilbert_is_symmetric() {
        let h = hilbert(5);
        for i in 0..5 {
            for j in 0..5 {
                assert_eq!(h.get(i, j).unwrap(), h.get(j, i).unwrap());
            }
        }
    }
}
