use std::fmt;
use std::ops::{Add, Mul, Neg, Sub};

use thiserror::Error;

#[derive(Debug, Error, PartialEq)]
pub enum MatrixError {
    #[error("dimension mismatch: {lhs_rows}x{lhs_cols} vs {rhs_rows}x{rhs_cols} for {op}")]
    DimMismatch {
        op: &'static str,
        lhs_rows: usize,
        lhs_cols: usize,
        rhs_rows: usize,
        rhs_cols: usize,
    },
    #[error("inner dimensions must agree for multiplication: {lhs_cols} vs {rhs_rows}")]
    InnerDim { lhs_cols: usize, rhs_rows: usize },
    #[error("row {row} has {got} columns, expected {expected}")]
    RaggedRow {
        row: usize,
        got: usize,
        expected: usize,
    },
    #[error("index ({row},{col}) out of bounds for {rows}x{cols} matrix")]
    OutOfBounds {
        row: usize,
        col: usize,
        rows: usize,
        cols: usize,
    },
}

/// Row-major dense matrix of f64.
///
/// Scalars are represented as 1x1 matrices. Empty matrices have rows == 0
/// or cols == 0 and a zero-length backing buffer.
#[derive(Debug, Clone, PartialEq)]
pub struct Matrix {
    rows: usize,
    cols: usize,
    data: Vec<f64>,
}

impl Matrix {
    pub fn new(rows: usize, cols: usize, data: Vec<f64>) -> Self {
        assert_eq!(
            data.len(),
            rows * cols,
            "data length {} does not match shape {}x{}",
            data.len(),
            rows,
            cols
        );
        Self { rows, cols, data }
    }

    pub fn scalar(v: f64) -> Self {
        Self {
            rows: 1,
            cols: 1,
            data: vec![v],
        }
    }

    pub fn zeros(rows: usize, cols: usize) -> Self {
        Self {
            rows,
            cols,
            data: vec![0.0; rows * cols],
        }
    }

    pub fn ones(rows: usize, cols: usize) -> Self {
        Self {
            rows,
            cols,
            data: vec![1.0; rows * cols],
        }
    }

    pub fn eye(n: usize) -> Self {
        let mut m = Self::zeros(n, n);
        for i in 0..n {
            m.data[i * n + i] = 1.0;
        }
        m
    }

    /// Build from row-vectors. Returns an error if rows differ in length.
    pub fn from_rows(rows: Vec<Vec<f64>>) -> Result<Self, MatrixError> {
        if rows.is_empty() {
            return Ok(Self::new(0, 0, Vec::new()));
        }
        let n_cols = rows[0].len();
        for (i, r) in rows.iter().enumerate() {
            if r.len() != n_cols {
                return Err(MatrixError::RaggedRow {
                    row: i,
                    got: r.len(),
                    expected: n_cols,
                });
            }
        }
        let n_rows = rows.len();
        let mut data = Vec::with_capacity(n_rows * n_cols);
        for r in rows {
            data.extend(r);
        }
        Ok(Self::new(n_rows, n_cols, data))
    }

    #[inline]
    pub fn rows(&self) -> usize {
        self.rows
    }

    #[inline]
    pub fn cols(&self) -> usize {
        self.cols
    }

    #[inline]
    pub fn shape(&self) -> (usize, usize) {
        (self.rows, self.cols)
    }

    #[inline]
    pub fn is_scalar(&self) -> bool {
        self.rows == 1 && self.cols == 1
    }

    #[inline]
    pub fn is_empty(&self) -> bool {
        self.rows == 0 || self.cols == 0
    }

    #[inline]
    pub fn data(&self) -> &[f64] {
        &self.data
    }

    #[inline]
    pub fn get(&self, row: usize, col: usize) -> Result<f64, MatrixError> {
        if row >= self.rows || col >= self.cols {
            return Err(MatrixError::OutOfBounds {
                row,
                col,
                rows: self.rows,
                cols: self.cols,
            });
        }
        Ok(self.data[row * self.cols + col])
    }

    #[inline]
    pub fn set(&mut self, row: usize, col: usize, v: f64) -> Result<(), MatrixError> {
        if row >= self.rows || col >= self.cols {
            return Err(MatrixError::OutOfBounds {
                row,
                col,
                rows: self.rows,
                cols: self.cols,
            });
        }
        self.data[row * self.cols + col] = v;
        Ok(())
    }

