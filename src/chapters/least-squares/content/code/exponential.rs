// Linear regression y = a x + b; returns (a, b).
fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let (mut sx, mut sy, mut sxx, mut sxy) = (0.0, 0.0, 0.0, 0.0);
    for i in 0..x.len() { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    let a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    (a, (sy - a * sx) / n)
}
// Fit y ~ b e^{a t} via regression on ln(y).
fn exp_fit(t: &[f64], y: &[f64]) -> (f64, f64) {
    let ly: Vec<f64> = y.iter().map(|v| v.ln()).collect();
    let (a, lnb) = linreg(t, &ly);
    (a, lnb.exp())
}
fn main() {
    let t = [0.0, 1.0, 2.0, 3.0];
    let y = [2.0, 4.1, 8.2, 15.9];
    let (a, b) = exp_fit(&t, &y);
    println!("a = {:.4}, b = {:.4}", a, b);
}
