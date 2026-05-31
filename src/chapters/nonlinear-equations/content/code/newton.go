package main

import (
	"fmt"
	"math"
)

// Newton's method using f and its derivative df.
func newton(f, df func(float64) float64, x0, tol float64, maxIter int) float64 {
	x := x0
	for k := 0; k < maxIter; k++ {
		fx := f(x)
		if math.Abs(fx) < tol {
			return x
		}
		x -= fx / df(x)
	}
	return x
}

func main() {
	fmt.Println(newton(func(x float64) float64 { return x*x - 2 }, func(x float64) float64 { return 2 * x }, 1.0, 1e-12, 100)) // sqrt(2)
}
