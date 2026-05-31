package main

import (
	"fmt"
	"math"
)

func nrm(v []float64) float64 {
	s := 0.0
	for _, x := range v {
		s += x * x
	}
	return math.Sqrt(s)
}

func dot(a, b []float64) float64 {
	s := 0.0
	for i := range a {
		s += a[i] * b[i]
	}
	return s
}

func matvec(M [][]float64, v []float64) []float64 {
	r := make([]float64, len(M))
	for i := range M {
		r[i] = dot(M[i], v)
	}
	return r
}

func eye(n int) [][]float64 {
	H := make([][]float64, n)
	for i := range H {
		H[i] = make([]float64, n)
		H[i][i] = 1
	}
	return H
}

// PSB (Powell-Symmetric-Broyden) quasi-Newton minimization (inverse-Hessian form).
func psb(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	H := eye(n) // inverse-Hessian estimate
	g := grad(x)
	for k := 0; k < maxIter; k++ {
		if nrm(g) < tol {
			break
		}
		d := matvec(H, g)
		for i := range d {
			d[i] = -d[i]
		}
		if dot(g, d) >= 0 { // safeguard: descent direction
			H = eye(n)
			d = make([]float64, n)
			for i := range d {
				d[i] = -g[i]
			}
		}
		fx, gd := f(x), dot(g, d)
		step := func(t float64) []float64 {
			y := make([]float64, n)
			for i := range x {
				y[i] = x[i] + t*d[i]
			}
			return y
		}
		t := 1.0
		for f(step(t)) > fx+1e-4*t*gd {
			t /= 2
		}
		s := make([]float64, n)
		for i := range s {
			s[i] = t * d[i]
		}
		xNew := step(t)
		gNew := grad(xNew)
		y := make([]float64, n)
		for i := range y {
			y[i] = gNew[i] - g[i]
		}
		Hy := matvec(H, y)
		w := make([]float64, n)
		for i := range w {
			w[i] = s[i] - Hy[i] // secant-condition residual
		}
		yy := dot(y, y)
		yw := dot(y, w)
		if yy > 1e-12 { // PSB inverse update (symmetric)
			for i := 0; i < n; i++ {
				for j := 0; j < n; j++ {
					H[i][j] += (w[i]*y[j]+y[i]*w[j])/yy - (yw/(yy*yy))*y[i]*y[j]
				}
			}
		}
		x = xNew
		g = gNew
	}
	return x
}

func main() {
	f := func(v []float64) float64 { return (v[0]-1)*(v[0]-1) + 5*(v[1]-2)*(v[1]-2) }
	g := func(v []float64) []float64 { return []float64{2 * (v[0] - 1), 10 * (v[1] - 2)} }
	fmt.Println(psb(f, g, []float64{0, 0}, 1e-8, 200)) // -> [1 2]
}
