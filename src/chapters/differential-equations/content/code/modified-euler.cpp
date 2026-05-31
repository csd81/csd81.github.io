#include <iostream>
#include <functional>
using namespace std;

// Modified Euler (midpoint RK2, predictor-corrector).
double modified_euler(function<double(double, double)> f, double t0, double y0, double h, int n) {
    double t = t0, y = y0;
    for (int i = 0; i < n; ++i) {
        double k1 = f(t, y), k2 = f(t + h / 2, y + h / 2 * k1);
        y += h * k2; t += h;
    }
    return y;
}

int main() {
    auto f = [](double t, double y) { return 2 * y - 10 * t * t + 2 * t; };
    cout << "y(1) = " << modified_euler(f, 0.0, 1.0, 0.1, 10) << "\n";
}
