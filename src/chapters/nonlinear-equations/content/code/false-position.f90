program false_position_demo
  implicit none
  real(8) :: a, b, c, fa, fb, fc
  integer :: k
  a = 1d0; b = 2d0; fa = f(a); fb = f(b); c = a
  do k = 1, 200
     c = (a*fb - b*fa)/(fb - fa); fc = f(c)
     if (abs(fc) < 1d-12) exit
     if (fa*fc < 0d0) then
        b = c; fb = fc
     else
        a = c; fa = fc
     end if
  end do
  print '(A, F14.10)', 'root = ', c
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = x*x - 2d0
  end function f
end program false_position_demo
