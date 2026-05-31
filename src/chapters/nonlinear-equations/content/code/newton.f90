program newton_demo
  implicit none
  real(8) :: x, fx
  integer :: k
  x = 1d0
  do k = 1, 100
     fx = f(x)
     if (abs(fx) < 1d-12) exit
     x = x - fx / df(x)
  end do
  print '(A, F14.10)', 'root = ', x
contains
  real(8) function f(t)
    real(8), intent(in) :: t
    f = t*t - 2d0
  end function f
  real(8) function df(t)
    real(8), intent(in) :: t
    df = 2d0*t
  end function df
end program newton_demo
