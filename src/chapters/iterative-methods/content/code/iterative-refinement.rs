// Iterative refinement of the solution of A x = b.
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
fn iterative_refinement(a: &[Vec<f64>], b: &[f64], tol: f64, max_iter: usize) -> Vec<f64> {
    let n = b.len();
    let mut x = solve(a.to_vec(), b.to_vec());
    for _ in 0..max_iter {
        let r: Vec<f64> = (0..n).map(|i| b[i] - (0..n).map(|j| a[i][j] * x[j]).sum::<f64>()).collect();
        let d = solve(a.to_vec(), r);
        let mut nd = 0.0_f64;
        for i in 0..n { x[i] += d[i]; nd = nd.max(d[i].abs()); }
        if nd < tol { break; }
    }
    x
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", iterative_refinement(&a, &b, 1e-12, 20));
}
