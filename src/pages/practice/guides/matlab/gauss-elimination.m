function x = gauss_elimination(A, b)
% GAUSS_ELIMINATION  Naive Gaussian elimination (no pivoting) + back-substitution.
    n = numel(b); M = [A, b(:)];
    for k = 1:n-1
        for i = k+1:n
            f = M(i,k) / M(k,k);
            M(i, k:n+1) = M(i, k:n+1) - f * M(k, k:n+1);
        end
    end
    x = zeros(n, 1);
    for i = n:-1:1
        x(i) = (M(i, n+1) - M(i, i+1:n) * x(i+1:n)) / M(i, i);
    end
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_elimination(A, b)');   % 2 3 -1
