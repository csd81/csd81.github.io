function [x, k] = sr1(f, grad, x0, tol, max_iter)
% SR1  Szimmetrikus rang-1-es (Symmetric Rank-One) kvázi-Newton minimalizálás.
%   [x, k] = sr1(f, grad, x0, tol, max_iter)
%   Az inverz Hesse-mátrix közvetlen közelítését frissíti egy rang-1-es mátrixszal.
%
%   f:        A minimalizálandó célfüggvény (függvényhandle, pl. @(v) v(1)^2 + v(2)^2)
%   grad:     A célfüggvény gradiense (függvényhandle, oszlopvektort kell visszaadnia)
%   x0:       Kezdőpont vektora
%   tol:      Konvergencia-tolerancia a gradiens normájára (alapértelmezett: 1e-8)
%   max_iter: Maximális iterációszám (alapértelmezett: 200)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        sr1_demo();
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 4 || isempty(tol),      tol = 1e-8; end
    if nargin < 5 || isempty(max_iter), max_iter = 200; end
    
    x = x0(:); 
    n = numel(x); 
    
    % H az inverz Hesse-mátrix közelítése (kezdetben az egységmátrix)
    H = eye(n); 
    g = grad(x);
    
    for k = 1:max_iter
        % Leállási kritérium: ha a gradiens hossza kellően kicsi
        if norm(g) < tol
            return; 
        end
        
        % Kvázi-Newton irány meghatározása
        d = -H * g;
        
        % Biztonsági lépés (safeguard): Mivel az SR1 frissítés nem garantálja a 
        % pozitív definitség megőrzését, ha nem ereszkedési irányt kapunk (g'*d >= 0),
        % újraindítjuk a mátrixot az egységmátrixszal (legmeredekebb leereszkedés).
        if g'*d >= 0
            H = eye(n); 
            d = -g; 
        end
        
        % Visszalépéses (backtracking) vonalkeresés az Armijo-feltétel alapján
        t = 1; 
        fx = f(x); 
        gd = g'*d;
        while f(x + t*d) > fx + 1e-4 * t * gd
            t = t / 2; 
        end
        
        % Új pont és gradiens kiszámítása
        s = t * d; 
        x_new = x + s; 
        g_new = grad(x_new); 
        y = g_new - g;
        
        % A szekáns feltétel maradékvektora az SR1-hez
        w = s - H * y; 
        wy = w' * y;                         
        
        % Csak akkor frissítünk, ha a nevező nem túl pici (numerikus stabilitás)
        if abs(wy) > 1e-12
            H = H + (w * w') / wy; % SR1 inverz frissítési formula (rang-1)
        end
        
        x = x_new; 
        g = g_new;
    end
    
    warning('A módszer elérte a maximális (%d) iterációt a megadott tolerancia nélkül!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function sr1_demo()
    clc;
    fprintf('=== SR1 (Symmetric Rank-One) Kvázi-Newton Teszt ===\n\n');

    % Tesztfeladat: f(x,y) = (x-1)^2 + 5*(y-2)^2
    % Globális minimumhely: [1; 2], Minimumérték: 0
    f = @(v) (v(1) - 1)^2 + 5 * (v(2) - 2)^2;
    grad = @(v) [2 * (v(1) - 1); 
                 10 * (v(2) - 2)];
             
    x0 = [0; 0]; % Kezdőpont

    fprintf('Célfüggvény: f(x,y) = (x-1)^2 + 5*(y-2)^2\n');
    fprintf('Kezdőpont:   x0 = [%g; %g]\n\n', x0(1), x0(2));

    % Optimalizálás futtatása
    [x_opt, k] = sr1(f, grad, x0);

    fprintf('Eredmény %d lépés után:\n', k);
    fprintf('  x_opt = [ ');
    fprintf('%g ', x_opt);
    fprintf(']\n\n');
    
    fprintf('Függvényérték a talált pontban: %e\n', f(x_opt));
    fprintf('Gradiens normája (inf-norma):   %e\n', norm(grad(x_opt), inf));
end