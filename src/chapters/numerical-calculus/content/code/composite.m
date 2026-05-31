function [T, S] = composite(f, a, b, n)
% COMPOSITE  Composite trapezoidal (T) and Simpson (S) on [a,b], n subintervals.
    if nargin < 4, n = 10; end
    if mod(n, 2), n = n + 1; end          % Simpson needs even n
    h = (b - a) / n;
    x = a + (0:n) * h;
    y = arrayfun(f, x);
    T = h * (y(1)/2 + sum(y(2:end-1)) + y(end)/2);
    S = h/3 * (y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-1)));
end

% --- Demo ---
[T, S] = composite(@exp, 0, 1, 10);
fprintf('trapezoid ~ %.7f\n', T);
fprintf('Simpson   ~ %.7f\n', S);
% -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
