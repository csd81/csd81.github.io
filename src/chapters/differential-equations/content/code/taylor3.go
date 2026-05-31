package main

import "fmt"

// Third-order Taylor method (uses the first two total derivatives of f).
func taylor3(f, df, d2f func(float64, float64) float64, t0, y0, h float64, n int) (float64, float64) {
	t, y := t0, y0
	for i := 0; i < n; i++ {
		y += h*f(t, y) + h*h/2*df(t, y) + h*h*h/6*d2f(t, y)
		t += h
	}
	return t, y
}

func main() {
	f := func(t, y float64) float64 { return 2*y - 10*t*t + 2*t }
	df := func(t, y float64) float64 { return 4*y - 20*t*t - 16*t + 2 }
	d2f := func(t, y float64) float64 { return 8*y - 40*t*t - 32*t - 16 }
	_, y := taylor3(f, df, d2f, 0.0, 1.0, 0.1, 10)
	fmt.Println("y(1) =", y)
}
