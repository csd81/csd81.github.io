#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;

pair<double, double> linreg(const Vec& x, const Vec& y) {
    int n = x.size();
    double sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (int i = 0; i < n; ++i) { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    double a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    return {a, (sy - a * sx) / n};
}

// Fit y ~ b*t^a via regression on log-log data.  Returns {a, b}.
pair<double, double> power_fit(const Vec& t, const Vec& y) {
    Vec lt(t.size()), ly(y.size());
    for (size_t i = 0; i < t.size(); ++i) { lt[i] = log(t[i]); ly[i] = log(y[i]); }
    auto [a, lnb] = linreg(lt, ly);
    return {a, exp(lnb)};
}

int main() {
    Vec t = {1, 2, 3, 4}, y = {2.0, 5.6, 9.7, 16.0};
    auto [a, b] = power_fit(t, y);
    cout.precision(4);
    cout << "a = " << a << ", b = " << b << "\n";
}
