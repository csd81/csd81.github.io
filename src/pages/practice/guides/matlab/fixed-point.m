function [x, k] = fixed_point(g, x0, tol, max_iter)
% FIXED_POINT  Iteration x_{k+1} = g(x_k).
    if nargin < 3, tol = 1e-12; end
    if nargin < 4, max_iter = 200; end
    x = x0;
    for k = 1:max_iter
        xn = g(x);
        if abs(xn - x) < tol, x = xn; return; end
        x = xn;
    end
end

% --- Demo ---
disp(fixed_point(@cos, 1.0));               % ~0.739085
