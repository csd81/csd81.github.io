function [x, k] = steepest_descent(f, grad, x0, tol, max_iter)
% STEEPEST_DESCENT  Steepest descent with Armijo backtracking line search.
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 1000; end
    x = x0(:);
    for k = 1:max_iter
        g = grad(x);
        if norm(g) < tol, return; end
        d = -g; t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        x = x + t*d;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(steepest_descent(f, grad, [0; 0])');
