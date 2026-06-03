function simplex_basic()
    % --- Tesztfüggvény (Gradiens nélkül) ---
    % f(x, y) = (x-1)^2 + (y-2)^2
    f = @(v) (v(1)-1)^2 + (v(2)-2)^2;
    
    x0 = [0; 0]; % Kezdőpont
    
    % --- Szimplex optimalizálás futtatása ---
    x_opt = simplex_basic_robust(f, x0, 1.0, 1e-8, 500);
    
    % --- Eredmények kiírása ---
    fprintf('Megtalált minimumhely: [x1, x2] = [%.6f, %.6f]\n', x_opt(1), x_opt(2));
    fprintf('Függvényérték a minimumpontban: %e\n', f(x_opt));
end

function x = simplex_basic_robust(f, x0, step, tol, max_iter)
% SIMPLEX_BASIC_ROBUST Rögzített alakú szimplex (Nelder-Mead variáns) minimalizálás.
    if nargin < 3, step = 1; end
    if nargin < 4, tol = 1e-8; end
    if nargin < 5, max_iter = 500; end
    
    x0 = x0(:)'; 
    n = numel(x0);
    
    % (n+1) x n méretű csúcsmátrix inicializálása
    P = [x0; ones(n,1)*x0 + step*eye(n)];          
    fv = zeros(n+1, 1);
    
    % Kezdeti függvényértékek meghatározása
    for i = 1:n+1
        fv(i) = f(P(i,:)'); 
    end
    
    for it = 1:max_iter
        [~, iw] = max(fv); % Legrosszabb (worst) csúcs indexe
        [~, ib] = min(fv); % Legjobb (best) csúcs indexe
        
        % Vektorizált méretszámítás (for ciklus kiváltása mátrixkivonással)
        % Kiszámítjuk a legjobb csúcstól való távolságok maximumát
        sz = max(sqrt(sum((P - P(ib,:)).^2, 2)));
        
        % Leállási feltétel ellenőrzése
        if sz < tol
            break; 
        end
        
        % A legrosszabb csúcson kívüli többi pont súlypontja (Centroid)
        c = (sum(P, 1) - P(iw, :)) / n;              
        
        % Tükrözés (Reflection) lépés
        xr = c + (c - P(iw, :)); 
        fr = f(xr');       
        
        if fr < fv(iw)
            % Ha jobb, mint az eddigi legrosszabb, lecseréljük
            P(iw, :) = xr; 
            fv(iw) = fr;
        else                                        
            % Különben zsugorítunk (Shrink) a legjobb irányába
            for i = 1:n+1
                if i ~= ib
                    P(i, :) = P(ib, :) + 0.5 * (P(i, :) - P(ib, :)); 
                    fv(i) = f(P(i, :)'); 
                end
            end
        end
    end
    
    % Visszaadjuk a ciklus utáni abszolút legjobb pontot oszlopvektorként
    [~, ib] = min(fv); 
    x = P(ib, :)';
end