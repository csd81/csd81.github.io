function x = simplex_basic(f, x0, step, tol, max_iter)
% SIMPLEX_BASIC  Basic fixed-shape simplex (reflect worst through centroid, else shrink to best).
    if nargin < 3, step = 1; end
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 500; end
    x0 = x0(:)'; n = numel(x0);
    P = [x0; ones(n,1)*x0 + step*eye(n)];          % (n+1) x n vertices
    fv = zeros(n+1,1);
    for i = 1:n+1, fv(i) = f(P(i,:)'); end
    for it = 1:max_iter
        [~, iw] = max(fv); [~, ib] = min(fv);
        sz = 0;
        for i = 1:n+1, sz = max(sz, norm(P(i,:) - P(ib,:))); end
        if sz < tol, break; end
        c = (sum(P,1) - P(iw,:)) / n;              % centroid of all but the worst
        xr = c + (c - P(iw,:)); fr = f(xr');       % reflect the worst vertex
        if fr < fv(iw)
            P(iw,:) = xr; fv(iw) = fr;
        else                                        % shrink toward the best
            for i = 1:n+1
                if i ~= ib, P(i,:) = P(ib,:) + 0.5*(P(i,:) - P(ib,:)); fv(i) = f(P(i,:)'); end
            end
        end
    end
    [~, ib] = min(fv); x = P(ib,:)';
end

% --- Demo ---
f = @(v) (v(1)-1)^2 + (v(2)-2)^2;
disp(simplex_basic(f, [0; 0])');                   % -> 1 2
