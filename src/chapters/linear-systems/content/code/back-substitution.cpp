#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve an upper-triangular system U x = b.
Vec back_substitution(const Mat& U, const Vec& b) {
    int n = b.size();
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= U[i][j] * x[j];
        x[i] = s / U[i][i];
    }
    return x;
}

int main() {
    Mat U = {{2, 1, -1}, {0, 1, 2}, {0, 0, 3}};
    Vec b = {1, 8, 9};
    for (double v : back_substitution(U, b)) cout << v << " ";
    cout << "\n";
}
