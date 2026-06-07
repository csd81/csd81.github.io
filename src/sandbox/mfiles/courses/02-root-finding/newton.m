function [x, k] = newton(f, df, x0, tol, max_iter)
% NEWTON  Gyökkeresés Newton–Raphson-módszerrel (érintőmódszer).
%   [x, k] = newton(f, df, x0, tol, max_iter)
%   f:        A függvényhandle, aminek a gyökét keressük (f(x) = 0)
%   df:       A függvény deriváltja (szintén függvényhandle)
%   x0:       Kezdőpont (kezdeti tipp)
%   tol:      Konvergencia-tolerancia a függvényértékre (alapértelmezett: 1e-12)
%   max_iter: Maximális iterációszám (alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        newton_demo();
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 4 || isempty(tol),      tol = 1e-12; end
    if nargin < 5 || isempty(max_iter), max_iter = 100; end
    
    x = x0;
    for k = 1:max_iter
        fx = f(x);
        
        % Leállási kritérium: ha a függvényérték elég közel van a nullához
        if abs(fx) < tol
            return; 
        end
        
        % Newton-lépés: x_{k+1} = x_k - f(x_k) / f'(x_k)
        denom = df(x);
        if abs(denom) < 1e-15
            error('A derivált értéke túl közel van a nullához a(z) %g pontban. A módszer elakadt!', x);
        end
        
        x = x - fx / denom;
    end
    
    warning('A módszer elérte a maximális (%d) iterációszámot a kívánt tolerancia nélkül!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function newton_demo()
    clc;
    fprintf('=== Newton–Raphson-módszer Teszt ===\n\n');

    % Tesztfeladat: f(x) = x^2 - 2 = 0  -> Pozitív gyök: x = sqrt(2)
    f = @(x) x.^2 - 2;
    df = @(x) 2*x;
    x0 = 1.0; % Kezdőpont

    fprintf('Függvény:  f(x) = x^2 - 2\n');
    fprintf('Derivált:  f''(x) = 2x\n');
    fprintf('Kezdőpont: x0 = %g\n\n', x0);

    % Gyökkeresés futtatása
    [x_root, k] = newton(f, df, x0);
    
    exact = sqrt(2);

    fprintf('Megtalált gyök %d iteráció után:\n', k);
    fprintf('  x_root = %.15f\n', x_root);
    fprintf('  Gyári sqrt(2):   %.15f\n', exact);
    fprintf('  Abszolút hiba:   %e\n', abs(exact - x_root));
end