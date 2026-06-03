function [x, k] = fixed_point_nd(G, x0, tol, max_iter)
% FIXED_POINT_ND  Vector fixed-point iteration x_{k+1} = G(x_k).
    if nargin < 3, tol = 1e-12; end
    if nargin < 4, max_iter = 200; end
    x = x0(:);
    for k = 1:max_iter
        xn = G(x);
        if norm(xn - x, inf) < tol, x = xn; return; end
        x = xn;
    end
end

% --- Demo ---
G = @(v) [cos(v(2)); sin(v(1))];
disp(fixed_point_nd(G, [0; 0])');
