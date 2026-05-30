//! Direct solvers for `A x = b`, following Hartung *Introduction to
//! Numerical Analysis* (2018) Chapter 3.
//!
//! All entry points take owned `Matrix`/`Vec<f64>` and never panic on bad
//! input; structural problems (non-square, shape mismatch, singularity) flow
//! through [`LinearError`].
//!
//! Algorithms implemented:
//!
//! * [`back_substitute`] — Algorithm 3.21. Building block.
//! * [`solve_gauss`] — Algorithm 3.23, no pivoting. Fails on a zero pivot.
//! * [`solve_partial_pivot`] — partial pivoting (§3.3). Production default.
//! * [`solve_scaled_partial_pivot`] — Algorithm 3.31, scaled with implicit
//!   scaling. Better when row magnitudes differ wildly.
//! * [`solve_tridiagonal`] — Algorithm 3.37 (Thomas), `5n−4` operations.

use thiserror::Error;

use crate::matrix::Matrix;

/// Below this magnitude we treat a pivot as zero. Tiny but nonzero pivots
/// still pass — that's what partial pivoting is for.
const PIVOT_FLOOR: f64 = 1e-300;

#[derive(Debug, Error, PartialEq)]
pub enum LinearError {
    #[error("coefficient matrix must be square, got {rows}x{cols}")]
    NotSquare { rows: usize, cols: usize },
    #[error("dimension mismatch: A is {n_a}x{n_a} but b has length {n_b}")]
    DimensionMismatch { n_a: usize, n_b: usize },
    #[error("singular matrix (pivot at step {step} is zero or below {PIVOT_FLOOR:e})")]
    SingularMatrix { step: usize },
    #[error("zero pivot encountered at row {row}; partial pivoting would fix this")]
    ZeroPivot { row: usize },
    #[error("tridiagonal vectors must satisfy len(d)=len(b)=n, len(a)=len(c)=n-1; got {got}")]
    BadTridiagonalShape { got: String },
}

/// Solve `U x = b` where `U` is upper-triangular (entries below the diagonal
/// are ignored). Returns `x` such that `U x = b`.
///
/// Reference: Hartung Algorithm 3.21. Cost: `n²/2` mul/div + `n²/2` add/sub.
pub fn back_substitute(u: &Matrix, b: &[f64]) -> Result<Vec<f64>, LinearError> {
    let (rows, cols) = u.shape();
    if rows != cols {
        return Err(LinearError::NotSquare { rows, cols });
    }
    if b.len() != rows {
        return Err(LinearError::DimensionMismatch {
            n_a: rows,
            n_b: b.len(),
        });
    }
    let n = rows;
    let mut x = vec![0.0; n];
    // x_n = b_n / a_nn ; then x_i = (b_i - Σ_{j>i} a_ij x_j) / a_ii
    for i in (0..n).rev() {
        let diag = u.get(i, i).unwrap();
        if diag.abs() < PIVOT_FLOOR {
            return Err(LinearError::SingularMatrix { step: i });
        }
        let mut s = b[i];
        for j in (i + 1)..n {
            s -= u.get(i, j).unwrap() * x[j];
        }
        x[i] = s / diag;
    }
    Ok(x)
}

/// Solve `L x = b` where `L` is lower-triangular (entries above the diagonal
/// are ignored). Provided alongside [`back_substitute`] since Cholesky and
/// LU (Chapter 5) will need it.
pub fn forward_substitute(l: &Matrix, b: &[f64]) -> Result<Vec<f64>, LinearError> {
    let (rows, cols) = l.shape();
    if rows != cols {
        return Err(LinearError::NotSquare { rows, cols });
    }
    if b.len() != rows {
        return Err(LinearError::DimensionMismatch {
            n_a: rows,
            n_b: b.len(),
        });
    }
    let n = rows;
    let mut x = vec![0.0; n];
    for i in 0..n {
        let diag = l.get(i, i).unwrap();
        if diag.abs() < PIVOT_FLOOR {
            return Err(LinearError::SingularMatrix { step: i });
        }
        let mut s = b[i];
        for j in 0..i {
            s -= l.get(i, j).unwrap() * x[j];
        }
        x[i] = s / diag;
    }
    Ok(x)
}

