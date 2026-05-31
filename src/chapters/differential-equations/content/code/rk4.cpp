#include <iostream>
#include <functional>
using namespace std;

// Classical fourth-order Runge-Kutta for y' = f(t, y).
double rk4(function<double(double, double)> f, double t0, double y0, double h, int n) {
    double t = t0, y = y0;
    for (int i = 0; i < n; ++i) {
        double k1 = f(t, y);
        double k2 = f(t + h / 2, y + h / 2 * k1);
        double k3 = f(t + h / 2, y + h / 2 * k2);
        double k4 = f(t + h, y + h * k3);
        y += h * (k1 + 2 * k2 + 2 * k3 + k4) / 6; t += h;
    }
    return y;
}

int main() {
    auto f = [](double t, double y) { return 2 * y - 10 * t * t + 2 * t; };
    cout << "y(1) = " << rk4(f, 0.0, 1.0, 0.1, 10) << "\n";
}
