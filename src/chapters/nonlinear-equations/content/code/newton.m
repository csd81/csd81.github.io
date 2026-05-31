function [x, k] = newton(f, df, x0, tol, max_iter)
% NEWTON  Newton's method using derivative df.
    if nargin < 4, tol = 1e-12; end
    if nargin < 5, max_iter = 100; end
    x = x0;
    for k = 1:max_iter
        fx = f(x);
        if abs(fx) < tol, return; end
        x = x - fx/df(x);
    end
end

% --- Demo ---
disp(newton(@(x) x^2 - 2, @(x) 2*x, 1.0));  % sqrt(2)
