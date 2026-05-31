program gradient_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n), g(n), alpha
  integer :: k
  x = [0d0, 0d0]; alpha = 0.1d0
  do k = 1, 100000
     g = grad(x)
     if (sqrt(sum(g**2)) < 1d-8) exit
     x = x - alpha*g
  end do
  print '(A, 2F10.6)', 'x = ', x
contains
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 2d0*(v(2) - 2d0)]
  end function grad
end program gradient_demo
