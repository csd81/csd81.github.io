program gauss_seidel_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), b(n), x(n), xi, s, diff
  integer :: i, j, k
  A = reshape([4d0,5d0,-2d0, 2d0,-10d0,3d0, -1d0,2d0,-7d0], [n,n])
  b = [9d0, 8d0, 3d0]
  x = 0d0
  do k = 1, 200
     diff = 0d0
     do i = 1, n
        s = b(i)
        do j = 1, n
           if (j /= i) s = s - A(i,j)*x(j)
        end do
        xi = s / A(i,i)
        diff = max(diff, abs(xi - x(i)))
        x(i) = xi
     end do
     if (diff <= 1d-10) exit
  end do
  print '(A, 3F10.6)', 'x = ', x
end program gauss_seidel_demo
