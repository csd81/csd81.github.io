function [x, k] = dfp(f, grad, x0, tol, max_iter)
% DFP  Davidon-Fletcher-Powell quasi-Newton minimization (inverse-Hessian form).
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    x = x0(:); n = numel(x); H = eye(n); g = grad(x);
    for k = 1:max_iter
        if norm(g) < tol, return; end
        d = -H*g;
        if g'*d >= 0, H = eye(n); d = -g; end          % safeguard: keep a descent direction
        t = 1; fx = f(x); gd = g'*d;
        while f(x + t*d) > fx + 1e-4*t*gd, t = t/2; end
        s = t*d; x_new = x + s; g_new = grad(x_new); y = g_new - g; sy = s'*y;
        if sy > 1e-12
            Hy = H*y;
            H = H + (s*s')/sy - (Hy*Hy')/(y'*Hy);      % DFP inverse update
        end
        x = x_new; g = g_new;
    end
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
disp(dfp(f, grad, [0; 0])');                            % -> 1 2
