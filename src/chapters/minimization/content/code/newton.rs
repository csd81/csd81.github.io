fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn solve(mut a: Vec<Vec<f64>>, mut b: Vec<f64>) -> Vec<f64> {
    let n = b.len();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if a[i][k].abs() > a[p][k].abs() { p = i; } }
        a.swap(k, p); b.swap(k, p);
        for i in k + 1..n { let f = a[i][k] / a[k][k];
            for j in k..n { a[i][j] -= f * a[k][j]; } b[i] -= f * b[k]; }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() { let mut s = b[i];
        for j in i + 1..n { s -= a[i][j] * x[j]; } x[i] = s / a[i][i]; }
    x
}
// Newton's method for unconstrained minimization.
fn newton_min<G: Fn(&[f64]) -> Vec<f64>, H: Fn(&[f64]) -> Vec<Vec<f64>>>(grad: G, hess: H, x0: &[f64], tol: f64, max_iter: usize) -> Vec<f64> {
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let g = grad(&x);
        if nrm(&g) < tol { break; }
        let p = solve(hess(&x), g);
        for i in 0..x.len() { x[i] -= p[i]; }
    }
    x
}
fn main() {
    let g = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 2.0 * (v[1] - 2.0)];
    let h = |_v: &[f64]| vec![vec![2.0, 0.0], vec![0.0, 2.0]];
    println!("{:?}", newton_min(g, h, &[0.0, 0.0], 1e-10, 100));
}
