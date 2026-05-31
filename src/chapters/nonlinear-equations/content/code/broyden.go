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

// Broyden's (good) method for F(x) = 0.
func broyden(F func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	B := make([][]float64, n)
	for i := range B {
		B[i] = make([]float64, n)
		B[i][i] = 1
	}
	Fx := F(x)
	for k := 0; k < maxIter; k++ {
		mx := 0.0
		for _, v := range Fx {
			mx = math.Max(mx, math.Abs(v))
		}
		if mx < tol {
			return x
		}
		neg := make([]float64, n)
		for i := range Fx {
			neg[i] = -Fx[i]
		}
		dx := solve(B, neg)
		for i := range x {
			x[i] += dx[i]
		}
		Fn := F(x)
		y := make([]float64, n)
		for i := range Fn {
			y[i] = Fn[i] - Fx[i]
		}
		Bdx := make([]float64, n)
		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				Bdx[i] += B[i][j] * dx[j]
			}
		}
		dd := 0.0
		for _, v := range dx {
			dd += v * v
		}
		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				B[i][j] += (y[i] - Bdx[i]) * dx[j] / dd
			}
		}
		Fx = Fn
	}
	return x
}

func main() {
	F := func(v []float64) []float64 { return []float64{v[0]*v[0] + v[1]*v[1] - 4, v[0]*v[1] - 1} }
	fmt.Println(broyden(F, []float64{2, 0.5}, 1e-12, 100))
}
