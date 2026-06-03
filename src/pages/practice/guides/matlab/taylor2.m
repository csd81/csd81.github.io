function y = taylor2(f, df, t0, y0, h, n)
% TAYLOR2  Second-order Taylor method.  df = total derivative f' = f_t + f_y f.
    t = t0; y = y0;
    for i = 1:n
        y = y + h*f(t, y) + h^2/2*df(t, y);
        t = t + h;
    end
end

% --- Demo ---  y' = 2y - 10t^2 + 2t  ->  f' = 4y - 20t^2 - 16t + 2
f  = @(t, y) 2*y - 10*t^2 + 2*t;
df = @(t, y) 4*y - 20*t^2 - 16*t + 2;
fprintf('y(1) = %.6f\n', taylor2(f, df, 0, 1, 0.1, 10));
