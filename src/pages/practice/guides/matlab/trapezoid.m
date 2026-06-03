function I = trapezoid(f, a, b, n)
% TRAPEZOID  Composite trapezoidal rule for the integral of f on [a,b].
    if nargin < 4, n = 100; end
    x = linspace(a, b, n+1);
    y = f(x);
    h = (b - a) / n;
    I = h * (y(1)/2 + sum(y(2:end-1)) + y(end)/2);
end

% --- Demo ---
fprintf('int_0^1 e^x dx ~ %.10f\n', trapezoid(@exp, 0, 1, 100));
