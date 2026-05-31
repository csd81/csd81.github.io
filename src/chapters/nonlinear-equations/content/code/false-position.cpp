#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Regula falsi: bracketing method using the secant intercept.
double false_position(function<double(double)> f, double a, double b, double tol = 1e-12, int max_iter = 200) {
    double fa = f(a), fb = f(b), c = a;
    for (int k = 0; k < max_iter; ++k) {
        c = (a * fb - b * fa) / (fb - fa);
        double fc = f(c);
        if (fabs(fc) < tol) return c;
        if (fa * fc < 0) { b = c; fb = fc; } else { a = c; fa = fc; }
    }
    return c;
}

int main() {
    cout.precision(12);
    cout << false_position([](double x) { return x * x - 2; }, 1.0, 2.0) << "\n";
}
