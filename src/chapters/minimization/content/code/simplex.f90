program simplex_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = nelder_mead([0d0, 0d0], 0.5d0, 1d-10, 400)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + (v(2) - 2d0)**2
  end function f
  ! Nelder-Mead downhill simplex minimization.
  function nelder_mead(x0, step, tol, max_iter) result(best)
    real(8), intent(in) :: x0(n), step, tol
    integer, intent(in) :: max_iter
    real(8) :: pts(n+1, n), fv(n+1), c(n), xr(n), xe(n), xc(n), best(n)
    real(8) :: fr, fe, fc, tmp(n), tf
    integer :: it, i, j, lo, hi, hi2
    do i = 1, n+1
       pts(i, :) = x0
    end do
    do i = 1, n
       pts(i+1, i) = pts(i+1, i) + step
    end do
    do i = 1, n+1
       fv(i) = f(pts(i, :))
    end do
    do it = 1, max_iter
       ! selection sort rows by fv ascending
       do i = 1, n
          do j = i+1, n+1
             if (fv(j) < fv(i)) then
                tf = fv(i); fv(i) = fv(j); fv(j) = tf
                tmp = pts(i, :); pts(i, :) = pts(j, :); pts(j, :) = tmp
             end if
          end do
       end do
       lo = 1; hi = n+1; hi2 = n           ! best, worst, second-worst indices
       if (abs(fv(hi) - fv(lo)) < tol) exit
       c = 0d0                              ! centroid of best n points
       do i = 1, n
          c = c + pts(i, :) / n
       end do
       xr = c + (c - pts(hi, :)); fr = f(xr)         ! reflect
       if (fr < fv(lo)) then
          xe = c + 2d0*(c - pts(hi, :)); fe = f(xe)  ! expand
          if (fe < fr) then
             pts(hi, :) = xe; fv(hi) = fe
          else
             pts(hi, :) = xr; fv(hi) = fr
          end if
       else if (fr < fv(hi2)) then
          pts(hi, :) = xr; fv(hi) = fr
       else
          xc = c + 0.5d0*(pts(hi, :) - c); fc = f(xc)  ! contract
          if (fc < fv(hi)) then
             pts(hi, :) = xc; fv(hi) = fc
          else                                         ! shrink toward best
             do i = 2, n+1
                pts(i, :) = pts(1, :) + 0.5d0*(pts(i, :) - pts(1, :))
                fv(i) = f(pts(i, :))
             end do
          end if
       end if
    end do
    best = pts(1, :)
  end function nelder_mead
end program simplex_demo
