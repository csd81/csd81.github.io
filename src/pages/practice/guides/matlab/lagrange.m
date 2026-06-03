function a = lagrange_coeffs(x, y)
% LAGRANGE_COEFFS  Coefficients a (low->high) of the degree n-1 interpolant
% through (x_i, y_i), via the Vandermonde system V a = y.
    x = x(:); y = y(:); n = numel(x);
    V = zeros(n);
    for i = 1:n
        V(i, :) = x(i) .^ (0:n-1);     % V(i,j) = x_i^(j-1)
    end
    a = V \ y;                          % backslash is stabler than inv(V)*y
end

% --- Demo ---
x = [-1 1 2 3]; y = [-3 1 3 29];
disp(lagrange_coeffs(x, y)');           % -> 5  -1  -6  3
