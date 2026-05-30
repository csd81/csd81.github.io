//! Matrix factorizations from Hartung Chapter 5.
//!
//! Two factorizations live here:
//!
//! ## LU (Doolittle) — Algorithm in §5.1
//!
//! For an `n × n` matrix `A`, we seek `A = L U` with
//!
//! * `L` unit lower-triangular (`l_ii = 1`, `l_ij = 0` for `j > i`)
//! * `U` upper-triangular (`u_ij = 0` for `i > j`)
//!
//! This factorization is *unique* when it exists (Thm 5.1). It exists without
//! row permutations iff every principal minor of `A` is nonzero (Thm 5.4);
//! otherwise some permutation `P` yields `PA = LU` (Thm 5.5). We compute it
//! by running Gaussian elimination and *storing the multipliers* `l_ik` in
//! the slots they zeroed out — so the entire factorization fits in one
//! `n × n` buffer alongside `U`.
//!
//! ## Cholesky — Algorithm 5.8 in §5.2
//!
//! For a *symmetric positive-definite* matrix `A`, we seek lower-triangular
//! `L` with positive diagonal such that
//!
//! ```text
//!   A = L · Lᵀ
//! ```
//!
//! Cholesky uses ~`n³/6` operations — *half* the work of LU — and never needs
//! pivoting (Thm 3.33 from Chapter 3). It's the right tool whenever the
//! coefficient matrix is known to be SPD: covariance matrices, normal
//! equations from least squares, stiffness matrices from FEM, etc.
//!
//! ## Why factor?
//!
//! Once `A = LU` (or `LLᵀ`) is in hand, every additional right-hand side `b`
//! costs only `O(n²)` to solve via two triangular substitutions, vs `O(n³)`
//! for a fresh Gaussian elimination. This is the `n³ → n²` per-RHS win that
//! makes factor-then-solve the standard workhorse of numerical linear
//! algebra.

use thiserror::Error;

use crate::linear::{self, LinearError};
use crate::matrix::Matrix;

