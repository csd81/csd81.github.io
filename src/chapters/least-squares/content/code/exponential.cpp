#include <vector>
#include <iostream>
#include <cmath>
using namespace std;
using Vec = vector<double>;

// Linear regression y = a*x + b on the given points; returns {a, b}.
pair<double, double> linreg(const Vec& x, const Vec& y) {
    int n = x.size();
    double sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (int i = 0; i < n; ++i) { sx += x[i]; sy += y[i]; sxx += x[i] * x[i]; sxy += x[i] * y[i]; }
    double a = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    return {a, (sy - a * sx) / n};
}

// Fit y ~ b*exp(a*t) via regression on ln(y).  Returns {a, b}.
pair<double, double> exp_fit(const Vec& t, const Vec& y) {
    Vec ly(y.size());
    for (size_t i = 0; i < y.size(); ++i) ly[i] = log(y[i]);
    auto [a, lnb] = linreg(t, ly);
    return {a, exp(lnb)};
}

int main() {
    Vec t = {0, 1, 2, 3}, y = {2.0, 4.1, 8.2, 15.9};
    auto [a, b] = exp_fit(t, y);
    cout.precision(4);
    cout << "a = " << a << ", b = " << b << "\n";
}
