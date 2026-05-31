package main

import (
	"fmt"
	"math"
)

// Fixed-point iteration x_{k+1} = g(x_k).
func fixedPoint(g func(float64) float64, x0, tol float64, maxIter int) float64 {
	x := x0
	for k := 0; k < maxIter; k++ {
		xn := g(x)
		if math.Abs(xn-x) < tol {
			return xn
		}
		x = xn
	}
	return x
}

func main() {
	fmt.Println(fixedPoint(math.Cos, 1.0, 1e-12, 200)) // Dottie number ~0.739085
}
