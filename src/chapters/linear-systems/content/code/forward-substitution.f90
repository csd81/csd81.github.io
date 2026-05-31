program forward_substitution_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: L(n,n), b(n), y(n)
  integer :: i
  L = reshape([2d0,1d0,-1d0, 0d0,3d0,1d0, 0d0,0d0,2d0], [n,n])  ! column-major
  b = [4d0, 5d0, -1d0]
  do i = 1, n
     y(i) = (b(i) - dot_product(L(i, 1:i-1), y(1:i-1))) / L(i, i)
  end do
  print '(A, 3F8.3)', 'y = ', y    ! 2 1 0
end program forward_substitution_demo
