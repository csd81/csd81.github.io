//! Iterative methods for `A x = b` — Hartung Chapter 4.
//!
//! Both Jacobi (§4.2, eq. 4.15) and Gauss-Seidel (§4.3, eq. 4.17) are
//! implemented directly from their componentwise update rules, *not* via
//! constructing the iteration matrices `T_J = -D⁻¹(L+U)` or `T_G = -(D+L)⁻¹U`
//! — that would be both slower (an extra matvec per step) and numerically
//! pointless (you'd materialize a matrix only to multiply by it).
//!
//! Both solvers reject zero diagonal entries up front. As the book notes
//! (§4.2), if `a_ii = 0` you have to permute rows first; we surface that
//! as a clear error rather than silently dividing by zero.
//!
//! Stopping criterion: relative successive-difference, falling back to
//! absolute when `‖x^(k+1)‖∞` is small. Mirrors Hartung §4.4 criterion (ii).

use thiserror::Error;

use crate::matrix::Matrix;
use crate::norms::vec_norm_inf;

#[derive(Debug, Error, PartialEq)]
pub enum IterativeError {
    #[error("coefficient matrix must be square, got {rows}x{cols}")]
    NotSquare { rows: usize, cols: usize },
    #[error("dimension mismatch: A is {n_a}x{n_a} but b has length {n_b}")]
    DimensionMismatch { n_a: usize, n_b: usize },
    #[error("initial guess x0 has length {got}, expected {want}")]
    BadInitialGuess { got: usize, want: usize },
    #[error("zero diagonal entry at row {row}; permute rows so a_ii != 0 before iterating")]
    ZeroDiagonal { row: usize },
    #[error("did not converge in {max} iterations (last successive-diff = {last_diff:e})")]
    DidNotConverge { max: usize, last_diff: f64 },
    #[error("iteration produced non-finite value at iter {iter}")]
    NonFinite { iter: usize },
}

#[derive(Debug, Clone)]
pub struct IterativeReport {
    pub x: Vec<f64>,
    pub iterations: usize,
    /// True if the stopping criterion was met within `max_iter`.
    pub converged: bool,
    /// `‖x^(k+1) - x^(k)‖∞` at the last step.
    pub final_diff: f64,
    /// Per-iteration `‖x^(k+1) - x^(k)‖∞`. Capped at [`HISTORY_LIMIT`] so a
    /// runaway iteration can't balloon memory.
    pub history: Vec<f64>,
}

/// Maximum number of history samples retained. Beyond this, additional steps
/// still run but are not recorded — keeping the report bounded in size.
pub const HISTORY_LIMIT: usize = 1024;

#[derive(Debug, Clone, Copy)]
pub struct IterativeOptions {
    pub tol: f64,
    pub max_iter: usize,
}

impl Default for IterativeOptions {
    fn default() -> Self {
        Self {
            tol: 1e-10,
            max_iter: 1000,
        }
    }
}

/// True if `‖A‖_∞` for the off-diagonal part is strictly less than the
/// diagonal, i.e. `|a_ii| > Σ_{j≠i} |a_ij|` for every row.
///
/// Sufficient (not necessary) condition for both Jacobi (Thm 4.11) and
/// Gauss-Seidel (Thm 4.15) to converge from any starting point.
pub fn is_diagonally_dominant(a: &Matrix) -> bool {
    let (rows, cols) = a.shape();
    if rows != cols || rows == 0 {
        return false;
    }
    for i in 0..rows {
        let diag = a.get(i, i).unwrap().abs();
        let mut off = 0.0_f64;
        for j in 0..cols {
            if j != i {
                off += a.get(i, j).unwrap().abs();
            }
        }
        if !(diag > off) {
            return false;
        }
    }
    true
}

fn validate(a: &Matrix, b: &[f64], x0: Option<&[f64]>) -> Result<usize, IterativeError> {
    let (rows, cols) = a.shape();
    if rows != cols {
        return Err(IterativeError::NotSquare { rows, cols });
    }
    if b.len() != rows {
        return Err(IterativeError::DimensionMismatch {
            n_a: rows,
            n_b: b.len(),
        });
    }
    if let Some(x) = x0 {
        if x.len() != rows {
            return Err(IterativeError::BadInitialGuess {
                got: x.len(),
                want: rows,
            });
        }
    }
    for i in 0..rows {
        if a.get(i, i).unwrap() == 0.0 {
            return Err(IterativeError::ZeroDiagonal { row: i });
        }
    }
    Ok(rows)
}

fn stop_reached(diff: f64, x_next: &[f64], tol: f64) -> bool {
    let scale = vec_norm_inf(x_next);
    if scale > 1.0 {
        diff / scale < tol
    } else {
        diff < tol
    }
}

