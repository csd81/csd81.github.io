program gauss_jordan_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: M(n, n+1), x(n), d, f, tmp(n+1)
  integer :: i, j, k, p
  M(1,:) = [2d0, 1d0, -1d0, 8d0]
  M(2,:) = [-3d0, -1d0, 2d0, -11d0]
  M(3,:) = [-2d0, 1d0, 2d0, -3d0]
  do k = 1, n
     p = k
     do i = k+1, n
        if (abs(M(i,k)) > abs(M(p,k))) p = i
     end do
     tmp = M(k,:); M(k,:) = M(p,:); M(p,:) = tmp
     d = M(k,k); M(k,:) = M(k,:)/d
     do i = 1, n
        if (i /= k) then
           f = M(i,k); M(i,:) = M(i,:) - f*M(k,:)
        end if
     end do
  end do
  do i = 1, n
     x(i) = M(i, n+1)
  end do
  print '(A, 3F8.3)', 'x = ', x
end program gauss_jordan_demo
