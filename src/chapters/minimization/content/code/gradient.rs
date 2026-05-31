fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
// Gradient descent with constant step size alpha.
fn gradient_descent<G: Fn(&[f64]) -> Vec<f64>>(grad: G, x0: &[f64], alpha: f64, tol: f64, max_iter: usize) -> Vec<f64> {
    let mut x = x0.to_vec();
    for _ in 0..max_iter {
        let g = grad(&x);
        if nrm(&g) < tol { break; }
        for i in 0..x.len() { x[i] -= alpha * g[i]; }
    }
    x
}
fn main() {
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 2.0 * (v[1] - 2.0)];
    println!("{:?}", gradient_descent(grad, &[0.0, 0.0], 0.1, 1e-8, 100000));
}
