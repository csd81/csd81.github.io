function [z, a] = hermite_coeffs(x, y, dy)
% HERMITE_COEFFS  Hermite interpolation via divided differences with doubled
% nodes; a are the Newton coefficients on the node list z.
    x = x(:); y = y(:); dy = dy(:); n = numel(x); m = 2*n;
    z = zeros(m,1); Q = zeros(m,m);
    for i = 1:n
        z(2*i-1) = x(i); z(2*i) = x(i);
        Q(2*i-1,1) = y(i); Q(2*i,1) = y(i);
        Q(2*i,2) = dy(i);                                  % f'[x_i] at repeated node
        if i > 1
            Q(2*i-1,2) = (Q(2*i-1,1) - Q(2*i-2,1)) / (z(2*i-1) - z(2*i-2));
        end
    end
    for j = 3:m
        for i = j:m
            Q(i,j) = (Q(i,j-1) - Q(i-1,j-1)) / (z(i) - z(i-j+1));
        end
    end
    a = diag(Q);
end

% --- Demo ---
[z, a] = hermite_coeffs([0; 1], [1; 0], [0; 0]);   % p(0)=1, p'(0)=0, p(1)=0, p'(1)=0
p = a(end);
for k = numel(a)-1:-1:1, p = p*(0.5 - z(k)) + a(k); end
fprintf('p(0.5) = %g\n', p);                        % -> 0.5  (p = 2x^3 - 3x^2 + 1)
