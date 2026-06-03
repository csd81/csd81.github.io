function x = thomas(a, b, c, d)
% THOMAS  Tridiagonal solver. a: sub-diagonal (a(1) unused), b: diagonal,
% c: super-diagonal, d: right-hand side.
    n = numel(d); c = c(:); d = d(:);
    c(1) = c(1) / b(1); d(1) = d(1) / b(1);
    for i = 2:n
        m = b(i) - a(i) * c(i-1);
        if i < n, c(i) = c(i) / m; end
        d(i) = (d(i) - a(i) * d(i-1)) / m;
    end
    x = zeros(n, 1); x(n) = d(n);
    for i = n-1:-1:1
        x(i) = d(i) - c(i) * x(i+1);
    end
end

% --- Demo ---  diagonal 4, off-diagonals -1; solution [1 2 3 4]
disp(thomas([0 -1 -1 -1], [4 4 4 4], [-1 -1 -1 0], [2 4 6 13])');
