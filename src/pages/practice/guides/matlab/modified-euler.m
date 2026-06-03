function y = modified_euler(f, t0, y0, h, n)
% MODIFIED_EULER  Midpoint RK2 (predictor-corrector).
    t = t0; y = y0;
    for i = 1:n
        k1 = f(t, y);
        k2 = f(t + h/2, y + h/2*k1);     % slope at the midpoint
        y = y + h*k2;
        t = t + h;
    end
end

% --- Demo ---
f = @(t, y) 2*y - 10*t^2 + 2*t;
fprintf('y(1) = %.6f\n', modified_euler(f, 0, 1, 0.1, 10));
