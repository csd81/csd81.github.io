function [x, k] = gradient_descent(grad, x0, alpha, tol, max_iter)
% GRADIENT_DESCENT  Constant step-size gradient descent.
    if nargin < 3, alpha = 0.1; end
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 100000; end
    x = x0(:);
    for k = 1:max_iter
        g = grad(x);
        if norm(g) < tol, return; end
        x = x - alpha*g;
    end
end

% --- Demo ---
grad = @(v) [2*(v(1)-1); 2*(v(2)-2)];
disp(gradient_descent(grad, [0; 0])');              % -> 1 2
