function x = GaussJordan(A, b)
% GAUSSJORDAN  Lineáris egyenletrendszer megoldása Gauss–Jordan-eliminációval.
%   x = GaussJordan(A, b)
%   A: Együttható-mátrix (n x n)
%   b: Jobb oldali oszlopvektor (n x 1)
%   x: A számított megoldásvektor (n x 1)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        x_demo = GaussJordan_demo();
        if nargout > 0, x = x_demo; end
        return;
    end

    % Dimenziók ellenőrzése
    sA = size(A);
    sb = size(b);
    if sA(1) ~= sA(2) || sA(1) ~= sb(1) || sb(2) ~= 1
        error('Nem jók a paraméterek! A mátrixnak négyzetesnek, a b-nek oszlopvektornak kell lennie.');
    end
    
    n = sA(1);
    % Kibővített mátrix létrehozása [A | b]
    A = [A, b];
    
    disp('0. lépés (Kezdeti kibővített mátrix):')
    disp(A)
    
    % --- Elimináció a főátló alatt ÉS felett ---
    for i = 1:n
        if A(i,i) == 0
            error('A(z) %d. lépésben a főátlóban 0 érték van, az elimináció leáll! (Pivotálás szükséges lenne)', i);
        end
        
        for j = 1:n
            % Minden sorból eliminálunk, kivéve az aktuális főátlóbeli (i-edik) sort
            if i ~= j
                kiv = A(j,i) / A(i,i);
                A(j,:) = A(j,:) - kiv * A(i,:);
            end
        end
        fprintf('%d. lépésben a kibővített mátrix:\n', i)
        disp(A)
    end
    
    % --- Normálás (A főátló 1-re hozása és a megoldás kinyerése) ---
    x = zeros(n, 1);
    for i = 1:n
        x(i) = A(i, n+1) / A(i, i);
        A(i, n+1) = x(i);
        A(i, i) = 1.0; % Diagnosztikai céllal a mátrixot is egységmátrixszá alakítjuk
    end
    
    fprintf('A megoldás az alábbi transzformált mátrixból olvasható ki:\n')
    disp(A)
    
    fprintf('A megoldásvektor (x):\n')
    disp(x)
end

% --- Helyi függvény a demó futtatásához ---
function x_sol = GaussJordan_demo()
    clc;
    fprintf('=== Gauss–Jordan-elimináció Teszt ===\n\n');

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
    x_sol = GaussJordan(A, b);
    
    % Ellenőrzés a pontos elméleti értékkel ([2; 3; -1])
    x_exact = [2; 3; -1];
    fprintf('Ellenőrzés:\n');
    fprintf('  Számított megoldás:  [%s]\n', num2str(x_sol'));
    fprintf('  Elméleti megoldás:  [%s]\n', num2str(x_exact'));
    fprintf('  Maximális eltérés:   %e\n', norm(x_sol - x_exact, inf));
end