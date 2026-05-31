function cholesky_factor(A)
    n = size(A, 1); L = zeros(n, n)
    for j in 1:n
        L[j, j] = sqrt(A[j, j] - sum(L[j, k]^2 for k in 1:j-1; init = 0.0))
        for i in j+1:n
            L[i, j] = (A[i, j] - sum(L[i, k] * L[j, k] for k in 1:j-1; init = 0.0)) / L[j, j]
        end
    end
    return L
end

A = [4.0 2 -2; 2 10 2; -2 2 5]
display(cholesky_factor(A))
