program differentiation_demo
  implicit none
  real(8) :: x, h
  x = 1d0; h = 0.01d0
  print '(A, F12.6, A, F12.6)', "f'(1)  ~ ", deriv1(x, h),  "  exact cos(1)  = ",  cos(x)
  print '(A, F12.6, A, F12.6)', "f''(1) ~ ", deriv2(x, h),  "  exact -sin(1) = ", -sin(x)
contains
  ! Central-difference first derivative, error O(h^2).
  real(8) function deriv1(x, h)
    real(8), intent(in) :: x, h
    deriv1 = (f(x + h) - f(x - h)) / (2d0*h)
  end function deriv1

  ! Central-difference second derivative, error O(h^2).
  real(8) function deriv2(x, h)
    real(8), intent(in) :: x, h
    deriv2 = (f(x + h) - 2d0*f(x) + f(x - h)) / h**2
  end function deriv2

  real(8) function f(x)
    real(8), intent(in) :: x
    f = sin(x)
  end function f
end program differentiation_demo
