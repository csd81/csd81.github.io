program trapezoid_demo
  implicit none
  real(8) :: a, b, h, s
  integer :: i, n
  a = 0d0; b = 1d0; n = 100
  h = (b - a)/n
  s = (f(a) + f(b))/2d0
  do i = 1, n-1
     s = s + f(a + i*h)
  end do
  print '(A, F14.10)', 'int_0^1 e^x dx = ', h*s
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program trapezoid_demo
