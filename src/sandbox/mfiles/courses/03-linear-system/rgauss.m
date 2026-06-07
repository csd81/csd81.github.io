function x = rgauss(A, b)
% RGAUSS  Lineáris egyenletrendszer megoldása Gauss-eliminációval, részleges főelemkiválasztással.
%   x = rgauss(A, b)
%   A: Együttható-mátrix (n x n)
%   b: Jobb oldali oszlopvektor (n x 1)
%   x: A számított megoldásvektor (n x 1)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        x_demo = rgauss_demo();
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
    
    disp('0. lépés (Kezdeti kibővített mátrix):');
    disp(A)
    
    % --- 1. Egyenes elimináció részleges főelemkiválasztással ---
    for k = 1:n-1
        % Főelem keresése az aktuális oszlopban a főátló alatt (k-tól n-ig)
        [~, maxindex] = max(abs(A(k:n, k)));
        
        % Ha a maximális elem nem a k-adik sorban van, akkor sorcsere szükséges
        if maxindex > 1
            sorindex = maxindex + k - 1;
            sor = A(sorindex, :);
            A(sorindex, :) = A(k, :);
            A(k, :) = sor;
            fprintf('A(z) %d. és %d. sor cseréje (főelem-kiemelés):\n', k, sorindex);
            disp(A)
        end
        
        % Eliminációs lépés az aktuális főelem alatt
        for i = k+1:n
            if A(k,k) == 0
                error('Nem hajtható végre az elimináció: a főelem nulla a(z) %d. oszlopban!', k);
            end
            
            l = A(i,k) / A(k,k);
            A(i, :) = A(i, :) - l * A(k, :);
        end
        fprintf('A(z) %d. eliminációs lépés után:\n', k);
        disp(A)
    end
    
    % --- 2. Konzisztencia ellenőrzése és visszahelyettesítés ---
    x = zeros(n, 1);
    
    if A(n,n) == 0 && A(n, n+1) ~= 0
        error('Nincs megoldás! (Az egyenletrendszer ellentmondásos)');
    elseif A(n,n) == 0 && A(n, n+1) == 0
        % Végtelen sok megoldás esete: az utolsó változót szabadon megválasztjuk 1-nek
        warning('Az egyenletrendszer alulhatározott (végtelen sok megoldás). x(n) = 1-nek választva.');
        x(n) = 1;
    else
        % Egyértelmű megoldás esete
        x(n) = A(n, n+1) / A(n, n);
    end
    
    % Visszahelyettesítési ciklus a korábbi pontok kiszámítására
    for i = n-1:-1:1
        x(i) = A(i, n+1);
        for j = i+1:n
            x(i) = x(i) - A(i, j) * x(j);
        end
        x(i) = x(i) / A(i, i);
    end
    
    disp('A megoldás:')
    disp(x')
end

% --- Helyi függvény a demó futtatásához ---
function x_sol = rgauss_demo()
    clc;
    fprintf('=== Gauss-elimináció Részleges Főelemkiválasztással Teszt ===\n\n');

    % Olyan tesztmátrix, ahol a sima Gauss elakadna (A(1,1) = 0 miatt),
    % de a sorcserével tökéletesen megoldhatóvá válik.
    A = [ 0  2  1; 
          1 -2 -3; 
         -1  1  2]; 
    b = [5; -4; 3];
    
    fprintf('Kiinduló együttható-mátrix (A) - figyeljük meg a bal felső 0-t:\n');
    disp(A);
    fprintf('Jobb oldali vektor (b):\n');
    disp(b);

    % Algoritmus meghívása
    x_sol = rgauss(A, b);
    
    % Gyári ellenőrzés a MATLAB beépített \ (backslash) operátorával
    x_builtin = A \ b;
    fprintf('Ellenőrzés a MATLAB gyári operátorával:\n');
    fprintf('  Számított megoldás:  [%s]\n', num2str(x_sol'));
    fprintf('  Gyári megoldás:      [%s]\n', num2str(x_builtin'));
    fprintf('  Maximális eltérés:   %e\n', norm(x_sol - x_builtin, inf));
end