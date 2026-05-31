program rk4_demo
  implicit none
  real(8) :: t, y, h, k1, k2, k3, k4
  integer :: i, n
  t = 0d0; y = 1d0; h = 0.1d0; n = 10
  do i = 1, n
     k1 = f(t, y)
     k2 = f(t + h/2d0, y + h/2d0*k1)
     k3 = f(t + h/2d0, y + h/2d0*k2)
     k4 = f(t + h,     y + h*k3)
     y = y + h*(k1 + 2d0*k2 + 2d0*k3 + k4)/6d0; t = t + h
  end do
  print '(A, F12.8)', 'y(1) = ', y
contains
  real(8) function f(t, y)
    real(8), intent(in) :: t, y
    f = 2d0*y - 10d0*t**2 + 2d0*t
  end function f
end program rk4_demo
