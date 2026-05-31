#include <vector>
#include <iostream>
using namespace std;

// Evaluate the Newton form by nested (Horner-like) multiplication.
double newton_eval(const vector<double>& x, const vector<double>& a, double t) {
    double p = a.back();
    for (int k = (int)a.size() - 2; k >= 0; --k) p = p * (t - x[k]) + a[k];
    return p;
}

int main() {
    cout << newton_eval({-1, 1, 2, 3}, {-3, 2, 0, 3}, 0) << "\n";   // 5
}
