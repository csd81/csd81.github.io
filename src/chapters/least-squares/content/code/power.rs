fn linreg(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let (mut sx, mut sy, mut sxx, mut sxy) = (0.0, 0.0, 0.0, 0.0);
    for i in 0..x.len() { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    let a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    (a, (sy - a * sx) / n)
}
// Fit y ~ b t^a via regression on log-log data.
fn power_fit(t: &[f64], y: &[f64]) -> (f64, f64) {
    let lt: Vec<f64> = t.iter().map(|v| v.ln()).collect();
    let ly: Vec<f64> = y.iter().map(|v| v.ln()).collect();
    let (a, lnb) = linreg(&lt, &ly);
    (a, lnb.exp())
}
fn main() {
    let t = [1.0, 2.0, 3.0, 4.0];
    let y = [2.0, 5.6, 9.7, 16.0];
    let (a, b) = power_fit(&t, &y);
    println!("a = {:.4}, b = {:.4}", a, b);
}
