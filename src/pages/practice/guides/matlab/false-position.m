function [c, k] = false_position(f, a, b, tol, max_iter)
% FALSE_POSITION  Regula falsi (bracketing secant intercept).
    if nargin < 4, tol = 1e-12; end
    if nargin < 5, max_iter = 200; end
    fa = f(a); fb = f(b); c = a;
    for k = 1:max_iter
        c = (a*fb - b*fa)/(fb - fa); fc = f(c);
        if abs(fc) < tol, return; end
        if fa*fc < 0, b = c; fb = fc; else, a = c; fa = fc; end
    end
end

% --- Demo ---
disp(false_position(@(x) x^2 - 2, 1.0, 2.0));  % sqrt(2)
