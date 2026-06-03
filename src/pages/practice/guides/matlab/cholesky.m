function L = cholesky(A)
% CHOLESKY  Factorization A = L*L' of a symmetric positive-definite A.
    n = size(A, 1); L = zeros(n);
    for j = 1:n
        L(j,j) = sqrt(A(j,j) - L(j,1:j-1) * L(j,1:j-1)');
        for i = j+1:n
            L(i,j) = (A(i,j) - L(i,1:j-1) * L(j,1:j-1)') / L(j,j);
        end
    end
end

% --- Demo ---
A = [4 2 -2; 2 10 2; -2 2 5];
disp(cholesky(A));
