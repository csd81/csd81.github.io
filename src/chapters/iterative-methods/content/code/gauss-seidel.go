package main

import (
	"fmt"
	"math"
)

// Solve A x = b by Gauss-Seidel iteration. Returns the solution and iteration count.
func gaussSeidel(A [][]float64, b []float64, tol float64, maxIter int) ([]float64, int) {
	n := len(b)
	x := make([]float64, n)
	for k := 1; k <= maxIter; k++ {
		diff := 0.0
		for i := 0; i < n; i++ {
			s := b[i]
			for j := 0; j < n; j++ {
				if j != i {
					s -= A[i][j] * x[j]
				}
			}
			xi := s / A[i][i]
			diff = math.Max(diff, math.Abs(xi-x[i]))
			x[i] = xi
		}
		if diff <= tol {
			return x, k
		}
	}
	return x, maxIter
}

func main() {
	A := [][]float64{{4, 2, -1}, {5, -10, 2}, {-2, 3, -7}}
	b := []float64{9, 8, 3}
	x, it := gaussSeidel(A, b, 1e-10, 200)
	fmt.Println("x =", x, " iterations =", it)
}
