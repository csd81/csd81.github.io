function d = deriv1(f, x, h)
% DERIV1  Central-difference first derivative, error O(h^2).
    if nargin < 3, h = 0.01; end
    d = (f(x + h) - f(x - h)) / (2*h);
end

function d = deriv2(f, x, h)
% DERIV2  Central-difference second derivative, error O(h^2).
    if nargin < 3, h = 0.01; end
    d = (f(x + h) - 2*f(x) + f(x - h)) / h^2;
end

% --- Demo: f(x) = sin(x) at x = 1, h = 0.01 ---
fprintf("f'(1)  ~ %.6f  exact cos(1)  =  %.6f\n", deriv1(@sin, 1, 0.01),  cos(1));
fprintf("f''(1) ~ %.6f  exact -sin(1) = %.6f\n", deriv2(@sin, 1, 0.01), -sin(1));
