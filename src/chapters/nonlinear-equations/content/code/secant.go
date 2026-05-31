package main

import (
	"fmt"
	"math"
)

// Secant method (derivative-free, uses two previous iterates).
func secant(f func(float64) float64, x0, x1, tol float64, maxIter int) float64 {
	f0, f1 := f(x0), f(x1)
	for k := 0; k < maxIter; k++ {
		x2 := x1 - f1*(x1-x0)/(f1-f0)
		if math.Abs(x2-x1) < tol {
			return x2
		}
		x0, f0, x1, f1 = x1, f1, x2, f(x2)
	}
	return x1
}

func main() {
	fmt.Println(secant(func(x float64) float64 { return x*x - 2 }, 1.0, 2.0, 1e-12, 100)) // sqrt(2)
}
