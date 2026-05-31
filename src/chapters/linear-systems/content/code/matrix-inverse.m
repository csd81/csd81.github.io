function Ainv = matrix_inverse(A)
% MATRIX_INVERSE  Inverse via Gauss-Jordan on the augmented matrix [A | I].
    n = size(A, 1); M = [A, eye(n)];
    for k = 1:n
        [~, p] = max(abs(M(k:n, k))); p = p + k - 1;
        M([k p], :) = M([p k], :);
        M(k, :) = M(k, :) / M(k, k);
        for i = 1:n
            if i ~= k
                M(i, :) = M(i, :) - M(i, k) * M(k, :);
            end
        end
    end
    Ainv = M(:, n+1:end);
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2];
disp(matrix_inverse(A));
