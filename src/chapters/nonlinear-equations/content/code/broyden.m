function [x, k] = broyden(F, x0, tol, max_iter)
% BROYDEN  Broyden's (good) method for F(x)=0; approximates the Jacobian.
    if nargin < 3, tol = 1e-12; end
    if nargin < 4, max_iter = 100; end
    x = x0(:); B = eye(numel(x)); Fx = F(x);
    for k = 1:max_iter
        if norm(Fx, inf) < tol, return; end
        dx = B \ (-Fx);
        x = x + dx;
        Fn = F(x); dF = Fn - Fx;
        B = B + (dF - B*dx) * (dx') / (dx'*dx);   % rank-1 update
        Fx = Fn;
    end
end

% --- Demo ---
F = @(v) [v(1)^2 + v(2)^2 - 4; v(1)*v(2) - 1];
disp(broyden(F, [2; 0.5])');