/// Build the augmented matrix `[A | b]` as a flat `Vec<Vec<f64>>` of rows,
/// for in-place elimination. Returns an error on shape problems.
fn augment(a: &Matrix, b: &[f64]) -> Result<Vec<Vec<f64>>, LinearError> {
    let (rows, cols) = a.shape();
    if rows != cols {
        return Err(LinearError::NotSquare { rows, cols });
    }
    if b.len() != rows {
        return Err(LinearError::DimensionMismatch {
            n_a: rows,
            n_b: b.len(),
        });
    }
    let mut aug = Vec::with_capacity(rows);
    for i in 0..rows {
        let mut row = Vec::with_capacity(cols + 1);
        for j in 0..cols {
            row.push(a.get(i, j).unwrap());
        }
        row.push(b[i]);
        aug.push(row);
    }
    Ok(aug)
}

/// Back-substitute on an in-memory augmented matrix `[U | b]` (`n × (n+1)`),
/// where the upper-triangular part is in columns `0..n` and the right-hand
/// side is in column `n`. Used by all the Gaussian-elimination variants.
fn back_substitute_augmented(aug: &[Vec<f64>]) -> Result<Vec<f64>, LinearError> {
    let n = aug.len();
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let diag = aug[i][i];
        if diag.abs() < PIVOT_FLOOR {
            return Err(LinearError::SingularMatrix { step: i });
        }
        let mut s = aug[i][n];
        for j in (i + 1)..n {
            s -= aug[i][j] * x[j];
        }
        x[i] = s / diag;
    }
    Ok(x)
}

/// Gaussian elimination without pivoting (Hartung Algorithm 3.23).
///
/// Returns [`LinearError::ZeroPivot`] if a pivot vanishes — use
/// [`solve_partial_pivot`] for those cases. Stable when `A` is diagonally
/// dominant (Thm 3.32) or symmetric positive-definite (Thm 3.33).
pub fn solve_gauss(a: &Matrix, b: &[f64]) -> Result<Vec<f64>, LinearError> {
    let mut aug = augment(a, b)?;
    let n = aug.len();

    for k in 0..n.saturating_sub(1) {
        let pivot = aug[k][k];
        if pivot.abs() < PIVOT_FLOOR {
            return Err(LinearError::ZeroPivot { row: k });
        }
        for i in (k + 1)..n {
            let factor = aug[i][k] / pivot;
            // a_ij <- a_ij - factor * a_kj   for j = k..=n
            for j in k..=n {
                aug[i][j] -= factor * aug[k][j];
            }
        }
    }
    back_substitute_augmented(&aug)
}

/// Gaussian elimination with partial pivoting (§3.3). The production default.
///
/// At step `k`, find the row `l ∈ [k, n)` maximizing `|a_lk|` and swap rows
/// `k` and `l` before eliminating. Theorem 3.26: this succeeds iff `det(A) ≠ 0`.
pub fn solve_partial_pivot(a: &Matrix, b: &[f64]) -> Result<Vec<f64>, LinearError> {
    let mut aug = augment(a, b)?;
    let n = aug.len();

    for k in 0..n.saturating_sub(1) {
        // Locate row with largest |aug[i][k]| in rows k..n.
        let mut best = k;
        let mut best_mag = aug[k][k].abs();
        for i in (k + 1)..n {
            let m = aug[i][k].abs();
            if m > best_mag {
                best_mag = m;
                best = i;
            }
        }
        if best_mag < PIVOT_FLOOR {
            return Err(LinearError::SingularMatrix { step: k });
        }
        if best != k {
            aug.swap(k, best);
        }
        let pivot = aug[k][k];
        for i in (k + 1)..n {
            let factor = aug[i][k] / pivot;
            for j in k..=n {
                aug[i][j] -= factor * aug[k][j];
            }
        }
    }
    back_substitute_augmented(&aug)
}

