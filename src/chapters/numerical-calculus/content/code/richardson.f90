program richardson_demo
  implicit none
  real(8) :: x, h, d1, d2, ext
  x = 1d0; h = 0.1d0
  d1 = central(x, h)        ! D(h),   error O(h^2)
  d2 = central(x, h/2d0)    ! D(h/2), error O(h^2)
  ext = (4d0*d2 - d1) / 3d0 ! Richardson extrapolation, error O(h^4)
  print '(A, F14.10)', 'D(h)         = ', d1
  print '(A, F14.10)', 'D(h/2)       = ', d2
  print '(A, F14.10, A, F14.10)', 'extrapolated = ', ext, '  exact cos(1) = ', cos(x)
contains
  ! Central-difference first derivative D(h), error O(h^2).
  real(8) function central(x, h)
    real(8), intent(in) :: x, h
    central = (f(x + h) - f(x - h)) / (2d0*h)
  end function central

  real(8) function f(x)
    real(8), intent(in) :: x
    f = sin(x)
  end function f
end program richardson_demo