    /// Get a single scalar value out of a 1x1 matrix.
    pub fn as_scalar(&self) -> Option<f64> {
        if self.is_scalar() {
            Some(self.data[0])
        } else {
            None
        }
    }

    pub fn transpose(&self) -> Self {
        let mut out = Self::zeros(self.cols, self.rows);
        for r in 0..self.rows {
            for c in 0..self.cols {
                out.data[c * self.rows + r] = self.data[r * self.cols + c];
            }
        }
        out
    }

    /// Elementwise binary op with scalar broadcasting.
    fn elementwise<F>(
        &self,
        rhs: &Matrix,
        op_name: &'static str,
        f: F,
    ) -> Result<Matrix, MatrixError>
    where
        F: Fn(f64, f64) -> f64,
    {
        if self.is_scalar() {
            let s = self.data[0];
            return Ok(Matrix {
                rows: rhs.rows,
                cols: rhs.cols,
                data: rhs.data.iter().map(|&v| f(s, v)).collect(),
            });
        }
        if rhs.is_scalar() {
            let s = rhs.data[0];
            return Ok(Matrix {
                rows: self.rows,
                cols: self.cols,
                data: self.data.iter().map(|&v| f(v, s)).collect(),
            });
        }
        if self.rows != rhs.rows || self.cols != rhs.cols {
            return Err(MatrixError::DimMismatch {
                op: op_name,
                lhs_rows: self.rows,
                lhs_cols: self.cols,
                rhs_rows: rhs.rows,
                rhs_cols: rhs.cols,
            });
        }
        Ok(Matrix {
            rows: self.rows,
            cols: self.cols,
            data: self
                .data
                .iter()
                .zip(rhs.data.iter())
                .map(|(&a, &b)| f(a, b))
                .collect(),
        })
    }

    pub fn add(&self, rhs: &Matrix) -> Result<Matrix, MatrixError> {
        self.elementwise(rhs, "+", |a, b| a + b)
    }

    pub fn sub(&self, rhs: &Matrix) -> Result<Matrix, MatrixError> {
        self.elementwise(rhs, "-", |a, b| a - b)
    }

    /// Elementwise multiply (Octave `.*`).
    pub fn mul_elem(&self, rhs: &Matrix) -> Result<Matrix, MatrixError> {
        self.elementwise(rhs, ".*", |a, b| a * b)
    }

    /// Elementwise divide (Octave `./`).
    pub fn div_elem(&self, rhs: &Matrix) -> Result<Matrix, MatrixError> {
        self.elementwise(rhs, "./", |a, b| a / b)
    }

    /// Elementwise power (Octave `.^`).
    pub fn pow_elem(&self, rhs: &Matrix) -> Result<Matrix, MatrixError> {
        self.elementwise(rhs, ".^", |a, b| a.powf(b))
    }

    /// Matrix multiplication (Octave `*`). Scalars broadcast.
    pub fn matmul(&self, rhs: &Matrix) -> Result<Matrix, MatrixError> {
        if self.is_scalar() || rhs.is_scalar() {
            return self.mul_elem(rhs);
        }
        if self.cols != rhs.rows {
            return Err(MatrixError::InnerDim {
                lhs_cols: self.cols,
                rhs_rows: rhs.rows,
            });
        }
        let m = self.rows;
        let k = self.cols;
        let n = rhs.cols;
        let mut out = vec![0.0; m * n];
        for i in 0..m {
            for kk in 0..k {
                let a = self.data[i * k + kk];
                if a == 0.0 {
                    continue;
                }
                let row_b = &rhs.data[kk * n..(kk + 1) * n];
                let row_out = &mut out[i * n..(i + 1) * n];
                for j in 0..n {
                    row_out[j] += a * row_b[j];
                }
            }
        }
        Ok(Matrix {
            rows: m,
            cols: n,
            data: out,
        })
    }

    pub fn neg(&self) -> Matrix {
        Matrix {
            rows: self.rows,
            cols: self.cols,
            data: self.data.iter().map(|v| -v).collect(),
        }
    }

