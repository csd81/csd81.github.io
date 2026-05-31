program lagrange_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: x(n), y(n), V(n,n), a(n)
  integer :: i, j
  x = [-1d0, 1d0, 2d0, 3d0]; y = [-3d0, 1d0, 3d0, 29d0]
  do i = 1, n
     do j = 1, n
        V(i,j) = x(i)**(j-1)
     end do
  end do
  a = gauss_solve(V, y)
  print '(A, 4F8.3)', 'a = ', a   ! 5 -1 -6 3
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
          f = M(i,k)/M(k,k); M(i,k:n) = M(i,k:n) - f*M(k,k:n); c(i) = c(i) - f*c(k)
       end do
    end do
    do i = n, 1, -1
       xx(i) = (c(i) - dot_product(M(i,i+1:n), xx(i+1:n)))/M(i,i)
    end do
  end function gauss_solve
end program lagrange_demo
