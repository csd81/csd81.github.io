program euler_demo
  implicit none
  real(8) :: t, y, h
  integer :: i, n
  t = 0d0; y = 1d0; h = 0.1d0; n = 10
  do i = 1, n
     y = y + h*f(t, y)        ! z_{i+1} = z_i + h f
     t = t + h
  end do
  print '(A, F12.8)', 'y(1) = ', y
contains
  real(8) function f(t, y)
    real(8), intent(in) :: t, y
    f = 2d0*y - 10d0*t**2 + 2d0*t
  end function f
end program euler_demo