    pub fn map<F: Fn(f64) -> f64>(&self, f: F) -> Matrix {
        Matrix {
            rows: self.rows,
            cols: self.cols,
            data: self.data.iter().map(|&v| f(v)).collect(),
        }
    }
}

impl Add for &Matrix {
    type Output = Result<Matrix, MatrixError>;
    fn add(self, rhs: &Matrix) -> Self::Output {
        Matrix::add(self, rhs)
    }
}
impl Sub for &Matrix {
    type Output = Result<Matrix, MatrixError>;
    fn sub(self, rhs: &Matrix) -> Self::Output {
        Matrix::sub(self, rhs)
    }
}
impl Mul for &Matrix {
    type Output = Result<Matrix, MatrixError>;
    fn mul(self, rhs: &Matrix) -> Self::Output {
        Matrix::matmul(self, rhs)
    }
}
impl Neg for &Matrix {
    type Output = Matrix;
    fn neg(self) -> Matrix {
        Matrix::neg(self)
    }
}

impl fmt::Display for Matrix {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        if self.is_empty() {
            return write!(f, "[]");
        }
        for r in 0..self.rows {
            for c in 0..self.cols {
                let v = self.data[r * self.cols + c];
                write!(f, "  {:>10.4}", v)?;
            }
            writeln!(f)?;
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn m(rows: usize, cols: usize, data: &[f64]) -> Matrix {
        Matrix::new(rows, cols, data.to_vec())
    }

    #[test]
    fn scalar_roundtrip() {
        let s = Matrix::scalar(3.14);
        assert!(s.is_scalar());
        assert_eq!(s.as_scalar(), Some(3.14));
    }

    #[test]
    fn from_rows_rejects_ragged() {
        let err = Matrix::from_rows(vec![vec![1.0, 2.0], vec![3.0]]).unwrap_err();
        assert!(matches!(err, MatrixError::RaggedRow { row: 1, got: 1, expected: 2 }));
    }

    #[test]
    fn matmul_2x2() {
        // [1 2; 3 4] * [5 6; 7 8] = [19 22; 43 50]
        let a = m(2, 2, &[1.0, 2.0, 3.0, 4.0]);
        let b = m(2, 2, &[5.0, 6.0, 7.0, 8.0]);
        let c = a.matmul(&b).unwrap();
        assert_eq!(c.data(), &[19.0, 22.0, 43.0, 50.0]);
    }

    #[test]
    fn matmul_inner_dim_mismatch() {
        let a = m(2, 3, &[1.0; 6]);
        let b = m(2, 2, &[1.0; 4]);
        let err = a.matmul(&b).unwrap_err();
        assert!(matches!(err, MatrixError::InnerDim { lhs_cols: 3, rhs_rows: 2 }));
    }

    #[test]
    fn scalar_broadcast_add() {
        let a = m(2, 2, &[1.0, 2.0, 3.0, 4.0]);
        let s = Matrix::scalar(10.0);
        let r = a.add(&s).unwrap();
        assert_eq!(r.data(), &[11.0, 12.0, 13.0, 14.0]);
        // commutative under broadcast
        let r2 = s.add(&a).unwrap();
        assert_eq!(r2.data(), &[11.0, 12.0, 13.0, 14.0]);
    }

    #[test]
    fn transpose_rectangular() {
        // [1 2 3; 4 5 6] -> [1 4; 2 5; 3 6]
        let a = m(2, 3, &[1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
        let t = a.transpose();
        assert_eq!(t.shape(), (3, 2));
        assert_eq!(t.data(), &[1.0, 4.0, 2.0, 5.0, 3.0, 6.0]);
    }

    #[test]
    fn eye_is_identity() {
        let i = Matrix::eye(3);
        let a = m(3, 3, &[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]);
        assert_eq!(i.matmul(&a).unwrap(), a);
    }

    #[test]
    fn elementwise_dim_mismatch() {
        let a = m(2, 2, &[1.0; 4]);
        let b = m(3, 2, &[1.0; 6]);
        let err = a.add(&b).unwrap_err();
        assert!(matches!(
            err,
            MatrixError::DimMismatch { op: "+", lhs_rows: 2, lhs_cols: 2, rhs_rows: 3, rhs_cols: 2 }
        ));
    }
}
