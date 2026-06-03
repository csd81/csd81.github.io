function [x1, k] = secant(f, x0, x1, tol, max_iter)
% SECANT  Derivative-free secant method.
    if nargin < 4, tol = 1e-12; end
    if nargin < 5, max_iter = 100; end
    f0 = f(x0); f1 = f(x1);
    for k = 1:max_iter
        x2 = x1 - f1*(x1 - x0)/(f1 - f0);
        if abs(x2 - x1) < tol, x1 = x2; return; end
        x0 = x1; f0 = f1; x1 = x2; f1 = f(x2);
    end
end

% --- Demo ---
disp(secant(@(x) x^2 - 2, 1.0, 2.0));       % sqrt(2)
