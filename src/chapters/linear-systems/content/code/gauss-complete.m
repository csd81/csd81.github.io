function x = gauss_complete_pivot(A, b)
% GAUSS_COMPLETE_PIVOT  Gaussian elimination with complete (row+col) pivoting.
    b = b(:); n = numel(b); col = 1:n;
    for k = 1:n
        sub = abs(A(k:n, k:n));
        [~, idx] = max(sub(:));
        [i, j] = ind2sub(size(sub), idx); i = i + k - 1; j = j + k - 1;
        A([k i], :) = A([i k], :); b([k i]) = b([i k]);
        A(:, [k j]) = A(:, [j k]); col([k j]) = col([j k]);
        for r = k+1:n
            f = A(r,k) / A(k,k);
            A(r, k:n) = A(r, k:n) - f * A(k, k:n);
            b(r) = b(r) - f * b(k);
        end
    end
    y = zeros(n, 1);
    for i = n:-1:1
        y(i) = (b(i) - A(i, i+1:n) * y(i+1:n)) / A(i, i);
    end
    x = zeros(n, 1); x(col) = y;                          % undo column swaps
end

% --- Demo ---
A = [2 1 -1; -3 -1 2; -2 1 2]; b = [8; -11; -3];
disp(gauss_complete_pivot(A, b)');
