program fixed_point_demo
  implicit none
  real(8) :: x, xn
  integer :: k
  x = 1d0
  do k = 1, 200
     xn = g(x)
     if (abs(xn - x) < 1d-12) exit
     x = xn
  end do
  print '(A, F14.10)', 'root = ', xn
contains
  real(8) function g(t)
    real(8), intent(in) :: t
    g = cos(t)
  end function g
end program fixed_point_demo
