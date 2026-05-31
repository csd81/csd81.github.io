package main

import "fmt"

// Bisection root of f on a bracket [a, b] (requires f(a)*f(b) < 0).
func bisection(f func(float64) float64, a, b, tol float64, maxIter int) float64 {
	fa, c := f(a), a
	for k := 0; k < maxIter; k++ {
		c = (a + b) / 2
		fc := f(c)
		if fc == 0 || (b-a)/2 < tol {
			return c
		}
		if fa*fc < 0 {
			b = c
		} else {
			a, fa = c, fc
		}
	}
	return (a + b) / 2
}

func main() {
	fmt.Println(bisection(func(x float64) float64 { return x*x - 2 }, 1, 2, 1e-12, 200))
}
