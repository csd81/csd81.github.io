program jacobi_demo
  implicit none
  integer, parameter :: n = 3
  real(8) :: A(n,n), b(n), x(n), xn(n), s, diff
  integer :: i, j, k
  ! reshape fills column-major, so list the columns of A
  A = reshape([4d0,5d0,-2d0, 2d0,-10d0,3d0, -1d0,2d0,-7d0], [n,n])
  b = [9d0, 8d0, 3d0]
  x = 0d0
  do k = 1, 200
     do i = 1, n
        s = b(i)
        do j = 1, n
           if (j /= i) s = s - A(i,j)*x(j)
        end do
        xn(i) = s / A(i,i)
     end do
     diff = maxval(abs(xn - x))
     x = xn
     if (diff <= 1d-10) exit
  end do
  print '(A, 3F10.6)', 'x = ', x
end program jacobi_demo
