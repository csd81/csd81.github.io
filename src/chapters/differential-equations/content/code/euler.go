package main

import "fmt"

// Forward Euler for y' = f(t, y). Returns trajectories (t, y).
func euler(f func(float64, float64) float64, t0, y0, h float64, n int) ([]float64, []float64) {
	t := []float64{t0}
	y := []float64{y0}
	for i := 0; i < n; i++ {
		y = append(y, y[len(y)-1]+h*f(t[len(t)-1], y[len(y)-1]))
		t = append(t, t0+float64(i+1)*h)
	}
	return t, y
}

func main() {
	f := func(t, y float64) float64 { return 2*y - 10*t*t + 2*t } // y(0)=1 on [0,1]
	_, y := euler(f, 0.0, 1.0, 0.1, 10)
	fmt.Println("y(1) =", y[len(y)-1])
}
