#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Secant method (derivative-free).
double secant(function<double(double)> f, double x0, double x1, double tol = 1e-12, int max_iter = 100) {
    double f0 = f(x0), f1 = f(x1);
    for (int k = 0; k < max_iter; ++k) {
        double x2 = x1 - f1 * (x1 - x0) / (f1 - f0);
        if (fabs(x2 - x1) < tol) return x2;
        x0 = x1; f0 = f1; x1 = x2; f1 = f(x2);
    }
    return x1;
}

int main() {
    cout.precision(12);
    cout << secant([](double x) { return x * x - 2; }, 1.0, 2.0) << "\n";
}
