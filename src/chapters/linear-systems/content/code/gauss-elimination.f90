program gauss_elimination_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: M(n, n+1), x(n), f
  integer :: i, j, k
  ! augmented matrix [A | b], filled row by row
  M(1,:) = [2d0, 1d0, -1d0, 8d0]
  M(2,:) = [-3d0, -1d0, 2d0, -11d0]
  M(3,:) = [-2d0, 1d0, 2d0, -3d0]
  do k = 1, n-1
     do i = k+1, n
        f = M(i,k) / M(k,k)
        M(i, k:n+1) = M(i, k:n+1) - f * M(k, k:n+1)
     end do
  end do
  do i = n, 1, -1
     x(i) = (M(i, n+1) - dot_product(M(i, i+1:n), x(i+1:n))) / M(i, i)
  end do
  print '(A, 3F8.3)', 'x = ', x   ! 2 3 -1
end program gauss_elimination_demo
