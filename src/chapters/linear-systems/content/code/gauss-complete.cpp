#include <vector>
#include <iostream>
#include <cmath>
#include <numeric>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Gaussian elimination with complete (row + column) pivoting.
Vec gauss_complete_pivot(Mat A, Vec b) {
    int n = b.size();
    vector<int> col(n); iota(col.begin(), col.end(), 0);
    for (int k = 0; k < n; ++k) {
        int pi = k, pj = k;
        for (int i = k; i < n; ++i)
            for (int j = k; j < n; ++j)
                if (fabs(A[i][j]) > fabs(A[pi][pj])) { pi = i; pj = j; }
        swap(A[k], A[pi]); swap(b[k], b[pi]);
        for (int i = 0; i < n; ++i) swap(A[i][k], A[i][pj]);
        swap(col[k], col[pj]);
        for (int i = k + 1; i < n; ++i) {
            double f = A[i][k] / A[k][k];
            for (int j = k; j < n; ++j) A[i][j] -= f * A[k][j];
            b[i] -= f * b[k];
        }
    }
    Vec y(n);
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i][j] * y[j];
        y[i] = s / A[i][i];
    }
    Vec x(n);
    for (int i = 0; i < n; ++i) x[col[i]] = y[i];   // undo column swaps
    return x;
}

int main() {
    Mat A = {{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}};
    Vec b = {8, -11, -3};
    Vec x = gauss_complete_pivot(A, b);
    cout << "x ="; for (double v : x) cout << " " << v; cout << "\n";
}
