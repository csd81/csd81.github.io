//! Interpolation methods from Hartung Chapter 6.
//!
//! Four ways to fit a curve through `(x_i, y_i)` data:
//!
//! | method          | what it fits                            | needs         |
//! |-----------------|------------------------------------------|---------------|
//! | Lagrange (§6.1) | unique polynomial of degree ≤ n          | xs, ys        |
//! | Newton  (§6.3)  | *same* polynomial in divided-diff form   | xs, ys        |
//! | Hermite (§6.4)  | polynomial of degree ≤ 2n+1, hits y AND y' | xs, ys, yps |
//! | Cubic spline (§6.5) | piecewise cubic, C² overall          | xs, ys (+ BC) |
//!
//! Lagrange and Newton produce the same polynomial (Thm 6.1 + uniqueness);
//! Newton's form is preferred numerically because (1) coefficients update
//! incrementally when a new node is appended, and (2) Horner's method evaluates
//! it in `O(n)` ops.
//!
//! Cubic splines avoid the **Runge phenomenon** that plagues high-degree
//! polynomial interpolation — the spline's `c_i` coefficients solve a
//! *tridiagonal* system (book §6.5, eq. 6.22), so we hand that off to the
//! Thomas solver from `numerics::linear`.

use thiserror::Error;

use crate::linear;

#[derive(Debug, Error, PartialEq)]
pub enum InterpError {
    #[error("need at least {min} nodes, got {got}")]
    TooFewNodes { min: usize, got: usize },
    #[error("xs and ys length mismatch: {x_len} vs {y_len}")]
    LengthMismatch { x_len: usize, y_len: usize },
    #[error("xs must contain pairwise distinct values; duplicate at index {i}: x[{i}] == x[{j}] == {value}")]
    DuplicateNode { i: usize, j: usize, value: f64 },
    #[error("xs must be strictly increasing for spline interpolation; failed at index {i}: x[{i}]={a} >= x[{i_plus_1}]={b}")]
    NotMonotone {
        i: usize,
        i_plus_1: usize,
        a: f64,
        b: f64,
    },
    #[error("tridiagonal system for spline failed to solve: {0}")]
    Linear(#[from] linear::LinearError),
}

// ────────────────────────────────────────────────────────────────────────
// Lagrange interpolation — direct basis-polynomial sum
// ────────────────────────────────────────────────────────────────────────

/// Evaluate the Lagrange interpolating polynomial at `x` (Hartung Thm 6.1):
///
/// ```text
///   L_n(x) = Σ y_k · ∏_{i ≠ k} (x − x_i)/(x_k − x_i)
/// ```
///
/// `O(n²)` per evaluation. For repeated evaluations prefer [`NewtonInterp`]
/// (one-time `O(n²)` setup, then `O(n)` per evaluation).
pub fn lagrange_eval(xs: &[f64], ys: &[f64], x: f64) -> Result<f64, InterpError> {
    validate_xy(xs, ys, 1)?;
    let n = xs.len();
    let mut sum = 0.0;
    for k in 0..n {
        let mut term = ys[k];
        for i in 0..n {
            if i != k {
                term *= (x - xs[i]) / (xs[k] - xs[i]);
            }
        }
        sum += term;
    }
    Ok(sum)
}

// ────────────────────────────────────────────────────────────────────────
// Divided differences + Newton's form
// ────────────────────────────────────────────────────────────────────────

/// Build the full Newton divided-difference table:
/// `table[j][i] = f[x_i, x_{i+1}, …, x_{i+j}]`.
///
/// Column `j=0` is just `ys`; column `j=n` is a single number — the leading
/// coefficient of the Newton polynomial. Useful for visualization and
/// teaching, but the [`NewtonInterp`] fit doesn't need the whole triangle.
pub fn divided_differences_table(
    xs: &[f64],
    ys: &[f64],
) -> Result<Vec<Vec<f64>>, InterpError> {
    validate_xy(xs, ys, 1)?;
    let n = xs.len();
    let mut table: Vec<Vec<f64>> = Vec::with_capacity(n);
    table.push(ys.to_vec());
    for j in 1..n {
        let mut col = Vec::with_capacity(n - j);
        for i in 0..(n - j) {
            let num = table[j - 1][i + 1] - table[j - 1][i];
            let den = xs[i + j] - xs[i];
            col.push(num / den);
        }
        table.push(col);
    }
    Ok(table)
}

/// Polynomial in Newton's divided-difference form.
///
/// `eval(x) = a_0 + a_1·(x − x_0) + a_2·(x − x_0)(x − x_1) + …`
#[derive(Debug, Clone)]
pub struct NewtonInterp {
    pub xs: Vec<f64>,
    pub coefs: Vec<f64>,
}

impl NewtonInterp {
    /// Fit via the in-place Algorithm 6.13. `O(n²)` operations.
    pub fn fit(xs: &[f64], ys: &[f64]) -> Result<Self, InterpError> {
        validate_xy(xs, ys, 1)?;
        let n = xs.len();
        let mut a = ys.to_vec();
        for j in 1..n {
            for i in (j..n).rev() {
                a[i] = (a[i] - a[i - 1]) / (xs[i] - xs[i - j]);
            }
        }
        Ok(Self {
            xs: xs.to_vec(),
            coefs: a,
        })
    }

