// Least-squares polynomial fit via the normal equations (A^T A) c = A^T y.
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
fn poly_fit(t: &[f64], y: &[f64], deg: usize) -> Vec<f64> {
    let (n, m) = (t.len(), deg + 1);
    let a: Vec<Vec<f64>> = t.iter().map(|&ti| (0..m).map(|j| ti.powi(j as i32)).collect()).collect();
    let mut nn = vec![vec![0.0; m]; m];
    let mut r = vec![0.0; m];
    for j in 0..m {
        for k in 0..m { for i in 0..n { nn[j][k] += a[i][j] * a[i][k]; } }
        for i in 0..n { r[j] += a[i][j] * y[i]; }
    }
    solve(nn, r)
}
fn main() {
    let t = [0.0, 1.0, 2.0, 3.0, 4.0];
    let y = [1.0, 1.8, 3.3, 4.5, 6.3];
    println!("coeffs (low->high): {:?}", poly_fit(&t, &y, 2));
}