#[derive(Debug, Error, PartialEq)]
pub enum FactorError {
    #[error("matrix must be square, got {rows}x{cols}")]
    NotSquare { rows: usize, cols: usize },
    #[error("matrix is singular (pivot at step {step} is zero)")]
    Singular { step: usize },
    #[error("matrix is not symmetric within tolerance {tol:e}; A[{i},{j}]={a_ij}, A[{j},{i}]={a_ji}")]
    NotSymmetric {
        i: usize,
        j: usize,
        a_ij: f64,
        a_ji: f64,
        tol: f64,
    },
    #[error("matrix is not positive definite (non-positive diagonal at step {step}: {diagonal})")]
    NotPositiveDefinite { step: usize, diagonal: f64 },
    #[error("dimension mismatch: factor is {n}x{n} but right-hand side has length {b_len}")]
    DimensionMismatch { n: usize, b_len: usize },
    #[error("LU factorization without pivoting requires a nonzero pivot at every step (step {step} had zero); use the pivoted variant")]
    ZeroPivotNoPermutation { step: usize },
    #[error("propagated linear-solver error: {0}")]
    Linear(#[from] LinearError),
}

const PIVOT_FLOOR: f64 = 1e-300;

// ────────────────────────────────────────────────────────────────────────
// LU factorization
// ────────────────────────────────────────────────────────────────────────

/// An LU factorization with optional partial pivoting.
///
/// The combined storage `lu` packs both factors into one `n × n` matrix:
/// entries strictly below the diagonal hold `L`'s subdiagonal multipliers
/// (with `L`'s unit diagonal implicit), and entries on/above the diagonal
/// hold `U`. The `perm` field records the row permutation applied to `A`,
/// so that `P · A = L · U`. When the factorization was built *without*
/// pivoting, `perm` is the identity and `sign = +1`.
#[derive(Debug, Clone)]
pub struct LUFactor {
    pub lu: Matrix,
    /// `perm[i] = j` means "row j of the original matrix is row i after permutation".
    pub perm: Vec<usize>,
    /// Sign of the permutation (+1 or -1). Useful for `det(A) = sign · ∏ U_ii`.
    pub sign: i32,
}

impl LUFactor {
    /// Factor `A = P⁻¹ · L · U` with partial pivoting.
    ///
    /// Cost: `n³/3` mul/div + `n³/3` add/sub. Returns `Err(Singular)` if the
    /// pivot magnitude after row selection is below [`PIVOT_FLOOR`].
    pub fn factor(a: &Matrix) -> Result<Self, FactorError> {
        let (rows, cols) = a.shape();
        if rows != cols {
            return Err(FactorError::NotSquare { rows, cols });
        }
        let n = rows;
        // Working buffer; we'll overwrite with L below + U on/above the diagonal.
        let mut lu = a.clone();
        let mut perm: Vec<usize> = (0..n).collect();
        let mut sign: i32 = 1;

        for k in 0..n.saturating_sub(1) {
            // Locate the row with largest |a_ik| in rows k..n.
            let mut best = k;
            let mut best_mag = lu.get(k, k).unwrap().abs();
            for i in (k + 1)..n {
                let m = lu.get(i, k).unwrap().abs();
                if m > best_mag {
                    best_mag = m;
                    best = i;
                }
            }
            if best_mag < PIVOT_FLOOR {
                return Err(FactorError::Singular { step: k });
            }
            if best != k {
                swap_rows(&mut lu, k, best);
                perm.swap(k, best);
                sign = -sign;
            }
            let pivot = lu.get(k, k).unwrap();
            // Eliminate below the diagonal, storing the multiplier where the
            // entry would have been zeroed.
            for i in (k + 1)..n {
                let l_ik = lu.get(i, k).unwrap() / pivot;
                lu.set(i, k, l_ik).unwrap();
                for j in (k + 1)..n {
                    let new = lu.get(i, j).unwrap() - l_ik * lu.get(k, j).unwrap();
                    lu.set(i, j, new).unwrap();
                }
            }
        }
        // Final-step pivot check.
        if lu.get(n - 1, n - 1).unwrap().abs() < PIVOT_FLOOR {
            return Err(FactorError::Singular { step: n - 1 });
        }
        Ok(Self { lu, perm, sign })
    }

    /// Factor `A = L · U` *without* row permutation (Doolittle).
    ///
    /// Matches the book's §5.1 derivation exactly. Fails with
    /// [`FactorError::ZeroPivotNoPermutation`] on any zero pivot — use
    /// [`LUFactor::factor`] (pivoted) for matrices not covered by Thm 5.4.
    pub fn factor_no_pivot(a: &Matrix) -> Result<Self, FactorError> {
        let (rows, cols) = a.shape();
        if rows != cols {
            return Err(FactorError::NotSquare { rows, cols });
        }
        let n = rows;
        let mut lu = a.clone();
        let perm: Vec<usize> = (0..n).collect();

        for k in 0..n.saturating_sub(1) {
            let pivot = lu.get(k, k).unwrap();
            if pivot.abs() < PIVOT_FLOOR {
                return Err(FactorError::ZeroPivotNoPermutation { step: k });
            }
            for i in (k + 1)..n {
                let l_ik = lu.get(i, k).unwrap() / pivot;
                lu.set(i, k, l_ik).unwrap();
                for j in (k + 1)..n {
                    let new = lu.get(i, j).unwrap() - l_ik * lu.get(k, j).unwrap();
                    lu.set(i, j, new).unwrap();
                }
            }
        }
        if lu.get(n - 1, n - 1).unwrap().abs() < PIVOT_FLOOR {
            return Err(FactorError::ZeroPivotNoPermutation { step: n - 1 });
        }
        Ok(Self { lu, perm, sign: 1 })
    }

