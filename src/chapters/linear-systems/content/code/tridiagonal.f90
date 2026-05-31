program thomas_demo
  implicit none
  integer, parameter :: n = 4
  real(8) :: a(n), b(n), c(n), d(n), x(n), m
  integer :: i
  a = [0d0, -1d0, -1d0, -1d0]      ! sub-diagonal (a(1) unused)
  b = [4d0, 4d0, 4d0, 4d0]         ! diagonal
  c = [-1d0, -1d0, -1d0, 0d0]      ! super-diagonal
  d = [2d0, 4d0, 6d0, 13d0]        ! right-hand side
  c(1) = c(1)/b(1); d(1) = d(1)/b(1)
  do i = 2, n
     m = b(i) - a(i)*c(i-1)
     if (i < n) c(i) = c(i)/m
     d(i) = (d(i) - a(i)*d(i-1))/m
  end do
  x(n) = d(n)
  do i = n-1, 1, -1
     x(i) = d(i) - c(i)*x(i+1)
  end do
  print '(A, 4F8.3)', 'x = ', x
end program thomas_demo
