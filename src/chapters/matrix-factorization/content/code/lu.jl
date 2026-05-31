using LinearAlgebra

function lu_doolittle(A)
    n = size(A, 1); L = Matrix{Float64}(I, n, n); U = zeros(n, n)
    for i in 1:n
        for j in i:n
            U[i, j] = A[i, j] - sum(L[i, k] * U[k, j] for k in 1:i-1; init = 0.0)
        end
        for j in i+1:n
            L[j, i] = (A[j, i] - sum(L[j, k] * U[k, i] for k in 1:i-1; init = 0.0)) / U[i, i]
        end
    end
    return L, U
end

A = [1.0 -2 -2 -2; 2 -1 2 4; -1 2 3 -4; -2 1 4 -2]
L, U = lu_doolittle(A)
display(L); display(U)
