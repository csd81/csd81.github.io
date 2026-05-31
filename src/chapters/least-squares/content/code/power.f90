program power_fit_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: t(n), y(n), a, b
  t = [1d0, 2d0, 3d0, 4d0]
  y = [2.0d0, 5.6d0, 9.7d0, 16.0d0]
  call linreg(log(t), log(y), n, a, b)   ! ln y = a ln t + ln b
  print '(A, F8.4, A, F8.4)', 'a = ', a, ', b = ', exp(b)
contains
  subroutine linreg(x, yy, m, a, b)
    integer, intent(in) :: m
    real(8), intent(in) :: x(m), yy(m)
    real(8), intent(out) :: a, b
    real(8) :: sx, sy, sxx, sxy
    sx = sum(x); sy = sum(yy); sxx = sum(x*x); sxy = sum(x*yy)
    a = (m*sxy - sx*sy)/(m*sxx - sx*sx)
    b = (sy - a*sx)/m
  end subroutine linreg
end program power_fit_demo
