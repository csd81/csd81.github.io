function d = central(f, x, h)
% CENTRAL  Central-difference first derivative D(h), error O(h^2).
    d = (f(x + h) - f(x - h)) / (2*h);
end

function [d1, d2, ext] = richardson(f, x, h)
% RICHARDSON  Extrapolate D(h) and D(h/2) to error O(h^4).
    d1 = central(f, x, h);
    d2 = central(f, x, h/2);
    ext = (4*d2 - d1) / 3;
end

% --- Demo: f(x) = sin(x) at x = 1, h = 0.1 ---
[d1, d2, ext] = richardson(@sin, 1, 0.1);
fprintf('D(h)         = %.10f\n', d1);
fprintf('D(h/2)       = %.10f\n', d2);
fprintf('extrapolated = %.10f  exact cos(1) = %.10f\n', ext, cos(1));
