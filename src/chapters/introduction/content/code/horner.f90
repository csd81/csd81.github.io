program horner_demo
  implicit none
  real(8) :: a(5), x, y
  integer :: i
  a = [5d0, -8d0, 2d0, 4d0, -10d0]      ! coefficients a_n ... a_0
  x = 2d0
  y = a(1)
  do i = 2, size(a)
     y = y*x + a(i)
  end do
  print '(A, F8.2)', 'p(x) = ', y         ! 22
end program horner_demo
