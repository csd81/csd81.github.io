program broyden_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n), B(n,n), Fx(n), dx(n), Fn(n), y(n), Bdx(n), dd
  integer :: i, j, k
  x = [2d0, 0.5d0]
  B = reshape([1d0, 0d0, 0d0, 1d0], [n,n])      ! B = I
  Fx = Fvec(x)
  do k = 1, 100
     if (maxval(abs(Fx)) < 1d-12) exit
     dx = solve2(B, -Fx)
     x = x + dx
     Fn = Fvec(x); y = Fn - Fx
     Bdx = matmul(B, dx); dd = dot_product(dx, dx)
     do i = 1, n
        do j = 1, n
           B(i,j) = B(i,j) + (y(i) - Bdx(i))*dx(j)/dd   ! rank-1 update
        end do
     end do
     Fx = Fn
  end do
  print '(A, 2F12.8)', 'x = ', x
contains
  function Fvec(v) result(r)
    real(8), intent(in) :: v(n)
    real(8) :: r(n)
    r = [v(1)**2 + v(2)**2 - 4d0, v(1)*v(2) - 1d0]
  end function Fvec
  function solve2(A, b) result(xx)               ! 2x2 solve (Cramer)
    real(8), intent(in) :: A(n,n), b(n)
    real(8) :: xx(n), det
    det = A(1,1)*A(2,2) - A(1,2)*A(2,1)
    xx(1) = (b(1)*A(2,2) - A(1,2)*b(2))/det
    xx(2) = (A(1,1)*b(2) - b(1)*A(2,1))/det
  end function solve2
end program broyden_demo
