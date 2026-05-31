package main

import (
	"fmt"
	"math"
)

func solve(A [][]float64, b []float64) []float64 {
	n := len(b)
	m := make([][]float64, n)
	for i := range A {
		m[i] = append([]float64{}, A[i]...)
	}
	r := append([]float64{}, b...)
	for k := 0; k < n; k++ {
		p := k
		for i := k + 1; i < n; i++ {
			if math.Abs(m[i][k]) > math.Abs(m[p][k]) {
				p = i
			}
		}
		m[k], m[p] = m[p], m[k]
		r[k], r[p] = r[p], r[k]
		for i := k + 1; i < n; i++ {
			f := m[i][k] / m[k][k]
			for j := k; j < n; j++ {
				m[i][j] -= f * m[k][j]
			}
			r[i] -= f * r[k]
		}
	}
	x := make([]float64, n)
	for i := n - 1; i >= 0; i-- {
		s := r[i]
		for j := i + 1; j < n; j++ {
			s -= m[i][j] * x[j]
		}
		x[i] = s / m[i][i]
	}
	return x
}

// Lagrange interpolation via the Vandermonde system.
func lagrangeCoeffs(x, y []float64) []float64 {
	n := len(x)
	V := make([][]float64, n)
	for i := range x {
		V[i] = make([]float64, n)
		for j := 0; j < n; j++ {
			V[i][j] = math.Pow(x[i], float64(j))
		}
	}
	return solve(V, y)
}

func main() {
	fmt.Println(lagrangeCoeffs([]float64{-1, 1, 2, 3}, []float64{-3, 1, 3, 29})) // [5 -1 -6 3]
}
