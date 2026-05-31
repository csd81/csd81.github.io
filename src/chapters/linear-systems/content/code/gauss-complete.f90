program gauss_complete_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), b(n), y(n), x(n), f, tmp(n), tb, best
  integer :: i, j, k, pi, pj, col(n), ci
  A(1,:) = [2d0, 1d0, -1d0]; A(2,:) = [-3d0, -1d0, 2d0]; A(3,:) = [-2d0, 1d0, 2d0]
  b = [8d0, -11d0, -3d0]
  do i = 1, n
     col(i) = i
  end do
  do k = 1, n
     pi = k; pj = k; best = abs(A(k,k))
     do i = k, n
        do j = k, n
           if (abs(A(i,j)) > best) then
              best = abs(A(i,j)); pi = i; pj = j
           end if
        end do
     end do
     tmp = A(pi,:); A(pi,:) = A(k,:); A(k,:) = tmp
     tb = b(pi); b(pi) = b(k); b(k) = tb
     do i = 1, n
        f = A(i,pj); A(i,pj) = A(i,k); A(i,k) = f
     end do
     ci = col(pj); col(pj) = col(k); col(k) = ci
     do i = k+1, n
        f = A(i,k)/A(k,k)
        A(i, k:n) = A(i, k:n) - f*A(k, k:n)
        b(i) = b(i) - f*b(k)
     end do
  end do
  do i = n, 1, -1
     y(i) = (b(i) - dot_product(A(i, i+1:n), y(i+1:n)))/A(i,i)
  end do
  do i = 1, n
     x(col(i)) = y(i)
  end do
  print '(A, 3F8.3)', 'x = ', x
end program gauss_complete_demo
