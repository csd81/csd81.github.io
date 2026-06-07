function [x, k] = gauss_seidel(A, b, x0, tol, max_iter)
% GAUSS_SEIDEL  Lineáris egyenletrendszer megoldása Gauss–Seidel-iterációval.
%   [x, k] = gauss_seidel(A, b, x0, tol, max_iter)
%   A:        Együttható-mátrix (n x n)
%   b:        Jobb oldali oszlopvektor (n x 1)
%   x0:       Kezdővektor (alapértelmezett: nullvektor)
%   tol:      Konvergencia-tolerancia (alapértelmezett: 1e-10)
%   max_iter: Maximális iterációszám (alapértelmezett: 200)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        gauss_seidel_demo();
        return;
    end

    % Alapértelmezett értékek beállítása
    if nargin < 3 || isempty(x0),       x0 = zeros(size(b)); end
    if nargin < 4 || isempty(tol),      tol = 1e-10; end
    if nargin < 5 || isempty(max_iter), max_iter = 200; end

    n = numel(b);
    x = x0;
    
    for k = 1:max_iter
        x_old = x;
        
        for i = 1:n
            % s = b_i - sum_{j < i} A_{ij}*x_j^(k+1) - sum_{j > i} A_{ij}*x_j^(k)
            % A MATLAB vektorizáció miatt ez egyetlen gyors sor:
            s = b(i) - A(i, 1:i-1) * x(1:i-1) - A(i, i+1:n) * x(i+1:n);
            
            % Új érték azonnali beírása (a következő i-knél már ez frissül)
            x(i) = s / A(i, i);
        end
        
        % Konvergenciakritérium (maximális eltérés normája)
        if norm(x - x_old, inf) <= tol
            return;
        end
    end
    
    warning('A módszer nem konvergált %d iteráció alatt!', max_iter);
end

% --- Helyi függvény a demó futtatásához ---
function gauss_seidel_demo()
    clc;
    fprintf('=== Gauss–Seidel-iteráció Teszt ===\n\n');

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
    [x, k] = gauss_seidel(A, b);
    
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