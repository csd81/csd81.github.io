#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Naive Gaussian elimination (no pivoting) + back-substitution.
Vec gauss_elimination(Mat A, Vec b) {
    int n = b.size();
    for (int i = 0; i < n; ++i) A[i].push_back(b[i]);     // augment [A | b]
    for (int k = 0; k < n; ++k)
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j <= n; ++j) A[i][j] -= f * A[k][j];
        }
    Vec x(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = A[i][n];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * x[j];
        x[i] = s / A[i][i];
    }
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    for (double v : gauss_elimination(A, b)) cout << v << " ";
    cout << "\n";
}
