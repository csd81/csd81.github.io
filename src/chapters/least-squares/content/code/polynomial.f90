program poly_fit_demo
  implicit none
  integer, parameter :: n = 5, deg = 2, m = deg + 1
  real(8) :: t(n), y(n), A(n,m), N_(m,m), r(m), c(m)
  integer :: i, j, k
  t = [0d0, 1d0, 2d0, 3d0, 4d0]
  y = [1.0d0, 1.8d0, 3.3d0, 4.5d0, 6.3d0]
  do i = 1, n
     do j = 1, m
        A(i,j) = t(i)**(j-1)
     end do
  end do
  N_ = matmul(transpose(A), A)          ! normal equations (A^T A) c = A^T y
  r  = matmul(transpose(A), y)
  c  = gauss_solve(N_, r, m)
  print '(A, 3F12.6)', 'coeffs (low->high): ', c
contains
  function gauss_solve(Ain, bin, sz) result(x)
    integer, intent(in) :: sz
    real(8), intent(in) :: Ain(sz,sz), bin(sz)
    real(8) :: M(sz,sz), b(sz), x(sz), f
    integer :: i, j, k, p
    M = Ain; b = bin
    do k = 1, sz
       p = k
       do i = k+1, sz
          if (abs(M(i,k)) > abs(M(p,k))) p = i
       end do
       call swap_row(M, b, k, p, sz)
       do i = k+1, sz
          f = M(i,k)/M(k,k)
          M(i,k:sz) = M(i,k:sz) - f*M(k,k:sz)
          b(i) = b(i) - f*b(k)
       end do
    end do
    do i = sz, 1, -1
       x(i) = (b(i) - dot_product(M(i,i+1:sz), x(i+1:sz)))/M(i,i)
    end do
  end function gauss_solve
  subroutine swap_row(M, b, i, j, sz)
    integer, intent(in) :: i, j, sz
    real(8), intent(inout) :: M(sz,sz), b(sz)
    real(8) :: tmp(sz), tb
    tmp = M(i,:); M(i,:) = M(j,:); M(j,:) = tmp
    tb = b(i); b(i) = b(j); b(j) = tb
  end subroutine swap_row
end program poly_fit_demo
