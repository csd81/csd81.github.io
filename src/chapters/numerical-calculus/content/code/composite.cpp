#include <iostream>
#include <functional>
#include <cmath>
using namespace std;

// Composite trapezoidal (T) and Simpson (S) on [a, b] with n subintervals.
void composite(function<double(double)> f, double a, double b, int n, double &T, double &S) {
    if (n % 2) ++n;                          // Simpson needs even n
    double h = (b - a) / n;
    T = (f(a) + f(b)) / 2;
    S = f(a) + f(b);
    for (int i = 1; i < n; ++i) {
        double yi = f(a + i * h);
        T += yi;
        S += (i % 2 ? 4 : 2) * yi;
    }
    T *= h;
    S *= h / 3;
}

int main() {
    cout.precision(7);
    double T, S;
    composite([](double x) { return exp(x); }, 0, 1, 10, T, S);
    cout << fixed << "trapezoid ~ " << T << "\n";
    cout << "Simpson   ~ " << S << "\n";
}
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
