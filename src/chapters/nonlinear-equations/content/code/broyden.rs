// Broyden's (good) method for F(x) = 0; approximates the Jacobian.
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
fn broyden<G: Fn(&[f64]) -> Vec<f64>>(f: G, x0: &[f64], tol: f64, max_iter: usize) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut b: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j| if i == j { 1.0 } else { 0.0 }).collect()).collect();
    let mut fx = f(&x);
    for _ in 0..max_iter {
        if fx.iter().fold(0.0_f64, |m, &v| m.max(v.abs())) < tol { return x; }
        let neg: Vec<f64> = fx.iter().map(|v| -v).collect();
        let dx = solve(b.clone(), neg);
        for i in 0..n { x[i] += dx[i]; }
        let fn_ = f(&x);
        let y: Vec<f64> = (0..n).map(|i| fn_[i] - fx[i]).collect();
        let bdx: Vec<f64> = (0..n).map(|i| (0..n).map(|j| b[i][j] * dx[j]).sum()).collect();
        let dd: f64 = dx.iter().map(|v| v * v).sum();
        for i in 0..n { for j in 0..n { b[i][j] += (y[i] - bdx[i]) * dx[j] / dd; } }
        fx = fn_;
    }
    x
}
fn main() {
    let f = |v: &[f64]| vec![v[0] * v[0] + v[1] * v[1] - 4.0, v[0] * v[1] - 1.0];
    println!("{:?}", broyden(f, &[2.0, 0.5], 1e-12, 100));
}
