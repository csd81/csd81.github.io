#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Central-difference first derivative D(h), error O(h^2).
double central(function<double(double)> f, double x, double h) {
    return (f(x + h) - f(x - h)) / (2 * h);
}

int main() {
    cout.precision(10);
    cout << fixed;
    auto f = [](double x) { return sin(x); };
    double x = 1, h = 0.1;
    double d1 = central(f, x, h);        // D(h),   error O(h^2)
    double d2 = central(f, x, h / 2);    // D(h/2), error O(h^2)
    double ext = (4 * d2 - d1) / 3;      // Richardson extrapolation, error O(h^4)
    cout << "D(h)         = " << d1 << "\n";
    cout << "D(h/2)       = " << d2 << "\n";
    cout << "extrapolated = " << ext << "  exact cos(1) = " << cos(1.0) << "\n";
}