    /// Horner-style evaluation (Algorithm 6.14). `O(n)` per call.
    pub fn eval(&self, x: f64) -> f64 {
        let n = self.coefs.len();
        if n == 0 {
            return 0.0;
        }
        let mut y = self.coefs[n - 1];
        for i in (0..n - 1).rev() {
            y = y * (x - self.xs[i]) + self.coefs[i];
        }
        y
    }
}

// ────────────────────────────────────────────────────────────────────────
// Hermite interpolation — divided differences with duplicated nodes
// ────────────────────────────────────────────────────────────────────────

/// Polynomial of degree ≤ `2n+1` matching both function values *and* slopes
/// (Hartung Thm 6.18, eq. 6.7).
///
/// Stored as the Newton form on the duplicated node sequence
/// `x_0, x_0, x_1, x_1, …, x_n, x_n`. Evaluation is the same Horner loop.
#[derive(Debug, Clone)]
pub struct HermiteInterp {
    pub xs_dup: Vec<f64>,
    pub coefs: Vec<f64>,
}

impl HermiteInterp {
    /// Fit using the duplicated-node divided-difference table (book §6.4).
    /// Each `x_i` appears twice; the "first divided difference at equal
    /// nodes" is `f'(x_i)` per Corollary 6.17.
    pub fn fit(xs: &[f64], ys: &[f64], yps: &[f64]) -> Result<Self, InterpError> {
        validate_xy(xs, ys, 1)?;
        if yps.len() != xs.len() {
            return Err(InterpError::LengthMismatch {
                x_len: xs.len(),
                y_len: yps.len(),
            });
        }
        check_distinct(xs)?;

        let n = xs.len();
        let m = 2 * n;
        let mut z = vec![0.0; m];
        let mut a = vec![0.0; m];

        // Seed the table: duplicate each x, fill diag with y values.
        for i in 0..n {
            z[2 * i] = xs[i];
            z[2 * i + 1] = xs[i];
            a[2 * i] = ys[i];
            a[2 * i + 1] = ys[i];
        }
        // First column of divided differences:
        // - at equal nodes: derivative
        // - at distinct nodes: standard divided difference
        // We update column-by-column in-place, but careful: the first-column
        // pass and the j ≥ 2 pass have different rules.
        // Implement Burden-Faires style in-place: a holds the diagonal as we go.
        // Strategy: build a 2D table then collect diagonal.
        let mut table: Vec<Vec<f64>> = vec![a.clone()];
        // First differences (j = 1):
        let mut col1 = Vec::with_capacity(m - 1);
        for i in 0..(m - 1) {
            if z[i] == z[i + 1] {
                col1.push(yps[i / 2]);
            } else {
                col1.push((table[0][i + 1] - table[0][i]) / (z[i + 1] - z[i]));
            }
        }
        table.push(col1);
        // Higher-order differences (j = 2..2n-1):
        for j in 2..m {
            let mut col = Vec::with_capacity(m - j);
            for i in 0..(m - j) {
                let num = table[j - 1][i + 1] - table[j - 1][i];
                let den = z[i + j] - z[i];
                col.push(num / den);
            }
            table.push(col);
        }
        let coefs: Vec<f64> = table.iter().map(|c| c[0]).collect();
        Ok(Self { xs_dup: z, coefs })
    }

