// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
fn cholesky(a: &[Vec<f64>]) -> Vec<Vec<f64>> {
    let n = a.len();
    let mut l = vec![vec![0.0; n]; n];
    for j in 0..n {
        let mut s = a[j][j];
        for k in 0..j { s -= l[j][k] * l[j][k]; }
        l[j][j] = s.sqrt();
        for i in j + 1..n {
            let mut t = a[i][j];
            for k in 0..j { t -= l[i][k] * l[j][k]; }
            l[i][j] = t / l[j][j];
        }
    }
    l
}
fn main() {
    let a = vec![vec![4.0, 2.0, -2.0], vec![2.0, 10.0, 2.0], vec![-2.0, 2.0, 5.0]];
    for row in cholesky(&a) { println!("{:?}", row); }
}
