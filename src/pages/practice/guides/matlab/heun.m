function y = heun(f, t0, y0, h, n)
% HEUN  Heun's method (RK2, explicit trapezoidal rule).
    t = t0; y = y0;
    for i = 1:n
        k1 = f(t, y);
        k2 = f(t + h, y + h*k1);
        y = y + h*(k1 + k2)/2;
        t = t + h;
    end
end

% --- Demo ---
f = @(t, y) 2*y - 10*t^2 + 2*t;
fprintf('y(1) = %.6f\n', heun(f, 0, 1, 0.1, 10));
