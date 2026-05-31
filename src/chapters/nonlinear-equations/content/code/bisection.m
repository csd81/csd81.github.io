function [c, k] = bisection(f, a, b, tol, max_iter)
% BISECTION  Root of f on [a,b] (requires f(a)*f(b) < 0).
    if nargin < 4, tol = 1e-12; end
    if nargin < 5, max_iter = 200; end
    fa = f(a);
    for k = 1:max_iter
        c = (a + b)/2; fc = f(c);
        if fc == 0 || (b - a)/2 < tol, return; end
        if fa*fc < 0, b = c; else, a = c; fa = fc; end
    end
end

% --- Demo ---
disp(bisection(@(x) x^2 - 2, 1, 2));        % sqrt(2)
