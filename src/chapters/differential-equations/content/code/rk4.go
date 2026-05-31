package main

import "fmt"

// Classical fourth-order Runge-Kutta for y' = f(t, y).
func rk4(f func(float64, float64) float64, t0, y0, h float64, n int) (float64, float64) {
	t, y := t0, y0
	for i := 0; i < n; i++ {
		k1 := f(t, y)
		k2 := f(t+h/2, y+h/2*k1)
		k3 := f(t+h/2, y+h/2*k2)
		k4 := f(t+h, y+h*k3)
		y += h * (k1 + 2*k2 + 2*k3 + k4) / 6
		t += h
	}
	return t, y
}

func main() {
	f := func(t, y float64) float64 { return 2*y - 10*t*t + 2*t }
	_, y := rk4(f, 0.0, 1.0, 0.1, 10)
	fmt.Println("y(1) =", y)
}
