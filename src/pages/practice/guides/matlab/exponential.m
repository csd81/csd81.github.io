function [a, b] = exp_fit(t, y)
% EXP_FIT  Fit y ~ b*exp(a*t) by linear least squares on log(y).
    t = t(:); ly = log(y(:));
    p = [t, ones(numel(t),1)] \ ly;   % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [0 1 2 3]; y = [2.0 4.1 8.2 15.9];
[a, b] = exp_fit(t, y);
fprintf('a = %.4f, b = %.4f\n', a, b);
