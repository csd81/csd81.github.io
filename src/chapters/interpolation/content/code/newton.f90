program divided_differences_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: x(n), a(n)
  integer :: i, j
  x = [-1d0, 1d0, 2d0, 3d0]; a = [-3d0, 1d0, 3d0, 29d0]
  do j = 2, n
     do i = n, j, -1
        a(i) = (a(i) - a(i-1)) / (x(i) - x(i-j+1))
     end do
  end do
  print '(A, 4F8.3)', 'a = ', a   ! -3 2 0 3
end program divided_differences_demo
