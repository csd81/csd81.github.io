#include <vector>
#include <cmath>
#include <iostream>
using namespace std;
using Mat = vector<vector<double>>;

// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
Mat cholesky(const Mat& A) {
    int n = A.size();
    Mat L(n, vector<double>(n, 0.0));
    for (int j = 0; j < n; ++j) {
        double s = A[j][j];
        for (int k = 0; k < j; ++k) s -= L[j][k] * L[j][k];
        L[j][j] = sqrt(s);
        for (int i = j + 1; i < n; ++i) {
            double t = A[i][j];
            for (int k = 0; k < j; ++k) t -= L[i][k] * L[j][k];
            L[i][j] = t / L[j][j];
        }
    }
    return L;
}

int main() {
    Mat A = {{4, 2, -2}, {2, 10, 2}, {-2, 2, 5}};
    for (auto& row : cholesky(A)) { for (double v : row) cout << v << " "; cout << "\n"; }
}
