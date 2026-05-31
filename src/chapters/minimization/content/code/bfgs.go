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

// BFGS quasi-Newton minimization with backtracking (Armijo) line search.
func bfgs(f func([]float64) float64, grad func([]float64) []float64, x0 []float64, tol float64, maxIter int) []float64 {
	n := len(x0)
	x := append([]float64{}, x0...)
	H := make([][]float64, n) // inverse-Hessian estimate
	for i := range H {
		H[i] = make([]float64, n)
		H[i][i] = 1
	}
	g := grad(x)
	for k := 0; k < maxIter; k++ {
		if nrm(g) < tol {
			break
		}
		d := make([]float64, n) // d = -H g
		for i := range d {
			d[i] = -dot(H[i], g)
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
		sy := dot(s, y)
		if sy > 1e-12 { // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
			rho := 1 / sy
			A := make([][]float64, n)
			B := make([][]float64, n)
			for i := 0; i < n; i++ {
				A[i] = make([]float64, n)
				B[i] = make([]float64, n)
				for j := 0; j < n; j++ {
					id := 0.0
					if i == j {
						id = 1
					}
					A[i][j] = id - rho*s[i]*y[j]
					B[i][j] = id - rho*y[i]*s[j]
				}
			}
			AH := make([][]float64, n)
			for i := 0; i < n; i++ {
				AH[i] = make([]float64, n)
				for j := 0; j < n; j++ {
					for l := 0; l < n; l++ {
						AH[i][j] += A[i][l] * H[l][j]
					}
				}
			}
			for i := 0; i < n; i++ {
				row := make([]float64, n)
				for j := 0; j < n; j++ {
					for l := 0; l < n; l++ {
						row[j] += AH[i][l] * B[l][j]
					}
					row[j] += rho * s[i] * s[j]
				}
				H[i] = row
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
	fmt.Println(bfgs(f, g, []float64{0, 0}, 1e-8, 200)) // -> [1 2]
}
