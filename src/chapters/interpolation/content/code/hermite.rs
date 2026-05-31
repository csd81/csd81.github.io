// Hermite interpolation via divided differences with doubled nodes.
fn hermite_coeffs(x: &[f64], y: &[f64], dy: &[f64]) -> (Vec<f64>, Vec<f64>) {
    let n = x.len();
    let m = 2 * n;
    let mut z = vec![0.0; m];
    let mut q = vec![vec![0.0; m]; m];
    for i in 0..n {
        z[2 * i] = x[i]; z[2 * i + 1] = x[i];
        q[2 * i][0] = y[i]; q[2 * i + 1][0] = y[i];
        q[2 * i + 1][1] = dy[i];
        if i > 0 { q[2 * i][1] = (q[2 * i][0] - q[2 * i - 1][0]) / (z[2 * i] - z[2 * i - 1]); }
    }
    for j in 2..m {
        for i in j..m {
            q[i][j] = (q[i][j - 1] - q[i - 1][j - 1]) / (z[i] - z[i - j]);
        }
    }
    let a = (0..m).map(|i| q[i][i]).collect();
    (z, a)
}
fn main() {
    let (_z, a) = hermite_coeffs(&[0.0, 1.0], &[1.0, 0.0], &[0.0, 0.0]);
    println!("{:?}", a);   // [1, 0, -1, 2]
}
