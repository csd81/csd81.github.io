// Naive Gaussian elimination (no pivoting) + back-substitution.
fn gauss_elimination(a: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut m: Vec<Vec<f64>> = (0..n).map(|i| {
        let mut row = a[i].clone();
        row.push(b[i]);
        row
    }).collect();
    for k in 0..n {
        for i in k + 1..n {
            let f = m[i][k] / m[k][k];
            for j in k..=n { m[i][j] -= f * m[k][j]; }
        }
    }
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = m[i][n];
        for j in i + 1..n { s -= m[i][j] * x[j]; }
        x[i] = s / m[i][i];
    }
    x
}
fn main() {
    let a = vec![vec![2.0, 1.0, -1.0], vec![-3.0, -1.0, 2.0], vec![-2.0, 1.0, 2.0]];
    let b = vec![8.0, -11.0, -3.0];
    println!("{:?}", gauss_elimination(&a, &b));   // [2, 3, -1]
}
