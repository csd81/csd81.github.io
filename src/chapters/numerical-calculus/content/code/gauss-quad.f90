program gauss_quad_demo
  implicit none
  print '(A, F12.7, A)', 'int_0^1 e^x dx = ', gauss_quad(0d0, 1d0, 2), ' (2-pt)'
  print '(A, F12.7, A)', 'int_0^1 e^x dx = ', gauss_quad(0d0, 1d0, 3), ' (3-pt)'
  ! -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
contains
  real(8) function gauss_quad(a, b, n)
    real(8), intent(in) :: a, b
    integer, intent(in) :: n
    real(8) :: t(3), w(3), hm, mid
    integer :: i, m
    if (n == 3) then
       t(1:3) = [-sqrt(3d0/5d0), 0d0, sqrt(3d0/5d0)]
       w(1:3) = [5d0/9d0, 8d0/9d0, 5d0/9d0]
       m = 3
    else
       t(1:2) = [-1d0/sqrt(3d0), 1d0/sqrt(3d0)]
       w(1:2) = [1d0, 1d0]
       m = 2
    end if
    hm = (b - a)/2d0                    ! map [-1,1] -> [a,b]
    mid = (a + b)/2d0
    gauss_quad = 0d0
    do i = 1, m
       gauss_quad = gauss_quad + hm*w(i)*f(mid + hm*t(i))
    end do
  end function gauss_quad
  real(8) function f(x)
    real(8), intent(in) :: x
    f = exp(x)
  end function f
end program gauss_quad_demo
