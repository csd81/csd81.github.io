#include <iostream>
#include <functional>
using namespace std;
using Fn = function<double(double, double)>;

// Third-order Taylor method (first two total derivatives of f).
double taylor3(Fn f, Fn df, Fn d2f, double t0, double y0, double h, int n) {
    double t = t0, y = y0;
    for (int i = 0; i < n; ++i) {
        y += h * f(t, y) + h * h / 2 * df(t, y) + h * h * h / 6 * d2f(t, y);
        t += h;
    }
    return y;
}

int main() {
    auto f = [](double t, double y) { return 2 * y - 10 * t * t + 2 * t; };
    auto df = [](double t, double y) { return 4 * y - 20 * t * t - 16 * t + 2; };
    auto d2f = [](double t, double y) { return 8 * y - 40 * t * t - 32 * t - 16; };
    cout << "y(1) = " << taylor3(f, df, d2f, 0.0, 1.0, 0.1, 10) << "\n";
}
