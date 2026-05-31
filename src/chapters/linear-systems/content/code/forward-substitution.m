function y = forward_substitution(L, b)
% FORWARD_SUBSTITUTION  Solve a lower-triangular system L y = b.
    n = numel(b); y = zeros(n, 1);
    for i = 1:n
        y(i) = (b(i) - L(i, 1:i-1) * y(1:i-1)) / L(i, i);
    end
end

% --- Demo ---
L = [2 0 0; 1 3 0; -1 1 2]; b = [4; 5; -1];
disp(forward_substitution(L, b)');    % 2 1 0
