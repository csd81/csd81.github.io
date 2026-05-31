program cholesky_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), L(n,n)
  integer :: i, j, k
  A(1,:) = [4d0, 2d0, -2d0]; A(2,:) = [2d0, 10d0, 2d0]; A(3,:) = [-2d0, 2d0, 5d0]
  L = 0d0
  do j = 1, n
     L(j,j) = sqrt(A(j,j) - dot_product(L(j,1:j-1), L(j,1:j-1)))
     do i = j+1, n
        L(i,j) = (A(i,j) - dot_product(L(i,1:j-1), L(j,1:j-1))) / L(j,j)
     end do
  end do
  do i = 1, n
     print '(3F9.4)', L(i,:)
  end do
end program cholesky_demo
