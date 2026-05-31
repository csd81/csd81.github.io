program hermite_demo
  implicit none
  integer, parameter :: n = 2, m = 2*n
  real(8) :: x(n), y(n), dy(n), z(m), Q(m,m), a(m)
  integer :: i, j
  x = [0d0, 1d0]; y = [1d0, 0d0]; dy = [0d0, 0d0]
  Q = 0d0
  do i = 1, n
     z(2*i-1) = x(i); z(2*i) = x(i)
     Q(2*i-1,1) = y(i); Q(2*i,1) = y(i)
     Q(2*i,2) = dy(i)
     if (i > 1) Q(2*i-1,2) = (Q(2*i-1,1) - Q(2*i-2,1)) / (z(2*i-1) - z(2*i-2))
  end do
  do j = 3, m
     do i = j, m
        Q(i,j) = (Q(i,j-1) - Q(i-1,j-1)) / (z(i) - z(i-j+1))
     end do
  end do
  do i = 1, m
     a(i) = Q(i,i)
  end do
  print '(A, 4F8.3)', 'a = ', a   ! 1 0 -1 2
end program hermite_demo
