//! Mesh-generation helpers analogous to Octave's `linspace` and `meshgrid`.

use crate::matrix::Matrix;

/// `linspace(start, end, n)` — `n` equally spaced points from `start` to `end`
/// inclusive. Matches Octave/MATLAB semantics, including the edge cases:
///
/// * `n == 0` returns an empty vector.
/// * `n == 1` returns `[end]` (not `[start]`), per MATLAB's documented behavior.
pub fn linspace(start: f64, end: f64, n: usize) -> Vec<f64> {
    match n {
        0 => Vec::new(),
        1 => vec![end],
        _ => {
            let step = (end - start) / (n - 1) as f64;
            (0..n).map(|i| start + step * i as f64).collect()
        }
    }
}

/// `meshgrid(xs, ys)` — returns `(X, Y)` matrices of shape `(ys.len(), xs.len())`,
/// matching Octave's convention where `X[i,j] = xs[j]` and `Y[i,j] = ys[i]`.
pub fn meshgrid(xs: &[f64], ys: &[f64]) -> (Matrix, Matrix) {
    let rows = ys.len();
    let cols = xs.len();
    let mut x_data = Vec::with_capacity(rows * cols);
    let mut y_data = Vec::with_capacity(rows * cols);
    for &y in ys {
        for &x in xs {
            x_data.push(x);
            y_data.push(y);
        }
    }
    (
        Matrix::new(rows, cols, x_data),
        Matrix::new(rows, cols, y_data),
    )
}

/// Evaluate a 2-arg function over a mesh, returning the Z matrix of the same
/// shape as the inputs. Caller guarantees `xs` and `ys` came from the matching
/// `meshgrid` call (we assert shape equality).
pub fn surface_eval<F: Fn(f64, f64) -> f64>(xs: &Matrix, ys: &Matrix, f: F) -> Matrix {
    assert_eq!(xs.shape(), ys.shape(), "meshgrid X and Y must share a shape");
    let (rows, cols) = xs.shape();
    let mut data = Vec::with_capacity(rows * cols);
    for (&x, &y) in xs.data().iter().zip(ys.data().iter()) {
        data.push(f(x, y));
    }
    Matrix::new(rows, cols, data)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn linspace_endpoints() {
        let v = linspace(0.0, 1.0, 5);
        assert_eq!(v.len(), 5);
        assert!((v[0] - 0.0).abs() < 1e-12);
        assert!((v[4] - 1.0).abs() < 1e-12);
        assert!((v[2] - 0.5).abs() < 1e-12);
    }

    #[test]
    fn linspace_edge_cases() {
        assert!(linspace(0.0, 1.0, 0).is_empty());
        assert_eq!(linspace(0.0, 1.0, 1), vec![1.0]);
    }

    #[test]
    fn meshgrid_shapes() {
        let xs = linspace(-1.0, 1.0, 3);
        let ys = linspace(-2.0, 2.0, 5);
        let (x_mat, y_mat) = meshgrid(&xs, &ys);
        // Octave convention: rows = ys.len, cols = xs.len.
        assert_eq!(x_mat.shape(), (5, 3));
        assert_eq!(y_mat.shape(), (5, 3));
        // X varies along columns: first row should be xs.
        assert_eq!(&x_mat.data()[0..3], &[-1.0, 0.0, 1.0]);
        // Y varies along rows: first column should be ys.
        for i in 0..5 {
            assert_eq!(x_mat.get(i, 0).unwrap(), -1.0);
            assert_eq!(y_mat.get(i, 0).unwrap(), ys[i]);
        }
    }

    #[test]
    fn sombrero_wave_finite() {
        let xs = linspace(-8.0, 8.0, 33);
        let ys = linspace(-8.0, 8.0, 33);
        let (x_mat, y_mat) = meshgrid(&xs, &ys);
        let z = surface_eval(&x_mat, &y_mat, |x, y| {
            let r = (x * x + y * y).sqrt();
            if r == 0.0 {
                1.0
            } else {
                r.sin() / r
            }
        });
        assert_eq!(z.shape(), (33, 33));
        // Every value finite, peak at center.
        assert!(z.data().iter().all(|v| v.is_finite()));
        let center = z.get(16, 16).unwrap();
        assert!((center - 1.0).abs() < 1e-10);
    }
}
