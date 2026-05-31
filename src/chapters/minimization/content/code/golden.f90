program golden_demo
  implicit none
  real(8) :: a, b, c, d, fc, fd, g
  a = 0d0; b = 5d0; g = (sqrt(5d0) - 1d0)/2d0
  c = b - g*(b - a); d = a + g*(b - a); fc = f(c); fd = f(d)
  do while (b - a > 1d-8)
     if (fc < fd) then
        b = d; d = c; fd = fc; c = b - g*(b - a); fc = f(c)
     else
        a = c; c = d; fc = fd; d = a + g*(b - a); fd = f(d)
     end if
  end do
  print '(A, F10.6)', 'min at x = ', (a + b)/2d0
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = (x - 2d0)**2 + 1d0
  end function f
end program golden_demo
