// Gaussian elimination with partial (row) pivoting.
fn gauss_partial_pivot(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = a.iter().cloned().collect();
    let mut r = b.to_vec();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if m[i][k].abs() > m[p][k].abs() { p = i; } }
        m.swap(k, p); r.swap(k, p);
        for i in k + 1..n {
            let f = m[i][k] / m[k][k];
            for j in k..n { m[i][j] -= f * m[k][j]; }
            r[i] -= f * r[k];
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = r[i];
        for j in i + 1..n { s -= m[i][j] * x[j]; }
        x[i] = s / m[i][i];
    }
    x
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_partial_pivot(&a, &b));
}
