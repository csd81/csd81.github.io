function [a, b] = line_fit(x, y)
% LINE_FIT  Least-squares line y = a + b x via the 2x2 normal equations.
    x = x(:); y = y(:);
    n = numel(x);
    Sx = sum(x); Sy = sum(y);
    Sxx = sum(x .^ 2); Sxy = sum(x .* y);
    b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx^2);   % slope
    a = (Sy - b*Sx) / n;                      % intercept
end

% --- Demo ---
x = [0 1 2 3 4]; y = [1 3 2 5 4];
[a, b] = line_fit(x, y);
fprintf('slope b = %.4f, intercept a = %.4f\n', b, a);
% -> slope b = 0.8000, intercept a = 1.4000
