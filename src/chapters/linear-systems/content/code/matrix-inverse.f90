program matrix_inverse_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: M(n, 2*n), d, f, tmp(2*n)
  integer :: i, j, k, p
  M = 0d0
  M(1,1:n) = [2d0, 1d0, -1d0]; M(2,1:n) = [-3d0, -1d0, 2d0]; M(3,1:n) = [-2d0, 1d0, 2d0]
  do i = 1, n
     M(i, n+i) = 1d0                 ! augment with identity
  end do
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
     print '(3F8.3)', M(i, n+1:2*n)
  end do
end program matrix_inverse_demo
