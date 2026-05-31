package main

import "fmt"

// Naive Gaussian elimination (no pivoting) + back-substitution.
func gaussElimination(A [][]float64, b []float64) []float64 {
	n := len(b)
	M := make([][]float64, n)
	for i := range A {
		M[i] = append(append([]float64{}, A[i]...), b[i]) // augment [A | b]
	}
	for k := 0; k < n; k++ {
		for i := k + 1; i < n; i++ {
			f := M[i][k] / M[k][k]
			for j := k; j <= n; j++ {
				M[i][j] -= f * M[k][j]
			}
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := M[i][n]
		for j := i + 1; j < n; j++ {
			s -= M[i][j] * x[j]
		}
		x[i] = s / M[i][i]
	}
	return x
}

func main() {
	A := [][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}
	b := []float64{8, -11, -3}
	fmt.Println(gaussElimination(A, b))
}
