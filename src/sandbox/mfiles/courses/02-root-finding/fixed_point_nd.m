function fixed_point_nd()
    % --- Demo egyenletrendszer ---
    % G(v) = [cos(y); sin(x)]
    G = @(v) [cos(v(2)); 
              sin(v(1))];
          
    x0 = [0; 0]; % Kezdeti becslés
    
    % --- Többváltozós fixpont-iteráció meghívása ---
    try
        [x_sol, iterations] = fixed_point_nd_robust(G, x0, 1e-12, 100);
        
        % --- Eredmények kiírása ---
        fprintf('Megtalált többváltozós fixpont:\n');
        fprintf('x1 = %.12f\n', x_sol(1));
        fprintf('x2 = %.12f\n', x_sol(2));
        fprintf('Szükséges iterációk száma: %d\n', iterations);
        
        % Ellenőrzés: G(x) - x elemeinek közel nullának kell lenniük
        residual = G(x_sol) - x_sol;
        fprintf('Maradékvektor (residual) normája: %e\n', norm(residual, inf));
        
    catch ME
        fprintf('Hiba történt: %s\n', ME.message);
    end
end

function [x, k] = fixed_point_nd_robust(G, x0, tol, max_iter)
% FIXED_POINT_ND_ROBUST Többváltozós fixpont-iteráció ellenőrzésekkel.
    if nargin < 3, tol = 1e-12; end
    if nargin < 4, max_iter = 200; end
    
    x = x0(:); % Oszlopvektor kényszerítése
    
    for k = 1:max_iter
        xn = G(x);
        
        % Leállási feltétel a végtelen-norma alapján
        if norm(xn - x, inf) < tol
            x = xn; 
            return; 
        end
        
        % Védelem a divergenciából eredő túlcsordulások (Inf, NaN) ellen
        if any(isnan(xn)) || any(isinf(xn))
            error('Az egyenletrendszer divergál! (NaN vagy Inf érték lépett fel a(z) %d. lépésben).', k);
        end
        
        x = xn;
    end
    
    warning('A módszer elérte a maximális iterációs számot (%d) anélkül, hogy teljesen konvergált volna.', max_iter);
end