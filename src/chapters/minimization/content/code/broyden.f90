program broyden_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = broyden([0d0, 0d0], 1d-8, 200)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + 5d0*(v(2) - 2d0)**2
  end function f
  function grad(v) result(g)
    real(8), intent(in) :: v(n)
    real(8) :: g(n)
    g = [2d0*(v(1) - 1d0), 10d0*(v(2) - 2d0)]
  end function grad
  ! Broyden's quasi-Newton minimization (non-symmetric rank-one, inverse-Hessian form).
  function broyden(x0, tol, max_iter) result(x)
    real(8), intent(in) :: x0(n), tol
    integer, intent(in) :: max_iter
    real(8) :: x(n), g(n), d(n), s(n), y(n), g_new(n), x_new(n), Hy(n), sH(n)
    real(8) :: Hm(n,n), Im(n,n)
    real(8) :: t, fx, gd, sHy
    integer :: k, i, j
    x = x0
    Im = 0d0
    do i = 1, n
       Im(i,i) = 1d0
    end do
    Hm = Im                                  ! inverse-Hessian estimate
    g = grad(x)
    do k = 1, max_iter
       if (sqrt(sum(g**2)) < tol) exit
       d = -matmul(Hm, g)
       if (dot_product(g, d) >= 0d0) then    ! safeguard: descent direction
          Hm = Im; d = -g
       end if
       fx = f(x); gd = dot_product(g, d)
       t = 1d0
       do while (f(x + t*d) > fx + 1d-4*t*gd)
          t = t / 2d0
       end do
       s = t*d
       x_new = x + s
       g_new = grad(x_new)
       y = g_new - g
       Hy = matmul(Hm, y)
       sHy = dot_product(s, Hy)
       if (abs(sHy) > 1d-12) then            ! Broyden inverse update (rank one)
          sH = matmul(s, Hm)
          do i = 1, n
             do j = 1, n
                Hm(i,j) = Hm(i,j) + (s(i) - Hy(i))*sH(j)/sHy
             end do
          end do
       end if
       x = x_new; g = g_new
    end do
  end function broyden
end program broyden_demo
