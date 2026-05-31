program taylor3_demo
  implicit none
  real(8) :: t, y, h
  integer :: i, n
  t = 0d0; y = 1d0; h = 0.1d0; n = 10
  do i = 1, n
     y = y + h*f(t, y) + h**2/2d0*df(t, y) + h**3/6d0*d2f(t, y); t = t + h
  end do
  print '(A, F12.8)', 'y(1) = ', y
contains
  real(8) function f(t, y)
    real(8), intent(in) :: t, y
    f = 2d0*y - 10d0*t**2 + 2d0*t
  end function f
  real(8) function df(t, y)
    real(8), intent(in) :: t, y
    df = 4d0*y - 20d0*t**2 - 16d0*t + 2d0
  end function df
  real(8) function d2f(t, y)
    real(8), intent(in) :: t, y
    d2f = 8d0*y - 40d0*t**2 - 32d0*t - 16d0
  end function d2f
end program taylor3_demo
