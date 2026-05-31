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

// Newton's method for F(x) = 0 with Jacobian J(x).
func newtonSystem(F func([]float64) []float64, J func([]float64) [][]float64, x0 []float64, tol float64, maxIter int) []float64 {
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		Fx := F(x)
		mx := 0.0
		for _, v := range Fx {
			mx = math.Max(mx, math.Abs(v))
		}
		if mx < tol {
			return x
		}
		dx := solve(J(x), Fx)
		for i := range x {
			x[i] -= dx[i]
		}
	}
	return x
}

func main() {
	F := func(v []float64) []float64 { return []float64{v[0]*v[0] + v[1]*v[1] - 4, v[0]*v[1] - 1} }
	J := func(v []float64) [][]float64 { return [][]float64{{2 * v[0], 2 * v[1]}, {v[1], v[0]}} }
	fmt.Println(newtonSystem(F, J, []float64{2, 0.5}, 1e-12, 100))
}
