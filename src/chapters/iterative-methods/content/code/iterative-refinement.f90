program iterative_refinement_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), b(n), x(n), r(n), d(n)
  integer :: i, k
  A(1,:) = [2d0, 1d0, -1d0]; A(2,:) = [-3d0, -1d0, 2d0]; A(3,:) = [-2d0, 1d0, 2d0]
  b = [8d0, -11d0, -3d0]
  x = gauss_solve(A, b)
  do k = 1, 20
     r = b - matmul(A, x)             ! residual
     d = gauss_solve(A, r)            ! correction
     x = x + d
     if (maxval(abs(d)) < 1d-12) exit
  end do
  print '(A, 3F8.3)', 'x = ', x
contains
  function gauss_solve(Ain, bin) result(xx)
    real(8), intent(in) :: Ain(n,n), bin(n)
    real(8) :: M(n,n), c(n), xx(n), f, tmp(n), tb
    integer :: i, j, k, p
    M = Ain; c = bin
    do k = 1, n
       p = k
       do i = k+1, n
          if (abs(M(i,k)) > abs(M(p,k))) p = i
       end do
       tmp = M(k,:); M(k,:) = M(p,:); M(p,:) = tmp
       tb = c(k); c(k) = c(p); c(p) = tb
       do i = k+1, n
          f = M(i,k)/M(k,k)
          M(i,k:n) = M(i,k:n) - f*M(k,k:n); c(i) = c(i) - f*c(k)
       end do
    end do
    do i = n, 1, -1
       xx(i) = (c(i) - dot_product(M(i,i+1:n), xx(i+1:n)))/M(i,i)
    end do
  end function gauss_solve
end program iterative_refinement_demo
