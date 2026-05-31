#include <iostream>
#include <functional>
using namespace std;
using Fn = function<double(double, double)>;

// Second-order Taylor method; df is the total derivative f' = f_t + f_y f.
double taylor2(Fn f, Fn df, double t0, double y0, double h, int n) {
    double t = t0, y = y0;
    for (int i = 0; i < n; ++i) { y += h * f(t, y) + h * h / 2 * df(t, y); t += h; }
    return y;
}

int main() {
    auto f = [](double t, double y) { return 2 * y - 10 * t * t + 2 * t; };
    auto df = [](double t, double y) { return 4 * y - 20 * t * t - 16 * t + 2; };
    cout << "y(1) = " << taylor2(f, df, 0.0, 1.0, 0.1, 10) << "\n";
}
