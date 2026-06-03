function differentiation()
    % --- Demo paraméterek ---
    f = @sin;
    x_point = 1;
    h_step = 0.01;

    % Számítás a pontban
    fprintf("--- Számítás egy adott pontban (x = %.2f) ---\n", x_point);
    fprintf("f'(1)  ~ %.6f  (Exact cos(1)  =  %.6f)\n", deriv1_robust(f, x_point, h_step),  cos(x_point));
    fprintf("f''(1) ~ %.6f  (Exact -sin(1) = %.6f)\n", deriv2_robust(f, x_point, h_step), -sin(x_point));

    % --- Bónusz: Vektoros működés demonstrációja (Ábrázolás) ---
    x_vec = linspace(0, 2*pi, 100);
    dy_numeric = deriv1_robust(f, x_vec, h_step);
    dy_exact = cos(x_vec);
    
    figure;
    plot(x_vec, dy_exact, 'b-', 'LineWidth', 2); hold on;
    plot(x_vec, dy_numeric, 'r--', 'LineWidth', 1.5);
    title("Numerikus vs. Egzakt első derivált f(x)=sin(x) esetén");
    legend('Egzakt cos(x)', 'Centrális differencia');
    grid on;
end

function d = deriv1_robust(f, x, h)
% DERIV1_ROBUST Első derivált centrális sémával, vektorizált bemenetre is.
    if nargin < 3, h = 1e-8; end % Az első deriválthoz optimálisabb alapértelmezett h
    d = (f(x + h) - f(x - h)) / (2 * h);
end

function d = deriv2_robust(f, x, h)
% DERIV2_ROBUST Második derivált centrális sémával, vektorizált bemenetre is.
    if nargin < 3, h = 1e-4; end % A második deriválthoz optimálisabb alapértelmezett h
    d = (f(x + h) - 2 * f(x) + f(x - h)) / h^2;
end