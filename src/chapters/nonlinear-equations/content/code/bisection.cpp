#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Bisection root of f on [a, b] (requires f(a)*f(b) < 0).
double bisection(function<double(double)> f, double a, double b, double tol = 1e-12, int max_iter = 200) {
    double fa = f(a);
    for (int k = 0; k < max_iter; ++k) {
        double c = (a + b) / 2, fc = f(c);
        if (fc == 0 || (b - a) / 2 < tol) return c;
        if (fa * fc < 0) b = c; else { a = c; fa = fc; }
    }
    return (a + b) / 2;
}

int main() {
    cout.precision(12);
    cout << bisection([](double x) { return x * x - 2; }, 1, 2) << "\n";
}
