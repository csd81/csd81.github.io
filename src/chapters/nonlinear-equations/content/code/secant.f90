program secant_demo
  implicit none
  real(8) :: x0, x1, x2, f0, f1
  integer :: k
  x0 = 1d0; x1 = 2d0; f0 = f(x0); f1 = f(x1); x2 = x1
  do k = 1, 100
     x2 = x1 - f1 * (x1 - x0) / (f1 - f0)
     if (abs(x2 - x1) < 1d-12) exit
     x0 = x1; f0 = f1; x1 = x2; f1 = f(x2)
  end do
  print '(A, F14.10)', 'root = ', x2
contains
  real(8) function f(t)
    real(8), intent(in) :: t
    f = t*t - 2d0
  end function f
end program secant_demo
