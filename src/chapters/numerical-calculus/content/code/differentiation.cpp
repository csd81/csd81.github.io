#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Central-difference first derivative, error O(h^2).
double deriv1(function<double(double)> f, double x, double h = 0.01) {
    return (f(x + h) - f(x - h)) / (2 * h);
}

// Central-difference second derivative, error O(h^2).
double deriv2(function<double(double)> f, double x, double h = 0.01) {
    return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
}

int main() {
    cout.precision(6);
    cout << fixed;
    auto f = [](double x) { return sin(x); };
    cout << "f'(1)  ~ " << deriv1(f, 1, 0.01) << "  exact cos(1)  = " << cos(1.0) << "\n";
    cout << "f''(1) ~ " << deriv2(f, 1, 0.01) << "  exact -sin(1) = " << -sin(1.0) << "\n";
}
