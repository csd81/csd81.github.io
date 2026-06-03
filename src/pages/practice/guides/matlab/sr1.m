function [x, k] = sr1(f, grad, x0, tol, max_iter)
% SR1  Symmetric Rank-One quasi-Newton minimization (inverse-Hessian form).
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g;
        if g'*d >= 0, H = eye(n); d = -g; end          % safeguard: SR1 may lose definiteness
        t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g;
        w = s - H*y; wy = w'*y;                         % residual of the secant condition
        if abs(wy) > 1e-12
            H = H + (w*w')/wy;                          % SR1 inverse update (rank one)
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(sr1(f, grad, [0; 0])');                            % -> 1 2
