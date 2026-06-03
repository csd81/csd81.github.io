function steepest()
    % --- Tesztfüggvény és gradiense ---
    % f(x, y) = (x-1)^2 + 5*(y-2)^2
    f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
    grad = @(v) [2*(v(1)-1); 
                 10*(v(2)-2)];
             
    x0 = [0; 0]; % Kezdőpont
    
    % --- Legmeredekebb leereszkedés futtatása ---
    [x_opt, iterations] = steepest_descent_robust(f, grad, x0, 1e-8, 1000);
    
    % --- Eredmények kiírása ---
    fprintf('Megtalált minimumhely: [x1, x2] = [%.6f, %.6f]\n', x_opt(1), x_opt(2));
    fprintf('Függvényérték a minimumpontban: %e\n', f(x_opt));
    fprintf('Szükséges iterációk száma: %d\n', iterations);
end

function [x, k] = steepest_descent_robust(f, grad, x0, tol, max_iter)
% STEEPEST_DESCENT_ROBUST Legmeredekebb leereszkedés Armijo vonalkereséssel.
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 1000; end
    
    x = x0(:); % Oszlopvektor kényszerítése
    c1 = 1e-4; % Armijo elvárt csökkenési konstans
    
    for k = 1:max_iter
        g = grad(x);
        
        % Leállási feltétel: ha a gradiens normája elég kicsi
        if norm(g) < tol
            return; 
        end
        
        d = -g;    % Keresési irány (negatív gradiens)
        t = 1;     % Kezdeti lépésköz
        fx = f(x); 
        gd = g'*d; % Iránymenti derivált (mindig negatív, ha g ~= 0)
        
        % --- Backtracking vonalkeresés (Armijo-szabály) ---
        while f(x + t*d) > fx + c1 * t * gd
            t = t / 2;
            if t < 1e-15 % Biztonsági leállás a végtelen ciklus elkerülésére
                break;
            end
        end
        
        % Új pont kiszámítása
        x = x + t * d;
    end
    
    warning('A módszer elérte a maximális iterációs számot (%d).', max_iter);
end