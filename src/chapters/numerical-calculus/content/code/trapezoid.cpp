#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Composite trapezoidal rule for the integral of f on [a, b].
double trapezoid(function<double(double)> f, double a, double b, int n = 100) {
    double h = (b - a) / n, s = (f(a) + f(b)) / 2;
    for (int i = 1; i < n; ++i) s += f(a + i * h);
    return h * s;
}

int main() {
    cout.precision(10);
    cout << "int_0^1 e^x dx ~ " << trapezoid([](double x) { return exp(x); }, 0, 1, 100) << "\n";
}
