#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// 2- or 3-point Gauss-Legendre quadrature on [a, b].
double gauss_quad(function<double(double)> f, double a, double b, int n = 2) {
    double t2[] = {-1 / sqrt(3.0), 1 / sqrt(3.0)}, w2[] = {1, 1};
    double t3[] = {-sqrt(3.0 / 5), 0, sqrt(3.0 / 5)}, w3[] = {5.0 / 9, 8.0 / 9, 5.0 / 9};
    double *t = n == 3 ? t3 : t2, *w = n == 3 ? w3 : w2;
    int m = n == 3 ? 3 : 2;
    double hm = (b - a) / 2, mid = (a + b) / 2, s = 0;   // map [-1,1] -> [a,b]
    for (int i = 0; i < m; ++i) s += w[i] * f(mid + hm * t[i]);
    return hm * s;
}

int main() {
    cout.precision(7);
    auto f = [](double x) { return exp(x); };
    cout << fixed << "int_0^1 e^x dx ~ " << gauss_quad(f, 0, 1, 2) << " (2-pt)\n";
    cout << "int_0^1 e^x dx ~ " << gauss_quad(f, 0, 1, 3) << " (3-pt)\n";
}
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
