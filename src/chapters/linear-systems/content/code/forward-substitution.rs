// Solve a lower-triangular system L y = b.
fn forward_substitution(l: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut y = vec![0.0; n];
    for i in 0..n {
        let mut s = b[i];
        for j in 0..i { s -= l[i][j] * y[j]; }
        y[i] = s / l[i][i];
    }
    y
}
fn main() {
    let l = vec![vec![2.0, 0.0, 0.0], vec![1.0, 3.0, 0.0], vec![-1.0, 1.0, 2.0]];
    let b = vec![4.0, 5.0, -1.0];
    println!("{:?}", forward_substitution(&l, &b));   // [2, 1, 0]
}
