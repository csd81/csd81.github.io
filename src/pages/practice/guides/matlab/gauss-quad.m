function I = gauss_quad(f, a, b, n)
% GAUSS_QUAD  2- or 3-point Gauss-Legendre quadrature on [a,b].
    if nargin < 4, n = 2; end
    if n == 3
        t = [-sqrt(3/5), 0, sqrt(3/5)];
        w = [5/9, 8/9, 5/9];
    else
        t = [-1/sqrt(3), 1/sqrt(3)];
        w = [1, 1];
    end
    hm = (b - a) / 2;                 % map [-1,1] -> [a,b]
    mid = (a + b) / 2;
    I = hm * sum(w .* arrayfun(f, mid + hm * t));
end

% --- Demo ---
fprintf('int_0^1 e^x dx ~ %.7f (2-pt)\n', gauss_quad(@exp, 0, 1, 2));
fprintf('int_0^1 e^x dx ~ %.7f (3-pt)\n', gauss_quad(@exp, 0, 1, 3));
% -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
