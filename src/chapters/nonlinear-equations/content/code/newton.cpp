#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Newton's method using the derivative df.
double newton(function<double(double)> f, function<double(double)> df, double x0, double tol = 1e-12, int max_iter = 100) {
    double x = x0;
    for (int k = 0; k < max_iter; ++k) {
        double fx = f(x);
        if (fabs(fx) < tol) return x;
        x -= fx / df(x);
    }
    return x;
}

int main() {
    cout.precision(12);
    cout << newton([](double x) { return x * x - 2; }, [](double x) { return 2 * x; }, 1.0) << "\n";
}
