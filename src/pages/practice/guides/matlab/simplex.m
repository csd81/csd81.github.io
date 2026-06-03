function x = nelder_mead(f, x0, step, tol, max_iter)
% NELDER_MEAD  Downhill simplex minimization.
    if nargin < 3, step = 0.5; end
    if nargin < 4, tol = 1e-10; end
    if nargin < 5, max_iter = 400; end
    x0 = x0(:)'; n = numel(x0);
    P = [x0; ones(n,1)*x0 + step*eye(n)];         % (n+1) x n simplex
    fv = arrayfun(@(i) f(P(i,:)'), 1:n+1)';
    for it = 1:max_iter
        [fv, idx] = sort(fv); P = P(idx, :);
        if fv(end) - fv(1) < tol, break; end
        c = sum(P(1:n, :), 1) / n;
        xr = c + (c - P(end,:)); fr = f(xr');       % reflect
        if fr < fv(1)
            xe = c + 2*(c - P(end,:)); fe = f(xe');  % expand
            if fe < fr, P(end,:) = xe; fv(end) = fe; else, P(end,:) = xr; fv(end) = fr; end
        elseif fr < fv(end-1)
            P(end,:) = xr; fv(end) = fr;
        else
            xc = c + 0.5*(P(end,:) - c); fc = f(xc'); % contract
            if fc < fv(end)
                P(end,:) = xc; fv(end) = fc;
            else
                for i = 2:n+1, P(i,:) = P(1,:) + 0.5*(P(i,:) - P(1,:)); fv(i) = f(P(i,:)'); end
            end
        end
    end
    x = P(1, :)';
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + (v(2)-2)^2;
disp(nelder_mead(f, [0; 0])');
