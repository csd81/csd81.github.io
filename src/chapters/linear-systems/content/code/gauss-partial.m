function x = gauss_partial_pivot(A, b)
% GAUSS_PARTIAL_PIVOT  Solve A x = b with partial (row) pivoting.
    b = b(:); n = numel(b);
    for k = 1:n
        [~, p] = max(abs(A(k:n, k))); p = p + k - 1;     % largest pivot
        A([k p], :) = A([p k], :); b([k p]) = b([p k]);
        for i = k+1:n
            f = A(i,k) / A(k,k);
            A(i, k:n) = A(i, k:n) - f * A(k, k:n);
            b(i) = b(i) - f * b(k);
        end
    end
    x = zeros(n, 1);                                      % back substitution
    for i = n:-1:1
        x(i) = (b(i) - A(i, i+1:n) * x(i+1:n)) / A(i, i);
    end
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_partial_pivot(A, b)');                         % 2  3  -1
