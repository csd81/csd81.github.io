function c = poly_fit(t, y, degree)
% POLY_FIT  Least-squares polynomial fit; c are coefficients low -> high.
    t = t(:); y = y(:);
    A = zeros(numel(t), degree+1);
    for j = 0:degree
        A(:, j+1) = t .^ j;          % columns 1, t, t^2, ...
    end
    c = A \ y;                        % least-squares solution
end

% --- Demo ---
t = [0 1 2 3 4]; y = [1.0 1.8 3.3 4.5 6.3];
disp(poly_fit(t, y, 2)');
