package main

import "fmt"

// Modified Euler (midpoint RK2, predictor-corrector).
func modifiedEuler(f func(float64, float64) float64, t0, y0, h float64, n int) (float64, float64) {
	t, y := t0, y0
	for i := 0; i < n; i++ {
		k1 := f(t, y)
		k2 := f(t+h/2, y+h/2*k1) // slope at the midpoint
		y += h * k2
		t += h
	}
	return t, y
}

func main() {
	f := func(t, y float64) float64 { return 2*y - 10*t*t + 2*t }
	_, y := modifiedEuler(f, 0.0, 1.0, 0.1, 10)
	fmt.Println("y(1) =", y)
}
