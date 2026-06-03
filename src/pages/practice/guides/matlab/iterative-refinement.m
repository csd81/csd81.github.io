function [x, k] = iterative_refinement(A, b, tol, max_iter)
% ITERATIVE_REFINEMENT  Refine the solution of A x = b on its residual.
    if nargin < 3, tol = 1e-12; end
    if nargin < 4, max_iter = 20; end
    x = A \ b;
    for k = 1:max_iter
        r = b - A*x;           % residual
        d = A \ r;             % correction
        x = x + d;
        if norm(d, inf) < tol, return; end
    end
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(iterative_refinement(A, b)');   % 2 3 -1
