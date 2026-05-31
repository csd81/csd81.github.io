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

// Iterative refinement of the solution of A x = b.
func iterativeRefinement(A [][]float64, b []float64, tol float64, maxIter int) []float64 {
	n := len(b)
	x := solve(A, b)
	for k := 0; k < maxIter; k++ {
		r := make([]float64, n)
		for i := 0; i < n; i++ {
			s := b[i]
			for j := 0; j < n; j++ {
				s -= A[i][j] * x[j]
			}
			r[i] = s
		}
		d := solve(A, r)
		nd := 0.0
		for i := 0; i < n; i++ {
			x[i] += d[i]
			nd = math.Max(nd, math.Abs(d[i]))
		}
		if nd < tol {
			break
		}
	}
	return x
}

func main() {
	A := [][]float64{{2, 1, -1}, {-3, -1, 2}, {-2, 1, 2}}
	b := []float64{8, -11, -3}
	fmt.Println(iterativeRefinement(A, b, 1e-12, 20))
}