/// Jacobi iteration (Hartung eq. 4.15):
///
/// ```text
///   x_i^(k+1) = ( b_i − Σ_{j≠i} a_ij · x_j^(k) ) / a_ii
/// ```
///
/// Uses two buffers — one for the current iterate, one for the next — so
/// every component of `x^(k+1)` is computed from values of `x^(k)` only.
pub fn jacobi(
    a: &Matrix,
    b: &[f64],
    x0: Option<&[f64]>,
    opts: IterativeOptions,
) -> Result<IterativeReport, IterativeError> {
    let n = validate(a, b, x0)?;

    let mut x: Vec<f64> = match x0 {
        Some(v) => v.to_vec(),
        None => vec![0.0; n],
    };
    let mut x_next = vec![0.0; n];
    let mut history: Vec<f64> = Vec::new();

    for k in 1..=opts.max_iter {
        for i in 0..n {
            let mut s = b[i];
            for j in 0..n {
                if j != i {
                    s -= a.get(i, j).unwrap() * x[j];
                }
            }
            let xi = s / a.get(i, i).unwrap();
            if !xi.is_finite() {
                return Err(IterativeError::NonFinite { iter: k });
            }
            x_next[i] = xi;
        }
        // Successive-difference norm.
        let diff = x_next
            .iter()
            .zip(x.iter())
            .fold(0.0_f64, |acc, (a, b)| acc.max((a - b).abs()));
        if history.len() < HISTORY_LIMIT {
            history.push(diff);
        }
        if stop_reached(diff, &x_next, opts.tol) {
            std::mem::swap(&mut x, &mut x_next);
            return Ok(IterativeReport {
                x,
                iterations: k,
                converged: true,
                final_diff: diff,
                history,
            });
        }
        std::mem::swap(&mut x, &mut x_next);
    }

    let last_diff = history.last().copied().unwrap_or(f64::NAN);
    Err(IterativeError::DidNotConverge {
        max: opts.max_iter,
        last_diff,
    })
}

