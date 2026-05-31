function a = divided_differences(x, y)
% DIVIDED_DIFFERENCES  Newton coefficients a_i = f[x_1,...,x_i].
    x = x(:); a = y(:); n = numel(x);
    for j = 2:n
        for i = n:-1:j
            a(i) = (a(i) - a(i-1)) / (x(i) - x(i-j+1));
        end
    end
end

% --- Demo ---
x = [-1 1 2 3]; y = [-3 1 3 29];
disp(divided_differences(x, y)');       % -> -3  2  0  3
