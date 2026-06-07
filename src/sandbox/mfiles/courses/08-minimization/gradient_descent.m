function [x, k] = gradient_descent(grad, x0, alpha, tol, max_iter)
% GRADIENT_DESCENT  Konstans lépésközű gradiens módszer (Gradient Descent).
%   [x, k] = gradient_descent(grad, x0, alpha, tol, max_iter)
%   grad:     A minimalizálandó függvény gradiensét visszaadó függvényhandle (pl. @(v) [2*v(1); 2*v(2)])
%   x0:       Kezdőpont (vektor)
%   alpha:    Lépésköz / tanulási ráta (alapértelmezett: 0.1)
%   tol:      Konvergencia-tolerancia a gradiens normájára (alapértelmezett: 1e-8)
%   max_iter: Maximális iterációszám (alapértelmezett: 100000)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        gradient_descent_demo();
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 3 || isempty(alpha),    alpha = 0.1; end
    if nargin < 4 || isempty(tol),      tol = 1e-8; end
    if nargin < 5 || isempty(max_iter), max_iter = 100000; end
    
    % Biztosítjuk, hogy oszlopvektorral dolgozzunk
    x = x0(:);
    
    for k = 1:max_iter
        g = grad(x);
        
        % Leállási kritérium: ha a gradiens hossza kellően kicsi (stacionárius pont)
        if norm(g) < tol
            return;
        end
        
        % Lépés a negatív gradiens (legmeredekebb leereszkedés) irányába
        x = x - alpha * g;
    end
    
    warning('A módszer elérte a maximális (%d) iterációszámot konvergencia nélkül!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function gradient_descent_demo()
    clc;
    fprintf('=== Gradiens Módszer (Gradient Descent) Teszt ===\n\n');

    % Célfüggvény: f(x,y) = (x-1)^2 + (y-2)^2
    % Ennek a gradiense: grad(v) = [2*(x-1); 2*(y-2)]
    % Globális minimumhely: [1; 2]
    grad_f = @(v) [2 * (v(1) - 1); 
                   2 * (v(2) - 2)];
    
    x0 = [0; 0]; % Kezdőpont
    alpha = 0.1; % Lépésköz
    tol = 1e-8;

    fprintf('Tesztfüggvény: f(x,y) = (x-1)^2 + (y-2)^2\n');
    fprintf('Kezdőpont: [%g; %g]\n', x0(1), x0(2));
    fprintf('Lépésköz (alpha): %g\n\n', alpha);

    % Optimalizálás futtatása
    [x_opt, k] = gradient_descent(grad_f, x0, alpha, tol);

    fprintf('Eredmény %d lépés után:\n', k);
    fprintf('x_opt = [ ');
    fprintf('%g ', x_opt);
    fprintf(']\n\n');
    
    fprintf('Elméleti minimumhely: [ 1 2 ]\n');
    fprintf('Abszolút hiba: %e\n', norm(x_opt - [1; 2]));
end