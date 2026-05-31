program simpson_demo
  implicit none
  real(8) :: a, b, h, s
  integer :: i, n
  a = 0d0; b = 1d0; n = 100
  if (mod(n, 2) == 1) n = n + 1
  h = (b - a)/n
  s = f(a) + f(b)
  do i = 1, n-1
     if (mod(i, 2) == 1) then
        s = s + 4d0*f(a + i*h)
     else
        s = s + 2d0*f(a + i*h)
     end if
  end do
  print '(A, F14.10)', 'int_0^1 e^x dx = ', h/3d0*s
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program simpson_demo
