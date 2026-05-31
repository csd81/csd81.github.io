program newton_eval_demo
  implicit none
  real(8) :: x(4), a(4), t, p
  integer :: k
  x = [-1d0, 1d0, 2d0, 3d0]; a = [-3d0, 2d0, 0d0, 3d0]; t = 0d0
  p = a(4)
  do k = 3, 1, -1
     p = p*(t - x(k)) + a(k)
  end do
  print '(A, F8.3)', 'p = ', p   ! 5
end program newton_eval_demo
