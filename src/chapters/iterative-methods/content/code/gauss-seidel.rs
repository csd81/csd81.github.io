// Solve A x = b by Gauss-Seidel iteration.
fn gauss_seidel(a: &[Vec<f64>], b: &[f64], tol: f64, max_iter: usize) -> (Vec<f64>, usize) {
    let n = b.len();
    let mut x = vec![0.0; n];
    for k in 1..=max_iter {
        let mut diff = 0.0_f64;
        for i in 0..n {
            let mut s = b[i];
            for j in 0..n {
                if j != i { s -= a[i][j] * x[j]; }   // x already holds new entries
            }
            let xi = s / a[i][i];
            diff = diff.max((xi - x[i]).abs());
            x[i] = xi;
        }
        if diff <= tol { return (x, k); }
    }
    (x, max_iter)
}

fn main() {
    let a = vec![vec![4.0, 2.0, -1.0], vec![5.0, -10.0, 2.0], vec![-2.0, 3.0, -7.0]];
    let b = vec![9.0, 8.0, 3.0];
    let (x, it) = gauss_seidel(&a, &b, 1e-10, 200);
    println!("x = {:?}  iterations = {}", x, it);
}
