function p = newton_eval(x, a, t)
% NEWTON_EVAL  Evaluate the Newton form by nested multiplication.
    p = a(end);
    for k = numel(a)-1:-1:1
        p = p*(t - x(k)) + a(k);
    end
end

% --- Demo ---
disp(newton_eval([-1 1 2 3], [-3 2 0 3], 0));   % 5
