program fixed_point_nd_demo
  implicit none
  real(8) :: x(2), xn(2)
  integer :: k
  x = [0d0, 0d0]
  do k = 1, 200
     xn = g(x)
     if (maxval(abs(xn - x)) < 1d-12) exit
     x = xn
  end do
  print '(A, 2F14.10)', 'root = ', xn
contains
  function g(v) result(r)
    real(8), intent(in) :: v(2)
    real(8) :: r(2)
    r = [cos(v(2)), sin(v(1))]
  end function g
end program fixed_point_nd_demo
