program newton_min_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n), g(n), p(n), Hm(n,n)
  integer :: k
  x = [0d0, 0d0]
  do k = 1, 100
     g = grad(x)
     if (sqrt(sum(g**2)) < 1d-10) exit
     Hm = hess(x)
     p = solve2(Hm, g)
     x = x - p
  end do
  print '(A, 2F10.6)', 'x = ', x
contains
  function grad(v) result(gg)
    real(8), intent(in) :: v(n)
    real(8) :: gg(n)
    gg = [2d0*(v(1)-1d0), 2d0*(v(2)-2d0)]
  end function grad
  function hess(v) result(Hh)
    real(8), intent(in) :: v(n)
    real(8) :: Hh(n,n)
    Hh = reshape([2d0,0d0,0d0,2d0], [n,n])
  end function hess
  function solve2(A, b) result(xx)        ! 2x2 Cramer
    real(8), intent(in) :: A(n,n), b(n)
    real(8) :: xx(n), det
    det = A(1,1)*A(2,2) - A(1,2)*A(2,1)
    xx(1) = (b(1)*A(2,2) - A(1,2)*b(2))/det
    xx(2) = (A(1,1)*b(2) - b(1)*A(2,1))/det
  end function solve2
end program newton_min_demo