    /// Solve `A x = b` using this factorization. Cost: `O(n²)`.
    ///
    /// `L y = P b` is solved by forward substitution, then `U x = y` by back
    /// substitution.
    pub fn solve(&self, b: &[f64]) -> Result<Vec<f64>, FactorError> {
        let n = self.lu.rows();
        if b.len() != n {
            return Err(FactorError::DimensionMismatch { n, b_len: b.len() });
        }

        // y = forward_sub(L, P·b). L has implicit unit diagonal.
        let mut y = vec![0.0; n];
        for i in 0..n {
            let mut s = b[self.perm[i]];
            for j in 0..i {
                s -= self.lu.get(i, j).unwrap() * y[j];
            }
            // L_ii = 1 implicitly; no division needed.
            y[i] = s;
        }

        // x = back_sub(U, y).
        let mut x = vec![0.0; n];
        for i in (0..n).rev() {
            let diag = self.lu.get(i, i).unwrap();
            if diag.abs() < PIVOT_FLOOR {
                return Err(FactorError::Singular { step: i });
            }
            let mut s = y[i];
            for j in (i + 1)..n {
                s -= self.lu.get(i, j).unwrap() * x[j];
            }
            x[i] = s / diag;
        }
        Ok(x)
    }

    /// Extract `L` as a fresh matrix (unit lower-triangular).
    pub fn l(&self) -> Matrix {
        let n = self.lu.rows();
        let mut l = Matrix::eye(n);
        for i in 1..n {
            for j in 0..i {
                l.set(i, j, self.lu.get(i, j).unwrap()).unwrap();
            }
        }
        l
    }

    /// Extract `U` as a fresh matrix (upper-triangular).
    pub fn u(&self) -> Matrix {
        let n = self.lu.rows();
        let mut u = Matrix::zeros(n, n);
        for i in 0..n {
            for j in i..n {
                u.set(i, j, self.lu.get(i, j).unwrap()).unwrap();
            }
        }
        u
    }

    /// Extract the permutation matrix `P` such that `P · A = L · U`.
    pub fn p(&self) -> Matrix {
        let n = self.perm.len();
        let mut p = Matrix::zeros(n, n);
        for (i, &j) in self.perm.iter().enumerate() {
            p.set(i, j, 1.0).unwrap();
        }
        p
    }