/// Gauss-Seidel iteration (Hartung eq. 4.17):
///
/// ```text
///   x_i^(k+1) = ( b_i − Σ_{j<i} a_ij · x_j^(k+1) − Σ_{j>i} a_ij · x_j^(k) ) / a_ii
/// ```
///
/// Updates `x` in place: by the time we use `x_j^(k+1)` for `j < i`, we've
/// already written it. Typically faster than Jacobi on the same problem
/// (the book demonstrates this on Example 4.12: 11 iter vs 18).
pub fn gauss_seidel(
    a: &Matrix,
    b: &[f64],
    x0: Option<&[f64]>,
    opts: IterativeOptions,
) -> Result<IterativeReport, IterativeError> {
    let n = validate(a, b, x0)?;

    let mut x: Vec<f64> = match x0 {
        Some(v) => v.to_vec(),
        None => vec![0.0; n],
    };
    let mut history: Vec<f64> = Vec::new();

    for k in 1..=opts.max_iter {
        let mut max_diff = 0.0_f64;
        for i in 0..n {
            let mut s = b[i];
            for j in 0..n {
                if j != i {
                    s -= a.get(i, j).unwrap() * x[j];
                }
            }
            let xi = s / a.get(i, i).unwrap();
            if !xi.is_finite() {
                return Err(IterativeError::NonFinite { iter: k });
            }
            let d = (xi - x[i]).abs();
            if d > max_diff {
                max_diff = d;
            }
            x[i] = xi;
        }
        if history.len() < HISTORY_LIMIT {
            history.push(max_diff);
        }
        if stop_reached(max_diff, &x, opts.tol) {
            return Ok(IterativeReport {
                x,
                iterations: k,
                converged: true,
                final_diff: max_diff,
                history,
            });
        }
    }

    let last_diff = history.last().copied().unwrap_or(f64::NAN);
    Err(IterativeError::DidNotConverge {
        max: opts.max_iter,
        last_diff,
    })
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

    /// The book's Example 4.8 (and 4.12): same 3×3 system used to demo both
    /// iterations. Solution: (1, -2, 3).
    fn book_system() -> (Matrix, Vec<f64>, Vec<f64>) {
        let a = mat(3, 3, &[5.0, 3.0, -1.0, 2.0, -10.0, 1.0, -3.0, 4.0, -12.0]);
        let b = vec![-4.0, 25.0, -47.0];
        let exact = vec![1.0, -2.0, 3.0];
        (a, b, exact)
    }

    #[test]
    fn jacobi_book_example_4_8() {
        let (a, b, exact) = book_system();
        let opts = IterativeOptions {
            tol: 1e-6,
            max_iter: 100,
        };
        let r = jacobi(&a, &b, None, opts).unwrap();
        assert!(r.converged);
        assert!(close(&r.x, &exact, 1e-5), "got {:?}", r.x);
        // Book Table 4.1: ~18 iterations to settle.
        assert!(r.iterations <= 22, "iterations = {}", r.iterations);
    }

    #[test]
    fn gauss_seidel_book_example_4_12() {
        let (a, b, exact) = book_system();
        let opts = IterativeOptions {
            tol: 1e-6,
            max_iter: 100,
        };
        let r = gauss_seidel(&a, &b, None, opts).unwrap();
        assert!(r.converged);
        assert!(close(&r.x, &exact, 1e-5));
        // Book Table 4.2: 11 iterations to settle — Gauss-Seidel must be
        // strictly faster than Jacobi on this dominantly-diagonal system.
        let r_jac = jacobi(
            &a,
            &b,
            None,
            IterativeOptions {
                tol: 1e-6,
                max_iter: 100,
            },
        )
        .unwrap();
        assert!(
            r.iterations < r_jac.iterations,
            "G-S took {} iter, Jacobi took {}",
            r.iterations,
            r_jac.iterations
        );
    }

    #[test]
    fn diagonal_dominance_detection() {
        // Strictly diagonally dominant.
        let a = mat(3, 3, &[10.0, 2.0, 3.0, 1.0, 8.0, 1.0, 2.0, 2.0, 9.0]);
        assert!(is_diagonally_dominant(&a));
        // Not dominant: row 2 has |8| but column sum is 9.
        let a = mat(2, 2, &[2.0, 3.0, 1.0, 1.0]);
        assert!(!is_diagonally_dominant(&a));
    }

    #[test]
    fn diagonally_dominant_converges_from_any_start(){
        // Thm 4.11 / 4.15: dominant → converges. Try a wild starting point.
        let a = mat(3, 3, &[10.0, -1.0, 2.0, -1.0, 11.0, -1.0, 2.0, -1.0, 10.0]);
        let b = vec![6.0, 25.0, -11.0];
        let bad_x0 = vec![1e6, -1e6, 1e6];
        let r = gauss_seidel(
            &a,
            &b,
            Some(&bad_x0),
            IterativeOptions {
                tol: 1e-10,
                max_iter: 200,
            },
        )
        .unwrap();
        assert!(r.converged);
        // Verify A x ≈ b.
        let ax: Vec<f64> = (0..3)
            .map(|i| (0..3).map(|j| a.get(i, j).unwrap() * r.x[j]).sum())
            .collect();
        assert!(close(&ax, &b, 1e-8), "Ax = {ax:?}");
    }

    #[test]
    fn jacobi_diverges_on_indominant_matrix() {
        // ρ(T_J) > 1 case: row sums dominate diagonal.
        let a = mat(2, 2, &[1.0, 2.0, 3.0, 1.0]);
        let b = vec![3.0, 5.0];
        let r = jacobi(
            &a,
            &b,
            None,
            IterativeOptions {
                tol: 1e-6,
                max_iter: 50,
            },
        );
        // We expect either DidNotConverge or NonFinite (the iterates blow up).
        match r {
            Err(IterativeError::DidNotConverge { .. }) | Err(IterativeError::NonFinite { .. }) => {}
            other => panic!("expected divergence error, got {other:?}"),
        }
    }

    #[test]
    fn zero_diagonal_rejected() {
        let a = mat(2, 2, &[0.0, 1.0, 1.0, 0.0]);
        let b = vec![1.0, 1.0];
        let err = jacobi(&a, &b, None, IterativeOptions::default()).unwrap_err();
        assert!(matches!(err, IterativeError::ZeroDiagonal { row: 0 }));
    }

    #[test]
    fn shape_mismatch_rejected() {
        let a = mat(2, 3, &[1.0; 6]);
        let b = vec![1.0, 2.0];
        let err = jacobi(&a, &b, None, IterativeOptions::default()).unwrap_err();
        assert!(matches!(err, IterativeError::NotSquare { .. }));

        let a = mat(2, 2, &[1.0, 0.0, 0.0, 1.0]);
        let b = vec![1.0, 2.0, 3.0];
        let err = jacobi(&a, &b, None, IterativeOptions::default()).unwrap_err();
        assert!(matches!(err, IterativeError::DimensionMismatch { .. }));
    }

    #[test]
    fn history_is_recorded() {
        let (a, b, _) = book_system();
        let r = jacobi(&a, &b, None, IterativeOptions::default()).unwrap();
        assert_eq!(r.history.len(), r.iterations);
        // History should be monotonically decreasing (mostly) — at minimum,
        // last entry should equal final_diff.
        assert_eq!(*r.history.last().unwrap(), r.final_diff);
        // First diff > last diff (assuming we actually converged).
        assert!(r.history[0] > r.final_diff);
    }
}
