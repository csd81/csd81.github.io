function dfp()
    % --- Tesztfüggvény és gradiense ---
    % f(x, y) = (x-1)^2 + 5*(y-2)^2
    f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
    grad = @(v) [2*(v(1)-1); 
                 10*(v(2)-2)];
             
    x0 = [0; 0]; % Kezdőpont
    
    % --- DFP Optimalizálás ---
    [x_opt, iterations] = dfp_robust(f, grad, x0, 1e-8, 200);
    
    % --- Eredmények kiírása ---
    fprintf('Megtalált minimumhely: [x1, x2] = [%.6f, %.6f]\n', x_opt(1), x_opt(2));
    fprintf('Függvényérték a minimumpontban: %e\n', f(x_opt));
    fprintf('Szükséges iterációk száma: %d\n', iterations);
end

function [x, k] = dfp_robust(f, grad, x0, tol, max_iter)
% DFP_ROBUST Davidon-Fletcher-Powell kvázi-Newton minimalizálás.
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    
    x = x0(:); 
    n = numel(x); 
    H = eye(n);        % Kezdeti inverz Hesse-mátrix közelítés (egységmátrix)
    g = grad(x);       % Kezdeti gradiens
    
    c1 = 1e-4;         % Armijo paraméter
    
    for k = 1:max_iter
        % Leállási feltétel: ha a gradiens normája a tolerancia alatt van
        if norm(g) < tol
            return; 
        end
        
        d = -H * g;    % DFP keresési irány
        
        % Biztonsági lépés: Ha az irány nem leereszkedő, újraindítjuk a mátrixot
        if g' * d >= 0
            H = eye(n);
            d = -g;
        end
        
        % --- Backtracking vonalkeresés (Armijo-szabály) ---
        t = 1; 
        fx = f(x); 
        gd = g' * d;
        
        while f(x + t*d) > fx + c1 * t * gd
            t = t / 2;
            if t < 1e-15 % Biztonsági fék, ha a lépésköz túlságosan lecsökkenne
                break;
            end
        end
        if t < 1e-15   % a vonalkeresés elbukott -> ne rontsuk el H-t egy zajos lépéssel
            warning('A vonalkeresés nem talált csökkenő lépést (%d. iteráció).', k);
            return;
        end

        % --- Változók frissítése ---
        s = t * d;
        x_new = x + s; 
        g_new = grad(x_new); 
        
        y = g_new - g; 
        sy = s' * y;
        
        % DFP frissítés (csak ha mindkét nevező pozitív: görbületi feltétel + y'*H*y)
        if sy > 1e-12
            Hy = H * y;
            yHy = y' * Hy;
            if yHy > 1e-12
                % DFP inverz frissítési formula
                H = H + (s * s') / sy - (Hy * Hy') / yHy;
            end
        end
        
        x = x_new; 
        g = g_new;
    end
    
    warning('A módszer elérte a maximális iterációs számot (%d).', max_iter);
end