    /// `det(A) = sign(P) · ∏ U_ii`.
    pub fn det(&self) -> f64 {
        let n = self.lu.rows();
        let mut d = self.sign as f64;
        for i in 0..n {
            d *= self.lu.get(i, i).unwrap();
        }
        d
    }
}

fn swap_rows(m: &mut Matrix, i: usize, j: usize) {
    if i == j {
        return;
    }
    let cols = m.cols();
    for c in 0..cols {
        let a = m.get(i, c).unwrap();
        let b = m.get(j, c).unwrap();
        m.set(i, c, b).unwrap();
        m.set(j, c, a).unwrap();
    }
}

// ────────────────────────────────────────────────────────────────────────
// Cholesky factorization
// ────────────────────────────────────────────────────────────────────────

const SYMMETRY_TOL: f64 = 1e-12;

/// Cholesky factor `L` of a symmetric positive-definite matrix, satisfying
/// `A = L · Lᵀ` with `L` lower-triangular and `L_ii > 0`.
#[derive(Debug, Clone)]
pub struct CholeskyFactor {
    pub l: Matrix,
}

impl CholeskyFactor {
    /// Compute `L` such that `A = L Lᵀ` via Algorithm 5.8.
    ///
    /// Fails with [`FactorError::NotSymmetric`] if `A` is not symmetric to
    /// tolerance `1e-12`, and with [`FactorError::NotPositiveDefinite`] if
    /// any diagonal term `a_jj - Σ_{k<j} l_jk²` is non-positive.
    pub fn factor(a: &Matrix) -> Result<Self, FactorError> {
        let (rows, cols) = a.shape();
        if rows != cols {
            return Err(FactorError::NotSquare { rows, cols });
        }
        // Verify symmetry. We trust callers to know what they're doing, but a
        // misuse here propagates silently into wrong answers — better to be
        // explicit.
        for i in 0..rows {
            for j in (i + 1)..rows {
                let a_ij = a.get(i, j).unwrap();
                let a_ji = a.get(j, i).unwrap();
                if (a_ij - a_ji).abs() > SYMMETRY_TOL {
                    return Err(FactorError::NotSymmetric {
                        i,
                        j,
                        a_ij,
                        a_ji,
                        tol: SYMMETRY_TOL,
                    });
                }
            }
        }

        let n = rows;
        let mut l = Matrix::zeros(n, n);

        // l_11 = sqrt(a_11)
        let a_00 = a.get(0, 0).unwrap();
        if a_00 <= 0.0 {
            return Err(FactorError::NotPositiveDefinite {
                step: 0,
                diagonal: a_00,
            });
        }
        l.set(0, 0, a_00.sqrt()).unwrap();
        // l_i1 = a_i1 / l_11
        let l_00 = l.get(0, 0).unwrap();
        for i in 1..n {
            l.set(i, 0, a.get(i, 0).unwrap() / l_00).unwrap();
        }

        // Inner columns (j = 2..n-1 in 1-indexed; here j = 1..n-1).
        for j in 1..n.saturating_sub(1) {
            // l_jj = sqrt(a_jj − Σ_{k<j} l_jk²)
            let mut s = a.get(j, j).unwrap();
            for k in 0..j {
                let v = l.get(j, k).unwrap();
                s -= v * v;
            }
            if s <= 0.0 {
                return Err(FactorError::NotPositiveDefinite {
                    step: j,
                    diagonal: s,
                });
            }
            l.set(j, j, s.sqrt()).unwrap();
            let l_jj = l.get(j, j).unwrap();
            for i in (j + 1)..n {
                let mut t = a.get(i, j).unwrap();
                for k in 0..j {
                    t -= l.get(i, k).unwrap() * l.get(j, k).unwrap();
                }
                l.set(i, j, t / l_jj).unwrap();
            }
        }

        // l_nn = sqrt(a_nn − Σ_{k<n} l_nk²)
        if n >= 2 {
            let mut s = a.get(n - 1, n - 1).unwrap();
            for k in 0..(n - 1) {
                let v = l.get(n - 1, k).unwrap();
                s -= v * v;
            }
            if s <= 0.0 {
                return Err(FactorError::NotPositiveDefinite {
                    step: n - 1,
                    diagonal: s,
                });
            }
            l.set(n - 1, n - 1, s.sqrt()).unwrap();
        }

        Ok(Self { l })
    }

    /// Solve `A x = b` by `L y = b` (forward sub) then `Lᵀ x = y` (back sub).
    pub fn solve(&self, b: &[f64]) -> Result<Vec<f64>, FactorError> {
        let n = self.l.rows();
        if b.len() != n {
            return Err(FactorError::DimensionMismatch { n, b_len: b.len() });
        }
        // Forward substitution on L.
        let mut y = vec![0.0; n];
        for i in 0..n {
            let diag = self.l.get(i, i).unwrap();
            let mut s = b[i];
            for j in 0..i {
                s -= self.l.get(i, j).unwrap() * y[j];
            }
            y[i] = s / diag;
        }
        // Back substitution on Lᵀ.
        let mut x = vec![0.0; n];
        for i in (0..n).rev() {
            let diag = self.l.get(i, i).unwrap();
            let mut s = y[i];
            for j in (i + 1)..n {
                // L^T[i,j] = L[j,i]
                s -= self.l.get(j, i).unwrap() * x[j];
            }
            x[i] = s / diag;
        }
        Ok(x)
    }

