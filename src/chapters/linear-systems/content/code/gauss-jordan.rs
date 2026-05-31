// Solve A x = b by Gauss-Jordan elimination (reduced row echelon form).
fn gauss_jordan(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = (0..n).map(|i| {
        let mut row = a[i].clone(); row.push(b[i]); row
    }).collect();
    for k in 0..n {
        let mut p = k;
        for i in k + 1..n { if m[i][k].abs() > m[p][k].abs() { p = i; } }
        m.swap(k, p);
        let d = m[k][k];
        for j in 0..=n { m[k][j] /= d; }
        for i in 0..n {
            if i != k {
                let f = m[i][k];
                for j in 0..=n { m[i][j] -= f * m[k][j]; }
            }
        }
    }
    (0..n).map(|i| m[i][n]).collect()
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_jordan(&a, &b));
}
