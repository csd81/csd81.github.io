program lu_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: A(n,n), L(n,n), U(n,n)
  integer :: i, j
  A = reshape([ 1d0, 2d0, -1d0, -2d0, &   ! column-major
               -2d0, -1d0, 2d0, 1d0, &
               -2d0, 2d0, 3d0, 4d0, &
               -2d0, 4d0, -4d0, -2d0], [n,n])
  L = 0d0; U = 0d0
  do i = 1, n
     L(i,i) = 1d0
     do j = i, n
        U(i,j) = A(i,j) - dot_product(L(i,1:i-1), U(1:i-1,j))
     end do
     do j = i+1, n
        L(j,i) = (A(j,i) - dot_product(L(j,1:i-1), U(1:i-1,i))) / U(i,i)
     end do
  end do
  do i = 1, n
     print '(4F9.4)', L(i,:)
  end do
  do i = 1, n
     print '(4F9.4)', U(i,:)
  end do
end program lu_demo
