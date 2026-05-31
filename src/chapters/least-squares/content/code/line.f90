program line_fit_demo
  implicit none
  integer, parameter :: n = 5
  real(8) :: x(n), y(n), Sx, Sy, Sxx, Sxy, a, b
  x = [0d0, 1d0, 2d0, 3d0, 4d0]
  y = [1d0, 3d0, 2d0, 5d0, 4d0]
  Sx = sum(x); Sy = sum(y)
  Sxx = sum(x**2); Sxy = sum(x*y)
  b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx**2)   ! slope
  a = (Sy - b*Sx) / n                       ! intercept
  print '(A, F8.4, A, F8.4)', 'slope b = ', b, ', intercept a = ', a
  ! -> slope b = 0.8000, intercept a = 1.4000
end program line_fit_demo
