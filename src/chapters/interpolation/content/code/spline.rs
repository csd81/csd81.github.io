// Natural cubic spline: per-interval coefficients (a, b, c, d).
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
fn natural_cubic_spline(x: &[f64], y: &[f64]) -> (Vec<f64>, Vec<f64>, Vec<f64>, Vec<f64>) {
    let n = x.len();
    let h: Vec<f64> = (0..n - 1).map(|i| x[i + 1] - x[i]).collect();
    let mut m = vec![vec![0.0; n]; n];
    let mut rhs = vec![0.0; n];
    m[0][0] = 1.0; m[n - 1][n - 1] = 1.0;
    for i in 1..n - 1 {
        m[i][i - 1] = h[i - 1]; m[i][i] = 2.0 * (h[i - 1] + h[i]); m[i][i + 1] = h[i];
        rhs[i] = 3.0 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1]);
    }
    let c = solve(m, rhs);
    let a: Vec<f64> = y[..n - 1].to_vec();
    let b: Vec<f64> = (0..n - 1).map(|i| (y[i + 1] - y[i]) / h[i] - h[i] * (2.0 * c[i] + c[i + 1]) / 3.0).collect();
    let d: Vec<f64> = (0..n - 1).map(|i| (c[i + 1] - c[i]) / (3.0 * h[i])).collect();
    (a, b, c[..n - 1].to_vec(), d)
}
fn main() {
    let (a, _b, _c, _d) = natural_cubic_spline(&[0.0, 1.0, 2.0, 3.0], &[0.0, 1.0, 0.0, 1.0]);
    println!("a = {:?}", a);
}
