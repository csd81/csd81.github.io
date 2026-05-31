fn nrm(v: &[f64]) -> f64 { v.iter().map(|x| x * x).sum::<f64>().sqrt() }
fn dot(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| x * y).sum() }
fn matvec(m: &[Vec<f64>], v: &[f64]) -> Vec<f64> { m.iter().map(|row| dot(row, v)).collect() }

// SR1 (Symmetric Rank-One) quasi-Newton minimization (inverse-Hessian form).
fn sr1<F: Fn(&[f64]) -> f64, G: Fn(&[f64]) -> Vec<f64>>(
    f: F, grad: G, x0: &[f64], tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut x = x0.to_vec();
    let mut h = vec![vec![0.0; n]; n];                    // inverse-Hessian estimate
    for i in 0..n { h[i][i] = 1.0; }
    let mut g = grad(&x);
    for _ in 0..max_iter {
        if nrm(&g) < tol { break; }
        let mut d: Vec<f64> = matvec(&h, &g).iter().map(|v| -v).collect();   // d = -H g
        if dot(&g, &d) >= 0.0 {                           // safeguard: SR1 may lose definiteness
            h = vec![vec![0.0; n]; n]; for i in 0..n { h[i][i] = 1.0; }
            d = g.iter().map(|v| -v).collect();
        }
        let (fx, gd) = (f(&x), dot(&g, &d));
        let step = |t: f64| -> Vec<f64> { (0..n).map(|i| x[i] + t * d[i]).collect() };
        let mut t = 1.0;
        while f(&step(t)) > fx + 1e-4 * t * gd { t /= 2.0; }
        let s: Vec<f64> = d.iter().map(|di| t * di).collect();
        let x_new = step(t);
        let g_new = grad(&x_new);
        let y: Vec<f64> = (0..n).map(|i| g_new[i] - g[i]).collect();
        let hy = matvec(&h, &y);
        let w: Vec<f64> = (0..n).map(|i| s[i] - hy[i]).collect();            // secant-condition residual
        let wy = dot(&w, &y);
        if wy.abs() > 1e-12 {                             // SR1 inverse update (rank one)
            for i in 0..n { for j in 0..n { h[i][j] += w[i] * w[j] / wy; }}
        }
        x = x_new; g = g_new;
    }
    x
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + 5.0 * (v[1] - 2.0).powi(2);
    let grad = |v: &[f64]| vec![2.0 * (v[0] - 1.0), 10.0 * (v[1] - 2.0)];
    println!("{:?}", sr1(f, grad, &[0.0, 0.0], 1e-8, 200));   // -> [1, 2]
}
