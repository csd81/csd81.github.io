function [a, b, c, d] = natural_cubic_spline(x, y)
% NATURAL_CUBIC_SPLINE  Per-interval coefficients with
% S_i(t) = a_i + b_i (t-x_i) + c_i (t-x_i)^2 + d_i (t-x_i)^3.
    x = x(:); y = y(:); n = numel(x);
    h = diff(x);
    A = zeros(n); rhs = zeros(n,1);
    A(1,1) = 1; A(n,n) = 1;                 % natural ends: c_1 = c_n = 0
    for i = 2:n-1
        A(i,i-1) = h(i-1);
        A(i,i)   = 2*(h(i-1) + h(i));
        A(i,i+1) = h(i);
        rhs(i)   = 3*((y(i+1)-y(i))/h(i) - (y(i)-y(i-1))/h(i-1));
    end
    c = A \ rhs;
    a = y(1:n-1);
    b = (y(2:n) - y(1:n-1))./h - h.*(2*c(1:n-1) + c(2:n))/3;
    d = (c(2:n) - c(1:n-1))./(3*h);
    c = c(1:n-1);
end

% --- Demo ---
[a, b, c, d] = natural_cubic_spline([0; 1; 2; 3], [0; 1; 0; 1]);
disp([a, b, c, d]);                          % rows: [a_i b_i c_i d_i] per interval
