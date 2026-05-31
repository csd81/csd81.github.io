// Lagrange interpolation via the Vandermonde system V a = y.
fn solve(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Vec<f64> {
    let n = b.len();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if a[i][k].abs() > a[p][k].abs() { p = i; } }
        a.swap(k, p); b.swap(k, p);
        for i in k + 1..n {
            let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j]; }
            b[i] -= f * b[k];
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = b[i];
        for j in i + 1..n { s -= a[i][j] * x[j]; }
        x[i] = s / a[i][i];
    }
    x
}
fn lagrange_coeffs(x: &[f64], y: &[f64]) -> Vec<f64> {
    let n = x.len();
    let v: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j| x[i].powi(j as i32)).collect()).collect();
    solve(v, y.to_vec())
}
fn main() {
    let x = [-1.0, 1.0, 2.0, 3.0];
    let y = [-3.0, 1.0, 3.0, 29.0];
    println!("{:?}", lagrange_coeffs(&x, &y));   // [5, -1, -6, 3]
}