    pub fn eval(&self, x: f64) -> f64 {
        let n = self.coefs.len();
        if n == 0 {
            return 0.0;
        }
        let mut y = self.coefs[n - 1];
        for i in (0..n - 1).rev() {
            y = y * (x - self.xs_dup[i]) + self.coefs[i];
        }
        y
    }
}

// ────────────────────────────────────────────────────────────────────────
// Cubic spline interpolation
// ────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone)]
pub struct CubicSegment {
    pub x_left: f64,
    pub x_right: f64,
    /// `S_i(x) = a + b·(x − x_left) + c·(x − x_left)² + d·(x − x_left)³`
    pub a: f64,
    pub b: f64,
    pub c: f64,
    pub d: f64,
}

impl CubicSegment {
    pub fn eval(&self, x: f64) -> f64 {
        let dx = x - self.x_left;
        ((self.d * dx + self.c) * dx + self.b) * dx + self.a
    }
}

#[derive(Debug, Clone, Copy)]
pub enum BoundaryCondition {
    /// `S''(x_0) = S''(x_n) = 0` — the "natural" or "free" boundary.
    Natural,
    /// `S'(x_0) = y_0', S'(x_n) = y_n'` — the "clamped" boundary.
    Clamped { yp0: f64, ypn: f64 },
}

#[derive(Debug, Clone)]
pub struct CubicSpline {
    pub xs: Vec<f64>,
    pub segments: Vec<CubicSegment>,
}

impl CubicSpline {
    /// Fit a natural cubic spline (book §6.5, Thm 6.22).
    pub fn natural(xs: &[f64], ys: &[f64]) -> Result<Self, InterpError> {
        Self::fit(xs, ys, BoundaryCondition::Natural)
    }

    /// Fit a clamped cubic spline with prescribed end slopes
    /// (book §6.5, eqs. 6.24 / 6.25).
    pub fn clamped(xs: &[f64], ys: &[f64], yp0: f64, ypn: f64) -> Result<Self, InterpError> {
        Self::fit(xs, ys, BoundaryCondition::Clamped { yp0, ypn })
    }

    /// Evaluate the spline at `x`. Outside `[x_0, x_n]` we extrapolate with
    /// the nearest end segment — the caller should bound their range.
    pub fn eval(&self, x: f64) -> f64 {
        if self.segments.is_empty() {
            return 0.0;
        }
        // Binary search for the right segment.
        let xs = &self.xs;
        if x <= xs[0] {
            return self.segments[0].eval(x);
        }
        if x >= *xs.last().unwrap() {
            return self.segments.last().unwrap().eval(x);
        }
        // xs is strictly increasing.
        let idx = match xs.binary_search_by(|v| v.partial_cmp(&x).unwrap()) {
            Ok(k) => k.min(self.segments.len().saturating_sub(1)),
            Err(k) => k.saturating_sub(1),
        };
        self.segments[idx].eval(x)
    }

