fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn dot(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| x * y).sum() }

// BFGS quasi-Newton minimization with backtracking (Armijo) line search.
fn bfgs<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(
    f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut h = vec![vec![0.0; n]; n];           // inverse-Hessian estimate
    for i in 0..n { h[i][i] = 1.0; }
    let mut g = grad(&x);
    for _ in 0..max_iter {
        if nrm(&g) < tol { break; }
        let d: Vec<f64> = (0..n).map(|i| -dot(&h[i], &g)).collect();  // d = -H g
        let (fx, gd) = (f(&x), dot(&g, &d));
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        let mut t = 1.0;
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        let s: Vec<f64> = d.iter().map(|di| t * di).collect();
        let x_new = step(t);
        let g_new = grad(&x_new);
        let y: Vec<f64> = (0..n).map(|i| g_new[i] - g[i]).collect();
        let sy = dot(&s, &y);
        if sy > 1e-12 {                          // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
            let rho = 1.0 / sy;
            let a: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (if i == j { 1.0 } else { 0.0 }) - rho * s[i] * y[j]).collect()).collect();
            let b: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (if i == j { 1.0 } else { 0.0 }) - rho * y[i] * s[j]).collect()).collect();
            let ah: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (0..n).map(|l| a[i][l] * h[l][j]).sum()).collect()).collect();
            let ahb: Vec<Vec<f64>> = (0..n).map(|i| (0..n).map(|j|
                (0..n).map(|l| ah[i][l] * b[l][j]).sum()).collect()).collect();
            for i in 0..n { for j in 0..n { h[i][j] = ahb[i][j] + rho * s[i] * s[j]; } }
        }
        x = x_new; g = g_new;
    }
    x
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", bfgs(f, grad, &[0.0, 0.0], 1e-8, 200));   // -> [1, 2]
}
