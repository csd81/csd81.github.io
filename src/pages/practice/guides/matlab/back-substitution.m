function x = back_substitution(U, b)
% BACK_SUBSTITUTION  Solve an upper-triangular system U x = b.
    n = numel(b); x = zeros(n, 1);
    for i = n:-1:1
        x(i) = (b(i) - U(i, i+1:n) * x(i+1:n)) / U(i, i);
    end
end

% --- Demo ---
U = [2 1 -1; 0 1 2; 0 0 3]; b = [1; 8; 9];
disp(back_substitution(U, b)');    % 1 2 3
