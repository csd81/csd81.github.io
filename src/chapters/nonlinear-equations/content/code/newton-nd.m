function [x, k] = newton_system(F, J, x0, tol, max_iter)
% NEWTON_SYSTEM  Newton's method for F(x)=0 with Jacobian J(x).
    if nargin < 4, tol = 1e-12; end
    if nargin < 5, max_iter = 100; end
    x = x0(:);
    for k = 1:max_iter
        Fx = F(x);
        if norm(Fx, inf) < tol, return; end
        x = x - J(x) \ Fx;
    end
end

% --- Demo ---
F = @(v) [v(1)^2 + v(2)^2 - 4; v(1)*v(2) - 1];
J = @(v) [2*v(1), 2*v(2); v(2), v(1)];
disp(newton_system(F, J, [2; 0.5])');
