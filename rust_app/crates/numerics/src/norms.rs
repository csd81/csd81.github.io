//! Vector and matrix norms.
//!
//! Implements the three norms used heavily in Chapters 3 and 4 of Hartung:
//!
//! * `‖v‖∞ = max |v_i|`
//! * `‖v‖₁ = Σ |v_i|`
//! * `‖v‖₂ = sqrt(Σ v_i²)`
//!
//! For matrices, the *induced* (operator) ∞-norm and 1-norm have clean
//! closed forms — max row sum and max column sum respectively — so we
//! implement those directly. The induced 2-norm requires the largest
//! singular value, which we don't have yet; we expose the Frobenius norm
//! as a stand-in (it's an upper bound and matches `‖A‖₂` for orthogonal A).

use crate::matrix::Matrix;

// ────────────────────────────────────────────────────────────────────────
// Vector norms
// ────────────────────────────────────────────────────────────────────────

/// ∞-norm: `max |v_i|`. Returns `0.0` for an empty slice.
#[inline]
pub fn vec_norm_inf(v: &[f64]) -> f64 {
    v.iter().fold(0.0_f64, |acc, x| acc.max(x.abs()))
}

/// 1-norm: `Σ |v_i|`.
#[inline]
pub fn vec_norm_1(v: &[f64]) -> f64 {
    v.iter().map(|x| x.abs()).sum()
}

/// Euclidean (2-) norm: `sqrt(Σ v_i²)`.
///
/// Implemented via `f64::hypot`-style scaling to avoid premature overflow
/// when individual entries are larger than `sqrt(f64::MAX)` or underflow when
/// they're smaller than `sqrt(f64::MIN_POSITIVE)`.
pub fn vec_norm_2(v: &[f64]) -> f64 {
    let scale = v.iter().fold(0.0_f64, |acc, x| acc.max(x.abs()));
    if scale == 0.0 {
        return 0.0;
    }
    let s2: f64 = v.iter().map(|x| (x / scale).powi(2)).sum();
    scale * s2.sqrt()
}

// ────────────────────────────────────────────────────────────────────────
// Matrix norms
// ────────────────────────────────────────────────────────────────────────

/// Induced ∞-norm: `max_i Σ_j |a_ij|` (maximum absolute row sum).
pub fn mat_norm_inf(a: &Matrix) -> f64 {
    let (rows, cols) = a.shape();
    if rows == 0 || cols == 0 {
        return 0.0;
    }
    let mut best = 0.0_f64;
    for i in 0..rows {
        let mut row_sum = 0.0_f64;
        for j in 0..cols {
            row_sum += a.get(i, j).unwrap().abs();
        }
        if row_sum > best {
            best = row_sum;
        }
    }
    best
}

/// Induced 1-norm: `max_j Σ_i |a_ij|` (maximum absolute column sum).
pub fn mat_norm_1(a: &Matrix) -> f64 {
    let (rows, cols) = a.shape();
    if rows == 0 || cols == 0 {
        return 0.0;
    }
    let mut best = 0.0_f64;
    for j in 0..cols {
        let mut col_sum = 0.0_f64;
        for i in 0..rows {
            col_sum += a.get(i, j).unwrap().abs();
        }
        if col_sum > best {
            best = col_sum;
        }
    }
    best
}

/// Frobenius norm: `sqrt(Σ a_ij²)`. Not induced from any vector norm but
/// frequently used as a coarse stand-in for the 2-norm.
pub fn mat_norm_fro(a: &Matrix) -> f64 {
    vec_norm_2(a.data())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn mat(rows: usize, cols: usize, data: &[f64]) -> Matrix {
        Matrix::new(rows, cols, data.to_vec())
    }

    #[test]
    fn vec_norm_inf_picks_max_abs() {
        assert_eq!(vec_norm_inf(&[1.0, -3.0, 2.0]), 3.0);
        assert_eq!(vec_norm_inf(&[0.0; 5]), 0.0);
        assert_eq!(vec_norm_inf(&[]), 0.0);
    }

    #[test]
    fn vec_norm_1_sums_abs() {
        assert_eq!(vec_norm_1(&[1.0, -2.0, 3.0]), 6.0);
    }

    #[test]
    fn vec_norm_2_basic() {
        // sqrt(1 + 4 + 4) = 3
        assert!((vec_norm_2(&[1.0, 2.0, 2.0]) - 3.0).abs() < 1e-12);
    }

    #[test]
    fn vec_norm_2_avoids_overflow() {
        // Naive sum-of-squares would overflow at 1e200; scaling fixes it.
        let v = [1.0e200, 1.0e200];
        let got = vec_norm_2(&v);
        let want = 1.0e200 * 2.0_f64.sqrt();
        assert!((got - want).abs() / want < 1e-12, "got {got:e}, want {want:e}");
    }

    #[test]
    fn mat_norm_inf_max_row_sum() {
        // [1 -2 3; 4 -5 -6]  row sums = 6, 15
        let a = mat(2, 3, &[1.0, -2.0, 3.0, 4.0, -5.0, -6.0]);
        assert_eq!(mat_norm_inf(&a), 15.0);
    }

    #[test]
    fn mat_norm_1_max_col_sum() {
        // [1 -2 3; 4 -5 -6]  col sums = 5, 7, 9
        let a = mat(2, 3, &[1.0, -2.0, 3.0, 4.0, -5.0, -6.0]);
        assert_eq!(mat_norm_1(&a), 9.0);
    }

    #[test]
    fn mat_norm_fro_sqrt_sum_squares() {
        // sqrt(1+4+9+16+25+36) = sqrt(91)
        let a = mat(2, 3, &[1.0, -2.0, 3.0, 4.0, -5.0, -6.0]);
        let got = mat_norm_fro(&a);
        assert!((got - 91.0_f64.sqrt()).abs() < 1e-12);
    }

    #[test]
    fn norms_zero_matrix() {
        let z = Matrix::zeros(3, 3);
        assert_eq!(mat_norm_inf(&z), 0.0);
        assert_eq!(mat_norm_1(&z), 0.0);
        assert_eq!(mat_norm_fro(&z), 0.0);
    }
}
