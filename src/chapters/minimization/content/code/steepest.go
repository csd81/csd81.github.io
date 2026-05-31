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

// Steepest descent with backtracking (Armijo) line search.
func steepestDescent(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		g := grad(x)
		if nrm(g) < tol {
			break
		}
		d := make([]float64, n)
		gd := 0.0
		for i := range g {
			d[i] = -g[i]
			gd += g[i] * d[i]
		}
		fx := f(x)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		x = step(t)
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(steepestDescent(f, g, []float64{0, 0}, 1e-8, 1000))
}
