function x = gauss_jordan(A, b)
% GAUSS_JORDAN  Solve A x = b via reduced row echelon form.
    n = numel(b); M = [A, b(:)];
    for k = 1:n
        [~, p] = max(abs(M(k:n, k))); p = p + k - 1;
        M([k p], :) = M([p k], :);
        M(k, :) = M(k, :) / M(k, k);                      % normalize pivot row
        for i = 1:n
            if i ~= k
                M(i, :) = M(i, :) - M(i, k) * M(k, :);
            end
        end
    end
    x = M(:, end);
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_jordan(A, b)');
