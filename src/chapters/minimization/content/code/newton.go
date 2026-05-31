package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}
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

// Newton's method for unconstrained minimization.
func newtonMin(grad func([]float64) []float64, hess func([]float64) [][]float64, x0 []float64, tol float64, maxIter int) []float64 {
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		g := grad(x)
		if nrm(g) < tol {
			break
		}
		p := solve(hess(x), g)
		for i := range x {
			x[i] -= p[i]
		}
	}
	return x
}

func main() {
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 2 * (v[1] - 2)} }
	hess := func(v []float64) [][]float64 { return [][]float64{{2, 0}, {0, 2}} }
	fmt.Println(newtonMin(g, hess, []float64{0, 0}, 1e-10, 100))
}