/// Gaussian elimination with scaled partial pivoting (Hartung Algorithm 3.31,
/// with implicit scaling — the rows are not actually multiplied, only the
/// pivot-selection metric is scaled).
///
/// Compute `s_i = max_j |a_ij|` once. At each step pick row `l` maximizing
/// `|a_lk| / s_l`. Theorem 3.30 says picking by `|a_ij| / β^{r_i}` (where `β`
/// is the floating-point base) is exact — here we use the row max directly,
/// which is the common simplification.
pub fn solve_scaled_partial_pivot(a: &Matrix, b: &[f64]) -> Result<Vec<f64>, LinearError> {
    let mut aug = augment(a, b)?;
    let n = aug.len();

    // Scale factors from the *original* matrix only — they don't change.
    let mut s = vec![0.0; n];
    for i in 0..n {
        let mut m = 0.0_f64;
        for j in 0..n {
            m = m.max(aug[i][j].abs());
        }
        if m == 0.0 {
            return Err(LinearError::SingularMatrix { step: i });
        }
        s[i] = m;
    }

    for k in 0..n.saturating_sub(1) {
        let mut best = k;
        let mut best_metric = aug[k][k].abs() / s[k];
        for i in (k + 1)..n {
            let metric = aug[i][k].abs() / s[i];
            if metric > best_metric {
                best_metric = metric;
                best = i;
            }
        }
        if best_metric < PIVOT_FLOOR {
            return Err(LinearError::SingularMatrix { step: k });
        }
        if best != k {
            aug.swap(k, best);
            s.swap(k, best);
        }
        let pivot = aug[k][k];
        for i in (k + 1)..n {
            let factor = aug[i][k] / pivot;
            for j in k..=n {
                aug[i][j] -= factor * aug[k][j];
            }
        }
    }
    back_substitute_augmented(&aug)
}

