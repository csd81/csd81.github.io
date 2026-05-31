fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
// Steepest descent with backtracking (Armijo) line search.
fn steepest_descent<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let g = grad(&x);
        if nrm(&g) < tol { break; }
        let d: Vec<f64> = g.iter().map(|v| -v).collect();
        let fx = f(&x);
        let gd: f64 = g.iter().zip(&d).map(|(a, b)| a * b).sum();
        let mut t = 1.0;
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        x = step(t);
    }
    x
}
fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let g = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", steepest_descent(f, g, &[0.0, 0.0], 1e-8, 1000));
}
