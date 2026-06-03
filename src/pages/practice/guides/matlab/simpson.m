function I = simpson(f, a, b, n)
% SIMPSON  Composite Simpson's rule (n forced even) on [a,b].
    if nargin < 4, n = 100; end
    if mod(n, 2), n = n + 1; end
    x = linspace(a, b, n+1);
    y = f(x);
    h = (b - a) / n;
    I = h/3 * (y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-1)));
end

% --- Demo ---
fprintf('int_0^1 e^x dx ~ %.10f\n', simpson(@exp, 0, 1, 100));
