// Newton's method for F(x) = 0 with Jacobian J(x).
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
fn newton_system<F: Fn(&[f64]) -> Vec<f64>, J: Fn(&[f64]) -> Vec<Vec<f64>>>(
    f: F, j: J, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let fx = f(&x);
        if fx.iter().fold(0.0_f64, |m, &v| m.max(v.abs())) < tol { return x; }
        let dx = solve(j(&x), fx);
        for i in 0..n { x[i] -= dx[i]; }
    }
    x
}
fn main() {
    let f = |v: &[f64]| vec![v[0] * v[0] + v[1] * v[1] - 4.0, v[0] * v[1] - 1.0];
    let j = |v: &[f64]| vec![vec![2.0 * v[0], 2.0 * v[1]], vec![v[1], v[0]]];
    println!("{:?}", newton_system(f, j, &[2.0, 0.5], 1e-12, 100));
}
