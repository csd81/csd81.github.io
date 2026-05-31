#include <iostream>
#include <functional>
using namespace std;

// Forward Euler for y' = f(t, y); returns y at t0 + n*h.
double euler(function<double(double, double)> f, double t0, double y0, double h, int n) {
    double t = t0, y = y0;
    for (int i = 0; i < n; ++i) { y += h * f(t, y); t += h; }
    return y;
}

int main() {
    auto f = [](double t, double y) { return 2 * y - 10 * t * t + 2 * t; };
    cout << "y(1) = " << euler(f, 0.0, 1.0, 0.1, 10) << "\n";
}
