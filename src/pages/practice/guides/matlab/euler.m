function [t, y] = euler(f, t0, y0, h, n)
% EULER  Forward Euler for y' = f(t,y).
    t = zeros(1, n+1); y = zeros(1, n+1);
    t(1) = t0; y(1) = y0;
    for i = 1:n
        y(i+1) = y(i) + h * f(t(i), y(i));   % z_{i+1} = z_i + h f(t_i, z_i)
        t(i+1) = t0 + i*h;
    end
end

% --- Demo ---
f = @(t, y) 2*y - 10*t^2 + 2*t;              % y(0)=1 on [0,1]
[t, y] = euler(f, 0, 1, 0.1, 10);
fprintf('y(1) = %.6f\n', y(end));
