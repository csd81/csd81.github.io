program steepest_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n), g(n), d(n), t, fx, gd
  integer :: k
  x = [0d0, 0d0]
  do k = 1, 1000
     g = grad(x)
     if (sqrt(sum(g**2)) < 1d-8) exit
     d = -g; t = 1d0; fx = f(x); gd = dot_product(g, d)
     do while (f(x + t*d) > fx + 1d-4*t*gd)
        t = t/2d0
     end do
     x = x + t*d
  end do
  print '(A, 2F10.6)', 'x = ', x
contains
  real(8) function f(v)
    real(8), intent(in) :: v(n)
    f = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
end program steepest_demo
