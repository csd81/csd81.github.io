package main

import "fmt"

// Second-order Taylor method. df is the total derivative f'(t,y) = f_t + f_y f.
func taylor2(f, df func(float64, float64) float64, t0, y0, h float64, n int) (float64, float64) {
	t, y := t0, y0
	for i := 0; i < n; i++ {
		y += h*f(t, y) + h*h/2*df(t, y)
		t += h
	}
	return t, y
}

func main() {
	// y' = 2y - 10t^2 + 2t  ->  f' = 4y - 20t^2 - 16t + 2
	f := func(t, y float64) float64 { return 2*y - 10*t*t + 2*t }
	df := func(t, y float64) float64 { return 4*y - 20*t*t - 16*t + 2 }
	_, y := taylor2(f, df, 0.0, 1.0, 0.1, 10)
	fmt.Println("y(1) =", y)
}