    fn fit(xs: &[f64], ys: &[f64], bc: BoundaryCondition) -> Result<Self, InterpError> {
        validate_xy(xs, ys, 3)?;
        check_strictly_increasing(xs)?;
        let n = xs.len() - 1; // number of intervals; system has N+1 = n+1 unknowns c_0..c_n

        // Δx_i, Δy_i for i = 0..n-1
        let dx: Vec<f64> = (0..n).map(|i| xs[i + 1] - xs[i]).collect();
        let dy: Vec<f64> = (0..n).map(|i| ys[i + 1] - ys[i]).collect();

        // Tridiagonal coefficients for [c_0, c_1, …, c_n].
        let m = n + 1;
        let mut a_sub = vec![0.0; m - 1]; // sub-diagonal
        let mut d_diag = vec![0.0; m]; // main diagonal
        let mut c_sup = vec![0.0; m - 1]; // super-diagonal
        let mut rhs = vec![0.0; m];

        // Interior rows (i = 1..n-1): book eq. 6.22
        for i in 1..n {
            a_sub[i - 1] = dx[i - 1];
            d_diag[i] = 2.0 * (dx[i - 1] + dx[i]);
            c_sup[i] = dx[i];
            rhs[i] = 3.0 * (dy[i] / dx[i] - dy[i - 1] / dx[i - 1]);
        }
        // Boundary rows.
        match bc {
            BoundaryCondition::Natural => {
                d_diag[0] = 1.0;
                c_sup[0] = 0.0;
                rhs[0] = 0.0;
                a_sub[m - 2] = 0.0;
                d_diag[m - 1] = 1.0;
                rhs[m - 1] = 0.0;
            }
            BoundaryCondition::Clamped { yp0, ypn } => {
                // Row 0: 2·Δx_0·c_0 + Δx_0·c_1 = 3·(Δy_0/Δx_0 − y_0') (eq. 6.24)
                d_diag[0] = 2.0 * dx[0];
                c_sup[0] = dx[0];
                rhs[0] = 3.0 * (dy[0] / dx[0] - yp0);
                // Row N: Δx_{n-1}·c_{n-1} + 2·Δx_{n-1}·c_n = 3·y_n' − 3·Δy_{n-1}/Δx_{n-1}
                a_sub[m - 2] = dx[n - 1];
                d_diag[m - 1] = 2.0 * dx[n - 1];
                rhs[m - 1] = 3.0 * (ypn - dy[n - 1] / dx[n - 1]);
            }
        }

        let c = linear::solve_tridiagonal(&a_sub, &d_diag, &c_sup, &rhs)?;

        // Recover b_i and d_i from c_i: book eqs. 6.19 and the b_i formula
        // just below (6.21).
        let mut segments = Vec::with_capacity(n);
        for i in 0..n {
            let a_i = ys[i];
            let c_i = c[i];
            let c_ip1 = c[i + 1];
            let d_i = (c_ip1 - c_i) / (3.0 * dx[i]);
            let b_i = dy[i] / dx[i] - (2.0 * c_i + c_ip1) * dx[i] / 3.0;
            segments.push(CubicSegment {
                x_left: xs[i],
                x_right: xs[i + 1],
                a: a_i,
                b: b_i,
                c: c_i,
                d: d_i,
            });
        }

        Ok(Self {
            xs: xs.to_vec(),
            segments,
        })
    }
}

// ────────────────────────────────────────────────────────────────────────
// Validation helpers
// ────────────────────────────────────────────────────────────────────────

fn validate_xy(xs: &[f64], ys: &[f64], min_nodes: usize) -> Result<(), InterpError> {
    if xs.len() < min_nodes {
        return Err(InterpError::TooFewNodes {
            min: min_nodes,
            got: xs.len(),
        });
    }
    if xs.len() != ys.len() {
        return Err(InterpError::LengthMismatch {
            x_len: xs.len(),
            y_len: ys.len(),
        });
    }
    Ok(())
}

fn check_distinct(xs: &[f64]) -> Result<(), InterpError> {
    for i in 0..xs.len() {
        for j in (i + 1)..xs.len() {
            if xs[i] == xs[j] {
                return Err(InterpError::DuplicateNode {
                    i,
                    j,
                    value: xs[i],
                });
            }
        }
    }
    Ok(())
}

fn check_strictly_increasing(xs: &[f64]) -> Result<(), InterpError> {
    for i in 0..xs.len().saturating_sub(1) {
        if !(xs[i] < xs[i + 1]) {
            return Err(InterpError::NotMonotone {
                i,
                i_plus_1: i + 1,
                a: xs[i],
                b: xs[i + 1],
            });
        }
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn close(a: f64, b: f64, tol: f64) -> bool {
        (a - b).abs() <= tol
    }

    // ─── Lagrange / Newton ─────────────────────────────────────────────

    /// Hartung Example 6.2: data (−1,−3), (1,1), (2,3), (3,29).
    /// Lagrange polynomial is L_3(x) = 3x³ − 6x² − x + 5.
    fn book_example_6_2() -> (Vec<f64>, Vec<f64>) {
        (vec![-1.0, 1.0, 2.0, 3.0], vec![-3.0, 1.0, 3.0, 29.0])
    }

    fn poly_3x3_minus_6x2_minus_x_plus_5(x: f64) -> f64 {
        3.0 * x * x * x - 6.0 * x * x - x + 5.0
    }

    #[test]
    fn lagrange_matches_book_example_6_2() {
        let (xs, ys) = book_example_6_2();
        // L_3(0) should equal the constant term: 5.
        assert!(close(lagrange_eval(&xs, &ys, 0.0).unwrap(), 5.0, 1e-12));
        // Check at a handful of off-node points.
        for &x in &[-0.5_f64, 0.5, 1.5, 2.5] {
            let got = lagrange_eval(&xs, &ys, x).unwrap();
            assert!(
                close(got, poly_3x3_minus_6x2_minus_x_plus_5(x), 1e-10),
                "Lagrange at x={x}: got {got}, want {}",
                poly_3x3_minus_6x2_minus_x_plus_5(x)
            );
        }
    }

    #[test]
    fn newton_form_book_example_6_15() {
        // Same data as 6.2; Newton form yields L_3(x) = −3 + 2(x+1) + 3(x+1)(x−1)(x−2),
        // i.e., coefficients (working with the in-place algorithm) are
        // [−3, 2, 0, 3].
        let (xs, ys) = book_example_6_2();
        let nf = NewtonInterp::fit(&xs, &ys).unwrap();
        assert!(close(nf.coefs[0], -3.0, 1e-12));
        assert!(close(nf.coefs[1], 2.0, 1e-12));
        assert!(close(nf.coefs[2], 0.0, 1e-12));
        assert!(close(nf.coefs[3], 3.0, 1e-12));
        // Evaluating the Newton form must reproduce the Lagrange polynomial.
        for &x in &[-2.0_f64, -0.5, 0.0, 0.5, 1.5, 2.5, 4.0] {
            let got = nf.eval(x);
            assert!(
                close(got, poly_3x3_minus_6x2_minus_x_plus_5(x), 1e-10),
                "Newton at x={x}: got {got}"
            );
        }
    }

    #[test]
    fn newton_polynomial_interpolates_exactly() {
        let (xs, ys) = book_example_6_2();
        let nf = NewtonInterp::fit(&xs, &ys).unwrap();
        for (x, y) in xs.iter().zip(ys.iter()) {
            assert!(close(nf.eval(*x), *y, 1e-12));
        }
    }

    #[test]
    fn divided_diff_table_matches_book_diagonal() {
        let (xs, ys) = book_example_6_2();
        let table = divided_differences_table(&xs, &ys).unwrap();
        // Book's diagonal (Newton coefficients): −3, 2, 0, 3.
        assert!(close(table[0][0], -3.0, 1e-12));
        assert!(close(table[1][0], 2.0, 1e-12));
        assert!(close(table[2][0], 0.0, 1e-12));
        assert!(close(table[3][0], 3.0, 1e-12));
    }

    // ─── Hermite ────────────────────────────────────────────────────────

    /// Hartung Example 6.21: x = (−1, 1, 2), y = (2, 4, 11), y' = (3, −5, 30).
    /// Result: H_5(x) = 2x⁴ − x³ − 6x² + 2x + 7 (degree 4, not 5 — happens here).
    #[test]
    fn hermite_matches_book_example_6_21() {
        let xs = vec![-1.0, 1.0, 2.0];
        let ys = vec![2.0, 4.0, 11.0];
        let yps = vec![3.0, -5.0, 30.0];
        let h = HermiteInterp::fit(&xs, &ys, &yps).unwrap();
        // Reference polynomial 2x⁴ − x³ − 6x² + 2x + 7.
        let p = |x: f64| 2.0 * x.powi(4) - x.powi(3) - 6.0 * x * x + 2.0 * x + 7.0;
        // Function values at nodes must match.
        for (x, y) in xs.iter().zip(ys.iter()) {
            assert!(close(h.eval(*x), *y, 1e-10));
            assert!(close(p(*x), *y, 1e-10));
        }
        // And at off-node points the polynomial must agree.
        for &x in &[-2.0_f64, -0.5, 0.5, 1.5, 3.0] {
            assert!(close(h.eval(x), p(x), 1e-9), "Hermite at x={x}: got {}", h.eval(x));
        }
    }

    #[test]
    fn hermite_matches_slopes() {
        // Pick a known polynomial 3x² + 2x − 1; verify Hermite reproduces both
        // values and derivatives.
        let f = |x: f64| 3.0 * x * x + 2.0 * x - 1.0;
        let fp = |x: f64| 6.0 * x + 2.0;
        let xs = vec![-1.0, 0.5, 2.0];
        let ys: Vec<f64> = xs.iter().map(|&x| f(x)).collect();
        let yps: Vec<f64> = xs.iter().map(|&x| fp(x)).collect();
        let h = HermiteInterp::fit(&xs, &ys, &yps).unwrap();
        for x in [-1.0, 0.0, 1.0, 2.0] {
            assert!(close(h.eval(x), f(x), 1e-10));
        }
    }

    // ─── Cubic spline ───────────────────────────────────────────────────

    /// Hartung Example 6.23: x = (0, 1, 1.5, 2, 3, 4), y = (0.5, 0.1, 2.5, −1, −0.5, 0).
    /// The book reports the c-vector (after solving the tridiagonal system) and
    /// the resulting per-segment polynomial. We verify both the c values and a
    /// few function evaluations against the published segment formulas.
    #[test]
    fn natural_cubic_spline_matches_book_example_6_23() {
        let xs = vec![0.0, 1.0, 1.5, 2.0, 3.0, 4.0];
        let ys = vec![0.5, 0.1, 2.5, -1.0, -0.5, 0.0];
        let s = CubicSpline::natural(&xs, &ys).unwrap();

        // Book's published S_0: 0.5 - 3.4141079x + 3.0141079x³.
        // Our segment 0 has a = 0.5, b = -3.4141079, c = 0 (natural), d = 3.0141079.
        let seg0 = &s.segments[0];
        assert!(close(seg0.a, 0.5, 1e-9));
        assert!(close(seg0.b, -3.4141079, 1e-6), "b_0 = {}", seg0.b);
        assert!(close(seg0.c, 0.0, 1e-9));
        assert!(close(seg0.d, 3.0141079, 1e-6), "d_0 = {}", seg0.d);

        // Interpolation must be exact at nodes.
        for (x, y) in xs.iter().zip(ys.iter()) {
            assert!(close(s.eval(*x), *y, 1e-10));
        }

        // Spline value at x = 0.5 (book's S_0): 0.5 - 3.4141079·0.5 + 3.0141079·0.125
        let expected = 0.5 - 3.4141079 * 0.5 + 3.0141079 * 0.125;
        assert!(close(s.eval(0.5), expected, 1e-6));
    }

    #[test]
    fn natural_spline_interpolates_exactly() {
        let xs = vec![0.0, 1.0, 2.0, 3.0, 4.0];
        let ys = vec![1.0, 0.0, 1.0, 0.0, 1.0];
        let s = CubicSpline::natural(&xs, &ys).unwrap();
        for (x, y) in xs.iter().zip(ys.iter()) {
            assert!(close(s.eval(*x), *y, 1e-12));
        }
    }

    #[test]
    fn natural_spline_satisfies_zero_second_derivative_at_ends() {
        let xs = vec![0.0, 1.0, 2.0, 3.0];
        let ys = vec![0.0, 1.0, 0.0, -1.0];
        let s = CubicSpline::natural(&xs, &ys).unwrap();
        // For the natural spline, c_0 = 0 (first segment's c term).
        assert!(close(s.segments[0].c, 0.0, 1e-12));
        // S''(x_n) = 2·c_n where c_n is the *recovered* value at the last node.
        // For our representation, segments[last] uses c at the LEFT endpoint
        // (= c_{n-1}); the spline's c_n appears via the recurrence
        // d_{n-1} = (c_n - c_{n-1})/(3·Δx_{n-1}), so c_n = c_{n-1} + 3·d_{n-1}·Δx.
        let last = s.segments.last().unwrap();
        let dx = last.x_right - last.x_left;
        let c_n = last.c + 3.0 * last.d * dx;
        assert!(close(c_n, 0.0, 1e-10));
    }

    #[test]
    fn clamped_spline_satisfies_slopes() {
        // Use a known cubic and a non-trivial slope at one end.
        let xs = vec![0.0_f64, 1.0, 2.0, 3.0];
        let ys = vec![0.0, 1.0, 8.0, 27.0]; // y = x³
        // For y = x³, y'(0) = 0, y'(3) = 27.
        let s = CubicSpline::clamped(&xs, &ys, 0.0, 27.0).unwrap();
        // S'(x_0) should equal 0. For segment 0 evaluated at x_0, S'(x_0) = b_0.
        assert!(close(s.segments[0].b, 0.0, 1e-10), "b_0 = {}", s.segments[0].b);
        // Interpolation still exact at nodes.
        for (x, y) in xs.iter().zip(ys.iter()) {
            assert!(close(s.eval(*x), *y, 1e-10));
        }
    }

    // ─── Error paths ────────────────────────────────────────────────────

    #[test]
    fn rejects_length_mismatch() {
        assert!(matches!(
            lagrange_eval(&[1.0, 2.0], &[1.0], 0.0),
            Err(InterpError::LengthMismatch { x_len: 2, y_len: 1 })
        ));
    }

    #[test]
    fn rejects_too_few_nodes() {
        assert!(matches!(
            CubicSpline::natural(&[1.0, 2.0], &[3.0, 4.0]),
            Err(InterpError::TooFewNodes { min: 3, got: 2 })
        ));
    }

    #[test]
    fn rejects_non_monotone_spline_nodes() {
        let xs = vec![0.0, 1.0, 0.5, 2.0]; // not sorted
        let ys = vec![0.0; 4];
        let err = CubicSpline::natural(&xs, &ys).unwrap_err();
        assert!(matches!(err, InterpError::NotMonotone { .. }));
    }

    #[test]
    fn rejects_duplicate_hermite_nodes() {
        let xs = vec![1.0, 2.0, 1.0];
        let ys = vec![0.0, 0.0, 0.0];
        let yps = vec![0.0, 0.0, 0.0];
        let err = HermiteInterp::fit(&xs, &ys, &yps).unwrap_err();
        assert!(matches!(err, InterpError::DuplicateNode { .. }));
    }
}
