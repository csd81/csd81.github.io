program composite_demo
  implicit none
  real(8) :: a, b, h, T, S, yi
  integer :: i, n
  a = 0d0; b = 1d0; n = 10
  if (mod(n, 2) == 1) n = n + 1          ! Simpson needs even n
  h = (b - a)/n
  T = (f(a) + f(b))/2d0
  S = f(a) + f(b)
  do i = 1, n-1
     yi = f(a + i*h)
     T = T + yi
     if (mod(i, 2) == 1) then
        S = S + 4d0*yi
     else
        S = S + 2d0*yi
     end if
  end do
  print '(A, F14.7)', 'trapezoid = ', h*T
  print '(A, F14.7)', 'Simpson   = ', h/3d0*S
  ! -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
contains
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program composite_demo
