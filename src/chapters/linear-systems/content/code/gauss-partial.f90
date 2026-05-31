program gauss_partial_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), b(n), x(n), f, tmp(n), tb
  integer :: i, j, k, p
  A(1,:) = [2d0, 1d0, -1d0]; A(2,:) = [-3d0, -1d0, 2d0]; A(3,:) = [-2d0, 1d0, 2d0]
  b = [8d0, -11d0, -3d0]
  do k = 1, n
     p = k
     do i = k+1, n
        if (abs(A(i,k)) > abs(A(p,k))) p = i
     end do
     tmp = A(k,:); A(k,:) = A(p,:); A(p,:) = tmp
     tb = b(k); b(k) = b(p); b(p) = tb
     do i = k+1, n
        f = A(i,k)/A(k,k)
        A(i, k:n) = A(i, k:n) - f*A(k, k:n)
        b(i) = b(i) - f*b(k)
     end do
  end do
  do i = n, 1, -1
     x(i) = (b(i) - dot_product(A(i, i+1:n), x(i+1:n)))/A(i,i)
  end do
  print '(A, 3F8.3)', 'x = ', x
end program gauss_partial_demo
