#include <vector>
#include <iostream>
using namespace std;
using Mat = vector<vector<double>>;

// Doolittle factorization A = L U (L unit-lower, U upper).
void lu_doolittle(const Mat& A, Mat& L, Mat& U) {
    int n = A.size();
    L.assign(n, vector<double>(n, 0.0));
    U.assign(n, vector<double>(n, 0.0));
    for (int i = 0; i < n; ++i) {
        L[i][i] = 1.0;
        for (int j = i; j < n; ++j) {
            double s = A[i][j];
            for (int k = 0; k < i; ++k) s -= L[i][k] * U[k][j];
            U[i][j] = s;
        }
        for (int j = i + 1; j < n; ++j) {
            double s = A[j][i];
            for (int k = 0; k < i; ++k) s -= L[j][k] * U[k][i];
            L[j][i] = s / U[i][i];
        }
    }
}

int main() {
    Mat A = {{1, -2, -2, -2}, {2, -1, 2, 4}, {-1, 2, 3, -4}, {-2, 1, 4, -2}};
    Mat L, U;
    lu_doolittle(A, L, U);
    for (auto& row : L) { for (double v : row) cout << v << " "; cout << "\n"; }
    for (auto& row : U) { for (double v : row) cout << v << " "; cout << "\n"; }
}
