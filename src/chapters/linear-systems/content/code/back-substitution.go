package main

import "fmt"

// Solve an upper-triangular system U x = b.
func backSubstitution(U [][]float64, b []float64) []float64 {
	n := len(b)
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := b[i]
		for j := i + 1; j < n; j++ {
			s -= U[i][j] * x[j]
		}
		x[i] = s / U[i][i]
	}
	return x
}

func main() {
	U := [][]float64{{2, 1, -1}, {0, 1, 2}, {0, 0, 3}}
	b := []float64{1, 8, 9}
	fmt.Println(backSubstitution(U, b)) // [1 2 3]
}
