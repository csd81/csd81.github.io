import numpy as np

f = lambda v: (v[0]-1)**2 + 5*(v[1]-2)**2
grad = lambda v: np.array([2*(v[0]-1), 10*(v[1]-2)])

def qn(update, x0=(0.0,0.0), tol=1e-8, max_iter=200):
    x = np.array(x0, float); n = len(x); H = np.eye(n); g = grad(x)
    for k in range(1, max_iter+1):
        if np.linalg.norm(g) < tol: return x, k
        d = -H @ g
        if g @ d >= 0:                      # not a descent dir -> reset
            H = np.eye(n); d = -g
        t = 1.0; fx = f(x); gd = g @ d
        while f(x + t*d) > fx + 1e-4*t*gd: t *= 0.5
        s = t*d; xn = x + s; gn = grad(xn); y = gn - g
        if update == 'dfp':
            sy = s @ y
            if sy > 1e-12:
                Hy = H @ y
                H = H + np.outer(s, s)/sy - np.outer(Hy, Hy)/(y @ Hy)
        elif update == 'sr1':
            w = s - H @ y; wy = w @ y
            if abs(wy) > 1e-12:
                H = H + np.outer(w, w)/wy
        elif update == 'psb':
            w = s - H @ y; yy = y @ y
            if yy > 1e-12:
                H = H + (np.outer(w, y) + np.outer(y, w))/yy - ((y @ w)/(yy*yy))*np.outer(y, y)
        x, g = xn, gn
    return x, max_iter

for u in ('dfp','sr1','psb'):
    x, k = qn(u)
    print(f"{u}: x={x}  iters={k}  f={f(x):.3e}")
