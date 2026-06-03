function [x, k] = newton_system(F, J, x0, tol, max_iter)
% NEWTON_SYSTEM  Nemlineáris egyenletrendszer megoldása többváltozós Newton-módszerrel.
%   [x, k] = newton_system(F, J, x0, tol, max_iter)
%   F:        Az egyenletrendszer függvénye (vektort ad vissza, F(x) = 0)
%   J:        A függvény Jacobi-mátrixa (függvényhandle, ami egy n x n-es mátrixot ad vissza)
%   x0:       Kezdőpont vektora (n x 1)
%   tol:      Konvergencia-tolerancia a függvényérték inf-normájára (alapértelmezett: 1e-12)
%   max_iter: Maximális iterációszám (alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 4 || isempty(tol),      tol = 1e-12; end
    if nargin < 5 || isempty(max_iter), max_iter = 100; end
    
    % Biztosítjuk, hogy oszlopvektorral dolgozzunk
    x = x0(:);
    
    for k = 1:max_iter
        Fx = F(x);
        
        % Leállási kritérium: ha a legnagyobb komponensű hiba is a tolerancia alatt van
        if norm(Fx, inf) < tol
            return; 
        end
        
        % Newton-lépés több dimenzióban: x_{k+1} = x_k - J(x_k)^{-1} * F(x_k)
        % A \ (backslash) operátor hatékonyan és numerikusan stabilan oldja meg a J(x) * d = F(x) rendszert
        x = x - J(x) \ Fx;
    end
    
    warning('A módszer elérte a maximális (%d) iterációszámot a kívánt tolerancia nélkül!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Többváltozós Newton-módszer Teszt ===\n\n');

    % Tesztfeladat: 
    % f1(x, y) = x^2 + y^2 - 4 = 0  (egy 2 sugarú origó középpontú kör)
    % f2(x, y) = x * y - 1 = 0      (egy hiperbola)
    F = @(v) [v(1)^2 + v(2)^2 - 4; 
              v(1)*v(2) - 1];
          
    % A hozzá tartozó Jacobi-mátrix (parciális deriváltak mátrixa):
    % J = [ df1/dx, df1/dy ]
    %     [ df2/dx, df2/dy ]
    J = @(v) [2*v(1), 2*v(2); 
              v(2),   v(1)];
          
    x0 = [2; 0.5]; % Kezdőpont közel a várt megoldáshoz

    fprintf('Egyenletrendszer:\n');
    fprintf('  x^2 + y^2 = 4\n');
    fprintf('  x * y = 1\n');
    fprintf('Kezdőpont: x0 = [%g; %g]\n\n', x0(1), x0(2));

    % Iteráció futtatása
    [x_sol, k] = newton_system(F, J, x0);

    fprintf('Megtalált megoldásvektor %d lépés után:\n', k);
    fprintf('  x = %.15f\n', x_sol(1));
    fprintf('  y = %.15f\n\n', x_sol(2));
    
    % Reziduum ellenőrzése (mennyire közelíti a nullvektort)
    residual = F(x_sol);
    fprintf('Függvényértékek a talált pontban (F(x) hiba):\n');
    fprintf('  f1(x,y) = %e\n', residual(1));
    fprintf('  f2(x,y) = %e\n', residual(2));
end