package main

import (
	"fmt"
	"math"
)

// Regula falsi (false position) for f on a bracket [a, b].
func falsePosition(f func(float64) float64, a, b, tol float64, maxIter int) float64 {
	fa, fb, c := f(a), f(b), a
	for k := 0; k < maxIter; k++ {
		c = (a*fb - b*fa) / (fb - fa)
		fc := f(c)
		if math.Abs(fc) < tol {
			return c
		}
		if fa*fc < 0 {
			b, fb = c, fc
		} else {
			a, fa = c, fc
		}
	}
	return c
}

func main() {
	fmt.Println(falsePosition(func(x float64) float64 { return x*x - 2 }, 1, 2, 1e-12, 200))
}
