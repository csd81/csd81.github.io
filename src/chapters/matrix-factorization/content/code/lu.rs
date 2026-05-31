// Doolittle factorization A = L U (L unit-lower, U upper).
fn lu_doolittle(a: &[Vec<f64>]) -> (Vec<Vec<f64>>, Vec<Vec<f64>>) {
    let n = a.len();
    let mut l = vec![vec![0.0; n]; n];
    let mut u = vec![vec![0.0; n]; n];
    for i in 0..n {
        l[i][i] = 1.0;
        for j in i..n {
            let mut s = a[i][j];
            for k in 0..i { s -= l[i][k] * u[k][j]; }
            u[i][j] = s;
        }
        for j in i + 1..n {
            let mut s = a[j][i];
            for k in 0..i { s -= l[j][k] * u[k][i]; }
            l[j][i] = s / u[i][i];
        }
    }
    (l, u)
}
fn main() {
    let a = vec![
        vec![1.0, -2.0, -2.0, -2.0],
        vec![2.0, -1.0, 2.0, 4.0],
        vec![-1.0, 2.0, 3.0, -4.0],
        vec![-2.0, 1.0, 4.0, -2.0],
    ];
    let (l, u) = lu_doolittle(&a);
    for row in &l { println!("{:?}", row); }
    for row in &u { println!("{:?}", row); }
}
