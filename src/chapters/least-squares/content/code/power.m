function [a, b] = power_fit(t, y)
% POWER_FIT  Fit y ~ b*t^a by linear least squares on log-log data.
    lt = log(t(:)); ly = log(y(:));
    p = [lt, ones(numel(lt),1)] \ ly; % p = [a; ln b]
    a = p(1); b = exp(p(2));
end

% --- Demo ---
t = [1 2 3 4]; y = [2.0 5.6 9.7 16.0];
[a, b] = power_fit(t, y);
fprintf('a = %.4f, b = %.4f\n', a, b);
