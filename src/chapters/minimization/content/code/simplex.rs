// Nelder-Mead downhill simplex minimization.
fn nelder_mead<F: Fn(&[f64]) -> f64>(
    f: F, x0: &[f64], step: f64, tol: f64, max_iter: usize,
) -> Vec<f64> {
    let n = x0.len();
    let mut pts: Vec<Vec<f64>> = vec![x0.to_vec()];
    for i in 0..n {
        let mut p = x0.to_vec(); p[i] += step; pts.push(p);
    }
    let mut fv: Vec<f64> = pts.iter().map(|p| f(p)).collect();
    for _ in 0..max_iter {
        let mut ord: Vec<usize> = (0..=n).collect();
        ord.sort_by(|&a, &b| fv[a].partial_cmp(&fv[b]).unwrap());
        pts = ord.iter().map(|&i| pts[i].clone()).collect();
        fv = ord.iter().map(|&i| fv[i]).collect();
        if (fv[n] - fv[0]).abs() < tol { break; }
        let mut c = vec![0.0; n];                       // centroid of best n points
        for p in pts.iter().take(n) { for j in 0..n { c[j] += p[j] / n as f64; } }
        let xr: Vec<f64> = (0..n).map(|j| c[j] + (c[j] - pts[n][j])).collect();  // reflect
        let fr = f(&xr);
        if fr < fv[0] {
            let xe: Vec<f64> = (0..n).map(|j| c[j] + 2.0 * (c[j] - pts[n][j])).collect();  // expand
            let fe = f(&xe);
            if fe < fr { pts[n] = xe; fv[n] = fe; } else { pts[n] = xr; fv[n] = fr; }
        } else if fr < fv[n - 1] {
            pts[n] = xr; fv[n] = fr;
        } else {
            let xc: Vec<f64> = (0..n).map(|j| c[j] + 0.5 * (pts[n][j] - c[j])).collect();  // contract
            let fc = f(&xc);
            if fc < fv[n] { pts[n] = xc; fv[n] = fc; }
            else {                                       // shrink toward best
                for i in 1..=n {
                    pts[i] = (0..n).map(|j| pts[0][j] + 0.5 * (pts[i][j] - pts[0][j])).collect();
                    fv[i] = f(&pts[i]);
                }
            }
        }
    }
    pts[0].clone()
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + (v[1] - 2.0).powi(2);
    println!("{:?}", nelder_mead(f, &[0.0, 0.0], 0.5, 1e-10, 400));   // -> [1, 2]
}
