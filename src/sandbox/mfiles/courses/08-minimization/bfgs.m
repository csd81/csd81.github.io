function bfgs()
    % --- Tesztfüggvény és gradiense ---
    % f(x, y) = (x-1)^2 + 5*(y-2)^2
    f = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
    grad = @(v) [2*(v(1)-1); 
                 10*(v(2)-2)];
             
    x0 = [0; 0]; % Kezdőpont
    
    % --- BFGS Optimalizálás ---
    [x_opt, iterations] = bfgs_robust(f, grad, x0, 1e-8, 200);
    
    % --- Eredmények kiírása ---
    fprintf('Megtalált minimumhely: [x1, x2] = [%.6f, %.6f]\n', x_opt(1), x_opt(2));
    fprintf('Függvényérték a minimumpontban: %e\n', f(x_opt));
    fprintf('Szükséges iterációk száma: %d\n', iterations);
end

function [x, k] = bfgs_robust(f, grad, x0, tol, max_iter)
% BFGS_ROBUST Kvázi-Newton minimalizálás Armijo vonalkereséssel.
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 200; end
    
    x = x0(:); 
    n = numel(x); 
    H = eye(n);        % Kezdeti inverz Hesse-mátrix közelítés (egységmátrix)
    g = grad(x);       % Kezdeti gradiens
    
    c1 = 1e-4;         % Armijo paraméter
    
    for k = 1:max_iter
        % Leállási feltétel: ha a gradiens normája elég kicsi
        if norm(g) < tol
            return; 
        end
        
        d = -H * g;    % Kvázi-Newton keresési irány
        
        % --- Backtracking vonalkeresés (Armijo-szabály) ---
        t = 1; 
        fx = f(x); 
        gd = g' * d;
        
        % Ellenőrizzük, hogy a d irány valóban csökkenést biztosít-e
        if gd >= 0
            % Ha numerikus hiba miatt nem csökkenő az irány, visszaállunk a legmeredekebb leereszkedésre
            H = eye(n);
            d = -g;
            gd = g' * d;
        end
        
        while f(x + t*d) > fx + c1 * t * gd
            t = t / 2;
            if t < 1e-15 % Biztonsági leállás, ha a lépésköz túl kicsivé válna
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
        
        % BFGS Frissítés (csak ha a curvature condition teljesül)
        if sy > 1e-12
            rho = 1 / sy; 
            I = eye(n);
            H = (I - rho*(s*y')) * H * (I - rho*(y*s')) + rho*(s*s');
        end
        
        x = x_new; 
        g = g_new;
    end
    
    warning('A maximális iterációs szám (%d) elérve.', max_iter);
end