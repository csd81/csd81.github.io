program back_substitution_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: U(n,n), b(n), x(n)
  integer :: i
  U = reshape([2d0,0d0,0d0, 1d0,1d0,0d0, -1d0,2d0,3d0], [n,n])  ! column-major
  b = [1d0, 8d0, 9d0]
  do i = n, 1, -1
     x(i) = (b(i) - dot_product(U(i, i+1:n), x(i+1:n))) / U(i, i)
  end do
  print '(A, 3F8.3)', 'x = ', x    ! 1 2 3
end program back_substitution_demo
