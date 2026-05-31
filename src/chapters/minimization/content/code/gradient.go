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

// Gradient descent with constant step size alpha.
func gradientDescent(grad func([]float64) []float64, x0 []float64, alpha, tol float64, maxIter int) []float64 {
	x := append([]float64{}, x0...)
	for k := 0; k < maxIter; k++ {
		g := grad(x)
		if nrm(g) < tol {
			break
		}
		for i := range x {
			x[i] -= alpha * g[i]
		}
	}
	return x
}

func main() {
	grad := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 2 * (v[1] - 2)} }
	fmt.Println(gradientDescent(grad, []float64{0, 0}, 0.1, 1e-8, 100000))
}
