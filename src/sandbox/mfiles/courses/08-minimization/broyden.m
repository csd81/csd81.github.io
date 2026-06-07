function broyden()
    % --- Teszt egyenletrendszer ---
    % F(v) = 0, ahol v(1) = x, v(2) = y
    F = @(v) [v(1)^2 + v(2)^2 - 4; 
              v(1)*v(2) - 1];
          
    x0 = [2; 0.5]; % Kezdőpont
    
    % --- Broyden-módszer meghívása ---
    [x_sol, iterations] = broyden_inverse(F, x0, 1e-12, 100);
    
    % --- Eredmények kiírása ---
    fprintf('Talált megoldás: [x1, x2] = [%.6f, %.6f]\n', x_sol(1), x_sol(2));
    fprintf('Szükséges iterációk száma: %d\n', iterations);
    fprintf('Függvényérték a megoldásban (norma): %e\n', norm(F(x_sol), inf));
end

function [x, k] = broyden_inverse(F, x0, tol, max_iter)
% BROYDEN_INVERSE  Broyden-módszer az inverz Jacobi-mátrix közvetlen frissítésével.
% Sokkal hatékonyabb nagy méretű egyenletrendszerekre (O(n^2) lépésenként).

    if nargin < 3, tol = 1e-12; end
    if nargin < 4, max_iter = 100; end
    
    x = x0(:);
    Fx = F(x);
    n = numel(x);
    
    % H a Jacobi-mátrix inverzének közelítése (kezdetben az egységmátrix)
    H = eye(n); 
    
    for k = 1:max_iter
        if norm(Fx, inf) < tol
            return; 
        end
        
        % Nem kell lineáris egyenletrendszert oldani (\), elég egy szorzás!
        dx = -H * Fx; 
        
        x = x + dx;
        Fn = F(x);
        dF = Fn - Fx;
        
        % Sherman-Morrison formulán alapuló rang-1 inverz frissítés
        % (Broyden "jó" módszerének inverz alakja)
        den = dx' * H * dF;
        if abs(den) > 1e-12              % degenerált nevező esetén kihagyjuk a frissítést
            H = H + ((dx - H*dF) * (dx' * H)) / den;
        end

        Fx = Fn;
    end
    
    warning('A módszer elérte a maximális iterációs számot (%d).', max_iter);
end