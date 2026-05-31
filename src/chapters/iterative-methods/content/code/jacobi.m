function [x, k] = jacobi(A, b, x0, tol, max_iter)
% JACOBI  Solve A x = b by Jacobi iteration.  Returns x and iteration count k.
    if nargin < 3, x0 = zeros(size(b)); end
    if nargin < 4, tol = 1e-10; end
    if nargin < 5, max_iter = 200; end

    D = diag(diag(A));            % diagonal part
    T = eye(numel(b)) - D \ A;    % iteration matrix  T = I - D^{-1} A
    c = D \ b;                    % preconditioned right-hand side

    x = x0;
    for k = 1:max_iter
        x_new = T * x + c;        % x^{(k+1)} = T x^{(k)} + c
        if norm(x_new - x, inf) <= tol
            x = x_new; return
        end
        x = x_new;
    end
end

% --- Demo ---
A = [4 2 -1; 5 -10 2; -2 3 -7];
b = [9; 8; 3];
[x, k] = jacobi(A, b);
fprintf('x = [%g %g %g],  iterations = %d\n', x(1), x(2), x(3), k);
