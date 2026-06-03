function y = taylor3(f, df, d2f, t0, y0, h, n)
% TAYLOR3  Third-order Taylor method (first two total derivatives of f).
    t = t0; y = y0;
    for i = 1:n
        y = y + h*f(t, y) + h^2/2*df(t, y) + h^3/6*d2f(t, y);
        t = t + h;
    end
end

% --- Demo ---
f   = @(t, y) 2*y - 10*t^2 + 2*t;
df  = @(t, y) 4*y - 20*t^2 - 16*t + 2;
d2f = @(t, y) 8*y - 40*t^2 - 32*t - 16;
fprintf('y(1) = %.6f\n', taylor3(f, df, d2f, 0, 1, 0.1, 10));
