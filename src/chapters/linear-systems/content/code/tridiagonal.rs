// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
fn thomas(a: &[f64], b: &[f64], c: &[f64], d: &[f64]) -> Vec<f64> {
    let n = d.len();
    let (mut cc, mut dd) = (c.to_vec(), d.to_vec());
    cc[0] /= b[0]; dd[0] /= b[0];
    for i in 1..n {
        let m = b[i] - a[i] * cc[i - 1];
        if i < n - 1 { cc[i] /= m; }
        dd[i] = (dd[i] - a[i] * dd[i - 1]) / m;
    }
    let mut x = vec![0.0; n];
    x[n - 1] = dd[n - 1];
    for i in (0..n - 1).rev() { x[i] = dd[i] - cc[i] * x[i + 1]; }
    x
}
fn main() {
    let a = [0.0, -1.0, -1.0, -1.0];
    let b = [4.0, 4.0, 4.0, 4.0];
    let c = [-1.0, -1.0, -1.0, 0.0];
    let d = [2.0, 4.0, 6.0, 13.0];
    println!("{:?}", thomas(&a, &b, &c, &d));
}
