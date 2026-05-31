#include <iostream>
#include <functional>
using namespace std;

// Heun's method (RK2, explicit trapezoidal rule).
double heun(function<double(double, double)> f, double t0, double y0, double h, int n) {
    double t = t0, y = y0;
    for (int i = 0; i < n; ++i) {
        double k1 = f(t, y), k2 = f(t + h, y + h * k1);
        y += h * (k1 + k2) / 2; t += h;
    }
    return y;
}

int main() {
    auto f = [](double t, double y) { return 2 * y - 10 * t * t + 2 * t; };
    cout << "y(1) = " << heun(f, 0.0, 1.0, 0.1, 10) << "\n";
}
