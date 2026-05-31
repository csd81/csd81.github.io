// Gaussian elimination with complete (row + column) pivoting.
fn gauss_complete_pivot(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = a.iter().cloned().collect();
    let mut r = b.to_vec();
    let mut col: Vec<usize> = (0..n).collect();
    for k in 0..n {
        let (mut pi, mut pj) = (k, k);
        for i in k..n { for j in k..n { if m[i][j].abs() > m[pi][pj].abs() { pi = i; pj = j; } } }
        m.swap(k, pi); r.swap(k, pi);
        for row in m.iter_mut() { row.swap(k, pj); }
        col.swap(k, pj);
        for i in k + 1..n {
            let f = m[i][k] / m[k][k];
            for j in k..n { m[i][j] -= f * m[k][j]; }
            r[i] -= f * r[k];
        }
    }
    let mut y = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = r[i];
        for j in i + 1..n { s -= m[i][j] * y[j]; }
        y[i] = s / m[i][i];
    }
    let mut x = vec![0.0; n];
    for i in 0..n { x[col[i]] = y[i]; }
    x
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_complete_pivot(&a, &b));
}