/// Solve a tridiagonal system using the Thomas algorithm (Hartung 3.37):
///
/// ```text
///   ┌ d₁ c₁                  ┐ ┌ x₁ ┐   ┌ b₁ ┐
///   │ a₁ d₂ c₂               │ │ x₂ │   │ b₂ │
///   │    a₂ d₃ c₃            │ │ x₃ │ = │ b₃ │
///   │           ⋱   ⋱        │ │ ⋮  │   │ ⋮  │
///   │                aₙ₋₁ dₙ ┘ ┘ xₙ ┘   ┘ bₙ ┘
/// ```
///
/// Vector lengths: `a.len() == c.len() == n − 1`, `d.len() == b.len() == n`.
/// Operation count: `5n − 4`.
pub fn solve_tridiagonal(
    a: &[f64],
    d: &[f64],
    c: &[f64],
    b: &[f64],
) -> Result<Vec<f64>, LinearError> {
    let n = d.len();
    if a.len() + 1 != n || c.len() + 1 != n || b.len() != n {
        return Err(LinearError::BadTridiagonalShape {
            got: format!(
                "a={}, d={}, c={}, b={}",
                a.len(),
                d.len(),
                c.len(),
                b.len()
            ),
        });
    }
    if n == 0 {
        return Ok(Vec::new());
    }

    let mut d = d.to_vec();
    let mut b = b.to_vec();

    for i in 1..n {
        if d[i - 1].abs() < PIVOT_FLOOR {
            return Err(LinearError::SingularMatrix { step: i - 1 });
        }
        let m = a[i - 1] / d[i - 1];
        d[i] -= m * c[i - 1];
        b[i] -= m * b[i - 1];
    }
    if d[n - 1].abs() < PIVOT_FLOOR {
        return Err(LinearError::SingularMatrix { step: n - 1 });
    }

    let mut x = vec![0.0; n];
    x[n - 1] = b[n - 1] / d[n - 1];
    for i in (0..(n - 1)).rev() {
        x[i] = (b[i] - c[i] * x[i + 1]) / d[i];
    }
    Ok(x)
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
    fn back_substitute_book_example_3_20() {
        // Hartung Example 3.20:
        //   2 x1 -   x2 + 3 x3 +   x4 =   3
        //          3 x2 -   x3 + 2 x4 =  13
        //                 2 x3 -   x4 =  -2
        //                        3 x4 =  12
        // Solution: x = (-1, 2, 1, 4)
        let u = mat(
            4,
            4,
            &[
                2.0, -1.0, 3.0, 1.0, 0.0, 3.0, -1.0, 2.0, 0.0, 0.0, 2.0, -1.0, 0.0, 0.0, 0.0, 3.0,
            ],
        );
        let b = [3.0, 13.0, -2.0, 12.0];
        let x = back_substitute(&u, &b).unwrap();
        assert!(close(&x, &[-1.0, 2.0, 1.0, 4.0], 1e-12), "got {x:?}");
    }

    #[test]
    fn forward_substitute_simple() {
        // L = [[2,0,0],[1,3,0],[4,5,6]], b = [4, 11, 32]
        //   2 x1 = 4               -> x1 = 2
        //   1 x1 + 3 x2 = 11       -> x2 = 3
        //   4 x1 + 5 x2 + 6 x3 = 32 -> x3 = (32 - 8 - 15)/6 = 1.5
        let l = mat(3, 3, &[2.0, 0.0, 0.0, 1.0, 3.0, 0.0, 4.0, 5.0, 6.0]);
        let b = [4.0, 11.0, 32.0];
        let x = forward_substitute(&l, &b).unwrap();
        assert!(close(&x, &[2.0, 3.0, 1.5], 1e-12), "got {x:?}");
    }

    #[test]
    fn solve_gauss_book_example_3_22() {
        // Hartung Example 3.22: should converge to x = (-3, 2, 4, -2).
        let a = mat(
            4,
            4,
            &[
                1.0, -2.0, -2.0, -2.0, 2.0, -1.0, 2.0, 4.0, -1.0, 2.0, 3.0, -4.0, -2.0, 1.0, 4.0,
                -2.0,
            ],
        );
        let b = [-11.0, -8.0, 27.0, 28.0];
        let x = solve_gauss(&a, &b).unwrap();
        assert!(close(&x, &[-3.0, 2.0, 4.0, -2.0], 1e-10), "got {x:?}");
    }

    #[test]
    fn solve_gauss_zero_pivot_fails() {
        // Hartung Example 3.24: pivot becomes zero at second step.
        let a = mat(
            4,
            4,
            &[
                2.0, -1.0, 0.0, -3.0, 2.0, -1.0, 1.0, 5.0, -3.0, 1.0, 1.0, -2.0, 2.0, 4.0, 0.0,
                -1.0,
            ],
        );
        let b = [8.0, 2.0, -5.0, 21.0];
        let err = solve_gauss(&a, &b).unwrap_err();
        assert!(matches!(err, LinearError::ZeroPivot { .. }));
    }

    #[test]
    fn partial_pivot_fixes_zero_pivot() {
        let a = mat(
            4,
            4,
            &[
                2.0, -1.0, 0.0, -3.0, 2.0, -1.0, 1.0, 5.0, -3.0, 1.0, 1.0, -2.0, 2.0, 4.0, 0.0,
                -1.0,
            ],
        );
        let b = [8.0, 2.0, -5.0, 21.0];
        // Book gives x = (4, 3, 2, -1).
        let x = solve_partial_pivot(&a, &b).unwrap();
        assert!(close(&x, &[4.0, 3.0, 2.0, -1.0], 1e-10), "got {x:?}");
    }

    #[test]
    fn partial_pivot_recovers_book_example_3_22() {
        // Same as Example 3.22 — partial pivoting must agree with plain Gauss.
        let a = mat(
            4,
            4,
            &[
                1.0, -2.0, -2.0, -2.0, 2.0, -1.0, 2.0, 4.0, -1.0, 2.0, 3.0, -4.0, -2.0, 1.0, 4.0,
                -2.0,
            ],
        );
        let b = [-11.0, -8.0, 27.0, 28.0];
        let x = solve_partial_pivot(&a, &b).unwrap();
        assert!(close(&x, &[-3.0, 2.0, 4.0, -2.0], 1e-10));
    }

    #[test]
    fn partial_pivot_detects_singular() {
        // Singular: second row is 2x first row.
        let a = mat(2, 2, &[1.0, 2.0, 2.0, 4.0]);
        let b = [3.0, 6.0];
        let err = solve_partial_pivot(&a, &b).unwrap_err();
        assert!(matches!(err, LinearError::SingularMatrix { .. }));
    }

    #[test]
    fn scaled_partial_pivot_basic_correctness() {
        // On a well-behaved system, scaled partial pivot must match the others.
        let a = mat(3, 3, &[1.0, 2.0, 3.0, 2.0, 5.0, 3.0, 1.0, 0.0, 8.0]);
        let b = [14.0, 18.0, 25.0];
        let x_pp = solve_partial_pivot(&a, &b).unwrap();
        let x_sp = solve_scaled_partial_pivot(&a, &b).unwrap();
        assert!(close(&x_pp, &x_sp, 1e-10), "pp={x_pp:?} sp={x_sp:?}");
    }

    #[test]
    fn dimension_mismatch_caught() {
        let a = mat(2, 2, &[1.0, 0.0, 0.0, 1.0]);
        let b = [1.0, 2.0, 3.0];
        assert!(matches!(
            solve_gauss(&a, &b),
            Err(LinearError::DimensionMismatch { n_a: 2, n_b: 3 })
        ));
    }

    #[test]
    fn non_square_caught() {
        let a = mat(2, 3, &[1.0; 6]);
        let b = [1.0, 2.0];
        assert!(matches!(
            solve_gauss(&a, &b),
            Err(LinearError::NotSquare { rows: 2, cols: 3 })
        ));
    }

    #[test]
    fn tridiagonal_matches_dense_solver() {
        // Tridiagonal system:
        //   2 x1 -   x2          =  1
        //  -1 x1 + 2 x2 -   x3   =  0
        //         -1 x2 + 2 x3   =  1
        // Exact solution: x1 = x3 = 1, x2 = 1.
        let a = [-1.0, -1.0]; // sub-diagonal
        let d = [2.0, 2.0, 2.0];
        let c = [-1.0, -1.0]; // super-diagonal
        let b = [1.0, 0.0, 1.0];
        let x = solve_tridiagonal(&a, &d, &c, &b).unwrap();
        assert!(close(&x, &[1.0, 1.0, 1.0], 1e-12), "got {x:?}");

        // Same system as a dense matrix — partial pivot must agree.
        let dense = mat(3, 3, &[2.0, -1.0, 0.0, -1.0, 2.0, -1.0, 0.0, -1.0, 2.0]);
        let x_dense = solve_partial_pivot(&dense, &b).unwrap();
        assert!(close(&x, &x_dense, 1e-12));
    }

    #[test]
    fn tridiagonal_bad_shape() {
        let err =
            solve_tridiagonal(&[-1.0], &[2.0, 2.0, 2.0], &[-1.0, -1.0], &[1.0, 0.0, 1.0]).unwrap_err();
        assert!(matches!(err, LinearError::BadTridiagonalShape { .. }));
    }

    /// Hartung Example 3.25 — the famous 4-digit catastrophe. The textbook
    /// shows naive Gauss gives `x1 = -100` (300% error) while partial pivoting
    /// gives the exact solution `x1 = 50, x2 = 2`.
    ///
    /// In f64 we have ~16 digits of precision, so the catastrophic 4-digit
    /// outcome doesn't reproduce. What does reproduce is that **partial
    /// pivoting is more accurate than naive Gauss** because dividing by 0.0002
    /// still introduces more rounding than dividing by 5.06.
    #[test]
    fn example_3_25_partial_pivot_more_accurate() {
        let a = mat(2, 2, &[0.0002, -30.5, 5.060, -1.05]);
        let b = [-60.99, 250.9];
        // Exact: x1 = 50, x2 = 2 (per the book).
        let x_naive = solve_gauss(&a, &b).unwrap();
        let x_pp = solve_partial_pivot(&a, &b).unwrap();

        let err_naive = ((x_naive[0] - 50.0).powi(2) + (x_naive[1] - 2.0).powi(2)).sqrt();
        let err_pp = ((x_pp[0] - 50.0).powi(2) + (x_pp[1] - 2.0).powi(2)).sqrt();

        // Both very accurate in f64, but partial pivoting must be at least
        // as accurate. (In single precision the gap would be enormous.)
        assert!(err_pp <= err_naive + 1e-12, "naive={err_naive:e} pp={err_pp:e}");
        assert!(err_pp < 1e-10);
    }
}
