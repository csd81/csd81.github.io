function newton_eval()
    % --- Demo adatok ---
    x_nodes = [-1 1 2 3]; 
    a_coeffs = [-3 2 0 3];
    
    % Kiértékelés egyetlen pontban (mint az eredeti demóban)
    t_single = 0;
    p_single = newton_eval_vectorized(x_nodes, a_coeffs, t_single);
    fprintf('Kiértékelés a t = %d helyen: %d\n', t_single, p_single);
    
    % --- Bónusz: Vektoros kiértékelés és grafikus ábrázolás ---
    t_vec = linspace(-1.5, 3.5, 200); % Sok pont a sima görbéhez
    p_vec = newton_eval_vectorized(x_nodes, a_coeffs, t_vec);
    
    figure;
    plot(t_vec, p_vec, 'b-', 'LineWidth', 2); hold on;
    % Ábrázoljuk a csomópontokat is (behelyettesítve az x értékeket)
    y_nodes = arrayfun(@(t) newton_eval_vectorized(x_nodes, a_coeffs, t), x_nodes);
    plot(x_nodes, y_nodes, 'ro', 'MarkerSize', 8, 'MarkerFaceColor', 'r');
    
    title('Newton-polinom kiértékelése és ábrázolása');
    xlabel('t');
    ylabel('P(t)');
    legend('Interpolációs polinom', 'Csomópontok', 'Location', 'NorthWest');
    grid on;
end

function p = newton_eval_vectorized(x, a, t)
% NEWTON_EVAL_VECTORIZED  Newton-alak kiértékelése Horner-módszerrel.
% Támogatja, ha a "t" egy tetszőleges méretű oszlop- vagy sorvektor.

    n = numel(a);
    % Inicializáljuk p-t olyan méretű konstans tömbként, mint amilyen t
    p = ones(size(t)) * a(end); 
    
    for k = n-1:-1:1
        % Fontos a pont-szorzás (.*), hogy elemenként végezze el a műveletet 
        % abban az esetben is, ha a t egy vektor!
        p = p .* (t - x(k)) + a(k);
    end
end