package main

import (
	"fmt"
	"math"
)

// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
func composite(f func(float64) float64, a, b float64, n int) (float64, float64) {
	if n%2 != 0 {
		n++ // Simpson needs even n
	}
	h := (b - a) / float64(n)
	T := (f(a) + f(b)) / 2
	S := f(a) + f(b)
	for i := 1; i < n; i++ {
		yi := f(a + float64(i)*h)
		T += yi
		if i%2 != 0 {
			S += 4 * yi
		} else {
			S += 2 * yi
		}
	}
	return h * T, h / 3 * S
}

func main() {
	T, S := composite(math.Exp, 0, 1, 10)
	fmt.Println("trapezoid ~", T)
	fmt.Println("Simpson   ~", S)
}
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
