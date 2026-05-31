function [x, k] = bfgs(f, grad, x0, tol, max_iter)
% BFGS  Quasi-Newton minimization with Armijo backtracking line search.
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g; t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g; sy = s'*y;
        if sy > 1e-12
            rho = 1/sy; I = eye(n);
            H = (I - rho*(s*y'))*H*(I - rho*(y*s')) + rho*(s*s');   % inverse update
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(bfgs(f, grad, [0; 0])');
