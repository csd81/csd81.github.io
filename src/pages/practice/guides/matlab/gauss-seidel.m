function [x, k] = gauss_seidel(A, b, x0, tol, max_iter)
% GAUSS_SEIDEL  Solve A x = b by Gauss-Seidel iteration.
    if nargin < 3, x0 = zeros(size(b)); end
    if nargin < 4, tol = 1e-10; end
    if nargin < 5, max_iter = 200; end

    n = numel(b);
    x = x0;
    for k = 1:max_iter
        x_old = x;
        for i = 1:n
            % use updated x(1..i-1) and previous x(i+1..n)
            s = b(i) - A(i, 1:i-1) * x(1:i-1) - A(i, i+1:n) * x(i+1:n);
            x(i) = s / A(i, i);
        end
        if norm(x - x_old, inf) <= tol
            return
        end
    end
end

% --- Demo ---
A = [4 2 -1; 5 -10 2; -2 3 -7];
b = [9; 8; 3];
[x, k] = gauss_seidel(A, b);
fprintf('x = [%g %g %g],  iterations = %d\n', x(1), x(2), x(3), k);
