#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Fixed-point iteration x_{k+1} = g(x_k).
double fixed_point(function<double(double)> g, double x0, double tol = 1e-12, int max_iter = 200) {
    double x = x0;
    for (int k = 0; k < max_iter; ++k) {
        double xn = g(x);
        if (fabs(xn - x) < tol) return xn;
        x = xn;
    }
    return x;
}

int main() {
    cout.precision(12);
    cout << fixed_point([](double x) { return cos(x); }, 1.0) << "\n";
}
