function x = gauss(A, b)
% GAUSS  Lineáris egyenletrendszer megoldása Gauss-eliminációval (visszahelyettesítéssel).
%   x = gauss(A, b)
%   A: Együttható-mátrix (n x n)
%   b: Jobb oldali oszlopvektor (n x 1)
%   x: A számított megoldásvektor (1 x n vagy n x 1)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        x_demo = gauss_demo();
        if nargout > 0, x = x_demo; end
        return;
    end

    % Dimenziók ellenőrzése
    sA = size(A);
    sb = size(b);
    if sA(1) ~= sA(2) || sA(1) ~= sb(1) || sb(2) ~= 1
        error('Rossz dimenziók! A mátrixnak négyzetesnek, a b-nek oszlopvektornak kell lennie.');
    end
    
    n = sA(1);
    % Kibővített mátrix létrehozása [A | b]
    A = [A, b];
    
    fprintf('0. lépés (Kezdeti kibővített mátrix):\n');
    disp(A)
    
    % --- 1. Egyenes elimináció (Felső háromszög alakra hozás) ---
    for k = 1:n-1
        for i = k+1:n
            if A(k,k) == 0
                error('Nem hajtható végre az elimináció: a főelem nulla a(z) %d. oszlopban! (Pivotálás szükséges lenne)', k);
            end
            
            % Multiplikátor kiszámítása
            l = A(i,k) / A(k,k);
            
            % Sor transzformációja
            A(i,:) = A(i,:) - l * A(k,:);
        end
        fprintf('A(z) %d. eliminációs lépés után:\n', k);
        disp(A)
    end
    
    % --- 2. Visszahelyettesítés (Megoldás kiszámítása hátulról előre) ---
    x = zeros(n, 1); % Inicializáljuk a megoldásvektort oszlopvektorként
    
    if A(n,n) == 0
        error('A rendszer nem oldható meg egyértelműen (a kapott mátrix szinguláris).');
    end
    
    x(n) = A(n, n+1) / A(n, n);
    for i = n-1:-1:1
        x(i) = A(i, n+1);
        for j = i+1:n
            x(i) = x(i) - A(i, j) * x(j);
        end
        x(i) = x(i) / A(i, i);
    end
    
    % Konvenciók miatt transzponáljuk a kiíráshoz, hogy sorvektorként jelenjen meg
    disp('A megoldás:')
    disp(x')
end

% --- Helyi függvény a demó futtatásához ---
function x_sol = gauss_demo()
    clc;
    fprintf('=== Gauss-elimináció Teszt ===\n\n');

    % Teszt egyenletrendszer
    A = [ 2  1 -1; 
         -3 -1  2; 
         -2  1  2]; 
    b = [8; -11; -3];
    
    fprintf('Együttható-mátrix (A):\n');
    disp(A);
    fprintf('Jobb oldali vektor (b):\n');
    disp(b);

    % Algoritmus meghívása
    x_sol = gauss(A, b);
    
    % Ellenőrzés a pontos elméleti értékkel ([2; 3; -1])
    x_exact = [2; 3; -1];
    fprintf('\nEllenőrzés:\n');
    fprintf('  Számított megoldás:  [%s]\n', num2str(x_sol'));
    fprintf('  Elméleti megoldás:  [%s]\n', num2str(x_exact'));
    fprintf('  Maximális eltérés:   %e\n', norm(x_sol - x_exact, inf));
end