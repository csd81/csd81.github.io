program spline_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: x(n), y(n), h(n-1), A(n,n), rhs(n), c(n), aa(n-1)
  integer :: i
  x = [0d0, 1d0, 2d0, 3d0]; y = [0d0, 1d0, 0d0, 1d0]
  do i = 1, n-1
     h(i) = x(i+1) - x(i)
  end do
  A = 0d0; rhs = 0d0; A(1,1) = 1d0; A(n,n) = 1d0
  do i = 2, n-1
     A(i,i-1) = h(i-1); A(i,i) = 2d0*(h(i-1)+h(i)); A(i,i+1) = h(i)
     rhs(i) = 3d0*((y(i+1)-y(i))/h(i) - (y(i)-y(i-1))/h(i-1))
  end do
  c = gauss_solve(A, rhs)
  aa = y(1:n-1)
  print '(A, 3F8.3)', 'a = ', aa   ! 0 1 0
contains
  function gauss_solve(Ain, bin) result(xx)
    real(8), intent(in) :: Ain(n,n), bin(n)
    real(8) :: M(n,n), cc(n), xx(n), f, tmp(n), tb
    integer :: i, j, k, p
    M = Ain; cc = bin
    do k = 1, n
       p = k
       do i = k+1, n
          if (abs(M(i,k)) > abs(M(p,k))) p = i
       end do
       tmp = M(k,:); M(k,:) = M(p,:); M(p,:) = tmp
       tb = cc(k); cc(k) = cc(p); cc(p) = tb
       do i = k+1, n
          f = M(i,k)/M(k,k); M(i,k:n) = M(i,k:n) - f*M(k,k:n); cc(i) = cc(i) - f*cc(k)
       end do
    end do
    do i = n, 1, -1
       xx(i) = (cc(i) - dot_product(M(i,i+1:n), xx(i+1:n)))/M(i,i)
    end do
  end function gauss_solve
end program spline_demo
