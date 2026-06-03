function [x, k] = jacobi(A, b, x0, tol, max_iter)
% JACOBI  Lineáris egyenletrendszer megoldása Jacobi-iterációval.
%   [x, k] = jacobi(A, b, x0, tol, max_iter)
%   A:        Együttható-mátrix (n x n)
%   b:        Jobb oldali oszlopvektor (n x 1)
%   x0:       Kezdővektor (alapértelmezett: nullvektor)
%   tol:      Konvergencia-tolerancia (alapértelmezett: 1e-10)
%   max_iter: Maximális iterációszám (alapértelmezett: 200)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    % Alapértelmezett értékek beállítása
    if nargin < 3 || isempty(x0),       x0 = zeros(size(b)); end
    if nargin < 4 || isempty(tol),      tol = 1e-10; end
    if nargin < 5 || isempty(max_iter), max_iter = 200; end

    % Az iterációs mátrix és a kondicionált jobb oldal előállítása
    D = diag(diag(A));            % Diagonális mátrix (D)
    T = eye(numel(b)) - D \ A;    % Iterációs mátrix: T = I - D^{-1} * A
    c = D \ b;                    % Vektor: c = D^{-1} * b

    x = x0;
    for k = 1:max_iter
        % x^{(k+1)} = T * x^{(k)} + c
        x_new = T * x + c;        
        
        % Konvergenciakritérium (maximális eltérés normája)
        if norm(x_new - x, inf) <= tol
            x = x_new; 
            return;
        end
        x = x_new;
    end
    
    warning('A módszer nem konvergált %d iteráció alatt!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Jacobi-iteráció Teszt ===\n\n');

    % Szigorúan diagonálisan domináns mátrix (garantált a konvergencia)
    A = [ 4  2 -1; 
          5 -10  2; 
         -2  3 -7];
    b = [9; 8; 3];
    
    fprintf('Együttható-mátrix (A):\n');
    disp(A);
    fprintf('Jobb oldali vektor (b):\n');
    disp(b');

    % Iteráció futtatása
    [x, k] = jacobi(A, b);
    
    % Pontos megoldás ellenőrzése MATLAB beépített operátorral (\)
    x_exact = A \ b;

    fprintf('Eredmény %d iteráció után:\n', k);
    fprintf('x = [ ');
    fprintf('%g ', x);
    fprintf(']\n\n');
    
    fprintf('Pontos megoldás (A\\b):\n');
    fprintf('x = [ ');
    fprintf('%g ', x_exact);
    fprintf(']\n\n');
    
    fprintf('Maximális hiba: %e\n', norm(x - x_exact, inf));
end