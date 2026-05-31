// Solve A x = b by Jacobi iteration.
fn jacobi(a: &[Vec<f64>], b: &[f64], tol: f64, max_iter: usize) -> (Vec<f64>, usize) {
    let n = b.len();
    let mut x = vec![0.0; n];
    for k in 1..=max_iter {
        let mut xn = vec![0.0; n];
        for i in 0..n {
            let mut s = b[i];
            for j in 0..n {
                if j != i { s -= a[i][j] * x[j]; }
            }
            xn[i] = s / a[i][i];
        }
        let diff = (0..n).map(|i| (xn[i] - x[i]).abs()).fold(0.0_f64, f64::max);
        x = xn;
        if diff <= tol { return (x, k); }
    }
    (x, max_iter)
}

fn main() {
    let a = vec![vec![4.0, 2.0, -1.0], vec![5.0, -10.0, 2.0], vec![-2.0, 3.0, -7.0]];
    let b = vec![9.0, 8.0, 3.0];
    let (x, it) = jacobi(&a, &b, 1e-10, 200);
    println!("x = {:?}  iterations = {}", x, it);
}
