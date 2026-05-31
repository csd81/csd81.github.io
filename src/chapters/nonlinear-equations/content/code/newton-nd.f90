program newton_nd_demo
  implicit none
  real(8) :: x(2), Fx(2), Jx(2,2), dx(2)
  integer :: k
  x = [2d0, 0.5d0]
  do k = 1, 100
     Fx = F(x)
     if (maxval(abs(Fx)) < 1d-12) exit
     Jx = J(x)
     dx = solve2(Jx, Fx)
     x = x - dx
  end do
  print '(A, 2F14.10)', 'root = ', x
contains
  function F(v) result(r)
    real(8), intent(in) :: v(2)
    real(8) :: r(2)
    r = [v(1)**2 + v(2)**2 - 4d0, v(1)*v(2) - 1d0]
  end function F
  function J(v) result(m)
    real(8), intent(in) :: v(2)
    real(8) :: m(2,2)
    m(1,1) = 2d0*v(1); m(1,2) = 2d0*v(2)
    m(2,1) = v(2);     m(2,2) = v(1)
  end function J
  function solve2(a, b) result(x)
    real(8), intent(in) :: a(2,2), b(2)
    real(8) :: x(2), det
    det = a(1,1)*a(2,2) - a(1,2)*a(2,1)
    x(1) = ( a(2,2)*b(1) - a(1,2)*b(2)) / det
    x(2) = (-a(2,1)*b(1) + a(1,1)*b(2)) / det
  end function solve2
end program newton_nd_demo
