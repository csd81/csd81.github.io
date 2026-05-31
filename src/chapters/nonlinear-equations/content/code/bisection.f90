program bisection_demo
  implicit none
  real(8) :: a, b, c, fa, fc
  integer :: k
  a = 1d0; b = 2d0; fa = f(a); c = a
  do k = 1, 200
     c = (a + b) / 2d0; fc = f(c)
     if (fc == 0d0 .or. (b - a) / 2d0 < 1d-12) exit
     if (fa*fc < 0d0) then
        b = c
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
end program bisection_demo
