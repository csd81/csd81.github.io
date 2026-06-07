function [x, k] = psb(f, grad, x0, tol, max_iter)
% PSB  Powell-Symmetric-Broyden kvázi-Newton minimalizálás (inverz Hesse-mátrix alak).
%   [x, k] = psb(f, grad, x0, tol, max_iter)
%   Az inverz Hesse-mátrix közelítését frissíti szimmetrikus, de nem feltétlenül
%   pozitív definit módon (ezért szükséges a beépített safeguard irány-ellenőrzés).
%
%   f:        A minimalizálandó célfüggvény (függvényhandle)
%   grad:     A célfüggvény gradiense (függvényhandle, oszlopvektort kell visszaadnia)
%   x0:       Kezdőpont vektora
%   tol:      Konvergencia-tolerancia a gradiens normájára (alapértelmezett: 1e-8)
%   max_iter: Maximális iterációszám (alapértelmezett: 200)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        psb_demo();
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
        % Leállási kritérium: ha a gradiens hossza a tolerancia alatt van
        if norm(g) < tol
            return; 
        end
        
        % Kvázi-Newton irány meghatározása
        d = -H * g;
        
        % Biztonsági lépés (safeguard): Mivel a PSB frissítés (az SR1-hez hasonlóan)
        % nem garantálja a pozitív definitség megőrzését, ha nem ereszkedési irányt 
        % kapunk (g'*d >= 0), újraindítjuk a mátrixot az egységmátrixszal.
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
        
        % Szekáns feltétel maradékvektora
        w = s - H * y; 
        yy = y' * y;                         
        
        % Frissítés csak akkor, ha az elmozdulás gradiense nem elhanyagolható
        if yy > 1e-12
            % PSB inverz frissítési formula (megőrzi a mátrix szimmetriáját)
            H = H + (w * y' + y * w') / yy - ((y' * w) / yy^2) * (y * y');
        end
        
        x = x_new; 
        g = g_new;
    end
    
    warning('A módszer elérte a maximális (%d) iterációt a megadott tolerancia nélkül!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function psb_demo()
    clc;
    fprintf('=== Powell-Symmetric-Broyden (PSB) Kvázi-Newton Teszt ===\n\n');

    % Tesztfeladat: f(x,y) = (x-1)^2 + 5*(y-2)^2
    % Globális minimumhely: [1; 2], Minimumérték: 0
    f = @(v) (v(1) - 1)^2 + 5 * (v(2) - 2)^2;
    grad = @(v) [2 * (v(1) - 1); 
                 10 * (v(2) - 2)];
             
    x0 = [0; 0]; % Kezdőpont

    fprintf('Célfüggvény: f(x,y) = (x-1)^2 + 5*(y-2)^2\n');
    fprintf('Kezdőpont:   x0 = [%g; %g]\n\n', x0(1), x0(2));

    % Optimalizálás futtatása
    [x_opt, k] = psb(f, grad, x0);

    fprintf('Eredmény %d lépés után:\n', k);
    fprintf('  x_opt = [ ');
    fprintf('%g ', x_opt);
    fprintf(']\n\n');
    
    fprintf('Függvényérték a talált pontban: %e\n', f(x_opt));
    fprintf('Gradiens normája (inf-norma):   %e\n', norm(grad(x_opt), inf));
end