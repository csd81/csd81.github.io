// Solve an upper-triangular system U x = b.
fn back_substitution(u: &[Vec<f64>], b: &[f64]) -> Vec<f64> {
    let n = b.len();
    let mut x = vec![0.0; n];
    for i in (0..n).rev() {
        let mut s = b[i];
        for j in i + 1..n { s -= u[i][j] * x[j]; }
        x[i] = s / u[i][i];
    }
    x
}
fn main() {
    let u = vec![vec![2.0, 1.0, -1.0], vec![0.0, 1.0, 2.0], vec![0.0, 0.0, 3.0]];
    let b = vec![1.0, 8.0, 9.0];
    println!("{:?}", back_substitution(&u, &b));   // [1, 2, 3]
}
