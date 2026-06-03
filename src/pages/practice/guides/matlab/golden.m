function m = golden_section(f, a, b, tol)
% GOLDEN_SECTION  Minimum of a unimodal f on [a,b] by golden-section search.
    if nargin < 4, tol = 1e-8; end
    g = (sqrt(5) - 1)/2;
    c = b - g*(b-a); d = a + g*(b-a); fc = f(c); fd = f(d);
    while b - a > tol
        if fc < fd
            b = d; d = c; fd = fc; c = b - g*(b-a); fc = f(c);
        else
            a = c; c = d; fc = fd; d = a + g*(b-a); fd = f(d);
        end
    end
    m = (a + b)/2;
end

% --- Demo ---
disp(golden_section(@(x) (x-2)^2 + 1, 0, 5));       % -> 2
