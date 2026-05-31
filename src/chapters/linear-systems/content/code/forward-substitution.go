package main

import "fmt"

// Solve a lower-triangular system L y = b.
func forwardSubstitution(L [][]float64, b []float64) []float64 {
	n := len(b)
	y := make([]float64, n)
	for i := 0; i < n; i++ {
		s := b[i]
		for j := 0; j < i; j++ {
			s -= L[i][j] * y[j]
		}
		y[i] = s / L[i][i]
	}
	return y
}

func main() {
	L := [][]float64{{2, 0, 0}, {1, 3, 0}, {-1, 1, 2}}
	b := []float64{4, 5, -1}
	fmt.Println(forwardSubstitution(L, b)) // [2 1 0]
}
