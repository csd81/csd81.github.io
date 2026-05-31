fn dist(a: &[f64], b: &[f64]) -> f64 { a.iter().zip(b).map(|(x, y)| (x - y) * (x - y)).sum::<f64>().sqrt() }

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
fn simplex_basic<F: Fn(&[f64]) -> f64>(f: F, x0: &[f64], step: f64, tol: f64, max_iter: usize) -> Vec<f64> {
    let n = x0.len();
    let mut p: Vec<Vec<f64>> = (0..=n).map(|_| x0.to_vec()).collect();
    for i in 0..n { p[i + 1][i] += step; }                        // n+1 vertices
    let mut fv: Vec<f64> = p.iter().map(|v| f(v)).collect();
    let argmax = |fv: &[f64]| (0..fv.len()).max_by(|&a, &b| fv[a].partial_cmp(&fv[b]).unwrap()).unwrap();
    let argmin = |fv: &[f64]| (0..fv.len()).min_by(|&a, &b| fv[a].partial_cmp(&fv[b]).unwrap()).unwrap();
    for _ in 0..max_iter {
        let iw = argmax(&fv);
        let ib = argmin(&fv);
        let sz = (0..=n).map(|i| dist(&p[i], &p[ib])).fold(0.0, f64::max);
        if sz < tol { break; }
        let mut c = vec![0.0; n];                                 // centroid of all but the worst
        for i in 0..=n { if i != iw { for j in 0..n { c[j] += p[i][j] / n as f64; } } }
        let xr: Vec<f64> = (0..n).map(|j| c[j] + (c[j] - p[iw][j])).collect();   // reflect worst
        let fr = f(&xr);
        if fr < fv[iw] { p[iw] = xr; fv[iw] = fr; }
        else {                                                    // shrink toward the best
            let best = p[ib].clone();
            for i in 0..=n { if i != ib {
                for j in 0..n { p[i][j] = best[j] + 0.5 * (p[i][j] - best[j]); }
                fv[i] = f(&p[i]);
            }}
        }
    }
    p[argmin(&fv)].clone()
}

fn main() {
    let f = |v: &[f64]| (v[0] - 1.0).powi(2) + (v[1] - 2.0).powi(2);
    println!("{:?}", simplex_basic(f, &[0.0, 0.0], 1.0, 1e-8, 500));   // -> [1, 2]
}
