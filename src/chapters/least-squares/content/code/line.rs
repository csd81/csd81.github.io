// Least-squares line y = a + b x via the 2x2 normal equations.
fn line_fit(x: &[f64], y: &[f64]) -> (f64, f64) {
    let n = x.len() as f64;
    let sx: f64 = x.iter().sum();
    let sy: f64 = y.iter().sum();
    let sxx: f64 = x.iter().map(|&xi| xi * xi).sum();
    let sxy: f64 = x.iter().zip(y).map(|(&xi, &yi)| xi * yi).sum();
    let b = (n * sxy - sx * sy) / (n * sxx - sx * sx);   // slope
    let a = (sy - b * sx) / n;                            // intercept
    (a, b)
}
fn main() {
    let x = [0.0, 1.0, 2.0, 3.0, 4.0];
    let y = [1.0, 3.0, 2.0, 5.0, 4.0];
    let (a, b) = line_fit(&x, &y);
    println!("slope b = {}, intercept a = {}", b, a);
}
// -> slope b = 0.8, intercept a = 1.4
