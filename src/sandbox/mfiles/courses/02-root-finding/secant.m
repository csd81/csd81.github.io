function [x1, k] = secant(f, x0, x1, tol, max_iter)
% SECANT  Gyökkeresés nemlineáris egyenletekre szelőmódszerrel (deriváltmentes).
%   [x1, k] = secant(f, x0, x1, tol, max_iter)
%   f:        A függvényhandle, aminek a gyökét keressük (f(x) = 0)
%   x0, x1:   A két kezdeti közelítő pont (nem kötelező közrefogniuk a gyököt)
%   tol:      Konvergencia-tolerancia a lépéstávolságra (alapértelmezett: 1e-12)
%   max_iter: Maximális iterációszám (alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 4 || isempty(tol),      tol = 1e-12; end
    if nargin < 5 || isempty(max_iter), max_iter = 100; end
    
    f0 = f(x0); 
    f1 = f(x1);
    
    for k = 1:max_iter
        % Ha a két függvényérték túl közel van egymáshoz, a szelő vízszintessé válik
        if abs(f1 - f0) < 1e-15
            error('A függvényértékek különbsége túl pici a(z) %d. lépésben. Osztás nullával hiba (a szelő vízszintes)!', k);
        end
        
        % Szelőmódszer iterációs lépése: az x0 és x1 pontokon átmenő egyenes zérushelye
        x2 = x1 - f1 * (x1 - x0) / (f1 - f0);
        
        % Leállási kritérium: ha az új pont elmozdulása a tolerancia alatt van
        if abs(x2 - x1) < tol
            x1 = x2; 
            return; 
        end
        
        % Pontok léptetése a következő iterációhoz
        x0 = x1; 
        f0 = f1; 
        x1 = x2; 
        f1 = f(x2);
    end
    
    warning('A módszer elérte a maximális (%d) iterációszámot a kívánt tolerancia nélkül!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Szelőmódszer Teszt ===\n\n');

    % Tesztfeladat: f(x) = x^2 - 2 = 0  -> Pozitív gyök: x = sqrt(2)
    f = @(x) x.^2 - 2;
    x0 = 1.0; % Első kezdőpont
    x1 = 2.0; % Második kezdőpont

    fprintf('Függvény:    f(x) = x^2 - 2\n');
    fprintf('Kezdőpontok: x0 = %g, x1 = %g\n\n', x0, x1);

    % Gyökkeresés futtatása
    [x_root, k] = secant(f, x0, x1);
    
    exact = sqrt(2);

    fprintf('Megtalált gyök %d iteráció után:\n', k);
    fprintf('  x_root = %.15f\n', x_root);
    fprintf('  Gyári sqrt(2):   %.15f\n', exact);
    fprintf('  Abszolút hiba:   %e\n', abs(exact - x_root));
end