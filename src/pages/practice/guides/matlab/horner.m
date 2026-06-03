function y = horner(a, x)
% HORNER  Evaluate a polynomial with coefficients a = [a_n ... a_0] (high->low).
    y = a(1);
    for i = 2:numel(a)
        y = y*x + a(i);
    end
end

% --- Demo ---  p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
disp(horner([5 -8 2 4 -10], 2));   % 22
