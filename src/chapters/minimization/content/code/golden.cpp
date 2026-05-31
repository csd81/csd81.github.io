#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Golden-section search for the minimum of a unimodal f on [a, b].
double golden_section(function<double(double)> f, double a, double b, double tol = 1e-8) {
    double g = (sqrt(5.0) - 1) / 2;
    double c = b - g * (b - a), d = a + g * (b - a), fc = f(c), fd = f(d);
    while (b - a > tol) {
        if (fc < fd) { b = d; d = c; fd = fc; c = b - g * (b - a); fc = f(c); }
        else { a = c; c = d; fc = fd; d = a + g * (b - a); fd = f(d); }
    }
    return (a + b) / 2;
}

int main() {
    cout << golden_section([](double x) { return (x - 2) * (x - 2) + 1; }, 0, 5) << "\n";
}