    /// `det(A) = (∏ L_ii)²` — Cholesky's diagonal squared.
    pub fn det(&self) -> f64 {
        let n = self.l.rows();
        let mut p = 1.0;
        for i in 0..n {
            p *= self.l.get(i, i).unwrap();
        }
        p * p
    }
}

// ────────────────────────────────────────────────────────────────────────
// Convenience wrappers — factor and solve in one call
// ────────────────────────────────────────────────────────────────────────

/// Factor `A` (with partial pivoting) and solve `A x = b`. Equivalent to
/// `LUFactor::factor(a)?.solve(b)`, useful when you have a single RHS.
pub fn lu_solve(a: &Matrix, b: &[f64]) -> Result<Vec<f64>, FactorError> {
    LUFactor::factor(a)?.solve(b)
}

/// Factor SPD `A` via Cholesky and solve `A x = b`.
pub fn chol_solve(a: &Matrix, b: &[f64]) -> Result<Vec<f64>, FactorError> {
    CholeskyFactor::factor(a)?.solve(b)
}

/// `det(A)` computed via LU with partial pivoting. Returns 0 for singular A.
pub fn det(a: &Matrix) -> Result<f64, FactorError> {
    match LUFactor::factor(a) {
        Ok(f) => Ok(f.det()),
        Err(FactorError::Singular { .. }) => Ok(0.0),
        Err(e) => Err(e),
    }
}

// Provide a way for the convenience wrappers to use the existing solver as a fallback path.
impl From<FactorError> for linear::LinearError {
    fn from(e: FactorError) -> Self {
        match e {
            FactorError::Linear(le) => le,
            other => linear::LinearError::SingularMatrix {
                step: match other {
                    FactorError::Singular { step } => step,
                    _ => 0,
                },
            },
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn mat(rows: usize, cols: usize, data: &[f64]) -> Matrix {
        Matrix::new(rows, cols, data.to_vec())
    }

    fn close_mat(a: &Matrix, b: &Matrix, tol: f64) -> bool {
        if a.shape() != b.shape() {
            return false;
        }
        a.data().iter().zip(b.data()).all(|(x, y)| (x - y).abs() <= tol)
    }

    // ─── LU ─────────────────────────────────────────────────────────────

    #[test]
    fn lu_book_example_5_3() {
        // Hartung Example 5.3 — the 4×4 matrix from Ex 3.22.
        let a = mat(
            4,
            4,
            &[
                1.0, -2.0, -2.0, -2.0,
                2.0, -1.0, 2.0, 4.0,
                -1.0, 2.0, 3.0, -4.0,
                -2.0, 1.0, 4.0, -2.0,
            ],
        );
        let f = LUFactor::factor_no_pivot(&a).expect("Doolittle should succeed here");

        // Book's expected factors:
        // L = [[1, 0, 0, 0], [2, 1, 0, 0], [-1, 0, 1, 0], [-2, -1, 6, 1]]
        // U = [[1,-2,-2,-2], [0, 3, 6, 8], [0, 0, 1,-6], [0, 0, 0, 38]]
        let l_want = mat(
            4,
            4,
            &[
                1.0, 0.0, 0.0, 0.0,
                2.0, 1.0, 0.0, 0.0,
                -1.0, 0.0, 1.0, 0.0,
                -2.0, -1.0, 6.0, 1.0,
            ],
        );
        let u_want = mat(
            4,
            4,
            &[
                1.0, -2.0, -2.0, -2.0,
                0.0, 3.0, 6.0, 8.0,
                0.0, 0.0, 1.0, -6.0,
                0.0, 0.0, 0.0, 38.0,
            ],
        );
        assert!(close_mat(&f.l(), &l_want, 1e-12), "L = {}", f.l());
        assert!(close_mat(&f.u(), &u_want, 1e-12), "U = {}", f.u());

        // Round-trip: L * U should reconstruct A.
        let prod = f.l().matmul(&f.u()).unwrap();
        assert!(close_mat(&prod, &a, 1e-12));
    }

    #[test]
    fn lu_with_pivoting_satisfies_pa_equals_lu() {
        // Same matrix; with partial pivoting we get some permutation P and PA=LU.
        let a = mat(
            4,
            4,
            &[
                1.0, -2.0, -2.0, -2.0,
                2.0, -1.0, 2.0, 4.0,
                -1.0, 2.0, 3.0, -4.0,
                -2.0, 1.0, 4.0, -2.0,
            ],
        );
        let f = LUFactor::factor(&a).unwrap();
        let pa = f.p().matmul(&a).unwrap();
        let lu = f.l().matmul(&f.u()).unwrap();
        assert!(close_mat(&pa, &lu, 1e-10), "P·A != L·U");
    }

    #[test]
    fn lu_solve_matches_partial_pivot_solver() {
        // Verify the factorization-based solve is equivalent to direct GE.
        let a = mat(3, 3, &[2.0, 1.0, -1.0, -3.0, -1.0, 2.0, -2.0, 1.0, 2.0]);
        let b = [8.0, -11.0, -3.0]; // Exact solution: x = (2, 3, -1)
        let x_factor = LUFactor::factor(&a).unwrap().solve(&b).unwrap();
        let x_direct = linear::solve_partial_pivot(&a, &b).unwrap();
        for (a, b) in x_factor.iter().zip(x_direct.iter()) {
            assert!((a - b).abs() < 1e-10);
        }
        for (a, want) in x_factor.iter().zip([2.0, 3.0, -1.0].iter()) {
            assert!((a - want).abs() < 1e-10);
        }
    }

    #[test]
    fn lu_factorize_once_solve_many() {
        // The reason LU exists: factor n³/3, then each b costs n².
        let a = mat(3, 3, &[4.0, 1.0, 0.0, 1.0, 4.0, 1.0, 0.0, 1.0, 4.0]);
        let f = LUFactor::factor(&a).unwrap();
        for b in [
            vec![5.0, 6.0, 5.0],
            vec![4.0, 7.0, 4.0],
            vec![3.0, 5.0, 5.0],
        ] {
            let x = f.solve(&b).unwrap();
            // Verify A x = b.
            let ax: Vec<f64> = (0..3)
                .map(|i| (0..3).map(|j| a.get(i, j).unwrap() * x[j]).sum())
                .collect();
            for (a, b) in ax.iter().zip(b.iter()) {
                assert!((a - b).abs() < 1e-10);
            }
        }
    }

    #[test]
    fn lu_det_matches_known_value() {
        // det([[1,2],[3,4]]) = -2
        let a = mat(2, 2, &[1.0, 2.0, 3.0, 4.0]);
        assert!((det(&a).unwrap() - (-2.0)).abs() < 1e-12);
        // det(eye(n)) = 1
        for n in [1, 3, 5] {
            assert!((det(&Matrix::eye(n)).unwrap() - 1.0).abs() < 1e-12);
        }
        // det of singular matrix is 0.
        let s = mat(2, 2, &[1.0, 2.0, 2.0, 4.0]);
        assert_eq!(det(&s).unwrap(), 0.0);
    }

    #[test]
    fn lu_no_pivot_rejects_zero_pivot() {
        // a_11 = 0 — Doolittle without pivoting must fail.
        let a = mat(2, 2, &[0.0, 1.0, 1.0, 0.0]);
        let err = LUFactor::factor_no_pivot(&a).unwrap_err();
        assert!(matches!(err, FactorError::ZeroPivotNoPermutation { step: 0 }));
        // But with pivoting it succeeds.
        assert!(LUFactor::factor(&a).is_ok());
    }

    #[test]
    fn lu_rejects_non_square() {
        let a = mat(2, 3, &[1.0; 6]);
        assert!(matches!(
            LUFactor::factor(&a),
            Err(FactorError::NotSquare { rows: 2, cols: 3 })
        ));
    }

    // ─── Cholesky ───────────────────────────────────────────────────────

    #[test]
    fn cholesky_book_example_5_7() {
        // A = [[ 4, -8,  4],
        //      [-8, 17, -11],
        //      [ 4, -11, 22]]
        // L = [[ 2,  0, 0],
        //      [-4,  1, 0],
        //      [ 2, -3, 3]]
        let a = mat(3, 3, &[4.0, -8.0, 4.0, -8.0, 17.0, -11.0, 4.0, -11.0, 22.0]);
        let f = CholeskyFactor::factor(&a).unwrap();
        let l_want = mat(3, 3, &[2.0, 0.0, 0.0, -4.0, 1.0, 0.0, 2.0, -3.0, 3.0]);
        assert!(close_mat(&f.l, &l_want, 1e-12), "L = {}", f.l);
        // Round-trip: L · Lᵀ = A.
        let prod = f.l.matmul(&f.l.transpose()).unwrap();
        assert!(close_mat(&prod, &a, 1e-12));
    }

    #[test]
    fn cholesky_solve_recovers_x() {
        // A SPD, solve A x = b for a known x.
        let a = mat(3, 3, &[4.0, -8.0, 4.0, -8.0, 17.0, -11.0, 4.0, -11.0, 22.0]);
        let x_true = [1.0, 2.0, 3.0];
        let b: Vec<f64> = (0..3)
            .map(|i| (0..3).map(|j| a.get(i, j).unwrap() * x_true[j]).sum())
            .collect();
        let x = CholeskyFactor::factor(&a).unwrap().solve(&b).unwrap();
        for (got, want) in x.iter().zip(x_true.iter()) {
            assert!((got - want).abs() < 1e-12);
        }
    }

    #[test]
    fn cholesky_rejects_non_symmetric() {
        let a = mat(2, 2, &[1.0, 2.0, 3.0, 4.0]); // a_12=2, a_21=3
        let err = CholeskyFactor::factor(&a).unwrap_err();
        assert!(matches!(err, FactorError::NotSymmetric { .. }));
    }

    #[test]
    fn cholesky_rejects_negative_definite() {
        // Symmetric but negative definite.
        let a = mat(2, 2, &[-1.0, 0.0, 0.0, -1.0]);
        let err = CholeskyFactor::factor(&a).unwrap_err();
        assert!(matches!(err, FactorError::NotPositiveDefinite { .. }));
    }

    #[test]
    fn cholesky_rejects_indefinite() {
        // Indefinite (eigenvalues 1, -1) — must fail at some step.
        let a = mat(2, 2, &[0.0, 1.0, 1.0, 0.0]);
        let err = CholeskyFactor::factor(&a).unwrap_err();
        // First diagonal is 0 → NotPositiveDefinite at step 0.
        assert!(matches!(err, FactorError::NotPositiveDefinite { step: 0, .. }));
    }

    #[test]
    fn cholesky_det_squared_diagonal() {
        // For L = diag(2, 1, 3), det(A) = (2·1·3)² = 36.
        let a = mat(3, 3, &[4.0, -8.0, 4.0, -8.0, 17.0, -11.0, 4.0, -11.0, 22.0]);
        let f = CholeskyFactor::factor(&a).unwrap();
        assert!((f.det() - 36.0).abs() < 1e-10);
        // And it must match LU's determinant.
        assert!((f.det() - det(&a).unwrap()).abs() < 1e-10);
    }

    #[test]
    fn cholesky_identity_is_identity() {
        let f = CholeskyFactor::factor(&Matrix::eye(4)).unwrap();
        assert!(close_mat(&f.l, &Matrix::eye(4), 1e-12));
        assert!((f.det() - 1.0).abs() < 1e-12);
    }
}
