function [x, k] = newton_min(grad, hess, x0, tol, max_iter)
% NEWTON_MIN  Newton's method for unconstrained minimization.
    if nargin < 4, tol = 1e-10; end
    if nargin < 5, max_iter = 100; end
    x = x0(:);
    for k = 1:max_iter
        g = grad(x);
        if norm(g) < tol, return; end
        x = x - hess(x) \ g;
    end
end

% --- Demo ---
grad = @(v) [2*(v(1)-1); 2*(v(2)-2)];
hess = @(v) [2 0; 0 2];
disp(newton_min(grad, hess, [0; 0])');
