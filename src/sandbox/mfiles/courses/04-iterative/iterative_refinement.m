function [x, k] = iterative_refinement(A, b, tol, max_iter)
% ITERATIVE_REFINEMENT  Lineáris egyenletrendszer megoldásának finomítása a reziduális vektor alapján.
%   [x, k] = iterative_refinement(A, b, tol, max_iter)
%   A:        Együttható-mátrix (n x n)
%   b:        Jobb oldali oszlopvektor (n x 1)
%   tol:      Konvergencia-tolerancia a korrekció normájára (alapértelmezett: 1e-12)
%   max_iter: Maximális iterációszám (alapértelmezett: 20)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        iterative_refinement_demo();
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 3 || isempty(tol),      tol = 1e-12; end
    if nargin < 4 || isempty(max_iter), max_iter = 20; end

    % 1. lépés: Kezdeti (esetleg kerekítési hibákkal terhelt) megoldás kiszámítása
    x = A \ b;
    
    for k = 1:max_iter
        % 2. lépés: A maradékvektor (reziduum) meghatározása
        r = b - A * x;           
        
        % 3. lépés: A korrekciós hiba egyenletének megoldása (A * d = r)
        d = A \ r;             
        
        % 4. lépés: A megoldás frissítése a korrekciós vektorral
        x = x + d;
        
        % Leállási kritérium: ha a korrekció mértéke elhanyagolhatóvá válik
        if norm(d, inf) < tol
            return;
        end
    end
    
    warning('A finomítás elérte a maximális (%d) iterációt a megadott tolerancia nélkül!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function iterative_refinement_demo()
    clc;
    fprintf('=== Iteratív Javítás (Iterative Refinement) Teszt ===\n\n');

    % Tesztadatok
    A = [ 2  1 -1; 
         -3 -1  2; 
         -2  1  2]; 
    b = [8; -11; -3];
    
    fprintf('Együttható-mátrix (A):\n');
    disp(A);
    fprintf('Jobb oldali vektor (b):\n');
    disp(b');

    % Finomított iteráció futtatása
    [x_refined, k] = iterative_refinement(A, b);
    
    % Alapértelmezett direkt megoldás összehasonlításképp
    x_direct = A \ b;

    fprintf('Kezdeti direkt megoldás (A\\b):\n');
    fprintf('x = [ ');
    fprintf('%g ', x_direct);
    fprintf(']\n\n');

    fprintf('Finomított megoldás %d javítási lépés után:\n', k);
    fprintf('x = [ ');
    fprintf('%g ', x_refined);
    fprintf(']\n\n');
    
    % Elméleti pontos megoldás: [2; 3; -1]
    x_exact = [2; 3; -1];
    fprintf('Elméleti pontos megoldás:\n');
    fprintf('x = [ ');
    fprintf('%g ', x_exact);
    fprintf(']\n\n');
    
    fprintf('Abszolút hiba a pontos megoldáshoz képest: %e\n', norm(x_refined - x_exact, inf));
end