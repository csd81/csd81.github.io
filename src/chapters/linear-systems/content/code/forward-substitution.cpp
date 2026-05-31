#include <vector>
#include <iostream>
using namespace std;
using Vec = vector<double>;
using Mat = vector<Vec>;

// Solve a lower-triangular system L y = b.
Vec forward_substitution(const Mat& L, const Vec& b) {
    int n = b.size();
    Vec y(n);
    for (int i = 0; i < n; ++i) {
        double s = b[i];
        for (int j = 0; j < i; ++j) s -= L[i][j] * y[j];
        y[i] = s / L[i][i];
    }
    return y;
}

int main() {
    Mat L = {{2, 0, 0}, {1, 3, 0}, {-1, 1, 2}};
    Vec b = {4, 5, -1};
    for (double v : forward_substitution(L, b)) cout << v << " ";
    cout << "\n";
}
