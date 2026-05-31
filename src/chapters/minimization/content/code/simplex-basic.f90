program simplex_basic_demo
  implicit none
  integer, parameter :: n = 2
  real(8) :: x(n)
  x = simplex_basic([0d0, 0d0], 1d0, 1d-8, 500)
  print '(A, 2F10.6)', 'x = ', x          ! -> 1, 2
contains
  function f(v) result(y)
    real(8), intent(in) :: v(n)
    real(8) :: y
    y = (v(1) - 1d0)**2 + (v(2) - 2d0)**2
  end function f
  ! Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
  function simplex_basic(x0, step, tol, max_iter) result(xbest)
    real(8), intent(in) :: x0(n), step, tol
    integer, intent(in) :: max_iter
    real(8) :: P(n+1,n), fv(n+1), c(n), xr(n), xbest(n), sz, fr
    integer :: it, i, iw, ib
    do i = 1, n+1
       P(i,:) = x0
    end do
    do i = 1, n
       P(i+1,i) = P(i+1,i) + step
    end do
    do i = 1, n+1
       fv(i) = f(P(i,:))
    end do
    do it = 1, max_iter
       iw = 1; ib = 1
       do i = 2, n+1
          if (fv(i) > fv(iw)) iw = i
          if (fv(i) < fv(ib)) ib = i
       end do
       sz = 0d0
       do i = 1, n+1
          sz = max(sz, sqrt(sum((P(i,:) - P(ib,:))**2)))
       end do
       if (sz < tol) exit
       c = (sum(P, 1) - P(iw,:)) / n           ! centroid of all but the worst
       xr = c + (c - P(iw,:)); fr = f(xr)      ! reflect the worst vertex
       if (fr < fv(iw)) then
          P(iw,:) = xr; fv(iw) = fr
       else                                     ! shrink toward the best
          do i = 1, n+1
             if (i /= ib) then
                P(i,:) = P(ib,:) + 0.5d0*(P(i,:) - P(ib,:))
                fv(i) = f(P(i,:))
             end if
          end do
       end if
    end do
    ib = 1
    do i = 2, n+1
       if (fv(i) < fv(ib)) ib = i
    end do
    xbest = P(ib,:)
  end function simplex_basic
end program simplex_basic_demo
